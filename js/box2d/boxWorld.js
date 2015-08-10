b2d.iBD=b2d.isBDef=function(bd){return O(bd) && F(bd.b2BodyDef)}
b2d.tB = b2d.toBody=function(fOrB){
    return b2d.isBody(fOrB)? fOrB
        : b2d.isFixt(fOrB)? fOrB.B()
        : false
}
b2d.isFD=b2d.isFixtDef=function(fD){
    return O(fD) && fD.b2FixtureDef}
b2d.isFixt=function(fixt){
    if(!fixt){return false}
    return fixt.constructor.name=="b2Fixture"}
b2d.f=  b2d.fixt= function(h){var g=G(arguments),
    f=new b2d.FixtureDef,
    h  // simply makes one fixt,
    // tries to set its shape
    // and returns it
    //you can pass in a pre-made shape
    //or..
    // if you pass it an array, it makes a polyH from it
    // from verts/arr (confirmed)
    // or if you passed in anything (number(s))
    // it makes a circle or poly shape, depending on how many numbers you passed
    if(b2d.isShape(g[0])){h=g[0]}


    /*
     else {
     h =   A(g[0])? b2d.pH.apply(b2d, g)
     :(g.l==1|| g.l==3)? b2d.cH.apply(b2d, g)
     :b2d.pH.apply(b2d, g)}
     */

    f.shape = h
    return f
}


b2d.cir=  function(r,x,y, d){//hmm.. fixt doesnt have a rel loc.. its shape does
    //what if u want to change 'shape' of shape, but keep its rel loc?
    var g= G(arguments),

        x=_.tN(g[1]),
        y=_.tN(g[2]),
        r= _.tN(g[0],50),
        d= _.tN(d,1),
        fD

    fD=new b2d.FixtureDef

    fD.shape = new b2d.CircleShape(r/30)
    fD.shape.SetLocalPosition(V(x,y, '-'))

    fD.d(d)

    if(g.n){fD.isSensor=true}

    return fD

}



b2d.pol=   b2d.poly=function(){var g=G(arguments), f,
    f=new b2d.FixtureDef
    f.d(1).fr(.2).r(.2)
    if(g.n){f.isSensor = true}
    f.shape = b2d.pH.apply(null, g)
    return f}
b2d.pC = b2d.polyCirc = function (r, prec) {
    var g = G(arguments), vv = [], a

    r = _.tN(r, 20)
    prec = _.tN(prec, 20)
    a = 2 * M.PI / prec

    _.t(prec, function (i) {
        vv.push(V(M.c(a * i) * r, M.s(a * i) * r))
    })

    return vv
}
b2d.oDef= function(o){o=o||{}

    o.x= _.tN(o.x)
    o.y= _.tN(o.y)
    o.a= _.tN(o.a)

    o.c= o.c ||'z'
    o.C= o.C ||'w'
    o.w= _.tN(o.w,50)
    o.h= _.tN(o.h,50)
    return o}
b2d.fixtPams=function(o){o=o||{}
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.a = _.tN(o.a)
    o.r = _.tN(o.r,40)
    o.w = _.tN(o.w,50)
    o.h = _.tN(o.h, o.w||100)
    o.d = _.tN(o.d, 0.5)
    o.b = _.tN(o.b, 0.5)
    o.f = _.tN(o.f, 0.5)
    o.s = D(o.s)? o.s: 0
    o.o = _.tN(o.o,1)
    o.q = D(q)? o.q: true
    return o}
b2d.polyFixt= b2d.rec= function(W,H,x,y,a,d){var g=G(arguments),r,f,o,v,
    p = new b2d.PolygonShape()
    if( O(g[0]) && O(g[1]) ){
        v = _.map(g, function(v){return V(v).div()})
        p.SetAsArray(v, v.length)}
    else {
        o=O(g[0])?g[0]
            :{w:g[0],h:g[1],x:g[2],y:g[3],a:g[4],d:g[5]}
        b2d.oDef(o)//60?
        p.SetAsOrientedBox(o.w/60,o.h/60,V(o.x,o.y).div(),Math.toRadians(o.a))}
    f=new b2d.Dynamics.b2FixtureDef()
    f.den(o.d||.5)
    if(g.n){f.isSensor=true}
    f.shape = p
    return f
    /*

     //will set cols unless you pass in 0
     if(o.c==0){o.c=null}
     if(o.c==00){o.c=null;o.C=null}
     if(o.c=='*'){o.c=$r()}
     if(o.c=='**'){o.c=$r();o.C=$r()}

     o.c =o.c||'z'
     o.C =o.C||'w'
     o.l = _.tN(o.l,4)

     o.c1 = o.c1||'z'
     o.c2 = o.c2||'w'
     o.s1= _.tN(o.s1)
     o.s2= _.tN(o.s2,1)
     //
     o.x1 = _.tN(o.x1)
     o.y1 = _.tN(o.y1)
     o.x2 =_.tN(o.x2);
     o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
     o.r1=_.tN(o.r1)
     o.r2=_.tN(o.r2,200)
     // o.i image
     //o.k kind
     // o.p  layer position


     //o.bm//o.bM
     //o.g gradient

     //o.m mass
     //o.t type
     // o.v = o.v || [] //verts
     //o.X
     //o.z clr
     */
}
b2d.polyCirc=function(r,prec){
    r = N(r)?r:20
    prec = N(prec)?prec:20
    var arr=[],
        a= 2 * Math.PI/prec
    _.t(prec,function(i){
        arr.push(V( r*Math.cos(a*i),r*Math.sin(a*i)))})
    return arr
}




b2d.body=function(x,y){

    var bD = new b2BodyDef(),
        v=V(x,y), o

    o={x: _.tN(v.x, 300),
        y: _.tN(v.y, 300)}

    return bD.xy(o.x, o.y)
}
b2d.D=b2d.dyn = function(x,y){ return b2d.body(x,y).dyn() }
b2d.S=b2d.stat = function(x,y){//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=

    return b2d.body(x,y).stat()
}
b2d.K=b2d.kin = b2d.kinematic = KinematicBodyDef = kBD=function(x,y){return b2d.bodyDef(x,y).T(1)}
b2d.iB=b2d.isB=b2d.isBody = isBody=function(b){if(O(b)){return b.constructor.name=='b2Body'}}
b2d.pH=  b2d.polyH=function me(W,H,x,y,a){var g=G(arguments), p
    p=new b2d.PolygonShape()
    if(N(g[0])){ p.box(W,H,x,y,a) }
    else if(O(g[0])){ p.arr.apply(p,g) }
    return p}
b2d.AH=  b2d.AShape= function(pam, p2){//dep .. use polyH
    var ag,arr,h
    ag=(p2)? arguments: pam
    arr = _.m(ag, function(v){return V(v).div()})
    h = b2d.pH()
    h.arr( arr )
    return h}
b2d.H=   b2d.shape=function(){var g=G(arguments)
    return g[1]?
        b2d.pH(g)
        :b2d.cH(g[0])
}


pH=  b2d.PolygonShape.prototype
pH.box=  pH.setAsBox=function(){ //to replase setasbox
    var pH=this, g=G(arguments), o
    o=O(g[0])?   g[0]
        : O(g[2])?   {w:g[0], h:g[1], x:V(g[2]).x,  y:V(g[2]).y, a:g[3]}
        :            {w:g[0], h:g[1], x:g[2], y:g[3], a:g[4]}
    b2d.oDef(o)
    pH.SetAsOrientedBox(
            o.w/60,
            o.h/60,
        V(o.x,o.y).div(),
        Math.toRadians(o.a)
    )
    return pH}
pH.arr=  function(){var pH=this
    var v = b2d.verts.apply(null, arguments)
    pH.SetAsArray(v,v.length)
    return pH
}
pH.set= function(){var pH=this, g=G(arguments)
    if(N(g[0])){
        pH.box(g[0],g[1],g[2],g[3],g[4])}
    else if(O(g[0])){
        pH.arr.apply(pH,g)}
    return pH
}
pH.verts= function(){var pH=this
    return _.m(pH.m_vertices, function(v){
        return [v.x*30, v.y*30]
    })

}
pH.setAsVec=   function(v, sc){var pH=this //used by SepLib
    pH.SetAsVector(_.m(v,function(v){return V(v).div(_.tN(sc,30))}))
    return pH}



w = b2d.World.prototype
w.getGroundBody = w.gB =w.gGB=function(){  return this.GetGroundBody()  }
w.bL= w.getBodyList=function(){return this.GetBodyList()}

w.clr= w.E= w.XX=w._ = w.Xb= w.dB=  w.destroyBody=w.destroy = w.destroy = w.destroyAll = w.destroyAllBodies=function(b){

    var w=this

    if(U(b)){

        w.e(function(b){b.kill()})

    }

    else {w.DestroyBody(b)}

    return w}


w.count = w.getBodyCount = w.bC = w.gBC=function(){
    return this.GetBodyCount()
}
w.G=function(x, y){var w=this,
    v, currG = w.GetGravity()
    if(U(x)){return  currG}
    if(N(x)){v=N(y)? V(x,y): V(0,x)}
    else if(x=='flip'){
       v =V( -currG.x, -currG.y)}
    w.SetGravity(v)
    return w}
w.rC = w.rayCast=function(func,v1,v2){

    return this.RayCast(func, V(v1,'-'), V(v2,'-') )
}
w.Y=function(x,Y){var w=this; y = w.ship(x,Y); return w}
w.P=function(x,y){var w=this
    x=N(x)?x:300
    y=N(y)?y:500
    p= w.jumper(x,y)
    return w}
