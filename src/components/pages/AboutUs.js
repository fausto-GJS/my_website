import { FaNodeJs, FaReact, FaSass, FaGithub } from 'react-icons/fa'
import { SiMongodb, SiLinkedin } from 'react-icons/si'
import profile from '../../assets/imgs/profile.jpg'
import {motion} from 'framer-motion'
import animations1 from '../effects/animations1'
import animations2 from '../effects/animations2'
import animationsCard1 from '../effects/animationsCard1'
import animationsCard2 from '../effects/animationsCard2'
import animationsAbility from '../effects/animationsAbility'

export default function AboutUs() {
    return (
        <motion.div id="AboutUs"
        initial='init'
        animate='show'
        exit='exit'
        variants={animations1}
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
                        Conhecimento hibrido em diversas ferramentas, linguagens e frameworks. Assim como C#, Java, Python, Linguagem C.
                        Desenvolvimento Web,Mobile e sistemas embarcados.
                    </p>
                </motion.div>
            </div>
          
            <motion.div className="network"
            initial='init'
            animate='show'
            exit='exit'
            variants={animations2}
            >
                <div className="social">
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
                <div className="contactNetwork">
                 <h5>Deixe um comentário ou sugestões</h5>
                 <p className="alert">Seu email não será divulgado.</p>
                 
                        <p>Nome <input type="text" placeholder='Digite seu nome aqui'/></p> 
                        <p>Email <input type="email" placeholder='Digite seu email aqui'/></p>
                        <p>Comentário</p><textarea placeholder='Digite seu comentário aqui'></textarea>
                        <button>Enviar</button>
                </div>
                
                </div>
            </motion.div>

        </motion.div>
    )
}