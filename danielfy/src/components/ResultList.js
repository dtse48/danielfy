import Result from "./Result";

function ResultList(props) {
    return (
        <ol style={{display:"table",margin:"0 auto"}}>
            {props.resultsType === "artists" ?
            <div>
            {props.results.map(result => 
                <Result 
                imageUrl={result.images[2].url}
                name={result.name}
                externalUrl={result.external_urls.spotify}
                />
            )}
            </div>
            :
            <div>
            {props.results.map(result => 
                <Result 
                imageUrl={result.album.images[2].url}
                name={result.name}
                externalUrl={result.external_urls.spotify}
                />
            )}
            </div>
            }
        </ol>
    );
}

export default ResultList;