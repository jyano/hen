module.exports=function(io, ssK){

    KK = sockets =  io.sockets

    US = []  //  array-hash: socketId, username

    $idToName=function(name){var id
        id = _.invert(US)[name]
        return id
    }
    $nameToId=function(id){
        return US[id]
    }

    $in=  KK.rm = function (rm) {
            var rm = KK.in(rm)
            rm.em = rm.emit
            return rm
        }
    RMS = KK.manager.rooms //an array of rooms //they all start with a slash
    $rm= RMS.rm = function (rm) {return KK.manager.rooms['/' + rm]}

    $getRoomUserIds=function(rm){
        //$l('$getRoomUserIds')
        var ids= KK.manager.rooms['/'+rm]
        //console.dir(ids)
        return ids
    }



    $getRoomUsernames=function(rm){
        var ids,uns
         //$l('$getRoomUsernames')

        ids= $getRoomUserIds(rm)
        uns= _.m(ids, function(id){
            return US[id]
        })
         //console.dir(uns)
        return uns
    }

    KK.on('connection',  function(k){
        k.on('id', function(un){
        //k.em('l',  $l(k.id))  //server logs, client logs

            US[ k.id ] = un  //associate socketId with username

            //$l('US: ' + US +  US[ k.id ] ) //log USER and username

            //all users should emit this initially
            // to list its username with its id

        }),


            k.on('jRm', function(rm){$l('joining room: ' + rm  )
                k.join( rm )

                k.emit( 'rmUd',  {rm: rm, US:   _.m(
                    $getRoomUserIds(rm),
                    function(un){
                        return US[un]})

                })})

        k.on('rmUd', function(rm ){
            // $l('on rmUd')

            k.emit( 'rmUd',{  //$l('$RmUd')

                    rm: rm,
                    users: $getRoomUsernames(rm)
                }

                // console.log('ud: '); console.dir(ud)

            )
        })

        k.on('ChatRmMs', function (ms){
            $l('chatRmMs: '); console.dir(ms)
            KK.in(ms.rm).emit('ChatRmMs', ms)
        })


        k.on('sendInvite', function(invite){
            k.broadcast.emit('someSentYouAnInvite', invite)
        })

        k.on('bub', function(tx){$l('new bub: '+ tx)
            k.broadcast.emit('bub', tx)
        })



        /*

         k.ON =k.o= function (ob) {
         var K = this
         _.e(ob, function (v, k) {
         K.on(k, v)
         })

         }

         k.em = function (a, b, c, d) {
         if (A(a)) {
         _.e(a, function (a) {
         k.emit(a, b, c, d)
         })
         }
         else {
         k.emit(a, b, c, d)
         }
         return k
         }

         k.l = function (t) {
         this.em('l', t)
         }

         k.bc = k.broadcast

         k.bc.em = k.bc.emit

         k.bcEm = function (a, b, c, d) {
         this.bc().em(a, b, c, d);
         return this
         }

         k.test = 1



        k.o({


            //client asks am I in this room
            in: function(d){var rm
                if(rm=RMS.rm(d)) {k.em('res', rm[ k.id ]? true: false ) }
                else  {$l('not room'); k.em('res', '-')}
            },



            r: function(data){//rooms?
                k.em('res',  data? room[data]  : RMS())
            },



            who: function(un){  //user


         $l(    US[ un ] )  },


            _l : function(){k.em('l', 'hahhahahahahahahahahha')},
            l: function(d){
                d=d||'ping';
                k.em('l', 'sent: '+$l(d))
            },
            p : function(d, rm){
                return D(rm)? KK.rm(rm).em('p', d) :
                    k.bc.em('p', d)
            },
            em : function(a,b,c,d){ k.em(a,b,c,d)},
            bc : function(a,b,c,d){

                $l('TOLD TO BROADCAST: '+ a)

                k.bc.em(a,b,c,d)

            }





             ,


            fn:  function(fn,a,b,c){ global[fn](a,b,c)  },  //it calls itself
            upop: function(d,n){ k.bc.em('upop',d,n)},


            kk:  function(data){
                k.em('res',  KK.clients(''))
            },

            //chat: function(data){k.bc.e('newChat',   {    n: data.n,   m: data.m  });k.em('youChat', {  n: data.n,  m: data.m  });k.emit('chat', 'cool')},
            //red:function(r,e,d){r=r||'frog';e=e||'frog';d=d||'frog';KK.in(r).emit(e,d)},

            x:function(m){
                k.e.to('sex').emit('l',m||'sexy')
                KK.in('sex').emit('l',m||'sexy')
            },

            dpop:   function(data,n){  k.bc.e('dpop',data,n) },

            du : function(data){
                k.em('im', data)
                k.bc.e('im', data); $m.img.create({})
            },

            newImg :function(data){
                $l('-newImg')
                $m.img.create(data, function(z, i){  k.emit('newImgAck', i)   })
            },




            //social
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

        io.of('/chat').on('connection', function(d){$l('new chatter')})
        */
    })




}




function later() {

    KGAME = function () {

        Gs = [{m: 'guy', u: 'ii', x: 140, y: 140}, {m: 'chicks', u: 'jj', x: 140, y: 240}]
        Gs2 = [{n: 'c', x: 300, y: 200}, {n: 'c', x: 300, y: 200}]

        lLi = function (g) {
            if (g) {
                $l('in');
                return true
            } else {
                $l('-in')
            }
        }
        Guy = function (s) {
            return {n: s.u, m: s.m, x: _.r(0, 830), y: _.r(0, 300)}
        }
        snSM = function () {
            m.guy.find({}, function (z, m) {
                k.b.e('mU', m)
                k.e('mU', m)
            })
        }
        move = function (a, b, d) {
            if (d == 'u') {
                a.y -= b
            }
            ;
            if (d == 'd') {
                a.y += b
            }
            ;
            if (d == 'l') {
                a.x -= b
            }
            ;
            if (d == 'r') {
                a.x += b
            }
            ;
            return a
        }

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

        isGuyInMap = function (p) {
            _.e(gMp, function (g) {
                if (g.u == p.u) {
                    l('+map');
                    return g
                }
            });
            l('-m');
            return false
        }

        fc = {x: 100, y: 100}

        players = []

        function nGtSM(n) {
            gMp[n] = {x: _.r(0, 830), y: _.r(0, 300)}
        }
    };


    miniSocketsNOSTALGIA = function () {

        kk.i = function (a) {
            var r = kk.in(a)
            r.e = r.emit
            return r
        }

        kk.s = function (a) {
            var r = kk.socket(a)
            r.e = r.emit
            return r
        }

        em = function (k, b, d, e, f) {
            if (b) {
                k.emit(b, d, e, f)
            } else {
                return _.p(em, k)
            }
        }
        bc = function (k, b, d, e, f) {
            if (U(b)) {
                return _.p(bc, k)
            }
            k.broadcast.emit(b, d, e, f)
        }
        jn = function (k, b, d) {
            if (U(b)) {
                return _.p(bc, k)
            }
            k.join(b, d)
        }
        sKK(kk) //man=kk.manager
    }


}