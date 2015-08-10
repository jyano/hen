$(function(){



    $.Gj('loggedIn', function(un){

        Y._un= Y._userName = _username = $l(un)



        if(un == 'guest' || !un){ Y('GuestPage') }


        else {

            k.em('id', un);
            k.em('jRm',  _username )
            $.G('myMug', function(mug){
                Y._userMug = _userMug  = mug
                Y('HomePage')})
        }



    })





})







$.span= $.sp

GSCR=function(){
    $.scr=function(scr, fn){return $.getScript(scr, fn)}
    $.getMultiScripts = function(arr, path) {
        var _arr = $.map(arr, function(scr) {return $.getScript( (path||"") + scr )})

        //_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
        return $.when.apply($, _arr)
    }
    $.scr("https://code.jquery.com/color/jquery.color.js", function(a,b,c){
        console.log( a + b + c)
        d=c
        $l('got script')
        $.$(function(){$.j({C: "z"}, 1).in(.5).j({C: 'r'}, 1).in(.5).j({C: "y"}, 1)})
    })
    dfr= $.Deferred(function(dfrd){
        d=dfrd
        // $(dfrd.resolve)
    })
    testx=100
    $.when(
        $.scr("/boxSprite.js"),
        $.scr("/easel.js")
    ).done(function(){$l(testx)})
}
$.dCt= $.ctD=   function(){var g = G(arguments), //makes auto top-spacing (for navbar not to block)
    d = $.dK('container')
    if(!g.n){ d.A( $.br(4) )  }
    _.e(g, function(v){ d.A(v) })
    return d
}
$.fm= $.format=function(){
    section1 =s1 = $.span()
    section2 =s2 = $.span()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))

};
testFormat=function(){z()
    $.fm()
    s1.A($.imgResponsive('chicks') )
    s2.A($.i('me'), $.i('guy'))
}
socks=function(){
    $K=function(K){
        K.o=function(ob){
            var K=this
            _.e(ob, function(v,k){
                K.on(k, v)
            })}
        K.em=  K.emit
        K.l=function(t){this.e('l', t)}

        K.bc=function(){}
        K.test=1
        return K
    }
    k =  $K( io.connect() )


    //connect to the k //..need to change this on the deployment server!!!
    k.on('res', function(d){ _r =  res = d })
    k.on('alert',  alert)
    k.on('l', $l); k.on('log', $l)
    k.on('dir',function(d){$l('SERVER: %j',d)})
    k.on('pop', $.pop)
    k.on('a',function(a){alert(a)})
    k.on('d',function(d){$l('SERVER: %j',d)})
    k.on('dpop', function(d,n){ dud(d, n)  })
    k.on('dudPop', function(d,n){ dud(d, n)  })
    k.on('notice', function (d) {  $l('SERVER NOTICE: %s', d);  })
    k.on('p',function(e){$.pop(e)})

    //im
    k.on('IM', function(msgOb){
        var iMsg = Y.IMS[msgOb.from]
        if(iMsg){ iMsg.A( $.h4(msgOb.message) ) }
        else { $.iMsg(msgOb) }
    })


    k.on('ChatMs', function(d){
        var t = d.un + ': ' + d.ms;
        $l(t )
        if(Y.CHATS[d.rm]){
            Y.CHATS[d.rm].write( t )
        }

    })



    k.on('rmUpd', function(d){if(Y.CHATS[d.rm]){Y.CHATS[d.rm].uUS(d.US)}})
    k.on('popbox', function(o){ $.pop(o); $('popbox').m() })
    k.on('v',function(d){VAR=d})
    k.on('newImgAck', function(d){ $.c().fit(d.u) })
    k.on('im', function(i){$.c().fit( i ) })


    //uv
    k.on('bub', function(bub){if( Y.g(bub.u) ){ Y.bub(bub.t, bub.x, bub.y)}})
    k.on('updG', function(guy){ Y.u(guy) })
    k.on('ac', function(data){  if( _username == data.toWho){Y.U(data.from)}   })//if it was YOUR invitation that was accepted// here u should really just be able to 'addUser'
    k.on('iv', function(iv){if( _username == iv.toWho ){
        Y.mByN(iv.from, function(mug){
            popIv = $.pop($.d().A(
                $.i( mug ).WH( 200,200 ),
                $.h1( 'chat with '+ iv.from + '?' ),
                $.bt( 'ya' , function(){popIv.modal('hide')
                    Y.U( iv.from )//so u are just adding them in?// ah the function also supposedly takes into account the app not even being open// i could nix that for now
                    Y.ac( iv.from )}),
                $.bt( 'na' , function(){popIv.modal('hide')})) )
        })
    }})

    //game
    k.on('upd', function(guy){ updateGuy(guy) })

    //k.on('eG', nP)

    k.on('mU',function(m){uM(m)})// uM(m);
    k.on('map',function(m){uM(m)})
    k.on('fc',function(fc){

        // xy(gx.me, fc)

    })


    k.on('map',function(gA){_e(gA,function(g){_e(sArray,function(g){c.a(p.me)})});xy(p.me,200,100);xy(p.me,f)})



}; socks()

