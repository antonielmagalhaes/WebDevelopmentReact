import React, { Component } from "react";
import {
    Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg
                        width="100%"
                        object
                        src={dish.image}
                        alt={dish.name}
                    />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardBody>{dish.description}</CardBody>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card
                        onClick={() => {
                            this.onDishSelect(dish);
                        }}
                    >
                        <CardImg
                            width="100%"
                            object
                            src={dish.image}
                            alt={dish.name}
                        />
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">{menu}</div>
                <div className="row col-4 ">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;