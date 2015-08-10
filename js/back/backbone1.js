$P=function(){
    bb=Backbone
    md=bb.Model.prototype
    vw= bb.View.prototype
    rt=bb.Router.prototype
    cl=bb.Collection.prototype
}
$P()

works=function(){

    BBVIEW=function(){$.x('b','bbview')

        $.dI('d1',
            'r', 500, 500)



        LstV = bb.V.e({
            el: '#d1',
            r: function(){
                this.A(
                    $.ul([
                        'hello']))},
            i: function(){ this.r() }})

        v = LstV.o()
    }
    BBVIEW=function(){$.x('b','bbview')
        v=$V({
            q: d=$.dI('d1','r', 500, 500),
            r: function(){this.A($.ul(['hello']))},
            i: function(){this.r()}
        })()
    }
    BBVIEW=function(){$.x('b','bbview')


        $.dI('d1','r', 500,500).V({
            r: function(){this.A($.ul(['hello']))},
            i: function(){this.r()}
        })()

    }
    PER=function(){$.x('n')
        Per=bb.M.e({

            d: {n:'j', a:20, o:'p'}

        })
        p= new Per
        PerV = $V({t:'li', _:'some-per', k:'per',
            r: function(){
                this.A('n').A()
            },
            //  this.A(this.g('n')).A() //  this.A(this.model.get('n').A()
            i: function(){
                $l(this.model);
                this.r()
            }
        })
        pV =  PerV({ m:p  })

    }
    PER=function(){$.x('n')

        p = $M({ d: {n:'j',a:20,o:'p'}   })()

        PerV = $V({t:'li', _:'some-per', k:'per',
            r: function(){  this.A('n').A() },
            i: function(){ $l(this.model); this.r() }
        })

        pV = p.V(PerV) //PerV({ m: p })
    }
    PER=function(){$.x('n')
        m = $M({d:{n:'j',a:20,o:'p'}})()
        m.V($V({
            t:'li', _:'some-per', k:'per',
            r: function(){  this.A('n').A() },
            i: function(){this.r()}
        }))
        $.in(function(){m.l()}, '*')
    }
    TP=function(){$.x().A(
        a= _.tp("<div>hello:<%=n%></div>")({n:'moe'}),
        b= _.tp('<b><%-tag%></b>',{tag:'<script>'}), // <%- vs <%= ?
        c= _.tp(
            '<%_.e(peep,function(name){%>'+
            '<li>'+'<%=name%>'+'</li>'+
            '<%})%>'
            ,{peep:['moe','curly','larry']})
    )

    }
    WOB=function(){$.x('x', 'bb view people')
        //without backbone!
        ul = $.ul().id('peep')
        peep = [{n:'a',a:11}, {n:'b',a:46}, {n:'c',a:13}]
        vw={r:function(){
            $('#peep').E()
            _.e(peep, function(p){
                $('#peep').A('<li>'+ p.n + '(' + p.a + ')</li>')
            })}}
        vw.r()
        $.in(function(){peep.pop(); vw.r()},'*')
    }
    SIMP=function(){$.x('r').h1('tut')
        p = $M()({n:'j'})
        $.h3('p: '+p.g('n'))
    }
    BBVP1=function(){$.x('x', 'bb view people')

        peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]
        vw= $V({t:'ul',
            i:function(){this.$el.C($r())},
            r:function(){var el=this.$el.E()
                _.e(this.collection, function(p){$('#peep')
                    el.A($.li().A(p.n + '(' + p.a + ')'))})
                return this}

        })({cl: peep})


        $.A(vw.r().el)
        $.in(function(){peep.pop(); vw.r()},'*')
    }
    BBVP=function(){$.x('x', 'bb view people')

        peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

        vw= $.ulV({
            i:function(){
                this.q.C($r())

            },
            r:function(){var el=this.q.E()
                this.cl(function(p){
                    el.A($.li().A(p.n+'('+p.a+')'))})
                return this}
        })({cl: peep})
        $.A(vw.r().q)
        $.in(function(){peep.pop(); vw.r()},'*')
    }
    TMP=function(){$.x('r'); $V({
        t:'li', x:'some-per', k:'per',
        tp: tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),
        r: function(){this.A().A(this.tp(this.model.toJSON()))},
        i: function(){$l(this.model); this.r()}
    })({m:Per=$M({d:{n:'j',a:20,o:'p'}})()})}
    BBSAMP1=function(){$.x('b','bbsamp','+')
        d=$.d()
        Rec = bb.M.e()

        RecV = bb.V.e({t:'div', k:'rec',

            events:{'click': 'move'},
            move:function(){this.$el.css('left', this.$el.position().left +10)},
            rr:function(){return this.sDims().sPos().sCol()},
            sDims:function(){this.$el.WH(this.model.get('w'), this.model.get('h'))
                return this},
            sPos:function(){this.$el.ab().LR(
                this.model.get('pos').x, this.model.get('pos').y)
                return this
            },

            sCol:function(){this.$el.C(this.model.get('C'))
                return this}
        })


        _.e([
            Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ], function(md){


            var r=  RecV.o({model:md})

            r.rr().$el.a2(d)
        })



    }
    BBSAMP=function(){$.x('b','bbsamp','+')


        d=$.d()
        Rec = $M()

        RecV = $V({k:'rec',

            e: {'click': 'move'},

            move:function(){
                this.q.css('left',
                    this.q.position().left +10)
            },
            r:function(){return this.sDims().sPos().sCol()},
            sDims:function(){
                this.q.WH(this.model.g('w'),
                    this.model.g('h'))
                return this
            },

            sPos:function(){this.q.ab().LR(
                this.model.g('pos').x,
                this.model.g('pos').y
            )
                return this
            },


            sCol:function(){this.q.C(this.model.g('C'))
                return this}
        })

        _.e([
            Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ], function(md){ RecV({model:md}).rr().$el.a2(d)  })

    }
    BBVT=function(){$.x('x', 'bb view and template');
        md= new bb.M({d:[{t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}]})


        $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

        $.dI('list-tp', [ $.la() ]).C('o')


        Vw = bb.V.e({
            el:'#ct',
            i: function(op){$l(op.blOp); this.tp =$('#list-tp').children()},
            rr:function(){var da, tp; $l('rr: '+ this.model.get('d')[0].h );//$.c('b').ab(300,300)
                da=this.model.get('d')
                tp=this.tp, ul= this.$el.find('ul')
                _.e(da, function(da){ul.A(tp.clone()
                    .find('a').hr('href', da.h).T(da.t).end())}) },
            ev: {'click button':'rr'}
        })
        vw = new Vw({blOp:'empty!', model:md})
        return vw

    }
    BBVT=function(){$.x('x', 'bb view and template');



        $.dI('ct', [
                $.bt('Load'),
                $.ul().id('list')
            ]
        ).C('y')

        $.dI('list-tp', [ $.la() ]).C('o')


        v=$V({

            q: '#ct',

            events: {'click button': 'r'},

            r: function(){var da, tp,ul
                $l('RENDER')
                /*
                 $l('rr: '+ this.model.get('d')[0].h )
                 //$.c('b').ab(300,300)
                 da=this.model.get('d')
                 tp=this.tp
                 ul= this.$el.find('ul')
                 _.e(da, function(da){ul.A(tp.clone()
                 .find('a').hr('href', da.h)
                 .T(da.t).end())})
                 */
            },
            i: function(op){
                $l(op.blOp)
                this.tp = $('#list-tp').children()
            }
        })({

            blOp: 'empty!',

            m: m=$M()({
                d:[
                    {t:'a.com', h:'a.com'},
                    {t:'b.com', h:'b.com'},
                    {t:'c.com', h:'c.com'}
                ]
            })

        })

    }


};works()

bb=Backbone


bb.pe=bb.parseEvents=function(ev){


    ev=ev||{$: function(){}}

    _.e(ev, function(v, k){if(EVob[k]){ev[EVob[k]]=v}})
    return ev
}
EVob = {

    $: 'click',
    $$: 'dblclick',
    v: 'mouseover'

}

VWW=function(){$.x()


    d= $.d('r',200).A(
        $.h1('hello'),
        $.bt(__)
    )

    //d.$(function(){v.r()})

    mOv=function(){$l('mouse over !')}

    v = $V({
        e:{'click button': function(){$l('click')},
            $$: 'r',
            v: mOv
        },

        q:d,

        r:function(){
            alert('double click')
            $.bd().C($r())
        }
    })()
}




bb.C=bb.Collection; bb.C.x=bb.C.e = bb.C.extend
bb.c=function(ob){
    var Cl =  bb.Collection.extend(ob)
    return function(a,b,c,d){
        return new Cl(a,b,c,d)}}
bb.M=bb.Model

bb.M.x=bb.M.e=function(ob){var g=G(arguments),o
    var Md
    ob=ob||{}
    ob.defaults = ob.defaults || ob.df || ob.d
    // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}
    //o=o||{}
    /*
     if(o.fn){ob.i= o.fn}

     ob.initialize = ob.initialize || ob.i
     ob._i=ob.initialize
     ob.initializeX=function(op){
     this.q= this.$el
     this.a2=function(a){return this.q.a2(a)}
     //$l('gen init..')
     this.g=function(a){if(a){return this.model.get(a)}}
     this.A=function(ob){
     var g=G(arguments),
     q=this.q
     if(S(ob)){ob = this.g(ob)}
     if(ob){q.A(ob)}
     if(U(ob) || g.p){q.A()}
     return q
     }
     _.b(ob._i,this) (op)
     }
     ob.id = D(ob.id)? ob.id : ob.x
     ob.className=ob.className|| ob.k
     ob.tagName=ob.tagName|| ob.tn || ob.t
     ob.defaults=ob.defaults || ob.df || ob.d
     ob.events= ob.events || ob.ev || ob.e
     ob.render=ob.render || ob.rr || ob.r
     ob.tagName=ob.tagName || ob.tn || ob.t
     ob.collection= ob.collection || ob.cl || ob.c
     // ob.render= ob.render || ob.rr || ob.r// ob.render= ob.render || ob.rn*/

    ob.model= ob.model || ob.md || ob.m
    md= bb.M.extend(ob)

    md.o=function(ob, q){
        var Md = this,md
        ob=ob||{}
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        md=new Md(ob)
        if(q){md.a2(q)}
        return md
    }
    return md
}





bb.m=function(ob){ob=O(ob)?ob:{}
    var Md,md
    Md = bb.M.e(ob)
    return function(ob){
        md = new Md(ob)
        return md
    }
}
//bb._M=function(ob){return  bb.M.extend(ob)}
bb.V=bb.View
bb.v=function(ob){var Vw =  bb.V.x(ob)
    return function(a,b,c,d){
        return new Vw(a,b,c,d)}}
bb.R=bb.Router
bb.R.e=bb.R.extend
bb.r=function(ob){
    var Rt =  bb.Router.extend(ob)
    return function(a,b,c,d){ return new Rt(a,b,c,d)    }
}
bb.E=bb.Events
bb.x= bb.e=function(ob){

    var Ev =  bb.Event.extend(ob)
    return function(a,b,c,d){ return new Ev(a,b,c,d)    }

}

bb.H=bb.History
bb.S=bb.Sync
bb.U=bb.Utility

toMdOb=function(a){
    a=O(a)?a:{}
    if(a.i){a.initialize=_v(a.i)}
    if(a.I){a.initialize=_v(a.I)}
    if(a.d){a.defaults=a.d}
    if(a.D){a.defaults=a.D}
    if(a.v){a.validate=a.v}
    if(a.V){a.validate=a.V}
    a.idAttribute= '_id'
    return a
}
M$=function(ob){ob=O(ob)?ob:{}
    var Md, md
    Md = bb._M(ob)
    md = new Md(ob)
    return md

}

md.jason = 1000
md.g=md.get
md.tJ=md.toJSON
md.o=md.on
md.s=function(a,b,c){var md=this
    if(O(a) && O(b)){if(b.v){b.validate= b.v?true:false}}
    if(S(a) && O(c)){if(c.v){c.validate= c.v?true:false}}
    return md.set(a,b,c)
    return md
}
md.at= md.attributes
md.b= md.bind


$V=function(){var g=G(arguments),

    Vw = bb.V.e.apply(V,g)

    return function(){
        var    g=G(arguments), vw, ob

        ob= g.f||{}
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m

        vw = new Vw(ob)

        if(g.s){vw.a2(g.s)}

        return Vw}
}



$.fn.V=function(ob){
    ob=ob||{}
    ob.q=this
    return $V(ob)
}
$M=function(){var g=G(arguments),
    Md = bb.M.e.apply(V,g)
    return function(a,b,c,d){var g=G(arguments)
        return  new Md(a,b,c,d)}}
$.uV=$.ulV=function(ob){ob=ob||{}
    ob.t = 'ul'
    return $V(ob)
}
vw.cl=function(fn){
    _.e(this.collection, fn)
    return this
}
md.V=function(Vw, ob){
    ob = ob || {}
    ob.m=this
    return Vw(ob)
}


md.l=function(){
    $l(this.toJSON());
    return this
}