yano=function(){
    Y = function self(page){
        self.render(page)
        return self
    }
    Y.render = function(page){
        page = Y[page]
        if(page){page(); return true}
        return false
    }
    Y.run = function(app){
        app = app.toUpperCase()
        if(app = Y[app] || window[app]){
            app();
            return true
        }
    }
    Y.to=  Y.load =  function(a){  window.location = '/wap/' + a }

    Y.GuestPage =  function(){

        z('r')

        ct = $.dC()
            .dg().C('g').al(.9).top(100).left(100)

        jb =  $.J('a graphics-based real-time social gaming creativity web app', $.br())

        jb.A(

            $.btL('log in', function(){
                f = $.f().C('green').pad(4)
                f.A(
                    $.fG().A($.lb('username: ','username'),
                        $.ip('username')),
                    $.fG().A($.lb('password: ', 'password'),
                        $.pw('password')),

                    $.sm('log in') )

                f.submit(function(e){
                    e.preventDefault()

                    fData=  f.serializeJSON()

                    $.post('/login',fData,   function( un ){
                        u=un
                        $l('check u!')
                        if(un==='guest'){$('.modal').modal('toggle'); $.pop('try again.. idiot') }
                        else {Y('HomePage'); $.pop( 'welcome '+ un + '!' )}
                    })
                })

                $.pop( f ).dg()
            }).C('z','w'), $.sp(' - '),
            $.btL('sign up',  function(){
                usernameInput= $.dK('form-group').fS(20).name('username').A($.lb('username: ','username'), $.ip().K('form-control').id('uname') )
                passwordInput= $.dK('form-group').A($.lb('password: ','password'), $.pw().id('password')).fS(20).n('password')
                submit= $.bt('sign up').ty('submit').fS(16)

                f= $.f().C('o').pad(4).A(usernameInput,  passwordInput, submit).submit(function(e){ e.preventDefault()
                    $.P('user', {username: username=usernameInput.find('input').val(), password: password = passwordInput.find('input').val()},
                        function(username){
                            if(username==='guest'){$('.modal').modal('toggle'); $.pop('try again.. idiot')}
                            else {Y('HomePage'); $.pop( 'welcome ' + username + '!' )}}) })
                $.pop( f ).dg()
            }).C('w','z'),$.sp(' - '),
            $.btL('guest', function(){}).C('a','y')
        )

        ct.A(

            $.dH().h1('jy presents..'),

            jb

        )


        function verify(){return {
            username:  username.find('input').val(),
            password:  password.find('input').val()} }

    }









    Y.HomePage =  function(){
        Y.n()
        Y.run( wappyApp )
        $.Gj('loggedIn', function(uN){$('#uname').text( _username  = $l(uN))})
    }
    Y.logOut = function(){$.Gj('logOut', function(){ Y('GuestPage') })}
    Y.clr=  function(){z(); Y.n()}
    $.iconBar=function(){return $.sp().K("icon-bar")}
    $.caret=function(){return $.sp().K("caret")}
    $.fn.gg = $.fn.toggle=function(a){return this.attr("data-toggle", a)}
    $.fn.tg = $.fn.target=function(a){return this.attr("data-target", a)}
// Y.n makes a $.navbarCollapse and $.navbarHeader.  then it makes a $.navbar.
// it puts the navbarHeader and navbarCollapse in the navbar
//then it appends the navbar wrapped in a container
    Y.n= Y.nav= function(){z()
        navbarCollapse = $.nbC().A(
            $.n(
                $.dd('create',[ 'upload','uploads','cutouts',  'edit', 'avatar','paint', 'filters','showcase', 'tween','tweenart', 'easing', 'pack','sprite','transform' , 'can' ,'rub','fan' ]),
                $.dd('youplay',[ 'bod', 'invaders','thrust', 'starstruck', 'massvelocitytest','contactevents',  'ninjatilemap','launcher', 'groupvsgroup','shooty','hit','space','maggots']),
                $.dd('play',[
                    'iso', 'connect','matrix', 'ship',
                    'circle','boxes','solar','canon','fullcan', 'tangle',
                    'corners','borders','gquery','grid', 'bowl',  'gamer',
                    'melon','meltut'  ]),

                $.dd('share',[ 'universe', 'users', 'status' , 'messages','posts','chatrooms', 'ranky',  'profile', 'profiles','dirt','knocks', 'book','site','sorty','elements' ,'api' ,'object'   ]),


                $.dd('box2d', [
                        'box2d', 'wheel','heads', 'cups','pinball',
                        'revdemo','shooter','thruster','jumper','warper' ]
                )
            ),
            $.nR($.liA('logged: '+ _username), $.liA('logout', Y.logOut)) )
        $.Ct().A($.nb().A($.nbH('wappy', '/wap/tween'), navbarCollapse))
    }
    Y.n= Y.nav= function(){z()

        navbarCollapse = $.nbC().A($.n(

                $.dd('jq', [
                    'tangle', 'corners', 'grid',  'borders',  'gamer'
                ]),
                $.dd('can',[
                    'bowl',  'can','fan', 'fullcan', 'rub'
                ]),
                $.dd('easel',[
                    'solar',  'ship',  'connect','matrix', 'iso', 'circle','boxes','canon']),
                $.dd('anim',[
                    'tween', 'sprite', 'pack'
                ]),
                $.dd('create',[
                    'upload','uploads','cutouts', 'edit', 'avatar','paint', 'filters','showcase'
                ]),
                $.dd('youplay',[
                    'bod',  'hit','space'
                ]),
                $.dd('users',[
                    'users', 'status' ,   'posts',    'profile', 'profiles'
                ]),
                $.dd('social',[
                    'messages',    'chatrooms','universe'
                ]),

                $.dd('mvc',[
                    'sorty', 'object', 'ranky',   'dirt','knocks',  'site'
                ])
            ),

            $.nR(
                $.liA('logged: '+ _username), $.liA('logout', Y.logOut)
            )

        )


        $.Ct().A($.nb().A($.nbH('wappy', '/wap/tween'), navbarCollapse))

    }
    k.emP= k.sop=function(m,u){ k.em('p' ,m, u)  }
    k.emEm = function(a,b){ k.em( 'em' ,  a,  b)  }
    $.iMsg=   function(msgOb){
        //this is triggered within a chatroom when someone clicks on a user and 'chats' them up
//will need to update other parts to also activate this (instant messages from other parts of the site)
//k.on('say to someone', function(id, msg){k.broadcast.to(id).emit('my message', msg)})

        var ip = $.ip(), iMsg = $.w()(
            $.h3( 'instant message from ' + msgOb.from ),
            $.h4( 'message: ' + msgOb.message ),ip,
            $.bt( 'reply' , function(){
                k.emit( 'IM' , {
                    message: ip.V(), toWho: msgOb.from, from: _username
                })}))
        Y.IMS[msgOb.from] = iMsg
        return iMsg
    }
    Y.uPop=function(i,  size){

        i= (O(i) && F(i.u)) ? i.u() : i

        size=size||300

        return $.c().WH(size, size).fit(i)
    }
    Y.dUD=function(d,n){
        $.P('getImageById', {data: d},  function(u){upop(u,n)})} //sk-send du of your (first) can-el
    Y.dU=function(){var u

        c =$.c().fit('me')

        u=c.toDataURL()

        k.emit('du',u);

        return u
    }
    Y.CHATS={}
    Y.GUYS= Y.GUYS || []
    Y.IMS={}
    Y.chan=  function(chan, fn){

        alert('Y.chan')
        chan= io.connect('http://localhost/'+ chan)

        if(fn){

            chan.on('connect',fn)
        }

        return chan
    }
};yano()




