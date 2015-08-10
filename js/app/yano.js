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
$.iconBar=function(){return $.sp().K("icon-bar")}
$.caret=function(){return $.sp().K("caret")}
$.fn.gg = $.fn.toggle=function(a){return this.attr("data-toggle", a)}
$.fn.tg = $.fn.target=function(a){return this.attr("data-target", a)}
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

// Y.n makes a $.navbarCollapse and $.navbarHeader.  then it makes a $.navbar.
// it puts the navbarHeader and navbarCollapse in the navbar
//then it appends the navbar wrapped in a container