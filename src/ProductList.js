import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import { Grid } from '@material-ui/core';
import "./ProductDetail.css"

/*const dummyProducts = [
    {
        id: 1,
        name: 'Product 1',
        imageUrl: 'https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99
    },
    {
        id: 2,
        name: 'Product 2',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 29.99
    },
    {
        id: 3,
        name: 'Product 2',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 29.99
    },
    {
        id: 4,
        name: 'Product 2',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 29.99
    },
    {
        id: 5,
        name: 'Product 2',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 29.99
    },
    {
        id: 6,
        name: 'Product 2',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 29.99
    },
    // Add more dummy products as needed
];*/

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }


    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => this.setState({ products: data }))
            .catch(error => console.error(error))
    }


    render() {
        const { products } = this.state;
        return (
            <Grid container spacing={3}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductDetail product={product} />
                    </Grid>
                ))}
            </Grid>
        );
    }

}

export default ProductList;
