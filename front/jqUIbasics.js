$.fn.dgb= $.fn.draggable
$.fn.dpb = $.fn.droppable
$.fn.zLite=function(type, icon) {var e=this
    icon = icon? icon: (type === 'highlight')? 'ui-icon-info': 'ui-icon-alert'
    return e.each(function(){var d
        $(this).K('ui-widget')
        d=$.d([$.sp().K("ui-icon '+icon+'").css({float:'left', 'margin-right':'3em'}),
            $(this).text() ])
        d.K('ui-state-'+type+'ui-corner-all').css({padding:'0 .7em'})
        $(this).html(d) })}
$.fn.error=function(){this.zLite('error')}
$.fn.highlight=function(){this.zLite('highlight')}
$.fn.ef= $.fn.effect
$.fn.dgb = $.fn.dgg = $.fn.draggable
$.fn.dpb = $.fn.droppable
$.fn.gg= $.fn.toggle
$.fn.hd= function(ef, o, ms){
    o=o||{}
    if(ef=='sl'){ef='slide'}
    if(o.d){
        if(o.d=='l'){o.d='left'}
        if(o.d=='r'){o.d='right'}
        if(o.d=='up'){o.d='up'}
        if(o.d=='down'){o.d='down'}
        o.direction = o.d }
    return this.hide(ef,o,ms)
}


$.fn.sh= function(ef, o, ms){  o=o||{}
    if(ef=='sl'){ef='slide'}
    if(o.d){
        if(o.d=='l'){o.d='left'}
        if(o.d=='r'){o.d='right'}
        if(o.d=='u'){o.d='up'}
        if(o.d=='d'){o.d='down'}
        o.direction = o.d}
    return this.show(ef, o, ms)
}
css=function(){

    $.fn.bdC=function(a){return this.css("border-color", oO('c', a||'r'))}
    $.fn.pdB=function(a){return this.css("padding-bottom", a||0 )}
    $.fn.mgT=function(a){return this.css("margin-top", a||0 )}
    $.fn.pad=function(a){return this.css("padding", a||0 )}



};css()
$.fn.ps= $.fn.position
$.fn.tIx=function(a,b){
    a= this.at('tabindex', a)
    if(b){a.v(b)}
    return a}
dpick=function(){

    $.fn.dtp= $.fn.datepicker
    DATEPICK=function(){
        $.p('Date: ').A($.ip().id('dtp'))
        $('#dtp').dtp()}


    DATEPIKR=function(){$.x('b','jqui')
        d = $.d('b',400,400).A(
            ip= $.ip('date').datepicker()
        ).pad(20)
    }


};dpick()
LAYOUTHELP=function(){


    k =$('.k')
    k.K('ui-helper-hidden')
    //  Hides content visually  and from assistive technologies, such as screen readers.
    k.K('ui-helper-hidden-accessible')
     // Hides cont
    k.K('.ui-helper-reset')
     // A basic style reset for DOM nodes. Resets pad, mar, t-dec, ls-sty
    k.K('.ui-helper-clearfix')
    // Appls float, wrapg pops to par els
    k.K('.ui-front')
     // z-ix to mang  stackg  of mult wids on screen.  See  stacking ELS
    k.K('.ui-widget')
    // outer ct of all wids. Appls fo-fam  and fZ to wids
    k.K('.ui-widget-header')// : appl2  hdr conts. Appls hdr cont sty to el and its ch t,lks, and icons.

    k.K('.ui-widget-content')
 // : appl2 cont cts. // Appls cont-ct stys to el and its ch t, lks, and icons.
 // (can be appld to par  or sib  of hdr).

}

