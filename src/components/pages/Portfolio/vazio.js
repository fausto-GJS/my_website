import {motion} from 'framer-motion'
import animations2 from '../../effects/animations2'
import Gif from '../../../assets/imgs/developer.gif'
export default function vazio(){
    return(
        <>
         <motion.div
        initial='init'
        animate='show'
        exit='exit'
        variants={animations2}
        id="Portfolio"
        >
          <img src={Gif} alt='developer'/>
          <h1>Em breve novos projetos</h1>
        </motion.div>
        </>
    )
}