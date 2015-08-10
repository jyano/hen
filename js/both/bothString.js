
upLowCase=function(){


    _.toU = function () {
        _.e(G(arguments), function (g) {
            g = undefined
        })
    }


    S.tU = function (a) {
        return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
            return S.tU(a)
        }) : a
    }
    S.iU = function (a) {
        if (S(a)) {
            return s$(a).isUpper()
        }
    }
    _.tLc = _.tL = _.tLC = function (a) {
        return a.toLowerCase()
    }
    _.tUc = _.tU = _.tUC = function (a) {
        return a.toUpperCase()
    }

};upLowCase()
spl=function(){
    _.spl = function (a, b) {
        return String(a).split(b)
    }
    _.bf = function (a, b) {
        return a.split(b || '.')[0]
    } //before('.')
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}

};spl()


chompEnsure = function () {


    _.ext = function (o) {
        o.e = o.extend
        return o
    }//ext


    _.eW = function (a, b) {
        return l$(a, _z(b)) == b
    }



    S.ext = _.ext = function (a, b) {
        if (S(a)) {
            return s$(a).contains('.') ? a :
                s$(a).ensureRight(b || '.png').s
        }
    }//$.ext
    _.left = function (a, b) {
        var g = G(arguments)
        return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
            : s$(a).chompLeft(b).s) : 0
    }

    _.slash = _.ensureSlash = function (str) {
        var hasSlash = str[0] == '/'
        return hasSlash ? str : '/' + str
    }
    //chomp/ensure
    S.cR = function (a, b) {return s$(a).chompRight(b).s}
    S.eR = function (a, b) {return s$(a).ensureRight(b).s}
    S.cL = function (a, b) {return s$(a).chompLeft(b).s}
    S.eL = function (a, b) {b = b || '/';return s$(a).ensureLeft(b).s}
    S.r = function (a, b) {
        var g = G(arguments)
        return g.n ? s$(a).chompRight(b).s :
            s$(a).ensureRight(b).s
    }


};chompEnsure()

_.fCC = function (a) {
    return String.fromCharCode(a)
}
_.tS = function (a) {
    return a.toString()
}



function strng(){

    _.b = function (a, b, c) {
        return F(a) ? _.bind(a, b, c) : _.bindAll(a, b, c)
    }
    _.tA = function (a) {
        return O(a) ? _.toArray(a) : [a]
    }
    _.fl = _.F = function (a) {
        if (A(a)) {
            return _.flatten(a)
        }
    }
    _.ey = function (a, b, c) {
        return _.every(a, b, c)
    }
    _.eW = function (a, b) {
        return s$(a).endsWith(b)
    }
    _.mo = function (n, fn) {
        return N(n) ? _.throttle(fn, n * 1000) : _.throttle(n, 1000)
    }
    _.rd = function r(a, b, c, d) {
        return F(b) && D(c) ? _.reduce(a, b, c) : _.reduceRight(a, c, b)
    }
    _.rp = function (a, b, c) {
        return a.replace(b || '#', c || '')
    }
    _.rng = function (a, b) {
        var g = G(arguments);
        return N(b) ? _.range(a, b) : g.p ? _.range(1, (a || 10) + 1) : _.range(a)
    }
    _.iv = function (a, b) {
        return _.invert(a)
    }
    _.ix = function (a, b) {
        return _.ap(_.intersection, arguments)
    }

    __ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    S.iU = function (a) {
        if (S(a)) {
            return s$(a).isUpper()
        }
    }
    S.tU = _.tU = _.tUC = function (a) {
        return a.toUpperCase()
        return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
            return S.tU(a)
        }) : a
    }
    S.iL = function (a) {
        return S(a) ? a.toLowerCase() : A(a) ? _m(a, function (a) {
            return lC(a)
        }) : a
        //Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
    }
    S.tL = _.tL = _.tLC = function (a) {
        return a.toLowerCase()

    }
    S.cR = function (a, b) {
        return s$(a).chompRight(b).s
    }
    S.eR = function (a, b) {
        return s$(a).ensureRight(b).s
    }
    S.cL = function (a, b) {
        return s$(a).chompLeft(b).s
    }
    S.eL = function (a, b) {
        b = b || '/';
        return s$(a).ensureLeft(b).s
    }
    S.x = S.ext = _.ext = function (a, b) {
        if (S(a)) {
            return s$(a).contains('.') ? a :
                s$(a).ensureRight(b || '.png').s
        }
    }
    S.slash = _.slash = _.ensureSlash = function (str) {
        var hasSlash = str[0] == '/'
        return hasSlash ? str : '/' + str
    }
    S.spl = _.spl = function (a, b) {
        return String(a).split(b)
    }
    S.bf = _.bf = function (a, b) {
        return a.split(b || '.')[0]
    }
    S.af = _.af = function (a, b) {
        return a.split(b || '/')[0]
    }
    S.S = S.to = _.tS = function (a) {
        return a.toString()
    }
    S.ch = _.fCC = function (a) {
        return $S.fromCharCode(a)
    }
}

quirky=function(){

    __ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'

};quirky()

url=function(){

    S.url = function (a) {
        return 'url("' + a + '")'
    }
    _.iDU = function (a) {
        return s$(a).ct('data:')
    }

};url()

_.eW=function(a,b){return s$(a).endsWith(b) }
ll = function (a, b) {
    if (S(b)) {
        console.log(a + ': ' + b)
    }
    else {
        $l(a + ' ->');
        $l(b)
    }
    ;
    return b
}
// String.prototype.ensureSlash=function(){var hasSlash = this[0] = '/'; return hasSlash? this: '/'+this}
