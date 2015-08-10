$.imageSizeFuncCan = function(image, size, func){//xc=
    var x = $.c(100, 100).C('X')
    if(image){ x.fit(image) }
    //if(size){  x.Z(size) }
    if(func){  x.click(func) }
    return x
}
data()
function data() {
//can.ln(tictactoe)
    tictactoe = [
        [[200, 0], [200, 600]],
        [[400, 0], [400, 600]],
        [[0, 200], [600, 200]],
        [[0, 400], [600, 400]]
    ]
    sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
    sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]

}
canApps()
advancedCan
function canApps(){
    pixelTest = function () {
        canvasPlayground()

        get = function () {

            d = m.getData(0, 0, 400, 200)
        }

        // g.putData(d, 0, 100)

        put = function () {
            g.context.putImageData(d, 200, 200)
        }

        putget = function () {

            get()
            put()
        }

        putget()

        change = function (num) {
            get()

            data = d.data

            _.e(data, function (pixel, index) {

                d.data[index] = pixel + (num || 100)

            })

            put()
        }
        anim = function () {

            num = 0

            setInterval(
                function () {
                    change(num)
                    num += -1
                },

                100)

        }

    }

    testShadow=function(){z()

        c = $.c('b', 700).A()

        c.draw('me', 100,100)

        c.shadowColor('r').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)

        c.draw('me', 200,200)

        c.shadowColor('y').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)

        c.shadowColor('g')
        c.draw('me', 0,300)

        c.shadow('p', 30,200, 20)
        c.draw('guy', 400,200)

    }


    TRANS = function () {

        z()

        x = $.c('yellow', 1000, 800).A()
        y = $.c('purple', 400).A()

        x.$$(function () {
            x.fit('me')
        })

        x.fit('me')


        identity = function (x) {
            x.stf(1, 0, 0, 1, 0, 0)
        }

        rotate = function (x, a) {
            identity(x)
            x.rt(tRad(a))
        }

        rotateByAngle = function (px, py, a) {
            var x, y

            x = (px * cos(a)) - (py * sin(a))
            y = (py * cos(a)) + (px * sin(a))
        }

        rotateAroundZero = function (px, py, r) {
            var x, y, a = 'angle'

            x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
            y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
        }


        transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']

        //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
        //x=x+e,y=y+f
        //to scale, use a,d and set others to 0
    }
    PIXELS = function () {
        z()
        c = $.can('yellow', 900, 500).A()
        c.draw('me', 100, 100)
        setTimeout(function () {
            c.pD(c.gD(100, 100, 500, 500), 120, 120)
            c.f("red").fr(10, 10, 50, 50)
            imgData = c.gD(10, 10, 50, 50)
            c.pD(imgData, 10, 70)

        }, 200)
    }
    CANVASQLOADER = function () {
        $.C();
        cjs.lq(['me'], function (q) {
            me = q('me')

            c.drawImage(me, 100, 100)

            c.pD(c.gD(100, 100, 500, 500), 120, 120)

            c.f("red").fr(10, 10, 50, 50)

            imgData = c.gD(10, 10, 50, 50)

            c.pD(imgData, 10, 70)

        })
    }
    PIXELTEST = function () {
        c = $.C();
        cjs.lq(['me'], function (q) {
            me = q('me')

            c.drawImage(me, 100, 100)


            d = c.gD(100, 100, 500, 500)

            // c.pD(d , 120, 120 )

            zeros = 0
            nums = 0

            _.each(d.data, function (d) {
                if (d == 0) {
                    zeros++
                } else {
                    nums++
                }
            })

            $l('zeros: ' + zeros + ' - nums: ' + nums)

        })
    }

    TESTGRADWORKS = function () {
        z()

        c = $.c('y', 500).A()

        g = c.context.createLinearGradient(50, 0, 500, 100)

        g.addColorStop(.2, 'orange')
        g.addColorStop(.6, 'red')

        g.addColorStop(.8, 'green')


        c.context.fillStyle = g

        c.fillRect()

    }
    CANVIIFIT = function () {

        z()

        m = $.can(800).A().fit('me')

        g = $.can('b', 600).A().fit('guy')

    }
    LINRAD = function () {
        z()

        d = $.c('y', 500)

        c = $.c('y', 500).A()

        c.context.f(
            c.context.linGrad(50, 0, 500, 100).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
        )

        c.fr()

    }
    RADGRAD = function () {
        z()

        d = $.c('y', 500)

        c = $.c('y', 500).A()

        c.context.f(
            c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
        )

        c.fr()

    }


    CAN=function(){var picHolder
        $.fm()
        s2.A(picHolder= $.span().id('pics'))
        $.getJSON('/img',   function(i){ _.e(i, withImage  ) } )
        function withImage(img){
            dataUrl = img.d
            can =   $.c(100, 100)
            can.click(function(){
                var mouse = $('#mouse')
                mouse.val('click')
                mouse.change()
                mug = img.d   })
            picHolder.A(can)
            can.fit(dataUrl)    }

        s2.A(
            x = canvas = $.c('yellow',1000,800))
        setInterval(function(){
            //  x.bc()
        }, 10000)
        s1(
            $.label('mouse'),

            $.sel('none','click','enter','leave','move').id('mouse').o(
                function(s){
                    x.q.ub()
                    if(s=='click'){
                        x.$(function(X,Y){
                            x.Cd(mug,X,Y)
                        })}
                    if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
                    if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
                    if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})

                        x.MU(function(){x.q.ub('mousemove')})}
                }),


            $.label('global comp'),
            sel.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
            //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
            $.bt('SAVE(sv)',function(){
                x.sv()
            }), $.br(2),
            $.bt('CUT(dots)', function(){

                x.q.q.unbind()

                qi('mouse').v('none')

                x.dots()   }), $.br(2),
            $.bt('RESTORE(R)', function(){x.R()}), $.br(2),
            $.bt('bc:change background color',function(){x.bc()}),$.br(2),
            $.bt('cir:make circle',function(){x.cir(100,100,100)}),$.br(2),
            $.bt('d:draw',function(){x.d($w['mug']||'me')}),$.br(2),
            $.bt('dC:draw center',function(){x.dC($w['mug']||'me')}),$.br(2),
            $.bt('me',function(){x.me()}), $.br(2),
            $.bt('sh1',function(){x.ln(sh1)}), $.br(2),
            $.bt('sh2',function(){x.ln(sh2)}), $.br(2),
            $.bt('tictactoe',function(){
                x.ln(tictactoe)
            }), $.br(4),
            $.bt('sampLinGrad',function(){

                x.sampLinGrad()

            }),
            $.br(2),
            $.bt('sampRadGrad', function(){

                x.sampRadGrad()

            }),
            $.br(2),
            $.bt('xxx',function(){
                xxx('barney')}), $.br(2),
            $.bt('bads',function(){
                bad(x,200,8)  }), $.br(2),
            $.bt('coins', function(){

                coin(x,200,8)
            }),    $.br(2)
        )



    }
    FAN=function(){

        x=$.c('y',1000,800).A()
        y=$.c('x',400).A()

        x.$$(function(){x.fit('me')})

        x.fit('me')

        guidewires=false
        dragging=false
        mousedown={}
        loc={}

        restoreDrawingSurface=function(){}

        updateRubberband=function(m){
            x.ln(mousedown.x,
                mousedown.y,
                m.x,
                m.y)
        }


        drawGuidewires=function(){}

        x.MD(function(X,Y){
            dragging=true
            mousedown={x:X,y:Y}})


        x.MM(function(X,Y){

            if(dragging){
                restoreDrawingSurface()
                updateRubberband({x:X,y:Y})}

            if(guidewires){drawGuidewires(loc.x,loc.y)}

        })



        x.MU(function(X,Y){dragging=false
            restoreDrawingSurface()
            updateRubberband({x:X,y:Y})})
    }
    RUB=function(){ z()

        c = $.c('y', 1000, 800)

        c.$$( function(){ c.fit('me') } )

        c.fit('me')

        guidewires = false
        dragging = false
        mousedown = {}
        loc = {}
        rr = null
        data = null

        c.MD(function(x, y){
            data = can.gD()
            dragging = true
            mousedown = { x:x, y:y }
        })
        c.MM(function(X,Y){
            var m={x:X, y:Y},
                d = mousedown
            if(dragging){
                can.pD(data)
                can.ln(d.x, d.y, d.x, m.y)
                can.ln(d.x, d.y, m.x, d.y)
                can.ln(m.x, m.y, m.x, d.y)
                can.ln(m.x, m.y, d.x, m.y)
            }
        })
        c.MU(function(X,Y){

            dragging = false
            var d = mousedown, x1, x2, y1, y2
            if(X > d.x){ x1 = d.x; x2 = X } else {x1=X; x2=d.x}
            if(Y > d.y){ y1 = d.y; y2 = Y } else {y1=Y; y2=d.y}
            rr=[x1, y1, x2, y2]

            can.pD(data)

            can.crop2(rr)

            //    data=can.gD()

        })

    }
    CROP=function(){c=$.C()


        c.fit('me')


    }
    FULLCAN=function(){z()

        $('html').css({
            height:'100%'//, of:'h'
        })

        $('body').css({
            margin:0,
            //g:0,
            height:'100%'
        })

        var s ='Click or tap the screen to start the game',

            fo ='bold 16px Arial',

            x = $.c('pink',W(), H()).A()

        // x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)


        $.img('me',function(image){

            var origW= image.W()

            image.W( Math.round( (50 * cW()) / 100 ) )
            image.H( Math.round( (image.W() * image.H() )/ origW) )


            x.draw(
                image,
                x.W()/2- image.W()/2,
                x.H()/2- image.H()/2
            )



        })


    }
    HULL=function(){z()

        c = $.c('y',800,400).id('canvas').A()




        window.onload = init

        function init() {

            var canvas = c[0],        // main canvas element
                fps = 10,                                        // drawing frames per second
                convex = new Convex(),                            // convex hull
                dots = []                                     // dots, which are not in the convex hull


            // adjust canvas proportions
            // canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;

            // assign canvas context
            ctx = canvas.getContext("2d");


            setInterval(function(){

                // get a blank canvas //// clear
                ctx.clearRect(0, 0, ctx,canvas.width, ctx.canvas.height)


                // draw convex dots
                convex.draw()

                // draw dots
                dots.map(function(dot) {   dot.draw()   })
            }, 1000 / fps)



            // clicked on canvas
            c.click( function(evt){
                var x = evt.clientX - canvas.getBoundingClientRect().left,
                    y = evt.clientY - canvas.getBoundingClientRect().top

                // clear convex
                convex.dots=[]

                // add dot
                dots.push(new Dot(new V(x, y)))
            })




            $.bt('draw convex', function() {
                // move dots to canvas
                dots.map(function(dot){convex.addDot(dot)})

                // clear dots
                dots = []
            }).A()






        }

        var Dot=function(pos){this.pos=pos}

        Dot.prototype = {
            draw: function() {
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }
        }


        Convex = function(){ this.dots = [] } // a convex hull

        Convex.prototype = {
            draw: function() {
                var _this = this,           refDots;

                // loop through dots
                this.dots.map(function(el) {
                    var dotAfter;

                    // draw dot
                    el.draw();

                    refDots = _this.copyDots(_this.dots); // copy dots

                    // remove el from reference dots
                    for (var i=0; i<refDots.length; i++) {
                        if (refDots[i] != el) continue;
                        refDots.splice(i, 1);
                    }

                    // get dot after this dot
                    dotAfter = _this.getDotAfter(_this.dots, el);

                    // draw direct line

                    ctx.moveTo(el.pos.x, el.pos.y);
                    ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
                    ctx.stroke();


                })
            },
            addDot: function(dot) {
                // the dot cannot be added, because it wouldn't be a convex anymore
                if (this.isDotInsideConvex(this.dots, dot)) return;

                // add dot intentionally
                this.dots.push(dot);

                // less than four dots are always a convex
                if (this.dots.length < 4) return;

                // remove dots, which are not in the convex (anymore)
                this.composeConvexHull();
            },
            composeConvexHull: function() {
                var refDots,        // all dots, except the one we are testing
                    dot,            // the dot, supposed to be in the new convex
                    newDots = [];    // dots, which are definitely part of the convex

                // loop dots
                for (var i=0; i<this.dots.length; i++) {

                    // reset dots reference
                    refDots = this.copyDots(this.dots);

                    // assig dot to the current index
                    dot = refDots[i];

                    // remove dot from refDots
                    for (var h=0; h<refDots.length; h++) {
                        if (h != i) continue;
                        refDots.splice(h, 1);
                        break;
                    }

                    // the dot is not inside of the convex, therefore add it
                    if (!this.isDotInsideConvex(refDots, dot)) {
                        newDots.push(dot);
                    }
                }

                // assign new convex
                this.dots = newDots;
            },

            //  copy dots object,, this is done due to call by reference

            copyDots: function(ref) {
                var dots = [];
                ref.map(function(dot) {
                    dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
                });
                return dots;
            },
            isDotInsideConvex: function(convexDots, dot) {
                var dotBefore, dotAfter, sign;

                // at least three dots required for a convex
                if (convexDots.length < 3) return false;

                // the dot is definitely not inside the convex hull
                if (this.dotOutsideConvexRect(convexDots, dot)) return false;

                // assign dot before to the closest dot by the angle, which is negative
                dotBefore = this.getDotBefore(convexDots, dot);

                // assign dot after to the closest dot by the angle, which is positive
                dotAfter = this.getDotAfter(convexDots, dot);

                // dot on the inside of the line from dotBefore to dotAfter
                return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
            },

            //  is the dot outside of the convex rectangle?

            dotOutsideConvexRect: function(convexDots, dot) {
                var outside = [ true, true, true, true ];
                for (var i=0; i<convexDots.length; i++) {
                    if (convexDots[i].pos.x < dot.pos.x)
                        outside[0] = false;
                    if (convexDots[i].pos.x > dot.pos.x)
                        outside[1] = false;
                    if (convexDots[i].pos.y < dot.pos.y)
                        outside[2] = false;
                    if (convexDots[i].pos.y > dot.pos.y)
                        outside[3] = false;
                }

                return outside[0] || outside[1] || outside[2] || outside[3];
            },

            //  get middle position as vector from the bounding dots

            getCenter: function(dots) {
                var rect = { xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y };
                dots.map(function(dot) {
                    if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
                    if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
                    if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
                    if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
                });

                return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
            },

            //   get the closest dot before dot from dots

            getDotBefore: function(dots, dot) {
                var center, bgRad = -Math.PI * 2, dotBefore;

                center = this.getCenter(dots);
                dotRad = center.angleTo(dot.pos);

                dots.map(function(needleDot) {
                    var needleRad = center.angleTo(needleDot.pos),
                        refRad = needleRad - dotRad;

                    if (refRad > 0) refRad = -(Math.PI * 2 - refRad);

                    if (refRad <= bgRad) return;

                    bgRad = refRad;
                    dotBefore = needleDot;
                });

                return dotBefore;
            },

            //  get the closest dot after dot from dots


            getDotAfter: function(dots, dot) {
                var center, smRad = Math.PI * 2, dotAfter

                center = this.getCenter(dots)
                dotRad = center.angleTo(dot.pos)

                dots.map(function(needleDot) {
                    var needleRad = center.angleTo(needleDot.pos),
                        refRad = needleRad - dotRad;

                    if (refRad > 0) refRad = -(Math.PI * 2 - refRad)

                    if (refRad >= smRad) return

                    smRad = refRad
                    dotAfter = needleDot
                })

                return dotAfter
            }
        }

        var V = function(x, y) {
            this.x = x
            this.y = y
        }

        V.prototype = {
            subtract: function(v) {
                return new V(this.x - v.x, this.y - v.y);
            },

            // this = center, v = destination

            angleTo: function(v) {
                var ref = this.subtract(v)
                return Math.atan2(ref.y, ref.x) + Math.PI
            },



            // 0 = on line, 1 = inside, -1 = outside

            getSide: function(v1,v2){
                return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
            }
        }


    }
}
function advancedCan(){
    slowFadeAway = function self(opacity) {
        z()

        //makes a yellow square and black dot??

        c = $.c('y', 500, 500)
        c.cir(10, 10, 10)

        opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001

        c.opacity(opacity).fillStyle('red').fillRect()

        if (opacity < 1) {
            setTimeout(function () {
                self(opacity)
            }, 30)
        }

    }
    drawHalf = function (c, i) {
        c.dI(i, -i.width / 2, -i.h / 2)
    }
//parallax!!!
    CanvasLayer = function (bg) {

        c = $.c('y', 500, 500).P('a').W('100%').H(256)
        if (bg) {
            c.bg(bg)
        }
        return c
    }
    DivLayer = function (bg) {
        d = $.d('y', 500, 500).P('a').W('100%').H(256)
        if (bg) {
            d.bg(bg)
        }
        return d
    }
    transparent = function (i, num) {
        if (!N(num)) {
            return 'transparent url(' + i + '.png)'
        }
        return 'transparent url(' + i + '.png)' + num + '% 0px'
    }
    PARALLAX = function () {
        z()

        CanvasLayer(transparent('me', 10))

        CanvasLayer(transparent('guy', 300))


    }
    PARALLAXBYMOUSE = function () {
        z()
//awesome!!!!!
        back = DivLayer(transparent('me'))
        front = DivLayer(transparent('guy'))

        speed = 0
        xp = 0

        $('body').mousemove(function (e) {

            speed = e.pageX - ( W() / 2 )

            speed /= ( W() / 2 )

            $l(speed)
        })
        $('body').mouseout(function (e) {
            speed = 0
        })


        setInterval(function () {
            xp += speed
            back.bgP(xp + 'px 0px')
            front.bgP((xp * 3) + 'px 0px')
        }, 30)
    }
    drag = drg = function (element) {
        var q = $b(qq(element).q).css({position: 'absolute'}).on('mousedown', function (e) {
            var offset = $(this).offset(),
                deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
            $('html').on('mousemove', function (e) {
                q.css({left: e.pageX - deltaX, top: e.pageY - deltaY})
            })
                .on('mouseup', function () {
                    $(this).off()
                })

        })

        touchDrg(element)
        return qq(element)

    }
    $.joystick = function () {
        $('#left').on('mousedown mouseover touchenter', function (e) {
            cjs.Keys.left = true;
            e.preventDefault()
        })
        $('#left').on('mouseup mouseout touchleave', function () {
            cjs.Keys.left = false
        })
        $('#jump').on('mousedown mouseover touchenter', function () {
            cjs.Keys.up = true
        })
        $('#jump').on('mouseup mouseout touchleave', function () {
            cjs.Keys.up = false
        })
        $('#right').on('mousedown mouseover touchenter', function () {
            cjs.Keys.right = true
        })
        $('#right').on('mouseup mouseout touchleave', function () {
            cjs.Keys.right = false
        })
    }
    testHideOnKeyDown = function () {
        z()
        c = $.canvas('r', 500).A()
        c.hideOnKeyDown()
    }
}