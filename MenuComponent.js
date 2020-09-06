import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import Dishdetail from './DishdetailComponent'

class MenuComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          selectedDish: null
        }
    }
    
    onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }

    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={(e) => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
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
                {this.state.selectedDish? <Dishdetail  dish={this.state.selectedDish}/>: 'No Dish has been selected'}
            </div>
        )
    }
}

export default MenuComponent