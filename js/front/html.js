short()
paragraph()
list()
divSpan()
table()
ipsum()
frame()
anchor()
frag()
image()
semantic()//CONSOLE!!
// https://developer.mozilla.org/en-US/docs/Web/API/Console/info
layout();
$.delBt=function(url, data){var bt

    bt = $.bt('delete', function( el ){

        $.ajax({
            type: 'DELETE', data: data, url: url,
            success: function (){$(el.target).closest('div').rm() }
        })
    })


    return bt
}
inputs=function(){

    textInput()
    label()
    button()
    submit()
    form()
    textarea()
//
    box()
    option()
    select()
//
    misc()


    function submit(){
        $.sm= $.submit= $.submitButton = function(buttonText, func){
            return $.button(buttonText, func).type('submit')
        }

        $.sb=function(){var g=G(arguments)

            var ip= $.ip()

            ip.at('type','submit')
            ip.A()
            return ip
        }
        $.sbb=function(){var g=G(arguments)

            var ip= $.ip()

            ip.at('type','submit')
            return ip
        }

        $.smBt= $.submitButton=function(){

            var args=G(arguments),

                button = $button.apply(0, args)

            return button.type('submit')

        }

        $.submit2 = sm=function(a){
            var g=G(arguments)

            if(g.p){

                return $button().type('submit').k('btn btn-mini button-default').T( ok(a) )
            }

            return ip('submit').k('show').v( ok(a) )

        }


        //floating div of buttons //beta
        $.bts=  function(a,b){
            var g=G(arguments),d=dva(2)
            if(g.p){
                return bts(['start',a],['stop',b]).auto()
            }
            _.e(g,function(v){v=A(v)?v:[v]
                d($button( v[0], v[1] ).k( g.p?('fc'):'' ).M(4))
            })
            return d
        }

        $.sm =   function(v){     var el = $('<input>').ty('submit').fS(16)
            if(v){el.v(v)}
            return el}
        $.sb=  function(t, fn){var g=G(arguments),bt= $.bt(t, fn).ty('submit')
            if(g.p){bt.K('btn btn-mini button-default').T( a || 'ok' )}
            //bt.A('submit').K('show')
            return bt}
    }
    function box() {
        $.cb = function (n, v, lb) {
            $._cb = function () {
                return $.ip().ty('checkbox')
            }


            var g = G(arguments), checked, n = g[0], v = g[1], lb = g[2],
                cb, id
            if (g.u) {
                return $('<input type="checkbox">').A()
            }
            if (A(v)) {
                v = v[0];
                checked = true
            }
            id = n + '-' + v
            V = '&nbsp' + v + '&nbsp'
            cb = $.ip().ty('checkbox')
            cb.n(n)
            cb.v(v)
            cb.id(id)
            if (checked) {
                cb.at({checked: 'checked'})
            }
            cb = lb ? $.sp().A(cb, $.lb(l, id))
                : g.p ? $.sp().A($.br(), cb, $.lb(V, id)) :
                !g.n ? $.sp().A(cb, $.lb(V, id)) :
                    cb
            return cb.A()

            /*

             $.cb =function(n,v,lb){var g=G(arguments), checked, n=g[0],v=g[1],lb=g[2]
             if(A(v)){v=v[0];checked=true}
             var I=n+'-'+ v,
             V='&nbsp'+v+'&nbsp',
             cbox = $.input().type('checkbox').n(n).v(v).id(I)
             if(checked){cbox.attr({checked:'checked'})}
             return lb? $.span().A(cbox , $.lb(l,I))
             :g.p? $.span().A( $.br(), cbox , $.lb(V,I))
             :g.N? $.span().A(cbox , $.lb(V,I) )
             :cbox }

             $.cb = function self(n ,v,id, makeDivWithLabel){var g=G(arguments);
             n = g.f||''; v = g.s||'';id = g.t||'';
             cb= $.ip().ty('checkbox')
             sp  = $.sp()
             if(g.A_){_.e(g, function(ar){
             sp.A($.cb(ar[0], ar[1], ar[2], ar[3]),
             $.lb(ar[1], ar[2]))});
             return sp.A($.br())}
             cb.n(n).v(v).id(id);
             if(g.p){cb.prop('checked', true)}
             if(makeDivWithLabel!==false){cb = $.dK('checkbox').A($.lb(n).prepend( cb ))}
             return cb}

             */

        }
        $.cbG = function (n, v) {

            var g = G(arguments), n = g[0], v = g[1], sp = sp();
            if (g.p) {
                _.e(v, function (v) {
                    sp.A($.cb(n, v, '+'))
                })
            }
            else {
                _.e(v, function (v) {
                    sp.A(
                        $.cb(n, v))
                })
            }
            return s.id(n)
        }
        $.cbl = $.cbLb = function () {
            var g = G(arguments)
            return $.sp().A(
                $.cb(g.f, g.s, g.t, g[3]), $.lb(g.f, g.s))
        }
        $.rb = function () {
            var g = G(arguments),
                chkd, n = g[0] || 'n', v = g[1], lb = g[2];
            if (A(v)) {
                v = v[0];
                chkd = true
            }
            var I = n + '-' + v,
                V = '&nbsp' + v + '&nbsp',
                rbox = $.ip().ty('radio').n(n).v(v).id(I);
            if (chkd) {
                rbox.at({checked: 'checked'})
            }
            return l ?
                $.sp().A(rbox, $.lb(lb, I))
                : g.p ?
                $.sp().A($.br(), rbox, $.lb(V, I))
                : g.N ?
                $.sp().A(rbox, $.lb(V, I))
                : rbox
        }
        $.rbG = function (n, v) {
            var g = G(arguments), n = g[0], v = g[1], sp = $.sp()
            if (g.p) {
                _.e(v, function (v) {
                    sp.A($.rb(n, v, '+'))
                })
            }
            else {
                _.e(v, function (v) {
                        sp.A($.rb(n, v))
                    }
                )
            }
            return sp.id(n)
        }

        $.rg= function(n, m, M){
            m=N(m)?m:0;
            M=N(M)?M:100;
            n=n||'r';
            var r =  $('<input type="range">');
            r.attr({ name:n,  min:m,  max:M  });
            return r
        }

    }
    function textInput(){


        $.ip= function(n){var g=G(arguments), o, ip
            ip = $('<input>').at('type','text')
            if(n){ ip.n(n);  ip.id(n) }
            o = g.O? g.f:
                g.N_? {w:g.f,id:g.s} :
                {ph:g.f, id:g.s, v: g.t|| g.s, n:g.t|| g.s}
            ip.ph(o.ph)
            if(o.w){ip.W(o.w)}
            if(o.id){ip.id(o.id) }
            if(o.v){ip.v(o.v)}
            if(o.n){ip.n(o.n)}
            ip.C( o.C||'r').col(o.c||'b')
            if(!g.n){
                ip.K('form-control')
                ip.A() }
            return ip
        }
        $.ipBt = function(btT,f){
            return $.d().A($.ip(),
                $.bt(btT,function(){f.A( ip.V() )})).A()}

        $.pw =function(n){
            var el = $('<input>').ty('password')
            if(n){el.n(n)}
            return el
        }


    }
    function button(){
        $.bt=  $.button=function(){var g=G(arguments), o,bt = $('<button>');
            o = g.F? {fn: g[0]} : { t : g[0], fn: g[1] };
            o.t = o.t || 'submit';
            if(!g.n){bt.A()}
            return bt.T(o.t).$(o.fn)
        }
        $.BT= $.btL=  function(t, fn){
            if(F(t)){return $.bt('submit', t)}
            var b=$('<button>');
            b.text(t);     b.$(fn)
            return b.K('btn-lg')

            /*

             $.btL=  function(t,f,C,c){
             var g=G(arguments),
             t=g[0],f=g[1],C=g[2],c=g[3],
             t=t||'ok', k=  'btn-lg' , C=C||'b', c=c||'y';
             b = $.bt().K('btn-lg').c(C, c);
             b(t);if(f){ b.o( f ) }
             if( g.n ){ b.dd() }//dropdown
             return b
             }
             */

        }
        $._bt= $.btM= function(t,fn){return $.bt(t, fn).C('b').K("btn btn-mini" )}
        $.bts=  function(a,b){
            var g=G(arguments),d=$.dA(200);
            if(g.p){return $.bts(['start',a],['stop',b]).auto()}
            g.e(function(v){v=A(v)?v:[v];
                d.A($.bt( v[0], v[1] ).k( g.p?('fc'):'' ).M(4))
            })
            return d}//floating div of buttons
        $.btR=  function(t,fn){
            var b = $.bt(t,fn).float('right')//.display('block')
            return b
        }
        $.$bt= $.btLf=function(t,fn){var b = $.bt(t,fn).float('left')//.display('block')
            return b}
        $.bX=$.btX=function(t,fn){var g=G(arguments),bt,o;
            o={
                url: g.f,
                data: g.s
            }

            t=  t || g.p? 'submit':'X'
            fn = fn ||  function (){var bt=this;
                $.aj({url: o.url, data: o.data, type: 'DELETE',
                    success: function (){$(bt).pa().rm(); if(g.n){$.rl()}}})}

            bt= $.bt(t, fn)

            return bt
        }


        $.btR=  function(text, func){
            var b = $.button(text, func).float('right')//.display('block')
            return b
        }
        $.btL=  function(text, func){
            var b = $.button(text, func).float('left')//.display('block')
            return b
        }
        testButtonRight=function(){z()
            d= $.div('b', 500, 500).drag()
            d.A(b=$.buttonRight('yes'))
        }

    }
    function textarea(){
        $.ta= $.textarea =   function(rows,cols,Cl,cl){

            var g=G(arguments),
                ta =  $('<textarea>')

            Cl=Cl||'pink'
            cl=cl||'black'

            if(g.N){
                ta.K('form-control')}

            if(N(rows)){
                ta.attr({rows: rows})}
            if(N(cols)){
                ta.attr({cols: cols})}

            return ta.C(Cl, cl)
        }

        $.ta= function(rows,cols,Cl,cl){var g=G(arguments),
            ta =  $('<textarea>');
            Cl=Cl||'p';
            cl=cl||'z';
            if(g.N){ta.K('form-control')}
            if(N(rows)){ta.at({rows: rows})}
            if(N(cols)){ta.at({cols: cols})}
            return ta.C(Cl, cl)}
    }
    function option(){
        $.o= $.op=function(n,v){var g=G(arguments),
            o= $('<option>')

            o.A( g.f );
            o.v( g.s  || g.f)


            // n = n||'option';  v=v||n; o.T(n).v(v)
            // o.V( g[0] )

            if(g.p){
                o.at({selected: true})
            }

            o.A()
            return o

        }
        $.og=$.opGr= function(lb){var g=G(arguments), o,og
            o=g.S_? {lb:g.f, ch: g.s} : {ch:g.f}
            og=  $('<optgroup>')
            if(o.lb){og.at('label',o.lb)}
            if(o.ch){if(A(o.ch)){_.e(o.ch,function(q){
                //if(N(q)){q =''+ q }
                if(S(q)){
                    q = $.o(q)
                }
                og.A(q)
            })}
            else {  og.A( o.ch )  }}
            og.A()
            return og
        }


    }
    function form(){
        $.f=$.form = function(c, act){
            var g=G(arguments),
                o, f= $('<form>').K('form')
            o=g.A? {ch: g.f} : {c:g.f, a:g.s}
            if(o.ch){g.eF(function(el){f.A(el)})}
            if(o.a){f.attr({ action: o.a})}
            if(o.c){f.C(o.c)}
            f.attr({ method: g.p? 'get':'post' })
            if(!g.n){f.A()}
            return f
        }

        $.f.gr= $.fG= $.fGD=function(){return $.dK('form-group').fS(20)}

        $.formGet=function(c, act){var g=G(arguments), c =g[0],  act =g[1],
            f  = $.f().K('form').attr('method', 'get')
            if(c){f.C(c)}
            if(act){f.at({ action: act})  }
            return f}

        $.fI= $.formInline=function(a,b){
            var f =  $.form().C('b').K('form-inline form-group'),
                g=G(arguments);
            _.e(g, function(g){f.A(g) });
            if(g.p){  f.A( $.submit('ok') ) }
            return  f
        }

        $.f.i= $.fR= $.formRight=function(a,b){ var g=G(arguments),
            f =  $.form().C('b').K('form navbar-form navbar-right');
            _.e(g, function(g){f.A(g) });
            if(g.p){  f.A( $.submit('ok') ) }
            return  f
        }

        $.f.f= $.fF= $.formFalse=function(a,b){   var g=G(arguments),
            f  = $.form().C('b').K('form well').attr({ method: false,  action: false });
            _.e(g, function(g){f.A(g) });
            if(g.p){  f.A( $.submit('ok') ) }
            return  f}

    }
    function label(){
        $.l=  function(t, fr, n, ph){  alert('$.l')
            var g=G(arguments), lb = $('<label>'),

                ip, sp
            if( !g.f ){ return lb }
            lb.for(fr).K('control-label').h(t)
            if( !g[2] ){ return lb }
            ip = $.ip().id(fr).n(n).ph(ph||'...')
            if(!g.n){ ip.K('form-control')}
            sp= $.sp().A(lb,   ip )
            if(!g.n){ $l('adding sp'); sp.A() }
            return sp
        }
        $.lb=function(){ var g=G(arguments), o, lb= $('<label>')
            o= g.A_? {ch: g.f} : {t: g.f, fr: g.s}
            if(o.ch){
                _.e(o.ch,function(ch){
                    lb.A(ch) })
                return lb }
            lb.ht(o.t).for(o.fr)
            //fr=fr||t
            //lb.K('control-label')
            if(!g.n){ lb.A() }
            return lb


        }

    }
    function select(){
        $.sl=function(){var g=G(arguments), sl=  $('<select>').A()

            if(g.A_){

                g.eF(function(o){
                    if(N(o)){o=''+o}
                    if(S(o)){ o=$.o(o) }
                    sl.A(o)
                })

            }


            if(g.p){sl.multiselect()}
            /*
             //if(!A(g.f)){g.unshift( ['select'] )}

             if(A(g.f)){
             sl= $.sel.apply($, g.f);
             _.e(g.r,function(v){
             if(S(v)){v = $.op(v)}
             sl(v)})}
             else {sl= $.sel();
             _.e(g,function(v){if (S(v)) {v = $.o(v)}
             sl(v)})  }


             */
            sl.V=function(v){
                if(U(v)){return sl.q.v()}
                sl.v(v);return sl}

            sl.o=function(f){f=f||alert
                sl.change(function(){ f(sl.V()) })
                return sl}


            if(g.O){g.eF(function(v,k){

                sl.A($.o(k,v))

            })}



            return sl
            //$.sl(['volvo', $.op('merc'), 'saab' ])
//$('<select multiple>').A().A(  $.op('merc'),        $.op('merc1'),        $.op('merc2'))
//$('<select size="3">').A().A($.op('merc'), $.op('merc1'),  $.op('merc2'))
        }
        $.SEL =  function(n,i){var g=G(arguments),sl

            sl=  $('<select>')
            sl.n(n).id(i)
            if(!g.n){sl.K('form-control')}
            if(g.p){sl.at({mutiple:true})}
            return sl
        }
        $sel=function(){var g=G(arguments)
            var sl= $.sl().id(g.f)
            _.e(g.r, function(g){
                var o= $.op(g).v(g)
                sl.A(o)
            })
            sl.A()
            return sl}
    }
    function misc(){
        $.dropDown=function(a,f){

            var l = $('<a>').id(a).A(a)
            if(F(f)){  l.click(f)  }
            else {  l.href( f|| '#' )}
            return l.K('dropdown-toggle')
                .at({ 'data-target' : 'dropdown' })
        }
        $.active=function(a,f){
            var l = $('<a>').id(a).A(a)
            if(F(f)){  l.$(f)  }
            else {  l.href( f|| '#' )}
            return   l.K('active')}

        TXFO=function(){z()

            return $.form().A(

                $.sel(
                    ['single'],
                    'Single',
                    'Single2'),

                $.sel(
                    ['multiple', '+'],
                    'Multiple', 'Multiple2','Multiple3' ),

                $.cb(
                    ['check','check1', 'ch1'],
                    ['check', 'check2', 'ch2', '+']),

                $.rb(
                    ['radio','radio1', 'r1', '+'],
                    ['radio', 'radio2', 'r2'],
                    '+'),

                $.submit()

            ).A()

        }
        TXF=function(){z(); $.f().A(
            $.sel(['sing'], 'Sing', 'Sing2'),
            $.sel(['mult', '+'], 'Mult', 'Mul2','Mult3' ),
            $.cb(['ch','ch1', 'ch1'], ['ch', 'ch2', 'ch2', '+']),
            $.rb(['ra','ra1', 'r1', '+'], ['ra', 'ra2', 'r2'], '+'),
            $.submit()).A()
        }
        BTR=function(){z(); d= $.d('b', 500, 500,'+').A(b=$.btR('yes'))}

    }


    old=function(){

        $c = function(c, w, h){var g=G(arguments),o
            o=S(c)?{c:g[0],w:g[1],h:g[2]}:{w:g[0],h:g[1]}
            o.c= o.c||'y'
            return $.c(o.c, o.w||500, h, '+').al(.8)
        }

//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
        c3X=function(a){ return $.c(300).fit(a) };



        johnX=function(){

            var o={};

            o.d=3;

            o.a=function(){o.d++};

            o.g=function(){return o.d};

            return o};


        fredX=function(){
            var o = john();

            o.m =function(){o.d--};
            return o
        };



        REQUESTSX=function(){var c=CT(),d=dv('y',800,600);
            c(d(h1('Buddy requests'),br(),
                MB=_d().w(600).h(500)( )).$$(function(){d.drg()}));
            qG('/gRq',function(msgs){_e(msgs,function(msg){MB(_d()(
                h6('from '+msg.fr+' on '+msg.dt),
                h5(msg.m),
                bt('accept',function(){qP('/yRq',{u:msg.fr})}),bt('deny'),hr()))})})};
        USERSX=function(){

            CT(h1('Users: '),br(),rr=row());
            getUsers(function(u){




                _e(u,function(u){  qP('/dud',{d:u.m}, function(m){
                    rr(tn(pg(u.u),br(),m).o(function(){
                        win(_d()(br(),hr(),h3('User: '+ u.u), br(),
                            xc().w(300).h(300).f(m), s=h1(),  d=_d(),
                            ms=ta().c('w','z'),bt('mail',function(){qP('/sMsg',{m:ms.V(),to:u.u})}),
                            bt('chat',function(){iMsg(u.u,ms.V())}),
                            bt('buddy-request',function(){qP('/sRq',{to:u.u})})));

                        prof(u.u, d);

                        wUSt(u.u,function(s){
                            d(h1('STATUS: '+s));
                            d(bt('comment',function(){iMsg(u.u,ms.V())}),
                                bt('see feed',function(){iMsg( u.u, ms.V())}),
                                bt('see blog',function(){BLOG(u.u)}),
                                bt('challenge',function(){qP('/sRq',{to:u.u})}))})}))})})});



            tab1=['users',function(){


            }];

            tab2=['a',function(){}];
            tab3=['a',function(){}];
            tab4=['a',function(){}];

            s2(t=tabs(tab1,tab2,tab3,tab4));
            t.load()

        };

        BLOGX=function(u){

            z();
            WAPNAV();

            format();

            s1(h1('user '+u+' blog'));


            qG('/pstu',{u:u}, function(i){blp(i, s2, '+')},'+')};

        $autoDivX= autoX=function(){var g=G(arguments),
            d= $.d().auto();
            _.e(g, function(g){ d.A(g) });
            return d};
        showTabX =shwX=function(a){

            qi(a).q.tab('show');

            //return a
        };
        firstChildX =ch$X =function(a){  a.ch(0).$()  };
        TabX =tabX=function(tabText, func){

            var g=G(arguments),
                tabText=g[0],
                func=g[1],

                theLi= $liA(
                    tabText,
                    function(){
                        showTab(tabText); func()
                    });

            theLi.load=function(){
                showTab(tabText); func()  };

            if(g.m){  theLi.k('active')  }

            return theLi
        };
        $passwordX=function(){return ip().type('password').k('form-control')};
        tabsX=function(a){
            var g=G(arguments), a=g[0],  d, u;
            d=$.d('X').WH('auto').A(
                theUlNav=$.ul().K('nav nav-tabs'),
                TABS= $.sp()
            );
            //ok so a can already be a tag.. OR, if you pass in an array, it will make it a tag for :)
            if(A(a)){a = $.tab.apply($.tab, a)}
            theUlNav(a);
            _.e(g.r,   function(a){if( A(a) ){a = _a(tab, a)}
                theUlNav(a)

            });
            d.load=function(){a.children[0].$(); return d};
            return d
        }
    }
}
inputs()
function image(){


    $.i=$.img= function(srce, fn){var g=G(arguments), o,i;

        $.im = function(img, func){
            i = $.img().src(img);
            func(i[0]);
            //s$(e).contains('data:')
            return i}
        J.src =    function f(e){
            var _src=function(a){ a = _.ext(a);
                return s$(a).startsWith('/')? a : '/'+ a };
            //if(Q(e)){$l('q');e=$(e)[0]}
            if( e.image ){ e=e.image}
            if( C(e) ){ e = C(e) }
            if( e.src ){ e = e.src}
            if( e.toDataURL ){  e=tDU(e) }
            return s$(e).contains('data:')?  e
                :  S(e) ?  _src(e)
                : 0
        };
        o= F(g[0])? {fn:g[0]}: {src:g[0], fn:g[1]};
        i = $( new Image() );
        //gets rid of auto-scaling quirk
        /*
         i.i=i.l=i.load(function(i){
         i._ =i[0]
         //i = $(i.target)
         // img.W( img.W() )
         // img.H( img.H() )
         })*/
        i.i=function(src){
            if(U(src)){return this[0].src}
            this.src(J.src(src));
            return this
        };
        i.r=function(fn){

            this.load(function(e){
                fn(e, i)
            });
            return this
        };
        i.r(function(_i){i._=_i.target});
        if(o.fn){i.r(o.fn)}//i.l(function(e){o.fn($(e.target), e)})
        if(o.src){i.i(o.src)}
        i.A()
        return i
    }

    $.iI=function(i){if(O(i)){
        return S($(i)[0].src)}}



}
function frag(){



    $.frg=function(){
        return $(


            document.createDocumentFragment()
        )

    }


    FRAG=function(){$.x('x', 'frag')
        frg = $.frg()
        _.t(5, function(i){  frg.A($.sp(i))  })
        $.d([$.hr(), frg, $.hr()])
    }


}
function anchor(){


    $.a= function(a,f){
        var g=G(arguments), a=g[0], f=g[1],la=a||''
        $.a2 =function(a, fn){var g=G(arguments), a=g[0], f=g[1], el=$.a().id(a).A(a);
            if(F(fn)){el.o(fn)} else {el.hr(fn||'#')}
            if(g.n){el.dd()}
            //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
            if(g.p){el=li(el)}
            if(g.m){el=li(el).K('active')}
            return el}
        l = $('<a>').A(a)//.id(a)
        if(F(f)){  l.$(f)  } else {  l.href( f|| '#' )   }
        // if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
        //if(g.p){ l = $.li( l ) }
        //if(g.m){ l = $.li( l ).K('active') }
        return l.A()
    }


    $.tg=function(a){return $('<'+a+'>')}

}

