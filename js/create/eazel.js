createBeg()
game()
jqApps()
eazelApps()
function createBeg(){
    J = cjs = createjs
    T = T$ = J.Ticker
    J.t = J.tick = function (fn) {
        fn();
        J.Ticker.on('tick', fn)
    }
    J.ticker = tt = function (a, b, c) {

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
    J.stop = function () {

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

        var superBitmap = Do(new J.Bitmap(src(img)))

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
    J.BmSync = function (i, st) {

        var bm = $Bm(src(i[0]))

        if (O(st)) {
            st.A(bm)
        }

        return bm
    }
    J.Bm = $bitmapAsync = Bm = function (img, fn) {
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
    $Pt = J.Pt = function (x, y) {
        if (U(x)) {
            return new C$.Point
        }
        if (O(x) && O(y)) {
            return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
        }
        if (O(x)) {
            return new J.Point(
                x.mx(),
                x.my()
            )
        }

        return new J.Point(x, y)
    }
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
    J.mXY = mxy = function (o, s) {

        xy(o, s.mx(), s.my())

        return o
    }
    J.tick2 = function (func) {
        J.Ticker.addEventListener('tick', func)
        return J.Ticker
    }
    J.stopListening = function () {
        J.Ticker.removeAllEventListeners()
    }
    J.DOMElement = function () {
        return J.DOMElement
    }
//EVENT DISPATCHER
    p = J.EventDispatcher.prototype
    p.init = function () {
        this.initialize.apply(this, arguments)
        return this
    }
    J.shad = J.shadow = function (color, x, y, blur) {
        if (color == '-') {
            return new J.Shadow(null, 0, 0, 0)
        }
        color = S(color) ? color : 'a'
        blur = N(blur) ? blur : 10
        x = N(x) ? x : 0
        y = N(y) ? y : 0
        var shad = new J.Shadow(oO('c', color), x, y, blur)
        return shad
    }
    GROW = function () {
        z()

        $St(500, 500).bm('me', function (bm) {
            b = bm
            bm.grow().dg()
        })

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
    FANCYEDIT = function (x, y) {


        z()

        canvas = $.c('g', 400)
        st = stage = $St(canvas[0])

        frame = $.dragFrame(sp = $.sp())


        sp.A(
            $.bt('X', function () {
                frame.rm()
            }),
            $.bt('pics', function () {
                $.imagesDiv(st)
            }),

            $.bt('transform'),
            $.bt('text'),

            $.bt('paint', function () {

                _paintColor = '#0FF'

                var size = 10, oX = 0, oY = 0, shape

                var paintStage = $.dragStage()

                // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

                paintStage.bm(
                    st.du(), //?

                    function (m) {


                        m.XY(40).sXY(.4)
//                    stagePainter(paintStage)
                    })


            }),
            $.bt('cut'),

            $.bt('save'))

        sp.A($.br(), canvas)

        sp.A($.d().A(
            $.bt('clear', function () {
                st.removeAllChildren()
            }),

            $.bt('flat', function () {
                st.removeAllChildren()
                st.bm(st.toDataURL(), function (bm) {
                    bm.dg()
                })
            }),

            $.bt('clone', function () {


                var sp = $.sp(),
                    newStage = $.dragStage().A(sp)
                newStage.bm(st.du(), function (bm) {
                    SL(bm)
                })
            }),

            $.bt('recur', function () {

                stbm(st.du(), function (bm) {

                    bm.sxy(.4).SL()

                })
            }),

            $.bt('copy', function () {

                _copy = st.du()


            }),

            $.bt('paste', function () {
                st.bm(_copy, function (bm) {
                    bm.drag()
                })
            }),

            $.bt('replace', function () {

                st.rm()
                st.bm(_copy, function (bm) {
                    bm.dg()
                })

            })
        ))

        sp.$$(function () {
            $('button').toggle()
        })


        sp.A()


    }
    $.colorPicker = $.ColorPicker = function () {
        z()

        colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))

        colorPicker.change(function () {
            $l(colorPicker.val())
        })

    }
    J.bulletHit = function (bu, inWhat) {
        var res

        res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

        if (res == true) {
            $l('hit!')
        }

        return res
    }
    tran = function () {


        J.scaleX = cX = function (a, b) {
            if (U(b)) {
                return a.scaleX
            }
            a.scaleX = b
            return a
        }
        J.scaleY = cY = function (a, b) {
            if (U(b)) {
                return a.scaleY
            }
            a.scaleY = b
            return a
        }
        J.scaleXY = cXY = function (a, x, y) {
            y = N(y) ? y : x
            cX(a, x)
            cY(a, y)
            return a
        }
        J.scaleXY = sxy = function xy(o, x, y) {
            o.scaleX = x;
            o.scaleY = y || x;
            return o
        }
        J.skewX = kX = function (a, b) {
            if (U(b)) {
                return a.skewX
            }
            a.skewX = b
            return a
        }
        J.skewY = kY = function (a, b) {
            if (U(b)) {
                return a.skewY
            }
            a.skewY = b
            return a
        }
        J.skewXY = kXY = function (a, x, y) {
            y = N(y) ? y : x
            kX(a, x)
            kY(a, y)
            return a
        }
        J.rY = J.regY = gY = function (a, b) {
            if (U(b)) {
                return a.regY
            }
            a.regY = b
            return a
        }
        J.rX = J.regX = gX = function (a, b) {
            if (U(b)) {
                return a.regX
            }
            a.regX = b
            return a
        }
        J.rxy = J.rXY = J.regXY = gXY = function (a, x, y) {
            y = N(y) ? y : x
            J.regX(a, x)
            J.regY(a, y)
            return a
        }


//rX =function(a){return a.rawX}
//rY =function(a){return a.rawY}
//bj=function(a){if(O(a)){   return O(a.ob)?a.ob:a   }}//return a??

        J.SL = J.bindSlide = SL = function (b, b2) {

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
        J.LS = J.bindReverseSlide = LS = function (b, b2) {
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
        J.RT = J.bindRotate = RT = function (b, b2) {
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
        J.RT2 = J.bindRotate2 = RTT = function (b, b2) {


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
        J.SC = J.bindScale = SC = function (b, b2) {
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
        J.SK = J.bindSkew = SK = function (b) {
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
        J.TR = J.bindTransform = TR = function TR(b, b2, m) {
            var g = G(arguments),
                b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
            if (m == 'SL') {
                J.SL(b, b2);
                m = 'SC'
            }
            else if (m == 'SC') {
                J.SC(b, b2);
                m = 'RT'
            }
            else if (m == 'RT') {
                J.RT(b, b2);
                m = 'SL'
            }
            return b.on('pressup', function (e) {
                b.removeAllEventListeners();
                TR(b, b2, m)
            })
        }


        J.reggy = reggy = function (o, s) {

            s = s || o.parent

            s.bm('me', function (b) {

                b.W(40).H(40)

                I(function () {
                    b.XY(o.x + o.regX, o.y + o.regY)
                }, 100)

            })


        }

        J.KK = J.bindSlideAndRotate = KK = function (b, b2) {

            var g = G(arguments), b = g[0], b2 = g[1] || b
            J.SL(b);
            J.RT(b, b2)
            if (g.p) {

                b.rgc('+')
            }

            if (g.N) {
                //    reggy(b,b2)
            }
        }

        J.RK = J.bindRotateThenSkew = RK = function (b, b2, m) {
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

            s.A(c = J.circle(4).XY(200))

        }


    };
    tran()
//important for ipad
//move this onto stage itself
    touchEnable = function (s) {
        J.Touch.enable(s);
        return s
    }
    J.HSL = function (a, b, c) {
        if (U(a)) {
            return HSL(M.rand() * 360, 100, 50)
        }
        return J.Graphics.getHSL(a, b, c)
    }
    que = function () {

        J.loadQueue = J.lq = function (mf, func) {

            var q = new J.LoadQueue(true)

            if (A(mf)) {
                q.loadManifest(J.mf.apply(null, mf))
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
        q = J.LoadQueue.prototype
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
            this.loadManifest(J.mf.apply(null, arguments))
            return this

        }
        q.bm = function (img) {

            img = this.getResult(img)


            return J.bitmap(img)
        }
        J.manifest = function (func) {
            var q = J.loadQueue()

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
        J.handleFileLoad = function (e) {
            if (e.item.type == "image") {
                images[e.item.id] = e.result
            }
        }
        J.mf = J.manifest = function (a) {
            var g = G(arguments), mf = []
            _.e(g, function (v) {
                mf.push({src: J.src(v), id: v})
            })
            return mf
        }
        J.makeManifest = J.makeMan = function (a) {
            return J.manifest.apply(null, _.m(a.images, function (i) {
                    return Graphics.fromSource(i)
                })
            )
        }
        Q = function (imgs, func) {

            var q = J.lq()
            mf = []
            _.each(imgs, function (v) {

                mf.push({

                    src: J.src(v),
                    id: v

                })
            })
            q.manifest(mf)
            q.complete(function () {
                func(q)
            })

        }
        MANIFEST = function () {
            s = J.S()


            Q(['me', 'guy'], function (q) {


                s.A(me = q.bm('me'))

                s.A(guy = q.bm('guy'))


                guy.drag()

            })


        }

    };
    que()
    advancedEazel()
    J.testCanvas = function () {
        return $.d().A($.c(960, 400).id("testCanvas"))
    }
    J.sharedCode = function () {
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
        return new J.Shape(a, b, c)
    }
    $Gx = function () {
        return new J.Graphics
    }
}
function game(){

    ENTERST =function(){St()
        st.bm('me')
        st.on('mouseenter', function(){$('body').pp('once<br>')}, null, true)
        st.on('mouseenter', function(){$('body').pp('many<br>')}, null, false)
    }
    HANDEV=function(){St()

        st.bm('me', function(b){me=b
            cb = b.on('pressmove', function(){
                this.x++
            })
        })

        st.bm('guy', function(b){
            b.handleEvent=function(){
                this.y++}
            b.on('pressmove', b)
        })
    }
    RMEVT=function(){St()



        st.bm('me', function(b){me=b
            cb = b.on('pressmove', function(){this.x++})
        })

        st.bm('guy', function(b){

            b.handleEvent=function(){
                this.y++
                me.off('pressmove', cb)
            }

            b.on('pressmove', b)
        })



    }
    BUBBLE=function(){St()


        output = $T(
            "try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
            "13px courier").lWH(280,13).XY(190,10)

        bg= $H().n("background")

        bg.graphics.f("red").rr(0, 0, 150, 60, 10)
        lb= $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150/2, 60/2).n('label').tA("center")//.tB("middle")

        // setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
        // button.mouseChildren = false;
        st.A(bt= $Ct().XY(20).n('button').A(bg, lb), output)

        // set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:

        _.e([st,bt,lb,bg], function(tg){tg.$( handleClick, false); tg.$( handleClick, true)})

        st.u()


        function handleClick(e){
            if (e.currentTarget == st  && e.eventPhase == 1) { output.text = "target : eventPhase : currentTarget\n" }// this is the first dispatch in the event life cycle, clear the output.
            output.text += e.target.name + " : " + e.eventPhase+" : " + e.currentTarget.name+"\n";
            if (e.currentTarget == st  && e.eventPhase == 3) {    st.u()  }// this is the last dispatch in the event life cycle, render the stage.
        }


    }
    BOWL=function(){St()


        ct= container = c = $Ct().a2(st)


        plX= st.W()/2

        plY=150

        plR=100

        plr=75 // this seems to determine the radius of the 'cluster' of balls

        oRng=8 //outer ring

        nRng=3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1

        circle = cjs.circle(plX, plY, plR, 'yellow')

        container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)


        rngSp = plr/(nRng-1)


        aA=[]


        var ast = function(x,y,r,m,f){
            return {x:x, y:y, radius:r, m:m,
                f:f, vX:0, vY:0, player:false} }

        _.t(nRng, function(r){var crR=0, ang=0, rngR=0
            if(r==nRng-1){crR=1}

            else{
                crR=oRng-(r*3)
                ang=360/crR
                rngR=plr-(rngSp*r)}
            _.t(crR, function(a){var x=0,y=0
                if(r==nRng-1){x=plX;y=plY}
                else {
                    x=plX+(rngR* M.cos((ang*a)* M.PI/180))
                    y=plX+(rngR* M.sin((ang*a)* M.PI/180))-350}
                aA.push( ast(x,y,10,5,0.95) )
                ct.A(J.cir(10,'z').XY(x,y))


            })

        })
    }
    GRID=function(){St()
        ct=   st.ct()
        ct.SL()

        rows = 5;cols=6;sqP=12;sqS=80

        sqSP = sqS + sqP
        _.t(rows * cols, function(i){
            drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i/cols)
            )
        })

        function drawSquare(ct,x,y){
            var h  = $H()
            h.a2(ct).f($r())
            h.graphics.dr(5, 5, 70, 70)
            if(x){h.X(x)}
            if(y){h.Y(y)}
            return h
        }
    }
    TXH = function(){St()

        h = $H().a2(st)

        h.f('red').s('black')

        h.graphics.dc(400,400,200)
        h.graphics.dr(100,0,200,200)
    }

    ZX=function(){
        z()
        a = $.editDiv().A().C('a')
        b = $.editDiv().A().C('b')
    }
    SPACE=function(){St().bgI('/space.jpg').mug(function(m){m.sXY(.2).dg().RT().SL()})}
    BOXES=function(){St()

        $.Ct().A(

            $.R().A(

                $.d('y').pad(20).A(
                    $.h1('controls'),
                    $.bt('fall',function(){ball.fall(box)}),
                    $.bt('fall+',function(){$.ev(1,newBall)})
                ) ) )

        $.kD('r',function(){box.X(10,'+')})
        $.kD('l',function(){box.X(10,'-')})

        st.A(box=Box().XY(300,450))
        st.A(ball=Ball(40,'r','o').XY(300,100))
        newBall=function(){var ball = Ball(40, 'r', 'o').XY(_r(600), 100)
            st.A(ball)
            ball.fall(box)
        }
    }
    SHIP=function(){St()

        angleInDegrees =function self(y,x){

            if(O(y)){return self(y.vy, y.vx)}

            var d = tDeg(M.atan(y/x))

            if(x<0){
                d = M.abs(d)+90;
                if(y<0){d=M.abs(d)+90}}

            return d}


        ship=function(st){
            h=  t = $H().XY(100).rY(20).vX(1).vY(1)
            h.f('o').s('z').mt(0,0).lt(0,40).lt(80,20).lt(0,0)
            $.kD('d',function(){t.rt(6,'+')})
            $.kD('u',function(){t.rt(6,'-')})
            if(st){
                st.A(h)
                st.MD( function(e){
                    t.vX((e.rawX- t.x)/100, '+' )
                    t.vY((e.rawY- t.y)/100, '+')
                    if(t.vx>10){t.vX(10)}
                    if(t.vy>10){t.vY(10)}
                })
            }
            $.ev(.05, function(){
                h.X(t.vx,'+').Y(h.vy,'+')
                h.rotation = angleInDegrees(t)

            })
            return t}


        PL=1;
        aA=[]
        div = $.d('y').pad(10)

        div.A(

            $.h1('controls'),

            b1= $.bt('start',function(){PL=1;b1.hd();b2.sh()}),

            b2= $.bt('stop',function(){PL=0;b2.hd();b1.sh()}).hd(),
            $.bt('sgun',function(){sgun(guy)}) )
        boot = $.boot()
        boot.A(div, st.canvas)
        guy = ship(st)
        // kD('s',function(){ $l('bang')})

        _.t(100,function(){var a=ast();a.a();a.p()})
        st.t(function(){ if(PL){ _.e(aA,function(a){  a.u()  })}} )

        sgun(guy)
    }
    SOLAR=function(){z(); st=  $St(1000,500).bgI('/space.jpg')

        st.bm('guy', function(bm){guy=bm
            bm.dg()
            bm.vXY(_.random(10)+1,_.random(10)+1).XY(_.random(800),_.random(600))
            bm.startMoving()
            bm.warp()
            st.bm('sun', 0.2, function(bm){ sun=bm
                bm.dg()

                bm.startMoving(4,10)
                bm.warp()
                $.ev(.1,function(){
                    if(cjs.bulletHit(sun,guy)){
                        sun.sXY( sun.scaleX + .1, sun.scaleY + .1  )
                        sun.vx += .2;
                        sun.vy += .2
                    }})
            })
        })

        st.mug(0.4, function(bm){
            bm.X(400).dg().bounce(0)
            bm.startMoving(10,10)
        })


    }
    SHOOTY=function(){St()
        $.ghost=function(){ return $.c('X', 500, 500).fit('me').al(.1)} // how cool.. it 'steals' the drag because its on top but looks like its below

        st.mug(function(m){
            m.XY(100, 100).WH(150)
            SL(m)
            //key(m, '-')// ugun(mug)
        })
        c = $.ghost().XY(10,10).A().dg()
    }
    HIT=function(){St()

        st.mug(function(mug){mug.dg()

            st.bm('flame', function(flame){b=flame
                b.dg()

                b.sXY(.1)
                    .rXY( flame.getBounds().width / 2, 500).XY(400, 400)

                //st.$$(  function(e){flame.x= e.rawX;  flame.y= e.rawY  })
                st.MD( function(e){
                    localCoords= mug.globalToLocal(e.rawX, e.rawY)
                    hit = mug.hitTest( localCoords.x, localCoords.y )
                    if( $l(hit) ){ $l('hit'); st .bgC('red')} //;$l( e.X+ ' '+ e.Y )
                    else {$l('no hit'); st.bgC('yellow')}
                })

                st.MM( function(e) {
                    localCoords = mug.globalToLocal(b.x, b.y)
                    hit = mug.hitTest(localCoords.x, localCoords.y)
                    if( hit  ){  //$l('HIT: '+ e.rawX+ ', '+ e.rawY);
                        st.bgC('red') }
                    else { $l('NO HIT'); st.bgC('yellow')}
                })})})
    }
    HITCIRCLES=function(){z()

        var pt
        st  = $St(1000, '+') // look no .tick() necesary!! look below :)
        ct = $Ct()
        st.A( ct.XY(150) )
        _.t(25,function(){$H().XY(randomLocation(),randomLocation()).f(randomHSL()).dc(30).a2(ct)})

        J.Ticker.on("tick", function (e){
            ct.rotation += 3
            n =ct.getNumChildren()
            ct.ch(function(ch){
                uM = ch.underMouse()
                ch.alpha = ch.underMouse()? 1 : 0.1
                pt = ch.globalToLocal(st.m().x, st.m().y)
                if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)){ch.al(1)}
            })

        })

        function randomLocation(){return M.random()*300-150}
        function randomHSL(){return J.Graphics.getHSL(M.random()*360,100,50)}

    }
    st=cjs.Stage.prototype
    SHOOTERCAN=function(){




        function startGame (){z()


            game=true
            Coins=[]
            Aliens=[]
            Bullets=[]
            can = $.canvas('yellow', 900, 500).A()

            shooter = new Shooter()

            shooter.draw()

            //   _.times(10,function(){Coins.push(Coin())})
            //   _.times(15,function(){Aliens.push(Alien())})


            setInterval(function(){

                shooter.update()


                can.clear()
                shooter.draw()
            }, 400)
        }

        function Shooter(){
            this.x= 100
            this.y= 200
            this.vx = 2
            this.vy = 2
            this.radius = 20

            this.update =  function(){
                this.x = this.x + this.vx
                this.y = this.y + this.vy}

            this.draw =function(){

                can.circle(this.x, this.y, this.radius, 'blue')

            }
        }

        updateScreen=function(){



            can.clear()

            shooter.draw()
        }
        updateGame=function(){

            shooterUpdate()

        }

        updateGameX=function(){

            if(game){
                shooter.vx += cap(-5,5)( (e.x - shooter.x)/300 )
                shooter.vy += cap(-5,5)( (e.y - shooter.y)/300 )
                Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
            }  else {

                alert('game over!')

                if((e.x>450)&&(e.y>290)

                    &&(e.x<450 + textWidth)

                    &&(e.y<290 + textHeight)){reload()}}

            can = $.canvas(800, 600)
            can.click(function(x,y){
                shooter.vx+= cap(-5,5)((x-shooter.x)/300)
                shooter.vy+= cap(-5,5)((y-shooter.y)/300)
                Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
            })


            b= bad(x).d()
            c= coin(x).d()
            g= guy(x)

            I(function(){

                x.X();
                b.update().draw();
                g.update().draw()

            }, 30)




            // _.each(cat(Bullets, Coins, Aliens), function(a){a.draw(); a.update()})
        }

        startGame()

    }
    function Alien(x,n,n1){

        if(N(n1)){var a=[]
            _.times(n1,function(){
                a.push(Bad(x,n))})
            return a}

        if(N(n)){return Bad(x).du(n)}

        var b={
            x: _.random(1200),
            y: _.random(600),
            radius: _.random(15),
            vx: _.random(10)-5,
            vy: _.random(10)-5
        }

        b.draw=function(){
            //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
            x.circ(b.x,b.y, b.r,'g','z')
            x.circ(b.x,b.y, 15,'o','z')

            return b}


        b.update=function(){

            b.radius *= 1.005

            b.x = warp(0,1200,20)(b.x+b.dx)

            b.y = warp(0,600,20)(b.y+b.dy)

            return b}


        b.drawUpdate = b.du=function(n,n2){
            if(N(n)){
                return setInterval(function(){  b.du() },  n)
            }

            return b.draw().update()
        }

        return b}
    function Coin(x,n,n1){

        if(N(n1)){
            var a=[];
            _.times(n1,function(){
                a.push( Coin(x, n) )});
            return a
        }

        if(N(n)){

            return Coin(x).du(n)
        }

        var c={
            x: _.random(1200),
            y: _.random(0,600),

            radius: 10,

            vx: _.random(0,10)-5,
            vy: _.random(0,10)-5}

        c.draw=function(){
            x.circle(this.x, this.y, this.radius, 'b', 'y')
            return this
        }

        c.update=function(){
            c.x= warp(0,1200,20)(this.x + this.vx)
            c.y= warp(0,600,20)(this.y+this.vy)
            return c}

        c.drawUpdate=function(n,n2){
            if(N(n)){return setInterval(function(){c.drawUpdate()}, n)}
            return c.draw().update()}

        return c}
//bluecircle game function //never used
    coinHits=function(){

        _.each(CoinsArray,

            function(coin, coinId){

                //??? hitTest?
                if( xyc( coin.x, coin.y, game )){

                    delete CoinsArray[coinId]

                    game.coinScore += 1
                }
            })




        _.each(
            As,function(a,A){

                if (
                    xyc(g.x,g.y,a)){
                    g.h-=1}

                _.each(Bs,function(b,B){

                    if (xyc(b.x,b.y,a)){
                        delete Bs[B]

                        delete As[A]

                        As.push(bad())}})

            })

    }
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
    old=function() {
        CANON = function () {
            St()

            canon = function (box, x, y) {
                var vx, vy, ball
                x = x || box.x || 100
                y = y || box.y || 500

                st.A(ball = Ball(12).XY(x, y))

                if (box.rotation > 0) {
                    vx = 8 * (1 + M.toRads(box.rt()))
                    vy = 16 * (1 - M.toRads(box.rt()))
                }
                else {
                    vx = 8 * (-1 + M.toRads(box.rt()))
                    vy = 16 * (1 + M.toRads(box.rt()))
                }

                st.t(function () {
                    vy -= 0.5
                    ball.X(vx, '+').Y(vy, '-')
                })
            }

            st = $St(1000, 600)
            box = Box(20, 100).X(500).B(600)
            st.A(box)
            kD('l', function () {
                box.rt(4, '-')
            })
            kD('r', function () {
                box.rt(4, '+')
            })
            kD('d', function () {
                box.rt(0)
            })
            kD('s', function () {
                canon(box)
            })

            $.ev(.5, function () {
                var degs = M.toRads(box.rotation)
                canon(box, (500 + M.acos(degs) * 30) + box.x - 540,
                    (500 + M.asin(degs) * 30) + box.y - 540)
            })


        }

    }
    domEl=function(){


        cjs.element = function(a){return new cjs.DOMElement(a)};
        ELEMENTS=function(){z();

            div = $.div('red', 400, 400).P('a').A().A( $.ip() );
            s = stage = cjs.stage('yellow', 1000).tick().A();
            elem  = new cjs.DOMElement( div[0] );

            //stage.A(el)



            // tw(el, [{x:300,y:300},2000])

            // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])

        }


    };domEl();
    orbs=function(){
        //this is from iphone book createjs games


//chapter8
        ORB=function(){


            var Orb = function(){
                this.initialize()}

            Orb.prototype = new createjs.Shape()

            Orb.prototype.Shape_initialize = Orb.prototype.initialize

            Orb.prototype.initialize = function(){ this.Shape_initialize() }

            window.Orb = Orb

        }








//this is to teach stage machine
        ORBS=function(){z()

            SuperStage(500).a()




            (function(){

                window.game = window.game || {}

                var GameStates = {
                    MAIN_MENU:0,
                    RUN_SCENE:1,
                    GAME:10,
                    GAME_OVER:20
                }

                var GameStateEvents = {

                    MAIN_MENU: 'main-menu-event',
                    GAME_OVER:'game-over-event',
                    GAME:'game-event'

                }

                window.game.GameStates = GameStates
                window.game.GameStateEvents = GameStateEvents


            }())


            (function(window){

                window.game = window.game || {}

                function GameMenu(){this.initialize()}

                var p =GameMenu.prototype = EaselContainer()

                p.Container_initialize = p.initialize
                p.titleTxt= null
                p.count = 0

                p.initialize = function(){

                    this.Container_initialize()
                    this.addBG()
                    this.addTitle()
                    this.addOrbs()
                    this.addButton()
                }

                p.addBG=function(){

                    var bg= new createjs.Shape()

                    bg.graphics.beginFill('0').drawRect(0,0,canvas.width, canvas.height)
                    this.addChild(bg)

                }

                p.addTitle = function(){

                    this.titleTxt=EaselText("ORB DESTROYER!", 'b', 40)
                    this.titleTxt.x(canvas.width/2)
                    this.titleTxt.y(200)
                    this.titleTxt.textAlign = 'center'
                    this.addChild(this.titleTxt)
                }


                p.addOrbs=function(){

                    var i, orb
                    var orbContainer = EaselContainer()
                    var numOrbs = 5
                    var orbSize= 20
                    var orbPadding = 10
                    var orbsPosition = 300

                    for(i=0; i<numOrbs; i++){
                        orb = new PulsingOrb('r', orbSize)
                        orb.x = i * ((orbSize * 2)+orbPadding)
                        orbContainer.a(orb)
                    }

                    orbContainer.x=orbContainer.y = orbsPositionthis.addChild(orbContainer)

                }





                p.addButton=function(){
                    var btn, event
                    btn = new ui.SimpleButton('Play Game')
                    btn.on('click', this.playGame, this)
                    btn.regX = btn.width/2
                    btn.x = canvas.width/2
                    btn.y = 400
                    btn.setButton({upColor:'g', color:'r',borderColor:'b',overColor:'y'})
                    this.addChild(btn)
                }

                p.playGame=function(e){this.dispatchEvent(game.GameStateEvents.GAME)}


                p.run=function(tickEvent){this.titleTxt.alpha = cos(this.count++ * 0.1) * .4 + .6}


                window.game.GameMenu=GameMenu

            }(window))

        }



    }
    PONG=function(){z()



        sCan().id('PongStage').w(480).h(320).a()

        var canvas; //Will be linked to the canvas in our index.html page
        var stage; //Is the equivalent of stage in AS3 and we'll add "children" to it
        var bg; //The background graphic
        var main; //The Main Background
        var startB; //The Start button in the main menu
        var creditsB; //The credits button in the main menu
        var credits
        var player; //The player paddle graphic
        var ball; //The ball graphic
        var cpu; //The CPU paddle
        var win; //The winning popup
        var lose; //The losing popup
        var playerScore; //The main player score
        var cpuScore; //The CPU score
        var cpuSpeed=6; //The speed of the CPU paddle, the faster it is the harder the game is
        var xSpeed = 5;
        var ySpeed = 5;
        var tkr = new Object;

        var preloader;
        var manifest;
        var totalLoaded = 0;

        var TitleView = new createjs.Container()


        Main=function(){

            canvas = document.getElementById('PongStage')
            stage = new createjs.Stage(canvas)
            stage.mouseEventsEnabled = true;

            manifest = [
                {src:"bg.png", id:"bg"},
                {src:"main.png", id:"main"},
                {src:"startB.png", id:"startB"},
                {src:"creditsB.png", id:"creditsB"},
                {src:"credits.png", id:"credits"},
                {src:"paddle.png", id:"cpu"},
                {src:"paddle.png", id:"player"},
                {src:"ball.png", id:"ball"},
                {src:"win.png", id:"win"},
                {src:"lose.png", id:"lose"},
                {src:"playerScore.mp3|playerScore.ogg", id:"playerScore"},
                {src:"enemyScore.mp3|enemyScore.ogg", id:"enemyScore"},
                {src:"hit.mp3|hit.ogg", id:"hit"},
                {src:"wall.mp3|wall.ogg", id:"wall"}
            ]
            preloader=new createjs.PreloadJS();

            preloader.onProgress = handleProgress;
            preloader.onComplete = handleComplete;
            preloader.onFileLoad = handleFileLoad;
            preloader.loadManifest(manifest);



            Ticker.setFPS(30);
            Ticker.addListener(stage);

        }


        function handleProgress(event){} //use event.loaded to get the percentage of the loading
        function handleComplete(event){}

        function handleFileLoad(event){
            var img = new Image();
            img.src = event.src;
            img.onload = handleLoadComplete;
            window[event.id] = new createjs.Bitmap(img)}


        function handleLoadComplete(event){
            totalLoaded++
            if(manifest.length==totalLoaded){addTitleView()}}



        addTitleView=function(){

            startB.x = 240 - 31.5;
            startB.y = 160;
            startB.name = 'startB';

            creditsB.x = 241 - 42;
            creditsB.y = 200;

            TitleView.addChild(main, startB, creditsB);
            stage.addChild(bg, TitleView);
            stage.update();

            // Button Listeners

            startB.onPress = tweenTitleView;
            creditsB.onPress = showCredits}




        showCredits=function(){
            // Show Credits

            credits.x = 480;

            stage.addChild(credits);
            stage.update();
            Tween.get(credits).to({x:0}, 300);
            credits.onPress = hideCredits;
        }

// Hide Credits

        function hideCredits(e)
        {
            Tween.get(credits).to({x:480}, 300).call(rmvCredits);
        }

// Remove Credits

        function rmvCredits()
        {
            stage.removeChild(credits);
        }

// Tween Title View

        function tweenTitleView()
        {
            // Start Game

            Tween.get(TitleView).to({y:-320}, 300).call(addGameView);
        }

// Add Game View

        function addGameView()
        {
            // Destroy Menu & Credits screen

            stage.removeChild(TitleView);
            TitleView = null;
            credits = null;

            // Add Game View

            player.x = 2;
            player.y = 160 - 37.5;
            cpu.x = 480 - 25;
            cpu.y = 160 - 37.5;
            ball.x = 240 - 15;
            ball.y = 160 - 15;

            // Score

            playerScore = new Text('0', 'bold 20px Arial', '#A3FF24');
            playerScore.x = 211;
            playerScore.y = 20;

            cpuScore = new Text('0', 'bold 20px Arial', '#A3FF24');
            cpuScore.x = 262;
            cpuScore.y = 20;

            stage.addChild(playerScore, cpuScore, player, cpu, ball);
            stage.update();

            // Start Listener

            bg.onPress = startGame;
        }

// Start Game Function
        function startGame(e)
        {
            bg.onPress = null;
            stage.onMouseMove = movePaddle;

            Ticker.addListener(tkr, false);
            tkr.tick = update;
        }

// Player Movement

        function movePaddle(e)
        {
            // Mouse Movement
            player.y = e.stageY;
        }



        /* Reset */

        function reset()
        {
            ball.x = 240 - 15;
            ball.y = 160 - 15;
            player.y = 160 - 37.5;
            cpu.y = 160 - 37.5;

            stage.onMouseMove = null;
            Ticker.removeListener(tkr);
            bg.onPress = startGame;
        }

// Update Function

        function update()
        {
            // Ball Movement

            ball.x = ball.x + xSpeed;
            ball.y = ball.y + ySpeed;

            // Cpu Movement

            if((cpu.y+32) < (ball.y-14)) {
                cpu.y = cpu.y + cpuSpeed;
            }
            else if((cpu.y+32) > (ball.y+14)) {
                cpu.y = cpu.y - cpuSpeed;
            }

            // Wall Collision

            if((ball.y) < 0) { ySpeed = -ySpeed; createjs.SoundJS.play('wall'); };//Up
            if((ball.y + (30)) > 320) { ySpeed = -ySpeed; createjs.SoundJS.play('wall');};//down

            /* CPU Score */

            if((ball.x) < 0)
            {
                xSpeed = -xSpeed;
                cpuScore.text = parseInt(cpuScore.text + 1);
                reset();
                createjs.SoundJS.play('enemyScore');
            }

            /* Player Score */

            if((ball.x + (30)) > 480)
            {
                xSpeed = -xSpeed;
                playerScore.text = parseInt(playerScore.text + 1);
                reset();
                createjs.SoundJS.play('playerScore');
            }

            /* Cpu collision */

            if(ball.x + 30 > cpu.x && ball.x + 30 < cpu.x + 22 && ball.y >= cpu.y && ball.y < cpu.y + 75)
            {
                xSpeed *= -1;
                createjs.SoundJS.play('hit');
            }

            /* Player collision */

            if(ball.x <= player.x + 22 && ball.x > player.x && ball.y >= player.y && ball.y < player.y + 75)
            {
                xSpeed *= -1;
                createjs.SoundJS.play('hit');
            }

            /* Stop Paddle from going out of canvas */

            if(player.y >= 249)
            {
                player.y = 249;
            }

            /* Check for Win */

            if(playerScore.text == '10')
            {
                alert('win');
            }

            /* Check for Game Over */

            if(cpuScore.text == '10')
            {
                alert('lose');
            }
        }




        alert=function(e){
            Ticker.removeListener(tkr);
            stage.onMouseMove = null;
            bg.onPress = null


            if(e == 'win'){
                win.x = 140; win.y = -90;

                stage.addChild(win);
                Tween.get(win).to({y: 115}, 300)}

            else{
                lose.x = 140;
                lose.y = -90;

                stage.addChild(lose);
                Tween.get(lose).to({y: 115}, 300);
            }
        }




    }
    CUob= {

        default: '~arrow',
        none: 'no cu rendered',
        help: 'help available',
        pointer: 'E.g. used when hovering over links, typically a hand.',
        progress: 'The program is busy in the background but the user can still interact with the interface (unlike for wait).',
        wait: 'The program is busy (sometimes an hourglass or a watch',
        cell: 'Indicating that cells can be selected',
        crosshair: 'Cross cursor, often used to indicate selection in a bitmap.',
        text: 'Indicating text can be selected, typically an I-beam.',
        copy: 'can be copied',
        move: 'may be moved',
        grab: 'can be grabbed/moved',
        'context-menu': 'A context menu is available under the cursor',
        'not-allowed': 'something cannot be done',
        'zoom-in':'can bezoomed(magnified) in orout, zoom-out'
    }
}
function jqApps(){

    TANGLE=function(){z()

        a = $.dA('r',50,50).XY(50).A().pad(10)
        b = $.dA('b',100,100).XY(100).A().pad(10)
        c = $.dA('g',200,200).XY(200).A().pad(10)
        d = $.dA('y',400,400).XY(400).A().pad(10)

        y=function(aa,bb,cc,dd){


            if(aa && U(bb)){  aa.A().P('a') }

            if( bb ){ bb.A( aa.P('static') )  }

            if( dd ){ dd.A( cc.P('s') )  }

        }


    }

}
function eazelApps(){

    HANOI=function(){









    }
    isoo=function(){


        Tile = function(){

            var that =this
            var shape = this

            this.container = new createjs.Container().drag()
            this.tile = cjs.diamond(80, 40, 'blue')

            //this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
            this.container.A(this.tile)
            this.coin = false
            this.addCoin = function(){


                this.coin = tileCoin()
                this.container.A(this.coin)

            }
            this.addBad=function(){

                this.bad= tileBad()
                this.container.A(this.bad )

            }

            this.playerTo = function(){

                if(shape.wasOn==true){location=location}//ISO()

                player.X(that.container.x )
                player.Y(that.container.y -14 )


                player.tile= shape
                player.col= shape.col
                player.row= shape.row

                if(shape.coin){shape.coin.remove()}
                if(shape.bad){location=location}
                shape.wasOn=true
                //if(isolated()){alert('!')}
            }

            this.container.on('dblclick', function(){

                h  = that
                that.tile.graphics.f('red').dc(0,0,2)
                $l('dblclicked!')
                that.playerTo()
            })

        }
        isoRow=function(r,howMany,x,y){
            x = x||0;
            y = y||0

            var row=[]

            _.times(howMany, function(i){

                x = x+ 40
                y = y- 20
                var t= new Tile()

                t.container.XY(x,y)

                stage.A(t.container)

                createjs.bindSlide(t.container)

                t.col= i

                t.row= r

                row.push(t)

            })

            return row}
        isoGrid=function(n1,n2,x,y){ x=x||0; y=y||0

            var grid=[]

            _.times(n2,function(i){
                x=x+40
                y=y+20

                var row = isoRow(i,n1,x,y)

                grid.push(row)

            })




            return grid}

        tileCoin=function(){

            return cjs.circle(15,'yellow', 'black')

        }

        tileBad=function(){ return cjs.circle(15,'green', 'orange')}

        tilePlayer=function(bm){
            player = bm
            player.right=function(){
                player.tile.container.remove()
                grid[player.row][player.col]=null
                grid[player.row][player.col+1]. playerTo()}
            player.left=function(){

                player.tile.container.remove()
                player.tile.exists=false
                //player.tile=null
                grid[player.row][player.col]=null
                grid[player.row][player.col-1]. playerTo()}
            player.down=function(){
                player.tile.container.remove()
                grid[player.row+1][player.col]. playerTo()}
            player.up=function(){

                player.tile.container.remove()
                grid[player.row-1][player.col]. playerTo()


            }
            player.to=function(x,y){
                grid[x][y].playerTo()
                return player}

            kD('u',function(){player.up()})
            kD('d',function(){player.down()})
            kD('l',function(){player.left()})
            kD('r',function(){player.right()})
            return player}
        ISO=function(levNum){z()
            stage = createjs.stage(900,500).tick().A()
            grid = isoGrid(10,10,0,240)
            kD('s',function(){location=location})
            if(levNum){ window['lev'+levNum]()}
            else if( window['_pam']){window['lev'+ _pam]()}
            else{lev1()}
            stage.bm0('me', function(me){
                player = tilePlayer(me).sXY(.2).drag().to(5,5)})




        }

        killTile=function(a,b){
            grid[a][b].container.remove()
            grid[a][b].wasOn=true

        }
        lev1=function(){
            grid[3][5].container.remove()
            grid[4][4].container.remove()
            grid[6][6].container.remove()
            grid[7][1].container.remove()
            grid[0][3].addCoin()
            grid[1][3].addCoin()
            grid[3][4].addCoin()
            grid[5][2].addCoin()
            grid[8][8].addCoin()
        }
        lev2=function(){
            grid[0][0].addCoin()
            grid[0][9].addCoin()
            grid[0][3].addCoin()
            grid[1][3].addCoin()
            grid[1][6].addCoin()
            grid[2][1].addCoin()
            grid[3][4].addCoin()
            grid[3][8].addCoin()
            grid[4][7].addCoin()
            grid[5][2].addCoin()
            grid[6][5].addCoin()
            grid[6][9].addCoin()
            grid[8][8].addCoin()
            grid[8][2].addCoin()


            grid[8][4].addCoin()
            grid[9][0].addCoin()


            killTile(1,2)
            killTile(2,2)
            killTile(2,6)
            killTile(2,7)
            killTile(2,8)
            killTile(4,0)
            killTile(4,3)

            killTile(4,4)
            killTile(4,6)
            killTile(4,9)
            killTile(6,1)
            killTile(6,2)
            killTile(7,1)
            killTile(7,3)

            killTile(7,4)
            killTile(7,9)

            killTile(8,6)
            killTile(8,7)
            killTile(8,9)







        }
        lev3=function(){

            grid[0][0].addBad()
            grid[0][9].addBad()
            grid[0][3].addBad()

            grid[1][6].addBad()
            grid[2][1].addBad()
            grid[3][4].addBad()
            grid[3][8].addBad()

            grid[5][2].addBad()
            grid[6][5].addBad()
            grid[6][9].addBad()
            grid[8][8].addBad()
            grid[8][2].addBad()

        }
        lev4=function(){


            grid[2][9].addCoin()
            grid[5][0].addCoin()

            grid[2][3].addCoin()
            grid[5][6].addCoin()
            grid[9][3].addCoin()
            grid[3][1].addCoin()
            grid[4][4].addCoin()
            grid[0][8].addCoin()
            grid[6][7].addCoin()
            grid[5][8].addCoin()
            grid[9][6].addCoin()
            grid[2][2].addBad()
            grid[0][0].addBad()
            grid[0][9].addBad()
            grid[5][3].addBad()
            grid[2][6].addBad()
            grid[4][5].addBad()
            grid[9][0].addBad()
            grid[9][7].addBad()
            grid[3][8].addBad()


            grid[6][5].addBad()
            grid[6][9].addBad()

            grid[8][2].addBad()

        }


        isolatedBeta=function(){
            r= player.row;
            c= player.col
            if(
                //grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
            //&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn

            grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
            ){return true}
        }


    };isoo
    CONNECT=function(){  St() //m$$('location=location')

        // st= $St('p', 1000)
        pink = J.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
        st.A(pink)
        ct = $Ct()
        st.A(ct)
        green = cjs.circle( 200,'green','purple').XY(320,300)//.rXY(100)
        yellow = cjs.circle( 100,'yellow','purple').XY(250)
        red= cjs.circle( 40,'red','purple').XY(200,100)
        orange = cjs.circle( 20,'orange','purple').XY(300)
        ct.A(green, yellow, red, orange )
        LS(yellow, ct)
        SL(green)
        SL(green,pink)

        SL(yellow)
        SL(red,ct)
        SL(orange, red)

    }
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


        st=stage=s=createjs.stage(1600,1000).A().tick()


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
        st.container(function(ct, st){

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
    J.extend = function (subclass, superclass) {
        function o() {
            this.constructor = subclass
        }

        o.prototype = superclass.prototype;
        return (subclass.prototype = new o())
    }
    J.promote = function (subclass, prefix) {


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
    J.slider = function () {

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

        var p = J.extend(Slider, J.Shape);


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


        window.Slider = J.promote(Slider, "Shape");

    }
    PROMOTE = function () {
        z()

        J.utils()

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

        J.extend(ClassB, ClassA)


        ClassB.prototype.greet = function () {

            return this.ClassA_greet() + this.punctuation

        }

        J.promote(ClassB, "ClassA")

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

        topStage.text = new J.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)


        function stageSetup(canvasName, handler) {
            s = stage = new J.Stage(canvasName).tick()
            //stage.addEventListener("stagemousemove", handler);	// too noisy
            _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
                s.on(ev, handler)
            })
            s.log = []
            return s
        }

        function makeSquare(x, y, color, handler) {
            var shape = J.shape().N('square').XY(x, y)
            shape.graphics.f(color).dr(0, 0, 135, 135)

            var cont = J.container().N('container').A(shape)
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
            J.Ticker.removeEventListener("tick", tick)
        }

        function handleImageLoad() {
            canvas = $.canvas('p', 960, 400).id("testCanvas").A()
            stage = J.stage(canvas)
            stage.autoClear = true;

            bmp = new J.Bitmap(img)
                .rXY(img.width >> 1, img.height >> 1)
                .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
            stage.A(bmp).update();

            J.Ticker.timingMode = J.Ticker.RAF
            J.tick(tick)
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


        //J.sharedCode()
        // J.utils()

        J.slider()


        stage.enableMouseOver();
        //J.Touch.enable(stage);
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
                slice.sourceRect = new J.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
                slice.cache(0, 0, sliceWidth, imgHeight);
                slice.filters = [new J.ColorMatrixFilter(new J.ColorMatrix())];
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

        J.testCanvas()

        J.sharedCode()

        //J.utils()
        J.slider()

        examples.showDistractor()

        st = new J.Stage("testCanvas")

    }


    WINDING = function () {
        z()

        J.manifest(function (q) {
            $.header().A($.h1('grahics winding')).A()
            $.d().A($.c(960, 400).id("testCanvas"))

            st = s = stage = $St(["testCanvas"])

            h = shape = J.worldsMostInterestingShape().a2(stage).drag()
            bm = J.bm(q("chicks"), '-').a2(s).X(470).drag()
            bm.mask = h.same().X(470)
        })

    }

    J.worldsMostInterestingShape = function () {

        var h = J.shape()

        h.graphics.f("pink").dr(20, 20, 450, 360)
            .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
            .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()

        return h
    }
}

