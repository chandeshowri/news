import React from 'react'
import Mainindia from '../component/Mainindia';
import Indiablock from './../component/Indiablock';


function India() {
  return (
    <>
    <Mainindia/>
    <Indiablock title="Business" slug="business"/>
    <Indiablock  title="Health" slug="health"/>
    <Indiablock  title="Science" slug="science"/>
    <Indiablock  title="Technology" slug="technology"/>
    <Indiablock  title="Sports" slug="sports"/>
    <Indiablock  title="Entertainment" slug="entertainment"/>
    
    </>
  )
}

export default India
