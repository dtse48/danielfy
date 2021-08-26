import axios from "axios";
import { useEffect } from "react";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code');
const data = {
    grant_type:"authorization_code",
    code:code,
    redirect_uri:"http://localhost:3000/loggedin"
}
const data_string = new URLSearchParams(Object.entries(data)).toString();

function LoggedIn() {
    useEffect(() => {
        axios("https://accounts.spotify.com/api/token", {
            headers: {
                "Authorization":"Basic "+btoa("fd8ac44ebaa54919ba58482ec3071a53:bca7503f4b14472fb570a27e10dfd29a")
            },
            data: data_string,
            method: "POST"
        })
    },[])
    return (
        <div>Hello!</div>
    );
}

export default LoggedIn;