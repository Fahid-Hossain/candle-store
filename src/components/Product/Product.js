import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { idMeal,strMeal, strArea, strMealThumb, strInstructions } = props.product;
    return (
        <>


            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 100)}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Link to={`/product/${idMeal}`}>
                    <button>Details</button>
                </Link>
            </Col>

        </>
    );
};

export default Product;