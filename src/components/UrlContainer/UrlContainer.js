import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => { 
  const urlEls = props.urls.map(url => {
    return url.urls.map((individualUrl) => {
      return (
        <div className="url">
          <h3>{individualUrl.title}</h3>
          <a href={individualUrl.short_url} target="blank">{individualUrl.short_url}</a>
          <p>{individualUrl.long_url}</p>
        </div>
      )
    })

  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
