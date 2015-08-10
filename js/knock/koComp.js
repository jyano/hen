
$.eT=$.emT=function(t){
    return $.em().bT(t)
}

COMPNAME=function(){

    ko.cm.gN= ko.cm.getComponentNameForNode = function(nd){

        tgN = nd.tagName && _.tL(nd.tagName)

        return  ko.cm.iR(tgN)?  tgN : tgN==="special-el"? "MyCm": null
        // If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
        // use cm "MySpecialComponent" (regardless if pre-regd)
        // Treat anything else as !repg a cm
    }

}



ko.cm = ko.cmp = ko.comp= ko.components

ko.cm.rg= ko.cm.reg=ko.cm.register


ko.cm.iR=ko.cm.isRegistered

ko.r=ko.rg=function(n, ob){
    ob=ob||{}
    if( S(ob.vm) || (O(ob.vm) && !ob.vm.element)){ob.vm={element: ob.vm}}
    ob.viewModel=ob.viewModel||ob.vm||ob.m||ob.o
    if(U(ob.viewModel)){ob={vm:ob}}
    ob.template = ob.template || ob.tp || ob.t
    vm=ob
    return ko.cm.rg(n,ob)
}

ko.r = ko.rg= ko.cm.rg = ko.cm.reg= function(){var g=G(arguments),o

    o={n:g.f, op: g.s}

    o.op = o.op || {}

    if(!o.op.viewModel){
        //op.viewModel = op.vm || op.m
        if(op.vm) {op.viewModel = op.vm}
        else if(op.m) {op.viewModel = op.m}

    }


    if( S(o.op.viewModel)  || (
        O(o.op.viewModel) && !o.op.viewModel.element  ) ){

        o.op.viewModel={ element: o.op.viewModel }

    }


    o.op.viewModel =   o.op.viewModel ||  { vm: o.op }
    if(!op.template){
        if(op.tp) {op.template = op.tp}
        else if(op.t) {op.template = op.t} }

    cm =  ko.cm.reg(o.n, o.op)
    return cm
}





CM=function(){$.x()

    d=  $.d().A($.hr(), 'hrrrr', $.hr() )

    ko.r('test', { t:d[0],   m:{a:100, b:'hello' }  })

    $('<test>').A()
        .C('b').A('hello')

    $('<test>').A()
        .C('b').A('hel1')

    $('<test>').A()
        .C('b').A('hello2')

}





CMLDR=function(){$.x()

    VM=function(p) {this.somePop = p.smKey}
    VM.prototype.doSmg = function() {}

    ko.r('myCm', VM)

    ko.r('myCm', {
        m: {
            createVM: function(p, cmInf) {return new VM(p)}},

        t: '#d'
    })

    ko.r('msgEd', {
        m: function(p) {this.t = ko.o(p && p.initT||'')},
        t: $.d([
            'Ms:',
            $.ipV('t'),
            '(len:',$.spT('t().length'),')'
        ])
    })

    $.tp("MyLsTp").A($.h3('spcl ls:'))


    $.ulE(

        "{ data: myItems, as: 'myItem' }"
    ).A(

        $.li().A(
            $.h4('more my spc items'),
            $({
                tp: {nodes: $componentTemplateNodes, data: 'myItem'}
            })
        )

    )

    $.tg('MyLs').at('params', 'items: PEEP').A(
        'The person',$.emT('name'),'is',$.emT('age'),'years old.')


    ko.r('MyLs', {
        t: { el: 'MyLs-template' },
        m: function(p) {this.myItems = p.items}
    })


    ko.b({
        PEEP: $oa([{n:'Lew', a: 56 }, {n: 'Atha', a: 34 }])
    })



    MyCmVM=function(pm) {
        curObsrvInst = pm.$raw.myExpr()
    }


    // Now curObsrvInst is either
    // observable1 or obsrv2//
    // and you would read its value with "curObsrvInst()"
    // 'params' is an object whose k/v pairs are the pams
    // passed from the cm bd or cust el.
    // - 'cmtInf.el'

    //  is the el the component is being//
    //  injected into. When createVM is called, the template has//
    //  already been injected into this el, but isn't yet bound.

    // - 'componentInfo.templateNodes'

    // is an array containing any DOM
    //   nodes that have been supplied to the component. See below.
    // Return the desired view model instance, e.g.:

}


