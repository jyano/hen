J = cjs
h =  cjs.Shape.prototype
ct = cjs.Container.prototype
gx = cjs.Graphics.prototype
st = s = p = cjs.Stage.prototype
 T= cjs.Ticker

gxProto()

contProto()
stageProto()
function gxProto() {
    gx.poly = function (verts, f, s, width) {
        var that = this
        //  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
        if (N(verts[0])) {

            _.each(arguments, function (vert) {
                that.lt(vert[0], vert[1])
            });
            this.cp()
        }
        else {
            this.fs(f, s, width)
            _.each(verts, function (vert) {
                that.lt(vert[0], vert[1])
            });
            this.cp()
        }
        return this
    }
    gx.fC = gx.fs = function (c, C, l) {
        var gx = this
        gx.f(oO('c', c || 'z'))
        gx.s(oO('c', C || null))
        gx.ss(N(l) ? l : 2)
        return gx
    }
    gx.sC = function (s, w) {
        var gx = this

        w = N(w) ? w : 2

        s = O(s) ? s : oO('c', s || null)

        gx.s(s)

        gx.ss(w)

        return gx
    }
}
function contProto() {
    ct.st = function () {
        return this.stage
    }
    ct.bData = function (data) {
        return J.bm($.i().src($.parseJSON(data))).a2(this)
    }
    ct.M = ct.mug = function () {
        var ct = this, g = G(arguments), o
        o = N(g[0]) ? {sc: g[0], fn: g[1]} : {fn: g[0]}
        o.sc = N(o.sc) ? o.sc : 1
        o.fn = o.fn || function () {
        }
        $.G('myMug', function (m) {
            if (!m) {
                alert('!mug')
            }
            ct.bm(m, o.sc, o.fn, g.p ? '+' : null)
        })
        return ct
    }
    ct.clr = function () {
        var ct = this, arr = [];
        ct.ch(function (ch) {
            ch.rm()
        });
        return ct
    }
    ct.cir = function (x, y, r, c) {
        this.A(J.cir(x, y, r, c));
        return this
    }
    ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
        var ct = this, o, cX
        cX = this.st().cen().x
        o = (N(x) && U(y)) ? {y: x, x: cX} : U(x) ? {x: cX, y: 100} : {t: t, f: f, c: c, x: x, y: y}
        return J.T(o.t, o.f, o.c, o.x, o.y).a2(ct)
    }
    ct.cen = function () {
        return V(this.W() / 2, this.H() / 2)
    }
    ct.ct = function (x, y) {
        var ct = this, g = G(arguments), x = g[0], y = g[1]
        nCt = $Ct().a2(ct)
        if (N(g[0])) {
            nCt.XY(g[0], g[1])
        }
        if (F(g[0])) {
            g[0](nCt, ct)
        }
        if (g.p) {
            nCt.SL()
        }
        return nCt
    }
    ct.poly = function () {
        var ct = this // ?

        var h = ct.shape()
        h.poly.apply(h, arguments)
        return h
    }
    ct.art = function (x, y, c, C) {
        var g = G(arguments), ct = this, h
        if (U(x)) {
            alert('must at LEAST define x');
            return
        }
        if (!N(x)) {
            alert('x not a number! but must be, lah');
            return
        }

        y = N(g[1]) ? g[1] : x
        c = S(g[2]) ? oO('c', g[2]) : null
        C = S(g[2]) ? oO('c', g[3]) : c
        h = cjs.h(x, y, c, C).a2(ct)
        if (g.p) {
            h.drag()
        }
        return h
    }





    ct.mc = function () {
        return J.mc.apply(null, arguments).a2(this)
    }
    ct.t = ct.tick = function () {
        T.on('tick', this);
        return this
    }
    ct.A = function () {
        var ct = this, g = G(arguments), $b = $('body')

        if (U(g[0]) && ct.st()) {
            $b.A(
                ct.st().canvas
            )
        }
        else if (N(g[0])) {
            $b.A(ct.st().canvas).abs(g[0], g[1])
        }
        else {
            _.e(g, function (g) {
                ct.addChild(g)
            })
        }
        return ct
    }
    ct.bgI = ct.bg = function (i) {
        var ct = this;
        ct.bm(i, function (b) {
            ct.setChildIndex(b, 0)
        });
        return ct
    }
    ct.C = ct.bgC = function (c) {
        $(this.canvas).C(c);
        return this
    }
    ct.ch = ct.e = ct.each = function (func) {
        var children = []
        _.e(this.children, function (child) {
            children.push(child)
        })
        _.e(children,
            function (child) {
                func(child)
            }
        )
        return this
    }
    ct.xCh = ct.removeAll = function () {
        this.e(function (ch) {
            ch.rm()
        });
        return this
    }
    ct.auCl = ct.noAutoClear = function () {
        this.autoClear = false
        return this
    }
    ct.h = ct.shape = function (x, y, c, C, l, opt) {
        var ct = this,


            h = cjs.h(x, y, c, C, l, opt).a2(ct)

        return h.drag()
    }
    ct.cir = function (x, y, r, c, C, l, opt) {
        var ct = this
        return ct.h(x, y, c, C, l, opt).dc(r)
    }
    ct.circ = function (c, r, x, y) {
        var ct = this

        return cjs.cir(c, r, x, y).a2(ct)
    }
    ct.rec = function (c, W, H, x, y, a) {
        var ct = this, ct2, h,
            o = O(c) ? c :
                S(c) ? {c: c, w: W, h: H, x: x, y: y, a: a} :
                    N(c) ? {w: c, h: W, x: H, y: x, a: y}
                        : {}


        b2d.oDef(o)

        ct2 = ct.ct()

        h = ct2.h()
            .XY(o.x, o.y)
            .rot(o.a)
            .c(o.c, o.C, o.l)


        if (N(o.o)) {

            //$l('op: '+ o.o)
            h.opacity(o.o)
        }

        if (o.rg) {
            h.rg(o.c, o.C)
        }
        if (o.lg) {
            h.lg(o.c, o.C)
        }
        if (o.bm) {
            h.bm('me', function () {
                h.dr2(o.w, o.h)
            })
        }
        else {
            h.dr2(o.w, o.h)
        }
        return ct2
    }
    ct.bData = function (data) {
        return J.bm($.i().src($.parseJSON(data))).a2(this)
    }
    ct.M = ct.mug = function () {
        var ct = this, g = G(arguments), o
        o = N(g[0]) ? {sc: g[0], fn: g[1]} : {fn: g[0]}
        o.sc = N(o.sc) ? o.sc : 1
        o.fn = o.fn || function () {
        }
        $.G('myMug', function (m) {
            if (!m) {
                alert('!mug')
            }
            ct.bm(m, o.sc, o.fn, g.p ? '+' : null)
        })
        return ct
    }
    ct.clr = function () {
        var ct = this, arr = [];
        ct.ch(function (ch) {
            ch.rm()
        });
        return ct
    }
    ct.cir = function (x, y, r, c) {
        this.A(J.cir(x, y, r, c));
        return this
    }
    ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
        var ct = this, o, cX
        cX = this.st().cen().x
        o = (N(x) && U(y)) ? {y: x, x: cX} : U(x) ? {x: cX, y: 100} : {t: t, f: f, c: c, x: x, y: y}
        return J.T(o.t, o.f, o.c, o.x, o.y).a2(ct)
    }
    ct.cen = function () {
        return V(this.W() / 2, this.H() / 2)
    }
    ct.ct = function (x, y) {
        var ct = this, g = G(arguments), x = g[0], y = g[1]
        nCt = $Ct().a2(ct)
        if (N(g[0])) {
            nCt.XY(g[0], g[1])
        }
        if (F(g[0])) {
            g[0](nCt, ct)
        }
        if (g.p) {
            nCt.SL()
        }
        return nCt
    }


    function ctBM() {
        ct.bm = function () {
            alert('ct.bm')
            var ct = this, g = G(arguments), o, bmp
            o = N(g[1]) ? {i: g[0], sc: g[1], fn: g[2]} : {i: g[0], fn: g[1]}
            o.sc = N(o.sc) ? o.sc : 1


            /*

             if (J.iDU(o.i)) {
             o.i = $.i(o.i)
             }




             if (O(o.i)) {
             bmp = $Bm(o.i).a2(ct)
             if (o.fn) {
             o.fn(bmp)
             }
             return ct
             }



             $.i(o.i, function (e, i) {
             bmp = $Bm(i)
             bmp.a2(ct)
             bmp.rC()
             bmp.sXY(o.sc).a2(ct)
             //bm.XY( that.W()/2, that.H()/2 )
             // works with stage i guess.. but fucks with 'container' - cant check bounds
             if (g.n) {
             bmp.XY(-1000)
             }
             if (o.fn) {
             o.fn(bmp)
             }
             })
             */

            return ct
        }




    }

    ct.bm = function () {

        var ct = this, g = G(arguments), o, bm
        o = N(g[1]) ? {i: g[0], sc: g[1], fn: g[2]} : {i: g[0], fn: g[1]}
        o.sc = N(o.sc) ? o.sc : 1
        if (J.iDU(o.i)) {
            o.i = $.i(o.i)
        }

        if (O(o.i)) {
            bmp = $Bm(o.i).a2(ct)
            if (o.fn) {
                o.fn(bmp)
            }
            return ct
        }
        $.i(o.i, function (e, i) {
            bmp = $Bm(i)
            bmp.a2(ct)
            bmp.rC()
            bmp.sXY(o.sc).a2(ct)
            //bm.XY( that.W()/2, that.H()/2 )
            // works with stage i guess.. but fucks with 'container' - cant check bounds
            if (g.n) {
                bmp.XY(-1000)
            }
            if (o.fn) {
                o.fn(bmp)
            }
        })

        return ct
    }

    ct.mc = function () {
        return J.mc.apply(null, arguments).a2(this)
    }
    ct.t = ct.tick = function () {
        T.on('tick', this);
        return this
    }
    ct.A = function () {
        var ct = this, g = G(arguments), $b = $('body')

        if (U(g[0]) && ct.st()) {
            $b.A(
                ct.st().canvas
            )
        }
        else if (N(g[0])) {
            $b.A(ct.st().canvas).abs(g[0], g[1])
        }
        else {
            _.e(g, function (g) {
                ct.addChild(g)
            })
        }
        return ct
    }
    ct.bgI = ct.bg = function (i) {
        var ct = this;
        ct.bm(i, function (b) {
            ct.setChildIndex(b, 0)
        });
        return ct
    }
    ct.C = ct.bgC = function (c) {
        $(this.canvas).C(c);
        return this
    }
    ct.ch = ct.e = ct.each = function (func) {
        var children = []
        _.e(this.children, function (child) {
            children.push(child)
        })
        _.e(children,
            function (child) {
                func(child)
            }
        )
        return this
    }
    ct.xCh = ct.removeAll = function () {
        this.e(function (ch) {
            ch.rm()
        });
        return this
    }
    ct.auCl = ct.noAutoClear = function () {
        this.autoClear = false
        return this
    }
    ct.st = function () {
        return this.stage
    }
    ct.dot=function(c, x, y){
        var that = this,
            s=this,
            dot,
            tween

        if(b2d.isGPoly(c)){
            _.each(c.verts(), function(v){ s.dot(V(v))  })
            return this}

        if(A(c)){

            _.each(c,
                function(G){
                    if(A(G)){s.dot.apply(s, G)}
                    else{s.dot(G)}
                })

            return }

        if(!S(c)){y=x; x=c; c='y'}

        if(O(x)){y=x.y; x=x.x}

        x = N(x)?x : s.W()/2
        y = N(y)?y : s.H()/2

        //dot = s.circ(x,y, 6,  oO('c', c)).drag()//.opacity(.4)

        //dot = s.h(x,y).circ(0,0, 6,  oO('c', c)).drag()//.opacity(.4)

        dot =   s.h(x,y).circ(8, c,c).drag()

        tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

        dot.$$(function(){tween.toggle()})

        dot.N('dot')

        return s}
    ct.squareDot=function(color, x, y){var squareDot, tween
        if(!S(color)){y=x; x=color; color='orange'}
        if(O(x)){y= x.y;x= x.x  }
        x= N(x)? x:300
        y= N(y)? y:300
        __squareDot = squareDot = J.rect(20, 20, oO('c', color))//.opacity(.4)
        this.A(squareDot.XY(x, y)//.drag()
        )
        //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

        // dot.$$(function(){tween.toggle()})

        return this}
    ct.chalk=function(){
        var height = 50,
            that=this,
            text

        _.each(arguments, function(arg){

            text = J.chalk(arg).Y(height).X(50 - that.X())
            height+=40
            that.A(text)

        })


        return text}
    ct.pen = function self(arg){

        var that=this


        if(O(self.text)){
            self.text.remove()
        }

        self.text = J.chalk(arg).Y(50).X(50 - that.X())

        that.A(self.text)


        return self.text}
}
function stageProto() {
    st.snap = function (f) {
        var st = this
        $.P('img', {d: st.toDataURL()})//, dats: o.x.dats
        $.in(1, f)
        return st
    }
    st.W = function (a) {
        if (U(a)) {
            return this.canvas.width
        }
        ;
        this.canvas.width = a;
        return this
    }
    st.H = function (a) {
        if (U(a)) {
            return this.canvas.height
        }
        ;
        this.canvas.height = a;
        return this
    }
    st.WH = function (w, h) {
        var st = this;
        if (U(w)) {
            return V(st.W(), st.H())
        }
        if (N(w)) {
            st.W(w)
        }
        if (N(h)) {
            st.H(h)
        }
        ;
        return st
    }
    st.hW = function () {
        return this.W() / 2
    }
    st.hH = function () {
        return this.H() / 2
    }
    st.ab = st.abs = function (x, y) {
        this.can.abs(x, y);
        return this
    }
    st.Bm = function (i) {
        return $Bm(i).a2(this)
    }
    st.N = st.next = function (next) {
        if (U(next)) {
            return this.nextStage
        }
        ;
        this.nextStage = next;
        return this
    }
    st.trDr = function () {
        var st = this
        st._md = 0
        st.MD(function () {
            st._md = 1
        })
        st.MU(function () {
            st._md = 0
        })
        return this
    }
    st.du = function () {
        return this.canvas.toDataURL()
    }
    st.snap = function (f) {
        var st = this
        $.P('img', {d: st.toDataURL()})//, dats: o.x.dats
        $.in(1, f)
        return st
    }
    st.W = function (a) {
        if (U(a)) {
            return this.canvas.width
        }
        ;
        this.canvas.width = a;
        return this
    }
    st.H = function (a) {
        if (U(a)) {
            return this.canvas.height
        }
        ;
        this.canvas.height = a;
        return this
    }
    st.WH = function (w, h) {
        var st = this;
        if (U(w)) {
            return V(st.W(), st.H())
        }
        if (N(w)) {
            st.W(w)
        }
        if (N(h)) {
            st.H(h)
        }
        ;
        return st
    }
    st.hW = function () {
        return this.W() / 2
    }
    st.hH = function () {
        return this.H() / 2
    }
    st.ab = st.abs = function (x, y) {
        this.can.abs(x, y);
        return this
    }
    st.Bm = function (i) {
        return $Bm(i).a2(this)
    }
    st.N = st.next = function (next) {
        if (U(next)) {
            return this.nextStage
        }
        ;
        this.nextStage = next;
        return this
    }
    st.trDr = function () {
        var st = this
        st._md = 0
        st.MD(function () {
            st._md = 1
        })
        st.MU(function () {
            st._md = 0
        })
        return this
    }
    st.du = function () {
        return this.canvas.toDataURL()
    }


    mouser()
    function mouser(){
        st.MD=function(fn){ return this.on( 'stagemousedown' ,fn)}
        st.MM=function(fn){return this.on( 'stagemousemove' ,fn)}
        st.MU=function(fn){ return this.on( 'stagemouseup' ,fn)}
        st.mO=function(){var g=G(arguments),st=this
            if(U(g[0]) || g[0]){st.enableMouseOver(N(g[0])?g[0]:true)}
            else {st.enableMouseOver(false)  }
            return st}
        st.eMO=function(data){this.enableMouseOver(data); return this}
        st.m=function(ob){var st=this
            if(U(ob)){return J.Pt(st.mouseX, st.mouseY)}
            if(O(ob)){if(ob.d){st.MD(ob.d)}; if(ob.u){st.MU(ob.u)}; if(ob.m){st.MM(ob.m)}}
            return st}
        st.mx=st.mX=function(){return this.m().x}
        st.my=st.mY=function(){return this.m().y}
    }

}

