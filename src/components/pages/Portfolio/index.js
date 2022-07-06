import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import animations2 from '../../effects/animations2'
import Gif from '../../../assets/imgs/developer.gif'
import api from '../../common/api'
export default function Portfolio() {
  
  const [PortfolioAPI,setPortfolioAPI]=useState([])

  async function portfolio(){
    const response = await api.get('portfolio')
    setPortfolioAPI(response.data)
    console.log(PortfolioAPI)
  }
  portfolio()
  
  useEffect(()=>{
   
  },[])

    return (
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

         {PortfolioAPI.map(api=>(
          <li key={api.id}>
            <h2>{api.titulo}</h2>
            <p>{api.description}</p>
          </li>
         ))}
        </motion.div>
        </>
    )
}