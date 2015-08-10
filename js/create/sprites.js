
mvClip()
function mvClip(){
    this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d,e){this.Container_constructor(),!a.inited&&a.init(),this.mode=b||a.INDEPENDENT,this.startPosition=c||0,this.loop=d,this.currentFrame=0,this.timeline=new createjs.Timeline(null,e,{paused:!0,position:c,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function b(){throw"MovieClipPlugin cannot be instantiated."}var c=createjs.extend(a,createjs.Container);a.INDEPENDENT="independent",a.SINGLE_FRAME="single",a.SYNCHED="synched",a.inited=!1,a.init=function(){a.inited||(b.install(),a.inited=!0)},c.getLabels=function(){return this.timeline.getLabels()},c.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},c.getDuration=function(){return this.timeline.duration};try{Object.defineProperties(c,{labels:{get:c.getLabels},currentLabel:{get:c.getCurrentLabel},totalFrames:{get:c.getDuration},duration:{get:c.getDuration}})}catch(d){}c.initialize=a,c.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},c.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),this.Container_draw(a,b),!0)},c.play=function(){this.paused=!1},c.stop=function(){this.paused=!0},c.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},c.gotoAndStop=function(a){this.paused=!0,this._goto(a)},c.advance=function(b){var c=a.INDEPENDENT;if(this.mode==c){for(var d=this,e=d.framerate;(d=d.parent)&&null==e;)d.mode==c&&(e=d._framerate);this._framerate=e;var f=null!=e&&-1!=e&&null!=b?b/(1e3/e)+this._t:1,g=0|f;for(this._t=f-g;!this.paused&&g--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},c.clone=function(){throw"MovieClip cannot be cloned."},c.toString=function(){return"[MovieClip (name="+this.name+")]"},c._tick=function(a){this.advance(a&&a.delta),this.Container__tick(a)},c._goto=function(a){var b=this.timeline.resolve(a);null!=b&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=b,this._t=0,this._updateTimeline())},c._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},c._updateTimeline=function(){var b=this.timeline,c=this.mode!=a.INDEPENDENT;b.loop=null==this.loop?!0:this.loop;var d=c?this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,e=c||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=b._calcPosition(d),b.setPosition(d,e),this._prevPosition=b._prevPosition,this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var f in this._managed)this._managed[f]=1;for(var g=b._tweens,h=0,i=g.length;i>h;h++){var j=g[h],k=j._target;if(k!=this&&!j.passive){var l=j._stepPosition;k instanceof createjs.DisplayObject?this._addManagedChild(k,l):this._setState(k.state,l)}}var m=this.children;for(h=m.length-1;h>=0;h--){var n=m[h].id;1==this._managed[n]&&(this.removeChildAt(h),delete this._managed[n])}}},c._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];this._addManagedChild(e,b)}},c._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),this._managed[b.id]=2)},c._getBounds=function(a,b){var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=createjs.promote(a,"Container"),b.priority=100,b.install=function(){createjs.Tween.installPlugin(b,["startPosition"])},b.init=function(a,b,c){return c},b.step=function(){},b.tween=function(b,c,d,e,f,g){return b.target instanceof a?1==g?f[c]:e[c]:d}}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.MovieClip=createjs.MovieClip||{};a.version="0.8.1",a.buildDate="Thu, 21 May 2015 16:17:39 GMT"}();
}
meSprite=function(){
    return $sprite(   SS ).XY(10).drag()
}
SPRITE=function(sprite){

    sprite = $sprite( sprite || SS ).XY(10).dg()

    stage = $St('o', 400 )
        .dg()//.op(.7),
    stage.A( sprite )


    controls={
        jump:function(){ sprite.gotoAndPlay('jump') },
        explode:function(){ sprite.gotoAndPlay('explode') },
        spin:function(){ sprite.gotoAndPlay('spin') },
        stop:function(){ sprite.stop() },
        play:function(){ sprite.play() } }

    $.d('y',460, 89).css({
        position:'absolute',
        top: 200, left: 300,
        padding:20, opacity:.9
    }).dg().A(
        $.sp(' '),
        $.bt('spin',function(){    controls.spin() }), $.span(' '),
        $.bt('jump',function(){    controls.jump() }), $.span(' '),
        $.bt('explode',function(){   controls.explode()  }), $.span(' '),
        $.bt('play',function(){   controls.play()  }), $.span(' '),
        $.bt('stop',function(){   controls.stop()  }), $.span(' '),
        $.bt('meta', function(){ SPRITE() })

    )

    s = sprite
    return  controls}
SPRITE2=function( ){

    stage = createjs.stage('orange', 400 ).tick().A().drag()//.op(.7),

    stage.A(   sprite = $sprite(   SS ).XY(10).drag() )

}
PACK = function(){

    stage = $St(800)

    //stage.op(.7)

    sprite = $sprite(Pack).XY( 200, 260 ).sXY(1.2).drag()


    stage.A(sprite)

    //.rgc()
    sprite.framerate=6

    sprite.play()


}

MUMMYFLIP=function(){ w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right




    b = b2d.box(100,100,50,88  ).K('mummy').bindSprite2(
        cjs.sprite( Mummy ).a2(w.s).drag()
            .rXY(20,22).sXY( 2 ).XY( 200 ))

    b.coll(function(){ b.linVel(0) })

    b.sprite.p('walk')

    cjs.tick(function(){
        b.rT(0)
        if(b.direction=='right'){b.I(4, -2)}
        else if(b.direction=='left'){b.I(-4, -2) }    // direction='neither' // <-- demumify (doesnt keep walking
        //if(jumpButton is pressed){jump()}
    })


    $.kD({

        u:function(){
            //jumpButtonPressed = true
            if(b.Y()>530){b.I(0, -80)}},
        U: function(){
            //jumpButtonPressed = false
        },


        l: function(){ b.sprite.sX(-2)
            b.direction='left'},
        r: function(){ b.sprite.sX(2)
            b.direction='right'} })

}