$Ct = function () {
    return new J.Container()
}
$St = function (a, b, c, d, e) {
    var g = G(arguments), st
    st = A(g[0]) ? new J.Stage(g[0][0]) :
        O(g[0]) ? new J.Stage($(g[0])[0]) :
            new J.Stage($.c(g[0], g[1], g[2], g[3], g[4]) [0])
    st.c = st.can = $(st.canvas)
    if (g.p) {
        st.can.dg()
    }
    if (!g.n) {

        st.can.A()
    }
    return st.t()
}
St = function () {
    z()
    var g = G(arguments)
    st = s = $St(g[0] || 'p', 1200, 600)
    h = $H(0, 0).a2(s)
    if (g.p) {
        SL(h)
    }
    return s
}
cjs.chalk = function (t, c) {
    if (O(t)) {
        t = 'x: ' + t.x + ', ' + 'y: ' + t.y
    }
    return new J.Text(t, "26px Arial", oO('c', c || 'white')).XY(50, 50)
}
cjs.M = function (rot) {
    var m = new cjs.Matrix2D()
    if (N(rot)) {
        m.rotate(rot)
    }
    return m
}
cjs.isShape = function (h) {
    return O(h) && h.graphics
}
cjs.graphics = function (a) {
    return new cjs.Graphics(a)
}
cjs.isCont = function (cont) {
    if (O(cont)) {
        if (cont.addContainer) {
            return true
        }
        else {
            return false
        }
    }
}
cjs.rulers = function () {
    var d1 = $.div('b', 100, 100).drag().opacity(.3)
    $.div('r', 100, 300).drag().opacity(.3)
    return d1
}
cjs.circ = cjs.circle = function (r, c) {
    if (!N(r)) {
        c = r;
        r = 8
    }
    c = oO('c', c || 'z')
    return cjs.h().c(c).dc(r)
}
cjs.cir = function (c, r, x, y) {
    if (!S(c)) {
        y = x;
        x = r;
        r = c;
        c = 'y'
    }
    y = _.tN(y)
    x = _.tN(x)
    r = _.tN(r, 50)
    return cjs.h().c(c).dc(x, y, r)
}
cjs.circle2 = function (r, z, x, y) {
    gx = new cjs.Graphics()
    if (!S(r)) {
        return cjs.circle2('red', r, z, x)
    }
    z = _.tN(z, 32)
    x = _.tN(x, 100)
    y = _.tN(y, 100)
    gx.ss(z / 8).f(r, 'black').dc(z)
    return cjs.h(gx).XY(x, y)
}
cjs.circle3 = function (x, y, r, c, C) {

    var h = cjs.shape()
    if (O(x)) {
        return cjs.circle3(x.x, x.y, x.r, x.c, x.C)
    }

    x = _.tN(x)
    y = _.tN(y)
    r = _.tN(r, 8)

    h.cir(x, y, r, c || 'w', C || 'z')
    SL(h)
    return h
}
cjs.ball = function (r, c, C) {//canon

    var b = cjs.circle(0, 0, r, c, C)

    b.d = r + r

    b.T = function (a) {
        if (U(a)) {
            return b.y() - b.r
        }
        b.y(a + b.r);
        return b
    }

    b.B = function (a) {

        if (U(a)) {
            return b.y() + b.r
        }

        b.y(a - b.r)

        return b
    }


    b.L = function (a) {
        if (U(a)) {
            return b.x() - b.r
        }
        b.x(a + b.r);
        return b
    }
    b.R = function (a) {
        if (U(a)) {
            return b.x() + b.r
        }
        b.x(a - b.r);
        return b
    }
    b.F = 1
    b.fall = function (r) {
        b.t(function () {
            if (r) {
                if (ballBox(b, r)) {
                    b.F = 0
                } else {
                    b.F = 1
                }
            }
            if (b.F) {
                b.y(10, '+')
            }
        })
    }

    return b
}
cjs.diamond = function self(width, height, fc, sc) {

    fc = fc || 'green'
    sc = sc || 'white'

    width = width || 100
    height = height || width
    halfwidth = width / 2
    halfheight = height / 2
    var h = new createjs.Shape()
    h.graphics.f(fc).s(sc)
        .mt(0, -halfheight)
        .lt(-halfwidth, 0).lt(0, halfheight)
        .lt(halfwidth, 0).lt(0, -halfheight)

    return h
}
cjs.rect2 = function self(width, height, x, y, fc, sc) {
    width = width || 100
    height = height || width

    x = N(x) ? x : 0;
    y = N(y) ? y : 0
    fc = fc || 'green'
    sc = sc || 'white'

    halfwidth = width / 2
    halfheight = height / 2
    var h = new createjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth + x, -halfheight + y)
        .lt(-halfwidth + x, halfheight + y)
        .lt(halfwidth + x, halfheight + y)
        .lt(halfwidth + x, -halfheight + y)
        .lt(-halfwidth + x, -halfheight + y)

    return h
}
cjs.rect = function self(width, height, fc, sc) {
    width = width || 100
    height = height || width
    fc = fc || 'green'
    sc = sc || 'white'

    halfwidth = width / 2
    halfheight = height / 2
    var h = new cjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth, -halfheight)
        .lt(-halfwidth, halfheight).lt(halfwidth, halfheight)
        .lt(halfwidth, -halfheight).lt(-halfwidth, -halfheight)

    return h
}
cjs.box = function (w, h, fc, sc) {

    w = w || 200

    h = h || w

    var b = rct(
        0 - w / 2, 0 - h / 2, w, h, fc, sc
    )

    b.wr = w / 2

    b.hr = h / 2

    b.wd = w

    b.hd = h


    b.top = b.T = function (a) {
        if (U(a)) {
            return b.y() - b.hr
        }

        b.y(a + b.hr)

        return b
    }

    b.bottom = b.B = function (a) {

        if (U(a)) {
            return b.y() + b.hr
        }


        b.y(a - b.hr)

        return b
    }

    b.left = b.L = function (a) {

        if (U(a)) {
            return b.x() - b.wr
        }

        b.x(a + b.wr)

        return b
    }

    b.right = b.R = function (a) {

        if (U(a)) {
            return b.x() + b.wr
        }
        b.x(a - b.wr);
        return b
    }

    b.fall = function () {
        b.t(function () {
            if (b.F) {
                b.y(40, '+')
            }  //****
            if (ballBox(b, r)) {
                b.F = 0
            }
        })
    }

    return b
}
cjs.ballBox = function (bl, bx, buff) {
    buff = buff || 100
    var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
        bl.x() >= bx.left() && bl.x() <= bx.right()
    if (b) {
        bl.bottom(bx.top())
    }
    return b
}
cjs.RECT = function (c, W, H, x, y, a) {
    var g = G(arguments), ct = cjs.ct(), h, o;
    if (O(c)) {
        o = c
    } else if (S(c)) {
        o = {c: c, w: W, h: H, x: x, y: y, a: a}
    }
    o = b2d.oDef(o)


    h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot(o.a)
    if (o.bm) {
        h.bm('me', function () {
            h.dr2(o.x, o.y, o.w, o.h)
        });
        return h
    }
    if (o.rg) {
        h.rg(o.c, o.C)
    }
    if (o.lg) {
        h.lg(o.c, o.C)
    }
    h.dr2(o.x, o.y, o.w, o.h)

    return h
}



oDef = function(o){o=o||{}
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    o.w =  N(o.w, 50)
    o.h =  N(o.h, 50)
    return o
}
cjs.me = function (fn) { Q(['me'], function (q) {fn(q.getResult('me'))}) }

$h = cjs.h = cjs.shape = cjs.shp = function (x, y, c, C, l) {
    var g = G(arguments),
        x = g[0],
        y = g[1],
        c = g[2],
        C = g[3],
        l = g[4],
        h

    if (cjs.isShape(x)) {
        return new cjs.Shape(x.graphics)
    }

    h = new cjs.Shape()

    if (S(x)) {
        h.c(x, y, c)
    }

    else {

        if (N(x)) {
            h.X(x)
        }
        if (N(y)) {
            h.Y(y)
        }

        if (S(c)) {
            h.c(c, C, l)
        }


        else if (N(c)) {
            h.l(c)
        }
    }
    //if(g.N){h.drag()}
    return h
}


