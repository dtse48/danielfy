import { Card,Button } from "semantic-ui-react";
const URL = "https://accounts.spotify.com/authorize?client_id=fd8ac44ebaa54919ba58482ec3071a53&response_type=code&redirect_uri=http://localhost:3000/loggedin&show_dialog=true&scope=user-top-read";

function LoginBox() {
    return (
        <div class="row d-flex justify-content-center" style={{marginTop:"200px"}}>
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
            crossorigin="anonymous"
            />
            <Card style={{textAlign:"center"}}>
                <Card.Content>
                    <Card.Header>Log into Spotify</Card.Header>
                        <Button style={{marginTop:"10px"}} onClick={()=>window.location.href=URL}>Log In</Button>
                </Card.Content>
            </Card>
        </div>
    );
}

export default LoginBox;