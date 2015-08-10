ULTMJ = function () {
    W([1200, 600, 2400, 600], {g: 10, m: 'm'  })

    w.B(300, 400, 'r', 50, 50);
    w.B(800, 400, 'r', 50, 50);
    w.B(1200, 400, 'r', 50, 50);
    w.B(1600, 400, 'y', 100, 100).K('m')
    y = w.ship().track()

}
BODYEACH = function () {W(0)//works

    b = w.D(100, 100, 'r',[
        [40],
        [100, 200, 100],
        [50, 200],
        [200, 200, 300, 400]])

    b.fs(function (f) {

        //bind to this.. when u have time
        //f.SetSensor(true) //works
        // f.remove()
        // f.K('destroy')
        $l('shape type: ' + f.GetShape().m_type)
    })

}

b2d.AB=function(x1,y1,x2,y2){var g=G(arguments)

    var g=G(arguments), ab


    ab = new b2d.Collision.b2AABB

    if(g.p){

        ab.lowerBound.Set(x1, y1)
        ab.upperBound.Set(x2, y2)

    }
    else {


        if(U(g[2])){

            ab.lowerBound.Set(    g[0]/30-0.01,  g[1]/30-0.01   )

            ab.upperBound.Set(    g[0]/30+0.01,  g[1]/30+0.01     )

        }


        else {

            ab.lowerBound.Set(g[0]/30, g[1]/30)

            ab.upperBound.Set(g[2]/30, g[3]/30)
        }

    }


    return ab
}
b2d.mJ=function(body, tX,tY){
    if(O(tX)){tY=tX.y;tX=tX.x}
    var md = new b2d.Joints.b2MouseJointDef
    md.bodyA = w.GetGroundBody()
    md.bodyB = body
    md.target = V(tX, tY)
    md.collideConnected = true
    md.maxForce = 1000 * body.GetMass()
    md.dampingRatio = 0
    return md}

b=b2d.Body.prototype
w=b2d.World.prototype
f = b2d.Dynamics.b2Fixture.prototype

j=b2d.Joints.b2MouseJoint.prototype
j.tg = function(x,y){var j = this
    if (U(x)) {return j.GetTarget().mult()}
    j.SetTarget(V(x, y).div())
    return j} // world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD

w.Q=function(){var w = this, g=G(arguments),o

    o= _.extend({n:0},
        F(g[0])? _.extend({fn:g[0]},
            O(g[1])? {x1:g[1].x, y1:g[1].y}
                :{x1:g[1], y1:g[2], x2:g[3], y2:g[4]})
            : O(g[0])? {x1:g[0].x,  y1:g[0].y, fn : g[1] }
            : {x2: g[0], y2: g[1], fn: g[2]})

    w.QueryAABB(
        function(f){var res; o.n++

            res = o.fn(f, f.B(), o.n)

            if(res!==false){return true}
        },
        b2d.AB(o.x1,o.y1,o.x2,o.y2))

    return w}
w.q=function(){var w = this, g=G(arguments),o, fx
    o = O(g[0])?{x:g[0].x,y:g[0].y,fn:g[1],k:g[2]} : {x:g[0],y:g[1],fn:g[2],k:g[3]}
    w.QueryAABB(
        function(f){
            if (f.ofClass(o.k) && f.tP(o.x,o.y)){fx=f;return}
            return true},   b2d.AB(o.x,o.y))
    if(fx){
        if (F(o.fn)){return _.b(o.fn,fx)(fx)||w}
        return fx}}
w.e= w.each= function(){var w=this,
    g=G(arguments), o,
    bs = w.GetBodyList(),k,b
    o = S(g[0])?{k:g[0], fn:g[1]} : {fn:g[0]}
    while(bs){
        b  = bs
        bs = bs.next()
        if(b.has(o.k)){o.fn(b)}}
    return w}
w.$=function(fn){var w=this
    w.UI().click(
        function(e){fn({x:w.mx, y:w.my, e:e})})
    return w}

