import React, {Component} from 'react';
import "./ProductDetail.css"
import {
    Card,
    CardContent,
    Typography,
    CardActions
} from '@material-ui/core';

class ProductDetail extends Component {

    render() {
        const {product} = this.props;
        return (
            <Card raised className={"BeerListItem-main-card"}>
                <CardContent>
                    <Typography className="card-image-typography">
                        <img src={product.image} alt={product.name} className={"card-image"}/>
                    </Typography>
                    <Typography className={"card-title-typography"} variant="h5" component="h2">
                        {product.title}
                    </Typography>
                    <Typography variant="body2"  color="textSecondary" component="p">
                        <div className={"card-description-typography"}>{product.description}</div>
                    </Typography>
                </CardContent>
                <CardActions className="price-box">
                    <Typography variant="h5" color="primary">
                        ₹ {product.price}
                    </Typography>
                </CardActions>
            </Card>)
            ;
    }
}

export default ProductDetail;
