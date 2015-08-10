

function phys(){
 TESTKEYBOARD=function(){z()
  cjs.watchKeys()
  b2.mW({debug:true})
  w.footListener()
  //  p = w.addMe().controlMe('standard')
  b=w.ba()
  b.bindSprite('guy')
  b.controlMe('basic')
 }
}


b2=b2d = Box2D



//divide by 30 to get meters
//all bx-obs have reg at center
//fixture: shape, friction, density[1], restitution
//body: x,y,type
//shape.setasbox(w,h)    .. again, divide values by 30
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
//world clearforces
//static body for ground, dynamic for objs





b2B =b2Body= b2d.Dynamics.b2Body

sB = b2Body.b2_staticBody
dB = b2Body.b2_dynamicBody

b2d.Joints = BXJ=b2d.Dynamics.Joints
b2d.bodyDef = b2BodyDef  =b2d.Dynamics.b2BodyDef

  b2FixtureDef  = b2d.Dynamics.b2FixtureDef

b2d.fixture = b2Fixture   =b2d.Dynamics.b2Fixture
b2d.World = b2World   =b2d.Dynamics.b2World

b2d.DebugDraw = b2DebugDraw   =b2d.Dynamics.b2DebugDraw
shB = b2d.DebugDraw.e_shapeBit
jB = b2d.DebugDraw.e_jointBit


b2d.joint = bJ =  b2d.Joints.b2Joint
b2d.jointDef = bJD = b2d.Joints.b2JointDef
b2d.distanceJoint =bDJ =b2d.Joints.b2DistanceJoint
b2d.mouseJointDef = b2MouseJointDef=b2d.Dynamics.Joints.b2MouseJointDef

b2d.massData = b2MassData =b2d.Collision.Shapes.b2MassData
b2d.AABB = b2AABB=b2d.Collision.b2AABB
b2d.Shapes = b2d.Collision.Shapes //BXS=
b2d.PolygonShape = b2PolygonShape= b2d.Shapes.b2PolygonShape

b2d.CircleShape = b2CircleShape= b2d.Shapes.b2CircleShape



b2d.Segment = b2d.Collision.b2Segment

b2d.Collision.b2Simplex
b2d.Collision.b2Bound
b2d.Collision.b2AABB
b2d.Collision.b2BoundValues
b2d.Collision.b2ContactID
b2d.Collision.b2ContactPoint
b2d.Collision.b2Distance
b2d.Collision.b2DistanceInput
b2d.Collision.b2DistanceOutput
b2d.Collision.b2DistanceProxy
b2d.Collision.b2DynamicTree
b2d.Collision.b2DynamicTreeNode
b2d.Collision.b2DynamicTreePair
b2d.Collision.b2RayCastInput
b2d.Collision.b2RayCastOutput


//  b2d.Dynamics.Controllers.b2ControllerEdge
b2d.Controllers = b2d.Dynamics.Controllers
b2d.Math = b2.Common.Math
b2d.Mat22 = b2d.Math.b2Mat22
b2d.Mat33 = b2d.Math.b2Mat33

b2d.FixtureDef = b2d.Dynamics.b2FixtureDef


b2d.PrismaticJointDef=  b2d.Joints.b2PrismaticJointDef
b2d.RevoluteJointDef=  b2d.Joints.b2RevoluteJointDef
b2d.RevoluteJoint=b2d.Joints.b2RevoluteJoint

b2d.Body = b2d.Dynamics.b2Body
b2d.Fixture = b2d.Dynamics.b2Fixture


b2d.ConstantAccelController= b2d.Dynamics.Controllers.b2ConstantAccelController
b2d.BuoyancyController=new b2d.Dynamics.Controllers.b2BuoyancyController
b2d.Fixture = b2d.Dynamics.b2Fixture
b2d.FixtureDef = b2d.Dynamics.b2FixtureDef
//
//

TOMAKETOUCHWORKAGAIN=function(){

    /*

     //  w._mouseJoint = null //  w._mouseIsDown = false

     w.mouseJoints()

     $.touchstart(function(e){

     w._mouseIsDown = true

     recordMouseCoords(e)
     $.touchmove(recordMouseCoords)
     function recordMouseCoords(e){
     var touch = e.originalEvent.touches[0]
     mX = (touch.clientX-w.x)/30
     mY = (touch.clientY-w.y)/30
     }


     }).touchend( function(){w._mouseIsDown = false})



     setInterval(function(){//handleMouseJoints()
     w.draw(1/60)
     if(F(ops.cb)){ops.cb()}
     w.stage.update()
     }, 1000/60) */
}


(function v(){
 V=function(x,y,x2,y2){

  var g=G(arguments), x=g[0],y=g[1],x2=g[2],y2=g[3],v

  if(A(x)){y2=x[3];x2=x[2];y=x[1];x=x[0]}

  if(N(y2)){x=(x-x2)/2;y=(y-y2)/2}//for dist difs?

  else if(O(x)){
   y= F(x.Y)? x.Y() : x.y
   x= F(x.X)? x.X() : x.x
  }

  x = N(x) ? x : 0
  y = N(y) ? y : x


  v = new b2d.Common.Math.b2Vec2(x, y)

  if(g.n||g.d){ v=v.div() }

  if(g.p||g.m){ v=v.mult() }


  return v}
 var v=b2d.Common.Math.b2Vec2.prototype
 v.mult = function (num) {
  num = N(num) ? num : 30
  var v = _.clone(this)
  v.Multiply(num)
  return v
 }
 v.div = function (num) {
  num = N(num) ? num : 30
  return this.mult(1 / num)
 }
 v.add = function(vec,y){var v=this
  vec=U(vec)?V(1,1):V(vec,y)
  return V(v.x+vec.x, v.y+vec.y)
 }
 v.sub = function (x, y) {
  if (O(x)) {
   y = x.y;
   x = x.x
  }
  x = N(x) ? x : 1;
  y = N(y) ? y : x
  var v = V(this.x - x, this.y - y)
  return v
 }
 v.dec = v.toFixed = function(n){n=N(n)?n:2
  var v=V(
      Number(this.x.toFixed(n)),
      Number(this.y.toFixed(n)))
  return v}
 v.rot=function(rot){var x=this.x, y=this.y,
     rot=Math.toRadians(rot),
     cos=Math.cos, sin=Math.sin
  return V(
      x*cos(rot)-y*sin(rot),
      x*sin(rot)+y*cos(rot)
  ).dec(3)}
}())

