import axios from "axios";
import { useEffect,useContext,useState } from "react";
import { useHistory } from "react-router-dom";
import { Card,Button } from "semantic-ui-react";
import { Context } from "../context/Context";
import Results from "./Results";

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
    const [token,setToken] = useState();
    const [resultsType,setResultsType] = useState();
    const [showResults,setShowResults] = useState(false);
    const history = useHistory();
    useEffect(() => {
        axios("https://accounts.spotify.com/api/token", {
            headers: {
                "Authorization":"Basic "+btoa("fd8ac44ebaa54919ba58482ec3071a53:bca7503f4b14472fb570a27e10dfd29a")
            },
            data: data_string,
            method: "POST"
        })
        .then((tokenResponse) => {
            setToken(tokenResponse.data.access_token);
        })
    },[])
    function showArtists() {
        setResultsType("artists");
        setShowResults(true);
    }
    function showTracks() {
        setResultsType("tracks");
        setShowResults(true);
    }
    return (
        
        <div>
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
            crossorigin="anonymous"
            />
            {!showResults ? 
            <div class="row d-flex justify-content-center" style={{marginTop:"200px",textAlign:"center"}}>
                <Card>
                    <Card.Content>
                        <Card.Header>Welcome to Danielfy!</Card.Header>
                        <Button style={{marginTop:"10px",marginBottom:"10px"}} onClick={showArtists}>Your Top Artists</Button>
                        <Button onClick={showTracks}>Your Top Tracks</Button>
                    </Card.Content>
                </Card>
            </div>
            :
            <Results token={token} resultsType={resultsType}/>
            }
        </div>
    );
}

export default LoggedIn;