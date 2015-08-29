


cjs.bm=function(img){
    alert('J.bm')
    var g=G(arguments), img=g[0],
        bm = new J.Bitmap(img)
    if(g.N){bm.rC()}
    return bm
} //warning: can't yet change to $Bm!!
cjs.iDO=cjs.isDisplayOb=function(ob){ return O(ob)  &&  F(ob.getStage) }

ob =  cjs.DisplayObject.prototype
ob.CURSOR= ob.cu= ob.bM=function(cu){var ob=this, st=ob.st()
    CUob= {
        d:'default', n:'none', h:'help',
        p:'pointer',  ch:'crosshair',
        P:'progress', w:'wait',
        t:'text',
        m:'move', g:'grab',  c:'copy',
        cm:'context-menu',
        C:'cell',
        N:'not-allowed', v:'not-allowed',
        z:'zoom-in'
    }

    if(U(cu)){st.MM(function(){ob.x = st.m().x; ob.y = st.m().y})}
    else if(S(cu)){ ob.cursor= CUob[cu]? CUob[cu] : cu  }
    return ob
}
ob.bM=function(){var ob=this, st=ob.st()
    st.MM(function(){ob.x = st.m().x; ob.y = st.m().y})
    return ob
}

ob.ca= function(){var ob=this, st=ob.st(), g=G(arguments), o, op, i

    if(O(ob.image && !g.n && !g.p)){ob.cache($(ob.image)[0])}

    if(ob.cacheCanvas && !g.p && (U(g[0]) || S(g[0]) || g.n)){
        op=g[0];ob.updateCache(op);return ob
    }
    o = O(g[0])? {i: g[0], x:g[1], y:[2]}: N(g[2])? {x:g[0], y:g[1], w:g[2],h:g[3] }: N(g[1])? {w:g[0], h:g[1]}: {}
    if(O(o.i)){ o.i = o.i.image? o.i.image:$(o.i)[0];
        if (!g.n) {
            if(ob.image){ob= ob.image}
            ob=$(ob)[0]
            ob.cache(0, 0, ob.width, ob.height)}
    }
    o.x = N(o.x)? o.x:0; o.y = N(o.y)? o.y:0
    o.w = N(o.w)? o.w : O(o.i)? o.i.width: N(o.h)? o.h : st? st.W():0
    o.h = N(o.h)? o.h : O(o.i)? o.i.height: st? st.H(): 0
    ob.cache(o.x, o.y, o.w, o.h )
    return ob
}
ob.fl=function(){var ob=this,g=G(arguments),i
    if(A(g[0])){return ob.fl.apply(ob,g[0])}
    ob.filters=ob.filters||[]
    _.e(g, function(fl){ob.filters.push(fl)})
    if(!g.n){i= ob.image; this.ca(0, 0, i.width, i.height)}
    return ob
}
ob.fl2=function(){var ob=this,g=G(arguments)
    ob.filters=[]
    ob.filters=ob.filters||[]
    _.e(g, function(fl){
        ob.filters.push(fl)
    })
    if(!g.n){i= ob.image; this.ca(0, 0, i.width, i.height)}
    return ob
}
ob.aF=function(h){var ob=this
    ob.fl( $AF( h ) )
    return ob
}
ob.aF2=function(h){var ob=this
    this.fl2( $AF( h ) )
    return ob
}
obOb()
function obOb(){


    ob.hel=function(a,b){return ob.hasEventListener(oO('e',a))}
    ob.o=function(a,b,c,d,e){
        if(!Oo('e',a)){return o.o('$',a,b,c,d)}
        var f=ob.on(oE(a),
            b.handleEvent?b:b.ob?b.ob:b.st?b.st
                :function(e,data){b(o,sJE(e),e)},c,d,o,e)
        return function(){o.O(a,f)
            return _p(o.o,a,b,c,d,e)}}
    ob.e=function(a,b,c){ob.dispatchEvent(a,b,c);return a}
    ob.O=function(t,f){var g=G(arguments), t=g[0], f=g[1]

        $l('O')

        if(F(t)){$l('F(t)')
            return o.O('$',t)}

        t=oE(t)

        if(F(f)){$l('F(f)')

            if(g.p){ob.removeEventListener(t,f,true) }
            else if(g.n){ ob.removeEventListener(t,f,false) }
            else {$l('removing: ' + t + ' '+ _S(f))

                ob.removeEventListener(t,f)}}

        else {$l('!F(f)')
            if(S(t)){ob.removeAllEventListeners(t)}
            else{ob.removeAllEventListeners()}
        }
        return o} //ob.wt=function(type){return o.willTrigger(type)}
    ob.W=function(a){
        if(U(a)){ return this.getBounds().width * this.scaleX  }
        this.sX(  this.scaleX * a / this.W() )
        return this}
    ob.H=function(a){

        if(U(a)){ return this.getBounds().height * this.scaleY  }

        this.sY( this.scaleY * a / this.H() )

        return this

    }
    ob.WH=function(w,h){return this.W(w).H(h||w)}
    ob.X=function(x,duration){//can add easing :)


        var g=G(arguments)

        if(U(x)){return this.x}

        if(g.p){
            x = this.x+x }
        else if(g.n){$l('n')
            x=this.x-x}
        else if(g.m){$l('m')
            x=this.x*x}
        else if(g.d){$l('d')
            x=this.x/x}


        if(N(duration)){
            tw([this], [{x:x}, duration ])
        }

        else{this.x=x}
        return this}
    ob.Y=function(y,duration){//make same same x
        var g=G(arguments)
        if(U(y)){return this.y}
        if(g.p){
            y = this.y+y }
        else if(g.n){
            y=this.y-y}
        else if(g.m){
            y=this.y*y}
        else if(g.d){
            y=this.y/y}


        if(N(duration)){
            tw([this], [{y:y}, duration ])
        }

        else{this.y=y}
        return this}
    ob.tickX=function(func){var ob=this

        cjs.tick(function(){ob.X( func() )})

        return this}
    ob.tickY=function(func){var ob=this

        cjs.tick(function(){ob.Y(
            func()
        )})

        return this}
    ob.xy=ob.XY=function(x,y){
        if(U(x)){return {x:this.x, y:this.y}}

        if(O(x)){
            y= x.y
            x= x.x
        }

        if(U(y)){y=x}
        return this.X(x).Y(y)
    }
    ob.sx=ob.sX=function(scaleX){this.scaleX=scaleX;return this}
    ob.sy=ob.sY=function(scaleY){
        this.scaleY=scaleY;return this}
    ob.sxy=ob.sXY=function(x,y){if(U(y)){y=x};  return this.sX(x).sY(y)}
    ob.rx=ob.rX=function(regX){


        var g=G(arguments), regX=g[0]

        if(U(regX)){return this.regX}

        //if(g.p){this.rX( this.regX + regX  )}

        this.regX=regX;
        return this}
    ob.ry=ob.rY=function(regY){var g=G(arguments),regY=g[0]

        //if(g.p){this.Y( this.y + (regY - this.regY)  )}
        if(U(regY)){return this.regY}
        this.regY=regY;return this
    }
    ob.rxy=ob.rXY=function(x,y){y=N(y)?y:x
        return this.rX(x).rY(y)}
    ob.kx=ob.kX=function(skewX){
        if(U(skewX)){return this.skewX}
        this.skewX=skewX;return this
    }
    ob.ky=ob.kY=function(skewY){
        if(U(skewY)){return this.skewY}
        this.skewY=skewY;return this
    }
    ob.kxy=ob.kXY=function(x,y){

        y=N(y)?y:x

        return this.kX(x).kY(y)}
    ob.rt= ob.rot=function(rotation){
        var args=G(arguments);
        rotation = args[0]

        if( args.p ){rotation = N(rotation)? rotation: 1
            return this.rT( this.rotation + rotation )  }
        if( args.n ){rotation = N(rotation)? rotation: 1
            return this.rT( this.rotation - rotation )  }

        if(U(rotation)){return this.rotation}
        this.rotation = rotation
        return this}
    ob.st=  function(){
        if(this.getStage){
            return this.getStage()
        }
        return this.stage
    }
    ob.blSt= ob.belowStg = function(){return this.y > this.stg().H()}
    ob.hd= ob.hide=function(){this.visible = false;return this}
    ob.P=function(){return this.parent}
    ob.$ = ob.click=function(func){return this.on('click', func)}
    ob.$$= function(a,b,c,d,e){return this.on('dblclick', a,b,c,d,e)}
    ob.rm = function(){this.P().removeChild(this); return this}
    ob.al= function(alpha){
        if(U(alpha)){return this.alpha}
        this.alpha=alpha;return this}
    ob.n= function(name){
        if(U(name)){return this.name}
        this.name=name;return this}
    ob.rgc=function(){var g=G(arguments),

        x=this.W()/2,
        y=this.H()/2

        if(g[0]===0){
            if(g.p){this.rXY(0,0,'+')}
            else{this.rXY(0,0)}
        }

        else{
            if(g.p){this.rXY(x,y,'+')}
            else{this.rXY(x,y)
            }}

        return this}
    ob.gTL=function(x,y){

        if(O(x)){y= x.y;x= x.x}

        return this.globalToLocal(x, y)

    }
    ob.grow = function(){ this.tween( [{sxy:10},10000]); return this }
    ob.RT = function(){RT(this);return this}
    ob.TR = function(){TR(this);return this}
    ob.dg=ob.drag=ob.SL = function(){SL(this);return this}
    ob.bounds=function(a,b,c,d) {
        this.nominalBounds = new cjs.Rectangle(a,b,c,d)
        return this}
    ob.tf=function(pam){
        if( O(pam) && F(pam.getTransform) ){pam = pam.getTransform()}
        if(A(pam)){this.setTransform.apply(this, pam)
            return this}
        this.setTransform.apply(this,  G(arguments))
        return this
    }
    ob.rZero=function(a){
        var g=G(arguments), x=this.W()/2, y=this.H()/2
        alert('rZero')
        if(g.p){this.rX( 0, '+')
            //this.X(a, this.regX()-a, '+')
            this.rY( 0, '+')}
        else {this.rXY( 0 , 0 )   }
        return this}
    ob.rC= ob.rCenter=function(){
        var g=G(arguments), x=this.W()/2, y=this.H()/2
        if(g.p){this.rX( x,  '+' ); this.rY( y,  '+' )}
        else {this.rXY( x ,y )}
        if(N(g[0])){this.X(g[0]); if(N(g[1])){this.Y(g[1])}}
        return this
    }
    ob.tw= ob.tween = function(){var g = G(arguments), tw
        g.unshift(this)
        return _tw = tw  = J.tween.apply(null, g)
    }
    ob.twL=   function(){  var g = G(arguments),tw
        g.unshift([this, 'l'])
        return tw= _tw  =J.tween.apply(null, g)

    }
    ob.flash = function(){var ob=this
        ob.al(0)
        $.in(.4, function(){ob.al(1)} )
        return ob}
    ob.sp= ob.spin = function(){this.twL([{r:360}, 4000]); return this}
    ob.d= ob.dot=function(){this.st().dot(this.X(), this.Y()); return this}
    ob.uM=ob.underMouse = function( ){
        var ob=this, st=ob.stage


        if(st && st.mouseInBounds){
            return ob.tx(ob.gTL(st.m().x, st.m().y))
        }


    }
    ob.tx=ob.test=function(x,y){var ob=this
        if(J.isDisplayOb(x)){return ob.tx(this.gTL(x))}
        if(O(x)){y= x.y;x= x.x}
        return this.hitTest(  x,y    )
    }
    ob.cx=ob.cX=ob.centerX= function(a){
        if(U(a)){return this.x + this.W()/2 }
        return this.X( a- this.W()/2)
    }
    ob.cy=ob.cY = ob.centerY= function(a){
        if(U(a)){return this.y + this.H()/2 }
        return this.Y( a- this.H()/2)
    }
    ob.toFront = function(){var ob=this
        numChildren = this.parent.children.length
        this.P().setChildIndex(this,numChildren-1)
        return this
    }
    ob.bindBody=function(body){var ob=this,b=body
        J.tick(function(){  b.XY(ob.X(),ob.Y()).rT( ob.rT() )})
        return ob}
    ob.getTransform=function(){var ob=this
        return [
            ob.x,ob.y,ob.scaleX,ob.scaleY,
            ob.rotation,ob.skewX,ob.skewY,
            ob.regX,ob.regY
        ]
    }
    ob.a2=function(toWhat,x,y){
        toWhat.A( this )
        if(N(x)){this.X(x)}
        if(N(y)){this.Y(y)}
        return this}
    ob.shad = function(color, x,y,blur){
        var shadow = cjs.shad(color, x,y,blur)
        this.shadow = shadow
        return this
    }
    ob.p= ob.go= ob.startMoving=function(x,y){

        if(x){this.vX(x)}
        if(y){this.vY(y)}

        var ob=this

        cjs.Ticker.on('tick', function(){
            ob.X(  ob.X() + (ob.vx ||0)  )
            ob.Y(  ob.Y() + (ob.vy ||0)  )
        })

        return this
    }
    ob.wrx=ob.warpX=function(low,high,cush){var ob = this,
        warp = M.warp(low,high,cush)
        cjs.tick(function(){ob.x =warp(ob.x)})

        return ob
    }
    ob.wry=ob.warpY=function(low,high,cush){var ob = this,
        warp = Math.warp(low,high,cush)
        cjs.tick(function(){ob.y =warp(ob.y)})
        return this}
    ob.wr= ob.warp=function(n){n=n||0
        var stage = this.getStage()
        this.warpX(0, stage.W(), n)
        this.warpY(0, stage.H(), n)
        return this}
    ob.u=function(){this.update();return this}

}




