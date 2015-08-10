$.fn.wid= $.fn.widget
$.wg = $.wid=  $.widget




//   $.wg() creates plg constr, passed ob  set as plg insts ptt (base wid functionality comes from $.Widget.ptt)

// call  $.wid() with two pams:  plg n(one level deep  nSp req), ob containing inst-ctx-bound fns- dif from jq plg :  1 ctx, !DOMel, ![ctx],// ( fn n ~ n  you pass to $.wid() w/o nSp "cust.prgbar" -> "prgbar" )
//EXTENDING IN PLACE -  Redefining Wgs  instead of creating a new wid, (pass $.wid() existing wid's name, constructor)   // - all without creating a new wid.//  can extend an existing wid's method
//  still have access to the original methods using _super()
// - all without creating a new wid.

// Extending Existing Methods    spec  a met  w    same name
// override dialog's open() method.
//  Since dialogs auto open by df "open" will be logged when this code runs.
//  When we place mets on the ptt ob, we are not actually overriding the orig  met
// - rather, we are placing new met  at a higher lvl in   ptt chain.
// Since we overrode the df bh of open(),  dialog no longer displays on  screen.
// To make the par's mets avai, the widfac provides:  _super()      _superApply()

$.wg("cust.sDlg", $.ui.dialog, {
    open: function () { $l("open"); return this._super()},
    setOption: function (k, v) {this._super(k, v); this._superApply(arguments)},
    red: function (r) {this.element.C('r')}
})



WIJ=function(){ $.x('b','wijj'); d= $.d(['i am red']); d.sDlg().sDlg('red')
     $.in(function(){d.sDlg( "close" )  }) }


SDLG=function(){$.x('g', 'sdlg')
    // Mets overridden on the ptt affect all insts of wid.
// both insts of the dlg use the same open() met


    d  =  $.d().sDlg().data( "ui-dialog" );// Retrieve the dialog's instance and store it.
    // sometimes you only need to change the bhr for a sing  inst  of the wid.  //To do this, obtain   ref  to   inst  and override the met  using  normal js
    d.close = function() { $l("close") }
    $.d().sDlg()
    $(':data(ui-dialog)').dlg( "close" ) // Select both dialogs and call close() on each of them--> "close" will only be logged once.
}





