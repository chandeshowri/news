import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


export default function Detail() {
    let {id} =useParams([])
    let [post, setPost] = useState()
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?category=general&apiKey=148036c85b5b416ab6b7d8e2820c6194/${id}`)
      .then(res => {
        console.log(res.data.articles);
        setPost(res.data.articles);
      });
  }, [])
  return (
    <>
  {post.map((a)=>(
    <Link to={`/Detail/${a.id}`}>  <h5>sdds
    {post.title}</h5></Link>
  
  ))}
      
    </>
  )
}
