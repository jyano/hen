w= p=b2d.World.prototype
M=Math
w.listen = w.setContactListener = w.sCL = w.SetContactListener

w.beg=w.begin=function(k,k2,fn){var w=this,

        bH=w.beginHandlers

    //ADDS one or more handlers to beginHandlers array

    //most common use, usually just need one func.
    // would i ever need more?
    if(F(k)){_.e(arguments, function(fn){bH.push(fn)})}

    else if(F(fn)){
            bH.push(function(cx){
                if(cx.with(k,k2)){fn(cx)}})}

    else if(F(k2)){
        bH.push(function(cx){if(cx.with(k)){k2(cx)}})}
    return w

}




w.pre = function(){var w = this
        _.e(arguments, function (fn){
            w.preHandlers.push(fn)})
        return w
}



w.post = function () {
        var that = this
        _.each(arguments, function (func) {
            that.postHandlers.push(func)
        })
        return this
    }
w.end = function (what, what2, func) {
        var w = this
        if (F(what)) {
            _.each(arguments, function (func) {
                w.endHandlers.push(func)
            })
        }
        else if (F(what2)) {
            func = what2
            w.endHandlers.push(function (cx) {
                if (cx.with(what)) {
                    func(cx)
                }
            })
        }
        else if (F(func)) {
            w.endHandlers.push(function (cx) {
                if (cx.with(what, what2)) {
                    func(cx)
                }
            })
        }
        return this
    }


w.with= w.collWith=function(a,b,c){var w=this
    w.beg(function(cx){cx.with(a,b,c)})
    return w}

w.class=function(k){var w=this
    var ob={class:k,  k:k,  world:w, w:w}
    ob.with=ob.collWith=function(k,func){var ob=this
        if(O(k)){_.e(k, function(fn,k){ob.with(k,fn)})}
        else {w.with(w.class, k, fn)}
        return w}
    return ob}

w.collideAny = function(a, fn){var w=this
    w.beg(a, function(cx){$.do(function(){fn(cx)})})
return w}

w.coll= function(k1, k2, func){var w=this, name=k1+k2
        if(F(k2)){return w.collideAny(k1,k2)}
        w.beg(function(cx){if(cx.with(k1, k2)){w.flag(name, cx)}})
        cjs.tick(function(){
            var cx = w.flagged(name)
            if(cx){func(cx)}})
}







w.flag = function (flag, val) {
        this.flags = this.flags || {}

        if (U(val)) {
            val = true
        }
        this.flags[flag] = val
        return this
    }
w.flagged = function (flag) {
        this.flags = this.flags || {}
        var wasFlagged = this.flags[flag]
        if (wasFlagged) {
            this.flags[flag] = false
        }
        return wasFlagged
    }
w.on = function (onWhat, fn){var w=this
        //this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)

        //interesting default !!!!!!!
        //func=func||function(val){val()}

        cjs.tick(function(){var val=w.flagged(onWhat)
            if(val){fn(val)}
        })

        return w
    }
w.when = function (what, what2, bFunc, eFunc){
        var w = this

        if (F(what)) {
            eFunc = what2
            bFunc = what
            w.beg(bFunc)
            if (eFunc) {
                w.end(eFunc)
            }
        }

        else if (F(what2)) {
            eFunc = bFunc
            bFunc = what2
            w.beg(what, bFunc)
            if (eFunc) {
                w.end(what, eFunc)
            }
        }

        else if (F(bFunc)) {
            w.beg(what, what2, bFunc)
            if (eFunc) {
                w.end(what, what2, eFunc)
            }
        }

        return this
    }
w.setContactFilter = w.sCF = w.SetContactFilter
w.while = function (kind, kind2, func) {

        var w = this

        var push = false

        if (F(func)) {

            w.when(kind, kind2,
                function () {
                    push = true
                },
                function () {
                    push = false
                })

            cjs.tick(function () {
                if (push) {
                    func()
                }
            })
        }


        else if (F(kind2)) {

            w.when(kind,
                function () {
                    push = true
                },
                function () {
                    push = false
                })

            cjs.tick(function () {
                if (push) {
                    kind2()
                }
            })
        }

        return this

    }




