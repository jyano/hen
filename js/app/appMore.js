

apps()
$.l=function(link){
    if(link){window.location=link}
    return window}
routeTx()
function apps(){

    CHAN=function(){
        $.btEm=  function(t ,toEmit){ return $.bt(t, function(){k.em(toEmit||t)})} //a button that emits!
        $.dA().A(

            $.btEm('msg', 'chat'),
            $.bt('room', function(){
                Y.chan('chat',  function(){$l('chat')} ).on('al', pop)
            })
        ).lt(300)
        k.on('newChat', function(d){ CH.bc(d.n+': '+ d.m) })
        k.on('youChat', function(d){ CH.s(d.n+': '+ d.m) })

    }
    POSTS=function(){$.fm()

        s1.A(

            dd= $.inputBox({
                boxTitle:'new post',
                url:'/pst',
                btT:'post',
                func: function(){Y.run('home')},
                inputType:'textAndTextArea'
            }),



            $.h2('attach:'),


            $.bt('pic', function(){

                m= $.pop(  ps= $.d().A( $.h3('pic select')  ) )
                $.getJSON('/img', function(pics){

                    _.e(pics, function(p){
                        ps.A(  $.i(p.d).WH(40,40).$(  function(){
                            attached.E( $.i(p.d).WH(20,20)  )
                            m.modal( 'hide' )
                        }))})})}),

            attached= $.d().A()
        )



        tab2=[

            'buds',

            function(){  TABS.E( $.h1('bud posts') )  }

        ]



        tab1=['all',

            function(){

                TABS.E($.h1('public posts'))

                $.eG('/psts',

                    function(i){

                        $.blp(i, TABS, '-')

                    })

            }
        ]



        tab3= $.tab('user',function(){
            u=$w['from']||'a'


            s1.E(
                $.sp('topics: '))

            TABS.E(
                $.h1('user '+u+' blog'))


            $.eG('/pstu',{u:u}, function(i){$.blp(i, TABS, '+') })})


        tab4= $.tab('topic',function(){
            TOPIC=$w['topic']||'fantasy'
            TABS.E(h1('posts on '+TOPIC+' topic'))
            $.eG('/pstt', {t:TOPIC},  function(i){  blp(i, TABS, '/')})})

        tab5=['yours',

            function(){

                TABS.E($.h1('your posts'))

                $.eG('/pst', function(i){$.blp(i,TABS,'+')})

            }]


        s2.A(
            t= $.tabs(tab1,tab2,tab3,tab4,tab5))

        t.load()

    }
    CHATROOMS = function () {
        chats = $.dA('g', 200, 200, '+').left(400).WH('auto').pad(10)
        chats.A(
            $.btCh('general'), $.btCh('fun'), $.btCh('sexy'),
            ip = $.ip().K('form-control'),
            $.bt('private room', function () {$.chat( ip.v() ) }).mar(40) )
    }
    UNIVERSE=function(){z()

        //Y= window['Y']? window['Y'] : {}

        Y.bId= Y.mById=fetchMugByMugId = fetchMugByUserModel2 =function(user, fn){$.P( 'getimagebyid' ,  user.m,  fn)}
        Y.bM= Y.mByM=fetchMugByUserModel =  function(user, fn){$.G('mug/' + user.m, fn) }

        Y.bN= Y.mByN=fetchMugByUsername =  function(un, fn){
            $.P('mug', {u: un}, function(mug){if(mug){ fn(mug) }})
        }


        Y.t= Y.b= Y.bub=SpeechBubble =  function( t, x, y ){var g=G(arguments)
            ct=   $Ct()
            if( !window['uni'] ){alert('the universe is missing!');return}
            text = g[0] || 'hi!'
            //so if you don't pass in coords, it relies on 'you'
            x = g[1] || you.x
            y = g[2] || you.y
            uni.A(ct)
            ct.cir(x-150,y-150,100,'w').cir(x-50, y-50, 30, 'w').cir(x-20,y-20,10,'w')
                .text(t, "20px Arial", "blue", x-200, y-200)
            ct.tr( [{ a:0, sxy:.1, x:x-250, y:y-250 }, 20000])
            $.in(10, function(){ct.rm()})
            //broadcast out your speech bubble
            if(g.p){ k.emit('speechBubble', { t:t, x:x, y:y, u:_username } )}
            return ct
        }
        Y.loc=guyLocation=function(){  if( window['you'] ){
            return {u:_username, username:_username, x: you.x, y: you.y}
        }}//relies on 'you'.. actually just makes a similar object


        Y.g=getGuy=    Y.A=addGuy=function(un, bm){//add guy to Y.GUYS
            var guy
            if(bm){
                Y.GUYS.push({un: un,  bm: bm })
                bm.rC().XY(600).sXY(.4).a2(uni) //add guy's bitmap to universe
                // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })
            }

            else {

                //get the username//do this as a reduce
                un = O(un) ?
                un.u || un.un:
                    un
                _.e(Y.GUYS,function(g){if(g.u ==  un || g.un == un){guy = g }})
                return guy
                //pass in a user / username to update your image of them //or.. pass nothing to update everyone on YOU
            }

        }


        //get guy object by username or user.username //guy object has {user/username, x, y} //-- so this finds a guy in the Y.GUYS or returns false if he aint there

        Y.u= updateGuy =  function(u){var guy, bm

            if(u){guy= Y.g( u.u )
                if(O(guy)){bm = guy.bm}
                if( bm ){ bm.XY( u.x, u.y )  }
            }
            else {  k.em('bc', 'updateGuy', Y.loc())  }
        }

        Y.iv= inviteToUniverse=function(toWho){
            k.em('bc', 'invite', {from: _username, toWho: toWho})}

        Y.ac= acceptUniverseInvitation =  function(toWho){
            $l(_username + ' accepts from ' + toWho)
            k.em('bc',  'acceptUniverseInvitation',
                {from: _username, toWho: toWho})
        }//this will have the server broadcast.emit 'accept'

        Y.U=Y.s=startUniverse = function(name){var guy
            $l('startUniverse with: '+  name)
            if( !window['uni'] ){$l('no uni  -- calling UNIVERSE()'); UNIVERSE() }
            else {$l('uni found. no need to call UNIVERSE')}
            guy = Y.g(  name )
            if( guy ){  $l('we have guy: ' + guy ) }
            else {
                $l('no guy'); Y.bN(name, function(mug){ $Bm( mug,  function( bm ){
                    Y.A(name, bm) })})
            }
        }
        u= uv = uni = $St(1000, 800)
        uv.bgI('/beach.jpg')
        uv.mug(function(b){you = b.rC().XY(600).sXY(.4).dg()
            Y.GUYS.push({u :_username, b :you}) //b.$$( function(){ b.rm(); k.emit('X', _username)})
            d=$.d('b', 1000, 'auto')//.pp2( $('body') )
            d.A(
                $.br(3), $.ip('...', 'tx').id('textinput'),
                $.bt('send', function(){Y.bub( $('#textinput').V(), '+')}) )
            $.ev(.1, Y.u)
        })

        //  userHolder = $.d('z').a2( $.R().A() )

        $l('users:')

        n=0

        $.eG('users', function(u){window['u'+ String(n++) ] =  u
            $l(u.u)
            if(!u.mug ){   $l('no mugURL!') }
            else {$.i(u.mug ).WH(100).a2( d ).$(function(){$l(u.u); Y.iv( u.u ) })}
        })

        // fetchMugByMugId( user,  function(userMug){
        // theRow.A( $.thumbnail( $.span(user.u), userMug).WH(200).click(  function(){ inviteToUniverse(user.u)   }) )})
//RECIEVE speech bubble
    }
    PROFILE=function(){
        $.boot = function(){z();

            var r = $.R()
            _.e(arguments, function(g){r.A(g) })
            return  ct = $.Ct().A(r)
        }

        $.boot(

            $.h1('you got a profile?'),
            $.d().id('content'),
            f = $.f().C('r').WH(400).A(
                $.d().A(
                    $.lb('about me'),
                    $.ta().id('aboutMe')),
                $.d().A(
                    $.lb('i enjoy'),
                    $.ip().id('iEnjoy')),
                $.d().A(
                    $.lb('i seek'),
                    $.ip().id('iSeek')),
                $.sm('save profile'),
                $.bt('undo', function(){
                    if(p){
                        $('#aboutMe').val(p.aboutMe )
                        $('#iEnjoy').val(p.iEnjoy )
                        $('#iSeek').val(p.iSeek )
                    }
                }),
                $.bt('clearr', function(){
                    $('input').val('')
                    $('#iEnjoy').val('')
                    $('#iSeek').val('' )
                })
            ))

        $.P('getMyProfile', function(pf){



            if(pf){
                $l('found profile -> _pf')
                _pf=pf
                $('#aboutMe').v(pf.aboutMe )
                $('#iEnjoy').v(pf.iEnjoy )
                $('#iSeek').v(pf.iSeek )
            }

            else {$l('no profile found')}

        })




        $('form').submit(function(e){
            e.preventDefault()

            var data = {
                aboutMe: $('#aboutMe').v(),
                iEnjoy: $('#iEnjoy').v(),
                iSeek: $('#iSeek').v()
            }

            $.P('myprofile', data, function(){

                $l('P(mypf)')
                $.P('getMyProfile', function(pf){
                    _pf=pf
                    $l('getMyProfile -> _pf')
                })
                $l('form data submited..')
            })

        })


    }
    USERS = function(){

        d = $.Ct().A(
            $.R(),
            $.h1('users'),
            $.d('y').id('ct').A('users will go here via ajax in a moment...', $.br(2))
        ).C('r')


        //i = 0

        $.G('users', function(u){
            d.E();
            _.e(u,function(u) { //$l(u.username + '-' + i++)

                d.A(
                    $.dK("col-xs-6 col-sm-3 col-md-2 col-lg-2").A($.user(u))
                )

            })
        })

    }
    USER =function(a){$.fm()
        //problem: click on a user.. creates a NEW USER?

        if(U(username=  _pam || a)){$l('username undefined.  default to -> a'); username = 'a'}


        $.G('user/'+ username, function(u){
            s1.A(
                $.h1(u.username),
                $.i(u.mug).WH(100),
                $.h4(u.status),
                statusSpan = $.sp(),
                i = $.i(),
                messageTextarea= $.ta().C('w','z')
                // $chatButton( _pam,  messageTextarea)
            )
        })

        tab1= $.tab('profile',function(){ TABS.E();  $.pf(_pam, TABS) })

        tab2= $.tab('pics', function(){
            TABS.E().A('hahaha')
            $.eG('images/' + _pam,  function(i){  TABS.A( $.i(i.d).WH(100) )})
        })


        tab3= $.tab('blog',function(){TABS.E()
            $.eG('/pstu', {u:username},  function(i){$.blp(i, TABS, '+') })
        })


        /*
         tab4= $.tab('buds',function(){ TABS.E() })
         tab5= $.tab('groups',function(){ TABS.E() })


         tab6= $.tab('email', function(){
         //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
         from = _pam
         var messageTextarea = $.textarea()
         _$username = window['from'] || 'b'

         TABS.E()(
         $.h1('convo with '+u),
         $.h1('Messages'), $.br())
         $.eG('gMsgW', { u: _$username }, function( m ){var c
         c = $.c('X', 100)
         $.P('mug', {u: m.fr}, function(mug){ c.fit(mug) })
         TABS.A(
         $.R().A(
         $.Cl(2,c),
         $.Cl(10,
         $.h6('from: ' + m.fr),
         $.h4($.dt( m.dt ).dt()).K('pull-right'),
         $.h5(m.m))
         ),
         $.hr()
         )})
         TABS.A(
         messageTextarea,
         $.bt('new message', function(){$.P('sMsg' , {m: messageTextarea.V(), to: from})}), $.br(2))
         })
         */
        tabs= $.tabs(tab1,tab2,tab3//,tab4,tab5,tab6

        )


        s2.A(tabs)

        tabs.load()

    }
    STATUS=function(){$.fm()

        s1.A(
            $.h1('status'),
            $.ip().id('statusInput'),
            $.bt('update', function(){$.P('status',
                {text: $('#statusInput').v()}, function(){$l('status updated')})}))
    }
    MESSAGES=function(){$.fm()  //is TABS never set? -- its the content holder for the panes!!

        tab1=[ 'received',  function(){
            TABS.E(   $.h1('Messages'),  $.br()  )
            $.eG('gMsg', function(m){TABS.A(
                $.R().A(
                    //c1 = function(m){return cx().bc('-').Z(1).mug(m)}
                    $.Cl(2, $.c('X',100,100).mug(m.fr)),
                    $.Cl(10, $.bt(m.fr, function(){from = m.fr;  tab3.load()}),
                        $.h4( dtt(m.dt) ).K('pull-right'),
                        $.h5(m.m))
                ),
                $.hr()
            )})}, '*']

        tab2=['sent', function(){
            TABS.E(
                $.h1('Messages'),
                $.br())

            $.eG('/MsgS', function(m){mm=m;
                var ms= $('<textarea>'),
                    c=  $.canvas('X',100,100)
                $.P('mug',{u:m.to}, function(mug){c.fit(mug)})
                TABS.A($.R().A($.Cl(2,c),
                    $.Cl(10,
                        $.bt('to: '+m.to, function(){from=m.to;  tab3.load()} ),
                        $.h4(dt(m.dt).dt()).K('pull-right'),
                        $.h5(m.m)
                    )), $.hr())
            } )
        }]

        tab3 = $.tab('convo',  function(){
            var ms = $.ip()
            u= window['from']||'b'
            TABS.E( $.h1('convo with '+u), $.h1('Messages'), $.br() )

            $.eG('gMsgW', {u:u}, function(m){

                var c = $.c('X', 100, 100)
                $.P('mug', {u:m.fr}, function(m){c.fit(m)})
                TABS.A($.R().A(
                        $.Cl(2,c),
                        $.Cl(10,
                            $.h6('from: '+m.fr),
                            $.h4(dt(m.dt).dt() ).K('pull-right'),
                            $.h5(m.m))),
                    $.hr()
                )})
            TABS.A(ms, $.bt('new message', function(){
                $.P('sMsg',   {m:ms.V(), to:from})}), $.br(2))})

        tab4 = [ 'requests', function(){
            TABS.E($.h1('Buddy requests'), $.br())
            //buddy requests
            $.eG('gRq',  function(msg){ TABS.A( $.d().A(
                $.h6( 'from ' + msg.fr + ' on ' + msg.dt ),
                $.h5( msg.m ) ,
                $.bt('accept', function(){  $.P( 'yRq',  { u: msg.fr }  )}),
                $.bt('deny'),
                $.hr()
            )) })
        }]
        s2.A( t = $.tabs( tab1, tab2, tab3, tab4 ) )
        t.load()
    }
    SORTY=function(){$.fm()
        /*
         s1.A(
         $.h1('your sorts'),
         $.d().WH('auto').A($.h1('new sort'), textInputSpan('post','/srt') ),
         $.h4('recent: ')
         )
         */
        $.eG('/srt',function(t){ d1.A( $.bt(t.t,function(){sorty(t.t)}), $.br(2) ) } )
        s2.A(  $.i('me'))
    }
    YGAME=function(){
        $.gameController=function(){ return $.d().A(
            $.bt('left').id('left'),
            $.bt('right').id('right'),
            $.bt('jump').id('jump'))}

    }


}
function routeTx(){



    testMyMug=function(){z()

        $.h1('testing myMug ...').A()
        $.get('/myMug', function(data){z()
            $.h1('in callback..').A()
            $.img(data).A().C('black').drag()
        })

    }
    testMugByUsername=function(username){z()

        username = username || 'ss'


        $.h1('testing mugByUsername ...').A()

        $.get('/mugByUsername/' + username, function(data){z()


            $.h1('in callback..').A()

            $.img(data).A().C('black').drag()

        })



    }
    testDefaultMug =function(){z()
        $.img(defaultMug).A()}
    testChangeMug=function(){
        //it automatically changes your userMug to the defaultMug


        $.post('/changeMug', {url: defaultMug},

            function(){z()

                TWEEN()
            })

    }

}




$(function(){

    $.Gj('loggedIn', function(un){
        Y._un= Y._userName = _username = $l(un)
        if(un == 'guest' || !un){ Y('GuestPage') }
        else {

            k.em('id', un);
            k.em('jRm',  _username )
            $.G('myMug', function(mug){
                Y._userMug = _userMug  = mug
                Y('HomePage')})
        }
    })


})