b = cjs.SpriteSheetBuilder.prototype
b.Z=function(sc){

    if(U(sc)){return this.scale}
    this.scale=sc;return this
}
b.maxW=function(sc){
    if(U(sc)){return this.maxWidth}
    this.maxWidth=sc;return this
}
b.A=function(mc){
    this.addMovieClip(mc)
    return this}
b.complete=function(func){
    this.on("complete", func)
    return this}
b.async=function(funcNum,num){
    if(F(funcNum)){
        this.complete(funcNum)
        this.buildAsync(num)
    }

    else{this.buildAsync(funcNum)}


    return this}
cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function(mc){

    ssb = new createjs.SpriteSheetBuilder()
    if(mc){ssb.A(mc)}

    return ssb}


Sprites={ }
Sprites.char={
    framerate:24,
    images:["/char.png"],
    frames:[
        [0, 0, 256, 256, 0, -159, -138],
        [256, 0, 256, 256, 0, -159, -138],
        [512, 0, 256, 256, 0, -159, -138],
        [768, 0, 256, 256, 0, -159, -138],
        [1024, 0, 256, 256, 0, -159, -138],
        [1280, 0, 256, 256, 0, -159, -138],
        [1536, 0, 256, 256, 0, -159, -138],
        [0, 256, 256, 256, 0, -159, -138],
        [256, 256, 256, 256, 0, -159, -138],
        [512, 256, 256, 256, 0, -159, -138]],

    animations:{
        df: {"frames":[0]},
        jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1,next:false},
        die: {"frames": [4,5], speed: .1, next:false},
        hurt: {"frames": [4,4,4,5,5,5,4,4,5,5,4,5,0], speed:.4, next:false},
        fly:{"frames":[6,6,7,8,9  ], speed:.3},
        nuts:{frames:[3,8,2,9,2,4,5,6,5,4,5,3]}

    }}
Sprites.char2={
    framerate:24,
    images:["/char2.png"],

    "frames":[
        [0, 0, 256, 256, 0, -159, -138],
        [256, 0, 256, 256, 0, -159, -138],
        [512, 0, 256, 256, 0, -159, -138],
        [768, 0, 256, 256, 0, -159, -138],
        [1024, 0, 256, 256, 0, -159, -138],
        [1280, 0, 256, 256, 0, -159, -138],
        [1536, 0, 256, 256, 0, -159, -138],
        [0, 256, 256, 256, 0, -159, -138],
        [256, 256, 256, 256, 0, -159, -138],
        [512, 256, 256, 256, 0, -159, -138]
    ],

    animations:{
        df: {"frames":[0]},
        jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1,next:false},
        die: {"frames": [4,5], speed: .1, next:false},
        hurt: {"frames": [4,4,4,5,5,5,4,4,5,5,4,5,0], speed:.4, next:false},
        fly:{"frames":[6,6,7,8,9  ], speed:.3},
        nuts:{frames:[3,8,2,9,2,4,5,6,5,4,5,3]}

    }}

ss = cjs.SpriteSheet.prototype
ss.addFlipped=function(a, b, c){
    cjs.SpriteSheetUtils.addFlippedFrames(this,  a||true, b||false, c||false )
    return this}
cjs.spriteSheet   =function(a){return new cjs.SpriteSheet(a)}

s=cjs.Sprite.prototype
s.p = function(what){
    if(U(what)){this.play()}
    else {this.gotoAndPlay(what)}
    return this}
s.s= s.P=function(what){if(U(what)){this.stop()}
    else {this.gotoAndStop(what)};return this}
s.skip=s.adv=function(num){this.advance(num);return this}
s.cA = s.cAn = s.currAnim=function(){return this.currentAnimation}
s.cAF= currAnimFrame = function(){return this.currentAnimationFrame}
s.cF = s.cFr = s.currFrame=function(){return this.currentFrame}
s.fR = s.rate = function(rate){
    if(U(rate)){return this.framerate}
    this.framerate=rate
    return this
}
s.end=function(func){func=func||function(){n=N(window['n'])?n:0
        $l('frame! '+ n++)}
    this.on('animationend', func)
return this}

cjs.sprite=$sprite=function(spriteSheet){
//EaselSprite= J$=

    if(spriteSheet.images){

        spriteSheet=cjs.parseZoe(spriteSheet)
        spriteSheet=new cjs.SpriteSheet(spriteSheet)
    }


    return new cjs.Sprite( spriteSheet )

}

cjs.sprite100 = function(a){

    var spr = cjs.sprite(a)
    spr.rXY(50)
        .opacity(.8)
    return spr}


ZOENOANIM=function(){z()
    spr = cjs.sprite({
        "framerate":24,
        "images":["/zoetest.png"],
        "frames":[
            [0, 0, 512, 256, 0, -133, -143],
            [512, 0, 512, 256, 0, -133, -143],
            [1024, 0, 512, 256, 0, -133, -143]
        ],
        "animations": {}})
    s = cjs.stg(1000).A()
    s.A(spr)}
ZOEFRAMES=function(){z()


    spr = cjs.sprite({
        "framerate":24,
        "images":["/sprite2.png"],
        "frames":[
            [0, 0, 128, 128, 0, -176, -161],
            [128, 0, 128, 128, 0, -176, -161],
            [256, 0, 128, 128, 0, -176, -161]
        ],
        "animations":{
            "weird": {"speed": 1, "frames": [2]},
            "bald": {"speed": 1, "frames": [1, 1, 1, 1]}
        }
    })

    anis = spr.spriteSheet._animations

   // aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })

    s = cjs.stg(1000).A()
    s.A( spr.drag() )
}
CHAR0=function(){showSprite(Sprites.char)

    function showSprite(sprite){z()

        s = cjs.stg(1000).A()

        spr = cjs.sprite(sprite).drag().a2(s)

    }

}
CHAR=function(){w=b2d.W().debug()

    w.begin(function(cx){
        if(cx.with('hurt')){b.p('hurt').I(100,-200)}
        if(cx.with('fly')){b.p('fly').I(-100, -200)}})

    b= w.ball(200,200,60).bindSprite2( cjs.sprite( Sprites.char ).rXY(275,220) )

    guyBrick(100).K('hurt')
    guyBrick(500).K('fly')

    function guyBrick(x){
       return w.brick(x,500,100,100).bindSprite('guy',.6)

    }

}
cjs.parseZoe=function(sprObj){


    //fix source (needs a '/')
    sprObj.images[ 0 ] = S.eL( sprObj.images[0] )

    //set next to false, on all anims
    //_.e(sprObj.animations, function(anim){anim.next = false})


    //to do: parse it! (get rid of unnecessary json strings in keys)


    return sprObj}

