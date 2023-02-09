import React from 'react'

function Footer() {
  return (
    <>
    <div className='container bg-light text-dark border-top border-3 py-4'>
      <div className='row'>
        <div className='col-lg-3'>
            <p><img src={require('../images/logo.png')}/></p>
            <p>Email : info@example.com</p>
            <p>Phone : 00249 123 333 719</p>
        </div>

        <div className='col-lg-3'>
        <h4>Quick Links</h4>
        <ul>
            <li>Marketing</li>
            <li>Motivation</li>
            <li>Politics</li>
            <li>Travel</li>
            <li>Technolog</li>
        </ul>
        </div>
        <div className='col-lg-3'>
            <h4>Entertainment</h4>
            <ul>
                <li>Hollywood</li>
                <li>Music</li>
                <li>Videos</li>
                <li>TV News</li>
                <li>Celebrity News</li>
            </ul>
        </div>
        <div className='col-lg-3'>
            <h4>Overview</h4>
            <ul className='ovli '>
                <li>Business</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Marketing</li>
            </ul>
            
        </div>
      </div>
    </div>
    <div className='container bg-primary text-light text-center py-2'>
    <div className='row'>
        <p>copypright @News Portal, 2021</p>
    </div>
    </div>
    </>
  )
}

export default Footer
