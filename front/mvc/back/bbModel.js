$l('bbModel')

bb.M.x= function(a,b,c){return bb.M.extend(a||{},b,c)}

$m=function(){
    var g=G(arguments);
    return $M.apply(null, g)()
}



$M=function(ob){var g=G(arguments), Md, klas

    ob=ob||{}
    ob.defaults = ob.defaults || ob.df || ob.d
    if(  !F(ob.initialize) && F(ob.i) ) {  ob.initialize = ob.i  }
    ob.id = D(ob.id)? ob.id : ob.x
    ob.idAttribute = ob.idAttribute || ob._id
    ob.events= ob.events || ob.ev || ob.e
    ob.model= ob.model || ob.md || ob.m
    ob.validate=ob.validate || ob.v
    Md=  bb.M.extend(ob)
    klas=  function  (a,b,c,d){
        var g=G(arguments)
        return new Md(a,b,c,d)
    }
    klas.m=klas.M= Md
    return klas

}

md.S= md.save
md.s= function(a,b,c){var md=this
    if(O(a) && O(b)){if(b.v){b.validate= b.v?true:false}}
    if(S(a) && O(c)){if(c.v){c.validate= c.v?true:false}}
    return md.set(a,b,c)
    return md
}
md.g= md.get

md.J = md.tJ= md.toJSON
md.tS = md.jS= function(){return _.jS(this.J())}
md.$l = md.lJ=function(){return $l(this.jS())}


md.at= function(){return this.attributes}

md.b= md.bind

md.V=function(Vw, ob){
    ob = ob || {}
    ob.m=this

    return Vw(ob)

}






md.l=function(){
    $l(this.toJSON()); return this }

md.tr=  function(a,b){ this.trigger(a,b)
    return this
}
md.l2=function(a,b,c,d){ return this.listenTo(a,b,c,d) }
md.l1=function(a,b,c,d){ return this.listenToOnce(a,b,c,d) }

/*
 // escape   has     unset    clear – parse  pa P – clone  cl– toJSON
 – url     u – urlRoot  uR– sync   sy fetch  F  – save  S – destroy
 – validate    vl – validationError  vE – isValid   iV
 – attributes– changed  – isNew iN – hasChanged  hC  – previous p
  – previousAttributes  pA – changedAttributes cA
 */


md.AD= md.oA=function(fn){

    // "add" (model, collection, options) — when a model is added to a collection.

    fn=fn|| function(m){


            m.at= m.attributes
            m.s=function(a,b,c){
                if(O(a) && O(b)){if(b.v){ b.validate= b.v?true:false} }
                if(S(a) && O(c)){if(c.v){ c.validate= c.v?true:false} }
                return m.set(a,b,c)}
            m.g= m.get
            m.j= m.toJSON
            m.o= m.on
            E$(m)
            a.A(m)
        }

    return this.on('add', fn)

}
md.RM= md.oRm=  function(a,b,c){
    // "remove" (model, collection, options)
    // — when a model is rmd from a collection.
    return this.on('remove',a,b,c)
}
md.DS= md.oX= md.oD=function(fn){
    // "destroy" (model, collection, options)
    // — when a model is destroyed.
    return this.on('destroy', fn)
}
md.RS= md.oR=md.oRs=function(fn){
    // "reset" (collection, options) —
    // when the collection's entire contents have been replaced.
    return this.on('reset', fn)
}
md.SO= md.oSo=function(a,b,c){
    // "sort" (collection, options)
    // — when the collection has been re-sorted.
    return this.o('sort',a,b,c)
}

md.CH= md.$= md.ch= md.oC=md.oCh=function(n, fn){var g=G(arguments),o
    o= g.F? {fn: g.f} : {at: g.f, fn: g.s}
    // "change" (model, options)    "change:[attribute]" (model, value, options)
    return g.at?
        this.on('change:'+ o.at, o.fn):
        this.on('change', o.fn)
}
md.hC=function(at){var md=this,
    g=G(arguments),o

    o= g.F? {fn: g.f} :
        F(g.s)? {at: g.f, fn: g.s}:{}

    if(o.fn ){

        if(md.hC(o.at)){
            o.fn()
        }
        return this
    }



    return this.hasChanged(at)
}
md.RQ= md.oQ=md.Rq= function(mdCl,fn) {
    // on start of md|cl SERVER request
    //fn passed(md_or_cl,  xhr, op)
    return this.on('request', fn)
}
md.SY= md.oS=md.oSy=function(a,b,c){
    // "sync" (model_or_collection, resp, options)
    // — when a model or collection has been successfully synced with the server.
    return this.o('sync',a,b,c)
}
md.ER= md.oZ= md.oE=md.oEr=function(a,b,c){
    //"error" (model_or_collection, resp, options)
    // — when model's or collection's request to remote server has failed.
    return this.o('error',a,b,c)
}
md.VL=   md.oIv=function(a,b,c){
    //"invalid" (model, error, options)
    // — when a model's validation fails on the client.
    return this.on('invalid',a,b,c)
}
md.AL= md.o$=md.oAl=function(fn){  return this.on('all', fn)  } //passes event name as 1st ag
//md.o= function(){var g=G(arguments); this.on.apply(this, g) }


