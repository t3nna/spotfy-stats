import React from "react";
import loginButton from "../LoginButton";

const withLocation = () =>
    (Component) =>
        (props) => {



            if (!props.data) {
                return <h1>Loading...</h1>
            } else if (props.data.length>0) {
                console.log(props.data)
                return <Component {...props}  />

            }

        }

export default withLocation