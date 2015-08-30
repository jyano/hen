
cjs = createjs
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
cjs.worldsMostInterestingShape = function () {
    var h = cjs.shape()
    h.graphics.f("pink").dr(20, 20, 450, 360)
        .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
        .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()

    return h
}
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

MeSprite = SS={

    "framerate":24,


    "images":["/guy_0.png", "/guy_1.png"],


    "frames":[

        [2, 2, 1024, 512, 0, 0, 0],
        [1030, 2, 1024, 512, 0, 0, 0],
        [2058, 2, 1024, 512, 0, 0, 0],
        [2, 518, 1024, 512, 0, 0, 0],
        [1030, 518, 1024, 512, 0, 0, 0],
        [2058, 518, 1024, 512, 0, 0, 0],
        [2, 1034, 1024, 512, 0, 0, 0],
        [1030, 1034, 1024, 512, 0, 0, 0],
        [2058, 1034, 1024, 512, 0, 0, 0],
        [2, 1550, 1024, 512, 0, 0, 0],
        [1030, 1550, 1024, 512, 0, 0, 0],
        [2058, 1550, 1024, 512, 0, 0, 0],
        [2, 2066, 1024, 512, 0, 0, 0],
        [1030, 2066, 1024, 512, 0, 0, 0],
        [2058, 2066, 1024, 512, 0, 0, 0],
        [2, 2582, 1024, 512, 0, 0, 0],
        [1030, 2582, 1024, 512, 0, 0, 0],
        [2058, 2582, 1024, 512, 0, 0, 0],
        [2, 3098, 1024, 512, 0, 0, 0],
        [1030, 3098, 1024, 512, 0, 0, 0],
        [2058, 3098, 1024, 512, 0, 0, 0],
        [2, 2, 1024, 512, 1, 0, 0],
        [1030, 2, 1024, 512, 1, 0, 0],
        [2058, 2, 1024, 512, 1, 0, 0],
        [2, 518, 1024, 512, 1, 0, 0],
        [1030, 518, 1024, 512, 1, 0, 0],
        [2058, 518, 1024, 512, 1, 0, 0],
        [2, 1034, 1024, 512, 1, 0, 0],
        [1030, 1034, 1024, 512, 1, 0, 0],
        [2058, 1034, 1024, 512, 1, 0, 0],
        [2, 1550, 1024, 512, 1, 0, 0],
        [1030, 1550, 1024, 512, 1, 0, 0],
        [2058, 1550, 1024, 512, 1, 0, 0],
        [2, 2066, 1024, 512, 1, 0, 0],
        [1030, 2066, 1024, 512, 1, 0, 0],
        [2058, 2066, 1024, 512, 1, 0, 0],
        [2, 2582, 1024, 512, 1, 0, 0],
        [1030, 2582, 1024, 512, 1, 0, 0],
        [2058, 2582, 1024, 512, 1, 0, 0],
        [2, 3098, 1024, 512, 1, 0, 0]],

    "animations":{
        "explode": {"frames": [34, 35, 36, 37, 38, 39], "speed": 0.1},
        "spin": {"frames": [25, 26, 27, 28, 29, 30, 31, 32, 33], "speed": 1},
        "jump": {  "frames": [ 0,  1,  2,   3,  4,  5,  6,  7,  8, 9,  10, 11, 12,  13,  14,
            15,  16,  17,  18,  19,   20,  21,   22, 23,24],  "speed": 1} }


}
Pack={
    "framerate":24,
    "images":[
        "/pack_0.png",
        "/pack_1.png",
        "/pack_2.png",
        "/pack_3.png",
        "/pack_4.png",
        "/pack_5.png",
        "/pack_6.png",
        "/pack_7.png",
        "/pack_8.png",
        "/pack_9.png",
        "/pack_10.png",
        "/pack_11.png",
        "/pack_12.png",
        "/pack_13.png",
        "/pack_14.png",
        "/pack_15.png",
        "/pack_16.png",
        "/pack_17.png",
        "/pack_18.png"
    ],
    "frames":[
        [2, 2, 512, 512, 0, -3, -1],
        [518, 2, 512, 512, 0, -3, -1],
        [1034, 2, 512, 512, 0, -3, -1],
        [2, 518, 512, 512, 0, -3, -1],
        [518, 518, 512, 512, 0, -3, -1],
        [1034, 518, 512, 512, 0, -3, -1],
        [2, 1034, 512, 512, 0, -3, -1],
        [518, 1034, 512, 512, 0, -3, -1],
        [1034, 1034, 512, 512, 0, -3, -1],
        [2, 2, 512, 512, 1, -3, -1],
        [518, 2, 512, 512, 1, -3, -1],
        [1034, 2, 512, 512, 1, -3, -1],
        [2, 518, 512, 512, 1, -3, -1],
        [518, 518, 512, 512, 1, -3, -1],
        [1034, 518, 512, 512, 1, -3, -1],
        [2, 1034, 512, 512, 1, -3, -1],
        [518, 1034, 512, 512, 1, -3, -1],
        [1034, 1034, 512, 512, 1, -3, -1],
        [2, 2, 512, 512, 2, -3, -1],
        [518, 2, 512, 512, 2, -3, -1],
        [1034, 2, 512, 512, 2, -3, -1],
        [2, 518, 512, 512, 2, -3, -1],
        [518, 518, 512, 512, 2, -3, -1],
        [1034, 518, 512, 512, 2, -3, -1],
        [2, 1034, 512, 512, 2, -3, -1],
        [518, 1034, 512, 512, 2, -3, -1],
        [1034, 1034, 512, 512, 2, -3, -1],
        [2, 2, 512, 512, 3, -3, -1],
        [518, 2, 512, 512, 3, -3, -1],
        [1034, 2, 512, 512, 3, -3, -1],
        [2, 518, 512, 512, 3, -3, -1],
        [518, 518, 512, 512, 3, -3, -1],
        [1034, 518, 512, 512, 3, -3, -1],
        [2, 1034, 512, 512, 3, -3, -1],
        [518, 1034, 512, 512, 3, -3, -1],
        [1034, 1034, 512, 512, 3, -3, -1],
        [2, 2, 512, 512, 4, -3, -1],
        [518, 2, 512, 512, 4, -3, -1],
        [1034, 2, 512, 512, 4, -3, -1],
        [2, 518, 512, 512, 4, -3, -1],
        [518, 518, 512, 512, 4, -3, -1],
        [1034, 518, 512, 512, 4, -3, -1],
        [2, 1034, 512, 512, 4, -3, -1],
        [518, 1034, 512, 512, 4, -3, -1],
        [1034, 1034, 512, 512, 4, -3, -1],
        [2, 2, 512, 512, 5, -3, -1],
        [518, 2, 512, 512, 5, -3, -1],
        [1034, 2, 512, 512, 5, -3, -1],
        [2, 518, 512, 512, 5, -3, -1],
        [518, 518, 512, 512, 5, -3, -1],
        [1034, 518, 512, 512, 5, -3, -1],
        [2, 1034, 512, 512, 5, -3, -1],
        [518, 1034, 512, 512, 5, -3, -1],
        [1034, 1034, 512, 512, 5, -3, -1],
        [2, 2, 512, 512, 6, -3, -1],
        [518, 2, 512, 512, 6, -3, -1],
        [1034, 2, 512, 512, 6, -3, -1],
        [2, 518, 512, 512, 6, -3, -1],
        [518, 518, 512, 512, 6, -3, -1],
        [1034, 518, 512, 512, 6, -3, -1],
        [2, 1034, 512, 512, 6, -3, -1],
        [518, 1034, 512, 512, 6, -3, -1],
        [1034, 1034, 512, 512, 6, -3, -1],
        [2, 2, 512, 512, 7, -3, -1],
        [518, 2, 512, 512, 7, -3, -1],
        [1034, 2, 512, 512, 7, -3, -1],
        [2, 518, 512, 512, 7, -3, -1],
        [518, 518, 512, 512, 7, -3, -1],
        [1034, 518, 512, 512, 7, -3, -1],
        [2, 1034, 512, 512, 7, -3, -1],
        [518, 1034, 512, 512, 7, -3, -1],
        [1034, 1034, 512, 512, 7, -3, -1],
        [2, 2, 512, 512, 8, -3, -1],
        [518, 2, 512, 512, 8, -3, -1],
        [1034, 2, 512, 512, 8, -3, -1],
        [2, 518, 512, 512, 8, -3, -1],
        [518, 518, 512, 512, 8, -3, -1],
        [1034, 518, 512, 512, 8, -3, -1],
        [2, 1034, 512, 512, 8, -3, -1],
        [518, 1034, 512, 512, 8, -3, -1],
        [1034, 1034, 512, 512, 8, -3, -1],
        [2, 2, 512, 512, 9, -3, -1],
        [518, 2, 512, 512, 9, -3, -1],
        [1034, 2, 512, 512, 9, -3, -1],
        [2, 518, 512, 512, 9, -3, -1],
        [518, 518, 512, 512, 9, -3, -1],
        [1034, 518, 512, 512, 9, -3, -1],
        [2, 1034, 512, 512, 9, -3, -1],
        [518, 1034, 512, 512, 9, -3, -1],
        [1034, 1034, 512, 512, 9, -3, -1],
        [2, 2, 512, 512, 10, -3, -1],
        [518, 2, 512, 512, 10, -3, -1],
        [1034, 2, 512, 512, 10, -3, -1],
        [2, 518, 512, 512, 10, -3, -1],
        [518, 518, 512, 512, 10, -3, -1],
        [1034, 518, 512, 512, 10, -3, -1],
        [2, 1034, 512, 512, 10, -3, -1],
        [518, 1034, 512, 512, 10, -3, -1],
        [1034, 1034, 512, 512, 10, -3, -1],
        [2, 2, 512, 512, 11, -3, -1],
        [518, 2, 512, 512, 11, -3, -1],
        [1034, 2, 512, 512, 11, -3, -1],
        [2, 518, 512, 512, 11, -3, -1],
        [518, 518, 512, 512, 11, -3, -1],
        [1034, 518, 512, 512, 11, -3, -1],
        [2, 1034, 512, 512, 11, -3, -1],
        [518, 1034, 512, 512, 11, -3, -1],
        [1034, 1034, 512, 512, 11, -3, -1],
        [2, 2, 512, 512, 12, -3, -1],
        [518, 2, 512, 512, 12, -3, -1],
        [1034, 2, 512, 512, 12, -3, -1],
        [2, 518, 512, 512, 12, -3, -1],
        [518, 518, 512, 512, 12, -3, -1],
        [1034, 518, 512, 512, 12, -3, -1],
        [2, 1034, 512, 512, 12, -3, -1],
        [518, 1034, 512, 512, 12, -3, -1],
        [1034, 1034, 512, 512, 12, -3, -1],
        [2, 2, 512, 512, 13, -3, -1],
        [518, 2, 512, 512, 13, -3, -1],
        [1034, 2, 512, 512, 13, -3, -1],
        [2, 518, 512, 512, 13, -3, -1],
        [518, 518, 512, 512, 13, -3, -1],
        [1034, 518, 512, 512, 13, -3, -1],
        [2, 1034, 512, 512, 13, -3, -1],
        [518, 1034, 512, 512, 13, -3, -1],
        [1034, 1034, 512, 512, 13, -3, -1],
        [2, 2, 512, 512, 14, -3, -1],
        [518, 2, 512, 512, 14, -3, -1],
        [1034, 2, 512, 512, 14, -3, -1],
        [2, 518, 512, 512, 14, -3, -1],
        [518, 518, 512, 512, 14, -3, -1],
        [1034, 518, 512, 512, 14, -3, -1],
        [2, 1034, 512, 512, 14, -3, -1],
        [518, 1034, 512, 512, 14, -3, -1],
        [1034, 1034, 512, 512, 14, -3, -1],
        [2, 2, 512, 512, 15, -3, -1],
        [518, 2, 512, 512, 15, -3, -1],
        [1034, 2, 512, 512, 15, -3, -1],
        [2, 518, 512, 512, 15, -3, -1],
        [518, 518, 512, 512, 15, -3, -1],
        [1034, 518, 512, 512, 15, -3, -1],
        [2, 1034, 512, 512, 15, -3, -1],
        [518, 1034, 512, 512, 15, -3, -1],
        [1034, 1034, 512, 512, 15, -3, -1],
        [2, 2, 512, 512, 16, -3, -1],
        [518, 2, 512, 512, 16, -3, -1],
        [1034, 2, 512, 512, 16, -3, -1],
        [2, 518, 512, 512, 16, -3, -1],
        [518, 518, 512, 512, 16, -3, -1],
        [1034, 518, 512, 512, 16, -3, -1],
        [2, 1034, 512, 512, 16, -3, -1],
        [518, 1034, 512, 512, 16, -3, -1],
        [1034, 1034, 512, 512, 16, -3, -1],
        [2, 2, 512, 512, 17, -3, -1],
        [518, 2, 512, 512, 17, -3, -1],
        [1034, 2, 512, 512, 17, -3, -1],
        [2, 518, 512, 512, 17, -3, -1],
        [518, 518, 512, 512, 17, -3, -1],
        [1034, 518, 512, 512, 17, -3, -1],
        [2, 1034, 512, 512, 17, -3, -1],
        [518, 1034, 512, 512, 17, -3, -1],
        [1034, 1034, 512, 512, 17, -3, -1],
        [2, 2, 512, 512, 18, -3, -1],
        [518, 2, 512, 512, 18, -3, -1],
        [1034, 2, 512, 512, 18, -3, -1],
        [2, 518, 512, 512, 18, -3, -1],
        [518, 518, 512, 512, 18, -3, -1],
        [1034, 518, 512, 512, 18, -3, -1],
        [2, 1034, 512, 512, 18, -3, -1],
        [518, 1034, 512, 512, 18, -3, -1]
    ],
    "animations":{
        "b1": {"frames": [1, 2, 3, 4], "speed": 1},
        "b2": {"frames": [5, 6, 7, 8, 9], "speed": 1},
        "b3": {"frames": [10, 11, 12, 13, 14], "speed": 1},  //15

        "c1": {"frames": [16, 17, 18], "speed": 1},
        "c2": {"frames": [19, 20, 21, 22], "speed": 1},
        "c3": {"frames": [23, 24, 25, 26, 27], "speed": 1},
        "c4": {"frames": [28, 29, 30], "speed": 1},


        "s1": {"frames": [96, 97, 98, 99, 100, 101, 102, 103, 104],"speed": 1},
        "s2": {"frames": [105, 106, 107, 108, 109, 110, 111, 112, 113],"speed": 1},
        "s3": {"frames": [114, 115, 116, 117, 118, 119, 120, 121, 122],"speed": 1},
        "s4": {"frames": [123, 124, 125, 126, 127, 128, 129, 130, 131],"speed": 1},



        "e1": {"frames": [132, 133, 134, 135, 136, 137, 138, 139, 140, 141],"speed": 1},
        "e2": {"frames": [142, 143, 144, 145, 146, 147, 148, 149],"speed": 1},
        "e3": {"frames": [150,151, 152, 153, 154, 155, 156, 157, 158, 159],"speed": 1},
        "e4": {"frames": [160, 161, 162, 163, 164, 165, 166, 167, 168, 169],"speed": 1},

        "f1": {"frames": [31, 32, 33, 34, 35], "speed": 1},
        "f2": {"frames": [36, 37, 38, 39, 40, 41, 42, 43], "speed": 1},
        "f3": {"frames": [44, 45, 46, 47, 48, 49], "speed": 1},
        "f4": {"frames": [  50,    51,   52,  53, 54,  55, 56, 57,  58,   59,  60,  61,  62,  63,  64,  65,66,  67,  68,   69,  70,  71,   72,  73,   74,  75,  76 ],"speed": 1},

        "p1": {"frames": [77, 78, 79, 80, 81], "speed": 1},
        "p2": {"frames": [82, 83, 84, 85], "speed": 1},
        "p3": {"frames": [86, 87, 88, 89, 90], "speed": 1},
        "p4": {"frames": [91, 92, 93, 94, 95], "speed": 1}

    }}
