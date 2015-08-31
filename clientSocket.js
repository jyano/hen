

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

chat()

function chat() {
    k.on('ChatRmMs', function (d) {
        var msTx = msStr(d);
        $l('msTx: ' + msTx)
        if (Y.CHATS[d.rm]) {
            Y.CHATS[d.rm].write(msTx)
        }
        function msStr(msOb) {
            return msOb.un + ': ' + msOb.ms
        }

    })




}





k.emP= k.sop=function(m,u){ k.em('p' ,m, u)  }
k.emEm = function(a,b){ k.em( 'em' ,  a,  b)  }

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

function alpha() {
    k.on('IM', function (msgOb) {
        var iMsg = Y.IMS[msgOb.from]
        if (iMsg) {
            iMsg.A($.h4(msgOb.message))
        }
        else {
            $.iMsg(msgOb)
        }
    })


    k.IM=function( toWho, ms ){
        $l('toWho: '+ toWho + ', ms: '+ ms)
        k.em(  'IM',  {  m: ms,  t:toWho,  f:_username  }  )
    }


    k.on('rmUpd', function (d) {
        if (Y.CHATS[d.rm]) {
            Y.CHATS[d.rm].uUS(d.US)
        }
    })
    k.on('popbox', function (o) {
        $.pop(o);
        $('popbox').m()
    })
    k.on('v', function (d) {
        VAR = d
    })
    k.on('newImgAck', function (d) {
        $.c().fit(d.u)
    })
    k.on('im', function (i) {
        $.c().fit(i)
    })
}




function game() {
//game
    k.on('upd', function (guy) {
        updateGuy(guy)
    })

//k.on('eG', nP)

    k.on('mU', function (m) {
        uM(m)
    })// uM(m);
    k.on('map', function (m) {
        uM(m)
    })
    k.on('fc', function (fc) {

        // xy(gx.me, fc)

    })

    k.on('map', function (gA) {
        _e(gA, function (g) {
            _e(sArray, function (g) {
                c.a(p.me)
            })
        });
        xy(p.me, 200, 100);
        xy(p.me, f)
    })
}