BACKSET=function() {$.x()

    Sb= Sidebar = bb.m.e({
        ask: function() {this.s({c: prompt("color?")})}})
    sb = Sb.o()
    sb.on('change:c', function(md, c) {$('body').C(c)})
    sb.set({c: 'b'})
    sb.ask()
    //right from ko site
    d = $.dA(400)

    Sid = bb.M({
        promptColor: function () {
            this.s({
                co: pr('color:')
            })
        }
    })

    sb = Sid()
    sb.on('change:co', function (md, c) {d.C($l(c))})
    sb.C('w')
    sb.ask()
    Per=bb.M.e({i:function(){alert("Welcome")}})
    p=Per({})
    p.s({n:"mac",a:67})
    $.dA(300).id('sb')
    Sidebar=bb.M.e({
        fn:function(){
            return this.s({
                c:prompt("c?")})}})
    Sidebar().oC('c', function(m,c){
        $('#sb').C(c)
    }).s({c:'w'}).fn()

}
BBCL=function(){$.x().h1('backcl')
    bads=bb.C.e().o().oA(  function(s){
        alert("new baddie: "+ s.g("n"))})
    bads.add([{n:"bad1"}, {n:"bad2"}])

    Frnd = bb.M.e({d:{lame:1}})
    f1=Frnd.o({n:"Lul", a:67})
    f2= Frnd.o({g:'jigo'})
    f2.s({n:"Rigo", a:7})
    f2.s('n','hah')
    Per=bb.M.e({
        d:{lame:true},
        i:function(){var t=this
            t.on('error', function(m,e){alert(3); $l(e)})
            t.on('change:n',
                function(m,e){alert(3); $l(e)})
        },
        v:function(at){if(at.n=='rigo'){return "n cant be rigo!"}}
    })
    p=Per.o({n:"rigo", a:7})

    cl=bb.C.e().o()
    f1=cl.A(f1)
    f2=cl.A(f2)
    cl.rm(f1)



    Pers=bb.C.e({m:Per})
    pers=Pers.o()
    p1= pers.add(p)
    pers.add(p2)
    pers.rm(p1)

}
FETCH=EVTSAVE=function(){
    m=bb.M.e({n:'j'})
    Don = bb.M.e({d:{n:null, sprink:0, cream:0},
        u:function(){return this.id?'/dn/'+this.id:'/dn'} })
    bc=bostonCream=Don.o({n:'Bos',cream:1})
    bc.s({sprink:1}).S() //save
    Dons=bb.C.e({m:Don, url:"/dn"})
    dons=Dons.o()
    dons.fetch()
    // donuts.at(0); -> gets donuts by index.
    // donuts.get(0); -> gets donuts by id.
    // donuts.each(function(d){$l(d.get("name"))})
    // donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
    // donuts.map(function(d){return d.get("name")})
    Shop=bb.M.e({

        i: function(){
            this.dons=Dons()
            this.dons.url='shops/'+this.id+"/dn"
        },
        df: {n:"z"}
    }).o()
    Shop.oA(function(dn){ alert("added "+ dn.g('n')) })
    lem = Shop.dons.A({n:"Lem"})
    ev = bb.E()
    ev.b("fun:had", function(){alert("wee!")})
    ev.tr("fun:had")  //it'll alert "wee!"
}


MODCHANGE=function(){$.x()

    Bk = bb.M.e({

        d: {ID: "", n: ""},
        initiate: function(){

            $l('init..')

            var that=this

            this.on('change',  function() {alert('change')
                if(that.hasChanged('ID')){
                    alert('ID changed')}
                if(that.hasChanged('n')){
                    alert('n changed')}})
        },

        showAlert: function () {
            alert('ID: '+this.g('ID')+','+' n: '+this.g('n'))
        }

    })


    // ChildBook = Bk.extend({})
    bk = Bk.o({ID: 1, n: "a"})
}

