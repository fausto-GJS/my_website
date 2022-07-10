import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import animations2 from '../../effects/animations2'
import api from '../../common/api'
import Vazio from './vazio'
export default function Portfolio() {
  
  const [PortfolioAPI,setPortfolioAPI]=useState([])

  useEffect(()=>{
   async function portfolio(){
    try{
      const response = await api.get('portfolio')
      setPortfolioAPI(response.data.data)
    } catch{
      setPortfolioAPI("erro")
    }
    }
    portfolio()
  },[])
  
  if(PortfolioAPI==="erro"){
    return(
      <Vazio/>
    )
    }
    else{
    return (
      <>
        <motion.div
        initial='init'
        animate='show'
        exit='exit'
        variants={animations2}
        id="Portfolio"
        >
        <ul>
         {PortfolioAPI.map(api=>(
           <li key={api.id}>
            <h2>{api.titulo}</h2>
            <p>{api.description}</p>
          </li>
         ))}
         </ul>
        </motion.div>
        </>
    )
         }
}