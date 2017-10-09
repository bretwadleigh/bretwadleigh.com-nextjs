import React, { Component } from 'react'
import OutLink from '../components/OutLink'

class Footer extends Component {
  currentYear () {
    let dateToday = new Date()
    let currentYear = dateToday.getFullYear()
    return currentYear
  }

  render () {
    return (
      <footer className='page-footer'>
        <div className='container'>
          <div className='row white-text'>
            <div className='col s12 m6'>
              <h5 className='light'>Contact</h5>
              <address>
                <p typeof='schema:PostalAddress'>
                  <span property='schema:name'>
                  Bret Wadleigh
                  <br />
                  </span>
                  <span className='streetAddress' property='schema:streetAddress'>
                    217 14th Ave.
                    <br />
                  </span>
                  <span property='schema:addressLocality'>
                    San Francisco
                  </span>,{' '}
                  <abbr title='California' property='schema:addressRegion'>
                    CA
                  </abbr>{' '}
                  <span className='postalCode' property='schema:postalCode'>94118</span>{' '}
                  <abbr className='addressCountry' property='schema:addressCountry'>USA</abbr><br />
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
            </div>
            <div className='col s12 m6 hide-on-small-only'>
              <h5 className='light'>About This Site</h5>
              <p>
                <span>This site uses </span>
                <OutLink
                  label='NextJS'
                  to='https://github.com/zeit/next.js/'
                  title='NextJs'
                >
                  NextJs
                </OutLink>
                <span> - a Framework for server-rendered React apps, and </span>
                <OutLink
                  label='MaterializeCSS'
                  to='http://materializecss.com/'
                  title='Materialize.css'
                >
                  materialize&#46;css
                </OutLink>
                <span>, a CSS Framework based on </span>
                <OutLink
                  label='MaterialDesign'
                  to='https://material.io/'
                  title='Material Design'
                >
                  Material Design
                </OutLink>
                <span>
                  . The backend utilizes WP API, the WordPress REST API built
                  into the latest versions of WordPress.{' '}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            <div className='row hide-on-large-only center'>
            <span>This site uses </span>
            <OutLink
              label='NextJS'
              to='https://github.com/zeit/next.js/'
              title='NextJs'
            >
              NextJs
            </OutLink>
            <span> - a Framework for server-rendered React apps, and </span>
            <OutLink
              label='MaterializeCSS'
              to='http://materializecss.com/'
              title='Materialize.css'
            >
              materialize&#46;css
            </OutLink>
            <span>, a CSS Framework based on </span>
            <OutLink
              label='MaterialDesign'
              to='https://material.io/'
              title='Material Design'
            >
              Material Design
            </OutLink>
            <span>
              . The backend utilizes WP API, the WordPress REST API built
              into the latest versions of WordPress.{' '}
            </span>
            </div>
            © <span id='copyright-date'>{this.currentYear()}</span>{' '}
            bretwadleigh.com
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
