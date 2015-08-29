

tictactoe=[
    [[200,0],[200,600]],
    [[400,0],[400,600]],
    [[0,200],[600,200]],
    [[0,400],[600,400]]
]

sh1=[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]]
sh2=[[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]],[[8,13],[12, 13]],[[9,14],[9,18]],[[10,14],[10,18]]]

cv.fitEx=function(){
    this.ln([0,0],
        [this.W(),this.H()],
        [0,this.W()],[this.H(),0])
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
    can = $.c('y', 1000, 800).A()
    can.$$( function(){ can.fit('me') } )
    can.fit('me')
    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}
    rr = null
    data = null
    can.MD(function(x, y){
        data = can.gD()
        dragging = true
        mousedown = { x:x, y:y }

    })
    can.MM(function(X,Y){var m={x:X, y:Y}, d = mousedown
        if(dragging){
            can.pD(data)
            can.ln(d.x, d.y, d.x, m.y)
            can.ln(d.x, d.y, m.x, d.y)
            can.ln(m.x, m.y, m.x, d.y)
            can.ln(m.x, m.y, d.x, m.y)}})
    can.MU(function(X,Y){
        dragging = false
        var d = mousedown, x1, x2, y1, y2
        if(X > d.x){ x1 = d.x; x2 = X } else {x1=X; x2=d.x}
        if(Y > d.y){ y1 = d.y; y2 = Y } else {y1=Y; y2=d.y}
        rr=[x1, y1, x2, y2]
        can.pD(data)
        can.crop(rr)

        //    data=can.gD()
    })

}
FIT=function(){$.C()
    c.fit('me')
}

///////

canEl=function(){

    c.u = function(){return this.toDataURL()}
    c.x = function(){return this.getContext('2d')}

};canEl()

paths=function(){

    cv.s = cv.ss = cv.strokeColor=setStrokeColor=function(c){

        this.ctx().strokeStyle =  oO('c', c)

        return this

    }
    cv.f = cv.fs = cv.fillColor=setFillColor=function(c){

        this.ctx().fillStyle =   oO('c',c)

        return this

    }
    cv.fi= cv.fill=function(){
        var cv=this
        cv.ctx().fill()
        //cv.stroke()
        return cv
    }
    cv.str= cv.stroke=function(){var cv=this,ctx=cv.ctx()
        ctx.stroke()
        //cv.stroke()
        return cv
    }
    cv.fSty= cv.fillStyle=function(fs){
        if(U(fs)){return this.context.fillStyle}
        this.context.fillStyle = fs
        return this}
    cv.fsX=function(c,sc){var g=G(arguments)

        if(O(c)){

            x.x.fillStyle=c;

            return x
        }

        if( c=g.p? $r('c',c) : Oo('c',c) ){
            x({f:c})
        }



        if(D(sc)){x.ss(sc)}

        return x

    }
    cv.sfl=function(c,f,s,l){
        x({f:f,s:s,w:l});return x
    }
    cv.clP= cv.closePath=function(){
        cv.context.closePath()
        return cv}
    cv.bg = cv.begin= cv.beginPath= function(x, y){var cv=this, ctx=cv.ctx()
        ctx.beginPath()
        if(N(x)){cv.mt(x,y)}
        if(A(x)){cv.mt(x[0],x[1])}
        return cv
    }
    cv.mt=  function(x,y){
        var cv=this, ctx = cv.ctx()
        ctx.moveTo(x,y)
        return cv
    }
    cv.lt=  function(x,y){var cv=this,ctx=cv.ctx(),g=G(arguments)

        if(A(x)){

            g.e(
                function(x){cv.lt(x[0],x[1])
                })}

        ctx.lineTo(x,y)

        return cv
    }
    cv.cl =function(){
        cv.context.clip()
        return cv}
    cv.fr= cv.fR= function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||cv.W()
        d=d||cv.H()
        cv.context.fillRect(a,b,c,d)
        return this
    }
//clear screen [+ fill with color || run fx]
    cv.clear = cv.clearRect=function(a,b,c,d){
        if(S(a)){
            cv.fillStyle(a);
            return cv.fillRect()}
        a=a||0
        b=b||0
        c=c||cv.W()
        d=d||cv.H()
        cv.context.clearRect(a,b,c,d)

        // if(F(a)){a()}
        return cv
    }
    cv.horizontalLine=cv.lnh=function(X,Y,l){var g=G(arguments),X=g[0],Y=g[1],l=g[2],
        X2=g.p?X+l:g.n?X-l:l
        return x.ln(X,Y,X2,Y)}
    cv.verticalLine= cv.lnv=function(X,Y,len){var g=G(arguments),
        X=g[0], Y=g[1], len=g[2],
        Y2 = g.p ? Y + len
            : g.n ? Y - len
            : len
        return x.ln( X, Y , X, Y2 )
    }
//curves
    cv.arc=function(a,b,c,d,e,f,g){
        this.ctx().arc(a,b,c,d,e,f,g)
        return this
    }
    cv.arcTo =  function a2(X){var g=G(arguments)
        if(A(X)){return _a( a2(x), X)}
        this.arcTo([0]||50,g[1]||40,g[2]||100,g[3]||100,g[4]||30)
        this.stroke()
        return this
    }
    cv.bezierCurveTo=function(a,b,c,d,e,f,g){
        this.context.quadraticCurveTo(a,b,c,d,e,f,g)
        return this
    }
    cv.quadraticCurveTo=function(a,b,c,d,e,f,g){
        this.context.quadraticCurveTo(a,b,c,d,e,f,g)
        return cv
    }
    cv.curveTo=function(a,b,c,d,e,f,g){

        if(N(e)){
            return this.bezierCurveTo(a,b,c,d,e,f)
        }

        else return this.quadraticCurveTo(a,b,c,d,e,f,g)


    }
    cv.cir=function(X,Y,R,fs,ss){var cv=this, g=G(arguments),
        X=g[0]||200, Y=g[1]||200, r=g[2]||1, fs=g[3], ss=g[4]
        cv.beginPath()
        cv.arc(X, Y, r,0,7,false)
        cv.fillColor('red')
        cv.strokeColor('blue')
        cv.stroke()
        cv.fill()
        return cv
    }
//rect
    cv.fr= cv.fillRect=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||this.W()
        d=d||this.H()
        this.context.fillRect(a,b,c,d)

        return this}
    cv.colorFillRect = cv.cfr=function(a){

        var args=G(arguments)

        this.save()
        this.setFillColor( toColor.apply(null, args) )
        this.fillRect(0, 0, this.W(),this.H() )
        this.restore()

        return this

    }
    cv.roundRect= function(X, y, width, height, radius){

        cv = this.context
        cv.beginPath()
        cv.moveTo(X + radius, y);
        cv.lt(X + width - radius, y);
        cv.quadraticCurveTo(X + width, y, X + width, y + radius);
        cv.lt(X + width, y + height - radius);
        cv.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
        cv.lt(X + radius, y + height);
        cv.quadraticCurveTo(X, y + height, X, y + height - radius);
        cv.lt(X, y + radius);
        cv.quadraticCurveTo(X, y, X + radius, y);
        cv.closePath();

        cv.fill()
        return cv

    }
    cv.roundRect.test=function(){
        cv.roundRect(100,100,200,400,20)

    }
//draw line ( [x,y],[x,y] || x,y,x,y )
//draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
//fresh start
    cv.ln=cv.line = function rc(){
        var cv=this,
            ctx=cv.ctx(),
            g= G(arguments)

        if(g.N_){
            cv.begin(g.f, g.s)
            cv.lt(g.t, g[3])
            cv.stroke()
            return cv
        }

        if(g.A_ && N(g[0][0]) ){
            cv.begin(g.f)
            g.eR( function(p){
                cv.lt(p[0], p[1])
            })
            cv.stroke()
            return cv
        }

        if(AA(g.f)){
            g.e(function(p){ cv.ln.apply(cv,p)})
        }
        //cv.stroke()
        return cv
    }
    cv.pointInPath = cv.pip=function(c,a,b){
        return this.context.isPointInPath(a,b)
    }
};paths()


$.c = $.canvas= $.can = function(c, width, h, x,y){var g=G(arguments), o, el
    o = g.S_?
    {c: g.f, w: g.s, h: g.t, x:g[3], y:g[4]}:
    {w: g.f, h: g.s, x: g.t, y: g[3] }
    o.w = o.w|| 1200
    o.h = o.h|| 600
    o.c = o.c || 'x'
    el = $('<canvas>')
    el.attr({width: o.w, height: o.h})
    el.C(o.c)
    if(N(o.x)){ el.abs(o.x, o.y) }
    if(g.p){el.drag()}
    el.A().al(.8)
    return superCanvas(el)
}
$.C=function(){ z();
    c = $.c('y').drag()
    x = c.ctx()
}

