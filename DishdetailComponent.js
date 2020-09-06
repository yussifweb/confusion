import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component {

    constructor(props = {dish: null}) {
        super(props)
    }

    render() {
        const dish = this.props.dish
        return(
            <div className="row">
                <h3>Selected Dish:</h3>
                <div className="col-12 col-md-6 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                        <CardBody>
                            <CardTitle className="font-weight-bold text">Comments</CardTitle>
                            {dish.comments.map(c => <Card key={c.id}>
                                <CardBody>
                                    <CardTitle>{c.author } <span className="text-muted">{c.date}</span></CardTitle>
                                    <CardText>{c.comment}</CardText>
                                </CardBody>
                            </Card>)}
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Dishdetail