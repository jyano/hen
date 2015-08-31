$CHATS={
    //create/empty chat object..
    // it will hold your chats

    /// for example
    /// sexy: chatControllerOb,
    // fun: chatControllerOb
    // controllerOb defined by $.chat
}

$.chatEl=function(n,id,c){
    var wd =   $.w('chatroom: ' + n).id(id).css({'min-width': 600, 'min-height': 400}).C(   c || $r())
    wd.messages = $.d().id('cbi').C('u').ov('auto')
    wd.input = $.ip().K('form-control')
    wd.usersDiv = $.d().A($.i('me').A())
    wd.mainPanel = $.Cl(8, wd.messages, wd.input, $.bt('send', function () {
        $sendChatRmMs(n, wd.input.V())
    }))
    wd.usersPanel = $.Cl(4, $.h3('users:'), wd.usersDiv)
    wd.A($.R().A(wd.mainPanel, wd.usersPanel))
    return wd
}

$.userLink=   function(un) {
    return $.h5(un).$(function () {
        $.popUser(un)
    })
}
$.chat=function(n, c, id){
    n = n || 'chatbox' //default chatRm
    if ($CHATS[n]){$l('already in this room'); return} //singleton!
    var wd= $.chatEl(n, id||'cbo', c||'o')

    k.em('jRm', n)//why cant i change this emit name to joinRoom ???
    $CHATS[n] = ChatController(wd)

    _.ev(.5, function () {

        k.em('rmUd', n)
    }) //repeatedly emit 'room', which launches room user updates!



    function ChatController(wd){

        return {


            updateUsersDiv: function (users) {wd.usersDiv.E() // clear the div
                var n=1//$l('updateUsersDiv');// $d(users)if (!A(users)) {wd.usersDiv.A($.h5('no users'));return}
                _.e(users, function (un) {
                    $l('user num: ' + n++ +' -> '+un)
                        wd.usersDiv.A($.userLink(un))
                })
            },

            wd: wd,
            window: wd,
            w: wd,
            toggle: function () {
                this.wd.toggle()
                return wd
            },
            write: function (m) {
                wd.messages.A($.h5(m).col('w'))
            },
            writeBlack: function (m) {
                wd.messages.A($.h5(m).col('x'))
            }
        }

    }

}


CHAT=function(){

    k.on('ChatRmMs', function(d){

        var msTx = msStr(d);
        $l('msTx: ' + msTx)
        if ($CHATS[d.rm]) {
            $CHATS[d.rm].write(msTx)}
        function msStr(msOb){
            return msOb.un+': '+msOb.ms}
    })



    k.on('rmUd', function (d) {

        $l('rmUd')
        if ($CHATS[d.rm]) {
            $CHATS[d.rm].updateUsersDiv(
                d.users
            )}
    })





    $.ChatBt= function(n){
        return $.bt(n, function () {
            $.chat(n)
        }).mar(40)
    }

    $.d('g', 200, 200, '+')
        .dg().left(400).WH('auto').pad(10).A(
        $.ChatBt('general'),
        $.ChatBt('fun'),$.ChatBt('sexy'),
        ip = $.ip().K('form-control'),
        $.bt('private room', function(){
            $.chat(ip.v())
        }).mar(40))

}








function $sendChatRmMs(rm,ms){

    k.em('ChatRmMs',
        $ChatRmMs(rm, ms)
    )

    function $ChatRmMs(rm, ms, un) {
        return {
            rm: rm,
            ms: ms,
            un: un || window['_username']
        }
    }

}

function later(){

    //add this back to the chat rooms (after sendMessage bt):
    // $.bt('pop', function () {k.emit('p', ip.V(), n)}), $.bt('pic', function () {$.pop('pic select')})

}