STICK=function(){
    w=b2d.W({grav:3})
        .chalk('spritebox example').debug()

    w.spriteBox({

        "framerate":4,

        "images":["stick.png"],
        "frames":[
            [0, 0, 512, 512, 0, -22, -2],
            [512, 0, 512, 512, 0, -22, -2],
            [1024, 0, 512, 512, 0, -22, -2],
            [0, 512, 512, 512, 0, -22, -2],
            [512, 512, 512, 512, 0, -22, -2],
            [1024, 512, 512, 512, 0, -22, -2],
            [0, 1024, 512, 512, 0, -22, -2],
            [512, 1024, 512, 512, 0, -22, -2],
            [1024, 1024, 512, 512, 0, -22, -2],
            [0, 1536, 512, 512, 0, -22, -2],
            [512, 1536, 512, 512, 0, -22, -2],
            [1024, 1536, 512, 512, 0, -22, -2]
        ],
        "animations":{
            "die": {"frames": [8, 9, 10], "speed": .1,next:false},
            "walk": {"frames": [1, 2, 3, 4], "speed": .1},
            "jump": {"frames": [5, 6, 7,0], "speed": .1,next:false}
        }
    },300,200,.25).mario()
    w.rect(600,200, 50,50 ,'p')
    w.circ(600,100,40,'b')}


//OLD
THRUSTSCROLL = function(){z()

    // s = cjs.stage('green', 1000).A()

    //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

    w = b2.mW({grav:0})

    p = w.player('thrust')
    //sp = cjs.sprite( Mummy ).drag()

    // w.s.A( sp )

    // sp.sXY( 2 ).XY( 200 )

    //  sp.gotoAndPlay('walk')


    // sp.rXY( 20, 22 )

    // b = b2.box( 100, 100, 50, 88).uD('mummy')

    // b.bindSprite2(sp)

    direction='right'

    cjs.tick(function(){


        w.eachBody(function(body){
            if(body.uD()!='player'){

                body.X(  body.X()+ p.X()  )

            } })

    })



    tr=w.A( b2.dynamicDef(), b2.triangleFixt    )




    moveLeft=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){body.X( body.X()+10  )   } })

    }
    moveRight=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){ body.X( body.X()-10  )   } })

    }
}
moveEachBodyButGuy=function() {

    $.kD('l', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {    body.X(body.X()+20)   }})})


    $.kD('r', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {

                body.X( body.X() - 20)
            }
        })
    })


    $.kD('d', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() - 20)
            }
        })
    })


    $.kD('u', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() + 20)
            }
        })
    })

}
BUTME=function(){

    w = b2d.W({


        grav:0,   walls:[]


    })



    //p = w.player('thrust').XY(500,100)

    w.brick(100,300,200,30).rT(30)
    w.brick(400,200,400,100).rT(30)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    moveEachBodyButGuy()

    cjs.tick(function(){
        // w.each(function(b){ b.rT(  b.rT() + 10) })


        g.XY(400,300)

    })



}
BUTMEBETTER=function(){z()



    w = b2.mW({
        grav:0,
        walls:[]
    })


    //p = w.player('thrust').XY(500,100)

    w.bumper(200,200,100)
    w.bumper(600,300,100)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    moveEachBodyButGuy()

}


SSBUILDER=function(){z(); J.testCanvas()
    //canvas=document.getElementById("testCanvas")
    s=stage=J.stage(["testCanvas"]).tick()
    J.Ticker.setFPS(30)

    scale=0.4

    mc=J.gunner().drag()

    w=mc.nominalBounds.width * scale
    mc.transform(100 + w / 2, 100, scale, scale).a2(s)

    label1=new J.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
    label2=label1.clone().a2(stage).T("Sprite-raster").X(w+50,'+')
    b=builder=J.builder(mc)
    b.Z(scale).maxW(1024)
    b.async(function(ev){
        sprite=J.sprite(ev.target.spriteSheet)
        sprite.transform(mc.x+w+50||0,mc.y).a2(s).drag()
        mc.gotoAndPlay(0)
        sprite.gotoAndPlay(0)})

    img=builder._data.images[0]

    $('body').A(img)

}



cjs.tween= cjs.Tween


p = cjs.Tween.prototype

p.toggle=function(){

    var isPaused = this._paused

    if(isPaused){
        this.setPaused(false)}

    else{
        this.setPaused(true)
    }

    return this

}

TWEEN=function(a){St()//combo/complex/anim/tween
    st.mug(function(bm){

        b=bm
        TR(bm)
        cjs.tween(   [bm,'l'],   {x:0,sxy:.7,r:0}, [ {x:300,sxy:2.3,r:0}, 1000 ],    [ {x:0,sxy:.7,r:-30,a:.5},3000])
    })
    st.mug(function(bm){bm.TR()
        J.tween([bm,'l'],
            {x:0,sxy:.7,r:-2},
            [{x:300,sxy:2.3,r:0,a:.2,kx:60},3000],
            [{x:320,a:1,sxy:2,r:-1},1000],
            [{rx:100},1000],
            [{ry:100},1000],
            [{r:50,x:1400,y:300},3000],
            [{r:200,x:1000,y:200,sxy:1},3000],
            [{r:100,x:300, ky:-100},1000],
            [{rx:30,ry:30, r:150,x:500 },2000],
            [{rx:20,ry:50,r:100,x:500,kx:300 },2000],
            [{kxy:0,x:320,y:0,rxy:0,sxy:2,r:-1},3000])})
}


