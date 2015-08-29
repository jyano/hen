


wds=function(){
    _.iWd=  function(a){//Wd=
        if(O(a)){if( s$(a).contains('Window') ||
            s$(a[0]).contains('Window')){
            return window}}
    }
    $.rl=$.reload=function(){window.location=window.location}
    wnd=function(a){
        var g=G(arguments),a=g[0]
        if(g.n){return a.close()}
        return $w.open()
    }
    makeAllExtLinksOpenInNewWindows=function(){
        $("a[href^='http://']").attr('target','_blank')}
    accessParentFrame=function(){
        frames[0].parent===$w}
    accessChildFrame=function(){
        frames[0].window.location.reload}
    accessTopFrame=function(){
        $w.frames[0].window.top===$w.top}
    accessFrameByName=function(f){$w.frames[f]===$w.frames[0].location.reload}
    open=function(c){$w.open(_S(c), 'new_window','width=310,height=30')}

};wds()