moveAllBods=function() {
    w.left = w.horiz = function (n) {
        n = N(n) ? n : 4
        this.each(function (b) {
            b.X(n, '-')
        })
    }
    w.up = w.vert = function (n) {
        n = N(n) ? n : 4
        this.each(function (b) {
            b.Y(n, '-')
        })
    }
}; moveAllBods()
w.cent=function(){
    var w=this,g=G(arguments),
        v=V(w.s.W()/2, w.s.H()/2)
    if(g.p){w.dot(v)}
    return v
}
w.ball= w.ba=w.cir= w.circ=function(x, y, r, c){var w=this, g=G(arguments), b,o
    o = O(g[0])? g[0] : N(g[1])? {

        x:g[0],
        y:g[1],
        r:g[2],
        c:g[3]

    } : {r:g[0]}
    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.r  = _.tN(o.r, 40)
    o.c  = o.c || $r()
    b= w.D(o.x, o.y, o.c, o.r).K('ball').DFB(0.5, 0, 0.5)
    if(g.n){b.sensor(true)}
    return b}

w.bump =  w.baa = function () {var w=this, g=G(arguments), b,o

    o = O(g[0])? g[0] : N(g[1])? {

        x:g[0],
        y:g[1],
        r:g[2]

    } : {r:g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.r  = _.tN(o.r, 40)
    o.c  = o.c || $r()

    b= w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)

    if(g.n){b.sensor(true)}
    return b}
