bb.Ev.trg=bb.Ev.trigger
_.cl= _.clone

 /*
Events is a module that can be mixed in to any object,
    giving the object the ability to bind and trigger custom named events.
    Events do not have to be declared before they are bound,
    and may take passed arguments.
*/



 _.x( ob= {}, bb.Ev )

//Bind a cb fn to an ob.
// The cb will be invoked whenev  the ev  is fired.
// If you have a large num  of dif  evs on a page,
// the convention is to use colons to nspace them:
// "poll:start", or "change:selection".
// The ev str  may also be a sp-delim  ls of sev  evs...
book.on("change:title change:author",
    '...')

ob.on("alert", function(msg) { alert("Triggered " + msg) })
ob.trg("alert", "an event")


// For example, to make a handy event dispatcher that can coordinate events
// among different areas of your application:


dispatcher = _.cl(bb.Ev)
//To supply a context value for this when the callback is invoked,
// pass the optional third argument: model.on('change', this.render, this)

ob.on(ev, fn, [ctx]) // Alias: bind

//Callbacks bound to the special "all" event will be triggered
// when any event occurs, and are passed the name of the event as the first argument. For example, to proxy all events from one ob to another:


proxy.on("all", function(evN) {  ob.trg(evN)  })

//All Backbone event methods also support an event map syntax, as an alternative to positional arguments:

book.on({
        "change:title": titleView.update,
        "change:author": authorPane.update,
        "destroy": bookView.remove
    })


 ob.off([ev], [fn], [ctx]) //Alias: unbind

//Remove a previously-bound callback function from an ob. If no context is specified, all of the versions of the callback with different contexts will be removed. If no callback is specified, all callbacks for the event will be removed. If no event is specified, callbacks for all events will be removed.


ob.off("change", onChange) // Removes just the `onChange` callback.
ob.off("change") // Removes all "change" callbacks.

ob.off(null, onChange) // Removes the `onChange` callback for all events.
ob.off(null, null, context) // Removes all callbacks for `context` for all events.

ob.off()// Removes all callbacks on `ob`.



//Note that calling model.off(),
// for example, will indeed remove all events on the model
// — including events that Backbone uses for internal bookkeeping.

   ob.trg(ev, ['*g'])

//Trigger callbacks for the given event,
// or space-delimited list of events.
// Subsequent arguments to trigger will be passed along to the event callbacks.


 ob.once(ev, fn, [ctx])
 //Just like on, but causes the bound cbto fire 1x, then rm-ed
 // note: When mult  evs are passed in using the space separated syntax, the ev  will fire once for every ev  you passed in, not once for a combination of all events


ob.listenTo(oth, ev, fn)

//Tell an ob to listen to a particular ev  on an other ob.
// The advantage of using this form,
// instead of other.on(ev, cb, ob),
// is that l2 allows the ob to keep track of the evs,
// and they can be rm-ed all at once later on.
// The cb will always be called with ob as ctx

v.l2(md, 'change', vw.render )




//Tell an ob to stop listening to evs.
// Either call stopListening with no args
//  to have the ob rm all   its registered cbs     v.stopListening()
// or be more precise by telling it
//       to rm just the evs it's listening to on a specific ob,   v.stopListening(md)
//         or a specific ev,
//         or just a specific cb    ob.stopListening([oth], [ev], [fn])







ob.listenToOnce(oth, ev, fn)

 // Just like listenTo, but causes the bound callback to fire only once before being removed.


 /*

  bb ob itself mixes in Evs,  can be used to emit   glob  evs

  list  bb evs:

  "change" (md, opts) —  md's attrs  changed.
  "change: [attribute]" (md, val , opts) —   spec  attr  updated.
  "destroy" (md, cl, ops) —  md  destroyed.
  "invalid" (md, error, ops) —   md's validation fails on the client.



"add" (md, cl, ops) —   md   added to a cl
"remove" (md, cl, ops) —   md   removed from a cl.
"update" (cl, ops) — single ev  trgd after any num of mds have been added or removed from a cl



"reset" (cl, ops) —   cl's entire contents  replaced.
"sort" (cl, ops) —  cl h  re-sorted.






"route:[name]" (params) — Fired by  rtr: when a spec  rt is matched.
"route" (route, params) — Fired by  rtr: when any rt has been matched.
"route" (rtr, rt, pams) — Fired by hist:  when any rt has been matched



  "request" (md_or_cl, xhr, ops) —   md or cl has started a rq to the srvr
  "sync" (md_or_cl, resp, ops) —     md or cl has been sucssfly synced with the srvr

  "error" (md_or_cl, resp, ops) —   md's or cl's request to the srvr has failed.


  "all" — fires for ANY trgd ev, passing the ev  n as the g[0]



*/


