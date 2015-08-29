cjs = createjs


cjs.toColor = toColor = tCl = function (n1, n2, n3, n4) {

        return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")"
            :
            $r('c', n1)
    }
sav=function(st,a){return function(){
    alert('sav')
    st.sv(a) } }

$Ct=function(){return new cjs.Container()}

selected=function(bm){
        alert('selected')
        SL(bm)
        bm.$(function(){
            createjs.Tween.removeAllTweens()
            bitmap=bm
            createjs.scaleShake(bm.dO)
        })

}

cjsKey()
function cjsKey(){
    cjs.Keys = function(o){
        if(O(o)){
            if(F(o.u)){
                cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}
            if(F(o.d)){
                cjs.tick(function(){
                    if(cjs.Keys.d){ o.d(cjs.Keys.d) } })
            }
            if(F(o.l)){
                cjs.tick(function(){
                    if(cjs.Keys.l){
                        o.l(cjs.Keys.l)
                    } })}
            if(F(o.r)){
                cjs.tick(function(){if(cjs.Keys.r){
                    o.r(cjs.Keys.r)
                } })
            }
        }
    }
    cjs.watchKeys=function(){
        cjs.Keys.l = cjs.Keys.left = false
        cjs.Keys.r = cjs.Keys.right = false
        cjs.Keys.u = cjs.Keys.up = false
        cjs.Keys.d = cjs.Keys.down = false
        $.kD('l',function(){
            if($.test){$l('left pressed')}
            cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'})
        $.kU('l',function(){if($.test){$l('left lifted')}
            cjs.Keys.l = cjs.Keys.left = false
        })
        $.kD('r',function(){if($.test){$l('right pressed')}
            cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'})
        $.kU('r',function(){if($.test){$l('right lifted')}
            cjs.Keys.r = cjs.Keys.right = false
        })
        $.kD('u',function(){if($.test){$l('up pressed')}
            cjs.Keys.u = cjs.Keys.up = true
        })
        $.kU('u',function(){if($.test){$l('up lifted')}
            cjs.Keys.u = cjs.Keys.up = false
        })
        $.kD('d',function(){if($.test){$l('down pressed')}
            cjs.Keys.d = cjs.Keys.down = true
        })
        $.kU('d',function(){
            if($.test){$l('down lifted')}
            cjs.Keys.d = cjs.Keys.down = false
        })
    }
    TESTWATCHKEYS=function(){z()
        $.test=true
        cjs.watchKeys()
    }
    KEYWATCH = function(){
        J=cjs
        $.test=true
        J.Keys.l = J.Keys.left = false
        J.Keys.r = J.Keys.right = false
        J.Keys.u = J.Keys.up = false
        J.Keys.d = J.Keys.down = false
        $.kU('l',function(){
            if($.test){$l('left lifted')}
            J.Keys.l = J.Keys.left = false
        })
        $.kD('l',function(){
            if($.test){$l('left pressed')}
            J.Keys.l = J.Keys.left = true
            J.Keys.dir = 'left'})
        $.kD('l',function(){
            if($.test){$l('left pressed')}
            J.Keys.l = J.Keys.left = true
            J.Keys.dir = 'left'})
        $.kD('r',function(){if($.test){$l('right pressed')}
            J.Keys.r = J.Keys.right = true
            J.Keys.dir = 'right'})
        $.kU('r',function(){if($.test){$l('right lifted')}
            J.Keys.r = J.Keys.right = false
        })
        $.kD('u',function(){if($.test){$l('up pressed')}
            J.Keys.u = J.Keys.up = true
        })
        $.kU('u',function(){if($.test){$l('up lifted')}
            J.Keys.u = J.Keys.up = false
        })
        $.kD('d',function(){if($.test){$l('down pressed')}
            J.Keys.d = J.Keys.down = true})
        $.kU('d',function(){if($.test){$l('down lifted')}
            J.Keys.d = J.Keys.down = false
        })
    }
}
