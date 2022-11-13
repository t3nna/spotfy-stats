import React from 'react';

function FirstPlaceMediaItem({item, type}) {
    return (

        <div className="firs-place-media">
            {
                type === 'tracks' ?
                    <>
                        <img src={item.album.images[0].url} alt=""/>
                        <div className="media-desc-primary">
                            <p className="fs-700 fw-medium | media-desc-primary__place">#{item.place}</p>
                            <div>

                                <h2 className="fs-secondary-heading fw-bold | media-desc-primary__name">{item.name}</h2>
                                <h3 className="fs-third-heading fw-bold | media-desc-primary__author ">{item.artists[0].name}</h3>
                            </div>

                        </div>
                    </>
                    :
                    <>
                        {/*<img src={item.images[0].url} alt=""/>*/}
                        <div className="media-desc-primary">
                            <p className="fs-700 fw-medium | media-desc-primary__place">#{item.place}</p>
                            <div>

                                <h2 className="fs-secondary-heading fw-bold | media-desc-primary__name">{item.name}</h2>
                                {/*<h3 className="fs-third-heading fw-bold | media-desc-primary__author ">{item.genres[0]}</h3>*/}
                            </div>

                        </div>
                    </>
            }

        </div>
    );
}

export default FirstPlaceMediaItem;