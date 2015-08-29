J = cjs
h =  cjs.Shape.prototype
ct = cjs.Container.prototype
gx = cjs.Graphics.prototype
st = s = p = cjs.Stage.prototype
 T= cjs.Ticker

gxProto()
shapeProto()
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
function shapeProto() {
    h.poly = function (V, c, C, l) {

//*** this is s.poly.. not h.poly !
        var h = this, g = G(arguments),
            o = A(g[0]) ? {v: g[0], c: g[1], C: g[2], l: g[3]}//array must come first b/c its an obj
                : O(g[0]) ? g[0] : {}
        //?
        b2d.oDef(o);
        h.ef().es() // ???
        //?
        h.c(o)
        if (o.bf) {
            h.bf('me', function () {
                h.lt(o.v).cp()
            })
        }
        else {
            h.lt(o.v).cp()
        }
        return h
    }
    h.lg = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o
        if (A(g[0])) {
            return me.apply(null, g[0])
        }

        o = O(g[0]) ? g[0]
            : _.extend({c1: g[0], c2: g[1]},
            N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
                : N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
                : N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})

        o.c1 = oO('c', o.c1 || 'z');
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = _.tN(o.s1);
        o.s2 = _.tN(o.s2, 1)
        o.x1 = _.tN(o.x1);
        o.y1 = _.tN(o.y1)
        o.x2 = _.tN(o.x2);
        o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100

        return o
    }
    h.rg = function (o) {
        var h = this, gx = h.graphics, g = G(arguments), o

        if (A(g[0]) && A(g[1])) {
            $l('AA')
            h.graphics.rf(
                [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7])
            return h
        }


        o = O(g[0]) ? g[0] :
            S(g[1]) ? _.extend({c1: g[0], c2: g[1]},
                N(g[7]) ? {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
                    : N(g[5]) ? {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
                    : N(g[4]) ? {x2: g[2], r1: g[3], r2: g[4]}
                    : N(g[3]) ? {r1: g[2], r2: g[3]} : {r2: g[2]})

                : S(g[0]) ? {c2: g[0]} : {}


        b2d.grad(o)

        o.x2 = _.tN(o.x2, o.x1)
        o.y2 = _.tN(o.y2, o.y1)
        o.r1 = _.tN(o.r1, 1);
        o.r2 = _.tN(o.r2, 100)
        return o
    }
    h.rf = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o

        if (A(g[0])) {
            return me.apply(h, g[0])
        }


        o = h.rg.apply(h, g)

        gx.rf(
            [o.c1, o.c2],
            [o.s1, o.s2],
            o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)

        return h


    }
    cjs.me = function (fn) {
        Q(['me'],
            function (q) {
                fn(q.getResult('me'))
            })
    }
    h.z = h.clr = function () {
        this.graphics.clear();
        return this
    }
    h.c = h.f = function (c, C, l) {
        var h = this, gx = h.graphics,
            g = _.toArray(arguments), o

        o = O(g[0]) ? g[0] :
            g[0] == '*' ? {c: '*'} :
                g[0] == '**' ? {c: '**'} :
                    g[0] == '*' ? {c: '***'} :
                        U(g[0]) ? {c: 'z', C: 'w', l: 6} :
                            N(g[1]) ? {c: g[0], l: g[1]} :
                                N(g[0]) ? {l: g[0], C: g[1]} ://?
                                {c: g[0], C: g[1], l: g[2]}


        if (A(o.c)) {
            if (N(o.c[1])) {
                o.l = o.c[1];
                o.c = o.c[0]
            }
            else if (N(o.c[0])) {
                o.l = o.c[0];
                o.C = o.c[1]
            }
            else {
                o.l = o.c[2];
                o.C = o.c[1];
                o.c = o.c[0]
            }
        }
        if (A(o.C)) {
            o.l = o.C[1];
            o.C = o.C[0]
        }

        if (o.c == 0) {
            gx.f(null);
            o.c = 'X'
        }
        if (o.C == 0) {
            gx.s(null);
            o.C = 'X'
        }
        if (o.c == 00) {
            gx.f(null);
            gx.s(null);
            o.c = 'X';
            o.C = 'X'
        }
        if (o.c == '*') {
            o.c = $r()
        }
        if (o.C == '*') {
            o.C = $r()
        }
        if (o.c == '**') {
            o.c = $r();
            o.C = $r()
        }
        if (o.c == '***') {
            $l('***')

            o.c = $r();
            o.C = $r();
            o.l = R(20)
        }
        if (S(o.c)) {
            gx.f(oO('c', o.c))
        }
        if (S(o.C)) {
            gx.s(oO('c', o.C))
        }
        if (N(o.l)) {
            h.l(o.l)
        }
        if (o.lf) {
            o.lf = O(o.lf) ? o.lf : {}
            if (o.r) {
                o.r = _.tN(o.r)//?
                o.x = _.tN(o.x)
                o.y = _.tN(o.y)
                o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : _.tN(o.lf.x1) + o.x - o.r
                o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : _.tN(o.lf.y1) + o.y - o.r
                o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : _.tN(o.lf.x2) + o.x - o.r
                o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : _.tN(o.lf.y2) + o.y + o.r
            }
            /*
             $l('r: ' + o.r)
             $l('x: ' + o.x)
             $l('y: ' + o.y)
             $l('x1: '+ o.lf.x1)
             $l('y1: '+ o.lf.y1)
             $l('x2: '+ o.lf.x2)
             $l('y2: '+ o.lf.y2)

             */
            h.lf(o.lf)
        }
        if (o.rf) {
            o.rf = O(o.rf) ? o.rf : {}

            o.c = [2, 'z']
            if (o.r) {
                o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
                o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y

                o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
                o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20

                o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
            }

            h.rf(o.rf)
        }
        if (o.ls) {
            o.ls = O(o.ls) ? o.ls : {}
            if (o.r) {
                o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
                o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
                o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
                o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
            }
            h.ls(o.ls)
        }
        if (o.rs) {
            o.rs = O(o.rs) ? o.rs : {}
            if (o.r) {
                o.rs.x1 = _.tN(o.rs.x1) + o.x
                o.rs.y1 = _.tN(o.rs.y1) + o.y
                o.rs.x2 = _.tN(o.rs.x2) + o.x
                o.rs.y2 = _.tN(o.rs.y2) + o.y
                o.rs.r2 = _.tN(o.rs.r2) + o.r
            }
            h.rs(o.rs)
        }


        if (o.bs) {
            h.bs(o.bs)
        }

        if (o.bf) {
            h.bf(o.bf)
        }

        return h

    }
    h.cir = h.circ = function (x, y, r, c, C, l) {//= h.circle
        var h = this, gx = h.graphics,
            g = G(arguments), o   //h.ef().es()

        if (O(g[0]) && A(g[1])) {

            _.e(g[1], function (c) {

                h.cir(_.extend(c, g[0]))

            })
            return h
        }

        o = O(g[0]) ? g[0]
            : N(g[2]) ? {x: g[0], y: g[1], r: g[2], c: g[3], C: g[4], l: g[5]}
            : N(g[1]) ? {x: g[0], y: g[1], r: 50, c: g[2], C: g[3], l: g[4]}
            : {x: 0, y: 0, r: g[0], c: g[1], C: g[2], l: g[3]}

        o.x = _.tN(o.x);
        o.y = _.tN(o.y);
        o.r = _.tN(o.r, 50)
        o.c = o.c || 'z';
        o.C = o.C || 'w'
        if (N(o.bf)) {
            o.bm = 'me'
        }

        h.c(o)
        if (o.bf) {
            h.bf('me', function () {
                h.dc(o)
            })
        } else {
            h.dc(o)
        }
        return h
    }
//h.circle=function(o){var h=this; h.c(o).dc(o); return h}
    h.C = h.s = function (C, l) {
        var h = this, gx = h.graphics

        gx.s(oO('c', C))

        if (N(l)) {
            h.l(l)
        }

        return h

    }
    h.l = h.ss = function (l, b, c) {
        var h = this, gx = h.graphics;
        gx.ss(l || 1, b, c)
        return h
    }
    h.bf = function (i, fn, c) {
        var h = this, gx = h.graphics


        if (S(i)) {

            $.img(i, function (i) {
                gx.bf(i[0])
                if (F(fn)) {
                    fn(i[0])
                }
            })
        }


        else {

            if (O(fn)) {
                gx.bf(i, null, fn)
            } else {
                gx.bf(i, fn, c)
            }
        }


        return h
    }
    h.bs = function (i) {
        var h = this;
        h.graphics.bs(i);
        return h
    }
    h.ef = function () {
        var h = this, gx = h.graphics
        gx.f()
        return h
    }
    h.es = function () {
        var h = this, gx = h.graphics
        gx.es()
        return h
    }
    h.cp = function () {
        this.graphics.cp();
        return this
    }
    h.lt = function (x, y) {
        var h = this, gx = h.graphics, v
        if (A(x) && O(x[0])) {
            return h.lt.apply(h, x)
        }
        if (N(x)) {
            gx.lt(x, y);
            return h
        }
        _.e(arguments, function (v) {
            v = V(v)
            h.lt(v.x, v.y)
        })
        return h
    }
    h.mt = function (x, y) {//h.pol=
        var h = this,
            gx = h.graphics, g = arguments, x = g[0], y = g[1], v
        if (A(g[0]) && O(g[0][0])) {
            _.e(g, function (v) {
                h.mt.apply(h, v)
            });
            return h
        }


        if (N(x)) {
            v = V(x, y);
            gx.mt(v.x, v.y)
        }

        else {
            v = V(_.f(g))
            h.mt(v.x, v.y)
            _.e(_.r(g), function (v) {
                v = V(v)
                h.lt(v.x, v.y)
            })
        }

        return h
    }
    h.bmCir = function (o) {
        var h = this
        o = o || {}
        o.i = o.i || 'me'
        o.circs = o.circs || []
        $.img(o.i, function (i) {
            i = i[0]
            _.each(o.circs, function (c) {
                h.bf(i)
                h.dc(c)
                h.ef()
            })
        })
        return h
    }
    h.bmV = function (o) {
        var h = this
        o = o || {}
        o.i = o.i || 'me'

        $.img(o.i, function (i) {
            i = i[0]
            _.e(o.v, function (v) {

                h.bf(i)
                h.lt(v)
                h.ef().cp()

            })
        })

        return h
    }
    h.dc = function (x, y, r) {
        var h = this, gx = h.graphics,
            g = G(arguments), o


        if (A(g[0]) && O(g[1])) {
            _.e(g, function (c) {
                h.dc(c)
            });
            return h
        }

        if (A(g[0])) {
            return h.dc.apply(h, g[0])
        }

        o = O(g[0]) ? g[0] :
            N(g[2]) ? {x: g[0], y: g[1], r: g[2]} :
                N(g[0]) ? {r: g[0]} : {}

        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.r = _.tN(o.r, 100)

        //h.mt(o.x, o.y).cp()

        gx.dc(o.x, o.y, o.r)
        h.C()
        return h

    }

//GOAL CIRCLE MUST BECOME CIR
    h.dr = function () {
        var h = this,
            gx = h.graphics,
            g = G(arguments),
            o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
                N(g[0]) ? {w: g[0], h: g[1]} :
                    O(g[0]) ? g[0] : {}


        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)

        gx.dr(o.x, o.y, o.w, o.h)
        return h

    }
    h.dr2 = function (x, y, W, H) {
        var h = this, g = G(arguments), o

        if (O(g[0]) && O(g[1])) {
            _.e(g, function (r) {
                h.dr2(r)
            })
            return h
        }

        o = O(g[0]) ? g[0] :
            U(g[2]) ? {w: g[0], h: g[1]} :
            {x: g[0], y: g[1], w: g[2], h: g[3]}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 50)
        o.h = _.tN(o.h, o.w)
        h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
        return h
    }
    h.rectx = function (x, y, W, H, c, C) {
        var h = this


        var o = {
            x: x, y: y, w: W, h: H, c: c, C: C
        }

        return h.c(o).dr2(o.x, o.y, o.w, o.h)

    }
    h.rec = h.rect = function (c, C, x, y, w, H, l) {
        var h = this, g = G(arguments)//h.rexx=
        o = O(c) ? c :
            S(C) ? {c: c, C: C, x: x, y: y, w: w, h: H, l: l} :
                S(c) ? {c: c, x: C, y: x, w: y, h: w, l: H} :
                {x: c, y: C, w: x, h: y, c: w, C: H}
        h.c(o)
        if (o.i) {
            h.bmF(o.i, fun);
            return
        }
        if (o.lf) {
            h.lf({
                c: o.c || 'z', C: o.C || 'w', s: 0, S: 1,
                x: o.x - o.w / 2,
                y: o.y - o.h / 2,
                X: o.x - o.w / 2,
                Y: o.y + o.h / 2
            })
        }
        h.dr2(o)
        return h
        function fun() {
            h.dr2(o)

            //   h.mt(  [o.x-o.w/2, o.y+o.h/2],   [o.x-o.w/2, o.y-o.h/2],    [o.x+o.w/2, o.y-o.h/2],  [o.x+o.w/2, o.y+o.h/2])
        }
    }
    h.lf = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o

        if (A(g[0])) {
            return me.apply(h, g[0])
        }

        o = h.lg.apply(h, g)

        gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)

        return h
    }
    h.ls = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o
        if (A(g[0])) {
            return me.apply(h, g[0])
        }
        o = h.lg.apply(h, g)
        gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
        return h
    }

    h.rs = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o
        if (A(g[0])) {
            return me.apply(h, g[0])
        }
        o = h.rg.apply(h, g)
        gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
        return h
    }


    h.col = h.fs = function () {
        this.graphics.fs.apply(
            this.graphics, arguments)
        return this
    }
    h.sC = function () {
        this.graphics.sC.apply(this.graphics, arguments)
        return this
    }
    h.rGx = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {

        var args = _.toArray(arguments), circs, len

        cols = _.map(cols,
            function (col) {
                return oO('c', col)
            })


        circs = _.rest([1, 2, 3, 4, 5], 2)
        len = circs.len  //use switch!

        x1 = 0;
        y1 = 0;
        r1 = 0;
        x2 = 0;
        y2 = 0;
        r2 = 50

        if (len == 1) {
            r2 = circs[0]
        }

        else if (len == 2) {
            r1 = circs[0];
            r2 = circs[1]
        }

        else if (len == 3) {
            x1 = x2 = circs[0]
            y1 = y1 = circs[1]
            r2 = circs[2]
        }

        else if (len == 4) {
            x1 = x2 = circs[0]
            y1 = y1 = circs[1]
            r1 = circs[2]
            r2 = circs[3]
        }

        else if (len == 5) {
            x1 = circs[0];
            y1 = circs[1];
            x2 = circs[2];
            y2 = circs[3]
            r2 = circs[4]
        }

        else if (len == 6) {
            x1 = circs[0];
            y1 = circs[1];
            x2 = circs[2];
            y2 = circs[3]
            r1 = circs[4];
            r2 = circs[5]
        }

        this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)

        return this
    }
    h.lGx = h.linGrad = function () {

        var args = _.toArray(arguments)

        args[0] = _.map(args[0], function (col) {
            return oO('c', col)
        })

        this.graphics.beginLinearGradientFill.apply(
            this.graphics, args)
        return this
    }

    h.dr2x = function (x, y, W, H) {
        var h = this


        if (U(W)) {
            W = x;
            H = y;
            x = 0;
            y = 0
        }

        h.dr(-W / 2 + x, -H / 2 + y, W, H)


        return h
    }


    // s.B = function(x,y){return this.ct(x,y).drag() }

    /*
     $a1=function(ob, g, c){

     ob.apply(c||ob,  g)

     }


     $a = function(gx, met, g){

     gx[met].apply(gx, g)

     }


     $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.app=function(met,g){var gx=this

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     }
     */
    h.C2 = function (C, l) {
        var h = this, gx = h.graphics, g = G(arguments)
        o = O(g[0]) ? g[0]
            :
        {C: [0], l: g[1]}
        gx.s(o.C ? oO('c', o.C) : null)
        if (N(o.l)) {
            h.l(o.l)
        }
        return h

    }


    h.copy = h.same = function () {
        return $h(this)
    }


    //******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
    h.rc = h.roundRectComplex = function () {
        var h = this, gx = h.graphics
        gx.drawRoundRectComplex.apply(gx, arguments)
        return h
    }
    h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
        var h = this, gx = h.graphics,

            g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]

        o = N(g[3]) ? {
            x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
        } :

            N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

                O(g[0]) ? g[0] : {}

        o.a = _.tN(o.a)
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.p = cjs.cap(o.p, 0, .99)

        gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
        return h
    }
    h.drawPolygons = function (paths, C, c) {
        var h = this
        h.C(C)
        if (c) {
            h.c(c)
        }
        _.each(paths, function (p) {
            h.drawPolygon(p)
        })
        return h
    }
    h.de = h.ell = function () {
        var h = this,
            gx = h.graphics,
            g = G(arguments),
            o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
                N(g[0]) ? {w: g[0], h: g[1]} :
                    O(g[0]) ? g[0] : {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)
        gx.drawEllipse(o.x, o.y, o.w, o.h)
        return h
    }
    h.de2 = function (x, y, W, H, r) {
        var h = this
        h.de(-W / 2 + x, -H / 2 + y, W, H, r)
        return h
    }
    h.rr = function () {
        var h = this,
            gx = h.graphics,
            g = G(arguments),

            o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
                N(g[1]) ? {w: g[0], r: g[1]} :
                    N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
                        O(g[0]) ? g[0] : {}


        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)

        gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
        return h
    }
    h.rr2 = function (x, y, W, H, r) {
        var h = this
        h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
        return h
    }


    ROUNDREC = function () {
        St()
        h.c('b', 'r', 5).dc(100, 100, 100)
        h.dr(300, 200, 100, 50)
        h.dr2(500, 200, 100, 50)
        h.rr2(500, 200, 100, 50, 50)
        h.de2(500, 200, 100, 50)

        s.dot(100, 100)
        s.dot(300, 200)
        s.dot(500, 200)
        s.dot(500, 200)
        s.dot(500, 200)
    }


    h.drawPolygonYesNo = function (V, c, C, l) {
        var h = this, //h.drawConnectedLines =

            n = V.length

        h.c(c, C, l)

        _.each(V, function (v) {

            v.X = v.x
            v.Y = v.y

        })

        if (n >= 3) {
            h.mt(V[0]) //move to the FIRST//lineTo the REST

            T(n, function (i) {
                h.lt(V[i % n])
            })
        } //just a clever way to start from 1

        return h
    }

