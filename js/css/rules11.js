$El=function(tag){
    if(tag){return document.createElement(tag)}

}
///




$CSS = function $CSS(rusOb){var g=G(arguments),
    rus = '\n\n', sty

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
$CSS.decBlk=function(decs){
    $CSS.decs = function (decs){
        var DECS={}
        _.e(decs,  function(v,k){
            DECS[oO('s', k)] =   N(v)?  String(v)+'px' :  oO(k,v,'R')       // will be dep-ed?? //the BIG OB should handle this??  //  if(o.mar){o.margin = o.margin || o.mar;  delete o.mar }; if(o.bor){o.border = o.border || o.bor; delete o.bor }; if(o.pad){o.padding = o.padding || o.pad; delete o.pad }
        })
        return DECS
    }
   var decBlk =' '
    _.e($CSS.decs(decs), function(v, pop){  decBlk += pop+':'+v+'; '  })
    return '{'+ decBlk+'}'
}

$CSS.rule= function(sel, decs){
    return $CSS.sel(sel)+' '+  $CSS.decBlk(decs )
}

$CSS.sty =  function(rus){var sty=  $El('style'); sty.type = 'text/css';
    if(rus){sty.innerHTML = rus}
    return sty
}











TXRU=function(){$.x('o', 'tx ru')



    ru= $.Rule()


}
noLongerNeeded=function(){

    // a declaration is made up of a property name and a value
// ex: h2 { color: #666; }
    $Ru.dec=function(popN, val){ return popN +':'+ val +';' }
// takes 0+ strings (representing indiv declarations),
// concats them into one big string,
// surrounds it with curly braces,
// the result is a string declarationBlock, and this is returned



    $Ru.decBlk=function(declarations){var g=G(arguments), blk, decs
        decs = g.A? g.f: g
        blk=' '
        _.e(decs, function(dec){ blk += dec + ' ' })
        blk='{'+blk+'}'
        return blk
    }


}
TXCSS=function(){$.x('O')

    $.in(2, function(){$CSS({
        body: { fz:80   },
        '.k':  {C:'tq', c:'b'},
        bt:  {w:500, h:300, C:'z', c:'w' }     })})

    $.bt('this a bt')
    $.d([
        $.ip('date'),  $.p('NO NONSENSE')
    ]).K('k',  400, 250).pad(20)

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
        $.dI('ftr').A('Footer') )

    $l($('head').oh())
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









oldIthink=function(){
    $CSS.styTag=function(a){
        alert('$Ru.styTag')
        return $("<style type='text/css'>").A(a)
    }

    $._ss=function(a,b,c){
        alert('_ss')
        var val
        if(U(c)){return $l( val=a.css(oO('s', b)) )}
        a.css( oO('s',b), oO(b,c,'R') )
        return q
    }

    $.ss = function(q,b,c){alert('ss')
        var g=G(arguments)
        if(U(b)){return $l(_.p( $.ss, q ))}
        return  A(b)? _.r(b,function(m,k){
            return $.sp().A(m,k, $.ss(q,k))},{})
            :O(b)? $p('s',q,b, $._ss)
            : $._ss(q, b, c)}


    $.s=function(){var g=G(arguments),sy
        alert('$.s')
        if(g.O){   g.e( function(ru){$.s(ru).A()} )   }
        else {
            sy= $("<style type='text/css'>")
            sy.A(g.f)
            h= $l(sy.oh())
            //h1= $l('<style>'+ ru+ '</style>').oh()//.A()
            return sy}
    }
    $._ru= function(a,b){
        alert('$._ru')
        var g=G(arguments),sy
        if(g.u){return ''}
        if(O(a)){sy=''; _.e($.qs(a), function(v,k){
            sy += $._ru(k, v)   }); return sy}
        return a +':' + b + '; ' }
    $.ru= function(){

        alert('$.ru')
        var g=G(arguments),str, css,rl
        if(g.O_){   _.e(g.f,function(v,k){  $.ru(k,v) })  }
        else { rl  = $._ru(g.s)  || ''
            str = g.f + '{' + rl +'}'; css=$.s( str  )
            $.hd().A( css )}//'.'+
        return $
    }


};oldIthink()
old=function(){
    $Ru.CSS = function(ob){var g = G(arguments)

        _.e(ob, function (ob1, sel){

            $Ru.rule(sel, ob1)

        })

    }
}