w.e$=function(fn){var w=this
    w.e(function(b){b.$(fn)})
    return w}
w.$$=function(fn){var w=this
    w.UI().dblclick(function(e){fn({x:w.mx, y:w.my, e:e})})
    return w}
w.md= function(fn){var w=this

    w.UI().mousedown(function(e){fn({x:w.mx, y:w.my, e:e})})

    return w}
w.mu= function(fn){var w=this
    w.UI().mouseup(function(e){fn({x:w.mx, y:w.my, e:e})})
    return w}
w.mm= function(fn){var w=this
    w.UI().mousemove(function(e){fn({x:w.mx, y:w.my, e:e})})
    return w}

f.$=function(fn){var f=this, b=f.B(), w=b.W()
    w.$(function(o){
        w.q(o.x, o.y, function(fx){if(f==fx){ _.b(fn,f)(o)}})
    })
    return f}
b.$=function(fn){var b=this, w=b.W()
    w.$(function(o){
        w.q(o.x, o.y, function(f){
            if(b==f.B()){ _.b(fn,f)(o) }
        })})
    return f}

w.mJ=function(b,x,y){var w=this, g=G(arguments), o, j,

    mJD = new b2d.Joints.b2MouseJointDef

    o={

        a:w.GetGroundBody(),
        b:g[0], x:g[1], y:g[2],
        dR:_.tN(g[3]),
        mF:_.tN(g[4],5000),
        coll: g.N?true:false
    }

    mJD.bodyA = w.GetGroundBody()
    mJD.bodyB = o.b
    mJD.target = V(o.x, o.y).div()
    mJD.dampingRatio = o.dR
    mJD.maxForce = o.mF
    mJD.collideConnected = o.coll

    return w.J(mJD)

}
w.MJ=function(){var w=this
    if(w.mj){w.j(w.mj); w.mj=null}
    return w}
w.mxyRecord=function(){var w=this

    $.oMD(function(x, y){
        var p = w.sToW(x,y)
        w.mx= p.x;
        w.my= p.y
    })

    $.oMM(function(x,y){
        var p = w.sToW(x,y)
        w.mx= p.x;
        w.my= p.y })
    //  cjs.tick(function(){    if(w.mj){w.mj.tg(w.mx, w.my) }})
    return w}
w.mouseJoints=function(o){var w=this
    //this is great
    //it demonstrates md, q, m, and ofClass
    //but it has a real purpose too!
    cjs.t(function(){if(w.mj){w.mj.tg(w.mx, w.my)}})
    w.mu(function(){w.MJ()})
    //anytime mousedown.. because that implies there was a mouse up
    //so there should be no current mouse joint.. smart!
    w.md(function(e){w.q(e.x,e.y,
            function(f){
                if(f.ofClass(o.m)){
                    w.mj = w.mJ(f.B(),e.x,e.y)}})})
    return w}

