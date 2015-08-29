//  rg bar   lets us set the prg once;


//  this.el  1el-qob
// this.ops   k/v-hash plg's ops
// $.d().prgbar({ v: 20 })



// ( fn n ~ n  you pass to $.wid() w/o nSp    "prgbar" )



//ex:  bar = $.d().prgbar({ v: 20 });  bar.prgbar( "v", 50 )



 // The option() met allows you to get and set ops after init.  // When used as a setter, the plg's,  _setOption met will be called for ea op   being set.



// For acts to perform independ  of  num  of ops changed, can override _setOptions().


PRGBAR=function(){

    $.wg( "cust.prgbar", {

        options: {   v: 0   },

        _create: function() {this.element.K( "prgbar" )
            .text(   this.options.v + "%")     },

        v:v, _cap: cap
    })
    $.wg( "cust.prgbar", {_options: {v: 0 },
        _create: create,
        _setOption: setOption,
        _setOptions: setOptions,
        refresh: refresh,
        _cap: cap,
        _destroy: destroy

    })



//add cbs so users can react when the state of your plg changes.
    // add  cb to  prgs bar to signfy prg   100%


    // The _trigger() met takes 3pams: cb n,  $ vob that initd the cb, and hash of data relev  to  ev.
    // The cb n  is the only req pam, but  others   useful

    //Cb fns  just addtonl ops,  you can g/s them just like any other op .
    // When    cb  execd, a correspg ev is trgd as well. ev ty  is determd by concatg   plg n + cb n
    // cb and ev both receive the same two pams:  vob,  hash of data relevant to the ev,
    //your plg may have fnly you want to be user-preventble.  best way to support this is  crg cancble cbs.
    // Users can canc  cb, or its assoc  ev, same as cancg any natv ev (by callg ev.preventDefault() or retg Fa)
    // If    cb cancd, the _trigger() met rets Fa,
    // can impl  the appropr  fnly w/in your plg.
    // ex: if we were bildg  dgn plg,   could pass the mm ev when trgg a drag cb;
    // users can react to the drag based on  x/y coords  providd by vob.
    // Note that the orig ev passed to _trigger() must be a $ ev, not a native bw ev.




    bar = $.d().prgbar({
        complete: function (ev, dat) {$l("Cbs are great!") }
    })


    bar.bind("prgbarcomplete", function (ev, data) {
            $l("Events bubble and support many handlers for extreme flexibility.");
            $l("progress %: "+data.v)
        }
    )


    bar.prgbar("option", "v", 100)

    //DATA
    //  When plg inst crtd,  its stored on orig DOMel using $.data ( key:plgN)
    //  B/c plg inst is drctly linked to the DOM el, you can access the plg inst drctly . instead of going through the exposed plg met
    //- allows you to call mets drctly on the plg inst, instead of passing met names as strings
    //-  also gives you dirc access to the plg's pops.

    bar = $.d().prgbar().data( "cust-prgbar" );
    bar.option( "v", 50 ); // Call a met drctly on the plg inst.
    $l( bar.ops.v ); // Access pops on the plg inst.
//You can also create an inst without going through the plg met,
// by calling the constr drctly,with the ops and element g's:
    bar = $.cust.prgbar( {}, $.d()); $l( bar.ops.v ) // Same result as before.

// Extending a Plugin's Prototype,
// modify the bh of all insts of our plg.

    $.cust.prgbar.prototype.reset = function() { this._setOption( "v", 0 ) }  //  add a met to our prg bar   to reset the prg to 0%





    /*  In some cases, it will make sense to allow users to apply
     and then ltr unapply your plg.
     You can accomplish this via the _destroy() met.
     W/in _destroy() met,  undo anything your plg   may have done dur  init|ltr use.
     _destroy() calld by destroy() met, auto-called if plg-inst-el is rmd,
     (can be used for gb-cl)
     That base destroy() met   handles some gen  cleanup ops,
     ( rmg the inst ref from the wid's DOM el)
     unbinding all evs in (wid's el-nspaced|_bind()-added-evs)    */

// $ contains the fn.extend() met,
//  simple plg that just adds captions to images      captr
//  so we'll also need a page, with a bunch of images on it, to develop/test the plg with.


}




function setOptions(o) {this._super(o); this.refresh() }

function setOption(k, v) {if (k === "v") {v = this._cap(v)}; this._super(k, v) }






function create () { this.q.K("prgbar")

    this.o.v = this._cap( this.ops.v )
    this.refresh()
}


function refresh () {
    this.q.T(this.o.v + "%");
    if (this.o.v == 100) {  this._trg("complete", null, {v: 100})  }
}


function v(v) {
    var wg=this, q=wg.element, ops = wg.options
    if (U(v)) {return ops.v}
    ops.v = this._cap(v)
    q.text(ops.v + "%")
}


function destroy() {
    this.element.xK( "prgbar" ).T('')
}



function cap (v) {
    if (v > 100) {v = 100 }
    if (v < 0) {v = 0}
    return v
}