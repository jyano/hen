TWT=function(){$.x('r','twt')


    OK({

        un : ko.o('@ex'),

        da : ko.o(),

        g:function(){
            vm.da({

                dt: $D(),

                MS: _.m(['a','b'],
                    function(t){return {ms:vm.un()+':'+t}})
            })},

        clr: function(){ vm.da([]) }
        //<- $.bt('Clear tweets').b$(' $parent.clearResults')
    })


    $.fSb('g',[  'un:',
        $.ipV('un'),   $.sb('Get')
    ])


    $.dW('da',[
        $.h3('dt:', $.spT('dt') ),

        $.olE('MS', $.liT('ms')),

        $.bt$('clr','$parent.clr')

    ]).A()

}


//broken
TASKS=function(){$.z().h3('Tasks')

    $.f().bSb('aT').A().A("Add task: ",
        $.ip().bV('nT').ph("What?"),
        $.bt('Add')//.bS('s') // ??
    )

    $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
        $.cb().bC( 'iD' ),
        $.ip().b("value:t, disable:iD"),
        $.bt('Del').bC( '$parent.rmT' )))


    $.sp("You have").A()
    $.B("&nbsp;").bT( "inc().length").A()
    $.sp("inc task(s)").A()
    $.sp("- beer!").bV("inc().length==0").A()

    ko.b({

        itemToAdd:ko.o(''),

        allItems:ko.oa(['a','b','c']),

        selectedItems:ko.oa(['d']),
        addItem:function(){
            if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },

        removeSelected:function(){
            allItems.removeAll(vm.selectedItems())
            selectedItems([])
        },
        sortItems:function(){vm.allItems.sort()}
    })


    vm2={
        ts: ko.oa(),
        nT: ko.o(),
        inc : ko.c(function(){  var vm=this
                return ko.ut.af(
                    vm.ts(), function(t){return !t.iD()
                    })
            }
        ),
        aT: function(){ this.ts.push({t: ko.o( o.nT()), iD: ko.o( ) }); this.nT('') },
        rmT: function(){ o.ts.remove(this) }
    }

    /*
     ko.b(vm2)
     //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
     */
}

