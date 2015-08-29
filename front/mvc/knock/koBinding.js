ko.bH=  ko.bindingHandlers
ko.bH.randomOrder = {
    init: function(el, vA) { var ch = ko.vE.firstChild(el),  CH = []
        while(ch){ CH.push(ch); ch = ko.vE.nextSibling(ch) }
        ko.vE.emptyNode(el)
        while(CH.length) {ko.vE.prepend(el, CH.splice(R(CH), 1)[0])}
    }

    /*
     init: function(el, valAcc) {
     var childElems = []
     while(el.firstChild)
     childElems.push(el.removeChild(el.firstChild))
     while(childElems.length) {
     var randomIndex = M.fl(M.rn() * childElems.length),
     chosenChild = childElems.splice(randomIndex, 1);
     el.appendChild(chosenChild[0]);
     }
     }
     */
}

ko.bH.fadeVisible = {
    init: function(el, vA) {// 1st set el vs pop rel to val
       $(el).toggle(ko.unwrap(vA()))},
    update: function(el, vA) {//on change, slowly fade el in/out
         ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()}
}

ko.bH.hasFocus = {
    init: function(el, vA) {
        $(el).focus(function(){vA()(1)})
        $(el).blur(function(){vA()(0) }) },

    update: function(el, vA) {
        ko.uw(vA())? el.focus() : el.blur()
    }

}

$bH=function(b,o){
    if(F(o.u)){o.update= o.u}
    if(F(o)){o={update:o}}
    ko.bH[b]=o
    $.fn[b]=function(a){
        this.b(b, a)
    }
}

$bH('slV', function(el, vA) {
   var isChecked = ko.uw( vA() )
    isChecked ? $(el).slD(1800):
        $(el).slU(2000)
})




CHL=function(){$.x('o');

    $.h1('shown!').slV()

    $.cC()

    ok()
}



//working!!!
FCB=function(){_$({C:'u', t:  'read&write els “focusedness”  by binding it to  obserb',
    vm:{ editingName: $o()  },
    A:[
        $.ip().b("hasFocus: editingName"),
        $.h1('editing..').bVs('editingName'),
        $.bt('Edit').b( "enable: !editingName(), click:function() { editingName(true) }") ]
})}




/////


initialData = [
    { name: "Well-Travelled Kitten", sales: 352, price: 75.95 },
    { name: "Speedy Coyote", sales: 89, price: 190.00 },
    { name: "Furious Lizard", sales: 152, price: 25.00 },
    { name: "Indifferent Monkey", sales: 1, price: 99.95 },
    { name: "Brooding Dragon", sales: 0, price: 6350 },
    { name: "Ingenious Tadpole", sales: 39450, price: 0.35 },
    { name: "Optimistic Snail", sales: 420, price: 1.50 }
]

