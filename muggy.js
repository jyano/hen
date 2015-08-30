cjs.Container.prototype.mug = function(){
    var ct = this, g = G(arguments), o
    o = g.N_ ? {sc: g.f, fn: g.s} : {fn: g.f}
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
$.userCard  =function(){z()
    return $.R(
        $.Cl(2).K('text-center').A( $.i('me').WH(70,70), $.h5('hi') ),
        $.Cl(3).A( $.h4('pics'), $.h5('place to upload')) ).A()

}


$.chat = function (title, color, id) {
    var ip, sendBt, picBt, popBt, messages, dUS = $.d()
    if (Y.CHATS[title]) {
        $l('already in this room');
        return
    }
    title = title || 'chatbox'
    color = color || 'b'
    id = id || 'cbo'
    wd = $.w('chatroom: ' + title).id(id).css({
        'min-width': 600,
        'min-height': 400,
        'background-color': color
    })
    wd.A($.R().A(
        $.Cl(8,
            messages = $.d().id('cbi').C('u').ov('auto'),
            ip = $.ip().K('form-control'),
            sendBt = $.bt('send', function () {
                k.em('ChatMs', {

                    rm: title,
                    un: _username,
                    ms: ip.V()

                })
            }),

            popBt = $.bt('pop', function () {
                k.emit('p', ip.V(), title)
            }),
            picBt = $.bt('pic', function () {
                $.pop('pic select')
            })),
        $.Cl(4, $.h5('users:'), dUS)))

    uUS = function (users) {
        dUS.E()
        if (A(users)) {
            _.e(users, function (un) {
                dUS.A(
                    $.h5(un).$(function () {
                        $.popUser(un)
                    })
                )
            })
        }
        else {
            dUS.A($.h5('no users'))
        }
    }
    Y.CHATS[title] = chatController = {
        uUS: uUS,
        wd: wd, window: wd, w: wd,
        toggle: function () {
            return w.toggle()
        },
        write: function (m) {
            messages.A($.h5(m).col('w'))
        },
        writeBlack: function (m) {
            messages.A($.h5(m).col('z'))
        }
    }


    k.em('jRm', title)//why cant i change this emit name to joinRoom ???
    _.ev(.5, function () {
        k.em('rm', title)
    }) //repeatedly emit 'room', which launches room user updates!
}
$.btCh = function (name) {
    return $.bt(name, function () {
        $.chat(name)
    }).mar(40)
}
$.chBt = function (un, ms) {
    return $.bt('chat',
        function () {
            $l('mse: ' + ms.V() + ' toWho: ' + un + ', from: ' + _username)
            k.em('IM', mo = {message: ms.V(), toWho: un, from: _username})
        })
}
$.iMsg = function (msgOb) {
    //this is triggered within a chatroom when someone clicks on a user and 'chats' them up
//will need to update other parts to also activate this (instant messages from other parts of the site)
//k.on('say to someone', function(id, msg){k.broadcast.to(id).emit('my message', msg)})

    var ip = $.ip(), iMsg = $.w()(
        $.h3('instant message from ' + msgOb.from),
        $.h4('message: ' + msgOb.message), ip,
        $.bt('reply', function () {
            k.emit('IM', {
                message: ip.V(), toWho: msgOb.from, from: _username
            })
        }))
    Y.IMS[msgOb.from] = iMsg
    return iMsg
}




function network(){
    friends()
    posts()
    profile()
    status()
    mail()
    function friends() {
        $.btBR = $buddyRequestButton = function (user) {
            return $.bt('buddy-request', function () {
                $.P('sRq', {to: user.u})
            })
        }
    }
    function posts() {
        $.btPo = function () {
            return $.bt('see posts', function () {
            })
        }
    }
    function profile() {
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
    }
    function status() {


        $.sts = $.status = showStatus = stat = function (user, div) {
            $.wStatus(user, function (sts) {
                $.d().A($.h3('STATUS: ' + sts))
            })
        }
    }
    function mail() {
        $.btMail = function (ms, user) {
            return $.bt('mail',
                function () {
                    $.P('sMsg',
                        {m: ms.V(), to: user.u})
                })
        }
    }
}