b =  b2d.Dynamics.b2Body.prototype

M=Math

 w=b2d.World.prototype


f = b2d.Fixture.prototype;//f = b2d.Dynamics.b2Fixture.prototype



TERREASEL = function () {
    z()
    s = stage = cjs.stg(1600, 600).A()
    h = s.shape()
    h.f('b').dc(200, 200, 10)
    h2 = s.shape().X(700)
    h2.f('b').dc(0, 0, 10)

    tile = function (i, j) {
        return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
    }   // lower left //upper left//upper right//lower right
    draw = function () {
        terr = []
        _.times(13, function (i) {
            _.times(8, function (j) {
                terr.push(tile(i * 50, j * 50))
            })
        })
        h.drawPolygons(terr, 'b', 'r')
    };
    draw()
    t = Math.poly(terr[101])
    doExplosion = function (e) {
        v = V(e.stageX, e.stageY)
        exP = circ(v, 100)
        h.drawPolygon(exP, 'z')
        c = Math.poly(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
        // explosion polygon. This should be optimized in some way, checking only for terrain polygons
        // which are actually affected by the explosion.
        // Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
        // difference is calculated.
        iX = c.intersection(t)
        h2.drawPolygon(iX.verts())
        for (var i = terr.length - 1; i >= 0; i--) {
            totalArea = 0
        }
    } // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
    circ = function (v, rad, prec) {
        prec = N(prec) ? prec : 20
        arr = [];
        ang = 2 * Math.PI / prec
        _.times(prec, function (i) {
            pX = v.x + rad * Math.cos(ang * i)
            pY = v.y + rad * Math.sin(ang * i)
            arr.push(V(pX, pY))
        })
        return arr
    } // listeners: basically we destroy the terrain with a mouse click or a mouse drag
    // stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
    // stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})

    stage.on('click', doExplosion)
    vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
    h.drawPolygon(vv, 'z')
    vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
    h.drawPolygon(vvv, 'z')
}

    f.stg= function(){return this.wor().s}


f.dot= function(){var f=this,w=f.W(),g=G(arguments),
    v=f.mid()
    if(S(g[0])){w.dot(g[0], v)} else {w.dot(v)};
    return f}






    f.dots=function(){var f=this; b2d.polyDot(f.wVerts()); return f}

//ONLY AFFECTS STAGE, NOT WORLD
    f.C = function () {
        var f = this, b = f.B(), w = b.W(), g = G(arguments), o,
            h


        o = O(g[0]) ? g[0] : {c: g[0], C: g[1], l: g[2]}
        o.c = (o.c == '*') ? $r() : o.c || 'b'
        o.C = o.C || o.c

        f.removeSprites()
        h = w.s.h()
        if (f.isCirc()) {

            //should not actually make a whole new fixture..
            //oh... i'm not ! :)
            h.cir(
                f.pX(),
                f.pY(),
                f.rad(),
                o.c,
                o.C,
                o.l
            )
        }

        else {
            h.poly(f.verts(), o.c, o.C, o.l)
        }

        f.bS(h)

        return f
    };
    COL = function () {
        W().C('z')

        b = w.bump({c: 'w', r: 100})

        f = b.f()

        f.C('y')


        // f.removeSprites(); h=w.s.h().cir(0,0,100,'y'); f.bS(h)


        $.in(1, function () {

            f.C('r')
            b.dyn()
        })
    }

    f.bS = f.bindSprite = function (j, a, x, y, al) {//f.gx= f.spr= f.bindSprite2=
        var f = this, b = f.B(), s = b.wor().s, g = G(arguments), o
        f.sprites = f.sprites || []

        o = cjs.isDisplayOb(j) ? {j: j, a: a, x: x, y: y, o: al}
            : O(j) ? j : {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.o = _.tN(o.o, 1)
        f.sprites.push(o.j.op(o.o).a2(s))                      //takes any display object.  right now, just used for shapes//because bindSprite fetches the bm's by string. //but when i set up preloader, then i would use this i suppose :)                                                 //f.sprite = obj  //f.sprite.a2(stage)                                                 //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
        cjs.tick(function () {
            o.j.XY(b.X() + o.x, b.Y() + o.y)
                .rot(b.rot() + o.a)
        })                                    //if(!f.sprite){return}
        return f
    }



w.tick=function(draw){var w=this
        w.ctx.tick(function(){

            w.trans(0,0).Z(1,1);
            w.draw(_.tN(draw,.1))

        })
        return w}


w.C= function(col){var w=this
        w.c.C(col)
        return w}



w.bH = w.bindShape = function( shape, spr   ){

        this.stage.A( shape )

        cjs.tick(

            function(){   shape.XY(  spr.X(), spr.Y()    )    }

        )

    }


w.boxes = function () {
        var w = this
        _.each(arguments, function (arg) {
            w.box.apply(w, arg)
        })
        return this
    }



w.boxesStat = function () {
        var w = this

        _.each(arguments, function (arg) {

            w.box.apply(w, arg).stat()
        })

        return this
    }







w.dr = function (col, x, y, W, h) {
        var w = this,
            g = G(arguments),
            col = g[0], x = g[1], y = g[2], W = g[3], h = g[4]
        if (g.p) {

            if (!S(col)) {
                h = W;
                W = y;
                y = x;
                x = col;
                col = 'b'
            }

            w.s.HUD.shape().fs(col).rect(x, y, W, h)
        }
        else if (g.n) {

            if (!S(col)) {
                h = W;
                W = y;
                y = x;
                x = col;
                col = 'r'
            }

            w.s.back.shape().fs(col).rect(x, y, W, h)
        }
        else {
            if (!S(col)) {
                h = W;
                W = y;
                y = x;
                x = col;
                col = 'w'
            }

            w.s.shape().fs(col).rect(x, y, W, h)
        }
    }
//w.s.shape().fs('y').rect(100,100,100,100)
//w.s.HUD.shape().fs('o').rect(100,200,100,100)

w.line = function (col, x1, y1, x2, y2) {
        var w = this,
            g = G(arguments),
            col = g[0],
            x1 = g[1], y1 = g[2],
            x2 = g[3], y2 = g[4]


        if (g.p) {

            if (!S(col)) {
                y2 = x2;
                x2 = y1;
                y1 = x1;
                x1 = col;
                col = 'b'
            }

            h = w.s.HUD.shape()

            return h.sC(col, 8).mt(x1, y1).lt(x2, y2)
        }


        else if (g.n) {
            if (!S(col)) {
                y2 = x2;
                x2 = y1;
                y1 = x1;
                x1 = col;
                col = 'x'
            }

            return  w.s.back.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
        }


        else {
            if (!S(col)) {
                y2 = x2;
                x2 = y1;
                y1 = x1;
                x1 = col;
                col = 'w'
            }


            return w.s.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)


        }


    }



w.sH = function (h) {
        var w = this, wH = w.H()
        if (U(h)) {
            return wH * w.s.scaleY
        }
        w.s.scaleY = h / wH
        return w
    }




b.stg=function(){return this.wor().s}







b.dot=function(c){//b.dot() // dots the center of mass, not xy ??!!!

    var b=this,
            s= b.stg(),
            g= G(arguments)

        c = oO('c', g[0]||'y')

        if(g.p){ s.dot(c, b.cent()) }  else { s.dot(c, b.X(),b.Y()) }

    return b

}



b.horizCenter=function(){return this.X( this.wor().s.W() / 2  )} //move to x-middle of stage


b.img= b.bS=b.bindSprite = function (img, scale, startingRotation) { //img is an image name  //rotation is in degerees!
        var body = this, b=this, stage = body.wor().s, g=G(arguments)
        if(!S(g[0])){return b.bS2.apply(b,g)}
        scale = scale || .4
        startingRotation = N(startingRotation) ? startingRotation : 6 // why not zero ?????
        stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
            if (A(scale)) {
                bm.sXY(scale[0], scale[1])
            } else {
                bm.sXY(scale)
            }


            body.sprite = bm  //only one???

            updateSprite()
            cjs.tick(updateSprite)

            function updateSprite() {
                bm.XY(body.X(), body.Y()) //can simplify?

                bm.rotation = body.rot() + startingRotation
            }


        }, '-') // what is this negative doing ?????
        return body
    }



