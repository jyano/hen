/*  Using events like a boss



 You've been using events since you wrote your first view and got it to listen to a model's change event.

 But this chapter is about using events for
 creating a message bus
 for inter-component communication
 that will allow each piece (or module) or your app to work standalone.


 Remember the Views chapter,
  “…they should still work, as in not throw errors, when rendered on their own”
   In this chapter, we'll make the UI components interactible even,
   and insofar as they relate to other components,
   the interaction should produce no errors.


  There's a number of pubsub libraries for JavaScript out there.
  If you're using Backbone, they're all a waste of time.
   The Backbone object itself works as an event hub that your components
    (views, models, collections, etc)
     can listen on,
     and since that object will always be visible to pretty much every component you write,
      there's no reason why you'd step out of it.

 You can think of it as a global message exchange.
 You'll dump on it anything that's not of interest to an immediate module relationship.
  An immediate relationship is, for example, a view and its model.

   Now if for example your app flashes a message
   that stays visible for a few seconds every time a Book is created,
    then this flash component works a lot like an addon
    which isn't tied to the view that does the model creation,
     nor the model itself.

 You want to be able to create books without getting an error complaining
 this “flash component” doesn't exist.

 So we should set up our Book model to broadcast a message when a new one is created:

 class Book extends Backbone.Model
 initialize: ->
 @on 'change:id', ->  Backbone.trigger 'books:created', @


 The component can then go:
 class Flash extends Backbone.View
 initialize: ->
 @listenTo Backbone, 'books:created', @show



 show: (model) ->
 @model = model
 @render()
 # Display the message...
 Now think for a second about what we accomplished: we know that what Flash needs in order to work is for an event to be triggered on Backbone named books:created. That's it. Now in the course of testing this component, so long as we do that and pass an instance of Book to it (or a mock), the whole of its functionality can be specced independently of any other piece of UI.

 There are no hard rules on this, but once you start using global events a lot, it'll be a lot easier to track them if you name them properly.
 As recommended in the Events docs, you can use colons to namespace them. It's a good strategy to namespace them in a format like subject-as-plural:action, and you can forego the pluralisation if there'll never be more than one instance of the subject as far as the client-side codebase goes. So books:created, user:sign-in, and so on.



 In the previous example we used, we connected a second view-like component (Flash) to a model, but this can be used to get two views to talk to each other too.
 In Lisant, the main menu on the left hand side is a separate component to the panes it expands when the corresponding button is clicked. A cut down example of how it does it looks like this:
 class MainMenu extends Backbone.View
 template: JST['main_menu']
 events:
 'click .toggle-feeds-button': 'clickToggleFeeds'

 clickToggleFeeds: ->
 Backbone.trigger 'feeds:toggle'
 While the feeds component goes:
 class FeedsPane extends Backbone.View
 template: JST['feeds_pane']

 initialize: ->
 @listenTo Backbone, 'feeds:toggle', @toggle

 toggle: ->
 @$el.toggleClass 'visible'
 Referring to an instance of FeedsPane directly from within MainMenu would mean creating a hard reference to it, and that's not good architecture, as we'd now need them to be instanced in a specific order, as well as having their core functionality tied to each other. It'll be harder to test, and harder to refactor the more we add these hard references.
 Granted, you'll have a hard time separating everything from everything, and it's not worth it. For instance, a list element view class is used by a UI component to render a collection. It's fine for the UI component to refer to these classes directly when creating instances to render each entry. In general (not always), so long as you apply this to interactions between distinct regions of the UI, you're doing it right.
 ★ ★ ★
 You can use events to create a relationship between browser features and your app. That's in fact the right way to do it, as you want to keep your app as independent from it as possible.
 One good example is infinite scrolling. Unlike tracking a click on an element in a view's template (for which you'd use the events object), if you're scrolling the page itself as opposed to scrolling an element, the event source will be the window object, and you need it to be visible to your app.
 The best way to do it is by introducing a small module whose role is watching for the event and broadcasting it via the Backbone object. That way you can avoid tying all other views that may be interested in the event to the DOM.
 As a bonus, we can also “write” to this by getting it to it watch the Backbone object for an event which can be triggered when you want to scroll the page to a specific entry, or to the top maybe.
 # Scrolling module
 # ================

 # Object this module exports.
 Scrolling = {}

 # Element that we're tracking scrolling.
 $el = $ window

 # Trigger when this many pixels far from the bottom.
 tolerance = 40

 # Let this module listen to events.
 _.extend Scrolling, Backbone.Events

 # Tracks page scrolling and fires an event when it gets near the bottom.
 Scrolling.trackScrolling = ->
 $el.on 'scroll', _.throttle (event) =>
 body = document.body
 threshold = body.scrollHeight - window.innerHeight - tolerance
 if body.scrollTop > threshold
 Backbone.trigger 'page:scrollbottom'
 , 1000

 # Listens to an event which scrolls the page to an offset when triggered.
 Scrolling.trackScrollTo = ->
 @listenTo Backbone, 'page:scrollto', (offset) ->
 document.body.scrollTop = offset

 # Run this module by calling initialize().
 Scrolling.initialize = ->
 @trackScrolling()
 @trackScrollTo()
 This recipe goes along perfectly with the link headers pagination recipe from the Models, collections & data chapter. Say we have a list of books which we want to add infinite scrolling to. The view can then listen to the event like so:
 class BooksList extends Backbone.View
 # ...

 initialize: ->
 @listenTo Backbone, 'page:scrollbottom', @scrolledBottom

 scrolledbottom: ->
 if @collection.link?.next?
 @collection.fetch remove: no, url: @collection.link.next
 else
 # No further books to fetch, display some feedback.
 This is terrible UX but, so the point can be demonstrated,
 let's say when another user leaves a comment on a book, we want to scroll the page to it,
 and that the method getOffsetForModel magically returns the Y axis offset for a book:
 # ...

 initialize: ->
 @listenTo Backbone, 'page:scrollbottom', @scrolledBottom
 @listenTo @collection, 'comment', @commentCreated

 commentCreated: (model) ->
 offset = @getOffsetForModel model
 Backbone.trigger 'page:scrollto', offset
 We now have an event which works like a command:
  when invoked, pass an offset to it and the page will scroll to a given offset.
 Last, should we remove the Scrolling module above from the app,
 the functionality will be removed, but the app won't break per se.



 In the spirit of henceforth adding components as features in our app,
 which will only add what it can do rather than become a hard dependency,
 another such relationship can be created between
 anything that sends the browser to a different URL
 and the router.

 This pattern works if your app has only one router,
 as should be the case if you followed the advice given on the previous chapter.
 class Router extends Backbone.Router

 # ...

 initialize: ->
 @listenTo Backbone, 'router:go', @go

 # This is just a shortcut to navigate(), and it always triggers
 # the controller, which is what you'll want most of the time.
 go: (route) ->
 @navigate route, trigger: yes
 For example, views that send the user to a different page altogether can then use this event to do so.
 If a router doesn't exist because none was ever initialised by the app, nothing will happen.
 class BookListEntry extends Backbone.View
 template: JST['books/list_entry']
 events:
 'click .title': 'clickTitle'

 clickTitle: ->
 Backbone.trigger 'route:go', "/books/#{@model.id}"


 By now you should have the main idea:
  events allow you to avoid having to refer to a class/module
   from within another class/module directly (by name).

    This eliminates scenarios such as modules needing to be executed in order.
     And as a consequence,
      it lets you literally assemble the UI from pieces.


 There's a lot more you can do with this, though.
  Another idea:
  if you're using jQuery, globally trapping status codes such as 500
  and displaying an appropriate message,
   or even detecting offline/online status to provide the user with feedback.


 */


