import React from "react";
import useAuth from "./useAuth";

export default function Account({code}){
    const accessToken= useAuth(code)

    return(
        <div className={'account'}>
            {accessToken}
        </div>
    )
}