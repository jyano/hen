
 _.iDU = cjs.iDU=function(e){if(S(e)){return s$(e).contains('data:')}}

 $Ct=function(){return new cjs.Container()}
 selected=function(bm){
     alert('selected')
     SL(bm)
     bm.$(function(){
     cjs.Tween.removeAllTweens()
         bitmap=bm
       cjs.scaleShake(bm.dO)
     })
 }
 cjsKey()
 function cjsKey(){
     cjs.Keys = function(o){
         if(O(o)){
             if(F(o.u)){
                 cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}
             if(F(o.d)){
                 cjs.tick(function(){
                     if(cjs.Keys.d){ o.d(cjs.Keys.d) } })
             }
             if(F(o.l)){
                 cjs.tick(function(){
                     if(cjs.Keys.l){
                         o.l(cjs.Keys.l)
                     } })}
             if(F(o.r)){
                 cjs.tick(function(){if(cjs.Keys.r){
                     o.r(cjs.Keys.r)
                 } })
             }
         }
     }
     cjs.watchKeys=function(){
         cjs.Keys.l = cjs.Keys.left = false
         cjs.Keys.r = cjs.Keys.right = false
         cjs.Keys.u = cjs.Keys.up = false
         cjs.Keys.d = cjs.Keys.down = false
         $.kD('l',function(){
             if($.test){$l('left pressed')}
             cjs.Keys.l = cjs.Keys.left = true
             cjs.Keys.dir = 'left'})
         $.kU('l',function(){if($.test){$l('left lifted')}
             cjs.Keys.l = cjs.Keys.left = false
         })
         $.kD('r',function(){if($.test){$l('right pressed')}
             cjs.Keys.r = cjs.Keys.right = true
             cjs.Keys.dir = 'right'})
         $.kU('r',function(){if($.test){$l('right lifted')}
             cjs.Keys.r = cjs.Keys.right = false
         })
         $.kD('u',function(){if($.test){$l('up pressed')}
             cjs.Keys.u = cjs.Keys.up = true
         })
         $.kU('u',function(){if($.test){$l('up lifted')}
             cjs.Keys.u = cjs.Keys.up = false
         })
         $.kD('d',function(){if($.test){$l('down pressed')}
             cjs.Keys.d = cjs.Keys.down = true
         })
         $.kU('d',function(){
             if($.test){$l('down lifted')}
             cjs.Keys.d = cjs.Keys.down = false
         })
     }
     TESTWATCHKEYS=function(){z()
         $.test=true
         cjs.watchKeys()
     }
     KEYWATCH = function(){
         J=cjs
         $.test=true
         J.Keys.l = J.Keys.left = false
         J.Keys.r = J.Keys.right = false
         J.Keys.u = J.Keys.up = false
         J.Keys.d = J.Keys.down = false
         $.kU('l',function(){
             if($.test){$l('left lifted')}
             J.Keys.l = J.Keys.left = false
         })
         $.kD('l',function(){
             if($.test){$l('left pressed')}
             J.Keys.l = J.Keys.left = true
             J.Keys.dir = 'left'})
         $.kD('l',function(){
             if($.test){$l('left pressed')}
             J.Keys.l = J.Keys.left = true
             J.Keys.dir = 'left'})
         $.kD('r',function(){if($.test){$l('right pressed')}
             J.Keys.r = J.Keys.right = true
             J.Keys.dir = 'right'})
         $.kU('r',function(){if($.test){$l('right lifted')}
             J.Keys.r = J.Keys.right = false
         })
         $.kD('u',function(){if($.test){$l('up pressed')}
             J.Keys.u = J.Keys.up = true
         })
         $.kU('u',function(){if($.test){$l('up lifted')}
             J.Keys.u = J.Keys.up = false
         })
         $.kD('d',function(){if($.test){$l('down pressed')}
             J.Keys.d = J.Keys.down = true})
         $.kU('d',function(){if($.test){$l('down lifted')}
             J.Keys.d = J.Keys.down = false
         })
     }
 }
 cjs.iDO=iDo = function (a) {return O(a) && O(a.parent)}
