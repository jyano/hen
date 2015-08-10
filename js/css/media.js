
MED=function(){



  /*



   @media screen and (min-width:600px) {        nav { float: left; width: 25%; }        section { margin-left: 25%; }      }

   @media screen and (max-width:599px) {        nav li { display: inline;  }          }




    */




}

CSSold=function(){

    SRU=function(){$.x('y','css')
        _.ru=  function(){var g=G(arguments),ss
            ss = document.styleSheets[0]
            if(ss.insertRule){ ss.insertRule(g.f+ g.s,  ss.cssRules.length||0) }
            else if(ss.addRule){ ss.addRule(g.f, g.s, -1) }
            return ss
        }
        //$.hdS( css = "<link rel='stylesheet' href='/css/masterBlaster.css' type='text/css' media='screen'>" )
        $.d(400,50).K('cssClass').pad(20).A(
            ip= $.ip('date'), $.p('pargraph').A( $.sp('hifds') ) )

        //ip= $.ip('date').datepicker()
        //d1= $.dI('div', 'o', 400, 50).A($.sp('hifds'))
        // $.d().K('abc').A('this is a div')
        // $.d(500, 50).K('dd').A('this is a div')

        style = document.createElement('style')

        style.type = 'text/css'

        rule = '.cssClass {color: #F00;}'

        style.innerHTML = rule

        $('head').A(style)


        rl1 = '{ display:none; }'

        _.ru('.abc', '{background-color: white;color: orange}')
        _.ru('.abc',  '{color: white; background-color: green;}')
        _.ru('.dd',  '{background-color: white;color: orange}')
        $.ru('p', 'color:Orange')

    }
    CSS=function(){$.x()

        $.dK('cssClass', 400, 250).pad(20).A(ip= $.ip('date'),
            $.p('p').A(  $.sp('hifds') )
        ).K('cssClass')

        $Ss('.cssClass'+
            '{'+$Ru.dec('color','blue')
            +$Ru.dec('background-color','red')
            +'}')}; CSS.old=function(){

        CSS=function(){$.x(null, 'adds .cssClass.. see for yourself')
            ru = '.cssClass{color:#F00;}';  ru1 = '{display:none;}'
            $.d(400,50).K('cssClass').pad(20).A(
                ip= $.ip('date'), $.p('pargraph').A($.sp('hifds')))
            style=document.createElement('style');style.type='text/css'
            style.innerHTML=ru
            $('head').A(style)
            $l($.hd().oh())
        }
        CSS=function(){$.x()
            ru = '.cssClass{color:#F00;}'
            $.d(400,50).K('cssClass').pad(20).A(
                ip= $.ip('date'),
                $.p('pargraph').A($.sp('hifds')) )
            style=document.createElement('style'); style.type='text/css'
            style.innerHTML=  ru
            $('head').A( style )
            $l( $.hd().oh() )
        }
        CSS=function(){$.x()
            ru = '.cssClass{color:#F00;}'
            $.d(400,50).K('cssClass').pad(20).A(
                ip= $.ip('date'),
                $.p('pargraph').A($.sp('hifds'))
            )
            style= $El('style')
            style.type='text/css'
            style.innerHTML=  ru
            $.hd(style)
            $l( $.hd().oh() )
        }
        CSS=function(){$.x()


            $.d(400,50).K('cssClass').pad(20).A(
                ip= $.ip('date'),
                $.p('pargraph')
                    .A($.sp('hifds')) )

            sty = $Sty(ru='.cssClass{color:#F00;}')

            $.hd(sty)
            $l( $.hd().oh() )

        }
        CSS=function(){$.x()

            $.dK('cssClass', 400, 250).pad(20).A(
                ip= $.ip('date'),
                $.p('p').A(
                    $.sp('hifds')
                )
            ).K('cssClass')

            $Ss('.cssClass{color:yellow;background-color:green;}')
            $l( $.hd()  )
            $l( $.hd().oh() )
            $l('-')
            $l(  ip   )
            $l(  ip.oh() )

        }
    }

    CSS=function(){  $.x('sBr')

        $.dK('class',
            400, 250).pad(20).A(ip = $.ip('date'),
            $.p('p').A($.sp('hifds')))

        decBlk = $Ru.decBlk(
            $Ru.dec('color', 'blue'),
            $Ru.dec('background-color', 'magenta'))

        $Ss('.class' + decBlk)

        $.in(function () {
            h = $('head')
            $l(h.oh())
            $l(ch = h.children)
            c = h.children()

            l=_.l(c)
            q=$(l)
            $l('!!! -> ' + q.oh() + ' -> ' + q.text()
            )
        })


    }




    CSS=function() {
        $.x('sBr')

        $.dK('class',
            400, 250).pad(20).A(ip = $.ip('date'),
            $.p('p').A($.sp('hifds')))
        decBlk = $Ru.decBlk(
            $Ru.dec('color', 'blue'),
            $Ru.dec('background-color', 'magenta'))
        $Ss('.class' + decBlk)

        $.in(function () {
            h = $('head')
            $l(h.oh())
            $l(ch = h.children)
            c = h.children()

            l=_.l(c)
            q=$(l)
            $l('!!! -> ' + q.oh() + ' -> ' + q.text()
            )
        })
    }
    CSS=function() {$.x('wh')
        $.dK('k',  400, 250).pad(20).A(
            $.ip('date'),
            $.p('p').A($.sp('this should NOT be nonsense, mister j')))

        $Ru._rule=function(sel, decs, dec2){var g=G(arguments)
            if(dec2){decs = g.r}
            else if(!A(decs)){decs=[decs]}
            return sel + this.decBlk.apply(this, decs)
        }

        $Sty(  $Ru._rule(  '.k',
            $Ru.dec('color', 'blue'),
            $Ru.dec('background-color', 'magenta') ) )
    }
    CSS=function(){$.x('ct')

        $.bt('afdsfadsfdfds')

        $.dK('k',  400, 250).pad(20).A(
            $.ip('date'),
            $.p('p').A($.sp('this should NOT be nonsense, mister j')))



        $Ru.rule(
            {sel:'.k', 'c': 'b', 'C': 'tq'},
            {sel:'button', 'c': 'w',  'C': 'z',   w: '30px',  h:'50px'}
        )


    }

}


VIEWPORT=function(){

    // <meta name="viewport" content="initial-scale=1">
    // http://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972
    //http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho

}



$CSS.mx.bpLarge=function(cont){
    return ['@media only screen and (max-width: 400px)', cont
    ]}

$CSS.mx.bpMid=function(cont){
    return ['@media only screen and (max-width: 600px)', cont
    ]}

$CSS.mx.bpSmall=function(cont){
    return ['@media only screen and (max-width: 800px)', cont
    ]}




