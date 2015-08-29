



cjs = createjs

J.rtSh = cjs.rotateShake = function (bm) {$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])}
J.scSh = cjs.scaleShake = function (bm) {
    $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}

cjsKey()


cjs.toColor =toColor = tCl=function(n1,n2,n3,n4){

    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :
        $r('c', n1)
}





$.fit =  function(a,b,c){
    return $.c( c||'r', b||700, b||700).A().fit(a||'me')  }

upload=function(){



    $.fU= $.fileUpload =  function(lb, t){
        var fG =  $.d().K("form-group").A(
            $.lb(  D(lb) ? lb  : 'upload file',  'upl'  ).K('control-label').fS(20),
            $.ip().ty('file').id('upl').name('i')
        )
        if(t){
            fG.A(   $.p(t).K('help-block')   )}
        return fG
    }



    UPLOAD=function(){

        f =  $.f().attr({
            method:'post',
            enctype: 'multipart/form-data',
            action: '/pic'
        }).C('o').A($.fU(''),

            $.sm().val('ok').K("show"))

        $.pop(f, {title: 'upload a new pic'} ).dg()
    }

    UPLOADS=function(){ $.fm()
        instr= 'You have uploaded these pics. Click to make a sprite, or hit the x to delete..'

        y = 80
        n=0


        $.eG('myPics',  function(p){
            $l('pic: ' + n++)
            $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
            y+= 220
        })


        /*
         $.G('myPics',  function(p){_.e(p, function(p){

         $l('pic: ' + n++)
         $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
         y+= 220
         })

         })*/




        s2.A($.h4(instr))
    }




//<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>


}; upload()



$.cut=function(m){ z()
    $.fm()
    c =  $.c('r', 500, 500).A().fit(m||'me')
    s1.A(
        $.bt('save sprite',function(){c.snap(); EDIT()}), $.br(2),
        $.bt('start cut',function(){c.dots(); }), $.br(2),
        $.bt('restart cut',function(){$.cut(m)}), $.br(2),
        $.bt('file uploads', function(){window.location='/wap/uploads' })
    )
    s2.A($.h2('click to start cut-out..'), c)
}

CARD=function(){

    var t=100,d


    card=function(a,b){
        d = $.dA('y',300)//.cen()
        d.$$( function(){ d.rm() } )
        if( O(a) ){d.A( $.h3(a.u||'anon'), $.i(a.m||'me') )}
        else {d.A( $.h3(a||'anon'), $.i(b||'me') )}
        d.WH(200)
    }

    cards=function(){

        $.get('/users', function(u){_.e(u,function(u){
            $.P('/getImageById',  u.m, function(mug){
                d= $.dA('r','+').lt(t)
                d.A( $.h2( u.u ),  $.i( mug ).WH(200,300) )
                t+=20})})})}
}

$.picDiv=function(top){
    return  $.dA('b','+').WH('auto').XY(200, top).K('pic').pad(25)
}
$.pic=function(pic){
    i =  $.i(pic._id + pic.ext).WH(120,120)
    i.click(function(){$.cut(pic._id + pic.ext) })
    return i
}
$.delBt=function(url, data){var bt

    bt = $.bt('delete', function( el ){

        $.ajax({
            type: 'DELETE', data: data, url: url,
            success: function (){$(el.target).closest('div').rm() }
        })
    })


    return bt
}
moveInACircle=function(){}

