import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component {

    constructor(props = {dish: null}) {
        super(props)
    }

    render() {
        const dish = this.props.dish
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {dish.comments.map(c => <ul key={c.id} className="list-unstyled">
                        <li>{c.comment}</li>
                        <li>--{c.author }, <span>{c.date}</span></li>
                    </ul>)}
                </div>
            </div>
        )
    }
}

export default Dishdetail