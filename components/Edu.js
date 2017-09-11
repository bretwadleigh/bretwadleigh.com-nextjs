import React from 'react'

const Edu = props =>
  <div className='row' key={props.i}>
    <div className='col s2 featured-image-cell'>
      <img className='featureImage' src={props.image.source_url} />
    </div>
    <div className='col s10'>
      <h3 style={{ marginBottom: '0', color: '#9DA5E0' }}>
        {props.title}
      </h3>
      <div
        className='flow-text'
        dangerouslySetInnerHTML={{
          __html: props.excerpt
        }}
      />
    </div>

    <style jsx>
      {`
        span {
          color: #fff;
          padding-left: 0px;
          margin-bottom: 8px;
        }
        span.more-link {
          padding-left: 16px;
        }
        .featured-image-cell img {
          width: 100%;
        }
        @media screen and (max-width: 600px) {
          h3 {
            font-size: 2rem;
          }
        }
      `}

    </style>
  </div>

export default Edu