$.blp =   function(s, div){//topic, datetime, content //used for LISTING things (blog posts, etc)

    var g=G(arguments), s=g[0],
        div=g[1], sp = $.sp(),

        post=g[0]

    post.topic = post.t

    post.userY.CHATS[ d.rm ] = post.u
    post.datetime = post.dt
    post.content = post.c


    if(g.p){sp.A($.bt('topic: '+ post.topic, function(){ topic = post.topic;  tab4.load()  }   ),
        $.h3( post.content ))
        if(post.datetime){ sp.A($.h5( dt(post.datetime).dt() ) )}}
    else if(g.n){
        sp.A(
            $.bt('user: '+ post.user, function(){
                from=post.user;tab3.load()}), $.br(),
            $.bt( 'topic: '+post.topic, function(){
                topic=s.t;tab4.load()}),
            $.h3(post.content) )
        if(post.datetime){sp.A( $.h5( dt(post.datetime).dt() ) )}}
    else if(g.d){
        sp.A(
            $.bt('user: '+post.user, function(){from=post.user;tab3.load()}), $.br(),
            $.h3(post.content))
        if(post.datetime){sp.A($.h5( dt(post.datetime).dt() ) )}
    }
    else {
        if(post.datetime){sp.A($.h4( dt(post.datetime).dt() ) )}
        sp.A($.h1(post.content))
    }
    if(post.du){sp.A( $.c('X', 400).fit( post.du ) )}
    sp.A($.hr())
    return D(div)? div.A( sp ): sp
}
$.wStatus  = function(user, fn){
    $.G('sts1', {u: user},
        function(sts){ fn(sts.c) }) } //with first status?
