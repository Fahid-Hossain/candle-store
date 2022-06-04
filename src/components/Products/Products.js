import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);


    const onChangeHandler = (e) => {
        const searchTextvalue = e.target.value;
        setSearchText(searchTextvalue);
    }

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [searchText])

    return (
        <div>
            <h2>Products All search here</h2>
            <input onChange={onChangeHandler} type="text" />
            <div>
                <Row xs={1} md={3} className="g-4 mt-4">
                    {
                        products.map(product => <Product key={product.idMeal} product={product}></Product>)
                    }
                </Row>
            </div>
        </div >
    );
};

export default Products;