TWEENART=function(a){
    //wMb makes bitmap mug and passes it to a callback
    //optionally? can pass a stage to append it to before the callback runs
    wMb(
        function(b,s){
            b.xy(300);
            b.rgc(); //centers it's reg point?
            SK(b)
            cjs.tween([b,'l'], {sxy:.5}, [{sxy:.7},500], [{sxy:.5},500])
            wMb(function(b){s.a(b)//manual add necessary?

                b.xy(200);b.rgc();
                b.wh(200);
                SL(b);

                cjs.tween([b,'l'],{r:0},[{r:360},1000])

                wMb(function(b){s.a(b);
                    b.rgc();b.xy(600);SC(b)

                    cjs.tween([b,'l'],{kxy:0},
                        [{kxy:20},500],
                        [{kxy:0},500])
                })})},  EDIT()
    )
}

EASING=function(){

    stage= $St(1000,10000)

    stage.mug(

        function(b){
            bb= b
            b.sXY(.2).XY(50,100)
            cjs.tween([b,'l'],   [{x:800},2000],  [{x:50},2000]
            )})




    eas=function(y,e){

        stage.mug(

            function(b){

                b.sXY(.2).XY(50,y)

                cjs.tween([b,'l'], [{x:800},2000,e],  [{x:50},2000,e])

                b.$(function(){    pop(e + ' : ' + oO('E',e))   })
            })}


    eas(300,'bO'); eas(500,'bI'); eas(700,'bIO')
    eas(900,'bnO');eas(1100,'bnI');eas(1300,'bnIO')
    eas(1500,'cO'); eas(1700,'cI');eas(1900,'cIO')
    eas(2100,'eO');eas(2300,'eI');eas(2500,'eIO')
    eas(2700,'qO');eas(2900,'qI');eas(3100,'qIO')
    eas(3900,'qnO');eas(4100,'qnI'); eas(4300,'qnIO')
    eas(4500,'sO');eas(4700,'sI');eas(4900,'sIO')
    eas(5100,'qdO');eas(5300,'qdI'); eas(5500,'qdIO')}
cjs.ease = function(e){return cjs.Ease[oO('E', e)]} //Ea =
cjs.tween = function(a, b){ // EaselTween=tw=


    var displayObject = a






    cjs.ww =ww=function(o){var w={}
        if(N(o.x)){w.x=o.x}
        if(N(o.y)){w.y=o.y}
        if(N(o.xy)){w.x=w.y=o.xy}
        if(N(o.sx)){w.scaleX=o.sx}
        if(N(o.sy)){w.scaleY=o.sy}
        if(N(o.sxy)){w.scaleX=w.scaleY=o.sxy}
        if(N(o.s)){w.scaleX=w.scaleY=o.s}
        if(N(o.kx)){w.skewX=o.kx}
        if(N(o.ky)){w.skewY=o.ky}
        if(N(o.kxy)){w.skewX=w.skewY=o.kxy}
        if(N(o.k)){w.skewX=w.skewY=o.k}
        if(N(o.r)){w.rotation=o.r}
        if(N(o.a)){w.alpha=o.a}
        if(N(o.rx)){w.regX=o.rx}
        if(N(o.ry)){w.regY=o.ry}
        if(N(o.rxy)){w.regX=w.regY=o.rxy}
        if(N(o.gy)){w.regY=o.ry}
        if(N(o.gxy)){w.regX=w.regY=o.rxy}
        if(N(o.g)){w.regX=w.regY=o.g}
        if(o.v==0){w.visible=false}
        if(o.v==1){w.visible=true}
        return w}


    tweenGet = function(a){//twg=
        //this returns tween-get on a display obj
        //you can optionally pass an array (ob, op1, op2..)
        return A(a) ? cjs.Tween.get(a[0],
            tweenPops.apply(this, _.rest(a)))
            : cjs.Tween.get(a)}

    tweenPops=function(){//twp =
        var args=G(arguments),

            o={}

        _.e(args, function(arg){
            if( arg=='l' ){ o.loop = true }
            if( arg=='t' ){ o.useTicks = true }
            if( arg=='i' ){ o.ignoreGlobalPause = true }
            if( arg=='o' ){ o.override = true }
            if( arg=='p' ){ o.paused = true }
            if( N(arg) ){ o.position = arg}
            if( F(arg) ){ o.onChange = arg }

        })

        return o}









    if( U(b) ){ return tweenGet( displayObject ) }

    //first arg passed to twg, and then rest of args are 'to' pams

    var  g = G(arguments)

    displayObject = tweenGet(g[0])

    _.e(g.r, function(b){

        //can pass obj, time ,ease
        if( A(b) ){

            if( b[2] ){

                displayObject = displayObject.to( ww(b[0]), b[1],cjs.ease(b[2])  )

            }

            //can pass obj, time
            else if(b[1]){

                //can set pops to another obj??
                if(O(b[1])){
                    displayObject = displayObject.set( ww(b[0]),  b[1]   )}

                else{ displayObject=displayObject.to( ww(b[0]), b[1]) }
            }


            else{ displayObject = displayObject.tick(a[0]) }

        }

//can pass a function and it will run when it's its turn
        else if( F(b)  ){ displayObject = displayObject.call(b, []) }


        //make it wait, optionally pass in true! ?

        else if(   N( b )){

            if(b<0){
                // TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
                displayObject=displayObject.wait(b * -1, true) }

            else{displayObject= displayObject.wait(b) }
        }



        //for playing/stopping?
        else if( O(b) && b.length == 1 ){

            if( b.p ){ displayObject = displayObject.play( b.p )}

            else if( b.s ){   displayObject = displayObject.stop( b.s )}}

        else { displayObject = displayObject.to( ww(b) )  }

    })

    return Tw( displayObject )
    function Tw(tween){

        var g=G(arguments),  w=tween

        //w.target


        //use when returned
        // w.play  = w.P=w.p=function(){ w.setPaused(false);return w}
        // w.stop  = w.S=w.s=function(){ w.setPaused(true);return w}


        //use in queue
        w.then=function(tweens, a, b){ return this.to( ww(tweens),a,b ) }

        w.pos = w.ps=function(a,b){


            //get or set position of tween (in time in ms)// see w.dr


            if( U(a) ){return w.position}

            if(b=='n'){b=createjs.Tween.NONE}//0

            if(b=='l'){b=createjs.Tween.LOOP}//1 default

            if(b=='r'){b=createjs.Tween.REVERSE}//2

            w.setPosition( a, acm(b) )



            //default is loop, can use r|n
            return w}


        //total time duration
        w.dur =w.dr= function(a){
            //get time of tween in ms
            //duration:read only
            if(U(a)){return w.duration}}


        w.tk=function(a){w.tick(a); return w }


        w.ignore = w.iGP=function(a){
            if(U(a)){return w.ignoreGlobalPause}
            w.ignoreGlobalPause=a;return w}

        w.setLoop = w.lp=function(a){
            if(U(a)){return w.loop}
            w.loop=a;  return w}

        //w.psv=function(){ return w.passive}
        //Read-only. Indicates the tween's current position is within a passive wait.

        w.Plugin =function(a,b){

            var g=G(arguments),a=g[0],b=g[1]

            if(U(a)){ return g.p? w.pluginData.data: w.pluginData}

            if(U(b)){ w.pluginData=a;return w}
            w.pluginData[a]=b
            return w }

        return w}
}
TWEENPOS1=function(){z()

    s = cjs.stage(500).tick().A()

    s.bm('me',function(bm){
        b=bm

        s.bm('guy',function(guy){g=guy

            guy.XY(200)

            w0 = cjs.tween(guy,   [{r:3000}, 100000]  )

            w = cjs.tween(bm,  [{sx:3}, 1000]) .wait(1000).pause(w0).then({sy:3}, 4000).play(w0).then({sy:.3}, 4000)


        })
    })


}
TWEENPOS=function(){z()

    s = cjs.stage(500).A()



    s.bm('me',  function(bm){b=bm;


        s.bm('guy',     function(guy){

            g = guy

            guy.XY(200)

            w0 = cjs.tween(guy, [ {r:90}, 100 ] ).pause().then({r: 3000}, 100000)

            w = cjs.tween(bm, [{sx:3}, 10000] ).play( w0 )   })

        setInterval(function(){ tweens.rpunch(g) },2000)

    })





}


