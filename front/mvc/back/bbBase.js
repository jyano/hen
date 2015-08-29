
$.scrp= function(i,t){
    var scr= $("<script type='text/html'>")
    scr.id(i)
    if(t){scr.A(t)}
    scr.A()
    return scr
}

$l('bbBase')

bb=Backbone

bb.M= bb.Model
bb.C= bb.Collection
bb.V= bb.View
bb.R= bb.Router
bb.E= bb.Ev=bb.Events

bb.S= bb.Sync
bb.U= bb.Utility


bb.x=  function(ob){

    ob=ob||{}

    var Ev =  bb.E.extend(ob)

    return function(a,b,c,d){
        return new Ev(a,b,c,d)
    }
}



bb.H= bb.History
bb.h=bb.history


$P=function(){
    md= bb.M.prototype
    vw= bb.V.prototype
    rt= rtr = bbR =  bb.R.prototype
    cl= bb.C.prototype
}

$P()



/*
 blue suites hotel

 calle 93 no. 17-48  chico


 */