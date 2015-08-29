J = cjs = createjs
T = T$ = J.Ticker
cjs.t = cjs.tick = function (fn) {
    fn();
    J.Ticker.on('tick', fn)
}
function old(){
    cjs.ticker = tt = function (a, b, c) {

        var g = G(arguments),
            t = true,
            f = false,
            a = g[0],
            b = g[1],
            c = g[2]

        if (F(a)) {

            return aEL(T$, 'tick',
                g.N ? a
                    : function (e) {

                    if (!e.paused) {
                        a(e)
                    }
                })

        }


        if (O(a)) {
            return aEL(T$, 'tick', a)
        }

        if (a == '?') {
            return !T$.getPaused()
        }
        if (a == 'p') {
            T$.setPaused(f);
            return tt('?')
        }

        if (a == 's') {
            T$.setPaused(t);
            return tt('?')
        }

        if (a == 'g') {
            return tt(
                tt('?') ? 's' : 'p'
            )
        }


        if (a == '@') {
            return T$.init()
        }

        if (a == '!') {
            return T$.reset()
        }

        if (a == 'e') {
            return T$.getEventTime(g.p ? t : f)
        }

        if (a == 't') {
            return T$.getTime(g.p ? t : f)
        }

        if (a == '#') {
            return T$.getTicks(g.n ? t : f)
        }

        if (a == 'md') {
            return t$.maxDelta
        }

        if (a == 'M') {
            return T$.timingMode
        }

        if (a == 'i') {
            if (N(b)) {
                T$.setInterval(g.m ? b * 1000 : b)
                return tt('i')
            }
            if (U(b)) {
                return T$.getInterval()
            }
        }

        if (a == 'f') {
            if (N(b)) {
                T$.setFPS(b);
                return tt
            }
            if (U(b)) {
                return T$.getFPS()
            }
        }

        if (a == 'r') {
            if (b > 10) {
                tt('f', b)
            } else {
                tt('i', b, '*')
            }
        }


        if (a == 'm') {
            return N(b) ? T$.getMeasuredFPS(b)
                : T$.getMeasuredFPS()
        }

        if (a == 'tk') {
            return Ed(T$)
        }

    }

}