l = b2d.Dynamics.b2ContactListener.prototype
l.begin = l.beginContact= l.b =function(func){
    this.BeginContact = func
    return this}
l.end = l.endContact= l.e =function(func){
    this.EndContact=func; return this}
l.pre = l.preSolve = l.p  =function(func){
    this.PreSolve = func; return this}
l.post = l.postSolve=l.P=function(func){
    this.PostSolve=func; return this}
b2d.either = function(ob1,ob2, is1,is2){
    return (ob1.is(is1) && ob2.is(is2))||
        (ob1.is(is2) && ob2.is(is1))}
b2d.L = b2d.listener=b2d.contactListener= function(){
    var l = new b2d.Dynamics.b2ContactListener
    return l}

/////////////////////////////////////////////

cx =c = b2d.Dynamics.Contacts.b2Contact.prototype
cx.A=function(){return this.GetFixtureA()}
cx.B=function(){return this.GetFixtureB()}
cx.a=function(){return this.A().body()}
cx.b=function(){return this.B().body()}

cx.includes=function(what,func){
    var cx=this,
        fA = cx.A(),
        fB = cx.B()

    if( F(func) ){

        if(fA.of(what)){

              _.bind(func,fA)(fB, cx)
        }

        else if(fB.of(what)){
             _.bind(func,fB)(fA, cx)
        }
    return this}


    if(fA.of(what)){ return [fA, fB] }
    if(fB.of(what)){ return [fB, fA] }

return false}


cx.between=function(p1,p2,func){
    var cx=this, fA= cx.A(), fB=cx.B()
    if( F(func) ){

        if(fA.of(p1) && fB.of(p2)){

            return _.bind(func, fA)(fB, cx) || cx
        }

        if(fB.of(p1) && fA.of(p2)){
            return _.bind(func,fB)(fA, cx) || cx
        }
    }
    if(fA.of(p1) && fB.of(p2)){return [fA,fB]}
    else if(fB.of(p1) && fA.of(p2)){return [fB,fA]}
return false}

cx.with=function(a,b,c){
    if(U(b) || F(b) ){return this.includes(a,b)}
    return this.between(a,b,c)}
//cx.excludes=function(u){return !this.includes(u)}


TAG=function(){W({g:0})//.fadeTitle('i like how the ball bounces')  //w.show(function(){ return y.getClasses() + ' (' + y.classCount() + ')'})



    y = w.ship(100,100)

    _.t(10,function(){

        w.D(600,300,'b', 40).r(.8).lD(.1).K('blueBall')

    })

    w.with('blueBall', function(other){var w=this, vel

        if(other.of('ship')){

            w.e(function(b){
                    if(b.isStat() &&  b.hasClass('ball') ){
                        b.dyn().C('b')
                    }

                }


            )}

        if(other.of('bul')){

            w.S()

            w.body().C('p')
        }

    })

}

cx.destroy = cx.destroyBoth = function(){
    this.a().setDestroy()
    this.b().setDestroy()
    return this
}
cx.destroyIf=function(kind){
    this.a().setDestroyIf(kind);
    this.b().setDestroyIf(kind)
}
cx.destroyOtherIf=function(kind){
    var a=this.a(), b=this.b()
    if(a.is(kind)){b.setDestroy()}
    else if(b.is(kind)){a.setDestroy()}
}



cx.bCo =cx.bindCo = cx.bindController = function(what){var cx=this,fixt
    //if any fixt collides with a certain kind
    //switch to the controller with that name
    _.each(arguments,
        function(what){
            if(fixt = cx.with(what)){
                fixt.switchTo(window[what])}})


}


needed=function() {

    cx.linVel = function(b){var cx=this
        return b.linVelWor( cx.point() )
    }
    cx.man = cx.wM = cx.worMan = cx.worldManifold = function () {
        var cx = this, m
        cx.GetWorldManifold(m = b2d.worldManifold())
        return m
    }


//*** this is the collision center!!!!
    cx.point = cx.V = function () {
        return this.man().m_points[0].mult()
    }

}; needed()

