import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
// import { DISHES } from '../shared/dishes';


class Dishdetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
           dish : null
        }
    }
    const dish = dish
    render() {
        
        return(
            <div key={dish.id} className="container">
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
                        <li>--{c.author },
                        <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</span></li>
                    </ul>)}
                </div>
            </div>
            </div>
        )
    }
}

export default Dishdetail