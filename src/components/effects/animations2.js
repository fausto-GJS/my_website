const animations={
    show:{
        opacity:1,
       // y:100,
        transition:{
        //    type:'spring',
            duration:1,
          //  when:'beforeChildren',
          //  staggerChildred:1
        }
        
    },
    init:{
        opacity:0,
     //  y:50,
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.5
        }
    }
}

export default animations