
cjs.Ea=cjs.Ease

cjs.ease = function(e){return cjs.Ease[oO('E', e)]} //Ea =


tran()
spr()
movie()
function movie() {

    cjs.tl=function(args){var tl = new cjs.Timeline()
        if(A(args)){

            tl.add(args)
        }
        return tl}
    cjs.mc=function(a,b,c,d){var mc = new cjs.MovieClip(a,b,c,d)
        return mc}

    mcPt()
    tlPt()
    function tlPt() {
        tl = cjs.Timeline.prototype
        tl.remove = tl.rm = function (a) {
            this.removeTween(a);
            return this
        }
        tl.currentLabel = tl.cL = function () {
            return this.getCurrentLabel()
        }
        tl.labels = tl.lb = function (a) {
            var t = this;
            if (U(a)) {
                return this.getLabels()
            }
            if (O(a)) {
                this.setLabels(a);
                return this
            }
            if (N(a) || S(a)) {
                return resolve(a)
            }
            return this
        }
        tl.add = function (tw) {
            var that = this

            this.addTween.apply(this, arguments)

            return this
        }
    }

    function mcPt() {
        mc = cjs.MovieClip.prototype
        mc.play = mc.p = function (a, b) {
            if (this.setPaused) {
                this.setPaused(false)
            } else {
                this.play()
            }
            if (D(b)) {

                if (this.gotoAndPlay) {
                    this.gotoAndPlay(a)
                }

                if (this.setPosition) {
                    this.setPosition(a, b)
                }

                return this
            }
        }
        mc.stop = mc.s = function (a, b) {


            if (D(b)) {

                if (this.gotoAndStop) {
                    this.gotoAndStop(a)
                }

                if (this.setPosition) {
                    this.setPosition(a, b)
                }

                return this
            }
        }
        mc.lb = function () {
            return this.getLabels()
        }
        mc.cL = function () {
            return this.getCurrentLabel()
        }
        mc.start = mc.startPos = mc.sP = function (a) {
            if (U(a)) {
                return this.startPosition
            }
            ;
            this.startPosition = a;
            return this
        }
        mc.mo = function (a) {
            if (U(a)) {
                return this.mode
            }
            this.mode = a;
            return tthis
        }
        mc.lp = function (a) { //loop
            if (U(a)) {
                return this.loop
            }
            this.loop = a
            return this
        }
        mc.auto = mc.aR = function (auto) {
            if (U(auto)) {
                return this.autoReset
            }
            this.autoReset = auto
            return this
        }
        mc.actions = mc.aE = function (enabled) {

            if (U(enabled)) {
                return this.actionsEnabled
            }

            this.actionsEnabled = enabled

            return this
        }
        mc.tl = function () {
            this.timeline.addTween.apply(this.timeline, arguments)

            return this
        }
    }
}
function tran(){


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


cjs.rtSh = cjs.rotateShake = function (bm) {
    $Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
    $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])

}

}


function spr(){
    cjs.spriteSheet   =function(a){return new cjs.SpriteSheet(a)}

    cjs.sprite=$sprite=function(spriteSheet){
//EaselSprite= J$=

        if(spriteSheet.images){

            spriteSheet=cjs.parseZoe(spriteSheet)
            spriteSheet=new cjs.SpriteSheet(spriteSheet)
        }


        return new cjs.Sprite( spriteSheet )

    }
    cjs.sprite100 = function(a){

        var spr = cjs.sprite(a)
        spr.rXY(50)
            .opacity(.8)
        return spr}
    cjs.parseZoe=function(sprObj){


        //fix source (needs a '/')
        sprObj.images[ 0 ] = S.eL( sprObj.images[0] )

        //set next to false, on all anims
        //_.e(sprObj.animations, function(anim){anim.next = false})


        //to do: parse it! (get rid of unnecessary json strings in keys)


        return sprObj}

    cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function(mc){

        ssb = new createjs.SpriteSheetBuilder()
        if(mc){ssb.A(mc)}

        return ssb}


    protos()
    function protos(){

        sprShPt()
        builderPt()

            s = cjs.Sprite.prototype
            s.p = function (what) {
                if (U(what)) {
                    this.play()
                }
                else {
                    this.gotoAndPlay(what)
                }
                return this
            }
            s.s = s.P = function (what) {
                if (U(what)) {
                    this.stop()
                }
                else {
                    this.gotoAndStop(what)
                }
                ;
                return this
            }
            s.skip = s.adv = function (num) {
                this.advance(num);
                return this
            }
            s.cA = s.cAn = s.currAnim = function () {
                return this.currentAnimation
            }
            s.cAF = currAnimFrame = function () {
                return this.currentAnimationFrame
            }
            s.cF = s.cFr = s.currFrame = function () {
                return this.currentFrame
            }
            s.fR = s.rate = function (rate) {
                if (U(rate)) {
                    return this.framerate
                }
                this.framerate = rate
                return this
            }
            s.end = function (func) {
                func = func || function () {
                    n = N(window['n']) ? n : 0
                    $l('frame! ' + n++)
                }
                this.on('animationend', func)
                return this
            }

        function sprShPt() {
            ss = cjs.SpriteSheet.prototype
            ss.addFlipped = function (a, b, c) {
                cjs.SpriteSheetUtils.addFlippedFrames(this, a || true, b || false, c || false)
                return this
            }
        }
        function builderPt(){
            b = cjs.SpriteSheetBuilder.prototype
            b.Z = function (sc) {

                if (U(sc)) {
                    return this.scale
                }
                this.scale = sc;
                return this
            }
            b.maxW = function (sc) {
                if (U(sc)) {
                    return this.maxWidth
                }
                this.maxWidth = sc;
                return this
            }
            b.A = function (mc) {
                this.addMovieClip(mc)
                return this
            }
            b.complete = function (func) {
                this.on("complete", func)
                return this
            }
            b.async = function (funcNum, num) {
                if (F(funcNum)) {
                    this.complete(funcNum)
                    this.buildAsync(num)
                }

                else {
                    this.buildAsync(funcNum)
                }


                return this
            }
        }
    }




}

