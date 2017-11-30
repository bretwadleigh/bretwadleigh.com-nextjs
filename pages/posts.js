import React from 'react'
import Layout from '../components/Layout'
// import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import Blog from '../components/Blog'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://bretwadleigh.com/data/wp-json/wp/v2/'
    const params = 'posts'
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
        title='Posts | Bret Wadleigh | Front-End Web Developer'
        description='Attempts to be useful and funny'
      >
        <main id='posts'>
          <Title
            title='Posts'
            imgPath='/static/img/campus-11.jpg'
            posY='-44vh'
          />
          <div className='container'>
            <div className='section'>
              {this.props.data.map(function (post, i) {
                return (
                  <Blog
                    id={post.id}
                    slug={post.slug}
                    title={post.title.rendered}
                    content={post.content.rendered}
                    excerpt={post.excerpt.rendered}
                    date={new Date(post.date)}
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
