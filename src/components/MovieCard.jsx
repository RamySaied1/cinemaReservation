import React, { Component } from 'react';
import { Card, Button, NavDropdown} from 'react-bootstrap';
import {  Redirect,Link } from 'react-router-dom';



class MovieCard extends Component {
    state ={
        redirect:false
    }
    render() {
       
        if (this.state.redirct)
        {
            return <Redirect to= "/screen"/>
        }
        return (
            <Card >
                <Card.Img variant="top" src={require("../images/"+this.props.path)} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        {
                            this.props.genre
                        }
                    </Card.Text>
                    <Card.Text>
                        {
                            this.props.screen
                        }
                    </Card.Text>
                    <NavDropdown title="Screening" id="basic-nav-dropdown">
                    {
                            this.props.times.map(time =>
                                
                                <Link to ={'/screen/'+this.props.screen+"/"+time} replace>
                                    <NavDropdown.Item as="a"> {time}</NavDropdown.Item>
                                    </Link>
                            )
                    }
                    </NavDropdown>                
                    </Card.Body>
            </Card>
        );
    }

    screen()
    {
       this.setState({redirct:true}) ;
    }

}
export default MovieCard;
