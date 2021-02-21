import React from 'react';

const Gif = ({title, url, id}) => {
    return (
        <div className="gif">
              <img className="responsive-image" src={url} alt={title} />
              <h3 className="gif__title">{title}</h3>
        </div>
    )
}


export default Gif