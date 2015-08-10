
    // -rows must be placed within a .container(-fluid) for proper alignment and padding
// -only columns may be immediate children of rows
// -Columns create gutters (gaps between column content) via padding.
//   That padding is offset in rows for the first and last column via negative margin on .rows


    $.R= $.row=function(n){

        var div= $.d().addClass('row');

        _.e( G(arguments), function(arg){ div.A(arg) } );

        return div
    } //pass in size, and then args(contents) as a list (or as an array)
    $.col = function(){  var args = G(arguments),

        div= $.dK( 'm' + args[0] ),

        iter = A( args[1])?  args[1] : args.r;

        _.e( iter, function(v){ div.A(v) } );

        return div
    }

    $.R= $.row= function(n){
        var d= $.dK('row')
        _.e(arguments,
            function(arg){ d.A(arg) })
        return d}

//pass in size, and then args(contents) as a list (or as an array)

    $.Cl= $.col = function(){var args=G(arguments),

        d= $.dK('col-md-' + args[0]),
        iter = A(args[1])?  args[1] : args.r
        _.e(iter, function(v){d.A(v)})
        return d}
    $.row2=function(a,b){
        return $.row(
            $.col(6, a),
            $.col(6,b)
        )
    }
    $.row3=function(a,b,c){
        return $.row(
            $.col(4,a),
            $.col(4,b),
            $.col(4,c)
        )}
    $.row4=function(a,b,c,d){
        return $.row(
            $.col(3,a),
            $.col(3,b),
            $.col(3,c),
            $.col(3,d))}
    $.row84=function(a,b){return $.row($.col(8,a),$.col(4,b))}
    $.row48=function(a,b){return $.row($.col(4,a), $.col(8,b))}//
    $.row39=function(a,b){return $.row($.col(3,a), $.col(9,b))}//
    $.row210=function(a,b){return $.row($.col(2,a),$.col(10,b))}//
    $.row111=function(a,b){return $.row($.col(1,a),$.col(11,b))}//

