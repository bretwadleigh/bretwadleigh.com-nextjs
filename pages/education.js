import React from 'react'
import Layout from '../components/Layout'
// import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import Edu from '../components/Edu'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://bretwadleigh.com/data/wp-json/wp/v2/'
    const params = 'education?filter[orderby]=date&order=asc&_embed'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title='Education | Bret Wadleigh | Front-End Web Developer'
        description='Bret Wadleigh&quot;s Education'
      >
        <main id='education'>
          <Title
            title='Education'
            imgPath='/static/img/campus-11.jpg'
            posY='-44vh'
          />
          <div className='container'>
            <div className='section'>
              {this.props.data.map(function (post, i) {
                return (
                  <Edu
                    slug={post.slug}
                    id={post.id}
                    title={post.title.rendered}
                    content={post.content.rendered}
                    excerpt={post.excerpt.rendered}
                    date={new Date(post.date)}
                    image={post._embedded['wp:featuredmedia'][0]}
                    // homepageOnly={post.acf.homepage_only}
                    // url={post.acf.url}
                    key={i}
                  />
                )
              })}
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}