HLT=function(){$.h({

    p: {C:'y',w:200, bor: '1px solid green'},
    d: {C:'r',w:100,h:100  }
})

    //The Highlight ef  can be used w effect() met
// This highlights the el's bg with a spec  c, df is yellow.
// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd )
// hgl col= "#ffff99".    mode  of the effect =show | hide

    $.p('Click the button')
    $.bt('Highlight').id('bt')
    $.dK('target')


    $("#bt").$(function(){
        $(".target").ef(
            "highlight", {color:"#669966"},  3000
        )
    })
}
HIDE=function(){$.x()



    $CSS({
        p: {C:'#bca', w:200, bor:'1px solid green'  },
        div: {w:100, h:100, C:'r' } })


    $.p('$')
    $.bt('hd').id('hd')
    $.bt('sh').id('sh')
    d = $.dK('tg')

    $('#hd').$(function(){
        d.hd('sl', {d:'r'}, 500)
    })

    $('#sh').$(function(){
        d.sh('sl',{d:'d'}, 2000)
    })


}
TABSELIX=function(){$.h({
    ip:{bor:'1px solid #000'}, d:{pad:5}
})
    $.d([
        'no tabindex'
    ])
    $.d([ $.ip().tIx(5, '+tIx')
    ])
    $.d([ $.ip().tIx(5, '+tIx')
    ])
    $.d([ '-tIx',
        $.ip().tIx(-1, '-tIx')
    ])

    $(":tabbable").bdC("red")
}
HGHLT=function(){$.h({$gg:{C:'o', w:100, h:100 }})
    // hides or shows an el  by ang its bgC 1st
    // bgC ="#ffff99"  used during  an
    $.p('Click to tog ')
    d= $('<div>').A().id('gg')
    $(document).$(function(){
        $l('doc')
        $("#gg").gg( "highlight" )
    })
    $l( $.ht().oh() )
}
UICT=function(){$.h()
//http://www.phpeveryday.com/articles/jQuery-UI-Using-The-Framework-Classes-P986.html
    num=3

    if(num==1){

        $.dK("ui-widget").A(
            $.dK("ui-widget-header ui-corner-top").A(
                $.h2('his is a ui-widget-header container')),
            $.dK("ui-widget-content ui-corner-bottom").A(
                $.p( 'This is a ui-widget-content container')))


        $.dK("ui-widget").A(
            $.dK("ui-state-default ui-state-active ui-corner-all").A(
                $.a('clickable and selected')),
            $.d([
                $.a('clickable but not selected')
            ]).K("ui-state-default ui-corner-all") )
    }


    $('.ui-state-default a').hv(function() {
        $(this).parent().K("ui-state-hover")     }, function() {
        $(this).parent().xK("ui-state-hover")     })


    if(num==2){
        $.dK("ui-widget").A(
            $.dK("ui-state-default ui-state-active ui-corner-all").A(
                $.dK("ui-icon ui-icon-circle-plus"), $.a('clb, seld') ),
            $.dK("ui-state-default ui-corner-all").A(
                $.dK("ui-icon ui-icon-circle-plus"),
                $.a('clb, !selected')))

        $(".ui-state-default a").hv(function(){
                $(this).pa().K("ui-state-hover")},
            function() { $(this).pa().xK("ui-state-hover")})}


    if(num==3){


        $CSS({


            '_ui-form' : { w:470, mar:'0 auto' },
            '_ui-form _ui-widget-header h2': { margin:'10px 0 10px 20px' },
            '_ui-form _ui-widget-content' :{ padding:20 },
            '_ui-form label, _ui-form input, _ui-form _ui-state-error,_ui-form _ui-icon, _ui-form _ui-state-error p':
            { fl:'l'  },
            '_ui-form label, _ui-state-error p': { fz:12, pad:'10px 10px 0 0'},
            '_ui-form _ui-state-error': { pad:4 },
            '_ui-form _ui-state-error p': {'font-weight': 'bold',  pT: 5  },
            '_ui-form _ui-state-error _ui-icon': { mar: '5px 3px 0 4px' }  })



        $.dK("ui-widget ui-form").A(
            $.dK("ui-widget-header ui-corner-all").A(
                $.h2('Login Form') ),
            $.dK("ui-widget-content ui-corner-all").A(
                $.f().K('ui-helper-clearfix').A(
                    $.lb('Username').K("ui-helper-reset"),
                    $.d("ui-state-error ui-corner-all").A(
                        $.ip(), $.dK("ui-icon ui-icon-alert"),
                        $.p('Required field')
                            .K("ui-helper-reset ui-state-error-text")))))


    }



    // <link rel="stylesheet" type="text/css" href="css/ui.form.css">



//http://www.w3.org/TR/html4/strict.dtd">

}

