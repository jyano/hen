STG=function(){z()  //three ways to make a new stage
    s = $St('z',400 ).bm('me'); s.can.dg()
    $St($.c('o',400,100).dg()).bm('me')
    $.c('x',300,100).id('someId').dg()
    $St(['someId']).t().bm('me')
}
CIRCRG=function(){St()
    nip=function(){
        x1=0
        y1=0
        r1=10
        x2=0
        y2=0
        r2=100
        var h= cjs.shape(10, 10).a2(s).drag().opacity(.8)
        h.graphics.beginRadialGradientFill(  [ 'blue', "orange"],  [0,  1],
            x1,   y1,   r1,     x2,    y2,    r2   )
            .dc(0, 0,100)
            .endFill()
        return h}

    x1=0
    y1=0
    r1=10
    x2=0
    y2=0
    r2=100

    h=cjs.shape(10, 10).a2(s).drag()

    change= function(){
        //  h.remove()
        // h=cjs.shape(10, 10).a2(s).drag()

        h.graphics.rf(   [ 'blue', "orange"],  [0,  1],   x1,  y1,  r1,   x2,  y2,  r2  ).dc(0, 0,100).endFill()

        // x--

        // r1++
        // r2++
    }


    setInterval(change, 1000)

    change()

    n = nip()

    //h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}
RAD1=function(){St()

    s.h(600,300).graphics.rf(
        ['blue',"orange"],  [0,1],  0,0,10,   0,0,100
    ).dc(0, 0,100).ef()

    s.h(600,100).graphics.rf(
        ['CornflowerBlue',"orange"],  [0,1],  0,0,10,   0,0,100
    ).dc(0, 0,100).ef()

    s.h(800,300).rf(
        ['blue',"orange"],  [0,1],  0,0,10,   0,0,100
    ).dc(0, 0,100).ef()

    s.h(400,300).rf(
        ['b','o'],  [0,1],  0,0,10,   0,0,100
    ).dc(0, 0,100).ef()




    s.h().cir(0,0,10)
}
EASELCONVEX=function(){s=cjs.S()
    s.poly([[-100,-10],[0,100],[100,20]],'red','white',10).XY(200,300)
    s.poly([[-20,-80],[-100,-200],[100,5]]).XY(300, 200)
    s.poly([[-40,40],[-40,-40],[40,-40], [40,30]],'blue', 'white').XY(200,200)
}
CIRCTEST=function(){St()
    s.h().drag().cir({r:100,c:'b',C:'X',l:20,lf:1}, //why cant set lf to {}?
        [{x:250,y:300 }, {x:450,y:300 }, {x:250,y:500}])
    s.h().drag().cir({C:'X',lf:{X1:650,X2:220,Y1:950,Y2:520},r:100},
        [{x:750,y:300},{x:950,y:300 },{x:750,y:500}])
}
CIRS=function(){W(10).Y()
    w.D(200,160).cir(   {r:120, rf:{c1:'r',c2:'b'}},  {r:100, C:'y', l:2, bf:'me'})

    w.D(100,100).cir({r:35,lf:{c1:'o',c2:'y'}})


    w.D(300,200).cir({r:50,  x:0,   y:0,   lf: {c1:'o', c2:'b', X1:400 } })
        .cir({r:100, x:200, y:0,   lf: {c1:'o', c2:'b'} })
        .cir({r:100, x:100, y:100, lf: {c1:'o', c2:'b'} })


    w.s.h().dc([50],[200,0,100],[100,100,100]).c({ l:20,C:0,ls:1}).dc([50],[200,0,100],[100,100,100])

}
LT=function(){St()


    h.c('y').dc(100,100,30).c('o').dc(100,100,10)
        .c('X','g',8)
        .mt([
            [100,100],[300,300],[400,100],
            [500,300],[450,450]],[[500,0],[600,100]
        ])
    h.cir(600,300, 'u', 'g', 10)


    lf={c1:'b',c2:'o',y1:200,y2:700}
    v=[[300,300],[320,200],[640,400],[280,650]]
    //two ways to make the same thing
    s.h().poly({
        v:v,
        lf:lf
    })
    s.h(250,50).lf(lf).mt(v)
}
HPOLY=function(){St()
    v=[[-100,0],[0,-100],[100,50]]
    s.h(600, 300).poly({v:v, bf:'me'})
    s.h(900, 300).poly({v:v, lf:1})
    s.h(800, 300).poly({v:v, rf:1})
    h=s.h(200,300).drag().bf('me', function(){
        h.dc([150],[200,0,150])
    })
}
CIRCSTROKE=function(){St()
    gx= h.graphics
    h.c('b', 'r',10).XY(-100,-100)
    h.dc([200,200,50],[400,200,50],[600,200,50])
    /*  h.dc(300,300,50)
     gx.dc(400,400,50)
     h.dc(500,500,50)
     gx.dc(600,600,50)
     */

}
ROTREC=function(){St()

    ct = s.ct(600, 300)

    ct.rec({ w:400,h:400, c:'r',C:'o',l:10,a:-5 })
    ct.rec({ w:100,h:200, c:'b',C:'w',l:20,a:20, rg:1 })
    h = ct.rec({
        w: 100, h:200, a:20,
        c: 'b', C:'w', l: 20, bm:1
    }).X(100)
    $.in(8, function(){h.X(0)}) //notice how gradient is seen behind the bm!!!

}
TWORECS=function(){St()

    ct = s.ct(1000, 300).drag()
    ct.rec({ w:400,h:200, c:'r',C:'o',l:10,a:-5 })
    h1 = ct.rec({ w:200, h:400, c:'r', C:'o', l:10, a:5 })
    // h is another container.. to clr ->  h1.children[0].clr()

    h= s.h().dr2()
    //.rec({  })

}
BMH=function(){St()
    v=[[-100,0],[0,-100],[100,50]]

    s.h(100,300).drag().bmCir({
        circs:[{r:150},
            {x:200,r:150},
            [300,100,100],[400,100,100]]
    })

    s.h(700,300).drag().bmV({v:[
        [[-100,0],[0,-100],[100,50]],
        [[-200,0],[-100,-100],[0,50]],
        [[0,200],[0,-200],[400,-300],[400,300]]]})

}
CIRCS=function(){St()
    // h.dc(100,100,50) -> no color


    h.c().dc(100,100,50) // black fill, l4 white stroke
    h.c('*').dc(100,200,50).dc(100,250,50)
    h.c('***').dc(200,200,50).dc(200,250,50)
    h.c({C:'r'}).dc(300,300,50)
    h.circle({
        r:50, x:200, y:200,
        C:['y',10],
        lf: {c1:'u',c2:'o',y1:100,x2:100},
        ls: {c1:'u',c2:'o'}
    })
    h.circle({
        r:50, x:500, y:200,
        C:['y',2],
        rf: {c1:'u',c2:'o',x1:10,y1:10,  r2:30}, //, y1:100,x2:100},
        rs: {c1:'y', c2:'u', x1:-20,  y1:-20,  r1:40, r2:40    }
    })

    h = s.h().drag().lf({}).dc()
        .c('b','g',10).lf({  y2:400  }).dc(300,300,50)


    cjs.me(function(i){
        h.c({

            l:200,
            rf: ['w', 'u', 800],
            rs: {c1:'w', c2:'x', r2:800}

        }).dc({x: 0, y:0, r:200})

        s.h().c({
            l:200,
            lf: {c1:'w',c2:'u',y2:200},
            ls: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200}
        }).dc({x: 0, y:0, r:200}).drag()

        s.h().lf('y','r',10).dc({r:200}).c({
            l:0,
            c:'y',
            //lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
            bs:i,bf:i
        }).dc({r:200}).drag()
        s.h(40,10,'b',8).rf({c1:'r',c2:'d',r2:100}).dc(0,50,40).drag()
    })
}
OVALS=function(){St()
    h=s.h(40, 10,'b',16).drag()
    h.c({C:['o',5],lf:{c1:'g',c2:'r',x2:100,y2:400}}).de(100, 400)

    h.c({C:'b',
        lf:{c1:'g',c2:'r',x2:400, y2:100}}).de(400,100)

    h.l(30).lf({c1:'b',c2:'y', x1:100, y1:100, x2:500,  y2:400 })
        .de(100, 200, 500,300)


    h.ls('r','w',300,100,400,140).de(300,0,300,500)

}
GRAPHTEST=function(){St(); img = $.img('me',function(){s.ct().h().bmS(img).ss(32).dr(20,20,920,360); _.each([

        function(){return $h(12,10)
            .lf('b','g',130).dr(130)},

        function(){return $h(40, 10,'b',16)
            .ls('r','w',70,140).de(70,140)},

        function(){return $h(80,80)
            .C('b',8).rf('w','y',40).dc(40)} ,

        function(){return $h(12,10,18)
            .bf(img, cjs.M(1) ).rs('b','g',30,130).dr(130)},






        function(){return $h(12,12,'g','r',8)
            .rr(130,30)}, //w(h) and r


        function lt(){return $h().C('o')
            .ss(16,'round','round')
            .mt([40,10],[90,90],[90,140])},

        function star(){return $h(80,85,'y','b',3)
            .pStr(0,0,80,5,.8,-95)},



        function hex(){return $h(80,40,'p')
            .pStr(40,6).pStr(0,75,40,6).pStr(45,45,20,6)}


    ],

    function(cont,i){var W=155, H=155, P= 5, C=4 //pad, cols
        s.A(tile(cont()).XY(
            42+(W+P)*(i%C),
            42+(i/C|0)*(H+P)))})})[0]




    tile=createTile=function(x,y){var bg,til
        bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
        til = cjs.ct().A(bg)
        if(N(x)){  til.X(x) }
        if(N(y)){  til.Y(y)  }
        if(O(x)){ til.A(x) }

        return til}


}
MICK=function(){St()
    ct.mick=function(x,y,lf){var ct=this,

        h= ct.h(x,y).drag()
            .c({ l:20,  C:0,   lf: lf||1  })
            .dc([50],[200,0,100],[100,100,100])

        ct.h(x,y).drag().c({ l:20,  C:0,   ls: lf||1 }).dc([50],[200,0,100],[100,100,100])
        return h}


    s.mick(500,200)
    s.mick(700,100, { c1:'b', c2:'X' })
    s.mick(700,300, { c2:'b' })
    s.mick(100,100, { y2:10 })
    s.mick(100,200, { y2:200 })
    s.mick(100,300, { x2:100 })


}
REC=function(){
    St()
    h=s.h(480,270).drag()
    h.C('z',2).lf({x:-100, c1:'r',c2:'y'})
        .dr2({w:300,h:100,x:0,y:-100},
        {w:100, h:300})

    s.h(180,270).drag()

        .lf({c1:'r', c2:'y', x1:-100}).dr2(
        {w:300,h:100,x:0,y:-100},
        {w:100, h:300})

}
CENTERSHAPE=function(){St()

    h.rec(100,100,100,100,'y')
    h.rec(200,200,100,100,'b')

    h.c('o').polyStar(300,100,
        50,5,0.6,-90)

    h.c('w','z')
        .roundRectComplex(400,300,
        300,300, 20,20,30,40 )

    h.cir(500,200,40,'b','x',10)
}
SHAPES=function(){St()
    s.can.P('a').XY(300)
    s.bm('me', 0.2, function(bm){})
    s.A(cjs.circle(100, 'blue','green').XY(100, 100).drag())
    s.circle(100, 100, 10, 'red', 'yellow' )
        .circle(10,100,100,'black','purple')
        .circle(100, 10, 100, 'blue', 'red' )
        .circle(150,150,120,'red','blue')
        .circle(30,'brown','gray')
}
RADIALGRADRECT=function(){s=cjs.S()


    x1=100
    y1=150
    r1=20
    x2=100
    y2=150
    r2=100


    h=cjs.shape(10, 10).a2(s).drag()


    change= function(){

        //  h.remove()

        // h=cjs.shape(10, 10).a2(s).drag()

        h.graphics.rf(["red", 'blue', "yellow"],[0,.5,1],x1,y1,r1,x2,y2,r2).dr(0,0,400,400).ef()


        r1++
        r2++
    }

    setInterval(change, 1000)

    change()
}
RADIALGRADCIRC=function(){s=cjs.S()





    x1=0
    y1=0
    r1=10
    x2=0
    y2=0
    r2=100


    h=cjs.shape(10, 10).a2(s).drag()


    change= function(){

        //  h.remove()

        // h=cjs.shape(10, 10).a2(s).drag()

        h.rf( 'b', "o",  x1,
            y1,
            r1,
            x2,
            y2,
            r2     )


            .dc(0, 0,100)
            .ef()
        // x--

        // r1++
        // r2++
    }

    setInterval(change, 1000)

    change()
    n = nip()
    //h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}
USINGLAYERSINEASEL=function(){Q(['me','guy'],function(q){
    s=cjs.S()
    me  = q.bm('me').a2(s).sXY(3)
    guy = q.bm('guy').a2(s).sXY(.5).drag()
    $.button('s.sXY(2)', function () {s.sXY(2)}).A()
    cjs.tick(function(){
        me.X( guy.x * 2.2 - 140)
        me.Y( guy.y * .2 )})
})
}
GROW = function () {
    z()

    $St(500, 500).bm('me', function (bm) {
        b = bm
        bm.grow().dg()
    })

}
FANCYEDIT = function (x, y) {


    z()

    canvas = $.c('g', 400)
    st = stage = $St(canvas[0])

    frame = $.dragFrame(sp = $.sp())


    sp.A(
        $.bt('X', function () {
            frame.rm()
        }),
        $.bt('pics', function () {
            $.imagesDiv(st)
        }),

        $.bt('transform'),
        $.bt('text'),

        $.bt('paint', function () {

            _paintColor = '#0FF'

            var size = 10, oX = 0, oY = 0, shape

            var paintStage = $.dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(
                st.du(), //?

                function (m) {


                    m.XY(40).sXY(.4)
//                    stagePainter(paintStage)
                })


        }),
        $.bt('cut'),

        $.bt('save'))

    sp.A($.br(), canvas)

    sp.A($.d().A(
        $.bt('clear', function () {
            st.removeAllChildren()
        }),

        $.bt('flat', function () {
            st.removeAllChildren()
            st.bm(st.toDataURL(), function (bm) {
                bm.dg()
            })
        }),

        $.bt('clone', function () {


            var sp = $.sp(),
                newStage = $.dragStage().A(sp)
            newStage.bm(st.du(), function (bm) {
                SL(bm)
            })
        }),

        $.bt('recur', function () {

            stbm(st.du(), function (bm) {

                bm.sxy(.4).SL()

            })
        }),

        $.bt('copy', function () {

            _copy = st.du()


        }),

        $.bt('paste', function () {
            st.bm(_copy, function (bm) {
                bm.drag()
            })
        }),

        $.bt('replace', function () {

            st.rm()
            st.bm(_copy, function (bm) {
                bm.dg()
            })

        })
    ))

    sp.$$(function () {
        $('button').toggle()
    })


    sp.A()


}
ENTERST =function(){St()
    st.bm('me')
    st.on('mouseenter', function(){$('body').pp('once<br>')}, null, true)
    st.on('mouseenter', function(){$('body').pp('many<br>')}, null, false)
}
HANDEV=function(){St()

    st.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){
            this.x++
        })
    })

    st.bm('guy', function(b){
        b.handleEvent=function(){
            this.y++}
        b.on('pressmove', b)
    })
}
RMEVT=function(){St()



    st.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){this.x++})
    })

    st.bm('guy', function(b){

        b.handleEvent=function(){
            this.y++
            me.off('pressmove', cb)
        }

        b.on('pressmove', b)
    })



}
BUBBLE=function(){St()


    output = $T(
        "try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
        "13px courier").lWH(280,13).XY(190,10)

    bg= $H().n("background")

    bg.graphics.f("red").rr(0, 0, 150, 60, 10)
    lb= $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150/2, 60/2).n('label').tA("center")//.tB("middle")

    // setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
    // button.mouseChildren = false;
    st.A(bt= $Ct().XY(20).n('button').A(bg, lb), output)

    // set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:

    _.e([st,bt,lb,bg], function(tg){tg.$( handleClick, false); tg.$( handleClick, true)})

    st.u()


    function handleClick(e){
        if (e.currentTarget == st  && e.eventPhase == 1) { output.text = "target : eventPhase : currentTarget\n" }// this is the first dispatch in the event life cycle, clear the output.
        output.text += e.target.name + " : " + e.eventPhase+" : " + e.currentTarget.name+"\n";
        if (e.currentTarget == st  && e.eventPhase == 3) {    st.u()  }// this is the last dispatch in the event life cycle, render the stage.
    }


}
BOWL=function(){St()


    ct= container = c = $Ct().a2(st)


    plX= st.W()/2

    plY=150

    plR=100

    plr=75 // this seems to determine the radius of the 'cluster' of balls

    oRng=8 //outer ring

    nRng=3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1

    circle = cjs.circle(plX, plY, plR, 'yellow')

    container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)


    rngSp = plr/(nRng-1)


    aA=[]


    var ast = function(x,y,r,m,f){
        return {x:x, y:y, radius:r, m:m,
            f:f, vX:0, vY:0, player:false} }

    _.t(nRng, function(r){var crR=0, ang=0, rngR=0
        if(r==nRng-1){crR=1}

        else{
            crR=oRng-(r*3)
            ang=360/crR
            rngR=plr-(rngSp*r)}
        _.t(crR, function(a){var x=0,y=0
            if(r==nRng-1){x=plX;y=plY}
            else {
                x=plX+(rngR* M.cos((ang*a)* M.PI/180))
                y=plX+(rngR* M.sin((ang*a)* M.PI/180))-350}
            aA.push( ast(x,y,10,5,0.95) )
            ct.A(J.cir(10,'z').XY(x,y))


        })

    })
}
GRID=function(){St()
    ct=   st.ct()
    ct.SL()

    rows = 5;cols=6;sqP=12;sqS=80

    sqSP = sqS + sqP
    _.t(rows * cols, function(i){
        drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i/cols)
        )
    })

    function drawSquare(ct,x,y){
        var h  = $H()
        h.a2(ct).f($r())
        h.graphics.dr(5, 5, 70, 70)
        if(x){h.X(x)}
        if(y){h.Y(y)}
        return h
    }
}
TXH = function(){St()

    h = $H().a2(st)

    h.f('red').s('black')

    h.graphics.dc(400,400,200)
    h.graphics.dr(100,0,200,200)
}
ZX=function(){
    z()
    a = $.editDiv().A().C('a')
    b = $.editDiv().A().C('b')
}
SPACE=function(){St().bgI('/space.jpg').mug(function(m){m.sXY(.2).dg().RT().SL()})}
BOXES=function(){St()

    $.Ct().A(

        $.R().A(

            $.d('y').pad(20).A(
                $.h1('controls'),
                $.bt('fall',function(){ball.fall(box)}),
                $.bt('fall+',function(){_.ev(1,newBall)})
            ) ) )

    $.kD('r',function(){box.X(10,'+')})
    $.kD('l',function(){box.X(10,'-')})

    st.A(box=Box().XY(300,450))
    st.A(ball=Ball(40,'r','o').XY(300,100))
    newBall=function(){var ball = Ball(40, 'r', 'o').XY(_r(600), 100)
        st.A(ball)
        ball.fall(box)
    }
}
SHIP=function(){St()

    angleInDegrees =function self(y,x){

        if(O(y)){return self(y.vy, y.vx)}

        var d = tDeg(M.atan(y/x))

        if(x<0){
            d = M.abs(d)+90;
            if(y<0){d=M.abs(d)+90}}

        return d}


    ship=function(st){
        h=  t = $H().XY(100).rY(20).vX(1).vY(1)
        h.f('o').s('z').mt(0,0).lt(0,40).lt(80,20).lt(0,0)
        $.kD('d',function(){t.rt(6,'+')})
        $.kD('u',function(){t.rt(6,'-')})
        if(st){
            st.A(h)
            st.MD( function(e){
                t.vX((e.rawX- t.x)/100, '+' )
                t.vY((e.rawY- t.y)/100, '+')
                if(t.vx>10){t.vX(10)}
                if(t.vy>10){t.vY(10)}
            })
        }
        _.ev(.05, function(){
            h.X(t.vx,'+').Y(h.vy,'+')
            h.rotation = angleInDegrees(t)

        })
        return t}


    PL=1;
    aA=[]
    div = $.d('y').pad(10)

    div.A(

        $.h1('controls'),

        b1= $.bt('start',function(){PL=1;b1.hd();b2.sh()}),

        b2= $.bt('stop',function(){PL=0;b2.hd();b1.sh()}).hd(),
        $.bt('sgun',function(){sgun(guy)}) )
    boot = $.boot()
    boot.A(div, st.canvas)
    guy = ship(st)
    // kD('s',function(){ $l('bang')})

    _.t(100,function(){var a=ast();a.a();a.p()})
    st.t(function(){ if(PL){ _.e(aA,function(a){  a.u()  })}} )

    sgun(guy)
}
SOLAR=function(){z(); st=  $St(1000,500).bgI('/space.jpg')

    st.bm('guy', function(bm){guy=bm
        bm.dg()
        bm.vXY(_.random(10)+1,_.random(10)+1).XY(_.random(800),_.random(600))
        bm.startMoving()
        bm.warp()
        st.bm('sun', 0.2, function(bm){ sun=bm
            bm.dg()

            bm.startMoving(4,10)
            bm.warp()
            _.ev(.1,function(){
                if(cjs.bulletHit(sun,guy)){
                    sun.sXY( sun.scaleX + .1, sun.scaleY + .1  )
                    sun.vx += .2;
                    sun.vy += .2
                }})
        })
    })

    st.mug(0.4, function(bm){
        bm.X(400).dg().bounce(0)
        bm.startMoving(10,10)
    })


}
SHOOTY=function(){St()
    $.ghost=function(){ return $.c('X', 500, 500).fit('me').al(.1)} // how cool.. it 'steals' the drag because its on top but looks like its below

    st.mug(function(m){
        m.XY(100, 100).WH(150)
        SL(m)
        //key(m, '-')// ugun(mug)
    })
    c = $.ghost().XY(10,10).A().dg()
}
HIT=function(){St()

    st.mug(function(mug){mug.dg()

        st.bm('flame', function(flame){b=flame
            b.dg()

            b.sXY(.1)
                .rXY( flame.getBounds().width / 2, 500).XY(400, 400)

            //st.$$(  function(e){flame.x= e.rawX;  flame.y= e.rawY  })
            st.MD( function(e){
                localCoords= mug.globalToLocal(e.rawX, e.rawY)
                hit = mug.hitTest( localCoords.x, localCoords.y )
                if( $l(hit) ){ $l('hit'); st .bgC('red')} //;$l( e.X+ ' '+ e.Y )
                else {$l('no hit'); st.bgC('yellow')}
            })

            st.MM( function(e) {
                localCoords = mug.globalToLocal(b.x, b.y)
                hit = mug.hitTest(localCoords.x, localCoords.y)
                if( hit  ){  //$l('HIT: '+ e.rawX+ ', '+ e.rawY);
                    st.bgC('red') }
                else { $l('NO HIT'); st.bgC('yellow')}
            })})})
}
HITCIRCLES=function(){z()

    var pt
    st  = $St(1000, '+') // look no .tick() necesary!! look below :)
    ct = $Ct()
    st.A( ct.XY(150) )
    _.t(25,function(){$H().XY(randomLocation(),randomLocation()).f(randomHSL()).dc(30).a2(ct)})

    J.Ticker.on("tick", function (e){
        ct.rotation += 3
        n =ct.getNumChildren()
        ct.ch(function(ch){
            uM = ch.underMouse()
            ch.alpha = ch.underMouse()? 1 : 0.1
            pt = ch.globalToLocal(st.m().x, st.m().y)
            if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)){ch.al(1)}
        })

    })

    function randomLocation(){return M.random()*300-150}
    function randomHSL(){return J.Graphics.getHSL(M.random()*360,100,50)}

}
TANGLE=function(){z()

    a = $.dA('r',50,50).XY(50).A().pad(10)
    b = $.dA('b',100,100).XY(100).A().pad(10)
    c = $.dA('g',200,200).XY(200).A().pad(10)
    d = $.dA('y',400,400).XY(400).A().pad(10)

    y=function(aa,bb,cc,dd){


        if(aa && U(bb)){  aa.A().P('a') }

        if( bb ){ bb.A( aa.P('static') )  }

        if( dd ){ dd.A( cc.P('s') )  }

    }


}
HANOI=function(){









}
ISO=function(levNum){


        Tile = function(){

            var that =this
            var shape = this

            this.container = new createjs.Container().drag()
            this.tile = cjs.diamond(80, 40, 'blue')

            //this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
            this.container.A(this.tile)
            this.coin = false
            this.addCoin = function(){


                this.coin = tileCoin()
                this.container.A(this.coin)

            }
            this.addBad=function(){

                this.bad= tileBad()
                this.container.A(this.bad )

            }

            this.playerTo = function(){

                if(shape.wasOn==true){location=location}//ISO()

                player.X(that.container.x )
                player.Y(that.container.y -14 )


                player.tile= shape
                player.col= shape.col
                player.row= shape.row

                if(shape.coin){shape.coin.remove()}
                if(shape.bad){location=location}
                shape.wasOn=true
                //if(isolated()){alert('!')}
            }

            this.container.on('dblclick', function(){

                h  = that
                that.tile.graphics.f('red').dc(0,0,2)
                $l('dblclicked!')
                that.playerTo()
            })

        }
        isoRow=function(r,howMany,x,y){
            x = x||0;
            y = y||0

            var row=[]

            _.times(howMany, function(i){

                x = x+ 40
                y = y- 20
                var t= new Tile()

                t.container.XY(x,y)

                stage.A(t.container)

                createjs.bindSlide(t.container)

                t.col= i

                t.row= r

                row.push(t)

            })

            return row}
        isoGrid=function(n1,n2,x,y){ x=x||0; y=y||0

            var grid=[]

            _.times(n2,function(i){
                x=x+40
                y=y+20

                var row = isoRow(i,n1,x,y)

                grid.push(row)

            })




            return grid}

        tileCoin=function(){

            return cjs.circle(15,'yellow', 'black')

        }

        tileBad=function(){ return cjs.circle(15,'green', 'orange')}

        tilePlayer=function(bm){
            player = bm
            player.right=function(){
                player.tile.container.remove()
                grid[player.row][player.col]=null
                grid[player.row][player.col+1]. playerTo()}
            player.left=function(){

                player.tile.container.remove()
                player.tile.exists=false
                //player.tile=null
                grid[player.row][player.col]=null
                grid[player.row][player.col-1]. playerTo()}
            player.down=function(){
                player.tile.container.remove()
                grid[player.row+1][player.col]. playerTo()}
            player.up=function(){

                player.tile.container.remove()
                grid[player.row-1][player.col]. playerTo()


            }
            player.to=function(x,y){
                grid[x][y].playerTo()
                return player}

            kD('u',function(){player.up()})
            kD('d',function(){player.down()})
            kD('l',function(){player.left()})
            kD('r',function(){player.right()})
            return player}


        killTile=function(a,b){
            grid[a][b].container.remove()
            grid[a][b].wasOn=true

        }
        lev1=function(){
            grid[3][5].container.remove()
            grid[4][4].container.remove()
            grid[6][6].container.remove()
            grid[7][1].container.remove()
            grid[0][3].addCoin()
            grid[1][3].addCoin()
            grid[3][4].addCoin()
            grid[5][2].addCoin()
            grid[8][8].addCoin()
        }
        lev2=function(){
            grid[0][0].addCoin()
            grid[0][9].addCoin()
            grid[0][3].addCoin()
            grid[1][3].addCoin()
            grid[1][6].addCoin()
            grid[2][1].addCoin()
            grid[3][4].addCoin()
            grid[3][8].addCoin()
            grid[4][7].addCoin()
            grid[5][2].addCoin()
            grid[6][5].addCoin()
            grid[6][9].addCoin()
            grid[8][8].addCoin()
            grid[8][2].addCoin()


            grid[8][4].addCoin()
            grid[9][0].addCoin()


            killTile(1,2)
            killTile(2,2)
            killTile(2,6)
            killTile(2,7)
            killTile(2,8)
            killTile(4,0)
            killTile(4,3)

            killTile(4,4)
            killTile(4,6)
            killTile(4,9)
            killTile(6,1)
            killTile(6,2)
            killTile(7,1)
            killTile(7,3)

            killTile(7,4)
            killTile(7,9)

            killTile(8,6)
            killTile(8,7)
            killTile(8,9)







        }
        lev3=function(){

            grid[0][0].addBad()
            grid[0][9].addBad()
            grid[0][3].addBad()

            grid[1][6].addBad()
            grid[2][1].addBad()
            grid[3][4].addBad()
            grid[3][8].addBad()

            grid[5][2].addBad()
            grid[6][5].addBad()
            grid[6][9].addBad()
            grid[8][8].addBad()
            grid[8][2].addBad()

        }
        lev4=function(){


            grid[2][9].addCoin()
            grid[5][0].addCoin()

            grid[2][3].addCoin()
            grid[5][6].addCoin()
            grid[9][3].addCoin()
            grid[3][1].addCoin()
            grid[4][4].addCoin()
            grid[0][8].addCoin()
            grid[6][7].addCoin()
            grid[5][8].addCoin()
            grid[9][6].addCoin()
            grid[2][2].addBad()
            grid[0][0].addBad()
            grid[0][9].addBad()
            grid[5][3].addBad()
            grid[2][6].addBad()
            grid[4][5].addBad()
            grid[9][0].addBad()
            grid[9][7].addBad()
            grid[3][8].addBad()


            grid[6][5].addBad()
            grid[6][9].addBad()

            grid[8][2].addBad()

        }


        isolatedBeta=function(){
            r= player.row;
            c= player.col
            if(
                //grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
            //&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn

            grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
            ){return true}
        }
        z()
        stage = $St(900,500).tick().A()
        grid = isoGrid(10,10,0,240)
        kD('s',function(){location=location})
        if(levNum){ window['lev'+levNum]()}
        else if( window['_pam']){window['lev'+ _pam]()}
        else{lev1()}
        stage.bm0('me', function(me){
            player = tilePlayer(me).sXY(.2).drag().to(5,5)})




    }