// h.cir=  function(r,x,y,c,C){var h = this, gx = h.graphics; return N(x) ?  h.c(c,C).dc(x,y,r) : h.c(x,y).dc(r)  } //h.cir2=
    h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        h.bezierCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.quad = h.qt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        h.quadraticCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.arc = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        /*
         Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
         For example, to draw a full circle with a radius of 20 centered at (100, 100):
         arc(100, 100, 20, 0, Math.PI*2)
         */

        h.arc(x, y, r, startA, endA, aCW)

        return h
    }
    h.arc2 = function (x, y, X, Y, r) {
        var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
        gx.arcTo(x, y, X, Y, r)
        return h
    }


    h.dcWorking = function (x, y, r) {
        var h = this, gx = h.graphics

        if (N(r)) {
            gx.dc(x, y, r)
        }

        else if (N(y)) {
            gx.dc(x, y, 100)
        }

        else if (N(x)) {
            gx.dc(0, 0, x)
        }
        else {
            gx.dc(0, 0, 100)
        }

        return h
    }

    h.rrx = function (x, y, W, H, r) {
        var h = this, gx = h.graphics
        gx.drawRoundRect(x, y, W, H, r)
        return h
    }
    h.dex = h.ellx = function (x, y, W, H) {
        var h = this, gx = h.graphics

        gx.drawEllipse(x, y, W, H)

        return h
    }
    h.drx = function (x, y, W, H) {
        var h = this, gx = h.graphics
        if (N(H)) {
            gx.dr(x, y, W, H)
        }
        else if (N(W)) {
            gx.dr(x, y, W, W)
        }
        else if (N(y)) {
            gx.dr(0, 0, x, y)
        }
        else if (N(x)) {
            gx.dr(0, 0, x, x)
        }
        else {
            gx.dr(0, 0, 100, 100)
        }
        return h
    }


    h.ss = function (a) {
        var h = this, gx = h.graphics, g, o


        if (S(a)) {
            this.C(a)
            return this.ss.apply(this, _.rest(arguments))
        }


        g = G(arguments)
        o = {
            l: g[0],
            caps: g[1],
            jts: g[2],
            mit: g[3],
            ignSc: false
        }

        o.l = N(o.l) ? o.l : 4


        if (o.caps == 'r') {
            o.caps = 'round'
        }
        if (o.caps == 's') {
            o.caps = 'square'
        }
        if (o.caps == 'b') {
            o.caps = 'butt'
        }

        if (o.mit == 'r') {
            o.mit = 'round'
        }
        if (o.mit == 'm') {
            o.mit = 'miter'
        }
        if (o.mit == 'b') {
            o.mit = 'bevel'
        }

        o.jts = o.jts || 0
        if (U(o.mit)) {
            o.mit = 100
        }

        if (g.n) {
            o.ignSc = true
        }

        gx.ss(o.l, o.caps, o.jts, o.mit, o.ignSc)


        return h
    }
    h.dc = function (x, y, r) {
        var h = this, gx = h.graphics


        if (U(y)) {
            gx.dc(0, 0, x)
        }
        else {
            gx.dc(x, y, r)
        }
        return h
    }
    h.mt = function (a, b, c, d, e) {
        var h = this, gx = h.graphics, v

        if (O(a)) {
            v = V(a)
            gx.mt(v.x, v.y)

        }
        else {
            gx.mt(a, b, c, d, e)
        }

        return h
    }
    h.dl = h.line = function () {

        var g = G(arguments), o

        o = N(g[0]) ? {x1: g[0], y1: g[1], x2: g[2], y2: g[3]} :

        {x1: g[0].x, y1: g[0].y, x2: g[1].x, y2: g[1].y}

        this.mt(o.x1, o.y1).lt(o.x2, o.y2)
        return this
    }
    h.lt = function (a, b, c, d, e) {
        var h = this, gx = h.graphics, v

        if (O(a)) {
            v = V(a)
            gx.lt(v.x, v.y)

        }
        else {
            gx.lt(a, b, c, d, e)
        }

        return h
    }
    h.C = h.s = function (a, b, c, d, e, f) {
        var h = this, gx = h.graphics
        if (N(a)) {
            gx.s((a > 0 && a < 1) ? J.rgb(0, 0, 0, a) : J.rgb(a, b, c, d))
        }
        else if (S(a)) {

            gx.s(oO('c', a))


        }

        else {
            gx.s(a, b, c, d, e)
        }
        return h
    }
    h.c = h.f = function (a, b, c, d, e) {
        var h = this, gx = h.graphics

        if (N(a)) {


            gx.f((a > 0 && a < 1) ? J.rgb(0, 0, 0, a) : J.rgb(a, b, c, d))
        }

        else if (S(a)) {

            gx.f(oO('c', a))

        }

        else {
            gx.f(a, b, c, d, e)
        }

        return h
    }
    h.qt = function (a, b, c, d, e, f) {
        var h = this, gx = h.graphics

        if (O(a)) {
            a = V(a)
            b = V(b)

            gx.qt(a.x, a.y, b.x, b.y)
        }


        else {
            gx.qt(a, b, c, d, e, f)
        }
        return h
    }
    h.cur = function (a, b, c, d, e, f, g, h) {

        if (O(a)) {
            return this.cur(a.x, a.y, b.x, b.y, c.x, c.y)
        }
        return this.mt(a, b).qt(c, d, e, f, g, h)
    }
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
    h.cC = h.cc = function () {
        return this.cacheCanvas
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



