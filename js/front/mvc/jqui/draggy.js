$l('draggy.js')


SCOP= function(){$.h()

    //  scope    S= "default" group sets of dgb and droppable items,
    //  in addition to droppable's accept op
    // dgb w  same scope v  as a droppable will be accepted by  droppable.
    k= $.d()


        k.dgb({  scope: "tasks"  })
            scope = k.dgb( "option", "scope" )
                 k.dgb( "option", "scope", "tasks" )
}



CN2SO=function(){$.x()

 //   connectToSortable   Sel=false     allows  dgb to be dropped onto SORTABLE LIST!! (sortables) must: hlpr op = "clone"    req: ui-Soble plg

    k.dgb({
        connectToSortable: "#my-sortable"
    })

    connectToSortable = k.dgb( "option", "connectToSortable" )

    k.dgb( "option",  "connectToSortable", "#my-sortable"  )

}


ADDK=function(){


// addClasses=TT, if FF,     will prev  ui-dgb k from being added  - desired   performance optimiz
// when calling .dgb() on 100s of els.


 ks=k.dgb("option","addClasses"); k.dgb("option","addClasses", false)




}
AXIS=function(){ /*


 axisn  S  Df false  Constrains dragging to horiz| vert  axis.  Poss  vs: x,y

 */
 k.dgb({axis: "x"}) ; axis=k.dgb("option","axis");  k.dgb("option", "axis", "x")




}
CONTM=function(){$.x()
/*
    containment -  Constrains dgg to w/in bds of  spec  el| region
    ( Sel dgb el  contained to  bdg box of 1st el found by  sel (or not at all)
    El contained to this el's  bdg box
    S Poss  vs: "parent", "document", "window"
    Arr defining a bounding box in  form [ x1, y1, x2, y2 ]. df=false )
*/

    k.dgb({ containment: "parent"})
    ctnmt = k.dgb("option", "containment" )
    k.dgb( "option", "containment", "parent")
}


HANDLE=function(){
//    handle Sel|El=FF only  dgb el descendends drag;     k.dgb({handle: "h2"})  handle = k.dgb("option", "handle" );k.dgb( "option", "handle", "h2" );

}

CANCEL=function(){

    /*
     cancel     Prvs spec els from dgg   (Sel= "input,textarea,button,select,option")
     canc=k.dgb("option", "cancel")
     k.dgb("option", "cancel", ".title")
     k.dgb({cancel: ".title"})




     */
}

DELAY=function(){
    /*



    delay  N = 0   Time in ms aft  md until drgg should start.  can be used to prvt unwanted drags when $g on  el
     k.dgb({  delay: 300  })      delay = k.dgb( "option", "delay" )        k.dgb( "option", "delay", 300 );



     */
}

DISAB=function(){

   // disabled   Bool = FF   Disables  dgb if set to true.
        k.dgb({    disabled: true     })
    disabled = k.dgb( "option", "disabled" )
    k.dgb( "option", "disabled", true );

}
DISTN=function(){
    /*
     distance   Num =1  Dist in pxls after md, mouse must move b4 dragging should start (buffer!!)  - can be used to prev unwanted drags when $g on an el.
     k.dgb({  dist: 10  });  dist = k.dgb( "option", "dist" );  k.dgb( "option", "dist", 10 );


     */
}



