J = cjs
h =  cjs.Shape.prototype
ct = cjs.Container.prototype
gx = cjs.Graphics.prototype
st = s = p = J.Stage.prototype
T= J.Ticker
J.iDU=function(e){if(S(e)){return s$(e).contains('data:')}}
protos()
crat()
shapeApps()

function protos(){
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

}
function crat() {
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

}
function shapeApps(){
    STG=function(){z()  //three ways to make a new stage
        s = $St('z',400 ).bm('me'); s.can.dg()
        $St($.c('o',400,100).dg()).bm('me')
        $.c('x',300,100).id('someId').dg()
        $St(['someId']).t().bm('me')
    }
    CHALK=function(){
        w= b2.mW()
        s= w.s
        s.bm('me')
        t = J.chalk('some information ....')
        t2=J.chalk('some more').XY(50, 90)
        s.A(t, t2)
    }

    CIRCRG=function(){St()
        nip=function(){
            x1=0
            y1=0
            r1=10
            x2=0
            y2=0
            r2=100
            var h= cjs.shape(10, 10).a2(s).drag().opacity(.8)
            h.graphics.beginRadialGradientFill(  [ 'blue', "orange"],  [0,  1],
                x1,   y1,   r1,     x2,    y2,    r2   )
                .dc(0, 0,100)
                .endFill()
            return h}

        x1=0
        y1=0
        r1=10
        x2=0
        y2=0
        r2=100

        h=cjs.shape(10, 10).a2(s).drag()

        change= function(){
            //  h.remove()
            // h=cjs.shape(10, 10).a2(s).drag()

            h.graphics.rf(   [ 'blue', "orange"],  [0,  1],   x1,  y1,  r1,   x2,  y2,  r2  ).dc(0, 0,100).endFill()

            // x--

            // r1++
            // r2++
        }


        setInterval(change, 1000)

        change()

        n = nip()

        //h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
    }
    RAD1=function(){St()

        s.h(600,300).graphics.rf(
            ['blue',"orange"],  [0,1],  0,0,10,   0,0,100
        ).dc(0, 0,100).ef()

        s.h(600,100).graphics.rf(
            ['CornflowerBlue',"orange"],  [0,1],  0,0,10,   0,0,100
        ).dc(0, 0,100).ef()

        s.h(800,300).rf(
            ['blue',"orange"],  [0,1],  0,0,10,   0,0,100
        ).dc(0, 0,100).ef()

        s.h(400,300).rf(
            ['b','o'],  [0,1],  0,0,10,   0,0,100
        ).dc(0, 0,100).ef()




        s.h().cir(0,0,10)
    }
    EASELCONVEX=function(){s=cjs.S()
        s.poly([[-100,-10],[0,100],[100,20]],'red','white',10).XY(200,300)
        s.poly([[-20,-80],[-100,-200],[100,5]]).XY(300, 200)
        s.poly([[-40,40],[-40,-40],[40,-40], [40,30]],'blue', 'white').XY(200,200)
    }


    CIRCTEST=function(){St()

        s.h().drag().cir({r:100,c:'b',C:'X',l:20,lf:1}, //why cant set lf to {}?
            [{x:250,y:300 }, {x:450,y:300 }, {x:250,y:500}])

        s.h().drag().cir({C:'X',lf:{X1:650,X2:220,Y1:950,Y2:520},r:100},
            [{x:750,y:300},{x:950,y:300 },{x:750,y:500}])

    }
    CIRS=function(){W(10).Y()
        w.D(200,160).cir(   {r:120, rf:{c1:'r',c2:'b'}},  {r:100, C:'y', l:2, bf:'me'})

        w.D(100,100).cir({r:35,lf:{c1:'o',c2:'y'}})


        w.D(300,200).cir({r:50,  x:0,   y:0,   lf: {c1:'o', c2:'b', X1:400 } })
            .cir({r:100, x:200, y:0,   lf: {c1:'o', c2:'b'} })
            .cir({r:100, x:100, y:100, lf: {c1:'o', c2:'b'} })


        w.s.h().dc([50],[200,0,100],[100,100,100]).c({ l:20,C:0,ls:1}).dc([50],[200,0,100],[100,100,100])

    }
    LT=function(){St()


        h.c('y').dc(100,100,30).c('o').dc(100,100,10)
            .c('X','g',8)
            .mt([
                [100,100],[300,300],[400,100],
                [500,300],[450,450]],[[500,0],[600,100]
            ])
        h.cir(600,300, 'u', 'g', 10)


        lf={c1:'b',c2:'o',y1:200,y2:700}
        v=[[300,300],[320,200],[640,400],[280,650]]
        //two ways to make the same thing
        s.h().poly({
            v:v,
            lf:lf
        })
        s.h(250,50).lf(lf).mt(v)
    }
    HPOLY=function(){St()
        v=[[-100,0],[0,-100],[100,50]]
        s.h(600, 300).poly({v:v, bf:'me'})
        s.h(900, 300).poly({v:v, lf:1})
        s.h(800, 300).poly({v:v, rf:1})
        h=s.h(200,300).drag().bf('me', function(){
            h.dc([150],[200,0,150])
        })
    }
    CIRCSTROKE=function(){St()

        gx= h.graphics

        h.c('b', 'r',10).XY(-100,-100)


        h.dc([200,200,50],[400,200,50],[600,200,50])






        /*  h.dc(300,300,50)
         gx.dc(400,400,50)
         h.dc(500,500,50)
         gx.dc(600,600,50)
         */

    }
    ROTREC=function(){St()

        ct = s.ct(600, 300)

        ct.rec({ w:400,h:400, c:'r',C:'o',l:10,a:-5 })
        ct.rec({ w:100,h:200, c:'b',C:'w',l:20,a:20, rg:1 })
        h = ct.rec({
            w: 100, h:200, a:20,
            c: 'b', C:'w', l: 20, bm:1
        }).X(100)
        $.in(8, function(){h.X(0)}) //notice how gradient is seen behind the bm!!!

    }
    TWORECS=function(){St()

        ct = s.ct(1000, 300).drag()
        ct.rec({ w:400,h:200, c:'r',C:'o',l:10,a:-5 })
        h1 = ct.rec({ w:200, h:400, c:'r', C:'o', l:10, a:5 })
        // h is another container.. to clr ->  h1.children[0].clr()

        h= s.h().dr2()
        //.rec({  })

    }
    BMH=function(){St()
        v=[[-100,0],[0,-100],[100,50]]

        s.h(100,300).drag().bmCir({
            circs:[{r:150},
                {x:200,r:150},
                [300,100,100],[400,100,100]]})

        s.h(700,300).drag().bmV({v:[
            [[-100,0],[0,-100],[100,50]],
            [[-200,0],[-100,-100],[0,50]],
            [[0,200],[0,-200],[400,-300],[400,300]]]})

    }
    CIRCS=function(){St()
        // h.dc(100,100,50) -> no color


        h.c().dc(100,100,50) // black fill, l4 white stroke
        h.c('*').dc(100,200,50).dc(100,250,50)
        h.c('***').dc(200,200,50).dc(200,250,50)
        h.c({C:'r'}).dc(300,300,50)
        h.circle({
            r:50, x:200, y:200,
            C:['y',10],
            lf: {c1:'u',c2:'o',y1:100,x2:100},
            ls: {c1:'u',c2:'o'}
        })
        h.circle({
            r:50, x:500, y:200,
            C:['y',2],
            rf: {c1:'u',c2:'o',x1:10,y1:10,  r2:30}, //, y1:100,x2:100},
            rs: {c1:'y', c2:'u', x1:-20,  y1:-20,  r1:40, r2:40    }
        })

        h = s.h().drag().lf({}).dc()
            .c('b','g',10).lf({  y2:400  }).dc(300,300,50)


        cjs.me(function(i){
            h.c({

                l:200,
                rf: ['w', 'u', 800],
                rs: {c1:'w', c2:'x', r2:800}

            }).dc({x: 0, y:0, r:200})

            s.h().c({
                l:200,
                lf: {c1:'w',c2:'u',y2:200},
                ls: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200}
            }).dc({x: 0, y:0, r:200}).drag()

            s.h().lf('y','r',10).dc({r:200}).c({
                l:0,
                c:'y',
                //lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
                bs:i,bf:i
            }).dc({r:200}).drag()
            s.h(40,10,'b',8).rf({c1:'r',c2:'d',r2:100}).dc(0,50,40).drag()
        })
    }
    OVALS=function(){St()
        h=s.h(40, 10,'b',16).drag()
        h.c({C:['o',5],lf:{c1:'g',c2:'r',x2:100,y2:400}}).de(100, 400)

        h.c({C:'b',
            lf:{c1:'g',c2:'r',x2:400, y2:100}}).de(400,100)

        h.l(30).lf({c1:'b',c2:'y', x1:100, y1:100, x2:500,  y2:400 })
            .de(100, 200, 500,300)


        h.ls('r','w',300,100,400,140).de(300,0,300,500)

    }
    GRAPHTEST=function(){St(); img = $.img('me',function(){s.ct().h().bmS(img).ss(32).dr(20,20,920,360); _.each([

            function(){return $h(12,10)
                .lf('b','g',130).dr(130)},

            function(){return $h(40, 10,'b',16)
                .ls('r','w',70,140).de(70,140)},

            function(){return $h(80,80)
                .C('b',8).rf('w','y',40).dc(40)} ,

            function(){return $h(12,10,18)
                .bf(img, cjs.M(1) ).rs('b','g',30,130).dr(130)},






            function(){return $h(12,12,'g','r',8)
                .rr(130,30)}, //w(h) and r


            function lt(){return $h().C('o')
                .ss(16,'round','round')
                .mt([40,10],[90,90],[90,140])},

            function star(){return $h(80,85,'y','b',3)
                .pStr(0,0,80,5,.8,-95)},



            function hex(){return $h(80,40,'p')
                .pStr(40,6).pStr(0,75,40,6).pStr(45,45,20,6)}


        ],

        function(cont,i){var W=155, H=155, P= 5, C=4 //pad, cols
            s.A(tile(cont()).XY(
                42+(W+P)*(i%C),
                42+(i/C|0)*(H+P)))})})[0]




        tile=createTile=function(x,y){var bg,til
            bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
            til = cjs.ct().A(bg)
            if(N(x)){  til.X(x) }
            if(N(y)){  til.Y(y)  }
            if(O(x)){ til.A(x) }

            return til}


    }
    MICK=function(){St()
        ct.mick=function(x,y,lf){var ct=this,

            h= ct.h(x,y).drag()
                .c({ l:20,  C:0,   lf: lf||1  })
                .dc([50],[200,0,100],[100,100,100])

            ct.h(x,y).drag().c({ l:20,  C:0,   ls: lf||1 }).dc([50],[200,0,100],[100,100,100])
            return h}


        s.mick(500,200)
        s.mick(700,100, { c1:'b', c2:'X' })
        s.mick(700,300, { c2:'b' })
        s.mick(100,100, { y2:10 })
        s.mick(100,200, { y2:200 })
        s.mick(100,300, { x2:100 })


    }
    REC=function(){
        St()
        h=s.h(480,270).drag()
        h.C('z',2).lf({x:-100, c1:'r',c2:'y'})
            .dr2({w:300,h:100,x:0,y:-100},
            {w:100, h:300})

        s.h(180,270).drag()

            .lf({c1:'r', c2:'y', x1:-100}).dr2(
            {w:300,h:100,x:0,y:-100},
            {w:100, h:300})

    }
    CONVEX=function(){W(0)

        // so clearly b.convex lets me specify polygon fixtures by an array of points

        b = w.D(300, 300).fixRot()

        b.convex('g', [  [0,0], [0,-200], [100,0]  ]  )

        b.convex('b', [  [0,30], [-300,-20], [100,0]  ] )

        b.convex('p',  [ [0,30],[-30,-20],[10,0]  ]  )



        // verts creates a dyn body and lets u pass in multiple 'convex calls'
        w.verts( 300, 500,[
            ['p', [-20,-20],[0,-30],[10,10]],
            ['n',[0,0],[30,-50],[50,-10]]
        ])


        c = w.dyn(300, 300).fixRot()



        /*
         b2 = w.dyn(300, 300)
         b2.convex('red', [ [0,0],[0,-20],[10,0] ] )
         b2.convex([[0,30],[-30,-20],[10,0]] )
         b3 = w.dyn(300, 300)
         b3.convex( 'g',[[-150,0],[-120,-20],[-80, -50],[0,-30]] )
         b3.convex('r',[ [-30,-30], [-20,10], [-10,60]] )
         b3.convex('o',[ [-30, -30], [-20,-50], [ 10, -20]] )
         */



    }
    VERTS=function(){W()


        _.times(100, function(){
            w.verts(R(600), R(300,200), [['p',[-20,-20],[0,-30],[10,10]],
                ['n',[0,0],[30,-50],[50,-10]]])
        })

    }
    PITFALL=function(){W([1200,600,3400,600],{}).P()

        //b2d.levelScrollX()
        p.track()

        turtle = [
            ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

            ,  ['yellow',[10,-10],[20,-30],[50,-15], [45,-5]]

            , ['yellow',

                [-50,10],[-50,-10],[-40,-10],[-40,10]
            ]

            , ['yellow',

                [-10,10],[-10,-10],[0,-10],[0,10]
            ]
        ]



        turtle2 = [
            ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

            ,  ['yellow',[-60, -30], [-50,-60], [-20,-45], [-15,-35] ]



            , ['yellow',

                [-50,10],[-50,-10],[-40,-10],[-40,10]
            ]

            , ['yellow',

                [-10,10],[-10,-10],[0,-10],[0,10]
            ]
        ]



        t = w.vertsKin(400, 570, turtle).fixRot()
        t2 = w.vertsKin(700, 570, turtle2).fixRot()

        I(1, function(){
            t2.lV(5,0)
            setTimeout(function(){t2.lV(-5,0)})
        }, 2000)


    }
    CENTERSHAPE=function(){St()

        h.rec(100,100,100,100,'y')
        h.rec(200,200,100,100,'b')

        h.c('o').polyStar(300,100,
            50,5,0.6,-90)

        h.c('w','z')
            .roundRectComplex(400,300,
            300,300, 20,20,30,40 )

        h.cir(500,200,40,'b','x',10)
    }
    SHAPES=function(){St()

        s.can.P('a').XY(300)

        s.bm('me', 0.2, function(bm){})

        s.A(cjs.circle(100, 'blue','green').XY(100, 100).drag())

        s.circle(100, 100, 10, 'red', 'yellow' )
            .circle(10,100,100,'black','purple')
            .circle(100, 10, 100, 'blue', 'red' )
            .circle(150,150,120,'red','blue')
            .circle(30,'brown','gray')

    }
    TURTLE=function(){W(0).Y()

        turtle =[
            ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
            ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
            ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
            ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
            ['x', 10, 55, -12],
            ['o', 30, 40, 75, -12]
        ]



        w.D(600, 280, [


            ['g', [0,0], [-50,-10], [-40,-20], [0,-40], [20,-10] ]


            ,['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
            ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
            ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
            ['x', 10, 55,-12, '-'],
            ['u', 30,40, 75,-12 ,'-']

        ])


        turt=function() {
            w.D(400, 280, turtle, '-')  //this changes the data object for future uses !!!

            w.S(300, 300, 'o', 10)

            w.D(300, 100, 'b', 50)
            w.D(300, 200, 'y', 50, '-')
            w.D(300, 400, [
                ['b', 50, 50, 0, '-'],
                ['y', 50]
            ])
            w.D(700, 100, 'b', 50, 50)
            w.D(700, 200, 'y', 50, 50, '-')
            w.D(700, 400, [
                ['b', 50, 50, 50, 0, '-'],
                ['y', 50, 50]
            ])


            // t =  w.verts(400,280,   turtle) // fs = t.fixts()


            r = w.S(600, 300, 'r', 12, '-')

            b = w.D(300, 400)
            b.cir({r: 100, c: 'w', rg: 1})
            b.cir({r: 100, x: 500, c: 'w', lg: 1, s: 1})


            b = w.B(500, 400, {r: 100, c: 'y', t: 'c'})


            //  {r:100, x:100, c:'w', lg:1, s:1, t:'c'}  ])


            // f = r.fixt()


            /*
             r.cir('b', 30, 100,200,'-')
             r.cir({  c:'g', r:30, x:100 ,s:1 }, '-')
             r.cir({  c:'w', r:30  })
             r.cir({  c:'z', y:-100  })
             r.cir(['y', 30, 200, 100])
             */
        }

    }
    CURTLE=function(){W(0).Y()

        turtle =[
            ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
            ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
            ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
            ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
            ['x', 10, 55,-12],
            ['u', 30,40, 75,-12]]

        w.D(400, 280,turtle )



        w.D(400,300).rec(
            {w:300,h:300, x:100,y:100, bf:'me'},
            {w:200,h:200, lg:1, l:15},
            {w:10,h:40,c:'r'},
            {w:40, h:40, x: 100, c:'y'  },
            {w:40, h:40, x: 200, c:'b', C:'o', l:10  },
            {w:200, h:20,  y: 200, s:1 , lf:{c1:'g',c2:'y'} })



        w.D(300,200).cir(
            {r:20,y:-20},
            {r:20},
            {r:20, x:20, lf:{ c1:'b' },y:30},
            {x:50, s:1, rf:1},
            {x:100,r:50,c:'r',C:'x',l:10, s:1},
            {y:-100, r:50, bf:'me'})



        b= w.D(800, 300)


        b.pol({
            c:'x',  C:'o',  l:5,

            bm:1,

            v:[  [-100,0],[0,-100],[100,50]   ]

        })



    }
    RADIALGRADRECT=function(){s=cjs.S()


        x1=100
        y1=150
        r1=20
        x2=100
        y2=150
        r2=100


        h=cjs.shape(10, 10).a2(s).drag()


        change= function(){

            //  h.remove()

            // h=cjs.shape(10, 10).a2(s).drag()

            h.graphics.rf(["red", 'blue', "yellow"],[0,.5,1],x1,y1,r1,x2,y2,r2).dr(0,0,400,400).ef()


            r1++
            r2++
        }

        setInterval(change, 1000)

        change()
    }
    RADIALGRADCIRC=function(){s=cjs.S()





        x1=0
        y1=0
        r1=10
        x2=0
        y2=0
        r2=100


        h=cjs.shape(10, 10).a2(s).drag()


        change= function(){

            //  h.remove()

            // h=cjs.shape(10, 10).a2(s).drag()

            h.rf( 'b', "o",  x1,
                y1,
                r1,
                x2,
                y2,
                r2     )


                .dc(0, 0,100)
                .ef()
            // x--

            // r1++
            // r2++
        }

        setInterval(change, 1000)

        change()

        n = nip()
        //h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
    }
    USINGLAYERSINEASEL=function(){Q(['me','guy'],function(q){s=cjs.S()

        me  = q.bm('me').a2(s).sXY(3)
        guy = q.bm('guy').a2(s).sXY(.5).drag()
        $.button('s.sXY(2)', function () {s.sXY(2)}).A()
        cjs.tick(function(){
            me.X( guy.x * 2.2 - 140)
            me.Y( guy.y * .2 )})

    })}

    TTT=function(){z()
        s=stage = cjs.stage(500,600).A()
        s.can.P('a').XY(300)
        s.A( h = shape = cjs.shape() )
        h.rect( 100, 200,  0, 200, 'red' )
            .rect( 100, 100,  100, 20, 'green' )
            .rect( 145, 120,  10, 80, 'orange' )
            .circ(105, 100,20,'blue')
            .circ(105, 100,8,'black')
            .circ(200, 100,20,'blue')
            .circ(200, 100,8,'black')
            .circ(100,20,100,'green')
            .rXY(100, 300).XY(100,300).drag()
        p = function(){

            shape.tweenLoop(
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200])

            shape.tweenLoop(
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200]
            )}
        p()
    }
}