$.btMail = function(ms, user){
    return $.bt('mail',
        function(){$.P('sMsg',
            {m: ms.V(), to: user.u} )})}
$.chBt = function(un,ms){return $.bt('chat',
    function(){$l('mse: '+ ms.V() + ' toWho: '+ un+ ', from: '+ _username)
    k.em('IM', mo= {  message: ms.V(),  toWho:un,  from:_username  } )})}
$.btBR= $buddyRequestButton = function(user){return $.bt('buddy-request', function(){$.P('sRq', {to:user.u}) })}
$.btPo=   function(){return $.bt('see posts', function(){})  }
$.ipB= $.inputBox=function(ob){  ob = ob||{}

    var d,ip, fn      = ob.func, url   = ob.url || '/',
        tt   = ob.boxTitle,
        inputType  = ob.inputType||'text',
        defaults   = ob.defaults||{},
        t = ob.btT || 'submit', taI

    d = $.d().WH('auto').pad(10)

    if(tt){ d.A(   $.h1(tt)   )  }

    if(inputType == 'text'){

        d.A( ip = $.ip().K('form-control')).A(
            $.bt(t, function(){$.post(url, _.df( dataValue(ip), defaults), fn)
            })
        )
    }

    if(inputType == 'textArea') {d.A(taI= $.ta().K('form-control'),  $.bt(t, function () {$.post(url, _.df(dataValue(theTextAreaInput),defaults), fn)}))}
    if(inputType == 'textAndTextArea') {
        d.A(
            ip=  $.ip().K('form-control'),
            taI= $.ta().K('form-control'),
            $.bt(t, function () {$.post(url, _.df(dataValue(ip,taI), defaults), fn)}))}
    return d}