SNAPSTACK=function(){


    // grid   Arr = false      Snaps  dragging hlpr to a grid,  every x and y pxls.  array must be of  form [ x, y ].

             k.dgb({ grid: [ 50, 20 ] })  //; grid = k.dgb( "option", "grid" ); k.dgb( "option", "grid", [ 50, 20 ] );


  //  snap  Wher should  el snap to?   Bool =FF  or Sel (spec  which els to snap to )  if TT,  el will snap to all or dgb els.
             k.dgb({snap:true});//    k.dgb( "option", "snap", true );  snap = k.dgb( "option", "snap" )



  //   snapMode Determines which edges of snap els  dgb will snap to.
    //         S Possible values: "inner", "outer", "both" = both, ignored if  snap op=FF
             k.dgb({ snapMode: "inner" }); // snapMode = k.dgb( "option", "snapMode" );   k.dgb( "option", "snapMode", "inner" );


//   snapTolerance     N=20  dist in pxls from  snap el edges at which snapping should occur.    Ignored if snap op==FF
               k.dgb({   snapTolerance: 30   }); //  snapTolerance = k.dgb( "option", "snapTolerance" );  k.dgb( "option", "snapTolerance", 30 );






   //  scroll  = true  If set to true, ct auto-scrolls while dragging.
             k.dgb({   scroll: false })     //  scroll = k.dgb( "option", "scroll" );  k.dgb( "option", "scroll", false );
   //  scrollSensitivity N=20//               Dist in pxls from  edge of  viewport after which  viewport should scroll.
    //           Dist is relt to pointer, not  dgb. Ignored if  scroll option is false.
                 k.dgb({   scrollSensitivity: 100   }); //   scrollSensitivity = k.dgb( "option", "scrollSensitivity" );  k.dgb( "option", "scrollSensitivity", 100 );


   //  scrollSpeed  Type: Number  Df 20  speed at which  window should scroll once  mouse pointer gets within  scrollSensitivity dist. Ignored if  scroll option is false.
             k.dgb({ scrollSpeed: 100  }); // scrollSpeed = k.dgb( "option", "scrollSpeed" );k.dgb( "option", "scrollSpeed", 100 );







    // stack Sel =FF Controls  z-index of  set of els that match  selector, always brings  currently dragged item to  front. Very useful in things like window managers.
     k.dgb({ stack: ".products"  }) //   stack = k.dgb( "option", "stack" );     k.dgb( "option", "stack", ".products" );



   //  zIndex   Z-index for  hlpr while being dragged.   Type: Number  Df false    Init  dgb with  zIndex option spec:
     k.dgb({ zIndex: 100  })//  zIndex = k.dgb( "option", "zIndex" );  k.dgb( "option", "zIndex", 100 );

}





HELP=function(){$.x('y','help')



    //Allows for a hlpr el to be used for drggg display
    //     S="original": If set to "clone",  clone of el will be dragged.
      //    F  (that rets  el to use while dragging )


   // k.dgb({  helper: "clone"   })   // hlpr = k.dgb( "option", "hlpr") ;  k.dgb( "option", "hlpr", "clone" );


  // appendTo  Which el   dgb hlpr should be a2 to while dgg
  //   only works when  hlpr op   set  to !use orig el
  //   $(el to appl hlpr to)
   //  or El to appl hlpr to
   //  or Sel  of which el  to app e hlpr to
    // or S="parent"-> will cause  hlpr to be a sib of dgb


   //  k.dgb({appendTo: "body"}) //a2 = k.dgb( "option", "appendTo" ); k.dgb( "option", "appendTo", "body" )

    d = $.d('r', 200, 100).ab(500,200)


    $.d('b', 200, 100).dgb({    helper:'clone',

      //  appendTo: "body"
        appendTo: d
    })

    // opacity  Number  = false Opacity for  hlpr while being dragged.
    k.dgb({  opacity: 0.35   });// opacity = k.dgb( "option", "opacity" ); k.dgb( "option", "opacity", 0.35 );


}