b.bS2= b.bindSprite2 = function (obj, startingRotation, x, y) {
        //takes any display object.  right now, just used for shapes
        //because bindSprite fetches the bm's by string.
        //but when i set up preloader, then i would use this i suppose :)
        x = N(x) ? x : 0;
        y = N(y) ? y : 0
        var body = this,
            stage = body.GetWorld().stage
        //  stage.A( displayObject = obj )
        startingRotation = N(startingRotation) ? startingRotation : 0
        body.sprites = body.sprites || []
        body.sprites.push(obj)
        body.sprite = obj
        body.sprite.a2(stage)

        //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
        cjs.tick(function(){
            if(!body.sprite){return}

            _.e(body.sprites, function (sprite) {
                sprite.XY(
                        body.X() + (x || 0),
                        body.Y() + (y || 0)
                )

                sprite.rotation = body.rot() + startingRotation

            })})

        return body
    }



b.p= b.play = function (a, b, c, d) {var b=this
        if(O(b.sprite)){b.sprite.p(a, b, c, d)}
        return b}



b.s= b.stop=function (a, b, c, d) {var b=this
        if (O(b.sprite)){b.sprite.s(a,b,c,d) }
        return b}



b.centerScale = function(z){var b= this, w=b.wor(),s= b.stg()

        s.sXY(z)
        s.X(w.hW - ((b.X() - w.hW) *z))
        s.Y(w.hH - ((b.Y() - w.hH))*z)
        return b
    }



b.color = function (c1, c2) {var b=this

        c1 = c1 || 'b'
        c2 = c2 || c1

        _.e(b.fixts(), function(f){ f.color(c1,c2) })
    return b}






w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!


    x = N(x) ? x : 300;
    y = N(y) ? y : x //weird defaults - not intuitive


    var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.s)

    if (N(scale)) {
        sprite.sXY(scale)
    }

    return this.box(x, y, 100, 100).bindSprite2(
        sprite
    )

}




SPRSHIP=function(){W(3).chalk('spritebox example')

    w.spriteBox({
            framerate: 24,
            images: ["thrusty.png"],
            frames:[
                [0, 0, 512, 512, 0, -53, -36],
                [512, 0, 512, 512, 0, -53, -36],
                [1024, 0, 512, 512, 0, -53, -36],
                [0, 512, 512, 512, 0, -53, -36],
                [512, 512, 512, 512, 0, -53, -36],
                [1024, 512, 512, 512, 0, -53, -36],
                [0, 1024, 512, 512, 0, -53, -36],
                [512, 1024, 512, 512, 0, -53, -36],
                [1024, 1024, 512, 512, 0, -53, -36],
                [0, 1536, 512, 512, 0, -53, -36],
                [512, 1536, 512, 512, 0, -53, -36]],

        animations:{
                die: {speed: 1, frames: [8, 9, 10], next:false},
                shoot: {speed: 1, frames: [1,2,3,4,0], next:false},
                thrust: {speed: 1, frames: [5, 6, 7,0], next:false}}


    }).thrustify()


}