inputBox=function(){
//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
    getMessages = gMsgs=function rc(u,M){


        add=function rc( messagesArray, a ){var args=G(arguments)
            if(args.n){ messagesArray.E() }
            if( A(a) ){_.e(a, function(v){rc( O(v) ?v.n :v) })}

            else { _.e(args, function(v){messagesArray($.br(), msg(v))}

            )}
        }

        alert('getMessages')
        $.Gj(u, function(d){add(M,d)
                all('msg', function(m){
                    m.$$(pof('/nMsg',{n:m.T()},rc))
                })
            })}
// get value from an input el OR two input els
// if one, creates {c:?}
// if two, creates {t:?,c:?}
    dataValueX=  dVX=function self(title, content){

        if( U(content) ){return self(null, title)}

        var data = {}

        data.c = data.content = data.message = content.V()

        if(title){
            data.t = data.title = data.topic = title.V()
        }

        return data
    }
// ob is for adding more pops to post-ob,
// or just pass function early
    textInputSpan  =ip0= function(   t, url,  ob,  fn ){
        url=url||'/'
        if(F(ob)){fn=ob;  ob={}}
        fn=fn||home

        var sp = $.sp(), ip= $.ip(),
            bt= $.bt(t, function(){$.P(url, _.df( dataValue(ip),  ob), fn )})
        //return a span with the tx and a $button
        //when u click the $button, get the value and post it to a url
        return sp.A(ip, bt)
    }
//this makes a span with a textarea and a button
//pass button text, url(/), and function
//when button clicked:
//      the  value of the text area
//      will be posted to the url
//      (passing the function)
    $.textAreaDataObj = function(t,url,fn){var sp,bt,ta
        url=url||'/';fn=fn||home
        sp = $.sp()
        ta= $.ta()
        bt= $.bt(t, function(){$.post(url, {content:ta.val()}, fn)})
        return sp.A(ta, bt)
    }

    $.textTextarea = textAndTextAreaSpanX =ip2=function(t,url,fn){

        url=url||'/'; fn=fn||home
        return $.sp().A(
            ip=$.ip(),
            $.ta(),
            $.bt(t,function(){$.post( url, {title:ip.val(), content:ip.val()}, fn)
            }))
    }
    inputBox1=function(ob){
        ob=ob||{}

        var func= ob.func,
            url         =   ob.url || '/',
            boxTitle    =  ob.boxTitle,
            inputType   =  ob.inputType,
            defaults    =   ob.defaults||{},
            t  =   ob.btT || 'submit',
            inputType   =     ob.inputType||'text'
        d = div = $.d(40).WH('auto')
        if(boxTitle){ d.A($.h1(boxTitle))}
        if(inputType == 'text') {
            var ip=$.ip()
            d.A(input)
            d.A($.bt(t, function(){$.P(url, _.df({title: ip.val()},defaults), fn)}))
        }

        if(ob.inputType == 'textArea') {
            var ta = $.ta()
            d.A(taI, $.bt(t, function () {
                    $.post(url, _.df({content: ta.v()}, defaults), fn)})
            )
        }

        if(ob.inputType == 'textAndTextArea') {
            var ip = $.ip(), ta = $.ta()
            d.A(ip, ta)
            d.A(
                $.bt(t, function () {$.P(url, _.df({title: ip.v(), content: ta.v()}, defaults),
                        fn)}))}
        //z(); theDiv.a()
        return d}


};inputBox()



$.dragFrame=function(ob){
    var oD=  $.d('r','+').pad(10)
    inD= $.d('y').md(function(e){ e.stopPropagation()  })
    oD.A(  inD )
    return inD.A( ob )
}
$.iD= $.imgDiv=function(st){
    d = $.d('y','+')
    $.eGj('img',  function(i){d.A($.c(100, 100).fit(i.d)
        .$(function () {st.bm(i.d, function (bm) {  bm.sXY(.4).dg() } )}))})
}
$.userCard  =function(){z()
        return $.R(
            $.Cl(2).K('text-center').A( $.i('me').WH(70,70), $.h5('hi') ),
            $.Cl(3).A( $.h4('pics'), $.h5('place to upload')) ).A()

}
$.msg= $.messageDiv = function(t){

        return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
            .fS(20).T(t||'msgText')

}


k.IM=function( toWho, ms ){
    $l('toWho: '+ toWho + ', ms: '+ ms)
    k.em(  'IM',  {  m: ms,  t:toWho,  f:_username  }  )
}

