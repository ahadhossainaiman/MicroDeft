import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductDetails = ({product}) => {
    console.log(product)
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
          <Card.Title>{product.brand}</Card.Title>
          <Card.Text>
            Description:
           { product.description

           }
           
          </Card.Text>

          <Card.Text>
            Price:
           { product.price

           }
           
          </Card.Text>
          <Button variant="primary" className='m-5'>Add</Button>
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    );
}

export default ProductDetails;