tweens={}

tweens.rpunch=function(arm){

    //arm=arm|| c1.g('arm')

    return cjs.tween(arm,
        [{r:100,sx:-1 },800],
        [{r:-20,sx:-2,sy:2},400,'eO'],
        [{r:0,sy:1,sx: -.8},200])}
tweens.lpunch=function(lf){

    return cjs.tween(lf,

        [{r:10,s:1},800],

        [{r:-140,s:2.5}, 600, 'eO'],

        [{s:.8, r:0}, 1600])

}
tweens.shakeY=function(a){

    // EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )

    cjs.tween(

        [a,'l'],
        [ {y:-10}, 500 ],
        [ {y:10}, 500 ],
        [ {y:-10}, 500 ]
    )

    return a
}
tweens.shakeX=function(a){return cjs.tween(
    a,

    [
        {r:180, y:200, sxy:.5},  500
    ]

).then(
    [a,'l'],
    [{x:-20},50],
    [{x:20},50],
    [{x:-20},50]

)
}
tweens.rott=function(a){

    return cjs.tween(
        a,

        [    {r:180, y:200, sxy:.5},   500    ]
    )
}
tweens.prod1=function(a){return cjs.tween(

    a,
    {x:-100,y:200},
    [{x:10,s:.5,y:-200},500],
    [{x:100,s:1.2,y:200,a:.5},10000,'eO'],
    {a:0})}
tweens.prod2=function(a){

    return cjs.tween(
        a,
        {x:100,y:200},
        [{x:10,s:.5,y:200},500],
        [{x:-100,s:1.2,y:200,a:.5},10000,'eO'],
        {a:0}
    )
}


TWEENBOX=function(){z()

    stage = dragStage().tick()

    stage.bm('me', function(bm){

        SL(bm)

        cjs.tween(

            [bm,'l'],

            {x:0, sxy:.7,r:0},

            [ {x:300,sxy:2.3,r:0}, 1000 ],

            [ {x:0,sxy:.7,r:-30,a:.5},3000])



        cjs.tween(

            [bm,'l'  ],

            {  x:0,   sxy:.7,  r:0  },

            [ { x:300, sxy:2.3,  r:0 }, 100 ],  [ {  x:0,  sxy:.7, r:-30,  a:.5 }, 100]


        )


        //  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])

    })


    dragStage().tick().bm('me', function(bm){

        b=bm
        SL(bm)

        bm.rgc('+')

        scaleShake(bm)
        rotateShake(bm)

    })

}


//really good
TWEENER = function(){z()

    s =  createjs.stage(500).tick().A()

    s.bm('me', function(bm) {   s.bm('guy', function (guy) {


        g = guy
        b = bm

        tween = cjs.tween(bm,

            //pass in objects and they are 'to', 'to', etc..
            [{sx: 2,sy: 2}, 3000 ], [{a:0}, 300],

            //make it wait
            1000,

            //pass in a function and it will run when it's its turn
            function(){  s.bm('chicks', function(b){ cjs.tween(b, [{sxy:.2}, 2000]) })  }


        ).then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)

        tween3 = cjs.tween(g, [{r: 20},10000], [{r: 0},3000]   )

        stop = function(){  tween.stop(); tween2.stop()  }



    })   })



}