FOC=function(){$.x()

    $.sp('Some Span').id("my-span").at('tabindex',"0")
    $.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
    $.sp('Some Span2').id("my-span2").at('tabindex',"0")
    document.getElementById('my-span').focus()
    document.getElementById('my-span2').focus()
}
selMenu=function(){
    $.fn.slM=function(){var g=G(arguments)
        this.selectmenu.apply(this, g)
        return this}

    UISL=function(){$.h({
        fieldset: {bor:0},
        label: {ds:'block',  mar:'30px 0 0 0'},
        select: {w:200}, _overflow: {h:200}
    })
        $.sl({Vol:'vol',Sab:'sab',Opl:'opl',Au:'au'})
        $.sl().A(
            $.og( "Swedish Cars", ['volvo', 'saab']),
            $.og( "German Cars", ['mercedes', 'audi']))

        $.dK('demo').A($.f().A(
            $('<fieldset>').A(
                $.lb('select speed', 'speed'),
                $.sl(['Slower', 'Slow', $.o('Medium').at('selected','true'), 'Fast', 'Faster'
                ]).n('speed').id('speed'),
                $.lb('select file', 'files'),
                $.sl().n('files').id('files').A(
                    $.og('Scripts', [
                        $.o('jQuery.js', 'jquery'),
                        $.o('ui.jQuery.js', 'jqueryui')]),
                    $.og('Other files',[
                        $.o('Some unknown file', 'somefile'),
                        $.o('Some other file with a very long option text','someotherfile')])),
                $.lb('select num', 'number'),
                $.sl([1,  $.op('2').at('selected', true),
                    3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
                ]).n('number').id('number')
            )).at('action','#'))

        $("#speed").slM()
        $("#files").slM()
        $("#number").K("overflow").slM().slM("menuWidget")
    }
}; selMenu()

//// //// WORKS above //// ///


ICONN=function(){$.x('y','icon')
    $.sp('helllloooo1')
    $.sp('helllloooo2').K("ui-icon ui-icon-arrowthick-1-n")


     k = $.d('k', 500, 500)

 k.K('ui-icon ui-icon-triangle-1-e')

             /*
             Base class to be applied to an icon element.
             Sets dimensions to a 16px square
             block,
             hides inner text,
             sets background image to
             "content" state sprite image.

             Note: ui-icon class will be given    different sprite background image
             depending on its parent container.

             For example,
            a ui-icon element
             within a ui-state-default container
             will get colored according to
             the ui-state-default's icon color.
             Icon types

             After declaring a ui-icon class,
             you can follow up with a second class
             describing the type of icon.
             Icon classes generally follow a syntax


              */
           //  .ui-icon-{icon type}-{icon sub description}-{direction}.
//             For example, a single triangle icon pointing to the right
    //    .ui-icon-triangle-1-e
           //  ThemeRoller provides
           // full set of CSS framework icons  in  prev col
           //  Hv over them to see the class name.
}



VLAYSHAD=function(){

    k =$('.k')
    k.k('ui-widget-overlay')
 /*

 Applies 100% width & height dimensions to an overlay screen,
    along with background color/texture, and screen opacity.
    k.K('ui-widget-shadow')
 appy to vlay widg shad els
 Applies bg    c/texture, cust cor rad, al,
top/left ofs and shd "thickness".
     Thickness is appld via pad  all sides of shad  that
 set to mat  the dims of the overlay el .
     Offsets are appld via t and l  margs  (can be pos  or neg ).
*/


}
// *** good one!  https://www.packtpub.com/books/content/jquery-ui-themes-states-cues-overlays-and-shadows






OVERLY=function(){$.h({
        body: {bor:0, mar:0},
        '_ui-widget-overlay': {bg: 'repeat-x scroll 50% 50% #AAA',  opacity: '0.3'   },
        '_ui-widget-overlay': {h:'100%',  l:0,ps:'a', t:0, w:'100%' }
})
    overlay = $.dK("ui-overlay").A(
        $.dK("ui-widget-overlay")
    ).hide().A()
    overlay.fadeIn()
    $(window).resize(function () {
         overlay.width($(document).width())
         overlay.height($(document).height())
        overlay.hide().fadeIn()
    })






}

/*
 <style type="text/css">
  body: {bo:0;margin:0}
 .ui-widget-overlay { background: repeat-x scroll 50% 50% #AAA, opacity:0.3  }

 .ui-widget-overlay {height:100%, left:0, position:absolute, top:0, width:100%; }

 </style>
 <script type="text/javascript">

 $(function () {
 var $overlay = $('<div class="ui-overlay"><div class="ui-widget-overlay"></div></div>').hide().appendTo('body');
 $overlay.fadeIn();

 $(window).resize(function () {
 $overlay.width($(document).width());
 $overlay.height($(document).height());
 });
 });
 </script>
 */

