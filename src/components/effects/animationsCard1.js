const animations={
    show:{
        opacity:1,
        x:0,
        transition:{
            type:'spring',
            duration:1.5,
            when:'beforeChildren',
            staggerChildred:1.25
        },
    },
    init:{
        opacity:0,
       x:450,
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.5
        }
    }
}

export default animations