/*

Backbone 0.9.9 has included a new mechanism for managing event bindings on objects
so that you don't end up with objects that are immune to garbage collection.


It's simple to convert your views to use the new listenTo method. For every instance of:

model.on("change", changeCallback)
collection.on("reset", resetCallback)


change it to:

// model
    this.listenTo(model, "change", changeCallback);


// collection
this.listenTo(collection, "reset", resetCallback);

And with that change,
your view becomes aware of all of the object event bindings and when the view is destroyed,

it will automatically tear down those events for you in View.remove().




 One of Backbone’s great advantages is that it changes very little.
 Up until the release of 0.9.9,
 the Events mixin used throughout the library provided the bare minimum of functions
 for listening to and triggering changes in application state: dispatch to trigger an event,
  on to listen for it, and off to stop listening.

 on and off are enough to handle events.
 If a view representing a collection of items wanted to update whenever the collection changed,
 it could listen to the corresponding events using on:
*/
 // in collection view

 initialize= function () {
  this.collection.on('add', this.addItem, this)
  this.collection.on('remove', this.removeItem, this)
  this.collection.on('change', this.updateItem, this)

 }


 //It would also be a good idea to use off to clean up when the view is closed. But in doing so, a problem emerges. Since the events are being managed by the collection, the view has no direct channel for cleaning them up. Each event must either be unbound individually:

 close: function () {
 this.collection.off('add', this.addItem);
 this.collection.off('remove', this.removeItem);
 this.collection.off('change', this.updateItem);
 }

