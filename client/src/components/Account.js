import React, {useEffect, useState} from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

// const spotifyApi = new SpotifyWebApi({
//     clientId: '2b08d7b2b91a475da8192bc5cbb439b8'
// })
export default function Account({code}) {
    // const accessToken = useAuth(code)
    const [search, setSearch] = useState('nirvana')
    const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     if (!accessToken) return
    //     spotifyApi.setAccessToken(accessToken)
    //     // spotifyApi.getMyTopArtists()
    //     //     .then(res=>{
    //     //         console.log(res)
    //     //     })
    //
    // }, [accessToken]);
    //
    // useEffect(() => {
    //     if (!search) return
    //
    //     if (!accessToken) return
    //
    //     spotifyApi.searchTracks(search)
    //         .then(res => {
    //             console.log(res)
    //         })
    //     // spotifyApi.getUserPlaylists('t3nna')
    //     //     .then(res=>{
    //     //         console.log(res)
    //     //     })
    //     //     .catch(err=>{
    //     //         console.log(err)
    //     //     })
    //     axios.get('https://api.spotify.com/v1/me/top/tracks', {
    //         headers: {
    //             Authorization: 'Bearer ' + accessToken,
    //             "Content-Type": 'application/json',
    //             "Host": "api.spotify.com"
    //         }
    //     })
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //
    //
    // }, [accessToken, search]);

    const [select, setSelect] = useState('Tracks');
    const [selectOpen, setSelectOpen] = useState(false);
    const [options, setOptions] = useState(['Tracks', 'Albums']);


    return (
        <>
            <section className={''}>
                <div className="container">
                    <h1 className={'fs-primary-heading fw-bold'}>My Spotify Top 50</h1>
                    <div className="parameters | fs-550">
                        <div className="select-container">

                            <button className={'btn-select'}>{select}</button>
                            <div className="select-options open">
                                {
                                    options.map((item, index) => (
                                        <p className={'fw-medium fs-500'} key={index} onClick={()=>setSelect(item)}>{item}</p>
                                    ))
                                }
                            </div>
                        </div>

                        of the past
                        <button className={'btn-select'}>6 Months</button>
                    </div>

                </div>
            </section>
            <section>
                <div className="container primary-media-list">
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
                    <ul className="featured-media">
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

            <section>
                <div className=" container ">
                    <ul className={'accent-media-list'}>
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
                        <li>
                            <img src="https://i.scdn.co/image/ab67616d0000b2739efda673310de265a2c1cf1f" alt=""/>
                            <div className="media-desc">

                                <h2 className="media-desc__name | fs-400 fw-bold">
                                    <span className="media-desc__place">#1 </span>
                                    Freaks
                                </h2>
                                <h3 className="media-desc__author | fs-300 fw-bold">Surf Curse Lorem.</h3>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>

        </>
    )
}