
ko.c= ko.computed
ko.pc= ko.pureComputed



//bT,bV and computed
COMP=function(){$.z().h1('KNOCKOUT')

    $.d([
        $.p('F: ', $.b().bT( 'f')),
        $.p('L: ', $.b().bT( 'l') ),
        $.p('F: ', $.ip().bV( 'f') ),
        $.p('L: ', $.ip().bV( 'l') ).id('l'),
        //   $.p('L: ', $.b().bT('fL') ),

        $.bt('caps').b$('capL')

    ])

    ok({

        f: $o('j'),
        l: $o('y'),

//        fL : ko.c(function(){return this.f()+' '+this.l()}),

        capL :function(){this.l(S.tU(this.l()))}

    })



}