tl= cjs.Timeline.prototype
tl.remove = tl.rm = function(a){ this.removeTween(a); return this }
tl.currentLabel = tl.cL=function(){return this.getCurrentLabel()}
tl.labels = tl.lb=function(a){
    var t=this;
    if(U(a)){return this.getLabels()}
    if(O(a)){this.setLabels(a);return this}
    if(N(a) || S(a)){return resolve(a)}
    return this
}
tl.add=function(tw){var that=this

    this.addTween.apply(this, arguments)

    return this}

mc=cjs.MovieClip.prototype
mc.play = mc.p = function(a,b){
    if(this.setPaused){this.setPaused(false)} else { this.play() }
    if(D(b)){

        if(this.gotoAndPlay) {this.gotoAndPlay(a)}

        if(this.setPosition) {this.setPosition(a,b)}

        return this}
}
mc.stop = mc.s = function(a,b){


    if(D(b)){

        if(this.gotoAndStop) {this.gotoAndStop(a)}

        if(this.setPosition) {this.setPosition(a,b)}

        return this}
}
mc.lb = function(){return this.getLabels()}
mc.cL=function(){return this.getCurrentLabel()}
mc.start= mc.startPos= mc.sP=function(a){
    if(U(a)){
        return this.startPosition};
    this.startPosition=a;
    return this}
mc.mo=function(a){
    if(U(a)){return this.mode}
    this.mode=a;
    return tthis}
mc.lp=function(a){ //loop
    if(U(a)){ return this.loop }
    this.loop=a
    return this}
mc.auto = mc.aR=function(auto){
    if(U(auto)){ return this.autoReset }
    this.autoReset = auto
    return this}
mc.actions = mc.aE = function(enabled){

    if( U(enabled) ){ return this.actionsEnabled }

    this.actionsEnabled = enabled

    return this
}
mc.tl=function(){
    this.timeline.addTween.apply(this.timeline, arguments)

    return this}


cjs.tl=function(args){var tl = new cjs.Timeline()
    if(A(args)){

        tl.add(args)
    }
    return tl}
cjs.mc=function(a,b,c,d){var mc = new cjs.MovieClip(a,b,c,d)
    return mc}

TIMELINE=function(){s=cjs.S()
    q = cjs.lq(['me','guy'], function(res){

        me  = s.bm( res('me') ).XY(300)
        guy = s.bm( res('guy') ).XY(200)

        cjs.tl([
            me.tween( [{sx: 2}, 10000 ]),
            me.tween([{sy:2},10000]),
            guy.tween( [{r: 20},10000], [{r: 0},10000])
        ])})}


MC=function(){
    //Uncaught TypeError: cjs.cir is not a function

    cjs.S()

        .mc(  null,  0,  true,   {start:0, middle:40})

        .tl(

        cjs.circ(50,'r').Y(200).tween({x: 100},[{x:600},40], [{x: 100}, 40]),
        cjs.circ(50,'b').Y(200).tween({x: 600},[{x: 100}, 40],[{x: 600}, 40])

    ).p("middle")






}
REDROBOT=function(){z()
    //this is a fancy mc
    s = cjs.stg(1000).A()
    g = cjs.gunner().a2(s).drag().XY(400,200)


}
RUNNINGMAN=function() {s=stage=cjs.S()


    $.img("/MonsterAIdle.png", function(i){imgMonsterAIdle =i[0]})
    $.img("/MonsterARun.png", function(i){imgMonsterARun = i[0]})

    $.bt('start', startGame  ).A()

    $.bt('reset', function(){
        s.removeAllChildren()
        cjs.Ticker.removeAllListeners()
        // stage.update()
    }).A()



    function startGame(){


        screen_width = s.W()
        screen_height = s.H()

//Idle sequence of the monster

        spriteIdle = new cjs.Sprite(   new cjs.SpriteSheet({

            images: [ imgMonsterAIdle ],

            frames: {  width: 64, height: 64,  regX: 32, regY: 32   },

            animations: { idle: [0, 10, "idle", 4]  }

        }))

        spriteIdle.name = "monsteridle1"
        spriteIdle.XY( 16,   32)



        // create sprite.. and set the registration point (the point it will be positioned and rotated around) to the center of the frame dimensions:
        sprite = new cjs.Sprite(
            new cjs.SpriteSheet({

                images: [ imgMonsterARun ],

                frames: {width: 64, height: 64, regX: 32, regY: 32 },

                animations: {  walk: [0, 9, "walk", 4] }// To slow down the animation loop of the sprite, we set the frequency to 4 to slow down by a 4x factor

            }).addFlipped(true,false,false))



        //sprite.regX = sprite.spriteSheet.frameWidth/2 || 0
        //sprite.regY = sprite.spriteSheet.frameHeight/2 || 0

        // start playing the first sequence: walk_h has been generated by addFlippedFrames and  contained the right facing animations

        sprite.p("walk_h") 	//walking from left to right

        //sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)

        sprite.name = "monster1"
        sprite.direction = 90
        sprite.XY(16, 32).vXY(1,0).a2(s)
        sprite.currentFrame = 10

        // we want to do some work before we update the canvas,  // otherwise we could use Ticker.addListener(stage);
        cjs.Ticker.setFPS(40)

    }


    // cjs.tick(onTick)

    onTick= function(){

        if (sprite.x >= screen_width - 16) {  sprite.direction = -90;  sprite.gotoAndPlay("walk")  } // Hit testing the screen width, otherwise our sprite would disappear // We've reached the right side of our screen   // We need to walk left now to go back to our initial position
        if (sprite.x < 16) {   // We've reached the left side of our screen // We need to walk right now


            sprite.direction = 90

            sprite.gotoAndStop("walk")

            s.removeChild( sprite )

            spriteIdle.gotoAndPlay( "idle" )

            stage.addChild( spriteIdle )}


        // Moving the sprite based on the direction & the speed
        if (sprite.direction == 90){  sprite.x += sprite.vX;  sprite.y += sprite.vY}

        else {   sprite.x -= sprite.vX;   sprite.y -= sprite.vY}

    }

}
TOOLKITBRITNEY=function(){

//ok an export using toolkit!
    z()

    var  stage, exportRoot, lib, images

    flashFunction=function(lib, img, cjs){  var p; // shortcut to reference prototypes

// library properties:
        lib.properties={

            width: 550,
            height: 400,
            fps: 24,
            color: "#FFFFFF",
            manifest: [{src:"/britney.jpeg", id:"britney"}, {src:"/gaga.jpeg", id:"gaga"}]};


// symbols:

        lib.britney = function(){ this.initialize(img.britney) }

        lib.britney.prototype = p = new cjs.Bitmap()

        p.nominalBounds = new cjs.Rectangle(0,0,259,194)


        lib.gaga = function(){ this.initialize(img.gaga) }
        lib.gaga.prototype = p = new cjs.Bitmap()


        p.nominalBounds = new cjs.Rectangle(0,0,242,208);


        lib.gaga_1=function(){

            this.initialize()
            // Layer 1
            this.instance = new lib.gaga()
            this.addChild(this.instance)

        }



        lib.gaga_1.prototype = p = new cjs.Container()
        p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)




        lib.brit = function(){
            this.initialize()
            // Layer 1
            this.instance = new lib.britney()
            this.A(   this.instance   )}




        lib.brit.prototype = p = new cjs.Container()
        p.nominalBounds=new cjs.Rectangle(0,0,259,194);


        lib.Tween2=function() {

            this.initialize()

            // Layer 1
            this.instance = new lib.brit()
            this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0,129.5,97);

            this.instance_1 = new lib.gaga_1()
            this.instance_1.setTransform(-148.9,33,1.537,0.24,60,0,0,121,104.1);

            this.A(
                this.instance_1,
                this.instance
            )}

        lib.Tween2.prototype = p = new cjs.Container()
        p.nominalBounds = new cjs.Rectangle(-263.5,-206.5,527,413);

        lib.Tween1 = function() {
            this.initialize();

            // Layer 1
            this.instance = new lib.brit().transform(-57.6,52.6,1,1,0,0,0,129.5,97);


            this.instance_1 = new lib.gaga_1();
            this.instance_1.setTransform(72.5,0.1,1.537,0.24,60,0,0,121,104.1);

            this.addChild(this.instance_1,this.instance)}



        lib.Tween1.prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(-187.1,-173.5,374.2,347.1)




