import React, { useEffect, useRef, useState } from 'react';

const ProductsAll = () => {
    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const productsRef = useRef();

    const btnSearch = () => {
        const searchText = productsRef.current.value;
        setSearchProducts(searchText);
    }

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/users?search=${searchProducts}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [searchProducts])


    return (
        <div>
            <h2>Hello products from Server. ProductsTotal {products.length} </h2>

            <input ref={productsRef} type="text" placeholder="search products" />
            <button onClick={btnSearch} className="btn-success">Submit</button>
        </div>
    );
};

export default ProductsAll;