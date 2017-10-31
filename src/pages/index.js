import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <a href='//aliceyoung.xyz'>aliceyoung.xyz</a>
)

const _calcDate = () => {
  const lastAccident = new Date(2017, 9, 27, 15);
  const today = new Date();
  
  return Math.floor( (today - lastAccident) / (1000 * 60 * 60 *24));
}

const IndexPage = () => (
  <div>
    <h1>{_calcDate()} days since my last bike accident 🙃</h1>
    <Footer/>
  </div>
)

export default IndexPage
