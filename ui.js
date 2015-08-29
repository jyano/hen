modalMsg()
lay()
boot()
btn()
ipBox()

function lay(){

    $.dCt = $.ctD = function () {
        var g = G(arguments), //makes auto top-spacing (for navbar not to block)
            d = $.dK('container')
        if (!g.n) {
            d.A($.br(4))
        }
        _.e(g, function (v) {
            d.A(v)
        })
        return d
    }
    $.fm = $.format = function () {
        $l('in fm')
        section1 = s1 = $.sp()
        section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))

    };
    $.dragFrame = function (ob) {
        var oD = $.d('r', '+').pad(10)
        inD = $.d('y').md(function (e) {
            e.stopPropagation()
        })
        oD.A(inD)
        return inD.A(ob)
    }


}
function modalMsg() {

    $.picDiv = function (top) {
        $l('in picDiv')
        return $.dA('b', '+').WH('auto').XY(200, top).K('pic').pad(25)
    }
    $.pic = function (pic) {
        i = $.i(pic._id + pic.ext).WH(120, 120)
        i.click(function () {
            $.cut(pic._id + pic.ext)
        })
        return i
    }
//eachImage = eaI=function(f){$.getJSON('/img', function(i){ _.e(i, f) } )}
    $.iD= $.imgDiv=function(st){
        d = $.d('y','+')
        $.eGj('img',  function(i){d.A($.c(100, 100).fit(i.d)
            .$(function () {
                st.bm(i.d, function (bm) {
                    bm.sXY(.4).dg() } )
            }))})
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

    $.dangMessage = function (msg) {
        alert('dangMessage')
        return $.sp().delButton().A($.h2(msg).K('alert alert-danger'))
            .pp2('body')

    }
    $.blp = function (s, div) {//topic, datetime, content //used for LISTING things (blog posts, etc)

        var g = G(arguments), s = g[0],
            div = g[1], sp = $.sp(),

            post = g[0]

        post.topic = post.t

        post.userY.CHATS[d.rm] = post.u
        post.datetime = post.dt
        post.content = post.c


        if (g.p) {
            sp.A($.bt('topic: ' + post.topic, function () {
                    topic = post.topic;
                    tab4.load()
                }),
                $.h3(post.content))
            if (post.datetime) {
                sp.A($.h5(dt(post.datetime).dt()))
            }
        }
        else if (g.n) {
            sp.A(
                $.bt('user: ' + post.user, function () {
                    from = post.user;
                    tab3.load()
                }), $.br(),
                $.bt('topic: ' + post.topic, function () {
                    topic = s.t;
                    tab4.load()
                }),
                $.h3(post.content))
            if (post.datetime) {
                sp.A($.h5(dt(post.datetime).dt()))
            }
        }
        else if (g.d) {
            sp.A(
                $.bt('user: ' + post.user, function () {
                    from = post.user;
                    tab3.load()
                }), $.br(),
                $.h3(post.content))
            if (post.datetime) {
                sp.A($.h5(dt(post.datetime).dt()))
            }
        }
        else {
            if (post.datetime) {
                sp.A($.h4(dt(post.datetime).dt()))
            }
            sp.A($.h1(post.content))
        }
        if (post.du) {
            sp.A($.c('X', 400).fit(post.du))
        }
        sp.A($.hr())
        return D(div) ? div.A(sp) : sp
    }
}
function btn(){
    $.btCh =  function (name) {
        return $.bt(name, function () {
            $.chat(name)
        }).mar(40)
    }
    $.btMail = function(ms, user){
        return $.bt('mail',
            function(){$.P('sMsg',
                {m: ms.V(), to: user.u} )})}
    $.chBt = function(un,ms){return $.bt('chat',
        function(){$l('mse: '+ ms.V() + ' toWho: '+ un+ ', from: '+ _username)
            k.em('IM', mo= {  message: ms.V(),  toWho:un,  from:_username  } )})}
    $.btBR= $buddyRequestButton = function(user){return $.bt('buddy-request', function(){
        $.P('sRq', {to:user.u}) })}
    $.btPo=   function(){return $.bt('see posts', function(){})  }
}


function ipBox(){
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
}

function boot() {


    $.iconBar = function () {
        return $.sp().K("icon-bar")
    }
    $.caret = function () {
        return $.sp().K("caret")
    }

    $.fn.gg = $.fn.toggle = function (a) {
        return this.attr("data-toggle", a)
    }
    $.fn.tg = $.fn.target = function (a) {
        return this.attr("data-target", a)
    }
}

$.fU= $.fileUpload =  function(lb, t){
    var fG =  $.d().K("form-group").A(
        $.lb(  D(lb) ? lb  : 'upload file',  'upl'  ).K('control-label').fS(20),
        $.ip().ty('file').id('upl').name('i')
    )
    if(t){
        fG.A(   $.p(t).K('help-block')   )}
    return fG
}