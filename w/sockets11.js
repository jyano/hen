module.exports=function(io, ssIO){// sessionSocketIO




    KK = io.sockets

    USERS = []  //  array-hash: socketId, username
    ROOMS = KK.manager.rooms //an array of rooms //they all start with a slash

    //pass in a room NAME (string)
    //get back an array of all the users in that room
    //but you get them back by their IDs
    //you will need to convert their id's to their usernames
    //by mapping them with a function...

    KK.on('connection',  function(K){
        KProto=function(){

            K.o=function(ob){
                var K=this
                _.e(ob, function(v,k){

                    K.on(k, v)

                })}

            K.e = K.emit
            K.l=function(t){this.e('l', t)}
            K.b = K.bc= K.broadcast
            K.b.e= K.b.emit


            K.test=1
        };KProto()




        K.o({
           _l : function(){ K.e('l', 'hahhahahahahahahahahha') },
            l: function(d){d=d||'ping';  K.e('l', 'sent: '+l(d))},
            p : function(d, u){return U(u)?
                K.bc.e('p', d) :
                KK.in(u).emit('p', d)
            },
            e : function(d,a,b,c){ K.e(d,a,b,c)},
            bc : function(data,a,b,c){ K.bc.e(data,a,b,c)},
            execute:  function(fn,a,b,c){  global[fn](a,b,c)  },
            broadcast: function(d,a,b,c){K.bc.e(d,a,b,c)},
            upop: function(data,n){ K.bc.e('upop',data,n)},
            id: function(username){
                K.e('l',  K.id)  //tell client to log its socketId
                $l( K.id )     //server should also log socketId
                USERS[ K.id ] = username  //associete socketId with username
                $l( USERS );  $l( USERS[ K.id ] ) //log USER and username
            },
            kk:  function(data){K.e('res',  KK.clients(''))},
            dpop:   function(data,n){  K.bc.e('dpop',data,n) },
            chat: function(data){
                K.bc.e('newChat',   {    n: data.n,   m: data.m  })
                K.e('youChat', {  n: data.n,  m: data.m  })
                K.emit('chat', 'cool')},
            red:function(r,e,d){r=r||'frog';e=e||'frog';d=d||'frog';KK.in(r).emit(e,d)},
            x:function(m){K.e.to('sex').emit('l',m||'sexy')
                KK.in('sex').emit('l',m||'sexy')},

            du : function(data){

                    K.e('im', data)
                    K.bc.e('im', data); $m.img.create({})

                },

            newImg :function(data){
                    $l('-newImg')
                    $m.img.create(data, function(z, i){  K.emit('newImgAck', i)   })
                }


    })

        //uni
        K.o({bub:   function(speech){K.bc.e('bub', speech)}})

        getSocketId=function(un){
            //get socketId from username
            socketId = USERS[ un ]
            t = 'getSocke    tId..go it -> '+ un +': '+'kId: '+ socketId
    $l( t )
    return socketId
}

// rooms   //chat
K.o({
    //all users should emit this initially
    // to list its username with its id



    j: function(rm){
        $l('joining room: " '+ rm + ' "' )
        K.join( rm )

        rr =  _.m( ROOMS[   '/' + rm   ]  , function(username){return USERS[ username ]  } )

        K.e( 'inRoom',  { room: rm,  user: rr }  )
    },
    r: function(data){  K.e('res',  data? room[data]  : ROOMS())   },

    who: function(username){  $l( getSocketId(username))  },

    room: function( rm ){ // ***

        K.e('inRm', {
            r: rm,
            u: _.m(ROOMS['/'+ rm] , getSocketId )
        })




        $l('room: '+ rm)

        users =   _.m( ROOMS['/'+ rm], function(memberId){ return USERS[memberId]  })

        K.e( 'roomUpdate', {rm: rm,  U: users})
    },

    inRoom:  function(rm){
        //this gets you a list of users in a room //get the room
        K.e( 'inRm',  {   u: _.m( ROOMS['/'+rm]     , getSocketId), r: rm }  )
        K.e( 'inRoom', {users: _.m( ROOMS['/ '+ rm],  getSocketId ), room: rm })
    },
    in:function(data){ var rm,  guy
        if( A( data ) ){
            rm =  ROOMS['/'+data]
            if(!rm){ $l('not room !'); K.e('res', '-') }
            else { K.e('res', rm[ guy || k.id ]? true : false) }
        }
        else {
            rm = ROOMS[ '/'+ data ]
            if(!rm){$l('not room'); k.emit('res', '-')}
            else {K.e('res',   rm[ k.id ]? true: false ) }}
    },

    ChatMs: function (m) {$l('chatMsg-> '+m)
        m.room = m.chatRoomName
        KK.in(m.room).emit('ChatMs', m)
    },

    IM: function(message){
        //this is triggered within a chatroom
        // when someone clicks on a user and 'chats' them up
        //will need to update other parts to also activate this
        // (instant messages from other parts of the site)
        $l('sending private message..')
        KK.in(message.toWho)
            .emit('IM', message)
    }
})



//KK.in(r).emit('l','frog')
io.of('/chat').on('connection',   function(d){
    $l('new chatter')

})


})
    
}







