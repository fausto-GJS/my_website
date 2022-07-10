import {FaGithub } from 'react-icons/fa'
import {  SiLinkedin } from 'react-icons/si'
import { motion } from 'framer-motion'
import animations2 from '../../effects/animations2'
import { useScroll } from '../../common/hooks/useScroll'
import scrollReveal from '../../effects/scrollReveal'
import Email from '../../../services/email'

export default function Network(){
    const [element, control] = useScroll();
    return(
        <div className="network">
        <motion.div className="social"
            initial='init'
            animate='show'
            exit='exit'
            variants={animations2}
        >
            <h4>Redes Sociais</h4>
            <p className="alert">Siga-me!</p>
            <div className="iconNetwork">
                <a href="https://www.linkedin.com/in/fausto-garcia-jacinto-silva-b7a5a9186/" target="_blank">
                    <SiLinkedin className='iconLinkedin' />
                </a>
                <a href="https://github.com/fausto-GJS" target="_blank">
                    <FaGithub className="iconGit" />
                </a>
            </div>
            <motion.div className="contactNetwork"
                variants={scrollReveal}
                animate={control}
                initial='hidden'
                ref={element}
            >
                <h5>Deixe um comentário ou sugestões</h5>
                <p className="alert">Seu email não será divulgado.</p>
                <p>Nome <input type="text" placeholder='Digite seu nome aqui' /></p>
                <p>Email <input type="email" placeholder='Digite seu email aqui' /></p>
                <p>Comentário</p><textarea placeholder='Digite seu comentário aqui'></textarea>
                <button>Enviar</button>
            </motion.div>
        </motion.div>
    </div>
    )
}