ctx=function(){
    x=CanvasRenderingContext2D.prototype
    x.linGrad=function(a,b,c,d){
        return this.createLinearGradient(a,b,c,d)

    }
    x.radGrad=function(a,b,c,d,e,f){
        return this.createRadialGradient(a,b,c,d,e,f)

    }
    x.f =function(fs){

        this.fillStyle = fs
        return this}
    x.temp=function(func){var x=this

        func = _.bind(func, x)

        this.save()

        func()

        this.restore()

        return this}
    x.H=function(){
        return this.canvas.height
    }
    x.W=function(){
        return this.canvas.width
    }
    x.trans=function(){
        this.translate.apply(this, arguments)
        return this}
    x.Z=function(){
        this.scale.apply(this, arguments)
        return this}
    x.tick=function(func){var x=this

        createjs.tick(function(){

            x.temp(func)
        })


        return this}
    x.beg=function(){this.beginPath()
        return this
    }
    x.mt=function(x,y){this.moveTo(x,y);return this}
    x.lt=function(x,y){this.lineTo(x,y);return this}
    x.ss = function(c){ this.strokeStyle =  oO('c', c); return this}
    x.fs = function(c){  this.fillStyle =  oO('c', c); return this}
    x.drawPoly=function(vs,sc,hole,ox,oy){
        ox=N(ox)?ox:0; oy=N(oy)?oy:0

        var x=this,
            i

        x.beg().mt(vs[0][0]+ox, vs[0][1]+oy)

        for(i=1; i<vs.length; i++){
            x.lt(vs[i][0]+ox,
                vs[i][1]+oy)}

        x.lineWidth = 2

        x.ss(sc||'b').fs( (hole==true)?'w':'p' )
        x.closePath()
        x.stroke()
        x.fill()
        return this}
    x.drawPolys=function(poly,sc,ox,oy){var x=this
        //if more than one poly produced, use multiple color to display

        var num=poly.getNumInnerPoly()

        _.times(num, function(i){ if(i!=0){ sc=['red','green','blue','yellow'][i%num] }

            var p  = poly.getInnerPoly(i)

            x.drawPoly(p.verts(), sc, p.isHole(), ox, oy)

        })


        return this}

};ctx()
CUTOUTS=function(){
    $.fm(); section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
    y = 80

    $.eJ('/img', function(img){var i
        i = $.i(img.d)
        i.WH(100,100)
        i.$(function(){$.po('/changeMug', {url: img.d}, function(){ i.selPic() })})

        $.dA('b',100, 100, '+').left(y).top(200).K('pic').A(
            i, $.btX('/img', img)
        )

        y += 220

    })

}
draw=function(){



    testWarp=function(){z()
        st = $St('z',500,500)
        st.mug(function(bm){ m
            bm.sXY(.1).vXY(8,4).startMoving()
            bm.warpY(0,300,100).warpX(0,400,100)})}//easel

    testWarp2=function(){z()
        st = $st('z',500,500)
        st.mug(function(bm){  b=bm
            bm.sXY(.1).vXY(8,4).startMoving()
            bm.warp()
        })}

    testKillHitting=function(){

        St()

        st.bm('me',0.3, function(b){b.dg().XY(100)})
        st.bm('sun',0.3, function(b){b.dg().XY(100)})
        st.bm('chicks',0.3, function(b){b.dg().XY(100)})
        st.bm('guy',0.8, function(b){b.dg().makeMeAKiller()})
    }

    startStopButtons =function(){z(); var func
        b1= $.bt('start!', function(){

            func = st.on('tick', function(ev){e=ev
                mug.X(10, '+')})


        })
        b2=$.bt('stop!',function(){


            st.off('tick', func)
        })
        $.d().A(b1, b2   ).A()

        $St(600).mug(0.2, function(bm) {mug=bm

            bm.XY(300).warp()

            SL(bm)

            // gun(  bm)

        })}
//it adds me and gives u two buttons.  just pass in a func
    startStopButtonsAbstract=function(f){z()
        $.d().A(
            b1 = $.bt('start!', f),
            b2=$.bt('stop!', function(){
                bm.off(f)
            })

        ).A()

        s = $St(500)
        s.bm('me', function(){

        })}
    testShootBullet=function(){St()

        st.mug(.2, function(b){mug=b
            mug.startMoving(5,5).warp()
            $.kD('space', function(){mug.shootBullet()})
        })
    }
    shootBulletTimeBased = function(shooter){

        var st =shooter.getStage(),

            w =st.W(),
            h =st.H(),

            bullet = createjs.circle(8,'white').XY(shooter.x+75, shooter.y)

        st.A(bullet)

        p.timeStamp = function(func){

            return this.tick(

                function(e){

                    if(!N(j.ts)){
                        j.ts=0
                        j.lts= e.ts}


                    else{
                        j.ts=e.ts-j.lts
                        j.lts=e.ts
                        func(j.ts)}

                })
        }

        bullet.fn = st.timeStamp(bullet,
            function(t){
                b.Y(t/5 ,'-')
            })


        onTick(function(){
            if(bullet.y < 200 || bullet.y > h ){
                $l('miss')
                bullet.remove()
                bullet.fn()  // ahhh to stop the timestamping !!!!
            }})

        return bullet}
    ugun=function(j){
        $.kD('space', function(){shootBulletTimeBased(j)}) }
    sbul=function(shooter){

        var st = shooter.getStage(),

            w=st.W(),
            h=st.H(),
            x=shooter.x,
            y=shooter.y,
            vx=shooter.vx,
            vy=shooter.vy,
            bullet = createjs.circle(8, 'red')
        st.A(bullet)


        //start the bullet moving
        bullet.fn = st.timeStamp(function(){
            //in thise cae i dont think i'm using the timestamp
            bullet.move()
        })


        //set bullet's velocity to same as the shooter
        bullet.vY( shooter.vy ).vX( shooter.vx )

        //the function is just returned
        /// so .on('tick', func) is called.  fn is just storing what .on returns  //not sure for what.. maybe to stop/cancel it (pause)
        //this is moving something up the screen (reverse gravity)
        bullet.fn = st.timeStamp(   function(timeStamp){bullet.Y( timeStamp/5 ,'-')})



        return bullet}
    sgun=function(j){kD('s',function(){

        sbul(j)

    })}
    CanvasBullet=function(x,y,dx,dy){ //oh its written for straight up canvas

        this.dx*=-5;
        this.dy*=-5;
        this.radius=8;

        this.draw=function(){
            canvas.circle(this.x,this.y,this.radius,'pink','white')
        }

        this.update=function(){this.move()}

        Bullets.push(this)
    }
    CanvasGuy=function(x){
        var g={ x:200,y:200,r:20,

            dx:1,dy:1, c:0, h:1000,

            draw:function(){
                var t=this;
                x.cir(t.x,t.y,t.r,'b','y')},
            update:function(){
                var t=this
                t.x=wrp(0,1200,20)(t.x+t.dx)
                t.y=wrp(0,600, 20)(t.y+t.dy)}}
        g.draw()
        return g}

//shooters
    createjs.Guy=Guy=function(x,y,vx,vy, radius ){

        radius=radius||10
        x=x||300
        y=y||300
        vx=vx||1;
        vy=vy||1

        var guy = createjs.circle(radius, 'green', 'red')

        guy.XY(x,y).vXY(vx, vy)

        //cache
        //  guy.cc(-radius-10, -radius-10, radius*2+20, radius*2+20)


        guy.start =  function(){

            guy.funcRef = setInterval(function(){

                //if guy off screen, kill him
                if(guy.x<0||guy.y<0||guy.x>800||guy.y>600){
                    $l('guy is going..')
                    guy.remove()
                    guy.stop()
                    $l('guy is gone..')
                }

                else { guy.move() }

            }, 200)

            return guy}
        guy.stop =  function(){ clearInterval(guy.funcRef )}

        return guy}

    GreenGuy =  function(x,y,vx,vy){

        var b= createjs.circle(40,'green').XY(x,y)
        if(N(vx)){b.vX(vx)}
        if(N(vy)){b.vY(vy)}

        return b.startMoving()
    }
    testGuy=function(){z() // cant set a var to 'guy' ???

        st = $St(600,300)
        g = Guy(100,100, 4,3)
        s.A(g)
        g.start()


        s.A(
            gg= GreenGuy(200,200,1,5)
        )

        g.warp()
        gg.warp()


        // why isnt bounce working?
    }
    addMeWithVelocityAndIBounce = function(x,y,vx,vy,st){

        z()

        x=x||100
        y=y||100
        vx=vx||20
        vy=vy||20

        st = st || $St(400,400)

        $(st.canvas).dg()

        st.bm('me',function(b){me=b

            if(N(vx)){b.vX(vx)};
            if(N(vy)){b.vY(vy)}
            b.XY(x,y).bounce().startMoving()

        })
    }
    /*

     newAsteroid=function(){ // new Asteroid?
     var a = createjs.Asteroid();
     a.A();
     a.start()}
     createjs.Asteroid = Asteroid= function(  x,y,r,vx,vy, st){

     var _r = _.random

     st = st ||$St.(1000,1000)


     x= x|| _r( st.W() + 20 )  //st.W checks bounds and error!!?
     y= y|| _r( st.H() + 20 )

     radius= r|| _r(10)+5

     vx=vx|| _r(100)/25-2
     vy=vy|| _r(100)/25-2

     var ast = {
     circle:  createjs.circle( radius, 'white' ).XY(x,y).vXY(vx,vy),
     radius: radius,
     x: x,
     y: y}



     ast.remove = function(){ return ast.circle.remove() }
     ast.globalToLocal =function(){ return ast.circle.globalToLocal()}

     ast.add =   function(){st.A( ast.circle )}

     ast.push =  function(){aA.push(a)}

     ast.update =  function(){

     ast.circle.move()
     ///replace all below with ast.circle.acc()
     if(ast.circle.ax){
     ast.circle.vX(a.circle.ax, '+')}
     if(ast.circle.aY){
     a.c.vY(a.c.ay,'+')} // (accelerateY accY)

     if(ast.circle.x > st.W() || ast.circle.x < 0 ){
     ast.circle.vX('-')
     ast.circle.aX *= -1 // aX('-')
     } //so it starts accelerating the other way AND simulteanously bounces (both horizontally)

     //here it does the same with y.  ok i should demo it!
     if(a.circle.y > st.H()|| a.circle.y <0 ){
     a.c.vY('-')
     a.c.ay *=-1
     }}  //ah, its a friction.. it probably goes opposite the velocity.  hmmmm that's friction!
     //so this is reverseDirection, which will check if it also needs to reverse any friction-acceleration direction

     // ast.circle.cache(-20,-20,40,40)

     return ast}
     //uses guy
     //wraps a container around guy
     newAst=function(){
     var a=Asteroid(); st.A(a.circle); a.start()   }
     ASTEROIDS2 = CIRCLE2=function(){
     st =$St(800,600)
     Asteroids = []
     container =   $Ct()
     st.A(container)
     g= Guy(300, 300, 1, 1, 40, 'yellow')
     st.A(guy)
     guy.start() //startMoving?
     guy.warp()
     st.on('stagemousedown', function(e){
     g.vX((e.rawX - g.x)/10,'+')
     g.vY((e.rawY - g.y)/10,'+')
     if(g.vx>10){g.vX(10)}
     if(g.vy>10){g.vY(10)}

     })

     $.kD('space',function(){
     var badGuy = Guy(
     g.x, g.y, g.vx, g.vy
     )

     container.A(badGuy);
     badGuy.start() //.startMoving?
     })

     _.times(10, newAst)

     st.tick(function(){

     _.e(Asteroids, function(ast, k){

     ast.update()

     _.e(container.children,
     function(child){
     localChild=child.globalToLocal( ast.x ,ast.y );
     if(child.hitTest(localChild.x, localChild.y) ){
     ast.remove(); $l('HIT')}
     })


     localChild=guy.globalToLocal(ast.x , ast.y )


     if(guy.hitTest(localChild.x, localChild.y) ){

     $l('hit'); co()  }   })  })



     }
     // tt( 'f', 30 )
     ASTEROIDS = CIRCLE=function(){z()


     st=   $St($.c('g', 800,600))

     ct=   $Ct()

     st.A( ct )




     st.A(g = Guy(300, 300, 1, 1, 40, 'yellow'))

     g.start()
     g.warp()

     return
     Asteroids = aA=[];

     _.t(10, newAst)

     st.MD(function(e){
     var badGuy = Guy(g.x(),g.y(),g.dx(),g.dy())
     ct.A( badGuy )
     badGuy.start()
     g.vX((e.rawX- g.x)/10, '+')
     g.vY((e.rawY- g.y)/10, '+')
     if(g.vx>10){ g.vX(10)}
     if(g.vy>10){ g.vY(10)}
     })


     st.tick(function(){var gx = g.x, gy=g.y
     _.e(Asteroids, function(a, k){
     var ax=a.x , ay=a.y
     a.update()
     _.e(container.children(),
     function(b){var bx= b.x, by= b.y
     if(ax > bx-10&& ax<bx+10&&ay>by-10&&ay()<by+10){
     $.body().C('*')
     a.rm();//aA[k]=null;_.compact(aA)
     }})
     if(ax>gx-40&&ax<gx+40&&ay>gy-40 && ay<gy+40){g.al(.01,'-')}
     })
     })
     }

     */
    MEBOUNCEGAME=function(){St()
        st.A( g = Guy(100, 100) )
        g.keyControls()
        g.warp()  /// gotta steal back 'ctr'.. get it :)
        addMeWithVelocityAndIBounce( 100, 100, 2, 4, st)
        st.MD(  function(){me.shootBullet(); g.shootBullet()})
    }
////
/////
/////
//withBall = wB=function(f){qG('/ball',f)}
    withGodzilla=function(func){ //gz anything?
        $.post('/godzilla', func)}
// wMb(function(b){SL(b.wh(60).xy(100,400),'-')},s)//  wMb(function(b){SL(b.wh(60).xy(400,100),'+')},s)
    sunInACanvas=function(){return $.c('X',500).fit('sun')}
    multiGroupBall = bl=function(data, y){

        //bring back dva !!!

        ball = $w['ball']|| dva()

        var moveBallTo = function(b){ ball.XY(b.x, b.y) }

        if(U(d)){ $.get('/ball', moveBallTo) }

        else{

            if(N(data)){

                data={x:data, y:N(y)?y:data}
            }

            $.post('/ball', data, function(){

                $.get('/ball', moveBallTo)

            })}}
//gives a randomly doctored number (u pass in number and +/-/)..
//not sure why it called cage

};draw()
//eachImage = eaI=function(f){$.getJSON('/img', function(i){ _.e(i, f) } )}
edit=function(){

    EDIT=function(){

        st  = $St('z',400)

        ct =  $.Ct().A(d=$.d(), st.canvas)

        $.eJ('/img', function(i){


            c = d.Can('o',40,40)
            c.fit(i.d)
            c.$(function(){st.bm(i.d, function(bm){ bm.rC(200,200).TR() })})
            c.mar(20).C('r')
            d.A($.btX('/img', i, '-'))

        })


        $.$$(function(){ $.po('/img', {d: st.du()}, $.rl) })
        d.C('b').al(.6).W(400).H(100)
        d.ov('scroll').css('overlflow-y', 'auto')

    }


    sav=function(st,a){return function(){ st.sv(a) } }

    EDIT0=function(){

        st = St(800)

        var imgHolder = $div()

        CT(   imgHolder,     st   ).o( '$$', sav(st, 'edit'))

        eaI(function( img ){

            imgHolder(

                $imageSizeFuncCan(

                    img.d,  1,   function(){
                        st.bm(   img.d,

                            function(bm){
                                //bm.rgc('+');
                                TR(bm);

                            },    '+'  ) }

                )
            )

        })

        return st}
    EDIT1=function(){

        st = St(800)

        var imgHolder = $div()

        container=  CT(   imgHolder,     st   )

        container.o( '$$', sav(st, 'edit'))

        eaI(function( img ){

            imgHolder.A(

                $.c('X',100, 100).fit(img.d).click(function(){


                    st.bm(   img.d,

                        function(bm){    bm.rCenter('+'); TR(bm)  }   ) })


            )

        })

        return st}
    PROPBOX=function(){

        var imagesDiv=$div()

        dA=$divA('y',200)(
            $span('prop box'),
            $hr(),
            $span('selected cutout:')

        )



        st = SuperStage(800)

        littleStage = SuperStage(80)

        dA(littleStage)

        CT(imagesDiv, st).o( '$$', sav(st, 'edit') )

        eaI(function(image){

            imagesDiv(

                xc(  image.d, 1,

                    function(){ st.bm(

                        image.d,

                        function(bm){

                            TR(bm)


                            ///hmmm only clicks once?
                            //does this relate to the draggable st problem?
                            bm.$(function(){
                                $l('new selection')
                                b=bm
                                littleStage.ch('-')
                                clone=Do( bm.ob.clone() )
                                littleStage.a( clone )

                                clone.xy(50).sxy(.1)
                            })


                        }



                        , '+' )}     )

            )})

        return st}

    AVATAR=function(){
        z()
        //the challenge here is to make the st draggable but still usable, by dragging it by a wrapper div
        //  s=St(400)
        st  = $.dragStage().t()
        //d = qq( st.ob.canvas )
        //d2=$div().drg().w(500).h(500).c('o')
        //CT(d, st).o('$$',  sav(st,'avatar') )
        st.$$(function(){st.snap('avatar')})
        d = $.d('x','+')
        $.Gj('img', function(i){ _.e(i, function(img){
            d.A($.c(100,100).A().fit(img.d).$(function(){ st.bm(img.d, TR, '+' ) }))
        })})
        //d2( st )
    }


//, dats: x.dats
    PAINT= function(){
        _paintColor='blue'
        _paintSize = 10
        canvas = $.c('r', 400, 400).A().P('a',100,50)
        st = canvas.stage.tick()
        shape = new createjs.Shape()
        st.mug(function(mug){
            mug.sXY(.4)
            st.A(shape)
        })
        graphics = shape.graphics
        graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
            .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
        st.on('stagemousedown', function(e){
            graphics.beginStroke(_paintColor)
            st.on('stagemousemove', function(e){  graphics.lineTo(e.stageX, e.stageY) })
        })
        st.on('stagemouseup', function(){ st.removeAllEventListeners('stagemousemove')})
        div = $.dK('controls').a2($('body'))
        colorPicker = $(' <input   type="color">')
        div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))
        colorPicker.on('input', function () {$l('input ')
            _paintColor = $l(colorPicker.val())
            graphics.beginStroke(_paintColor)
        })
        $('.controls span').$$(function(){
            graphics.setStrokeStyle( parseInt($(this).T()) )
        })
    }
    EDITOR=function(){z()
        var r='#0FF',  size=2,oX=0,oY= 0,shape,
            st = $.dragStage(),
            imgHolder = $.d('y', '+')
        $.eG('img',function( i  ){
            imgHolder($.imgSizeFnCan(
                i.d, 1, function(){
                    st.bm( i.d, function(bm){
                        SL(bm.sxy(.4))}, '+')
                }))})
        TextAdder2(st)
    }
};edit()
$Ct=function(){return new createjs.Container()}


