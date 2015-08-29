M = Math
M.fl = M.floor
M.c = M.cos
M.s = M.sin
M.tD = M.toDegrees = tDeg = function (r) {
    return r * (180 / M.PI)
}
M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
    if (O(degs)) {
        degs = degs.rotation
    }
    return degs * M.PI / 180
}
M.av = M.avg = M.average = function self(a, b) {
    var g = G(arguments), z = _.size(g), n = 0;


    if (A(a)) {
        return _a(self, a)
    }

    if (O(a)) {

        return V(
            M.av(a.x, b.x),
            M.av(a.y, b.y)
        )

    }

    _.e(g, function (a) {
        n += a
    })
    return n / z
}
M.dst = M.distance = dst = function self(a, b) {


    M.xyz = xyz = function (a, b) {
        a = a || {};
        a.x = a.x || 0;
        a.y = a.y || 0;
        a.z = a.z || 0
        b = b || {};
        b.x = b.x || 0;
        b.y = b.y || 0;
        b.z = a.z || 0


        return sqr(a.x - b.x, a.y - b.y, a.z - b.z)

        function sqr(a, b) {
            var g = G(arguments)
            return M.sqrt(U(b) ? a
                : sq.apply(this, g))
        }

        function sq(a) {
            var g = G(arguments), n = 0
            _.each(g, function (a) {
                n += (a * a)
            })

            return n
        }
    }


    if (A(a) && U(b)) {
        return self(a[0], a[1])
    }


    if (U(b)) {
        return xyz(M.V({}), M.V(a))
    }


    return xyz(M.V(a), M.V(b))


}
M.lD = M.dist = M.lineDistance = function (p1, p2) {
    var xs = 0, ys = 0;

    p1 = V(p1)
    p2 = V(p2)
    xs = p2.x - p1.x;
    xs = xs * xs;

    ys = p2.y - p1.y;
    ys = ys * ys;

    return M.sqrt(xs + ys);
}
M.lineCenter = function (x1, y1, x2, y2) {
    if (A(x1)) {

        if (N(x1[3])) {
            return center(x1[0], x1[2], x1[2], x1[3])
        }
        return center(x1[0], x1[1], y1[0], y1[1])
    }
    if (O(x1)) {
        return center(x1.x, x1.y, y1.x, y1.y)
    }
    return center(x1, y1, x2, y2)
    function center(x1, y1, x2, y2) {
        var x, y

        if (x1 > x2) {
            upperX = x1;
            lowerX = x2
        }
        else {
            upperX = x2;
            lowerX = x1
        }

        if (y1 > y2) {
            upperY = y1;
            lowerY = y2
        }
        else {
            upperY = y2;
            lowerY = y1
        }

        x = lowerX + (upperX - lowerX) / 2
        y = lowerY + (upperY - lowerY) / 2

        return V(x, y)
    }
}
M.pointInCircle = function (x, y, circle) {
    var withinX, withinY
    withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
    withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
    return withinX && withinY
}//Y.pointInCircle = pntInCir =
M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
    var withinX, withinY
    var halfwidth = (rect.width || rect.w) / 2
    var halfheight = (rect.height || rect.h) / 2
    //assumes center
    withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
    withinY = y < rect.y + halfheight && y > rect.y - halfheight
    return withinX && withinY
}
M.circlesOverlap = function (c1, c2) {
    var sum, dist, rads
    sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
    dist = sqrt(sum)
    rads = c1.r + c2.r
    return rads < dist
}
M.warp = function (lowBound, highBound, cushion) {//wrp=
    cushion = cushion || 0
    return function (num) {
        return num < lowBound ? highBound - cushion
            : num > highBound ? lowBound + cushion
            : num
    }
}
_.tN = function (what, aNum) {
    return N(what) ? what : aNum || 0
}
_.tI = function (a, b) {
    return parseInt(_.tN(a, b))
}
_.pI = parseInt
M.fl = M.floor;
M.c = M.cos;
M.s = M.sin
M.av = M.avg = M.average = function self(a, b) {
    var g = G(arguments), z = _.size(g), n = 0;


    if (A(a)) {
        return _a(self, a)
    }

    if (O(a)) {

        return V(
            M.av(a.x, b.x),
            M.av(a.y, b.y)
        )

    }

    _.e(g, function (a) {
        n += a
    })
    return n / z
}
M.tN = _.tN = function (what, aNum) {
    return N(what) ? what : aNum || 0
}
M.u = _.upd = function (curr, update, g) {
    var res
    if (g.p) {
        res = curr + update
    }
    else if (g.n) {
        res = curr - update
    }
    else if (g.m) {
        res = curr * update
    }
    else if (g.d) {
        res = curr / update
    }
    else res = update
    return res
}
M.pI = _.pI = _.tI = function (a, b) {
    if (U(b)) {
        return parseInt(a)
    }
    return parseInt(_.tN(a, b))
}


_.upd= function(curr, update, g){var res
    if(g.p){res = curr + update}
    else if(g.n){res = curr - update}
    else if(g.m){res = curr * update}
    else if(g.d){res = curr / update}
    else res = update
    return res}//$.update
siz=function(){

    _.sz = _z = function z(a, b, c) {
        return U(b) ? _.size(a)
            : N(b) ? _z(a) == b
            : _z(a) == _z(b)
    }
    _.ht = function (a, b, c) {
        if (O(a)) {
            if (U(b)) {
                return a.height ? (F(a.height) ? a.height() : a.height) :
                    _.isFunction(a.h) ? a.h() : N(a.h) ? a.h : false
            }
            if (N(b)) {
                if (F(a.height)) {
                    a.height(b);
                    return a
                }
                if (N(a.height)) {
                    a.height = b;
                    return a
                }
                if (F(a.h)) {
                    a.h(b);
                    return a
                }
                if (N(a.h)) {
                    a.h = b;
                    return a
                }
            }


        }
    }
};siz()
