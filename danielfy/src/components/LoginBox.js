import { useState } from "react";
import { Card,Form,Button } from "semantic-ui-react";

function LoginBox() {
    const [ username,setUsername ] = useState("");
    const [ password,setPassword ] = useState("");
    return (
        <div>
            {console.log(username)}
            {console.log(password)}
            <Card style={{margin:"auto", marginTop:"200px",width:"15%"}}>
                <Card.Content>
                    <Card.Header style={{textAlign:"center"}}>Log into Spotify</Card.Header>
                    <Form>
                        <Form.Field>
                            <label>Username:</label>
                            <input onChange={e=>{setUsername(e.target.value)}}></input>
                        </Form.Field>
                        <Form.Field>
                            <label>Password:</label>
                            <input type="password" onChange={e=>{setPassword(e.target.value)}}></input>
                        </Form.Field>
                        <div style={{textAlign:"center"}}>
                            <Button>Log in</Button>
                        </div>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    );
}

export default LoginBox;