Smoke={



    "framerate":24,

    "images":["/electric_0.png", "/electric_1.png", "/electric_2.png"],

    "frames":[
        [2, 2, 512, 512, 0, -58, -117],
        [518, 2, 512, 512, 0, -58, -117],
        [1034, 2, 512, 512, 0, -58, -117],
        [2, 518, 512, 512, 0, -58, -117],
        [518, 518, 512, 512, 0, -58, -117],
        [1034, 518, 512, 512, 0, -58, -117],
        [2, 1034, 512, 512, 0, -58, -117],
        [518, 1034, 512, 512, 0, -58, -117],
        [1034, 1034, 512, 512, 0, -58, -117],
        [2, 2, 512, 512, 1, -58, -117],
        [518, 2, 512, 512, 1, -58, -117],
        [1034, 2, 512, 512, 1, -58, -117],
        [2, 518, 512, 512, 1, -58, -117],
        [518, 518, 512, 512, 1, -58, -117],
        [1034, 518, 512, 512, 1, -58, -117],
        [2, 1034, 512, 512, 1, -58, -117],
        [518, 1034, 512, 512, 1, -58, -117],
        [1034, 1034, 512, 512, 1, -58, -117],
        [2, 2, 512, 512, 2, -58, -117]
    ],

    "animations":{


        "sizzle": {"frames": [10, 11, 12, 13, 14, 15, 16, 17, 18], "speed": 1},
        "warp": {"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "speed": 1}

    }





}
Mummy={



    "framerate":24,

    "images":["/assets/sprites/metalslug_mummy37x45.png"],

    "frames":[

        [0, 0, 40, 45, 0, 0,0],
        [37, 0, 40, 45, 0, 0,0],
        [74, 0, 40, 45, 0, 0,0],
        [111, 0, 40, 45, 0, 0,0],
        [148, 0, 40, 45, 0, 0,0],


        [0, 46, 40, 45, 0, 0,0],
        [37, 46, 40, 45, 0, 0,0],
        [74, 46, 40, 45, 0, 0,0],
        [111, 46, 40, 45, 0, 0,0],
        [148, 46, 40, 45, 0, 0,0],


    ],

    "animations":{

        "walk": {"frames": [0,1,2,3,4,5], "speed":.5}

    }


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

    return $Tw(arm,
        [{r: 100, sx: -1}, 800],
        [{r: -20, sx: -2, sy: 2}, 400, 'eO'],
        [{r: 0, sy: 1, sx: -.8}, 200])
}
tweens.lpunch = function (lf) {

    return $Tw(lf,

        [{r: 10, s: 1}, 800],

        [{r: -140, s: 2.5}, 600, 'eO'],

        [{s: .8, r: 0}, 1600])

}
tweens.shakeY = function (a) {

    // EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )

    $Tw(
        [a, 'l'],
        [{y: -10}, 500],
        [{y: 10}, 500],
        [{y: -10}, 500]
    )

    return a
}
tweens.shakeX = function (a) {
    return $Tw(
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

    return $Tw(
        a,

        [{r: 180, y: 200, sxy: .5}, 500]
    )
}
tweens.prod1 = function (a) {
    return $Tw(
        a,
        {x: -100, y: 200},
        [{x: 10, s: .5, y: -200}, 500],
        [{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
        {a: 0})
}
tweens.prod2 = function (a) {

    return $Tw(
        a,
        {x: 100, y: 200},
        [{x: 10, s: .5, y: 200}, 500],
        [{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
        {a: 0}
    )
}