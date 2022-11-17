import React, {useEffect, useState} from 'react';
import SelectButton from "./SelectButton";
import FirstPlaceMediaItem from "./FirstPlaceMediaItem";
import AccentMediaItem from "./AccentMediaItem";
import withData from "./hoc/withData";
import FeaturedMediaItem from "./FeaturedMediaItem";
import {useDispatch, useSelector} from "react-redux";
import {setTimeRange, setTypeArtists, setTypeTracks} from "./features/paramSlice";
import { startFetchingTracks} from "./features/tracksSlice";
import {startFetchingArtists} from "./features/artistsSlice";

function TrackList() {
    let tracks = useSelector(state => state.tracks.data)
    let artists = useSelector(state => state.artists.data)
    let data


    const selectTypeGlobal = useSelector(state => state.param.type)

    const [selectType, setSelectType] = useState(selectTypeGlobal);

    if (selectType === 'tracks'){
        data=tracks
    }    else {
        data=artists
    }


    const dispatch = useDispatch()

    const selectTimeGlobal = useSelector(state => state.param.timeRange)
    const [selectTime, setSelectTime] = useState(selectTimeGlobal);





    const handleRequest = function(item){
        dispatch(startFetchingTracks())
        dispatch(startFetchingArtists())
        dispatch(setTimeRange(item))
        setSelectTime(item)
    }

    const handleTypeChange = function(item){
        setSelectType(item)
        if (item === 'tracks'){
            dispatch(setTypeTracks())
        }
        if(item === 'artists'){
            dispatch(setTypeArtists())
        }
    }



    return (
        <>
            <section className={''}>
                <div className="container flow spotify-top-header">
                    <h1 className={'fs-primary-heading fw-bold'}>My Spotify Top 50</h1>
                    <div className="parameters | fs-550 fw-medium">
                        <SelectButton select={selectType} setSelect={handleTypeChange} options={['artists', 'tracks']}/>

                        of the past

                        <SelectButton select={selectTime} setSelect={handleRequest}
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

                    }
                    <ul className="featured-media">
                        {
                            data.featured.map(item =>

                                <FeaturedMediaItem item={item} type={selectType}/>
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

                                <AccentMediaItem item={item} type={selectType}/>
                            )
                        }


                    </ul>
                </div>
            </section>
        </>
    );
}


export default TrackList;
