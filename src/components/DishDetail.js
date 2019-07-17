import React from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Row, Col, Button} from 'reactstrap';
import CommentForm from './CommentFormComponent';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderDish({dish}){
return(
    <div className="col-12 m-1">
        <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>
);
}



function RenderComments({comment, addComment, dishId}){
    if (comment != null){
        return(
            <div className="col-12 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                {comment.map((comment)=> {
                    return(    
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- <strong>{comment.author}</strong>, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        <br />
                    </li>
                    );
                })}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}
const DishDetail = (props) => {
    if(props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    else if (props.errMess){
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        
                        <RenderComments comment={props.comment} 
                        addComment={props.addComment} dishId={props.dish.id}/>
                        
                    </div>
                </div>
                </div>
            );
    }
    else{
        return(
            <div></div>
        );
    }
}


export default DishDetail;