superCanvas=function(el){

    el = $(el)

//to be called internally by $.c
//works on FIRST canvas in jquery obj
    el.canvas = el[0]
    el.context = el.canvas.getContext('2d')
    el.stage = new cjs.Stage(el.canvas)



    el.W=function(width){
        var args=G(arguments)
        width = args[0]
        if(U(width)){return this.attr('width')}
        if(args.N){var dataUrl = this.toDataURL()}
        this.attr('width', width)
        if(args.N){this.fit(dataUrl)}
        return this
    }

    el.H=function(height){
        var args=G(arguments)
        height = args[0]
        if(U(height)){return this.attr('height')}
        if(args.N){var dataUrl = this.toDataURL()}
        this.attr('height', height)
        if(args.N){this.fit(dataUrl)}
        return this
    }
    el.WH=function(w, h){
        if(U(w)){
            var width=this.W(), height=this.H()
            return {
                width:width,  w:width,
                height:height, h:height}}
        h = h||w
        return this.W(w).H(h)}

    //el.Z=function(d){d=d||5;return this.WH(d*100,d*100)}


    el.offsetLeft  =el.l=function(theOffset){
        if(!theOffset){
            return offsetLeft(x.q)}
        return parseInt( theOffset - x.offsetLeft() )};
    //  el.ox=function(){return x.q.q.offset().left}
    el.offsetTop   =el.t=function( y ){ if( !y ){ return offsetTop( y.q ) }; return parseInt( y - x.offsetTop() ) }
    //  el.oy=function(){return x.q.q.offset().top}
    el.copy= function(){
        el.img.src( el.toDataURL() )
        return el}
    el.paste= function(){
        var g=G(arguments)
        if(g.N){el.clearRect()}
        if(g.p){el.fit(el.img)}
        else {
            el.draw(el.img.src())
        }
    }
    el.save=function(){
        el.context.save()
        return el
    }
    el.restore=function(){
        el.context.restore()
        return el
    }
    //dont mix up with element/jquery alpha
    //maybe opacity for element and alpha for canvas?
    el.globalAlpha = el.alpha = el.op=function(alpha){
        if(U(alpha)){return this.context.globalAlpha}
        this.context.globalAlpha = alpha

        return this}

    el.comp = el.globalCompositionOperation = el.gc = function(compOp){
        if(U(compOp)){
            return this.context.globalCompositeOperation}
        this.context.globalCompositeOperation = oO('g', compOp)
        return this}
    //normal prop (as methods)
    el.lineWidth=function(w){
        if(U(w)){return el.context.lineWidth}
        el.context.lineWidth=w
        return el
    }

    el.lineCap=function(w){
        if(U(w)){return el.context.lineCap}
        el.context.lineCap=w
        return el
    }
    el.lineJoin=function(w){
        if(U(w)){return el.context.lineJoin}
        el.context.lineJoin=w
        return el
    }
    el.URL = el.dataURL = el.toDataURL=function(){
        return el.canvas.toDataURL()
    }

    //wap specific
    el.snap = function (  func ){

        pams = {

            d: el.toDataURL(),

            dats: el.dats

        }

        $.post('/img', pams, func )

    }

    el.img = $.i()
    el.img.src( el.toDataURL() )


    el.me=function me(n){//randomly draw my face
        var g=G(arguments),n=g[0]||200
        if(x.me.d){
            clearInterval(x.me.d);x.me.d=false}
        else{x.me.d=I(function(){
            x.d($w['mug']||'me',_r(x.w()-200),_r(x.w()-200))},n) }
        return x}
    el.me.shouldDrawMeId=false
    el.mugX=function(m){
        qP('/mug',{u:m},
            function(m){x.fit(m)})
        return x}

    el.t=  el.tick=function(){
        var ctx=this.ctx()
        ctx.tick.apply(ctx, arguments)
        return this
    }

    el.$=function(func){
        el.click(function(e){
            func(  e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)})}
    el.$$=function(func){

        el.dblclick(function(e){

            func(  e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)

        })}

    el.over = el.MV=function(func){

        el.mouseover(function(e){


            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.out =el.MO=function(func){

        el.mouseout(function(e){


            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.enter = el.ME=function(func){

        el.mouseenter(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.leave = el.ML=function(func){

        el.mouseleave(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.up = el.MU=function(func){

        el.mouseup(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.move = el.MM=function(func){

        el.mousemove(function(e){

            func(e.pageX -$(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.down = el.MD=function(func){

        el.mousedown(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    return el

}


cv.dots=function(){var cv=this

    cv.copy()
    cv.DOTS=[]
    cv.dats=[]
    cv.$(function(x,y){
        x=parseInt(x)
        y=parseInt(y)
        cv.cir(x, y)
        cv.DOTS.push( [ x,y ] )
        cv.dats.push( x)
        cv.dats.push( y )
        cv.line( cv.DOTS )
    })
    cv.$$(function(X,Y){var du
        //el.C('X')
        cv.off('click')
        cv.closePath()  //el.paste() // el.copy()  //el.save()
        cv.clear() //du = el.toDataURL()
        cv.clip()
        cv.paste() //el.fit(du)
    })

    return cv

}



CANVIIFIT=function(){z()
    m= $.c(800).fit('me')
    g= $.c('b',600).fit('guy')
}



grads=function(){

    /*
     addColorStop = function rc( gr, stop, c ){
     // pass only a gr -> function with gr curried
     // add a color stop to a gr
     if(U(stop)){return _.p(rc, gr)}
     gr.cS(stop, oO('c', c))
     return gr
     }

     SuperGradient = function(gr){
     gr.stop = function(stop, c){cS(gr, stop,c); return gr}
     gr.stops = function(stopObject){
     _.e(stopObject,
     function(v, k){
     var o = S(v)? {k:k, v:v} : {k:v, v:k}
     cS(gr, o.k , $r('c', o.v))
     })
     }
     return gr
     }


     cv.linearGradient = cv.lG = cv.createLinearGradient = function(a,b,c,d){
     a=a||0
     b=b||0
     c=c||this.W()
     d=d||this.H()
     return SuperGradient(this.context.createLinearGradient(a, b, c, d))}
     cv.radialGradient = cv.rG = cv.createRadialGradient =  function rg(){
     var g=G(arguments)
     g[0]=g[0]||  200
     g[1]=g[1]||  200
     g[2]=g[2]||  100
     g[3]=g[3]||  250
     g[4]= g[4]|| 250
     g[5]= g[5]|| 800
     return this.context.createRadialGradient(  g[0],  g[1],   g[2],  g[3], g[4],  g[5] )
     }

     */

    cv.radGradSample=function(){
        var grd = this.rG()
        addColorStop(grd, 0, 'r')
        addColorStop(grd,.15, 'b')
        addColorStop(grd,.2, 'r')
        addColorStop(grd,.5, 'y')
        addColorStop(grd, 1, 'b')
        this.fillStyle(grd)
        this.fillRect()
        return this}
    cv.growingSun=function(){var that = this

        var a=0,
            b=1000,
            grd

        var fn =  function(){

            a += 1
            b -= 2

            grd = that.rG( 200, 200, a, 290, 270, b)
            grd.addColorStop(.1,'Yellow')
            grd.addColorStop(.3,'Red')
            grd.addColorStop(1, 'Violet')
            //  gradient = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
            that.fillStyle( grd )
            that.fillRect()
        }
        $.ev(1, fn)
    }
    cv.pattern = cv.createPattern = function(im, pat){
        //im = im || $.img('me')[0]
        var pattern  = this.context.createPattern( im,  pat || 'repeat' )
        return pattern }
    cv.testPattern=function(){

        var that =this

        $.i('me',function(img) {

            var pattern = that.pattern(img[0],'repeat')

            that.fillStyle(pattern).fillRect()
        })
    }


    /*
     xGr.S=xGr.stop=function(n,c){var gr=this,g=G(arguments)
     if(N(n)){gr.cS(n, oO('c',c))}
     if(A(n)){_.e(g, function(g){gr.stop(g[0],g[1])})}
     return gr
     }
     */




    RADGRAD=function(){z()
        d= $.c('y', 500)
        c = $.c('y', 500).A()
        c.context.f(
            c.context.radGrad(50, 50, 50, 50,50,200).stop([.2,'o'],[.6, 'r'],[ .8,'g'])
        )
        c.fr()
    }



};grads()


pixels=function(){



    cv.gD=cv.getData = function(x,y,w,h){
        //historic.. dont delete ! data = x('G', X, Y, w, h).res
        var g=G(arguments),
            x=g[0] || 0,
            y=g[1] || 0,
            w=g[2] || this.W(),
            h=g[3] || this.H(),
            data = this.context.getImageData(x,y,w,h)
        // data.h = data.height
        // data.w = data.width
        // data.d = data.data
        return data
    }



    cv.pD=cv.putData=function(data,x,y){
        x=x||0
        y=y||0
        this.context.putImageData(data, x, y)
        return this
    }

    cv.gP=cv.getPut=function(a,x,y){
        var g=G(arguments),
            a=g[0],
            x=g[1],
            y=g[2],
            data=this.gD.apply(this.context, a)
        if(g.n){this.clear()}
        return x.pD(data,x,y)
    }
    cv.pixelsNegative=function(){
        var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
            data = imgData.data
        for (var i=0;i<data.length; i+=4){
            data[i]   =  255 - data[i];
            data[i+1] =  255 - data[i+1]
            data[i+2] =  255 - data[i+2]
            data[i+3] =  255
        }
        this.pD(imgData) //  this.pD(data,0,0)
    }
    cv.pixelsInvert=function(){
        var imgData = this.gD(), data = imgData.data
        for (var i = 0; i < data.length; i += 4) {
            data[i]     = 225 - data[i];
            data[i + 1] = 225 - data[i + 1]
            data[i + 2] = 225 - data[i + 2]

        }
        this.pD(imgData)
    }
    cv.pixelsGrayscale=function(){

        var imgData = this.gD(),
            data = imgData.data

        for (var i = 0; i < data.length; i += 4) {

            var avg = (data[i] + data[i +1] + data[i +2]) / 3;

            data[i]     = avg
            data[i + 1] = avg
            data[i + 2] = avg

        }

        this.pD(imgData) //  this.pD(data,0,0)

    }
    cv.pixelsFade=function( ){


        var imgData = this.gD(), data = imgData.data

        for(var i=7; i<_.size(data) ; i+=4){data[i] = 90}

        this.pD(imgData)

        return el}
    PIXELS=function(){

        c = $.can('y',900,500).A()

        c.draw('me', 100,100)

        $.in(.2,function(){

            c.pD( c.gD(100,100,500,500), 120,120)

            c.f("r").fr(10,10,50,50)

            imgData = c.gD(10,10,50,50)

            c.pD(imgData,10,70)


        })


    }
    CANVASQLOADER=function(){$.C()

        Q(['me'], function(q){me=Q.i('me')
            c.drawImage(me,100,100)

            c.pD( c.gD(100,100,500,500), 120, 120 )

            c.f("r").fr(10,10,50,50)

            imgData = c.gD(10, 10, 50, 50)

            c.pD(imgData,10,70) })
    }
    PIXELTEST=function(){
        c=$.C();
        Q(['me'],function(q){me=Q.i('me')
            c.drawImage(me,100,100)
            d = c.gD(100,100,500,500)
            // c.pD(d , 120, 120 )
            zeros=nums=0
            _.e(d.data, function(d){ if(d==0){zeros++} else {nums++} })
            $l('zeros: '+ zeros + ' - nums: '+ nums )
        })
    }
    pixelTest=function(){canvasPlayground()
        get = function(){d = m.getData(0,0,400,200)}
        // g.putData(d, 0, 100)
        put=function(){g.context.putImageData(d,200,200)}
        putget=function(){ get(); put() }
        putget()
        change=function(num){get()
            data = d.data
            _.e(data, function(pixel, index){ d.data[index] = pixel + (num ||100) })
            put()}
        anim=function(){num = 0; $.ev(.1, function(){change(num++)})}
    }


//give scale cos(rads), skew:sin(rads)  ??
};pixels()
trans=function(){


    cv.nl= cv.norm=function(){var cv=this,ctx=cv.ctx()

        cv.sc( this.W()/10, this.H()/10)

        return this
    }
    cv.sc=   function(X,Y){var g=G(arguments)
        X= g.f|| 1
        Y= g.s|| X
        this.ctx().scale(X,Y)
    }
    cv.tr=  function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.translate(X,Y)}
    cv.rt=  function(r){
        var g=G(arguments),
            r=g[0]||1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)
    }
    cv.al=function(al){
        this.opacity(al)
        return this

    }

    cv.tf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.u){return setTransform(2,0,0,2,0,0)}
        this.ctx().setTransform(a,c,e,b,d,f)
        return this
    }



    TRANS=function(){

        z()

        x = $.c('y', 1000,800)
        y = $.c('u', 400)

        x.$$(function(){  x.fit('me')  })

        x.fit('me')

        identity=function(x){ x.stf(1,0,0,1,0,0) }


        rotate=function(x,a){ identity(x); x.rt(tRad(a))  }

        rotateByAngle=function(px,py,a){var x,y
            x=(px*cos(a))-(py*sin(a))
            y=(py*cos(a))+(px*sin(a))
        }

        rotateAroundZero=function(px,py,r){var x, y,a='angle'
            x=(px * cos(PI/4))-(py*(sin(PI/4)))
            y=(py * cos(PI/4))+(px*(sin(PI/4)))}

        transformEquations=['x=ax+cy+e','y=bx+dy+f']

        //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
        //x=x+e,y=y+f
        //to scale, use a,d and set others to 0
    }

};trans()

texty=function(){


    cv.font=function(f){
        this.ctx().font = $l( HTML5.font(f) )
        return this
    }


    cv.strokeText = function(t,X,Y){var g=G(arguments),
        t=g[0],
        X=g[1]||100,
        Y=g[2]||X

        this.ctx().strokeText(t,X,Y)

        return this

    }


    cv.fillText = function(t,X,Y){
        var g=G(arguments),
            t=g[0],
            X=g[1]||100,
            Y=g[2]||X
        if(g.p){
            this.tx(t,X,Y,'-')
            this.tx(t,X,Y)}
        else this.ctx().fillText(t,X,Y)
        return this
    }

    cv.mT= cv.measureText = cv.measure = function(t){
        return this.context.measureText(t)
    }

    cv.tW= cv.textWidth = function(t){return parseInt(this.measureText(t).width)}

    cv.centerHorizontalText=function(text, height){

        this.fillText(  text,
            this.W()/2 - this.textWidth(text)/2,
            height
        )

        return this}

}; texty()

drawin=function(){


    cv.dI=cv.drawImage = function(i){
        var cv=this, ctx = cv.ctx(), g=G(arguments),o

        g[1] = N( g[1], 0 )
        g[2] = N( g[2] || 0 )
        ctx.drawImage.apply(ctx, g)
    }
    cv.dr= cv.draw=function(i){var  cv=this, g=G(arguments)

        $.i(g.f, function(i){
            g[0] = i[0]
            cv.drawImage.apply(cv, g)
        })
    }
    cv.fit=function f(i, x,y) {var cv=this
        i= i || 'me'
        x = N(x,0)
        y = N(y,0)
        cv.draw(i, x, y,cv.W(), cv.H())
        return cv
    }
    cv.crop=function (x1,y1,x2,y2){var cv=this, ctx=cv.ctx(),i
        i= cv.toDataURL()
        if(A(x1)){
            return cv.crop(
                x1[0], x1[1], x1[2]-x1[0], x1[3]-x1[1]
            )}
        cv.dr(i, x1, y1, x2,y2, 0,0, cv.W(), cv.H())
        return cv
    }
    cv.scaleImCen=function(i, s ){
        var  w= this.W(),  h= this.H(), s= s||1
        this.draw(i,
            w * s/-2 + w/2,
            h * s/-2 + h/2//+ w/2
            ,
            w * s,
            h * s)
    }
    cv.scaleImCenSpiralMe=function(){
        var scaleNum = 1,
            that =this
        _.t(100, function(){

            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })
    }
    cv.scaleImCenSpiral=function(){
        var scaleNum = 1, that =this
        _.t(100, function(){
            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })

    }
    cv.dC=function f(i,x,y){

        var that = this

        i = i||'me'
        x= x||100
        y=y||100


        if(U(x)){//draw img in center of can
            $.img(i,function(i){
                that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})}

        else {//draw it by specifying location of its center
            y=y||x
            $.i(i, function (i) {
                that.dr(i, x - i.W() / 2, y - i.H() / 2)})}

        return this}

    //draw it where u say, but as if its reg point was its center

    cv.drawRegCenter=cv.dC2=  function f(i,x,y){var that =this

        $.i(i,function(i){
            that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})
        return this}
    cv.Cd=function(a, x,y){
        var that = this

        a= a||'me'
        x= x||100
        y=y||100

        $.i(a, function(img){that.drawImage(
            img.src,
            x- img.W()/2,
            y-img.H()/2
        )
        })
    }

}; drawin()

CC=function(){
    //$.C()
    c= $.c('X', 1200,600, 100,100,'+')
    c.fit()
    c.draw('me')
    c.ln(tictactoe)
    $.in(2, function(){
        c.crop(100,100,900,500)
    })
}

TXC=function(){$.C()



    c.dr('me')

    c.paperBag()


}

shadow=function() {

    cv.shdC = function (c) {
        if (U(c)) {return this.ctx().shadowColor}
        this.ctx().shadowColor = oO('c', c)
        return this
    }

    cv.shdBl =   function (bl) {
        if (U(bl)) {return this.ctx().shadowBlur}
        this.ctx().shadowBlur = bl
        return this
    }
    cv.shdX =  function (oX) {
        if (U(oX)) {return this.ctx().shadowOffsetX}
        this.ctx().shadowOffsetX = oX
        return this
    }
    cv.shdY =   function (oY) {
        if (U(oY)) {
            return this.ctx().shadowOffsetY
        }
        this.ctx().shadowOffsetY = oY
        return this
    }
    cv.shd = function (c, x, y, n) {var cv=this
        cv.shdC(c)
        cv.shdX(x)
        cv.shdY(y)
        cv.shdBl(n)
        return cv
    }

    SHAD = function () {$.C()
        c.dr('me', 100, 100)
        c.shdC('b').shdBl(100).shdX(200).shdY(100)
        c.dr('me', 200, 200)
        c.shdC('r')
            .shdBl(100)
            .shdX(200)
            .shdY(100)
        c.shdC('g')
        c.dr('me', 0, 300)
        c.shd('p', 30, 200, 20)
        c.dr('guy', 400, 200)
    }

};shadow()

CAN=function(){

    var picHolder

    $.format()

    picHolder= $.sp().id('pics')

    s2.A(
        picHolder
    )


    $.getJSON('/img',   function(i){
        _.e(i, withImage)
    })


    function withImage(img){

        dataUrl = img.d
        can =   $.c(100, 100)
        can.click(function(){var mouse = $('#mouse')
            mouse.val('click')
            mouse.change()
            mug = img.d   })
        picHolder.A(can)
        can.fit(dataUrl)
    }

    s2.A(
        c=cv=  x = canvas = $.c('y',1000,800))
    //  $.ev(10, function(){x.bc()})

    s1.A($.lb('mouse'),

        /*
         $.scv('none','click','enter','leave','move').id('mouse').o(
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


         */
        $.label('global comp'),

        //scv.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
        //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
        $.bt('SAVE(sv)',function(){ x.sv() }), $.br(2),

        $.bt('CUT(dots)', function(){x.q.q.unbind()
            qi('mouse').v('none')
            x.dots()
        }), $.br(2),

        $.bt('RESTORE(R)', function(){x.R()}), $.br(2),
        $.bt('bc:change background color',function(){x.bc()}),$.br(2),
        $.bt('cir:make circle',function(){x.cir(100,100,100)}),$.br(2),
        $.bt('d:draw',function(){

            c.dr(
                $w['mug']||'me'

            )}), $.br(2),
        $.bt('dC:draw center',function(){
            cv.dC(window['mug']||'me')
        }), $.br(2),
        $.bt('me',function(){
            x.me()
        }), $.br(2),
        $.bt('sh1',function(){x.ln(sh1)}), $.br(2),

        $.bt('sh2',function(){x.ln(sh2)}),$.br(2),

        $.bt('tictactoe',
            function(){ x.ln(tictactoe) }), $.br(4),
        $.bt('sampLinGrad',
            function(){ x.sampLinGrad() }),$.br(2),
        $.bt('sampRadGrad',
            function(){  x.sampRadGrad()  }), $.br(2),
        $.bt('ctxx',
            function(){xxx('barney')}), $.br(2),
        $.bt('bads',
            function(){bad(x,200,8)  }), $.br(2),
        $.bt('coins',
            function(){coin(x,200,8)}),    $.br(2)
    )
}




cjs.toColor =toColor = tCl=function(n1,n2,n3,n4){

    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :
        $r('c', n1)
}

$.imageSizeFuncCan = function(image, size, func){//xc=
    var x = $.c(100, 100).C('X')
    if(image){ x.fit(image) }
    //if(size){  x.Z(size) }
    if(func){  x.click(func) }
    return x
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

        x = $.c('p',W(), H()).A()

    // x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)


    $.i('me',function(image){

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



cv.sun=function(a,b,s){

    s=s||1;

    this.rG(

        [  [a||0,b||a||0], s*100,  s*500],

        {'y':0,1:tCl('p',0)},

        600,

        600
    )


}




old=function(){


    cv.ball=function(b){b=b||{}

        var dir = b.d||false,

            px  = b.x||100, py  = b.y||100, rad = b.r||100,

            per = b.p||Math.PI* 2,

            ss = $r('c', b.s) ,
            fs = $r('c', b.f),
            lw = D(b.l)? b.l: 4

        return x.com('b',['a',px,py,rad,0,per,dir], {f:fs,s:ss,w:lw},'f','s')
    }


}

cv.paperBag= function(x, y, width, height, blowX, blowY){
    x=x||100
    y=y||100
    width = width||100
    height = height ||100
    blowX = blowX || 100
    blowY = blowY || 100

    var lx, ly;

    this.ctx().strokeStyle = 'Red'
    this.ctx().beginPath();
    this.ctx().moveTo(x, y);

    this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
    this.ctx().quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
    this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
    this.ctx().quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);

    return this

}


muggy=function(){

    cv.drawMug = cv.me = function me(interval){
        //randomly draw my face

        var that = this, g=G(arguments), args= g,

            interval = args[0] || 200

        if(that.drawMug.shouldDrawId){

            clearInterval(that.drawMug.shouldDrawId)

            that.drawMug.shouldDrawId = false}

        else{

            that.drawMug.shouldDrawId =  setInterval(function(){

                that.draw(  window['mug']||'me',  _.random( that.W()-200 ),  _.random( that.W()-200 )  )

            }, interval)}

        return this}
    cv.drawMug.shouldDrawId = false
    cv.fitMug = cv.mug= function(user){var that=this

        $.post('/mug', { u: user },  function(userMug){  that.fit(userMug)  })
        return this
    }



};muggy()

games=function(){


    testWarp=function(){z()
        s = stage = cjs.stage('black',500,500).tick().A()
        s.mug(function(bm){ m
            bm.sXY(.1).vXY(8,4).startMoving()
            bm.warpY(0,300,100).warpX(0,400,100)})}//easel
    testWarp2=function(){z()
        s = stage = cjs.stage('black',500,500).tick().A()
        s.mug(function(bm){  b=bm
            bm.sXY(.1).vXY(8,4).startMoving()

            bm.warp()
        })}
    testKillHitting=function(){

        s=cjs.stg()

        s.bm('me',0.3, function(b){b.drag().XY(100)})

        s.bm('sun',0.3, function(b){b.drag().XY(100)})

        s.bm('chicks',0.3, function(b){b.drag().XY(100)})

        s.bm('guy',0.8, function(b){guy=b
            guy.drag().makeMeAKiller()
        })





    }
    startStopButtons =function(){z(); var func
        b1= $.button('start!', function(){

            func = stage.on('tick', function(ev){e=ev
                mug.X(10, '+')})


        })
        b2=$.button('stop!',function(){


            stage.off('tick', func)
        })

        $.div().A(b1, b2   ).A()

        cjs.stage(600).tick().A().mug(0.2, function(bm) {mug=bm

            bm.XY(300).warp()

            SL(bm)

            // gun(  bm)

        })}

//it adds me and gives u two buttons.  just pass in a func
    startStopButtonsAbstract=function(f){z()

        $.div().A(

            b1 = $.button('start!', f),


            b2=$.button('stop!',
                function(){
                    bm.off(f)
                })

        ).A()

        s = cjs.stage(500).tick().A()
        s.bm('me', function(){

        })}


    testShootBullet=function(){

        s = cjs.stg()

        s.mug(.2, function(b){mug=b

            mug.startMoving(5,5).warp()

            $.kD('space', function(){

                mug.shootBullet()
            })

        })

    }
    shootBulletTimeBased = function(shooter){

        var stage =shooter.getStage(),

            w =stage.W(),
            h =stage.H(),

            bullet = cjs.circle(8,'white').XY(shooter.x+75, shooter.y)

        stage.A(bullet)

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

        bullet.fn = stage.timeStamp(bullet,
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

        var stage = shooter.getStage(),

            w=stage.W(),
            h=stage.H(),
            x=shooter.x,
            y=shooter.y,
            vx=shooter.vx,
            vy=shooter.vy,

            bullet = cjs.circle(8, 'red')
        stage.A(bullet)


        //start the bullet moving
        bullet.fn = stage.timeStamp(function(){
            //in thise cae i dont think i'm using the timestamp
            bullet.move()
        })


        //set bullet's velocity to same as the shooter
        bullet.vY( shooter.vy ).vX( shooter.vx )

        //the function is just returned
        /// so .on('tick', func) is called.  fn is just storing what .on returns  //not sure for what.. maybe to stop/cancel it (pause)
        //this is moving something up the screen (reverse gravity)
        bullet.fn = stage.timeStamp(   function(timeStamp){bullet.Y( timeStamp/5 ,'-')})



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
    cjs.Guy=Guy=function(x,y,vx,vy, radius ){

        radius=radius||10
        x=x||300
        y=y||300
        vx=vx||1;
        vy=vy||1

        var guy = cjs.circle(radius, 'green', 'red')

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

        var b= cjs.circle(40,'green').XY(x,y)
        if(N(vx)){b.vX(vx)}
        if(N(vy)){b.vY(vy)}

        return b.startMoving()
    }
    testGuy=function(){z() // cant set a var to 'guy' ???

        s = cjs.stage(600,300).tick().A()
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
    addMeWithVelocityAndIBounce = function(x,y,vx,vy,stage){

        z()

        x=x||100
        y=y||100
        vx=vx||20
        vy=vy||20

        stage = stage || cjs.stage(400,400).tick().A()

        $(stage.canvas).drag()

        stage.bm('me',function(b){me=b

            if(N(vx)){b.vX(vx)};
            if(N(vy)){b.vY(vy)}
            b.XY(x,y).bounce().startMoving()

        })
    }

    newAsteroid=function(){ // new Asteroid?
        var a = cjs.Asteroid();
        a.A();
        a.start()}
    cjs.Asteroid = Asteroid= function(  x,y,r,vx,vy, stage){

        var _r = _.random

        stage = stage || cjs.stage(1000,1000).tick().A()


        x= x|| _r( stage.W() + 20 )  //stage.W checks bounds and error!!?
        y= y|| _r( stage.H() + 20 )

        radius= r|| _r(10)+5

        vx=vx|| _r(100)/25-2
        vy=vy|| _r(100)/25-2

        var ast = {
            circle:  cjs.circle( radius, 'white' ).XY(x,y).vXY(vx,vy),
            radius: radius,
            x: x,
            y: y}



        ast.remove = function(){ return ast.circle.remove() }
        ast.globalToLocal =function(){ return ast.circle.globalToLocal()}

        ast.add =   function(){stage.A( ast.circle )}

        ast.push =  function(){aA.push(a)}

        ast.update =  function(){

            ast.circle.move()
            ///replace all below with ast.circle.acc()
            if(ast.circle.ax){
                ast.circle.vX(a.circle.ax, '+')}
            if(ast.circle.aY){
                a.c.vY(a.c.ay,'+')} // (accelerateY accY)

            if(ast.circle.x > stage.W() || ast.circle.x < 0 ){
                ast.circle.vX('-')
                ast.circle.aX *= -1 // aX('-')
            } //so it starts accelerating the other way AND simulteanously bounces (both horizontally)

            //here it does the same with y.  ok i should demo it!
            if(a.circle.y > stage.H()|| a.circle.y <0 ){
                a.c.vY('-')
                a.c.ay *=-1
            }}  //ah, its a friction.. it probably goes opposite the velocity.  hmmmm that's friction!
        //so this is reverseDirection, which will check if it also needs to reverse any friction-acceleration direction

        // ast.circle.cache(-20,-20,40,40)

        return ast}
//uses guy
//wraps a container around guy
    newAst=function(){
        var a=Asteroid(); stage.A(a.circle); a.start()   }
    ASTEROIDS2 = CIRCLE2=function(){

        stage =s=createjs.stage(800,600).tick().A();



        Asteroids = []

        container =   new createjs.Container()

        stage.A(container)

        g= Guy(300, 300, 1, 1, 40, 'yellow')

        stage.A(guy)

        guy.start() //startMoving?
        guy.warp()

        stage.on('stagemousedown', function(e){

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

        stage.tick(function(){

            _.each(Asteroids, function(ast, k){

                ast.update()

                _.each(container.children,
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

        stage =s=cjs.stage(800,600).tick().A()

        stage.A( container =   new createjs.Container() )
        stage.A(

            g = Guy(300, 300, 1, 1, 40, 'yellow')

        )

        g.start()

        g.warp()


        Asteroids = aA=[];

        _.times(10, newAst)

        stage.on('stagemousedown',
            function(e){

                var badGuy = Guy(
                    g.x(),g.y(),g.dx(),g.dy())

                container.A( badGuy )

                badGuy.start()

                g.vX((e.rawX- g.x)/10, '+')
                g.vY((e.rawY- g.y)/10, '+')

                if(g.vx>10){ g.vX(10)}
                if(g.vy>10){ g.vY(10)}

            })


        stage.tick(function(){
            var gx = g.x, gy=g.y

            _.each(Asteroids,
                function(a, k){

                    var ax=a.x , ay=a.y

                    a.update()

                    _.each(

                        container.children(),

                        function(b){
                            var bx= b.x,
                                by= b.y

                            if(ax > bx-10&& ax<bx+10&&ay>by-10&&ay()<by+10){

                                $.body().C('*')
                                a.remove();//aA[k]=null;_.compact(aA)
                            }
                        })



                    if(ax>gx-40&&ax<gx+40&&ay>gy-40 && ay<gy+40){g.al(.01,'-')}




                })})
    }
    MEBOUNCEGAME=function(){z()

        stage=createjs.stage(500).tick().A()

        g = Guy(100, 100)

        stage.A( g )

        g.keyControls()
        g.warp()  /// gotta steal back 'ctr'.. get it :)

        addMeWithVelocityAndIBounce( 100, 100, 2, 4, stage)


        stage.on('stagemousedown', function(){
            me.shootBullet()
            g.shootBullet()
        })


    }

////
/////
/////
//withBall = wB=function(f){qG('/ball',f)}

    withGodzilla=function(func){ //gz anything?
        $.post('/godzilla', func)}

// wMb(function(b){SL(b.wh(60).xy(100,400),'-')},s)//  wMb(function(b){SL(b.wh(60).xy(400,100),'+')},s)

    sunInACanvas=function(){

        return $.canvas('X',500).fit('sun')

    }


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

    SHOOTERCAN=function(){

        function startGame (){z()


            game=true
            Coins=[]
            Aliens=[]
            Bullets=[]
            can = $.canvas('yellow', 900, 500).A()

            shooter = new Shooter()

            shooter.draw()

            //   _.times(10,function(){Coins.push(Coin())})
            //   _.times(15,function(){Aliens.push(Alien())})


            setInterval(function(){

                shooter.update()


                can.clear()
                shooter.draw()
            }, 400)
        }
        function Shooter(){
            this.x= 100
            this.y= 200
            this.vx = 2
            this.vy = 2
            this.radius = 20

            this.update =  function(){
                this.x = this.x + this.vx
                this.y = this.y + this.vy}

            this.draw =function(){

                can.circle(this.x, this.y, this.radius, 'blue')

            }
        }
        updateScreen=function(){



            can.clear()

            shooter.draw()
        }
        updateGame=function(){

            shooterUpdate()

        }
        updateGameX=function(){

            if(game){
                shooter.vx += cap(-5,5)( (e.x - shooter.x)/300 )
                shooter.vy += cap(-5,5)( (e.y - shooter.y)/300 )
                Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
            }  else {

                alert('game over!')

                if((e.x>450)&&(e.y>290)

                    &&(e.x<450 + textWidth)

                    &&(e.y<290 + textHeight)){reload()}}

            can = $.canvas(800, 600)
            can.click(function(x,y){
                shooter.vx+= cap(-5,5)((x-shooter.x)/300)
                shooter.vy+= cap(-5,5)((y-shooter.y)/300)
                Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
            })


            b= bad(x).d()
            c= coin(x).d()
            g= guy(x)

            I(function(){

                x.X();
                b.update().draw();
                g.update().draw()

            }, 30)




            // _.each(cat(Bullets, Coins, Aliens), function(a){a.draw(); a.update()})
        }
        startGame()
    }



}; games()

b2d.p()

df.b=function(){var g=G(arguments),o
    o=g.A?{hs:g.f}:g.f||{}
    o.hs=o.hs||[]
    o.i = o.i || 'me'
    return o
}

df.h=function(o){
    o=o||{}
    if (U(o.v)) {
        o.v = [[-100, 50], [0, -50], [100, 0]]
    }
    //o.v= _.m(o.v, function(v){v=V(v);return [v.x,v.y]})
    o.c = o.c || 'p'
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.a = _.tN(o.a)
    o.r = N(o.r, 40)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w || 100)
    o.d = N(o.d, 0.5)
    o.b = N(o.b, 0.5)
    o.f = N(o.f, 0.5)
    o.s = D(o.s) ? o.s : 0
    o.o = N(o.o, 1)
    o.q = D(q) ? o.q : true
    return o
}



b2d.oDef = function(o){o=o||{}
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.w =  N(o.w, 50)
    o.h =  N(o.h, 50)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    return o
}

b.rec= function (c, W, H, x, y, a) {var b=this,w=b.W(), g=G(arguments, 'k'),
    o, fD, p, f

    if(g.OO_){g.e(function(g){b.rec(g)});return b}
    if(g.A){return $a(b,'rec',g)}
    if(g.O){o=g.f}
    else {
        if(N(g.f)){g.ush('z')}

        o={c:g[0], w:g[1], h:g[2], x:g[3], y:g[4], a:g[5] }

    }

    b2d.oDef(o)
    o.k = o.k || g.k
    fD = b2d.fD( b2d.pH().box(o) )
    if (o.s || g.n) {
        fD.isSensor = true;
        o.al = N(o.al, 0.8)
    }

    fD.d(o.d || .5)
    f = b.f(fD)
    f.K(o)

    if(o.c!==0){
        // f.g=w.g.h().rec(o)
        if(g.p){
            f.g= w.g.h().rec(o) }//  f.g= w.g.h().rec(o) //this for but: (does something important)
        else {
            f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
            f.bS(  f.g  ) }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
        // f.bS(f.g)
    }
    return f

}



cjs.iCt=  function(ct){
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
}

cjs.M=function(a){
    var m= new cjs.Matrix2D()
    if(N(a)){m.rotate(a)}
    return m
}

cjs.Gx= cjs.gx=   function(a){return new cjs.Graphics(a)}


cjs.rulers=function(){
    $.d('b', 100, 100).al(.3).dg()
    $.d('r',100,300).al(.3).dg()
}

cjs.iH=  function(h){ return O(h) && h.graphics }



cir=function(){


    $H= $h= function(){var g=G(arguments),
        h = new cjs.Shape(), //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
        o= g.O? g.f:
            g.N_? ( N( g[3] )? // 'c-C-l' pattern
            { x:g.f, y:g.s, C: g.t, l:g[3]} : { x:g.f, y:g.s, c: g.t, C:g[3], l:g[4]} ) :
                // 'c-C-l' pattern
                N(g.s)? { C:g.f, l:g.s } :
                { c:g.f, C:g.s, l:g.t }
        h.XY( N(o.x,0), N(o.y,0) )
        h.c( o.c || 'z', o.C || 'w', o.l ||  8 )
        if(o.C){h.C(o.C)}
        if(N(o.l)){h.l(o.l)}
        if(g.p){h.dg()}
        return  h
    }


    h.dc= function(x,y,r){var h=this,gx=h.graphics,g=G(arguments),o
        h.cp() // i kinda like how it stroke-connects my cirs
        if(g.A){return $a(h,'dc',g.f)}
        if(g.OO_){g.e(function(c){ h.dc(c) })
            return h}
        o = g.O?g.f: g.$?{r:g.f}: {x:g.f,y:g.s,r:g.t}
        gx.dc(N(o.x,0),N(o.y,0),N(o.r,50))
        return h
    }

    $Cir=   function () {var g = G(arguments),
        o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}: {x:g.f,y:g.s,r:g.t}
        return $H(o.c,o.x,o.y).dc(o.r)
    }
    h.cir= function () {var h = this, gx = h.graphics, g = G(arguments), o
        //h.ef().es()
        //if (g.O_ && A(g.s)) {_.e(g.s, function(c){h.cir(_.x(c, g.f))}); return h }
        o = g.O ? g.f :
            N(g.t) ?  {x:g.f,y:g.s,r:g.t, c: g[3], C: g[4], l: g[5]} :
                N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
                    g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]}:
                    {c:g.f,C:g.s,l:g.t}
        h.c(o)
        if(o.bf){
            if(N(o.bf)){o.bm = 'me'}
            if(F(Q)){
                h.bf(o.bf, function(){
                    h.dc(o)
                })
            }
            else {
                o.tf = o.tf || null
                h.bf(o.bf, o.tf).dc(o)
            }
        }
        else {h.dc(o)}
        h.alpha = N(o.al, 1)
        return h
    }

    ct.cir = function (c, r, x, y) {
        var g=G(arguments)
        alert('ct.cir')
        return $Cir(c, r, x, y).a2(this)
    }
    BMC=function(){W()._(function() {
        h = w.i.h(0,0,'+')
            .cir({r: 150, bf: 'me'})
            .cir({x: 500, y: 200, r: 100, bf: 'me'})
    })}

    CHICKBALLS=function(){
        W(1200,1200)._(function(){
            _.t(14, function(){
                w.D(R(1100,50),R(1100,50))
                    .cir({bf:'chicks',r: 120})
            })})
    }
}; cir()

b.$h=function(){
    var h = $H()
    this.bS(h)

    h.c.apply(h, G(arguments))
    return h
}



HAIRBALLS=function(){W(400,400)._(function(){

    //cjs.rulers()

    _.t(8, function(){
        var b= w.D(R(100,50),R(100,50),'b',10)
        b.$h('x','x',1189).c('x','x',200)
            .bf('sun',[0,.6,10,10,-40,200])
            .cir(10)
        // <- b.C({c:'x', al:.4} )
    })

    $.d('b', 100,100,100,100).drag()

})}


COOLBALLS=function(){W(400,400).C('w')._(function(){
    //cjs.rulers()
    _.t(8, function(){
        var b= w.D(R(100,50),R(100,50),'b',50)
        b.$h('x','X',1)
            .c('x','X',1)
            .bf('sun', [0, .9, 1, 1,-40,2])
            .cir(50)
    })
})}




//!!!!
CANVASBMFILLBALLS=function(){W(400,400).C('w')._(function(){
    //cjs.rulers()
    w.p(0,0,10).stat()
    _.t(8, function(){w.D(R(100,50),R(100,50),'b',30)})
    w.$$(function(){
        _.t(8, function(){
            var b= w.D(R(100,50),R(100,50),'b',30)
            b.$h('x','X',1).c('x','X', 1).bf(w.s.cv0).cir(30)
        })
    })
    w.i.T(200,100, '$$ me')
})}




CANTFBALLS2=function(){W([400,400],{w:'U'}).C('w')._(function(){
    //cjs.rulers()
    w.p(0,0,10).stat()
    _.t(8, function(){w.D(R(100,50),R(100,50),'b',30)})

    $.ev(3, function(){

        var b= w.D(200,200,'b',80)
        b.$h('x','X',1).c('x','X', 1).bf(
            w.s.cv0,
            cjs.m2d(
                .6,.1,.1,.6, -40, 180
            )
        ).cir(80)

    })
})}
TEXTBALLS=function(){W([400,400],{ }).C('w')._(function(){
    b= w.D(200,200,'b',80)
    b.gx = b.gx || w.g.ct()
    b.gx.qB('chicks').rC().sXY(.1).Y(30)
    nice = w.i.T(0,140, 'nice', 100, 'o' )
    b.bS(nice)
})}


cjs.m2d=function(a,b,c,d,e,f){
    if(U(c)){
        return new cjs.Matrix2D(1,0,0,1, N(a,0), N(b,0) )
    }
    return new cjs.Matrix2D(

        N(a,1),
        N(b,0),
        N(c,0),
        N(d,1),
        N(e,0),
        N(f,0)
    )
}


MAT2D=function(){
    /*
     a Scales the drawing horizontally
     b Skew the the drawing horizontally
     c Skew the the drawing vertically
     d Scales the drawing vertically
     e Moves the the drawing horizontally
     f Moves the the drawing vertically
     */

}
h.pol = function (V, c, C, l) {var h = this, g = G(arguments), o
    //array must come first b/c its an obj
    o = A(g.f) ? {v: g.f, c: g.s, C: g.t, l: g[3]} : O(g.f) ? g.f : {}
    b2d.oDef(o)
    h.ef().es()
    h.c(o)
    if (o.bf) { h.bf('me', function () { h.lt(o.v).cp() }) }
    else { h.lt(o.v).cp() }
    return h
}



h.col= h.fs= function(){var h=this,gx= h.graphics,g=G(arguments)
    gx.fs.apply(gx,g)
    return h
}

h.z= h.clr = function () {
    this.graphics.clear();
    return this

}




h.c= h.f = function (c, C, l) {var h = this, gx = h.graphics, g = G(arguments), o

    o = g.O ? g.f : g.m? {c: '*'} : g.f == '**' ? {c: '**'} : g.f == '***' ? {c: '***'} :
        g.u? {c: 'z', C: 'w', l: 6} :
            // 'c-C-l'
            N(g.s)? {c: g.f, l: g.s} : g.N_?{l: g.f,C:g.s} : {c:g.f,C:g.s,l:g.t}

    if(A(o.c)){
        if (N(o.c[1])){o.l = o.c[1]; o.c = o.c[0]}
        else if (N(o.c[0])) { o.l = o.c[0]; o.C = o.c[1]}
        else { o.l = o.c[2]; o.C = o.c[1];o.c = o.c[0]} }

    if(A(o.C)){  o.l = o.C[1];o.C = o.C[0]}

    if(o.c == 0){         gx.f(null);         o.c = 'X' }
    if(o.C == 0){    gx.s(null);o.C = 'X'}
    if(o.c == 00){gx.f(null);gx.s(null); o.c = 'X';o.C = 'X'}
    if(o.c == '*'){o.c = $r()}
    if(o.C == '*'){o.C = $r()}
    if(o.c == '**'){o.c = $r();o.C = $r()}
    if(o.c == '***'){o.c = $r();o.C = $r();o.l = R(20)}


    if (S(o.c)) { gx.f(oO('c', o.c)) }
    if (S(o.C)) { gx.s(oO('c', o.C)) }
    if (N(o.l)) { h.l(o.l) }
    if (o.lf) {o.lf = O(o.lf) ? o.lf : {}

        if (o.r) {
            o.r =  N(o.r,0)
            o.x =  N(o.x,0)
            o.y =  N(o.y,0)
            o.lf.x1 = N(o.lf.X1) ? o.lf.X1 :  N(o.lf.x1,0) + o.x - o.r
            o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 :  N(o.lf.y1,0) + o.y - o.r
            o.lf.x2 = N(o.lf.X2) ? o.lf.X2 :  N(o.lf.x2,0) + o.x - o.r
            o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 :  N(o.lf.y2,0) + o.y + o.r
        } /*
         $l('r: ' + o.r)
         $l('x: ' + o.x)
         $l('y: ' + o.y)
         $l('x1: '+ o.lf.x1)
         $l('y1: '+ o.lf.y1)
         $l('x2: '+ o.lf.x2)
         $l('y2: '+ o.lf.y2)

         */

        h.lf(o.lf)
    }


    if (o.rf) {
        o.rf = O(o.rf) ? o.rf : {}
        o.c = [2, 'z']
        if (o.r) {
            o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
            o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
            o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
            o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
            o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
        }
        h.rf(o.rf)
    }


    if (o.ls) {
        o.ls = O(o.ls) ? o.ls : {}
        if (o.r) {
            o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
            o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
            o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
            o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
        }
        h.ls(o.ls)
    }


    if (o.rs) {
        o.rs = O(o.rs) ? o.rs : {}
        if (o.r) {
            o.rs.x1 = _.tN(o.rs.x1) + o.x
            o.rs.y1 = _.tN(o.rs.y1) + o.y
            o.rs.x2 = _.tN(o.rs.x2) + o.x
            o.rs.y2 = _.tN(o.rs.y2) + o.y
            o.rs.r2 = _.tN(o.rs.r2) + o.r
        }
        h.rs(o.rs)
    }
    if (o.bs) { h.bs(o.bs) }
    if (o.bf) { h.bf(o.bf)}

    return h
}


h.C= h.s = function (C, l) {var h = this, gx = h.graphics
    gx.s(oO('c',C))
    if(N(l)){h.l(l)}
    return h

}


h.l= h.ss = function (l, b, c) {
    var h = this, gx = h.graphics;
    gx.ss(l || 1, b, c)
    return h

}

h.bs = function (i) {
    var h = this;
    h.graphics.bs(i);
    return h

}

h.ef = function () {var h = this, gx = h.graphics

    gx.f()
    return h


}

h.es = function () {
    var h = this, gx = h.graphics
    gx.es()
    return h

}

h.cp = function () {
    this.graphics.cp();
    return this
}

h.lt = function (x, y) {
    var h = this, gx = h.graphics, v
    if (A(x) && O(x[0])) {
        return h.lt.apply(h, x)
    }
    if (N(x)) {
        gx.lt(x, y);
        return h
    }
    _.e(arguments, function (v) {
        v = V(v)
        h.lt(v.x, v.y)
    })
    return h
}

h.mt = function (x, y) {
    var h = this,
        gx = h.graphics, g = arguments, x = g[0], y = g[1], v
    if (A(g[0]) && O(g[0][0])) {
        _.e(g, function (v) {
            h.mt.apply(h, v)
        });
        return h
    }


    if (N(x)) {
        v = V(x, y);
        gx.mt(v.x, v.y)
    }

    else {
        v = V(_.f(g))
        h.mt(v.x, v.y)
        _.e(_.r(g), function (v) {
            v = V(v)
            h.lt(v.x, v.y)
        })
    }

    return h
}

// BITMAP FILL  !!!!!!


h.bf= function(){var h=this, gx=h.graphics, g=G(arguments), tf

    if(!F(Q)){

        if(A(g.s)){g.s = cjs.m2d.apply(cjs, g.s)}
        tf = g.s || cjs.m2d(R(500),R(300))

        if(S(g.f)){
            gx.bf( Q.i(g.f), null, tf )
        }

        else if(O(g.f)){
            gx.bf(g.f, null, tf )
        }

        return h
    }

    if(S(g.f)){
        $.i(g.f, function(i){
            gx.bf(i[0])
            if(F(g.s)){ g.s(h) }
        })
    }
    else if(g.O_ && A(g.f.hs)){
        $.i(g.f.i|| 'me', function(i){
            gx.bf(i[0])
            if(F(g.s)){ _.e(g.f.hs, g.s) }
        })
    }
    else { gx.bf(g.f, null, g.s) }
    //h.ef()
    return h
}

h.bV=function(o){var h=this, g=G(arguments), o
    o = g.A? {hs:g.f}:  g.f || {}
    o.hs = o.hs||[]
    o.i = o.i || 'me'

    if(F(Q)){
        $.i(o.i, function(i){
            h.bf(i[0])
            _.e(o.v, function(v){
                h.lt(v)
            })//
            h.cp()
            h.ef()
        })
        return h
    }


    h.bf( o.i )
    _.e(o.v, function(v){
        h.lt(v)
    })

    return h

}
h.bC= function(o){var h=this;
    return h.bf(o, function(h1){ h.dc(h1) })
}
//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
h.bfR= h.bmR= h.bR=function(o){var h=this;

    if(F(Q)){
        h.bf(o, function(h1){
            h.rec(h1)

        })

        return h
    }
    /*

     h.bmR1= function(o){var h=this;
     o=df.b(o)
     $.i(o.i,
     function(i){_.e(o.hs,
     function(g){
     h.bf(i[0])
     h.rec(g)
     h.ef() })
     })
     return
     }
     */
    h.bf(o.bf  )

    h.rec(o.hs)
    _.e(o.hs, function(r){ w.rec(r.w, r.h) })

    return h
}
w.bfR=function(){var w=this, g=G(arguments), b, h,o
    o = S(g.t)? {x: g.f, y: g.s, i: g.t, w: g[3], h:g[4], c:g[5]} :
    {x: g.f, y: g.s,  w: g.t, h:g[3], c:g[4]}
    o.i = o.i || 'sun'
    o.c = o.c || 'y' // can be removed
    b =   w.D(o.x, o.y, o.c, o.w, o.h)
    h= w.g.h().al(.5)
    if(o.c){h.c(o.c)}
    h.bf(o.i)
    h.rec(o.w, o.h)
    b.bS(h)
    return b
}
BMF1=function() {W()

    //h.bC
    w.i.h(50, 200, '+')
        .bC({hs: [ {r:80}, {r:50, x:100}, {r:100, x:400}]})


    //h.bf
    w.i.h(800,100, '+')
        .bf('me', function (h) { h.dc([ 80 ], [90, 0, 68]) })


    //h.bV
    w.D(200, 300).pol({
        v: [[0, 100], [0, -100], [200, -150], [200, 150]],
        c: 'y', C: 'w', l: 5,
        bm: 1
    })


    /*
     b =   w.D(600,300, 'r', 100,300)
     h= w.i.h().bR({hs:[{w:100,h:300}]})
     b.bS(h)
     */

    w.bmR(600, 300, 'b', 100,300)

    w.bmR(300, 300, 100,300)






    w.i.h(350, 150, '+')
        .pol({v: v1, bf: 'me'})
    w.D(950, -200)
        .pol({c: 'o', C: 'z', l: 25, bm: 1, v: v1})
    w.D(500, 200)
        .pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]], c: 'y', C: 'r', l: 5, bm: 1})
    //h.bV //w.pol

    w.pol(400,500, [[-100, 0], [0, -100], [100, -50], [0, -50]])
    w.bg.bm('me', 6.2, function(bm){ bm.X(500) })

}
BMF=function() {W()._(function(){

    //h.bC


    w.i.h(50, 200, '+')
        .bf( 'chicks' )

        .dc( {r:80}, {r:50, x:100}, {r:100, x:400} )






    //h.bf
    w.i.h(800,100, '+')
        .bf('guy')
        .dc( [ 80 ], [90, 0, 68] )

    //h.bV
    w.D(200, 300).pol({
        v: [[0, 100], [0, -100], [200, -150], [200, 150]], // c: 'y',C: 'w',l: 5,
        bf: 'guy'
    })
    b =   w.D(600,300, 'r', 400,300)
    h= w.bg.h().al(.5)
    h.bf('sun')
    h.rec({w:400,h:300})
    b.bS(h)
    w.bfR(600, 300, 'guy', 100,100,'X')
    w.bfR(300, 300, 'sun', 100,100,'z')
    w.bfR(300, 300, 'chicks', 100,100)
    w.D(500, 400).pol({
        v: [[-100, 0], [0, -400], [100, -50], [0, -50]],
        c: 'z', C: 'r', l: 5,
        bf: 'sun'
    })
    //w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
    w.D(550, 200).pol({
        c: 'o', C: 'z', l: 25,
        bf: 'chicks',
        v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
    })

    //h.bV //w.pol
    w.D(400, 500).pol({ v:[[-100, 0], [0, -100], [100, -50], [0, -50]]})



    w.bg.Bm('me').sXY(6.2).X(500).al(.2)


})}
BFREC=function(){W()

    w.i.h(200,300).dg()
        .bf('me',
        function(h){
            h.rec({w:500,h:200})})
    w.i.h().dg().bf('me',
        function(h){
            h.rec({w:500,h:200})
            w.D(600,300,'b', 500,200).bS(h)
        })
}
POL=function(){W()

    w.D(500,400,[-100,0],[0,-100],[100,50],[0,-70])

    w.D(500,430).pol('r', [[-100,0],[0,-20],[40,50]]  )

}
ct.h=function(){var ct=this,
    h=$H.apply($H, arguments)
    ct.A(h)
    return h
}
w.$h = function(){
    return this.i.h.apply(this.i, arguments)
}
// h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
h.rec=   function(){var h=this, g=G(arguments), o

    if(g.OO_){g.e(function(g){h.rec(g)});return h}

    o = g.O? g.f:
        S(g.s)? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]}:
            g.S_? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
                N(g.t)?  {x:g.f, y:g.s, w: g.t, h: g[3], c: g[4], C: g[5], l:g[6]} :
                {w:g.f, h:g.s,c: g.t, C: g[3], l:g[4] }

    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w= N(o.w, 50)
    o.h= N(o.h, o.w)
    if(o.i){

        h.bf(o.i, function(){
            o.i = null
            h.rec(o)

        })
        return h
    }
    if(o.c){ h.c(o) }

    if(o.lf){h.lf({
        c1 : o.c1||'z', c2 : o.c2||'w',
        s1 : 0, s2 : 1,
        x : o.x-o.w/2, y : o.y-o.h/2, x2 : o.x-o.w/2, y2 : o.y+o.h/2})}

    h.dr( -o.w/2+o.x, -o.h/2+o.y, o.w, o.h)

    return h
}
ct.rec=function(){var ct=this, g=G(arguments), o, ct2, h
    if(g.OO_){g.e(this,'rec'); return this} //it doesnt know that's this! (scope talk)
    o =  g.S_ ? { c:g.f, w:g.s, h:g.t, x:g[3], y:g[4], rt:g[5] }:
        g.N_? { w:g.f, h:g.s, x:g.t, y:g[3], rt:g[4] }: g.f

    o.al = N(o.al,1)
    o.rt = N(o.rt, 0)
    o.c = o.c || 'z'; o.C = o.C || 'w'
    ct2 = ct.ct(); h = ct2.h(o.x, o.y); h.rt(o.rt); h.c(o).al(o.al)
    if(o.lf){h.lf(o)} else if(o.rf) {h.rf(o)}
    if(o.bm){ h.bR({i: 'me', hs:[o]}) }
    else {h.rec(o.w, o.h)}
    if(g.p){ct.drag()}
    return ct2
}
h.dr=function(){var h=this,gx=h.graphics,g=G(arguments),
    o=g.O?g.f:
        N(g.t)?
        {x:g.f,y:g.s,w:g.t,h:g[3]} :
        {w:g.f,h:g.s}
    o.x = N(o.x,0)
    o.y = N(o.y,0)
    o.w= N(o.w,100);
    o.h= N(o.h, o.w)
    gx.dr(o.x, o.y, o.w, o.h)
    return h
}
b.pol=function(){var b=this,w=b.W(),g=G(arguments), fs, n, arr, o, vs

    b2d.mini()

    //-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]]
    // b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}

    if(g.u){return b}

    if( iP(g.f) && U(g.s)){
        return b.pol({v: g.f})
    }

    if( S(g.f) && iP(g.s) && U(g.t)){

        return b.pol({c: g.f, v: g.s})
    }

    if(iF(g.f)){g.f=g.f.rV()}
    else if(iB(g.f)){g.f.fs(b);return b}
    if(g.A){o= S(g.f[0])?
    {c:g.f[0],v:_.r(g.f)}:
    {v:g.f}}
    else {
        o=g.O?g.f:
            g.S_?
                (g.t?
                {c:g.f, v:g.r}:
                {c:g.f, v:g.s}):
            {v:g}}

    o=df.h(o)
    if(iP(o.v)){o.v=o.v.vs()}
    n = b.n()
    if(O(o.v[0][0])){
        _.e(o.v, function (v) {
            b2d.sep(b,v)
        })}

    //pass in 2 or more objs->
    else {b2d.sep(b,o.v);
        o.v=[o.v]
    }

    //pass in one object
    //->  ['r', [],[],[] ]//->  [[],[],[]]
    //pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
    //just pass in loose verts//-> [],[],[]
    //same two as above but also nested in wrapper array.. so just ONE pam
    //if (o.X) {b.clear()}
    //the NEW fixts
    fs=_.f(b.fs(),b.n()-n) //each of only the NEW fixts
    _.e(fs, function(f){
        f.d(o.d).r(o.b).fr(o.f)
        if(o.s){
            f.m_isSensor=o.s?true:false
            f.sen(1)}
        f.K(o.k)
        f.C(o.c, o.C, o.l)
        if (o.lf) {f.bS(w.s.h().lf(o).lt(o.v))}
        if (o.rf) {
            f.bS(w.s.h().rf(o).lt(o.v))}
    })

    o.i = o.i || o.bf
    if(o.i ){
        h = w.g.h()
        h.bV( o )
        b.bS( h )
    }

    //b.cir('y', 10);b.cir('z', 6)
    return fs.length>1?fs:fs[0]
}

ct.pol=function(){var ct=this,g=G(arguments), p,

    h=ct.h()

    if(N(g.f)){
        h.XY(
            g.shift(),
            g.shift())}
    p=$a(h,'pol',g)
    if(g.p){p.drag()}
    return p
}
grad=function(){


    b2d.grad=function(o){o=o||{}
        o.c1 = oO('c',o.c1||'z')
        o.c2 = oO('c',o.c2||'w')
        o.s1 = N(o.s1)
        o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1)
        o.y1 = N(o.y1)
        return o
    }
    cjs.lg= h.lg=function(){var g=G(arguments), o//h=this, gx=h.graphics,

        if(g.A){
            return cjs.lg.apply(null, g.f)}
        o= g.O? g.f:
            _.x({c1:g.f, c2:g.s},
                N(g[5])?{x1:g[2],y1:g[3],x2:g[4],y2:g[5]}
                    :N(g[4])?{y1:g[2],x2:g[3],y2:g[4]}
                    :N(g[3])?{x2:g[2],y2:g[3]}:{y2:g[2]})
        o.c1 = oO('c', o.c1 || 'z');
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = N(o.s1,0); o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1,0); o.y1 = N(o.y1,0)
        o.x2 = N(o.x2,0)
        o.y2=N(o.y2)? o.y2: N(o.r)?o.r*2: 100
        return o
    }
    h.lf=function(){var h=this, gx= h.graphics, g=G(arguments),o
        o = cjs.lg(g)
        gx.lf([o.c1,o.c2],[o.s1,o.s2],o.x1,o.y1,o.x2,o.y2)
        return h
    }
    h.rg=function(o){var h=this,g=G(arguments),
        gx=h.graphics,
        o


        if(A(g[0]) && A(g[1])){

            gx.rf(
                [oO('c', g[0][0]), oO('c', g[0][1])], g[1],  g[2],  g[3], g[4], g[5], g[6] ,g[7]
            )
            return h
        }


        o = O(g[0])?g[0]:


            S(g[1])? _.x({c1:g[0],c2:g[1]},
                N(g[7])?
                {x1:g[2], y1:g[3], r1:g[4], x2:g[5],y2:g[6],r2:g[7]}
                    :N(g[5])?
                {x2:g[2],y2:g[3],r1:g[4],r2:g[5]}
                    :N(g[4])?
                {x2:g[2],r1:g[3],r2:g[4]}
                    :N(g[3])?
                {r1:g[2],r2:g[3]}
                    :
                {r2:g[2]})

                : S(g[0])?
            {c2:g[0]}
                : {}

        b2d.grad(o)

        o.x2 = N(o.x2, o.x1)
        o.y2 = N(o.y2, o.y1)
        o.r1 = N(o.r1, 1);
        o.r2 = N(o.r2, 100)

        return o}
    h.ls=function me(){var h=this, gx= h.graphics, g=G(arguments),o
        if(A(g[0])){return me.apply(h,g[0])}
        o= h.lg.apply(h, g)
        gx.ls([o.c1, o.c2],[o.s1,o.s2],o.x1,o.y1,o.x2,o.y2)
        return h}
    h.rf=function me(){var h=this, gx=h.graphics, g=G(arguments), o
        if(A(g[0])){return me.apply(h, g[0])}

        o = h.rg.apply(h,g)

        gx.rf(
            [o.c1,o.c2],
            [o.s1,o.s2],
            o.x1, o.y1, o.r1,o.x2, o.y2, o.r2)
        return h


    }
    h.rs=function me(){var h=this, gx=h.graphics, g=G(arguments),o
        if(A(g[0])){return me.apply(h,g[0])}
        o=h.rg.apply(h,g)
        gx.rs([o.c1,o.c2],[o.s1,o.s2], o.x1,o.y1,o.r1,o.x2,o.y2,o.r2)
        return h}
    w.lG=function(c,c2){var w=this,o
        o={c1:c2||'z', c2:c||'r', x1:0,y1:0,x2:0,y2:0}
        _.x(o,R()?(R()?{y2:w.h}:{x2:w.w}):
            R()?(R()?{x1:w.w,y1:w.h}:{x2:w.w,y2:w.h}):
                R()?{x1:w.w,y2:w.h}:{y1:w.h,x1:w.w})
        w.bg.h().lf(o).dr(0,0,w.w,w.h)
        w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)

        return w
    }




    b2d.p()
    s.cannonBall=function(x,y){var s=this,h
        h=s.h(x,y)
        h.rf('a', 'z',18 ).dc(18).ef()
        return h}
    s.basketBall=function(x,y){var s=this
        return this.h(x,y).rf('w', 'o',18 ).dc(18).ef()
    }
    s.beachBall=function(x,y){var s=this
        return s.h(x,y)
            .rf('b','r',18).dc(18).ef()
    }
    s.snowBall=function(x,y){var s=this
        return s.h(x,y).rf('a','w',18).dc(18).ef()
    }
    w.badGuy=function(x,y){var that=this,w=this
        b = w.D(x, y,'d',60).K('badGuy').bS(
            w.s.h(x,y)
        )
        b.draw=function(frame){var b=this
            b.sp().rf(['r','g'],
                [frame[0], frame[1]], 60).dc(60)
        }
        b.h = b.health = 100
        b.cl(function(){b.h--})
        funcId = I(function(){
            b.draw( frameByHealth(b) )
            if(b.h<=0){clearInterval(funcId);b.kill()}
            function frameByHealth(b){
                if(b.h<0){b.h=0}
                if(b.h>100){b.h=100}
                if(b.h<50){ return [ 1-((b.h/50)),1 ] }
                else {return [0, 1-((b.h-50)/50)  ]} }
        }, 300)
        return b
    }

    RADIANTBALLS=function(){s=cjs.S('a')
        b1=s.cannonBall(100,200)
        b2=s.basketBall(100,100)
        b3=s.beachBall(50,50)
        b3=s.snowBall(50,300)
    }
    DIRTYBALLS=function(){W({  grav:0 })

        w.dirtyBall=function(x,y,stop1,stop2){
            return  this.gradBall(x, y, 60,'z','w',  stop1, stop2 )

        }

        w.gradBall(200,100,60,'z','w'  )
        w.dirtyBall(350,100,  0,  .9 )
        w.gradBall(500,100,60,'z','w',  0,  .6 )
        w.gradBall(650,100,60,'z','w',  0,  .3 )
        w.gradBall(800,100,60,'z','w',  0,  .1 )
        w.gradBall(350,300,60,'z','w',  .3,   1 )
        w.dirtyBall(500,300,  .6,   1 )
        w.dirtyBall(650,300,    .9,   1 )
        w.dirtyBall(800,300 ,  1,   1 )

    }
    STATUSBALL=function(){W({  grav:0 })
        b = w.D(500,300,'r',60).bS( w.s.shape(500,300)  )
        num = 0
        dif = .1
        shape = b.sprite
        shape.rG(['r','y'],[0, num],
            0,0,0,0,0,60)
            .dc(0, 0, 60)
        $.ev(.1,function(){
            num += dif
            if(num>=1){ num=.9; dif= -.1 }
            if(num<=0){ dif = .1 }
            shape.rf(['r','y'],[0, num],
                0,0,0,0,0,60)
                .dc(0, 0, 60)
        })
    }
    SWITCHBALL=function(){W({g:0})

        b=w.D(500,300,'r',60)

        b.bS(
            w.s.h(500,300)
        )


        b.draw=function(frame){var b=this
            b.sp().rf(
                ['r','y'], [frame[0],frame[1]],
                0,0,0,0,0,60
            ).dc(60)
        }

        frames=[
            [0,.1],
            [0,.3 ],
            [0,.6],
            [0,.9],
            [0,1],
            [.3,1],
            [.6,1],
            [.9,1],
            [1,1]    ]


        curr=0

        $.ev(1,function(){
            b.draw( frames [curr] )
            curr++
            if(curr == 9){curr=0} })

    }
    HEALTHBALL =function(){
        W({g:0})
        w.badGuy(500,300)
    }
    SWITCHBALLWORKSBUTTOOCOMPLICATED=function(){w=b2d.W({  grav:0 })

        advanceN=function(n, dif){
            n += dif
            if(n>=1){n=.9; dif*= -1}
            if(n<=0){n=0; dif*= -1}
            return {n:n, dif:dif}}


        switchBall1=function(x,y){var  dif=.1,n1=0,n2= 0,
            b=w.ball(x,y, 60).bindSprite2( w.s.shape(x,y) )

            I(function(){n2 = advanceN(n2); drawGrad()}, 100)
            function drawGrad(){
                b.sprite.rG(['r','y'],[n1, n2],  60 ).dc(0, 0, 60)}

            function advanceN(n2){

                n2 += dif
                if(n2>=1){n2=.9; dif*= -1}
                if(n2<=0){n2=0; dif*= -1}; return n2}

        }


        switchBall2=function(x, y){
            var   ball= w.ball(x,y, 60).bindSprite2( w.s.shape(x,y) )



            ball.drawGrad = function(n1,n2 ){return this.sprite.rG(['r','y'],
                [n1, n2],  60 ).dc(0, 0, 60)}

            ball.animGrad1=function(){

                var that=this,
                    dif=.1,  n2=1,  n1=0

                I(function(){
                        var res = advanceN(n1, dif)

                        dif = res.dif

                        n1 = res.n

                        that.drawGrad(n1,n2)},

                    300)}


            ball.animGrad2=function(){

                var that=this,  dif=.1

                I(function(){
                        var res = advanceN(n1, dif)
                        dif = res.dif
                        n1 = res.n
                        that.drawGrad(n1)},
                    300)

            }


            ball.animGrad1()




        }




        switchBall1(100,100)


        switchBall2(300,100)



        w.s.back.linGrad('u','p')
        w.s.HUD.bm('me', function(bm){  me= bm.sXY(.3).XY(1150, 550).drag()  })




    }
    TRIPLESTAGE= function(){w=b2d.W({  grav:0 })
        b = w.ball(500,300,60)
        b.bindSprite2( w.s.shape(500,300)  )
        num = 0
        dif = .1
        shape = b.sprite
        shape.rG(['r','y'],[0, num], 60)
            .dc(0, 0, 60)
        w.s.HUD.bm('me', function(b){   b.XY(300).drag()   })
        w.s.back.bm('guy', function(b){   b.XY(200).drag()  })
        w.s.back.linGrad('b','z')
    }
    RADIANT=function(){W().P()

        p.lD(1).warp()

        $.space(
            function(){
                p.polyBul()}
        )

        badGuy=w.badGuy(
            400, 200).warp().den(.1)

        $.ev(.2, function(){
            w.s.pen('badGuy health: ' + badGuy.health)
        } )
    }

};grad()
cjs.iT = function (t) {
    if (O(t)) {
        return (t.textBaseline)
    }
}
ct.cX = function () {
    return this.St().cen().x
}
ct.cY = function () {
    return this.St().cen().y
}
b.C= function(c){
    this.fs(  function(f){  f.C(c)  }  )
    this._col = c
    return this
}
f.C= function () {var f = this, b = f.B(), w = b.W(), g = G(arguments), o,
    h
    o = g.O? g.f :
    { c: g.f, C: g.s, l: g[2] }
    o.c = (o.c=='*')?$r() : (o.c||'b')
    o.C=o.C||o.c
    f.removeSprites()

    h = f.iC()?
        // if circle?
        w.s.h().cir(f.pX(), f.pY(), f.rad(),o.c,o.C,o.l):
        // if poly
        w.s.h().pol(f.rV(), o.c,o.C,o.l)

    f.bS( h )
    b.i = h
    return f
}
f.bS=function(){var f=this, b=f.B(), w= b.W(), s=f.S(),g=G(arguments),o,j

    if(g.S_){
        Q(function(){
            var bm = Q.b(g.f)
            f.bS(

                $Ct().A(
                    bm.XY(f.pos().x, f.pos().y).rC())
            )
        })
        return f
    }

    o = cjs.iDO(g.f)?

    {  j:g.f, rt: g.s, x: g.t, y:g[3], o:g[4]  } : g.O?g.f : {}

    f.sprites = f.sprites || []

    o.x= N(o.x,0)
    o.y= N(o.y,0)
    o.rt= N(o.rt,0)
    o.o= N(o.o,1)

    o.al = N(o.al,1)
    j = o.j.al(o.al)
    w.g.A(j)
    f.sprites.push(j)

    T.t(function(){

        j.XY(b.X()+o.x , b.Y() + o.y )
        j.rt(b.rt() + o.rt)

    })
    return f
}
BS=function(){W()._(function(){
    x= w.D(600,300,'x',200,100)
    f = x.cir({r:100, x:300, c:'r'})
    me = Q.b('me').rC()
    f.bS(me, 0, f.pX(), f.pY())
})

}
w.txC =function(){var w=this
    $.ev(2, function(){
        w.e(function(b){
            b.fs(function(f){f.C($r())})
        })
    })

}
w.sH=function (h) {var w = this

    if ( U(h) ) {
        return w.H * w.s.scaleY }
    w.s.scaleY = h / w.H
    return w
}
b.St= b.S=  b.stg=function(){ return this.W().s }
f.S=  f.stg = function(){ return this.W().s }
w.C= function(c){var w=this
    w.bg.h().c(c||$r() ).dr(0,0,w.w,w.h)
    return w
}
w.l=w.dl= function(){var w = this, g = G(arguments), o,i
    o = S(g[0]) ?
    { c : g[0], x1 :g[1], y1 : g[2], x2 : g[3], y2 : g[4] }
        :
    { x1 :g[0], y1 : g[1], x2 : g[2], y2 : g[3] }
    i = g.p? w.fg:  g.n? w.bg:   g.d? w.g:  w.i
    o.c = o.c || (g.p?'p':g.n?'r':g.d?'d':'b')

    return i.h()
        .c(10, o.c)
        .mt(o.x1, o.y1)
        .lt(o.x2, o.y2).K('dev line')


}
w.dr = function (c, x, y, W, h){var w=this,g=G(arguments),o
    o=g.S_?{c:g[0], x:g[1],y:g[2], w:g[3],h:g[4]}
        :{x:g[0],y:g[1], w:g[2],h:g[3]}
    _.x(o,g.p?{g:w.fg,c:o.c||'p'}:
        g.n?{g:w.bg,c:o.c||'r'}:
        {g:w.hud,c:o.c||'b'})
    o.g.h().rec(o)
}
w.dbCross=function(x, y){var w=this, c = w.cen()
    x = N(x, c.x)
    y = N(y, c.y)

    w.dr('t', -10+x,  -140+y, 20,300, '-')
    w.dr('t', -150+x,  -10+y, 300,20, '-')
    w.dot('r', x,y)

    return w

}
b.horizCenter=function(){var b=this
    //-> b.X('hC')
    b.X(b.W().hW)
    return b
}
//b.g=function(){ return this.f().g }
i.dot=function(){var i=this
    i.getStage().dot(i.X(),i.Y())
    return i
}
i.flash = function(){var i=this
    i.opacity(0)
    $.in(.3,function(){i.opacity(1)})
    return i}
w.stats=function(n){var w=this
    _d = $.d(400,600,w.W,0,'+').A($.h1('stats')  )

    w.mdq(function(fx){_f=_d._fix=fx;_b=_f.B()})

    if(n==0){ z(upd) }

    else {
        $.ev(N(n,.2), upd)
    }

    return w

    function upd(){var f,b; if(_d._fix){
        f=_d._fix
        b=f.B()

        _d.T(

            'ty: '+ (b.iD()? 'dyn':'stat'),
            'x: '+ b.X(),
            'y: '+ b.Y(),
            'fK: '+f.K(),'bK: '+b.K(),
            'sen: '+ f.sen(),
            'd: ' + f.d(),
            'fr: ' + f.fr(),
            'r: ' + f.r(),
            'bMass:'+ parseInt(f.B().mass() ),
            'bNum:'+ f.B().n()
        )

    }

    }
}
w.devGrid=function(){var w=this
    _.t(12,function(i){
        w.l(i*200, 0,i*200, w.h )
        w.l(i*200, 0,i*200, w.h ,'-')
        w.l(0, i*200, w.w, i*200  )
        w.l(0, i*200, w.w,i*200,'-')
    })
    return w
}
ct.C= ct.backgroundColor=function(c){var ct=this
    $(ct.canvas ).C(c)
    return ct
}
COL=function(){W();
    b=w.S(600,300,'w',200);
    $.in(function(){
        b.dyn().f().C('z')
    })
}
DEV=function(){ W([1200, 600, 1400, 800], {g: 50, t: 0}).stats()
    //  w.dr(100, 100, 100, 100, '-')
    //  w.dr(100, 200, 100, 100, '+')

    w.dl('r', 0, 100, 5000, 5000, '-')

    w.dl('p', 0, 200, 5000, 2000)

    w.dl('b', 0, 300, 5000, 3000, '+')

    wh = w.S(400, 350, 'w', [[300, 220, '-']])

    or = w.S(400, 200, 'o', 300, 50)

    pi = w.S(400, 500, 'x', 300, 50)

    y = w.ship(150, 200).damp(1, 10).rot(90).lD(0).rot(120).lV(1);

    w.track(y, 600, 300, '!')

    b = w.D(700, 200, 'b', 100)

    me = w.me()




}
w.flash=function(){
    var w=this,s= w.s
    s.flash.apply(s, arguments)
    return w
}
filters=function(){
    BlurFilter = blF=function(bx,by,q){
        return new createjs.BlurFilter(bx,by,q)
    }
    AlphaMaskFilter = aMF=function(mask){
        return new createjs.AlphaMaskFilter(mask)
    }
    forMaskFilter = trx = function(n){
        var g=G(arguments),
            a=[]

        //for making mask filter
        if(g.n){
            return 'rgba(0,0,0,' +  g[0]||0  + ')'   }

        _.each(g,function(n){
            a.push(trx(n,'-'))})

        return a
    }
    cjs.blurFilter = function(x,y,c){return new cjs.BlurFilter(x,y,c)}
//T$ = cjs.Ticker  //dep
    ColorFilter = clF=function(a,b,c,d,e,f,g){return new createjs.ColorFilter(a,b,c,d,e,f,g)}
    ColorMatrixFilter = clMF=function(m){return new createjs.ColorMatrixFilter(m)}
    ColorMatrix = CM=function(){
        var c=new createjs.ColorMatrix()
        c.b=c.adjustBrightness
        c.c=c.adjustColor
        c.C=c.adjustContrast
        c.h=c.adjustHue
        c.s=c.adjustSaturation
        c.cl=c.clone
        c.cc=c.concat
        c.m=c.copyMatrix
        c.r=c.reset
        c.A=c.toArray
        c.S=c.toString
        return c}
    BLUR = blr=function(){

        wMb(function(b){

            var ag=0,rg=100,sp=0.04

            z()

            s=St(500).drg().a().c('x').a(b.xy(100).cc())

            tt(function(e){v=sin(ag+=sp)*rg
                b.cc('+').fl([blF(v,v,2)])
                s.u(e)})
        })
    }
    MASK = msk=function(){

        sss=function(){var args=G(arguments)

            z()


            stage = SuperStage(600).a()


            if(args.f){

                stage.a(args.f)

                _.each(args.r,
                    function(arg){

                        if( F(arg) ){ arg(args.f) }

                    })
            }

            return stage}



        wMb(function(b){

            sss(b, TR)


            b.fl([

                aMF(
                    Gx().lf(
                        trx(1,0),[0,1],0,0,200,200
                    ).dr0(400).H().cc(400).cc('*')
                )

            ]).cc(400)})

    }
    COLOR = clr=function(r){var ag=0,rg=100,sp=0.04

        wMb(function(b){z();

            s=St(500).drg().a().c('X').a(b.xy(100))
            b.cc().fl([r=='g'? clF(.3,1,.3,1,0,0,0,0)
                :r=='b'? clF(.3,.3,1,1,0,0,0,0)
                :r=='r'? clF(1,.1,1,1,0,0,0,0)
                :r=='rg'? clF(1,1,.1,1,1,1,20,0)
                :clF(1,.1,1,1,0,0,0,0)]).cc('+')
        })
    }
    COLORMATRIX = cmx=function(){

        var g=G(arguments);
        g[0]=g[0]||'a'

        wMb(function(b){b.xy(100).cc();
                _e(g,function(mf){b.clMF(mf,'+')})},

            St(500).drg().a().c('X') )
    }
    BLURFILT=function(){z()

        stage = createjs.stage('black', 800).tick().A()
        shape = new createjs.Shape().XY(100)

        stage.A(shape)

        shape.graphics.f("red").dc(0,0,50)

        var blurFilter = new createjs.BlurFilter(50, 50, 10)

        shape.filters = [blurFilter]

        var bounds = blurFilter.getBounds()

        shape.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height)

        shape.startMoving()
        shape.vx = 1
        shape.vy = 1
    }
    BLURFILT2=function(){z()

        stage = createjs.stage('black', 800).tick().A()



        stage.bm('me',

            function(bm){

                var blurFilter = new createjs.BlurFilter(5, 10)

                bm.filters = [blurFilter]

                var bounds = blurFilter.getBounds()

                bm.cache(-50+bounds.x, -50+bounds.y, 400+bounds.width, 400+bounds.height)


            }
        )




    }
    BLURFILT3=function(){z()

        $l('welcome to BLUFILTER3')
        $l('here we will attempt an animated blur filter')

        stage = createjs.stage('black', 800).tick().A()

        stage.bm('me',

            function(bm){ bm.XY(100,300).drag()

                var blurFilter = $blurFilter(5, 10)

                bm.filters =  [ blurFilter ]

                var bounds = blurFilter.getBounds()

                bm.cache(-50+bounds.x, -50+bounds.y, 400+bounds.width, 400+bounds.height)

                var blurAmount=0,

                    blurMultiple=40,

                    speed=0.06

                createjs.Ticker.on('tick', function(){
                    $l('tick')

                    var blur = Math.sin(blurAmount += speed) * blurMultiple;
                    bm.filters = [$blurFilter(blur, blur, 2)]
                    bm.updateCache()

                })


            })


















    }

};filters()
//cjs.chalk=function(t,c){if(O(t)){alert('check code'); t='x: '+t.x+', '+'y: '+ t.y}; return cjs.T(t,"26px Arial", c||"w").XY(550,150)}
/*
 w.i.bm('me', function(bm){
 bm.XY(300).sXY(.2)
 w.i.dot(300,300)
 })*/
SHADOW=function(){W().P()


    p.lD(1).warp()
    badGuy=w.badGuy(400, 200).d(.1).warp()
    $.in(1, function(){
        p.sprite.shad("y", 0, 150, 300)
        badGuy.sprite.shad('o', 40, 40, 40)
    })
    $.space(function(){
        p.polyBul()
    })
    $.ev(.2,function(){
        // w.s.pen('badGuy health: ' + badGuy.health)
    })
    $(w.s.back.canvas).C('p')
    s= w.s.back
    s.bm('me' , function(bm){
        bm.drag().shad('blue', 125,  125,  50)
            .XY(100,100).sXY(.6)
    })

    s.bm('guy', function(bm){
        bm.drag().shad('r', 100,100,10)
            .XY(300,200).sXY(.6)})
    s.bm('me' , function(bm){
        bm.drag().shad("z", 25, 25, 50)
            .XY(500,100).sXY(.6)
    })
}
more=function(){
    cjs.dia=function self(width, height, fc,sc){
        fc=fc||'green'
        sc=sc||'white'
        width = width || 100
        height = height || width
        halfwidth = width/2
        halfheight = height/2
        var h = new createjs.Shape()
        h.graphics.f(fc).s(sc)
            .mt(0, -halfheight)
            .lt(-halfwidth,0).lt(0,halfheight)
            .lt(halfwidth,0).lt(0,-halfheight)
        return h}

    CENH=function(){W()

        h.rec(100,100,100,100,'y')
        h.rec(200,200,100,100,'b')

        h.c('o').polyStar(300,100,
            50,5,0.6,-90)

        h.c('w','z')
            .roundRectComplex(400,300,
            300,300, 20,20,30,40 )

        h.cir(500,200,40,'b','x',10)
    }
    OVS=function(){St()
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




    // s.B = function(x,y){return this.ct(x,y).drag() }

    /*
     $a1=function(ob, g, c){

     ob.apply(c||ob,  g)

     }


     $a = function(gx, met, g){

     gx[met].apply(gx, g)

     }


     $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.app=function(met,g){var gx=this

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     }
     */
    h.C2= function (C, l) {var h=this,gx=h.graphics,g=G(arguments)
        o=O(g[0]) ? g[0]
            :
        {C:[0], l:g[1]}
        gx.s(o.C?  oO('c',o.C): null)
        if(N(o.l)){h.l(o.l)}
        return h
    }

    h.copy=h.same=function(){return $h(this)}
    //******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
    h.rc = h.roundRectComplex = function () {
        var h = this, gx = h.graphics
        gx.drawRoundRectComplex.apply(gx, arguments)
        return h
    }
    h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
        var h = this, gx = h.graphics,

            g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]

        o = N(g[3]) ? {
            x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]} :

            N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

                O(g[0]) ? g[0] : {}

        o.a = _.tN(o.a)
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.p = cjs.cap(o.p, 0, .99)

        gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
        return h
    }
    h.drawPolygons = function (paths, C, c) {
        var h = this
        h.C(C)
        if (c) {
            h.c(c)
        }
        _.each(paths, function (p) {
            h.drawPolygon(p)
        })
        return h
    }

    h.de = h.ell = function () {
        var h = this,
            gx = h.graphics,
            g = G(arguments),
            o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
                N(g[0]) ? {w: g[0], h: g[1]} :
                    O(g[0]) ? g[0] : {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)
        gx.drawEllipse(o.x, o.y, o.w, o.h)
        return h
    }
    h.de2 = function (x, y, W, H, r) {
        var h = this
        h.de(-W / 2 + x, -H / 2 + y, W, H, r)
        return h
    }
    h.rr = function () {
        var h = this,
            gx = h.graphics,
            g = G(arguments),

            o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
                N(g[1]) ? {w: g[0], r: g[1]} :
                    N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
                        O(g[0]) ? g[0] : {}


        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)

        gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
        return h
    }
    h.rr2 = function (x, y, W, H, r) {
        var h = this
        h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
        return h
    }


    ROUNDREC = function () {
        St()
        h.c('b', 'r', 5).dc(100, 100, 100)
        h.dr(300, 200, 100, 50)
        h.dr2(500, 200, 100, 50)
        h.rr2(500, 200, 100, 50, 50)
        h.de2(500, 200, 100, 50)

        s.dot(100, 100)
        s.dot(300, 200)
        s.dot(500, 200)
        s.dot(500, 200)
        s.dot(500, 200)
    }


    h.drawPolygon = function (V, c, C, l) {var h = this, //h.drawConnectedLines =

        n = V.length
        h.c(c, C, l)

        _.e(V, function (v) {
            v.X = v.x
            v.Y = v.y
        })

        if (n >= 3) {
            h.mt(V[0]) //move to the FIRST//lineTo the REST
            $.in(n, function (i) {h.lt(V[i % n])})
        }

        //just a clever way to start from 1

        return h
    }


    h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        h.bezierCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.qt=    function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.arc = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        /*
         Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
         For example, to draw a full circle with a radius of 20 centered at (100, 100):
         arc(100, 100, 20, 0, Math.PI*2)
         */

        h.arc(x, y, r, startA, endA, aCW)

        return h
    }
    h.arc2 = function (x, y, X, Y, r) {
        var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
        gx.arcTo(x, y, X, Y, r)
        return h
    }


    b2d.cov = function(x,y,c,C,l,l2){var g=G(arguments),x=g[0],y=g[1],c=g[2],C=g[3],l=g[4],l2=g[5],

        o = N(c)? {x:x, y:y, a:c, c:C, C:l, l:l2}
            : N(x)? {x:x, y:y, c:c, C:C, l:l}
            : x,
        h = new cjs.Shape()

        b2d.oDef(o)

        h.XY(o.x,o.y).rot(o.a).c(o.c,o.C,o.l)

        if(o.d){h.drag()}

        return h
    }

    h.sC=function(){var h=this,gx= h.graphics,g=G(arguments)
        gx.sC.apply(gx,g)
        return h
    }

    //b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
    St=function(){z()
        s = cjs.stg(1200,600).A()
        h = $h(0,0).a2(s)
        SL(h)
    }
    cjs.RECTx= function(c, W, H, x, y, a){var  g=G(arguments),    ct = cjs.ct(), h, o; if(O(c)){o=c} else if(S(c)){o={ c:c, w:W, h:H, x:x, y:y, a:a } }
        o = b2d.oDef(o)
        h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot( o.a )
        if(o.bm){h.bm('me', function(){h.dr2(o.x, o.y, o.w, o.h)}); return h}
        if(o.rg){h.rg(o.c,o.C)}
        if(o.lg){h.lg(o.c,o.C)}
        h.dr2(o.x, o.y, o.w, o.h)
        cjs.recx=cjs.rectx= function self(wd, ht, c, C){var h,hW,hH
            wd=_.tN(wd,100)
            ht=_.tN(ht,wd)
            hW=wd/2
            hH=ht/2
            h=$h().c(c||'g',C||'w').mt(-hW,-hH)
                .lt(-hW,hH).lt(hW,hH).lt(hW,-hH).lt(-hW,-hH)
            return h
        }
        ct.artx = function(x,y,c,C){var g=G(arguments),ct=this,h

            y= N(g[1])?g[1]:x
            c= S(g[2])?oO('c',g[2]):null
            C= S(g[2])?oO('c',g[3]):c

            h = $h(x,y,c,C).a2(ct)

            if(g.p){h.drag()}
            return h}
        return h}
};more()

//third wheel, wagon hitch


old=function(){


}

b2d.p(); cjs=createjs; C$=createjs; T= cjs.Ticker
cjs.iDO= function(i){return O(i)&&F(i.getStage)}
eD.init=function(){
    var eD=this
    eD.initialize.apply(eD, arguments)
    return eD
}
$Bm= cjs.B= cjs.bm= function(){var g=G(arguments),   i=g[0], bm
    bm=new cjs.Bitmap(i)
    if(g.p){ bm.drag() }
    return bm}
i.St = i.S= i.st=  function(){return this.getStage()}
$St= function(){var st, g=G(arguments), cv
    //get by canvas ID
    cv = g.A? g.f[0]:
        //if you pass it a canvas OR a $canvas object
        O(g.f)? $(g.f)[0] :
            //create a new canvas
            $.c(g.f||'p',g.s||1200,g.t||600,g[3],g[4])[0]
    st = new cjs.Stage( cv )
    st.cv=   st.c=st.can= $(st.canvas)
    st.cv0=  st.cv[0]
    st.xc= st.cv0.getContext('2d')
    if(g.p){st.t()}
    return st.A()
    //.t()

}


$.fn.a2=function(el){el.A(this); return this}

$.St=function(){z()
    s = $St().t()
    s.bm('me', function(bb){
        b=bb.drag()
    })
    return s
}



$.dragStage = function (x, y) {
    s = $St('v',  '+')
    return $.dragFrame($(s.canvas))
}




DRAG=function(){z()
    $.dragStage()
}




$El= cjs.el = function(a){
    a=$(a)[0]
    return new cjs.DOMElement(a)
}


ELM=function(){z()
    d = $.d('r', 400, 400).A( $.ip() ).drag()

    el = $El( d )

    s = $St('y').t()

    s.A( el )
    // tw(el, [{x:300,y:300},2000])
    // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
}


preload=function(){

    q.f= q.l= function(fn){var q=this
        q.on("fileload", fn)
        return q}
    q.c= function (fn) {var q=this
        if(F(fn)){ q.on("complete", fn) }
        return q
    }
    q.b=  q.bm =function(i, ct, x, y){var bm = cjs.B( this.r(i) )
        if(ct){bm.a2(ct,x,y)}
        return bm
    }

    q.i=  q.r= function(i){
        i  = this.getResult(i)
        i.w= i.width
        i.h = i.height
        return i
    }

    q.$=function(i){
        return $(this.i(i))
    }

    q.m = function(){var q=this, g=G(arguments), _mf, mf
        // q.m:
// protosig:
//
// 'me',..
//
// {src:'me', id:'him'},..
//
// [ {src:*, id:*}, 'me',.. ]

        if(g.u){return q}
        _mf = g.A ? g.f : g
        mf = _.m(_mf,  function(item){
            return S(item)? {src:cjs.src(item),id:item} : item
        })
        q.loadManifest( mf )
        return q
    }
    Q=function(){
        var g=G(arguments),o,q
        o=g.F? {c:g.f}: {m:g.f,c:g.s}
        o.m = o.m || ['me','guy','sun','chicks','earth']
        q= new cjs.LoadQueue
        Q = q.c(o.c).m(o.m)
    }

    WQ=function(){var g=G(arguments),
        o=  F(g.t)? {ob: g.f, fn0:g.s, fn:g.t}:
            F(g.s)? {ob: g.f, fn:g.s}  : {fn: g.f}
        o.ob= o.ob||{}
        w=W(o.ob)
        if(o.fn0){o.fn0(w)}
        Q(o.ob.I||['me','guy','chicks','sun','flame','earth'],
            function(){o.fn(w)})
    }

    w._ = function(fn){
        Q(function(){
            fn(w)
        })
    }

    MF=function(){
        W().C('r')
        Q(
            ['me','guy','chicks','sun'],
            function(){
                w.C('g')
                w.i.A(
                    Q.b('me'),
                    Q.b('guy')
                )
            }
        )

    }
    TXWQ=function(){WQ({C:'r'}, function(){
        w.C('g')
        w.i.A(Q.b('me'), Q.b('guy'))  })
    }
    QTX=function(){
        WQ(function(){
            i=w.i.qB('me',0,0,3)
        })
    }

    WINDING=function(){W()._(function(){
        //$.header().A($.h1('grahics winding')).A()
        h= w.i.h().graphics.f("pink").dr(20,20,450,360)
            .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
            .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
        bm= w.i.qB('chicks').X(470).drag()
        bm.mask = h.same().X(470)
    })}

    QUEUEMUG=function(){W()._(function(w){
        ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
        // mug= s.bData( qu.gR("mug") ).drag()
        me = w.i.qB("me").drag()
    })}



}; preload()

ticker=function(){
    cjs.xL= T.s= function(){
        T.removeAllEventListeners()  } // u might say xTHIS but not thisX? i dont know what i am talking about


    /* TICKER
     paused : Indicates whether the ticker is currently paused.
     d       delta :  time since the last tick
     t       time : how much  since T  started
     r      runTime  : how much time has T been running for
     */

    T.p=function(){T.setPaused(false);return T}
    T.P= T.s= function(){T.setPaused(true);return T}
    T.$=function(){
        T.setPaused( T.getPaused() == false ? true : false )
        return T}

    T.t=   cjs.t =   function(fn){var g=G(arguments)
        if(g.F_){
            if(!g.n){fn()}
            return T.on('tick', fn) // T.addEventListener? return T?
        }
        return   g.n?  T.t('+') - T.t() :
            Number( (T.getTime(g.p?false:true)/1000).toFixed(2) )
    }
    T.i=function(){
        //indicates the target time (in ms) between ticks
        //default is 50 (20 fps)
        //Note: actual time between ticks may be more than specified,
        //  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
        return T.interval
    }
    T.f=  function(numTicks){var g=G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
        if(N(numTicks)){T.setFPS(numTicks);return T}
        return g.n?
            T.getFPS():
            T.getMeasuredFPS() //returns *ACTUAL* frames
        // / ticks per second//
        // Depending on performance,
        // this may differ from the target frames per second.
    }
    T.e= function( runTimePropReturnedInsteadOfTime ) {
        //Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
        T.getEventTime ( runTimePropReturnedInsteadOfTime )//df: false ( If true, the runTime property will be returned instead of time  )
    }
    T.m=function( ticks  ){
        return T.getMeasuredTickTime (ticks )} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
    /*
     // returns   The average time spent in a tick in milliseconds.
     //This can vary significantly from the value provided by getMeasuredFPS because it only measures the time spent
     // within the tick execution stack.
     Example 1: With a target FPS of 20, getMeasuredFPS()
     returns 20fps, which indicates an average of 50ms between the end of one tick and the end of the next.
     However, getMeasuredTickTime() returns 15ms.
     This indicates i there may be up to 35ms of "idle" time between the end of one tick and the start of the next.

     Example 2: With a target FPS of 30, getFPS() returns 10fps,
     which indicates an average of 100ms between the end of one tick and the end of the next. However,
     getMeasuredTickTime() returns 20ms.
     This would indicate i something other than the tick is using ~80ms
     (another script, DOM rendering, etc).

     */

    ct.t=  ct.oT=  function(fn){var g=G(arguments)
        if(F(fn)){if(!g.n){fn()}; return this.on('tick', fn) }
        else {T.on('tick', this); return this
        }
    }


    ONOFFTICK=function(){W({w:0})
        //will break if u change it
        fun = w.s.t(ball)
        $.in(3, function(){
            w.s.xT(fun)
        })
        function ball(){if(R(5)<1){ w.ball()}}


    }





    ct.xT=function(fn){
        this.off( 'tick', fn )
        return this
    }

}; ticker()

container=function(){
    $Ct=cjs.Ct=cjs.ct=function(a){return new cjs.Container(a)}
    ct.ct=function(x,y){var ct = this, g = G(arguments),
        x = g[0],  y = g[1]
        ct1=  $Ct()
        ct.A( ct1 )
        if (F(x)) {x(ct1, ct)}
        else if (N(x)) {ct1.XY(x, y)}
        if (g.p){
            cjs.bindSlide(ct1)}
        return ct1
    }
    ct.Ct=function(){
        this.ct.apply(this, arguments)
        return this
    }
    ct.bm=  ct.b=function self(i, sc, fn){var ct=this,g=G(arguments), o,
        bm
        o=g.F_? {fn:g.s, sc:1, i:i} :
            g.N_ ? {sc:sc,fn:fn, i:i} :
                N(g.s)? {i: g.f, sc: g.s, fn: g.t}:
                {i: g.f, fn: g.s, sc: g.t}
        o.i  = o.i || 'me'
        if (O(o.i)) { return ct.A( $Bm(o.i) ) }
        $.i(i, function(i){
            bm =$Bm(i[0]).a2(ct)
            if(!g.n){ bm.rC() }
            if(g.p){ bm.drag() }
            bm.sXY(o.sc)
            //bm.XY( i.W()/2, i.H()/2 )
            // works with stage i guess.. but fucks with 'container' - cant check bounds
            //   if(g.n){bm.XY(-1000,-1000) }
            if(o.fn){ o.fn(bm) }
        })
        return ct
    }
    ct.Bm=function(){
        this.bm.apply(this, arguments)
        return this
    }
    ct.W=function(w){var can= this.St().canvas
        if(U(w)){ return can.width }
        can.width = w
        return this
    }
    ct.H=function(w){var can= this.getStage().canvas
        if(U(w)){ return can.height }
        can.height = w
        return this
    }
    ct.abs=function(x, y){  var s=this
        alert('ct.abs')
        ct.can.abs(x, y)
        return s
    }
    ct.ch=   ct.e=   ct.ix= ct.sChI=  ct.sChI= function(fn,n){
        var ct=this,CH
        if(N(n)){ct.setChildIndex(fn,n); return ct}
        CH=[]
        _.e(ct.children, function(ch){ CH.push(ch)})
        if(U(fn)){return CH}
        _.e(CH, function(ch){
            fn(ch)
        })
        return ct
    }
    ct.E= ct.clr= function(){return this.e(function(i){i.rm()})}
    ct.Cv=function(){return this.St().canvas }
    ct.A=function(x,y){var ct=this,  g=G(arguments)
        if(U(x)){$('body').append(ct.Cv()) }
        else if( N(x) ){ $('body').append(ct.Cv()).abs(x,y)}
        else { g.e(function(ch){ ct.addChild(ch) }) }
        return ct
    }
    ct.cen= ct.pt= ct.M= function(){
        return V(this.W()/2, this.H()/2)
    }



    ct.bgI=function(i){var ct=this
        ct.bm(i, function(b){ct.ch(b,0)})
        return ct

    }


    ct.noAuCl= function(){
        this.autoClear=false;
        return this
    }
    ct.au=   function(au){
        this.autoClear=au?true:false;
        return this
    }

    ct.eMO=function(en){this.enableMouseOver(en?true:false); return this}

    ct.mc = function (x,y) {var ct = this, g = G(arguments),mc
        mc = cjs.Mc.apply(cjs,g)
        this.A(mc).XY(N(x,100), N(y,100))
        return mc}

    ct.N=function(n){
        var s=this; if(U(n)){return s.nextStage}; s.nextStage=n; return s
    }
    ct.u=function(){this.update();return this}
    ct.qB=  ct.bQ=function(name, x, y, sX,sY, rt){var b,g=G(arguments)
        b= Q.b(name)
            .XY(N(x,0), N(y,0))
            .sXY(N(sX,1), N(sY,sX||1))
            .rt(N(rt,0))

        if(!g.n){b.rC()  }
        if( g.p ){ b.drag() }
        this.A(b )
        return b
    }
}; container()



imgOb=function(){
    i.P=function(){return this.parent}

    i.X=function(x,dur){var i=this,g=G(arguments)
        if(U(x)){return i.x}
        i.x = g.p? i.x+x
            :g.n? i.x-x
            :g.m? i.x*x
            :g.d? i.x/x
            :     x

        return i
        //if (N(dur)) {tw([i], [{x: x}, dur]); return i}
    }
    i.Y = function (y, dur) {
        var i = this, g = G(arguments)
        if (U(y)) {
            return this.y
        }
        if (g.p) {
            y = this.y + y
        }
        else if (g.n) {
            y = this.y - y
        }
        else if (g.m) {
            y = this.y * y
        }
        else if (g.d) {
            y = this.y / y
        }


        if (N(dur)) {
            tw([this], [{y: y}, duration])
        }

        else {
            this.y = y
        }
        return this
    }
    i.XY = function (x,y){var i=this,g=G(arguments),v
        if(U(g[0])){return {x:i.x, y:i.y}}
        v=V(g[0],g[1])
        x= v.x
        y= _.tN(v.y, v.x)
        return i.X(x).Y(y)
    }
    i.W = function (a) {var i=this
        if(U(a)){
            return i.getBounds().width * i.scaleX
        }

        i.sX(i.scaleX * a /i.W())

        return i
    }
    i.H = function (a) {
        var i = this

        if (U(a)) {
            return this.getBounds().height * this.scaleY
        }

        this.sY(this.scaleY * a / this.H())

        return this

    }
    i.WH = function (w, h) {
        var i = this
        return this.W(w).H(h || w)
    }
    i.sX=function(n){var i=this
        if(U(n)){return i.scaleX}
        i.scaleX=n
        return i
    }
    i.sY = function (n) {var i=this
        if(U(n)){return i.scaleY}
        i.scaleY = n
        return i
    }
    i.sXY = function(x,y){var i=this,g=G(arguments),v
        if(U(g[0])){return {x:i.sX(),y:i.sY()}}

        v=V(g[0],g[1])
        x=_.tN(v.x)
        y=_.tN(v.y,v.x)
        return i.sX(x).sY(y)

    }
    i.kX = function (skewX) {
        if (U(skewX)) {
            return this.skewX
        }
        this.skewX = skewX;
        return this
    }
    i.kY = function (skewY) {
        if (U(skewY)) {
            return this.skewY
        }
        this.skewY = skewY;
        return this
    }
    i.kXY = function (x, y) {

        y = N(y) ? y : x

        return this.kX(x).kY(y)
    }
    i.rX = function () {var i=this,g=G(arguments),rX=g[0]
        if(U(rX)){return i.regX}
        i.regX = g.p? i.regX+rX : rX
        return i
    }
    i.rY = function () {var i=this,g=G(arguments),rY=g[0]
        if(g.p){i.Y(i.y+(rY-i.regY) )}
        if (U(rY)){return i.regY}
        i.regY=rY
        return i
    }
    i.rXY = function(){var i=this,g=G(arguments),
        x= _.tN(g[0]),
        y= _.tN(g[1],x)
        return i.rX(x).rY(y)
    }
    i.rt = i.rot = function () {
        var i = this, g = G(arguments), a = g[0]
        if (g.p) {
            return i.rT(i.rotation + _.tN(a, 1))
        }
        if (g.n) {
            return i.rT(i.rotation - _.tN(a, 1))
        }
        if (U(a)) {
            return i.rotation
        }
        i.rotation = a
        return i
    }

    i.bd= i.bounds=function(a,b,c,d){var i=this

        this.nominalBounds = new cjs.Rectangle(a,b,c,d)

        return this

    }
    i.al= function(al){var i=this
        if(U(al)){
            return i.alpha
        }
        i.alpha=al;
        return i
    }


    i.a2=function(ct, x,y){

        ct.A(this)
        if(N(x)){this.X(x)}; if(N(y)){this.Y(y)}
        return this
    }
    i.rC=      i.rCenter=function(){var i=this,g=G(arguments), x, y,hW,hH

        x=i.W()/2
        hW=x
        y=i.H()/2

        hH=y

        return (g.p)?
            i.rX(hW,'+').rY(hH,'+'):
            i.rXY(hW,hH)
    }
    i.rgc=    function(){var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
        return (g[0]===0)?
            i.rXY(0,0,(g.p?'+':null))
            : i.rXY(x,y,(g.p?'+':null))}//
    i.rZero=   function(a){var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
        if (g.p) {
            i.rX(0,'+').rY(0,'+')
        }//i.X(a, i.regX()-a, '+')
        else {i.rXY(0,0)}
        return i}//
    i.gL= i.gTL=function(x,y){var i=this
        if(O(x)){y= x.y;x= x.x}
        return i.globalToLocal(x,y)}
    i.hT= i.test=function(x,y){var i=this
        if(cjs.iDO(x)){return i.hT(i.gTL(x))}
        if(O(x)){y= x.y;x= x.x}
        return i.hitTest(x, y)}
    i.uM= i.underMouse=function(){var i=this, s=i.S()
        if(s.mouseInBounds){
            var pt = i.gTL(s.mouseX,s.mouseY)
            return i.hT(pt)}}
    i.tf=  function(){var i=this,g=G(arguments)

        if(U(g[0])){return [
            i.x,
            i.y,
            i.scaleX,
            i.scaleY,
            i.rotation,
            i.skewX,
            i.skewY,
            i.regX,
            i.regY
        ]
        }
        if( O(g[0]) && F(g[0].getTransform)){
            g[0]= g[0].getTransform()}
        i.setTransform.apply(  i, A(g[0]) ? g[0] : g)
        return i
    }
    i.$=function(fn){return this.on('click', fn)}
    i.$$=function(fn){return this.on('dblclick', fn)}
    i.xx= i.rm= i.remove =function(){var i=this
        i.parent.removeChild(i)
        return i} //cant delete 'remove' quite yet
    i.hide=function(){this.visible=false; return this}
    i.of=function(k){
        this._K = this._K || []
        return !k  || this == k ||  _.ct( this._K ,  k)
    }
    i.K=function() {var i=this, g=G(arguments)
        this._K = this._K || []

        if (g.u) {return this._K.join(' ') }

        if (g.O) {this._K(g.f.k); return this }


        _.eW(g.f, function (k) {


            if (!i.of(k)) { i._K.push(k)
            }


        })

        return this
    }


//i.of=function(k){return this.K()==k || this.K()==''}
    i.cX=  function(a){var i=this
        if(U(a)){return i.x + i.W()/2 }
        return i.X( a- i.W()/2)}
    i.cY =   function(a){var i=this,
        hH=i.H()/2
        return U(a)?i.y+hH:i.Y(a-hH)}


    i.sib=function(){return this.P().ch()}



    i.ix=function(n){var i=this, g=G(arguments)
        if(U(g[0])){return }
        i.P().setChildIndex(i, n)
        return i
    }
    i.toFront = function(){ return this.ix( this.sib().length-1 ) }
    i.within = i.inStage =  function(){var i=this,g=G(arguments), s=i.S(),wthnS

        wthnS = i.x > 0 && i.y > 0

        &&   i.x < (s.W()-100)  &&   i.y< ( s.H()-100 )

        if(g.n && !wthnS){ s.rm() }

        return wthnS
    }

    i.belowStg = function(){ return this.y > this.S().H() }

    i.dg= i.drag=function(){var i=this;SL(i);return i}


// ~ scroll
    i.tickX = function (fn) {
        var i = this
        cjs.t(function () {
            i.X(fn())
        })
        return i
    }
    i.tickY = function (fn) {
        var i = this
        cjs.t(function () {
            i.Y(fn())
        })
        return i
    }

    i.RT = function(){var i=this; RT(i);return i}
    i.bB= i.bindBody=function(b){var i=this
        cjs.t(function(){
            b.X(i.X())
            b.Y(i.Y())
            b.rot(i.rot())})
        return i}
    i.toR = i.moveRight = function (num) {
        num = num || 20
        this.X(num, '+')
        return this
    }
    i.toL = i.moveLeft = function (num) {
        num = num || 20
        this.X(num, '-')
        return this
    }
    i.toU = i.moveDown = function (num) {
        num = num || 20
        this.Y(num, '-')
        return this
    }
    i.toD = i.moveDown = function (num) {
        num = num || 20

        this.Y(num, '+')
        return this
    }
    i.keyControls = function (num) {
        var args = G(arguments), i = this
        if (args.P) {
            $.kD('left', function () {
                i.toL(num)
            })
            $.kD('right', function () {
                i.toR(num)
            })
        }
        if (args.N) {
            $.kD('up', function () {
                i.toU(num)
            })
            $.kD('down', function () {
                i.toD(num)
            })
        }
    }


    i.warpX = function (lo, hi, cush) {
        var i = this, wrp = M.wrp(lo, hi, cush)
        cjs.t(function () {
            i.x = wrp(i.x)
        })
        return i
    }

    i.warpY = function (lo, hi, cush) {
        var i = this, wrp = M.wrp(lo, hi, cush)
        cjs.t(function () {
            i.y = wrp(i.y)
        })
        return i
    }


    i.warp = function (n) {
        var i = this, s = i.S(), n = n || 0
        i.warpX(0, s.W(), n)
        i.warpY(0, s.H(), n)
        return i
    }


    i.shootBullet = function(){
        shooter = this
        s =stage = shooter.stg()

        bullet = cjs.circ(8, 'w').XY(shooter).a2(s)

        bullet.startMoving(

            (shooter.vx||1)*1.5, (shooter.vy||1) *1.5
        )

    }




    i.hitByBullet = i.isPointInMyRectBounds =  function(bullet){
        var args=G(arguments), bullet=args[0],

            didHit = M.pointInRectangle(
                bullet.cX(),  bullet.cY(),
                {x:this.cX(),
                    y:this.cY(),
                    w:this.W(),
                    h:this.H()}
            )
        if(args.n){
            if(didHit){this.rm()}

        }
        return didHit

    }






    i.killAllIAmHitting = function(){
        var i=this,
            stage = i.St()
        _.e(stage.children, function(obj){
            if(i != obj){ obj.hitByBullet(i, '-') }
        })

    }


    i.makeMeAKiller =function(){
        var i = this
        cjs.tick(function(){
            i.killAllIAmHitting()
        })
        return this}
    i.bounce=function(n){
        var i=this,
            stage = i.getStage() ,
            h=stage.H(),
            w=stage.W()
        n=N(n,0)
        T.t(
            function(){var x=i.x, y=i.y
                if(x > w - i.W() - n  || x <(n ) ){ i.vX('-') }
                if(y> h - i.H() -n|| y<(n )){ i.vY('-')  }
            })
        return i}

    i.startMoving=function(x,y){var i=this,vx,vy
        if(x){i.vX(x)}
        if(y){i.vY(y)}
        vx = i.vx||0
        vy = i.vy||0
        T.t(function(){
            i.X(vx,'+').Y(vy,'+')
        })
        return i}


};imgOb()

$.fn.T = function () {var d = this, g = G(arguments)
    d.E()
    g.e(function (str) { d.A($.h3(str)) })
    return d
}

text=function(){


    $T= function(a,b,c,d,e){var g = G(arguments), o, t
        return new cjs.Text(a,b,c,d,e)

        o = g.O ? g.f :

        {t: g.f, f:g.s, c:g.t, x:g[3], y:g[4]}

        o.f = N(o.f) ? o.f + 'px Arial' : o.f
        o.f = o.f || '50px Arial'
        o.c = o.c || 'y'
        o.x = N(o.x, 600)
        o.y = N(o.y, 100)
        t = new cjs.Text(o.t, o.f, o.c)
        t.XY(o.x, o.y).drag()

        if (g.n) {t.regX = t.W() / 2}
        if (g.p) {t.bl('alphabetic')}

        return t.bl('middle')

    }







    ct.T = function () {var ct = this, g = G(arguments), o, t
        o = g.O ? g.f :

            g.N_? {x: g.f, y: g.s, t: g.t, f:g[3], c:g[4]} :
                N(g.s)?   {t: g.f, x: g.s, y: g.t, f:g[3]} :
                    _.x({t: g.f, f: g.s, c: g.t},
                        N(g[3]) && N([4]) ?{x: g[3], y: g[4]}:
                        {y: g[3]})
        o.f = N(o.f) ? o.f + 'px Arial' : o.f
        o.f = o.f || '50px Arial'
        o.c = oO('c', o.c || 'y')
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.t = String(o.t)
        t = $T(o.t,o.f,o.c).XY(o.x, o.y).a2(this).drag()
        if (g.n) {t.regX = t.W() / 2}
        t.bl('middle')
        if (g.p) {t.bl('alphabetic')}
        if (!g.n) {t.rX(t.mW() / 2)}
        return t
        //o.x = N(o.x, this.St().cen().x)
        /* if(g.p){
         tO = cjs.T(g.f, 'y', '40px Arial')
         if(N(g[3])){ tO.XY(g[3], g[4]) }
         return tO
         }*/
    }

    t.lW = _.gS('linewidth')
    t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    t.lWH = function (w, h) {return this.lW(w).lH(N(h, w))}
    t.tA = _.gS('textAlign')
    t.bl = function (bl) {var g = G(arguments)
        if (g.p) {
            bl = 'bottom'
        }
        if (g.n) {
            bl = 'top'
        }
        if (bl === '') {
            bl = 'middle'
        }
        if (U(bl)) {
            return this.textBaseline
        }
        this.textBaseline = bl
        return this
    }
    t.T = function (tS) {if (U(tS)) {return this._tS}
        this._tS = tS
        return this}
    t.ol = _.gS(t, 'outline')
    t.F = t.fo = function (f) {
        if (U(f)) {
            return this.font
        }
        this.font = N(f) ? f + 'px Arial' : f
        return this}
    t.C = function (cS) {
        if (U(cS)) {return this.color}
        this.color = oO('c', cS)
        return this}
    t.mW = function () {return this.getMeasuredWidth()}

    TEXT = function () {W()
        w.S(300, 100, 'z', 1500, 1)
        w.d('r', 300, 100)
        w.i.T('top').XY(300, 100).bl('+')  // should become + (counterintuitive i know.. but i noticed and fixed it!)
        w.i.T('bottom').XY(500, 100).bl('-')
        w.i.T('middle').XY(700, 100)
        w.dot(300, 400)
        nice = w.i.T('nice', 135, 'x', 300, 400)
        /*
         w.i.T('linewidth 0').XY(100,300).lW(0)
         w.i.T('linewidth null').XY(100, 500).bl('bottom')
         w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
         w.i.T('lineheight -100').XY(700,300).lH(-100)
         w.i.T('lineheight 0').XY(700,500).lH(0)
         w.i.T('lineheight 100').XY(700,700).lH(100)
         w.i.T('linealign left').XY(600, 100)
         w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
         w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
         */
        hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
        w.show('hello')
    }
    SPEECH=function(){W()._(function(){
        t = w.i.T( 600, 300, 'hiiiiiiiiii', 200, 'r')
        ct = w.i.ct().drag()
        ct.h(200, 150).cir(130,'w').cir(100,50,100,'w')
        ct.T(250,150, 'yoyoyoo', 60, 'd')
        $.in(10, function(){ct.rm()})
        //ct.tw( [{   sxy:.1, x:x-250, y:y-250 }, 20000])
    })}

};text()




w.pop = function (t) {
    var w = this
    t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
    t.tw([{a: .5, sxy: .5}, 4000])
    $.in(4, function () {
        t.rm()
    })
    return this
}
ct.chalk = function () {
    var ct = this, g = G(arguments),
        h = 0
    g.e(function (t) {
        ct.T(t, 26, 'w', 475, h += 35)
    })
    return this
}
w.pen = function (t, f, c) {
    var g = G(arguments), o
    if (this._T) {
        this._T.rm();
        this._T = null
    }

    o = {y: 100}

    o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW

    this._T = this.i.T(t, f, c)
    this._T.XY(o.x, o.y)
    return this._T
}
w.chalk = function () {
    var w = this, g = G(arguments)
    w.i.chalk.apply(w.i, g)
    return w
}
w.show = function (fn) {
    var w = this, g = G(arguments)


    $.ev(.2, function () {

        w.pen(S(fn) ? window[fn] : fn())

    })

    return w

}
TFSET= function(){W()._(function(){
    w.i.qB('me').grow().drag()

    i= w.i.qB('me').XY(200,200)

    ball = w.ball()

    $.in(3, function(){

        w.C('b'); ball.bS(i)

    })

    //  me.startMoving(10, 10)

    T.t(function(){iS = i.inStage()
        $l(iS)
    })
    b= w.i.qB('me')


    b.setTransform(0,0,2,.5,0,40,4,2,3)

    //m = b.getMatrix()
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
            this}

})}

later=function(){

    easPhys=function(){


        i.move = function () {
            return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
        }
        i.accelerate = function () {
            return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
        }
        i.jerk = function () {
            return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
        }
        i.vX = function (a) {
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
        i.vY = function (a) {
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
        i.vXY = function (x, y) {
            return this.vX(x).vY(y)
        }
        i.aX = function (a) {
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
        i.aY = function (a) {
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
        i.jX = function (a) {
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
        i.jY = function (a) {
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
        i.brake = function () {
            this.vx = this.vy = 0
        }


    };easPhys()


    ICEN=function(){Q(['guy','me'],function(){//z()
        s= new cjs.Stage( $.can( 'p', 1200, 600 )[0] ).A(); s.c=$(s.canvas)
        //s.bm('me', function(bb){b=bb.drag() })
        s.qB('guy').XY(300,300).spin()
        s.qB('guy').XY(300,300).sXY( .5, .3).spin()
        T.t(function(){ s.u() })
        $.in(3, function(){   T.f(1)   })
        $.in(9, function(){  T.f(1000)  })
    })}

    NEWSTG=function(){z()
        //three ways to make a new stage
        s = cjs.s('r',100 ).A().bm('me')
        s.can.drag()
        c= $.canvas('b',100).A().drag().XY(400)
        s1=cjs.s(c)
        s1.A().bm('me')
        c2= $.canvas('b',100).A().id('someId').drag().XY(300,100)
        s2=  cjs.s(['someId'])
        s2.tick().bm('me')

    }

    cjs.bindSlide= SL= function () {
        var g = G(arguments),
            b = g[0],
            b2 = g[1] || b

        return b.on('mousedown',
            function (e) {
                var bx = b2.x - e.rawX,
                    by = b2.y - e.rawY
                b.on('pressmove', function (e) {

                    if (g.P) {
                        b2.x = bx + e.rawX}

                    //if (g.N) {
                    b2.y = by + e.rawY
                    //}
                })

            })
    }

    cjs.bindReverseSlide = LS = function (b, b2) {
        var g = G(arguments),
            b = g[0],

            b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b

        return b.on(d, function (e) {
            var bx = b2.x + e.rawX, by = b2.y + e.rawY

            b.on(pm, function (e) {

                if (g.P) {
                    b2.x = bx - e.rawX
                }
                if (g.N) {
                    b2.y = by - e.rawY
                }

            })
        })
    }

    cjs.bindRotate = RT = function (b, b2) {


        //b = what the control is
        //b2 what it should control (default = itself!)
        //if(g.p){  //b.rgc( '+' )   }

        var g = G(arguments), b = g[0], b2 = g[1] || b

        return b.on('mousedown',

            function (e) {

                var X = e.rawX, Y = e.rawY, r = b2.rotation

                b.on('pressmove', function (e) {


                    b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )


                })
            })

    }

    cjs.bindRotate2 = RTT = function (b, b2) {


        //b = what the control is
        //b2 what it should control (default = itself!)


        var g = G(arguments), b = g[0], b2 = g[1] || b


        if (g.p) {  // b.rgc( '+' )
        }

        return b.on('mousedown',

            function (e) {

                var X = e.rawX, Y = e.rawY, r = b2.rotation

                b.on('pressmove', function (e) {


                    b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )


                })
            })

    }

    cjs.bindScale = SC = function (b, b2) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'), pm = oE('pm'), b2 = b2 || b,
            cp = function (n) {
                return n < .2 ? .2 : n > 2 ? 2 : n
            }

        return b.on(d,

            function (e) {
                var X = e.rawX, Y = e.rawY,
                    sx = b2.scaleX,
                    sy = b2.scaleY

                b.on(pm,

                    function (e) {
                        if (g.n) {
                            b2.sXY(cp(sx + (
                                (e.rawX - X) / 200)),
                                cp(sy - ((e.rawX - X) / 200))
                            )

                        }

                        else if (g.p) {
                            cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                            cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
                        }

                        else {
                            b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                        }
                    })
            }
        )
    }

    cjs.bindSkew = SK = function (b) {
        var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b

        return b.on(d,
            function (e) {
                var X = e.rawX, Y = e.rawY
                b.on(pm, function (e) {


                    b2.kXY(
                        (e.rawY - Y) * .5, (e.rawX - X) * .5
                    )

                })
            })
    }

    cjs.bindTransform = TR = function TR(b, b2, m) {

        var g = G(arguments),
            b = g[0],
            b2 = g[1],

            b2 = b2 || b, m = g[2] || 'SL'

        if (m == 'SL') {
            cjs.bindSlide(b, b2);
            m = 'SC'
        }

        else if (m == 'SC') {
            cjs.bindScale(b, b2);
            m = 'RT'
        }

        else if (m == 'RT') {
            cjs.bindRotate(b, b2);
            m = 'SL'
        }

        return b.on('pressup', function (e) {

            b.removeAllEventListeners();

            TR(b, b2, m)

        })
    }

    cjs.reggy = reggy = function (o, s) {

        s = s || o.parent

        s.bm('me', function (b) {

            b.W(40).H(40)

            I(function () {
                b.XY(o.x + o.regX, o.y + o.regY)
            }, 100)

        })


    }

    cjs.bindSlideAndRotate = KK = function (b, b2) {

        var g = G(arguments), b = g[0],
            b2 = g[1] || b
        cjs.bindSlide(b);
        cjs.bindRotate(b, b2)
        if (g.p) {

            b.rgc('+')
        }

        if (g.N) {
            //    reggy(b,b2)
        }
    }

    cjs.bindRotateThenSkew = RK = function (b, b2, m) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b,
            m = g[2] || 'RT'


        //if(g.p){var s=St('y',1000)
        //    _t(b||5,function(i){s.a().bm(
        //        function(bm){bm.xy(i*50);TR(bm)})});return s}

        if (m == 'RT') {
            RT(b, b2);
            m = 'SK'
        }

        else if (m == 'SK') {
            SK(b, b2);
            m = 'RT'
        }

        return b.on(oE('pu'),
            function (e) {
                Do(b).O();
                RK(b, b2, m)
            })
    }







    cjs.bulletHit = function (bullet, inWhat) {

        var x = bullet.centerX(),
            y = bullet.centerY()

        var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

        if (res == true) {
            $l('hit!')
        }
        return res
    }

    WHYQ = function () {
        cjs.Keys.l = cjs.Keys.left = false
        cjs.Keys.r = cjs.Keys.right = false
        cjs.Keys.u = cjs.Keys.up = false
        cjs.Keys.d = cjs.Keys.down = false

        $.kU('l', function () {
            if ($.test) {
                $l('left lifted')
            }
            cjs.Keys.l = cjs.Keys.left = false
        })

        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
        })

        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
        })

        $.kD('r', function () {
            if ($.test) {
                $l('right pressed')
            }
            cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'
        })

        $.kU('r', function () {
            if ($.test) {
                $l('right lifted')
            }
            cjs.Keys.r = cjs.Keys.right = false
        })


        $.kD('u', function () {
            if ($.test) {
                $l('up pressed')
            }
            cjs.Keys.u = cjs.Keys.up = true
        })
        $.kU('u', function () {
            if ($.test) {
                $l('up lifted')
            }
            cjs.Keys.u = cjs.Keys.up = false
        })
        $.kD('d', function () {
            if ($.test) {
                $l('down pressed')
            }
            cjs.Keys.d = cjs.Keys.down = true
        })

        $.kU('d', function () {
            if ($.test) {
                $l('down lifted')
            }
            cjs.Keys.d = cjs.Keys.down = false
        })
    }
    FANCYEDIT = function (x, y) {


        z()

        canvas = $.canvas('g', 400)
        stage = new cjs.Stage(canvas[0]).tick()
        frame = $.dragFrame(theSpan = $.span())

        theSpan.A(
            $.button('X', function () {
                frame.remove()
            }),
            $.button('pics', function () {
                $.imagesDiv(stage)
            }),

            $.button('transform'),
            $.button('text'),

            $.button('paint', function () {

                _paintColor = '#0FF'

                var size = 10, oX = 0, oY = 0, shape

                var paintStage = $.dragStage()

                // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

                paintStage.bm(
                    stage.du(), //?

                    function (m) {


                        m.XY(40).sXY(.4)


                        stagePainter(paintStage)


                    })


            }),
            $.button('cut'),

            $.button('save'))

        theSpan.A($.br(), canvas)

        theSpan.A($.div().A(
            $.button('clear', function () {
                stage.removeAllChildren()
            }),

            $.button('flat', function () {

                stage.removeAllChildren()

                stage.bm(stage.toDataURL(), function (bm) {
                    bm.drag()
                })

            }),

            $.button('clone', function () {


                var newSpan = $span()

                var newStage = dragStage(newSpan)


                newStage.bm(stage.du(), function (bm) {
                    SL(bm)

                })

            }),

            $.button('recur', function () {

                stage.bm(stage.du(), function (bm) {

                    bm.sxy(.4)
                    SL(bm)

                })
            }),

            $.button('copy', function () {

                _copy = stage.du()


            }),

            $.button('paste', function () {
                stage.bm(_copy, function (bm) {
                    bm.drag()
                })
            }),

            $.button('replace', function () {

                stage.rm()
                stage.bm(_copy, function (bm) {
                    bm.drag()
                })

            })
        ))

        theSpan.dblclick(function () {
            $('button').toggle()
        })


        theSpan.A()


    }



    //to shape -> ct.circle = function(x,y,r,c){var ct=this;ct.A(cjs.circle(x,y,r,c));return ct}

    // 'P' is avaible.  potition?  (M is taken by Math, but mouse needs something)





    old=function(){

        q.mf = q.manifest = function () {var q=this,g=G(arguments)
            q.loadManifest(cjs.mf.apply(null, g))
            return q}
        cjs.lQDep= cjs.lqDep=cjs.loadQueueDep=function(mf,fn){
            var q = new cjs.LoadQueue(true)
            if(A(mf)){q.loadManifest(cjs.mf.apply(null, mf))}
            if(F(fn)){q.complete(function () {fn(function (i) {return q.getResult(i)})})}
            return q}
        cjs.mfDep = cjs.manifestDep = function(a){var g=G(arguments), mf=[]
            _.e(g, function (v) {
                mf.push({
                    src: cjs.src(v),
                    id: v})})
            return mf
        }

        //cjs.handleFileLoad = function (e) {if (e.item.type == "image") {images[e.item.id] = e.result}}
//cjs.makeManifest = cjs.makeMan=function(a) {return cjs.manifest.apply(null, _.m(a.images, function (i) {return Graphics.fromSource(i)}))}

        QDep=function(i,fn){
            q=cjs.lQ(),
                mf=[]
            _.e(i,function(v) {mf.push({src: cjs.src(v), id: v})})
            q.mf(mf)
            q.c(function(){fn(q)})
            return q}

        tickX=function(e){j.Y(e.delta/1000*100,'-' )}
        timeStamp2 = function(s, j, pxPerSec){
            var fn=function(s,e){
                if(!N(j.ts)){j.ts=0;j.lts=e.ts}
                else{j.ts= e.ts-j.lts;j.lts=e.ts
                    j.y((j.ts/1000) * pxPerSec,'-')  }}
            return s.t(fn)}
    }

    mug=function(){

        s.snap = function(f){
            $.post('/img', {
                d: this.toDataURL()//, dats: o.x.dats
            })
            sec(f)
            return this}

        $mugTest=function(){z();
            s = cjs.stage(800,800).A()
            s.mug( function(mug){ m=mug  })
        }


        ct.bData=function(data){

            var bm = cjs.bm( $.img().src($.parseJSON(data)) )
            this.A(

                bm
            )

            return bm}
// **** works!!!!

        ct.mug=function(sc,fn){var ct=this
            $.get('/myMug', function(m){ct.bm(m,sc,fn)})
            return ct}
    }


    touchEnable = function (s) {
        cjs.Touch.enable(s);
        return s
    }//important for ipad//move this onto stage itself

};later()
old=function(){
    ct.bmR=   function(i,fn){var ct=this,bm
        alert('ct.bmR')
        $.i(i, function(i){
            bm = $Bm( i[0] ).a2(ct)
            bm.rXY(
                bm.W()/2,
                bm.H()/2
            )
            if(fn){ fn(bm) }
        })
        return ct
    }
}



comp=function(){


    i.o=function(o){this.compositeOperation = o;return this}

    i.Ds= i.dO=function(){this.o('destination-out'); return this}
    i.dS= i.dI=function(){return this.o('destination-in')}
    i.sD= i.sI=function(){this.o('source-in'); return this }
    i.Sd= i.sO=function(){this.o('source-out'); return this } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
    i.ds= i.dV= function(){ this.o('destination-over'); return this }
    i.SD= i.sT= i.sA= function(){ this.o('source-atop'); return this }
    i.DS= i.dT= i.dA= function(){ this.o('destination-atop'); return this }

    i.li=function(){ this.o('lighter'); return this }
    i.co=function(){ this.o('copy'); return this }
    i.xo=function(){ this.o('xor'); return this }







};comp()

