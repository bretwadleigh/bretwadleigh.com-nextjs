import React from 'react'

const Blog = props =>
  <div className='row' key={props.i}>
    <div className='col s12'>
      {props.homepageOnly
        ? <a href={props.url}>
          <h3 style={{ marginBottom: '0', color: '#6AA374' }}>
            {props.title}
          </h3>
        </a>
        : <a href={`/posts/${props.id}`}>
          <h3 style={{ marginBottom: '0', color: '#6AA374' }}>
            {props.title}
          </h3>
        </a>}
      <span>{`${props.date.getMonth() +
        1}/${props.date.getDate()}/${props.date.getFullYear()}`}</span>
      <div
        className='flow-text'
        dangerouslySetInnerHTML={{
          __html: props.excerpt
        }}
      />
    </div>
    {!props.homepageOnly &&
      <a className='btn' href={`/posts/${props.id}`}>
        <i className='large material-icons right'>chevron_right</i>
        <span className='white-text'>Read More</span>
      </a>}

    <style jsx>
      {`
        span {
          color: #998643;
          margin-bottom: 8px;
        }
        span.more-link {
          padding-left: 16px;
        }
        p.link-more {
          display: none !important;
        }
        @media screen and (max-width: 600px) {
          h3 {
            font-size: 2rem;
          }
        }
      `}

    </style>
  </div>

export default Blog
