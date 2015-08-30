
muggy()


function muggy(){

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
        _.ev(.5,function () {k.em('rm', title)}) //repeatedly emit 'room', which launches room user updates!
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
    ct = cjs.Container.prototype
    ct.mug = function () {
        var ct = this, g = G(arguments), o
        o = N(g[0]) ? {sc: g[0], fn: g[1]} : {fn: g[0]}
        o.sc = N(o.sc) ? o.sc : 1
        o.fn = o.fn || function () {
        }
        $.G('myMug', function (m) {
            if (!m) {
                alert('!mug')
            }
            ct.bm(m, o.sc, o.fn, g.p ? '+' : null)
        })
        return ct
    }
    maybe()
    function maybe() {
//PERHAPS.. JUST PERHAPS... everything below is ALREADY dep..
// all have had 'alerts' since Aug 30 2015

        withYourMugId = gMg = function (func) {
            $l('call out from somewhere in withMug.js')
            $.get('/gMg', func)
        }  //should it try websocket first?
        wM = withYourMugData = getMug = function (func) {
            $l('call out from somewhere in withMug.js')
            $.get('/myMug', func)
        }
//dep by withYourMugData?
//wM=function(f){  withYourMugId(      function(mugId){ $.get('/mug/'+  mugId, f )   }     ) }
        withYourMug = wMD = function (fn) {
            $l('call out from somewhere in withMug.js')
            withYourMugId(function (mugId) {
                $.post('/dats', {d: mugId}, fn)
            })

        }
        wMb = function () {
            $l('call out from somewhere in withMug.js')
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
            $l('call out from somewhere in withMug.js')
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
            $l('call out from somewhere in withMug.js')
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
            $l('call out from somewhere in withMug.js')
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
}


//cutouts
function alpha(){
    //eachImage = eaI=function(f){$.getJSON('/img', function(i){ _.e(i, f) } )}
}

