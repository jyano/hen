/*
h =  b2d.Shapes.b2Shape.prototype
h.tP=  h.testPoint=function(tf, v){var h=this;return h.TestPoint(tf, v)}
h.test = h.point  = function(tf,x,y){var h=this; return h.TestPoint( tf, V(x,y).div() )}
*/




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


b2d.cH=  b2d.circH=b2d.circShape=b2d.circleShape=b2d.cSh=function me(r, x, y){
    var g=G(arguments), h
    if(A(g[0])){return me.apply(b2d, g[0])} //?
    r = _.tN(r, 25)
    h = new b2d.CircleShape(r/30); h.xy(x, y)
    return h}
b2d.H=   b2d.shape=function(){var g=G(arguments)
    return g[1]?
        b2d.pH(g)
        :b2d.cH(g[0])
}



b2d.cir=  b2d.circ=function(r,x,y, d){//hmm.. fixt doesnt have a rel loc.. its shape does
    //what if u want to change 'shape' of shape, but keep its rel loc?
    var g= G(arguments),
        x=_.tN(g[1]), y=_.tN(g[2]),
        r= _.tN(g[0],50),
        d=_.tN(d,1),
        f
    f=b2d.f( b2d.cH(r).xy(x,y)  ).den(d)
    if(g.n){f.isSensor=true}
    return f
}



b2d.poly=  function(){var g=G(arguments),

    pH = b2d.pH.apply(null, g),

    f = b2d.f(pH).den(1).fric(.2).rest(.2)

    if(g.n){f.isSensor = true}

    return f}
//make a rec or arr FIXTURE (SENSOR = TRUE)
b2d.polySens=  function(k){var g=G(arguments)//necessary?
    var p=b2d.poly.apply(null, _.r(g))
    p.sensor(true).K(k)
    return p}


b2d.fixtParse= function(arr){var g=G(arguments)

//takes array of arrays
//if something in array is NOT array, it assumes it is already a fixt
//but if it IS an array, it makes it into a fixture

    return _.m(arr, fn)

    function fn(f){var l
        if(!A(f)){return f}

        if(f.isSensor){return b2d.polySens.apply(null, f)}// weird
        l = f.length

        return (l==1)? b2d.circ(f[0])
            :(l==2)? b2d.poly.apply(null,f)
            :(l==3)? b2d.circ.apply(null,f)
            :b2d.poly.apply(null, f)}
}
b2d.A = b2d.Arr = function () {
    var g = G(arguments);
    return b2d.f(b2d.AH.apply(null, g)).den(.1)
}
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

//




b2d.hasVerts = function (poly) {
    return poly.m_List.get(0)
}

b2d.overlapping = function (b1, b2) {
    var v1 = b1.polyVerts(),
        v2 = b2.polyVerts()
    var p = v1.union(v2)
    return !(_.isEqual(p.verts(), v1.verts()) || _.isEqual(p.verts(), v2.verts()))
}



b2d.rec1 = function (W, H, x, y, a, d) {
    var g = G(arguments), r, f, o,
        p = new b2d.PolygonShape()
    if (O(g[0])) {
        p.arr.apply(p, g)
    }
    else if (N(g[0])) {
        o = {w: g[0], h: g[1], x: g[2], y: g[3], a: g[4], d: g[5]}
        o.w = _.tN(o.w, 50)
        o.h = _.tN(o.h, 50)
        p.box(o.w, o.h, o.x, o.y, o.a)
    }
    f = b2d.f(p).d(o.d || .5)
    if (g.n) {
        f.isSensor = true
    }
    return f

}



b2d.polyDot = function (V) {// see f.dots
    var t = 0
    _.e(A(V) ? V : V.verts(), //combine with b2d.verts
        function (v) {
            setTimeout(function () {
                w.dot(V(v))
            }, t) // w?????
            t += 100
        }
    )
} //w???


b2d.oDef= function(o){
    o=o||{}
    o.x= _.tN(o.x)
    o.y= _.tN(o.y)
    o.a= _.tN(o.a)
    o.c= o.c ||'z'
    o.C= o.C ||'w'
    o.w= _.tN(o.w,50)
    o.h= _.tN(o.h,50)
    return o}

cH=   b2d.CircleShape.prototype
cH.xy= function(x,y){var cH=this
    cH.SetLocalPosition(V(x,y).div())
    return cH
}
//
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
//




//

b2d.isFD=b2d.isFixtDef=function(fD){
    return O(fD) && fD.b2FixtureDef}
