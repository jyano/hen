$El=function(tag){
    if(tag){return document.createElement(tag)}

}
cssLib()
extra()
more()
cssTests()
function cssLib(){
    $CSS = function $CSS(rusOb) {
        var g = G(arguments), rus = '\n\n', sty
        if (g.u) {
            return $l($('style').oh())
        }


        _.e(rusOb, function (decs, sel) {
            rus += $CSS.rule(sel, decs, rusOb) + '\n'
        })
        rus += '\n'
        $.hd($CSS.sty(rus))


        return rus
    }
    $CSS.sel = function (sel) {
        sel = _.$Id(sel)
        if (sel == 'bd') {
            sel = 'body'
        }
        if (sel == 'bt') {
            sel = 'button'
        }
        if (sel == 'sc') {
            sel = 'section'
        }
        if (sel == 'nv') {
            sel = 'nav'
        }
        if (sel == 'd') {
            sel = 'div'
        }
        if (sel == 'i') {
            sel = 'img'
        }
        if (sel == 'ip') {
            sel = 'input'
        }
        return sel
    }
    $CSS.blk = function (cont) {
        return '{' + cont + '}'
    }
    $CSS.decBlk = function (decs, rusOb) {
        var decBlk

        //for @media
        if (S(decs)) {
            return decs
        }

        decBlk = ' '

        _.e($CSS.decs(decs, rusOb), function (v, pop) {
            decBlk += $CSS.dec(pop, v)
        })

        return $CSS.blk(decBlk)

    }
    $CSS.dec = function (pop, v) {
        return pop + ':' + v + '; '
    }
    $CSS.sty = function (rus) {
        var sty = $El('style');
        sty.type = 'text/css';
        if (rus) {
            sty.innerHTML = rus
        }
        return sty
    }

    $CSS.decs = function (decs, rusOb) {
        var DECS = {}

        if (decs.ex) {

            if (rusOb && rusOb[decs.ex]) {

                _.x(decs, rusOb[decs.ex])
            }


            else {
                _.x(decs,
                    //tries to extend from one of its own first
                    //then goes to global ($CSS.ex)
                    $CSS.ex[decs.ex])
            }


        }


        if (decs.mx) {
            _.e(decs.mx, function (v, k) {
                $CSS.mx[k].apply(decs, v)
            })
        }

        _.e(decs, function (v, k) {
            if (k !== 'mx' && k !== 'ex') {
                DECS[oO('s', k)] = A(v) ? $CSS.fn[k].apply(null, v) :
                    N(v) ? String(v) + 'px' :
                        oO(k, v, 'R')
            }
        })

        return DECS
    }
    $CSS.rule = function (sel, decs, rusOb) {
        return $CSS.sel(sel) + ' ' + $CSS.decBlk(decs, rusOb)
    }
    $CSS.rules = function (ob) {
        var g = G(arguments), rus = '', str = '',

            ruls

        g = g.A ? g = g.f : g.u ? {} : g

        ruls = g.S_ ? g : _.m(ob, function (v, k) {
            if (A(v)) {
                v = $CSS.blk($CSS.dec(v[0], v[1]))
            }

            else if (O(v)) {
                v = $CSS.decs(v)
                _.e(v, function (v, k) {
                    str += $CSS.dec(k, v)
                });
                v = $CSS.blk(str)
            }


            return $CSS.rule(k, v)
        })

        _.e(ruls, function (ru) {
            rus += ru
        })
        rus = $CSS.blk(rus)
        return rus
    }
    $CSS.fn = function () {
    }
    $CSS.mx = function () {
    }
    $CSS.ex = function () {
    }
}
function extra(){
    // jqui http://jsfiddle.net/ManojRK/pQ9rj/
// http://jsfiddle.net/rniemeyer/YNCTY/
    extending=function(){


        // this lets you associate a selector with a bunch
        // of declarations at once, and you can add more, too

        $CSS.ex.icon={
            transition:'background-color ease .2s',
            margin: '0 .5em'
        }

        EXT=function(){$.x('x','ext')

            $CSS({


                d: {
                    ex:'icon',
                    C:'z',c:'w', mx:{  size:[250] }
                }


            })


            $.d(['hello'])
            $CSS()
        }




        BORD=function(){$.x('x', 'bordered')


            $CSS({

                _bordered: {
                    'border-top': 'dotted 1px black',
                    'border-bottom': 'solid 2px black'
                },

                //And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:


                '#menu a': {
                    ex: '_bordered',
                    c:'r'
                },


                '.post a': {
                    c:'r',
                    ex: '_bordered'
                }


            })




            $CSS()
        }



    };extending()
    help=function(){

        //value-helpers

        //this lets you write/call functions that
        //produce a complicated value to a
        //particular property,
        // so you don't have to write out
        // the full location of the function
        // -helps with namespacing

        $CSS.fn.B = $CSS.bor= function(c){
            var  col = oO('c', c|| 'z')
            return '8px solid ' + col
        }
    };help()
    mixins=function(){

        // these are functions that take pams
        // and ctx-bound to the dec obj
        // so its main use is to add decs directly on it
        // but on function can add multiple decs

        $CSS.mx.size=function(w,h){
            this.width = w
            this.height = h || w
        }

        SIZE=function(){$.x('x','size')

            $CSS({

                d: { C:'z',c:'w',

                    mx:{

                        size:[250]
                    }
                }

            })


            $.d(['hello'])
            $CSS()
        }


    };mixins()

    cssTests()
    // sass
// mixins: insert new css pos, and new rules
// extend: share pops/styles between selectors

//placeholders: help extend to gen more effient output


//less
//mixins: a way of  of including ("mixing in") a bunch of properties from one rule-set into another rule-set

}
function more(){
    reset=function(){
        resetCSS={
            '*': {m:0, p:0}, //{background-clip: Object}background-clip:
            'html, body': {h:'100%', w:'100%'},
            canvas: {d:'b'}
        }
        $.rs=  function(){$Ru.rule({ // css reset //this is three rules!!
            '*': {m:0, p:0},     // this rule has to decs in its decBlk
            'html, body': {h:'100%', w:'100%'},
            canvas: {d:'b'}

        })
        }


    }; reset()
    selectors=function(){


        /*


         //******* this is one declaration:
         // a rule is a selector and a declaration block
         //
         //        font-family: Arial, sans-serif;
         //with its sibs, it makes up a declaration block
         //and with its selector, it is a rule!


         CSS SELECTORS    “.class”    “#id”  “*”   :not()
         Element  (“element”)  :all els with the given tag name.
         :button :checkbox      :file    :password  :radio    :submit  :text
         :reset  :root  :checked (checked|selected)  :enabled   :disabled  :focus  :selected  :visible
         :header all els that are headers, like h1, h2, h3 and so on.
         :hidden :image  :input(ip|ta|sl|bt)
         :target  URL-fragment spec el
         :animated -      in the progress of an animation at the time the  sel is run

         “ancestor descendant”  “pa > ch”  direct CHILD of PARENT
         “sel1,  sel2,  selN”   combined results of all the  spec  sels.
         “prev + next”    matches“next” & IMMEDIATELY PRECEDED BY a sib  “prev”.
         “prev ~ siblings”   sib that FOLLOWS after the “prev” el, and matches “siblings” sel fl

         :empty:  !ch(el|tx)  :parent 1+ ch(el|tx)    :has() 1+ sel-matching-el   :contains() contains spec text

         :only-child   :first-child  :last-child   :nth-child() :nth-last-child()
         :only-of-type  :first-of-type   :last-of-type   :nth-of-type()   :nth-last-of-type()
         :first  :last  :eq()     :gt()   :lt()   :even  :odd

         [n=”v”][n2=”v2″]  matches ALL of the MULT  spec atr fls
         [name]   HAS the spec  atr (any val) [name=”value”]  atr=v  [name!=”value”] U(atr) ||  (!= spec v)
         [name*=”value”]  atr val CONTAINS spec S       [name~=”value”]  contains given WORD (delim by sp)
         [name^=”value”]   atr val STARTS exactly w spec case-sens S      [name$=”value”]  ENDS
         [name|=”value”]   Prefix:  has spec att val = sepc S | startsW S followed by '-'

         //http://james-ross.co.uk/weblog/2013/10/31/01 (#see addendum)
         */

        $.hd=function(){var g=G(arguments),hd
            hd =  $('head')
            if(g.n){return $.hd("link[rel='stylesheet']:last")}
            g.e(function(g){
                if(O(g)){g.p? hd.after(g): hd.A(g)}
                else if(S(g)){return hd.find(g)}})
            return hd
        }

        $.hdS= function(css){ var lastLink
            lastLink= $.hd().find("link[rel='stylesheet']:last")
            if(lastLink[0]){
                lastLink.after($(css))}
            else {
                $.hd().A($(css))}
            return $
        }

        $.fn.fCt=function(str){
            alert('fCt')
            return  this.fi(":contains("+ str +")")
        }


    };selectors()
    pops=function(){

        $.mar=function(){
            var g=G(arguments),o
            o= N(g[3])? g.f+'px ' + g.s + 'px '+ g.t + 'px ' + g[3]+'px':
                N(g.t)? g.f+'px ' + g.s + 'px '+ g.t + 'px ' + g.f+'px':
                    N(g.s)? g.f+'px ' + g.s + 'px '+ g.s + 'px ' + g.f+'px':
                        N(g.f)?g.f+'px '+g.f+'px '+g.f+'px '+g.f+'px':
                            '10px 10px 10px 10px'
            return o
        }

        $.Fo=$.font =$f= function(a,b){var g=G(arguments)

            if(O(a)){

                return ss(
                    oB(b), { fz : a||50 }
                )
            }


            a=N(a)?_S(a):U(a)?'':a;


            var  F='fantasy',W='normal',S='normal',Z=px(100);

            _.e(a.split(' '),function(p){
                if(M(p[0])){p=p.split('/')
                    Z=  p[0]+'px'+    p[1]?'/'+p[1]+'px' : ''}

                F=Oo('ff',p)||F
                W=Oo('fw',p)||W
                S=Oo('fs',p)||S

            })

            return [W,S,Z,F].join(' ')
        }
        $.Ol=$.outline = function OL(){
            var g=G(arguments), o,ol
            o= g.N_? {w: g.f}:
                Oo('c',o)?    {c: g.f, w: g.s, s: g.t}: { w: g.f, s: g.s}


            /*
             if(S(g.f)){
             o= g.f.split(' ')
             ol= _.j([
             $r('c',o[0]),  oO('ow',o[1]||5) +'px',
             oO('os',o[2]||'-') ])
             $l(ol)
             return ol}

             ol=  _.j([
             $r('c',o.c),
             N(o.w)? o.w+'px'$r('ow',o.w),
             $r('os',o.s)
             ])*/


            $l( ol )
            return ol
        }




    }; pops()
    transf=function(){

        TFM=function(){
            //d1 = $.d('x', null, 200); d1.css({transform: 'translateY(300px) rotateZ(120deg)'}); d1.trans('translateY(300px) rotateZ(120deg)')
            i= $.i('me').A()
            $.i('me').A().transform( 'scaleX(2)' )
            $.i('me').A().transform( 'scaleY(2)' )
            $.i('me').A().transform( 'scaleZ(2)' ) //does nothing?!
            $.i('me').A().transform( 'rotate3d(100,100,100,100)' )


        }

        //old
        tf=function(){
            alert('tf')
            var g=G(arguments)
            t=n=1
            $.in(1, function(){t=0})

            $.ev(1, function(){if(t){ n=n+1

                co()

            }

            else {$l(n)}})

        }

    };transf()
    float=function(){
        FLLY=function(){$.x()
            $CSS({  nv: {fl:'l',w:200}, sc: {mL: 200}  })
            $.nv().A().C('n').A('afdsfafadsfsd fadsfafdsfsd')
            $.nv().A().C('n').A('afdsfafadsfsd fadsfafdsfsd',
                $.i('chicks'))
            $.sc().C('s').A().A('afdsfafadsfsd fadsfafdsfsd',
                $.i('earth'))
            $.sc().C('s').A().A('afdsfafadsfsd fadsfafdsfsd',
                $.i('guy'), $.i('guy'), $.i('guy'))

        }
        CSSFL=function(){

            $CSS({

                img : {fl: 'r'},
                _thumbnail: {fl:'l',   w:110,   h:90,  mar:5 }    //, _text_line : {clear: both }
            })

            /*

             Els floated hz     will move as far to the left or right as it can
             Usually this means all the way   of the ctg el

             The els aft  the fltg el will flow around it.

             The els b4 the flt el  will not be affected.

             If an i is floated to the right, a follg text flows around it, to the left


             If you place sev floating els after ea  other, they will float next to each other if there is room.

             Els after floating el  will flow around it. To avoid this, use the clear property.

             The clear pop specs on which sides of an el  floating els  not allowed to float.

             Add a text line into the im  gallery


             clear	  right both none inherit float right none inherit

             */
        }
        IMGFL=function(){
            $.h({img: {
                fl: 'l', mar:$.mar(0,15)}})

            $.i('me'); $.A(ips3+ips3+ips3+ips3+ips3); $.hr().A()
            $.i('me'); $.A(ips3+ips3+ips3+ips3+ips3)
        }
        FLMAR=function(){$.h('flmar', { 'p, img': {fl:'r', mar:40}  })


            $.i('guy')

            str =     'fsad fsad fdsaf sfs dfsd sfd fsd fsd sdf dfsfds ' +
            ' fsdfsfsfs dfdsfds dfs ff fds f dsfs ' +
            ' ssfdfds fs'

            _.t(5, function(){str += str})
            $.p(str).C('r')
            $.d([str]).C('y')
            $.i('chicks'); $.i('guy')

        }
    }; float()
    layout=function(){
        LY5=function(){$.h('layout html5', {
            header: {C:'z', c:'w', ta:'center', pad:5},
            nav: {'line-height':30, C:'#eeeeee', h:300, w:100, fl:'l', pad:5},
            section : {w:350, fl:'l', pad:10},
            footer: {C:'z', c:'w', clear:'both', ta:'center', pad:5}})
            $.hdr().A(
                $.h1('City Gallery')
            )
            $.nv().A(
                'London',
                $.br(),'Paris', $.br(), 'Tokyo', $.br()
            )
            $.sct().A(
                $.h1('London'),
                $.p('London is the capital city of England. It is the most populous city in the United Kingdom,'+
                'with a metropolitan area of over 13 million inhabitants.'),
                $.p('Standing on the River Thames, London has been a major settlement for two millennia,'+
                'its history going back to its founding by the Romans, who named it Londinium.'))



            $.ftr('Copyright © W3Schools.com')

        }
        FLTT=function(){$.h()

            /*

             HTML Layout Using Tables
             Note	The <table> element was not designed to be a layout tool.
             The purpose of the <table> element is to display tabular data.
             Layout can be achieved using the <table> element, because table elements can be styled with CSS:

             Example

             <body>

             <table class="lamp">
             <tr>
             <th>
             <img src="/images/lamp.jpg" alt="Note" style="height:32px;width:32px">
             </th>
             <td>
             The table element was not designed to be a layout tool.
             </td>
             </tr>
             </table>

             </body>
             */

        }



    };layout()
    pseudo=function(){

        PSEU=function(){
            /*
             CSS pseudo-element
             used to style specified parts of an element.

             can be used to:

             Style the first letter, or line, of an element
             Insert content before, or after, the content of an element




             The syntax of pseudo-elements:

             selector::pseudo-element {  property:value;  }

             Note	Notice the double colon notation - ::first-line versus :first-line

             The double colon replaced the single-colon notation for pseudo-elements in CSS3. This was an attempt from W3C to distinguish between pseudo-classes and pseudo-elements.

             The single-colon syntax was used for both pseudo-classes and pseudo-elements in CSS2 and CSS1.

             For backward compatibility, the single-colon syntax is acceptable for CSS2 and CSS1 pseudo-elements.
             The ::first-line Pseudo-element
             The ::first-line pseudo-element is used to add a special style to the first line of a text.

             The ::first-line pseudo-element can only be applied to block elements.



             first line of  t  in all <p>s

             p::first-line {  c: 'b',  'font-variant': 'small-caps'     }

             these pops apply to the ::first-line pseudo-element:

             font properties, color properties, background properties
             word-spacing,  letter-spacing text-decoration, vertical-align
             text-transform, line-height
             clear
             The ::first-letter Pseudo-element
             The ::first-letter pseudo-element is used to add a special style to the first letter of a text.

             The ::first-letter pseudo-element can only be applied to block elements.

             Example

             Format the first letter of the text in all <p> elements:

             p::first-letter { c: 'b'; fz: xx-large;  }

             properties apply to the ::first-letter pseudo- element:

             font properties
             color properties
             background properties
             margin properties
             padding properties
             border properties
             text-decoration
             vertical-align (only if "float" is "none")
             text-transform
             line-height
             float
             clear
             Pseudo-elements and CSS Classes
             Pseudo-elements can be combined with CSS classes:



             p.intro::first-letter {  c:'b',fz: :200%;  }


             the first letter of a p    red,     xx-large font
             rest of the 1st line will be blue, and in small-caps.

             rest of the p  will be   df fz and c

             p::first-letter { c:'b',    fz: xx-large;   }
             p::first-line {  c:'b',   'font-variant': 'small-caps'  }

             The ::before



             h1::before { content: url(smiley.gif);     }


             ::after Pseudo-element

             insert some content after el


             h1::after {  content: url(smiley.gif);  }



             ::selection pseudo-element
             matches the portion of an element
             selected by a user.

             The following CSS properties can be applied to
             ::selection:
             color, background, cursor, and outline.


             makes   selected text red on a yellow bg



             ::selection {  color: red;   background: yellow;  }



             ::after	    ::before	    ::first-letter	   ::first-line


             :checked	   :disabled	   :enabled

             :empty	p:empty	Selects every <p> element that has no children
             :in-range	input:in-range	Selects <input> elements with a value within a specified range
             :invalid	input:invalid	Selects all <input> elements with an invalid value


             :first-child	p:first-child   :first-of-type	p:first-of-type
             :last-child	p:last-child :last-of-type	p:last-of-type
             :not(selector)	:not(p)
             :nth-child(n)	p:nth-child(2)
             :nth-last-child(n)	p:nth-last-child(2)
             :nth-last-of-type(n)	p:nth-last-of-type(2)
             :nth-of-type(n)	p:nth-of-type(2)
             :only-of-type	p:only-of-type
             :only-child  p:only-child

             :out-of-range	input:out-of-range

             :read-only	input:read-only	Selects <input>  els w "readonly" attr  spec
             :read-write	input:read-write	Selects <input>  els w no "readonly" attr

             :optional	input:optional	   no "required" attr
             :required	input:required	Selects <input>   els w a "required" attr  spec

             :root	root	   Sels the doc's root el
             :valid	input:valid	Selects all <input> elements with a valid value

             :link	a:link	  unvisited links
             :visited	a:visited	 visited links
             :target	#news:target	Selects the current active #news element
             (clicked on a URL containing that anchor name)

             :active	a:active	Selects the active link
             :focus	input:focus	Selects the <input> element that has focus
             :hover	a:hover	Selects links on mouse over



             */
        }
        AFTER=function(){

            // ::after is a pseudo element
            // which allows you to insert content onto a page from CSS
            // (without it needing to be in the HTML).
            // While the end result is not actually in the DOM,
            // it appears on the page as if it is,
            // and would essentially be like this:


            $.x({
                div:{C:'b', w:120, h:120},
                'div::after': {content: "goodbye"  },
                'div::before': {content: "hello"  }
            })



            $.d(['hi'])

            // ::before is exactly the same only it
            // inserts the content before any other content
            // in the HTML instead of after.
            // The only reasons to use one over the other are:


            /*
             You want the generated content to come before the element content,
             positionally.
             The ::after content is also "after" in source-order,
             so it will position on top of
             ::before if stacked on top of each other naturally.
             The value for content can be:

             A string: content: "a string";
             - special characters need to be specially encoded as a unicode entity.
             See the glyphs page.
             An image: content: url(/path/to/image.jpg);
             - The image is inserted at it's exact dimensions and cannot be resized.
             Since things like gradients are actually images,
             a pseudo element can be a gradient.
             Nothing: content: "";
             - Useful for clearfix and inserting images as background-images
             (set width and height, and can even resize with background-size).
             A counter: content: counter(li);
             - Really useful for styling lists until :marker comes along.
             Note that you cannot insert HTML
             (at least, that will be rendered as HTML).
             content: "<h1>nope</h1>";


             */
        }
        FIRSTLN=function(){$.h({

            'ul::first-line': {c:'o'}

            //first-letter

        })

            $.ul([

                $.li('one'),
                $.li('two'),
                $.li('three')

            ])

        }


        DISAB=function(){$.x()
            $CSS({
                'input[type="text"]:disabled' : {C:'r'}
            })
            $.f().at('action','#').A(
                $('<fieldset>').A(
                    $('<legend>Shipping address</legend>'),
                    $.ip('Name', 'shipping_name').at('disabled', ''),
                    $.ip('Address', 'shipping_address').at('disabled', ''),
                    $.ip('zip code', 'shipping_zipCode').at('disabled', '')),
                $('<fieldset id="billing">').A(
                    $('<legend>Billing address</legend>'),
                    $.lb('Same as shipping address','billing_is_shipping'),
                    $.cb().n('billing_is_shipping').at({ onchange: "javascript:toggleBilling()", checked:true }), $.br(),
                    $.ip('Name', 'billing_name').at('disabled', ''),
                    $.ip('Address', 'billing_address').at('disabled', ''),
                    $.ip('zip code', 'billing_zipCode').at('disabled', '')))
            function toggleBilling() {
                var billingItems = document.querySelectorAll('#billing input[type="text"]')
                for (var i = 0; i < billingItems.length; i++) {
                    billingItems[i].disabled = !billingItems[i].disabled}}
        }


    };pseudo()





}
function cssTests(){

    TXCSS = function () {
        $.x('O')
        $.d([
            $.bt('this a bt'),
            $.d([
                $.ip('date'),
                $.p('NO NONSENSE')
            ]).K('k', 400, 250).pad(20)
        ]).C('u')


        cssOb = {
            body: {fz: 80},
            '.k': {C: 'tq', c: 'b'},
            bt: {w: 500, h: 300, C: 'z', c: 'w', mar: 200}
        }

        _.in(2, function () {
            $CSS(cssOb)
        })


    }

    CSSCODE=function(){$.h({

        '$top h1':{pad:0,mar:0},
        $ct: { C:'b', c:'r', w: '90%', mar: '10px auto', bor: '1px solid gray', lh: '130%'},
        $top : {pad:8, C:'g',bB: '1px solid gray'},
        $ftr : { c: 'b',C:'r', cl: 'both', mar:0, pad:8,  bT: '1px solid gray' },
        $lnav : {fl:'l',w:160,mar:0,pad:8},
        $cont : {mL:200, bL:  '1px solid gray', pad: 16, Mw: 500 },
        '$lnav p' : {mar:'0 0 8px 0'},
        '$cont h2': {mar:'0 0 8px 0'} })

        $.dI('ct').A(
            $.dI('top').A( $.h1('hdr') ),
            $.dI('lnav').A($.p(ips1)),
            $.dI('cont').A($.h2('subhead'), $.p(ips2),  $.p(ips3)  ),
            $.dI('ftr').A('Footer')
        )

        $CSS()
    }
    SIDEBR=function(){$.h({
        _clFx: {'*zoom': 1},
        '_clFx:before, _clFx:after': {ds: 'table', content:'', lh: 0},
        '_clfx:after': {clear:'both'},
        _sbWr: {w: 150, fl: 'l'},
        _sb: {background: 'b', c: 'r', pad: 10},
        _contWr: {w:'100%', fl:'l', mR:-150},
        _cont: {C:'b', pad:10}
    })
        $.d([
            $.d([$.d([$.ul([$.li('sb')])]).K('sb')]).K('sbWr'),
            $.d([$.d([$.p('Cont')]).K('cont')]).K("contWr")
        ]).K('ct clFx')
        //http://jsfiddle.net/posco2k8/c55w7/

        $CSS()
    }
    TABL=function(){$.x().h1('table')



        $CSS({  'table, th, td': {bor: '1px solid black' } })


        $.t().A(
            $.cg().A(
                $.cl().at('span','2').C('r'),
                $.cl().C('y') ),
            $.tr().A($.th('iSBN'), $.th('tt'), $.th('$')),
            $.tr().A($.td('3476896'), $.td('My first HTM'), $.td('$53')),
            $.tr().A($.td('43#@!~~~96'), $.td('My first CSS'), $.td('$60')) )

        $l($('body').oh())
        $l($('head').oh())

        $CSS()


        /* res:
         <body style="background-color: black;">
         <h1>table</h1><table>
         <colgroup><col span="2" style="background-color: red;">
         <col style="background-color: yellow;"></colgroup>
         <tr><th>iSBN</th><th>tt</th><th>$</th></tr><tr><td>3476896</td>
         <td>My first HTM</td><td>$53</td></tr>
         <tr><td>43#@!~~~96</td><td>My first CSS</td><td>$60</td></tr></table>
         </body>
         */

    }
    FIND=function(){$.x('q')
        /*

         .find( sel  ) -> jq
         Get the descendants of each element (in the cur set (of matched els)),
         -> filtered by ( sel | jqob | el )
         Selector: string containing a selector expression to match elements against.


         _.find(el)
         Type: Element or jQuery
         el|qob  to mat els against
         Given a qob that reps 0+ DOM els,


         '.find'  allows us to search through
         the descendants   ( .children() only travels a single level down the tree )
         of these elements
         in the DOM tree
         and
         construct    a new qob   from the mtg els


         first signature:
         accepts a selector expression of the same type
         that we can pass to the $() function.
         The els will be fld by txg whh they mt
         Cnsdr a pg  w a bsc nstd lst on it:
         */

        li=$.liK('i-ii', [ 'II',

            $.uK('l-2',[

                $.liK('i-a','A'),

                $.liK('i-b',[ 'B',

                    $.uK('level-r', [
                        $.liK('i-1','1'), $.liK('i-2','2'), $.liK('i-3','3')
                    ])

                ]),

                $.li('C').K('i-c')

            ])


        ])

        $.uK('l-1', [
            $.liK('i-i','I'),
            li,
            $.liK('i-iii','III')
        ])

        it=$('li.i-ii').C('b')

        it1=it.find('li')

        it1.C('r')




        /*


         find   items within item II :
         res: red background on items A, B, 1, 2, 3, and C.
         Even though item II matches the selector expression, it is not included in the results;
         only descendants are considered candidates for the match.

         Unlike most of the tree traversal methods,
         the selector expression is required in a call to .find().
         If we need to retrieve all of the descendant elements,
         we can pass in the universal selector '*' to accomplish this.

         Selector context is implemented with the .find() method;
         ex: $( "li.item-ii" ).find( "li" )  = to $( "li", "li.item-ii" ).

         we can also filter the selection with a given jQuery collection or element.
         With the same nested list as above,
         if we start with:



         And then pass this jQuery object to find:  */
        $('li.item-ii').find(  allListElements=$('li')   )
        //   returns a jq cl which contains:
        //  only the list elements that are descendants of item II.
        // Similarly, an element may also be passed to find:
        $('li.item-ii').find(

            $( "li.item-1" )[ 0 ]
        ).C('r')


        // The result of this call would be a red background on item 1.
        // ex: Starts with all paragraphs and searches for descendant span elements,
        // same as $( "p span" )


        $.p().A( $.sp('Hello'), 'how are you?' )
        $.p('Me?').A(
            " I'm ",
            $.sp('good'),
            "."
        )

        $("p").find("span").C('o')



//ex: A sel  using a jQuery collection of all span tags.
        //Only spans within p tags are changed to red while others are left blue.
        //span {  color: blue; }

        $.d(['Did you', $.sp('eat'),'yet'])


        $("p").find(

            spans= $( "span" )

        ).C('q')



        //ex: Add spans around each word
        // then add a hover and italicize words with the letter t.

        $CSS({


            '.hilite' :{  background: 'yellow' },

            p:{

                'font-size': '20px',
                width: '200px',
                color: 'blue',
                'font-weight': 'bold',
                margin: '0 10px'}

        })


        $.p(' When the day is short find that which matters to you  or stop believing ')

        sp_="<span>"
        _sp="</span>"

        inner= $('p').text().split(" ")

        inner.join(_sp+sp_)
        html= sp_+inner+_sp

        jq= $('p').html( html )
            .fi("span").hv(
            function(){$(this).K("hilite")},
            function(){$(this).xK("hilite")}).end()
            .fCt('t')

        ob = {"font-style": "italic", "font-weight": "bolder"  }
        q = $.qs(ob)
        jq.css(ob)
    }
    MARAUTO=function(){$.x()
        outer = $.d('b', 500, 500).A()
        outer.A(inner = $.d('r', 100, 100));
        inner.mar('auto')
        outer.mar('auto')
    }

    RGX=function(){/*

     is a ptt in a str?  use the tedst, search
     TEST  mat in str  -> bool
     SEARCH    mat in str  ->  mat index || -1 if fail


     */
        a = /abc/

        x = a.exec('abc')


        //for > info  (but slower), use the exec or match methods

        // EXEC   mat in a str, -> arr

// MATCH   mat  in   str
        // - mets both rets a arr  of info  ( or null( coerces to false) if !mat )
        // - upd assoc-rx-ob pops, upd  predefined RE ob




        $.x('r', 'happy regex')


        rg = /d(b+)d/g // ~
        rg1  = new RegExp("d(b+)d", "g")

        ar   = rg.exec("cdbbdbsbz")
        // ~
        ar2 = /d(b+)d/g.exec("cdbbdbsbz")


        /*
         if  ob-initializer-created rx used
         w/o assigning it to a var,  evr occ is  new rx
         ( you cant later access rx's pops)

         myArray,
         matched str and all remembered substrs, ["dbbd", "bb"]
         index, 0-based index of the mat  in  input str,
         input,	orig str,	"cdbbdbsbz"
         [0]	The last matched chars,	"dbbd"
         myRe
         lastIndex	, The index at which to start the next mat
         -pop set only if the rx uses the g option,


         source, The text of the pt,
         Updated at the time that the rx is created (not executed),
         "d(b+)d"


         */
        my  = /d(b+)d/g
        mr = my.exec("cdbbdbsbz")
        $l("The value of lastIndex is " + my.lastIndex)
        "The value of lastIndex is 5"


        my2 = /d(b+)d/g.exec("cdbbdbsbz");
        $l("The value of lastIndex is " + /d(b+)d/g.lastIndex);


        /* "The value of lastIndex is 0"

         The occurrences of /d(b+)d/g
         in the two statements are dif rx obs
         and hence have dif values for their lastIndex property.
         If you need to access the properties of a rx
         created with an ob initializer,
         you should 1st assign it to a variable.





         ////////////////// ()

         Using ()'-ed substr mats

         Including '()' in a rx pt:
         -causes the corresponding submatch to be remembered

         /a(b)c/
         -mats the chars 'abc'
         -remembers 'b'

         To recall these ()'-ed substr mats,
         use the Arr [1],...,[n].
         The returned array holds all that were found.
         unlimited!

         using the replace() method to switch the words in the str.
         For the replacement text, the script uses the $1 and $2
         in the replacement to denote the
         1st and 2nd ()'-ed substr mats.


         ("John Smith").replace( /(\w+)\s(\w+)/, "$2, $1")
         -> "Smith, John"

         //flags  -cannot be added or changed later

         four opt flags
         can be used separately or together in any order
         g:	 Global
         i:	Case-insensitive
         m:	Multi-line
         y:	 "sticky" search   -mats starting at the cur  pos  in the tg str


         /pt/flags   ~ new RegExp("pt", "flags")

         /\w+\s/g
         looks for one or more chars followed by a space,
         and it looks for this comb throughout the str.


         ("fee fi fo fum").match(   /\w+\s/g   ~  new RegExp("\\w+\\s", "g") )
         ["fee ", "fi ", "fo "]



         MFLAG is used to specify that a multiline input str
         should be treated as mult lines.

         If the m flag is used,
         ^ and $ match at the start or end of any line
         within the input str
         instead of the start or end of the entire str.


         //////////////////////////////////////////////////////////


         REPLACE
         A String method that executes a search for a match in a str,
         and replaces the matched substr with a replacement substr.



         SPLIT  uses a rx or a fixed str to break a str into an array of substrs.

         It cleans a roughly formatted input str containing names
         (1st name 1st) separated by blanks,
         tabs and exactly one semicolon.
         Finally,  it reverses the name order (last name 1st) and sorts the list.


         The name str contains mult spaces and tabs, and may have mult spaces between 1st and last names.

         output = ["---------- Orig  S\n", names + "\n"]

         Prepare two rx pts and array storage.

         Split the str into array elements.
         */
        names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

        // poss wSp, then ';',  then poss  wSp

        nameList = names.split(

            re =  /\s*;\s*/

        )   // Break   str into rxPt-seped pieces,
        // stored in arr


        pt = /(\w+)\s+(\w+)/     //1+ chars,  spaces,  chars


        /*
         chars
         Use '()' to "memorize" portions of the pt,
         referred to later.



         bySurnameList = [];// New array for holding names being processed.

         Display the name array and populate the new array
         with ','-sep names, last 1st.

         REPLACE  removes anything matching the pt
         and replaces it with the
         memorized str—2nd memorized portion
         followed by comma space
         followed by 1st memorized portion.


         The variables $1 and $2 refer to the portions memorized while matching the pt.

         output.push("---------- After Split by Regular Expression");
         var i, len;
         for (i = 0, len = nameList.length; i < len; i++){
         output.push(nameList[i]);
         bySurnameList[i] = nameList[i].replace(pt, "$2, $1")
         }

         Display the new array.
         output.push("---------- Names Reversed")
         for (i = 0, len = bySurnameList.length; i < len; i++){
         output.push(bySurnameList[i]);
         }

         sort by lN, then display the sorted arr .
         bySurnameList.sort()
         output.push("---  Sorted")
         for (i = 0, len = bySurnameList.length; i < len; i++){
         output.push(bySurnameList[i]);
         }
         output.push("---  End")
         $l(output.join("\n"))


         use spc chars to vfy ip



         user  enters  phone num, presses the "Check" button
         -> scr  checks the validity of the num.

         valid:
         (mats the char sequence specified by the rx),
         scr shows  message thanking/confirming  num.

         invalid:
         the scr  informs the user num is not valid


         Within non-capturing '()' (?: ,

         the rx looks for three numeric chars


         \d{3}   OR | a left parenthesis

         \( followed by three digits \d{3},

         followed by a close parenthesis \),

         (end non-capturing parenthesis )
         ),

         followed by one dash,

         forward slash,

         or decimal point and when found,

         remember the char ([-\/\.]),

         followed by three digits \d{3},

         followed by the remembered match of a dash,

         forward slash, or decimal point \1,

         followed by four digits \d{4}.


         The Change event activated when the user presses Enter
         sets the value of RX.input.



         $.p('Enter your phone num (with area code)
         and then click Check',
         $.br(),'expected format is like ###-###-####)')
         $.f().act('#').A(
         $.ip().id('phone'),$.bt('Check', function(){
         testInfo(document.getElementById('phone'))  })})
         re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/
         function testInfo(phoneInput){
         OK = re.exec(phoneInput.value)
         if (!OK) {$l(OK.input +" isn't a phone num with area code!") }
         else {$l("Thanks, your phone num is " + OK[0])}}
         */


        patt = new RegExp("e")

        res = patt.exec(

            "The best things in life are free"
        )

        $l(res)

        str = "Hello world!"

        patt = /Hello/g
        r  = patt.exec( str )


        patt2 = /W3Schools/g
        r2 = patt2.exec(str)

        //        match for "Hello"  -> Hello
        //   no match for "W3Schools" -> null


        re = /ab*/g
        while(RES=re.exec('abbcdefabh')){$l('Found: '+RES[0]+', Next in:'+re.lastIndex)}
///



        rE= function(fg){
            if(fg.match(/[^gim]/)){return ("Flag specified is not valid")
            }
            ss = "The batter hit the ball with the bat and the fielder caught the ball with the glove.";
            re= new RegExp("the",fg)
            r = ss.replace(re, 'a' )
            s =  "global: " + re.global.toString() +  "<br />" +
            "ignoreCase: " + re.ignoreCase.toString() + "<br />" +
            "multiline: " + re.multiline.toString() + "<br />"
            "Resulting String: " + r

            return s


        }


        $l(  rE('g')  )
        $l('00000')


        // exec() method rets array ,  upds re pops, rets null on fail
        // The returned array has:  the matched text as the first item,
        //  then   one item for ea    matched    cap-parens  (containing   captured text)



        /*

         [0] res  (full str of chars matched) ex: Quick Brown Fox Jumps

         [1], ...[ n ]  0toinf parenthesized substring matched

         [1] = Brown  [2] = Jumps

         res.index  (0-based index of the match in the string)
         4

         res.input orig      S

         The Quick Brown Fox Jumps Over The Lazy Dog

         re.lastIndex:  !g? 0: next match's, start-ix     ex:	25
         re.source: orig re as S         quick\s(brown).+?(jumps)


         */

        // Mat "quick brown", "jumps", !chs inbtwn,rem "brown" and "jumps"

        re = /quick\s(brown).+?(jumps)/ig

        res  = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog')

        //  res  [ Quick Brown Fox Jumps,  Brown  , Jumps]
        //  res.index 4,
        // res.input    The Quick Brown Fox Jumps Over The Lazy Dog

        //
        // re.lastIndex  	25
        //  re.source    quick\s(brown).+?(jumps)

        /*


         ex: Finding successive matches
         If your regular expression uses the "g" flag,
         you can use the exec() method multiple times
         to find successive matches in the same string.
         When you do so,
         the search starts at the substring of str
         specified by the regular expression's lastIndex property
         (test() will also advance the lastIndex property).

         */
        re = /ab*/g;
        str = 'abbcdefabh';
        while (ar=re.exec(str)){
            m='Found '+ar[0]+'. '+'Next at '+re.lastIndex; $l('m: '+m)
        }


        // ->  Found abb. Next match starts at 3, Found ab. Next match starts at 9
//Note: Do not place the regular expression literal (or RegExp constructor) within the while condition
// or it will create an infinite loop if there is a match due to the lastIndex property being reset upon each iteration.
// Also be sure that the global flag is set or a loop will occur here also.
        // Example: Using exec() with RegExp literals
//You can also use exec() without creating a RegExp object:

        matches = /(hello \S+)/.exec('This is a hello world!')
        $l('matches: '+ matches[1])

        // alert  'hello world!'.



    }
    SOMECSS=function(){
        /*

         background - color
         :
         "#e3e3e3"
         border - radius
         :
         10
         float: "left"
         mar: 0
         min - height
         :
         240
         padding - bottom
         :
         15
         width: 250
         */
    }
    LOADSCR=function(){
        scr=  $('<link rel="stylesheet" href="/jquery-ui.min.css">').A(
            '<script src="/jquery-ui.min.js">')
        scr.A()}


}
old=function(){

}

