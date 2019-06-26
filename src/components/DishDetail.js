import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Row, Col} from 'reactstrap';
import dateFormat from 'dateformat';
class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    review(){
        let rev = this.props.dish.comments.map((comm)=>{
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
        return rev;
    
    }
    
    render() {
        if(this.props.dish!=null){
            return(
                <div>
                <Row>
                   <Col className="Fixed">
                       <Card body className="dishReview">
                           <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                           <CardTitle>{this.props.dish.name}</CardTitle>
                           <CardText>{this.props.dish.description}</CardText>
                       </Card>
                   </Col>
                   <Col className="Fixed Comments dishReview">
                       <Card body className="dishReview">
                           <CardTitle><strong>Comments</strong></CardTitle>
                           <CardText>{this.review()}</CardText> 
               </Card>
           </Col>
       </Row>
       </div>       
       )
       }
       else{
           console.log(this.props.dish);
            return(<div><p></p></div>);
        }
     }
}

export default DishDetail;
