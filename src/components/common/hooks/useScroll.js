import {useInView} from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useScroll=()=>{
    const control = useAnimation()
    const [element,view] = useInView({threshold:0.3})
    if(view){
        control.start('show')
        console.log('show')
    }else{
        control.start('hidden')
        console.log('hidden')
    }
    return [element,control]
}