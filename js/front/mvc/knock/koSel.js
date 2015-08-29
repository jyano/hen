SLOP=function(){$.z()


    ok({
        cunts : $oa('Fra','Ger','Spa'),
        selCunts : $oa('Ger')
    })




    $.p('where go?:').A(
        $.sl().b({
            o:'cunts',   so: 'selCunts'
        }).sz(5).mlt() )

    $.in(function(){
        vm.selCunts.push('Fra')
    }, '*')


    // 1st only Ger is selected, then later Fra too


}




//bind 'option'
KOSL=function(n,v){$.x('o').h1('dests')

    $.slO('cunts')

    ok('cunts',
        ko.oa('Fran', 'Ger', 'Spa'))

    $.in(2,function(){   vm.cunts.push('Chi')},
        '*'
    )
}


//broken select and inputs
KOC=function(){$.z()

    $.ip('r').at({
        name:'choices',
        value:'summary'
    }).bC('selectedView');
    $.sp('summary').A()

    $.ip('r').at({name:'choices',value:'details'}).bC('selectedView'); $.sp('details').A(); $.hr().A()

    $.d().bT("{name: templateToUse, " + "foreach: articles }")

    $.scrp("summary").A().A($.d().bT('title')),
        $.scrp('details').A(
            $.d([$.h2().bT('title'), $.p().bT('content'),
                $.bt('edit').b$('$parent.selectedArticle') ]) )

    $.scrp('edit').A().A(
        $.d([$.ip().bV('title'), $.br(), $.ip().bV('content') ])
    )
    ok({
        articles: [
            {id: 1,title: "Article One",content: "Content for article one."},
            {id: 2,title: "Article Two",content: "Content for article two."},
            {id: 3,title: "Article Three",content: "Content for article three."}

        ],
        selectedView: ko.o("summary"),
        selectedArticle: ko.o(),
        templateToUse:function(i){
            return i===vm.selectedArticle()? 'edit' :vm.selectedView()}

    })
}





