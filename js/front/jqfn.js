$.fn.W=function(w){return w? this.width(w):this.width()}
$.fn.H=function(h){return h? this.height(h): this.height()}
$.fn.WH = function (w, h) {h = h || w;
    return this.W(w).H(h)
}
$.fn.MW = $.fn.maxW = function (a) {
        return this.css('max-width', a)
    }
$.fn.mW = $.fn.minW = function (a) {
        return this.css('min-width', a)
    }
$.fn.mH = $.fn.minH = function (a) {
    return this.css('min-height', a)
}
$.fn.maxH = function (a) {
        return this.css('max-height', a)
    }
$.fn.X = function (l) {
    var q = this, g = G(arguments)
    if (N(l)) {

        q.css('left',

            g.p ? q.X() + l :
                l
        )

        return q
    }
    l = q.css('left')
    return l == 'auto' ? 'auto' : parseInt(l)

    /*

     $.fn.X = $.fn.left = function (left) {


     if (N(left)) {

     return this.css('left', left)
     }

     var left = this.css('left')


     if (left == 'auto') {
     return 'auto'
     }

     return parseInt(left)
     }

     */

}
$.fn.l = $.fn.left=function (l) {var q = this, g = G(arguments)
    if (N(l)) {
        q.css('left', l)
        return q}
    l = q.css('left')
    return l == 'auto' ? 'auto' : q.position().left
}
$.fn.L = function (n) {
    if (U(n)) {return this.css('left')}
    this.css('left', n)
    return this
}
$.fn.R = function (right) {
    if (U(right)) {
        return this.css('right')
    }
    this.css('right', right)
    return this
}
$.fn.LR = function (l, r) {
    var q = this
    if (O(l)) {
        r = l.r;
        l = l.l
    }
    if (N(l)) {
        q.L(l)
    }
    if (N(r)) {
        q.R(r)
    }
    return q
}
$.fn.Y = $.fn.top= function (top) {

    if (N(top)) {
        return this.css('top', top)
    }
    var top = this.css('top')
    if (top == 'auto') {
        return 'auto'
    }
    return parseInt(top)

    /*

     $.fn.Y = $.fn.top = function (top) {
     if (N(top)) {
     return this.css('top', top)
     }
     var top = this.css('top')
     if (top == 'auto') {
     return 'auto'
     }
     return parseInt(top)
     }
     */
} //$.fn.t
$.fn.B =   function (bottom) {
        if (U(bottom)) {
            return this.css('bottom')
        }

        this.css('bottom', bottom)
        return this
    }
