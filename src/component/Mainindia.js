import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function MainIndia() {
  let [post, setPost] = useState([])
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=148036c85b5b416ab6b7d8e2820c6194')
      .then(res => {
        console.log(res.data.articles);
        setPost(res.data.articles);
      });
  }, [])

  return (

    <div className='container py-2 border-bottom border-3'>
      <div className='row'>
        {post.slice(0, 1).map((a) => (
          <div className='col-lg-8 py-2 '>
            <img src={a.urlToImage} class='w-100 xx' />
            <h3 className='py-3'>{a.title}</h3>
            <button className='btn btn-primary lg'>Read More</button>
          </div>
        ))}


        <div className='col-lg-4 py-2'>

          <h5 className='bs'>Most Viewed</h5>
          {post.slice(1, 6).map((a) => (
            <div className='box my-2 py-2 border-bottom'>
              <img src={a.urlToImage} class='w-100 zz' width='200px' />
              <h6 className='btitle ps-4'>{a.title}</h6>
             
            </div>
            
          ))}
          


        </div>
      </div>
      <div className='container border-top'>
        <div className='row py-2'>
          <h3 className='bs'>Recent News</h3>
          {post.slice(7, 10).map((a) =>

            <div className='col-lg-4'>
              <div> <img src={a.urlToImage} class='w-100' />
                <h5>{a.title}</h5></div>
                <button className='btn btn-primary sm'>Read More</button>
            </div>
          )}

        </div>
      </div>
    </div>

  )
}
