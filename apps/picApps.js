

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

        $.picDiv(y).A($.pic(p), $.delBt('/pic', p))

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