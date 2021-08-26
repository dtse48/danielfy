import { Card,Form } from "semantic-ui-react";
const URL = "https://accounts.spotify.com/authorize?client_id=fd8ac44ebaa54919ba58482ec3071a53&response_type=code&redirect_uri=http://localhost:3000/loggedin&show_dialog=true";

function LoginBox() {
    return (
        <div style={{margin:"auto", marginTop:"200px",width:"15%"}}>
            <Card>
                <Card.Content>
                    <Card.Header style={{textAlign:"center"}}>Log into Spotify</Card.Header>
                    <Form>
                        <div style={{textAlign:"center"}}>
                            <a href={URL}>Log In</a>
                        </div>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    );
}

export default LoginBox;