selected=function(bm){
    SL(bm)
    bm.$(function(){
        createjs.Tween.removeAllTweens()
        bitmap=bm
        createjs.scaleShake(bm.dO)
    })
}
SELECTED=function(){z()


    st = $.dragStage()

    st.wBm('coin',  function(bm){
        coin=bm;
        SL(coin)
        selected(bm)

    })
    st.wBm('sun', function(bm){

        sun=bm;
        SL(bm)
        selected(bm)

    })
    TextAdder(st)
    st.wBm('me', function(bm){

        me=bitmap=bm
        SL(bm)
        bm.rgc('+')
        scaleShake(bm)
        //rotateShake(bm)
        selected(bm)
        st.wBm('flame', function(bm){ flame=bm; SL(bm);selected(bm) })
        st.wBm('guy', function(bm){ guy=bm;SL(bm); selected(bm) })

    })


    d= $.d('y', '+')
    loadImagesDiv=function() {
        d.E()
        $.eG('img', function (img) {
            d.A(
                $imageSizeFuncCan(
                    img.d, 1, function () {
                        st.wBm(img.d, function (bm) {
                            SL(bm.sxy(.4));
                            bm.rgc('+');
                            selected(bm)
                        })
                    })
            )})}

    loadImagesDiv()
    d= $.dA('y', 500).A(

        $.bt('freeze',  createjs.Tween.removeAllTweens ),
        $.bt('right', function(){ bm.x( bm.x() +10)  }),
        $.bt('left', function(){  bm.x( bm.x() -10)  }),
        $.bt('up', function(){    bm.y( bm.y() -10)  }),
        $.bt('down', function(){  bm.y( bm.y() +10)  }),
        $.br(),
        //fix
        $.bt('bigger', function(){   bm.sxy(1.1, '*') }),
        $.bt('smaller', function(){  bm.sxy(  .9,'*' )  }),
        //
        $.bt('wider',   function(){  bm.sx( bm.sx() * 1.1 )  }),
        $.bt('thinner', function(){  bm.sx( bm.sx() * .9 )  }),
        $.bt('taller',  function(){  bm.sy( bm.sy() *1.1 ) }),
        $.bt('shorter', function(){  bm.sy( bm.sy() *.9)  }), $.br(),
        $.bt('CW',  function(){  bm.rt(bm.rt() + 10) }),
        $.bt('CCW', function(){  bm.rt(bm.rt() -10)  }),
        $.br(),

        $.bt('get index', function(){

            pop('index: ' + st.ix(bm)  )

        }),


        $.bt('set index to 3', function(){

            st.ix(bm, 3)
            pop('index: ' +  st.ix(bm) )

        }),


        $.bt('z-up',  function(){

            st.ix(bm, st.ix(bm)+1)

        }),

        $.bt('z-down', function(){   st.ix(bm, st.ix(bm)-1) }),

        $.bt('remove', function(){

            st.rm(bm)

        }),
        $.bt('clone', function(){st.A($Ct().A( bm.ob.clone()))}), $.br(),
        $.bt('save', function(){
            st.sv(function(){loadImagesDiv()})
        }),
        $.bt('paint', function(){ stagePainter(st) }),
        $.bt('', function(){  })
    )







}
INDEXX=function(){z()
    s= $.dragStage().bm('me',function(bm){b=bm
        SL(b)

        _.t(10,  function(){s.bm('guy',SL)  })
        s.ix(b, 3)
    })
}
TRANSFORM = function(){$.fm()

    wMs(function(b,s){
        st=s
        b.xy(0,0)
        b.rgc('+')
        TR(b)
        wMb(function(b){b.xy(50,50).rgc('+');TR(b)},s)
        wMb(function(b){b.xy(100,100).rgc('+');TR(b)},s)
        wMb(function(b){b.xy(200,200).rgc('+');TR(b)},s)
        wMb(function(b){b.xy(300,300).rgc('+');TR(b)},s)
        wMb(function(b){b.xy(400,400).rgc('+');TR(b)}, s)
        wMb(function(b){b.xy(150,150).rgc('+');TR(b)}, s)
        wMb(function(b){b.xy(250,250).rgc('+');TR(b)},s)
        wMb(function(b){b.xy(350,350).rgc('+');TR(b)},s)},'-')

    s1.A($.bt('rotate',function(){
            s.ch('-')
            wMb(
                function(b,s){s.M(50); //b=Do(bj(b))
                    RT(b.xy(400))
                    wMb(function(b){b.xy(300).al(.5)

                            RT(b,'-')}
                        ,s)
                    wMb(function(b){
                            KK(b.xy(200).sxy(1.4),'+')}
                        ,s)
                    wMb(function(b){
                            KK(b.xy(100).sxy(.6))}
                        ,s)}, s)
        }), $.br(2),
        $.bt('skew',function(){

            s.ch('-')

            wMb(function(b,s){
                s.mg(function(b,s){
                    SK( b.xy(300).rgc('+').sxy(1.5))
                    s.w(2000).h(2000)
                })
                //b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
            },s)
        }), $.br(2),
        $.bt('register',function(){

            s.remove()

            wMb(function(b,s){TR(b); rg1(b); reggy(b)}, s)

            wMb(function(b,s){TR(b); b.rgc(); rg1(b);  reggy(b)}, s)}),
        $.br(2))}
