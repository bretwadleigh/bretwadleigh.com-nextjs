import React from 'react'
import Layout from '../components/Layout'
// import Hero from '../components/Hero'
// import StickyNav from '../components/StickyNav'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'http://bretwadleigh.com/data/wp-json/wp/v2/'
    const postParams = 'posts?filter[posts_per_page]=2'
    const experienceParams =
      'experience?filter[orderby]=date&order=asc&per_page=2'
    const portfolioParams =
      'portfolio?filter[orderby]=date&order=desc&per_page=4'
    const postRes = await fetch(apiUrl + postParams)
    const posts = await postRes.json()
    const expRes = await fetch(apiUrl + experienceParams)
    const experience = await expRes.json()
    const porRes = await fetch(apiUrl + portfolioParams)
    const portfolio = await porRes.json()
    return { posts, experience, portfolio }
  }

  componentDidMount () {
    // initTabs()
    logPageView()
    // featureImages()
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title='Bret Wadleigh - Front-End Web Developer'
        description='Experienced PHP Full-Stack Developer with 10 years of Front-End Development on Java, C# and PHP'
      >
        <main>
        <div id='index-banner' className='parallax-container'>
            <div className='section no-pad-bot'>
              <div className='container'>

                <h1 className='header center light-blue-text'>Committed</h1>
                <div className='row center'>
                  <h5 className='header col s12 light dark-bg white-text'>Building Applications and Websites<br/>using Javascript and PHP</h5>
                </div>
                <div className='row center'>
                <br />
                  <a href='/portfolio' id='download-button' className='btn-large waves-effect waves-light light-blue'>View My Portfolio</a>
                </div>
              </div>
            </div>
            <div className='parallax'><img src='/static/img/Slide_170_fb_bret.jpg' alt='Me Samoa 2009' /></div>
          </div>
          <div className='section banner valign-wrapper' id='banner'>
            <div className='valign container'>
              <div className='row center'>
                <div className='col m12 hide-on-small-only top-section'>
                  <div className='card horizontal'>
                    <div className='card-image btw-header'>
                      <img src='/static/img/bret_nila_sept2017.png' />
                    </div>
                    <div className='card-stacked'>
                      <div className='card-content' id='twitter-card'>
                        <p id='tweet-container'>
                          Hi, I&apos;m Bret, a Web Developer based in San
                          Francisco, CA. I&apos;m a father of two who enjoys
                          surfing and taking my girls to the beach on my days
                          off.
                        </p>
                      </div>
                      <div className='card-action'>
                        <a
                          className='btn amber'
                          href='https://www.linkedin.com/in/bret-wadleigh-28603b2/'
                        >
                          <i className='large material-icons right'>
                            person_add
                          </i>
                          <span>Look me up on LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='divider' />
              <div className='row light'>
                <div className='col m6 homepage-item'>
                  <div className='card indigo darken-1'>
                    <div className='card-content white-text'>
                      <span className='card-title'>Latest Posts</span>
                      <ul>
                        {this.props.posts.map(function (post, i) {
                          return (
                            <li key={`li_${i}`}>
                              <a
                                className='white-text'
                                href={`/posts/${post.id}`}
                              >
                                {post.title.rendered}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div className='card-action'>
                      <a href='/posts' className='btn'>
                        <i className='large material-icons right'>
                          chevron_right
                        </i>
                        View All Posts
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col m6 homepage-item'>
                  <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                      <span className='card-title'>Experience</span>
                      <ul>
                        {this.props.experience.map(function (exp, i) {
                          return (
                            <li key={`li_${i}`}>
                              <a
                                className='white-text'
                                href={`/experience/${exp.id}`}
                              >
                                {exp.title.rendered}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div className='card-action'>
                      <a href='/experience' className='btn'>
                        <i className='large material-icons right'>
                          chevron_right
                        </i>
                        <span>
                          View All Experience
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='divider' />
              <div className='row hp-portfolio'>
                <h2>Portfolio</h2>
                {this.props.portfolio.map(function (p, i) {
                  return (
                    <span>
                      <div className='col m6'>
                        <div className='card'>
                          <div className='card-content'>
                            <span class='card-title'>
                              <a href={`/portfolio#section_${p.id}`}>
                                {p.title.rendered}
                              </a>
                            </span>
                            <p>
                              <a href={`/portfolio#section_${p.id}`}>
                                <img
                                  data-imageid={p.featured_media}
                                  alt={p.title.rendered}
                                  id={`fi_${p.featured_media}`}
                                  className='featureImage'
                                />
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div id={`divider_${i}`} />
                    </span>
                  )
                })}
              
              </div>
            </div>
          </div>

          <style jsx>{`
            @media screen and (max-width: 500px) {
              h2 img {
                display: none;
              }
              .btn {
                padding: 0 0.5rem;
              }
            }
            #san-damiano {
              min-height: 708px;
            }
            blockquote {
              font-size: 130%;
            }
            @media screen and (max-width: 1088px) {
              #san-damiano {
                background-position-x: 3%;
                background-size: 481px;
              }
            }
            .dark-bg {
              background-color: rgba(0, 0, 0, 0.3);
            }
            .tab a {
              font-size: 18px;
            }
            .btw-header {
              overflow: hidden;
            }
            .btw-header img {
              top: -40px;
              left: 10px;
            }
            .card.horizontal {
              min-height: 275px;
            }
            .card.horizontal .card-content p {
              padding: 15px 25px 0;
            }
            .card-action .btn {
              width: 100%;
            }
            #divider_1 {
              clear: both;
            }
            .clear-both {
              clear: both;
            }
            img.featureImage {
              width: 100%;
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}
