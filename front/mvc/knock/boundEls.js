div=function(){

    $.dW=$.dBw=function(a,b){var d=$.d()
        .bW(a)

        if(A(b)){_.e(b,function(b){
            d.A(b)})}
        return d
    }

    $.dH=function(a){return $.d().bH(a)}
    $.dCm=function(a){return $.d().bCm(a)}
    $.dT=function(a){return $.d().bT(a)}
    $.dE=function(a,b){

        var d=  $.d().bE(a)
        if(A(b)){
            _.e(b,function(el){
                d.A(el)
            })}
        else if(S(b)){
            d.A(b)
        }
        return  d
    }
    $.dIf=function(a,b){
        var d =  $.d().bI(a)
        if(A(b)){_.e(b,function(b){d.A(b)})}
        return d
    }

};div()

pg=function(){

    $.pT=function(a){
        var p = $.p()
        p.bT(a)
        return p
    }
    $.pI=function(a,b,c,d){
        var p= $.p(b,c,d).bI(a)
    }

};pg()
span=function(){
    $.sT=$.spT= function(a,b){ return $.sp(b)
        .bT(a||'$data')
    }
    $.spVs=function(a){return $.sp().b('vs',a)}

};span()







anc=function(){$.a$=function(t,fn){
    return $.a(t).b('$', fn)}
    $.aA=function(a,b,c,d){
        return $.a(b,c,d).bA(a)
    }};anc()
bt=function(){$.$bt=function(a,b){var g=G(arguments)

    b=b||a
    if(g.n){
        b = '$parent.'+b
    }

    return $.bt(a).b$(b)

}
    $.bt$=$.btB$=function(a,b,c){
        var bt=   $.bt(a).b$(a)

        if(c){bt.bEn(c)}

        return bt
    }

};bt()


form=function(){
    $.fSb=function(a,b){var f= $.f()
        f.b({sb:a})
        if(A(b)){_.e(b,function(el){
            f.A(el)
        })}
        return f
    }
    $.fSb=$.fBsb=function(a,b){var f = $.f()
        f.bSb(a)
        if(A(b)){_.e(b, function(b){ f.A(b) })}
        return f
    }

};form()
$.h1T=$.h1Bt=function(a,b){
    var h1= $.h1(a)
    h1.bT(b||a)
    return h1

}
list=function(){

    $.liT=$.liBt=function(a){

        return $.li().bT(a)
    }

    $.olE=$.olBe=function(a,b){var ol= $.ol().bE(a)

        if(b){ol.A(b)}
        return ol
    }

};list()

inp=function(){
    $.iV=$.ipV=$.ipBv=function(){var g=G(arguments),ip
        ip = $.ip()
        ip.bV.apply(ip, g)
        return ip
    }
    $.ipTi=function(a){return $.ip().bTi(a)}
    $.cC=$.cbC=function(a){
        if(U(a)){a='$'}
        return $.cb().bC(a)
    }

    $.s$=function(a,b,c,d){ return $.sb(b,c,d).b$(a) }
    $.pwTi=function(a){return $.pw().bTi(a)}

    $.sO=$.slO=function(a){ return $.sl().bO(a) }

};inp()
tabl=function(){

    $.tBE=function(a,b){
        var tB= $.tB()
        tB.bE(a)
        if(A(b)){
            _.e(b, function(el){
                tB.A(el)})
        }
        return tB
    }

    $.tdT=function(a,b){var td=$.td()
        td.bT(a)
        if(A(b)){
            _.e(b,function(el){
                td.A(el)
            })}
        return td
    }


};tabl()
uE=function(){

    $.U=function(){var g=G(arguments)
        return $.uE(g.f,[$.li(g.s)])
    }
    $.uE=$.ulE=function(a,b,c){var g=G(arguments)

        var ul=  $.ul().bE(a)

        if(c){
            b= $.li( _.r(g) )
        }

        else if(O(b) && !A(b)){
            b=[b]
        }

        if(A(b)){
            _.e(b,function(el){
                ul.A(el)
            })
        }


        else if(S(b)){
            ul.A(b)
        }
        return  ul
    }
};uE()