cjs.stop = function () {

    J.Ticker.removeAllEventListeners()

}
tickX = function (e) {
    j.Y(e.delta / 1000 * 100, '-')
}
timeStamp2 = function (s, j, pxPerSec) {
    var fn = function (s, e) {

        if (!N(j.ts)) {
            j.ts = 0;
            j.lts = e.ts
        }

        else {
            j.ts = e.ts - j.lts;
            j.lts = e.ts

            j.y((j.ts / 1000) * pxPerSec, '-')
        }
    }
    return s.t(fn)
}
//is display obj?
iDo = function (a) {
    return O(a) && O(a.parent)
}
//if an obj...
//if it has an 'ob' pop, return that.  o/w return it, as is
//so it just gets the raw (non super) display object
withYourMugId = gMg = function (func) {
    $.get('/gMg', func)
}  //should it try websocket first?
wM = withYourMugData = getMug = function (func) {
    $.get('/myMug', func)
}
//dep by withYourMugData?
//wM=function(f){  withYourMugId(      function(mugId){ $.get('/mug/'+  mugId, f )   }     ) }
withYourMug = wMD = function (fn) {
    withYourMugId(function (mugId) {
        $.post('/dats', {d: mugId}, fn)
    })

}
wMb = function () {
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
SuperBitmap = SuperBitmapSync = bm = function (img, stage) {

    var superBitmap = Do(new cjs.Bitmap(src(img)))

    if (O(stage)) {
        stage.a(superBitmap)
    }

    return superBitmap
}
SuperBitmapAsync = function (i, fn) {

//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
    i = i[0]
    if (O(i) && S(i.d)) {
        i = i.d
    }
    $.i(i, function (img) {
        bm = $Bm(img)
        if (F(fn)) {
            fn(bm)
        }
        if (S(fn)) {
            $w[fn] = bm
        }
    })

    return i
}
cjs.BmSync = function (i, st) {

    var bm = $Bm(src(i[0]))

    if (O(st)) {
        st.A(bm)
    }

    return bm
}
cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
    if (O(img) && S(img.d)) {
        img = img.d
    }
    $.i(img, function (i) {
        bm = $Bm(i)
        if (F(fn)) {
            fn(bm)
        }
        if (S(fn)) {
            $w[fn] = bm
        }
    })
    return img
}
$Pt = cjs.Pt = function (x, y) {
    if (U(x)) {
        return new C$.Point
    }
    if (O(x) && O(y)) {
        return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
    }
    if (O(x)) {
        return new cjs.Point(
            x.mx(),
            x.my()
        )
    }

    return new cjs.Point(x, y)
}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
cjs.mXY = mxy = function (o, s) {

    xy(o, s.mx(), s.my())

    return o
}
cjs.tick2 = function (func) {
    cjs.Ticker.addEventListener('tick', func)
    return cjs.Ticker
}
cjs.stopListening = function () {
    cjs.Ticker.removeAllEventListeners()
}
cjs.DOMElement = function () {
    return cjs.DOMElement
}
//EVENT DISPATCHER
p = cjs.EventDispatcher.prototype
p.init = function () {
    this.initialize.apply(this, arguments)
    return this
}
cjs.shad = cjs.shadow = function (color, x, y, blur) {
    if (color == '-') {
        return new cjs.Shadow(null, 0, 0, 0)
    }
    color = S(color) ? color : 'a'
    blur = N(blur) ? blur : 10
    x = N(x) ? x : 0
    y = N(y) ? y : 0
    var shad = new cjs.Shadow(oO('c', color), x, y, blur)
    return shad
}
$.dragFrame = function (div) {

    var outerDiv = $.div('r').drag().pad(20).A()

    div = div || $.div('y', 50, 50).mar(20)

    div.on('mousedown', function (e) {
        e.stopPropagation()
    })

    outerDiv.A(div)

    return outerDiv
}
$.dragStage = function (x, y) {


    c = $.c('g', 400)

    s = $St(c[0])

    $.dragFrame(c).A()

    return s
}
$.colorPicker = $.ColorPicker = function () {
    z()

    colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))

    colorPicker.change(function () {
        $l(colorPicker.val())
    })

}
cjs.bulletHit = function (bu, inWhat) {
    var res

    res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

    if (res == true) {
        $l('hit!')
    }

    return res
}
tran = function () {


    cjs.scaleX = cX = function (a, b) {
        if (U(b)) {
            return a.scaleX
        }
        a.scaleX = b
        return a
    }
    cjs.scaleY = cY = function (a, b) {
        if (U(b)) {
            return a.scaleY
        }
        a.scaleY = b
        return a
    }
    cjs.scaleXY = cXY = function (a, x, y) {
        y = N(y) ? y : x
        cX(a, x)
        cY(a, y)
        return a
    }
    cjs.scaleXY = sxy = function xy(o, x, y) {
        o.scaleX = x;
        o.scaleY = y || x;
        return o
    }
    cjs.skewX = kX = function (a, b) {
        if (U(b)) {
            return a.skewX
        }
        a.skewX = b
        return a
    }
    cjs.skewY = kY = function (a, b) {
        if (U(b)) {
            return a.skewY
        }
        a.skewY = b
        return a
    }
    cjs.skewXY = kXY = function (a, x, y) {
        y = N(y) ? y : x
        kX(a, x)
        kY(a, y)
        return a
    }
    cjs.rY = cjs.regY = gY = function (a, b) {
        if (U(b)) {
            return a.regY
        }
        a.regY = b
        return a
    }
    cjs.rX = cjs.regX = gX = function (a, b) {
        if (U(b)) {
            return a.regX
        }
        a.regX = b
        return a
    }
    cjs.rxy = cjs.rXY = cjs.regXY = gXY = function (a, x, y) {
        y = N(y) ? y : x
        cjs.regX(a, x)
        cjs.regY(a, y)
        return a
    }
//rX =function(a){return a.rawX}
//rY =function(a){return a.rawY}
//bj=function(a){if(O(a)){   return O(a.ob)?a.ob:a   }}//return a??
    cjs.SL = cjs.bindSlide = SL = function (b, b2) {

        var g = G(arguments),

            b = g[0], b2 = g[1] || b

        return b.on('mousedown',

            function (e) {
                var bx = b2.x - e.rawX, by = b2.y - e.rawY

                b.on('pressmove', function (e) {

                    if (g.P) {
                        b2.x = bx + e.rawX
                    }
                    if (g.N) {
                        b2.y = by + e.rawY
                    }
                })
            }
        )
    }
    cjs.LS = cjs.bindReverseSlide = LS = function (b, b2) {
        var g = G(arguments),
            b = g[0],

            b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b

        return b.on(d, function (e) {
            var bx = b2.x + e.rawX, by = b2.y + e.rawY

            b.on(pm, function (e) {

                if (g.P) {
                    b2.x = bx - e.rawX
                }
                if (g.N) {
                    b2.y = by - e.rawY
                }

            })
        })
    }
    cjs.RT = cjs.bindRotate = RT = function (b, b2) {
        //b = what the control is
        //b2 what it should control (default = itself!)
        //if(g.p){  //b.rgc( '+' )   }

        var g = G(arguments), b = g[0], b2 = g[1] || b

        return b.on('mousedown', function (e) {
            var X = e.rawX, Y = e.rawY, r = b2.rotation
            b.on('pressmove', function (e) {
                b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
            })
        })
    }
    cjs.RT2 = cjs.bindRotate2 = RTT = function (b, b2) {


        //b = what the control is
        //b2 what it should control (default = itself!)


        var g = G(arguments), b = g[0], b2 = g[1] || b


        if (g.p) {  // b.rgc( '+' )
        }

        return b.on('mousedown',

            function (e) {

                var X = e.rawX, Y = e.rawY, r = b2.rotation

                b.on('pressmove', function (e) {


                    b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )


                })
            })

    }
    cjs.SC = cjs.bindScale = SC = function (b, b2) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'), pm = oE('pm'), b2 = b2 || b,
            cp = function (n) {
                return n < .2 ? .2 : n > 2 ? 2 : n
            }

        return b.on(d,

            function (e) {
                var X = e.rawX, Y = e.rawY,
                    sx = b2.scaleX,
                    sy = b2.scaleY

                b.on(pm,

                    function (e) {
                        if (g.n) {
                            b2.sXY(cp(sx + (
                                (e.rawX - X) / 200)),
                                cp(sy - ((e.rawX - X) / 200))
                            )

                        }

                        else if (g.p) {
                            cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                            cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
                        }

                        else {
                            b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                        }
                    })
            }
        )
    }
    cjs.SK = cjs.bindSkew = SK = function (b) {
        var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b

        return b.on(d,
            function (e) {
                var X = e.rawX, Y = e.rawY
                b.on(pm, function (e) {


                    b2.kXY(
                        (e.rawY - Y) * .5, (e.rawX - X) * .5
                    )

                })
            })
    }
    cjs.TR = cjs.bindTransform = TR = function TR(b, b2, m) {
        var g = G(arguments),
            b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
        if (m == 'SL') {
            cjs.SL(b, b2);
            m = 'SC'
        }
        else if (m == 'SC') {
            cjs.SC(b, b2);
            m = 'RT'
        }
        else if (m == 'RT') {
            cjs.RT(b, b2);
            m = 'SL'
        }
        return b.on('pressup', function (e) {
            b.removeAllEventListeners();
            TR(b, b2, m)
        })
    }


    cjs.reggy = reggy = function (o, s) {

        s = s || o.parent

        s.bm('me', function (b) {

            b.W(40).H(40)

            I(function () {
                b.XY(o.x + o.regX, o.y + o.regY)
            }, 100)

        })


    }

    cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {

        var g = G(arguments), b = g[0], b2 = g[1] || b
        cjs.SL(b);
        cjs.RT(b, b2)
        if (g.p) {

            b.rgc('+')
        }

        if (g.N) {
            //    reggy(b,b2)
        }
    }

    cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b,
            m = g[2] || 'RT'


        //if(g.p){var s=St('y',1000)
        //    _t(b||5,function(i){s.a().bm(
        //        function(bm){bm.xy(i*50);TR(bm)})});return s}

        if (m == 'RT') {
            RT(b, b2);
            m = 'SK'
        }

        else if (m == 'SK') {
            SK(b, b2);
            m = 'RT'
        }

        return b.on(oE('pu'),
            function (e) {
                Do(b).O();
                RK(b, b2, m)
            })
    }

    testImgRegCenter = function () {
        mockStage()
        s.bm('me', function (bm) {
            b1 = bm
            bm.spin().drag()
        })

        s.bm('me', function (bm) {
            b2 = bm
            bm.sXY(0.5, 0.3).spin().drag()
        })

        s.A(c = cjs.circle(4).XY(200))

    }


};
tran()
//important for ipad
//move this onto stage itself
touchEnable = function (s) {
    cjs.Touch.enable(s);
    return s
}
cjs.HSL = function (a, b, c) {
    if (U(a)) {
        return HSL(M.rand() * 360, 100, 50)
    }
    return cjs.Graphics.getHSL(a, b, c)
}
que = function () {

    cjs.loadQueue = cjs.lq = function (mf, func) {

        var q = new cjs.LoadQueue(true)

        if (A(mf)) {
            q.loadManifest(cjs.mf.apply(null, mf))
        }

        if (F(func)) {
            q.complete(function () {
                func(function (img) {
                    return q.getResult(img)
                })
            })
        }
        return q
    }
    q = cjs.LoadQueue.prototype
    q.fileload = function (func) {
        this.addEventListener("fileload", func)
        return this
    }
    q.complete = function (func) {
        this.addEventListener("complete", func)
        return this
    }
    q.manifest = function (manifest) {
        this.loadManifest(manifest)
        return this
    }
    q.mf = function () {
        this.loadManifest(cjs.mf.apply(null, arguments))
        return this

    }
    q.bm = function (img) {

        img = this.getResult(img)


        return cjs.bitmap(img)
    }
    cjs.manifest = function (func) {
        var q = cjs.loadQueue()

        q.complete(
            function () {

                func(function (getResult) {
                    return q.getResult(getResult)
                })
            })

            .manifest([{
                id: "chicks", src: "/chicks.png"
            },
                {id: "me", src: "/me.png"},
                {id: "guy", src: "/guy.png"},
                {id: "sun", src: "/sun.png"}])
    }
    cjs.handleFileLoad = function (e) {
        if (e.item.type == "image") {
            images[e.item.id] = e.result
        }
    }
    cjs.mf = cjs.manifest = function (a) {
        var g = G(arguments), mf = []
        _.e(g, function (v) {
            mf.push({src: cjs.src(v), id: v})
        })
        return mf
    }
    cjs.makeManifest = cjs.makeMan = function (a) {
        return cjs.manifest.apply(null, _.m(a.images, function (i) {
                return Graphics.fromSource(i)
            })
        )
    }
    Q = function (imgs, func) {

        var q = cjs.lq()
        mf = []
        _.each(imgs, function (v) {

            mf.push({

                src: cjs.src(v),
                id: v

            })
        })
        q.manifest(mf)
        q.complete(function () {
            func(q)
        })

    }
    MANIFEST = function () {
        s = cjs.S()


        Q(['me', 'guy'], function (q) {


            s.A(me = q.bm('me'))

            s.A(guy = q.bm('guy'))


            guy.drag()

        })


    }

};
que()
advancedEazel()
cjs.testCanvas = function () {
    return $.d().A($.c(960, 400).id("testCanvas"))
}
cjs.sharedCode = function () {
    var o


    if (document.body) {
        setupEmbed()
    }
    else {
        document.addEventListener("DOMContentLoaded", setupEmbed)
    }
    function setupEmbed() {
        if (window.top != window) {
            document.body.className += " embedded"
        }
    }

    o = window.examples = {}

    o.showDistractor = function (id) {
        var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
        div.className += " loading"
    }
    o.hideDistractor = function () {
        var div = document.querySelector(".loading")
        div.className = div.className.replace(/\bloading\b/)
    }
}
$Bm = function (i) {
    if (O(i)) {

        var bm


        if ($.iI(i)) {
            i = $(i)[0]
            _i = i
            bm = new cjs.Bitmap(i)
            return bm
        }


        bm = $Bm(i.i)

        if (i.al) {
            bm.al(i.al)
        }
        if (i.fl) {
            bm.fl(i.fl)
        }

        if (i.aF2) {
            bm.aF2(i.aF2)
        }

        return bm

    }
}
$H = function (a, b, c) {
    return new cjs.Shape(a, b, c)
}
$Gx = function () {
    return new cjs.Graphics
}