cx.norm = function(){var norm
    norm = this.man().m_normal.toFixed(2)
    return norm}





//By convention in Box2d, the collision normal (for both the world manifold and the contact manifold) points from A to B -


//gets the linVel at time of collision!
cx.vA = function(){var cx=this; return cx.linVel( cx.a() )}
cx.vB = function(){var cx=this; return cx.linVel( cx.b() )}



cx.iE=function(){return this.IsEnabled()}//Has this contact been disabled?



// ??? do i use any of below???
cx.continuous =c.iC=function(){return this.IsContinuous()}//Does this contact generate TOI events for continuous simulation


cx.enabled = c.sE=function(a){
    this.SetEnabled(a?true:false);return this
} // Enable/disable this this.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
cx.sensor = c.iS=function(){return this.IsSensor()}//Is this contact a sensor?
cx.setSensor  =c.sS=function(a){this.SetSensor(a?true:false);return contact}// Change this to be a sensor or-non-sensor this.

cx.touching = c.iT=function(){
    return this.IsTouching()
}//Is this contact touching.
//cx.manifold =c.gM=function(){return this.GetManifold()}
cx.localPlaneNormal =c.lPN=function(){return this.gM().m_localPlaneNormal}
cx.localPoint =c.lP=function(){return this.gM().m_localPoint}
cx.pointCount = c.pC=function(){return this.gM().m_pointCount}
cx.points =c.p=function(){return this.gM().m_points}
cx.type =c.t=function(){return this.gM().m_type}//Get the contact manifold.//  Do not modify the manifold unless you understand// the internals of Box2D
cx.next =c.gN=function(){return this.GetNext()}//Get the next contact in the world's contact list.
cx.filtering =c.fFF=function(){//whats the point?
    this.FlagForFiltering();
    return contact}// Flag this contact for filtering.
// Filtering will occur the next time step.
cx.center=function(){
        var centerA =  this.A().center(),
            centerB =  this.B().center()
        return Math.lineCenter(centerA, centerB)}






b2d.neither = function(body1, body2){
    return {
        is: function(data){return !body1.is(data) && !body2.is(data)}
    }
}

b2d.either = function(body1, body2){return {is: function(data){return body1.is(data) || body2.is(data)}}}



WITH=function(){W({w:'U'})
    w.plat(400,500,40,20)
    w.D(440,100,'y', 50).K('dot ball')

    w.with('ball', 'plat', function(){
        w.D(300,20,'w',40,40).K('box')
    })

    w.with('box', 'plat', function(){w.D(300, 20,'b',40).K('ball')})

    w.with('dot', function(cx){this.dot()})

}



BEGIN=function(){W({w: 'L'})

    w.D(300,100,'y',10)

   // w.on('new',  function(){ w.D(300,100,'r',5) })

  //  w.beg(_.throttle( function(){  w.flag('new')  }, 200) )

    w.beg(

        _.throttle( function(){

        w.D(300,100,'r',5)

    }, 500))

    //this shows u dont need to flag.. though without throttle, the non-flag version freezes
    //oh, also an example of throttle
} //


POSTSOLVE=function(){W()//only breaks at high impulse



    b = w.D(600, 300, 'r', 30).K('ball')

    //cjs.tick(function(){if(w.flagged('newBall')){w.D(600, 300, 'r', 30).K('ball')}})

    w.post(
        function(cx, cxI){ //second arg??
        n = normalImpulses = cxI.normalImpulses

            nX =  Math.floor(normalImpulses[0])
            nY =  Math.floor(normalImpulses[1])

            t = tangentImpulses = cxI.tangentImpulses

            tX = Math.floor( t[0])
            tY = Math.floor(t[1]  )

            $l('normal: '+ tX + ', '+ tY + ' tangent: ' + nX + ', '+ nY  )

            if(nX > 200){w.D(600, 300, 'r', 30).K('ball')}
               // w.flag('newBall')

    }

    )


  //we can get the 'normal vector' of the contact btwn fixtures

}