TESTQ=function(){W().Y();
    b= w.S(600,300, 'b', 200); r= w.S(600,350, 'r', 200);
    y= w.S(650,300, 'y', 200);

    g= w.S(200,200, 'g', 200).K('g')
    f = g.cir({x:0, y:250, r:100, c:'x'})
    f2 = g.cir({x:100, y:250, r:100, c:'x'})

    f3 = g.cir({x:200, y:250, r:100, c:'x'})


    //w.md(function(v){ w.ball({x:v.x, y:v.y, r:8}) })
    //w.$$(function(o){w.S(o.x, o.y, 'x',[[10,10 ,'-']])})// w.S(o.x, o.y, 'x', 10,10 ,'-' ) //still not working?
    //f.$(function(){this.C('b')})

    //g.$(function(){this.C('b')})

    //w.e$(function(){ this.C('b') })

    w.e( 'g', function(b){ b.C('r') }  )

}
CHEMICALS = function(){
    $l('chem')

    W({ w: 0,g:20  })

    // w.s.sXY(.8).XY(125,50)


    _.times(2, function() {

        w.randRects({y:0,z:3})
        w.randRects({y:100, z:3})

        w.randRects({y:200, z:3})
        w.randRects({y:300, z:3})
        w.randRects({y:400, z:3})

    })


    w.Q(  function(f){f.B().kill(); return true}, 550,250,650,350 )


    y = w.ship().XY(600,300).K('ship')

    w.Q(function(f){f.B().kill(); return true}, 350,  50,    450, 150 )

    _.times(25, function(){w.cir(400, 80,16,'r').K('circ')  })

    w.Q(function(f){f.B().kill(); return true}, 850,  50, 950, 150 )

    _.times(25, function(){w.rect(900, 100, 24,24,'b').K('rect')})




    gameOver=false


    fn = function(cx){var fixt,body

        if(fixt = cx.with('bul')){
            body = fixt[1].body()
            if(body != y){body.kill()}
        }

        if(cx.with('ship','circ') || cx.with('ship', 'rect') ) {lose() }



        if(cx.with('circ','rect')){

            w.pen('you win')
            y.stat()
            w.each(function(b){  if(b!=y){b.kill()} })
            setTimeout(self, 1000)

        }



    }
    w.beg(fn)



    //w.startKilling()
    function lose() {
        w.pen('you lose')
        y.stat()
        w.each(function (b) {
            if (b != y) {
                b.kill()
            }
        })
        setTimeout(self, 1000)
    }


}
STACKTHREE=function(){W({m:'ball',w:0})



    w.S(500,600,'y',1000, 20)
    b =  w.B(500,200, 'o', 40).K('ball')
    w.boxesStat([350, 260, 880, 30])
    w.B(310,120,'t',60,60)
    w.B(320,120,'t',60,60)
    w.B(340,120,'t',60,60)
    w.B(350,120,'t',60,60)
    w.B(370,120,'t',60,60)
    w.B(380,120,'t',60,60)
    w.B(550,120,'t',60,60)
    w.B(570,120,'t',60,60)
    w.B(580,120,'t',60,60)
    w.S( 1000,400,'x',200,200)
    w.S( 1200,200,'x',200,200)

 }

old=function(){

    jointDef=function() {
        jd = b2d.Joints.b2MouseJointDef.prototype
        jd.sT = function (a, b) {
            var jd = this//=j.tS=    j.tg=j.tgS=j.ts=
            j.target.Set(a, b)
            return jd
        }
        jd.cC = jd.clC = jd.clCn = jd.cc = function (a) {
            var jd = this
            j.collideConnected = a ? true : false
            return jd
        }
        jd.mF = jd.mf = function (a) {
            var jd = this
            j.maxForce = a;
            return jd
        }
        jd.A = function (a) {
            var jd = this
            j.bodyA = a
            return jd
        }
        jd.B = function (b) {
            var jd = this
            jd.bodyB = b
            return jd
        }
    }; jointDef()
    w.mJ=function(o){var w=this
        if(o.m==0){return w}

        o=o||{}

        $.M()
        cjs.tick(function(){if(w.mj){w.mj.tg(_) }})
        $.oMU(function(){ w.MJ() })
        $.oMD(function(x,y){w.XY(x,y,
            function(f){if(f.ofClass(o.m)){w.mj = w.mJ(f.body(), _ )}
            })})

        return w}


    w.eB=w.each=w.eachBody=function(l,uD){var w=this,
        bs = w.GetBodyList(),
        k,
        b

        //can pass a cb to be run on EACH body
        //can also pass a uD to restrict cb to
        //run only on bodies with that uD

        if(S(l)){k=l; l=uD} else {k=uD}

        while(bs){
            b  = bs
            bs = bs.next()
            if(b.has(k)){l(b)}
        }

        return w}
    w.$$x=function(fn){var w=this
        w.UI().dblclick(function(e){

            fn(e.pageX, e.pageY)

        })
        return w
    }



    w.mouseJAt = function (p, k) {
        var w = this, mj
        if (N(p)) {  p = V(p, k)  }
        w.XY(p.x, p.y, function (f) {  mj = f.B().mouseJoint(p) })//, k
        return mj}


}

