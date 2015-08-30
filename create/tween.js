cjs.Tw=cjs.Tween
cjs.Tw.g=cjs.Tw.get



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



$Tw= function(){var g=G(arguments), i = tweenGet(g.f)//; if( U(g.s) ){alert('$Tw'); return i }//

    _.e(g.r, function(b){


        if( A(b) ){
            i = b[2]?  ease(i,b):
                !b[1]?  i.tick(g.f[0]):
                    O(b[1])?  i.set( ww(b[0]), b[1]):
                        i.to( ww(b[0]), b[1])
        }
        else if( F(b)  ){ i = i.call(b, []) }
        else if(N(b)){i=  wait(i,b)}
        else if( O(b) && b.length == 1 ){i = frame(i,b)}
        else { i = i.to( ww(b) )  }


        function ease(i,b){return  i.to( ww(b[0]), b[1], cjs.ease(b[2]) )}
        function frame(i, frame){return frame.p?  i.play( frame.p ): frame.s?  i.stop( frame.s ):i}
        function wait(i, time){ return time < 0? i.wait(time * -1, true):i.wait(time) }




    })


   return Tw( i )
    $TwWithComments= function(a,b){var g=G(arguments), i = g.f, op= g.s

        if( U(g.s) ){
            return tweenGet(g.f )
        }

        //first arg passed to twg, and then rest of args are 'to' pams

        i = tweenGet(g.f)

        _.e(g.r, function(b){
            //can pass obj, time ,ease
            if( A(b) ){

                if( b[2] ){

                    i = i.to( ww(b[0]), b[1],cjs.ease(b[2]))

                } //can pass obj, time


                else if(b[1]){

                    //can set pops to another obj??
                    if( O(b[1]) ){

                        i = i.set( ww(b[0]),  b[1]   )
                    }
                    else{
                        i = i.to( ww(b[0]), b[1]) }
                }



                else{ i = i.tick(a[0]) } }
            //can pass a function and it will run when it's its turn

            else if( F(b)  ){ i = i.call(b, []) } //make it wait, optionally pass in true! ?

            else if(   N( b )){

                if(b<0){
                    // TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
                    i=i.wait(b * -1, true) }

                else{i= i.wait(b) }
            } //for playing/stopping?

            else if( O(b) && b.length == 1 ){

                if( b.p ){ i = i.play( b.p )}

                else if( b.s ){   i = i.stop( b.s )}}
            else { i = i.to( ww(b) )  }
        })

        return Tw( i )
    }
    function tweenGet(){
        //this returns tween-get on a display obj
        // you can optionally pass an array (i, op1, op2..)
        var g=G(arguments),o= g.A? {i: g.f[0], op: g.r}: {i: g.f}
        return cjs.Tw.g(o.i, o.op? _ops(o.op): null )
        function _ops(){var g=G(arguments), o={}, ops= g.A? g.f: g
            _.e(ops, function(op){

                if( op=='l' ){ o.loop = true }
                if( op=='t' ){ o.useTicks = true }
                if( op=='i' ){ o.ignoreGlobalPause = true }
                if( op=='o' ){ o.override = true }
                if( op=='p' ){ o.paused = true }
                if( N(op) ){ o.position = op}
                if( F(op) ){ o.onChange = op }

            })
            return o
        }




    }
}



function Tw(tween){ var g=G(arguments),  w=tween //w.target //use when returned // w.play  = w.P=w.p=function(){ w.setPaused(false);return w} // w.stop  = w.S=w.s=function(){ w.setPaused(true);return w} //use in queue
    w.then=function(tweens, a, b){ return this.to( ww(tweens),a,b ) }
    w.pos = w.ps=function(a,b){


        //get or set position of tween (in time in ms)// see w.dr


        if( U(a) ){return w.position}

        if(b=='n'){b=cjs.Tw.NONE}//0

        if(b=='l'){b=cjs.Tw.LOOP}//1 default

        if(b=='r'){b=cjs.Tw.REVERSE}//2

        w.setPosition( a, acm(b) )



        //default is loop, can use r|n
        return w} //total time duration
    w.dur =w.dr= function(a){
        //get time of tween in ms
        //duration:read only
        if(U(a)){return w.duration}}
    w.tk=function(a){w.tick(a); return w }
    w.ignore = w.iGP=function(a){
        if(U(a)){return w.ignoreGlobalPause}
        w.ignoreGlobalPause=a;return w}
    w.setLoop = w.lp=function(a){if(U(a)){return w.loop}
        w.loop=a;  return w} //w.psv=function(){ return w.passive} //Read-only. Indicates the tween's current position is within a passive wait.
    w.Plugin =function(a,b){

        var g=G(arguments),a=g[0],b=g[1]

        if(U(a)){ return g.p? w.pluginData.data: w.pluginData}

        if(U(b)){ w.pluginData=a;return w}
        w.pluginData[a]=b
        return w }
    return w
}




tw = cjs.Tw.prototype
tw.toggle = function () {

    var isPaused = this._paused

    if (isPaused) {
        this.setPaused(false)
    }

    else {
        this.setPaused(true)
    }

    return this

}
