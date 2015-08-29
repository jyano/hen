socks=function(){
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
    k.on('bub', function(bub){if( Y.g(bub.u) ){ Y.bub(bub.t, bub.x, bub.y)}})
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


}; socks()
$.dCt= $.ctD=   function(){var g = G(arguments), //makes auto top-spacing (for navbar not to block)
    d = $.dK('container')
    if(!g.n){ d.A( $.br(4) )  }
    _.e(g, function(v){ d.A(v) })
    return d
}
$.fm= $.format=function(){
    $l('in fm')
    section1 =s1 = $.sp()
    section2 =s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))

};
testFormat=function(){z()
    $.fm()
    s1.A($.imgResponsive('chicks') )
    s2.A($.i('me'), $.i('guy'))
}
$.blp =   function(s, div){//topic, datetime, content //used for LISTING things (blog posts, etc)

    var g=G(arguments), s=g[0],
        div=g[1], sp = $.sp(),

        post=g[0]

    post.topic = post.t

    post.userY.CHATS[ d.rm ] = post.u
    post.datetime = post.dt
    post.content = post.c


    if(g.p){sp.A($.bt('topic: '+ post.topic, function(){ topic = post.topic;  tab4.load()  }   ),
        $.h3( post.content ))
        if(post.datetime){ sp.A($.h5( dt(post.datetime).dt() ) )}}
    else if(g.n){
        sp.A(
            $.bt('user: '+ post.user, function(){
                from=post.user;tab3.load()}), $.br(),
            $.bt( 'topic: '+post.topic, function(){
                topic=s.t;tab4.load()}),
            $.h3(post.content) )
        if(post.datetime){sp.A( $.h5( dt(post.datetime).dt() ) )}}
    else if(g.d){
        sp.A(
            $.bt('user: '+post.user, function(){from=post.user;tab3.load()}), $.br(),
            $.h3(post.content))
        if(post.datetime){sp.A($.h5( dt(post.datetime).dt() ) )}
    }
    else {
        if(post.datetime){sp.A($.h4( dt(post.datetime).dt() ) )}
        sp.A($.h1(post.content))
    }
    if(post.du){sp.A( $.c('X', 400).fit( post.du ) )}
    sp.A($.hr())
    return D(div)? div.A( sp ): sp
}
$.wStatus  = function(user, fn){
    $.G('sts1', {u: user},
        function(sts){ fn(sts.c) }) } //with first status?
$.btMail = function(ms, user){
    return $.bt('mail',
        function(){$.P('sMsg',
            {m: ms.V(), to: user.u} )})}
$.chBt = function(un,ms){return $.bt('chat',
    function(){$l('mse: '+ ms.V() + ' toWho: '+ un+ ', from: '+ _username)
    k.em('IM', mo= {  message: ms.V(),  toWho:un,  from:_username  } )})}
$.btBR= $buddyRequestButton = function(user){return $.bt('buddy-request', function(){$.P('sRq', {to:user.u}) })}
$.btPo=   function(){return $.bt('see posts', function(){})  }
$.ipB= $.inputBox=function(ob){  ob = ob||{}

    var d,ip, fn      = ob.func, url   = ob.url || '/',
        tt   = ob.boxTitle,
        inputType  = ob.inputType||'text',
        defaults   = ob.defaults||{},
        t = ob.btT || 'submit', taI

    d = $.d().WH('auto').pad(10)

    if(tt){ d.A(   $.h1(tt)   )  }

    if(inputType == 'text'){

        d.A( ip = $.ip().K('form-control')).A(
            $.bt(t, function(){$.post(url, _.df( dataValue(ip), defaults), fn)
            })
        )
    }

    if(inputType == 'textArea') {d.A(taI= $.ta().K('form-control'),  $.bt(t, function () {$.post(url, _.df(dataValue(theTextAreaInput),defaults), fn)}))}
    if(inputType == 'textAndTextArea') {
        d.A(
            ip=  $.ip().K('form-control'),
            taI= $.ta().K('form-control'),
            $.bt(t, function () {$.post(url, _.df(dataValue(ip,taI), defaults), fn)}))}
    return d}
