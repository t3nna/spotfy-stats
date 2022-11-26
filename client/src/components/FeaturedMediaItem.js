import React from 'react';

function FeaturedMediaItem({item, type}) {
    return (
        <li>
            {
                type === 'tracks' ?
                    <>
                        <div className="media-desc">

                            <a href={item.external_urls.spotify} className="media-desc__name | fs-third-heading fw-bold">
                                <span className="media-desc__place">#{item.place} </span>
                                {item?.name}
                            </a>
                            <a href={item.artists[0].external_urls.spotify} className="media-desc__author | fs-400 fw-bold">{item?.artists[0].name}</a>
                        </div>
                        <img src={item.album.images[0].url} alt=""/>

                    </>
                    :
                    <>
                        <div className="media-desc">

                            <h2 className="media-desc__name | fs-third-heading fw-bold">
                                <span className="media-desc__place">#{item.place} </span>
                                {item.name}
                            </h2>
                            {/*<h3 className="media-desc__author | fs-400 fw-bold">{item.name}</h3>*/}
                        </div>
                        <img src={item.images[0].url} alt=""/>

                    </>
            }
        </li>
    );
}

export default FeaturedMediaItem;