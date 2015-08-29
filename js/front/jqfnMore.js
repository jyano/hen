$.fn.ab = $.fn.abs = function (x, y) {
    this.P('a', x, y)
    return this
}
$.fn.mlt=function(m){
    return this.at('multiple', true)
}
rel()
addRm()
disp()
valu()
color()
klass()
outer()
style()
atts()
background()
text()
function rel() {
    $.fn.ch = function () {
        return this.children()
    }
    $.fn.pa = $.fn.parent
    $.fn.fi = $.fn.find
    $.fn.sib = function () {
        var g = G(arguments);
        return this.sib.apply(this.g)
    }
}
function text(){
    $.fn.T= function(){var g=G(arguments)
        this.text.apply(this,g)
        return this
    }

    $.fn.fS= function(z){ this.css('font-size', z)

        return this}
    $.fn.tA=  function(z){
        this.css('text-align', z)
        return this}

}
function addRm(){
    $.fn.ap2=function(el){
        el.A(this)
        return this
    }
    $.fn.A=function(stuff){
        if( U(stuff)){$('body').append(this); return this}
        this.append.apply(this, arguments)
        return this}
    $.fn.rm=$.fn.xx=function(){var e=this
        e.remove()
        return e
    }
    $.fn.rm=function(){return this.remove()}

    $.fn.rm=function(){return this.remove()}
    $.fn.iA=$.fn.insertAfter

    $.fn.A=function(stuff){
        if( U(stuff)){$('body').append(this); return this}
        this.append.apply(this, arguments)
        return this}
    $.fn.pp2=function(a){this.prependTo(a); return this}
    $.fn.a2=function(a){a.A(this); return this}
    $.fn.pp= $.fn.prepend

    $.fn.E=function(html){
        this.empty(); this.html(html); return this
    }
    $.fn.E=function(html){
        this.empty(); this.html(html); return this
    }

}
function color(){
    $.fn.al=function(al){return this.opacity(al)}

    $.fn.col = function(col){
        return this.css('color', oO('c', col))}
    $.fn.C = function(c, c2){
        if(c2){return this.C(c).col(c2)}
        if(c=='*'){
            c = Yano.random()
            $l(c)
        }
        return this.css('backgroundColor', oO('c', c))
    }

    $.fn.col = function(col){
        return this.css('color', oO('c', col))}
    $.fn.C = function(col, c2){
        if(c2){return this.C(col).col(c2)}

        if(col=='*'){
            $l(col)

            col = Yano.random() }

        return this.css('backgroundColor', oO('c', col))
    }
    $.fn.al= $.fn.opacity=$.fn.alpha=function(z){

        this.css('opacity', z)

        return this}
}
function klass(){
    $.fn.K= function(){
        $.fn.addClass.apply(this, arguments); return this
    }
    $.fn.xK= $.fn.removeClass
}
function valu(){
    $.fn.v = function(v){var g=G(arguments),v

        if(D(v)){
            this.val(v)

            return this
        }
        v=this.val()
        if(!g.p){this.val('')}
        return v

    }
    $.fn.Vx=function(){
        var val= this.val()
        this.val('')
        return val
    }
    $.fn.V=function(){
        var v=this.val()
        this.val('')
        return v
    }
}
function outer(){
    $.fn.e = $.fn.each
    $.fn.N= $.fn.next
    $.fn.tt=$.fn.tit= $.fn.title=function(t,c){var p
        p = $.p(t).fS(24).K('text-center').C('X', c||'z').mH(10).pH(30)
        this.A(p, $.hr().fS(10))
        return this
    }
    $.fn.gg = $.fn.toggle


    $.fn.h= $.fn.ht=$.fn.html

    $.fn.oh = function () {
        return this[0].outerHTML
    }
    $.fn.oH=$.fn.outerHeight
    $.fn.oh=function(){
        return this[0].outerHTML
    }


}
function disp() {

    $.fn.dp= $.fn.display=function(display){
        if(U(display)){return this.css('display')}
        this.css('display',display);return this
    }
    $.fn.float=function(float){
        if(U(float)){return this.css('float')}
        this.css('float',float);return this
    }
    $.fn.P1 = function (pos, x, y) {
        if (U(pos)) {
            return this.css('position')
        }
        this.css('position', oO('p', pos))

        if (N(x)) {
            this.X(x)
        }
        if (y) {
            this.Y(y)
        }
        return this
    }
    $.fn.P = function (pos, x, y) {
        var e = this, g = G(arguments)
        if (g.u) {
            return e.css('position')
        }
        e.css('position', oO('p', pos))
        if (N(g.s)) {
            e.X(g.s)
        }
        if (g.t) {
            e.Y(g.t)
        }
        return e
    }
    $.fn.ab = $.fn.abs = function (x, y) {
        var e = this

        return e.P('a', x, y)

    }
}
function style(){

    $.fn.ov = $.fn.overflow=function(overflow){
        if(U(overflow)){return this.css('overflow')}
        this.css('overflow',overflow);return this
    }
    $.fn.hd= $.fn.hide
    $.fn.sh= $.fn.show
    $.fn.s= $.fn.css
    $.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
    $.fn.fontSize=function(z){ this.css('font-size', z)

        return this}
    $.fn.textAlign=function(z){

        this.css('text-align', z)

        return this}

    $.fn.opacity=$.fn.alpha=function(z){

        this.css('opacity', z)

        return this}

    $.fn.display=function(display){
        if(U(display)){return this.css('display')}
        this.css('display',display);return this
    }

    $.fn.float=function(float){
        if(U(float)){return this.css('float')}
        this.css('float',float);return this
    }
    $.fn.overflow=function(overflow){
        if(U(overflow)){return this.css('overflow')}
        this.css('overflow',overflow);return this
    }

    $.fn.zIndex=function(z){
        if(U(z)){return this.css('z-index')}
        this.css('z-index',z);return this}
}
function atts() {
    $.fn.pp=function(a){ this.pp(a); return this}


    $.fn.chk=function(){ this.at('checked', true) }

    $.fn.fr=$.fn.for=function(forWhat){return this.attr('for', forWhat)}

    $.fn.at= $.fn.attr
    $.fn.ph= function(forWhat){return this.attr('placeholder', forWhat)}


    $.fn.type=function(type){
        if(U(type)){return this.attr('type')}
        this.attr('type',type);return this
    }
    $.fn.ty= $.fn.type=function(type){
        if(U(type)){return this.attr('type')}
        this.attr('type',type);return this
    }

    $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
    $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
    $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
    $.fn.n= $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }

    $.fn.hf=$.fn.href=function(href){
        if(U(href)){return this.attr('href')}
        this.attr('href',href); return this
    }
    $.fn.href=function(href){
        if(U(href)){return this.attr('href')}
        this.attr('href',href);return this
    }


    $.fn.for = function (forWhat) {
        return this.attr('for', forWhat)
    }
    $.fn.placeholder = function (forWhat) {
        return this.attr('placeholder', forWhat)
    }
    $.fn.src = function (a) {


        if (U(a)) {
            return this.attr('src')
        }

        this.attr('src', src(a))

        return this
    }
    $.fn.role = function (role) {
        if (U(role)) {
            return this.attr('role')
        }
        this.attr('role', role)
        return this

    }

    $.fn.src= function(a){
        if( U(a) ){return this.attr('src')}

        this.attr('src', J.src(a) )

        return this
    }
    $.fn.role=function(role){
        if(U(role)){return this.attr('role')}
        this.attr('role', role)
        return this

    }

}
function background(){
    $.fn.background = function (bg) {
        if (U(bg)) {
            return this.css('background')
        }
        this.css('background', bg)
        return this
    }
    $.fn.backgroundPosition = function (bg) {
        if (U(bg)) {
            return this.css('backgroundPosition')
        }
        this.css('backgroundPosition', bg)
        return this
    }
    $.fn.bg=function(bg){
        if(U(bg)){return this.css('background')}
        this.css('background', bg)
        return this
    }
    $.fn.bgP=function(bg){
        if(U(bg)){return this.css('backgroundPosition')}
        this.css('backgroundPosition', bg)
        return this
    }


    $.fn.bg = $.fn.bgI = function (url) {//set background image
        this.bgI('url("' + Y.src(url) + '")');
        return this
    }
    $.fn.bp = $.positionBackgroundImage = function (x, y) {
        var g = G(arguments), x = g[0], y = g[1];
        x = N(x) ? x : 0;
        y = N(y) ? y : 0;
        this.css({backgroundPos: x + 'px ' + y + 'px'});
        return this

    }

}