CONTACTS=function(){W()

    var centerFx = b2d.cir(80).K('center')

    w.D(500,300,'r',[
            centerFx,
            b2d.pol(60,90,0,40,10).sensor(true).K('sensor1')
        ]).angVel(100)

    w.D(700,300,'p',[
        centerFx,
        b2d.cir(100).sensor(true).K('sensor2')
    ]).aV(100)

    w.coll('sensor1','sensor2',
        function(){ w.D(100,100,'w', 100) })  //w.begin(function(cx){if(cx.with('sensor1','sensor2')){w.flag('new')}}) //w.on('new', function(){w.ball()})

}


BITS=function(){W()

    var cir = b2d.cir(80).bits(2, 5), //collides with 4,1
        rec = b2d.pol(60,90).bits(4,7)  // collides with 4,2,1

    w.D(300,300, cir)
    w.D(400,30,  cir)
    w.D(300,300, rec)
    w.D(400,300, rec)

}
GROUP=function(){W()

    w.D(300,300, b2d.cir(80).bits(2, 5))  // colls 4,1
    w.D(300,300, b2d.pol(60,90,0,40,10).bits(8, 3)) //colls 2,1
    w.D(400,300 ,  b2d.cir(80).cat(2).group(-3)) //cat 1
    w.D(400,300 ,  b2d.pol( 60, 90, 0, 40, 10 ).group( -3 )) //cat 1

}



DYNAMICFILTER=function(){W()

    //Changing the collision filter at run-time
        //You can change each of the categoryBits, maskBits, groupIndex
        // by setting a new b2Filter in the fixture.
        // Quite often you only want to change one of these,
        // so it's handy to be able to get the existing filter first,
        // change the field you want, and put it back.
        // If you already have a reference to the fixture you want to change, this is pretty easy:

    //get the existing filter


    b= w.cir(300,300, 200,'b').r(4).I(100,0)

    f = b.f()
    $.in(2,
        function(){
            fl = f.GetFilterData()
            fl.categoryBits = 0
            f.SetFilterData(fl)
            w.dot(100,100)
    })


}




PRESOLVE =function(){W()

    w.ba()

    cjs.t(
        function(){
            if(STATE.newBall){w.ba()}
            STATE.newBall=false})
    w.pre( function( cx, mf ){  c=x;  m=mf })

    //second pam is really info about previous collision manfest?  may be usesless?!!!!

}




//do any of these get used? i think filterData does
b2d.manager = b2d.contactManager = b2d.cM=function(){//used?
    var m= new b2d.b2ContactManager
    m.c= m.cl= m.Collide
    m.a= m.aP=m.AddPair
    m.f= m.fNC= m.FindNewContacts
    m.d= m.ds= m.Destroy
    return m}



b2d.filt =b2d.filterData =  function(){
    var d = new b2d.Dynamics.b2FilterData()

    d.gI=function(a){
        if(U(a)){return d.groupIndex}
        d.groupIndex=a; return d}

    d.cat=function(a){
        if(U(a)){return d.categoryBits}
        d.categoryBits=a; return d}

    d.mask=function(a){
        if(U(a)){  return d.maskBits}
        d.maskBits=a; return d
    }


    return d}


/*
 b2d.cxFilt = b2d.filter =   function(){//used?
 var f=new b2d.b2ContactFilter
 f.rC =f.RayCollide
 f.sC =f.ShouldCollide
 return f}


b2d.superManifold =  function(m){//used????


    m.lPN = m.m_localPlaneNormal

    m.lP=m.m_localPoint

    m.pC=m.m_pointCount

    m.p=m.m_points

    m.t=m.m_type

    return m}

function SuperImpulses(impulses){
    impulses.n= impulses.nI=function(){return impulses.normalImpulses}
    impulses.t= impulses.tI=function(){return impulses.tangentImpulses}
    return impulses}


*/

