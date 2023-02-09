import React from 'react'
import Mainchina from './../component/Mainchina';
import Chinablock from './../component/Chinablock';

function China() {
  return (
    <>
       
    <Mainchina/>
    <Chinablock title="Business" slug="business"/>
    <Chinablock title="Health" slug="health"/>
    <Chinablock title="Science" slug="science"/>
    <Chinablock title="Technology" slug="technology"/>
    <Chinablock title="Sports" slug="sports"/>
    <Chinablock title="Entertainment" slug="entertainment"/>
    
    
    </>
  )
}

export default China
