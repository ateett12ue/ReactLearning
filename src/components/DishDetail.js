import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Row, Col} from 'reactstrap';
class DishDetail extends Component {
   
    componentDidMount(){
        console.log('Dishdetail component compentdidmount');
    }
    componentDidUpdate(){
        console.log('Dishdetail component compentdidupdate')
    }


    review(){
        let rev = this.props.dish.comments.map((comm)=>{
            return(            
                <div key={comm.id}>
                    <Row>
                        <Col>
                            <p>{comm.comment}</p>
                            <p>-- <strong>{comm.author}</strong> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</p>
                            <br />
                        </Col>
                    </Row>
                </div>);
            });
        return rev;
    
    }
    
    render() {
        
        console.log('Dishdetail component render invoked');

        if(this.props.dish!=null){
            return(
                <div className="container">
                <Row>
                   <Col md="6" className="Fixed">
                       <Card body className="dishReview">
                           <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                           <CardTitle>{this.props.dish.name}</CardTitle>
                           <CardText>{this.props.dish.description}</CardText>
                       </Card>
                   </Col>
                   <Col md="6"className="Fixed Comments dishReview">
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
