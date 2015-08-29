$.fG1= function(a){
    alert('$.fG1!')
//"<div class="form-group"></div>"
    return _a($.dK('form-group'),  G(arguments))
}
modl=function(){

    $.mF= $.modalFooter=function(){var d= $.dK('modal-footer')
        _.e( arguments, function(g){d.A(g)})
        return d}
    $.mB= $.modalBody =   function(){
        var d = $.dK('modal-body')
        _.e( arguments, function(g){d.A(g)})
        return d}
    $.mH= $.modalHeader =   function(){
        var d = $.dK('modal-header')
        _.e( arguments, function(g){d.A(g)})
        return d}
    $.mC= $.modalContent = function(){
        var d= $.dK('modal-content')
        _.e(arguments, function(g){ d.A(g)})

        return d}
    $.mD= $.modalDialog=function(){
        var d= $.dK('modal-dialog')
        _.e(arguments,function(g){d.A(g)});
        return d}
    $.mF= $.modalFade  = function(){
        var d= $.dK('modal fade')
        _.e(arguments, function(g){d.A(g)});
        return d}
    $.m= $.modal=function(a,b, contents){

        var footer= $.modalFooter(

            $.bt('close').attr({  type:'submit',  'data-dismiss':'modal'  })

        )

        if(contents){ footer.A(contents) }

        return $.modalForm(
            $.modalDialog(
                $.modalContent(
                    $.modalHeader(
                        $.bt('ooo').K('close')
                            .attr({'data-dismiss':'modal'}),
                        $.h4(a).K('modal-title')   ),
                    $.modalBody(b),
                    footer
                ))
        )}

};modl()


$.Ct = $.dCt= $.dC=  $.container =function(){

    $l('in $.dC')

    return $.dK('container')
}//fixed width

$.dCF= $.containerFluid =function(){

    return $.dK('container-fluid')

}//full width
$.gl=  function(){var g=G(arguments),str,sp

    sp= $.sp().K('glyphicon').K('glyphicon-'+oO('gl',g[0]))
    if(O(g[1])){sp.A(g[1])}
    if(S(g[1])){sp.A(g[1]) }

    if(g.n){
        sp.pp(
            $.sp().T('-')
        )
    }
    return sp
    //not used
    function gl(glyph, a){return $.sp(a).K("glyphicon glyphicon-" + glyph)}
}
$.boot = function(){z();

    var r = $.R()
    _.e(arguments, function(g){r.A(g) })
    return  ct = $.Ct().A(r)
}
$.W= $.well = function(){
    var d = $.dK('well')

    _.e(arguments, function(arg){
        d.A(arg)
    })

    return d
}
$.dH= $.headerDiv=function(){
    var div= $.dK('header')
        .K('text-center').id('header')
        .css('margin-bottom-width', 40).C('y')
    return div
}
$.Jb=$.J= $.jumbo =  function( ){

    var d = $.dK('jumbotron').K('text-center').id('jumbo')

    _.e(arguments, function(g){
        if(S(g)){g = $.h1(g)}
        d.A( g )
    })
    return d}
$.cp= $.caption = function(cap){return $.dK("caption").A($.h4(cap))}
nav=function(){

    $.dropDown=function(a,f){   var l = $('<a>').id(a).A(a);
        if(F(f)){  l.click(f)  } else {  l.href( f|| '#' )}
        return  l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' })}
    $.active=function(a,f){   var l = $('<a>').id(a).A(a);
        if(F(f)){  l.$(f)  } else {  l.href( f|| '#' )}
        return l.K('active')
    }


    $.sNR= $.nSR=   function(){
        return $.f().K("navbar-form navbar-right").A(
            $.dK('form-group').A($('<input>').K('form-control').attr('placeholder','search')),
            $.submitButton().A( $.gl('search')))
    }

    $.ddT=   function(a){return $.a( a ).K("dropdown-toggle").toggle("dropdown").A($.caret())}
    $.ddM= function(){var menu
        menu= $.ul().K("dropdown-menu")
        _.e(arguments, function(g){menu.A( $.liA(g,function(){
            window.location='/wap/'+g
        }))})
        return menu
    }
    $.dd= function(a,b){return  $.li().K("dropdown").A($.ddT(a), $.ddM.apply($, b) )}
    $.n=  function(){var g=G(arguments), n
        n = $.ul().K("nav navbar-nav")
        _.e(g, function(g){ n.A( g ) })
        return n
    }
    $.nR=  function(){var g=G(arguments),n
        n= $.ul().K("nav navbar-nav navbar-right")
        _.e(g, function(g){ n.A( g ) })
        return n
    }
    $.nb=  function(){return $.dK("navbar navbar-default").A($.dK("container-fluid"))}
    $.nbH=function(brand, link){return $.dK("navbar-header").A(

        $.bt().K("navbar-toggle collapsed").toggle('collapse').target(".navbar-collapse").A(
            $.sp("Toggle navigation").K("sr-only"),
            $.iconBar(),$.iconBar(),$.iconBar()
        ),

        $.a(brand).K("navbar-brand").$( function(){  $.l(link)  })
    )}
    $.nbC=  function(){return $.dK("navbar-collapse collapse")}


};nav()
$.wrap=function(i){
    if(S(i)){i = $.i(i)}
    return $.dK("col-xs-4 col-sm-3 col-md-2 col-lg-1").A(
        $.a('').K('thumbnail').A(i, 'hi')
    )
}


$.iconBar = function () {
    return $.sp().K("icon-bar")
}
$.caret = function () {
    return $.sp().K("caret")
}
$.fn.gg = $.fn.toggle = function (a) {
    return this.attr("data-toggle", a)
}
$.fn.tg = $.fn.target = function (a) {
    return this.attr("data-target", a)
}

img=function(){
    $.iR= $.imgResponsive=function(s,f){return $.img(s,f).K('img-responsive')}
    $.iCir= $.imgCircle=function(s,f){
        return $.img(s,f).K('img-circle')
    }
    $.iRo= $.imgRounded=function(s,f){
        return $.img(s,f).K('img-rounded')
    }
    $.iTh= $.imgThumbnail=function(s,f){
        return $.img(s,f).K('img-thumbnail')
    }

    exampleImgResponsive=function(){$.boot(

        $.sm(3).A(

            $.well(

                $.imgResponsive('chicks')

            )
        )

    )

    }
    exampleResponsive=function(){

        $.boot(

            $.md(2).A(

                $.imgResponsive('me')  ,
                $.imgResponsive('chicks')  ,
                $.imgResponsive('me')

            )


        ).C('r')



    }
    exampleImages=function(){$.boot(


        $.imgCircle('chicks').C('y'),
        $.imgRounded('guy').C('y'),
        $.imgThumbnail('sun').C('y')



    )}



};img()


