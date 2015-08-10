TMPWORKS=function(){$.x('b')

    data = { n:'j', a:20, o:'p' }
    $V({ t:'li',  i: function(){
            $l(this.model)
            this.r()         },

        r: function(){
            this.A().A(
                $.h1( this.tp( this.model.toJSON() ) ) )},

        tp: tp= _.tp(
            '<%=n%> ( ((( (((( -  -<%=a%>-  - )))) )) ) - <%=o%>'
        ),


        x:'some-per',
        k:'per'

})({m:Per=$M()(data)//=== M({df:data})()
    })

}



TMP =function(){$.x('r');

    data = { n:'j', a:20, o:'p' }
    $V({ t:'li',
        i: function(){$l(this.model); this.r()},
        r: function(){this.A().A(this.tp(this.model.toJSON()))},
        tp: tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),
        x:'some-per',
        k:'per'
    })({m:Per=$M({
        d: data
    })()}
    )}


PLV=function(){$.x('o','hi'); $l('PLV')

    Per= $M({//name, age, occ
        d: {n:'a', a:20, o:'p'}
    })

    p0 = Per()
    p1 = Per({n:'b'})
    p2 = {n:'c'}

    PerV = $V({
        t:'li',
        x: 'some-per',  // id
        i:  function(){this.r()}, //??
        r: function(){  this.q.A('fasdfsfasd')

            this.q.A(
                this.tp(
                this.model
                )
            )

        },


        k: 'per',   // className
        tp: tp= _.tp('fo real? <%= n %> (<%= a %>) - <%= o %>'),
    })



    pV=PerV({m:p0})
    PepC=$Cl({m:Per})
    pC=PepC()
    pC.add([p0, p1,p2])
    PepV=$V({
        cl: PepC,
        el:ul= $.ul(),
        r: function(){
            ul=this.q.E()
            this.J(function(md){
                    PerV({m:md}, ul)})} })
    pCV = PepV({cl: pC})


    $.in(.2,function(){
        pCV.r()
    },'*')


    $.in(.4,function(){
        pCV.r()
    },'*')


}








BBVTdArr=[  {t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}   ]

listTp=function(){
    $.dI('list-tp', [ $.la() ]).C('o')
    //$.d('o').id('list-tp').A($.la())


}

rFn=function(){var da, tp, ul

    $l('r: '+this.model.g('d')[0].h)
    //$.c('b').ab(300,300)

    da=this.model.g('d')
    tp=this.tp
    ul= this.$el.find('ul')
    _.e(da, function(da){
        ul.A(
            tp.clone()
                .find('a').hr('href', da.h).T(da.t)
                .end()
        )

    })
}

rFn2=function(){$l('rr: '+ this.model.g('d')[0].h )  //$.c('b').ab(300,300)
    da = this.model.g('d'); tp=this.tp
    ul= this.q.find('ul')
    _.e(da,  function(da){
        clo=  tp.clone()
        ul.A(clo.find('a').hr('href', da.h).T(da.t).end())  })}




BBVT=function(){$.x('x', 'bb view and template'); listTp(); m= $M()({ d:BBVTdArr })
    $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
    Vw = $V({q:'#ct',
        i: function(op){$l(op.blOp); this.tp =$('#list-tp').children()},
        r:rFn,
        ev: {'click button':'r'}})
    v =  Vw({  m:m, blOp:'emp!' })}

BBVT=function(){$.x('x', 'bb view and template'); listTp(); m= $M()({  d: BBVTdArr  })


    $.d('y').id('ct').A(
        $.bt('Load', function(){v.r()}),
        $.ul().id('list') )



    Vw=$V({q:'#ct',

       i: function(op){$l(op.blOp);

           this.tp = $('#list-tp')
               .children()},

        r: rFn2,


        events: {'click button': 'r'}

    })




    v=Vw({  zm: m  ,  blOp: 'emp!' })

}


TP=function(){$.x().A(

    a= _.tp("<div>hello:<%=n%></div>")({n:'moe'}),

    b= _.tp('<b><%-tag%></b>',{tag:'<script>'}),
     // <%- vs <%= ?


    c= _.tp(

        '<%_.e(peep,function(name){%>'+
        '<li>'+'<%=name%>'+'</li>'+
        '<%})%>'
        ,{peep:['moe','curly','larry']}
    )


)}


