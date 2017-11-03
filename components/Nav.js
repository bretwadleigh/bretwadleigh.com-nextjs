/* global initSideNav */
import React, { Component } from 'react'
import Link from 'next/link'
import OutLink from '../components/OutLink'
//import Gravatar from 'react-gravatar'

class Nav extends Component {
  componentDidMount () {
    initSideNav()
  }

  render () {
    return (
      <header className={this.props.headerType}>
        <div>
        <nav className='light-blue lighten-1' role='navigation'>
          <div className='nav-wrapper container'>
            <a id='logo-container' href='/' className='brand-logo'>
              <span className='hide-on-small-only'>Bret Wadleigh | Developer</span>
              <span className='show-on-small hide-on-med-and-up'>bretwadleigh.net</span>
            </a>
            <ul className='right hide-on-med-and-down'>
            <li>
              <Link prefetch href='/experience' title='Experience'>
                <a>Experience</a>
              </Link>
            </li>
            <li>
              <Link prefetch href='/education' title='Education'>
                <a>Education</a>
              </Link>
            </li>
            <li>
              <Link prefetch href='/posts' title='Posts'>
                <a>Posts</a>
              </Link>{' '}
            </li>
            <li>
              <Link prefetch href='/portfolio' title='Portfolio'>
                <a>Portfolio</a>
              </Link>
            </li>
            </ul>
            <ul id='nav-mobile' className='side-nav' style={{transform: 'translateX(-100%)'}}>
            <li>
              <Link prefetch href='/experience' title='Experience'>
                <a>Experience</a>
              </Link>
            </li>
            <li>
              <Link prefetch href='/education' title='Education'>
                <a>Education</a>
              </Link>
            </li>
            <li>
              <Link prefetch href='/posts' title='Posts'>
                <a>Posts</a>
              </Link>{' '}
            </li>
            <li>
              <Link prefetch href='/portfolio' title='Portfolio'>
                <a>Portfolio</a>
              </Link>
            </li>
            </ul>
            <a href='#' data-activates='nav-mobile' className='button-collapse'><i className='material-icons'>menu</i></a>
          </div>
        </nav>
        </div>
        <style jsx>{`
        .no {
          margin: 0;
        }
        `}</style>
      </header>
    )
  }
}

export default Nav
