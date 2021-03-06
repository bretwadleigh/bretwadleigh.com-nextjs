import React from 'react'
import Layout from '../components/Layout'
// import StickyNav from '../components/StickyNav'
import Error404 from '../components/Error404'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    const apiUrl = 'https://bretwadleigh.com/data/wp-json/wp/v2/'
    const params = `posts/${id}`
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    logPageView()
  }

  titleTag (props) {
    if (this.props.data.length > 0) {
      return `${
        this.props.data.title.rendered
      } | Bret Wadleigh | Front-End Web Developer`
    }
    return `News | Bret Wadleigh | Front-End Web Developer`
  }

  descriptionTag (props) {
    if (this.props.data.length > 0) {
      return `${this.props.data.title.rendered}`
    }
    return ` `
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title={this.titleTag()}
        description={this.descriptionTag()}
      >
        {this.props.data.length === 0 ? (
          <Error404 />
        ) : (
          <main className='single-post'>
            <div className='container'>
              <h1
                dangerouslySetInnerHTML={{
                  __html: this.props.data.title.rendered
                }}
              />
              <div className='row'>
                <div
                  className='col s12 flow-text'
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.content.rendered
                  }}
                />
              </div>
            </div>
          </main>
        )}
      </Layout>
    )
  }
}
