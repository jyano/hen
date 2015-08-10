el = function(ob, op){
    if(A(ob)){
        _.e(ob, function(ob){
            el(ob)
        })
    return}

    return el.d(ob, op)

}
el.d=function(ob){var d, g=G(arguments)
    d= $('<div>')

    if(ob.b){d.b(ob.b)}

    if(ob.ch){
        ob.ch = A(ob.ch)? ob.ch : [ob.ch]
        _.e(ob.ch, function(ch){d.A(ch)})
    }

    if(ob.C){ d.C(ob.C) }
    if(ob.c){ d.c(ob.c) }
    if(ob.w){ d.W(ob.w) }
    if(ob.h){ d.H(ob.h) }
    if(!g.n){ d.A() }

    //ko
    if(ob.$vs){d.bVs(ob.$vs)}
    if(ob.$h){ d.bH(ob.$h) }

    $l('el.d..')
    return d
}
els = function(){

    G(arguments).e(function(g){
        el(g)
    })
}
_$=function(ob){

    ob.C = ob.C || $r()
    $.x(ob.C, ob.t)

    if(ob.vm){ OK(ob.vm) }

    if(ob.el){

        els(ob.el)
    }


    if(ob.A){

        _.e(  A(ob.A)? ob.A : [ob.A], function(q){
            q.A()
        })
    }


    if(ob._){

        $.in(ob._)
    }

}