bb.Per=function(){
    return $M({
        d: {n:'j', a:20, o:'p'}
    })}



MODCHANGE=function(){$.x('x','modchange')


    Bk = $M({

        d: {ID: "ooooo", n: ""},

        i: function(){var bk=this;$l('init..')


            bk.$(function(){  $l('change')
                g=G(arguments)
                o=g[1]
                m=g[0]

                if(bk.hC('ID')){$l('ID changed') }
               // if(bk.hC('n')){$l('n changed') }
               bk.hC('n', function(){
                   $l('n changed') })
            })
        },

        show: function () {$l('ID: '+this.g('ID')+','+' n: '+this.g('n'))}

    })

    bk = Bk({ ID: 1,  n: "a" })
    bk.s({r: 'a'}, { a:1, b:2, c:3 })
    $.in(function(){
        bk.s('n', 'z', { a:1, b:2, c:3 })
        $.in(function(){
            bk.s({n: 'rfds'}, { a:1, b:2, c:3 })
        },'*')

    },'*')
}



BACKSET=function(){$.x('g','backset')


    d = $.d(   'z',   500, 300  ).id('sb')



    Sb=$M({

        ask: function(){

            this.s({  c: prompt('col?')   })

        }})

    sb= Sb()


   // sb.on('change', function(){g=G(arguments)})
    sb.on('change:c', function(modThatChangedC, cChangedTo, ops){
        $l('changed to ' + cChangedTo)

        o=ops

        modThatChangedC.s('dat', 'something')

        $('#sb').C(cChangedTo)
        $.h1(   modThatChangedC.g('dat'))
    })



    sb.s({
        c: 'b'
    })




 //   sb.ask()
 //   Per=$M({i: function(){  $l(  this.g('n')  + ' says hello!'   ) }})
 //   p=Per( {n:"mac", a:67})

}



OPS=function(){$.x('o', 'ops')


    o = _.x({}, bb.E)


    o.on('yo', function(){
        g=G(arguments)
    })


    o.trigger('yo', 'a','b','c')

}

BBSAMP1=function(){$.x('b','bbsamp','+')

    d=$.d()

    Rec = $M()

    RecV = $V({
        tagName:'div', className:'rec',
        events:{'click': 'move'},
        move:function(){this.$el.css('left', this.$el.position().left +10)},
        rr:function(){return this.sDims().sPos().sCol()},
        sDims:function(){
            this.$el.WH(this.model.get('w'), this.model.get('h'))
            return this
        },
        sPos:function(){
            this.$el.ab()
                .LR(
                this.model.get('pos').x, this.model.get('pos').y)
            return this
        },
        sCol:function(){
            this.$el.C(this.model.get('C'))
            return this}
    })

    _.e([
        Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){

        var r=  RecV({  model:md  })
        r.rr().$el.a2(d)
    })
}


OSYNC=function(){$.x('x','osync')

    bb.sync = function(met, md) {
        $l(met+': '+_.jS(md))
        md.s('id', 1)
    }
    bk = new bb.M({
        tt: "The Rough Riders",
        au: "Theodore Roosevelt"
    })
    bk.S()
    bk.S({au: "Teddy"})


   // save accepts success and error cbs in the options hash,
    // which will be passed the args (md, resp, ops).
   // If a server-side validation fails, return a non-200 HTTP response code,
   // along with an error response in text or JSON.


    bk.save(
        "au", "F.D.R.", {
            error: function(){$l('error')},
            success: function(){$l('success')}
        })

}





/// old:

md.o=function(ob, q){
    var Md = this,md;  ob=ob||{}
    ob.collection= ob.collection || ob.cl || ob.c
    ob.model = ob.model || ob.md || ob.m
    md=new Md(ob)
    if(q){md.a2(q)}
    return md
}

bb.mod=function(ob){ob=O(ob)?ob:{}; var Md,md
    Md =  bb.M.e(ob)
    return function(ob){
        md = new Md(ob)
        return md}}



