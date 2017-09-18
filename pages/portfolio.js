import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'http://bretwadleigh.com/data/wp-json/wp/v2/'
    const params = 'portfolio'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount = () => {
    logPageView()
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title='Portfolio Sites | Bret Wadleigh | Front-End Web Developer'
        description='The Catechetical Institute at Franciscan University exists to train and support the key catechists in any situation—priests, deacons, parents, or laity, whether professional or volunteer. Through conferences, online workshops, videos, audio, personal mentorship, and a wealth of resources produced by Franciscan University, all involved in the work of catechesis will find new ideas, new approaches, new techniques, and a new confidence to do the work of catechesis.'
      >
        <main id='portfolio'>
          <StickyNav />
          <Title
            title='Portfolio'
            imgPath='/static/img/campus-11.jpg'
            posY='-44vh'
          />
          <div className='section white-background-flourish'>
            <div className='container'>
              {this.props.data
                // .filter(post => post.slug === 'about-intro')
                .map(post =>
                  <div className='row valign-wrapper'>
                    <div className='col s12 portfolio-entry'>

                      <h2
                        style={{
                          align: 'center',
                          fontSize: '2em',
                          marginBottom: '0px'
                        }}
                      >
                        <a
                          name={`section_${post.id}`}
                          style={{ color: '#6AA374' }}
                        >
                          {`${post.title.rendered}:`}
                        </a>
                      </h2>
                      <div
                        key={post.id}
                        className='col s12 valign flow-text'
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered
                        }}
                      />
                    </div>
                  </div>
                )}
            </div>
          </div>
          <style jsx>{`
            .portfolio-entry {
              padding-bottom: 1.5rem;
              border-bottom: 1px solid #000;
              margin-bottom: 1.5rem;
            }
            .portfolio-entry h2 {
              margin-top: 0;
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}