b2d.mult = function(v){return V(v).mult()}
b2d.div = function(v){return V(v).div()}
b2d.pollute=function(){

 b2Vec2 = Box2D.Common.Math.b2Vec2
 b2AABB = Box2D.Collision.b2AABB
 b2BodyDef = Box2D.Dynamics.b2BodyDef
 b2Body = Box2D.Dynamics.b2Body
 b2FixtureDef = Box2D.Dynamics.b2FixtureDef
 b2Fixture = Box2D.Dynamics.b2Fixture
 b2World = Box2D.Dynamics.b2World
 b2MassData = Box2D.Collision.Shapes.b2MassData
 b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
 b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
 b2DebugDraw = Box2D.Dynamics.b2DebugDraw
 b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
 b2Shape = Box2D.Collision.Shapes.b2Shape
 b2Joint = Box2D.Dynamics.Joints.b2Joint
 b2Settings = Box2D.Common.b2Settings

}
b2d.isV=function(v){if(v){return v.constructor.name == "b2Vec2"}}
b2d.FixtureDef= b2d.Dynamics.b2FixtureDef
b2d.isShape=function(h){
 var typ

 if(O(h)){

  typ = h.constructor.name
  return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")

 }
}
b2d.mat22=function(v1,v2){
 var m = new b2d.Mat22()
 m.SetVV(v1,v2)
 return m}
b2d.tf=function(v1,v2,v3){

 if(U(v1)){
  return new b2d.Math.b2Transform()
 }
 if(A(v1)){
  return b2d.tf(
      V(v1[0],v1[1]),
      V(v1[2],v1[3]),
      V(v1[4],v1[5]))}

 var tf= new b2d.Math.b2Transform(v1, b2d.mat22(v2,v3))



 return tf}
b2d.Common.Math.b2Transform.prototype.toArr = function(){var tf=this
 var pos=tf.position,
     R=tf.R,
     col1= R.col1,
     col2 = R.col2

 return [pos.x,pos.y,col1.x,col1.y, col2.x, col2.y]
}
dd= p=b2d.Dynamics.b2DebugDraw.prototype
dd.sprite = dd.spr = function(spr){  //it is looking for  a context?
 if(U(spr)){return this.GetSprite()}
 this.SetSprite( spr )
 return this}
dd.scale = dd.drawScale =p.dS= function(scale){
 if(U(scale)){return this.GetDrawScale()}
 this.SetDrawScale(scale)
 return this}
dd.alpha = dd.fillAlpha = dd.fA= function(a){
 if(U(a)){return this.GetFillAlpha()}
 this.SetFillAlpha(a)
 return this}
dd.line =dd.lineThickness =dd.lT= function(lt){
 if(U(lt)){return this.GetLineThickness()}
 this.SetLineThickness(lt); return this
}
dd.flags = p.fl =  function(flags){var DD=b2DebugDraw
 if(U(flags)){return this.GetFlags()}
 if(flags=='*'){
  flags=  (DD.e_shapeBit|DD.e_jointBit|DD.e_pairBit|DD.e_aabbBit|DD.e_centerOfMassBit|DD.e_controllerBit)}
 this.SetFlags(flags);return this}
b2d.debugDraw = function(sprite, scale, flags, alpha,line){

 var dd = new b2d.DebugDraw()

 //can pass in either canvas or context
 if($.isCan(sprite)){ sprite = sprite.ctx() }

 if(sprite){dd.sprite( sprite ) }

 if(scale){ dd.scale(scale) }

 if(flags){ dd.flags(flags)}

 dd.alpha( N(alpha)?alpha:0.5 )

 // dd.line( N(line)? line :1 )
 // dd.SetLineThickness(1)


 return dd}
b2d.F =  function(k){var arr=[]

 w.each(function(b){
  b.each(function(f){
   if(f.is(k)){arr.push(f)}
  })
 })

 return arr}
b2d.B =  function(k){var arr=[]
 w.each(function(b){if(b.is(k)){arr.push(b)}})
 return arr}


b2d.grad=function(o){o=o||{}
 o.c1 = oO('c', o.c1 || 'z'); o.c2 = oO('c', o.c2 || 'w')
 o.s1 = _.tN(o.s1); o.s2 = _.tN(o.s2, 1)
 o.x1 = _.tN(o.x1); o.y1 = _.tN(o.y1)
 return o}

b2d.cov = function(x,y,c,C,l,l2){var g=G(arguments),x=g[0],y=g[1],c=g[2],C=g[3],l=g[4],l2=g[5],

    o = N(c)? {x:x, y:y, a:c, c:C, C:l, l:l2}
        : N(x)? {x:x, y:y, c:c, C:C, l:l}
        : x,
    h = new cjs.Shape()

 b2d.oDef(o)

 h.XY(o.x,o.y).rot(o.a).c(o.c,o.C,o.l)

 if(o.d){h.drag()}

 return h
}
