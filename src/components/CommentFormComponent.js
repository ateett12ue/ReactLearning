import React, { Component } from 'react';
import {Button, Label,Row, Col, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

toggleModal(){
    this.setState({
        isModalOpen: !this.state.isModalOpen
    })
}
handleSubmit(values){
    this.toggleModal();
    this.props.addComment(this.props.dishId, values.rating, values.yourname, values.comment);
}

render(){
        return(
        <div>
            <Row>
                    <Col md={{size:10}}>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-pencil fa-lg"></span>Submit Comment
                        </Button>
                    </Col>
            </Row>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader><strong>Submit Comment</strong></ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                                <Label htmlFor="rating" md={3}>Rating :</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control" >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" md={3}>Your Name :</Label>
                                <Col md={10}>
                                    <Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name" className="form-control" validators={{
                                        required, minLength:minLength(2), maxLength:maxLength(15)}} />
                                    <Errors className="text-danger" model=".yourname" show="touched" messages={{required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less' }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={3}>Comment :</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="5" className="form-control" placeholder="Please Write Your Comment Here!">
                                    </Control.textarea>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md="10">
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>                           

                        </LocalForm>
                    </ModalBody>
                </Modal>
        </div>);
    }
} 

export default CommentForm;