_.fT = function (times, func) {
        var timeout
        if (N(times)) {
            return _.times(times, function (i) {
                func(i + 1)
            })
        }
        if (F(times)) {
            timeout = N(func) ? func : 100
            func = times
        }
        return setTimeout(func, timeout)
    }

    _.mo = function (n, fn) {
        return N(n) ?
            _.throttle(fn, n * 1000) : _.throttle(n, 1000)
    }//$.mo


    $d = function (o) {
        console.dir(o);
        return o
    }

    _.gT = function () {
        return $Dt().getTime()
    }
    $z = function (z) {
        console.error(z)
    }


    $l('in dat.........................')
    $Dt = Date
    $Dt.n = $Dt.now  //->  cur time - ms since  1970 UTC (N)
    $Dt.H = 3600000
    $Dt.U = $Dt.UTC// ?
// same pams as longest form  of constructor (2 to 7) -> ms since 1970 UTC (N)
    $Dt.p = $Dt.parse// date as str ->  ms since  1970  UTC (N)

    $D = function () {
        var d = new $Dt() // new $Dt(a,b,c,d,e)
        d.s = d.getSeconds
        d.t = function (m) {  //time  num MSs af/bf 1/1/70
            d.sT = d.setTime
            d.gT = d.getTime
            if (U(m)) {
                return this.gT()
            }
            this.sT(m)
            return this
        }
        d.s = function (s) { //secs 0-59
            // $l('d.s')
            var d = this
            d.sS = d.setSeconds
            d.gS = d.getSeconds
            if (U(s)) {
                return d.gS()
            }
            d.sS(s)
            return d
        }
        d.h = function (m) {  //hour 0-23
            d.gH = d.getHours
            d.sH = d.setHours
            if (U(m)) {
                return this.gH()
            }
            this.sH(m)
            return this
        }
        d.d = d.getDay  // day of   week (from 0-6)
        d.D = function (d) {
            var d = this   //date  day of   month (from 1-31)
            d.gD = d.getDate //
            d.sD = d.setDate
            if (U(d)) {
                return this.gD()
            }
            this.sD(d)
            return this
        }
        d.M = function (m) {  //month 0-11
            d.sM = d.setMonth
            d.gM = d.getMonth
            if (U(m)) {
                return this.getMonth()
            }
            this.setMonth(m)
            return this
        }
        d.m = function (m) {//mins 0-59
            d.gMn = d.getMinutes
            d.sMn = d.setMinutes

            if (U(m)) {
                return this.gMn()
            }
            this.sMn(m)
            return this
        }
        d.ms = function (m) { //ms 0-999
            d.gMs = d.getMilliseconds
            d.sMs = d.setMilliseconds
            if (U(m)) {
                return this.gMs()
            }
            this.sMs(m)
            return this
        }
        d.y = function (y) { //fullYear (year Deprecated -> fullYear )
            d.sY = d.setFullYear   //Sets the year (four digits) of dtOb
            d.gY = d.getFullYear//    year (four digits)
            if (U(y)) {
                return this.gY()
            }
            this.sY(y)
            return this
        }
        //superParse(d)
        //superUTC(d)

        return d
    }
    $D.n = function (a) {
        return $Dt.n(a)
    }
    $D.p = function (a) {
        return $Dt.p(a)
    }
    $D.U = function (a) {
        return $Dt.U(a)
    }

    $now = function () {
        return {t: $D, df: $D.n()}
    }
    $n = $nowPlusWhat_InDateForm = function (plus) {
        var dateNow
        if (U(plus)) {
            return $D.n()
        }
        //plus=plus||0
        dateNow = $D($D.n() + plus)
        return dateNow
    }
    function $superUTC(d) {
        // uniT ms 0-999
        d.sUMs = d.setUTCMilliseconds
        d.gUMs = d.getUTCMilliseconds

        //uniT secs 0-59
        d.SUSc = d.setUTCSeconds
        d.gUSc = d.getUTCSeconds//

        //uniT min 0-59
        d.sUMn = d.setUTCMinutes
        d.gUMn = d.getUTCMinutes

        //uniT hour 0-23
        d.sUH = d.setUTCHours
        d.gUH = d.getUTCHours


        d.gUM = d.getUTCMonth
        d.sUM = d.setUTCMonth

        //uniT dtOb's year (4digs)
        d.sUFY = d.setUTCFullYear
        d.gUFY = d.getUTCFullYear

        //  uniT  dOM 1-31
        d.gUDt = d.getUTCDate
        d.sUDt = d.setUTCDate

        d.U = d.UTC //num of MSs in a date since midnight of 1/1/70, according to UTC time
        d.gUD = d.getUTCDay // uniT dOW 0-6
        d.gO = d.gTO = d.getTimezoneOffset// mns dif bwn UTC/local time

        return d
    }

    function $superParse(d) {
        d.tS = d.toString  //dtOb -> str
        d.tI = d.toISOString   //date as a str, using ISO standard
        d.tDt = d.toDateString //Converts the date portion of   dtOb into a readable string
        d.tLDt = d.toLocaleDateString//    date portion of a dtOb as   string, using locale conventions
        d.tLT = d.toLocaleTimeString  //time portion of  dtOb as   string, using locale conventions
        d.tL = d.toLocaleString   //dtOb -> str, using locale conventions

        d.tT = d.toTimeString //Converts   time portion of  dtOb to   string

        d.tU = d.toUTCString   //dtOb -> str, by uniT
        d.p = d.parse //Parses date str  and num   ms snc 1/1/70
        d.j = d.tJ = d.toJSON   //date as   str, formatted as a JSON date
        d.v = d.vO = d.valueOf   //primitive val  of   dtOb
        return d
    }

    function oneHourFromNowInDateForm() {
        return $D.n($D.H)
    }
    $D = $Dt = function () {
        var dt = new Date()
        return dt
    }

    _.sI = function (a, b) {
        return setInterval(a, b)
    }
    _.xI = function (n) {
        clearInterval(n)
    }
    _.gT = function () {
        return $D().getTime()
    }
    _.ev = function (n, fn) {
        setInterval(fn, n * 1000)
    }

    //$.inASec=function(func){return setTimeout(func, 1000)}
    _.in1 = function (time) {
        time = ( N(time) ? time : 1) * 1000
        cjs.wait = true
        return setTimeout(function () {
            cjs.wait = false

        }, time)
    }//in1
    _.in = function (time, fn) {
        var g = G(arguments),
            o = F(g[0]) ? {fn: g[0]} : {s: g[0], fn: g[1]}
        o.s = N(o.s) ? o.s : 1
        o.fn = o.fn || function () {
        }
        return setTimeout(
            function () {

                if (g.m) {
                    $.c$()
                }
                o.fn()

            },
            o.s * 1000)
    }
    _.cI = function (a, b) {
        clearInterval(a)
    }
    _.iv = function (a, b) {
        if (N(b)) {
            return setInterval(_v(a), b)
        }
    }
