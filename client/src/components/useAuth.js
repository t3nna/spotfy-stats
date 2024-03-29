import {useState, useEffect} from "react"
import axios from "axios"

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()




    useEffect(() => {
        axios
            .post("http://localhost:3001/login", {
            // .post("https://spotify-backend-g0qc.onrender.com/login", {
                code: code,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                // setExpiresIn(61)
                setExpiresIn(res.data.expiresIn)
                console.log(res.data)
                window.history.pushState({}, null, "/")
            })
            .catch((err) => {
                window.location = "/"
                console.log(err)
            })
    }, [code])


    useEffect(() => {
        if (!refreshToken || !expiresIn) return

        const interval = setInterval(() => {


            axios
                .post("https://spotify-backend-g0qc.onrender.com/refresh", {
                    refreshToken
                })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                    // setExpiresIn(61)
                    setExpiresIn(res.data.expiresIn)
                    window.history.pushState({}, null, "/")
                })
                .catch((err) => {
                    window.location = "/ "
                    console.log(err)
                })

        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)

    }, [refreshToken, expiresIn])


    return accessToken
}