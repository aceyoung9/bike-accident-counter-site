import React from 'react'
import Link from 'gatsby-link'

const _calcDate = () => {
  const lastAccident = new Date(2017, 9, 27, 15);
  const today = new Date();

  return Math.floor( (today - lastAccident) / (1000 * 60 * 60 *24));
}

const Footer = () => (
  <footer>
    <a href='//aliceyoung.xyz'>aliceyoung.xyz</a>
  </footer>
)

const IndexPage = () => (
  <div>
    <h1>
      It has been <span className='highlight'>{_calcDate()} days</span> since my last bike accident 🙃
    </h1>
    <Footer/>
  </div>
)

export default IndexPage
