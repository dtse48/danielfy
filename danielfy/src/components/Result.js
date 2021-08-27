import { Image,Menu } from "semantic-ui-react";

function Result(props) {
    return (
            <li style={{marginTop:"25px"}}>
                <Menu borderless widths={2} style={{width:"500px"}} onClick={()=>{window.open(props.externalUrl,"_blank")}}>
                    <Menu.Item link style={{width:"100%"}}>
                        <Menu.Item header>
                            {props.name}
                        </Menu.Item>
                        <Menu.Item>
                            <Image circular src={props.imageUrl} style={{width:"50px"}}/>
                        </Menu.Item>
                    </Menu.Item>
                </Menu>
            </li> 
    );
}

export default Result;