b2d.isFixt=function(fixt){
    if(!fixt){return false}
    return fixt.constructor.name=="b2Fixture"}

//
w = b2d.World.prototype



fixtDef=function(){
    fd = b2d.Dynamics.b2FixtureDef.prototype
    fd.H = fd.setShape = function (shape) {
        if (U(shape)) {
            return this.shape
        }
        this.shape = shape;
        return this
    }
    fd.d= fd.den =  function (d) {var fd=this
        if (U(d)) {return fd.density}
        fd.density=d; return fd
    }

    fd.f= fd.frc = fd.fric = function (f) {var fd=this
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


    fd.grp = fd.group = fd.index = fd.gI = function (a) {
        if (U(a)) {
            return this.filter.groupIndex
        }
        this.filter.groupIndex = a;
        return this
    }
    fd.cat = fd.category = fd.cB = function (a) {
        if (U(a)) {
            return this.filter.categoryBits
        }
        this.filter.categoryBits = a;
        return this
    }
    fd.msk = fd.mask = fd.mB = function (a) {
        if (U(a)) {
            return this.filter.maskBits
        }
        this.filter.maskBits = a;
        return this
    }
    fd.bit = fd.bits = function (cat, mask) {
        return this.cat(cat).mask(mask)
    }
    fd.vrt = fd.verts = function () {

        var shape = this.shape,

            verts = shape.m_vertices,

            verts = [
                verts[0].mult(),
                verts[1].mult(),
                verts[2].mult(),
                verts[3].mult()]

        return $l(verts)
    }
    fd.sen = fd.sensor = fd.iS = function (isSensor) {
        if (U(isSensor)) {
            return this.isSensor
        }
        this.isSensor = isSensor ? true : false
        return this
    }
    fd.box = fd.sAB = function (a, b, p, A) {
        if (!p) {
            this.shape.SetAsBox(a / 30, b / 30)
        }
        else {
            this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
        }
        return this
    }
    /*
     f.set=function(x,y){//dep?
     this.shape.Set(x,y)
     return this
     }

     f.sAB=function(a,b,p,A){//dep?
     if(!p){this.shape.SetAsBox(a/30,b/30)}
     else{ this.shape.SetAsOrientedBox(a/30,b/30,p,A)}
     return this}
     */
//fd.sSAP  = fd.setShapeAsAPoly=function(){
// return this.H( b2d.polyShape())}
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


    FDEF=function(){w=b2d.W()


        x = w.brick(400,400,200,300)

        b = w.dyn(200, 400,

            b2d.poly(100,200).K('fffffff sf')

        )


    }


}; fixtDef()




f = b2d.Dynamics.b2Fixture.prototype
f.C= f.color= function(c,C,l){var f=this,b=f.B(),w=b.W(),g=G(arguments),

    r, p, o

    o = O(g[0])? g[0] : {c:c,C:C,l:l}

    o.c= (o.c=='*')? $r() :o.c||'b'
    o.C=o.C||o.c
    f.removeSprites()
    h=w.s.h()

    if(f.isCirc()){$l('isCir')

        h.cir(

            f.pX(), f.pY(),f.rad(),
            o.c,o.C,o.l

        )}


    else {h.poly(f.verts(),o.c,o.C,o.l)}


    f.bS(h)
    return f
}; COL=function(){W().C('z')

    b = w.bump({c:'w', r:100})

    f=b.f()


    f.C('y')


    // f.removeSprites(); h=w.s.h().cir(0,0,100,'y'); f.bS(h)


    setTimeout( function(){b.dyn()}, 1000)
}
f.bS= f.bindSprite=function(j,a,x,y,al){//f.gx= f.spr= f.bindSprite2=
    var f=this,b=f.B(),s=b.wor().s,g=G(arguments),o
    f.sprites=f.sprites||[]

    o = cjs.isDisplayOb(j)? {j:j,a:a,x:x,y:y,o:al}
        : O(j)? j : {}

    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.a = _.tN(o.a)
    o.o = _.tN(o.o,1)

    f.sprites.push(o.j.op(o.o).a2(s))                      //takes any display object.  right now, just used for shapes//because bindSprite fetches the bm's by string. //but when i set up preloader, then i would use this i suppose :)                                                 //f.sprite = obj  //f.sprite.a2(stage)                                                 //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
    cjs.tick(function(){
        o.j.XY(b.X()+o.x,b.Y()+o.y)
            .rot(b.rot()+o.a)})                                    //if(!f.sprite){return}

    return f
}
f.n=  f.next=function(){return this.GetNext()}
f.d=  f.den=function(den){if(U(den)){return this.GetDensity()}
    this.SetDensity(den)
    this.body().ResetMassData()
    return this}
f.f=  f.fric=function(fric){if(U(fric)){return this.GetFriction()}
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
f.verts= function(){var f=this, b=f.B(), g=G(arguments), V //local verts

    V = _.m(f.shp().m_vertices, b2d.mult)  //local verts rotated locally by body's rotation

    if(g.p){V = _.m(V,function(v){return v.rot(b.rot())})}

    return V
}

f.stg = function(){return this.wor().s}
f.dot = function(c){var f=this, w=f.W(), v=f.mid(); if(S(c)){w.dot(c,v)} else {w.dot(v)}; return f}
f.dots=function(){var f=this; b2d.polyDot(f.wVerts()); return f}


f.dyn=function(){var b=this.B(); b.dyn.apply(b,arguments); return this}

f.sen = f.sensor = function(s){var f=this
    if(U(s)){s=!f.m_isSensor}
    f.m_isSensor = s
    return f}
f.isSen=function(){return this.m_isSensor}




b = b2d.Body.prototype

//MAKES A FIXTURE AND A SHAPE FOR IT
b2d.f=  b2d.fixt=b2d.fixtC=function(h){var g=G(arguments),
    l=g.length, f=new b2d.FixtureDef, h  // simply makes one fixt,
    // tries to set its shape
    // and returns it
    //you can pass in a pre-made shape
    //or..
    // if you pass it an array, it makes a polyH from it
    // from verts/arr (confirmed)
    // or if you passed in anything (number(s))
    // it makes a circle or poly shape, depending on how many numbers you passed
    if(b2d.isShape(g[0])){h=g[0]}
    else {
        h =   A(g[0])? b2d.pH.apply(b2d, g)
            :(l==1||l==3)? b2d.cH.apply(b2d, g)
            :b2d.pH.apply(b2d, g)}
    f.shape = h
    return f
}


b.f= b.fixt=b.list=function (fD) {
        var b = this, f;  if (U(fD)) {  return b.GetFixtureList()  }    // can pass a CODED array of fixts (will get parsed)           //p.createFixture = p.cF = b.fixt1 = b.shape =


    if (A(fD)) {

            _.e(

                b2d.fixtParse(fD),

                function (fd) {b.f(fd)})

            return b

        }



    if (!b2d.isFixtDef(fD)) {

            fD = b2d.fixt.apply(b2d, arguments)


    }



    f = b.CreateFixture(fD)


    if (A(fD.classes)) {
            _.e(fD.classes, function (k) {
                f.K(k)
            })

        }//?


    return f

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
b.poly = b.polyArr = b.convex = function (c, V, k) {
        var b = this, w = b.W(), g = G(arguments), h, f
//when and if should i call .conc/.sep ?
// i could auto-conc it.. but ill lose track of the fixts?
        if (g.length > 2) {
            if (S(c)) {
                V = _.r(g)
            } else {
                c = 'p';
                V = g
            }
        }//passing points direclty: ([],[],[]) or ('r',[],[],[])
        if (!S(c)) {
            if (S(c[0])) {
                V = _.r(c);
                c = c[0]
            } else {
                V = c;
                c = null
            }
        }// ['c', [[],[]] ]   or [[],[]]

        if (S(_.l(V))) {
            k = V.pop()
        }
        b.poly = function () {
            var b = this
            return b.f(
                b2d.poly.apply(null, arguments)
            )
        }
        f = b.poly.apply(b, V)
        if (k) {
            f.K(k)
        }
        if (c) {
            f.bS(w.s.poly(V, c, c))
        }
        return f
    }
b.sep=  b.fig = b.conc =  function (V) {
        var b = this, g = G(arguments),

            V = g[0], n = b.num(), c

        if (U(g[0])) {
            return
        }

        if (A(g[0])) {
            if (g.n) {
                b.clear()
            }
            if (S(g[0][0])) {
                c = g[0].shift()
            }
            o = {v: V, c: c}
        }

        else o = g[0]
        b2d.fig(b, o.v)

        if (S(o.c)) {
            _.e(_.f(b.fixts(), b.num() - n),
                function (f) {
                    f.C(o.c)
                })
        }
        if (o.s) {
            _.e(_.f(b.fixts(), b.num() - n),
                function (f) {
                    f.SetSensor(true)
                })
        }

        return b
    }

b.H = function(arg){
        var g = G(arguments),
            arg = g[0],
            b = this,
            len = length(g)
    if (U(arg)) {
            return b
        }
    if (A(g[0]) && U(g[1])) {                                       //passing a single array, suggest MULTIPLE fixts //[f1,f2,..]
            _.e(g[0], function (a) {
                if (g.n) {
                    a.push('-')
                }
                b.H.apply(b, a)
            })
        }
    else if (S(g[0]) && A(g[1]) && U(g[2])) {                                             //[col,[f1,f2,..]]
            _.each(g[1], function (f) {
                if (b2d.isFD(f)) {
                    b.f(f).C(g[0])
                }
                else {
                    if (!S(f[0])) {
                        f.unshift(g[0])
                    }                                     //f= _.map(f, function(a){return a})
                    if (b2d.isFD(f[1])) {
                        b.f(f[1]).C(f[0])
                    } else {
                        b.H.apply(b, f)
                    }
                }
            })
        }
    else if (b2d.isFD(g[0])) {
            b.f(g[0])
        }                                                   //fixtDef
    else if (S(g[0]) && b2d.isFD(g[1])) {
            b.f(g[1]).C(g[0])
        }                               //['color', fixtDef]
    else if (O(g[1])) {  //  if(g.n){g.push('-')}  //  b.fig(g)
            o = S(g[0]) ? {c: _.f(g), v: _.r(g)} : {v: g}
            if (g.n) {
                o.s = 1
            }
            b.fig(o)
        }
        // else if(O(g[0])){$l('o');o=g[0]
        //    if(o.t=='c'){  b.cir(o) }}
    else if (len == 1 || len == 3) {
            o = {c: g[0], r: g[1], x: g[2], y: g[3]}
            if (g.n) {
                o.s = 1
            }
            b.cir(o)
        }
    else {
            if (g.n) {
                g.push('-')
            }
            ;
            b.RECT.apply(b, g)
        }//rect
    function length(arr) {
            var len = arr.length
            if (S(_.first(arr))) {
                len--
            }
            if (S(_.last(arr))) {
                len--
            }
            return len
        }
    return b

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


b.shp = b.shape = b.getShape = function () {
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
//turns on

b.sense = b.sens = function () {
        this.list().sensor(true);
        return this
    }
//toggles


b.sen = function () {
        return this.sensor(!this.sensor())
    }




FIXTS = function () {
    w = b2d.W({g: 0})
    b = w.dyn(300, 300)
    b.CIRC('o', 20)
    b.CIRC('b', 100, 140, 0)
    b.CIRC('r', 20, 100, 100)
    b.RECT('g', 100, 100)
    b.RECT('y', 100, 100, 50, 50)
    b.RECT('p', 100, 100, -150, -150, 45)

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

}
DIF = function () {
    w = b2d.W()


    b = w.S(140, 140, 100, 100).rot(20).DIFF(
        w.S(100, 100, 100, 100).rot(45), '-')


    b3 = w.S(300, 400, 'w', 100, 100)
    b3.sub(//does not keep color!
        w.B(300, 400, 'r', [-100, 10], [-80, -40], [0, -200], [100, 0])
    )


    w.S(450, 300, 'w', 100, 100).minusPolyCirc(550, 300, 100, 20)


    fs = w.S(600, 380, [
        ['r', [-100, 10], [-80, -40], [0, -200], [100, 0]],
        ['b', 40, 70, 20, -20],
        ['o', 40, 70, -20, 20]
    ]).rot(-20).fixts()

    w.S(720, 400).sep(
        w.S(600, 400).fixt(b2d.poly(100, 100)).minus(fs[0], fs[1], fs[2]))


    b2 = w.S(830, 300)
    b2.poly(100, 100)
    b2.poly(100, 100, 0, 0, 45)
    b2.DIF(w.S(930, 400, 200, 200), '-')

    ///
    ///
    setTimeout(function () {
        b.dyn();
        b2.dyn()
    }, 3000)

}
CIRCTOPOLY = function () {
    w = b2d.W()
    b = w.S(300, 300, 50)
    w.B(600, 400).poly(b2d.polyCirc(b.fixt().rad(), 10))
}
BODYEACH = function () {
    w = b2d.mW()//works

    b = w.B(100, 100, [
        [40],
        [100, 200, 100],
        [50, 200],
        [200, 200, 300, 400]
    ])
    b.each(function (f) { //bind to this.. when u have time
        //f.SetSensor(true) //works
        // f.remove()
        // f.K('destroy')
        $l('shape type: ' + f.GetShape().m_type)
    })
}
GUYINBED = function () {
    w = b2d.W()

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
    w.B(400, 100, 'y', guyInBed)
    w.B(100, 100, 'r', [
        [guyInBed]
    ])
    w.B(100, 100, 'b', [
        [guyInBed],
        ['w', dick]
    ])
    w.B(400, 100, guyInBed)

}
COLSENCLAS = function () {
    w = b2d.W()

    b = w.B(300, 300, 'r', [
        [40],
        ['b', 30, 100, 'arm', '-']
    ]) //BEAUTIFUL !!!

    w.beg(function (cx) {
        if (cx.with('arm')) {
            b.I(50, 50)
        }
        if (cx.with('arm', w.right)) {
            w.C('w')
        }
    })
}
FDOT = function () {
    w = b2d.W()

    b1 = w.S(400, 400, 50)
    f1 = b1.fixt()
    f1.dot()

    b2 = w.S(800, 400, 80, 80)
    f2 = b2.fixt()
    f2.dot()
    f2.C('p')


    verts = [
        [-100, 0],
        [0, 100],
        [100, -20]
    ]

    b = w.S(200, 200, [verts]).rot(25)

    f = b.fixt()

    w.S(400, 200, [f.verts()])
    w.S(600, 200, [f.verts('+')])

    v = f.wVerts()
    _.each(v, function (v) {
        w.dot(v)
    })

    //need a class the represents an array of verts.. is it the gPoly ??? !!!! no cant be neg
    //its a VertsArr

    b = w.S(100, 500, 50, 50)
    f = b.fixt()
    fh = f.shp()

    h = b2d.polyH(100, 50)

    f.shp(h)
}
TESTPOLYF = function () {
    w = b2d.W();
    $l('testpolyf')

    w.S(700, 200, 'o', [
        b2d.circ(40),
        b2d.circ(5).bits(1, 2), //cat is 1, but will only collide with 2's
        b2d.circ(10, 100, 100, '-'),
        ['w', b2d.circ(10, 100, -100) ],
        b2d.poly(10, 300, '-') , //sets as sensor
        ['b', b2d.poly(300, 10)],
        [ 'w', [100, 0], [150, -100], [200, 20]  ],
        [
            [200, 0],
            [250, -100],
            [300, 20],
            'arr'
        ],
        [ 'p', 50, 'pink' ]])

    b = w.S(300, 400, 'r', [
        b2d.poly(200, 100),
        ['g', b2d.circ(40, 100, 100).K('excited') ],
        [5, 100, 200, 0, 'orgasmic excited']
    ])


    //apparently b.fixt is LIFO

    f = b.fixt().K('happy').dot('b')
    $l('f is f: ' + f.is(f))
    $l('f is happy: ' + f.is('happy'))
    $l('f.next is excited: ' + f.next().is('excited'))
    $l('f is orgasmic: ' + f.is('orgasmic'))

    w.db()


}
BH = function(){W()

    w.ball()

    b = w.S(400, 300)

    b.H('o', 50)
    b.H('r', 50, 50)
    b.H('b', 50, 50, 50)
    b.H('g', 50, 50, 50, 50)
    b.H('w', 50, 50, 50, 50, 50)
    b.H('u', [-100, 0], [0, -50], [200, -10])

    b2 = w.D(600, 300).H([
        ['o', 50],
        ['r', 50, 50],
        ['b', 50, 50, 50],
        ['g', 50, 50, 50, 50],
        ['w', 50, 50, 50, 50, 50],
        ['u', [-100, 0], [0, -50], [200, -10]]
    ])
    b3 = w.D(600, 300).H('y', [
        [  50],
        [  50, 50],
        [  50, 50, 50],
        ['g', 50, 50, 50, 50],
        ['w', 50, 50, 50, 50, 50],
        ['u', [-100, 0], [0, -50], [200, -10]]

    ])


}
MASS = function () {
    w = b2d.W({g: 0}).db()
    y = w.B(400, 200, 'y', 50).den(.1).lV(10)
    r = w.B(200, 500, 'r', 40).den(1)
    b = w.B(200, 500, 'b', 25).den(100)
    p = w.B(800, 200, 'p', 10).den(1000).lV(-10)
}
BOX2D=function(){w=b2d.W()

    b2d.somePolyFixt=[ [[-100,0],[0,-100],[100,0],[60,50]]]
    b2d.compoundShape= [[50,10],[60,30,0,0,40],[120,30,0,0,29],[60,10,0,50,60],[84,10,15,80,-120]]
    b2d.compoundShape2=[[50,10],[20,20],[20,10,0,0,10],[40,10,50,0,45],[84,10, 15,80, -120], [60,10, 0,50, 60 ]  ]
    b2d.compoundStar=[
        [10,10],[20],
        [4,80,10,30,135],
        [4,80,0,0,45],
        [4,80,100,0,90],
        [4,80,0,0,180]
    ]

    w.B(100,100,b2d.somePolyFixt )
    w.B(200,100,b2d.compoundShape  )
    w.B(300,100,b2d.compoundShape2  )
    w.B(400,100,b2d.compoundStar  )

    w.S(200, 200, 'w',80,140, 30,140,25)
    w.S(500,400,'w',[  [20,20,-100,50,60],  [100,120,0,0,100],  [100,20],  [10,300]])

    w.B(400,400,[['b',30],['y',[-100,0],[0,-100],[100,-20],[50,20]]])
    w.S(100,200,'w',50,50 )
    w.B(400,400,'p',[-100,0],[0,-100],[100,-20] ) //pass in points alone !!!!

    w.me(400,200)
    w.me(400,300)
    w.me(400,400)

    //w.addTenBalls() ..not color yet
}
CUPS=function(o){W(10)



    cup=[

        [20,20],
        [100,40,0,40,0],
        [200,40,-80,-40,260],
        [200,40,80,-40,-80]
    ]

    cup2=[[100,40,0,40,0],['g',200,40,-80,-40,260],['g',200,40,80,-40,-80],[100] ]
    cup3=[[100,40,0,40,0],[200,40,-80,-40,260],[200,40,80,-40,-80],[34,-80,-130],[34,80,-130]]

    w.B(280,500,'r',cup)

    b = w.B(280,500,'r', cup)

    w.B(600,500,'b',cup2)
    w.B(900,500,'y',cup3)
    w.B(100,100,'o',30)
    w.B(100,100,'o',30)
    w.B(100,100,'o',30)
    w.S(150,220,'u',50,100)
//W.fluffy()





}
MAZE=function(){w=b2d.W()



    maze=[
        [1,0,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,0,1],
        [1,0,0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1,1,1],
        [1,0,1,0,1,0,0,0,1],
        [1,0,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1]]

    y=w.ship()

    w.grid(maze,100,200,20,30)

    w.S(400,200,10)
}
GPC=function(){
    canvas =  can = $.can('y', 400,500).A()
    context = ctx = can.ctx()

    poly1 = Math.poly([[61,68],[145,122],[186,94],[224,135],[204,211],[105,200],[141,163],[48,139],[74,117]])

    poly2 = Math.poly([[131,84],[224,110],[174,180],[120,136],[60,167],])

    reset=(function self(){

        ctx.clearRect(0,0,400,400)
        ctx.drawPolys(poly1,'b', 0, -30 )
            .drawPolys(poly2,'r', 0, -30 )

        return self}())

    button=function(name,poly){
        $.button(name, function(e) {
            reset()
            ctx.drawPolys(poly,'g', 0,150)
        }).A()}


    button('difference',  poly1.difference(poly2) )
    button('intersection', poly1.intersection(poly2) )
    button('union', poly1.union(poly2) )
    button('xor',  poly1.xor(poly2) )



}
PINS=function(){w=b2d.W().db()//=SEPARATOR=COLORCONC
    pin=[['o',[-20,20],[0,-80],[20,20],[0,-40]],['w',8,0,-75],['w',8,-20,20],['w',8,20,20]]
    _.times(15, function(i){w.B(100 + (i*60), 300, pin)})
    w.ship()}
TERREASEL=function(){z()
    s= stage = cjs.stg(1600, 600).A()
    h = s.shape()
    h.f('b').dc(200, 200, 10)
    h2 = s.shape().X(700)
    h2.f('b').dc(0,0,10)

    tile=function(i,j){return [V(-5+i,130+j),V(-5+i,80+j),V(45+i,80+j),V(45+i,130+j)]}   // lower left //upper left//upper right//lower right
    draw=function(){terr=[]
        _.times(13,function(i){_.times(8,function(j){terr.push(tile(i*50,j*50))})})
        h.drawPolygons(terr,'b','r')}; draw()
    t=Math.poly(terr[101])
    doExplosion= function(e){v=V(e.stageX,e.stageY)
        exP = circ(v,100 )
        h.drawPolygon(exP,'z')
        c  = Math.poly(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
        // explosion polygon. This should be optimized in some way, checking only for terrain polygons
        // which are actually affected by the explosion.
        // Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
        // difference is calculated.
        iX = c.intersection(t)
        h2.drawPolygon(iX.verts())
        for (var i=terr.length-1; i>=0; i--) {totalArea=0}} // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
    circ=function(v,rad,prec){ prec = N(prec)?prec:20
        arr=[]; ang= 2 * Math.PI/prec
        _.times(prec , function(i){
            pX=v.x+rad*Math.cos(ang*i)
            pY=v.y+rad*Math.sin(ang*i)
            arr.push( V(pX,pY))})
        return arr} // listeners: basically we destroy the terrain with a mouse click or a mouse drag
    // stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
    // stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})

    stage.on('click', doExplosion)
    vv= [V(645,480),V(595,480),V(595,430),V(645,430)] //lower right//lower left//upper left//upper right
    h.drawPolygon(vv, 'z')
    vvv = [V(645,380),V(595,380),V(595,372),V(617,369),V(645,373)]
    h.drawPolygon(vvv, 'z')
}
TERR=function(){w=b2d.W()
    sep = b2d.separator()
    terr=[]
    circ=function(v,rad,prec){ prec = N(prec)?prec:20
        arr=[]
        ang= 2 * Math.PI/prec
        _.times(prec , function(i){
            pX = v.x+rad  * Math.cos(ang*i)
            pY = v.y+rad  * Math.sin(ang*i)
            arr.push(V(pX,pY))})
        return arr}
    explosion=function(x,y){var cir,bod
        cir= Math.poly( circ(V(x,y),30,5) )
        bod= sep(circ(V(0,0),30,5)).XY(x,y)
        return {  cir:cir,  bod:bod }}
    _.times(13,function(i){_.times(8,function(j){
        var bod=w.brick(  i*25 +420,  j*25 +200,     20, 20 )
        terr.push({

            bod: bod,

            verts:   bod.fixt().verts()  ,

            poly: Math.poly([
                V(  i*25+410,  j*25+210  ),
                V(  i*25+410,  j*25+190  ),
                V(  i*25+430,  j*25+190  ),
                V(  i*25+430,  j*25+210  )
            ])

        })

    })})
    // w.dot(420,200); w.dot(410,210)

    t=terr[103]

    s = sep(

        t.bod.fixt().verts()

    ).stat()//.XY(100,100)



    exp=explosion(740,395)

    Math.poly(exp.cir)
    dif = t.poly.difference(exp.cir)
    t.bod.fixt().remove()
    bb= sep( t.bod, dif.verts() ).stat().XY(0,0)

    // setTimeout( function(){ t.bod.X(20) }, 2000)
}
POLYOPS=function(){w=b2d.W()
    p1 = Math.poly([[-50,50],[-50,-50],[50,-50],[50,50],[-45,55]])
    p2 = Math.poly([[-100,0],[-100,-100],[0,-100],[0,0],[-98,2]])
    w.S(300,300).conc(p1)
    w.S(300,300).conc(p2)
    w.B(500,200).conc(p1.union(p2))
    w.B(500,200).conc(p1.difference(p2))
    w.B(500,200).conc(p1.intersection(p2))
    w.B(500,200).conc(p1.xor(p2))}
//need work
STAIRS=function(){w=b2d.W()
    w.S(0,0,[
        [500,500,600,100],
        [500,400,500,100],
        [500,300,500,100],
        [500,350,450,100],
        [320,400,50,600]])
}


NAMESPACE=function(){
// w.B(200,200,b2d.fixts('tri3'))
//w.B(200,200,b2d.fixts('c50'))
    b2d.fixts={}
    b2d.fixts.tri3=[[-100,0],[0,-50],[400,0]]
    b2d.fixts.c50=[50]
}




FRICKY=function(){w = b2d.W()
    b2d.fricky= [[10,10],[20,40,0,0,90,[1,0,0]],[20,40,0,0,180,[1,0,0]]]
    b2d.bouncy= [[10,10],[20,40,0,0,90,[1,.9,1]],[20,40,0,0,180,[1,.9,1]]]
    b2d.massy=  [[10,10],[20,40,0,0,90,[2,.5,1]],[20,40,0,0,180,[2,.5,1]]]
    b2d.fluffy =[[10,10],[20,40,0,0,90,[.1,.5,.1]],[20,40,0,0,180,[.1,.5,.1]]]
    w.S(600,100,b2d.fricky)
    w.S(700,100,b2d.bouncy)
    w.S(800,100,b2d.massy)
    w.S(900,100,b2d.fluffy)
}
MAKEWALLS=function(){
    makeWalls2=[[10,300,20,460],[990,300,20,460],[250,0,400,20],[730,0,400,20],[250,590,400,20],[730,590,400,20]] //bas in the canvas size?
    makeWallsTiny=[[10,300,20,600],[990,300,20,600],[300,0,1200,20],[300,590,1200,20]]
    makeWallsFull=[[10,300,20,1200],[990,300,20,1200],[300,0,3000,20],[300,590,3000,20]]
    makeWallsLong=[[10,300,20,1200],[1600,300,20,1200],[300,0,3000,20],[300,590,3000,20]]
}



////////////////////////////////////////////////////
old = function () {
    w.fixts=function(x,y,f){var w=this
        f=b2d.fixts[f]
        return w.B(x,y,f)
    }


    pH.setAsBoxx = p.sABx = function(W,H,xy,a,a2 ){          //handles both box and set as box! //w,h -> centered box //w,h,xy,ang -> oriented box //w,h,x,y,ang ->oriented box
        var h=this,pH=this,
            g=G(arguments),

            W = (g[0]||100)/60,
            H= (g[1]||W)/60,
            xy=g[2],
            a=g[3],
            a2=g[4]

        toR = Math.toRadians

        if(U(xy)){pH.SetAsBox(W,H)}

        else if(N(xy)){

            pH.SetAsOrientedBox(W,H, V(xy,a).div(),toR(a2||0))
        }

        else {pH.SetAsOrientedBox(W,H,xy.div(), toR(a||0))}


        return pH}


    h.seg = h.segment = function(xf, lamb, norm,seg,maxLamb){//Perform a ray cast against this shape.

        return this.TestSegment(xf,

            lamb,//:Array, returns the hit fraction.
            // You can use this to compute the contact point p = (1 - lambda) segment.p1
            // + lambda segment.p2.

            norm,//:b2Vec2, returns the normal at the contact point.
            // If there is no intersection, the normal is not set.

            seg,//:b2Segment, defines the begin and end point of the ray cast
            maxLamb//:Numbera number typically in the range [0,1]
        )
    }



    b.fixtClass = function (k) {var b = this, f = b.f()
        if (U(k)){return f.getClass()}
        f.K(k)
        return b}

// compare fixt vs fixtParse


        b2d.fixtCx = function (h) {
            var g = G(arguments),
                l = g.length, f = new b2d.FixtureDef, h = g[0]


            if (b2d.isShape(h)) {
                f.shape = h
            }

            else if (A(h)) {
                f.shape = b2d.pH.apply(b2d, g)
            }

            else if (l == 1 || l == 3) {
                f.shape = b2d.cH.apply(b2d, g)
            }
            else if (l == 2 || l > 3) {
                f.shape = b2d.pH.apply(b2d, g)
            }
            return f
        }

        f.setKill = function () {
            var f = this, b = f.body(), w = b.wor()
            w.flag(flagNum = Math.random())
            cjs.tick(function () {
                if (w.flagged(flagNum)) {
                    f.kill()
                }
            })
        }//clever use of flagging.. but not needed
        f.Vold = function () {//f.rotVerts=

            return this.wVerts()

            newX = function (x, y, rot) {
                rot = Math.toRadians(rot)
                x *= Math.cos(rot).toFixed(3)
                y *= Math.sin(rot).toFixed(3)
                return x - y
            }
            newY = function (x, y, rot) {
                rot = Math.toRadians(rot)
                return (x * Math.sin(rot)) + (y * Math.cos(rot))

            }
            var verts = this.verts(), b = this.B()
            return _.map(verts, function (v) {
                var x = v.x, y = v.y
                return V(
                        newX(x, y, b.rot()) + b.X(),
                        newY(x, y, b.rot()) + b.Y())
            })
        }//this becomes wVerts
        f.DIFFold = function (b2) {
            var f = this, b = f.B(), g = G(arguments), b2 = g[0]//,diff


            // diff =  Math.poly( f.V() ).difference(  Math.poly( b2.V() ) )

            diff = f.minus(b2)

            //if( ! b2d.hasVerts(diff) ){ f.kill(); return }

            // b.conc(   b.rel(diff) )

            b.conc(diff)
            f.kill()
            if (g.n) {
                b2.kill()
            }

            return this
        }

    }