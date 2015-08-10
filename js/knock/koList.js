$.uLE=function(a){var g=G(arguments)
    return $.ulE(a, $.li(g.r) )
}

//////////////
//bE, observableArray
KOOA=function(){$.x()
    OK('peep', $oa(        {f:'B',l:'Bb'}, {f:'C',l:'Cc'}, {f:'D',l:'Dd'} ))
    $.dE('peep', [  $.p(
        $.spT('f'),    ' ',   $.spT('l')
    ) ])
    $.bt('push',function(){
        vm.peep.push({f:'j',l:'y'})
    })
}
ADD=function(){$.x('x', 'course')

    OK({

        cl: $oa(),

        a: function(){
            this.cl.p({
                n:'j', c:$r()
            })
            return this
        }

    })


    $.s$('a','play'); //the order of these mets should reverse


    $.U('cl',  [

        'name is ', $.sT('n'), ' and gusta ', $.sT('c')

        ])

    vm.a().a().a()
    //https://www.youtube.com/watch?v=JGwRIbWWqjE
}
DELETE=function(){$.x()
//bind bt 'click' to parent.rem
    $.h4('People')

    $.ulE('peep',[ $.li([
        $.sp('pos/name: '),
        $.spT('$index'),
        $.spT('n'),
        $.$bt('del', 'rm', '-')
    ]) ])
    $.$bt('A')

    ok({ peep : ko.oa({n:'B'},{n:'Ch'},{n:'De'}),
        A: function(){this.peep.push({n: "New at "+$D()})},
        rm : function (a) {vm.peep.remove(this)}
    })


}
ROOT=function(){$.x('x')
    $.uE('fs', [  $.li().b({
        t:'$data',
        s:'{selected: $data==$root.chFI()}',
        $:'$root.gtf'

    })

    ]).K('fs')

    ok({
        fs:['I','A','Se','Sp'],
        chFI: ko.o(),
        gtf: function(f){
            $l('click: ' + 'f: '+ f + ', this: '+this)
            f = f||'frog'
            vm.chFI(f)
        }
    })
}

BARN=function(){$.x()


    $.ulE('PL', [ $.li([
        $.sp('Planet: '),

        $.b().bT('n'),

        $.dI('cap',[  $.pT('cap.n')])

    ])])


    ok('PL',[
        {n: 'Merc', cap: null },
        {n: 'Earth', cap: { n: 'Barn' } }
    ])
}








// WORKS //////////////////////////

KO0 =function(){
    $.x(); $.ipV('n'); $.h1T('n')
    $.ulE('arr', [$.liT()])
    $.sb().b$('A')
    $.dA('b',100,300,200,'+').bT('n')

    ok({n:ko.o('zi'), arr: ko.oa(),
        A:function(){this.arr.push(this.n())} }) // ok('n', ko.o('zi'))
    $.in(1, function(){
        vm.n('girf')
        _.e(['a','b','c'], function(i){
            vm.arr.push(i)})},'*')
}

KOE=function(){$.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]),
    $.tBE('peep', [
        $.tr([
            $.tdT('f'),
            ', ',
            $.tdT('l')
        ])
    ])])

    OK({ peep: [
        {f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}
    ]})

}

NEST=function(){$.x('x').h2('Pp')

    Per = function(n, ch) {
        this.n = n
        this.ch = $oa(ch)
        this.A = function(){
            this.ch.push('new ch '+ $r())
        }
    }

    peep= [
        new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
        new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
        new Per("Charles", ["Cayenne", "Cleopatra"])
    ]


    $.uLE('peep',

        $.d([  // name has length children
            $.spT('n'), 'has', $.spT('ch().length'),  'children &nbsp;',
            //new
            $.a$('New','A')
        ]),

        $.uLE('ch',
            $.spT(), //child name
            $.spVs( '$root.showDT').A('(child rendered at ',   $.spT('$Dt().getSeconds()'),      ')')
        )
    )

    $.cbC('showDT').a2Lb('Show time:')

    //anonymous vm


    ok({    peep: peep,      showDT: $o()     })
}








TPLIST=function(){$.x()
    Meals = [ { m: "sand", p: 0 }, { m: "lobst", p: 34.95 }, { m: "zebra", p: 290 } ]

    $.h2('Your rsv').A( $.spT('seats().length') )

    $.h3('Cost:').bVs('cost()>0').A( $.spT('cost().toFixed(2)') )

    $.t([
        $.tH([ $.tr(['Pass name','Meal','charge']) ]),
        $.tB().bTp("{n:'rsvTp', foreach: seats}") //?

    ])

    $.bt('Rsv again').b({ $:'A', en:'seats().length < 5' })

    $('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
        $.tr([
            $.td([$.ipV('n')]),

            $.td([
                $.sl().b({o:'Meals', ot:'meal'})
            ]),

            $.td([ $.a$('del', 'rm')  ])
        ])
    )

    seatRsv = function(n) {
        this.n = n
        this.Meals = Meals;
        this.meal = ko.o(Meals[0]);
        this.rm = function() {vm.seats.remove(this) }
        this.fmtPrice = ko.do(function(){
            var price = this.meal().p
            return price ? "$" + price.toFixed(2) : "None";
        }, this)
    }


    vm = {
        seats: ko.oa([ new Rsv("St"), new Rsv("Br") ]),
        A: function() { this.seats.push(new Rsv())} }


    vm.cost = ko.do(function() {var tot = 0;
        for (var i = 0; i < this.seats().length; i++)
            tot += this.seats()[i].meal().price;
        return tot
    }, vm)



    ok(vm)

}

