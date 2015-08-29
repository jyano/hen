

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
cjs.parseZoe=function(sprObj){


    //fix source (needs a '/')
    sprObj.images[ 0 ] = S.eL( sprObj.images[0] )

    //set next to false, on all anims
    //_.e(sprObj.animations, function(anim){anim.next = false})


    //to do: parse it! (get rid of unnecessary json strings in keys)


    return sprObj}
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

function alpha(){
    meSprite=function(){
        return $sprite(   SS ).XY(10).drag()
    }

}
cjs.rtSh = cjs.rotateShake = function (bm) {
    $Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
    $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])

}