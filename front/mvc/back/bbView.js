$P()

vw.cl=function(fn){var cl
    cl=this.collection
    if(U(fn)){return cl}
    if(cl){_.e(cl,fn)}
    return this
}


$.uV=$.ulV=function(ob){ob=ob||{}; // make a bbV with t:ul
    ob.t = 'ul'; return $V(ob)
}

$v=function(){var g=G(arguments); return $V.apply(null, g)()}

$V=function(){var g=G(arguments),
    Vw = bb.V.x.apply(bb.V, g)
    // ***  bb.V.x.apply(bb.V, g) same as _.x(bb.V,g)??

    return function(){var g=G(arguments), vw,
        ob =  g.O_? g.f:  {}
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        vw = new Vw(ob)
        if(g.s){ vw.a2( g.s ) }
        return vw}
}




$.fn.V=function(ob){ob=ob||{}; ob.q=this
    return $V(ob)
}




bb.v=function(ob){var Vw =  bb.V.x(ob)
    return function(a,b,c,d){
        return new Vw(a,b,c,d)}
}





bb.V.x=  function(ob){var g=G(arguments); ob=ob||{}


    ob._i = ob.initialize  || ob.i
    ob.initialize = function(op){
        // ok so i think i see what is happening here...
        // first of all, i am clearly overwriting 'initialize' here
        // so why bother setting it prior?
        this.q= this.$el
        this.a2=function(a){
            var res=   this.q.a2(a)
            //return this
            return res
        } //this.g=function(a){  if(a){return this.model.get(a)}}
        this.A=function(ob){var g=G(arguments),  q=this.q
            if(S(ob)){ob = this.g(ob)}
            if(ob){q.A(ob)}
            if(U(ob) || g.p){q.A()}
            return q}
        if(F(ob._i)){   _.b(ob._i, this)(op) }
    }

    ob.id = D(ob.id)? ob.id : ob.x || ob._ || ob['#']
    ob.className=ob.className|| ob.k

    ob.defaults=ob.defaults || ob.df || ob.d
    ob.events= ob.events || ob.ev || ob.e
    ob.events = bb.eParse(ob.events)
    ob.render=ob.render || ob.rr || ob.r
    ob.tagName=ob.tagName || ob.tn || ob.t
    ob.collection= ob.collection || ob.cl || ob.c
    ob.model = ob.model || ob.md || ob.m
    ob.el = ob.el || ob.q
    ob.render = ob.render || ob.rn || ob.rr || ob
    ob.events = bb.parseEvents(ob.events)
    vw= bb.V.extend(ob)
    return vw

}



vw.e=function(fn){
    _.e(this.model, fn)
    return this
}
vw.g=function(m){
    $l('g')
    if(this.model && this.model.get){

        return this.model.get(m)
    }

    $l('!model')

}
vw.s=function(a,b){this.model.set(a,b); return this}
vw.h=vw.H=function(a){this.$el.html(a); return this}
vw.eCl= function(fn){_.e(this.collection, fn)
    return this}

vw.ECl= function(fn){
    this.E()
    _.e(this.collection, fn)
    return this
}

vw.oC=function(fn){var g=G(arguments)
    this.model.on('change', fn)
    if(g.p){this.r()}
    return this
}

vw.e= function(a,b){ var cl = this.collection || this.cl
    return cl.each(a,b)
}


vw.j=vw.tJ=vw.J=function(){
    if(this.model){
        return this.model.toJSON()
    }

    $l('j:!md')
}

vw.J= function(fn){
    var vw=this,
        j= this.collection.toJSON()
    if(F(fn)){

        _.e(j,fn);return vw}

    return j
}

vw.r=  vw.rr=function(){ return this.render() }

vw.E=function(){   this.q.E(); return this }


vw.C$=function(s){  this.q.C$(s); return this  }



BBVIEW=function(){$.x('b','bbview')


    v=$V({

        q: d=$.dI('d1','r', 500, 500),

        r: function(){this.A($.ul(['hello']))},

        i: function(){this.r()}

    })()


    /* also works, uses jq.fn.V ...very cool


     $.dI('d1','r', 500,500).V({
     r: function(){this.A($.ul(['hello']))},
     i: function(){this.r()}
     })()

     */

}
BBVIEWV=function(){$.x('b','bbviewV')
    //  uses jq.fn.V ...very cool
    $.dI('d1','r', 500,500).V({
        r: function(){this.A($.ul(['hello']))},
        i: function(){this.r()}

    })()
}

PER=function(){$.x('n')

    Per= bb.Per()


    PerV = $V({

        t:'li', //  _:'some-per',
        k:'per',


        r: function(){
            this.q.A('n')
            this.q.A()
            //  this.A(this.g('n')).A() //
            // this.A(this.model.get('n').A()
        },

        i: function(){
            $l('i: ' + _.jS(this.model.J()) );
            this.r()
        }


    })

    p=  Per()

    pV =  PerV({
        m:p
    })

    $.ev(.5,function(){
        pV.r()
    })

}
PER1=function(){$.x('n')

    m = $m({  d:   {n:'j',a:20,o:'p'}   })


    Vw=$V({
        t: 'li',
        r: function(){

            this.q.A(
                'n: '+ this.model.g('n')
            ).A()


        },

        i: function(){$l('init..')
            this.q.A()
            this.r()
        }
    })


    vw =  m.V(Vw)


    $.in(function(){

        m.l()

    }, '*')

}