//****
ONEWAYPLATFORM=function(){


W([1200,600,1200,2000],{}).P()

    p.XY(600,1800).track()
    //  Both PreSolve and PostSolve give you a b2Contact pointer,
    // so we have access to the same points and normal information we just looked at for BeginContact.
    // PreSolve gives us a chance to change the characteristics of the contact before the collision response is calculated,
    // or even to cancel the response altogether,
    // and from PostSolve we can find out what the collision response was.


    //     Here are the alterations you can make to the contact in PreSolve:


    //  c.SetFriction( friction)  // persists for duration of contact
    //  c.SetRestitution(  restitution)   //persists for duration of contact

    //  c.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
    // will disable the contact,
    // meaning that the collision response that normally would have been applied will be skipped.
    // You can use this to temporarily allow objects to pass through each other
    // . A classic example of this is the one-way wall or platform,
    // where the player is able to pass through an otherwise solid object,
    // depending on various criteria that can only be checked at runtime,
    // like the position of the player and which direction direction they are heading, etc.
    // It's important to note that the contact will revert back to being enabled in the next time step,
    // so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.

    pf = w.S(300, 300, 'o', 500, 40).K('platform')

    pf = w.S(900, 600, 'o', 500, 40).K('platform')
    pf = w.S(300, 900, 'o', 500, 40).K('platform')
    pf = w.S(300, 1000, 'o', 500, 40).K('platform')

    pf = w.S(1000, 1200, 'o', 500, 40).K('platform')

    pf = w.S(500, 1400, 'o', 500, 40).K('platform')
    pf = w.S(900, 1700, 'o', 500, 40).K('platform')

    // p = w.player('symmetrical').fixRot()
    p.K('player')
   // w.ball()

    w.pre(function(cx){

     cx.with(p,  'platform', function(pf){
         if(  p.Y()>pf.B().Y()-40  ){
             cx.SetEnabled(false)  }   })



    })

}




//***
THROTTLE=function(){ w = b2d.W()
    ball = w.ball(300,300, 100)
    brick = w.brick(300,500)

    time = 0

    setInterval(function(){time++}, 1000)
    cjs.tick(function(){
        if(w.flagged('moveBrick')){
            brick.X( 20 , '+' )
        }})

    lastTime=0
    change = 0
    w.begin(function(con){
        if(con.with('brick')){
            if(lastTime!=time){lastTime=time;
                w.flag('moveBrick')}}


    })



}

POINTY=function(){W(10)

      w.ball(300,300, 100)
      w.ball(300,300, 100)
     w.brick(600,320)

    w.beg(function(cx){
                markAABB(cx.A())
                markAABB(cx.B())  })

   function markAABB(fixt){
        ab = fixt.GetAABB()
        lb = ab.lowerBound
        up = ab.upperBound

        lx =   lb.x* 30
        ly =  lb.y * 30
        ux =  up.x* 30
        uy =   up.y* 30
        dx = ux - lx
        dy = uy - ly


        w.dot('b', ux, uy)
        w.dot('p', lx, ly)

    }





}

COLLCENTER=function(){W()

    ball = w.ball(300,300, 200)

    brick = w.bump(700, 320)

    w.beg(function(cx){var fA = cx.A(), fB = cx.B()

                w.dot( fB.center())
                w.dot(  fA.center() )
                w.dot('b', cx.center())
             })


w.chalk('here you can clearly see that the center of the two fixtures',
'is not necessarily the same as the contact point,',
'and can only represent collision center if fixtures are similar size.',
'..perhaps halfway between this and the actual contact point would be nice')

}

b2d.man=b2d.manifold = b2d.worldManifold = function(){
    return new b2d.Collision.b2WorldManifold()
}


CONTACTPOINT=function(){W()
    w.ball()
    w.ball()
    w.ball()
    w.ball()
    w.S(200,500,'b', 200,50)
    w.beg(function(cx){w.dot(cx.point())})
    w.chalk('so finding the actual contact point aint hard after all..')}

VEL=function(){w=b2d.W({g:1})


    w.ball(500,300,10).K('tim').den(1)
    me = w.ball(700,300, 80).K('me').den(1)

    w.beg( function(cx){
        cx.with('tim', function(other,cx){
            if( cx.a().is('tim') ){   me.linVel( cx.vA()  )  }
            else {  me.linVel( cx.vB()  )  }

        })

        //this gets th actual velocity of body A at moment of collision !!!!!!!
        // HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!

        })








}
VEL1=function(){b2d.W({g:2})

    b = w.ball(100, 100).den(1)
    b.poly(20,100).den(1)

    b2 = w.ball(400, 400).den(1)

    b3= w.ball(100,100,10)

    cjs.tick(function(){

        v = b.linVelWor( b )

        b2.linVel( v.div(10)   )

        //$l(b.linVel())

      //  v = b3.linVel()
      //  vw = b3.linVelWor()
     //   vl = b3.GetLinearVelocityFromLocalPoint()
        //$l('vel: ' + v.x)
        //$l('velW: ' + vw.x)
       // $l('velL: ' + vl.x)
    })
}

