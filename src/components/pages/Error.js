import {Link} from 'react-router-dom'
import Footer from '../common/Footer'
import err from '../../assets/imgs/err.png'

export default function Error(){
    return(
        <div id="Error">
            <img src={err} alt='erro'/>
           <h1>Ops erro 404.</h1>
           <h2>Desculpe essa página não está disponivel, fique avontade para continuar navegando no nosso site.</h2>
           <h3><Link to='/'>Voltar para Home</Link></h3>
        </div>
    )
}