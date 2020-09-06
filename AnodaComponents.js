import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishdeatilComponent from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    }
    console.log("Menu Constructor")
  }
  onDishSelect(dish) {

    console.log(dish)
    this.setState({ selectedDish: dish });
  }

  componentDidMount(){
    console.log("Menu ComponentDidMount")
  }
  
  render() {
    console.log("Menu render")

    const menu = this.props.data.map((dish) => {
      return (
        <div className="col-6 mt-5">
          <Card key={dish.id}
            onClick={() => { this.onDishSelect(dish) }}
           
          >
            <CardImg  src={dish.image} alt={dish.name} />
            <CardImgOverlay >
              <CardTitle>
                {dish.name}
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    })
    return (
      <div className="container">
        <div className="row">
            {menu}
        </div>
      
         < DishdeatilComponent dish = {this.state.selectedDish} />
            {/* {this.renderDish(this.state.selectedDish)} */}

      </div>
    );
  }
};

export default Menu;

import React, { Component } from "react";
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";



export default class DishDetail extends Component {

  renderComments(dish) {
    if (dish != null) {
      return (
        <Card>
          <h4>Comments</h4>
          {dish.comments.map((comment, index) => {
            let date = new Date(comment.date);
            let parseDate = date.toDateString()
            return (
              <ul className="list-unstyled" key={index}>
                <li className="ml-3">{comment.comment}</li>
                <li className="ml-3">--  {comment.author}, {parseDate}</li>
              </ul>)
          })}
        </Card>
      )
    }

  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} width="40%" />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish)}
        </div>
      </div>)
  }
}