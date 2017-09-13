/* global initSideNav */
import React, { Component } from 'react'
import Link from 'next/link'
import OutLink from '../components/OutLink'

class Nav extends Component {
  componentDidMount () {
    initSideNav()
  }

  render () {
    return (
      <header className={this.props.headerType}>
        <div>
          <nav className='main-nav search-nav'>
            <div className='nav-wrapper'>
              <a href='/' className='brand-logo'>
                <img src='/static/img/logo-btw.png' />
              </a>
              <span className='headerText'>
                Bret Wadleigh - 
                <span className='hide-on-small-only'>
                Front-End
                </span>
                Web Developer
              </span>
              <a
                href='#'
                data-activates='mobile-demo'
                className='button-collapse'
              >
                <svg
                  viewBox='0 0 24 24'
                  fill='#000'
                  height='24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
                </svg>
              </a>
            </div>
          </nav>
        </div>
        <ul className='side-nav' id='mobile-demo' style={{ width: '300px' }}>
          <li className='logo'>
            <a href='/' className='brand-logo'>
              <img src='/static/img/logo-btw.png' />
            </a>
          </li>
          <li>
            {' '}<Link prefetch href='/experience'><a>Experience</a></Link>{' '}
          </li>
          <li>
            {' '}<Link prefetch href='/education'><a>Education</a></Link>{' '}
          </li>
          <li>
            <Link prefetch href='/posts' title='Posts'><a>Posts</a></Link>
          </li>
          <li>
            <Link prefetch href='/portfolio' title='Portfolio'>
              <a>Portfolio</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          @media screen and (max-width: 992px) {
            nav {
              height: 110px;
            }
          }
          @media screen and (max-width: 600px) {
            nav {
              height: 92px;
            }
            nav .brand-logo {
              margin-top: 11px;
              display: none;
            }
            nav .button-collapse {
              margin-top: 14px;
            }
            nav .headerText {
              top: 34px;
              left: 60px;
              font-size: 1em;
              line-height: 1.1em;
            }
          }
          @media screen and (max-width: 992px), screen and (max-height: 500px) {
            nav .brand-logo img {
              height: 70px;
              margin-top: 0;
            }
          }
          .side-nav .logo {
            height: 100px;
            background-color: #fff;
            border-bottom: 2px solid #78AFCE;
            text-align: center;
          }
          .side-nav .logo a:hover {
            background-color: #fff;
          }
          .side-nav .logo img {
            width: auto;
            height: 80px;
          }
        `}</style>
      </header>
    )
  }
}

export default Nav
