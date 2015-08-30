

INDEXX=function(){z()
    s= $.dragStage().bm('me',function(bm){b=bm
        SL(b)

        _.t(10,  function(){s.bm('guy',SL)  })
        s.ix(b, 3)
    })
}
CARD=function(){

    var t=100,d


    card=function(a,b){
        d = $.dA('y',300)//.cen()
        d.$$( function(){ d.rm() } )
        if( O(a) ){d.A( $.h3(a.u||'anon'), $.i(a.m||'me') )}
        else {d.A( $.h3(a||'anon'), $.i(b||'me') )}
        d.WH(200)
    }

    cards=function(){

        $.get('/users', function(u){_.e(u,function(u){
            $.P('/getImageById',  u.m, function(mug){
                d= $.dA('r','+').lt(t)
                d.A( $.h2( u.u ),  $.i( mug ).WH(200,300) )
                t+=20})})})}
}


SELECTED=function(){z()
    st = $.dragStage()
    st.wBm('coin',  function(bm){
        coin=bm;
        SL(coin)
        selected(bm)

    })
    st.wBm('sun', function(bm){

        sun=bm;
        SL(bm)
        selected(bm)

    })
    TextAdder(st)
    st.wBm('me', function(bm){

        me=bitmap=bm
        SL(bm)
        bm.rgc('+')
        scaleShake(bm)
        //rotateShake(bm)
        selected(bm)
        st.wBm('flame', function(bm){ flame=bm; SL(bm);selected(bm) })
        st.wBm('guy', function(bm){ guy=bm;SL(bm); selected(bm) })

    })
    d= $.d('y', '+')
    loadImagesDiv=function() {
        d.E()
        $.eG('img', function (img) {
            d.A(
                $imageSizeFuncCan(
                    img.d, 1, function () {
                        st.wBm(img.d, function (bm) {
                            SL(bm.sxy(.4));
                            bm.rgc('+');
                            selected(bm)
                        })
                    })
            )})}
    loadImagesDiv()
    d= $.dA('y', 500).A(

        $.bt('freeze',  createjs.Tween.removeAllTweens ),
        $.bt('right', function(){ bm.x( bm.x() +10)  }),
        $.bt('left', function(){  bm.x( bm.x() -10)  }),
        $.bt('up', function(){    bm.y( bm.y() -10)  }),
        $.bt('down', function(){  bm.y( bm.y() +10)  }),
        $.br(),
        //fix
        $.bt('bigger', function(){   bm.sxy(1.1, '*') }),
        $.bt('smaller', function(){  bm.sxy(  .9,'*' )  }),
        //
        $.bt('wider',   function(){  bm.sx( bm.sx() * 1.1 )  }),
        $.bt('thinner', function(){  bm.sx( bm.sx() * .9 )  }),
        $.bt('taller',  function(){  bm.sy( bm.sy() *1.1 ) }),
        $.bt('shorter', function(){  bm.sy( bm.sy() *.9)  }), $.br(),
        $.bt('CW',  function(){  bm.rt(bm.rt() + 10) }),
        $.bt('CCW', function(){  bm.rt(bm.rt() -10)  }),
        $.br(),

        $.bt('get index', function(){

            pop('index: ' + st.ix(bm)  )

        }),


        $.bt('set index to 3', function(){

            st.ix(bm, 3)
            pop('index: ' +  st.ix(bm) )

        }),


        $.bt('z-up',  function(){

            st.ix(bm, st.ix(bm)+1)

        }),

        $.bt('z-down', function(){   st.ix(bm, st.ix(bm)-1) }),

        $.bt('remove', function(){

            st.rm(bm)

        }),
        $.bt('clone', function(){st.A($Ct().A( bm.ob.clone()))}), $.br(),
        $.bt('save', function(){
            st.sv(function(){loadImagesDiv()})
        }),
        $.bt('paint', function(){ stagePainter(st) }),
        $.bt('', function(){  })
    )







}
TRANSFORM = function () {
    $.fm()
    wMs(function (b, s) {
        st = s
        b.xy(0, 0)
        b.rgc('+')
        TR(b)
        wMb(function (b) {
            b.xy(50, 50).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(100, 100).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(200, 200).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(300, 300).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(400, 400).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(150, 150).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(250, 250).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(350, 350).rgc('+');
            TR(b)
        }, s)
    }, '-')
    s1.A($.bt('rotate', function () {
            s.ch('-')
            wMb(
                function (b, s) {
                    s.M(50); //b=Do(bj(b))
                    RT(b.xy(400))
                    wMb(function (b) {
                            b.xy(300).al(.5)

                            RT(b, '-')
                        }
                        , s)
                    wMb(function (b) {
                            KK(b.xy(200).sxy(1.4), '+')
                        }
                        , s)
                    wMb(function (b) {
                            KK(b.xy(100).sxy(.6))
                        }
                        , s)
                }, s)
        }), $.br(2),
        $.bt('skew', function () {

            s.ch('-')

            wMb(function (b, s) {
                s.mg(function (b, s) {
                    SK(b.xy(300).rgc('+').sxy(1.5))
                    s.w(2000).h(2000)
                })
                //b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
            }, s)
        }), $.br(2),
        $.bt('register', function () {

            s.remove()

            wMb(function (b, s) {
                TR(b);
                rg1(b);
                reggy(b)
            }, s)

            wMb(function (b, s) {
                TR(b);
                b.rgc();
                rg1(b);
                reggy(b)
            }, s)
        }),
        $.br(2))
}
SHOWCASE = function () {
    $.fm()
    s2.A(
        $.sp('pics!').id('pics')
    )
    s2.A(x = $.c('y', 500, 500))
    //x.q.cen()
    $.eG('img', function (v) {
        $.c().fit(v.d, 1)

        x.X()
        url$ = v.d
        x.fit(v.d)

        $('#pics').A(x)

    })
    s2.A(
        $.br(2), $.lb('caption'),
        cap$ = $.ip().W(500)
    )
    s1($.br(2), $.lb('category'),
        cat$ = $.ip().W(200), $.br(2),
        $.bt('post', function () {
            o = {t: cat$.V(), c: cap$.V(), du: url$}
            $.P('pst', o, function () {
                $.pop('posted')
            })
        }), $.br(2),

        $.bt('make a showcase', function () {
        }), $.br(2),
        $.bt('submit to ranky', function () {
        }), $.br(2)
    )

}


