import React from 'react';

function AccentMediaItem({item}) {
    return (
        <li>
            <img src={item.album.images[0].url} alt=""/>
            <div className="media-desc">

                <h2 className="media-desc__name | fs-400 fw-bold">
                    <span className="media-desc__place">#{item.place} </span>
                    {item?.name}
                </h2>
                <h3 className="media-desc__author | fs-300 fw-bold">{item?.artists[0].name}</h3>
            </div>
        </li>
    );
}

export default AccentMediaItem;