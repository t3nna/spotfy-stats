import React from 'react';

function FeaturedMediaItem(props) {
    return (
        <li>
            <div className="media-desc">

                <h2 className="media-desc__name | fs-third-heading fw-bold">
                    <span className="media-desc__place">#1 </span>
                    Freaks
                </h2>
                <h3 className="media-desc__author | fs-400 fw-bold">Surf Curse Lorem t.</h3>
            </div>
            <img src="https://i.scdn.co/image/ab67616d0000b2739efda673310de265a2c1cf1f" alt=""/>
        </li>
    );
}

export default FeaturedMediaItem;