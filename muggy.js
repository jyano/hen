ui()
btn()
muggy()
yano()
withDaMug()

function ui(){
    $.dCt = $.ctD = function () {
        var g = G(arguments), //makes auto top-spacing (for navbar not to block)
            d = $.dK('container')
        if (!g.n) {
            d.A($.br(4))
        }
        _.e(g, function (v) {
            d.A(v)
        })
        return d
    }
    $.fm = $.format = function () {
        $l('in fm')
        section1 = s1 = $.sp()
        section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))

    };
    $.dragFrame = function (ob) {
        var oD = $.d('r', '+').pad(10)
        inD = $.d('y').md(function (e) {
            e.stopPropagation()
        })
        oD.A(inD)
        return inD.A(ob)
    }
    $.dragFrame = function (div) {

        var outerDiv = $.div('r').drag().pad(20).A()

        div = div || $.div('y', 50, 50).mar(20)

        div.on('mousedown', function (e) {
            e.stopPropagation()
        })

        outerDiv.A(div)

        return outerDiv
    }
    $.dragStage = function (x, y) {


        c = $.c('g', 400)

        s = $St(c[0])

        $.dragFrame(c).A()

        return s
    }
    $.picDiv = function (top) {
        $l('in picDiv')
        return $.dA('b', '+').WH('auto').XY(200, top).K('pic').pad(25)
    }
    $.pic = function (pic) {
        i = $.i(pic._id + pic.ext).WH(120, 120)
        i.click(function () {
            $.cut(pic._id + pic.ext)
        })
        return i
    }
    $.iD= $.imgDiv=function(st){
        d = $.d('y','+')
        $.eGj('img',  function(i){d.A($.c(100, 100).fit(i.d)
            .$(function () {
                st.bm(i.d, function (bm) {
                    bm.sXY(.4).dg() } )
            }))})
    }
    $.msg= $.messageDiv = function(t){

        return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
            .fS(20).T(t||'msgText')

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
        return d} //pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
}
function muggy(){
    $.cut = function (m) {
        z()
        $.fm()
        c = $.c('r', 500, 500).A().fit(m || 'me')
        s1.A(
            $.bt('save sprite', function () {
                c.snap();
                EDIT()
            }), $.br(2),
            $.bt('start cut', function () {
                c.dots();
            }), $.br(2),
            $.bt('restart cut', function () {
                $.cut(m)
            }), $.br(2),
            $.bt('file uploads', function () {
                window.location = '/wap/uploads'
            })
        )
        s2.A($.h2('click to start cut-out..'), c)
    }
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
    $.userCard  =function(){z()
        return $.R(
            $.Cl(2).K('text-center').A( $.i('me').WH(70,70), $.h5('hi') ),
            $.Cl(3).A( $.h4('pics'), $.h5('place to upload')) ).A()

    }
    $.pf = $.profile = function (username, div) {

//=makeProfile = prof


        // if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}

        answer = function (question, answer) {
            return $.d().A(
                $.h3(question),
                $.h4(answer)
            )
        }

        username = username || 'a'
        $.G('profile/' + username, function (d) {

            data = {
                aboutMe: d.aboutMe,
                iEnjoy: d.iEnjoy,
                iSeek: d.iSeek
            }

            if (O(d)) {
                div = div || $.dA('b', 300, 300).A().dg()
                div.A(
                    $.h4('about me'),
                    $.h5(d.aboutMe),
                    $.h4('i enjoy'),
                    $.h5(d.iEnjoy),
                    $.h4('i seek'),
                    $.h5(d.iSeek)
                )
            }
        })
    }
    $.sts = $.status = showStatus = stat = function (user, div) {
        $.wStatus(user, function (sts) {
            $.d().A($.h3('STATUS: ' + sts))
        })
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
    $.user=function(u){
        $.wStatus  = function(user, fn){
            $.G('sts1', {u: user},
                function(sts){ fn(sts.c) }) } //with first status?
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
}
function btn(){
    $.btCh =  function (name) {
        return $.bt(name, function () {
            $.chat(name)
        }).mar(40)
    }
    $.btMail = function(ms, user){
        return $.bt('mail',
            function(){$.P('sMsg',
                {m: ms.V(), to: user.u} )})}
    $.chBt = function(un,ms){return $.bt('chat',
        function(){$l('mse: '+ ms.V() + ' toWho: '+ un+ ', from: '+ _username)
            k.em('IM', mo= {  message: ms.V(),  toWho:un,  from:_username  } )})}
    $.btBR= $buddyRequestButton = function(user){return $.bt('buddy-request', function(){
        $.P('sRq', {to:user.u}) })}
    $.btPo=   function(){return $.bt('see posts', function(){})  }
}
function withDaMug(){
    withYourMugId = gMg = function (func) {
        $.get('/gMg', func)
    }  //should it try websocket first?
    wM = withYourMugData = getMug = function (func) {
        $.get('/myMug', func)
    }
//dep by withYourMugData?
//wM=function(f){  withYourMugId(      function(mugId){ $.get('/mug/'+  mugId, f )   }     ) }
    withYourMug = wMD = function (fn) {
        withYourMugId(function (mugId) {
            $.post('/dats', {d: mugId}, fn)
        })

    }
    wMb = function () {
        var g = G(arguments),

            f = g[0], st = g[1]

        wM(function (a) {

            SuperBitmapAsync(
                a,
                function (b) {
                    if (st) {
                        st.A(b)
                    }   // if stage passed, add bm to stage
                    f(b, st)         //run cb, and pass it bm and stage
                })
        })

        return st

    }
    $wMb = function (f, stage) {

        wM(function (a) {

            J.Bm(a, function (b) {

                if (stage) {
                    stage.A(b)
                }   // if stage passed, add bm to stage

                if (f) {
                    f(b, stage)
                }       //run cb, and pass it bm and stage

            })
        })

        return stage
    }
//with mug, after creating and putting it on a stage
    wMs = function (func, w, h, bg) {
        var g = G(arguments)

        func = g[0]
        w = g[1]
        h = g[2]
        bg = g[3]

        var stage = St(w || 1000, h || 800, '+')

        if (g.p) {
            stage.drg()
        }

        if (g.n) {
            s2.A(stage)
        }

        if (bg) {
            stage.bgi(bg)
        }

        return wMb(func, stage)

    }
    $wMs = function (func, w, h, bg) {
        var g = G(arguments)

        func = g[0]
        w = g[1]
        h = g[2]
        bg = g[3]

        var stage = St(w || 1000, h || 800, '+')

        if (g.p) {
            stage.drg()
        }

        if (g.n) {
            s2.A(stage)
        }

        if (bg) {
            stage.bgi(bg)
        }

        return wMb(func, stage)

    }
}
function yano(){
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
}
function alpha(){
    //eachImage = eaI=function(f){$.getJSON('/img', function(i){ _.e(i, f) } )}
}