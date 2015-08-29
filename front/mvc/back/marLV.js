
MLV=function(){$.x()

    /*

     A LayoutView is a hybrid of an ItemView and a collection of Region objects. They
     are ideal for rendering application layouts with multiple sub-regions
     managed by specified region managers.

     A layoutView can also act as a composite-view to aggregate multiple
     views and sub-application areas of the screen allowing applications to
     attach multiple region managers to dynamically rendered HTML.

     You can create complex views by nesting layoutView managers within Regions.

     For a more in-depth discussion on LayoutViews, see the blog post
     Manage Layouts And Nested Views With Backbone.Ma

     Please see
     the Ma.ItemView documentation
     for more information on available features and functionality.

     Additionally, interactions with Ma.Region
     will provide features such as onShow callbacks, etc. Please see
     the Region documentation for more information.

     Documentation Index

     Basic Usage
     Region Options
     LayoutView.childEvents
     Specifying Regions As A Function
     Overriding the default RegionManager
     Region Availability
     Re-Rendering A LayoutView
     Avoid Re-Rendering The Entire LayoutView
     Nested LayoutViews And Views
     Efficient Nested View Structures
     Use of the attach Event
     Destroying A LayoutView
     Custom Region Class
     Adding And Removing Regions
     Region Naming
     Basic Usage

     The LayoutView extends directly from ItemView and adds the ability
     to specify regions which become Region instances that are attached
     to the layoutView.

     <script id="layout-view-template" type="text/template">
     <section>
     <navigation id="menu">...</navigation>
     <article id="content">...</article>
     </section>
     </script>
     var AppLayoutView = Backbone.Ma.LayoutView.extend({
     template: "#layout-view-template",

     regions: {
     menu: "#menu",
     content: "#content"
     }
     });

     var layoutView = new AppLayoutView();
     layoutView.render();
     Once you've rendered the layoutView, you now have direct access
     to all of the specified regions as region managers.

     layoutView.getRegion('menu').show(new MenuView());

     layoutView.getRegion('content').show(new MainContentView());
     There are also helpful shortcuts for more concise syntax.

     layoutView.showChildView('menu', new MenuView());

     layoutView.showChildView('content', new MainContentView());
     Region Options

     A LayoutView can take a regions hash that allows you to specify regions per LayoutView instance.
     */
    new Ma.LayoutView({
        regions: {
            "cat": ".doge",
            "wow": {
                selector: ".such",
                regionClass: Coin
            }
        }
    })
    /*


     LayoutView childEvents

     You can specify a childEvents hash or method which allows you to capture all
     bubbling childEvents without having to manually set bindings.

     The keys of the hash can either be a function or a string
     that is the name of a method on the layout view.

     The function is called in the context of the view. The first parameter is
     the child view, which emitted the event, the remainder are the arguments
     associated with the event.

     // childEvents can be specified as a hash...

     // This callback will be called whenever a child is rendered or emits a `render` event
     */

    MyLayoutView = Ma.LayoutView.extend({

        childEvents:
        {render: function(childView) {$l("a childView has been rendered") }}

    })

    // ...or as a function that returns a hash.


    MyLayoutView = Ma.LayoutView.extend({     childEvents: function() {return {render: this.onChildRender}}, onChildRender: function(childView) {}})



    // This also works for custom events that you might fire on your child views.
    // The child view fires a custom event, `show:message`






    ChildView = new Ma.ItemView.extend({events: {'click .button': 'showMessage'},

        showMessage: function (e) {$l('The button was clicked.'); this.triggerMethod('show:message', msg)}})

    // The parent uses childEvents to catch that custom event on the child view
    ParentView = new Ma.LayoutView.extend({
        childEvents: {'show:message': function (childView, msg) {$l('The show:message event bubbled up to the parent.')}},

        // Alternatively we can use the trigger notation with childview: as the
        // prefix

        onChildviewShowMessage: function (childView, msg) {$l('The show:message event bubbled up to the parent.')}})
    /*
     Specifying Regions As A Function

     Regions can be specified on a LayoutView using a function that returns
     an object with the region definitions. The returned object follow the
     same rules for defining a region, as outlined above.
     */
    Ma.LayoutView.extend({regions: function(options){return { fooRegion: "#foo-element"  } }, })
    /*
     Note that the function receives the view's options arguments that
     were passed in to the view's constructor. this.options is not yet
     available when the regions are first initialized, so the options
     must be accessed through this parameter.

     Overriding the default RegionManager

     If you need the RegionManager's class chosen dynamically, specify getRegionManager:
     */
    Ma.LayoutView.extend({
        // ...

        getRegionManager: function () {return new MyRegionManager()}
        // custom logic

    })

    /*
     This can be useful if you want to attach LayoutView's regions to your own instance of
     RegionManager.

     Region Availability

     Any defined regions within a layoutView will be available to the
     View or any calling code immediately after instantiating the
     View. This allows a View to be attached to an existing
     DOM element in an HTML page, without the need to call a render
     method or anything else, to create the regions.

     However, a region will only be able to populate itself if the
     View has access to the elements specified within the region
     definitions. That is, if your view has not yet rendered, your
     regions may not be able to find the element that you've
     specified for them to manage. In that scenario, using the
     region will result in no changes to the DOM.

     Re-Rendering A LayoutView

     A layoutView can be rendered as many times as needed, but renders
     after the first one behave differently than the initial render.

     The first time a layoutView is rendered, nothing special happens. It just
     delegates to the ItemView prototype to do the render. After the
     first render has happened, though, the render function is modified to
     account for re-rendering with regions in the layoutView.

     After the first render, all subsequent renders will force every
     region to be emptied by calling the empty method on them. This will
     force every view in the region, and sub-views if any, to be destroyed
     as well. Once the regions are emptied, the regions will also be
     reset so that they are no longer referencing the element of the previous
     layoutView render.

     Then after the layoutView is finished re-rendering itself,
     showing a view in the layoutView's regions will cause the regions to attach
     themselves to the new elements in the layoutView.

     Avoid Re-Rendering The Entire LayoutView

     There are times when re-rendering the entire layoutView is necessary. However,
     due to the behavior described above, this can cause a large amount of
     work to be needed in order to fully restore the layoutView and all of the
     views that the layoutView is displaying.

     Therefore, it is suggested that you avoid re-rendering the entire
     layoutView unless absolutely necessary. Instead, if you are binding the
     layoutView's template to a model and need to update portions of the layoutView,
     you should listen to the model's "change" events and only update the
     necessary DOM elements.

     Nested LayoutViews And Views

     Since the LayoutView extends directly from ItemView, it
     has all of the core functionality of an item view. This includes
     the methods necessary to be shown within an existing region manager.

     In the following example, we will use the Application's Regions
     as the base of a deeply nested view structure.

     // Create an Application
     */

    MyApp = new Ma.Application();

    // Add a region
    MyApp.addRegions({ main: "main" })

    // Create a new LayoutView
    layoutView = new Ma.LayoutView({
        // This option removes the layoutView from
        // the DOM before destroying the children
        // preventing repaints as each option is removed.
        // However, it makes it difficult to do close animations
        // for a child view (false by default)

        destroyImmediate: true })

    // Lastly, show the LayoutView in the App's mainRegion

    MyApp.getRegion('main').show(layoutView);

    /*
     You can nest LayoutViews as deeply as you want. This provides for a well organized,
     nested view structure.

     For example, to nest 3 layouts:
     */
    layout1 = new Layout1()
    layout2 = new Layout2()
    layout3 = new Layout3()

    MyApp.getRegion('main').show(layout1)

    layout1.showChildView('region1', layout2)
    layout2.showChildView('region2', layout3)

    /*
     Efficient Nested View Structures

     The above example works great, but it causes three separate paints: one for each layout that's being
     shown. Ma provides a simple mechanism to infinitely nest views in a single paint: just render all
     of the children in the onBeforeShow callback.

     */
    ParentLayout = Ma.LayoutView.extend({
        onBeforeShow: function() {
            this.showChildView('header', new HeaderView());
            this.showChildView('footer', new FooterView());
        }
    })

    myRegion.show(new ParentLayout());

    /*


     In this example, the doubly-nested view structure will be rendered in a single paint.

     This system is recursive, so it works for any deeply nested structure. The child views
     you show can render their own child views within their onBeforeShow callbacks!

     Use of the attach event

     Often times you need to know when your views in the view tree have been attached to the document,
     like when using certain jQuery plugins. The attach event, and associated onAttach callback, are perfect for this
     use case. Start with a Region that's a child of the document and show any LayoutView in it: every view in the tree
     (including the parent LayoutView) will have the attach event triggered on it when they have been
     attached to the document.

     Note that inefficient tree rendering will cause the attach event to be fired multiple times. This
     situation can occur if you render the children views after the parent has been rendered, such as using
     onShow to render children. As a rule of thumb, most of the time you'll want to render any nested views in
     the onBeforeShow callback.

     Destroying A LayoutView

     When you are finished with a layoutView, you can call the
     destroy method on it. This will ensure that all of the region managers
     within the layoutView are destroyed correctly, which in turn
     ensures all of the views shown within the regions are destroyed correctly.

     If you are showing a layoutView within a parent region manager, replacing
     the layoutView with another view or another layoutView will destroy the current
     one, the same it will destroy a view.

     All of this ensures that layoutViews and the views that they
     contain are cleaned up correctly.

     When calling destroy on a layoutView, the layoutView will be returned. This can be useful for
     chaining.

     Custom Region Class

     If you have the need to replace the Region with a region class of
     your own implementation, you can specify an alternate class to use
     with the regionClass property of the LayoutView.
     */
    MyLayoutView = Backbone.Ma.LayoutView.extend({ regionClass: 'SomeCustomRegion' })

    // You can also specify custom Region classes for each region:


    AppLayoutView = Ma.LayoutView.extend({
        template: "#layout-view-template",
        regionClass: 'SomeDefaultCustomRegion',
        regions: {
            menu: {selector: "#menu", regionClass: 'CustomRegionClassReference'},
            content: {selector: "#content", regionClass: 'CustomRegionClass2Reference'
            }}})

    /*
     Adding And Removing Regions

     Regions can be added and removed as needed, in a
     LayoutView instance. Use the following methods:

     addRegion
     addRegions
     removeRegion
     addRegion:

     var layoutView = new MyLayoutView();

     // ...

     layoutView.addRegion("foo", "#foo");
     layoutView.getRegion('foo').show(new someView());
     addRegions:

     var layoutView = new MyLayoutView();

     // ...

     // Object literal

     */

    layoutView.addRegions({ foo: "#foo", bar: "#bar"  })

    // Or, function that returns an object literal
    layoutView.addRegions(function() {return {baz: "#baz", quux: "#quux" }})

    // removeRegions

    layoutView = new MyLayoutView();




    layoutView.removeRegion("foo")

    /*
     Any region can be removed, whether it was defined
     in the regions attribute of the region definition,
     or added later.

     For more information on using these methods, see
     the regionManager documentation.

     Region Naming

     A LayoutViews' Regions are attached directly to the LayoutView instance with the name of the region
     as the key and the region itself as the value. Because of this, you need to be careful
     to avoid conflicts with existing properties on the LayoutView when you name your Region.

     The prototype chain of LayoutViews is:

     Backbone.View > Ma.View > Ma.ItemView > Ma.LayoutView

     Consequently, every property on each of those Classes must be avoided as Region names. The most
     common issue people run into is trying to name their Region "attributes". Be aware
     that you are not able to do this.

     The following is an abbreviated list of other names that can't be used as Region names. For a more
     complete list refer to the API documentation for each Class on the prototype chain:

     attributes
     constructor
     regionClass
     render
     destroy
     addRegion
     addRegions
     removeRegion
     Note: this is a known issue that is flagged for being fixed in v2
     */
}