$.wd=$.w= $.win =  function(a, size,  id){var g=G(arguments), t, w,wd, lBt,mBt,xBt,o

    wd= w =  $.dA('b',  '+').WH('auto','auto')
        .al(.9).ov('auto').pad(10).bW(4).bS('dashed')
    wd.A(
        mBt=$.btR('>', function(){w.WH(700); lBt.sh(); mBt.hd(); }),
        lBt= $.btR('<', function(){w.WH('auto'); mBt.sh(); lBt.hd()}).hd(),
        xBt = $.btL('X',function(){ w.rm() })
    )

    o=  N(g[0])? { size: g[0] }: O(g[0])? { ch:g[0] } : {t: g[0], size:g[1], id: g[2]}

    if(o.ch){ w.A(o.ch) }
    if(o.t){ w.tit(o.t)}
    if(o.id){ w.id(o.id) }
    return w

}
$.pop=function(message, o){

    if( S(o) ){ return $.pop(o, { title: message } )    }

    o = O(o)? o : {}
    message = message || 'pop pop'
    mB = $.modalBody().A( $.h2( message ) )
    m =  $.modalFade().A($.modalDialog().A($.modalContent().A( mB)))

    if(!o.hd){ m.modal() }

    if(o.tt){mB.pp($.h1(o.titC).col(o.titC||'z'),
        $.hr().C( o.headerC||'z'  ).css('height', 2))}

    if(o.bt ){ mB.A( $.bt( o.bt )  )}

    if(o.dg ){  m.dg() }

    if(o.al ){ m.al( o.al ) }

    //text color of the MESSAGE
    if(o.col){  m.col( o.col)}
    //color of background of modal itself
    if(o.C){
        //flash like crazy
        if( o.C == '*' ){$.ev(.1, function(){ mB.C( $r() ) }) }
        else { mB.C( o.C ) }
    }
    //this color takes over the whole screen!
    //this is the background color of the hiding body
    if(o.c) {  m.C( o.c)  }
    return m

}
$.dangMessage=function(msg){
    return $.sp().delButton().A( $.h2(msg).K('alert alert-danger')  )
        .pp2('body')

}
$.floatIp=function(t, fn){var g=G(arguments),f
    f=$.f().K('text-center').C('o').fS(20).dg().minW(200 )
        .A(
        $.sm(t), $.ip())

    if( F(fn) ){ f.sm(fn) }
    return f

}