CHAN=function(){
    $.btEm=  function(t ,toEmit){ return $.bt(t, function(){k.em(toEmit||t)})} //a button that emits!
    $.dA().A(

        $.btEm('msg', 'chat'),
        $.bt('room', function(){
            Y.chan('chat',  function(){$l('chat')} ).on('al', pop)
        })
    ).lt(300)
    k.on('newChat', function(d){ CH.bc(d.n+': '+ d.m) })
    k.on('youChat', function(d){ CH.s(d.n+': '+ d.m) })

}
POSTS=function(){$.fm()

    s1.A(

        dd= $.inputBox({
            boxTitle:'new post',
            url:'/pst',
            btT:'post',
            func: function(){Y.run('home')},
            inputType:'textAndTextArea'
        }),



        $.h2('attach:'),


        $.bt('pic', function(){

            m= $.pop(  ps= $.d().A( $.h3('pic select')  ) )
            $.getJSON('/img', function(pics){

                _.e(pics, function(p){
                    ps.A(  $.i(p.d).WH(40,40).$(  function(){
                        attached.E( $.i(p.d).WH(20,20)  )
                        m.modal( 'hide' )
                    }))})})}),

        attached= $.d().A()
    )



    tab2=[

        'buds',

        function(){  TABS.E( $.h1('bud posts') )  }

    ]



    tab1=['all',

        function(){

            TABS.E($.h1('public posts'))

            $.eG('/psts',

                function(i){

                    $.blp(i, TABS, '-')

                })

        }
    ]



    tab3= $.tab('user',function(){
        u=$w['from']||'a'


        s1.E(
            $.sp('topics: '))

        TABS.E(
            $.h1('user '+u+' blog'))


        $.eG('/pstu',{u:u}, function(i){$.blp(i, TABS, '+') })})


    tab4= $.tab('topic',function(){
        TOPIC=$w['topic']||'fantasy'
        TABS.E(h1('posts on '+TOPIC+' topic'))
        $.eG('/pstt', {t:TOPIC},  function(i){  blp(i, TABS, '/')})})

    tab5=['yours',

        function(){

            TABS.E($.h1('your posts'))

            $.eG('/pst', function(i){$.blp(i,TABS,'+')})

        }]


    s2.A(
        t= $.tabs(tab1,tab2,tab3,tab4,tab5))

    t.load()

}




