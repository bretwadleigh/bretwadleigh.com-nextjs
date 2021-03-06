import React from 'react'
import Layout from '../components/Layout'
// import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import Exp from '../components/Exp'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://bretwadleigh.com/data/wp-json/wp/v2/'
    const params = 'experience?filter[orderby]=date&order=desc&_embed&per_page=11'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    logPageView()
    featureImages()
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title='Experience | Bret Wadleigh | Front-End Web Developer'
        description='Bret Wadleigh&quot;s Work Experience'
      >
        <main id='experience'>
          <Title
            title='Experience'
            imgPath='/static/img/campus-11.jpg'
            posY='-44vh'
          />
          <div className='container'>
            <div className='section'>
              {this.props.data.map(function (post, i) {
                return (
                  <Exp
                    slug={post.slug}
                    id={post.id}
                    title={post.title.rendered}
                    content={post.content.rendered}
                    excerpt={post.excerpt.rendered}
                    date={new Date(post.date)}
                    imageId={post.featured_media}
                    key={i}
                  />
                )
              })}
            </div>
          </div>
          <style jsx>{`
            .featured-image-cell img {
              width: 100%;
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}
