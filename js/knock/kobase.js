ok=function(){var g=G(arguments),vM, o, ob

// pass just plain obj (normal)
// pass plain object and element(string or ob?) :)
// pass a single key, value -> {key:value}
// pass just a value -> {$: value}
// pass nothing -> {$: $o(1)}

    if(  S(g.f)  ){

  if( U(g.s)){

      g.s = $o(g.n ? 0: 1)

  }
        ob={};
        ob[g.f] = g.s;



        vM = ob


    }


    else {

        vM = g.u ?

        { $: $o(g.n ? 0: 1) } :

                F(g.f)  || N(g.f)|| A(g.f)?  {$: g.f} :

                    g.f
    }


    vm = vM
    function aB(){ ko.applyBindings(vm) }
    g.p? $.in(0, aB) : aB()

}

OK=function(a){

    var g=G(arguments)

    g.push('+')

    return ok.apply(null, g)

}


$o = ko.o= function(a){
    return ko.observable(a)
}


$oa= ko.oa= function(a){var g=G(arguments)
    return ko.observableArray(g.A_? g.f: g    )}
oA= ko.observableArray.fn // inhertince extension :)
oA.p = function(i){var  oA=this
    oA.push(i)
    return oA }

ko.uw=ko.unwrap



utils=function(){
    //ko.u= ko.ut=ko.utils
//ko.u.af= ko.u.arrayFilter
//ko.rTp= ko.renderTemplate
//ko.ve=ko.vE= ko.virtualElements
//ko.B=ko.ve.ab=ko.vE.AB=ko.vE.allowedBindings
//ko.bD=ko.applyBindingsToDescendants
//ko.ut.uo=ko.ut.unwrapObservable
//ko.do= ko.dependentObservable

}