PROFILE=function(){
    $.boot = function(){z();

        var r = $.R()
        _.e(arguments, function(g){r.A(g) })
        return  ct = $.Ct().A(r)
    }

    $.boot(

        $.h1('you got a profile?'),
        $.d().id('content'),
        f = $.f().C('r').WH(400).A(
            $.d().A(
                $.lb('about me'),
                $.ta().id('aboutMe')),
            $.d().A(
                $.lb('i enjoy'),
                $.ip().id('iEnjoy')),
            $.d().A(
                $.lb('i seek'),
                $.ip().id('iSeek')),
            $.sm('save profile'),
            $.bt('undo', function(){
                if(p){
                    $('#aboutMe').val(p.aboutMe )
                    $('#iEnjoy').val(p.iEnjoy )
                    $('#iSeek').val(p.iSeek )
                }
            }),
            $.bt('clearr', function(){
                $('input').val('')
                $('#iEnjoy').val('')
                $('#iSeek').val('' )
            })
        ))

    $.P('getMyProfile', function(pf){



        if(pf){
            $l('found profile -> _pf')
            _pf=pf
            $('#aboutMe').v(pf.aboutMe )
            $('#iEnjoy').v(pf.iEnjoy )
            $('#iSeek').v(pf.iSeek )
        }

        else {$l('no profile found')}

    })




    $('form').submit(function(e){
        e.preventDefault()

        var data = {
            aboutMe: $('#aboutMe').v(),
            iEnjoy: $('#iEnjoy').v(),
            iSeek: $('#iSeek').v()
        }

        $.P('myprofile', data, function(){

            $l('P(mypf)')
            $.P('getMyProfile', function(pf){
                _pf=pf
                $l('getMyProfile -> _pf')
            })
            $l('form data submited..')
        })

    })


}
USERS = function(){

    d = $.Ct().A(
        $.R(),
        $.h1('users'),
        $.d('y').id('ct').A('users will go here via ajax in a moment...', $.br(2))
    ).C('r')


    //i = 0

    $.G('users', function(u){
        d.E();
        _.e(u,function(u) { //$l(u.username + '-' + i++)

            d.A(
                $.dK("col-xs-6 col-sm-3 col-md-2 col-lg-2").A($.user(u))
            )

        })
    })

}
USER =function(a){$.fm()
    //problem: click on a user.. creates a NEW USER?

    if(U(username=  _pam || a)){$l('username undefined.  default to -> a'); username = 'a'}


    $.G('user/'+ username, function(u){
        s1.A(
            $.h1(u.username),
            $.i(u.mug).WH(100),
            $.h4(u.status),
            statusSpan = $.sp(),
            i = $.i(),
            messageTextarea= $.ta().C('w','z')
            // $chatButton( _pam,  messageTextarea)
        )
    })

    tab1= $.tab('profile',function(){ TABS.E();  $.pf(_pam, TABS) })

    tab2= $.tab('pics', function(){
        TABS.E().A('hahaha')
        $.eG('images/' + _pam,  function(i){  TABS.A( $.i(i.d).WH(100) )})
    })


    tab3= $.tab('blog',function(){TABS.E()
        $.eG('/pstu', {u:username},  function(i){$.blp(i, TABS, '+') })
    })


    /*
     tab4= $.tab('buds',function(){ TABS.E() })
     tab5= $.tab('groups',function(){ TABS.E() })


     tab6= $.tab('email', function(){
     //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
     from = _pam
     var messageTextarea = $.textarea()
     _$username = window['from'] || 'b'

     TABS.E()(
     $.h1('convo with '+u),
     $.h1('Messages'), $.br())
     $.eG('gMsgW', { u: _$username }, function( m ){var c
     c = $.c('X', 100)
     $.P('mug', {u: m.fr}, function(mug){ c.fit(mug) })
     TABS.A(
     $.R().A(
     $.Cl(2,c),
     $.Cl(10,
     $.h6('from: ' + m.fr),
     $.h4($.dt( m.dt ).dt()).K('pull-right'),
     $.h5(m.m))
     ),
     $.hr()
     )})
     TABS.A(
     messageTextarea,
     $.bt('new message', function(){$.P('sMsg' , {m: messageTextarea.V(), to: from})}), $.br(2))
     })
     */
    tabs= $.tabs(tab1,tab2,tab3//,tab4,tab5,tab6

    )


    s2.A(tabs)

    tabs.load()

}
STATUS=function(){$.fm()

    s1.A(
        $.h1('status'),
        $.ip().id('statusInput'),
        $.bt('update', function(){$.P('status',
            {text: $('#statusInput').v()}, function(){$l('status updated')})}))
}
MESSAGES=function(){$.fm()  //is TABS never set? -- its the content holder for the panes!!
    tab1=[ 'received',  function(){
        TABS.E(   $.h1('Messages'),  $.br()  )
        $.eG('gMsg', function(m){TABS.A(
            $.R().A(
                //c1 = function(m){return cx().bc('-').Z(1).mug(m)}
                $.Cl(2, $.c('X',100,100).mug(m.fr)),
                $.Cl(10, $.bt(m.fr, function(){from = m.fr;  tab3.load()}),
                    $.h4( dtt(m.dt) ).K('pull-right'),
                    $.h5(m.m))
            ),
            $.hr()
        )})}, '*']
    tab2=['sent', function(){
        TABS.E(
            $.h1('Messages'),
            $.br())

        $.eG('/MsgS', function(m){mm=m;
            var ms= $('<textarea>'),
                c=  $.canvas('X',100,100)
            $.P('mug',{u:m.to}, function(mug){c.fit(mug)})
            TABS.A($.R().A($.Cl(2,c),
                $.Cl(10,
                    $.bt('to: '+m.to, function(){from=m.to;  tab3.load()} ),
                    $.h4(dt(m.dt).dt()).K('pull-right'),
                    $.h5(m.m)
                )), $.hr())
        } )
    }]
    tab3 = $.tab('convo',  function(){
        var ms = $.ip()
        u= window['from']||'b'
        TABS.E( $.h1('convo with '+u), $.h1('Messages'), $.br() )

        $.eG('gMsgW', {u:u}, function(m){

            var c = $.c('X', 100, 100)
            $.P('mug', {u:m.fr}, function(m){c.fit(m)})
            TABS.A($.R().A(
                    $.Cl(2,c),
                    $.Cl(10,
                        $.h6('from: '+m.fr),
                        $.h4(dt(m.dt).dt() ).K('pull-right'),
                        $.h5(m.m))),
                $.hr()
            )})
        TABS.A(ms, $.bt('new message', function(){
            $.P('sMsg',   {m:ms.V(), to:from})}), $.br(2))})
    tab4 = [ 'requests', function(){
        TABS.E($.h1('Buddy requests'), $.br())
        //buddy requests
        $.eG('gRq',  function(msg){ TABS.A( $.d().A(
            $.h6( 'from ' + msg.fr + ' on ' + msg.dt ),
            $.h5( msg.m ) ,
            $.bt('accept', function(){  $.P( 'yRq',  { u: msg.fr }  )}),
            $.bt('deny'),
            $.hr()
        )) })
    }]
    s2.A( t = $.tabs( tab1, tab2, tab3, tab4 ) )
    t.load()
}
SORTY=function(){$.fm()
    /*
     s1.A(
     $.h1('your sorts'),
     $.d().WH('auto').A($.h1('new sort'), textInputSpan('post','/srt') ),
     $.h4('recent: ')
     )
     */
    $.eG('/srt',function(t){
        d1.A( $.bt(t.t,function(){sorty(t.t)}), $.br(2) ) } )
    s2.A(  $.i('me'))
}

