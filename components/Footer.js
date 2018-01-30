import React, { Component } from 'react'
import OutLink from '../components/OutLink'
import Gravatar from 'react-gravatar'

class Footer extends Component {
  currentYear () {
    let dateToday = new Date()
    let currentYear = dateToday.getFullYear()
    return currentYear
  }

  render () {
    return (
      <footer className='page-footer light-blue lighten-1'>
        <div className='container'>
          <div className='row white-text'>
            <div className='col s12 m6 footer-contact'>
              <h5 className='light'>Contact</h5>
              <address>
                <p typeof='schema:PostalAddress'>
                  <span property='schema:name'>
                    Bret Wadleigh
                    <br />
                  </span>
                  <span
                    className='streetAddress'
                    property='schema:streetAddress'
                  >
                    217 14th Ave.
                    <br />
                  </span>
                  <span property='schema:addressLocality'>San Francisco</span>,{' '}
                  <abbr title='California' property='schema:addressRegion'>
                    &nbsp;CA
                  </abbr>{' '}
                  <span className='postalCode' property='schema:postalCode'>
                    94118
                  </span>{' '}
                  <abbr
                    className='addressCountry'
                    property='schema:addressCountry'
                  >
                    USA
                  </abbr>
                  <br />
                  <a
                    href='tel:+14153785426'
                    property='telephone'
                    className='white-text'
                  >
                    415 378 5426
                  </a>
                  <br />
                  <a
                    href='mailto:bretwadleigh@yahoo.com'
                    property='email'
                    className='white-text'
                  >
                    bretwadleigh@yahoo.com
                  </a>
                </p>
              </address>
              <a href='/' className='footer-photo'>
                <Gravatar email='bretwadleigh@yahoo.com' size={100} />
              </a>
            </div>
            <div className='col s12 m6 hide-on-small-only'>
              <h5 className='light'>This Site:</h5>
              <p>
                <span>Built using </span>
                <OutLink
                  label='NextJS'
                  to='https://github.com/zeit/next.js/'
                  title='NextJs'
                >
                  NextJs
                </OutLink>
                <span> and </span>
                <OutLink
                  label='MaterializeCSS'
                  to='http://materializecss.com/'
                  title='Materialize.css'
                >
                  materialize&#46;css
                </OutLink>
                <span>, a </span>
                <OutLink
                  label='MaterialDesign'
                  to='https://material.io/'
                  title='Material Design'
                >
                  Material Design CSS framework.
                </OutLink>
              </p>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            <div className='row hide-on-med-and-up center'>
              <span>Built using </span>
              <OutLink
                label='NextJS'
                to='https://github.com/zeit/next.js/'
                title='NextJs'
              >
                NextJs and
              </OutLink>
              <OutLink
                label='MaterializeCSS'
                to='http://materializecss.com/'
                title='Materialize.css'
              >
                materialize&#46;css,
              </OutLink>
              <span>a CSS Framework based on </span>
              <OutLink
                label='MaterialDesign'
                to='https://material.io/'
                title='Material Design'
              >
                Material Design
              </OutLink>
            </div>
            <div className='copyright'>
              © <span id='copyright-date'>{this.currentYear()}</span>{' '}
              bretwadleigh.net
            </div>
          </div>

          <a
            className='hide-on-med-and-down'
            href='https://github.com/bretwadleigh/bretwadleigh.com-nextjs'
            title='This Site on Github'
            target='_blank'
          >
            This Site on Github
          </a>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
               (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
               m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
               })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
               ga('create', 'UA-102723554-2', 'auto');
               ga('send', 'pageview');
      `
          }}
        />
      </footer>
    )
  }
}

export default Footer