BBV=function(){$.x('x','bbv')
    Med = $M({})
    m=Med({t:'antibiotic'})
    m1=Med({t:'antipsychotic'})


    d = $.dA('b', 300,400).XY( 100,100)
    d1 = $.dA('r', 300, 400).XY( 600,100)


    Vw =$V({
        r:function(){this.q.h(this.g('t'));return this },
        i:function(){var v=this
            v.oC(function(){v.r()},'+') }
    })



    v=Vw({ el:d, m:m  })

    v2=Vw({ el:d1,  m:m1 })

    i = $.ip()

    $.bt('change', function(){  m.s('t', i.v())  })


} //*** study this one. is it necess to wrap vws?









//without backbone!
WOB=function(){$.x('x', 'bb view people')

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


/*

 Vws in bb don’t contain HTML markup for your app; they contain logic behind presentation of md’s data to user.
 A view’s r() met can be bound to   md’s change() event enabling view to instantly reflect md changes without  page refresh.
 Vws can use el to compose their el’s content   and then insert it into DOM all at once,     which makes for faster rendering because bw performs minimum required number of reflows and repaints.
 to create new el for your view, set any combination of  tagName, id, and k.     doesn’t append it to DOM.
 el: '#footer'  el: $('#footer')
 ops, el, tagName, id and k may be defined as fns,  if you want their vals to be determined at runtime.
 view.$(sel)   ~ $(view.el).find(sel)
 In our TdVw example’s render met,    we see this.$el used to set HTML  of el     and     this.$() used to find subels of class ‘edit’.

 If you need to apply existing bb view to dif DOM el     setElement can be used for this purpose.
 Overriding this.el needs to both change DOM ref  and re-bind evs to new el (and unbind from old).
 setElement will createcached $el reference for you,     moving delegated evs forview from old el to new one.
 bt1 = $('<bt></bt>');   bt2 = $('<bt></bt>');
 Vw = $V({e: {$: fn(e){ $l(vw.el === e.target) }}})
 vw = new Vw({el: bt1})
 vw.setElement(bt2);   // Apply view to bt2 using setElement
 bt1.trigger('click');     bt2.trigger('click'); // returns true
 The “el” property reps markup portion of view that will be rendered;
 to get view to actually render to page, you need to add it as new el or append it to existing el.
 can also provide raw markup to setElement:     view.setElement('<p><a><b>test</b></a></p>'); $l(view.$('a b').h()); // outputs "test"

 r()  passing  toJSON() encoding of atts of md associated with view.
 A common bb convention is to return this at end of r().      This is useful for number of reasons, including:
 Making views easily reusable in other parent views.    Creating list of els without rendering and painting each of them individually,
 only to be drawn once entire list is populated.

 Note usage of return this; at end of render.
 This common pattern enables us to reuse view as sub-view.
 We can also use it to pre-render view prior to rendering.
 What isn’t instantly obvious is that    'this' always refers to cur view object within cb fns.
 any string cb supplied to evs attr  must have corr fn with same name within scope of your view.
 edit cb is invoked when user double-clicks label el within el el,
 updateOnEnter is called for each keypress in el with class ‘edit’,
 close executes when el with class ‘edit’ loses focus.
 Each of these cb fns can use this to refer to TdVw object.
 Note that you can also bind mets yourself using _.bind(this.viewEvent, this),
 which is effectively what val in each event’s key-val pair is doing.
 Below we use _.bind to re-render our view when md changes.
 ( _.bind   =anytime fn is called val of this will be object, also supports  partial applic!!! )

 */

BOOKVW=function(){



    $.dI('td)





    TdVw = $V({ t:  'li',

        e:{
            'click .toggle': 'toggleCompleted',
            'dblclick label': 'edit',
            'keypress .edit': 'updateOnEnter',
            'click .destroy': 'clear',
            'blur .edit': 'close'
        },


        Item:function(o){return  $.d([$.cb().id('td_complete').at('checked', o.completed? 'checked':''), o.tt])},


        i: function(ops){this.ops = ops || {};
            this.model.on('change', _.b(this.r, this))
        }, //  access passed ops inyour view



        // Re-render tt of td item.
        r: function(){var v=this
            v.q.h( this.Item( this.md.J() ) ) // this.md.atts ?
            v.input = v.$('.edit')
            return v},

        edit: function() { },    // executed when td label is double clicked
        close: function() { },  // executed when td loses focus
        updateOnEnter: function( e ) { } // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
    })




ListVw =$V({
        r: function(){
            // Assume our md exposes items we will display in our list
            _.e(this.g('items'), function(i){
                // Createnew instance of ItemVw, passing it spec md item
                // The itemVw's DOM el is appended after it
                // has been rendered. Here, 'return this' is helpful
                // as itemVw renders its md. Later, we ask for its output ("el")
                this.A(TdVw({ md: i }).r().q)}, this)} })

    tdVw = new TdVw()

    // log reference toDOM el that corresponds to view instance
    $l(tdVw.el); // logs <li></li>
}