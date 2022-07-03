import { FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import profile from '../../../assets/imgs/profile.jpg'
import { motion } from 'framer-motion'
import animationsCard1 from '../../effects/animationsCard1'
import animationsCard2 from '../../effects/animationsCard2'
import animationsAbility from '../../effects/animationsAbility'
import { useScroll } from '../../common/hooks/useScroll'
import scrollReveal from '../../effects/scrollReveal'

export default function businessCard() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [element, control] = useScroll();

    return(

        <motion.div 
        variants={scrollReveal}
    animate={control}
    initial='hidden'
    ref={element}
>
        <motion.div className="infoAbility"
            initial='init'
            animate='show'
            exit='exit'
            variants={animationsAbility}
        >
            <p className='titleInfo'></p>

            <div className="ability">
                <p className='title'>Habilidades</p>
                <div className="iconsAbility">
                    <FaNodeJs className='iconNode' />
                    <FaReact className='iconReact' />
                    <FaSass className='iconSass' />
                    <SiMongodb className='iconMongo' />
                </div>
                <p className="infoIcons"></p>
            </div>

        </motion.div>

        <div className="card">
            <motion.div className="card-photo"
                initial='init'
                animate='show'
                exit='exit'
                variants={animationsCard2}
            >

                <img src={profile} alt="profile" />


            </motion.div>
            <motion.div className="card-description"
                initial='init'
                animate='show'
                exit='exit'
                variants={animationsCard1}
            >
                <p>
                    Desenvolvedor Web Fullstack, formado em Analise e desenvolvimento de sistemas, pela Universidade Nove de Julho desde 06/2022.
                    Conhecimento hibrido em diversas ferramentas, linguagens e frameworks. Assim como JavaScript, C#, Java, Python, Linguagem C.
                    Desenvolvimento Web,Mobile e sistemas embarcados.
                </p>
            </motion.div>
        </div>
        </motion.div>
        )
}