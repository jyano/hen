
//beta

    jsBlob=function(f){
        return new Blob(['('+f.toString()+')()'],{
            type:"text/javascript"})}
    wrk=function(a){
        cou=function(a){return $w.URL.createObjectURL(a)}
        a=cou(jsBlob(a))
        var g=G(arguments),
            w= g.p? new sharedWorker(a):
                new Worker(a)
        w.t=w.terminate
        w.pm=w.postMessage
        w.m=function(f){w.onmessage=f}
        return w
    }
    work=function(){
        w=wrk(function(){postMessage('hi')})
        w.m(function(e){$l('Worker said: '+e.data)})
    }
