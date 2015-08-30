
//eachImage = eaI=function(f){$.getJSON('/img', function(i){ _.e(i, f) } )}


withMug = iCantBelieveThisMayReallyBeDep(){
//PERHAPS.. JUST PERHAPS... everything below is ALREADY dep..
// all have had 'alerts' since Aug 30 2015

    withYourMugId = gMg = function (func) {
        $l('call out from somewhere in withMug.js')
        $.get('/gMg', func)
    }  //should it try websocket first?
    wM = withYourMugData = getMug = function (func) {
        $l('call out from somewhere in withMug.js')
        $.get('/myMug', func)
    }
//dep by withYourMugData?
//wM=function(f){  withYourMugId(      function(mugId){ $.get('/mug/'+  mugId, f )   }     ) }
    withYourMug = wMD = function (fn) {
        $l('call out from somewhere in withMug.js')
        withYourMugId(function (mugId) {
            $.post('/dats', {d: mugId}, fn)
        })

    }
    wMb = function () {
        $l('call out from somewhere in withMug.js')
        var g = G(arguments),

            f = g[0], st = g[1]

        wM(function (a) {

            SuperBitmapAsync(
                a,
                function (b) {
                    if (st) {
                        st.A(b)
                    }   // if stage passed, add bm to stage
                    f(b, st)         //run cb, and pass it bm and stage
                })
        })

        return st

    }
    $wMb = function (f, stage) {
        $l('call out from somewhere in withMug.js')
        wM(function (a) {

            J.Bm(a, function (b) {

                if (stage) {
                    stage.A(b)
                }   // if stage passed, add bm to stage

                if (f) {
                    f(b, stage)
                }       //run cb, and pass it bm and stage

            })
        })

        return stage
    }
//with mug, after creating and putting it on a stage
    wMs = function (func, w, h, bg) {
        $l('call out from somewhere in withMug.js')
        var g = G(arguments)

        func = g[0]
        w = g[1]
        h = g[2]
        bg = g[3]

        var stage = St(w || 1000, h || 800, '+')

        if (g.p) {
            stage.drg()
        }

        if (g.n) {
            s2.A(stage)
        }

        if (bg) {
            stage.bgi(bg)
        }

        return wMb(func, stage)

    }
    $wMs = function (func, w, h, bg) {
        $l('call out from somewhere in withMug.js')
        var g = G(arguments)

        func = g[0]
        w = g[1]
        h = g[2]
        bg = g[3]

        var stage = St(w || 1000, h || 800, '+')

        if (g.p) {
            stage.drg()
        }

        if (g.n) {
            s2.A(stage)
        }

        if (bg) {
            stage.bgi(bg)
        }

        return wMb(func, stage)

    }
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
    })} // get value from an input el OR two input els
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
} // ob is for adding more pops to post-ob,
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
} //this makes a span with a textarea and a button
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