//obPhysics()
function obPhysics(){
//easel physics.. ugh
    ob.move = function () {
        return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
    }
    ob.accelerate = function () {
        return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
    }
    ob.jerk = function () {
        return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
    }
    ob.vX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    ob.vY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    ob.vXY = function (x, y) {
        return this.vX(x).vY(y)
    }
    ob.aX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    ob.aY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    ob.jX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    ob.jY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }
        this.vy = a
        return this
    }
    ob.brake = function () {
        this.vx = this.vy = 0
    }
    ob.toR = p.moveRight = function (num) {
        num = num || 20
        this.X(num, '+')
        return this
    }
    ob.toL = p.moveLeft = function (num) {
        num = num || 20
        this.X(num, '-')
        return this
    }
    ob.toU = p.moveDown = function (num) {
        num = num || 20
        this.Y(num, '-')
        return this
    }
    ob.toD = p.moveDown = function (num) {
        num = num || 20

        this.Y(num, '+')
        return this
    }
    ob.keyControls = function (num) {
        var args = G(arguments),
            ob = this

        if (args.P) {
            $.kD('left', function () {
                ob.toL(num)
            })
            $.kD('right', function () {
                ob.toR(num)
            })
        }

        if (args.N) {
            $.kD('up', function () {
                ob.toU(num)
            })
            $.kD('down', function () {
                ob.toD(num)
            })
        }
    }
    ob.shootBullet = function () {
        shooter = this
        st = shooter.st()
        bu = cjs.cir(8, 'w').XY(shooter).a2(st)
        bu.startMoving((shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5)

    }
    ob.bounce = function (n) {
        n = N(n) ? n : 0
        var ob = this, st = this.st(), h = st.H(), w = st.W()
        J.tick(
            function () {
                var x = ob.x, y = ob.y
                if (x > w - ob.W() - n || x < (n )) {
                    ob.vX('-')
                }
                if (y > h - ob.H() - n || y < (n )) {
                    ob.vY('-')
                }
            })
        return st
    }
    ob.hitByBullet = ob.isPointInMyRectBounds = function () {
        var ob = this, g = G(arguments),

            bu = g[0],
            didHit = M.pointInRectangle(bu.cX(), bu.cY(), {x: ob.cX(), y: ob.cY(), w: ob.W(), h: ob.H()})
        if (g.n && didHit) {
            ob.rm()
        }
        return didHit
    }
//chick for hits and remove if a hit
    ob.killAllIAmHitting = function () {
        var ob = this,
            stage = this.getStage()

        _.each(stage.children, function (obj) {

            if (ob != obj) {

                obj.hitByBullet(ob, '-')

            }
        })

    }
    ob.makeMeAKiller = function () {
        var ob = this
        cjs.tick(function () {
            ob.killAllIAmHitting()
        })
        return this
    }
    ob.in = ob.within = ob.inStage = function () {
        var ob = this,
            st = ob.st(),
            g = G(arguments),
            x = ob.x,
            y = ob.y,
            w = st.W() - 100,
            h = st.H() - 100,

            inn = x > 0 && x < w && y > 0 && y < h

        if (g.n) {
            if (!inn) {
                ob.rm()
            }
        }

        return inn
    }
}
