TWEEN=function(a){


    st=$St(500,500)




    st.mug(function(bm){

        b = bm

        TR(bm)


       $Tw(

            [ bm, 'l' ],

            { x:0, sxy:.7, r:0 },

            [ {x:300,sxy:2.3,r:0}, 1000 ],

            [ {x:0,sxy:.7,r:-30,a:.5}, 3000 ]
        )


    })




    st.mug(function(bm){


    bm.TR()


        $Tw([bm,'l'],
            {x:0,sxy:.7,r:-2},
            [{x:300,sxy:2.3,r:0,a:.2,kx:60},3000],
            [{x:320,a:1,sxy:2,r:-1},1000],
            [{rx:100},1000],
            [{ry:100},1000],
            [{r:50,x:1400,y:300},3000],
            [{r:200,x:1000,y:200,sxy:1},3000],
            [{r:100,x:300, ky:-100},1000],
            [{rx:30,ry:30, r:150,x:500 },2000],
            [{rx:20,ry:50,r:100,x:500,kx:300 },2000],
            [{kxy:0,x:320,y:0,rxy:0,sxy:2,r:-1},3000])



    })




}

function temp() {
    TWEEN1 = function (a) {
        z()


        st = $St(800, 500)


        st.mug(function (bm) {


            i = cjs.Tw.g(bm, {loop: true})

            i.to({x: 400}, 1000, cjs.Ea.getPowInOut(4))
                .to({alpha: 0, y: 175}, 500, cjs.Ea.getPowInOut(2))
                .to({alpha: 0, y: 225}, 100)
                .to({alpha: 1, y: 200}, 500, cjs.Ea.getPowInOut(2))
                .to({x: 100}, 800, cjs.Ea.getPowInOut(2))

        })


    }
}