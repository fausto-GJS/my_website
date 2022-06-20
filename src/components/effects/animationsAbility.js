const animations={
    show:{
        opacity:1,
        transition:{
            duration:2,
            when:'beforeChildren',
            staggerChildred:2
        }
    },
    init:{
        opacity:0,
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.5
        }
    }
}

export default animations