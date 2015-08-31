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

$.wd=  $.w=$.win=function(a, size,  id){
    var g=G(arguments),
        t,  lBt,mBt,xBt, o, wd,w



    w= wd = $.dA('b',  '+').WH('auto','auto').al(.9).
        ov('auto').pad(10)
        .bW(4).bS('dashed')
        .dg()

    wd.A(

        mBt=$.btR('>', function(){
            w.WH(700); lBt.sh(); mBt.hd();
        }),

        lBt= $.btR('<', function(){
            w.WH('auto'); mBt.sh(); lBt.hd()
        }).hd(),

        xBt = $.btL('X',function(){
            w.rm()
        })
    )

    o= g.N_? { size: g.f }: g.O_? { ch: g.f } : {t: g.f, size: g.s, id: g.t}

    if(o.ch){ w.A(o.ch) }
    if(o.t){ w.tit(o.t)}
    if(o.id){ w.id(o.id) }


    return wd

}
