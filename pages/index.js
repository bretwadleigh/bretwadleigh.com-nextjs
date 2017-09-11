/* global initTabs */
import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import StickyNav from '../components/StickyNav'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'http://bretwadleigh.com/data/wp-json/wp/v2/'
    const postParams = 'posts?filter[posts_per_page]=2'
    const experienceParams =
      'experience?filter[orderby]=date&order=asc&per_page=2'
    const postRes = await fetch(apiUrl + postParams)
    const posts = await postRes.json()
    const expRes = await fetch(apiUrl + experienceParams)
    const experience = await expRes.json()
    return { posts, experience }
  }

  componentDidMount () {
    // initTabs()
    logPageView()
  }

  render () {
    return (
      <Layout
      headerType='interior'
        title='Bret Wadleigh - Front-End Web Developer'
        description='Experienced PHP Full-Stack Developer with 10 years of Front-End Development on Java, C# and PHP'
      >
        <main>
          <StickyNav />
          <div className='section banner valign-wrapper' id='banner'>
            <div className='valign container'>
              <div className='row center'>
              <div className='col m12 hide-on-small-only'>
                <div className='card horizontal'>
                  <div className='card-image btw-header'>
                    <img src='/static/img/btw-header.jpg' />
                  </div>
                  <div className='card-stacked'>
                    <div className='card-content'>
                      <p>
                        Hi, I&apos;m Bret, a Web Developer based in San
                        Francisco, CA. I&apos;m a father of two who enjoys
                        surfing and taking my girls to the beach on my days off.
                      </p>
                    </div>
                    <div className='card-action'>
                      <a className='btn amber' href='https://www.linkedin.com/in/bret-wadleigh-28603b2/'>
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
                <div className='col m6'>
                  <div className='card indigo darken-1'>
                    <div className='card-content white-text'>
                      <span className='card-title'>Latest Posts</span>
                      <ul>
                        {this.props.posts.map(function (post, i) {
                          return (
                            <li>
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
                <div className='col m6'>
                  <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                      <span className='card-title'>Experience</span>
                      <ul>
                        {this.props.experience.map(function (exp, i) {
                          return (
                            <li>
                              <a className='white-text'
                                href={`/experience/${exp.id}`}>
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
                        <span>View All</span>
                        <span className='hide-on-small-only'>My Experience</span>
                      </a>
                    </div>
                  </div>
                </div>
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
            .tab a {
              font-size: 18px;
            }
            .btw-header {
              overflow: hidden;
            }
            .btw-header img {
              top: -50px;
            }
            .card.horizontal {
              max-height: 200px;
            }
            .card.horizontal .card-content p {
              padding: 15px 25px 20px;
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}
