//http://wiki.jqueryui.com/w/page/12138135/Widget%20factory
$.fn.iA= $.fn.insertAfter
$.fn.ea = $.fn.each



// The object literal should contain
// default options
// _create,    _setOption    _destroy


 $.wj( "demo.multi", {
 options: { clear: null  },
 _create: function() {  },
 // Use the _setOption method to respond to changes to options
 _setOption: function( k, v ) {switch( k ) {case "clear":  break;}
  this._super( "_setOption", k, v ) } })




 /*
  enhance  <select multiple>,
  one might have to iterate over the <option>s
  in the select to create a corresponding <li>
   in a proxy <ul>.
*/

 _create= function(){var self = this, q=this.element

  self.list = $.ul().iA(q)

  q.hd().fi("option").ea(function (i, el) {var q=$(el),
      li=$.li().K('multi-option-item')
      li.A(q.t()).$(function(){$l(q.v())})
      li.a2(self.list)
  })

 }


// Unfortunately, leaving this code in  _create makes it diff to
// 1) manage the relationship btwn   orig <option> els  and  list items,
 // 2)  reflect  state of <option> els added/removed from orig <select>  after   instant

 // Instead,   build a refresh met (invoked   from _create)for dealing with this linkage,

 //  also keep  click-handling logic  on the list items separate,
 // and  use ev  delegation  to avoid  binding NEW handlers when list items are created.


a={
    _create: function () {var wg=this, q=wg.element
        wg.list = $("<ul>").iA(q).delegate("li.multi-option-item",   "click",  $.proxy(wg_itemClick, wg))
        q.hd()
        wg.refresh() },
    refresh: function () {var wg=this, q=wg.element  //     Keep track of the generated list items  // Use a class to avoid working on options that have already been created
        wg.items = wg.items || $()
        q.fi("option:not(.demo-multi-option)").ea($.proxy(function (i, el) {var q = $(el)
             q.K("demo-multi-option")  // Add k so option !processed next time list  refreshed
             wg.items.add(
                 $.li().a2(this.list)
                     .K('multi-option-item').A( q.t() )
                     .data("option.multi", el) // Save it into the item cache
             )
         }, wg) ) // If this li's assocd-opt !contained by selEl anymore, // rm it from list/cache
        wg.items = wg.items.filter($.proxy(function (i, item) {var inOrig, wg=this, q= wg.element, el =q[0]
                inOrig  = $.contains(el, $.data(item, "option.multi") )
                if(!inOrig){$(item).rm()}
                return inOrig}, wg)) },
    _itemClick: function (ev) {$l($(ev.target).v())}
}



$.cts = $.contains // ??




// When ref  to the actual wg inst  is acquired via .data(),
// its PRIVATE mets can be invoked directly:
// $( "#something" ).data( "multi" )._create().


// *** OK, SO user will be changing the select element..

// The refresh example is a case in point:
// Since the user will be the one manipug els in the orig  <select>,
// we must provide the facility for him to update the proxy.
// On the other hand, a plumbing function to
// handle input on the proxy els the wg creates,
// like the _itemClick method, is only for internal use


 pops=function(){

 // this.element-  el (always 1)  used to instantiate   plugin.
 // this.options  ops curr  used for plugin config    // On instant, user-provided-ops are MERGED with df vals   defined in $.demo.multi.prototype.options.
 // this.namespace    The namespace the plugin lives in (  "demo" ) -usually not needed
 // this.name   name of the plugin( "multi  ) " -only Slightly more useful than this.namespace!


 // this.widgetEventPrefix     dets how to name evs assocd w plgn cbs


 // when the  dlg's close cb  execd, -> dlg close ev triggered.

 //    ev  name =  ev prefix(df = widget name) +  cb name



 //ex, when a user starts dragging el, we want ev name to be  dragstart,  !draggablestart,   // so we override ev-prefix to be "drag". // If  cb name == event prefix, ev  name !prefixed (prevents ev name like dragdrag)



 // this.widgetBaseClass
 // -useful for building class names to use on els within your widget.
 // ex:    mark an el  active ->   .K( "demo-multi-active" ) <- el.K( this.widgetBaseClass + "-active" )
 // - more for use inside the wgFac & abstract plugins ($.ui.mouse)
}; pops()

mets=function() {



    // _create (extend):  setup * related to your widget, (create els, bind  evs.), run ONCE, post-instant


    // _init: ***
    //  invoked when wg  invoked w  0 args | 1 ops arg
    // ( first invoc -> called AFTER  _create).
    // o/w  handle   RE-INIT  // without forcing the user to perform a destroy->create cycle. ****


    // destroy extend! ( provides start point):

    // destroys plugin, cleans up (rms ks, unbind evs, destroy els...

// option (dont modify): get/set ops post-instant, sig ~ .css()/attr(), calls _setOptions internally

// _setOptions (dont modify):  internal util  met used for setting ops after instant, calls _setOption internally


// _setOption (can modify!): Called when a user sets an option val  via the option met
    // ex: when a dialog's title option changes, the text inside the title bar must be updated.
    // In some instances, it's necessary to compare the old and new values to determine the correct side effects.
    // In those instance, you can compare this.options[key] with value as long as you delay the call to the base _setOption until the end.
    // If you don't need to compare the old and new values, you can call the base _setOption at top of your _setOption function.


    _setOption = function (k, v) {
        var q = this, g = G(arguments)
        if (k === 'title') {
            q.titleElement.text(v)
        }
        $.Widget.prototype._setOption.apply(q, g)
    }


// _trigger:
// !! be used to execute all cbs
// The only required pam is the name of cb to execute.  All cbs also trgr evs // (see notes about this.widgetEventPrefix above).
//   may also provide evOb that reps ev that initd the process.
// ex:  drag ev is initd by mousemove ev, // so orig mousemove evOb !!(must) be passed to _trigger.
// pam3 is hash of data that will be passed as cb pam and ev handlers.- hash data should only be info relev to spec ev (!avail via the plugin API)


// enable/disable:    just calls option('disabled', false/true) // Note that you'll want to handle enable/disable, by having an if (key === "disabled") blockin your _setOption


};mets()