$.fn.XY = function (x, y) {

    x = N(x) ? x : 0

    if (U(y)) {
        y = x
    }
    return this.X(x).Y(y)

    /*
     $.fn.XY = function (x, y) {

     x = N(x) ? x : 0

     if (U(y)) {
     y = x
     }
     return this.X(x).Y(y)
     }


     */
}
$.fn.p = $.fn.P = function (pos, x, y) {
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
$.fn.os = function () {
        return this.offset()
    }
$.fn.sz=function(sz){
        return this.at('size', sz)
    }
$.fn.zi=$.fn.zIndex=function(z){
        if(U(z)){return this.css('z-index')}
        this.css('z-index',z);return this}
$.fn.getPosition = $.fn.getTotalOffset = function () {

        var e = this, x = 0, y = 0

        while (E(e) && e.tagName) {

            y += e.offsetTop

            x += e.offsetLeft

            if (isBodyElement(e)) {
                e = 0
            }

            e = e.offsetParent || e
        }

        return {x: x, y: y}


    }//just gets the TOTAL offset of ANY element
$.fn.osP=function(){return this.offsetParent} // not a fn?
$.fn.Z = function (w, h) {
    return this.W(w).H(h || w)
}

$.fn.mar = function (margin) {

    if (U(margin)) {
        return this.css('margin')
    }

    this.css('margin', margin);
    return this
}
$.fn.marBottom = function (margin) {

    if (U(margin)) {
        return this.css('marginBottom')
    }

    this.css('marginBottom', margin);
    return this
}
$.fn.marTop = function (margin) {

    if (U(margin)) {
        return this.css('marginTop')
    }

    this.css('marginTop', margin);
    return this
}
$.fn.marLeft = function (margin) {

    if (U(margin)) {
        return this.css('marginLeft')
    }

    this.css('marginLeft', margin);
    return this
}
$.fn.marRight = function (margin) {

    if (U(margin)) {
        return this.css('marginRight')
    }

    this.css('marginRight', margin);
    return this
}
$.fn.marHor = function (a) {
    return this.marLeft(a).marRight(a)
}
$.fn.marVer = function (a) {
    return this.marTop(a).marBottom(a)
}
$.fn.mar = function (margin) {

    if (U(margin)) {
        return this.css('margin')
    }

    this.css('margin', margin);
    return this
}
$.fn.mB = $.fn.marBottom = function (margin) {

    if (U(margin)) {
        return this.css('marginBottom')
    }

    this.css('marginBottom', margin);
    return this
}
$.fn.mT = $.fn.marTop = function (margin) {

    if (U(margin)) {
        return this.css('marginTop')
    }

    this.css('marginTop', margin);
    return this
}
$.fn.mL = $.fn.marLeft = function (margin) {

    if (U(margin)) {
        return this.css('marginLeft')
    }

    this.css('marginLeft', margin);
    return this
}
$.fn.mR = $.fn.marRight = function (margin) {

    if (U(margin)) {
        return this.css('marginRight')
    }

    this.css('marginRight', margin);
    return this
}
$.fn.mH = $.fn.marHor = function (a) {
    return this.marLeft(a).marRight(a)
}
$.fn.mV = $.fn.marVer = function (a) {
    return this.marTop(a).marBottom(a)
}

bor(); pad()
function pad(){

    $.fn.pad=function(padding){
        if(U(padding)){return this.css('padding')}
        this.css('padding',padding);return this}
    $.fn.padTop=function(padding){
        if(U(padding)){return this.css('paddingTop')}
        this.css('paddingTop',padding);return this}
    $.fn.padBottom=function(padding){
        if(U(padding)){return this.css('paddingBottom')}
        this.css('paddingBottom',padding);return this}
    $.fn.padLeft=function(padding){
        if(U(padding)){return this.css('paddingLeft')}
        this.css('paddingLeft',padding);return this}
    $.fn.padRight=function(padding){
        if(U(padding)){return this.css('paddingRight')}
        this.css('paddingRight',padding);return this}
    $.fn.padHor=function(a){return this.padLeft(a).padRight(a)}
    $.fn.padVer=function(a){return this.padTop(a).padBottom(a)}

    $.fn.pad = function (padding) {
        if (U(padding)) {
            return this.css('padding')
        }
        this.css('padding', padding);
        return this
    }
    $.fn.pT = $.fn.padTop = function (padding) {
        if (U(padding)) {
            return this.css('paddingTop')
        }
        this.css('paddingTop', padding);
        return this
    }
    $.fn.pB = $.fn.padBottom = function (padding) {
        if (U(padding)) {
            return this.css('paddingBottom')
        }
        this.css('paddingBottom', padding);
        return this
    }
    $.fn.pL = $.fn.padLeft = function (padding) {
        if (U(padding)) {
            return this.css('paddingLeft')
        }
        this.css('paddingLeft', padding);
        return this
    }
    $.fn.pR = $.fn.padRight = function (padding) {
        if (U(padding)) {
            return this.css('paddingRight')
        }
        this.css('paddingRight', padding);
        return this
    }
    $.fn.pH = $.fn.padHor = function (a) {
        return this.padLeft(a).padRight(a)
    }
    $.fn.pV = $.fn.padVer = function (a) {
        return this.padTop(a).padBottom(a)
    }


}
function bor(){
    $.fn.borderStyle= function(style){

        this.css('border-style', style)

        return this}
    $.fn.borderColor=function(c){

        this.css('border-color', oO('c', c))

        return this}
    $.fn.borderWidth=function(w){

        this.css('border-width',w)

        return this}
    $.fn.bor=function(border){
        if(U(border)){return this.css('border')}
        this.css('border',border);return this}
    $.fn.bS = $.fn.borderStyle = function (style) {

        this.css('border-style', style)

        return this
    }
    $.fn.bdC = $.fn.borderColor = function (c) {

        this.css('border-color', oO('c', c))

        return this
    }
    $.fn.bW = $.fn.borderWidth = function (w) {

        this.css('border-width', w)

        return this
    }
    $.fn.bor = function (border) {
        if (U(border)) {
            return this.css('border')
        }
        this.css('border', border);
        return this
    }



}

