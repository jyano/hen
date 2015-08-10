bb.E.b=bb.E.bind
bb.E.tr=bb.E.trigger

bb.pe=bb.parseEvents=function(ev){

    EVob = {
        $: 'click', $$: 'dblclick',
        v: 'mouseover'
    }


    ev=ev||{$: function(){}}

    _.e(ev, function(v, k){
        if(EVob[k]){
            ev[EVob[k]]=v  }
    })

    return ev

}



BBEV=function(){$.x().i('chicks')

    ev = bb.E
    ev.b("fun:had", function(){  $l("wee!")  })
    ev.tr("fun:had")

}



