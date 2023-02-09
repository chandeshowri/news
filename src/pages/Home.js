import React from 'react';
import Block from '../component/Block';
import Main from '../component/Main';

function Home() {
  return (
    <>
    <Main/>
    <Block title="Business" slug="business"/>
    <Block title="Health" slug="health"/>
    <Block title="Science" slug="science"/>
    <Block title="Technology" slug="technology"/>
    <Block title="Sports" slug="sports"/>
    <Block title="Entertainment" slug="entertainment"/>
    
    </>
  )
}

export default Home
