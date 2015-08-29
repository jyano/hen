Gift = function(gifts) {var vm = this

    vm.gifts = ko.oa(gifts)

    vm.addGift = function() {vm.gifts.push({name: "", price: "" }) }

    vm.removeGift = function(gift) { vm.gifts.remove(gift) }

    vm.save = function(form) {
        alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))}

    // To actually transmit to server as a regular form post, write this:
    // ko.utils.postJson($("form")[0], self.gifts)

}




KOGRID=function(){$.z()


    f=$.f().at({action: '/someServerSideHandler'})


    f.A(

        $.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),

        $.t().bVs('gifts().length > 0').A(
            $.tH().A($.tr().A(//tHR
                    $.th().A('Gift name'),
                    $.th().A('Price'))),
            $.tB().bE('gifts').A($.tr().A(  //tBR
                    $.td().A($.ip().K('required').b({v:'name', u:true})),
                    $.td().A($.ip().K('required number')
                        .b({v:'price', u:true})),
                    $.td().A($.a('delete').b$('$root.removeGift'))))),

        $.bt('add gift').b$('addGift'),

        $.sb().bEn('gifts().length > 0')

    ).A()


    ok(new Gift([

        { name: "Tall Hat", price: "39.95"},
        { name: "Long Cloak", price: "120.00"}

    ]))

    // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation

}



//broken
MENU=function(){
    $.z('b').h2('Your seat reservations')

    $.bt('reserve').b$('A')

    AM=[{n:'fries',p:10}, {n:'fish',p:20}, {n:'noodles',p:30}]


    $.t().A($.tHR(['psngr n','m','$$','']),$.tB().bE('seats').A(
            $.tr().A(
                $.td().bT('n'),
                $.td().bT('m().n'),
                $.td().A(
                    $.sl().b({
                        o : '$root.AM',
                        ot : 'm'    //v : 'm',
                    })
                ),
                $.td().bT('m().p')

            )

        )

    )

    ok({
        seats: $oa([
            {n:'Jo', m: ko.o(AM[0])},
            {n:'Bo', m: ko.o(AM[1])} ]),
        A: function(){
            vm.seats.push({n:'hahaha',
                m:ko.o( {n:'noodles', p:30})})}
    })

}