CMNEWS=function(){$.x('y','news feed')
    //http://jsfiddle.net/rniemeyer/fssXE/

    $.qAP('nwsFd', 'vm', 'VM')
    $.qAP('nwsFd', 'vm', 'VM2')
    $.h2('News Feed')
    $.dT('vm.ms')

    $('<nwsFd params="vm: feed"></nwsFd>').A()
    $('<nwsFd>').at('params', "vm: feed2").A()

    ko.r('nwsFd', {
        m: function (p) { this.vm = p.vm }
    })

    ko.r('nwsFd', {m: function (p) {this.vm = p.vm},
        t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
    })

    ko.r("nwsFd", {m: function (p) { this.vm = p.vm },
        t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
    })

    Feed=function(){this.ms=ko.o('pf!')}

    VM = function(){

        this.ms = ko.o("Hi")
        this.feed = new Feed()
        this.feed2 = new Feed()
        this.feed.ms("Ms1")
        this.feed2.ms("Ms2")
    }


    Ms = function (m) { return {m: ko.o(m||'') } }

    ok({m :ko.o('!'), VM : Ms('m1'), VM2 : Ms('m2'), VM3: {m:ko.o('!')}})

    ok( new VM() )

    ok({
        ms : ko.o("!"),  VM: {ms: ko.o("!")},  VM2: {ms: ko.o("!")}
    })

    vm.VM.ms("1")
    vm.VM2.ms("2")
}




WEBCM=function(){


    //instead of writing this:
    $.d().b('cmN', '{n:"flDeals", params:{from:"lhr",to:"sfo"}}'
    )


    //  <div data-bind='component: {
    // name: "flight-deals", params: { from: "lhr", to: "sfo" }
    // }'></div>


//… you can write:
    $('<FlDeals>')  //   < params='from: "lhr", to: "sfo"'></flight-deals>
}


//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
//   reg  is optional, comp def specs vm, tp

LIKE=function(){$.x('x', 'like')


    ko.rg('like', {

        m: function (o) {var cm = this
            cm.chosenValue = o.value   // Data: v is null|'like'|'dislike'
            cm.like = function () {
                cm.chosenValue('like')
            }
            cm.dislike = function () {cm.chosenValue('dislike') }
        },



        t: $.sp().A(

            $.dK("like-or-dislike").bVs('!chosenValue()').A(
                $.bt('like it').bC('like'), $.bt('Dislike it').bC('dislike')
            ),

            $.dK('result').bVs('chosenValue').A(
                'You', $.str().bT('chosenValue'), 'it'
            )

        )


    })





    //   use  it as a custom element:
    $.ulE('prods').A( $.li().K("prod").A(

        $.str().bT('n'),
        $('<like>').at('params', "value: uRating")
    ))


    $.ul().b('e', 'products').A(
        $.li().K("prod").A(

            $.str().bT('n'),
            $('<like-or-dislike>').at('params', "value: uRating")
        )

    )



    $.bt('Add a product').b$('A')

    function Prod(n, ratg) { return {n : n, uRatg : ko.o(ratg||null)} }
    function VM() {this.prods = ko.oa() }
    VM.prototype.A = function() {
        this.prods.push(Prod( 'Prod ' + (this.prods().length + 1)))}


    OK(new VM())
    OK({prods: [Prod('brd'), Prod('chc'), Prod('sgh', 'like')] })


}

LIKE=function(){$.x('b', 'like')

    tp=$.d([

        $.d([
            $.bt('like it').b('$','like' ),
            $.bt('dislike').b('$', 'dislike')
        ]).K("like-or-dislike").at('data-bind', "visible: !chosenValue()"),
        $.d([    'You',
            $('<strong>').b('t', "chosenValue"), 'it'
        ]).K('result').at('data-bind', "visible: chosenValue")
    ])


    ko.components.register('like-widget', {

        viewModel: function(pams) {
            this.chosenValue = pams.value
            this.like = function() { this.chosenValue('like') }.bind(this)
            this.dislike = function() { this.chosenValue('dislike')
            }.bind(this) // i didnt overwrite bind did i?
        },

        template: tp
    })


    $.ulE('products').A( // should i not pass in arr as 2nd pam to ulE
        $.li().K("product").A(
            $('strong').b('t', 'name'),
            $('like-widget ').at('params', 'value: userRating') ) )


    function Prod(n, rating) {this.name = n;  this.userRating = ko.o(rating || null)}

    ok({  products : [
        new Prod('Garlic'), new Prod('Pain'), new Prod('Seag', 'like') // This one was already 'liked'
    ] })



}



//tagUp and add, return jQ
$.fn.qA=function(t){
    return $('<'+t+'>').A()
}



$.fn.par=function(a,b){
    this.at('params', a+': ' + b );
    return this
}


$.fn.qAP=function(a,b,c){
    this.qA(a).par(b, c)
    return this
}


// ko.b({ g[0]:  ko.o(b) })

KOCM=function(){$.x('b','First instance, without parameters')

    $.d().bCm('message-editor')

    $.h4('Second instance, passing parameters')
    ko.components.register('message-editor', {
        viewModel: function(params) {
            this.text = ko.o(params && params.initialText || '')
        },
        template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
    })
    $.dCm(
        'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
    )
    ko.applyBindings()
}

