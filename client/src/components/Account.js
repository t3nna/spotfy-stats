import React, {useEffect, useState} from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import formatData from "./tools/formatData";
import TrackList from "./TrackList";
import {useDispatch, useSelector} from "react-redux";
import {fetchTracks} from "./features/tracksSlice";
import {setAccessToken} from "./features/paramSlice";
import {fetchArtists} from "./features/artistsSlice";

const spotifyApi = new SpotifyWebApi({
    clientId: '2b08d7b2b91a475da8192bc5cbb439b8'
})
export default function Account({code}) {
    const accessToken = useAuth(code)
    const [dataStatus, setDataStatus] = useState('loading');
    const [data, setData] = useState([]);
    const [selectType, setSelectType] = useState('tracks');
    const [selectTime, setSelectTime] = useState('long_term');

    const dispatch = useDispatch()
    const tracksStatus = useSelector(state => state.tracks.status)
    const artistsStatus = useSelector(state => state.artists.status)
    const timeRange = useSelector(state => state.param.timeRange)

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
        dispatch(setAccessToken(accessToken))


    }, [accessToken]);

    const reduxAccessToken = useSelector(state => state.param.accessToken)

    useEffect(() => {
        if (!reduxAccessToken) return
        if (tracksStatus === 'idle'){
            dispatch(fetchTracks())
            console.log('effect')
        }

    }, [ reduxAccessToken, tracksStatus, timeRange]);
    // fetch Artists
    useEffect(() => {
        if (!reduxAccessToken) return
        if (artistsStatus === 'idle'){
            dispatch(fetchArtists())
            console.log('effect')
        }

    }, [ reduxAccessToken, artistsStatus, timeRange]);


    useEffect(() => {
        setDataStatus('loading')
        if (!accessToken) return


        axios.get(`https://api.spotify.com/v1/me/top/${selectType}?limit=50&time_range=${selectTime}`, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                "Content-Type": 'application/json',
                "Host": "api.spotify.com"
            }
        })
            .then(res => {

                let formated = formatData(res.data.items)

                setData(formated)
                setDataStatus('succeeded')

            })
            .catch(err => {
                console.log(err)
            })


    }, [accessToken, selectTime, selectType]);

    console.log(data)


    return (

        <>
            {
                dataStatus === 'succeeded' ? (

                        <TrackList data={data} selectType={selectType} setSelectType={setSelectType} selectTime={selectTime}
                                   setSelectTime={setSelectTime}/>
                    ) :
                    <h1>
                        {dataStatus}
                    </h1>
            }
        </>
    )
}