tests()
function tests(){
    MANIFEST = function () {
        s = cjs.S()


        Q(['me', 'guy'], function (q) {


            s.A(me = q.bm('me'))

            s.A(guy = q.bm('guy'))


            guy.drag()

        })


    }

    MUGTX=function(){z()
        $.h1('testing myMug ...').A()
        $.get('/myMug', function(data){z()
            $.h1('in callback..').A()
            $.img(data).A().C('black').drag()
        })
    }
    MUGBYUNTX=function(username){z()
        username = username || 'ss'
        $.h1('testing mugByUsername ...').A()
        $.get('/mugByUsername/' + username, function(data){z()


            $.h1('in callback..').A()

            $.img(data).A().C('black').drag()

        })
    }
    DFMGTX =function(){z()
        $.i(defaultMug).A()}
    CHANGEMUGTX=function(){
        //it automatically changes your userMug to the defaultMug
        $.post('/changeMug', {url: defaultMug},
            function(){z()
                TWEEN()
            })
    }
    FMTX=FORMATTX=function(){z()
        $.fm()
        s1.A($.imgResponsive('chicks') )
        s2.A($.i('me'), $.i('guy'))
    }
}


CUTOUTS=function(){
    $.bX=$.btX=function(){var g=G(arguments), o={url: g.f, data: g.s}
        return $.bt('X', function (){var bt=this
            $.aj({type: 'DELETE',
                url: o.url,
                data: o.data,
                success: function(){rmParOf(bt)
                    function rmParOf(bt){$(bt).pa().rm()}}})})}
    $.fm(); section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
    y = 80
    $.eJ('/img', function(img){var i
        i = $.i(img.d)
        i.WH(100,100)
        i.$(function(){ $.po('/changeMug', {url: img.d}, function(){ i.selPic() }) })
        $.dA('b',100, 100, '+').left(y).top(200).K('pic').A(i,  $.btX('/img', img) )
        y += 220
    })
}