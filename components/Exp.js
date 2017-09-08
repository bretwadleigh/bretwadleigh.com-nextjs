import React from 'react'

const Exp = props =>
  <div className='row' key={props.i}>
    <div className='col s12'>
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
      <a className='btn waves-effect waves-light' href={`/experience/${props.id}`}>
      <i className="large material-icons right">chevron_right</i>
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
      `}

    </style>
  </div>

export default Exp