NORM=function(){w=b2d.W({g:0}).startKilling()

    n = V()

    w.ball(300,300).K('stat').stat()
    w.ball()
    w.box()

    w.beg(function(cx){

        if( cx.with('stat') ){

            m = cx.man()
            n = m.m_normal

            setTimeout(function(){
                w.ball(600,300,10).I(n)
            }, 100)
        }


    })

  //  w.show(function(){return 'norm: '+ n.x.toFixed(1) + ', ' + n.y.toFixed(1)   })

}

IMPACTVELSTAT=function(){w=b2d.W({g:0})

    n = V()
    b=w.ball()

    b1=w.ball(300,300).K('stat').stat()


    w.beg(function(cx){

        if( cx.with('stat') ){

            m = cx.man()
            n = m.m_normal
            p = cx.point()

            v1 = b.GetLinearVelocityFromWorldPoint( p )
            v2 = b1.GetLinearVelocityFromWorldPoint( p )
            impactVelocity = V(
                v1.x - v2.x,
                v1.y - v2.y
            )

            setTimeout(function(){
                w.ball(600,300,10).I(impactVelocity)
            }, 100)
        }

    })

}


IMPACTVEL=function(){W({g:0})

    //n = V()

    b = w.ball()
    b1 = w.ball(300,300)


    w.beg(function(cx){var p,v1,v2

        if( cx.with(b,b1) ){ //m = cx.man()  //n = m.m_normal

            p = cx.point()
            v1 = b.GetLinearVelocityFromWorldPoint( p )
            v2 = b1.GetLinearVelocityFromWorldPoint( p )

            setTimeout(function(){
                var temp= w.ball(600,300,10).I(v1.x-v2.x, v1.y-v2.y)
                setTimeout(function(){temp.kill()}, 500)
            }, 100)
        }
    })
}


WORLDVEL=function(){w=W({ mJ:false, g:0 })

    b=w.ball(300, 300,150).d(1)
    b2=w.ball(300,300,10)

    w.rev(b,b2)

    p1 = V(300,300); w.dot(p1)
    p2 = V(360,360); w.dot(p2)
    p3 = V(450,450); w.dot(p3)

  //  b.ApplyTorque(10)
  //  b.linVel(.2,0)

    w.$(function(x,y){var v=b.linVelWor(x, y); $l(v.x  + ' '  + v.y ) })
    b.aV(1)

}





YELLOWSHIP=function(){

        var w=b2d.W({g:4}).debug()



     var   y = w.yShip(300, 400, 3).rot(90)


     var   y1 = w.yShip(600, 400,3).rot(90)

    var    onInt=function(){
            y.I(0, -.7).rot(4, '+')
            y1.linVel(0, -3).rot(4,'+')
        }
      //  setInterval(onInt,500)

      var  onTime=function(){

            y.I(0,-4)
            y1.I(4,0)
            //  .I(0.-4)

        }

       setTimeout(onTime, 500)



    }
YELLOWSHIPWATCH=function(){

//ok this is crazy cool.. but something is wrong.  something is not getting reset, because force gets bigger each time
    I(YELLOWSHIP, 1000)
}



BIGBLUESHIP=function(){W({g:0})

    var n = 0, x=50, Y=50

    w.beg(function(cx){

        if(cx.with('guyBul','bad')){
            cx.a().kill()
            cx.b().kill()
        }


        if(cx.with('badBul','guy')){
             cx.a().kill()
             cx.b().kill()

        }})

    y = w.yShip('blue', 100, 200, 6).angDamp(1).linDamp(1)
        .rest(0).fric(1).K('guy')
        .shootOnSpace('guyBul')
        .thrustControl()

    _.t(6, function(){
        window['y'+ n++] =  w.yShip(x+=50, Y+=50,3).chug(5)
            .K('bad').shootOnInt(1000, 'badBul').rot(45)
    })



}

