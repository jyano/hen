//bind cb and bind ip to 'enable'
KOEN=function(){$.x()

    $.p().A($.cbC('hasPhone'), 'I have phone' )
    $.p('Your cellphone number').A(
        $.ip().b({ v:'num', en:'hasPhone'}))

    ok({ hasPhone: ko.o(0), num:'' })

}



///*** PERFECT FOR EDITTING A PROFILE IP
KOFC=function(){$.x()

    $.p('Name:').A(

        $.ip().b({   vs:'editing',  f:'editing',
            v:'name'
        }),

        $.d('r').b({  vs:'!editing()',
            t:'name',
            $:'edit'
        })
    )

    $.p('Click the name to edit it; click elsewhere to apply changes')

    function VM(n) {var vm=this
        vm.name = ko.o(n)
        vm.editing = ko.o()
        vm.edit = function() {vm.editing(1) }
    }

    ok(new VM("Bert Bertington"))
}




//bind cb 'checked' to boolean

SPAM=function(){$.x('o','spam')


    $.p('spam? ').A(
        $.cbC('spam')
    )

    ok({   spam: ko.o(1)   })
    $.in(2, function(){   vm.spam(0)   })
}



KOIP=function(){$.z('x')

    $.p('Login name:').A(
        $.ipTi('un') )
    $.p('Pw:').A(
        $.pwTi('pw') )     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>


    $.A(
        'vm: ',
        $.pre().bT(
            'ko.toJSON($root, null, 2)'
        )

    )

    ok({   un: ko.o(''),    pw: ko.o('abc')  })

}




CHERRY=function(){$.x('o')
    OK({

        wants:$o(1),

        flav:  $oa(["cherry","almond"])

    })

    $.p(  $.sp('spam?'),   $.cC('wants')   )

    $.d([  'Preferred flavors of spam:',

        $.d([

            $.p(  $.sp('cherry'),
                $.cC('flav').v('cherry')
            ),

            $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),

            $.p($.sp('Glut'), $.cC('flav').v('glut'))

        ])

    ]).bVs('wants')

    $.in(function(){

        vm.flav.push("glut")
    })

}


// huh?
$.cKO=function(m, b, v){
    var cb=$.cb(),
        p = $.p().A($.sp().A(m),
            cb.bC( b))
    if(v){ cb.v(v)}
    return p

}