//row48([4],[ 8 ]) //row39([3],[ 9 ])

    $.push4=function(a){return $.row48([],a)}
    $.push3=function(a){return $.row39([],a)}
    $.push2=function(a){return $.row210([],a)}
    $.push1=function(a){return $.row111([],a)}
    $.row93=function(a,b){return $.row($.col(9,a),$.col(3,b))}
    $.row363=function(a,b,c){
        return $.row(
            $.col(3,a),
            $.col(6,b),
            $.col(3,c)
        )}
    $.ROW=function(a,b,c,d){

        var g=G(arguments),  z=g.z


        if(z==1){return $.row($.col(12,a))}

        if(z==2){
            return g.p?$.row93(a,b)
                :g.n? $.row39(a,b)
                :$.row2(a,b)
        }


        if(z==3){return g.n?$.row363(a,b,c):$.row3(a,b,c)}

        if(z==4){return $.row4(a,b,c,d)}

    }

    examples()
    function examples() {
        testRows = function () {
            z()

            $.row(
                $.colX(2, $.img('me')),

                $.colX(6, $.img('me')),

                $.colX(4, $.img('me'))
            ).A()

        }
        testRows2 = function () {
            z()
            $.R().A(
                $.dK('col-xs-12 col-sm-6').A($.img('me')),
                $.dK('col-xs-6 col-lg-4').A($.img('me'))
            )

        }
        testRows3 = function () {
            z()
            $.R().A(
                $.dK('col-xs-6 col-sm-4').A($.img('me')),
                $.dK('col-xs-6 col-sm-4').A($.img('guy')).C('o'),
                $.dK('col-xs-6 col-sm-4').A($.img('sun'))
            ).C('b')
        }
        testRows4 = function () {
            z()
            $.R().A(
                $.dK('col-xs-6 col-sm-4').A($.span('me')),
                $.dK('col-xs-6 col-sm-4').A($.span('guy')).C('o'),
                $.dK('col-xs-6 col-sm-4').A($.span('sun'))
            ).C('b').A()
        }
        exampleStackedToHoriz = function () {
            z()


            cont = $.container().A(
                $.h1('Hello World!'),

                $.row(
                    $.sm('red', 6).ipsumP(1, 2),

                    $.sm('blue', 6).ipsumP(4)
                )
            ).A()


        }
        exampleStackedToHorizFluid = function () {
            z()

            $.containerFluid().A(
                $.h1('Hello World!'),

                $.row(
                    $.sm('red', 6).ipsumP(2, 1),
                    $.sm('blue', 6).ipsumP(3)
                )
            ).A()


        }
        example25Percent = function () {
            z()


            $.containerFluid().A(
                $.h1('Hello World!'),

                $.row(
                    $.sm('r', 3).ipsumP(3),
                    $.sm('b', 9).ipsumP(3)
                )
            ).A()

        }
        exampleMedium = function () {
            z()

            //on xs, u get one column only
            //on small devices, u get two columns ( 25% / 75% )
            //but on medium, u get a 50/50 split


            $.containerFluid().A(
                $.h1('Hello World!'),

                $.row(
                    $.div('r').sm(3).md(6).ipsumP(3),
                    $.div('b').sm(9).md(6).ipsumP(4)
                )
            ).A()


        }
        exampleLarge = function () {
            z()

            $.containerFluid().A(
                $.h1('Hello World!'),

                $.row(
                    $.div('y').K("col-sm-3 col-md-6 col-lg-4").ipsumP(2, 2),
                    $.div('y').K("col-sm-9 col-md-6 col-lg-8").ipsumP(1, 1, 1, 1)
                )
            ).A()

        }
        exampleThreeEqualColumns = function () {
            z()
            //The following example shows how to get a three equal-width columns
            // starting at tablets and scaling to large desktops. On mobile phones, the columns will automatically stack:

            cont = $.container().A()
            cont.A(
                $.row(
                    $.div('red').K("col-sm-4").A('.col-sm-4').ipsumP(1),

                    $.div('blue').K("col-sm-4").A('.col-sm-4').ipsumP(2, 2),
                    $.div('yellow').K("col-sm-4").A('.col-sm-4').ipsumP(3, 3, 3)
                )
            )

        }
        exampleThreeUnequalColumns = function () {
            z()
            // The following example shows how to get a three various-width columns
            // starting at tablets and scaling to large desktops:

            cont = $.container().A()

            cont.A(
                $.row(
                    $.div('red').K("col-sm-3").A('.col-sm-3').ipsumP(1),

                    $.div('blue').K("col-sm-6").A('.col-sm-6').ipsumP(2, 2),
                    $.div('yellow').K("col-sm-3").A('.col-sm-3').ipsumP(3, 3, 3)
                )
            )
        }
        exampleTwoUnequalColumns = function () {
            z()
            cont = $.container().A()
            cont.A(
                // The following example shows how to get two various-width columns starting at tablets and scaling to large desktops:

                $.row(
                    $.div('r').K('col-sm-4').A('.col-sm-4').ipsumP(10),
                    $.div('y').K('col-sm-8').A('.col-sm-8').ipsumP(20)
                )
            )
        }
        exampleTwoColumnsWithTwoNestedColumns = function () {
            z()
            //The following example shows how to get two columns starting at tablets
            // and scaling to large desktops, with another two columns (equal widths) within the larger column (at mobile phones, these columns and their nested columns will stack):

            cont = $.container().A()

            cont.A(
                $.row(
                    $.div('a').K("col-sm-8").A(
                        $.span('.col-sm-8'),

                        $.row(
                            $.div('x').K("col-sm-6").A('.col-sm-6').ipsumP(5),
                            $.div('z').K("col-sm-6").A('.col-sm-6').ipsumP(5)
                        )
                    ),

                    $.div('b').K("col-sm-4").A('.col-sm-4').ipsumP(5)
                )
            )
        }
        exampleClearFloats = function () {
            z()
            //(with the .clearfix class) at specific breakpoints to prevent strange wrapping with uneven content:

            cont = $.container().A()
            cont.A(
                $.row(
                    $.div('g').K(' col-xs-6 col-sm-3').A(
                        $.span('Column 1'),
                        $.br(),
                        $.span('Resize the browser window to see the effect.')
                    ),

                    $.div('u').K("col-xs-6 col-sm-3").A($.span('Column 2')),
                    //$.span('<!-- Add clearfix for only the required viewport -->'),
                    $.div('o').K("clearfix visible-xs"),
                    $.div('y').K("col-xs-6 col-sm-3").A($.span('Column 3')),
                    $.div('b').K("col-xs-6 col-sm-3").A($.span('Column 4'))
                )
            )
        }
        exampleOffsettingColumns = function () {
            z()
            //Move columns to the right using .col-md-offset-* classes. These classes increase the left margin of a column by * columns:

            cont = $.container().A()
            cont.A(
                $.row(
                    $.div('r').K('col-sm-5 col-md-6').A('col-sm-5 col-md-6').ipsumP(4),

                    $.div('b').K('col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0').A(
                        'col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0'
                    ).ipsumP(4)
                )
            )
        }
        examplePushAndPull = function () {
            z()
            //- Change Column Ordering
            //Change the order of the grid columns with .col-md-push-* and .col-md-pull-* classes:
            cont = $.container().A()

            cont.A(
                $.row(
                    $.div('r').K("col-sm-4 col-sm-push-8").ipsumP(2, 2, 2),
                    $.div('p').K("col-sm-8 col-sm-pull-4").ipsumP(22)
                )
            )
        }

    }