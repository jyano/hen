
mvClip()
function mvClip() {
    this.createjs = this.createjs || {}, function () {
        "use strict";
        function a(b, c, d, e) {
            this.Container_constructor(), !a.inited && a.init(), this.mode = b || a.INDEPENDENT, this.startPosition = c || 0, this.loop = d, this.currentFrame = 0, this.timeline = new createjs.Timeline(null, e, {
                paused: !0,
                position: c,
                useTicks: !0
            }), this.paused = !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || null, this.framerate = null, this._synchOffset = 0, this._prevPos = -1, this._prevPosition = 0, this._t = 0, this._managed = {}
        }

        function b() {
            throw"MovieClipPlugin cannot be instantiated."
        }

        var c = createjs.extend(a, createjs.Container);
        a.INDEPENDENT = "independent", a.SINGLE_FRAME = "single", a.SYNCHED = "synched", a.inited = !1, a.init = function () {
            a.inited || (b.install(), a.inited = !0)
        }, c.getLabels = function () {
            return this.timeline.getLabels()
        }, c.getCurrentLabel = function () {
            return this._updateTimeline(), this.timeline.getCurrentLabel()
        }, c.getDuration = function () {
            return this.timeline.duration
        };
        try {
            Object.defineProperties(c, {
                labels: {get: c.getLabels},
                currentLabel: {get: c.getCurrentLabel},
                totalFrames: {get: c.getDuration},
                duration: {get: c.getDuration}
            })
        } catch (d) {
        }
        c.initialize = a, c.isVisible = function () {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, c.draw = function (a, b) {
            return this.DisplayObject_draw(a, b) ? !0 : (this._updateTimeline(), this.Container_draw(a, b), !0)
        }, c.play = function () {
            this.paused = !1
        }, c.stop = function () {
            this.paused = !0
        }, c.gotoAndPlay = function (a) {
            this.paused = !1, this._goto(a)
        }, c.gotoAndStop = function (a) {
            this.paused = !0, this._goto(a)
        }, c.advance = function (b) {
            var c = a.INDEPENDENT;
            if (this.mode == c) {
                for (var d = this, e = d.framerate; (d = d.parent) && null == e;)d.mode == c && (e = d._framerate);
                this._framerate = e;
                var f = null != e && -1 != e && null != b ? b / (1e3 / e) + this._t : 1, g = 0 | f;
                for (this._t = f - g; !this.paused && g--;)this._prevPosition = this._prevPos < 0 ? 0 : this._prevPosition + 1, this._updateTimeline()
            }
        }, c.clone = function () {
            throw"MovieClip cannot be cloned."
        }, c.toString = function () {
            return "[MovieClip (name=" + this.name + ")]"
        }, c._tick = function (a) {
            this.advance(a && a.delta), this.Container__tick(a)
        }, c._goto = function (a) {
            var b = this.timeline.resolve(a);
            null != b && (-1 == this._prevPos && (this._prevPos = 0 / 0), this._prevPosition = b, this._t = 0, this._updateTimeline())
        }, c._reset = function () {
            this._prevPos = -1, this._t = this.currentFrame = 0, this.paused = !1
        }, c._updateTimeline = function () {
            var b = this.timeline, c = this.mode != a.INDEPENDENT;
            b.loop = null == this.loop ? !0 : this.loop;
            var d = c ? this.startPosition + (this.mode == a.SINGLE_FRAME ? 0 : this._synchOffset) : this._prevPos < 0 ? 0 : this._prevPosition, e = c || !this.actionsEnabled ? createjs.Tween.NONE : null;
            if (this.currentFrame = b._calcPosition(d), b.setPosition(d, e), this._prevPosition = b._prevPosition, this._prevPos != b._prevPos) {
                this.currentFrame = this._prevPos = b._prevPos;
                for (var f in this._managed)this._managed[f] = 1;
                for (var g = b._tweens, h = 0, i = g.length; i > h; h++) {
                    var j = g[h], k = j._target;
                    if (k != this && !j.passive) {
                        var l = j._stepPosition;
                        k instanceof createjs.DisplayObject ? this._addManagedChild(k, l) : this._setState(k.state, l)
                    }
                }
                var m = this.children;
                for (h = m.length - 1; h >= 0; h--) {
                    var n = m[h].id;
                    1 == this._managed[n] && (this.removeChildAt(h), delete this._managed[n])
                }
            }
        }, c._setState = function (a, b) {
            if (a)for (var c = a.length - 1; c >= 0; c--) {
                var d = a[c], e = d.t, f = d.p;
                for (var g in f)e[g] = f[g];
                this._addManagedChild(e, b)
            }
        }, c._addManagedChild = function (b, c) {
            b._off || (this.addChildAt(b, 0), b instanceof a && (b._synchOffset = c, b.mode == a.INDEPENDENT && b.autoReset && !this._managed[b.id] && b._reset()), this._managed[b.id] = 2)
        }, c._getBounds = function (a, b) {
            var c = this.DisplayObject_getBounds();
            return c || (this._updateTimeline(), this.frameBounds && (c = this._rectangle.copy(this.frameBounds[this.currentFrame]))), c ? this._transformBounds(c, a, b) : this.Container__getBounds(a, b)
        }, createjs.MovieClip = createjs.promote(a, "Container"), b.priority = 100, b.install = function () {
            createjs.Tween.installPlugin(b, ["startPosition"])
        }, b.init = function (a, b, c) {
            return c
        }, b.step = function () {
        }, b.tween = function (b, c, d, e, f, g) {
            return b.target instanceof a ? 1 == g ? f[c] : e[c] : d
        }
    }(), this.createjs = this.createjs || {}, function () {
        "use strict";
        var a = createjs.MovieClip = createjs.MovieClip || {};
        a.version = "0.8.1", a.buildDate = "Thu, 21 May 2015 16:17:39 GMT"
    }();
}

Sprites = {}
Sprites.char = {
    framerate: 24,
    images: ["/char.png"],
    frames: [
        [0, 0, 256, 256, 0, -159, -138],
        [256, 0, 256, 256, 0, -159, -138],
        [512, 0, 256, 256, 0, -159, -138],
        [768, 0, 256, 256, 0, -159, -138],
        [1024, 0, 256, 256, 0, -159, -138],
        [1280, 0, 256, 256, 0, -159, -138],
        [1536, 0, 256, 256, 0, -159, -138],
        [0, 256, 256, 256, 0, -159, -138],
        [256, 256, 256, 256, 0, -159, -138],
        [512, 256, 256, 256, 0, -159, -138]],

    animations: {
        df: {"frames": [0]},
        jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1, next: false},
        die: {"frames": [4, 5], speed: .1, next: false},
        hurt: {"frames": [4, 4, 4, 5, 5, 5, 4, 4, 5, 5, 4, 5, 0], speed: .4, next: false},
        fly: {"frames": [6, 6, 7, 8, 9], speed: .3},
        nuts: {frames: [3, 8, 2, 9, 2, 4, 5, 6, 5, 4, 5, 3]}

    }
}
Sprites.char2 = {
    framerate: 24,
    images: ["/char2.png"],

    "frames": [
        [0, 0, 256, 256, 0, -159, -138],
        [256, 0, 256, 256, 0, -159, -138],
        [512, 0, 256, 256, 0, -159, -138],
        [768, 0, 256, 256, 0, -159, -138],
        [1024, 0, 256, 256, 0, -159, -138],
        [1280, 0, 256, 256, 0, -159, -138],
        [1536, 0, 256, 256, 0, -159, -138],
        [0, 256, 256, 256, 0, -159, -138],
        [256, 256, 256, 256, 0, -159, -138],
        [512, 256, 256, 256, 0, -159, -138]
    ],

    animations: {
        df: {"frames": [0]},
        jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1, next: false},
        die: {"frames": [4, 5], speed: .1, next: false},
        hurt: {"frames": [4, 4, 4, 5, 5, 5, 4, 4, 5, 5, 4, 5, 0], speed: .4, next: false},
        fly: {"frames": [6, 6, 7, 8, 9], speed: .3},
        nuts: {frames: [3, 8, 2, 9, 2, 4, 5, 6, 5, 4, 5, 3]}

    }
}
tweens = {}
tweens.rpunch = function (arm) {

    //arm=arm|| c1.g('arm')

    return cjs.tween(arm,
        [{r: 100, sx: -1}, 800],
        [{r: -20, sx: -2, sy: 2}, 400, 'eO'],
        [{r: 0, sy: 1, sx: -.8}, 200])
}
tweens.lpunch = function (lf) {

    return cjs.tween(lf,

        [{r: 10, s: 1}, 800],

        [{r: -140, s: 2.5}, 600, 'eO'],

        [{s: .8, r: 0}, 1600])

}
tweens.shakeY = function (a) {

    // EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )

    cjs.tween(
        [a, 'l'],
        [{y: -10}, 500],
        [{y: 10}, 500],
        [{y: -10}, 500]
    )

    return a
}
tweens.shakeX = function (a) {
    return cjs.tween(
        a,

        [
            {r: 180, y: 200, sxy: .5}, 500
        ]
    ).then(
        [a, 'l'],
        [{x: -20}, 50],
        [{x: 20}, 50],
        [{x: -20}, 50]
    )
}
tweens.rott = function (a) {

    return cjs.tween(
        a,

        [{r: 180, y: 200, sxy: .5}, 500]
    )
}
tweens.prod1 = function (a) {
    return cjs.tween(
        a,
        {x: -100, y: 200},
        [{x: 10, s: .5, y: -200}, 500],
        [{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
        {a: 0})
}
tweens.prod2 = function (a) {

    return cjs.tween(
        a,
        {x: 100, y: 200},
        [{x: 10, s: .5, y: 200}, 500],
        [{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
        {a: 0}
    )
}