$.eD= $.editDiv=function(words){//$.dE
    canMove=true
    changeLocation=true
    inputMove=true
    mouse = 'up'

    ta =  $.ta().mar(4)
    sp=    $.sp().C('z')
    fn=    function () { sp.T( ta.v() ) }
    d=  $.dA('+').C('n', 'y').pad(8)
    d.zIndex(0)

    xBt=  $.bt('', function(){d.rm()}).WH(4).C('red')


    d.md(function(){inputMove = false; mouse='div' })
    d.mu(function(){mouse='up'})
    d.md(function(){
        $.editDiv.TOP++
        $(this).zIndex( $.editDiv.TOP  )
    })
    ta.md(function(e){
        $.editDiv.TOP++
        $(this).parent().zIndex(  $.editDiv.TOP  )
        location={top: d.Y(), left: d.X()}
        inputMove = true
        mouse='input'
        e.stopPropagation()})

    ta.mm(function(e){if(inputMove){e.stopPropagation(); d.XY(location.left, location.top)}})

    if(U(words)) {return d.A( xBt, $.br(), sp.hd(), ta,

        $.d('y',16, 12).tA('c').mar('0 auto').$(function(){
            $(this).pa().free()
        })

    ).$$(function(e){e.stopPropagation()
            sp.T(ip.v())
            xBt.gg();ip.gg(); sp.gg()
        })
    }

    else {
        ip.v(words)
        sp.T( ta.v() )


        return d.$$(function(e){e.stopPropagation()
            sp.T( ta.v() )
            xBt.gg();
            ip.gg(); sp.gg()
        }).A( xBt, $.br(), sp, ip.hd() )

    }
}; $.editDiv.TOP=0
$.dE2=  $.editDiv2=function(a){
    var d= $.editDiv(a), range= $.range()
    range.md(function(e){e.stopPropagation()})

    range.on('input', function(){
        d.fi( $('span')).fS( $(this).v()  )
        d.fi( $('textarea')).fS( $(this).v()  )
    })
    d.pp( range  )
    return d
}; testEditDiv=function(){z()
    $.dE()
    $.editDiv()
    $.editDiv()
    $.editDiv()
    //$.editDiv2().A()

}
//$.img100=function(){return $.i('me').XY(300,200).C('y').al(.9).WH(100)}
$.pf= $.profile = function(username, div){

//=makeProfile = prof


    // if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}

    answer = function(question, answer){
        return $.d().A(
            $.h3(question),
            $.h4(answer)
        )
    }

    username = username || 'a'
    $.G('profile/' + username,  function(d){

        data = {
            aboutMe: d.aboutMe,
            iEnjoy: d.iEnjoy,
            iSeek: d.iSeek
        }

        if(O(d)){
            div = div|| $.dA('b',300,300).A().dg()
            div.A(
                $.h4('about me'),
                $.h5(d.aboutMe),
                $.h4('i enjoy'),
                $.h5(d.iEnjoy),
                $.h4('i seek'),
                $.h5(d.iSeek)
            )
        }})
}
$.sts= $.status= showStatus =stat=function(user, div){
    $.wStatus(user, function(sts){ $.d().A($.h3('STATUS: '+ sts)) })
}
$.btCh =  function (name) {
    return $.bt(name, function () {
        $.chat(name)
    }).mar(40)
}
$.chat=  function (title, color, id) {   var  ip, sendBt , picBt , popBt , messages , dUS = $.d()
    if (Y.CHATS[title]) {$l('already in this room'); return}
    title = title || 'chatbox'
    color = color || 'b'
    id = id || 'cbo'
    wd=   $.w('chatroom: ' + title).id(id).css({
        'min-width': 600,
        'min-height': 400,
        'background-color': color
    })
    wd.A($.R().A(
        $.Cl(8,
            messages= $.d().id('cbi').C('u').ov('auto'),
            ip = $.ip().K('form-control'),
            sendBt= $.bt('send', function () {
                k.em('ChatMs', {

                    rm: title,
                    un: _username,
                    ms: ip.V()

                })}),

            popBt= $.bt('pop', function () {k.emit('p', ip.V(), title)}),
            picBt =$.bt('pic', function () {$.pop('pic select') }) ),
        $.Cl(4, $.h5('users:'), dUS) ))

    uUS = function (users){dUS.E()
        if (A(users)) {_.e(users, function (un) {
            dUS.A(
                $.h5(un).$(function () {$.popUser(un) })
            )})}
        else {dUS.A($.h5('no users'))}
    }
    Y.CHATS[title] = chatController= {
        uUS: uUS,
        wd:wd, window: wd, w: wd,
        toggle: function () {return w.toggle()},
        write: function (m) {messages.A($.h5(m).col('w'))},
        writeBlack: function (m) {messages.A($.h5(m).col('z'))}
    }


    k.em('jRm', title)//why cant i change this emit name to joinRoom ???
    $.ev(.5,function () {k.em('rm', title)}) //repeatedly emit 'room', which launches room user updates!
}
Y.popUser = Y.uPop=function (un) {
    if(un){
        $.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
            $.w($.d().A( $.br(), $.hr(),
                $.h3('User: ' + un), $.br(),
                $.c(300).fit(mug),
                d= $.d(),
                msg = $.ta().C('w', 'z'),
                $.btMail(msg, un),
                $.btCh(un, msg),
                $.bt('fullPf', function () {Y.loc( '/wap/profiles/' + un )})))
            $.sts(un, d)
            $.pf(un, d)
        })
    }
    else {$('.pop').$(function(){k.em( 'pop', {t: $('.pt').v, b: $('.pb').v})})}
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
$.user=function(u){

    var userA = $.a('', function () {
        window.location = '/wap/user/' + u.username
    }).K('thumbnail')

    userA.A(
        $.i(u.mug || defaultMug),
        $.h4(u.username),
        $.h5('status: ' + u.status),
        $.bt('X', function () {}),
        $.bt('be me', function () {})
    )
    return userA
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
    $.eG('/srt',function(t){ d1.A( $.bt(t.t,function(){sorty(t.t)}), $.br(2) ) } )
    s2.A(  $.i('me'))
}
YGAME=function(){
    $.gameController=function(){ return $.d().A(
        $.bt('left').id('left'),
        $.bt('right').id('right'),
        $.bt('jump').id('jump'))}

}

$.l=function(link){
    if(link){window.location=link}
    return window}
routeTx=function(){



    testMyMug=function(){z()

        $.h1('testing myMug ...').A()
        $.get('/myMug', function(data){z()
            $.h1('in callback..').A()
            $.img(data).A().C('black').drag()
        })

    }
    testMugByUsername=function(username){z()

        username = username || 'ss'


        $.h1('testing mugByUsername ...').A()

        $.get('/mugByUsername/' + username, function(data){z()


            $.h1('in callback..').A()

            $.img(data).A().C('black').drag()

        })



    }
    testDefaultMug =function(){z()
        $.img(defaultMug).A()}
    testChangeMug=function(){
        //it automatically changes your userMug to the defaultMug


        $.post('/changeMug', {url: defaultMug},

            function(){z()

                TWEEN()
            })

    }

}; routeTx()