w.box=w.bi = w.rect = w.rec= function (x, y, W, H, c) {var w=this, g=G(arguments), b,o
    o = O(g[0])? g[0] : N(g[1])? {
        x:g[0],
        y:g[1],
        w:g[2],
        h:g[3],c:g[4]
    } : {w: g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.w  = _.tN(o.w, 40)
    o.h  = _.tN(o.h, o.w)
    o.c  = o.c || $r()

    b= w.D(o.x, o.y,  o.c, o.w, o.h).K('box').DFB(0.5, 0.5, 0)

    if(g.n){b.sensor(true)}
    return b}
w.brick = w.bii = function (x, y, W, H) {var w=this, g=G(arguments), b,o
    o = O(g[0])? g[0] : N(g[1])? {
        x:g[0],
        y:g[1],
        w:g[2],
        h:g[3]
    } : {w: g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.w  = _.tN(o.w, 40)
    o.h  = _.tN(o.h, o.w)
    o.c  = o.c || $r()

    b= w.S(o.x, o.y,  o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)

    if(g.n){b.sensor(true)}
    return b}
w.R=function(c,W,H,x,y){//used in makeworld
    var w=this,wC=w.cent(),
        r,
        g=G(arguments)
    if(!S(g[0])){y=x;x=H;H=W;W=c;c='x'}

    if(U(W)){

        W=200
        H=200
        x=wC.x-W/2
        y=wC.y-H/2

    }

    else if(U(H)){
        H=W
        x=wC.x-W/2
        y=wC.y-H/2
    }

    else if(U(x)){x=wC.x-W/2; y=wC.y-H/2 }

    y=N(y)?y:x

    /*
     x=N(g[0])?g[0]:wC.x
     y=N(y)?y:N(g[0])?N(g[0]):wC.y
     W=N(W)?W:100
     H=N(H)?H:W
     */
    r = w.S(x+(W/2), y+(H/2),c,W,H)
    return r

}
w.dyn=w.body=w.A=function(x, y, fD){var w=this, b,bd

    //pass body def
    if(b2d.isBDef(x)){bd=x; fD=y}

    //make body def
    else {
        if(O(x)){fD=y; y=x.y; x=x.x}

        x= _.tN(x, w.hW)
        y= _.tN(y, w.hH)

        bd=b2d.dyn(x,y)}

    b = w.CreateBody(bd)

    // pass in one fixture or an ARRAY( of fixts )
    if(fD){b.fixt(fD)}
    return b}
w.D=w.B=function(){var w=this,g=G(arguments),
    x=g[0], y=g[1],
    bD, b, fs, k, o,
    D=b2d.D

    if(S(_.l(g))){k=g.pop()}
    o= _.extend({k:k}, O(g[0])?
    {b:D(g[0]),f:_.r(g)} : {b:D(g[0],g[1]),f:_.r(g,2)})

    b=w.CreateBody(o.b)

    /*
     //array of multiple fixtures
     if(A(g[0]) && U(g[1])){
     $l('mult')
     _.e(o.f, function(f){if(g.n){b.f(f, '-')} else {b.f(f)}})

     if(o.k){b.K(o.k)}
     return b
     }
     */

    if(g.n){o.f.push('-')}
    b.f.apply(b, o.f)
    if(o.k){b.K(o.k)}
    return b
}
w.K=function(){return this.B.apply(this,arguments).kin()}
w.S=function(x,y){var w=this,

    g=G(arguments),
    x=g[0], y=g[1],
    bd, b, fixts,clas

    if(S(_.last(g))){clas= g.pop()}


    if(N(x)){
        bd=b2d.stat(x,y)
        fixts=_.rest(g,2)}
    else {
        if(b2d.isBDef(x)){bd=x}
        else {x=V(x); bd=b2d.stat(x.x,x.y)}
        fixts=_.rest(g)}

    b = w.CreateBody(bd)

    if(fixts.length){

        b.f.apply(b,


            fixts
            //   _.map(fixts, function(f){   return A(f)?f:[f]  })

        )

    }

    if(clas){b.K(clas)}
    return b}

w.polyCirc=function(x, y, r, sides){var w=this,
    b=w.D(x,y)

    b.poly( {v:b2d.polyCirc(r, sides)})

    return b
}



w.verts= function(x,y,  arrs ){

    var bod = this.dyn(x, y)

    _.each(arrs, function(fixt){
// bod.convex( arr[0],  _.rest(arr)  )
        //  bod.convex( fixt )

        bod.convex.apply(bod, fixt)

    })

    return bod}
w.vertsKin= function(x, y, arrs){

    var bod = this.kin(x,y)

    _.each(arrs, function(arr){
        bod.convex(arr[0],  _.rest(arr))
    })

    return bod}
w.randRects  = function(ob){var w=this, x, y, z, r


    ob = O(ob)? ob : {}


    y = _.tN(ob.y)


    z= _.tN(ob.z, 1)

    _.t(30, function(i){
        rr= r=  w.rect(  R(1100,20),  R(150,40+y),   R(30, 15)*z,   R(30, 15)*z )

        r.stat().K('randomRect')

    })


    return w}
w.addTenBalls=function(n){var w=this

    _.t(n||10, function(i){

        w.ball(100 + (i*80), 200)})

    return w}
w.addHundBalls=function(n){var w=this
    _.t(n||100, function(i){
        w.ball( 100  +(i*8),  50, 10) })
    return w}


b = p = b2d.Body.prototype
bodyDef=function() {
    bd = d = b2.Dynamics.b2BodyDef.prototype //SuperBodyDef= sBdD=function(a){return a|| b2.bodyDef() }
    bd.XY = d.p = d.ps = d.xy = function (x, y) {
        var args = G(arguments)
        args[0] = x;
        args[1] = y;
        if (x === '*') {
            x = Math.random() * 10 * 60
        }
        if (y === '*') {
            y = Math.random() * 10 * 60
        }
        var pos = this.position
        if (U(x)) {
            return {x: pos.x * 30, y: pos.y * 30}
        }
        //if(O(x)){this.position=x;return this}
        this.position.Set(x / 30, y / 30)
        return this
    }
    bd.X = function (x) {
        var pos = this.XY()
        if (U(x)) {
            return pos.x
        }
        return this.XY(x, pos.y)
    }

    bd.Y = function (y) {
        var pos = this.XY()
        if (U(y)) {
            return pos.y
        }
        return this.XY(pos.x, y)
    }

    bd.lV = bd.linVel = function (vel) {
        var v = this.linearVelocity
        if (U(vel)) {
            return v
        }
        this.linearVelocity = vel
        return this
    }


    bd.aV = bd.angVel = function (vel) {
        if (U(a)) {
            return this.angularVelocity
        }
        this.angularVelocity = vel
        return this
    }
    bd.lD = bd.linDamp = function (damp) {
        if (U(damp)) {
            return this.linearDamping
        }
        this.linearDamping = damp;
        return this
    }
    bd.aD = bd.angDamp = function (damp) {
        if (U(damp)) {
            return this.angularDamping
        }
        this.angularDamping = damp;
        return this
    }
    bd.rot = d.ang = function (ang) {
        //The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
        if (U(ang)) {
            return d.angle
        }
        this.angle = ang;
        return this
    }
    bd.fixedRot = d.fR = function (isFixed) {
        if (U(isFixed)) {
            return this.fixedRotation
        }
        this.fixedRotation = isFixed;
        return this
    }
    bd.inertia = function (inertia) {
        if (U(inertia)) {
            return this.insertiaScale
        }
        this.insertiaScale = inertia;
        return this
    }
    bd.act = d.setActive = function (isActive) {
        this.active = isActive ? true : false
        return this
    }
    bd.sleepy = d.aS = function (canSleep) {
        this.allowSleep = canSleep ? true : false
        return this
    }
    bd.bul = d.bull = d.fR = function (isBul) {
        if (U(isBul)) {
            return this.bullet
        }
        this.bullet = isBul;
        return this
    }
    bd.T = d.typ = bd.kind = function (type) {
        if (U(type)) {
            return this.type
        }
        this.type = type
        return this
    }
    bd.dyn = function () {
        return this.T(2)
    }
    bd.stat = function () {
        return this.T(0)
    }
    bd.kin = function () {
        return this.T(1)
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body

}; bodyDef()
b.wor = b.W =b.world=function(){return this.GetWorld()}
b.wake = b.wakeUp=function(){ this.SetAwake(true); return this}
b.awake= function(){
    var g=G(arguments)
    this.SetAwake(g.n? false:true)
    return this}
b.sleep=function(){ this.SetAwake(false); return this}
b.X=function(x){var g=G(arguments),pos=this.XY()
    if(U(x=g[0])){return pos.x}
    this.XY($.update(pos.x,x,g),pos.y)
    return this}
b.Y=function(y){var g=G(arguments),pos=this.XY()

    if(U(y=g[0])){return pos.y}

    this.XY(pos.x, $.update(pos.y,y,g))

    return this
}
b.XY=function(x,y){var newPos
    if(x==='*'){x =Math.random()*10 }
    if(y==='*'){y =Math.random()*10 }
    if(U(x)){
        var pos = this.GetPosition()
        return pos.mult()} //used to parseInt.. necessary?
    y=N(y)?y:x
    newPos= V( x/30, y/30 )
    this.SetPosition(newPos)
    return this}
type=function() {

    b.type = p.T = p.ty = p.t = function (a) {
        if (U(a)) {
            return this.GetType()
        }
        this.SetType(a)
        return this
    }

    b.stat = function () {
        var v = this.linVel()
//huh??? oh can get/set type of body
        this._linVel = V(v.x, v.y)
        this.type(0)
        return this
    }
    b.kin = function () {
        return this.type(1)
    }
    b.dyn = function (resumeVel) {
        this.type(2)

        if (resumeVel == true && O(this._linVel)) {
            this.linVel(this._linVel)

        }
        this._linVel = null

        return this
    }


    b.isDyn = function () {
        return this.GetType() == 2
    }

    b.isKin = function () {
        return this.GetType() == 1
    }
    b.isStat = function () {
        return this.GetType() == 0
    }



}; type()
b.lV=b.linVel=function(lV,y){var v=this.GetLinearVelocity()
    if(U(lV)){return v}
    if( N(y) ){lV=V(lV,y)}
    else if( N(lV) ){lV=V(lV,v.y)}
    this.SetLinearVelocity(lV)
    return this.wakeUp()
}
b.vX=function(x){
    if(U(x)){return this.lV().x}
    return this.lV(x, this.lV().y)}
b.vY=function(y){
    if(U(y)){return this.lV().y}
    return this.lV(this.lV().x,y)}
//lin vel from world point
b.lVW = b.linVelWor = function(v,y){v = V(v,y)
    return this.GetLinearVelocityFromWorldPoint( v.div() ).mult().dec(2)}
//lin vel from local point ... use case?
b.lVL = b.linVelLoc = function(v, y){v = V(v,y)
    return  this.GetLinearVelocityFromLocalPoint( v.div() ).mult().dec(2)}
b.aV=b.angVel= function(vel){
    if(U(vel)){return this.GetAngularVelocity() }
    this.SetAngularVelocity(vel)
    return this}
b.rot =function(angle,ms){var b=this,g=G(arguments),r=g[0],ms=g[1],
    a=Math.toDegrees(b.GetAngle()) //currAng
    if(U(r)){return a}

    if(N(ms)){b.stop= I(function(){b.rot(r,'+')}, ms)}
    else {b.SetAngle(Math.toRadians(g.p?a+r:g.n?a-r:g.m?a*r:g.d?a/r:r))}
    return b}
b.fixedRot= p.sFR= p.fR=function(bool){
    this.SetFixedRotation(bool? true: false)
    return this}
b.fixRot=function(){ return this.fixedRot(true) }
b.lD = b.linDamp=  function(damp){
    if(U(damp)){return this.GetLinearDamping()}
    this.SetLinearDamping(damp)
    return this}
b.aD = b.angDamp=   function(damp){
    if(U(damp)){return this.GetAngularDamping()}
    this.SetAngularDamping(damp)
    return this}
b.damp=function(l,a){
    l=N(l)?l:1000
    a=N(a)?a:l
    this.lD(l).aD(a)
    return this}
b.I= function me(i, v, v2){var b=this, o,g=G(arguments)

    if(A(g[0])){

        $l('arrrr')
        return b.I.apply(b, g[0])
    }




    o= N(g[1])?{i:V(g[0],g[1]),v:g[2]}
        :{i:g[0],v:g[1]}
    o.i=o.i||b.worldVec().div(40)
    o.v=o.v||b.GetWorldCenter()

    b.ApplyImpulse(o.i, o.v)
    return b}//apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
b.F = b.constF= function(v, c, c2){//b.applyForce = p.aF  =
    var b=this, g=G(arguments), v=g[0],c=g[1],c2=g[2]

    if( N(c) ){ return b.F(  V(v,c), c2  ) }

    if( U(c) ){ c = b.worldCenter() } // gotta adjust this

    b.ApplyForce(v,c)

    if(g.p){
        cjs.tick(function(){  b.ApplyForce(v,c)  })
    }

    return b}      //apply force. pass impulse as two nums, or obj //and pass in location, defaults to body center
b.mass = function(m){

    if( U(m) ){  return ( this.GetMass() * 900 ) / 100 }

}
//world center
b.wCent=   p.wC=b.cent=function(){var b=this,w= b.wor()
    var g=G(arguments)

    if(g.P){return b.GetWorldCenter().mult() }    //  p.worldCenter= p.gWC= function(){return this.GetWorldCenter()}

    b.XY(
            w.W/2, w.H/2
    )
    return b}
b.worldCenter=  function(){ return this.GetWorldCenter()  } //  p.worldCenter= p.gWC= function(){return this.GetWorldCenter()}
//world point
b.wPt = b.wPoint = b.worldPoint = b.wP   =function(x,y){return this.GetWorldPoint(  V(x,y).div()  ).mult()}
// world vector
b.wV = b.worldVec=function(v, y){

    if( N(v) && N(y) ){ v = V(v, y) }

    if( U(v) ){ v = V(0, -100) }

    return this.GetWorldVector( v )

}
//transform
b.tf =b.transform=function(tf){
    if(U(tf)){return this.GetTransform() }
    this.SetTransform(tf)
    return this}
//next
b.next = b.n = b.gN =function(){ return  this.GetNext()   }
b.L= function linear(vx, vy, damp){var b=this
    if(U(vx)){b.lV(0,0).lD(0)}
    else {
        b.vX(vx)
        if(N(vy)){b.vY(vy)}
        if(N(damp)){b.lD(damp)}}

    return b}
b.XX = b.destroy = b.kill = function(){

    if(this.sprite){this.sprite.remove()}

    _.each(this.fixts(), function(f){

        f.removeSprites()
        //if(f.sprite){f.sprite.remove()}

    })

    this.sprite=null
    this.SetActive(false)

    this.wor().DestroyBody(this)

}//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}
b.mid=function(){var b=this,w= b.wor()

    return   b.XY(w.w/2, w.h/2)

}
player=function() {
    b.moveInCircle = function(rad, speed){

        var g=G(arguments),rad=N(g[0])?g[0]:100,
            speed=N(g[1])?g[1]:2,
            toRad=Math.toRadians, cos=Math.cos,  sin=Math.sin,
            b=this,
            ang=0,
            x=b.X(),
            y=b.Y(),
            bX,
            bY

        cjs.tick(function(){
            ang += toRad(speed)

            bX= rad * cos(ang)
            bY= rad * sin(ang)

            if(g.p){bY*=2}
            if(g.n){bX*=2}


            b.XY(bX+ x, bY+ y)
        })

        return this}

//b.relPos=function(){return this.X() + this.stg().X()}



    b.byI=b.byImp=function(i){var k=cjs.Keys
        if(k.right){this.I(i,0)}
        else if(k.left){this.I(-i,0)}
        return this}

    b.byV=b.byVel=function(v){var k = cjs.Keys
        if (k.right) { p.lV(v,0) }
        else  if (k.left) { p.lV(-v,0) }
        return this}

//move towards x,y (or body?)
    b.towards=function(x,y,speed){  //if(isBody(x)){return self(x.X(), x.Y(), y)}

        speed = !N(speed)?5 : speed>10?10:speed
        speed = (11 - speed)*20


        var b=this,

            lV=V(
                    x - b.X(),
                    y - b.Y()

            ).div( speed  )

        return this.lV(lV)

        //more realistic to accelerate, via forces?

    }
    TOWARDS=function(){w=b2d.W({g:0})

        b = w.B(500,300,100)

        y = w.ship()


        cjs.tick(function(){

            b.towards( y.X(), y.Y(),9  )

        })

    }

    b.marioJumping = function () {
        var p = this, k = cjs.Keys

        p.fixRot().trig('feet')

        cjs.tick(function () {

            if (p.trig.feet && k.up) {
                if (k.right) {
                    p.lV(20, -60)
                }
                else if (k.left) {
                    p.lV(-20, -60)
                }
                else {
                    p.lV(0, -80)
                }
            }

            if (k.right) {
                p.lV(40, -10)
            } else if (k.left) {
                p.lV(-40, 10)
            }

            if (k.down) {
                p.trig.feet = 'true'
                p.I(0, 20)
            }

        })

        return this
    }
    b.jumping = function (y, x) {
        var k = cjs.Keys
        if (k.up) {
            if (k.right) {
                this.lV(x, -(y - x))
            }
            else if (k.left) {
                this.lV(-x, -(y - x))
            }
            else {
                this.lV(0, -y)
            }
        }
        return this
    }
    b.polyBul = function () {

        var vec = this.GetWorldVector(V(0, -100)),

            point = this.worldPoint(0, -50)

        bullet = this.W()
            .polyBul(point.x, point.y, 4, 4, 'w')
            .den(1)
            .lD(0)
            .lV(vec.div(5))


        w.end(function (cx) {
            cx.destroyIf('polyBul')
        })

        return bullet.K('polyBul')
    }
    b.thrustify = function () {
        var p = this //takes a spritebox!//uses cjs.watchKeys()

        this.angDamp(.5)

        cjs.Keys({
            l: function () {
                p.rot(8, '-')
            },
            r: function () {
                p.rot(8, '+')
            },
            d: function () {
                p.I().p('thrust')
            },
            u: function () {
                p.p('shoot')
            }})

        return this
    }
    b.thrustControl = function () {
        var body = this
        cjs.tick(function () {
            b2d.controls.thrust(body)
        })
        return body
    }
    b.shoot = function () {
        var vec, bullet

        bullet = this.wor().bullet(abovePlayerGlobally(this)).bindSprite('me', 0.15)

        vec = this.GetWorldVector(V(0, -100))
        bullet.I(vec.div(20))


    }
    b.bindKeyboard = function (cont) { //p.moveListener=
        var that = this

        control = (b2d.controls[cont] || b2d.controls.trickJump )

        control()

        cjs.tick(function () {
            that.rot(0)
            that.world().each(
                function (body) {
                    if (body.is('destroy')) {
                        body.destroy()
                    }
                }
            )
        })
    }  //b.warpToTopLeft=function(){ return this.XY(200, 100)}
    b.controlMe = function (control) {
        var that = this

        cjs.tick(function () {
            b2d.controls[control || 'standard'](that)
        })

        return this
    }
    b.marioWarping = function () {
        var p = this
        cjs.tick(function () {
            if (p.Y() < 0) {
                p.Y(300)
            }
            if (p.Y() > 300) {
                p.Y(0)
            }
            if (p.X() < 0) {
                p.X(600)
            }
            if (p.X() > 600) {
                p.X(0)
            }
        })
        return this
    }
    b.footListenerGreatButIGuessAlreadyDeppedKeepForAWhile = function () {
        var body = this


        var listener = b2d.listener()
            .begin(function (cx) {
                var bod
                if (fixt = cx.with('feet')) {
                    fixt.gB().trig.onGround = true
                }
            })

            .end(function (cx) {
                if (cx.with('feet')) {
                    body.trig.onGround = false
                }
            })

        this.GetWorld().listen(listener)

        return this
    }//b.feetListener =function(){return this.listener('feet')}

    b.warp =  function(p){
        var b=this,w=b.W()
        cjs.tick(function(){
            if(b.Y()<0){b.Y(w.H)}
            if(b.Y()>w.W){b.Y(0)}
            if(b.X()<0){b.X(w.W)}
            if(b.X()>w.W){b.X(0)}})
        return b}

    b.mario = function () {
        var b = this
        b.canJump = true
        b.onGround = false

        b.fixRot()

        cjs.tick(function () {
            var k = cjs.Keys
            if (b.onGround) {// if on ground
                if (k.up) {// if jumping
                    if (b.canJump == true) {
                        b.p('jump').I(0, -44);
                        b.canJump = false
                    }
                }
                else { // if not jumping
                    if (k.left) {
                        b.I(-20, 0)
                    } // p.dir(0)
                    if (k.right) {
                        b.I(20, 0)
                    }
                }
            } //p.dir(1)
            else {// if in air !!!
                if (k.left) {
                    b.dir(0);
                    b.I(-1, 0)
                }
                if (k.right) {
                    b.dir(1);
                    b.I(1, 0)
                }
            }
        })

        b.wor().beg(function () {  // ???
            b.canJump = true
            b.p('walk')
        })


        return this

    }
    b.arrowMove = function () {
        var body = this

        $.key({

            l: function () {
                body.dir('left').move()
            },
            r: function () {
                body.dir('right').move()
            },
            u: function () {
                if (body.dir() == 'left') {
                    body.I(5, -12)
                }
                else if (body.dir() == 'right') {
                    body.I(-5, -12)
                }
            }

        })

        return this
    }
    b.diff = b.dif = function (x, y) { // compare with DIF  - achtung!
        return {
            x: x - this.X(),
            y: y - this.Y()
        }
    }
    b.cam = function (x, y) {
        this.stg().XY(this.diff(x, y))
        return this
    }
    b.follow = function (x, y) {
        var b = this
        cjs.tick(function () {
            if (O(b.sprite)) {
                b.cam(x, y)
            }
        })
        return this
    }


}; player()

/*
b2d.body = b2d.bodyDef = BodyDef = bDf =function(x,y){

    var bodyDef = new b2BodyDef()
    x=N(x)?x:300
    y=N(y)?y:300
    bodyDef.xy(x,y)
    return bodyDef
}
*/
b.clone= function (x, y, a) {var b=this


    x = N(x) ? x : b.X()
    y = N(y) ? y : b.Y()
    a = N(a) ? a : b.rot()



    b1 = w.B(x, y).type(b.type()).rot(a)

    _.e(b.fixts(), function(f){

        var h, x, y, r

        if (f.isCirc()) {

            h = f.shape()
            x = h.m_p.x * 30
            y = h.m_p.y * 30
            r = h.m_radius * 30

            b1.cir(r, x, y, 'w')

        }

        else {
            b1.poly({c:'r', v: f.verts()})
        }

    })

    return b1

}
b.fs=  b.e=b.fixts=b.each=b.eachFixt=function(fn){

    var b=this,  fl=b.f(),  g=G(arguments),
        fn = g[0],

        arr = []

    while (fl) { arr.push(fl); fl = fl.GetNext() }
    if (g.p) {//order by biggest
        arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
    if (g.n) {//order by smallest
        arr = arr.sort(function (a, b) {return a.area() - b.area()}) }


    if (F(fn)){ _.e(arr, fn); return b }
    return arr

}
b.E = b.clr = b.empty = b.clear = function () {
    return this.fixts(function (f) {
        f.kill()
    })
}
b.hit= b.h=function (x, y, dot) {
    var b = this, w = b.W(), hit

    if (dot == true) {
        w.dot(x, y)
    }

    b.eachFixt(function (f) {
        if (f.hit(x, y)) {
            hit = true
        }
    })

    return hit


}
b.num = b.count = function () {
    return this.m_fixtureCount
}
b.DFR = b.DFB = function (d, f, r) {
    return this.den(d).fric(f).rest(r)
}
b.DBF = function (d, r, f) {
    var b = this
    b.den(d)
    if (N(r)) {
        this.rest(r)
    }
    if (N(f)) {
        b.fric(f)
    }
    return b
}
b.Xf = b.destroyFixt = b.destroyFixture = b.dF = function (fixt) {
    this.DestroyFixture(fixt)
    return this
}
b.C = function (c) {
    return this.each(function (f) {
        f.C(c)
    })
}
b.d=  b.den=function(d){var b=this

    if (U(d)) {
        return b.f().GetDensity()
    }

    b.fs(function(f){
        f.SetDensity(d)
    })

    b.ResetMassData()
    return b
}
b.fr=  b.fric = function (fr) {var b=this
    if(U(fr)){return b.f().GetFriction()}
    b.fs(function(f){
        f.SetFriction(fr)
    })
    return b
}
b.r=  b.bo=b.rest=function(r){var b=this

    if (U(r)) {
        return b.f().GetRestitution()
    }

    b.fs(function (f) {
        f.SetRestitution(r)
    })

    return b


}
b.grp = function (i) {var b=this
    f = b.f()
    if (U(i)) {return f.grp()}
    f.grp(i)
    $l('set to ' + i)
    return b

}
b.H= b.shp=b.shape=b.getShape=function () {
    return this.fixt().shape()
}
b.rad = function(){return this.shp().m_radius * 30}
b.sensor = b.iS = function (isSensor) {
    var f = this.fixt()
    if (U(isSensor)) {
        return f.m_isSensor
    }
    f.m_isSensor = isSensor
    return this
}
b.sense = b.sens = function () {
    this.list().sensor(true);
    return this
}//turns on
b.sen = function () {
    return this.sensor(!this.sensor())
}//toggles
b.f= b.fixt= function(){//=b.listb.H=
    var b = this, g = G(arguments),
        ag=g[0],l

    if(U(g[0])){
        return b.GetFixtureList()

    }

    l = g.z
    if(S(_.f(g))){l--}
    if(S(_.l(g))){l--}

    if (A(g[0]) && U(g[1])) {
        _.e(g[0],
            function (a) {
                if (g.n) {a.push('-')}
                b.f.apply(b, a)
            })
    }

    else if (S(g[0]) && A(g[1]) && U(g[2])) {
        _.e(g[1], function (f) {
            if (b2d.isFD(f)) { b.f(f).C(g[0]) }
            else {
                if (!S(f[0])) { f.unshift(g[0]) }
                if (b2d.isFD(f[1])) { b.f(f[1]).C(f[0]) }
                else { b.f.apply(b, f) }}})}
    else if (b2d.isFD(g[0])){ return b.CreateFixture(g[0])}
    else if (S(g[0]) && b2d.isFD(g[1])){b.CreateFixture(g[1]).C(g[0])}
    else if (O(g[1])) {
        o=S(g[0])? {c:_.f(g),v:_.r(g)}:{v: g}
        if (g.n) {o.s=1}
        b.sep(o)}
    else if (l==1||l==3) {
        o= {c:g[0], r:g[1], x:g[2], y:g[3]}
        if(g.n){o.s=1}
        b.cir(o)}
    else { if(g.n){g.push('-')}; b.rec.apply(b, g) }

}; BF = function(){W()

    w.ball()

    b = w.S(400, 300)
    b.f('o', 50)
    b.f('r', 50, 50)
    b.f('b', 50, 50, 50)
    b.f('g', 50, 50, 50, 50)
    b.f('w', 50, 50, 50, 50, 50)
    b.f('u', [-100, 0], [0, -50], [200, -10])


    b2 = w.D(600, 300).f([
        ['o', 50],
        ['r', 50, 50],
        ['b', 50, 50, 50],
        ['g', 50, 50, 50, 50],
        ['w', 50, 50, 50, 50, 50],
        ['u', [-100, 0], [0, -50], [200, -10]]
    ])

    b3 = w.D(600, 300).f('y', [
        [50],
        [50, 50],
        [50, 50, 50],
        ['g', 50, 50, 50, 50],
        ['w', 50, 50, 50, 50, 50],
        ['u', [-100, 0], [0, -50], [200, -10]]
    ])



}
b.cir= function(o){

    var b=this,g=G(arguments), o,
        fd,h,f


    //if passed array, it assumes it is arguments for ONE cir
    if(A(g[0])){return b.cir.apply(b, g[0])}


    //if you pass at least two objects, it makes multiple cirs and passes back b
    if(O(g[1])){_.e(g,
        function(c){b.cir(c)}
    ); return b}

    // can pass obj
    // can pass: c C [r] [x] [y]
    // can pass: c [r] [x] [y]
    // can pass: [r] [x] [y] [c] [C]

    o = O(g[0])?g[0]
        :S(g[1])?{c:g[0],C:g[1],r:g[2],x:g[3],y:g[4]}
        :S(g[0])?{c:g[0],r:g[1],x:g[2],y:g[3]}
        :{r:g[0],x:g[1],y:g[2],c:g[3],C:g[4]}

    //if passed obj, can have more options
    // q defaults to 'yes, use sep automatically'
    o.q = D(o.q)? o.q: true

    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.r = _.tN(o.r,40)
    o.w = _.tN(o.w,50)
    o.h = _.tN(o.h, o.w||100)
    o.a = _.tN(o.a)
    o.d = _.tN(o.d, 0.5)
    o.b = _.tN(o.b, 0.5)
    o.f = _.tN(o.f, 0.5)
    //set sensor
    o.s = D(o.s)? o.s: 0; if(g.n){o.s=1}
    fd = new b2d.FixtureDef
    fd.d(o.d).r(o.b).fr(o.f)
    fd.shape = new b2d.CircleShape(o.r/30)
    fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
    fd.isSensor = o.s? true : g.n? true: false
    f = b.f(fd)
    if(o.k){f.K(o.k)}

    if(o.c!=0){f.bS(w.s.h().cir(o))}

    return f

}
b.rec=  function(c, W, H, x, y, a){
    var b=this,w= b.wor(),
        g= G(arguments),
        c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],

        fD,f,h,k, o,p

    if(A(g[0])){return b.rec.apply(b,arguments)}
    if(O(g[1])){
        _.each(arguments, function(g){
            b.rec(g)
        })
        return b}
    if(O(g[0])){o=g[0]} else {
        if (N(g[0])) {
            g.unshift(null)
        }
        o = _.extend({c: g[0], w: g[1]},
            S(g[2]) ? {k: g[2]} :
                S(g[3]) ? {h: g[2], k: g[3]} :
                    S(g[4]) ? {h: g[2], x: g[3], k: g[4]} :
                        S(g[5]) ? {h: g[2], x: g[3], y: g[4], k: g[5]} :
                        {h: g[2], x: g[3], y: g[4], a: g[5]})}

    b2d.oDef(o)
    fD = new b2d.FixtureDef()
    fD.den(o.d||.5)
    p = new b2d.PolygonShape()
    p.SetAsOrientedBox(o.w/60,o.h/60,V(o.x,o.y).div(),
        Math.toRadians(o.a))
    fD.shape = p

    if(o.s||g.n){
        fD.isSensor = true;
        o.o= _.tN(o.o, 0.8)}

    f = b.f(fD)

    if(o.k){f.K(o.k)}
    if(S(o.c)){f.bS(w.s.rec(o))}
    return f

}



b.pol=  b.poly=function me() {var b = this, w = b.W(), g = G(arguments),
        v, h, f, fd, n, fs, h, mult, o


    if (A(g[0]) || !O(g[0])){
        $l('....')
        if (!g.length > 2){return me.apply(b, g)}
        o = S(g[0]) ? { c: g[0], V: _.r(g) } : {c: 'p', V: g}
        if (S(_.l(o.V))) {o.k = o.V.pop()}
        f = b.f(b2d.poly.apply(null, o.V))
        if (o.k) {f.K(o.k)}
        if (o.c) {f.bS(w.s.poly(o.V, o.c, o.c))}
        return f}


    else {


        o = defaults(g[0])
        $l('dd <- defaults(o)')
        dd=o

        if(o.X) {b.clear()}
        if(o.q==false){convex(); return f}
        n = b.num()
        if(O(o.v[0][0])){_.e(o.v, function(v){b2d.sep(b,v)})}
        else {b2d.sep(b,o.v); o.v=[o.v]}
        fs = _.f(b.fs(), b.num() - n)
        _.e(fs, fSetup) //w.s.h().c(o).lt(o.v) // w.s.h().poly(o)
        if (o.bm) {  b.bS(w.s.h().bmV(o)) }
        return fs.length > 1 ? fs : fs[0]}

    function fSetup(f){
        f.d(o.d).r(o.b).fr(o.f)
        f.m_isSensor = o.s ? true : false
        if (o.k) {f.K(o.k)}
        if (o.c) {f.C(o.c, o.C, o.l)}
        if (o.lf) {  f.bS( w.s.h().lf(o).lt(o.v))}
        if (o.rf) {f.bS(w.s.h().rf(o).lt(o.v) )}}
    function defaults(o) {o=o||{}
        o.x = _.tN(o.x);
        o.y = _.tN(o.y);
        o.a = _.tN(o.a)
        o.d = _.tN(o.d, 0.5);
        o.b = _.tN(o.b, 0.5);
        o.f = _.tN(o.f, 0.5)
        o.q = D(o.q) ? o.q : true;
        o.s = D(o.s) ? o.s : 0
        o.o = _.tN(o.o, 1)
    return o}
    function convex(){
        h = new b2d.PolygonShape()
        v = _.m(o.v, b2d.div)
        h.SetAsArray(v, v.length)
        fd = new b2d.Dynamics.b2FixtureDef()
        fd.shape = h
        fd.d(o.d).r(o.b).fr(o.f)
        f = b.f(fd)
        if (o.k) {f.K(o.k)}
        if (o.C) {f.C(o.C)}
    }
}




b.sep=  function () {var b = this, g = G(arguments),   n,c,o; if (U(g[0])){return}
    n=b.num()

    o=  b2d.isGPoly(g[0])?

    {c:'y',v:g[0]}

        :S(g[0])?   (O(g[1])&&O(g[2])? {c:g[0], v:_.r(g)}   : {c:g[0], v:g[1]})
        : A(g[0])?   ( S(g[0][0])? {c:g[0].shift(), v:g[0]}   : {v:g})
        :A(g[0])?   {v:g}


        : g[0]

    if(b2d.isGPoly(o.v)){o.v = o.v.vs()}

    if (g.n || o.clr) {b.clear()}

    b2d.sep(b, o.v)
    o.c = o.c || 'y'; if(o.c){_.e(_.f(b.fs(),b.num()-n), function (f) { f.C(o.c)}) }
    if (o.s){_.e(_.f(b.fs(),b.num()-n), function (f) {f.SetSensor(true)})}
    return b
}




b.sep1=  function () {var b = this, g = G(arguments),//b.fig=b.con=
    V=g[0],
    n=b.num(),
    c,o

    if (U(g[0])){return}

    o =  A(g[0]) ? (
        S(g[0][0])? {c:g[0].shift(), v:g[0]}   : {c:'w', v:g}
        )
        : g[0]

    if (g.n) {b.clear()}

    b2d.sep(b, o.v)
    if(S(o.c)){
        _.e(_.f(b.fs(),b.num()-n),
            function (f) { f.C(o.c)}) }
    if (o.s){
        _.e(_.f(b.fs(),b.num()-n), function (f) {f.SetSensor(true)})}

    return b
}





BSEP=function(){W(0)

    //the many ways to call b.sep..


    b=w.D(600,300,'x',40)

    // A(g[0]) && S(g[0][0])
    b.sep(  ['r', [-100,0] ,[0,-100], [100,100] , [0,-50]  ]  )


    // S(g[0])
    b.sep(   'y', [-10,0] ,[0,-200], [10,100] , [0,-150]      )


    //S(g[0]) && O(g[1]) && U(g[2])
    b.sep(   'b',  [  [-200,0] ,[-100, -200], [10,100]  ]   )


    b.sep({
        c:'o',
        v:[  [100,100] ,[200, -200], [300,-150] ],
        s:1
    })




}









/*
 A joint edge:
 -connects bodies and joints together in a joint graph
 (each body is a node and each joint is an edge)

 -belongs to a doubly linked list maintained in each attached body
 (Each joint has two joint nodes, one for each attached body)


 //these are all obj refs, not functions

 .joint
 .other(other body)
 .prev(b2JointEdge):the previous joint edge in the body's joint list
 .next(b2JointEdge):the next joint edge in the body's joint list
 */

fd= b2d.Dynamics.b2FixtureDef.prototype
fd.H= fd.setShape = function (shape) {
    if (U(shape)) {
        return this.shape
    }
    this.shape = shape;
    return this
}
fd.d= fd.den =  function (d) {var fd=this
    if (U(d)) {return fd.density}
    fd.density=d; return fd}
fd.fr= fd.f= fd.frc = fd.fric = function (f) {var fd=this
    if (U(f)) {
        return this.friction
    }
    fd.friction = f
    return fd
}
fd.r=fd.bo= fd.rst=fd.rest=function(r){var fd=this
    if(U(r)){return fd.restitution}
    fd.restitution=r; return fd
}
fd.grp= fd.group = fd.index = fd.gI = function (a) {
    if (U(a)) {
        return this.filter.groupIndex
    }
    this.filter.groupIndex = a;
    return this
}
fd.cat= fd.category = fd.cB = function (a) {
    if (U(a)) {
        return this.filter.categoryBits
    }
    this.filter.categoryBits = a;
    return this
}
fd.msk= fd.mask = fd.mB = function (a) {
    if (U(a)) {
        return this.filter.maskBits
    }
    this.filter.maskBits = a;
    return this
}
fd.bit= fd.bits = function (cat, mask) {
    return this.cat(cat).mask(mask)
}
fd.vrt= fd.verts = function () {

    var shape = this.shape,

        verts = shape.m_vertices,

        verts = [
            verts[0].mult(),
            verts[1].mult(),
            verts[2].mult(),
            verts[3].mult()]

    return $l(verts)
}
fd.sen= fd.sensor = fd.iS = function (isSensor) {
    if (U(isSensor)) {
        return this.isSensor
    }
    this.isSensor = isSensor ? true : false
    return this
}
fd.box= fd.sAB = function (a, b, p, A) {
    if (!p) {
        this.shape.SetAsBox(a / 30, b / 30)
    }
    else {
        this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
    }
    return this
}
fd.K = fd.addClass = function (clas) {
    if (U(clas)) {
        return this.getClass()
    }

    this.classes = this.classes || []
    this.classes.push(clas)
    return this
}
fd.getClasses = fd.getClass = function () {
    var g = G(arguments), classes

    this.classes = this.classes || []

    classes = this.classes.join(' ')
    if (g.p) {
        classes += ' : ' + this.body().getClasses()
    }


    return classes
}
fd.D = fd.data = function (data) {
    if (U(data)) {
        return this.userData
    }
    this.userData = data;
    return this
}


f = b2d.Fixture.prototype;//f = b2d.Dynamics.b2Fixture.prototype


f.W=function(){return this.B().W()}

f.n=  f.next=function(){return this.GetNext()}
f.d=  f.den=function(den){if(U(den)){return this.GetDensity()}
    this.SetDensity(den)
    this.body().ResetMassData()
    return this}
f.fr=f.f=  f.fric=function(fric){if(U(fric)){return this.GetFriction()}
    this.SetFriction(fric);return this}
f.bo= f.r=  f.rest=  function(rest){if(U(rest)){return this.GetRestitution()}
    this.SetRestitution(rest);return this}
f.hType=function(){return this.shp().m_type}
f.isCirc=function(){return this.hType()==0}
f.rad = function(){return this.shp().m_radius*30}
f.pos = function(){

    var h = this.shp()

    return V( h.m_p.x, h.m_p.y ).mult()

}  // for circs
f.pX=function(){return this.pos().x}
f.pY=function(){return this.pos().y}
f.H= f.shp=f.shape=function(h){var f=this//should let user specify dimensions of shape, not just have to pass formed shape in
    if(U(h)) {return f.GetShape()}
    f.m_shape = h // it DOES WORK!  but is this much different than just replacing the fixt?
    return f
}
f.mid= f.cen=f.cent=f.center=function(){var f=this,b= f.B(),w= b.W(), g=G(arguments),
    b=f.GetAABB(),
    v=Math.lineCenter(b.lowerBound,b.upperBound).mult()
    if(g.p){w.dot(v)}
    return  v
}//center point of its BOUNDING BOX
f.tP=  f.hit=f.testPoint=f.test=function(){

    var f=this,b=f.B(),w=b.W(),g=G(arguments),     //
        v=V(g[0],g[1])
    if(g.p){ w.dot(v) }
    return f.H().TestPoint(b.tf(), v.div()) //is a point within the fixture // very accurate

}
f.removeSprites=function(){var f=this

    f.sprites = f.sprites||[]

    _.each(f.sprites,

        function(s){
            if(O(s) && s.parent ){
                s.remove()
            }}
    )

    f.sprites=[]
    return this}
f.kill=f.remove=function(){var f=this, b=f.B()    // if(this.sprite  ){this.sprite.remove()}
    f.removeSprites()
    b.destroyFixt(f)

//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
}
f.grp =  function(i) {var f = this,
    fl = f.GetFilterData()
    if (U(i)) { return fl.groupIndex }
    fl.groupIndex = i

    f.SetFilterData(fl)

    return f //get/set for groupIndex
}
f.coll = function(k,fn){var f=this

    //ultimate func for FIXTURE COLL
    // you can specify what happens when a fixture hits:
    //ANYTHING
    // body/fixt of certain kind
    // specific fixt
    // specific body
    //but it its callback ALWAYS passed back the other fixt that was actually hit
    // and 'this' is set to THIS fixt within the cb
    //should cover class AND fixt AND body cases!!!

    if(F(k)){ fn=k; k='' }

    fn = _.b(fn,f)

    w.beg(function(cx){var fA=cx.A(), fB=cx.B()

        if(f.is(fA) && fB.of(k)){fn(fB, cx)}

        if(f.is(fB) && fA.of(k)){fn(fA, cx)}

    })

    return f
}

f.dyn=function(){var b=this.B(); b.dyn.apply(b,arguments); return this}
f.sen = f.sensor = function(s){var f=this
    if(U(s)){s=!f.m_isSensor}
    f.m_isSensor = s
    return f}
f.isSen=function(){return this.m_isSensor}
f.B=  f.body = f.gB = f.getBody=function(){return this.GetBody()}
f.wor = function(){return this.body().wor()}
f.kin=function(){var b=this.B(); b.kin.apply(b, arguments); return this}
f.stat=function(){var b=this.B(); b.stat.apply(b,arguments); return this}
f.isStat=function(){return this.B().isStat()}
f.isDyn=function(){return this.B().isDyn()}
f.isKin=function(){return this.B().isKin()}
f.bType=function(){return this.B().GetType()}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
f.isBType = f.isType = function(t){if(t){return this.bType()==t}}
f.rot=function(rot, g){ return this.B().rot(rot, g) }
f.killBody=function(){this.B().kill()}
f.cancel=function(){this.body().cancel(); return this}
f.switchTo=function(co){this.body().switchTo(co); return this}




ROT=function(){w=b2d.W()
    y = w.ship().XY(300,300).stat().rot(1,10)}
COLSENCLAS = function () { W()
    b = w.D(300, 300, 'r', [  [40],
        ['b', 30, 150, 'arm', '-'] ]) //BEAUTIFUL !!!
    w.beg(function (cx) {
        if (cx.with('arm')) {b.I(50, 50)}
        if (cx.with('arm', w.right)) {w.C('w')}
    })}
PINS = function () {W(20).Y()

    _.t(15, function (i) {

        w.B(  100+(i*60),   300,

            pin= [
                ['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
                ['w', 8, 0, -75],
                ['w', 8, -20, 20],
                ['w', 8, 20, 20]]
        )
    })


}
CIR = function () {W(0).Y().C('y'); //cjs.rulers()



    b = w.ball(300, 300, 10)

    b.cir({k: 'cir', r: 100, x: 200, y: -100,
        d: .2, b: .8, f: 100, c: 'x'})

    b.cir({    x: 200, y: 100, C: 'w',l:10   })

    b.rec({
        x: 200, y: -100,
        w: 400, h: 20,c:'b',l:10, C: 'x' })

    b1 = w.D(800, 300, 'b')
    b1.cir('r', 100)
    b1.cir('g', 80, 0, -60)
    b1.cir('b', 60, 0, -140)

    b1.cir('*', '*', 40, 0, -140)



}
FIXTS = function () {W({g: 0})
    b = w.D(300, 300)
    b.cir('o', 20)
    b.cir('b', 100, 140, 0)
    b.cir('r', 20, 100, 100)
    b.rec('g', 100, 100)
    b.rec('y', 100, 100, 50, 50)
    b.rec('p', 100, 100, -150, -150, 45)
    /*
     b2 = w.B(800, 300)

     b2.fixt(20).C('r')   //circ

     b2.fixt(20, 100, 100).C('b')  //circ

     b2.fixt(100, 50)   //rect
     b2.fixt(100, 50, -100, -100)   //rect
     b2.fixt(100, 50, -100, 0, 25)   //rect

     b2.fixt([
     [-100, 0],
     [0, -100],
     [100, 40]
     ])   //poly


     b3 = w.B(1000, 300)

     b3.fixt(b2d.fixt(20)) //circ
     b3.fixt(b2d.fixt(20, 100, 100)) //circ
     b3.fixt(b2d.fixt(100, 50)) //rect
     b3.fixt(b2d.fixt(100, 50, -100, -100)) //rect
     b3.fixt(b2d.fixt(100, 50, -100, 0, 25)) //rect
     b3.fixt(b2d.fixt([-100, 0], [0, -100], [100, 40])).C('g') //poly

     w.B(400, 500, 'o', [
     ['w', [30, 30], [20, 40], [10, 10]]
     ])
     */
}
CIRPOLY = function (){W()
    b = w.S(300, 300, 'r', 50)
    w.D(600, 400).poly(
        b2d.polyCirc(b.f().rad(),10))}


examples=function(){

    BED = function () {W()

        dick = [
            [50, 300, 0, -100],
            [50, 100, 150],
            [50, -100, 150]
        ]
        guyInBed = [
            [30],
            [20, 30, 30],
            [100, 30]
        ]
        w.D(400, 100, 'y', guyInBed)
        w.D(100, 100, 'r', [
            [guyInBed]
        ])
        w.D(100, 100, 'b', [
            [guyInBed],
            ['w', dick]
        ])
        w.D(400, 100, guyInBed)


    }
    FDOT = function () {W().C('z')

        b1 = w.S(400, 400, 'b', 50, 50)
        f1 = b1.f().dot()


        b2 = w.S(800, 400, 'g', 80, 80)
        f2 = b2.f().C('p').dot()



        vs = [  [-100, 0],  [0, 100],   [100, -20]  ]


        b = w.S(200, 200, 'o', vs).rot(25)

        f = b.f()

        vs = f.vs() // the points are relative

        v = f.wV()
        v= _.map(v, function(v){ return [v.x, v.y]  })

       // w.S(400, 200,'r', v )

        //w.S(600, 200, 'o', f.vs('+') )




               _.e(v, function (v) { w.dot(v) })

               //need a class the represents an array of verts.. is it the gPoly ??? !!!! no cant be neg
               //its a VertsArr

               b = w.S(100, 500, 50, 50)

               f = b.f()

         /*
              /*
               fh = f.shp()
               h = b2d.polyH(100, 50)
               f.shp(h)

       */
    }
    TESTPOLYF = function () {W()


        w.S(700, 200, 'o', [

            [40],

            b2d.cir(5).bits(1, 2), //cat is 1, but will only collide with 2's

            b2d.cir(10, 100, 100, '-'),
            ['w', b2d.cir(10, 100, -100) ],
            b2d.pol(10, 300, '-') , //sets as sensor
            ['b', b2d.pol(300, 10)],
            [ 'w', [100, 0], [150, -100], [200, 20]  ],
            [
                [200, 0],
                [250, -100],
                [300, 20],
                'arr'
            ],
            [ 'p', 50, 'pink' ]])


        b = w.S(300, 400, 'r', [

            b2d.pol(200, 100),
            ['g', b2d.cir(40, 100, 100).K('excited') ],
            [5, 100, 200, 0, 'orgasmic excited']
        ])


        //apparently b.fixt is LIFO

        f = b.f().dot('b').K('happy')

        $l('f is f: ' + f.is(f))
        $l('f is happy: ' + f.is('happy'))
        $l('f.next is excited: ' + f.next().is('excited'))
        $l('f is orgasmic: ' + f.is('orgasmic'))

        w.db()


    }
    MASS = function () {W({g: 0})

        y = w.B(400, 200, 'y', 50).d(.1).lV(10)
        r = w.B(200, 500, 'r', 40).d(1)
        b = w.B(200, 500, 'b', 25).d(100)
        p = w.B(800, 200, 'p', 10).d(1000).lV(-10)
    }
   MOREFIXTS = function () {W()

        b2d.somePolyFixt = [
            [
                [-100, 0],
                [0, -100],
                [100, 0],
                [60, 50]
            ]
        ]
        b2d.compoundShape = [
            [50, 10],
            [60, 30, 0, 0, 40],
            [120, 30, 0, 0, 29],
            [60, 10, 0, 50, 60],
            [84, 10, 15, 80, -120]
        ]
        b2d.compoundShape2 = [
            [50, 10],
            [20, 20],
            [20, 10, 0, 0, 10],
            [40, 10, 50, 0, 45],
            [84, 10, 15, 80, -120],
            [60, 10, 0, 50, 60 ]
        ]
        b2d.compoundStar = [
            [10, 10],
            [20],
            [4, 80, 10, 30, 135],
            [4, 80, 0, 0, 45],
            [4, 80, 100, 0, 90],
            [4, 80, 0, 0, 180]
        ]

        w.D(100, 100, b2d.somePolyFixt)
        w.D(200, 100, b2d.compoundShape)
        w.D(300, 100, b2d.compoundShape2)
        w.D(400, 100, b2d.compoundStar)

        w.S(200, 200, 'w', 80, 140, 30, 140, 25)
        w.S(500, 400, 'w', [
            [20, 20, -100, 50, 60],
            [100, 120, 0, 0, 100],
            [100, 20],
            [10, 300]
        ])

        w.B(400, 400, [
            ['b', 30],
            ['y', [-100, 0], [0, -100], [100, -20], [50, 20]]
        ])
        w.S(100, 200, 'w', 50, 50)
        w.B(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!

        w.me(400, 200)
        w.me(400, 300)
        w.me(400, 400)

         w.addTenBalls()
    }

    CUPS = function (o) {
        W(10)


        cup = [

            [20, 20],
            [100, 40, 0, 40, 0],
            [200, 40, -80, -40, 260],
            [200, 40, 80, -40, -80]
        ]

        cup2 = [
            [100, 40, 0, 40, 0],
            ['g', 200, 40, -80, -40, 260],
            ['g', 200, 40, 80, -40, -80],
            [100]
        ]
        cup3 = [
            [100, 40, 0, 40, 0],
            [200, 40, -80, -40, 260],
            [200, 40, 80, -40, -80],
            [34, -80, -130],
            [34, 80, -130]
        ]

        w.B(280, 500, 'r', cup)

        b = w.B(280, 500, 'r', cup)

        w.B(600, 500, 'b', cup2)
        w.B(900, 500, 'y', cup3)
        w.B(100, 100, 'o', 30)
        w.B(100, 100, 'o', 30)
        w.B(100, 100, 'o', 30)
        w.S(150, 220, 'u', 50, 100)
//W.fluffy()


    }

    MAZE = function () {W().Y()


        maze = [
            [1, 0, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]



        w.grid(maze, 100, 200, 20, 30)

        w.S(400, 200,'b', 10)
    }





    CAVE = function () {W(0).Y()

        w.S(0, 0, 't', [
            [500, 500, 600, 100],
            [500, 400, 500, 100],
            [500, 300, 500, 100],
            [500, 350, 450, 100],
            [320, 400, 50, 600]
        ])
    }


    NAMESPACE = function () {
        b2d.fixts = {}
        b2d.fixts.tri3 = [
            [-100, 0],
            [0, -50],
            [400, 0]
        ]
        b2d.fixts.c50 = [50]
        w.D(200,200, 'b', b2d.fixts('tri3'))

        w.D(200,200,'r', b2d.fixts('c50'))


    }

    FRICKY = function () {W()
        b2d.fricky = [
            [10, 10],
            [20, 40, 0, 0, 90, [1, 0, 0]],
            [20, 40, 0, 0, 180, [1, 0, 0]]
        ]
        b2d.bouncy = [
            [10, 10],
            [20, 40, 0, 0, 90, [1, .9, 1]],
            [20, 40, 0, 0, 180, [1, .9, 1]]
        ]
        b2d.massy = [
            [10, 10],
            [20, 40, 0, 0, 90, [2, .5, 1]],
            [20, 40, 0, 0, 180, [2, .5, 1]]
        ]
        b2d.fluffy = [
            [10, 10],
            [20, 40, 0, 0, 90, [.1, .5, .1]],
            [20, 40, 0, 0, 180, [.1, .5, .1]]
        ]
        w.S(600, 100, b2d.fricky)
        w.S(700, 100, b2d.bouncy)
        w.S(800, 100, b2d.massy)
        w.S(900, 100, b2d.fluffy)
    }
    MAKEWALLS = function () {
        makeWalls2 = [
            [10, 300, 20, 460],
            [990, 300, 20, 460],
            [250, 0, 400, 20],
            [730, 0, 400, 20],
            [250, 590, 400, 20],
            [730, 590, 400, 20]
        ] //bas in the canvas size?
        makeWallsTiny = [
            [10, 300, 20, 600],
            [990, 300, 20, 600],
            [300, 0, 1200, 20],
            [300, 590, 1200, 20]
        ]
        makeWallsFull = [
            [10, 300, 20, 1200],
            [990, 300, 20, 1200],
            [300, 0, 3000, 20],
            [300, 590, 3000, 20]
        ]
        makeWallsLong = [
            [10, 300, 20, 1200],
            [1600, 300, 20, 1200],
            [300, 0, 3000, 20],
            [300, 590, 3000, 20]
        ]
    }

    DESTROYJOINT = function () {W()


        w.floor.rest(0)

        y = w.ship().XY(400, 170).rot(265).stat()


        w.beg(function (cx) {
            cx.with('bul', function (f) {
                var b = f.B()
                this.B().kill()
                if (b != y) {
                    b.kill()
                }
            })
        })


        base = w.S(255, 50, 'r', 60, 15)

        body = link(255, 60)

        base.rev(body)


        /*

         prev= body

         w.rev(prev, body= link(255,90)  ); prev=body
         w.rev(prev, body= link(255,120)  ); prev=body

         bef =  body = link( 255, 150,'b' )

         w.rev(prev, body); prev=body


         red = body = link( 255, 180,'r' )

         j1= w.rev(prev, body); prev=body

         aft = body = link( 255, 210 ,'a')

         j2= w.rev(prev, body); prev=body



         je = aft.GetJointList()

         w.rev(prev, body=link(255,240)  ); prev=body
         w.rev(prev, body=link(255,270)  ); prev=body
         w.rev(prev, body=link(255,300)  ); prev=body
         w.rev(prev, body=link(255,330)  ); prev=body
         ball = w.circ(255, 330, 20, 'd').den(1).rest(0); w.rev(prev, ball)

         */


        function link(x, y, col) {
            col = col || 'w'
            return w.B(x, y, col, 10, 15).den(1).fric(0).rest(0)
        }


    }

    FORCES = function () {W({g: 0}).P(300,300,'thruster')

        b = w.B(400, 400, 'o', 200, 200).bS('me')

        cjs.t(function () {
            b.I(0, -400, b.GetWorldPoint(V(100, -100).div()))
        })

       // w.player('thrust')

    }


    LINVEL = function () {
        W({g: 0})
        _.t(10, function () {
            w.B(300, 300, 'y', 50)
        })
        setInterval(function () {
            w.each(function (b) {
                b.lV(0, 20)
            })
        }, 1000)
    }



    GRAVITY = function () {W({g: 0});
        w.B(100, 100, 10).constF(5000, -200000)
    }

    IMP = function () {W({g: 0})

        w.B(100, 500, 30, 30).rot(2)

        b = w.B(300, 500, 30, 30).rot(1).fixedRot(.2)

        t = {i: function () {
            b.I(V(10, -30), b.wC())
        },

            v: function () {
                b.lV(10, -60)

            },

            f: function () {

                setInterval(function () {
                    b.F(V(0, -3), b.wC())
                }, 100)

            }}

    }


    SCALE = function () {
        w = b2d.W() //hurts mouse joint
        var x = 400, y = 440, v = {x: 0, y: 0}
        w.S(400, 300, 40);
        w.S(290, 350, 40);
        w.S(280, 220, 40)
        rad = 10
        b = w.B(x, y, rad).lV(v)

        cjs.tick(function () {
            b.fixt().kill()
            x = b.X();
            y = b.Y();
            v = b.lV();
            rad += .1
            b = w.B(x, y, rad).lV(v)
        })
    }
    CLONE = function () {
        W({w: 'L'}).C('z').Y()
        b = w.B(400, 400, 'x', [
            [100, 200],
            ['g', 20, 100, 0],
            ['y', 20, 0, 100],
            ['b', 20]
        ])
        $.in(1, cl);
        $.ev(10, cl);
        function cl() {
            b.I(0, -1000).clone()
        }
    }
    BODY = function () {
        W(10)

        w.S(600, 600, 20, 1000)

        w.D(100, 400, 'z', [
            [50],
            [10, 300, '-']
        ])

        w.D(100, 300, 'b', 50)

        w.D(700, 300, 'b', 50)


        b = w.D(700, 400, 'y', [

            [50] ,
            ['r', 10, 300, '-' ],

            ['o', 50, 100, 0]

        ])

    }


    LAYERS = function () {
        W(0).Y()

        y.cent('+')

        w.dr(100, 100, 100, 100)
        w.dr(100, 200, 100, 100, '+')
        l1 = w.line(0, 100, 5000, 100, '-')
        l2 = w.line(0, 200, 5000, 200)
        l3 = w.line(0, 300, 5000, 300, '+')

        y2 = w.ship().cent('+')

    }
    SHOWCOUNT = function () {
        W().Y(200, 200)

        b = w.D(300, 300, 'r', 50)

        w.show(function () {
            return w.count()
        })
    }
    BEGEND = function () {
        W(0)

        b = w.B(500, 300, 'w', 50)


        w.beg(b, function () {
            w.B(R(1000, 50), R(500, 50), 'y', 5).rest(.8)
        })

        w.end(b,
            function () {
                w.B(R(1000, 50), R(500, 50), 'z', 5).rest(.8)
            }
        )


    }

    WORLD = function () {
        W(0)

        b = w.D(100, 100, 'r', 50)
        b1 = w.D(100, 200, 'b', 40)

        // w.grav(-10);setInterval(function(){w.grav('flip') }, 2000)

        w.AddController
        w.CreateController
        w.DestroyController
        w.GetGroundBody
        w.GetProxyCount
        w.SetDestructionListener
        w.SetBroadPhase
        w.SetWarmStarting
        w.SetContinuousPhysics
        w.IsLocked

        // proxies - represents an AABB in the broad-phase collision algorithm. Each b2Shape has a proxy.
        //  pair - a record created when two proxies overlap.
        //  manifold - the set of contact points for two convex shapes.


        w.locked = function () {
            return b2World.e_locked != 2
        }

        w.m_island
        w.m_flags


    }

    TESTQ = function () {
        W(2).Y(400, 500)

        _.t(5, function () {
            w.randRects()
        })
        n = w.qAB(function (f, b) {
            b.kill();
            return true
        }, 400, 100, 450, 150)
        w.pen(n + ' rects removed')
    }








    TINYREDBALLS = function () {

        W(1000, 500, 2000, 1000)


        y = w.ship(1000, 400).track()//w.H()-100


        //w.pXY(500,0)


        // w.S(500,400,'b',20,200) //why sensor not working any more??


        w.B(700, 300, 'r', [
            [4]
        ])
        w.B(800, 300, 'r', [
            [4]
        ])
        w.B(900, 300, 'r', [
            [4]
        ])

        w.B(1000, 300, 'r', [
            [4]
        ])

        w.B(1100, 300, 'r', [
            [4]
        ])
        w.B(1200, 300, 'r', [
            [4]
        ])
        w.B(1300, 300, 'r', [
            [4]
        ])

        /*
        w.s.HUD.dot('w', 500, 300)
        w.s.HUD.dot('w', 700, 300)
        w.s.HUD.dot('w', 1100, 300)*/

    }

    TANGRAMSSTAT = function () {
        w = b2d.W()


        b = w.brick(300, 300, 56, 56).rot(45)


        t = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(280, 260).rot(90).fixedRot(true).stat()

        t2 = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(342, 321).fixedRot(true).stat()

        bt = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(304, 220).rot(180).fixedRot(true).stat()

        bt2 = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(346, 262).rot(270).fixedRot(true).stat()

        mt = b2d.conc([V(-56, 28), V(0, -28), V(56, 28)]).XY(237, 324).rot(225).fixedRot(true).stat()

        p = b2d.conc([
            V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)

        ]).XY(240, 267).rot(90)
            .fixedRot(true).stat()

    }
    TANGRAMS = function () {
        W({g: 0})


        b = w.B(300, 300, 't', 56, 56).rot(45).den(1).damp(1000, 1000)

        t = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(280, 260).rot(90).den(1).damp(1000, 1000)


        t2 = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(342, 321).den(1).damp(1000, 1000)

        bt = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(304, 220).rot(180).den(1).damp(1000, 1000)

        bt2 = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(346, 262).damp(1000, 1000)
            .rot(270).den(1).damp(1000, 1000)

        mt = b2d.conc([V(-56, 28), V(0, -28), V(56, 28)])
            .XY(237, 324).den(1).damp(1000, 1000)

        p = b2d.conc([
            V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)

        ]).XY(240, 267).den(1).damp(1000, 1000)

    }
    BOOTBALL = function () {
        W({g: 0})

        b = w.B(270, 500, 'o', 40).rest(.5)

        r = w.S(300, 300, 'g', 100, 20).rot(20)

        r.fixt(b2d.poly(20, 40, 60, -20))
        r.XY(200, 500).den(.1).damp(1000, 1000).rot(100).dyn()//.angVel(200)
        r.rev(w.B(200, 500, 'w', 20).damp(1000, 1000).den(100))

        cjs.tick(function () {
            b.F(0, 20)
        })
    }

    BINDTF = function () {W()

        var tf = null
        b = w.D(100, 100, 'b', 100, 200)
        b2 = w.D(200, 200, 'p', 100, 150)

        cjs.tick(function () {
            var trf

            trf = b.transform().toArr()

            if (tf) {
                b2.SetTransform(b2d.tf(tf))
            }

            setTimeout(function () {
                tf = trf
            }, 1000)

        })


    }


    MASSCLICKJUMP = function () {W({g: 10})  //funny


        _.e([
                w.B(100, 200, 'r', 150, 100).d(.5),
                w.B(100, 10, 'b', 30, 60).d(.5).r(2),
                w.B(500, 400, 'y', 50, 100).d(.5)
            ],

            function (b) {
                b.$(function () {
                    this.I(0, -50)
                })

            })


    }


}; examples()

////////////////////////////////////////////////
old=function(){

    w.dbX=function(){var w=this

        w.line(0,0, w.W(), w.H(),'+')

        w.line(0,w.W(), w.H(),0, '+')

        if(N(w.w) && N(w.h)){
            w.line(0,0, w.w, w.h)
            w.line(0,w.W(), w.H(),0 )}}


w.rWx=function(col,h){var w=this
    if(!S(col)){h=col;col='b'}
    h=N(h)?h:w.H()
    return w.S(10, w.H()- (h), col,20,h)}
w.bWx=function(col,W){var w=this
    if(!S(col)){W=col; col='b'}
    W=N(W)?W:w.W()
    return w.S((W/2), w.H()+(h/2)-10, col,W,20)}
w.hWx =function(col,W,x,y){var w=this,g=G(arguments), cW=w.canvas.width, cH=w.canvas.height

    if(!S(col)){y=x;x=W;W=col;col='x'}

    if(U(y)){y=x;x=null}
    W=(W=='+')?cW:N(W)?W:cW/3
    x=N(x)?x:  cW/2-W/2
    y=(y=='+')?cH-10:(y=='-')?10:N(y)?y:cH/2
    y-= 10
    return w.R(col,W,20,x,y).bo(.2).K('wall')     //default bo?
}

w.boxWallsx=w.xWx= function(col,W,h){var w=this

    if(!S(col)){ h=W; W=col; col='o' }
    W= N(W)?  W: w.W()
    h= N(h)?  h: w.H()
    w.floor =  w.R(col, W,20, 0, h-20)
    w.right =  w.R(col, 20, h, W-20, 0)
    w.roof  =  w.R(col, W,  20, 0,0)
    w.left  =  w.R(col, 20,h,0, 0  )
    w.w = W
    w.h = h            // if(g.N){ w.camLims(  0,  w.w-w.s.W(),  0, w.h-w.s.H())}

    return w
}
b2d.setupDebugDrawx =setupDebugDrawx =function(){
    debugDraw = DebugDraw()
    debugDraw.SetSprite( w.context )
    debugDraw.dS( 30 )
    debugDraw.SetFillAlpha( .6 )
    //debugDraw.SetLineThickness( 3000 )
    debugDraw.SetFlags(  shB||jB   )
    w.dD(  debugDraw )}


w.bodyX=w.AX=function(bD, fD){var w=this, b

    if(b2d.isBDef(bD)){b = w.CreateBody(bD)}



    if(fD){b.fixt(fD)}

    //b.den(1)

    return b
}
w.dynX= w.dynamicX=function(x,y, fD ){var w=this, body

    if(O(x)){fD=y;y=x.y;x=x.x}
    x =N(x)?x: 500
    y =N(y)?y: 250

    return w.body( b2d.dyn(x,y), fD )}

    b.conc2=   function(col){


        var g = G(arguments),col=g[0],verts,
            b=this, fs, n1,n2, newFixts

        if(U(col)){return}
        verts=S(col)?_.rest(g):g

        if(g.n){b.clear()}
        n1=b.num()

        b2d.sep(b, verts)

        if(S(col)){
            n2=b.num()
            fs=b.fixts()
            newFixts=_.first(fs,n2-n1)
            _.each(newFixts,function(f){f.C(col)})}

        return this
    }

}