$Pt = cjs.Pt = function (x, y) {
    if (U(x)) {
        return new C$.Point
    }
    if (O(x) && O(y)) {
        return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
    }
    if (O(x)) {
        return new cjs.Point(
            x.mx(),
            x.my()
        )
    }

    return new cjs.Point(x, y)
}
cjs.mXY = mxy = function (o, s) {

    xy(o, s.mx(), s.my())

    return o
}
cjs.shad = cjs.shadow = function (color, x, y, blur) {
    if (color == '-') {
        return new cjs.Shadow(null, 0, 0, 0)
    }
    color = S(color) ? color : 'a'
    blur = N(blur) ? blur : 10
    x = N(x) ? x : 0
    y = N(y) ? y : 0
    var shad = new cjs.Shadow(oO('c', color), x, y, blur)
    return shad
}
$Bm = function (i) {
    if (O(i)) {

        var bm


        if ($.iI(i)) {
            i = $(i)[0]
            _i = i
            bm = new cjs.Bitmap(i)
            return bm
        }


        bm = $Bm(i.i)

        if (i.al) {
            bm.al(i.al)
        }
        if (i.fl) {
            bm.fl(i.fl)
        }

        if (i.aF2) {
            bm.aF2(i.aF2)
        }

        return bm

    }
}
$H = function (a, b, c) {
    return new cjs.Shape(a, b, c)
}
$Gx = function () {
    return new cjs.Graphics
}
tikr()
bmp()
que()
function tikr(){
    cjs.tick2 = function (func) {
        cjs.Ticker.addEventListener('tick', func)
        return cjs.Ticker
    }
    cjs.stopListening = function () {
        cjs.Ticker.removeAllEventListeners()
    }
    T = T$ = J.Ticker
    cjs.t = cjs.tick = function (fn) {
        fn();
        J.Ticker.on('tick', fn)
    }
    cjs.stop = function () {

        cjs.Ticker.removeAllEventListeners()

    }
    tickX = function (e) {
        j.Y(e.delta / 1000 * 100, '-')
    }
    timeStamp2 = function (s, j, pxPerSec) {
        var fn = function (s, e) {

            if (!N(j.ts)) {
                j.ts = 0;
                j.lts = e.ts
            }

            else {
                j.ts = e.ts - j.lts;
                j.lts = e.ts

                j.y((j.ts / 1000) * pxPerSec, '-')
            }
        }
        return s.t(fn)
    }
}
function que(){
    cjs.loadQueue = cjs.lq = function (mf, func) {

        var q = new cjs.LoadQueue(true)

        if (A(mf)) {
            q.loadManifest(cjs.mf.apply(null, mf))
        }

        if (F(func)) {
            q.complete(function () {
                func(function (img) {
                    return q.getResult(img)
                })
            })
        }
        return q
    }
    q = cjs.LoadQueue.prototype
    q.fileload = function (func) {
        this.addEventListener("fileload", func)
        return this
    }
    q.complete = function (func) {
        this.addEventListener("complete", func)
        return this
    }
    q.manifest = function (manifest) {
        this.loadManifest(manifest)
        return this
    }
    q.mf = function () {
        this.loadManifest(cjs.mf.apply(null, arguments))
        return this

    }
    q.bm = function (img) {

        img = this.getResult(img)


        return cjs.bitmap(img)
    }
    cjs.manifest = function (func) {
        var q = cjs.loadQueue()

        q.complete(
            function () {

                func(function (getResult) {
                    return q.getResult(getResult)
                })
            })

            .manifest([{
                id: "chicks", src: "/chicks.png"
            },
                {id: "me", src: "/me.png"},
                {id: "guy", src: "/guy.png"},
                {id: "sun", src: "/sun.png"}])
    }
    cjs.handleFileLoad = function (e) {
        if (e.item.type == "image") {
            images[e.item.id] = e.result
        }
    }
    cjs.mf = cjs.manifest = function (a) {
        var g = G(arguments), mf = []
        _.e(g, function (v) {
            mf.push({src: cjs.src(v), id: v})
        })
        return mf
    }
    cjs.makeManifest = cjs.makeMan = function (a) {
        return cjs.manifest.apply(null, _.m(a.images, function (i) {
                return Graphics.fromSource(i)
            })
        )
    }
    Q = function (imgs, func) {

        var q = cjs.lq()
        mf = []
        _.each(imgs, function (v) {

            mf.push({

                src: cjs.src(v),
                id: v

            })
        })
        q.manifest(mf)
        q.complete(function () {
            func(q)
        })

    }


}
function bmp(){
    SuperBitmap = SuperBitmapSync = bm = function (img, stage) {

        var superBitmap = Do(new cjs.Bitmap(src(img)))

        if (O(stage)) {
            stage.a(superBitmap)
        }

        return superBitmap
    }
    SuperBitmapAsync = function (i, fn) {

//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
        i = i[0]
        if (O(i) && S(i.d)) {
            i = i.d
        }
        $.i(i, function (img) {
            bm = $Bm(img)
            if (F(fn)) {
                fn(bm)
            }
            if (S(fn)) {
                $w[fn] = bm
            }
        })

        return i
    }
    cjs.BmSync = function (i, st) {

        var bm = $Bm(src(i[0]))

        if (O(st)) {
            st.A(bm)
        }

        return bm
    }
    cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
        if (O(img) && S(img.d)) {
            img = img.d
        }
        $.i(img, function (i) {
            bm = $Bm(i)
            if (F(fn)) {
                fn(bm)
            }
            if (S(fn)) {
                $w[fn] = bm
            }
        })
        return img
    }

}
 function color(){
     $.colorPicker = $.ColorPicker = function () {
         z()

         colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))

         colorPicker.change(function () {
             $l(colorPicker.val())
         })

     }
     cjs.toColor = toColor = tCl = function (n1, n2, n3, n4) {

         return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")"
             :
             $r('c', n1)
     }

     cjs.rgb=function(r,g,b,a){var str
         a = N(a)? a: 1
         str = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
         return str
     }

 }
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
 text()
 function text(){
     cjs.isText=function(t){
         if(O(t)){
             return (  t.textBaseline   )
         }
     }
     cjs.text = function(text, font, color,  x, y){

         x=N(x)?x:600
         y=N(y)?y:100

//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }

         if(N(font)){ font = font + 'px Arial' }
         font = font || '50px Arial'
         color = color||'y'

         textOb =   new createjs.Text(  text,  font,  oO('c',color)  )
         textOb.regX = textOb.W()/2
         textOb.XY(x, y)


         return textOb}
     cjs.niceText=function(text,x,y){

         var t= cjs.text(text, 'yellow', '40px Arial')

         if(N(x)){t.XY(x,y)}
         return t.drag()
     }
     $T=function(a,f,c,x,y){
         var t

         if(N(f)){
             f  = String(f) + "px Arial"


         }
         if(S(c)){c=oO('c', c)}

         t= new cjs.Text(a,f,c)

         if(O(x)){

             if(F(x.cen)){
                 x= x.cen()
             }
             y= x.y
             x= x.x
         }

         if(N(x)){t.X(x)}
         if(N(y)){t.Y(y)}


         return t
     }
     $Tc=function(a,f,c,x,y){

         var t= $T(a,f,c,x,y)

         t.tA('center')
         return t
     }
     TextAdder=function(stage){

         var f= $.f().a().c('x').P(10).w(300).dg()

         f.A(
             $.ip().id('text'),

             $.bt('for text',   function(){var  _text,theText,val = $l( $('#text').val()  )
                 $('#text').val('')
                 _t = $T(val,'w', 30, 100, 10)
                 t=  $Ct().A( _t )
                 t.dO = _t
                 SL(t)
                 st.A(t)
                 selected(t)
             }))

         return f
     }
     TextAdder2=function(stage){

         var form= $form().a().c('x').P(10).w(300).drg()

         form(

             $textInput().id('text'),

             $.bt(  'for text',   function(){
                 var val = $l( $('#text').val()  )

                 $('#text').val('')

                 var theText= EaselText(val,'w', 30, 100, 10)
                 SL(theText)


                 stage.a( theText )


             }))




         return form }

     var t = cjs.Text.prototype
     t.lineH = t.lH = function (lH) {


         if (U(lH)) {
             return this.lineHeight
         }

         this.lineHeight = lH
         return this


     }
     t.lineW = t.lW = function (lW) {


         if (U(lW)) {
             return this.lineWidth
         }

         this.lineWidth = lW
         return this
     }
     t.lWH = function (w, h) {
         if (U(h)) {
             h = w
         }
         ;
         return this.lW(w).lH(h)
     }
     t.align = t.textA = t.tA = function (textAlign) {


         if (U(textAlign)) {
             return this.textAlign
         }

         this.textAlign = textAlign
         return this


     }
     t.baseline = t.textB = t.tB = function (textBaseline) {


         if (U(textBaseline)) {
             return this.textBaseline
         }

         this.textBaseline = textBaseline
         return this
     }
     t.T = function (text) {


         if (U(text)) {
             return this.text
         }

         this.text = text
         return this
     }
     t.outL = t.oL = function (outline) {


         if (U(outline)) {
             return this.outline
         }

         this.outline = outline
         return this
     }
     t.F = t.fo = function (font) {


         if (U(font)) {
             return this.font
         }

         if (N(font)) {
             font = font + 'px Arial'
         }


         this.font = font
         return this
     }
     t.C = t.col = function (color) {


         if (U(color)) {
             return this.color
         }

         this.color = oO('c', color)

         return this
     }
 }

forSolarApp()
 function forSolarApp() {
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
     cjs.bulletHit = function (bu, inWhat) { //used in solar
         var res

         res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

         if (res == true) {
             $l('hit!')
         }

         return res
     }
 }

 function later(){
     //obPhysics()
     function obPhysics() {
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


     sav = function (st, a) {
         return function () {
             alert('sav')
             st.sv(a)
         }
     }
     function maybe() {

         cjs.HSL = function (a, b, c) {
             if (U(a)) {
                 return HSL(M.rand() * 360, 100, 50)
             }
             return cjs.Graphics.getHSL(a, b, c)
         }
         eventDisp()
         function eventDisp() {
             p = cjs.EventDispatcher.prototype
             p.init = function () {
                 this.initialize.apply(this, arguments)
                 return this
             }
         }

     }
 }