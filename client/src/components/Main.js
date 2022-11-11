import React from "react";
import useAuth from "./useAuth";
import LoginButton from "./LoginButton";
import Account from "./Account";

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=2b08d7b2b91a475da8192bc5cbb439b8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read"


export default function Main() {

    const code = new URLSearchParams(window.location.search).get('code')


    return (
        <main className={'flow'}>
            <section className={'intro-img'}>
                <div className="container">
                    <h1 className={'fs-primary-heading fw-black'}>Check your
                        <span> spotify </span>
                        statistics
                    </h1>

                </div>
            </section>



            {
                code ? <Account code={code}/> :

                    <LoginButton/>
            }


        </main>
    )
}