SPACEBALL=function(){W({g:0})

     w.with('guyBul','bad', function(b){
         this.B().kill();
         b.B().kill()
     })


    y = w.yShip('blue', 100, 200, 6).aD(1).lD(1)
        .r(0).fr(1).K('guy')
        .shootOnInt(200)
        .thrustControl()
      //    b=  w.ball(200,200, 80).den(1)
    b=  w.D(200,200,'b', 150, 150).d(1)


}


WAR=function(){W({g:0})

    var n = 0, x=50, Y=50

    w.with('bul','bad', function(bad){this.B().kill(); bad.B().kill()})

    _.t(10, function(){
        window['y'+ n++] =  w.yShip(x+=4,Y+=2, 3).chug(5)
            .K('bad').shootOnInt(300, 'bul').rot(R(90))
    })
}



YELLOWSHIPWTF=function(){W({g:3})

    M=Math
    M.tR= M.toRadians
    M.tD= M.toDegrees

    y = w.yShip(300, 400, 3)

    y.dir=function(){

        var v = this.GetWorldVector(
            V(
                Math.toRadians(0),
                Math.toRadians(90)
            )
        )

        v.x = Math.toDegrees( v.x )
        v.y = Math.toDegrees( v.y )

        return v}

    I(function(){

        var v = y.dir()

        $l( v )

        y.I(0, v.y/100) .rot(1, '+')

    }, 100)


}

FILTDAT=function(){W()

    w.B(400,400,30).grp(-1)
    w.B(400,400,40).grp(-1)
    w.B(400,400,50).grp(-1)

    w.B(400,400,50,50).grp(-2)
    w.B(400,400,60,60).grp(-2)
    w.B(400,400,70,70).grp(-2)

    //w.right.grp(-1)

}

FILTSENS =function(){W()

    b = w.B(400,400,30).sen()
    //w.right.grp(-1)

}


b=b2d.Body.prototype


b.contacts = b.cx = function(){return this.GetContactList()}


b.coll =  function(k, fn){var b=this, w= b.W()    //merged these 2, but the the fixt 'coll' met is more complete/flexible  //b.collWithKind =
        // if body collides with ANYTHING
        // if body collides with body/fixt of specific kind
        // if body collides with specific body
        // if body collides with specific fixt
        // but always pass fixt into the cb

    if(F(k)){fn=k; k=''} //if clas NOT passed in
    w.beg(function(cx){var fA=cx.A(),fB=cx.B(),bA=cx.a(),bB=cx.b()
        if(b.is(bA) && fB.of(k)){_.b(fn,fA)(fB,cx)}
        if(b.is(bB) && fA.of(k)){_.b(fn,fB)(fA,cx)}})
    return b

}



// uses contact list

b.col2 =   function(func){ //brilliant   =b.eachCx =b.withFixtsCollidingWithMe
        //uses the OTHER way to check contacts !!!!!!
        var body = this, contacts  = body.cx(),
            next, fixt, notMyFixt, fA,fB
        if(!contacts){ $l('no contacts'); return false }
        c=contacts = contacts.contact
        n=0
        while(contacts){n++
            next = contacts.GetNext()
            fA=contacts.A()
            fB=contacts.B()
            bA=contacts.a()
            notMyFixt = body.is(bA)?fB:fA  //find the fixture whose body is not me
            $l(notMyFixt.K() + ' - '+ notMyFixt.B().K())
            _.bind(func,body)(notMyFixt,contacts)   //and call func on IT (along with the actual cx)
            contacts=next}
    }

BCOL2=function(){w=b2d.W().startKilling()



        y= w.ship()
        _.times(10, function(){

            w.ball(100,100,20).K('ball')
        })

        b = w.ball(400,300,20).K('ball').stat()


        y.coll('ball', function(b){ $l('coll with ball')

            y.col2( function(a){
                if( a != b ){  a.B().dot()  }
            })


        })

        // cjs.tick(function(){ y.col2( function(a){    a.B().setDestroy()   })  })

    }

