import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';

export class ItemContainer extends Component {
    //constructor() {
    //    super();
    //}

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            Item name
                        </Col>
                        <Col>
                            Date of purchase: 2017-01-23
                        </Col>
                        <Col>
                            Warranty: 1 year
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

//export ItemContainer;

//const wrapper = document.getElementById("item-container");
//wrapper ? ReactDOM.render(<ItemContainer/>, wrapper) : false;