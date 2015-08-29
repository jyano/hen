
QUEUE=function(){z()
    s= $St(500)
    queue = new createjs.LoadQueue()
    queue.on("complete", handleComplete, this)
    queue.loadManifest(
        [{id:"myImage", src:"/me.png"}, {id:"guyImage", src:"/guy.png"}])
    function handleComplete(){

        image = queue.getResult("myImage")

        s.A(   createjs.bm(image)   )

    }}
QUEUEMUG=function(){z()
    s = $St(500, 500)
    qu = Ql().c(graphics, this).l([
        {id:"mug", src:"/getMug" },
        {id:"me", src:"/me.png"}
    ])

    ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
    function graphics(){
        // mug= s.bData( qu.gR("mug") ).drag()
        me = cjs.bm( qu.gR("me") ).drag()
        s.A( me )
    }

}
CONTMUG=function(){z()
    s= $St(1000).A(  m = mugCont()  )//.rgc('+')
    SL(m)
}

