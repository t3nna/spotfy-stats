import React from 'react';

const AUTH_URL =
    // "https://accounts.spotify.com/authorize?client_id=2b08d7b2b91a475da8192bc5cbb439b8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read"
    "https://accounts.spotify.com/authorize?client_id=2b08d7b2b91a475da8192bc5cbb439b8&response_type=code&redirect_uri=http://localhost:3000&scope=user-top-read"


function LoginButton(props) {
    return (
        <section className={''}>
            <div className="container">
                <div className={'login'}>
                    <h2 className={'fs-secondary-heading'}>You need to login to your account to see your stats.</h2>
                    <a href={AUTH_URL}>
                        <button className={'btn fs-600 fw-medium'}>
                            login

                        </button>
                    </a>
                </div>
            </div>
        </section>

    );
}

export default LoginButton;