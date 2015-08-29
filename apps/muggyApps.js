
UPLOAD=function(){
    f =  $.f().attr({
        method:'post',
        enctype: 'multipart/form-data',
        action: '/pic'
    }).C('o').A($.fU(''),
        $.sm().val('ok').K("show"))
    $.pop(f, {title: 'upload a new pic'} ).dg()
}
UPLOADS=function(){

    $l('in uploads')
    $.fm()
    instr= 'You have uploaded these pics. Click to make a sprite, or hit the x to delete..'
    y = 80
    n=0
    $.eG('myPics',  function(p){
        $l('pic: ' + n++)

        $.picDiv(y).A($.pic(p), $.delBt('/pic', p))

        y+= 220
    })
    /*
     $.G('myPics',  function(p){_.e(p, function(p){

     $l('pic: ' + n++)
     $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
     y+= 220
     })

     })*/

    s2.A($.h4(instr))
}
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
CUTOUTS=function(){
    $.fm(); section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
    y = 80

    $.eJ('/img', function(img){var i
        i = $.i(img.d)
        i.WH(100,100)
        i.$(function(){$.po('/changeMug', {url: img.d}, function(){ i.selPic() })})

        $.dA('b',100, 100, '+').left(y).top(200).K('pic').A(
            i, $.btX('/img', img)
        )

        y += 220

    })

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
EDIT=function(){

    st  = $St('z',400)

    ct =  $.Ct().A(d=$.d(), st.canvas)

    $.eJ('/img', function(i){


        c = d.Can('o',40,40)
        c.fit(i.d)
        c.$(function(){st.bm(i.d, function(bm){ bm.rC(200,200).TR() })})
        c.mar(20).C('r')
        d.A($.btX('/img', i, '-'))

    })


    $.$$(function(){ $.po('/img', {d: st.du()}, $.rl) })
    d.C('b').al(.6).W(400).H(100)
    d.ov('scroll').css('overlflow-y', 'auto')

}
EDIT0=function(){

    st = St(800)

    var imgHolder = $.d()

    CT(   imgHolder,     st   ).o( '$$', sav(st, 'edit'))

    eaI(function( img ){

        imgHolder(

            $imageSizeFuncCan(

                img.d,  1,   function(){
                    st.bm(   img.d,

                        function(bm){
                            //bm.rgc('+');
                            TR(bm);

                        },    '+'  ) }

            )
        )

    })

    return st}
EDIT1=function(){

    st = St(800)

    var imgHolder = $.d()

    container=  CT(   imgHolder,     st   )

    container.o( '$$', sav(st, 'edit'))

    eaI(function( img ){

        imgHolder.A(

            $.c('X',100, 100).fit(img.d).click(function(){


                st.bm(   img.d,

                    function(bm){    bm.rCenter('+'); TR(bm)  }   ) })


        )

    })

    return st}
PROPBOX=function(){
    var imagesDiv=$.d()
    dA=$.dA('y',200)($.sp('prop box'), $.hr(), $.sp('selected cutout:'))
    st = SuperStage(800)
    littleStage = SuperStage(80)
    dA(littleStage)
    CT(imagesDiv, st).o( '$$', sav(st, 'edit') )
    eaI(function(image){

        imagesDiv(

            xc(  image.d, 1,

                function(){ st.bm(

                    image.d,

                    function(bm){

                        TR(bm)


                        ///hmmm only clicks once?
                        //does this relate to the draggable st problem?
                        bm.$(function(){
                            $l('new selection')
                            b=bm
                            littleStage.ch('-')
                            clone=Do( bm.ob.clone() )
                            littleStage.a( clone )

                            clone.xy(50).sxy(.1)
                        })


                    }



                    , '+' )}     )

        )})

    return st}
AVATAR=function(){
    z()
    //the challenge here is to make the st draggable but still usable, by dragging it by a wrapper div
    //  s=St(400)
    st  = $.dragStage().t()
    //d = qq( st.ob.canvas )
    //d2=$.d().drg().w(500).h(500).c('o')
    //CT(d, st).o('$$',  sav(st,'avatar') )
    st.$$(function(){st.snap('avatar')})
    d = $.d('x','+')
    $.Gj('img', function(i){ _.e(i, function(img){
        d.A($.c(100,100).A().fit(img.d).$(function(){ st.bm(img.d, TR, '+' ) }))
    })})
    //d2( st )
}

PAINT= function(){
    _paintColor='blue'
    _paintSize = 10
    canvas = $.c('r', 400, 400).A().P('a',100,50)
    st = canvas.stage.tick()
    shape = new createjs.Shape()
    st.mug(function(mug){
        mug.sXY(.4)
        st.A(shape)
    })
    graphics = shape.graphics
    graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
        .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
    st.on('stagemousedown', function(e){
        graphics.beginStroke(_paintColor)
        st.on('stagemousemove', function(e){  graphics.lineTo(e.stageX, e.stageY) })
    })
    st.on('stagemouseup', function(){ st.removeAllEventListeners('stagemousemove')})
    div = $.dK('controls').a2($('body'))
    colorPicker = $(' <input   type="color">')
    div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))
    colorPicker.on('input', function () {$l('input ')
        _paintColor = $l(colorPicker.val())
        graphics.beginStroke(_paintColor)
    })
    $('.controls span').$$(function(){
        graphics.setStrokeStyle( parseInt($(this).T()) )
    })
}
EDITOR=function(){z()
    var r='#0FF',  size=2,oX=0,oY= 0,shape,
        st = $.dragStage(),
        imgHolder = $.d('y', '+')
    $.eG('img',function( i  ){
        imgHolder($.imgSizeFnCan(
            i.d, 1, function(){
                st.bm( i.d, function(bm){
                    SL(bm.sxy(.4))}, '+')
            }))})
    TextAdder2(st)
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
CHATROOMS = function () {
    chats = $.dA('g', 200, 200, '+').left(400).WH('auto').pad(10)
    chats.A(
        $.btCh('general'), $.btCh('fun'), $.btCh('sexy'),
        ip = $.ip().K('form-control'),
        $.bt('private room', function () {$.chat( ip.v() ) }).mar(40) )
}
UNIVERSE=function(){z()

    //Y= window['Y']? window['Y'] : {}

    Y.bId= Y.mById=fetchMugByMugId = fetchMugByUserModel2 =function(user, fn){$.P( 'getimagebyid' ,  user.m,  fn)}
    Y.bM= Y.mByM=fetchMugByUserModel =  function(user, fn){$.G('mug/' + user.m, fn) }

    Y.bN= Y.mByN=fetchMugByUsername =  function(un, fn){
        $.P('mug', {u: un}, function(mug){if(mug){ fn(mug) }})
    }


    Y.t= Y.b= Y.bub=SpeechBubble =  function( t, x, y ){var g=G(arguments)
        ct=   $Ct()
        if( !window['uni'] ){alert('the universe is missing!');return}
        text = g[0] || 'hi!'
        //so if you don't pass in coords, it relies on 'you'
        x = g[1] || you.x
        y = g[2] || you.y
        uni.A(ct)
        ct.cir(x-150,y-150,100,'w').cir(x-50, y-50, 30, 'w').cir(x-20,y-20,10,'w')
            .text(t, "20px Arial", "blue", x-200, y-200)
        ct.tr( [{ a:0, sxy:.1, x:x-250, y:y-250 }, 20000])
        $.in(10, function(){ct.rm()})
        //broadcast out your speech bubble
        if(g.p){ k.emit('speechBubble', { t:t, x:x, y:y, u:_username } )}
        return ct
    }
    Y.loc=guyLocation=function(){  if( window['you'] ){
        return {u:_username, username:_username, x: you.x, y: you.y}
    }}//relies on 'you'.. actually just makes a similar object


    Y.g=getGuy=    Y.A=addGuy=function(un, bm){//add guy to Y.GUYS
        var guy
        if(bm){
            Y.GUYS.push({un: un,  bm: bm })
            bm.rC().XY(600).sXY(.4).a2(uni) //add guy's bitmap to universe
            // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })
        }

        else {

            //get the username//do this as a reduce
            un = O(un) ?
            un.u || un.un:
                un
            _.e(Y.GUYS,function(g){if(g.u ==  un || g.un == un){guy = g }})
            return guy
            //pass in a user / username to update your image of them //or.. pass nothing to update everyone on YOU
        }

    }


    //get guy object by username or user.username //guy object has {user/username, x, y} //-- so this finds a guy in the Y.GUYS or returns false if he aint there

    Y.u= updateGuy =  function(u){var guy, bm

        if(u){guy= Y.g( u.u )
            if(O(guy)){bm = guy.bm}
            if( bm ){ bm.XY( u.x, u.y )  }
        }
        else {  k.em('bc', 'updateGuy', Y.loc())  }
    }

    Y.iv= inviteToUniverse=function(toWho){
        k.em('bc', 'invite', {from: _username, toWho: toWho})}

    Y.ac= acceptUniverseInvitation =  function(toWho){
        $l(_username + ' accepts from ' + toWho)
        k.em('bc',  'acceptUniverseInvitation',
            {from: _username, toWho: toWho})
    }//this will have the server broadcast.emit 'accept'

    Y.U=Y.s=startUniverse = function(name){var guy
        $l('startUniverse with: '+  name)
        if( !window['uni'] ){$l('no uni  -- calling UNIVERSE()'); UNIVERSE() }
        else {$l('uni found. no need to call UNIVERSE')}
        guy = Y.g(  name )
        if( guy ){  $l('we have guy: ' + guy ) }
        else {
            $l('no guy'); Y.bN(name, function(mug){ $Bm( mug,  function( bm ){
                Y.A(name, bm) })})
        }
    }
    u= uv = uni = $St(1000, 800)
    uv.bgI('/beach.jpg')
    uv.mug(function(b){you = b.rC().XY(600).sXY(.4).dg()
        Y.GUYS.push({u :_username, b :you}) //b.$$( function(){ b.rm(); k.emit('X', _username)})
        d=$.d('b', 1000, 'auto')//.pp2( $('body') )
        d.A(
            $.br(3), $.ip('...', 'tx').id('textinput'),
            $.bt('send', function(){Y.bub( $('#textinput').V(), '+')}) )
        $.ev(.1, Y.u)
    })

    //  userHolder = $.d('z').a2( $.R().A() )

    $l('users:')

    n=0

    $.eG('users', function(u){window['u'+ String(n++) ] =  u
        $l(u.u)
        if(!u.mug ){   $l('no mugURL!') }
        else {$.i(u.mug ).WH(100).a2( d ).$(function(){$l(u.u); Y.iv( u.u ) })}
    })

    // fetchMugByMugId( user,  function(userMug){
    // theRow.A( $.thumbnail( $.span(user.u), userMug).WH(200).click(  function(){ inviteToUniverse(user.u)   }) )})
//RECIEVE speech bubble
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
