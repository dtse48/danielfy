import { useEffect,useState } from "react";
import axios from "axios";
import ResultList from "../components/ResultList";

function Results(props) {

    const [topResults,setTopResults] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const [numResults,setNumResults] = useState(25);
    const [timeRange,setTimeRange] = useState("medium_term");
    useEffect(() => {
        axios("https://api.spotify.com/v1/me/top/"+props.resultsType+"?&limit="+numResults+"&time_range="+timeRange, {
            method: "GET",
            headers: {
                "Authorization":"Bearer "+props.token
            }
        })
        .then((searchResponse) => {
            setTopResults(searchResponse.data.items);
            setIsLoading(false);
            console.log(searchResponse);
        })
    },[numResults,timeRange])
    return (
        <div>
            {!isLoading ?
            <div style={{marginTop:"25px",textAlign:"center"}}> 
                <h3>Your Top {numResults} {(props.resultsType)[0].toUpperCase()+(props.resultsType).slice(1)}</h3>
                <div>
                    <select style={{marginRight:"10px"}}>
                        <option onClick={(e)=>{setNumResults(e.target.value)}} value={5}>5</option>
                        <option onClick={(e)=>{setNumResults(e.target.value)}} value={10}>10</option>
                        <option selected onClick={(e)=>{setNumResults(e.target.value)}} value={25}>25</option>
                        <option onClick={(e)=>{setNumResults(e.target.value)}} value={50}>50</option>
                    </select>
                    <select>
                        <option onClick={(e)=>{setTimeRange(e.target.value)}} value="short_term">Past Month</option>
                        <option selected onClick={(e)=>{setTimeRange(e.target.value)}} value="medium_term">Past 6 Months</option>
                        <option onClick={(e)=>{setTimeRange(e.target.value)}} value="long_term">All Time</option>
                    </select>
                </div>
                <ResultList resultsType={props.resultsType} results={topResults}></ResultList>
            </div> 
            :
            <div style={{textAlign:"center"}}>
                Loading
            </div>
            }
        </div>
    );
}

export default Results;