bb.Ma=bb.Marionette
bb.Ma.Ap = bb.Ma.Application
bb.Ma.Rg=bb.Ma.Region

TXLV=function(){$.x('r', 'test layoutView')
  //  a = new bb.Ma.Application
    d= $.d('b', 500, 200)
    a = new bb.Ma.Ap
    rg = new    bb.Ma.Rg(d)
    a.addRegions({
        rg1: rg
    })


    rgs = a.getRegions()
}



TXLV=function(){$.x('r', 'test layoutView')

    d= $.d('b', 500, 200)

    d1= $.d([$.h1('afsdfasdsfsfdfsd')]).hide()

    Vw  =  bb.View.extend({
        initialize: function(){$l('new view')},
        render:function(){},
        el:  d1
    })
    vw=new Vw()


    a = new bb.Ma.Ap
    rg = new    bb.Ma.Rg(d)
    a.addRegions({
        rg1: rg
    })


    rgs = a.getRegions()


    a.rg1.attachView(vw)


}



APLY=function(){

    ApL=bb.Ma.Layout.extend({

       // template:
        regions:{
            menu: '#menu',
            cont: '#cont'
        }
    })

    ly= new ApL()
    ly.render()
    ly.menu.show(new MenuVw())
    ly.cont.show(new MainContVw())

}



