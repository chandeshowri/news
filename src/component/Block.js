import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Block(props) {
    let [post, setPost] = useState([])
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?category=${props.slug}&apiKey=148036c85b5b416ab6b7d8e2820c6194`)
      .then(res => {
        console.log(res.data.articles);
        setPost(res.data.articles);
      });
  }, [])
  return (
   
    <div className='container border-top border-3'>
        <div className='row py-2'>
          <h3 className='bs'>{props.title}</h3>
          {post.slice(6, 9).map((a) =>

            <div className='col-lg-4'>
              <div className='RNI'> <img src={a.urlToImage} class='w-100' />
                <h5>{a.title}</h5></div>
                <p>{a.content}</p>
                <button className='btn btn-primary sm'>Read More</button>
            </div>
          )}

        </div>
      </div>
      
   
  )
}

export default Block
