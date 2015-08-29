$.cut = function (m) {
    z()
    $.fm()
    c = $.c('r', 500, 500).A().fit(m || 'me')
    s1.A(
        $.bt('save sprite', function () {
            c.snap();
            EDIT()
        }), $.br(2),
        $.bt('start cut', function () {
            c.dots();
        }), $.br(2),
        $.bt('restart cut', function () {
            $.cut(m)
        }), $.br(2),
        $.bt('file uploads', function () {
            window.location = '/wap/uploads'
        })
    )
    s2.A($.h2('click to start cut-out..'), c)
}

$.picDiv = function (top) {
    $l('in picDiv')
    return $.dA('b', '+').WH('auto').XY(200, top).K('pic').pad(25)
}

$.pic = function (pic) {
    i = $.i(pic._id + pic.ext).WH(120, 120)
    i.click(function () {
        $.cut(pic._id + pic.ext)
    })
    return i
}
//eachImage = eaI=function(f){$.getJSON('/img', function(i){ _.e(i, f) } )}