// Or, if all use the same context, with a slightly obscure cleanup-by-context call:

 close: function () { this.collection.off(null, null, this) }
// Not terrible, but an easy fix can make it a whole lot better.

// listenTo and stopListening provide the same functionality as on and off, but with a trick. Instead of defining events in terms of the object that triggers them, listenTo inverts management of the handlers to the listening object. Since the listener now knows exactly which handlers pertain to it, cleanup becomes much more straightforward.

 initialize: function () {
 this.listenTo(this.collection, 'add', this.addItem);
 this.listenTo(this.collection, 'remove', this.removeItem);
 this.listenTo(this.collection, 'change', this.updateItem) }

 close: function () {this.stopListening() }

 /*

 For practical purposes, though, this will rarely happen in a view: in its infinite wisdom,
 Backbone 0.9.9 includes a call to stopListening() in the default view remove() method.
 */

/*
 If you're triggering an event on v1 with:

 this.trigger('myEvent'); // this is v1
 then you'd have to listen to events from v1 with:

 v1.on('myEvent', this.myFunc); // this is, say, v2 here.
 The events aren't global,
  they come from specific objects
  and you have to listen to those specific objects if you want to receive their events.

 If you bind the views directly to each other,
 you'll quickly have a tangled mess where everything is directly tied to everything else.
  The usual solution is to create your own event bus:

 // Put this where ever it makes sense for your application, possibly
 // a global, possible something your your app's global namespace, ...
 var event_bus = _({}).extend(Backbone.Events);
 Then v1 would send events through the event_bus:

 event_bus.trigger('myEvent');
 and v2 would listen to the event_bus:

 this.listenTo(event_bus, 'myEvent', this.myFunc);
 I've also switched from bind to listenTo since listenTo makes it easier to prevent zombies.

 Demo: http://jsfiddle.net/ambiguous/yb9TY/
 */


/*  How To: Detect Backbone Memory Leaks


 In his article about zombie views,
 Derick Bailey did a nice job of explaining how Backbone views can remain in the JavaScript memory heap
 even after they are no longer part of the DOM.



 Using methods such as remove() and unbind()
  within a custom close method of our views will get the clean up process started,
   however, there are a few more things I recommend doing in order to safeguard against memory leaks.

 When you create a view in JavaScript,
  you’re creating DOM nodes and usually binding event listeners to them.
  When you remove these nodes from the DOM, their event listeners hold reference to them.
   As a result, the JavaScript engine will not Garbage Collect the nodes
   as long as there are references to them still in scope. I’ll give you an example.

 Note: This was written a the time of Backbone 0.9.2,
  prior to the addition of listenTo().

 Let’s start by creating a simple model.

 */

  Model = Backbone.Model.extend({ defaults: {  text: 'Zombie' } })


// Next, we’ll create a view for the model. Note the close function that removes the view from the DOM.


View = Backbone.View.extend({

 tagName: 'li',

 className: 'zombie',

 template: _.template('<%= text %>'),

 initialize: function () {
 this.model.on('change', this.render, this); // Event listener on model
 this.options.parent.on('close:all', this.close, this); // Event listener on parent
 },

 events: { 'click': 'close' },

 render: function () {
  this.$el.html( this.template( this.model.toJSON() ) )
  return this },

 close: function () {

 $l('Kill: ', this)

 this.unbind(); // Unbind all local event bindings
 this.remove(); // Remove view from DOM

 }})
 //Create and Application Level View.



  AppView = Backbone.View.extend({
   el: '#app',
   events: { 'click #add': 'addView',  'click #remove-all': 'closeAll'  },
   addView: function () {model = new Model()
  view = new View({ model: model,   parent: this // A reference to the parent view
 })


    $('#bin').append(view.render().el)},

   closeAll: function () { this.trigger('close:all') }

 })





$(function() {  var appView = new AppView() })






$.dI('app', [
 $.h1('Zombie Generator 3000'),
 $.bt('add').id('add'),
 $.bt('remove all').id('remove-all'),
 $.ol().id('bin')

])