old=function(){

    cjs.RECTx = function (c, W, H, x, y, a) {
        $l('rect!')
        //hW = W/2; hH = H/2  //.mt(-hW,-hH).lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])

        var hW, hH, h, ct = cjs.ct(), o, g = G(arguments)

        if (S(c)) {

            o = {c: c, w: W, h: H, x: x, y: y, a: a}
        }

        //hW = W/2; hH = H/2
        o = o || O(g[0]) ? g[0] : {}

        o.w = _.tN(o.w, 50)
        o.h = _.tN(o.h, 50)
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.c = oO('c', o.c || 'g')

        h = $h()

        h.c(c)

        h.dr2(x, y, W, H)         //.mt(-hW,-hH).lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])

        h.rot(a)

        h.XY(x, y)

        ct.A(h)

        return ct

    }


    // duplicate? $Ct= J.container = J.ct  =function(a){ return new J.Container(a)}

    cjs.cirX=function(stg,x,y,r,f,s,width,opt){
        var shp=cjs.shape(stg,x,y,f,s,width,opt) // ss = N(ss)?ss: radius/8
        shp.dc(0,0,r)
        return shp}

    cjs.RECTx= function self(col, wd,ht, x, y, rot){var halfW,halfH, h, ct = cjs.ct()

        wd=N(wd)?wd:50
        ht=N(ht)?ht:50
        x=N(x)?x:0
        y=N(y)?y:0
        rot=N(rot)?rot:0
        col= oO('c', col||'g')

        halfW = wd/2
        halfH = ht/2

        h = cjs.h().c(col,col)
            .mt(-halfW, -halfH )
            .lt(-halfW,halfH )
            .lt(halfW, halfH )
            .lt(halfW,-halfH )
            .lt(-halfW,-halfH )

        ct.A( h.rot(rot).XY(x,y)  )

        return ct}
    ct.RECTx =function(c, W,H, x,y, a){
        var ct=this, h

        //return cjs.RECT(c, w, h, x, y, a).a2(ct)


        return ct.rec({

            c:c,   w:W,    h:H,   x:x,   y:y,   a:a

        })


    }
    ct.rectx=function(x,y,w,h,c,C,l,opt){
        var ct=this


        return ct.h(x,y,c,C,l,opt).dr(0,0,w,h)
    }


//b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
    ct.bmRegCenterX = ct.bm0X= function(img, func){
        var that =this
        $.i(img, function(image){
            var bm = new J.Bitmap( image[0] )
            bm.regX = bm.W()/2
            bm.regY = bm.H()/2
            that.A( bm );
            if(func){func( bm )}
        })

        return this}


// duplicate? $Ct= J.container = J.ct  =function(a){ return new J.Container(a)}
//
    ////// old///

    ct.bmRegCenterX = ct.bm0X= function(img, func){
        var that =this
        $.i(img, function(image){
            var bm = new J.Bitmap( image[0] )
            bm.regX = bm.W()/2
            bm.regY = bm.H()/2
            that.A( bm );
            if(func){func( bm )}
        })

        return this}

}