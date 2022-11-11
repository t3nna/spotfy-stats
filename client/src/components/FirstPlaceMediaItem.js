import React from 'react';

function FirstPlaceMediaItem(props) {
    return (
        <div className="firs-place-media">
            <img src="https://i.scdn.co/image/ab67616d0000b2739efda673310de265a2c1cf1f" alt=""/>
            <div className="media-desc-primary">
                <p className="fs-700 fw-medium | media-desc-primary__place">#1</p>
                <div>

                    <h2 className="fs-secondary-heading fw-bold | media-desc-primary__name">Freaks</h2>
                    <h3 className="fs-third-heading fw-bold | media-desc-primary__author ">Surf Curse</h3>
                </div>

            </div>
        </div>
    );
}

export default FirstPlaceMediaItem;