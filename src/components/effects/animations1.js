const animations={
    show:{
        opacity:1,
        y:50,
        transition:{
            type:'spring',
            duration:0.5,
            when:'beforeChildren',
            staggerChildred:0.15
        }
    },
    init:{
        opacity:0,
        y:0
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.5
        }
    }
}

export default animations