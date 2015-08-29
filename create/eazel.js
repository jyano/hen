 cjs = createjs
cjs.iDO=iDo = function (a) {return O(a) && O(a.parent)}
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
cjs.mXY = mxy = function (o, s) {

    xy(o, s.mx(), s.my())

    return o
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
tikr()
bmp()
que()
function tikr(){
    cjs.tick2 = function (func) {
        cjs.Ticker.addEventListener('tick', func)
        return cjs.Ticker
    }
    cjs.stopListening = function () {
        cjs.Ticker.removeAllEventListeners()
    }
    T = T$ = J.Ticker
    cjs.t = cjs.tick = function (fn) {
        fn();
        J.Ticker.on('tick', fn)
    }
    cjs.stop = function () {

        cjs.Ticker.removeAllEventListeners()

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
}
function que(){
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


}
function bmp(){
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

}



cjs.bulletHit = function (bu, inWhat) {alert('cjs.bulletHit')
    var res

    res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

    if (res == true) {
        $l('hit!')
    }

    return res
}
function maybe(){

    cjs.HSL = function (a, b, c) {
        if (U(a)) {
            return HSL(M.rand() * 360, 100, 50)
        }
        return cjs.Graphics.getHSL(a, b, c)
    }
    eventDisp()
    function eventDisp() {
        p = cjs.EventDispatcher.prototype
        p.init = function () {
            this.initialize.apply(this, arguments)
            return this
        }
    }

}