// stage content:
        lib.Untitled3 = function(mode, startPosition, loop){

            this.initialize(mode,startPosition,loop,{})

            // Layer 1
            this.instance = new lib.gaga_1()

            this.instance.setTransform( 275,200.5,1,1, 0,0,0,121,104 )

            this.instance_1 = new lib.Tween1("synched",0)
            this.instance_1.setTransform(202.6, 200.5)
            this.instance_1._off = true

            this.instance_2 = new lib.Tween2("synched", 0)
            this.instance_2.setTransform(301.9,206.5)

            this.timeline.addTween(
                cjs.Tween.get({})
                    .to({state:[{t: this.instance}]})
                    .to({state:[{t: this.instance_1}]},19)
                    .to({state:[{t: this.instance_2}]},10)
                    .wait(1))

            this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,x:202.6,mode:"synched",startPosition:0},19).wait(11));
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:301.9,y:206.5},10).wait(1))}

        lib.Untitled3.prototype = p = new cjs.MovieClip()


        p.nominalBounds = new cjs.Rectangle(429,296.5,242,208)

    }



    flashFunction(lib = lib||{}, images=images||{}, createjs = createjs||{}  )




    $.canvas('y', 550,400).id('canvas').A()

    canvas = document.getElementById("canvas")

    images=images||{}

    loader=new createjs.LoadQueue(false)

    loader.addEventListener("fileload",

        handleFileLoad=function(evt){
            if(evt.item.type == "image") { images[evt.item.id] = evt.result}
        })

    loader.addEventListener("complete", function() {
        exportRoot = new lib.Untitled3();
        stage = new createjs.Stage(canvas)
        stage.addChild(exportRoot)
        stage.update()
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage)})

    loader.loadManifest(lib.properties.manifest)}
