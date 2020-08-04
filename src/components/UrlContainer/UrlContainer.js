import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => { 
  const urlEls = props.urls.map(url => {
    console.log(url.urls[0])
    return (
      <div className="url">
        <h3>{url.urls[0].title}</h3>
        <a href={url.urls[0].short_url} target="blank">{url.urls[0].short_url}</a>
        <p>{url.urls[0].long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
