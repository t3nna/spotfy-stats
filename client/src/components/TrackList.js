import React, {useState} from 'react';
import SelectButton from "./SelectButton";
import FirstPlaceMediaItem from "./FirstPlaceMediaItem";
import AccentMediaItem from "./AccentMediaItem";
import withData from "./hoc/withData";
import FeaturedMediaItem from "./FeaturedMediaItem";

function TrackList({data, selectType, setSelectType, selectTime, setSelectTime}) {


    return (
        <>
            <section className={''}>
                <div className="container flow spotify-top-header">
                    <h1 className={'fs-primary-heading fw-bold'}>My Spotify Top 50</h1>
                    <div className="parameters | fs-550 fw-medium">
                        <SelectButton select={selectType} setSelect={setSelectType} options={['artists', 'tracks']}/>

                        of the past

                        <SelectButton select={selectTime} setSelect={setSelectTime}
                                      options={['long_term', 'medium_term', 'short_term']}/>


                    </div>

                </div>
            </section>
            <section>
                <div className="container primary-media-list">

                    {
                        data.topOne.map(item => (
                            <FirstPlaceMediaItem item={item} type={selectType}/>

                        ))
                        //
                    }
                    <ul className="featured-media">
                        {
                            data &&
                            data.featured.map(item =>

                                <FeaturedMediaItem item={item}/>
                            )
                        }

                    </ul>
                </div>
            </section>

            <section className={'accent-media-section'}>
                <div className=" container ">
                    <ul className={'accent-media-list'}>

                        {
                            data.tracks.map(item =>

                                <AccentMediaItem item={item}/>
                            )
                        }


                        <li>
                            <img src="https://i.scdn.co/image/ab67616d0000b2739efda673310de265a2c1cf1f" alt=""/>
                            <div className="media-desc">

                                <h2 className="media-desc__name | fs-400 fw-bold">
                                    <span className="media-desc__place">#1 </span>
                                    Freaks
                                </h2>
                                <h3 className="media-desc__author | fs-300 fw-bold">Surf Curse Lorem ipsum dolor
                                    sit.</h3>
                            </div>
                        </li>


                    </ul>
                </div>
            </section>
        </>
    );
}

const TrackListWithData = withData()(TrackList)

export default TrackList;
