import React from "react";
import useAuth from "./useAuth";

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=2b08d7b2b91a475da8192bc5cbb439b8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export default function Login({code}) {

    return (
        <div className={'login container'}>
            <div className="header-container"
            style={{backgroundImage: 'url("images/img.png")'}}
            >

                <h1 className={'page-header'}>Check your <br/>
                    <span>spotify</span> <br/>
                    statistics

                </h1>
            </div>


            <a href={AUTH_URL} className={'auth btn'}>
                login
            </a>
            <div>
            </div>

            <div className={'add-info'}>
                <h2>Explore your account's statistics in my React app</h2>
                {/*<img src={loginImage} alt="laptop"/>*/}

            </div>
        </div>
    )
}