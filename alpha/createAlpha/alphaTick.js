
cjs.ticker = tt = function (a, b, c) {

    var g = G(arguments),
        t = true,
        f = false,
        a = g[0],
        b = g[1],
        c = g[2]

    if (F(a)) {

        return aEL(T$, 'tick',
            g.N ? a
                : function (e) {

                if (!e.paused) {
                    a(e)
                }
            })

    }


    if (O(a)) {
        return aEL(T$, 'tick', a)
    }

    if (a == '?') {
        return !T$.getPaused()
    }
    if (a == 'p') {
        T$.setPaused(f);
        return tt('?')
    }

    if (a == 's') {
        T$.setPaused(t);
        return tt('?')
    }

    if (a == 'g') {
        return tt(
            tt('?') ? 's' : 'p'
        )
    }


    if (a == '@') {
        return T$.init()
    }

    if (a == '!') {
        return T$.reset()
    }

    if (a == 'e') {
        return T$.getEventTime(g.p ? t : f)
    }

    if (a == 't') {
        return T$.getTime(g.p ? t : f)
    }

    if (a == '#') {
        return T$.getTicks(g.n ? t : f)
    }

    if (a == 'md') {
        return t$.maxDelta
    }

    if (a == 'M') {
        return T$.timingMode
    }

    if (a == 'i') {
        if (N(b)) {
            T$.setInterval(g.m ? b * 1000 : b)
            return tt('i')
        }
        if (U(b)) {
            return T$.getInterval()
        }
    }

    if (a == 'f') {
        if (N(b)) {
            T$.setFPS(b);
            return tt
        }
        if (U(b)) {
            return T$.getFPS()
        }
    }

    if (a == 'r') {
        if (b > 10) {
            tt('f', b)
        } else {
            tt('i', b, '*')
        }
    }


    if (a == 'm') {
        return N(b) ? T$.getMeasuredFPS(b)
            : T$.getMeasuredFPS()
    }

    if (a == 'tk') {
        return Ed(T$)
    }

}
