import React from 'react'
import Layout from '../components/Layout'
import StickyNav from '../components/StickyNav'
import Title from '../components/Title'
import Exp from '../components/Exp'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'http://bretwadleigh-data.local/wp-json/wp/v2/'
    const params = 'experience?filter[orderby]=date&order=asc'
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
        title='Experience | Bret Wadleigh | Front-End Web Developer'
        description='Bret Wadleigh&quot;s Work Experience'
      >
        <main id='experience'>
          <StickyNav />
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
                    //homepageOnly={post.acf.homepage_only}
                    //url={post.acf.url}
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