b.when1=function(){var body =this, w=body.wor(),ob={}

        ob.contacts=function(kind, func){
            w.beg(kind,func)
            return { after: function(func){w.end(kind,func)} }
        }

        return ob}

b.when=function(what, bFunc, eFunc){
        var b=this,
            w=b.wor()
        w.when(b,what,bFunc,eFunc)
        return this}


WHEN=function(){W()


    b = w.ball(500,200,30).K('z')

    b.when('z',
            function(){$l('beg')},
            function(){$l('end')}

    )
}




b.trig2=function(act, func){var body=this,
        w=body.wor()

        w.when(body,
            function(){ body.trig[act] = true },
            function(){ body.trig[act] = false}
        )

        if(F(func)){
            func=_.bind(func, body)
            cjs.tick(function(){
                if(body.trig[act]){func()}
            })}


        return this


    }
    b.trig=function(fixtKind, func){var b=this,w= b.wor()


        var touching = false

        w.beg(function(cx){

            cx.with(b, function(){

                if( this.hasClass(fixtKind) ){

                    if(F(func)) { _.bind(func, this)() }
                }

                //$l('BODY: ' + this.B().K() + ' |FIXT: '+ this.K() )
            })
        })

        cjs.tick(function(){
            if(touching){func()}
        })


        return this}
    b.while=function(what, func){
        var body=this,
            w=body.wor()
        w.while(body, what, func)
        return this}
    WHILE=function(){w=b2d.W({g:0}).debug()

        y = w.ship()

        //  w.beg(y, function(){$l('aha')}

        y.while( function(){ $l('aha')  }  )

    }



Array.prototype.sensor=function(k){var s=this
    s.isSensor=k||true
    return s}

VORTEX=function(){W(10).Y()



    w.S(200,250,'r',400,20)
    w.S(400,250,'r',20,40)

    _.t(20, function(){w.ball(100,100,10)})


    w.S(600, 200, 'b',  b2d.cir(200).sensor(true)  ).K('vortex')



    func=function(){
        w.e('ball', function(b){ b.towards(600, 200) } )
    }


    //w.while('vortex', 'ship', func)
    y.while('vortex', func)

}
SENSOR=function(){W(10).Y()

    // w.chalk( 'box goes up on coll with vortex, and right AFTER','ball goes up with continued pressure')



    b = w.ball(100,100,40)
    x = w.box(50,100,60,60)

    w.S(1000, 200, 'r', b2d.cir(500).sensor(true)  ).K('vortex')

    moveX = function(){ x.vY(-20) }
    moveB = function(){ b.vY(-20) }



    // w.when('vortex', 'ship', moveX)      //this happens every RE-ENTRY into sensor (when)
    y.when('vortex', moveX, function(){ x.vX(20)  })      //this happens every RE-ENTRY into sensor (when)

    // w.while('vortex', 'ship', moveB)       //this happens repeadly until sensor exited
    y.while('vortex',  moveB)

}
KINGOFMES=function(){  w= b2d.W({g:10}).debug()

    //all jumping together???!



    w.roof.kill()
    w.left.kill()
    w.right.kill()
    w.s.sXY(.8).X(100)
    _.times(15, function(){

        w.addMe(900,100, 5).trig('feet', function(){var p=this

                p.B().rot(0).lV(-2,-10)  }
        ).angDamp(50)//.fixRot()

        w.addMe(300, 100, 5).trig('feet', function(){
            this.B().rot(0).lV(2,-10) }).angDamp(50)//.fixRot()

    })



    w.C('r')


}
HAT=function(){

// could i automatically have body listen to their sensors?

    W()

    w.ball().rest(.3)

    p=w.addMe(400, 150, 5)

    p.trig( 'right' )
    p.trig( 'left' )

    $.space(function(){

        if(p.trig.right){ p.I(100, -400)}

        if(p.trig.left){  p.I(-100, -400)}

    })

    p.trig('hat',
        function(){
            p.bS('guy')
        })
}