st=cjs.Stage.prototype


function matrix(){
    MATRIX1=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')


        stage = St()

        $.d('b', 50, 50).A()

        //stage = s = cjs.stage(1600,1000).tick().A()

        // on stage enter, change background color, though you
        // cant see it here because stage fills screen
        // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
        st.on('e', co)

        //make a container
        st.ct(function(c, s){

            //the little me clicks do not hit the 'big' me underneath it.  that's normal.
            //but it does hit the container.  but this example shows off 'remove', so it only hits once
            //however, it continues to propogate on to the container. hmmm..

            c.bm('me',
                function(b){
                    b.sXY(.2).XY(100,80)
                    b.on(click, function(){$l('lit')},'/')  //on click, log('lit'), just once (remove listener)!

                })





// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click

            c.bm('me',function(bm){
                bm.sXY(.4).XY(100,180)
                bm.$( function(){$l('mid')}, '-')  //on click, log('mid'), and stop prop
            })

            c.bm('me',function(bm){
                bm.sXY(1.5)
                bm.on('click',function(){$l('big')})  //on click, log('big')
            })    //on click, log('con')
            c.on('click',  function(){$l('con')})
        })


        st.ct(   function(ct){c=ct
                var vn=0, rvn=0, on=0, ron=0

                ct.X(200)

                ct.mug(function(b){b.sXY(.8).XY(200,80)})
                ct.mug(function(b){b.sXY(.8).XY(100,280)})
                ct.mg(function(b){b.sXY(.8).XY(340,180)})

                //this shows over/out vs rollover/rollout
                //over/out get retriggered when switching between connected sprites
                //rollover/rollout does not because it is still touching 'something'
                ct.on('mouseover',function(){c.X(10,'+');$l('v: '+vn++)})
                ct.on('rollover',function(){c.X(20,'-');$l('rv: '+rvn++)})
                ct.on('mouseout',function(){c.Y(10,'+');$l('o: '+on++)})
                ct.on('rollout',function(){c.Y(20,'-');$l('ro: '+ron++)})
            }
        ).MV(40)


        st.ct(function(ct, st){

            ct.X(700)
            ct.mug(function(bm){bm.sXY(.8).XY(200,80)})
            ct.mug(function(bm){bm.sXY(.8).XY(100,280)})
            ct.mug(function(bm){bm.sXY(.8).XY(340,180)})

            //this example shows which sprites are acted upon with over/rollover
            //over only affects one
            //rollover affects ALL
            //if you enter a sprite from outside, they all grow (via rollover),
            //and the one sprite grows double (via over)

            ct.on('mouseover',function(){$l('mouseover'); this.sXY(.01,'+') })
            ct.on('rollover',function(){$l('rv'); this.sXY(.01,'+')})
            ct.on('mouseout',function(){ })
            ct.on('rollout',function(){ })

            // in summary,
            // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
            // BUT, they will all recieve events separately

        }).MV(40) //??? mouse events? speed for some mouse checking thing
        st.ct(function(ct,st){
            ct.x = 1400
            ct.bm('me',function(bm){
                //make the little me slide the entire container
                //it acts as a handle! (for its container)
                lit = bm.sXY(.2).XY(100,80)
                SL(bm, ct)
                ctr.bm('me',function(bm){
//big me will scale the little me
                    big = bm.sXY(2).XY(100,180)
                    SC(bm, lit)
                    ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180).SL(); RT(bm, big)})})
            })