FLASHSCROLLER=function(){z()
// ****  THIS WORKS!!!
    var p

    images =  {}


    lib={properties : {  width: 550, height: 400,  fps: 24,  color: "#FFFFFF",  manifest: [] }};

    (lib.StartMarker = function() {
        this.initialize();


        this.shape = new cjs.Shape();
        this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
        this.shape.setTransform(0,0,1.515,1.515);

        this.addChild(this.shape);
    }).prototype =  new cjs.Container().bounds(-25,-25,50,50);


    (lib.Player = function(){
        this.initialize()

        // Layer 1
        this.shape = new cjs.Shape()
        this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");

        this.shape.setTransform(0, -20)

        this.addChild( this.shape )


    }).prototype = p = new cjs.Container();

    p.nominalBounds = new cjs.Rectangle(-11,-40,22,40);


    (lib.Boundries = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape()
        this.shape.graphics.f().s("#0066CC").ss(38,1,1).p("AhPBfICfi9")
        this.shape.setTransform(846,100.5)

        this.shape_1 = new cjs.Shape()
        this.shape_1.graphics.f().s("#0066CC").ss(38,1,1).p("AjCB9ICgifIDlha")
        this.shape_1.setTransform(777.5,163.5);

        this.shape_2 = new cjs.Shape()
        this.shape_2.graphics.f().s("#0066CC").ss(38,1,1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
        this.shape_2.setTransform(627,261.5);

        this.shape_3 = new cjs.Shape()
        this.shape_3.graphics.f().s("#0066CC").ss(38,1,1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
        this.shape_3.setTransform(-157.5,229.5);

        this.shape_4 = new cjs.Shape()
        this.shape_4.graphics.f().s("#0066CC").ss(38,1,1).p("AEYjHIszhGIQ3IbImulx")
        this.shape_4.setTransform(-17,253);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#0066CC").ss(38,1,1).p("AhXgTQBigNBNA2");
        this.shape_5.setTransform(452.8,235.1);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#0066CC").ss(38,1,1).p("Ag1AAIBsAA");
        this.shape_6.setTransform(123.5,342);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#0066CC").ss(38,1,1).p("AALkRQGogLDzFiIAAB9I1LBQ");
        this.shape_7.setTransform(356.8,309.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#0066CC").ss(38,1,1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
        this.shape_8.setTransform(222.5,239.5)

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
        this.shape_9.setTransform(101,227);



        this.addChild(
            this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,
            this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container().bounds(-214,72,1087,289);




    lib.scroller2 = function(){// stage content:
        this.initialize()

        this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);

        this._boundaries = new lib.Boundries().transform(40,31,1,1,0,0,0,40,31);

        this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);

        this.addChild(this._startMarker,this._boundaries,this._player)}

    lib.scroller2.prototype = new cjs.Container().bounds(61,272,1087,289)




    $('body').A(
        $.bt('start', function(){boundaries.tween([{x: -500}, 10000])}),
        $('<br>'))


    exportRoot = new lib.scroller2()

    s=stage = cjs.stage(550,400).A().A( exportRoot )
    cjs.Ticker.setFPS( lib.properties.fps )
    startMarker = exportRoot._startMarker.X(275).hide()
    player = exportRoot._player.rXY(0).X(275)
    boundaries =  exportRoot._boundaries.XY(500,0)

    _vx=0
    _vy=0

    $.key({
        l: function(){_vx = -7},
        L: function(){_vx = 0},
        r: function(){_vx = 7},
        R: function(){_vx = 0},
        u: function(){_vy = -20}})

    $('canvas').click(function(){_vy=-20})


    processCollisions=function(){if(_vy<=0){return}

        if(player.belowStg()){ $l('fell off')

            cjs.Tween.removeAllTweens()
            boundaries.XY(500, 0)
            _vy=0
            player.XY(startMarker)}

        else {

            if(collision=boundaries.test(player) ){

                while(collision){
                    _vy=0
                    player.y-=.1
                    collision = boundaries.test(player)
                }

                _vy=0}
        }



    }


    scrollStage=function(){

        boundaries.x += (s.W()*.5)- player.x

        player.X( s.W()*.5 )

    }



    cjs.tick( function(){

        _vy +=2

        player.x += _vx;
        player.y += _vy;

        processCollisions()

        scrollStage()

    })





}


MOVIE=function(){//wap()
    z()
    var s=$.canvas('blue', 800, 800).A().stage.tick(),

        div=$.d().A(),

        fn=function(){}

    $.getJSON('/img', function(imgs){

        _.e(imgs, function(v){ v=v.d

            var canvas =  $.canvas(100,100).A().fit(v)

            canvas.click( function(){

                s.bm(v,function(b){bb=b

                        createjs.bindTransform(b);

                        //fn(b)
                        b.click(function(q){   fn(q)   }) },

                    '+')

            })

            div.A( canvas   )


        })

        part2=function() {
            c = $.Ct().A(
                $.row.A(
                    $.d().A(div, s),


                    $.d().A(
                        $.bt('shake', function () {
                            fn = function (b) {
                                W$.get(b.obj(), {loop: true})

                                    .to(ww({x: b.x()}, 500))
                                    .to(ww({x: b.x() + 100}), 500)
                                    .to(ww({x: b.x()}), 500)

                            }
                        }),


                        $bt('rotate', function () {
                            fn = function (b) {
                                W$.get(b.obj(), {loop: true})
                                    .to(ww({kxy: 0})).to(ww({kxy: 20}), 500).to(ww({kxy: 0}), 500)
                            }
                        }),


                        $bt('size', function () {
                            fn = function (b) {
                                W$.get(b.obj(), {loop: true})
                                    .to(ww({sxy: 1})).to(ww({sxy: 1.3}), 500).to(ww({sxy: 1}), 500)
                            }
                        })
                    )))
        }

        //c.o('$$',function(){  s.sv(ART)})

    })

    return s}
STAGE=function(){z()

    m$$("location=location")

    s=St(600).a().rgc().drg().xy(300)
    s.bm('chicks')
    s.bm('me',function(mm){
        m=mm
        m.rgc()
        m.xy(300)

        cjs.tween(s, [{r:-10000 },300000])
        cjs.tween(m, [{r:100000 },300000])


    })

    s.bm('guy',function(){})



}
CJSSPINNER=function(){z()

    s= cjs.stage('purple', 1000).A().rCenter()

    cjs.tween(s, [{r:-10000 },300000])

    s.bm('me',function(bm){m=bm.XY(500)
        SL(bm)})

    s.A( r = cjs.rectangle(400,400, 'orange', 'red').XY(1200) )
    s.A( r2 = cjs.rectangle(300,300, 'pink', 'red').XY(800) )
    s.A( r3 = cjs.rectangle(300,300, 'green', 'green').XY(0) )
}
RECTS=function(){z()
    x=20
    y=20

    s=cjs.stage(500).A()//.drag()


    h0= cjs.shape().rect(-20,-20,x+40,y+40,'yellow','yellow')
    h1= cjs.shape().rect(-10,-10,x+20,y+20,'red','pink')
    h2= cjs.shape().rect(0,0,x,y,'orange','black')

    s.A(h0, h1, h2)

    SL(h2)
    SL(h2,h1)
    SL(h2,h0)

    RT(h1)
    RT(h1,h2)
    RT(h1,h0)


    SC(h0)
    SC(h0, h2)
    SC(h0, h1)

    a=function(){
        x+=20;
        y+=20
        h1.clear()
        h2.clear()
        h1.rect(-10,-10,x+20,y+20,'black','pink')

        h2.rect(0,0,x,y,'orange','transparent')
    }

    // h0.rect(50,50,30,30,'black','orange')





}




