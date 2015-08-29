


/*




 _create met  called for ea   (1+)  el that the pl met  is called on,


 access t  df  plg ops   (which are auto-overridn   if the implementer cf any of them)
 using the ops pop of the ob   we cache this in the 2nd var

 The el  that the pl  met (captr()) was called on,  which in this ex  would be an i,
 can be accessed using the el  pop of the ob.

 We store this in the 3rd var

 We use the 4th var   to store a ref  to the new cap  el, built from
 simp  <span> ( innerT  =  cur im   at-alt )

 and sev  kl ns are added to it;

 we give it the  wid  kl n
 so that it can pick up some dft sty
 from the cur  $ UI theme.

 We also give it a cust kl n   so  we can add some of our own sty




 Next we need to set some CSS pops
 we'll be using a sep stySh for some stys
 but cert  things, (C/c stys) contrlbl  via cf ops, (set   using the plg)


 capt W must mat overlyg-im W  (we  need to determ  this/ set it )
 new  sp  is injd into  pg  drctly aft  the tg im


 to size capt, it must already exist in the DOM and has CSS rules applied to it,
 such as the fS.

 append the capt  to the page 1st
 then determ its  dims(then stored in  capW, capH)

 AFT capt a2d  pg  ->   can work set the correct w, h and pS of ea capt,
 which we set using the css() met once again
 The capts  actly completely sep  from   imgs
 they are inserted drctly after ea  i  and then psd
 to appear to overlay the imgs,  aft  all,    we can't append   sp  as  ch  of   img


 This is fine,  until the bw is resized,
 //at which point the images move but the captions don't
 //because they are absolutely positioned.
 //  use   basic wn-rsz-hlr  (repss ea capt to new ps of its im )



 //  must impl  destroy  plg cleanup

 //  we need t rm the capts and unbind our window resize hlr
 //destroy: function() { this.el.N().rm(); $.wn().unbind("rsz") },
 //  $("element_caption_attached_to").captr("destroy")


 // changed a cfop pre-init //but what about after init ?
 //  done using the option met

 $("element_caption_attached_to").captr("option", "location", "top")

 // so we need to add the built-in met _setOption to handle this:




 implr uses option, not _setOptionto actually change the ops (we don't  worry about how this )
 we just need to provide this met  to deal with anything spec  to our plg.
 Because this met  exists in the wdjFc we should call the orig  met,
 which we do first of all in our met  using   wid ptt specg the met  n
 (_setOption in this case but we could do it for other built-in mets as well)
 and use apply to call it.
 We can then proceed with the code spec  to our plg.

 The fn will auto  receive two args which are the op  to changeand the new v.

 We cache some comn  used els, such as the i  and the cap , and obtain the cur  h of ea  cap.
 We then use a simp switch-case statement to handle ea
 of our 3 ops being changed.
 Repositioning the capt  is the most complex,
 but is still quite trivial and sim
 to how we positioned them init


 */




$.wj("ui.captr", {

    _create: create  ,







    _setOption: setOption,

    loc: 'b',
    C: 'b', c: 'r'

})


function setOption(o, v) { var g=G(arguments)
    $.Wid.prototype._setOption.apply( this, g )
    var el = this.el, cap = el.N(),capH = cap.oH()-cap.pdT()+cap.pdB()
    switch (o) {
        case "loc":v==="top"?cap.t( el.oh().t): cap.t( el.oh().top + el.h() - capH); break;
        case "C": el.N().col( v);break;
        case "c":el.N().col( v); break; } }
function create() {

    //    maj  of  init  met is a series of vars;
    //  w/in our fn,  'this' -> ob passed into  met (inst of  plg)
    //  1st var  caches  ref   to  cur  inst  of   plg
    //  cr init  fn,  aft   ops ob

    var self = this,
        o = self.ops,
        el = self.element,
        cap = $.sp().T( el.at("alt") ).K("ui-wid ui-caption")
            .css({  C: o.C,   c: o.c,   w: el.W()  }).iA(el),
        capW  = el.W() - cap.pdL()  -  cap.pdR() ,
        capH  = cap.oH() - cap.pdT() + cap.pdB()

    cap.W( capW)
        .top(o.loc=== "top" ? el.os().t : el.os().top +  el.H() - capH)
        .left( el.os().l)
        .s('ds', "b")

    $.wn().rsz(function(){
        cap
            .top( o.loc  === "top"  ? el.os().t  : el.os().t + el.H() - capH)
            .left( el.os().l )
    })


}

  //   just three images on the page



 $("el").captr({

     loc: 't',
     added: function(e, ui){   }

 })







//evs   It's import  to add evs that devs using your plg can add cbs for
// so that they can react to diff  things hapng when users itx w   wid
// we could still trigger an ev after ea capt   added to  pg   drctly before the resize evH: self._trigger("added", null, cap)
// pams:  ev-n, t-vob ,  capt-el-ref
// That's all! we have a cust  ev   that can be reacted to.
// The wdjFc will auto  pass the vob  and   data we pass in 3rd pam to cb fn that uses the added ev  dev could hook into   ev  using:








// plg   now fnly, visly complete.  captions should appear like this: .ui-caption { ds:n, ps:ab, pd:10 }

// Like $'s plg creation met fn.extend(),
//add   destroy and option mets, which implg devs would expect to find in any plg.
//trg cust  evs that devs can use  to react to intx  w wid
// The wdjFc is only one way of creating stateful plgs! true
// ui namespace  reserved for official $ UI plgs,   create your own namespace ('cust')
