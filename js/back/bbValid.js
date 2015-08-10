/*

 md.validate() checking attr vals  prior to setting them.

 By default occurs when md is persisted using save() or when set() is called if {vld:true}

 Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
 .save() will not continue and atts of md will not be modified on server.

 Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
  This object is distinct from current atts of md  and from  pams passed to operation.

 Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.


 validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller


 */


VALID=function(){$.x('x','valid')

    Per = new bb.M({n: 'J'})

    Per.validate = function(at){if (!at.n) {return '!name' }}
    Per.s({n: 'S'})


    $l(P.g('n'))  // 'S'
    Per.unset('name', {vld: true}) // false







    Td = bb.M.x({

        df: {  completed: false },
        vld: function(at){ if(U(at.tt)){  return "!tt"  }},

        i: function(){

            this.on("invalid", function(md, z){   $l('err: '+ z)   })
        }

    })


td = new Td()
td.s('completed', true, {vld: true}); // logs: !tt


$l('completed: ' + td.g('completed')); // completed: false

emptyTd = new Td(null, {vld: true});  $l(emptyTd.validationError);

}


FRND=function(){$.x().h1('frnd')


    Per =  $M({

        d:{lame:true},

        v: function(at,op){  if(at.n=='rigo'){return "n cant be rigo!"}  },

        i: function(){  var md=this; $l('new frnd!')

            md.on('change:n', function(m,e){  $l('change:n:'+ e)  })

            md.oIv(function(m,z){   $l('invalid trgd: '+z)    })
        }


   })




    p1 = Per({g:'jigo'})


    p1.s('n', 'hah')
    p1.s({n:"rigo", a:7}, {validate:true}

    )


    $l('n:'+p1.g('n'))


    p2= Per({ n:"qigo",  a:47  })
    p3= Per({ n:"rigo",  a:7  })

    $.bt('p2 validty', function(){$l('isValid: ' + p2.isValid())
    }) //  valid
    $.bt('p3 validty', function(){$l('isValid: ' + p3.isValid())
    }) //not valid




    //
    cl=$Cl({m:Per})()
    cl.add([p2,p3])
    cl.remove(p3)

}
PEOPLE=function(){$.x('b', 'people')


    Per  = $M({
        i: function () { this.oIv(function(m,z){$l(z)}) },
        d: {n:'doe', a: 30, j: 'wrk'},
        validate: function (at) {if (at.a<0){return 'a<0!'}},
        work: function () {
            return this.g('n') + ' is working'
        }
    })


    p = Per({n: 'y', a: 34})
    p.oIv(function (m, z) {$l('err: '+z)})


    PerV = $V({
        t: 'li',
        k: 'person', x: 'some-person',

        i: function () {
            this.r()
        },

        //tp: _.tp("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
        r: function () { var v = this
            //this works, but doesnt use a template
            v.h(v.g('n')+' '+v.g('a')+' '+v.g('j'))
            v.h( v.tJ() ) }
    })

    pV= PerV({m: p})




    peepC = $Cl({m: Per})
    pC = peepC([
        {n: 'rigo', a: 29},
        {n: 'j', a: 2},
        {n: 's', j: 'gx'}
    ])
    pC.add(p)
    pC.at(1)
    //pC.n('joejoe')
    pC.at(1)
    pC.s('name', 'joejoe')
    PeepV = $V({
        tn: 'ul',
        i: function () { $l('hi'); $l(this.cl)  },

        r: function () {var vw=this
         vw.eCl(function (p) {var v,pV
             $l(p.g('n'))
             pV = PerV({m: p})
             $l(pV.el)
             vw.q.A(pV.el)
            }, this) }
    })
    pcv = PeepV({cl: pC})
    pcv.r()
    $.A( pcv.el )
}




// 2 plugins
// http://naturaily.com/blog/post/backbonejs-plugins-localstorage-and-backbonevalidation