/*
from book



 Events
 Events arebasic inversion of control. Instead of having one fn call another by name, second fn is registered ashandler to be called when spec event occurs.

 The part of your app that has to know how to call other part of your app has been inverted.
 This is core thing that makes it possible for your business logic to not have to know about how your user interface works and is most powerful thing about bb Events system.

 Mastering evs is one of quickest ways to become more productive with bb, so let’s takecloser look at bb’s event md.

 bb.Events is mixed into other bb “classes”, including:

 bb
 bb.Md
 bb.Cl
 bb.Rt
 bb.History
 bb.Vw
 Note that bb.Events is mixed into bb object. Since bb is globally visible, it can be used assimple event bus:

 bb.on('event', fn() {$l('Handled bb event');});
 bb.trigger('event'); // logs: Handled bb event
 on(), off(), and trigger()
 bb.Events can give any object ability to bind and trigger cust evs.
 We can mix this module into any object easily and there isn’trequirement for evs to be declared before being bound tocb handler.

 Example:

 myOb = {};

 // Mixin
 _.x(myOb, bb.Events);

 // Addcust event
 myOb.on('dance', fn(msg){
 $l('We triggered ' + msg);
 });

 // Trigger cust event
 myOb.trigger('dance', 'our event');
 If you’re familiar with jQ cust evs or concept of Publish/Subscribe,
 bb.Events providessystem that is very similar with on being analogous to subscribe and trigger being similar to publish.

 on bindscb fn to object, as we’ve done with dance in above example. The cb is invoked whenever event is triggered.

 The official bb.js documentation recommends namespacing event names using colons if you end up using quitefew of these on your page. e.g.:

 myOb = {};

 // Mixin
 _.x(myOb, bb.Events);

 fn dancing (msg) { $l("We started " + msg); }

 // Add namespaced cust evs
 myOb.on("dance:tap", dancing);
 myOb.on("dance:break", dancing);

 // Trigger cust evs
 myOb.trigger("dance:tap", "tap dancing. Yeah!");
 myOb.trigger("dance:break", "break dancing. Yeah!");

 // This one triggers nothing as no listener listens for it
 myOb.trigger("dance", "break dancing. Yeah!");
 A special all event is made avail in case you would like notifications for every event that occurs on object
 (e.g., if you would like to screen evs insingle loc). The all event can be used as follows:

 myOb = {};

 // Mixin
 _.x(myOb, bb.Events);

 fn dancing (msg) { $l("We started " + msg); }
 myOb.on("all", fn(eventName){  $l("The name of event passed was " + eventName) });

 // This time each event will be caught withcatch 'all' event listener
 myOb.trigger("dance:tap", "tap dancing. Yeah!");
 myOb.trigger("dance:break", "break dancing. Yeah!");
 myOb.trigger("dance", "break dancing. Yeah!");
 off rms cb fns that were prevly bound to object. Going back to our Publish/Subscribe comparison, think of it as unsubscribe for cust evs.

 To rm dance event we prevly bound to myOb, we would simply do:

 myOb = {};

 // Mixin
 _.x(myOb, bb.Events);

 fn dancing (msg) { $l("We " + msg); }

 // Add namespaced cust evs
 myOb.on("dance:tap", dancing);  myOb.on("dance:break", dancing);

 // Trigger cust evs. Each will be caught and acted upon.
 myOb.trigger("dance:tap", "started tap dancing. Yeah!");
 myOb.trigger("dance:break", "started break dancing. Yeah!");



 myOb.off("dance:tap");// Removes event bound to object

 // Trigger cust evs again, but one is logged.
 myOb.trigger("dance:tap", "stopped tap dancing."); // won't be logged as it's not listened for
 myOb.trigger("dance:break", "break dancing. Yeah!");
 To rm all cbs for event we pass event name (e.g., move)
 to off() met on object event is bound to.

 If we wish to rm spec cb, we can pass that cb as second parameter:

 myOb = {};  _.x(myOb, bb.Events);

 fn dancing(msg){$l("We dancing. " + msg); }
 fn jumping(msg){$l("We jumping. " + msg); }

 // Add two listeners to same event
 myOb.on("move", dancing);
 myOb.on("move", jumping);

 // Trigger evs. Both listeners are called.
 myOb.trigger("move", "Yeah!");

 // Removes spec listener
 myOb.off("move", dancing);

 // Trigger evs again. One listener left.
 myOb.trigger("move", "Yeah, jump, jump!");
 Finally, as we have seen in our prev examples, trigger triggerscb forspec event (orspace-separated list of evs). e.g.:

 myOb = {}; _.x(myOb, bb.Events);

 fn doAction(msg){$l("We "+msg)}


 myOb.on("dance", doAction); myOb.on("jump", doAction); myOb.on("skip", doAction)
 myOb.trigger("dance", 'just dancing.');

 // Multiple evs
 myOb.trigger("dance jump skip", 'very tired from so much action.');
 trigger can pass multiple arguments to cb fn:

 myOb = {}; _.x(myOb, bb.Events);

 fn doAction(action, duration) {  $l("We are " + action + ' for ' + duration )}

 // Add event listeners
 myOb.on("dance", doAction);myOb.on("jump", doAction); myOb.on("skip", doAction);

 // Passing multiple arguments to single event
 myOb.trigger("dance", 'dancing', "5 minutes");

 // Passing multiple arguments to multiple evs
 myOb.trigger("dance jump skip", 'on fire', "15 minutes");
 l2() and stopListening()
 While on() and off() add cbs directly to observed object, l2() tells object to listen for evs on another object,
 allowing listener to keep track of evs for which it is listening. stopListening() can subsequently be called on listener to tell it to stop listening for evs:

 a = _.x({}, bb.Events); b = _.x({}, bb.Events); c = _.x({}, bb.Events);

 // add listeners to A for evs on B and C
 a.l2(b, 'anything', fn(e){ $l("anything")});
 a.l2(c, 'everything', fn(e){ $l("everything"); });

 // trigger event
 b.trigger('anything'); // logs: anything happened

 // stop listening
 a.stopListening();

 // A does not receive these evs
 b.trigger('anything'); c.trigger('everything');
 stopListening() can also be used to selectively stop listening based on event, md, or cb handler.

 If you use on and off and rm views and their corresponding mds at same time, there are generally no problems.
 Butproblem arises when you rmview that had registered to be notified about evs onmd, but you don’t rm md or call off to rm view’s event handler.
 Since md hasreference to view’s cb fn, JavaScript garbage collector cannot rm view from memory. This is called“ghost view” and isform of memory leak
 which is common since mds generally tend to outlive corresponding views during app’s lifecycle. For details on topic andsol, check this excellent article by Derick Bailey.

 Practically, every on called on object also requires off to be called in order for garbage collector to do its job. l2() changes that,
 allowing Vws to bind to Md notifications and unbind from all of them with just one call - stopListening().

 The default impl of Vw.rm() makescall to stopListening(), ensuring that any listeners bound using l2() are unbound before view is destroyed.

 view = new bb.Vw(); b = _.x({}, bb.Events);

 view.l2(b, 'all', fn(){ $l(true); });
 b.trigger('anything');  // logs: true

 view.l2(b, 'all', fn(){ $l(false); });
 view.rm(); // stopListening() implicitly called
 b.trigger('anything');  // does not log anything


 Events and Vws
 WithinVw, there are two types of evs you can listen for: DOM evs and evs triggered using Event API.
 It is important to understand difs in how views bind to these evs and context in which their cbs are invoked.

 DOM evs can be bound to using Vw’s evs property or using jQ.on().
 Within cbs bound using evs property, this refers to Vw object;
 whereas any cbs bound directly using jQ will have this set to handling DOM el by jQ.
 All DOM event cbs are passed event object by jQ. See delegateEvents() in bb documentation for additional details.

 Event API evs are bound as described in this section.
 If event is bound using on() on observed object,context parameter can be passed as third argument.
 If event is bound using l2() then within cb this refers to listener.
 The arguments passed to Event API cbs depends on type of event.
 See Catalog of Events in bb documentation for details.

 The following example illustrates these difs:

 <div id="td">
 <input type='checkbox' />
 </div>

 Vw = bb.V.x({    el: '#td',
 ev: {'click [type="checkbox"]': '$d' }, // bind DOM ev using evs pop

 i: fn(){this.q.$(this.jq$d); this.on('apiEvent', this.cb) },  // bind to DOM event using jQ // bind to API event

 $d: fn(ev){$l("evs handler for " + this.q.oh());  this.trigger('apiEvent', ev.type)    },    // 'this' is view
 jq$d: fn(ev) { $l("jQ handler for " + this.outerHTML)   }, // 'this' is handling DOM el
 cb: fn(evTy){$l("ev ty: "+evTy)}
 })


 view = new Vw()

 */