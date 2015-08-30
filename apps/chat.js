
CHATROOMS = function () {

    chats = $.dA('g', 200, 200, '+').left(400).WH('auto').pad(10)
    chats.A(
        $.btCh('general'), $.btCh('fun'), $.btCh('sexy'),
        ip = $.ip().K('form-control'),
        $.bt('private room', function () {$.chat( ip.v() ) }).mar(40) )
}
