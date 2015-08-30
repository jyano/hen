$.iI=function(i){

    if(O(i)){
        return S($(i)[0].src)
    }
}



_src=function(a){ a = _.ext(a);
    return s$(a).startsWith('/')? a : '/'+ a
}

_.src =    function f(e){

    //if(Q(e)){$l('q');e=$(e)[0]}
    if( e.image ){ e=e.image}
    if( C(e) ){ e = C(e) }
    if( e.src ){ e = e.src}
    if( e.toDataURL ){  e=tDU(e) }
    return s$(e).contains('data:')?  e
        :  S(e) ?  _src(e)
        : 0
}

$.i= $.img=function(srce, fn){var g=G(arguments), o,i;

    $.im = function(img, func){
        i = $.img().src(img);
        func(i[0]);
        //s$(e).contains('data:')
        return i}


    o= F(g[0])? {fn:g[0]}: {src:g[0], fn:g[1]};

    i = $( new Image() );



    i.i=function(src){
        if(U(src)){return this[0].src}
        this.src(_.src(src));
        return this
    }

    i.r=function(fn){
        this.load(function(e){
            fn(e, i)
        })
        return this
    }

    i.r(function(_i){i._=_i.target})

    if(o.fn){i.r(o.fn)} //i.l(function(e){o.fn($(e.target), e)})

    if(o.src){i.i(o.src)}

    //i.A()

    return i

}


//gets rid of auto-scaling quirk

/*
 i.i=i.l=i.load(function(i){
 i._ =i[0]
 //i = $(i.target)
 // img.W( img.W() )
 // img.H( img.H() )
 })*/


$.fn.bg = $.fn.bgI = function (url) {//set background image
    this.bgI('url("' + Y.src(url) + '")');
    return this
}
$.fn.src= function(a){
    if( U(a) ){return this.attr('src')}

    this.attr('src', _.src(a) )

    return this
}

