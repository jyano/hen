BASIS=function(){$.x('o','basis')
    // http://jsfiddle.net/jakub_g/s5jAB/

    // Both items have flex-basis: 200px defined.

// In 'equilibrium situation' they'll get those widths exactly.




    $CSS({ d:{B: $CSS.bor('v') },  _ct: {  ds: '$', P: 10,  C: 'y'}, _ch:{P:10, M:10, c:'w'},


        _ch1: { $:'8 1 600px', C:'u'  },// If there's more space, the first one grows 5x faster than the second.

        _ch2: { ds:'$', 'flex-wrap':true, $:'1 2 400px', C:'g' } // If there's less space, the second one shrinks 3x faster than the first.


    })



    $.d([
        $.d([$.h3('Child One'),             $.p( 'Lorem ipsum'), $.p('dolor sit amet') ,  $.p('This is a bit longer line')  ]).K('ch ch1'),
       d= $.d(['Two'




        ]).K('ch ch2')
    ]).K('ct')

    _.t(20, function(){
        d.A(
            $.d($r(), 40, 40).K('ch1')
        )
    })


    $CSS()

}
FB=function(){$.x('o', 'flex')


    $CSS({

       _ct : {
           ds:'$',

            //  define  flow dir
            // and
            // if we allow the items to wrap
            //  Remember this is the same as:

           $d:'row',
           $w: 'wrap',
            //      'flex-flow' : 'row wrap',
            // Then we define how is distributed the remaining space
            flJC: 'space-around'
        }

    })


}
FLEX=function(){  $.x('g', 'flex1')

    $CSS({
        _flCt : {

            ds: 'flex', flD:'row', flW: 'wrap',
            flJC: 'space-between'
        },

        _flCt1 : {
            ds: 'flex', flD:'row', flW: 'wrap',
            flJC:  'space-around'

        }})



    $.d('b',400, 500).K('flCt').A(
        $.d('y',40, 150),   $.d('z',200, 50),   $.d('r',40, 150),
        $.d('y',40, 150),   $.d('z',200, 50),   $.d('r',40, 150)
    ).dgb()


    $.d('B',400, 500).K('flCt').A(
        $.d('y',40, 150),   $.d('z',200, 50),   $.d('r',140, 150),
        $.d('y',40, 150),   $.d('z',300, 50),   $.d('r',40,  50)
    ).dgb()




    $.d('w',400, 500).K('flCt1').A(
        $.d('y',40, 150),   $.d('z',1000, 50),   $.d('r',140, 150),
        $.d('y',40, 150),   $.d('z',10, 50),   $.d('r',40,  50)
    ).dgb()

    $.d('p',400, 500).K('flCt1').A(
        $.d('y',40, 150),   $.d('z',300, 50),   $.d('r',140, 150),
        $.d('y',40, 150),   $.d('z',200, 50),   $.d('r',40,  50)
    ).dgb()


}
GRAIL=function(){$.bd().E(); $CSS({


    bd: {  f: '24px Helvetica', C:'a' ,c:'b'  },
    'header, footer': {  ds: 'b',
        M: 4,
        P: 5, nh: 100,
        B: $CSS.bor('r'),
        borR: '7pt',
        C: 'b'
    },





    $main: {nh: 800, M: 0, P: 0,
        ds: '$', flD: 'row'
    },


    '$main > article': {
        M: 4,  P: 5,  B: $CSS.bor('p'),  borR: '7pt',  C:'g',
        _: 2 , $:'3 1 50%' },

    '$main > nav': {
        M: 4, P: 5, B: $CSS.bor(),  borR: '7pt', C:'o',
        _: '-1', $:'1 6 30%'},

    '$main > aside': {
                M: 4,  P: 5,  B: $CSS.bor('g'), borR: '7pt',  C:'x',
                _: '3', $: '1 6 20%' },


    "@media all and (max-width:640px)" : $CSS.rules({
        "#main, #page": {flD: "column"},
        "#main>article, #main>nav, #main>aside": { _:'0' },
        "#main>nav, #main>aside,  header,  footer": {nh: 50, mh: 50}
    })

})



    $.hdr('header').A()

    $.d([
        $.ac('article'),
        $.nv().A('nav'),
        $.as('aside')
    ]).id('main')


    $.ftr().A('footer').A()





    $CSS(); old=function(){
        GRAIL1=function(){$.bd().E()



            $CSS({

                body: {  font: '24px Helvetica', C:'a' ,c:'b'  },
                $main: {  nh: 800,  mar: 0,  pad: 0, ds: 'flex',   'flex-flow': 'row'},
                '$main > article': {  mar: 4,  pad: 5,  bor: '1px solid pink',  borR: '7pt',  C:'g', flex: '3 1 60%',  order: 2  },
                '$main > nav': {mar: 4, pad: 5, bor: '1px solid black',  borR: '7pt', C:'o', flex: '1 6 20%',  order: '1'},
                '$main > aside': {  mar: 4,  pad: 5,  bor: '1px solid green', borR: '7pt',  C:'x', flex: '1 6 20%',  order: '3'  },
                'header, footer': {  ds: 'b', mar: 4,  pad: 5, nh: 100, bor: '1px solid red', borR: '7pt', C: 'b' },


                /* '@media all and (max-width: 640px)':  {

                 '#main, #page': '{flex-direction: column;}',
                 '#main > article, #main > nav, #main > aside':  '{order: 0;}',
                 '#main > nav, #main > aside, header, footer': '{min-height:50px; max-height:50px;}'
                 }

                 */






                /// change below to one string!!!

            })

            $.hd($CSS.sty(

                    "@media all and (max-width:640px)"

                    + "{ "

                    + "#main, #page {flex-direction: column;}"
                    + "#main>article, #main>nav, #main>aside {order: 0;}"
                    + "#main>nav, #main>aside, header, footer {min-height: 50px; max-height: 50px;}"


                    + "}"


                )

            )


            //reduc


//http://dev.w3.org/csswg/css-conditional-3/

            $('<header>header</header> ').A()
            $.d([ $('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
            $('<footer>footer</footer>').A()


            $CSS()


        }
        GRAIL11=function(){$.bd().E()



            $CSS({

                body: {  font: '24px Helvetica', C:'a' ,c:'b'  },
                $main: {  nh: 800,  mar: 0,  pad: 0, ds: 'flex',   'flex-flow': 'row'},
                '$main > article': {  mar: 4,  pad: 5,  bor: '1px solid pink',  borR: '7pt',  C:'g', flex: '3 1 60%',  order: 2  },
                '$main > nav': {mar: 4, pad: 5, bor: '1px solid black',  borR: '7pt', C:'o', flex: '1 6 20%',  order: '1'},
                '$main > aside': {  mar: 4,  pad: 5,  bor: '1px solid green', borR: '7pt',  C:'x', flex: '1 6 20%',  order: '3'  },
                'header, footer': {  ds: 'b', mar: 4,  pad: 5, nh: 100, bor: '1px solid red', borR: '7pt', C: 'b' },


                /* '@media all and (max-width: 640px)':  {

                 '#main, #page': '{flex-direction: column;}',
                 '#main > article, #main > nav, #main > aside':  '{order: 0;}',
                 '#main > nav, #main > aside, header, footer': '{min-height:50px; max-height:50px;}'
                 }

                 */






                /// change below to one string!!!



            })



            $.hd($CSS.sty(
                    "@media all and (max-width:640px)" +

                    $CSS.rules(
                        $CSS.rule("#main, #page",    "{flex-direction: column;}"),
                        $CSS.rule("#main>article, #main>nav, #main>aside" ,  "{order: 0;}"),
                        $CSS.rule("#main>nav, #main>aside, header, footer",  "{min-height: 50px; max-height: 50px;}")
                    )


                )

            )



            //reduc


//http://dev.w3.org/csswg/css-conditional-3/

            $('<header>header</header> ').A()
            $.d([ $('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
            $('<footer>footer</footer>').A()


            $CSS()


        }
        GRAIL111=function(){$.bd().E()



            $CSS({

                body: {  font: '24px Helvetica', C:'a' ,c:'b'  },
                $main: {  nh: 800,  mar: 0,  pad: 0, ds: 'flex',   'flex-flow': 'row'},
                '$main > article': {  mar: 4,  pad: 5,  bor: '1px solid pink',  borR: '7pt',  C:'g', flex: '3 1 60%',  order: 2  },
                '$main > nav': {mar: 4, pad: 5, bor: '1px solid black',  borR: '7pt', C:'o', flex: '1 6 20%',  order: '1'},
                '$main > aside': {  mar: 4,  pad: 5,  bor: '1px solid green', borR: '7pt',  C:'x', flex: '1 6 20%',  order: '3'  },
                'header, footer': {  ds: 'b', mar: 4,  pad: 5, nh: 100, bor: '1px solid red', borR: '7pt', C: 'b' },

                "@media all and (max-width:640px)" :


                    $CSS.rules(
                        $CSS.rule("#main, #page", "{flex-direction: column;}"),
                        $CSS.rule("#main>article, #main>nav, #main>aside" ,  "{order: 0;}"),
                        $CSS.rule("#main>nav, #main>aside, header, footer",  "{min-height: 50px; max-height: 50px;}")
                    )









            })








            //reduc


//http://dev.w3.org/csswg/css-conditional-3/

            $('<header>header</header> ').A()
            $.d([ $('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
            $('<footer>footer</footer>').A()


            $CSS()


        }
        GRAIL1111=function(){$.bd().E()





            $CSS({

                body: {  font: '24px Helvetica', C:'a' ,c:'b'  },
                $main: {  nh: 800,  mar: 0,  pad: 0, ds: 'flex',   'flex-flow': 'row'},
                '$main > article': {  mar: 4,  pad: 5,  bor: '1px solid pink',  borR: '7pt',  C:'g', flex: '3 1 60%',  order: 2  },
                '$main > nav': {mar: 4, pad: 5, bor: '1px solid black',  borR: '7pt', C:'o', flex: '1 6 20%',  order: '1'},
                '$main > aside': {  mar: 4,  pad: 5,  bor: '1px solid green', borR: '7pt',  C:'x', flex: '1 6 20%',  order: '3'  },
                'header, footer': {  ds: 'b', mar: 4,  pad: 5, nh: 100, bor: '1px solid red', borR: '7pt', C: 'b' },

                "@media all and (max-width:640px)" :
                    $CSS.rules({

                        "#main, #page":    "{flex-direction: column;}",
                        "#main>article, #main>nav, #main>aside" : "{order: 0;}",
                        "#main>nav, #main>aside, header, footer": "{min-height: 50px; max-height: 50px;}"
                    })
            })








            //reduc


//http://dev.w3.org/csswg/css-conditional-3/

            $('<header>header</header> ').A()
            $.d([ $('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
            $('<footer>footer</footer>').A()


            $CSS()


        }
    } //http://dev.w3.org/csswg/css-conditional-3/

}



GRAIL=function(){$.bd().E(); $CSS({


    bd: {  f: '24px Helvetica', C:'a' ,c:'b'  },
    'header, footer': {  ds: 'b',
        M: 4,
        P: 5, nh: 100,
        B: ['r'],
        borR: '7pt',
        C: 'b'
    },


    $main: {nh: 800, M: 0, P: 0,
        ds: '$', flD: 'row'
    },


    '$main > article': {
        M: 4,  P: 5,  B: ['p'], rd: '7pt',  C:'g',
        _: 2 , $:'3 1 50%' },

    '$main > nav': {

        M:4, P:5, B:[], rd: '7pt', C:'o', _: '-1',
        $:'1 6 30%'//, mx: {hi:[], fds:['fds','fsd','fsd'] }

    },










    '$main > aside': { M:4,P:5,B:['g'], rd:'7pt',C:'x',_:'3',$:'1 6 20%' },

    "@media all and (max-width:640px)" : $CSS.rules({
        "#main, #page": {flD: "column"},
        "#main>article, #main>nav, #main>aside": { _:'0' },
        "#main>nav, #main>aside,  header,  footer": {nh: 50, mh: 50}
    })

})



    $.hdr('header').A()

    $.d([
        $.ac('article'),
        $.nv().A('nav'),
        $.as('aside')
    ]).id('main')


    $.ftr().A('footer').A()



}


GRAIL=function(){$.bd().E(); $CSS({


    bd: {  f: '24px Helvetica', C:'a' ,c:'b'  },
    'header, footer': {  ds: 'b',
        M: 4,
        P: 5, nh: 100,
        B: ['r'],
        rd: 10,
        C: 'b'
    },

    $main: {nh: 800, M: 0, P: 0,
        ds: '$', flD: 'row'
    },


    '$main > article': {
        M:4,P:5,B:['p'],
        rd: 100,
        C:'g',
        _:2, $:'3 1 50%'
    },


    '$main > nav': {

        M:4, P:5, B:[], rd: 10,
        C:'o',

        _:'-1', $:'1 6 30%'//, mx: {hi:[], fds:['fds','fsd','fsd'] }

    },


    '$main > aside': { M:4,P:5,B:['g'], rd:'7pt',C:'x',_:'3',$:'1 6 20%' },

    "@media all and (max-width:640px)" : $CSS.rules({
        "#main, #page": {flD: "column"},
        "#main>article, #main>nav, #main>aside": { _:'0' },
        "#main>nav, #main>aside,  header,  footer": {nh: 50, mh: 50}
    })

})



    $.hdr('header').A()

    $.d([
        $.ac('article'),
        $.nv().A('nav'),
        $.as('aside')
    ]).id('main')


    $.ftr().A('footer').A()



}


GME=function(){$.x('y','gme'); $CSS({

    'html, body': {w: '100%',h:'100%', M:0, P:0},
    'body.box': {ds: $, flD: 'column'},

    'body > *': {P: '.5em'},
    header: {C:'b'},

    article: {C:'r', $:1},
    footer:  {C:'g'},

    'header.cnt': {'-moz-column-count': 3},
    'header:not(.cnt)': {'-moz-column-width':  100}
})





    $.hdr().A('Click', $.br(), 'to change', $.br(), 'header {column-…}').A()

    $.ac().A('Click', $.br(), 'to', $.br(), 'change', $.br(), 'body {display: …}').A()

    $.ftr().A()





    $("header").$(function(){  $(this).toggleClass("cnt"); logClass();  });
    $("article").$(function(){$.bd().toggleClass("box");  logClass() })

    logClass()

    function logClass(){var logTxt = "Header: "

        if ($("header").hasClass("cnt")) {
            logTxt += "column-count"
        } else {logTxt += "column-width"}

        logTxt += "; Body: ";

        if ($("body").hasClass("box")) {
            logTxt += "flex-box"
        }
        else {logTxt += "block"}

        $("footer").text(logTxt)
    }

}//http://jsfiddle.net/flyingsheep/gmeqm/




//http://jsfiddle.net/3zLRJ/4/    //http://stackoverflow.com/questions/11451638/drag-re-sizable-2-column-layout
//reduc