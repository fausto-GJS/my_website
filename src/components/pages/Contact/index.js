import {motion} from 'framer-motion'
import animations2 from '../../effects/animations2'
import downloadCurriculo from '../../doc/curriculo.pdf'
import {GrDocumentDownload} from 'react-icons/gr'
export default function Contact(){
    return(
        <div id="Contact">
            
        <motion.div className='card'
        initial='init'
        animate='show'
        exit='exit'
        variants={animations2}
        >
            <h1>Se desejar, entre em contato para uma avaliação técnica.</h1>
            <h2>Envie uma mensagem</h2>
            <h2>Whatsapp: (11) 93003-8209</h2>
            <h2>Email: faustogarciajacinto@gmail.com</h2>
        <a href={downloadCurriculo} download="Currículo" className="curriculo"><button><GrDocumentDownload size={36}/>Download Currículo</button></a>
        </motion.div>
        </div>
    )
}