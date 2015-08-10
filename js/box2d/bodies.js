
old=function(){

    w.D1=w.B1=function(x,y){var w=this,
        g=G(arguments), x=g[0],y=g[1],
        bD, b, fs, k


        if(S(_.l(g))){k=g.pop()}

        if(O(x)){
            bD=b2d.D(x); fs=_.r(g)
        }

        else {
            bD = b2d.D(x,y); fs= _.r(g, 2)
        }



        b = w.CreateBody(bD)

        if(A(g[0]) && U(g[1])){
            _.e(fs,function(f){

                if(g.n){b.f(f, '-')}
                else {b.f(f)}
            })
        }
        else {
            if(g.n){fs.push('-')};
            b.f.apply(b,fs)
        }




        if(k){b.K(k)}

        return b
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
     *///fd.sSAP  = fd.setShapeAsAPoly=function(){// return this.H( b2d.polyShape())}


    b.CIRCx = b.circx = function(col, rad, x, y){ var g= G(arguments),  fixt, h,str
    col=g[0];rad=g[1];x=g[2];y=g[3];
    if(S(y)){str=y;y=null}
    if(S(x)){str=x;x=null}
    if(S(rad)){str=rad;rad=null}
    if(!S(col)){y=x;x=rad;rad=col}
    fixt =  this.fixt(  b2d.circ(rad,x,y)   )
    if(str){ fixt.K(str) }
    if(S(col)){ fixt.bindSprite( w.s.circ(col,rad,x,y)) }
    return fixt

}

notSureIfUsedOrNeeded=function(){

    b.cirs=function(){var b=this
        _.each(arguments, function(o){o=V(o)
            b.cir({
                x: o.x,
                y: o.y,
                C:'*'
            })
        })
        return b}
    b.recs=function(){var b=this


        return b}

    w.rect1 = function (x, y, W,H, c) {var w = this,b
        x = _.tN(x,200)
        y = _.tN(y,50)
        W = _.tN(W,50)
        H = _.tN(H,W)
        b = w.box({
            c:c,x:x,y:y, w:W,h:H
        }).lD(2)
        return b}

    b._rec=function(o){var b=this,fd, f,h
        o=b2d.fixtPams(o)
        fd = new b2d.Dynamics.b2FixtureDef()
        fd.den(o.d).rest(o.b).fric(o.f)
        h = new b2d.PolygonShape()
        fd.shape = h
        h.SetAsOrientedBox(o.w/2/30,o.h/2/30,
            V(o.x, o.y).div(),
            Math.toRadians(o.r))
        //fd.isSensor=o.s?true:false
        f = b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(o.C){f.bindSprite(w.s.RECT(o.C, o.w, o.h,o.x, o.y, o.r),0, 0, 0, o.a)}
        return f}
    w.addRandomBody = w.randomFixture=function(){
        var body= this.dynamic(Math.random() * 1000, 100,
            b2d.randomFixture())
        return body}
    w.random=w.addRandomBodies=function(howMany){
        howMany=howMany||10; var that=this
        _.times( howMany, function(num){
            that.addRandomBody()})
        return this}

    b.RECT1 = function(c, W, H, x, y, a){var b=this,w= b.wor(),g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],

        fd,
        f,
        h,
        k,
        al= 1

        if(S(a)){k=a;a=null}
        if(S(y)){k=y;y=null}
        if(S(x)){k=x;x=null}
        if(S(H)){k=H;H=null}
        if(!S(c)){a=y;y=x;x=H;H=W;W=c}

        fd=b2d.rec(W,H,x,y,a)

        if(g.n){fd.isSensor=true; al=.2}
        f=b.fixt(fd)

        if(k){f.K(k)}

        if(S(c)){f.bS(w.s.rec(c,W,H,x,y,a),0,0,0,al)}

        return f

    }



    b.RECT0 = function(c, W, H, x, y, a){var b=this,w= b.wor(),g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],

        fd,
        f,
        h,
        k

        if(S(a)){k=a;a=null}
        if(S(y)){k=y;y=null}
        if(S(x)){k=x;x=null}
        if(S(H)){k=H;H=null}
        if(!S(c)){a=y;y=x;x=H;H=W;W=c}

        o = {c:c, w:W, h:H, x:x,y:y,a:a,k:k }
        o.o= 1
        fd=b2d.rec(o.w, o.h, o.x, o.y, o.a)
        if(g.n){fd.isSensor=true; o.o=.2}
        f=b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(S(o.c)){f.bS(w.s.rec(o.c, o.w, o.h, o.x, o.y, o.a),0,0,0, o.o)}
        return f
    }


    b.RECT00 = function(c, W, H, x, y, a){var b=this,w= b.wor(),g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],
        fd,  f,  h,  k

        if(N(c)){a=y;y=x;x=H;H=W;W=c;c=null}

        if(S(a)){o = {c:c, w:W, h:H,x:x,y:y, k:a}}
        else if(S(y)){o = {c:c, w:W, h:H,x:x, k:y}}
        else if(S(x)){o = {c:c, w:W, h:H, k:x}}
        else if(S(H)){   o = {c:c, w:W, k:H}}
        else {o = {c:c, w:W, h:H, x:x, y:y, a:a  }}

        o.o= 1
        fd=b2d.rec(o.w, o.h, o.x, o.y, o.a)
        if(g.n){fd.isSensor=true; o.o=.2}
        f=b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(S(o.c)){f.bS(w.s.rec(o.c, o.w, o.h, o.x, o.y, o.a),0,0,0, o.o)}
        return f
    }



    b.RECT000 = function(c, W, H, x, y, a){var b=this,w= b.wor(),g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],
        fd,f,h,k,o

        if(O(c)){o=c}

        else {
            if(N(c)){a=y;y=x;x=H;H=W;W=c;c=null}
            o = S(a)? {c:c, w:W, h:H,x:x,y:y, k:a} :
                S(y)? {c:c, w:W, h:H,x:x, k:y} :
                    S(x)?{c:c, w:W, h:H, k:x}
                        :S(H)?{c:c, w:W, k:H}:
                    {c:c,w:W,h:H,x:x,y:y,a:a}}

        o=o||{}
        b2d.oDef(o)
        fd=b2d.rec(o.w, o.h, o.x, o.y, o.a)
        if(g.n){fd.isSensor=true; o.o=.2}
        f=b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(S(o.c)){

            f.bS(
                w.s.rec(o.c, o.w, o.h, o.x, o.y, o.a),

                0,
                0,
                0,
                o.o

            )}
        return f

    }

    b._cir=function(C, r, x, y){var c=''
        var b=this,  g= G(arguments),
            C=g[0];r=g[1];x=g[2];y=g[3];
        if(S(y)){c=y;y=null}
        if(S(x)){c=x;x=null}
        if(S(r)){c=r;r=null}
        if(!S(C)){y=x; x=r; r = C}

        return  {
            x:x,  y:y,  r:r,  C:C,
            s: g.n?1:0
        }
    }

    w.bul = function (x, y) {
        var def, body
        def = b2d.dyn(x, y)
        def.bullet = true
        body = this.createBody(def)
        return body
    }


    w.polyBul = function (x, y, wd, ht, col) {
        var bul = this.bul(x, y)
        bul.poly(wd, ht)

        if (col) {
            bul.bindSprite2(
                cjs.rect(wd, ht, oO('c', col)).XY(x, y).a2(this.s)
            )
        }


        return bul
    }

    w.kin= function(x, y, fixtDef){var body
        if( O(x) ){fixtDef=y; y=x.y; x=x.x}
        x = N(x)?x: 500
        y = N(y)?y: 250
        body = this.A(b2d.kin(x,y), fixtDef)
        return body}
    w.stat=function(x, y, fD){var w=this, b
        if( O(x) ){fD=y; y=x.y; x=x.x}
        x = N(x)?x: 500
        y = N(y)?y: 250
        return  w.A(b2d.stat(x,y), fD)}

    w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
        stop1 = N(stop1) ? stop1 : 0
        stop2 = N(stop2) ? stop2 : 1
        col1 = oO('c', col1);
        col2 = oO('c', col2)
        return this.ball(x, y, r).bS2(
            this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
                0, 0, 0, 0, 0, r).dc(0, 0, r))
    }


    w.circStat = function (x, y, radius, color) {

        var wd = this.s.W(),
            ht = this.s.H()


        x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60

        y = N(y) ? y : 50

        radius = N(radius) ? radius : _.random(14) + 8

        color = oO('c', color || $r())

        return this.bump(x, y, radius).bindSprite2(
            cjs.circ(radius, color).XY(x, y)
        ).linDamp(2)

    }


    w.rectStat = function (x, y, wd, ht, color) {

        x = N(x) ? x : 200

        y = N(y) ? y : 50

        wd = N(wd) ? wd : 50

        ht = N(ht) ? ht : wd

        color = oO('c', color || $r())

        return this.brick(x, y, wd, ht).bindSprite2(
            cjs.rect(wd, ht, color).XY(x, y)
        ).linDamp(2)

    }
    w.rectSensor = function (x, y, wd, ht, color) {

        x = N(x) ? x : 200

        y = N(y) ? y : 50

        wd = N(wd) ? wd : 50

        ht = N(ht) ? ht : wd

        color = oO('c', color || $r())

        return this.brickSensor(x, y, wd, ht).bindSprite2(
            cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
        ).linDamp(2)

    }

    w.cirx= w.circx= function(x,y,r,c){

        //takes x,y before r?
        //try and avoid this func for now
        // will err on random x,y.. dont like it.
        // that should be with '*'
        // (explicityly ONLY for something like this)

        var w=this,g=G(arguments),
            b,
            H= w.s.H(),
            W= w.s.W(),o
        o=O(g[0])?g[0]: {x:x,y:y,r:r,c:c}

        o.x= _.tI(o.x, R(W-100,60))
        o.y= _.tN(o.y, 50)
        o.r= _.tN(o.r, R(14,8))

        b = w.D(o.x, o.y).cir({r: o.r, c:o.c})

        return b}



}}