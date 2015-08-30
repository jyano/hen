$.fn.dots = function () {
    var el=this

    el.copy()

    el.DOTS = []
    el.dats = []

    el.$(function (x, y) {
        x = parseInt(x)
        y = parseInt(y)
        el.cir(x, y)
        el.DOTS.push([x, y])
        el.dats.push(x);  el.dats.push(y) //vestige from phaser physics?
        el.line(el.DOTS)
    })

    el.$$(function (X, Y) {
        var du
        //el.C('X')
        el.off('click')
        el.closePath()  //el.paste() // el.copy()  //el.save()
        el.clear() //du = el.toDataURL()
        el.clip()
        el.paste() //el.fit(du)
    })
    return el
}
$.fn.snap = function (fn) {
    $.po('/img', {
        d: this.canvas.toDataURL(),
        dats: this.dats //vestige from phaser physics?
    }, fn)
}


$.cut = function(m) {z();  m=m|| 'me'
    $('body').A(
        $.bt('save sprite', function () {
            c.snap(CUTOUTS)//; EDIT()
        }), $.br(2),
        $.bt('start cut', function () {c.dots() }), $.br(2),
        $.bt('restart cut', function () {$.cut(m)}),  $.br(2),
        c= $.c('r', 500, 500).A().fit(m  ))
} // $.bt('file uploads', function () {window.location = '/wap/uploads'}),


$.picDiv = function (top) {$l('in picDiv')
    return $.dA('b', '+').WH('auto').XY(200, top).K('pic')
        .pad(25)}

$.pic = function(pic){
    return $.i(pic._id + pic.ext).WH(120, 120)
        .$(function(){
            $.cut(pic._id + pic.ext) }) }


UPLOAD=function(){
    f =  $.f().attr({
        method:'post',
        enctype: 'multipart/form-data',
        action: '/pic'
    }).C('o').A($.fU(''),
        $.sm().val('ok').K("show"))
    $.pop(f, {title: 'upload a new pic'} ).dg()
}
UPLOADS=function(){


    $.fm()
     y = 80
    n=0
    $.eG('myPics',  function(p){
        $l('pic: ' + n++)
        $.picDiv(y).A(

            UpPic(p)

        )
        y+= 220
    })


    function UpPic(p){return $.sp().A(

        $.pic(p),
        $.delBt('/pic', p)

    )}

    /*
     $.G('myPics',  function(p){_.e(p, function(p){

     $l('pic: ' + n++)
     $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
     y+= 220
     })

     })*/
}


