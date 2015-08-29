

_.wo = _.without
_.tA = function (a) {
    return O(a) ? _.toArray(a) : [a]
}


_.ixv = function (a, b) {
    return U(b) ? _.invert(a)
        : _a(_.intersection, arguments)
}


_.b = _.bind
_.l = _.last;
_.f = _.first;
_.i = _.initial;
_.r = _.rest
_.e = _.each;
_.m = _.map;
_.t = _.times
_.x = _.extend;
_.df = _.defaults;
_.p = _.partial;
_.ic = _.include;
_.wo = _.without;
_.cp = _.compact
_.ks = _.keys;
_.rs = _.result
_.tp = _.template
_.rs = _.result
_.tA = _.toArray
_.df = _.defaults
_.p = _.partial
_.l = _.last;
_.f = _.first;
_.i = _.initial;
_.r = _.rest
_.e = _.each;
_.m = _.map;
_.t = _.times
_.bn = function (a, b, c) {
    return F(a) ? _.bind(a, b, c) : _.bindAll(a, b, c)
}
_.b = _.bind;
_.x = _.extend
_.fl = _.F = function (a) {
    if (A(a)) {
        return _.flatten(a)
    }
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
_.tp = _.template

_.ic= _.include
_.cp= _.compact
_.ey=function(a,b,c){return _.every(a,b,c) }
