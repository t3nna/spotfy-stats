import React, {useEffect, useState} from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import SelectButton from "./SelectButton";
import AccentMediaItem from "./AccentMediaItem";
import FeaturedMediaItem from "./FeaturedMediaItem";
import FirstPlaceMediaItem from "./FirstPlaceMediaItem";
import formatData from "./tools/formatData";

const spotifyApi = new SpotifyWebApi({
    clientId: '2b08d7b2b91a475da8192bc5cbb439b8'
})
export default function Account({code}) {
    const accessToken = useAuth(code)
    const [searchResults, setSearchResults] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
        // spotifyApi.getMyTopArtists()
        //     .then(res=>{
        //         console.log(res)
        //     })

    }, [accessToken]);

    useEffect(() => {

        if (!accessToken) return


        axios.get('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                "Content-Type": 'application/json',
                "Host": "api.spotify.com"
            }
        })
            .then(res => {

                let formated = formatData(res.data.items)

                setData(formated)

            })
            .catch(err => {
                console.log(err)
            })


    }, [accessToken]);

    console.log(data)

    const [selectType, setSelectType] = useState('Tracks');
    const [selectTime, setSelectTime] = useState('2 years');


    return (
        <>
            <section className={''}>
                <div className="container flow spotify-top-header">
                    <h1 className={'fs-primary-heading fw-bold'}>My Spotify Top 50</h1>
                    <div className="parameters | fs-550 fw-medium">
                        <SelectButton select={selectType} setSelect={setSelectType} options={['Albums', 'Tracks']}/>

                        of the past

                        <SelectButton select={selectTime} setSelect={setSelectTime} options={['2 years', 'year', '6 months']}/>


                    </div>

                </div>
            </section>
            <section>
                <div className="container primary-media-list">
                    <FirstPlaceMediaItem/>
                    <ul className="featured-media">
                        <FeaturedMediaItem/>
                        <FeaturedMediaItem/>
                        <FeaturedMediaItem/>
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

                    </ul>
                </div>
            </section>

            <section className={'accent-media-section'}>
                <div className=" container ">
                    <ul className={'accent-media-list'}>

                        <AccentMediaItem/>
                        <AccentMediaItem/>
                        <AccentMediaItem/>
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
    )
}