function divSpan(){
    $.span= $.sp

    $.dI=function(id,a,b,c,d,e,f){
        //dI conflict?
        return $.d(a,b,c,d,e,f).id(id)}

    $.dK=function(k){

        $l('in $.dK')

        var d= $.d()
            d.K(k)
        return d
    }


    $.dD= $.divD = function(c, w, h, x,y ){var d,g=G(arguments)
        w=N(w,200)
        h=N(h,w)
        d = $.d(200,200,'+')
        if(g.u){ return d.C('n') }
        if(g.S_ ) {  d.C(c)
            if( N(w) ){ d.W( w  ) }
            if( N(h) ){ d.H( h  ) }
            if( N(x) ){ d.X( x ) }
            if( N(y) ){ d.Y( y ) }
            return d}
        if(g.N_){
            return $.dD('o',c,w,h,x)}
    }
    $.dA=   function func(col,    w, height, x,y ){var g=G(arguments),


        div = $.d().P('absolute')

        if( U(col)){
            return div.C('brown')
        }

        if( S(col)) {  div.C(col);
            if( N(w) ){ div.W( w ) }
            if( N(height) ){ div.H( height ) }
            if( N(x) ){ div.X( x ) }
            if( N(y) ){ div.Y( y ) }
            if(g.p){div.dg()}
            return div
        }

        if(N(col)){ return $.dA('o', col, w, height, x) }

    }
    $.dA= $.divA = function (c, w, h, x,y ){var g=G(arguments),

        d=$.d().P('absolute'),

        o=g.O? g.f:
            g.S_? {c:g.f,w:g.s,h:g.t,x:g[3],y:g[4]}:
            {w:g.f, h:g.s,x: g.t,y:g[3] }
        if( N(o.w) ){ d.W(o.w ) }
        if( N(o.h) ){ d.H(o.h ) }
        d.XY( N(x,0), N(y,0))

        if(o.c){
            d.C(o.c)
        }

        return d
    }



    $.d= $.div= function( ){var g=G(arguments), d=$('<div>'),o
        o= g.A? {a:g.f}: g.O?g.f:  S(g[1])?
        {c:g.f, k: g.s, w:g.t, h:g[3], x:g[4], y:g[5]}:
            g.S_? {c:g.f, w:g.s, h:g.t, x:g[3], y:g[4]}:
            {w:g.f, h:g.s, x:g.t,y:g[3]}

        if(o.c){
            d.C(o.c)
        }


        if(N(o.w)){d.W(o.w)}
        if(N(o.h)){d.H(o.h)}
        if(N(o.x)){
            d.ab(o.x, N(o.y,0))}
        if(o.a){_.e(g[0], function(g){d.A(g)})}
        if(o.k){d.K(o.k)}
        if(!g.n){d.A()}
        if(g.p){d.dg()}
        return _d=d
    }
    $.dD=  $.divD = function func(col, w, h, x,y ){

        w = N(w)? w: 200;
        h = N(h)? h: w;

        var div = $.div(200, 200).drag();

        if( U(col)){ return div.C('brown') }

        if( S(col)) {  div.C(col);

            if( N(w) ){ div.W( w ) }

            if( N(h) ){ div.H( h ) }


            if( N(x) ){ div.X( x ) }

            if( N(y) ){ div.Y( y ) }

            return div }

        if(N(col)){ return func( 'orange', col, w, h, x) }};
    $.dIl=$.inlineDiv=function(a,b,c){
        var d = dv(a, b, c);
        d.display('inline');
        return d
    };
    $.ilBl=$.inlineBlockDiv=function(a,b,c){
        var d = $.d(a, b, c);
        d.display('inline-block');
        return d
    };
    $.dva=function (r,w,h,l,t){
//color, w, h, left, top
        var g=G(arguments),
            r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d

        if(!S(r)){

            return g.n?

                $.dva( $r(), r,w,h,l,'-') :

                g.p? $.dva( $r(),r,w,h,l,'+') :

                    $.dva($r(),r,w,h,l)
        }


        d= $.d(r).p('a').C(r)

        if(g.p){

            if(w){d.l(w)};

            if(h){d.t(h)}

            d.P(16)

            return d.auto()
        }

        w=w||1; h=h||w; d.WH(w*100, h*100)

        l=l||0; t=t||l; d.l(l*100).t(t*100)

        if(!g.n){d.dg()}

        return d
    }

    $.sp=function(){var g=G(arguments),
        sp=$('<span>'), str='';
        _.e(g, function(val){if(S(val)){ str+= val }
        else { sp.A( val ) }});
        if(str){ sp.T(str) }
        sp.A()
        return sp
    }



}
function list(){


    $.la=$.liA=  function(){var  g=G(arguments), o,

        a = $('<a>').hr('#'),
        li=$('<li>')


        /*
         if(A(g.f)){
         _.e(g.f, function(el){})
         return li.A(a)
         }*/

        o= g.F_? {fn: g.f}:
            g.S_? {id: g.f, fn: g.s}:

            {el: g.f, fn: g.s}


        o.ht= o.id
        if(o.id){a.id(o.id)}
        if(o.ht){a.html(o.ht)}
        if(o.el){a.A(o.el)}
        if(o.fn){a.$(o.fn)}
        li.A(a)
        return li
    }
    $.lL= $.lib= $.liLb=   function(){
        var  g=G(arguments), o,
            li=$('<li>'),
            lb=$.lb().a2(li)


        if(A(g.f)){
            _.e(g.f, function(el){
                lb.A(el)
            })
            return li
        }

        o= g.F_? {fn: g.f}:
            g.S_? {id: g.f, fn: g.s}:
            {el: g.f, fn: g.s}
        o.ht= o.id
        if(o.id){a.id(o.id)}
        if(o.ht){a.html(o.ht)}
        if(o.el){a.A(o.el)}
        if(o.fn){a.$(o.fn)}

        return li
    }
    $.li=function(){var g=G(arguments), li = $('<li>')
        if( A(g[0]) ){
            _.e(g[0],
                function(g){
                    li.A(g)
                })
        }

        if(g.S_){li.A(g.f)}
        if(g.p){li.K('active')}
        if(g.n){li.k('dropdown')}
        li.A()
        return li
    }


    $.ol=function(o,b){var g=G(arguments),
        ol=$('<ol>');
        _.e(g, function(v){ol.A(v)});
        return ol
    }
    $.ul=function(){var g=G(arguments), o, ul=$('<ul>')


        if(g.A_){
            _.e(g.f, function (el) {
                if (g.p) {if(el.iLi()){el = $.li([el])}}
                if(S(el)){el = $.li(el)}
                ul.A(el)
            })}


        //if(g.p){ul.dg()}
        if(g.n){ul.K('ddm')} else {ul.A()}//dropdown menu
        if(g.p){ul.K('n nbn')}//navbar nav



        // $l(ul.oh())

        return ul
    }

    $.uK= $.ulK=function(k, a,b,c,d){
        var ul = $.ul(a,b,c,d).K(k)
        return ul
    }
    $.liK=function(k, a,b,c,d){
        var li = $.li(a,b,c,d)
        li.K(k)
        return li
    }
}
function table(){

    $.t=function(a){var g=G(arguments)
        var t=$('<table>')
        if(A(a)){_.e(a, function(el){
            t.A(el)
        })}
        if(!g.n){t.A()}
        return t
    }
    $.tHR=function(ch){
        var el = $.tr().a2(  $.tH()  )
        if(A(ch)){
            _.e(ch, function(ch){
                if(S(ch)){ch= $.th(ch)}
                el.A(ch)
            })
        }
        return el
    }
    $.tH=function(a){

        var tH =  $('<thead>')

        if(A(a)){_.e(a, function(el){ tH.A(el)  })}

        else if (O(a)){tH.A(a)}


        return  tH

    }
    $.th=function(a){
        var th =  $('<th>')

        if(A(a)){_.e(a, function(el){th.A(el)})}

        else if(S(a)){th.A(a)}

        return th
    }
    $.tB=$.tb= function(){return  $('<tbody>') }
    $.tr=function(a){var g=G(arguments)
        var tr = $('<tr>')
        if(A(a)){_.e(a, function(el){
            if(S(el)){ el = g.p? $.th(el):  $.td(el) }
            tr.A(el)
        })}
        else if(a){ tr.A(a) }
        return tr
    }
    $.td=function(a){var g=G(arguments)
        var td = $('<td>')
        if(A(a)){_.e(a, function(el){td.A(el)})}
        else if(a){td.A(a) }
        return td
    }
    $.cl=function(){ var cl= $('<col>'); return cl }
    $.cg=function(){var cg= $('<colgroup>'); return cg }


    $.R= $.row=function(n){
        var div= $.div().addClass('row')
        _.each( G(arguments), function(arg){ div.A(arg) } )
        return div
    }

}
function frame() {
    $.iF = function () {
        z()
        ifr = $('<iframe>').WH(1000, 1000).C('b').src('http://www.playboy.com')
        $.dA().A(ifr).P(30)
    }
    IFR = function () {
        $.x()
        $.iF()
    }
}
function short(){


    $.br=function(a){
        if (U(a) ){ return $('<br>') }
        var sp = $.sp();
        _.t(a, function(){ sp.A( $('<br>') )  });
        return sp
    }

    $.hr=function(c,h,w){
        var hr=$('<hr>')

        //  if( N(c) ){  return $.hr('z', c, h )  }

        //  hr = $('<hr>').h(h ||2).C(c||'z');

        //  if(w ){ hr.W(w ) }

        return hr
    }


    $.h1=function(){
        var h=$('<h1>');
        h.A.apply(h,G(arguments));

        h.A()
        return h
    }
    $.h2=function(){
        var h=$( '<h2>' );
        h.A.apply(h,G(arguments));
        h.A()
        return h
    }
    $.h3=function(){
        var h=$( '<h3>' );
        h.A.apply(h,G(arguments));   h.A()
        return h}
    $.h4=function(){
        var h=$( '<h4>' );
        h.A.apply(h,G(arguments));   h.A()
        return h}
    $.h5=function(){
        var h=$( '<h5>' );
        h.A.apply(h,G(arguments));   h.A()
        return h}
    $.h6=function(){var h=$( '<h6>' );
        h.A.apply(h,G(arguments));   h.A()
        return h}



}
function paragraph() {
    $.str=function(){var g=G(arguments), s= $('<strong>');
        _.e(g,function(g){s.A(g)});
        return s
    }

    $.p = function () {
        var g = G(arguments), p = $('<p>')
        if (g.A_) {
            g.eF(function (g) {
                p.A(g)
            })
        }
        else {
            g.e(function (g) {
                p.A(g)
            })
        }
        p.A()
        return p
    }
    $.ps = function () {
        var sp = $.sp(), g = G(arguments)
        g.e(function (g) {
            sp.A($.p(g))
        })
        return sp
    }

}
function semantic() {
    $.pre=function(){
        return  $("<pre>").A()
    }
    $.b=function(a,k){
        var g=G(arguments),b= $('<b>')
        //if(g.p){a =  '&nbsp;'+a  }
        //  b.H(a)
        //  b.K(k)

        if(a){b= b.A(b)}


        if(!g.n){b.A()}
        return b
    }
    $.hdr= function(){//$.H=
        var g=G(arguments), hdr = $('<header>')
        //  return $.ip().ty('header').n(n).v(v)
        g.e(function(q){hdr.A(q)})
        hdr.A()
        return hdr}


    $.F=$.ftr= $.footer=function(){
        return $('<footer>')
    }

    $.nv=function(){
        return $('<nav>')
    }

    $.sc= $.sct= function(a){
        var sc = $('<section>')
        if(a){ sc.id(a) }
        return sc
    }



    $.ac= function(){//$.H=$.arg=
        var g=G(arguments), art = $('<article>')
        g.e(function(q){
            art.A(q)
        })
        art.A()
        return art
    }
    $.em=function(){var em= $('<em>'); return em}
    $.tp=function(id){return  $('<template>').id(id)}

    $.as = function () {
        var a = $('<aside>')

        G(arguments).e(function (q) {
            a.A(q)
        })
        a.A()
        return a
    }
}
function ipsum() {


    $.ips=function(len){   len = len || 1;
        var str = '';
        _.t(len, function(){
            str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
        });
        return str}
    $.ipsP=function(len){return $.p().A($.ipsum(len) )}


    ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
    'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
    ips2 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
    'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
    'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
    'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
    'te feugait nulla facilisi.'

    ips3 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
    'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
    'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
    'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
    'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
    'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
    'ut laoreet dolore magna aliquam erat volutpat.'
}
function layout(){
    $.x= $.E=z=$.z=$.show=function(c,t){var g=G(arguments)
        $('body').empty()
        bd= $.bd()
        if(g.O_){

            $CSS(g.f)
            if(g.s){$.h1(g.s);$.hr().A()}
            bd.C($r())
            return $}

        if(c){bd.C(c)} else {bd.C($r())}
        if(t){bd.A($.h1(t))}
        if(g.p){bd.A($.hr())}
        return $
    }
    $.h=function(){var g=G(arguments),o
        bd= $.bd()
        bd.empty()
        bd.C($r())
        o= g.S_? {t:g.f, s: g.s}: {s: g.f}
        if(o.s){$CSS(o.s)}
        if(o.t){$.h1(o.t);$.hr().A()}
        return $
    }
    $t = function(a, b){if(b2d.test){
        var g=G(arguments), a=g[0], b=g[1],str
        if(D(b)){ str='||'
            _.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
            str += '|'}
        else {str = a.toString()}
        $l(str)}
        return a
    }
}



$.sr=$.fn.src
$.ro=$.fn.role
$.cx=$.fn.ctx
$.slP=$.fn.selPic

CORNERS=function(){
    //  dva(2, 2, 2, 2 )
    div = $.dA(200,200).A(
        $.dA('r', 20, 20).top(-10).left(-10),
        $.dA('y', 20, 20).bottom(-10).right(-10),
        $.dA('g', 20, 20).top(-10).right(-10),
        $.dA('b', 20, 20).bottom(-10).left(-10)
    );
    i = $.dF('u').col('w').fS( 20).al(.2).tA('c').width('100%').top(100);
    i.H( W() + ' * ' + H() );
    Z(function(){  i.H(  W() + ' * ' + H() )  });

    $.$( function(){ _.rat( function(){$('body').C($r())  } , 10 )
    });
    i.grow()
}