DPB=function(){$.x('b', 'dpb')

    $CSS({
        $dgb: {C:'r', w:100, h:100},
        $dpb: {
            p:'a',
            C:'o',c:'b',
            l:250, t:0, w:400, h:400,
            pad: 10
        }})


    dp = $.d(['Drop here']).id('dpb')
    dg = $.d(['Drag me']).id('dgb')
    $("#dgb").dgb()
    $("#dpb").dpb({
        drop:function(){dp.C($r()).A(dg.XY(0,0))}})
}
UIAN=function(){$.x('x')

    $CSS({
        _toggler: {w:500, h:200, p:'r'},
        $button: {pad:'.5em 1em', 'text-decoration': 'none' },
        $ef: {w:240,h:135,pad:'0.4em', p:'r'},
        '$ef h3': {mar:0,pad:'0.4em','text-align': 'center' },
        '_ui-efs-transfer':{bor:'2px dotted gray'}
    })

    $.d([
        $.d([
            $.h3('Effect').K('ui-widget-header ui-corner-all'),
            $.p('afsdfsdfsa fasdsafdas fdsdfa')
        ]).id('ef').K("ui-widget-content ui-corner-all")

    ]).K('toggler')



    sl = $.sl().n('efs').id('efTypes')
    _.e([  'efs', 'blind','bounce',  'clip', 'drop', 'explode', 'fade', 'fold',
            'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide','transfer'],
        function(a){sl.A($.op(a))})



    $.bt('Run Effect', runEf).id("button" ).K("ui-state-default ui-corner-all")


    function runEf(){$l('runEf')
        var selEf = $( "#efTypes" ).val()
        op =  ( selEf === "scale" ) ?     { percent: 0 } :
            ( selEf === "transfer" )?     { to: "#button", className: "ui-efs-transfer" } :
                ( selEf === "size" )?  { to: { width: 200, height: 60 } }  :{}
        $( "#ef" ).effect( selEf, op, 500, cb )
        function cb() {$.in(function() {$("#ef").removeAttr("style").hide().fadeIn()})}
        $( "#button" ).$(function() {     runEf();     return false     })
    }



}
UISLMENU=function(){$.x()

    $CSS({fieldset: {bor: 0}, label :{display: 'block', mar:'30px 0 0 0'}, select :{w: 200}, _overflow: {h:200}})

    $.d([

        $.f().at('action','#').A( $('<fieldset>').A(
            $.lb('select a speed').for('speed'),
            $.sl().id('speed').n('speed').A(
                $.op('slower'), $.op('slow'),
                $.op('medium').at('selected','selected'),
                $.op('fast'),   $.op('faster')),
            $.lb('Select a file').for('files'),

            $.sl().n('files').id('files').A(
                $.og("Scripts").A(
                    $.op('jquery','jquery'),
                    $.op('ui.juqery.jus','jqueryui')),
                $.og("Other files").A(
                    $.op('some unknown file', 'somefile'),
                    $.op('Some other file w long option text', 'someotherfile'))),

            $.lb('Select a number').for('number'),

            $.sl().n('number').id('number').A(

                $.op('1'),   $.op('2').at('selected',"selected"),
                $.op('3'),  $.op('4'),  $.op('5'),   $.op('6'), $.op('7'),
                $.op('8'),   $.op('9'), $.op('10'),
                $.op('11'), $.op('12'),  $.op('13'),  $.op('14'),
                $.op('15'), $.op('16'),  $.op('17'),  $.op('18'),
                $.op('19')

            )))]).K('demo')



    $("#speed").selectmenu()
    $("#files").selectmenu()
    $("#number").selectmenu().selectmenu("menuWidget").K("overflow")

}

AUTOCP=function(){  $.x('x', 'autocp')

    availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
        "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
        "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]



    $.d([

        $.lb('Tags:').for('tags'), $.ip().id('tags')

    ]).K('ui-widget')


    $(function(){$("#tags").autocomplete({source: availableTags })})


}
////// works above, not below /////



HLFDL=function(){$.x('b', 'hlfdl')


    $.d(['z1']).K('error')
    $.d(['z2']).K('error')
    $.d(['hl1']).K('highlight')
    $.d(['hl2']).K('highlight')

    //   http://jsfiddle.net/774wH/


    function errorHighlight(e, type, icon) {
        if (!icon) {
            if (type === 'highlight') {
                icon = 'ui-icon-info';
            } else {
                icon = 'ui-icon-alert';
            }
        }
        return e.each(function () {
            $(this).addClass('ui-widget');
            var h = '<div class="ui-state-' + type + ' ui-corner-all" style="padding:0 .7em;">';
            h += '<p>';
            h += '<span class="ui-icon ' + icon + '" style="float:left;margin-right: .3em;"></span>';
            h += $(this).text();
            h += '</p>';
            h += '</div>';

            $(this).html(h);
        });
    }

//error dialog
    (function ($) {
        $.fn.error = function () {
            errorHighlight(this, 'error');
        };
    })(jQuery);

//highlight (alert) dialog
    (function ($) {
        $.fn.highlight = function () {
            errorHighlight(this, 'highlight');
        };
    })(jQuery);

    $('.error').error()
    $('.highlight').highlight()

}




DROP=function(){

    $CSS({   $dgb: {w: 100, h:50, pad: '0.5em', fl:'l',
        mar:'22px 5px 10px 0'},
        $dpb: {w:130, h:90, pad:'0.5em' , mar:10, fl:'l'},
        div: {w:400, h:300, C:'r',c:'y'} ,


        $dgb2 :{w:100, h:50,pad:'0.5em',mar:'0px 5px 10px 0'},

        '#dpb2,#dpb3,#dpb4,#dpb5': {w:12,h:90,pad:'0.5em',fl:'l',mar:10}

    })

    $.d().id('dgb').K('ui-widget-content').A($.p('Drag me'))
    $.d().id('dpb').K('ui-widget-header').A($.p('here'))
    $("#dgb").dgb()
    $("#dpb").dpb()








    Dpb(2,'Drag me to my target','ui-widget-content')

    Dpb(2,'here');
    Dpb(3,"dsbld !drop");Dpb(4,'tol toch');

    Dpb(5,'tol fit')


    $("#dgb2").dgb()
    $("#dpb2").dpb({drop: function( ev, ui ) {$(this).K("ui-state-highlight").find("p").html("Dpd")}})
    $( "#dpb3" ).dpb({disabled:"true", drop: function(ev,ui){$(this)
        .K("ui-state-highlight").find("p").html("Dpd")}})
    $( "#dpb4" ).dpb({tolerance: 'touch', drop: function(ev, ui){
        $(this).K("ui-state-highlight").find("p").html("Dpd w tch")}})
    $( "#dpb5" ).dpb({tolerance: 'fit', drop: function( ev, ui ) {
        $( this ).K( "ui-state-highlight" )
            .find("p").html("Dpd whn fulfit" )}})



    function Dpb (id,pT,k){k=k||"ui-widget-header"

        return $.d().id('dpb'+id).K(k).A($.p(pT))
    }

}