//guy slides stage
            ct.bm('guy',function(bm){bm.sXY(.4).XY(100,180); SL(bm, st)})
        })




    }
    MATRIX0=function(){ z(); $l('matrix')

        st = stage = $St(1600,1000)

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

        $.d('b', 50, 50).A()


        // on stage enter, change background color, though you
        // cant see it here because stage fills screen
        // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
        st.on('mouseenter', function(){$('body').C($r())})

        st.A( ct=container=c= $Ct()  )

        ct.bm('me',  function(bm){
            //b.sxy(.2).xy(100,80)

            //b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!

        })



        //make a container
        st.ct(function(c, s){

            //the little me clicks do not hit the 'big' me underneath it.  that's normal.
            //but it does hit the container.  but this example shows off 'remove', so it only hits once
            //however, it continues to propogate on to the container. hmmm..



// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
            ct.bm('me',function(b){
                b.sXY(.4).XY(100,180)
                //b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
            })


            ct.b('me',function(b){
                b.sXY(1.5)
                // b.o('$',fL('big'))  //on click, log('big')

            })

            //on click, log('con')
            //c.o('$',  fL('con'))

        })

        st.ct(  function(c){

            var vn=0,
                rvn=0,
                on=0,
                ron=0


            c.X(200)


            c.mug(
                function(b){
                    b.sXY(.8).XY(200,80)
                })


            c.mug(
                function(b){
                    b.sXY(.8).XY(100,280)
                })


            c.mg(
                function(b){
                    b.sXY(.8).XY(340,180)
                })

            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'

            // c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
            //c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
            // c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
            //  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})

        }  )//.MV(40)

        st.ct(function(c,s){

            c.x(700)
            c.mg(function(b){b.sxy(.8).xy(200,80)})
            c.mg(function(b){b.sxy(.8).xy(100,280)})
            c.mg(function(b){b.sxy(.8).xy(340,180)})

            //this example shows which sprites are acted upon with over/rollover
            //over only affects one
            //rollover affects ALL
            //if you enter a sprite from outside, they all grow (via rollover),
            //and the one sprite grows double (via over)



            c.o('v',function(g,e){
                $l('v')
                g.sxy(.01,'+')})

            c.o('rv',function(g,e){
                $l('rv')
                g.sxy(.01,'+')})

            c.o('o',function(q,e,g){ })
            c.o('ro',function(q,e,g){ })


            // in summary,
            // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
            // BUT, they will all recieve events separately

        }).MV(40)

        st.ct(function(ct,st){

            ct.X(1400)

            ct.bm('me',function(bm){

                //make the little me slide the entire container
                //it acts as a handle! (for its container)
                lit=bm.sXY(.2).XY(100,80)
                SL(bm,ct)


                ct.bm('me',function(bm){
//big me will scale the little me
                    big=bm.sXY(2).XY(100,180)

                    SC(bm,lit)

                    ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180)
                        SL(bm)
                        RT(bm, big) })
                })

            })


