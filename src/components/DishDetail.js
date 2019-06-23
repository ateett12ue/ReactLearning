import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row, Col} from 'reactstrap';
import dateFormat from 'dateformat';
class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        let review = this.props.dish.comments.map((comm)=>{
            return(
            
            
            <div key={comm.id}>
                <Row>
                    <Col>
                        <p>{comm.comment}</p>
                        <p>-- <strong>{comm.author}</strong> {dateFormat(comm.date, "mmmm dS, yyyy")}</p>
                        <br />
                    </Col>
                </Row>
            </div>);
        });

        console.log('comm is showing');
        return (
            <div className="container">
            <Row>
                    {review}
            </Row>
            </div>
        )

    }
}

export default DishDetail;
