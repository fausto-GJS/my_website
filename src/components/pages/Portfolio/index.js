import React,{useEffect} from 'react'
import {motion} from 'framer-motion'
import animations2 from '../../effects/animations2'
import Gif from '../../../assets/imgs/developer.gif'
import api from '../../common/api'
export default function Portfolio() {
  
  useEffect(()=>{
    api.get('portfolio').then(res=>{
      console.log(res)
    })
  },[])

    return (
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
    )
}