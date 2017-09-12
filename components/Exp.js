import React from 'react'

function getImage (obj) {
  console.log(obj)
  const url =
    'http://bretwadleigh-data.local/wp-content/uploads/2017/09/exp-marin-software-100x50.png'
  return { url }
}

const Exp = props =>
  <div className='row' key={props.i}>
    <div className='col s2 featured-image-cell'>
      <img
        className='featureImage'
        data-imageid={props.imageId}
        id={`fi_${props.imageId}`}
        style={{ marginTop: '1.46rem' }}
      />
    </div>
    <div className='col s10'>
      <a href={`/experience/${props.id}`}>
        <h3 style={{ marginBottom: '0', color: '#9DA5E0' }}>
          {props.title}
        </h3>
      </a>
      <div
        className='flow-text'
        dangerouslySetInnerHTML={{
          __html: props.excerpt
        }}
      />
      <a
        className='btn waves-effect waves-light'
        href={`/experience/${props.id}`}
      >
        <i className='large material-icons right'>chevron_right</i>
        <span>Read More</span>
      </a>
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
        @media screen and (max-width: 600px) {
          h3 {
            font-size: 2rem;
          }
        }
      `}

    </style>
  </div>

export default Exp
