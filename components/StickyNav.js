/* global stickyNav */
import React, { Component } from 'react'
import Link from 'next/link'

class StickyNav extends Component {
  componentDidMount () {
    stickyNav()
  }

  render () {
    return (
      <div className='section bottom-nav'>
        <ul className='hide-on-med-and-down'>
          <li><Link prefetch href='/experience' title='Experience'><a>Experience</a></Link></li>
          <li><Link prefetch href='/education' title='Education'><a>Education</a></Link></li>
          <li><Link prefetch href='/posts' title='Posts'><a>Posts</a></Link> </li>
          <li><Link prefetch href='/portfolio' title='Portfolio'><a>Portfolio</a></Link></li>
        </ul>
        <style jsx>
          {`
            ul li {
              float: left;
              line-height: 8px;
              padding: 6px 0 0 0;
            }
            ul li a {
              color: #fff;
              text-transform: uppercase;
              font-size: 22px;
              font-family: 'Roboto', serif;
              cursor: pointer;
              padding: 6px 12px 7px 12px;
              line-height: 19px;
              transition: .3s ease-in-out;
              font-weight: 600;
            }
            .bottom-nav ul li a:hover {
              background-color: #9DA5E0;
            }
          `}
        </style>
      </div>
    )
  }
}

export default StickyNav