SHOWCASE=function(){$.fm()

    s2.A(
        $.sp('pics!').id('pics')
    )

    s2.A( x = $.c('y', 500, 500) )

    //x.q.cen()

    $.eG('img', function(v){
        $.c().fit(v.d, 1)

        x.X()
        url$ = v.d
        x.fit(v.d)

        $('#pics').A(x)

    })
    s2.A(
        $.br(2), $.lb('caption'),
        cap$= $.ip().W(500)
    )
    s1($.br(2), $.lb('category'),
        cat$= $.ip().W(200), $.br(2),
        $.bt('post',function(){
            o={t:cat$.V(), c:cap$.V(), du:url$}
            $.P('pst',o,function(){$.pop('posted')})
        }), $.br(2),

        $.bt('make a showcase',function(){}), $.br(2),
        $.bt('submit to ranky',function(){}), $.br(2)
    )

}
que=function(){
    QUEUE=function(){z()
        s= $St(500)
        queue = new createjs.LoadQueue()
        queue.on("complete", handleComplete, this)
        queue.loadManifest(
            [{id:"myImage", src:"/me.png"}, {id:"guyImage", src:"/guy.png"}])
        function handleComplete(){

            image = queue.getResult("myImage")

            s.A(   createjs.bm(image)   )

        }}
    QUEUEMUG=function(){z()

        s = $St(500, 500)

        qu = Ql().c(graphics, this).l([
            {id:"mug", src:"/getMug" },
            {id:"me", src:"/me.png"}

        ])

        ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
        function graphics(){

            // mug= s.bData( qu.gR("mug") ).drag()

            me = createjs.bm( qu.gR("me") ).drag()
            s.A( me )


        }

    }
    Cycle2=function(x,y){
        ct=  c= cont= $Ct()
        var qu =  new createjs.LoadQueue().complete( graphics )
            .manifest([{id:"mug", src:"/myMug" }, {id:"uni", src:"/uni.png"}])
        function graphics(){
            cont.bm(
                qu.getResult("uni"),
                function(b){bm = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
                    bm.name=('uni')})
            cont.bm($.img($.parseJSON(qu.getResult("mug"))),
                function(b){mug =b.sXY(.4)})
            SL(mug, cont)
            createjs.tween([mug,'l'],   [{y:-10},200],   [{y:10},200],  [{y:0},200])
        }
        if(N(x)){c.X(x)}
        if(N(y)){c.Y(y)}
        return c}

    //// ***
    mugCont=function(st){

        qu= new createjs.LoadQueue().complete(onMug).manifest([{id:"mug", src:"/myMug" }  ])
        cont= createjs.container()
        cont.flame=function(){
            cont.desuit()
            cont.A(

                cont.suit = createjs.container().bm('flame', function(flame){  })
            )
        }
        cont.uni=function(){
            cont.desuit()
            cont.A(

                cont.suit= createjs.container().bm('uni', function(uni){
                    uni.x(200).y(200)
                    cont.mug.sxy(.2).x(300)

                }))}
        cont.guy=function(){cont.desuit()
            cont.A(

                cont.suit= createjs.container().bm('guy', function(guy){

                    guy.spin()
                    cont.spin()

                })
            )}
        cont.desuit=function(){

            cont.mug.sXY(1).XY(200)
            if(cont.suit){
                cont.suit.remove()
                cont.suit=null
            }
        }
        function onMug(){
            mug = qu.getResult("mug")
            // cont.bData( mug )//.rgc('+')
            cont.A( cont.mug = createjs.bm(mug))
        }
        return cont}
    CONTMUG=function(){z()
        s= $St(1000).A(  m = mugCont()  )//.rgc('+')
        SL(m)
    }
};que()