inputBox=function(){
//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
    getMessages = gMsgs=function rc(u,M){


        add=function rc( messagesArray, a ){var args=G(arguments)
            if(args.n){ messagesArray.E() }
            if( A(a) ){_.e(a, function(v){rc( O(v) ?v.n :v) })}

            else { _.e(args, function(v){messagesArray($.br(), msg(v))}

            )}
        }

        alert('getMessages')
        $.Gj(u, function(d){add(M,d)
                all('msg', function(m){
                    m.$$(pof('/nMsg',{n:m.T()},rc))
                })
            })}
// get value from an input el OR two input els
// if one, creates {c:?}
// if two, creates {t:?,c:?}
    dataValueX=  dVX=function self(title, content){

        if( U(content) ){return self(null, title)}

        var data = {}

        data.c = data.content = data.message = content.V()

        if(title){
            data.t = data.title = data.topic = title.V()
        }

        return data
    }
// ob is for adding more pops to post-ob,
// or just pass function early
    textInputSpan  =ip0= function(   t, url,  ob,  fn ){
        url=url||'/'
        if(F(ob)){fn=ob;  ob={}}
        fn=fn||home

        var sp = $.sp(), ip= $.ip(),
            bt= $.bt(t, function(){$.P(url, _.df( dataValue(ip),  ob), fn )})
        //return a span with the tx and a $button
        //when u click the $button, get the value and post it to a url
        return sp.A(ip, bt)
    }
//this makes a span with a textarea and a button
//pass button text, url(/), and function
//when button clicked:
//      the  value of the text area
//      will be posted to the url
//      (passing the function)
    $.textAreaDataObj = function(t,url,fn){var sp,bt,ta
        url=url||'/';fn=fn||home
        sp = $.sp()
        ta= $.ta()
        bt= $.bt(t, function(){$.post(url, {content:ta.val()}, fn)})
        return sp.A(ta, bt)
    }

    $.textTextarea = textAndTextAreaSpanX =ip2=function(t,url,fn){

        url=url||'/'; fn=fn||home
        return $.sp().A(
            ip=$.ip(),
            $.ta(),
            $.bt(t,function(){$.post( url, {title:ip.val(), content:ip.val()}, fn)
            }))
    }
    inputBox1=function(ob){
        ob=ob||{}

        var func= ob.func,
            url         =   ob.url || '/',
            boxTitle    =  ob.boxTitle,
            inputType   =  ob.inputType,
            defaults    =   ob.defaults||{},
            t  =   ob.btT || 'submit',
            inputType   =     ob.inputType||'text'
        d = div = $.d(40).WH('auto')
        if(boxTitle){ d.A($.h1(boxTitle))}
        if(inputType == 'text') {
            var ip=$.ip()
            d.A(input)
            d.A($.bt(t, function(){$.P(url, _.df({title: ip.val()},defaults), fn)}))
        }

        if(ob.inputType == 'textArea') {
            var ta = $.ta()
            d.A(taI, $.bt(t, function () {
                    $.post(url, _.df({content: ta.v()}, defaults), fn)})
            )
        }

        if(ob.inputType == 'textAndTextArea') {
            var ip = $.ip(), ta = $.ta()
            d.A(ip, ta)
            d.A(
                $.bt(t, function () {$.P(url, _.df({title: ip.v(), content: ta.v()}, defaults),
                        fn)}))}
        //z(); theDiv.a()
        return d}


};inputBox()
$.dragFrame=function(ob){
    var oD=  $.d('r','+').pad(10)
    inD= $.d('y').md(function(e){ e.stopPropagation()  })
    oD.A(  inD )
    return inD.A( ob )
}
$.iD= $.imgDiv=function(st){
    d = $.d('y','+')
    $.eGj('img',  function(i){d.A($.c(100, 100).fit(i.d)
        .$(function () {st.bm(i.d, function (bm) {  bm.sXY(.4).dg() } )}))})
}
$.userCard  =function(){z()
        return $.R(
            $.Cl(2).K('text-center').A( $.i('me').WH(70,70), $.h5('hi') ),
            $.Cl(3).A( $.h4('pics'), $.h5('place to upload')) ).A()

}
$.msg= $.messageDiv = function(t){

        return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
            .fS(20).T(t||'msgText')

}
$.wd=$.w= $.win =  function(a, size,  id){var g=G(arguments), t, w,wd, lBt,mBt,xBt,o

    wd= w =  $.dA('b',  '+').WH('auto','auto')
        .al(.9).ov('auto').pad(10).bW(4).bS('dashed')
    wd.A(
        mBt=$.btR('>', function(){w.WH(700); lBt.sh(); mBt.hd(); }),
        lBt= $.btR('<', function(){w.WH('auto'); mBt.sh(); lBt.hd()}).hd(),
        xBt = $.btL('X',function(){ w.rm() })
    )

    o=  N(g[0])? { size: g[0] }: O(g[0])? { ch:g[0] } : {t: g[0], size:g[1], id: g[2]}

    if(o.ch){ w.A(o.ch) }
    if(o.t){ w.tit(o.t)}
    if(o.id){ w.id(o.id) }
    return w

}
$.pop=function(message, o){

    if( S(o) ){ return $.pop(o, { title: message } )    }

    o = O(o)? o : {}
    message = message || 'pop pop'
    mB = $.modalBody().A( $.h2( message ) )
    m =  $.modalFade().A($.modalDialog().A($.modalContent().A( mB)))

    if(!o.hd){ m.modal() }

    if(o.tt){mB.pp($.h1(o.titC).col(o.titC||'z'),
        $.hr().C( o.headerC||'z'  ).css('height', 2))}

    if(o.bt ){ mB.A( $.bt( o.bt )  )}

    if(o.dg ){  m.dg() }

    if(o.al ){ m.al( o.al ) }

    //text color of the MESSAGE
    if(o.col){  m.col( o.col)}
    //color of background of modal itself
    if(o.C){
        //flash like crazy
        if( o.C == '*' ){$.ev(.1, function(){ mB.C( $r() ) }) }
        else { mB.C( o.C ) }
    }
    //this color takes over the whole screen!
    //this is the background color of the hiding body
    if(o.c) {  m.C( o.c)  }
    return m

}
$.dangMessage=function(msg){
    return $.sp().delButton().A( $.h2(msg).K('alert alert-danger')  )
        .pp2('body')

}
$.floatIp=function(t, fn){var g=G(arguments),f
    f=$.f().K('text-center').C('o').fS(20).dg().minW(200 )
        .A(
        $.sm(t), $.ip())

    if( F(fn) ){ f.sm(fn) }
    return f

}
$.eD= $.editDiv=function(words){//$.dE
    canMove=true
    changeLocation=true
    inputMove=true
    mouse = 'up'

    ta =  $.ta().mar(4)
    sp=    $.sp().C('z')
    fn=    function () { sp.T( ta.v() ) }
    d=  $.dA('+').C('n', 'y').pad(8)
    d.zIndex(0)

    xBt=  $.bt('', function(){d.rm()}).WH(4).C('red')


    d.md(function(){inputMove = false; mouse='div' })
    d.mu(function(){mouse='up'})
    d.md(function(){
        $.editDiv.TOP++
        $(this).zIndex( $.editDiv.TOP  )
    })
    ta.md(function(e){
        $.editDiv.TOP++
        $(this).parent().zIndex(  $.editDiv.TOP  )
        location={top: d.Y(), left: d.X()}
        inputMove = true
        mouse='input'
        e.stopPropagation()})

    ta.mm(function(e){if(inputMove){e.stopPropagation(); d.XY(location.left, location.top)}})

    if(U(words)) {return d.A( xBt, $.br(), sp.hd(), ta,

        $.d('y',16, 12).tA('c').mar('0 auto').$(function(){
            $(this).pa().free()
        })

    ).$$(function(e){e.stopPropagation()
            sp.T(ip.v())
            xBt.gg();ip.gg(); sp.gg()
        })
    }

    else {
        ip.v(words)
        sp.T( ta.v() )


        return d.$$(function(e){e.stopPropagation()
            sp.T( ta.v() )
            xBt.gg();
            ip.gg(); sp.gg()
        }).A( xBt, $.br(), sp, ip.hd() )

    }
}; $.editDiv.TOP=0
$.dE2=  $.editDiv2=function(a){
    var d= $.editDiv(a), range= $.range()
    range.md(function(e){e.stopPropagation()})

    range.on('input', function(){
        d.fi( $('span')).fS( $(this).v()  )
        d.fi( $('textarea')).fS( $(this).v()  )
    })
    d.pp( range  )
    return d
}; testEditDiv=function(){z()
    $.dE()
    $.editDiv()
    $.editDiv()
    $.editDiv()
    //$.editDiv2().A()

}
//$.img100=function(){return $.i('me').XY(300,200).C('y').al(.9).WH(100)}
$.pf= $.profile = function(username, div){

//=makeProfile = prof


    // if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}

    answer = function(question, answer){
        return $.d().A(
            $.h3(question),
            $.h4(answer)
        )
    }

    username = username || 'a'
    $.G('profile/' + username,  function(d){

        data = {
            aboutMe: d.aboutMe,
            iEnjoy: d.iEnjoy,
            iSeek: d.iSeek
        }

        if(O(d)){
            div = div|| $.dA('b',300,300).A().dg()
            div.A(
                $.h4('about me'),
                $.h5(d.aboutMe),
                $.h4('i enjoy'),
                $.h5(d.iEnjoy),
                $.h4('i seek'),
                $.h5(d.iSeek)
            )
        }})
}
$.sts= $.status= showStatus =stat=function(user, div){
    $.wStatus(user, function(sts){ $.d().A($.h3('STATUS: '+ sts)) })
}
$.btCh =  function (name) {
    return $.bt(name, function () {
        $.chat(name)
    }).mar(40)
}
$.chat=  function (title, color, id) {   var  ip, sendBt , picBt , popBt , messages , dUS = $.d()
    if (Y.CHATS[title]) {$l('already in this room'); return}
    title = title || 'chatbox'
    color = color || 'b'
    id = id || 'cbo'
    wd=   $.w('chatroom: ' + title).id(id).css({
        'min-width': 600,
        'min-height': 400,
        'background-color': color
    })
    wd.A($.R().A(
        $.Cl(8,
            messages= $.d().id('cbi').C('u').ov('auto'),
            ip = $.ip().K('form-control'),
            sendBt= $.bt('send', function () {
                k.em('ChatMs', {

                    rm: title,
                    un: _username,
                    ms: ip.V()

                })}),

            popBt= $.bt('pop', function () {k.emit('p', ip.V(), title)}),
            picBt =$.bt('pic', function () {$.pop('pic select') }) ),
        $.Cl(4, $.h5('users:'), dUS) ))

    uUS = function (users){dUS.E()
        if (A(users)) {_.e(users, function (un) {
            dUS.A(
                $.h5(un).$(function () {$.popUser(un) })
            )})}
        else {dUS.A($.h5('no users'))}
    }
    Y.CHATS[title] = chatController= {
        uUS: uUS,
        wd:wd, window: wd, w: wd,
        toggle: function () {return w.toggle()},
        write: function (m) {messages.A($.h5(m).col('w'))},
        writeBlack: function (m) {messages.A($.h5(m).col('z'))}
    }


    k.em('jRm', title)//why cant i change this emit name to joinRoom ???
    $.ev(.5,function () {k.em('rm', title)}) //repeatedly emit 'room', which launches room user updates!
}
Y.popUser = Y.uPop=function (un) {
    if(un){
        $.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
            $.w($.d().A( $.br(), $.hr(),
                $.h3('User: ' + un), $.br(),
                $.c(300).fit(mug),
                d= $.d(),
                msg = $.ta().C('w', 'z'),
                $.btMail(msg, un),
                $.btCh(un, msg),
                $.bt('fullPf', function () {Y.loc( '/wap/profiles/' + un )})))
            $.sts(un, d)
            $.pf(un, d)
        })
    }
    else {$('.pop').$(function(){k.em( 'pop', {t: $('.pt').v, b: $('.pb').v})})}
}
$.user=function(u){

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
