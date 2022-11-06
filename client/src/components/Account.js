import React, {useEffect, useState} from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
    clientId: '2b08d7b2b91a475da8192bc5cbb439b8'
})
export default function Account({code}) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState('nirvana')
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
        // spotifyApi.getMyTopArtists()
        //     .then(res=>{
        //         console.log(res)
        //     })

    }, [accessToken]);

    useEffect(() => {
        if (!search) return

        if (!accessToken) return

        spotifyApi.searchTracks(search)
            .then(res => {
                console.log(res)
            })
        // spotifyApi.getUserPlaylists('t3nna')
        //     .then(res=>{
        //         console.log(res)
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //     })
        axios.get('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                "Content-Type": 'application/json',
                "Host": "api.spotify.com"
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })


    }, [accessToken, search]);


    return (
        <div className={'account'}>
            {accessToken}
        </div>
    )
}