REVERT=function(){

//    k.dgb({ refreshPositions: true  })  //refreshPositions = k.dgb( "option", "refreshPositions" ); k.dgb( "option", "refreshPositions", true );




    // refreshPositions=F
    //  If TT, all droppable posns are calcud   every mm,   decreases performance.





    // revert   =false      should el revert to its start posn when dragging stops? // If TT,  el will always revert.
    // S "invalid": revert if  dgb !been doppd (on drppble),  "valid": has been dropped

   // k.dgb({ revert: true     })  //     revert = k.dgb( "option", "revert" )        k.dgb( "option", "revert", true );

     // revertDuration  N = 500   dur  of  revert anim, in ms.   Ignored if  revert op =FF.

    //    k.dgb({   revertDuration: 200  })  //  revertDuration = k.dgb( "option", "revertDuration" )    k.dgb( "option", "revertDuration", 200 )


    k.dgb({  revert:true,  revertDuration: 200  })



  //  cursor  CSS cursor during  drag operation.     Type: S Df "auto"

   // k.dgb({ cursor: "crosshair"  }) //    cursor = k.dgb( "option", "cursor" );  k.dgb( "option", "cursor", "crosshair" );



  //  cursorAt=FF     Sets   dgg hlpr  ofset   relt to  mouse cu  coords { top, left, right, bottom }.
  // can be given as  hash using a combi of one or two keys:

            //   k.dgb({ cursorAt: { left: 5 }  });  //cursorAt = k.dgb( "option", "cursorAt" )       k.dgb( "option", "cursorAt", { left: 5 } )






    //  iframeFix =FF   Prev iframes from capturing  mm evs during a drag.
 // Useful in combi with  cursorAt option,  or in any case where  mouse cu  may not be over  hlpr.
 // When set to TT, transparent overlays will be placed over all iframes on  page.
 // Sel  Any iframes matching  sel will be covered by transparent overlays.

    k.dgb({    iframeFix: true,
        cursor: "crosshair" ,
        cursorAt: { left: 5 }

    })

    // iframeFix = k.dgb( "option", "iframeFix" );  k.dgb( "option", "iframeFix", true );




}



METS=function(){

/*




 enable()-> jQ(plg!) Enables  dgb. does not accept any args.
 Invoke  enable method:   k.dgb( "enable" )





 isDisabled = k.dgb( "option", "disabled" );
disable()-> jQ(plg!)  Disables  dgb.
         Invoke  disable method:  k.dgb( "disable" )
 disable()   Disables  dgb     -> jQ(plg!)
 k.dgb( "disable" );



 k.dgb( "destroy" );  Rms  dgb functiony completely.
   destroy-> $(plugin only)    return  el  back to its pre-init state
 k.dgb( "destroy" )


 widget ->  qob containing  dgb el
 widget = k.dgb( 'widget' )
 k.dgb("option",{disabled:TT}); widget()-> $(dgb el)
 widget = k.dgb( "widget" )
*/

}

OPTIONS=function(){
    /*

     options = k.dgb( "option" )
     option()-> Pob   Gets an ob containing key/value pairs repg  current dgb options hash.  does not accept any args.
     option( optionName )-> Object Gets  value currently associated with  spec optionName.
     Note: For options that have obs as ir value, you can get  value of a specific key by using dotnot.
     "foo.bar" would get  value of  bar property on  foo option.





     */
}

INST=function(){

  //   inst()  -> Object  Retrieves  dgb's inst ob.
  //   If  el  does not have an assoc inst, -> undef
//     Unlike or wid  mets,   inst() is safe to call on any el after  dgb plugin has loaded.
     k.dgb('instance')
        // inst()-> Object  Retrieves  dgb's inst ob. If  el does not have an associated inst, undefined is returned.
        // Unlike or widget methods, inst() is safe to call on any el after  dgb plugin has loaded.
     k.dgb( "inst" )


}


OPTS=function(){

  //   option( optionName, value ) -> jQ(plg!)     v  of  dgb op asc  w   spec opN
  //   for ops!- O(op.v) , you can set  v  of 1pop w dotnot for optionName.
  //   "foo.bar" would update only  bar property of  foo option.
  //   k.dgb( "option", "disabled", true );  option( options )-> jQ(plg!)
  //   Sets 1+ options for  dgb.     options     option-value pairs map
  //   option(opN) -> opN's v
  //   use dotnot to get v of a k |-  O(v)  "foo.bar" -> v
  //   of  bar pop on  foo op
  //   optionName  S       n  of  op to get
  //   isDisabled = k.dgb( "option", "disabled" )
  //   option -> k/v pob hash repg  cur dgb op hash      options = k.dgb( "option" )
  //   option( optionName, value ) -> $(plugin only)   Sets  v of  dgb option assoc  w  spec  opN

   //  For ops that have obs as ir v, you can set  v
   //  of 1 pop by using dotnot for opN
   //  ex "foo.bar" would upd   only  bar pop of  foo op
   //  opN  Ty : S   n  of   op  to set.
   //  v  ob  v  to set for  op    k.dgb( "option", "disabled", true )
    // option(options ) -> jQ(plg!)   Sets 1+ ops for  dgb.
    // options O map of op-val  pairs to set.

     k.dgb('option',{disabled:true})



}


