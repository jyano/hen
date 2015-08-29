$El=function(tag){
    if(tag){return document.createElement(tag)}

}
///
$CSS = function $CSS(rusOb){var g=G(arguments), rus = '\n\n', sty

    if(g.u){return  $l( $('style').oh() )}
    _.e(rusOb, function (decs, sel){
        rus +=  $CSS.rule(sel, decs) + '\n'
    })
    rus += '\n'

    $.hd( $CSS.sty( rus  ) )

    return rus
}



$CSS.sel = function(sel){
    sel =  _.$Id(sel)
    if(sel == 'bd'){sel = 'body'}
    if(sel == 'bt'){sel = 'button'}
    if(sel == 'sc'){sel = 'section'}
    if(sel == 'nv'){sel = 'nav'}
    if(sel == 'd'){sel = 'div'}
    if(sel == 'i'){sel = 'img'}
    if(sel == 'ip'){sel = 'input'}
    return sel
}
$CSS.blk=function(cont){
  return  '{'+ cont +'}'
}


$CSS.decBlk=function(decs){

    //for @media
    if(S(decs)){return decs}

   var decBlk =' '
    _.e($CSS.decs(decs), function(v, pop){  decBlk += pop+':'+v+'; '  })
    return '{'+ decBlk+'}'
}
$CSS.decs = function (decs){
    var DECS={}
    _.e(decs,  function(v,k){

        DECS[oO('s', k)] =  A(v)? $CSS.fn[k].apply(null, v):
            N(v)?  String(v)+'px' :
                oO(k,v,'R')

                // will be dep-ed?? //the BIG OB should handle this??  //  if(o.mar){o.margin = o.margin || o.mar;  delete o.mar }; if(o.bor){o.border = o.border || o.bor; delete o.bor }; if(o.pad){o.padding = o.padding || o.pad; delete o.pad }

    })


    return DECS

}





$CSS.rule= function(sel, decs){
    return $CSS.sel(sel)+' '+  $CSS.decBlk(decs )}
$CSS.rules1=function(ob){var g=G(arguments), rus,str= ''

    if(g.A){ g=g.f }


    else if(g.O){
        _.e(ob, function(v, k){
            if(A(v)){ob[k] =    $CSS.blk(v[0]+':'+v[1]+';')        }
            else if(O(v)){
                _.e(v, function(v,k){ str += k + ':'  +v    +'; ' })
                ob[k] = $CSS.blk(str)}
        })

        return $CSS.rules( _.m(ob, function(v,k){  return $CSS.rule(k, v)  })  )
    }




    rus=''

    _.e(g, function(ru){

        rus += ru

    })

    return $CSS.blk(rus)
}
$CSS.rules11=function(ob){var g=G(arguments), rus,str= ''

    if(g.A){ g=g.f }


    if(g.O){

        _.e(ob, function(v, k){

            if(A(v)){ob[k] = $CSS.blk(v[0]+':'+v[1]+';')}

            else if(O(v)){_.e(v, function(v,k){ str += k + ':'  +v    +'; ' });
                ob[k] = $CSS.blk(str)}
        })

        rus= $CSS.rules( _.m(ob, function(v,k){return $CSS.rule(k, v)}))
    }

    else {
        rus=''
        _.e(g, function(ru){ rus += ru })
        rus= $CSS.blk(rus)
    }

    return rus
}
$CSS.rules=function(ob){var g=G(arguments), rus='',str= '',

    ruls

    g=g.A? g=g.f : g.u?{} : g

    ruls = g.S_? g :
        _.m(ob, function(v,k){

            if(A(v)){v = $CSS.blk(v[0]+':'+v[1]+';')}

            else if(O(v)){
                v=$CSS.decs(v)
                _.e(v, function(v,k){ str += k + ':'  +v    +'; ' });v = $CSS.blk(str) }

            return $CSS.rule(k, v)
        })

    _.e(ruls, function(ru){ rus += ru })
    rus= $CSS.blk(rus)
    return rus
}

$CSS.fn=function(){}



$CSS.fn.B = $CSS.bor= function(c){
    var  col = oO('c', c|| 'z')
    return '8px solid ' + col
}


$CSS.mx=function(){

}








$CSS.sty =  function(rus){var sty=  $El('style'); sty.type = 'text/css';
    if(rus){sty.innerHTML = rus}
    return sty
}




TXCSS=function(){$.x('O')

    $.in(2, function(){$CSS({
        body: { fz:80   },
        '.k':  {C:'tq', c:'b'},
        bt:  {w:500, h:300, C:'z', c:'w' ,mar:200 }

    })


       s= $CSS()
    })

    $.d([


        $.bt('this a bt'),


        $.d([

            $.ip('date'),
            $.p('NO NONSENSE')

        ]).K('k',  400, 250).pad(20)


    ]).C('u')





}
CSSCODE=function(){$.h({

    '$top h1':{pad:0,mar:0},
    $ct: { C:'b', c:'r', w: '90%', mar: '10px auto', bor: '1px solid gray', lh: '130%'},
    $top : {pad:8, C:'g',bB: '1px solid gray'},
    $ftr : { c: 'b',C:'r', cl: 'both', mar:0, pad:8,  bT: '1px solid gray' },
    $lnav : {fl:'l',w:160,mar:0,pad:8},
    $cont : {mL:200, bL:  '1px solid gray', pad: 16, Mw: 500 },
    '$lnav p' : {mar:'0 0 8px 0'},
    '$cont h2': {mar:'0 0 8px 0'} })

    $.dI('ct').A(
        $.dI('top').A( $.h1('hdr') ),
        $.dI('lnav').A($.p(ips1)),
        $.dI('cont').A($.h2('subhead'), $.p(ips2),  $.p(ips3)  ),
        $.dI('ftr').A('Footer')
    )

    $CSS()
}
SIDEBR=function(){$.h({
    _clFx: {'*zoom': 1},
    '_clFx:before, _clFx:after': {ds: 'table', content:'', lh: 0},
    '_clfx:after': {clear:'both'},
    _sbWr: {w: 150, fl: 'l'},
    _sb: {background: 'b', c: 'r', pad: 10},
    _contWr: {w:'100%', fl:'l', mR:-150},
    _cont: {C:'b', pad:10}
})
    $.d([
        $.d([$.d([$.ul([$.li('sb')])]).K('sb')]).K('sbWr'),
        $.d([$.d([$.p('Cont')]).K('cont')]).K("contWr")
    ]).K('ct clFx')
    //http://jsfiddle.net/posco2k8/c55w7/

    $CSS()
}
TABL=function(){$.x().h1('table')



    $CSS({  'table, th, td': {bor: '1px solid black' } })


    $.t().A(
        $.cg().A(
            $.cl().at('span','2').C('r'),
            $.cl().C('y') ),
        $.tr().A($.th('iSBN'), $.th('tt'), $.th('$')),
        $.tr().A($.td('3476896'), $.td('My first HTM'), $.td('$53')),
        $.tr().A($.td('43#@!~~~96'), $.td('My first CSS'), $.td('$60')) )

    $l($('body').oh())
    $l($('head').oh())

    $CSS()


    /* res:
     <body style="background-color: black;">
     <h1>table</h1><table>
     <colgroup><col span="2" style="background-color: red;">
     <col style="background-color: yellow;"></colgroup>
     <tr><th>iSBN</th><th>tt</th><th>$</th></tr><tr><td>3476896</td>
     <td>My first HTM</td><td>$53</td></tr>
     <tr><td>43#@!~~~96</td><td>My first CSS</td><td>$60</td></tr></table>
     </body>
     */

}