CORRAD=function(){$.x('o')

    $.d('d', 500, 500)

    k = $.d('d', 500, 500)

 /*   k.K('.ui-corner-tl') // corner-radius to top left corner of element.
    k.K('.ui-corner-tr')// t r cor
    k.K('.ui-corner-bl')//to bt l corn
    k.K('.ui-corner-br')// bt r cor
    k.K('.ui-corner-top')//o both t cors
    k.K('.ui-corner-bottom')//both bt cors
    k.K('.ui-corner-right')// both r cors
    k.K('.ui-corner-left')// both left cors
    k.K('.ui-corner-all')//all 4 cors
    */
}


INTX=function(){$.x()
    $CSS({
        $d:{C:'r'}
    })
    k =$('.k')
    // to highlighted/selected els
    // Applies "highlight" ct sty to an el and
    // its ch text, links, and icons.
    k.K('.ui-state-highlight')
    // appl to z msg ct eles. Applies z ct stys to   el
    // and its ch text, links, and icons.
    k.K('.ui-state-error')
    //  appls just z t  c  w/o bg. Can be used on f-lbs, appls z icon c  to ch  icons.
    k.K('.ui-state-error-text')
   //// Appl dimmed al to dsabld UI els,  (adjunct, to an already-styled el)
    k.K('.ui-state-disabled')
   //    apl2 priority-1 bt when need bt hier
    k.K('.ui-priority-primary')
    k.K('.ui-priority-secondary')
    //: Class to be applied to a priority-2 button in situations where button hierarchy is needed.


    j=  $('<div>').A($.h3('hello'))
        .id('d').WH(100, 100).A()
        .K('.ui-state-highlight')


    $.d('r', 100, 100).A($.h3('hello'))




}


POSI=function(){$.h({
    $par :{
        C:'b',ta:'c', w:'60%',ht:40,
        mar:'10px auto',pad:5, bor:'1px solid #777'
    },
    _psb:{
        p:'a', ds:'b',
        r:0,b:0,C:'r', ta:'c'
    },
    $psb1:{w:75, h:75},
    $psb2:{w:120, h:40},
    'select,input':{mL:15 }
})


    $.d([$.p('This is the ps par el')]).id('par')
    $.dK('psb').id("psb1")
    $.p('to ps')

    $.d([ $.p('to ps2')]).K('psb','psb2')
    $.d().mgT(75).pad(20),  'ps...'
    $.d().pdB(20)

    $.b().A('my:')

    $.sl('my_hz', 'left', 'center', 'right')
    $.sl("my_vrt", 'top', 'center','bottom')

    $.d().pdB(20)

    $.p().A('at:')
    $.sl("at_hz", 'left','center','right')
    $.sl("at_vrt", 'top', 'center', 'bottom')



    $.d([

        $.b().A('cl:'),
        $.sl('cl_vrt','flip','flit','flipfit','none'),
        $.sl('cl_hz','flip','flit','flipfit','none')

    ]).pdB(200)


    $("select, input").bind("click keyup change", ps)
    $("#par").dgb({drag: ps})
    $(".psb").al(.5)

    ps()
    function ps() {
        $( ".psb" ).ps({

            of:$("#par"),
            my:$("#my_hz").v()+$("#my_vrt").v(),
            at:$("#at_hz").v()+$("#at_vrt").v(),
            collision: $( "#cl_hz" ).v() + $( "#cl_vrt" ).v()

        })}

}
IXSTAT=function(){$.x()

    k= $.d('r', 500, 200)
    // to clb bT-like elS. Applies clb df ct stys to el
    // and its ch t, lks, and icons.

    k.K('.ui-state-default')
    //   on mv to clb bt-oid. Applies "clickable hover" ct stys
    // to an element and its child text, links, and icons.


    k.K('.ui-state-hover')
    //  on kb fcs to clb btoids. Applies "clickable focus"
    // ct stys  to el and its child text, links, and icons.

    k.K('.ui-state-focus')

    //   on md to clb btoids. Applies "clickable active" cot stysto an el
    // and its ch t, lks, and icons.
    k.K('.ui-state-active')
}





//
DATESCR=function(){$.x('b','jqui')
('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
('<script src="/jquery-ui.min.js">').A()
    d = $.d('b',400,400).A(
        ip= $.ip('date').datepicker()
    ).pad(20)
}
// CSS Framework
//   list of the class names
// used by jQuery UI.
//
// The classes are designed to
// create a visual consistency
// across an application
// and allow components
// to be themeable by jQuery UI ThemeRoller.
// The class names are split
// between ui.core.css and ui.theme.css,
// depending on whether styles are
// fixed and structural, or themeable
// (colors, fonts, backgrounds, etc) respectively.