DRAGCR=function(){




    // create( ev, ui )  dragcreate   when  dgb is created.
   //  create(ev,ui{})  dragcreate      k.dgb({create: function( ev, ui ) {}})

     k.dgb({
     create: function( ev, ui ) {}  })
     k.on( "dragcreate", function( ev, ui ) {} )



}

DRAGST=function() {

    

    // start( ev, ui )
    //Type: dragstart   Triggered when dragging beg.
     k.dgb({   start: function( ev, ui ) {}}) //    k.on( "dragstart", function( ev, ui ) {} );

     start( ev, ui )  //   dgg beg
     
   //   dragstart {
   //  helper:    Qob repg  hlpr that's being dragged
            //   position:   { top, left }  offset { top, left }  hlpr's offset pos   }
    
     k.dgb({   start: function( ev, ui ) {}})  
k.on( "dragstart", function( ev, ui ) {} )
 
 
 
   //  stop( ev, ui )  dragstop    when dragging stops.
   //  hlpr Type:  Qob repg  hlpr that's being dragged.
   //  posn  Current CSS posn of  hlpr as { top, left } ob.
   //  offset   Current offset posn of  hlpr as { top, left } ob.
    
    k.dgb({   stop: function( ev, ui ) {}})//    k.on( "dragstop", function( ev, ui ) {} );

stop( ev, ui  )   
    
    // dragstop  Triggered when dragging stops.  {h, p, o}

    
    k.dgb({  
        stop: function( ev , ui ) {}
    })
    k.on( "dragstop", function( ev, ui ) {} )

    
}



DRAGEV=function(){

    /* drag( ev, ui )T  drag   while  mouse moved during  dragging, imm  b4  cur move happens.
     k.dgb({   drag: function( ev, ui ) {}   });         k.on( "drag", function( ev, ui ) {} );
     Constrain movement via ui.posn:   k.dgb({ drag: function( ev, ui ) {
     // Keep  left edge of  el,  at least 100 pxls from  ct
     ui.posn.left = Math.min( 100, ui.posn.left )  }})
     drag( ev{}, ui{} )  trgd while  mouse  moved during  dgg (imm b4 cur move)
     hlpr   Qob-hlpr being dragged posn   -> { top, left }    useful for cust  containment, snapping
     offset   ->   { top, left }  cur offset posn of  hlpr
     k.dgb({     drag: function(ev,ui){}         })    k.on( "drag",function(ev,ui){})

     Constrain movement via ui.posn , Keep  left edge of  el  at least 100 pxls from  ct
     k.dgb({drag: function( ev, ui ) { ui.posn.left = M.min( 100, ui.posn.left ) }})



     */


}





DRAGGY=function(){$.x('o', 'draggy')

    $.d('r', 500, 500).K('sel')

    $('.sel').dgb({
        delay: 1000,
        distance: 100,
        helper: "clone",
        addClasses: false,
        snapMode: "inner",
        grid: [ 50, 20 ],
        snap:true
    })


}

APP2=function(){
    
    k=$('.k')
    
    k.dgb({appendTo: "body"})
    k.dgb({  helper: "clone"   })
    
}



DGB=function(){$.x('o','dgb')

    $CSS({ $dgb: {w: 100, h: 100, C:'r'} })
    
    $.dI('dgb').A('Drag me')
     
    
    $("#dgb").dgb()

}






//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/

