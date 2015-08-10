

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