CONNECT=function(){  St() //m$$('location=location')

    // st= $St('p', 1000)
    pink = J.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
    st.A(pink)
    ct = $Ct()
    st.A(ct)
    green = cjs.circle( 200,'green','purple').XY(320,300)//.rXY(100)
    yellow = cjs.circle( 100,'yellow','purple').XY(250)
    red= cjs.circle( 40,'red','purple').XY(200,100)
    orange = cjs.circle( 20,'orange','purple').XY(300)
    ct.A(green, yellow, red, orange )
    LS(yellow, ct)
    SL(green)
    SL(green,pink)

    SL(yellow)
    SL(red,ct)
    SL(orange, red)

}

text()
works()
function works(){
    TXST = function(){
        $St().bm('me', function(b){

            b.go(10, 10)
            cjs.tick(function(){ $l(b.inStage()) })
        })
    }

    SETTRANSFORM=function(){

        s = $St(800).bm('me',function(me){
            b=me
            b.setTransform(0,0,2,.5,0,40,4,2,3)
            m = b.getMatrix()
            function tf(a,b,c,d,e,f,g,h,i){
                return this.x=a||0,
                    this.y=b||0,
                    this.scaleX=null==c?1:c,
                    this.scaleY=null==d?1:d,
                    this.rotation=e||0,
                    this.skewX=f||0,
                    this.skewY=g||0,
                    this.regX =h||0,
                    this.regY =i||0,
                    this}})
    }
    TTT=function(){z()
        s=stage = $St(500,600).A()
        s.can.P('a').XY(300)
        s.A( h = shape = cjs.shape() )
        h.rect( 100, 200,  0, 200, 'red' )
            .rect( 100, 100,  100, 20, 'green' )
            .rect( 145, 120,  10, 80, 'orange' )
            .circ(105, 100,20,'blue')
            .circ(105, 100,8,'black')
            .circ(200, 100,20,'blue')
            .circ(200, 100,8,'black')
            .circ(100,20,100,'green')
            .rXY(100, 300).XY(100,300).drag()
        p = function(){

            shape.twL(
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
                [{r:25}, 200],[{r:-25},400],[{r:0}, 200])

            shape.twL(
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
                [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200]
            )}
        p()
    }
}
function text(){
    BASELINE=function(){z()

        s=cjs.stage(1000).A()



        s.bm('me', function(bm){b=bm
            bm.XY(300).sXY(.2)
            s.dot(300,300)})



        s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
        s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
        s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))


    }
    LINEH=function(){z()

        s=cjs.stage(1000).A()



        s.bm('me', function(bm){b=bm
            bm.XY(300).sXY(.2)
            s.dot(300,300)})



        s.A(
            t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
        )


        s.A(
            t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
        )

        s.A(
            t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
        )


    }
    LINEW=function(){z()

        s=cjs.stage(1000).A()



        s.bm('me', function(bm){b=bm
            bm.XY(300).sXY(.2)
            s.dot(300,300)})



        s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
        s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
        s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))


    }
    ALIGN=function(){z()

        s=cjs.stage(1000).A()



        s.bm('me', function(bm){b=bm
            bm.XY(300).sXY(.2)
            s.dot(300,300)})

        s.bm('me', function(bm){b=bm
            bm.XY(500).sXY(.2)
            s.dot(500,500)})

        //textAlign
        s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
        s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
        s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))

        //textBaseline
        s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
        s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
        s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))}

}

V=function(x,y){
    return {x:x, y:y}
}