bod=function(){

    Cycle1=function(x,y,rt){


        ct= $Ct().mug(function(mug){mug.sXY(.4)
            ct.bm('uni', function(b){
                b.sX(-.8).XY(-20,200).rXY(240,80)
                b.n('uni')
                J.TR(mug, ct)
                J.RT(b, ct)

            })})


        if(N(x)){ct.X(x)}
        if(N(y)){ct.Y(y)}
        if(N(rt)){ct.rt(rt)}
        return ct
    }
    CYCLE=function(){z()

        s= $St(800, 800).tick()

        c1=Cycle1()
        c2=Cycle2()
        s.A( c1, c2 )}
    Flame1=function(x,y){var c

        c= $Ct().dg()
        c.bm('flame', function(b){
            tweens.shakeY(b)
            c.mug(function(b){
                b.rC()
                tweens.shakeX( tweens.rott(b) )
                c.bm('flame', tweens.shakeX)
            })

            c.$$(function(){
                c.bm('flame', function(b){tweens.prod1(b.sXY(.2))})
                c.bm('flame', function(b){tweens.prod2(b.sXY(.2))})
            })
        })
        if(N(x)){c.X(x)}
        if(N(y)){c.Y(y)}
        return c}
    FLAME=function(){
        s= $St(800, 800).A( f = Flame1( 300))
    }
    Bod2=function(x,y){
        var c1=$Ct(),
            cL=$Ct()


        c1.mug(function(m){

            SL(m, c1)

            m.sXY(.4)

            // c1.cI(m, 0)

        })


        c1.bm('arm',function(b){  b.sX(-.8).X(140).Y(100).rX(200).rY(80)
            RT(b)
            b.$$( function(){tweens.rpunch(b)})})

        cL.bm('uparm', function(b){

            RT(b, cL)
            b.sX(.8).XY(80,180).rXY(200,80)
            cL.$$(function(){tweens.lpunch(cL)})
            cL.XY(140,100).rXY(100, 100)

        })

        cL.bm('forearm',

            function(b){//lf=b
                b.name = ('lf')

                b.sX(.8).XY(-100, 140).rXY(20,120)
                RT(b)
            })
        return c1.A(cL)
    }
    Bod1=function(){

        var  outerCont = $Ct().dg()

        var  innerCont= $Ct()


        outerCont.A( innerCont )

        outerCont.mug(

            function(m){
                m.sXY(.4)

                createjs.bindSlide(m, outerCont)


                outerCont.bm('arm', function(b){

                    b.name = 'arm'

                    b.sX(-.8).XY(140,100).rXY(200,80)

                    createjs.bindRotate(b)

                    b.on('dblclick',function(){  tweens.rpunch(b)  })

                })

                innerCont.XY(40, 120).rXY(40, 100)

                innerCont.bm('uparm', function(b){


                    b.sX(.8).XY(80,180).rXY(200, 80)

                    createjs.bindRotate(b, innerCont)})

                innerCont.bm('forearm',  function(b){
                    b.name='lf'
                    b.XY(-100,140).sX(.8).rXY(20,120)
                    createjs.bindRotate(b)
                    innerCont.$$(  function(){tweens.lpunch(b)})
                })})

        return b=outerCont}
    BOD=function(){z()

        s = $St(800, 800).A(
            b1=Bod1(),

            b2=Bod2().XY(300)

            /*  ,
             cyc=Cycle1( 400),
             cyc2=Cycle2( 500)*/
        )


    }
    FLAM=function(){z()

        s = $St(800, 800).A(

            f=Flame1(300,500)

        )


    }
    CYC=function(){z()
        s = $St(800, 800).A(

            cyc=Cycle1( 400)//, cyc2=Cycle2( 500)
        )

    }


};bod()







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


old=function(){
    $.sv= sv=function( x, fn ){
        alert('sv')
        $.post('/img', {
            d: xx( C( x ) ).u(),
            dats: x.dats}, fn)
    }
}