//sort, remove
BTRLST1=function(){$.x('o')

    $.f().b({sb:'A'}).A('Add item:',
        $.ip().b({v:'tA', vU:'afterkeydown'}),
        $.sb('Add').b('en', 'tA().length > 0')
    )

    $.p('Your values:')

    $.sl().mlt().b({ o:'all', so:'sl' })

    $.d([


        $.bt('Rem').b({$:'xSl', en:'sl().length > 0'}),

        $.bt('Srt').b({$:'srt', en:'all().length > 1'})

    ])

    Lst = function () {

        this.tA = $o('')

        this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30] )

        this.sl = $oa(['Hm'])

        this.A = function () {
            if (this.tA()!=''&& this.all.indexOf(this.tA())<0){
                this.all.push(this.tA())
                this.tA('') } }

        this.xSl = function () {
            this.all.removeAll(this.sl())
            this.sl([]) }
        this.srt = function() { this.all.sort() }
    }

    ok(new Lst())
}


BTRLST=function(){$.x('o')

    f= $.fSb('A',[ 'Add:',
        $.ipV('tA'),
        $.sb('Add').bEn('tA().length>0')
    ])

    $.p('Your values:')
    $.sl().mlt().b({
        o:'all',
        so:'sl'
    })

    $.d([

        $.bt('Rem').b({

            $:'xSl',

            en:'sl().length > 0'

        }),


        $.bt('Srt').b({$:'srt', en:'all().length > 1'})

    ])


    Lst = function(){

        this.tA = kO('')

        this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

        this.sl = kA('Hm')

        this.A = function () {
            if (this.tA() &&
                this.all.indexOf(this.tA())<0
            ){

                this.all.push(this.tA())
                this.tA('')}
        }

        this.xSl = function(){

            this.all.removeAll(this.sl())

            this.sl([])

        }


        this.srt = function() { this.all.sort() }
    }

    ok( new Lst() )

}
//add, conditional el





DIRT=function(){$.z('g').fm() //KOMASTERPIECE
    $.cm=  $.Cm=  function(cms,cc){cms.push({comment:cc})}
    $.spT=   function(a){return $.sp().b('text', a)}
    d= $.d('z')//.mar(20)
        .bE('m').A(
        $.h1().C('y','c').A(
            $.spT('message'), $.sp(' '), $.spT('score'),
            s1.A($.h2().A($.ip(400), $.bt('new r'))),
            $.h2().bE('responses').C('r').A(
                s1.A( $.spT('response') ),
                s2.A( $.h4(
                    //$.iP(400),
                    $.bt('new c')) ),
                $.h4().C('b').bE('comments').A(
                    s2.A($.spT('comment'))
                )
            )
        ),
        $.br(),
        $.br()
    )


    ko.b({
        m: ko.oa(messages=[{message:'zi', score:100, responses:[
            {response:'good coder',
                comments:[{comment:'..eh'}]},
            {response:'cool girl'}
        ]},

            {message:'yano', score:3,
                responses:[{response:'is cool guy',
                    comments:[{comment:'hi'}, {comment:'hello'}]},
                    {response:'a'}, {response:'b'}, {response:'fun'}]},
            {message:'is awesome',score:0,responses:[
                {response:'afsdafsd'}]},
            {message:'lame',score:20,responses:[
                {response:'weird',comments:[{comment:'not!!!!1'}]},
                {response:'lamer',comments:[{comment:'fuck ya'}]}]},
            {message:'rocks',score:4,responses:[]}
        ]),

        responses:ko.oa([
            {response:'one'},
            {response:'two'}
        ])
    })




    f=function(){
        vm.p.push({f:'jason',l:'yano'})
    }
}
KOFL=function(){

    //filter the items using the filter text
    vm.filteredItems = ko.c(function() {
        var t= this, fl

        fl = t.filter().toLowerCase()


        if (!fl) {return t.items();

        }

        else {
            return ko.utils.arrayFilter(t.items(),
                function(it) {

                    return ko.utils.stringStartsWith(
                        it.name().toLowerCase(), fl)
                })
        }
    }, vm)
}//???


KOFLM=function(){$.z('x')

    d=    $.dI('hover').A(
        $.a().A(
            $.i('me').bT('matterId')
        )
    )


    d.mouseover(function(){ var d=this
        //Show the div onmouseover.
        $l("!!!")

        $(d).next("#box").gg()
    })


    d.mouseout( function(){function onMouseOut(obj) {

        //d

        //Hide to div onmouseout
        //Todo:none
    }})


    $.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
        $.li().A(d,
            $.dI('box').css('display','none').A(
                $.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
        ),

        $.li().bT('matterTitle'),
        $.li().bT('matterComment')
    )))





}

LIST=function(){$.x('z')

    f=  $.f().A(

        $.sp('add item'),

        $.ip().b({v:'itemToAdd', V:'afterkeydown'}),

        $.sb('add').bE('itemToAdd().length>0')

    )


    f.bSb('addItem')





    $.d().A(f,

        $.d().A(
            $.sp('Your values:'),
            $.sl().h(5).b({
                o:'allItems',
                so:'selectedItems'
            })
        ),



        $.d().A(

            $.bt('remove').b({
                c:'removeSelected',
                e:'selectedItems().length>0'}),

            $.bt('sort').b({
                c:'sortItems',
                e:'allItems().length>1'}))
    )

    ok({ itemToAdd:ko.o(''),
        allItems:ko.oa(['a','b','c']),
        selectedItems:ko.oa(['d']),
        addItem:function(){
            $l('addItem')
            if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                vm.allItems.push(vm.itemToAdd());vm.itemToAdd('')
            }
        },


        removeSelected:function(){
            allItems.removeAll(o.selectedItems())
            selectedItems([])
        },
        sortItems:function(){o.allItems.sort()}
    })

}