KGAME=function(){

    Gs=[{m:'guy',u:'ii',x:140,y:140}, {m:'chicks',u:'jj',x:140,y:240}]
    Gs2=[{n:'c',x:300,y:200},{n:'c',x:300,y:200}]

    lLi=function(g){if(g){$l('in');return true} else{$l('-in')} }
    Guy=function(s){return {n:s.u,m:s.m,x:_.r(0,830),y:_.r(0,300)}}
    snSM=function(){m.guy.find({},function(z,m){k.b.e('mU',m)
        k.e('mU',m)})}
    move=function(a,b,d){if(d=='u'){a.y-=b};if(d=='d'){a.y+=b};
        if(d=='l'){a.x-=b};if(d=='r'){a.x+=b};return a}

    /*





     o('eG2',function(){
     m.guy.findOne(
     {n:s.u},function(z,g){if(!(g)){l('nP!:'+s.u+'!');
     m.guy.create(Guy(s),function(z,g){if(z){n(z)}
     k.b.e('nPlr',g)})}
     snSM()})})

     o('eG',function(){console.dir(s);
     if(!(_.where(Gs,{u:s.u})[0])){
     Gs.push({m:s.m, u:s.u,x:300,y:400});
     l('nP!:'+s.u+'!');
     k.e('mp',Gs, s.u);
     //k.e('you',s.u);
     }//k.b.e('nP',Gs);
     })

     o('act',function(a){$d(a)})

     o('mvG',function(d){
     //if(!lLi(gMp[n])){nGtSM(n)}
     m.guy.findOne({n:s.u},function(z,g){
     if(z){$d(z)}
     move(g,100,d)
     g.save(function(){snSM()})})})})}

     theMap=m.map.findOne({name:'gMp'},function(z,m){gMp=m.Gs;loadGame()}); // gMp=theMap.Gs;g.save(theMap)
     gMp.Gs.fred={x:3,y:3};gMp=m.map.findOne({n:'gMp'});gMp={m:{x:20,y:100},l:{x:20,y:130},c:{x:20,y:10}};

     */



    //io.KK.clients().forEach(function (k) {IO.getSession(k, function (z,ss) {   ss.j='hi';ss.save()})}) //so far we have access only to client KK
    //k.on('fc',function(d){move(fc,10,d);k.e('fc',fc);k.b.e('fc',fc)})
    //k.on('showMap',function(){k.e('map',[{name:'a',x:200,y:200}])})
    //k.on('warp',function(g){if(!(isGuyInMap(g))){gMp.push(g);k.e('map',gMp); k.b.e('map',gMp)} else{k.e('map',gMp)}})

    isGuyInMap=function(p){_.e(gMp,function(g){if(g.u==p.u){l('+map');return g}});l('-m');return false}

    fc={x:100,y:100}

    players=[]

    function nGtSM(n){gMp[n]  ={x:_.r(0,830),y:_.r(0,300)}}
};
ROOMZ=function(){ z(); $.h1('roomz').A() //var usernames={}, $scope.$broadcast('', );



    rooms = ['Lobby']
    usernames={}

    io.sockets.on('connection', function(K) { // KK = io.sockets
        K.on('adduser', function(un) {
            K.username =  un
            K.room = 'Lobby'
            usernames[un] = un
            K.join('Lobby')
            K.em('updatechat', 'SERVER', 'you have connected to Lobby')
            K.bc.to('Lobby').emit('updatechat', 'SERVER', un + ' has connected to this room')
            K.em('updaterooms', rooms, 'Lobby')
        })

        K.on('create', function(room) {
            rooms.push(room)
            K.em('updaterooms', rooms, k.room)
        })

        K.on('sendchat', function(d){
            KK.in(K.room).emit('updatechat', K.username, d)
        })

        K.on('switchRoom', function(newroom){
            var oldroom  = K.room
            K.leave(K.room)
            K.join(newroom)
            K.emit('updatechat', 'SERVER', 'you have connected to ' + newroom)
            K.broadcast.to(oldroom).emit('updatechat', 'SERVER', K.un + ' has left this room')
            K.room = newroom
            K.broadcast.to(newroom).emit('updatechat',  'SERVER', K.un + ' joined')
            K.emit('updaterooms', rooms, newroom)

        })

        K.on('disconnect', function(){
            delete usernames[K.un]
            KK.em('updateusers', usernames)
            K.bc.em('updatechat', 'SERVER', K.username + ' has disconnected')
            K.leave(K.room)
        })


    })
};

miniSocketsNOSTALGIA=function() {

    kk.i = function (a) {
        var r = kk.in(a)
        r.e = r.emit
        return r
    }

    kk.s = function (a) {
        var r = kk.socket(a)
        r.e = r.emit
        return r }

    em = function (k, b, d, e, f) { if (b)  {  k.emit(b, d, e, f)} else {return   _.p(em, k)   } }
    bc = function (k, b, d, e, f) {
        if (U(b)) {
            return _.p(bc, k)
        }
        k.broadcast.emit(b, d, e, f)
    }
    jn = function (k, b, d) {
        if (U(b)) {return _.p(bc, k)}
        k.join(b, d)
    }
    sKK(kk) //man=kk.manager
}


