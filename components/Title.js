import React, { Component } from 'react'

class Title extends Component {
  render () {
    return (
      <section className='interior-page-title valign-wrapper'>
        <h1 className='center light valign'>{this.props.title}</h1>
        <style jsx>{`
          h1 {
            margin: 0 auto;
            font-size: 4rem;
            padding: 16px 0 19px 0;
          }
          @media screen and (max-width: 799px) {
            h1 {
              font-size: 2rem;
              margin-bottom: -19px;
              background-size: 90px;
            }
          }
          @media screen and (min-width: 800px) {
            .interior-page-title {
            }
            h1 {
              margin: 0 auto;
              font-size: 4rem;
              padding: 35px 35px 0 35px;
            }
          }
        `}</style>

        <style jsx global>
          {`
            @media screen and (min-width: 800px) {
              #about .interior-page-title {
                background-image: url(/static/img/new/about-title.jpg);
              }
              #courses .interior-page-title {
                background-image: url(/static/img/new/courses-title.jpg);
              }
              #events .interior-page-title {
                background-image: url(/static/img/new/events-title.jpg);
                background-position-y: 0;
              }
              #single-event .interior-page-title {
                background-image: url(/static/img/new/events-title.jpg);
                background-position-y: 0;
              }
              #news .interior-page-title {
                background-image: url(/static/img/news-title.jpg);
              }
              #resources .interior-page-title {
                background-image: url(/static/img/new/resources-title.jpg);
                background-position-y: 97%;
              }
              #single-news .interior-page-title {
                background-image: url(/static/img/new/campus-11.jpg);
              }
              #team .interior-page-title {
                background-image: url(/static/img/new/team-title.jpg);
              }
            }
          `}
        </style>
      </section>
    )
  }
}

export default Title