evt=function(){
    md.tr=  md.trigger
    md.o= md.on
    md.oA=function(fn){
        // "add" (model, collection, options) — when a model is added to a collection.
        fn=fn||function(m){
                m.at= m.attributes
                m.s=function(a,b,c){
                    if(O(a) && O(b)){if(b.v){
                        b.validate= b.v?true:false}}
                    if(S(a) && O(c)){if(c.v){
                        c.validate= c.v?true:false}}
                    return m.set(a,b,c)}
                m.g= m.get
                m.j= m.toJSON
                m.o= m.on
                E$(m)
                a.A(m)}
        return this.o('add',fn)
    }

    md.oH= md.o_= md.oRm=function(a,b,c){// "remove" (model, collection, options) — when a model is rmd from a collection.
        return this.o('remove',a,b,c)
    }


    md.oX= md.oD=function(a,b,c){// "destroy" (model, collection, options) — when a model is destroyed.
        return this.o('destroy',a,b,c)
    }


    md.oR=function(a,b,c){// "reset" (collection, options) — when the collection's entire contents have been replaced.
        return this.o('reset',a,b,c)
    }


    md.oSo=function(a,b,c){
        // "sort" (collection, options) — when the collection has been re-sorted.
        return this.o('sort',a,b,c)
    }

    md.oC=function(n,f){
        // "change" (model, options)
        // — when a model's attributes have changed.
        // "change:[attribute]" (model, value, options) — when a specific attribute has been updated.
        if(U(f)){return this.o('change', n)};
        return this.o('change:'+n, f)
    }

    md.oQ=function(a,b,c) {
        // "request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
        return this.o('request',a,b,c)
    }


    md.oS=function(a,b,c){
        // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
        return this.o('sync',a,b,c)
    }


    md.oZ= md.oE=function(a,b,c){
        //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
        return this.o('error',a,b,c)
    }

    md.oI= md.oV=  md.oIV=function(a,b,c){
        //"invalid" (model, error, options) — when a model's validation fails on the client.

        return this.o('invalid',a,b,c)
    }


    md.oRt=function(n,f){var o=this
        //"route:[name]" (params)— Fired by the router when a specific route is matched.  //"route" (route, params)   — Fired by the router when any route has been matched.
//"route" (router, route, params)  — Fired by history when any route has been matched.

        if(U(f)){return o.o('route', n)}
        return o.o('route:'+n, f)
    }
    md.o$=md.oAl=function(f){//passes event name as 1st ag
        return this.o('all', f)
    }

};evt()
viw=function(){

    vw.g=function(m){return this.model.get(m)}
    vw.H=function(a){this.$el.html(a);return this}
    vw.J=function(){return this.model.toJSON()}
    vw.cl= vw.collection
    vw.e=function(a,b){
        return this.cl.each(a,b)
    }
    vw.J=function(fn){
        var vw=this,
            j= this.collection.toJSON()
        if(F(fn)){_.e(j,fn);return vw}
        return j
    }
    vw.r=  vw.rr=function(){return this.render()}

    /*
     VWob={
     i:'initialize',
     m:'model', c:'collection',
     e:'el',
     n:'id', x:'id',
     k:'className',
     tn:'tagName',
     t:'tagName',
     a:'attributes',
     ev:'event'
     }
     */
    bb.V.e=function(ob){var g=G(arguments),o
        o= g.F_?
        {fn: g.f, ob: g.s} :
        {ob: g.f, fn: g.s}

        o=o||{}
        ob=ob||{}
        if(o.fn){ob.i= o.fn}

        ob.initialize = ob.initialize || ob.i
        ob._i=ob.initialize
        ob.initialize=function(op){
            this.q= this.$el

            this.a2=function(a){
                return this.q.a2(a)
            }
            //$l('gen init..')
            this.g=function(a){

                if(a){return this.model.get(a)}
            }


            this.A=function(ob){
                var g=G(arguments),
                    q=this.q
                if(S(ob)){ob = this.g(ob)}
                if(ob){q.A(ob)}

                if(U(ob) || g.p){q.A()}
                return q
            }

            if(F(ob._i)){
                _.b(ob._i,this) (op)
            }

        }
        ob.id = D(ob.id)? ob.id : ob.x || ob._ || ob['#']
        ob.className=ob.className|| ob.k
        ob.tagName=ob.tagName|| ob.tn || ob.t
        ob.defaults=ob.defaults || ob.df || ob.d
        ob.events= ob.events || ob.ev || ob.e
        ob.render=ob.render || ob.rr || ob.r
        ob.tagName=ob.tagName || ob.tn || ob.t
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model= ob.model || ob.md || ob.m
        ob.el = ob.el || ob.q
        // ob.render= ob.render || ob.rr || ob.r
        ob.render= ob.render || ob.rn

        ob.events = bb.parseEvents(
            ob.events
        )


        vw= bb.V.extend(ob)
        //vw.o=function(ob){ return new this(ob)}
        vw.o=function(ob,q){
            var Vw = this, vw
            ob=ob||{}
            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            vw=new Vw(ob)
            if(q){vw.a2(q)}
            return vw
        }
        return vw
    }



    BBSAMP1=function(){$.x('b','bbsamp','+')
        d=$.d()
        Rec = bb.M.e()

        RecV = bb.V.e({
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
            Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ], function(md){

            var r=  RecV.o({
                model:md
            })

            r.rr().$el.a2(d)
        })
    }





    Vw=bb.V.e({
        renderCollection: function(op) {op = op || {}
            op.target = op.target || this.$el;
            op.cl = op.cl ||    op.collection ||  this.collection;
            //- reset views
            if (!op.add) {this.disposeViews()}
            else {this._subviews = []}
            this._renderOptions = op
            //- if there is a collection and a view then render it
            if (op.cl && this.view) {op.cl.each(this._renderView, this)}
            return this
        }

    })

};viw()
marion=function(){
    bb.Ma=Bb.Marionette
    bb.Ma.IV=Bb.Ma.ItemView
    bb.Ma.CV=Bb.Ma.CollectionView
    bb.Ma.CpV=Bb.Ma.CompositeView
    ITEMV=function(){z()
        itemModel=new ItemModel({topic:'yano', text:'hi', score:0})
        $('body').A(
            new ItemView({model: itemModel}).render().el
        )
    }
    RANKY=function(tp){$.fm()
        s1.A(
            $.h1('topics!'),
            // ipt('new topic', 'post', '/tpc') ,

            collection = $.inputBox({
                boxTitle:'new topic',
                url:'/tpc',
                btT:'post',
                func:function(){},
                inputType:'textArea'
            }),
            $.h4('recent: ')
        )
        $.eG('tpc', function(tp){s1.A($.bt(_.tp.t, function(){
            ranky(tp)
        }), $.br(2))})

//ranky takes a topic model from the database
//(which includes all its items already)
//this is messed up
        ranky=function(topic){//var collection
            s2.E()
            s2.A(
                $.h1('topic page: '+ topic.t),
                $.bt('live chat', function(){ priv(topic.t) }),
                //ipt('new item', 'post','/itm', {t: t.t}, function(){qG('/tpc1', {t: t.t},function(t){ranky(t)})}, '-'),
                $.ipB({
                    boxTitle:'new item',
                    url:'/itm',
                    btT:'post',
                    defaults:{t: topic.t},
                    func:function(){$.G('tpc1', {t: topic.t}, function(t){ranky(t)})},
                    inputType:'text'
                }),

                collection=$.d()
            )


            itemCollection=new ItemCollection()

            _.e(topic.i, function(i){
                if(O(i)){
                    var itemModel=new ItemModel({  topic:topic.t,  text: i.t,   score: i.s   })
                    itemCollection.add( itemModel )
                    // var itemView=new ItemView({model: itemModel}).render().el
                    // collection(itemView)
                    // itemCollection.render()
                }
            })

            itemsView = new ItemsView({  collection:itemCollection  })

            itemsView.render()
        }
        ItemModel=Backbone.Model.extend({initialize:function(){}})
        ItemCollection=Backbone.Collection.extend({
            model:ItemModel,
            comparator:'score',

            render:function(){
                collection.E()
                _.e(this.models, function(itemModel){
                        var itemView=new ItemView({model: itemModel}).render()
                        collection(itemView.el)
                    }
                )
            }})
        ItemsView=Backbone.View.extend({
            initialize:function(){var self=this
                this.collection.on('change', function(){
                    alert(3)
                    this.sort()
                    self.render()
                })
            },
            render:function(){collection().E()
                this.collection.each(function(model){
                    var itemView=new ItemView({model: model}).render()
                    collection(itemView.el)
                })
            }
        })
        ItemView=Backbone.View.extend({
            initialize:function(){this.listenTo(this.model, 'change', function(){this.render()})},
            render:function(){
                var self=this,
                    topic=this.model.get('topic'),
                    score=this.model.get('score'),
                    text=this.model.get('text')

                this.el.E(
                    $.h1(text),
                    $.h4('score: '+ String(score)),
                    $.bt('up',  function(){
                        $.P('vte',  {t:topic, i:text, dr:'u'}, function(){
                            self.model.set('score', self.model.get('score')+1)
                        })
                    }),
                    $.bt('down',function(){
                        $.P('vte', {t: topic ,  i: text,   dr:'d'}, function(){
                                self.model.set('score', self.model.get('score')-1)}
                            //    function(){ranky(topic)}
                        )}))
                return this}})
    }
    MAR=function(){z()
        // http://davidsulc.com/blog/2012/04/15/a-simple-backbone-marionette-tutorial/

        d=_d().w(500).h(500).c('b').id('content').a()



        MyApp=new Bb.Ma.Application()


        MyApp.addRegions({
            mainRegion: "#content"})


        AngryCat=M$({})


        AngryCats=C$({  model:AngryCat  })


        //Temp(  'angry_cats-template', [thead()( tr().k('header')( th()('Name') ) ),  tbody()]  ).a()



        scrp('angry_cat-template')(

            td()('%= name')

        ).a()



        catV=Bb.Ma.IV.extend({
            template: "#angry_cat-template",
            tagName: 'tr',
            className: 'angry_cat'})



        catsV=Bb.Ma.CpV.extend({

            tagName: "table",

            id: "angry_cats",

            className: "table-striped table-bordered",

            template: "#angry_cats-template",

            itemView: catV,

            appendHtml: function(colV, itemV){
                colV.$("tbody").append(itemV.el)}})


        MyApp.addInitializer(

            function(ops){
                MyApp.mainRegion.show(new catsV(
                    {collection:ops.cats}))}

        )



        MyApp.start({cats:new AngryCats([
            {name:'Wet Cat' },
            {name:'Bitey Cat'},
            {name:'Surprised Cat'}])})






    }



    MARTREE=function(){z()

        scrp("node-template",
            "<li><%= nodeName %></li>").a()

        di("tree").a()

        // ul {list-style: disc; padding-left: 10px; margin-left: 10px; }

        TreeView=Backbone.Marionette.CompositeView.extend({


            template: "#node-template",


            tagName: "ul",


            initialize: function(){
                // grab the child collection from the parent model
                // so that we can render the collection as children
                // of this parent node
                this.collection=this.model.nodes},



            appendHtml: function(collectionView, itemView){
                // ensure we nest the child list inside of
                // the current list item
                collectionView.$("li:first").append(itemView.el)}
        })

// The tree's root: a simple collection view that renders
// a recursive tree structure for each item in the collection


        TreeRoot = Backbone.Marionette.CollectionView.extend(

            {itemView: TreeView}

        )



    }


    CATZ=function(){$.x()

        tempScr=function(i,e){

            t= $(
                '<script type="text/template" id="'+i+'">'
            )

            _.e(e,
                function(e){
                    t(e)
                })
            return t
        }
        //tempScr('cat', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()
        //tempScr('cats', [td()("<%= name =>")]).a()
        //Temp('cat1', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()
        //Temp('cats1', [td()( "<%= name =>" )]).a()
        d= $.d('y',500,500).id('content')
        MyApp = new bb.Marionette.Application()
        MyApp.addRegions({mainRegion: "#content"})
        AngryCat=Backbone.Model.extend({

            rankUp: function(){
                this.set({
                    rank: this.get('rank')-1
                })},

            rankDown: function(){
                this.set({rank: this.get('rank') + 1
                })}

            //,  defaults:{rank:0}
        })
        AngryCats=Backbone.Collection.extend({

            model: AngryCat,

            initialize: function(cats){
                var rank=1


                // _.each(cats, function(cat){ cat.set('rank', rank); ++rank })

                var self=this;

                MyApp.on('rank:up',function(cat){$l('rank up');

                    if (cat.get('rank') === 1) {
                        // can't increase rank of top-ranked cat
                        return true}

                    self.rankUp(cat)
                    self.sort()
                    self.trigger('reset')

                })
                MyApp.on('rank:down', function(cat){$l('rank down');

                    if (cat.get('rank') === self.size()) {
                        // can't decrease rank of lowest ranked cat
                        return true}

                    self.rankDown(cat)
                    self.sort()
                    self.trigger('reset')

                })},


            rankUp: function(cat) {
                // find the cat we're going to swap ranks with

                var rankToSwap = cat.get('rank') - 1
                var otherCat = this.at(rankToSwap - 1)

                // swap ranks
                cat.rankUp()
                otherCat.rankDown()},
            rankDown: function(cat) {
                // find the cat we're going to swap ranks with
                var rankToSwap = cat.get('rank') + 1;
                var otherCat = this.at(rankToSwap - 1);
                // swap ranks
                cat.rankDown();
                otherCat.rankUp()},
            comparator: function(cat){return cat.get('rank')}})
        AngryCatView = Backbone.Marionette.ItemView.extend({

            template: "#cat_template",
            tagName: 'tr',
            className: 'angry_cat',

            events: {
                'click .rank_up': 'rankUp',
                'click .rank_down': 'rankDown'},


            rankUp: function(){
                MyApp.trigger('rank:up', this.model);
                $l('trigger rank up')},


            rankDown: function(){
                MyApp.trigger('rank:down', this.model);
                $l('trigger rank down')}


        })
        AngryCatsView = Backbone.Marionette.CompositeView.extend({

            tagName: "table",
            id: "angry_cats",
            className: "table-striped table-bordered",

            template: "#cats_template",

            itemView:AngryCatView,

            appendHtml: function(collectionView, itemView){
                collectionView.$("tbody").append(itemView.el)
            }

        })
        MyApp.addInitializer(function(options){

            angryCatsView = new AngryCatsView({collection: options.cats})


            MyApp.mainRegion.show(angryCatsView)

        })
        MyApp.start({

            cats:new AngryCats([
                {name: 'Wet Cat', img:'/me.png', rank:1},
                {name: 'Bitey Cat',img:'/guy.png',rank:2},
                {name: 'Surprised Cat',img:'/chicks.png',rank:3}
            ])

        })
    }

    collView=function(){
        (function(root,factory){
            // UMD wrapper

            if ( F(define)  && define.amd ) {

                define( [ 'underscore', 'backbone', 'jquery' ], factory )
            } else if ( typeof exports !== 'undefined' ) {
                // Node/CommonJS
                module.exports = factory( require('underscore' ), require( 'backbone' ), require( 'backbone' ).$ );
            } else {
                // Browser globals
                factory( root._, root.Backbone, ( root.jQuery || root.Zepto || root.$ ) );
            }

        }( this, function( _, Backbone, $ ) {
            var mDefaultModelViewConstructor = Backbone.View
            var kDefaultReferenceBy = "model"
            var kOptionsRequiringRerendering = [ "collection", "modelView", "modelViewOptions", "itemTemplate", "selectableModelsFilter", "sortableModelsFilter", "visibleModelsFilter", "itemTemplateFunction", "detachedRendering", "sortableOptions" ];

            var kStylesForEmptyListCaption = {
                "background" : "transparent",
                "border" : "none",
                "box-shadow" : "none"
            }

            Backbone.CollectionView = Backbone.View.extend( {

                tagName:"ul",

                events:{
                    "mousedown li, td" : "_listItem_onMousedown",
                    "dblclick li, td" : "_listItem_onDoubleClick",
                    "click" : "_listBackground_onClick",
                    "click ul.collection-list, table.collection-list" : "_listBackground_onClick",
                    "keydown" : "_onKeydown"
                },

                // only used if Backbone.Courier is available
                spawnMessages : {"focus" : "focus"},

                //only used if Backbone.Courier is available
                passMessages : { "*" : "." },

                // viewOption definitions with default values.
                initializationOptions : [
                    { "collection" : new Backbone.Collection() },
                    { "modelView" : null },
                    { "modelViewOptions" : {} },
                    { "itemTemplate" : null },
                    { "itemTemplateFunction" : null },
                    { "selectable" : true },
                    { "clickToSelect" : true },
                    { "selectableModelsFilter" : null },
                    { "visibleModelsFilter" : null },
                    { "sortableModelsFilter" : null },
                    { "selectMultiple" : false },
                    { "clickToToggle" : false },
                    { "processKeyEvents" : true },
                    { "sortable" : false },
                    { "sortableOptions" : null },
                    { "detachedRendering" : false },
                    { "emptyListCaption" : null }],

                initialize : function( options ) {
                    Backbone.ViewOptions.add( this, "initializationOptions" ); // setup the ViewOptions functionality.
                    this.setOptions( options ); // and make use of any provided options

                    this._hasBeenRendered = false;

                    if( this._isBackboneCourierAvailable() ) {
                        Backbone.Courier.add( this )}

                    this.$el.data( "view", this ); // needed for connected sortable lists
                    this.$el.addClass( "collection-list" );
                    if( this.selectable ) this.$el.addClass( "selectable" );

                    if( this.processKeyEvents )
                        this.$el.attr( "tabindex", 0 ); // so we get keyboard events

                    this.selectedItems = [];

                    this._updateItemTemplate();

                    if( this.collection )
                        this._registerCollectionEvents();

                    this.viewManager = new ChildViewContainer();
                },

                onOptionsChanged : function( changedOptions, originalOptions ) {
                    var rerender = false;
                    var _this = this;
                    _.each( _.keys( changedOptions ), function( changedOptionKey ) {
                        var newVal = changedOptions[ changedOptionKey ];
                        var oldVal = originalOptions[ changedOptionKey ];
                        switch( changedOptionKey ) {
                            case "collection" :
                                if ( newVal !== oldVal ) {
                                    _this.stopListening( oldVal );
                                    _this._registerCollectionEvents();
                                }
                                break;
                            case "selectMultiple":
                                if( ! newVal && _this.selectedItems.length > 1 )
                                    _this.setSelectedModel( _.first( _this.selectedItems ), { by : "cid" } );
                                break;
                            case "selectable" :
                                if( ! newVal && _this.selectedItems.length > 0 )
                                    _this.setSelectedModels( [] );
                                break;
                            case "selectableModelsFilter" :
                                if( newVal && _.isFunction( newVal ) )
                                    _this._validateSelection();
                                break;
                            case "itemTemplate" :
                                _this._updateItemTemplate();
                                break;
                            case "processKeyEvents" :
                                if( newVal ) _this.$el.attr( "tabindex", 0 ); // so we get keyboard events
                                break;
                            case "modelView" :
                                //need to remove all old view instances
                                _this.viewManager.each( function( view ) {
                                    _this.viewManager.remove( view );
                                    // destroy the View itself
                                    view.remove();
                                } );
                                break;
                        }
                        if( _.contains( kOptionsRequiringRerendering, changedOptionKey ) ) rerender = true;
                    });
                    if( this._hasBeenRendered && rerender ) {
                        this.render(); // Rerender the view if the rerender flag has been set.
                    }
                },

                setOption : function( optionName, optionValue ) { // now is mearly a wrapper around backbone.viewOptions' setOptions()
                    var optionHash = {};
                    optionHash[ optionName ] = optionValue;
                    this.setOptions( optionHash );
                },

                getSelectedModel : function( options ) {
                    return _.first( this.getSelectedModels( options ) );
                },

                getSelectedModels : function ( options ) {
                    var _this = this;

                    options = _.extend( {}, {
                        by : kDefaultReferenceBy
                    }, options );

                    var referenceBy = options.by;
                    var items = [];

                    switch( referenceBy ) {
                        case "id" :
                            _.each( this.selectedItems, function ( item ) {
                                items.push( _this.collection.get( item ).id );
                            } );
                            break;
                        case "cid" :
                            items = items.concat( this.selectedItems );
                            break;
                        case "offset" :
                            var curLineNumber = 0;

                            var itemElements = this._getVisibleItemEls();

                            itemElements.each( function() {
                                var thisItemEl = $( this );
                                if( thisItemEl.is( ".selected" ) )
                                    items.push( curLineNumber );
                                curLineNumber++;
                            } );
                            break;
                        case "model" :
                            _.each( this.selectedItems, function ( item ) {
                                items.push( _this.collection.get( item ) );
                            } );
                            break;
                        case "view" :
                            _.each( this.selectedItems, function ( item ) {
                                items.push( _this.viewManager.findByModel( _this.collection.get( item ) ) );
                            } );
                            break;
                    }

                    return items;

                },

                setSelectedModels : function( newSelectedItems, options ) {
                    if( ! _.isArray( newSelectedItems ) ) throw "Invalid parameter value";
                    if( ! this.selectable && newSelectedItems.length > 0 ) return; // used to throw error, but there are some circumstances in which a list can be selectable at times and not at others, don't want to have to worry about catching errors

                    options = _.extend( {}, {
                        silent : false,
                        by : kDefaultReferenceBy
                    }, options );

                    var referenceBy = options.by;
                    var newSelectedCids = [];

                    switch( referenceBy ) {
                        case "cid" :
                            newSelectedCids = newSelectedItems;
                            break;
                        case "id" :
                            this.collection.each( function( thisModel ) {
                                if( _.contains( newSelectedItems, thisModel.id ) ) newSelectedCids.push( thisModel.cid );
                            } );
                            break;
                        case "model" :
                            newSelectedCids = _.pluck( newSelectedItems, "cid" );
                            break;
                        case "view" :
                            _.each( newSelectedItems, function( item ) {
                                newSelectedCids.push( item.model.cid );
                            } );
                            break;
                        case "offset" :
                            var curLineNumber = 0;
                            var selectedItems = [];

                            var itemElements = this._getVisibleItemEls();
                            itemElements.each( function() {
                                var thisItemEl = $( this );
                                if( _.contains( newSelectedItems, curLineNumber ) )
                                    newSelectedCids.push( thisItemEl.attr( "data-model-cid" ) );
                                curLineNumber++;
                            } );
                            break;
                    }

                    var oldSelectedModels = this.getSelectedModels();
                    var oldSelectedCids = _.clone( this.selectedItems );

                    this.selectedItems = this._convertStringsToInts( newSelectedCids );
                    this._validateSelection();

                    var newSelectedModels = this.getSelectedModels();

                    if( ! this._containSameElements( oldSelectedCids, this.selectedItems ) )
                    {
                        this._addSelectedClassToSelectedItems( oldSelectedCids );

                        if( ! options.silent )
                        {
                            this.trigger( "selectionChanged", newSelectedModels, oldSelectedModels );
                            if( this._isBackboneCourierAvailable() ) {
                                this.spawn( "selectionChanged", {
                                    selectedModels : newSelectedModels,
                                    oldSelectedModels : oldSelectedModels
                                } );
                            }
                        }

                        this.updateDependentControls();
                    }
                },

                setSelectedModel : function( newSelectedItem, options ) {
                    if( ! newSelectedItem && newSelectedItem !== 0 )
                        this.setSelectedModels( [], options );
                    else
                        this.setSelectedModels( [ newSelectedItem ], options );
                },

                render : function(){
                    var _this = this;

                    this._hasBeenRendered = true;

                    if( this.selectable ) this._saveSelection();

                    var modelViewContainerEl;

                    // If collection view element is a table and it has a tbody
                    // within it, render the model views inside of the tbody
                    modelViewContainerEl = this._getContainerEl();

                    var oldViewManager = this.viewManager;
                    this.viewManager = new ChildViewContainer();

                    // detach each of our subviews that we have already created to represent models
                    // in the collection. We are going to re-use the ones that represent models that
                    // are still here, instead of creating new ones, so that we don't loose state
                    // information in the views.
                    oldViewManager.each( function( thisModelView ) {
                        // to boost performance, only detach those views that will be sticking around.
                        // we won't need the other ones later, so no need to detach them individually.
                        if( _this.collection.get( thisModelView.model.cid ) )
                            thisModelView.$el.detach();
                        else
                            thisModelView.remove();
                    } );

                    modelViewContainerEl.empty();
                    var fragmentContainer;

                    if( this.detachedRendering )
                        fragmentContainer = document.createDocumentFragment();

                    this.collection.each( function( thisModel ) {
                        var thisModelView = oldViewManager.findByModelCid( thisModel.cid );
                        if( _.isUndefined( thisModelView ) ) {
                            // if the model view has not already been created on a
                            // previous render then create and initialize it now.
                            thisModelView = this._createNewModelView( thisModel, this._getModelViewOptions( thisModel ) );
                        }

                        this._insertAndRenderModelView( thisModelView, fragmentContainer || modelViewContainerEl );
                    }, this );

                    if( this.detachedRendering )
                        modelViewContainerEl.append( fragmentContainer );

                    if( this.sortable )
                    {
                        var sortableOptions = _.extend( {
                            axis: "y",
                            distance: 10,
                            forcePlaceholderSize : true,
                            start : _.bind( this._sortStart, this ),
                            change : _.bind( this._sortChange, this ),
                            stop : _.bind( this._sortStop, this ),
                            receive : _.bind( this._receive, this ),
                            over : _.bind( this._over, this )
                        }, _.result( this, "sortableOptions" ) );

                        if( _this._isRenderedAsTable() ) {
                            sortableOptions.items = "> tbody > tr:not(.not-sortable)";
                        }
                        else if( _this._isRenderedAsList() ) {
                            sortableOptions.items = "> li:not(.not-sortable)";
                        }

                        this.$el = this.$el.sortable( sortableOptions );
                    }

                    this._showEmptyListCaptionIfAppropriate();

                    this.trigger( "render" );
                    if( this._isBackboneCourierAvailable() )
                        this.spawn( "render" );

                    if( this.selectable ) {
                        this._restoreSelection();
                        this.updateDependentControls();
                    }

                    if( _.isFunction( this.onAfterRender ) )
                        this.onAfterRender();
                },

                _showEmptyListCaptionIfAppropriate : function ( ) {
                    if( this.emptyListCaption ) {
                        var visibleEls = this._getVisibleItemEls();

                        if( visibleEls.length === 0 ) {
                            var emptyListString;

                            if( _.isFunction( this.emptyListCaption ) )
                                emptyListString = this.emptyListCaption();
                            else
                                emptyListString = this.emptyListCaption;

                            var $emptyCaptionEl;
                            var $varEl = $( "<var class='empty-list-caption'>" + emptyListString + "</var>" );

                            //need to wrap the empty caption to make it fit the rendered list structure (either with an li or a tr td)
                            if( this._isRenderedAsList() )
                                $emptyListCaptionEl = $varEl.wrapAll( "<li class='not-sortable'></li>" ).parent().css( kStylesForEmptyListCaption );
                            else
                                $emptyListCaptionEl = $varEl.wrapAll( "<tr class='not-sortable'><td></td></tr>" ).parent().parent().css( kStylesForEmptyListCaption );

                            this._getContainerEl().append( $emptyListCaptionEl );
                        }
                    }
                },

                _removeEmptyListCaption : function( ) {
                    if( this._isRenderedAsList() )
                        this._getContainerEl().find( "> li > var.empty-list-caption" ).parent().remove();
                    else
                        this._getContainerEl().find( "> tr > td > var.empty-list-caption" ).parent().parent().remove();
                },

                // Render a single model view in container object "parentElOrDocumentFragment", which is either
                // a documentFragment or a jquery object. optional arg atIndex is not support for document fragments.
                _insertAndRenderModelView : function( modelView, parentElOrDocumentFragment, atIndex ) {
                    var thisModelViewWrapped = this._wrapModelView( modelView );

                    if( parentElOrDocumentFragment.nodeType === 11 ) // if we are inserting into a document fragment, we need to use the DOM appendChild met
                        parentElOrDocumentFragment.appendChild( thisModelViewWrapped.get( 0 ) );
                    else {
                        if( ! _.isUndefined( atIndex ) && atIndex >= 0 && atIndex < parentElOrDocumentFragment.children().length - 1 )
                        // note this.collection.length might be greater than parentElOrDocumentFragment.children().length here
                            parentElOrDocumentFragment.children().eq( atIndex ).before( thisModelViewWrapped );
                        else
                            parentElOrDocumentFragment.append( thisModelViewWrapped );
                    }

                    // we have to render the modelView after it has been put in context, as opposed to in the
                    // initialize function of the modelView, because some rendering might be dependent on
                    // the modelView's context in the DOM tree. For example, if the modelView stretch()'s itself,
                    // it must be in full context in the DOM tree or else the stretch will not behave as intended.
                    var renderResult = modelView.render();

                    // return false from the view's render function to hide this item
                    if( renderResult === false ) {
                        thisModelViewWrapped.hide();
                        thisModelViewWrapped.addClass( "not-visible" );
                    }

                    var hideThisModelView = false;
                    if( _.isFunction( this.visibleModelsFilter ) ) {
                        hideThisModelView = ! this.visibleModelsFilter( modelView.model );
                        if( hideThisModelView ) {
                            if( thisModelViewWrapped.children().length === 1 )
                                thisModelViewWrapped.hide();
                            else modelView.$el.hide();

                            thisModelViewWrapped.addClass( "not-visible" );
                        }
                    }

                    if( ! hideThisModelView && this.emptyListCaption ) this._removeEmptyListCaption();

                    this.viewManager.add( modelView );
                },

                updateDependentControls : function() {
                    this.trigger( "updateDependentControls", this.getSelectedModels() );
                    if( this._isBackboneCourierAvailable() ) {
                        this.spawn( "updateDependentControls", {
                            selectedModels : this.getSelectedModels()
                        } );
                    }
                },

                // Override `Backbone.View.remove` to also destroy all Views in `viewManager`
                remove : function() {
                    this.viewManager.each( function( view ) {
                        view.remove();
                    } );

                    Backbone.View.prototype.remove.apply( this, arguments );
                },

                // A met to remove the view relating to model.
                _removeModelView : function( model ) {
                    var viewManager = this.viewManager;
                    var view = viewManager.findByModelCid( model.cid );

                    if ( this.selectable ) this._saveSelection();

                    viewManager.remove( view ); // Remove the view from the viewManager
                    view.remove(); // Remove the view from the DOM
                    this._getContainerEl().children( "[data-model-cid=" + model.cid + "]" ).remove(); // Remove the wrapper from the DOM

                    if ( this.selectable ) this._restoreSelection();

                    this._showEmptyListCaptionIfAppropriate();
                },

                _validateSelectionAndRender : function() {
                    this._validateSelection();
                    this.render();
                },

                _registerCollectionEvents : function() {
                    this.listenTo( this.collection, "add", function( model ) {
                        if( this._hasBeenRendered ) {
                            var modelView = this._createNewModelView( model, this._getModelViewOptions( model ) );
                            this._insertAndRenderModelView( modelView, this._getContainerEl(), this.collection.indexOf( model ) );
                        }

                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "add" );
                    } );

                    this.listenTo( this.collection, "remove", function( model ) {
                        if( this._hasBeenRendered )
                            this._removeModelView( model );

                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "remove" );
                    } );

                    this.listenTo( this.collection, "reset", function() {
                        if( this._hasBeenRendered ) this.render();
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "reset" );
                    } );

                    // we should not be listening to change events on the model as a default behavior. the models
                    // should be responsible for re-rendering themselves if necessary, and if the collection does
                    // also need to re-render as a result of a model change, this should be handled by overriding
                    // this met. by default the collection view should not re-render in response to model changes
                    // this.listenTo( this.collection, "change", function( model ) {
                    // 	if( this._hasBeenRendered ) this.viewManager.findByModel( model ).render();
                    // 	if( this._isBackboneCourierAvailable() )
                    // 		this.spawn( "change", { model : model } );
                    // } );

                    this.listenTo( this.collection, "sort", function( collection, options ) {
                        if( this._hasBeenRendered && options.add !== true ) this.render();
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "sort" );
                    } );
                },

                _getContainerEl : function() {
                    if ( this._isRenderedAsTable() ) {
                        // not all tables have a tbody, so we test
                        var tbody = this.$el.find( "> tbody" );
                        if ( tbody.length > 0 )
                            return tbody;
                    }
                    return this.$el;
                },

                _getClickedItemId : function( theEvent ) {
                    var clickedItemId = null;

                    // important to use currentTarget as opposed to target, since we could be bubg
                    // an event that took place within another collectionList
                    var clickedItemEl = $( theEvent.currentTarget );
                    if( clickedItemEl.closest( ".collection-list" ).get(0) !== this.$el.get(0) ) return;

                    // determine which list item was clicked. If we clicked in the blank area
                    // underneath all the elements, we want to know that too, since in this
                    // case we will want to deselect all elements. so check to see if the clicked
                    // DOM element is the list itself to find that out.
                    var clickedItem = clickedItemEl.closest( "[data-model-cid]" );
                    if( clickedItem.length > 0 )
                    {
                        clickedItemId = clickedItem.attr( "data-model-cid" );
                        if( $.isNumeric( clickedItemId ) ) clickedItemId = parseInt( clickedItemId, 10 );
                    }

                    return clickedItemId;
                },

                _updateItemTemplate : function() {
                    var itemTemplateHtml;
                    if( this.itemTemplate )
                    {
                        if( $( this.itemTemplate ).length === 0 )
                            throw "Could not find item template from selector: " + this.itemTemplate;

                        itemTemplateHtml = $( this.itemTemplate ).html();
                    }
                    else
                        itemTemplateHtml = this.$( ".item-template" ).html();

                    if( itemTemplateHtml ) this.itemTemplateFunction = _.template( itemTemplateHtml );

                },

                _validateSelection : function() {
                    // note can't use the collection's proxy to underscore because "cid" is not an attribute,
                    // but an element of the model object itself.
                    var modelReferenceIds = _.pluck( this.collection.models, "cid" );
                    this.selectedItems = _.intersection( modelReferenceIds, this.selectedItems );

                    if( _.isFunction( this.selectableModelsFilter ) )
                    {
                        this.selectedItems = _.filter( this.selectedItems, function( thisItemId ) {
                            return this.selectableModelsFilter.call( this, this.collection.get( thisItemId ) );
                        }, this );
                    }
                },

                _saveSelection : function() {
                    // save the current selection. use restoreSelection() to restore the selection to the state it was in the last time saveSelection() was called.
                    if( ! this.selectable ) throw "Attempt to save selection on non-selectable list";
                    this.savedSelection = {
                        items : _.clone( this.selectedItems ),
                        offset : this.getSelectedModel( { by : "offset" } )
                    };
                },

                _restoreSelection : function() {
                    if( ! this.savedSelection ) throw "Attempt to restore selection but no selection has been saved!";

                    // reset selectedItems to empty so that we "redraw" all "selected" classes
                    // when we set our new selection. We do this because it is likely that our
                    // contents have been refreshed, and we have thus lost all old "selected" classes.
                    this.setSelectedModels( [], { silent : true } );

                    if( this.savedSelection.items.length > 0 )
                    {
                        // first try to restore the old selected items using their reference ids.
                        this.setSelectedModels( this.savedSelection.items, { by : "cid", silent : true } );

                        // all the items with the saved reference ids have been rmd from the list.
                        // ok. try to restore the selection based on the offset that used to be selected.
                        // this is the expected behavior after a item is deleted from a list (i.e. select
                        // the line that immediately follows the deleted line).
                        if( this.selectedItems.length === 0 )
                            this.setSelectedModel( this.savedSelection.offset, { by : "offset" } );

                        // Trigger a selection changed if the previously selected items were not all found
                        if (this.selectedItems.length !== this.savedSelection.items.length)
                        {
                            this.trigger( "selectionChanged", this.getSelectedModels(), [] );
                            if( this._isBackboneCourierAvailable() ) {
                                this.spawn( "selectionChanged", {
                                    selectedModels : this.getSelectedModels(),
                                    oldSelectedModels : []
                                } );
                            }
                        }
                    }

                    delete this.savedSelection;
                },

                _addSelectedClassToSelectedItems : function( oldItemsIdsWithSelectedClass ) {
                    if( _.isUndefined( oldItemsIdsWithSelectedClass ) ) oldItemsIdsWithSelectedClass = [];

                    // oldItemsIdsWithSelectedClass is used for optimization purposes only. If this info is supplied then we
                    // only have to add / remove the "selected" class from those items that "selected" state has changed.

                    var itemsIdsFromWhichSelectedClassNeedsToBeRemoved = oldItemsIdsWithSelectedClass;
                    itemsIdsFromWhichSelectedClassNeedsToBeRemoved = _.without( itemsIdsFromWhichSelectedClassNeedsToBeRemoved, this.selectedItems );

                    _.each( itemsIdsFromWhichSelectedClassNeedsToBeRemoved, function( thisItemId ) {
                        this._getContainerEl().find( "[data-model-cid=" + thisItemId + "]" ).removeClass( "selected" );
                    }, this );

                    var itemsIdsFromWhichSelectedClassNeedsToBeAdded = this.selectedItems;
                    itemsIdsFromWhichSelectedClassNeedsToBeAdded = _.without( itemsIdsFromWhichSelectedClassNeedsToBeAdded, oldItemsIdsWithSelectedClass );

                    _.each( itemsIdsFromWhichSelectedClassNeedsToBeAdded, function( thisItemId ) {
                        this._getContainerEl().find( "[data-model-cid=" + thisItemId + "]" ).addClass( "selected" );
                    }, this );
                },

                _reorderCollectionBasedOnHTML : function() {
                    var _this = this;

                    this._getContainerEl().children().each( function() {
                        var thisModelCid = $( this ).attr( "data-model-cid" );

                        if( thisModelCid )
                        {
                            // remove the current model and then add it back (at the end of the collection).
                            // When we are done looping through all models, they will be in the correct order.
                            var thisModel = _this.collection.get( thisModelCid );
                            if( thisModel )
                            {
                                _this.collection.remove( thisModel, { silent : true } );
                                _this.collection.add( thisModel, { silent : true, sort : ! _this.collection.comparator } );
                            }
                        }
                    } );

                    this.collection.trigger( "reorder" );

                    if( this._isBackboneCourierAvailable() ) this.spawn( "reorder" );

                    if( this.collection.comparator ) this.collection.sort();

                },

                _getModelViewConstructor : function( thisModel ) {
                    return this.modelView || mDefaultModelViewConstructor;
                },

                _getModelViewOptions : function( thisModel ) {
                    return _.extend( { model : thisModel }, this.modelViewOptions );
                },

                _createNewModelView : function( model, modelViewOptions ) {
                    var modelViewConstructor = this._getModelViewConstructor( model );
                    if( _.isUndefined( modelViewConstructor ) ) throw "Could not find modelView constructor for model";

                    var newModelView = new( modelViewConstructor )( modelViewOptions );
                    newModelView.collectionListView = this;

                    return newModelView;
                },

                _wrapModelView : function( modelView ) {
                    var _this = this;

                    // we use items client ids as opposed to real ids, since we may not have a representation
                    // of these models on the server
                    var wrappedModelView;

                    if( this._isRenderedAsTable() ) {
                        // if we are rendering the collection in a table, the template $el is a tr so we just need to set the data-model-cid
                        wrappedModelView = modelView.$el.attr( "data-model-cid", modelView.model.cid );
                    }
                    else if( this._isRenderedAsList() ) {
                        // if we are rendering the collection in a list, we need wrap each item in an <li></li> (if its not already an <li>)
                        // and set the data-model-cid
                        if( modelView.$el.prop( "tagName" ).toLowerCase() === "li" ) {
                            wrappedModelView = modelView.$el.attr( "data-model-cid", modelView.model.cid );
                        } else {
                            wrappedModelView = modelView.$el.wrapAll( "<li data-model-cid='" + modelView.model.cid + "'></li>" ).parent();
                        }
                    }

                    if( _.isFunction( this.sortableModelsFilter ) )
                        if( ! this.sortableModelsFilter.call( _this, modelView.model ) )
                            wrappedModelView.addClass( "not-sortable" );

                    if( _.isFunction( this.selectableModelsFilter ) )
                        if( ! this.selectableModelsFilter.call( _this, modelView.model ) )
                            wrappedModelView.addClass( "not-selectable" );

                    return wrappedModelView;
                },

                _convertStringsToInts : function( theArray ) {
                    return _.map( theArray, function( thisEl ) {
                        if( ! _.isString( thisEl ) ) return thisEl;
                        var thisElAsNumber = parseInt( thisEl, 10 );
                        return( thisElAsNumber == thisEl ? thisElAsNumber : thisEl );
                    } );
                },

                _containSameElements : function( arrayA, arrayB ) {
                    if( arrayA.length != arrayB.length ) return false;
                    var intersectionSize = _.intersection( arrayA, arrayB ).length;
                    return intersectionSize == arrayA.length; // and must also equal arrayB.length, since arrayA.length == arrayB.length
                },

                _isRenderedAsTable : function() {
                    return this.$el.prop( "tagName" ).toLowerCase() === "table";
                },

                _isRenderedAsList : function() {
                    return ! this._isRenderedAsTable();
                },

                // Returns the wrapper HTML element for each visible modelView.
                // When rendering in a table context, the returned elements are the $el of each modelView.
                // When rendering in a list context,
                //   If the $el of the modelView is an <li>, the returned elements are the $el of each modelView.
                //   Otherwise, the returned elements are the <li>'s the collectionView wrapped around each modelView $el.
                _getVisibleItemEls : function() {
                    var itemElements = [];
                    itemElements = this._getContainerEl().find( "> [data-model-cid]:not(.not-visible)" );

                    return itemElements;
                },

                _charCodes : {
                    upArrow : 38,
                    downArrow : 40
                },

                _isBackboneCourierAvailable : function() {
                    return !_.isUndefined( Backbone.Courier );
                },

                _sortStart : function( event, ui ) {
                    var modelBeingSorted = this.collection.get( ui.item.attr( "data-model-cid" ) );
                    this.trigger( "sortStart", modelBeingSorted );
                    if( this._isBackboneCourierAvailable() )
                        this.spawn( "sortStart", { modelBeingSorted : modelBeingSorted } );
                },

                _sortChange : function( event, ui ) {
                    var modelBeingSorted = this.collection.get( ui.item.attr( "data-model-cid" ) );
                    this.trigger( "sortChange", modelBeingSorted );
                    if( this._isBackboneCourierAvailable() )
                        this.spawn( "sortChange", { modelBeingSorted : modelBeingSorted } );
                },

                _sortStop : function( event, ui ) {
                    var modelBeingSorted = this.collection.get( ui.item.attr( "data-model-cid" ) );
                    var modelViewContainerEl = this._getContainerEl();
                    var newIndex = modelViewContainerEl.children().index( ui.item );

                    if( newIndex == -1 ) {
                        // the element was rmd from this list. can happen if this sortable is connected
                        // to another sortable, and the item was dropped into the other sortable.
                        this.collection.remove( modelBeingSorted );
                    }

                    this._reorderCollectionBasedOnHTML();
                    this.updateDependentControls();
                    this.trigger( "sortStop", modelBeingSorted, newIndex );
                    if( this._isBackboneCourierAvailable() )
                        this.spawn( "sortStop", { modelBeingSorted : modelBeingSorted, newIndex : newIndex } );
                },

                _receive : function( event, ui ) {
                    var senderListEl = ui.sender;
                    var senderCollectionListView = senderListEl.data( "view" );
                    if( ! senderCollectionListView || ! senderCollectionListView.collection ) return;

                    var newIndex = this._getContainerEl().children().index( ui.item );
                    var modelReceived = senderCollectionListView.collection.get( ui.item.attr( "data-model-cid" ) );
                    senderCollectionListView.collection.remove( modelReceived );
                    this.collection.add( modelReceived, { at : newIndex } );
                    modelReceived.collection = this.collection; // otherwise will not get properly set, since modelReceived.collection might already have a value.
                    this.setSelectedModel( modelReceived );
                },

                _over : function( event, ui ) {
                    // when an item is being dragged into the sortable,
                    // hide the empty list caption if it exists
                    this._getContainerEl().find( "> var.empty-list-caption" ).hide();
                },

                _onKeydown : function( event ) {
                    if( ! this.processKeyEvents ) return true;

                    var trap = false;

                    if( this.getSelectedModels( { by : "offset" } ).length == 1 )
                    {
                        // need to trap down and up arrows or else the browser
                        // will end up scrolling a autoscroll div.

                        var currentOffset = this.getSelectedModel( { by : "offset" } );
                        if( event.which === this._charCodes.upArrow && currentOffset !== 0 )
                        {
                            this.setSelectedModel( currentOffset - 1, { by : "offset" } );
                            trap = true;
                        }
                        else if( event.which === this._charCodes.downArrow && currentOffset !== this.collection.length - 1 )
                        {
                            this.setSelectedModel( currentOffset + 1, { by : "offset" } );
                            trap = true;
                        }
                    }

                    return ! trap;
                },

                _listItem_onMousedown : function( theEvent ) {
                    if( ! this.selectable || ! this.clickToSelect ) return;

                    var clickedItemId = this._getClickedItemId( theEvent );

                    if( clickedItemId )
                    {
                        // Exit if an unselectable item was clicked
                        if( _.isFunction( this.selectableModelsFilter ) &&
                            ! this.selectableModelsFilter.call( this, this.collection.get( clickedItemId ) ) )
                        {
                            return;
                        }

                        // a selectable list item was clicked
                        if( this.selectMultiple && theEvent.shiftKey )
                        {
                            var firstSelectedItemIndex = -1;

                            if( this.selectedItems.length > 0 )
                            {
                                this.collection.find( function( thisItemModel ) {
                                    firstSelectedItemIndex++;

                                    // exit when we find our first selected element
                                    return _.contains( this.selectedItems, thisItemModel.cid );
                                }, this );
                            }

                            var clickedItemIndex = -1;
                            this.collection.find( function( thisItemModel ) {
                                clickedItemIndex++;

                                // exit when we find the clicked element
                                return thisItemModel.cid == clickedItemId;
                            }, this );

                            var shiftKeyRootSelectedItemIndex = firstSelectedItemIndex == -1 ? clickedItemIndex : firstSelectedItemIndex;
                            var minSelectedItemIndex = Math.min( clickedItemIndex, shiftKeyRootSelectedItemIndex );
                            var maxSelectedItemIndex = Math.max( clickedItemIndex, shiftKeyRootSelectedItemIndex );

                            var newSelectedItems = [];
                            for( var thisIndex = minSelectedItemIndex; thisIndex <= maxSelectedItemIndex; thisIndex ++ )
                                newSelectedItems.push( this.collection.at( thisIndex ).cid );
                            this.setSelectedModels( newSelectedItems, { by : "cid" } );

                            // shift clicking will usually highlight selectable text, which we do not want.
                            // this is a cross browser (hopefully) snippet that deselects all text selection.
                            if( document.selection && document.selection.empty )
                                document.selection.empty();
                            else if(window.getSelection) {
                                var sel = window.getSelection();
                                if( sel && sel.removeAllRanges )
                                    sel.removeAllRanges();
                            }
                        }
                        else if( this.selectMultiple && ( this.clickToToggle || theEvent.metaKey ) )
                        {
                            if( _.contains( this.selectedItems, clickedItemId ) )
                                this.setSelectedModels( _.without( this.selectedItems, clickedItemId ), { by : "cid" } );
                            else this.setSelectedModels( _.union( this.selectedItems, clickedItemId ), { by : "cid" } );
                        }
                        else
                            this.setSelectedModels( [ clickedItemId ], { by : "cid" } );
                    }
                    else
                    // the blank area of the list was clicked
                        this.setSelectedModels( [] );

                },

                _listItem_onDoubleClick : function( theEvent ) {
                    var clickedItemId = this._getClickedItemId( theEvent );

                    if( clickedItemId )
                    {
                        var clickedModel = this.collection.get( clickedItemId );
                        this.trigger( "doubleClick", clickedModel );
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "doubleClick", { clickedModel : clickedModel } );
                    }
                },

                _listBackground_onClick : function( theEvent ) {
                    if( ! this.selectable ) return;
                    if( ! $( theEvent.target ).is( ".collection-list" ) ) return;

                    this.setSelectedModels( [] );
                }

            }, {
                setDefaultModelViewConstructor : function( theConstructor ) {
                    mDefaultModelViewConstructor = theConstructor;
                }
            });

            // Backbone.ViewOptions
            // --------------------
            // v0.2.0
            //
            // Copyright (c)2014 Rotunda Software
            //
            // https://github.com/rotundasoftware/backbone.viewOptions

            // Backbone.ViewOptions
            // --------------------
            //
            // An plugin to declare and get/set options on views.

            /*
             * Backbone.ViewOptions, v0.2
             * Copyright (c)2014 Rotunda Software, LLC.
             * Distributed under MIT license
             * http://github.com/rotundasoftware/backbone.viewOptions
             */

            Backbone.ViewOptions = {};

            Backbone.ViewOptions.add = function( view, optionsDeclarationsProperty ) {
                if( _.isUndefined( optionsDeclarationsProperty ) ) optionsDeclarationsProperty = "options";

                // ****************** Public mets added to view ******************

                view.setOptions = function( options ) {
                    var _this = this;
                    var optionsThatWereChanged = {};
                    var optionsThatWereChangedOriginalValues = {};

                    var optionDeclarations = _.result( this, optionsDeclarationsProperty );

                    if( ! _.isUndefined( optionDeclarations ) ) {
                        var normalizedOptionDeclarations = _normalizeOptionDeclarations( optionDeclarations );

                        _.each( normalizedOptionDeclarations, function( thisOptionDeclaration ) {
                            thisOptionName = thisOptionDeclaration.name;
                            thisOptionRequired = thisOptionDeclaration.required;
                            thisOptionDefaultValue = thisOptionDeclaration.defaultValue;

                            if( thisOptionRequired ) {
                                // note we do not throw an error if a required option is not supplied, but it is
                                // found on the object itself (due to a prior call of view.setOptions, most likely)
                                if( ! options ||
                                    ( ( ! _.contains( _.keys( options ), thisOptionName ) && _.isUndefined( _this[ thisOptionName ] ) ) ) ||
                                    _.isUndefined( options[ thisOptionName ] ) )
                                    throw new Error( "Required option \"" + thisOptionName + "\" was not supplied." );
                            }

                            // atch the supplied value of this option, or the appropriate default value, to the view object
                            if( options && thisOptionName in options ) {
                                // if this option already exists on the view, make a note that we will be changing it
                                if( ! _.isUndefined( _this[ thisOptionName ] ) ) {
                                    optionsThatWereChangedOriginalValues[ thisOptionName ] = _this[ thisOptionName ];
                                    optionsThatWereChanged[ thisOptionName ] = options[ thisOptionName ];
                                }
                                _this[ thisOptionName ] = options[ thisOptionName ];
                                // note we do NOT delete the option off the options object here so that
                                // multiple views can be passed the same options object without issue.
                            }
                            else if( ! _.isUndefined( thisOptionDefaultValue ) && _.isUndefined( _this[ thisOptionName ] ) ) {
                                // note defaults do not write over any existing properties on the view itself.
                                _this[ thisOptionName ] = thisOptionDefaultValue;
                            }
                        } );
                    }

                    if( _.keys( optionsThatWereChanged ).length > 0 ) {
                        if( _.isFunction( _this.onOptionsChanged ) )
                            _this.onOptionsChanged( optionsThatWereChanged, optionsThatWereChangedOriginalValues );
                        else if( _.isFunction( _this._onOptionsChanged ) )
                            _this._onOptionsChanged( optionsThatWereChanged, optionsThatWereChangedOriginalValues );
                    }
                };

                view.getOptions = function() {
                    var optionDeclarations = _.result( this, optionsDeclarationsProperty );
                    if( _.isUndefined( optionDeclarations ) ) return [];

                    var normalizedOptionDeclarations = _normalizeOptionDeclarations( optionDeclarations );
                    var optionsNames = _.pluck( normalizedOptionDeclarations, "name" );

                    return _.pick( this, optionsNames );
                };
            };

            // ****************** Private Utility Functions ******************

            function _normalizeOptionDeclarations( optionDeclarations ) {
                // convert our short-hand option syntax (with exclamation marks, etc.)
                // to a simple array of standard option declaration objects.
                var normalizedOptionDeclarations = [];

                if( ! _.isArray( optionDeclarations ) )  {
                    throw new Error( "Option declarations must be an array." );
                }

                _.each( optionDeclarations, function( thisOptionDeclaration ) {
                    var thisOptionName, thisOptionRequired, thisOptionDefaultValue;

                    thisOptionRequired = false;
                    thisOptionDefaultValue = undefined;

                    if( _.isString( thisOptionDeclaration ) )
                        thisOptionName = thisOptionDeclaration;
                    else if( _.isObject( thisOptionDeclaration ) ) {
                        thisOptionName = _.first( _.keys( thisOptionDeclaration ) );
                        thisOptionDefaultValue = _.clone( thisOptionDeclaration[ thisOptionName ] );
                    }
                    else throw new Error( "Each element in the option declarations array must be either a string or an object." );

                    if( thisOptionName[ thisOptionName.length - 1 ] === "!" ) {
                        thisOptionRequired = true;
                        thisOptionName = thisOptionName.slice( 0, thisOptionName.length - 1 );
                    }

                    normalizedOptionDeclarations.push( {
                        name : thisOptionName,
                        required : thisOptionRequired,
                        defaultValue : thisOptionDefaultValue
                    } );
                } );

                return normalizedOptionDeclarations;
            };


            // Backbone.BabySitter
            // -------------------
            // v0.0.6
            //
            // Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
            // Distributed under MIT license
            //
            // http://github.com/babysitterjs/backbone.babysitter

            // Backbone.ChildViewContainer
            // ---------------------------
            //
            // Provide a container to store, retrieve and
            // shut down child views.

            ChildViewContainer = (function(Backbone, _){

                // Container Constructor
                // ---------------------

                var Container = function(views){
                    this._views = {};
                    this._indexByModel = {};
                    this._indexByCustom = {};
                    this._updateLength();

                    _.each(views, this.add, this);
                };

                // Container Methods
                // -----------------

                _.extend(Container.prototype, {

                    // Add a view to this container. Stores the view
                    // by `cid` and makes it searchable by the model
                    // cid (and model itself). Optionally specify
                    // a custom key to store an retrieve the view.
                    add: function(view, customIndex){
                        var viewCid = view.cid;

                        // store the view
                        this._views[viewCid] = view;

                        // index it by model
                        if (view.model){
                            this._indexByModel[view.model.cid] = viewCid;
                        }

                        // index by custom
                        if (customIndex){
                            this._indexByCustom[customIndex] = viewCid;
                        }

                        this._updateLength();
                    },

                    // Find a view by the model that was atched to
                    // it. Uses the model's `cid` to find it.
                    findByModel: function(model){
                        return this.findByModelCid(model.cid);
                    },

                    // Find a view by the `cid` of the model that was atched to
                    // it. Uses the model's `cid` to find the view `cid` and
                    // retrieve the view using it.
                    findByModelCid: function(modelCid){
                        var viewCid = this._indexByModel[modelCid];
                        return this.findByCid(viewCid);
                    },

                    // Find a view by a custom indexer.
                    findByCustom: function(index){
                        var viewCid = this._indexByCustom[index];
                        return this.findByCid(viewCid);
                    },

                    // Find by index. This is not guaranteed to be a
                    // stable index.
                    findByIndex: function(index){
                        return _.values(this._views)[index];
                    },

                    // retrieve a view by it's `cid` directly
                    findByCid: function(cid){
                        return this._views[cid];
                    },

                    findIndexByCid : function( cid ) {
                        var index = -1;
                        var view = _.find( this._views, function ( view ) {
                            index++;
                            if( view.model.cid == cid )
                                return view;
                        } );
                        return ( view ) ? index : -1;
                    },

                    // Remove a view
                    remove: function(view){
                        var viewCid = view.cid;

                        // delete model index
                        if (view.model){
                            delete this._indexByModel[view.model.cid];
                        }

                        // delete custom index
                        _.any(this._indexByCustom, function(cid, key) {
                            if (cid === viewCid) {
                                delete this._indexByCustom[key];
                                return true;
                            }
                        }, this);

                        // remove the view from the container
                        delete this._views[viewCid];

                        // update the length
                        this._updateLength();
                    },

                    // Call a met on every view in the container,
                    // passing parameters to the call met one at a
                    // time, like `function.call`.
                    call: function(met){
                        this.apply(met, _.tail(arguments));
                    },

                    // Apply a met on every view in the container,
                    // passing parameters to the call met one at a
                    // time, like `function.apply`.
                    apply: function(met, args){
                        _.each(this._views, function(view){
                            if (_.isFunction(view[met])){
                                view[met].apply(view, args || []);
                            }
                        });
                    },

                    // Update the `.length` attribute on this container
                    _updateLength: function(){
                        this.length = _.size(this._views);
                    }
                });

                // Borrowing this code from Backbone.Collection:
                // http://backbonejs.org/docs/backbone.html#section-106
                //
                // Mix in mets from Underscore, for iteration, and other
                // collection related features.
                var mets = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
                    'select', 'reject', 'every', 'all', 'some', 'any', 'include',
                    'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
                    'last', 'without', 'isEmpty', 'pluck'];

                _.each(mets, function(met) {
                    Container.prototype[met] = function() {
                        var views = _.values(this._views);
                        var args = [views].concat(_.toArray(arguments));
                        return _[met].apply(_, args);
                    };
                });

                // return the public API
                return Container;
            })(Backbone, _);

            return Backbone.CollectionView;
        } ) );
    }

}
bok=function(){


    BOOK=function(){ $.fm()
        toBook = function(){Y.run('book')}
        s1.A(
            $.h1('BOOK').$(toBook) ,
            bookName = $.ip(),
            $.bt('new book',function(){
                $.P('newBook', {name: bookName.V()},
                    toBook)}),
            $.hr())

        $.Gj('books',function(bks){
            s1.A($.h3('books:'))
            _.e(bks, function(bk){
                s1.A( $.sp().C('x').$(function(){
                        $.P('delBook',{book: bk._id},toBook)
                    }),
                    $.bt(bk.name,function(){
                        s2.A($.h2('CHAPTER: '+bk.name),
                            chapterTitleInput=$.ip(),
                            $.bt('new chapter',
                                function(){$.P('newChapter',{
                                    chapterTitle: chapterTitleInput.V(),
                                    book:bk._id
                                },function(){chapterView(bk, c)})}), $.hr())
                        $.eGj('chapters',{book:bk._id}, function(ch){
                            s2.A($.bt(ch.title, function(){
                                chapterView(bk,ch)}), $.br(2))})
                    }), $.br(2))})})


        chapterView=function(b,c){ s2.E();s1.E();
            s1.A($.h1('BOOK').$( toBook) )
            $.Gj('chapters',{book:bk._id}, function(chapters){
                s1.A($.h3('chapters:'))
                s2.A($.h3('pages:'))
                _.e(chapters,function(ch){
                    s1.A($.sp('x').$(function(){$.P('delChapter',{chapter: ch._id}, function(){chapterView(bk, ch)})}),
                        $.bt(ch.title, function(){chapterView(bk,ch)}), $.br(2))})})
            s2.A($.h1('chapter: '+ch.title))
            s2.A( pageNameInput=$.ip(),
                $.bt('new page', function(){
                    $.P('newPage',{pageName :pageNameInput.V(), chapter:ch._id
                    })}), $.hr())
            $.eGj('/pages', {chapter: ch._id}, function(pg){
                s2.A($.bt(pg.name, function(){pageView(bk,ch,pg)
                }), $.br(2)  )})
        }}
    pageView = function(bk, ch, pg){s1.E();s2.E()
        s1.A($.h1('BOOK').$(ldr('book')) )
        s1.A($.h1('CHAPTER '+ ch.title).$(function(){chapterView(book,ch )}))
        $.Gj('/pages',{chapter: ch._id},
            function(pgs){s1.A($.h3('pages'))
                _.e(pgs,function(pg){
                    s1.A($.bt(pg.name,function(){sectionView(ch)}), $.br(2)
                    )})})
        s2.A($.h1('page: '+pg.name))
        $.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
            function(sc){s2.A($.bt(sc.section, function(){sectionView(bk,ch,pg)}), $.br(2)
            )})
    }


    OBJECT=function(){$.fm()
        s1.A('your objects', $.br(2), t= $.ip(),
            $.bt('new object',function(){$.P('newObj',
                {t: t.V()})}))
        $.eG('objs', function(o){

            s1.A($.h2(o.t).$(function(){
                s2.E($.h1(o.t), tt=$.ip(),
                    $.bt('new sub-object',function(){
                        $.P('newObj', {t: tt.V()})}))}))
            _.e(o.i,function(i){ s1.A(h3(i)) })
        })

    }


};bok()
BBEXT=function(){
    // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}

//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})

//render does nothing unless u override it
//cannot access model from init

old=function(){
    V$=function(){var g=G(arguments), o,v, a
        a=O(g.f)? g.f:{}
        o={ob: g.f}
        o.ob= o.b||{}
        if(a.I){a.initialize = a.I}
        if(a.R){a.render = a.R}
        if(a.r){a.render = a.r}
        if(a.rr){a.render = a.rr}
        if(a.E){a.events = a.E}
        if(a.T){a.template = a.T}
        if(a.t){a.tagName = a.t}
        if(a.k){a.className = a.k}
        if(a.i){a.id = a.i}
        Vw = bb.V.e(ob)
        if(a.m){a.model= a.m}
        if(a.md){a.model= a.md}
        if(a.cl){a.collection= a.cl}
        vw = new Vw(a)
        return vw
    }
}




QON=function(){$.x('o', 'jquery .on')

/*

 As of jq 1.7, no longer need to use  .bind()?, .delegate(), and .live().
 .on(evString [,sel][,d], hl)|(evObject [,sel][,d])
 evString 1+ sp-sep evs w opt nsp ('click', 'keydown.myPlugin')
 evObject {k: evString, v:ev hl fn}
 sel(S) -  fl wch sel ch trg ev
 d(*) - d 2b passd 2 the hl in ev.data whn ev trgd
 hl: fn(evOb [, anythng extrPam] [,...])



 ~~ ev ns & nsps
    any ev ns can be used for the evs arg .
    jq will pass through the bw's standard JavaScript ev yps,
 calling the hl fn when the bw gens evs due to user actions such as click.
 also, the .trigger() met can trgr bth
    standard bw ev  ns & cust ev ns
    to call atched hls.

 ev ns should only contain alphanumerics | '_' | ':'


 An ev n can be qualed by ev nspaces that simp  rming or trging the ev
     ex: "click.myPlugin.simple" dfs bth
            the myPlugin & simp nspaces  4 this partic  $ev

 A $ev   hndlr atched via that S could be rmved w
    .off("click.myPlugin") |  .off("click.simple")
            w/o disturing othr $hndlrs attched to the el
     
 nspaces are sim  to CSS ks (!hier - only 1 n must match )

 In 2nd f of .on(), the evs arg is a pob.

 The keys are Ss in the same f  as the evs arg
     w space-septed ev ty ns &  opt nspaces.

 bth 'behave' same, EXCEPT, here:
 The va  for e  key is a fn (or false)
    that is 
        used as the hdlr
        instd of   final arg  to the met


 ~~~~~~Drct and deged evs
   maj  of bw evs bub/pgate UPWARDS/OUTWARDS, all the way to bd and  doc

 If sel omitd or nul,the ev  hlr is refd to as drct or drctly-bound.

    The hlr is called ev  time an ev  occurs on the sel  els,
            whether it occurs
               drctly on the el  or
                 bubs from a ch (inner) el


~DELEGATED (sel provided) - When a sel  is provided, the ev  hlr is refd to as delegated.
 Degev adv:  can hndle evs from ch added ltr, also, lowr overhd

 The hlr is not called when the ev occurs directly on the bound el,
            but only for chs (inner els)  that match the sel.

jq bus the ev  from the ev  tg up to the el where the hlr is atched(  in  to outermost el)  and  runs the hlr for any els along that path matching the sels.

 Ev hlrs are bound only to the cur sel d els; they must exist at the time your code makes the call to .on().
 (To know els are prsnt and can be seld, place scrps aft the els  | $(fn)) Alt: use degd evs to atch ev  hlrs.

 By pikng an el  that is guarntd to be prsnt at the time the degd ev  hlr is atchd,
  you can use degd evs to avoid  need to frq atch & rm ev hlrs   .
 This el  could be the ct el  of a vw in a MVC design, for ex,
  or doc  if the ev  hlr wants to monit  all bubevs in the doc
    -The doc el  is avail  in   head of   doc  bf loadg any oth HTML,
    (so its safe to  atch evs there wo waitg 4 the doc 2b rdy)



   ex:  consid  a tb w 1000 rows in its tbody, THIS atchs 1000 hlrs:*/

    $('#dataTable tbody tr').$(
        function() {$l( $( this ).text())})


        /*
 BUT: ev-deleg approach
 ev hl atches to the tbody,
 ev only bubups 1lev ($ed tr -> tbody):

*/$('#dataTable tbody').$('tr',
        function() {$l( $( this ).text())})/*



  
 The ev hl and its environment
    The hl arg  is a fn (or false)
 and is required unless you pass an ob for the evs argument.
  You can provide an anonymous hl fn at the point of the .on() call (ex above)
 OR declare a named fn and pass its name:
*/
    
    
    $.bt().$(notify )

    function notify() {alert( "clicked" )}


    /*  ~ev ob, bubg
     When the bw trgs   ev or oth js calls jq's .trigger() met,
 jq passes the hl an evob it can use (to analyze & change)

 evob: normalized subset of d provided by the bw; - the bw's unmodified native ev ob is available in ev.originaEvent.
 ev.type:  ev n ('resize)
 ev.target:  deepest (innermost) el where the ev occurred
 By default:
    most evs bubup from the orig  evtg to the docel
 At each el along the way,
 jq calls any matching ev hls that have been atched.


~stopProp
 A hl can pvnt the ev from bubg further up the  tree (and thus pvt hls on those els from runng)
  by calling ev.stopPropagation().
  Any other hls atched on the cur  el will run however.
  To pvt that, call ev.stopImmediatePropagation().
  (ev hls bound to an el are called in the same order that they were bound.)

     Returning false from an ev hl will automatically
     call ev.stopPropagation() and ev.pD().
     A false val can also be passed for the hl as a shorthand for fn(){ return false; }.
     So, $( "a.disabled" ).on( "click", false );
     atches an ev hl to all links with class "disabled"
     that pvts them from being followed when they are clicked and also stops the ev from bubg.

~pD
 Similarly, a hl can call ev.pD() to canc  any bw df acts  for this ev;
 ex: wont fol lnks -Not all bw evs have default actions,and not all default actions can be canceled.


 When jq calls a hl, 'this' is a ref  to the el where the ev is being delivered;
  for directly bd evs:  el where the ev was atched
  for degevs: this is an el matching sel.
  (Note that this may not be eq  to evtg if the ev has bubd from a ch el.)

   ~Passg d to the hl

 If a d g is providd to .on() and !(null|U),
 it is passd 2 the hl in the ev.data pop ea time an ev is trgd
 The d  arg  can be any type ,
 but if a S is used the sel  must either
 be provd  or  explicitly passed as null (so that the d  is not mistaken 4 a sel )

 Best:  use a pob so that mult  vals can be passd as pops



~eh
 -As of jq 1.4,the same ev hl can be bd to an el mult times. This is especially useful when the ev.data
 feature is being used, or when other uniq d is in a closure around the ev hl fn
 ex: */fn=function(ev) {alert(ev.data.n)}; $("button").$({n:'j'},fn).$({n:'r'},fn) /*: will gen two dif alerts when the button is clicked.






~trigger, triggerHandler
 As an alternative
 or in addition to the data arg  provided to the .on() met,
         you can also
                pass d  to an evhl using a 2nd arg
                 to .trigger() or .triggerHandler().
  Data provided this way is passed to the evhl as further pams after the Ev ob
  If an A was passed to the g.s of .trigger() | .triggerHandler(),
   ea el  in the A will be presented to the evhl as an individual pam



 ~~~ Ev performance

 In most cases,
 an ev  such as $ occurs infreq and performance is not a signif  concern.
 However,
  high freq  evs such as
  mousemove or scroll
  can fire dozens of times per second,

 and in those cases
 it becomes  important to use evs judiciously.
  Performance can be increased by:
   -reducing the amount of work done in the hl itself,
   -caching information needed by the hl rather than recalculating it,
    -rate-limiting the number of actual page updates using $.in


 Attaching many deged evhl near the top of the doc  tree can degrade performance.
 Ea time the ev  occurs,
 jq must compare all sels of all atched evs of that ty
  to ev  el  in the pth from the evtg 2 top of  doc
  For best performance, atch delegated evs at a doc loc as close as poss  to the tg els.
   Avoid excessive use of doc  or doc.bd for degd evs on large docs

 jq can process simp  sel   of the f  tag#id.class very quickly
 when
 they are used to fl degevs.
 So, "#myForm", "a.external", and "button" are all fast sels.
 Degevs   that use more complex sels
  partic hier  ones, can be sev  times slower--but they are still mostly fast enuf
   Hier  sels can oft  be avoided simp  by atchg hl 2 a more approp pt in doc


    ex: instead of
    $( "body" ).$("#commentForm .addNew", addComment )
    use
    $( "#commentForm" ).$( ".addNew", addComment ).




 jq's ev system requires that a DOM el allow atching
 data via a property on the el, so that evs can be tracked and delivered.
 The ob, embed, and applet els cannot atch data,
 and therefore cannot have jq evs bound to them.

 The focus and blur evs are specified by the W3C to !bub
 but jq defines cross-bw focusin and focusout evss that do bub .
  When focus and blur are used to atch delegated ev hls,
   jq maps the names and delivers them as focusin and focusout respectiv .
   For consistency and clarity, use the bubg ev yp names.

 In all bws, the load, scroll, and er evs (on an iEl) do !bub .
 In Internet Explorer 8 and lower, the paste and reset evs do !bub .
  Such evs are not suprtd for use with deg,
  but they can be used when the ev hl is dircly atched
   to the el geng the ev.

 The error ev on the wd ob uses nonstandard arguments and return val conventions,
  so it is not supported by jq.
  Instead, assign a hl fn directly to the wd.onerror property.

 The hl list for an el is set when the ev is 1st delivd.
  Adding or rmg ev hls on the current el
  won't take effect until the next time the ev is handled.
   To pvt any further ev hls from execg on an el wthn an ev hl,
   call ev.stopImmediatePropagation().

   This behavior goes against the W3C evs spec
   To better understand this case,
   consider the following code:
  */$test=$("#test").$(hl1).$(hl2)
    function hl1() {$l( "hl1" );$test.off( "click", hl2 );}
    function hl2() {$l( "hl2" );}
// In the code above,
// hl2 will be executed anyway the first time even if it's rmd using .off().
// but the hl will not be executed the following times the click ev is triggered.






    $( "p").$(function() {alert( $( this ).text())})// ex: Display a p's t in an al when it is $d:
    $( "p" ).$({foo: "bar"}, hl); function hl(ev){alert( ev.data.foo )}//ex: Pass data to the ev hl, which is specified here by name:
    $( "form" ).on( "submit", false ) //ex: Canc a f sb act  and pvt the ev from bubg up by returning false:
    $( "form" ).on( "submit", function( ev ) {ev.pD()})  //ex: Canc only the df act  by using .pD()
    $( "form" ).on( "submit", function( ev ) {ev.stopPropagation()})//ex: Stop submit evs from bubg without pvting form submit, using .stopPropagation().
    $( "div" ).$(function( ev, per) {alert("Hi, "+per.n)}) // ex: Pass data to the ev hl using the second argument to .trigger()
    $( "div" ).trigger( "click",{n: "Jim" })
    $( "div" ).$( function( ev, sal, n) {alert(sal+', '+n)})// ex: Use the the second argument of .trigger() to pass an array of data to the ev hl
    $( "div" ).trigger( "click", [ "Hi", "Jim" ] )



 //<style>  p { color: red;} span {color: blue; } </style>



    $.p('Has an atched custom ev.')
    $.bt('Trigger custom ev')
    $.sp().at('display','none')


    $( "p" ).on( "myCustomEvent", function( ev, myName ) {
        $( this ).text( myName + ", hi there!" );
        $( "span" ) .stop() .css( "opacity", 1 )
            .text( "myName = " + myName )
            .fadeIn( 30 ) .fadeOut( 1000 );});
    $( "button" ).click(function () { $( "p" ).trigger( "myCustomEvent", [ "John" ] ); });




// ex: Attach multiple ev hls simultaneously using a pob.

  // .test { color: #000;padding: .5em; border: 1px solid #444; } .active { color: #900; } .inside { background-color: aqua; }




    $.dK('test')
 $( "div.test" ).on({click: function() {
 $( this ).toggleClass( "active" )},
     mouseenter: function() {
 $( this ).K( "inside" )},
     mouseleave: function() {
         $( this ).removeClass( "inside" )}})


 // ex: $ any p to add another after it. Note that .on() allows a $ev on any p (even new ones)
 //--since the ev is handled by the ever-present bd-el  aft it bubs to there.


    // p { background: yellow; font-weight: bold;cursor: pointer; padding: 5px; } p.over { background: #ccc; } span { color: red;}

    $.p('Click me!')
    $.sp()
    n=0
    $.bd().$('p', function() {

        $( this ).after(
            $.p('Another p! ' + (++n))
        )
    })

 //alert each p's tx on $:
    $.bd().$('p', function(){ alert( $( this ).text() ) })

 //Cancel a link's default act
    $.bd().$('a', function(ev){ev.pD()} )



}
router=function(){
    bb.rt= bb.r=bb.R= $.ext(bb.Router)
    bb.h=bb.history
    bb.h.s=bb.h.start
    R$=function(o){var r

        o=O(o)?o:{}
        if(o.R){o.routes=o.R}
        r=bb.Router.extend(o)
        r.o=r.on
        return function(){var a=new r
            a.o= a.on
            a.oR=function(r,f){
                this.on('route:'+r, f)
                return this}
            a.n=function(frag,op){if(O(op)){
                if(D(op.t)){op.trigger=op.t?true:false}
                if(D(op.r)){op.replace=op.r?true:false}}
                a.navigate(frag, op)
                return a}
            return a
        }
    }
    H$=function(){bb.history.start()}
    bb.rt=function(klas){
        var rt = new klas
        rt.n= rt.nv=rt.ng=function(url){var rt=this, g=G(arguments)

            if(g.n){
                rt.navigate(url)
            }
            else {

                rt.navigate(url,  {trigger:true})
            }

            return rt}
        return rt
    }
    bb.Rt=function(ob){var Rt
        if(ob.i){ob.initialize = ob.i}
        if(ob.$){
            ob.initialize = function(){
                bb.history.start({pushState:true})
                if( F(ob.$ )){ob.$()}}}
        if(ob.rt){ob.routes = ob.rt}
        ob.routes = ob.routes || {}
        ob.routes[''] = ob.routes[''] ||'index'
        if(ob.x){ob.index = ob.x}
        if(ob.h){ob.home = ob.h}
        Rt= this.Router.extend(ob)
        return Rt
    }
    bb.R=function(ob){
        return r = rt = bb.rt( this.Rt(ob) )
    }
    NORTR=function(){$.x()


        V1 = bb.V.e({

            i: function() {this.r()},
            r: function(){
                this.$el.ht(this.model.get('Ms') + " from the View 1" )
                return this
            }
        })

        V2 = bb.V.e({

            i: function() {
                this.r();
            },

            r: function() {
                this.$el.ht(this.model.g('Ms') + " from the View 2");
                return this;
            }
        })
        V3 = bb.V.e({
            i: function() {
                this.render();
            },
            r: function() {
                this.$el.html(this.model.get('Message') + " from the View 3");
                return this;
            }
        })
        // Now we need a view that will contain the view and render it whenever the user makes a choice on the screen.

        CtV = bb.V.e({
            myChildV: null,
            r: function() {
                this.$el.ht("Greeting Area");
                this.$el.A(this.myChildV.$el);
                return this;
            }
        })

        /*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
         We will then position three buttons on the UI which will let the user to change the view.
         Below code shows the application setup that is creating the container view and the functions
         that will get invoked when the user selects the view from screen.
         */

        greet = V1.o({
            Ms: "Hello world"
        })


        cont = CtV.o({el: $("#AppContainer"),
            model: greet
        })

        v1 = null;
        v2 = null;
        v3 = null;

        function showView1() {
            if (view1 == null) {
                view1 = new View1({ model: greeting });
            }

            container.myChildView = view1;
            container.render();
        }

        function showView2() {
            if (view2 == null) {
                view2 = new View2({ model: greeting });
            }

            container.myChildView = view2;
            container.render();
        }

        function showView3() {
            if (view3 == null) {
                view3 = new View3({ model: greeting });
            }

            container.myChildView = view3;
            container.render();
        }



    }
    ITEMS=function(){$.x()

        Ap={M:{},V:{},C:{}}
        Ap.M.Item = bb.M.e({})

        bb.R({

            r:{'':'welcome', 'itemlist':'showItemList', 'j':'j'},

            welcome:function(){
                $.bd().E().A($.h1('welcome'))

            },


            j:function(){},
            showItemList:function(){
                $.bd().E().A($.h1('show item list'))

            }
        })

        i1=Ap.M.Item.o({ n:'jason', g:'mason' })
        i1.oR('j',function(){
            $.bd().E().A($.h1('j'))
        })

        // H$()
    }
    ROUTE=function(){z()
        r= bb.R({ rt:{"*x":"d"}  })
        r.oR('d',function(a){
            alert(a)
        })//#hello -> 'hello'
        r.oR('e',function(a){
            alert(a)
        })//#e -> 'e' (could do '/#/e')
        // H$()
    }
    ROUTEPAMS=function(){z()
        bb.R({

            rt:{
                '':'home',
                'view':'v',
                'new': 'nn',
                ':id': 'en',
                'posts/:id':'gPo',
                '*acts':'dfR',
                'download/*path': 'dlF',
                ':route/:action': 'ldV'},
            home:function(){al('home')},
            v:function(){al('image')} ,
            nn:function(){},
            en:function(id){al(id)}

        })
        r.oR('dfR',alert)
        r.oR('gPo',function(id){
            alert('gPo# '+id)})
        r.oR('gPo', function(){
            alert(3)}) //both routes fire!
        r.oR('dlF', alert)
        r.oR('ldV', function(rt,ac){
            alert(rt+'_'+ac)})
        // H$()  // or bb.h.s({pushState: true})
    }
    ROUTENAV=function(){$.x('b')
        bb.R({
            rt:{
                'po/:id'  :  'gp',
                '*a'      :  'dr'
            },
            dr:function(a){alert(a)},
            gp:function(id){alert('Get post '+id)}

        })
        $.bt('hi', function(){$l('11111111')
            rt.n('po/2', {t:1})
        })
    }
    BACKDEMO=function(){$.x()

        Temp=function(i,h){  var s=''
            return _.tp($('#'+i).html(), h||{})
            if(A(h)){_.e(h, function(h){s += h.oh()})}
            s="<script type='text/template'>"+ s +"</script>"
            return $(s).id(i).A()
        }

        Temp('task', [
            $.lb('Task: '),
            $.ip().id('task_desc'),
            $.bt('add task').id('btn') ])

        $.dI('cont')

        bb.R({
            rt:{'':'f',
                'f':'f',
                's':'s'},
            f:function(){$l('fir')},
            s:function(){
                new Task()
                $l('sec')}
        })

        Tsk=bb.V.e({
            el: $('#cont'),
            i: function(){this.r()},
            r: function(){this.$el.ht( Temp('task') )},
            e: {'click button': 'add'},
            add: function(){
                alert( $('#task_desc').v() + ' task added' )
            }
        })
    }
//works:
    RTR=function(){$.x('b')

        bb.R({$:1, rt:{
            '' : 'index',
            'wap/rtr/images/:id':'image',
            view: 'viewImage'
        },
            h: function () { alert('you are viewing home page')},
            x:function(){alert('you are viewing index')},
            image:function(id){
                _.t(10, function(){
                    $l($r() +'-id: '+ id)}); $.bd().C('z') },
            viewImage: function () {
                alert('you are viewing an image')}
        })

        $.in(function(){

            rt.n('wap/rtr/images/32903290239032902390')

        }, '*')

        //looks for clicks on any anchor els where
        //href starts with '/' (no domain) and stop
        //bw from nv to it

        $.bd().on('click', 'a[href^="/"]', function(ev){
            ev.preventDefault()
            rt.n($(this).attr('href', {trigger:true}))
        })
    }
}



clection=function(){
    $P()

    bb.C.e=function(ob){var g=G(arguments), o,Cl

        //o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}; o=o||{}
        ob=ob||{}

        /*
         if(o.fn){ob.i= o.fn}

         ob.initialize = ob.initialize || ob.i
         ob._i=ob.initialize
         ob.initializeX=function(op){
         this.q= this.$el

         this.a2=function(a){return this.q.a2(a)}
         //$l('gen init..')
         this.g=function(a){if(a){return this.model.get(a)}}
         this.A=function(ob){
         var g=G(arguments),
         q=this.q
         if(S(ob)){ob = this.g(ob)}
         if(ob){q.A(ob)}

         if(U(ob) || g.p){q.A()}
         return q
         }
         _.b(ob._i,this) (op)
         }


         ob.id = D(ob.id)? ob.id : ob.x
         ob.className=ob.className|| ob.k
         ob.tagName=ob.tagName|| ob.tn || ob.t
         ob.defaults=ob.defaults || ob.df || ob.d
         ob.events= ob.events || ob.ev || ob.e
         ob.render=ob.render || ob.rr || ob.r
         ob.tagName=ob.tagName || ob.tn || ob.t

         ob.collection= ob.collection || ob.cl || ob.c

         // ob.render= ob.render || ob.rr || ob.r
         ob.render= ob.render || ob.rn*/

        ob.model= ob.model || ob.md || ob.m

        Cl= bb.C.extend(ob)

        Cl.o=function(ob, q){
            var Cl = this, cl

            if(U(ob)){return new Cl}
            //ob=ob||{}

            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m

            cl= new Cl(ob)

            //if(q){cl.a2(q)}
            return cl
        }

        return cl
    }
    cl.a=cl.add
    cl.j= cl.tJ=cl.toJSON
    cl.rm= cl.r= cl.remove
    PLV=function(){$.x('o','hi')


        Per= bb.M.e({d: {n:'a', a:20, o:'p'}})

        p=  Per.o({})
        p1 = Per.o({n:'b'})
        p2= {n:'c'}
        PerV=bb.V.e({t:'li',
            x:'some-per', k:'per',

            tp:tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),

            r: function(){
                this.$el.A('fasdfsfasd')
                _m=this.model
                //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
            },

            i: function(){this.r()}
        })

        PepC=bb.C.e({m:Per})

        pV=PerV.o({m:p})
        pC=PepC.o()

        pC.add([p, p1,p2])

        PepV=bb.V.e({cl: PepC, el:ul= $.ul(),
            i:function(){},
            r: function(){
                ul=this.q.E()
                this.J(function(md){PerV.o({m:md},ul)})}})
        pCV = PepV.o({cl: pC})
        $.in(.2,function(){pCV.r()},'*')
        $.in(.4,function(){pCV.r()},'*')

    }
    C$= function(a){var b,c
// $.ext(bb.Collection)
        //if(U(a)){var c=new Backbone.Collection; return sCl(c)}
        a=O(a)?a:{}
        if(a.m){a.model= a.m}
        c= Backbone.Collection.extend(a)
        return function(o){o=O(o)?o:{}

            //if(o.m){o.model= o.m}
            b=new c(o)
            o.o=o.on
            E$(o)
            return b}
    }
    BCL=function(){$.x().h1('BCL')

        Bk = bb.M.e({
            d: {ID: '', n: ''},
            id: "ID",
            url: 'http://localhost:51377/api/Books'
        })

        BksC = bb.C.e({m: Bk})

        cl1 =   BksC.o()
        bk1 = Bk.o({ ID: 1,  n: "Bk 1" })
        bk2 =  Bk.o({ ID: 2, n: "Bk 2" })
        cl2 =  BksC.o([bk1, bk2])
        bk3 =  Bk.o({ ID: 3, n: "Bk 3" })
        cl2.add(bk3)

        change=function(){
            bk3 = new Bk({ ID: 3, n: "Bk 3" })
            cl2.add(bk3)
            bk3_changed =  Bk.o({ ID: 3, n: "Changed Model" })
            cl2.add(bk3_changed, { merge: true })
        }

        add=function(){
            bk4 =   Bk.o({ ID: 4, n: "Bk 4" })
            bk5 =  Bk.o({ ID: 5, n: "Bk 5" })
            cl2.add([bk4, bk5])
        }
        addAt=function(n){
            bk0 = new Bk({ ID: 0, n: "Bk 0" })
            cl2.add(
                bk0, {at:n||0}
            )
        }

    }
    BBCOL=function(){$.x()

        Per = bb.M.e({})
        p1 =  Per.o({n:'j'})
        p2=  Per.o({n:'y'})

        Pers= bb.C.e({model: Per})

        pers=  Pers.o([p1, p2])
    }
    BBSORT=function() {
        Chp = bb.M.e()

        chps =  bb.C.e({
            m:Chp
        }).o()


        chps.comparator = function (a) { return a.tt } //$.x(a)

        chps.add(
            Chp.o({p:9, tt:"End"})
        )
        chps.add(
            Chp.o({p:5, tt:"Mid"}))
        chps.add(
            Chp.o({p:1, tt:"Beg"})
        )

        $l(chps.pluck('tt'))

    }
    FLCL=function(){$.x('r', 'filtering a cl:')

        /*
         FlV = bb.V.e({
         ev: {'click #run': 'runFilter'},
         runFilter: function(e){e.pD();
         this.fl = {
         // ... get the filter info from the DOM
         }; this.rr()},
         rr: function(){// get the filtered list from the collection
         // iterate over the filtered list and render the results in to the html array
         // populate the DOM with the resulting HTML
         HT=[]
         _.e(this.cl.where(this.fl),
         function(item){HT.push(
         _.tp($('my-item-template').H())(item.tJ())
         )})

         this.$el.html(HT); return this }
         })*/


        Cl =  bb.C.e({
            i:function(){}
        })


        cl = Cl.o({})


        /*
         cl.add([{a: 'f', b: 's'},
         {a: 't', b: 's'},
         {a:'f', b: 's'},
         {a: 's', b:'t'}
         ])


         res = cl.where({a:'f',b:'s'})
         */
        //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
    }
    TASKER=function(){$.x()
        Ap={M:{}, C:{}, V:{}}

        Ap.M.Task = bb.M.e({})

        t1=Ap.M.Task.o({t:'go  store', pr:4})

        t2=Ap.M.Task.o({t:'go park', pr:3})

        Ap.V.Tsk= bb.V.e({t:'li',
            rr: function(){this.A( this.g('t') )
                return this
            }
        })

        taskView=Ap.V.Tsk.o({m:t1})
        Ap.C.Tasks = bb.C.e({m:Ap.M.Tsk})
        tasks=Ap.C.Tasks.o([{t:'hi'}, {t:'bye'}])
        Ap.V.Tasks = bb.V.e({t:'li',
            rr: function(){
                var that=this
                this.cl.each(
                    function(t){
                        var v=Ap.V.Task.o({m:t})
                        that.$el.A(v.rr().el)
                    }, this)
                this.el.A()
            }
        })

        tasksV=Ap.V.Tasks.o({cl:tasks})
    }
    PEOPLE=function(){$.x()

        Per  = bb.M.e({
            i: function () {
                //this.oV(function(mod, err){$l(err)})
            },
            d: {n:'doe', a: 30, j: 'wrk'},
            validate: function (ats) {if (ats.age < 0) {return 'a < 0!'}},
            work: function () {return this.g('n') + ' is working'}
        })

        p = Per.o({n: 'y', a: 34})

        //p.oV(function (mod, z) {$l(z)})

        PerV = bb.V.e({tn: 'li',
            k: 'person', x: 'some-person',
            i: function () {this.r()},
            tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
            r: function () {
                var t = this
                //this works, but doesnt use a template
                // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
                t.H(
                    t.T(
                        t.J()
                    )
                )
            }
        })

        pV= PerV.o({m: p})

        peepC = bb.C.e({m: Per})


        pC = peepC.o([
            {n: 'rigo', a: 29},
            {n: 'j', a: 2},
            {n: 's', j: 'gx'}
        ])
        pC.add(p)


        pC.at(1).n('joejoe')
        pC.at(1).s('name', 'joejoe')

        PeepV = bb.V.e({tn: 'ul',
            i: function () {
                $l('hi')
                $l(this.cl)
            },
            r: function () {//var t=this
                this.cl.each(function (p) {var v,pV  //$l(p.g('n'))
                    pV = PerV.o({m: p}) //$l(pV.el)
                    this.$el.append(pV.el) //t.q( pV.el  )
                }, this)
            }

        })

        pcv = PeepV.o({cl: pC})
        pcv.r()
        $.A( pcv.el )

    }
    fromServ=function(){
        AVAIL=function(){$.x('x'); Ap={ M:{},C:{},V:{},T:{} }

            Ap.T.Avail=function(model){
                return $.d('g',400,100).mar(20).A(

                    $.h4(model.g('c')).id('avail').C('y','r'),
                    $.br(), $.sp('delete').id('deleteAvail'),
                    $.sp(' '), $.sp('edit').id('editAvail'),
                    $.sp(' '), $.cb().id('selAvail'))
            }
            Ap.M.Avail=M$({urlRoot: '/avail'})
            Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
            Ap.V.Avail=bb.V.e({

                r:function(){
                    this.$el.A( Ap.T.Avail(this.model) )
                    return this},
                ev:{
                    'click #deleteAvail':'deleteAvail',
                    'click #editAvail':'editAvail',
                    'blur #avail':'changeAvail'},
                changeAvail:function(){
                    this.$el.fi('#avail').at('contenteditable','false')
                    newAvail=this.$el.fi('#avail').text()
                    this.model.s('c', newAvail)
                    this.model.save()},
                deleteAvail:function(){
                    this.model.destroy()
                    this.$el.rm()
                },

                editAvail:function(){this.$el.fi('#avail').at('contenteditable','true')}

            })
            Ap.V.Avails =bb.V.e({
                el:'#availsDiv',
                I:function(){this.render()},
                R:function(){var t=this
                    t.collection.fetch({
                        success:function(){
                            t.$el.html('')
                            t.$el.A("<h1>Avails List</h1>")
                            t.collection.each(function(m){
                                t.$el.A( Ap.V.Avail({model:m}).render().el )
                                return t},t)
                        }})
                }})
            //  avs=Ap.C.Avails()
            //  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
            $.ip('new avail').id('newAvail').A()

            $.bt('ok',function(){
                Ap.M.Avail({c: $('#newAvail').v()
                }).save()

                v.render()

            }).A()
            $.dI('availsDiv')
            $.ip('new avail').id('newAvail').A()
            $.bt('ok',function(){
                var m= Ap.M.Avail({
                    c:qiv('newAvail')
                })
                m.save()
                m.on('destroy', function(){alert('i am the model and i was destroyed')})
                v.render()
            })
            $.dI('availsDiv')


            Ap.T.Avail=function(model){
                return $.d('g',400,100).mar(20).A(
                    $.h4(model.g('c')).id('avail').col('y','r'),
                    $.br(),
                    $.sp('delete').id('deleteAvail'),
                    $.sp(' '), $.sp('edit').id('editAvail'),
                    $.sp(' '), $.cb().id('selAvail')
                )
            }
            Ap.M.Avail=bb.M.e({urlRoot: '/avail'})
            Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
            Ap.V.Avail=bb.V.e({

                r:function(){
                    this.q(
                        Ap.T.Avail(this.model)
                    )
                    return this
                },
                ev:{
                    'click #deleteAvail':'deleteAvail',
                    'click #editAvail':'editAvail',
                    'blur #avail':'changeAvail'
                },
                changeAvail:function(){
                    qq( this.$el.find('#avail') ).cE(0)
                    var newAvail=this.$el.find('#avail').text()
                    this.model.s('c', newAvail)
                    this.model.save()
                },

                deleteAvail:function(){
                    this.model.destroy()
                    this.$el.remove()},
                editAvail:function(){

                    this.$el.find('#avail').cE(1)

                }

            })

            Ap.V.Avails =bb.V.e({el:'#availsDiv',
                i:function(){this.render()},
                r:function(){var t=this
                    t.collection.fetch({
                        success:function(){
                            t.q.H('')

                            t.q($.h1('Avails List'))

                            t.e(
                                function(m){
                                    t.q(
                                        Ap.V.Avail({m:m}).r().el )
                                    return t},t)

                        }})
                }})
            avs=Ap.C.Avails.o()

            avs.on('destroy', function(j){
                alert('i am col and i was destroyed')
                v.trigger('modelDeleted')
            })

            v=Ap.V.Avails.o({cl:avs})


            v.on('modelDeleted', function(){alert('modDel')})

            bb.M.e({
                d:{ prop:3 },
                test:function(){
                    $( this.get('prop') ) },
                test2:function(a){ $l('prop: '+this.get('prop'))},
                happy:function(a){
                    this.test2(a)
                }
            })


        }
        DIRTPAGE=function(){$.x()

            var newMsBox, newTopic, newMs,searchBox

            MsM= bb.M.e({  })
            MsC= bb.C.e({   m:'MsM'  })
            MsView= bb.V.e({  })
            MssView= bb.V.e({ })

            $.h1().A(
                $.a(  'Dirtpage', '/wap/dirtpage/' )
            ).A()
            $.dI('content')
            if(wappyPam) {

                newMsBox= $.d().WH('auto').A(
                    $.h1('new ms'),
                    $.ip().K('form-control').id('newMs'),
                    $.bt('ok', function(){var newMs = $('#newMs').v()
                        $.P('messages' , {tpc:wappyPam, ms:newMs
                        }, function(){ loadResults() })}))
                $('#cont').A($.h1('the '+ wappyPam + ' page'),
                    newMsBox, $.dI('res'))
                function loadRes(){$.G('topics/' + wappyPam, function(msgs){
                    $('#results').ht($.h5('len: '+msgs.length)  )
                    _.e(msgs, function(ms){$('#res').A($.h6( ms.ms ))
                    })})}
                loadRes()}
            else {
                newMsBox=$.d().WH('auto').A(
                    $.h1('new message'),
                    $.ip().K('form-control').id('newTopic'),
                    $.ip().K('form-control').id('newMs'),
                    $.bt('ok', function(){
                        newTopic = $('#newTopic').v()
                        newMs = $('#newMs').v()
                        $.P('msgs', {topic:newTopic, message:newMs}, function(){})})
                )
                searchBox= $.d().WH('auto').A(
                    $.h1('search'),
                    $.ip().K('form-control').id('searchInput'),
                    $.bt('ok', function(){window.location=   '/wap/dirtpage/'+ $('#searchInput').v()
                        searchInput = $('#searchInput').v()
                        $.G('topics/' + searchInput, function(msgs){
                            $('#res').ht($.h5('len: '+msgs.length)  )
                            _.e(msgs, function(ms){$('#res').A( $.h6( ms.ms ) )})
                        })
                    })
                )
                $.dI('res')
                $('#cont').A(newMsBox, searchBox)
                $.eG('msgs',  function(ms){
                    $('#res').A($.h2().A(
                            $.a('topic: '+ms.topic,'/wap/dirtpage/'+ms.topic)),
                        $.h3( 'ms: '+ms.ms)
                    )
                })
            }
        }
    };fromServ()


};clection()