GRX=function(){$.x('x', 'grx')

    /*
     $CSS({


     body { font-family: arial; font-size: 14px; }
     .liveExample { padding: 1em; background-color: #EEEEDD; border: 1px solid #CCC; max-width: 655px; }
     .liveExample input { font-family: Arial; }
     .liveExample b { font-weight: bold; }
     .liveExample p { margin-top: 0.9em; margin-bottom: 0.9em; }
     .liveExample select[multiple] { width: 100%; height: 8em; }
     .liveExample h2 { margin-top: 0.4em; }

     .ko-grid { margin-bottom: 1em; width: 25em; border: 1px solid silver; background-color:White; }
     .ko-grid th { text-align:left; background-color: Black; color:White; }
     .ko-grid td, th { padding: 0.4em; }
     .ko-grid tr:nth-child(odd) { background-color: #DDD; }
     .ko-grid-pageLinks { margin-bottom: 1em; }
     .ko-grid-pageLinks a { padding: 0.5em; }
     .ko-grid-pageLinks a.selected { background-color: Black; color: White; }
     .liveExample { height:20em; overflow:auto }
     //Mobile Safari reflows pages slowly, so fix the height to avoid the need for reflows

     li { list-style-type: disc; margin-left: 20px; }


     })

     */



    $.d().at({'data-bind':'simpleGrid: gridViewModel' })
    $.bt('add item').at({ 'data-bind':'click: addItem'  })
    $.bt('sort by name').at({  'data-bind':'click: sortByName'  })
    $.bt('   Jump to first page').at({
        'data-bind':'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'})





    PagedGridModel = function(items) {

        this.items = ko.observableArray(items)

        this.addItem = function() { this.items.push({
            name: "New item", sales: 0, price: 100 })
        }


        this.sortByName = function() {
            this.items.sort(function(a, b) {
                return a.name < b.name ? -1 : 1})
        }

        this.jumpToFirstPage = function() {
            this.gridViewModel.currentPageIndex(0) }

        this.gridViewModel = new ko.simpleGrid.viewModel({
            data: this.items,
            columns: [
                { headerText: "Item Name", rowText: "name" },
                { headerText: "Sales Count", rowText: "sales" },
                { headerText: "Price", rowText: function (item) {
                    return "$" + item.price.toFixed(2) } }
            ],

            pageSize: 4  })
    }


    ok(
        new PagedGridModel(initialData)
    )

}
GRX=function(){$.x('x', 'grx1')


    $.d([



        $.d().at({'data-bind':'simpleGrid: gridViewModel' }),
        $.bt('add item').at({ 'data-bind':'click: addItem'  }),
        $.bt('sort by name').at({  'data-bind':'click: sortByName'  }),
        $.bt('   Jump to first page').at({

            'data-bind':'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'

        })



    ]).K('liveExample')



}

PLANS=[

    { name: "Mercury", type: "rock"},
    { name: "Venus", type: "rock"},
    { name: "Earth", type: "rock"},
    { name: "Mars", type: "rock"},
    { name: "Jupiter", type: "gasgiant"},
    { name: "Saturn", type: "gasgiant"},
    { name: "Uranus", type: "gasgiant"},
    { name: "Neptune", type: "gasgiant"}
]

Planets  = function() {
    this.planets = $oa(PLANS)
    this.typeToShow = $o("all");
    this.displayAdvancedOptions =$o(false);
    this.addPlanet = function(type) {this.planets.push({name: "New planet", type: type})}
    this.planetsToShow = ko.pc(function() {// Represents a filtered list of planets
        // i.e., only those matching the "typeToShow" condition
        var desiredType = this.typeToShow()
        if (desiredType == "all") return this.planets()
        return ko.utils.arrayFilter(this.planets(), function(planet) { return planet.type == desiredType });
    }, this);

    // Animation callbacks for the planets list
    this.showPlanetElement = function(el) {if (el.nodeType === 1) { $(el).hide().slideDown() } }

    this.hidePlanetElement = function(el) {if (el.nodeType === 1) {$(el).slideUp(function() { $(el).rm() }) } }
}


PLAN=function(){$.x('g', 'Plan')


    $.p().A(
        $.lb().A(

            $.cC('displayAdvancedOptions'),
            'Display advanced options'
        )
    )

    $.p().A(
        'Show:',
        $.lb([$.ip()]),
        $.lb([$.ip()]),
        $.lb([$.ip()])
    )


    /*
     <p data-bind='fadeVisible: displayAdvancedOptions'>
     Show:
     <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
     <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
     <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
     </p>*/


    $.d([$.d([ $.d()]) ])

    /*

     <div data-bind='template: { foreach: planetsToShow,
         beforeRemove: hidePlanetElement,
         afterAdd: showPlanetElement }'>
                     <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
      </div>

     */



$.p().A(
     $.bt('add rocky plan').b( 'click: addPlanet.bind($data, "rock")'),

     $.bt('add gas giant').b('click: addPlanet.bind($data, "gasgiant")')

     ).b('fadeVisible: displayAdvancedOptions')






    // Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
    // Could be stored in a separate utility library
    ok(new Planets())
}




VIRT=function(){_$({C:'p',



    A:[
        $.d().b({
            randomOrder:true
        }),
        $.d('First'),
    $.d('Second'),
    $.d('Third'),
    $.ul().bE('mDateTime').A( $.li().A( $.ul() ) ),
    $.uE("$root.matter.index.type()[$data]",[$.li().A()])]

})}