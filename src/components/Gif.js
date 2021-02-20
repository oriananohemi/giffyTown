import React from 'react';

const Gif = ({title, url, id}) => {
    return (
        <div>
              <span>{title}</span>
              <img src={url} alt={title} />
        </div>
    )
}


export default Gif