//guy slides stage
            ct.bm('guy',function(bm){
                bm.sXY(.4).XY(100,180)
                SL(bm, stage)
            })



        })




    }
    MATRIX=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

        z()

        $l('matrix')


        st=stage=s=$St(1600,1000).A().tick()


        // on stage enter, change background color, though you
        // cant see it here because stage fills screen
        // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
        st.on('mouseenter', function(){$('body').C($r())})

        st.A( ct=container=c=new createjs.Container()  )

        ct.bm('me',  function(bm){

            bm.sXY(.2).XY(100,80)
            bm.on('click', function(){
                $l('lit')}, this, true) //just once

        })

        //make a container
        st.ct(function(ct, st){

            //the little me clicks do not hit the 'big' me underneath it.  that's normal.
            //but it does hit the container.  but this example shows off 'remove', so it only hits once
            //however, it continues to propogate on to the container. hmmm..

// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
            ct.bm('me',function(bm){  //future: c.bm('me', .4, function(bm){})
                bm.sXY(.4).XY(100,180)
                bm.on('click', function(e){$l('mid')
                    e.stopPropagation()})
            })

            ct.bm('me',function(bm){
                bm.sXY(1.5)
                    .on('click',function(){$l('big')})
            })

            ct.on('click', function(){$l('con')})

        })



    }

}
function advancedEazel() {
    cjs.extend = function (subclass, superclass) {
        function o() {
            this.constructor = subclass
        }

        o.prototype = superclass.prototype;
        return (subclass.prototype = new o())
    }
    cjs.promote = function (subclass, prefix) {


        var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
        if (supP) {
            subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
            for (var n in supP) {
                if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
                    subP[prefix + n] = supP[n];
                }
            }
        }
        return subclass
    }
    cjs.slider = function () {

        /**
         * Simple slider control for EaselJS examples.
         **/
        function Slider(min, max, width, height) {
            this.Shape_constructor();

            // public properties:
            this.min = this.value = min || 0;
            this.max = max || 100;

            this.width = width || 100;
            this.height = height || 20;

            this.values = {};

            this.trackColor = "#EEE";
            this.thumbColor = "#666";

            this.cursor = "pointer";
            this.on("mousedown", this._handleInput, this);
            this.on("pressmove", this._handleInput, this);
        }

        var p = cjs.extend(Slider, cjs.Shape);


// public methods:
        p.isVisible = function () {
            return true;
        };

        p.draw = function (ctx, ignoreCache) {
            if (this._checkChange()) {
                var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
                this.graphics.clear()
                    .beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
                    .beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
            }
            this.Shape_draw(ctx, true)
        }


// private methods:
        p._checkChange = function () {
            var a = this, b = a.values;
            if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
                b.min = a.min;
                b.max = a.max;
                b.value = a.value;
                b.width = a.width;
                b.height = a.height;
                return true;
            }
            return false
        }


        p._handleInput = function (evt) {
            var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
            val = Math.max(this.min, Math.min(this.max, val));
            if (val == this.value) {
                return;
            }
            this.value = val;
            this.dispatchEvent("change")
        }


        window.Slider = cjs.promote(Slider, "Shape");

    }
    PROMOTE = function () {
        z()

        cjs.utils()

        function ClassA(name) {
            this.name = name
        }

        ClassA.prototype.greet = function () {
            return "Hello " + this.name
        } //a = new ClassA('john')

        function ClassB(name, punctuation) {

            this.ClassA_constructor(name)

            this.punctuation = punctuation
        }

        cjs.extend(ClassB, ClassA)


        ClassB.prototype.greet = function () {

            return this.ClassA_greet() + this.punctuation

        }

        cjs.promote(ClassB, "ClassA")

        b = new ClassB("World", "!?!")

        $l(b.greet())  // Hello World!?!


    }
    TWOSTAGES = function () {
        z()


        $.header().K("EaselJS").A(
            $.h1('nextStage'),
            $.p("This is an example")).A()


        c1 = $.canvas('y', 540, 260).id('canvasOne').P('a').top(0)
            .right(0).bor('1px solid grey').A() // background: 'none',

        c2 = $.canvas('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
        $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()

        bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
        //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
        bottomStage.text = new J.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)


        topStage = stageSetup("canvasTwo", handleEvt)
            .N("topStage").eMO()
            .A(makeSquare(375, 30, "pink", handleEvt))
            .next(bottomStage)

        topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)


        function stageSetup(canvasName, handler) {
            s = stage = new cjs.Stage(canvasName).tick()
            //stage.addEventListener("stagemousemove", handler);	// too noisy
            _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
                s.on(ev, handler)
            })
            s.log = []
            return s
        }

        function makeSquare(x, y, color, handler) {
            var shape = cjs.shape().N('square').XY(x, y)
            shape.graphics.f(color).dr(0, 0, 135, 135)

            var cont = cjs.ct().N('container').A(shape)
            _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
                cont.on(ev, handler)
            })
            cont.cursor = "pointer"
            return cont
        }

        function handleEvt(evt) {
            var target = evt.target,
                stage = target.getStage(),
                log = stage.log

            log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
            + " y:" + evt.stageY.toFixed(0))

            while (log.length > 12) {
                log.shift()
            }

            stage.text.text = log.join("\n")
            if (evt.type == "mouseover") {
                target.alpha = 0.5
            }
            if (evt.type == "mouseout") {
                target.alpha = 1
            }
        }


    }
    TRANSFORMSIMPLE = function () {
        z()


        angle = 0
        img = $.img('me', handleImageLoad)[0]


        function stop() {
            cjs.Ticker.removeEventListener("tick", tick)
        }

        function handleImageLoad() {
            canvas = $.canvas('p', 960, 400).id("testCanvas").A()
            stage = cjs.stage(canvas)
            stage.autoClear = true;

            bmp = new cjs.Bitmap(img)
                .rXY(img.width >> 1, img.height >> 1)
                .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
            stage.A(bmp).update();

            cjs.Ticker.timingMode = cjs.Ticker.RAF
            cjs.tick(tick)
        }


        function tick(event) {
            angle += 0.01
            var value = Math.sin(angle) * 360
            bmp.rT(value).sXY(value / 360)
            stage.update(event)
        }


    }
    TRANSF = function () {
        stage = St()

        degToRad = Math.PI / 180;


        //cjs.sharedCode()
        // cjs.utils()

        cjs.slider()


        stage.enableMouseOver();
        //cjs.Touch.enable(stage);
        stage.mouseMoveOutside = true;

        var img = new Image()
        img.onload = handleImageLoad;
        img.src = "/chicks.png";


        function handleImageLoad(evt) {

            var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;

            sliceWidth = imgWidth / sliceCount;
            sliceContainer = $Ct()
            sliceContainer.x = stcanvas.width / 2;

            for (var i = 0; i < sliceCount; i++) {
                var slice = $Bm(img)
                slice.sourceRect = new cjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
                slice.cache(0, 0, sliceWidth, imgHeight);
                slice.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix())];
                sliceContainer.A(slice);
            }

            slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
            slider.on("change", handleSliderChange, this);

            st.A(sliceContainer, slider);
            updateEffect(slider.value);
        }

        function handleSliderChange(evt) {
            updateEffect(evt.target.value);
        }

        function updateEffect(value) {
            var l = sliceContainer.getNumChildren();

            for (var i = 0; i < l; i++) {
                var slice = sliceContainer.getChildAt(i);
                slice.y = M.sin(value * degToRad) * -sliceWidth / 2;
                if (i % 2) {
                    slice.skewY = value
                }
                else {
                    slice.skewY = -value;
                    slice.y -= sliceWidth * M.sin(slice.skewY * degToRad);
                }
                slice.x = sliceWidth * (i - l / 2) * M.cos(slice.skewY * degToRad);
                slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
                slice.ca()
            }

            st.u();
        }
    }
    DISTRACT = function () {
        z()

        cjs.testCanvas()

        cjs.sharedCode()

        //cjs.utils()
        cjs.slider()

        examples.showDistractor()

        st = new cjs.Stage("testCanvas")

    }
    WINDING = function () {
        z()

        cjs.manifest(function (q) {
            $.header().A($.h1('grahics winding')).A()
            $.d().A($.c(960, 400).id("testCanvas"))

            st = s = stage = $St(["testCanvas"])

            h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
            bm = cjs.bm(q("chicks"), '-').a2(s).X(470).drag()
            bm.mask = h.same().X(470)
        })

    }
    cjs.worldsMostInterestingShape = function () {
        var h = cjs.shape()
        h.graphics.f("pink").dr(20, 20, 450, 360)
            .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
            .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()

        return h
    }
}
function blueShooter() {
    SHOOTERCAN = function () {


        function startGame() {
            z()


            game = true
            Coins = []
            Aliens = []
            Bullets = []
            can = $.canvas('yellow', 900, 500).A()

            shooter = new Shooter()

            shooter.draw()

            //   _.times(10,function(){Coins.push(Coin())})
            //   _.times(15,function(){Aliens.push(Alien())})


            setInterval(function () {

                shooter.update()


                can.clear()
                shooter.draw()
            }, 400)
        }

        function Shooter() {
            this.x = 100
            this.y = 200
            this.vx = 2
            this.vy = 2
            this.radius = 20

            this.update = function () {
                this.x = this.x + this.vx
                this.y = this.y + this.vy
            }

            this.draw = function () {

                can.circle(this.x, this.y, this.radius, 'blue')

            }
        }

        updateScreen = function () {


            can.clear()

            shooter.draw()
        }
        updateGame = function () {

            shooterUpdate()

        }

        updateGameX = function () {

            if (game) {
                shooter.vx += cap(-5, 5)((e.x - shooter.x) / 300)
                shooter.vy += cap(-5, 5)((e.y - shooter.y) / 300)
                Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
            } else {

                alert('game over!')

                if ((e.x > 450) && (e.y > 290)

                    && (e.x < 450 + textWidth)

                    && (e.y < 290 + textHeight)) {
                    reload()
                }
            }

            can = $.canvas(800, 600)
            can.click(function (x, y) {
                shooter.vx += cap(-5, 5)((x - shooter.x) / 300)
                shooter.vy += cap(-5, 5)((y - shooter.y) / 300)
                Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
            })


            b = bad(x).d()
            c = coin(x).d()
            g = guy(x)

            I(function () {

                x.X();
                b.update().draw();
                g.update().draw()

            }, 30)


            // _.each(cat(Bullets, Coins, Aliens), function(a){a.draw(); a.update()})
        }

        startGame()

    }
    function Alien(x, n, n1) {
        if (N(n1)) {
            var a = []
            _.times(n1, function () {
                a.push(Bad(x, n))
            })
            return a
        }
        if (N(n)) {
            return Bad(x).du(n)
        }
        var b = {
            x: _.random(1200),
            y: _.random(600),
            radius: _.random(15),
            vx: _.random(10) - 5,
            vy: _.random(10) - 5
        }
        b.draw = function () {
            //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
            x.circ(b.x, b.y, b.r, 'g', 'z')
            x.circ(b.x, b.y, 15, 'o', 'z')

            return b
        }
        b.update = function () {

            b.radius *= 1.005

            b.x = warp(0, 1200, 20)(b.x + b.dx)

            b.y = warp(0, 600, 20)(b.y + b.dy)

            return b
        }
        b.drawUpdate = b.du = function (n, n2) {
            if (N(n)) {
                return setInterval(function () {
                    b.du()
                }, n)
            }

            return b.draw().update()
        }
        return b
    }

    function Coin(x, n, n1) {

        if (N(n1)) {
            var a = [];
            _.times(n1, function () {
                a.push(Coin(x, n))
            });
            return a
        }

        if (N(n)) {

            return Coin(x).du(n)
        }

        var c = {
            x: _.random(1200),
            y: _.random(0, 600),

            radius: 10,

            vx: _.random(0, 10) - 5,
            vy: _.random(0, 10) - 5
        }

        c.draw = function () {
            x.circle(this.x, this.y, this.radius, 'b', 'y')
            return this
        }

        c.update = function () {
            c.x = warp(0, 1200, 20)(this.x + this.vx)
            c.y = warp(0, 600, 20)(this.y + this.vy)
            return c
        }

        c.drawUpdate = function (n, n2) {
            if (N(n)) {
                return setInterval(function () {
                    c.drawUpdate()
                }, n)
            }
            return c.draw().update()
        }

        return c
    }

    coinHits = function () {

        _.each(CoinsArray,

            function (coin, coinId) {

                //??? hitTest?
                if (xyc(coin.x, coin.y, game)) {

                    delete CoinsArray[coinId]

                    game.coinScore += 1
                }
            })


        _.each(
            As, function (a, A) {

                if (
                    xyc(g.x, g.y, a)) {
                    g.h -= 1
                }

                _.each(Bs, function (b, B) {

                    if (xyc(b.x, b.y, a)) {
                        delete Bs[B]

                        delete As[A]

                        As.push(bad())
                    }
                })

            })

    }
}
function toSpaz(){
    SHADOW=function(){b2d.levelWarp()
        p.linDamp(1).warp()
        setTimeout(function(){
            p.sprite.shad("y", 0, 150, 300)
            badGuy.sprite.shad('o', 40, 40, 40)
        },100)
        $.space(function(){p.polyBul()})
        badGuy=w.badGuy(400, 200).warp().den(.1)
        I(function(){w.s.pen('badGuy health: ' + badGuy.health)}, 200)
        $(w.s.back.canvas).C('p')
        s= w.s.back
        s.bm('me' , function(bm){
            bm.drag().shad('blue', 125,  125,  50).XY(100,100).sXY(.6)

        })
        s.bm('guy', function(bm){

            bm.drag().shad('r', 100,100,10).XY(300,200).sXY(.6)
        })
        s.bm('me' , function(bm){
            bm.drag().shad("z", 25, 25, 50).XY(500,100).sXY(.6)
        })
    }
}