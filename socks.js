

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
k.on('bub', function(bub){

    $l('buuuuuuuuuuuuub')

    if( Y.g(bub.u) ){ Y.bub(bub.t, bub.x, bub.y)}

})


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

k.IM=function( toWho, ms ){
    $l('toWho: '+ toWho + ', ms: '+ ms)
    k.em(  'IM',  {  m: ms,  t:toWho,  f:_username  }  )
}

