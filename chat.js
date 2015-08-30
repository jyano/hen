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
$ChatRmMs=function(rm, ms, un){un=un||window['_username']; return {rm:rm, ms: ms, un:un}}

$.chat = function (title, color, id) {
    var ip, sendBt, picBt, popBt, messages, dUS = $.d()

    if (Y.CHATS[title]) { $l('already in this room'); return }
    title = title || 'chatbox'
    color = color || 'b'
    id = id || 'cbo'

    wd = $.w('chatroom: ' + title).id(id).css({
        'min-width': 600,
        'min-height': 400,
        'background-color': color
    })



    sendBt = $.bt('send',  function(){
        
        var ms=$ChatRmMs(title, ip.V())
        k.em('ChatMs', ms)
    })

    wd.A($.R().A(
        $.Cl(8, messages = $.d().id('cbi').C('u').ov('auto'),
            ip = $.ip().K('form-control'),
            sendBt,
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



$.btCh = function (n) {
    return $.bt(n, function () {
        $.chat(n)
    }).mar(40)
}



CHATROOMS=CHAT=function () {


    chats = $.d('g', 200, 200, '+').dg().left(400).WH('auto').pad(10)


    chats.A(

        $.btCh('general'),

        $.btCh('fun'),

        $.btCh('sexy'),

        ip = $.ip().K('form-control'),

        $.bt('private room', function () {$.chat( ip.v() ) }).mar(40) )
}
