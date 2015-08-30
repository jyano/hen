$.picDiv = function (top) {$l('in picDiv')
    return $.dA('b', '+').WH('auto').XY(200, top).K('pic')
        .pad(25)}
$.pic = function (pic) {
    return $.i(pic._id + pic.ext).WH(120, 120).$(function(){
        $.cut(pic._id + pic.ext) })}
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

    $l('in uploads')
    $.fm()
    instr= 'You have uploaded these pics. Click to make a sprite, or hit the x to delete..'
    y = 80
    n=0
    $.eG('myPics',  function(p){
        $l('pic: ' + n++)
        $.picDiv(y).A( UpPic(p) )
        y+= 220
    })

    /*
     $.G('myPics',  function(p){_.e(p, function(p){

     $l('pic: ' + n++)
     $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
     y+= 220
     })

     })*/

    s2.A($.h4(instr))
}
function UpPic(p){return $.sp().A($.pic(p), $.delBt('/pic', p))}

