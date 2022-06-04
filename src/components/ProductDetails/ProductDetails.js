import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data.meals[0]))
    }, [])


    const {strMeal,strArea,strInstructions,strMealThumb,strYoutube} = product;
    return (
        <div>
            <Card>
                <Card.Img style={{ width: '35%',margin:"auto" }} variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title className="fs-1">{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions}
                    </Card.Text>
                    <a href={strYoutube}>
                        <button className="me-2 btn-primary">see video</button>
                    </a>
                    <Link to="/products">
                        <button className="btn-success">Go Back</button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ProductDetails;