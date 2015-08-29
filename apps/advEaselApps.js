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