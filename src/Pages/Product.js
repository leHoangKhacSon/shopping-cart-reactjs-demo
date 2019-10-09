import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  Container, Row, Col,
  Card, CardImg, 
  Button
} from 'reactstrap';
import { Link } from "react-router-dom"

import { CartContext } from '../contexts/cart'
import imgCart from '../img/cart.svg'
import Pagination from '../components/Pagination'

function Product() {

  const [ products, SetProducts ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ productsPerPage, setProductsPerPage ] = useState(4)

  // fetch data
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      const res = await axios.get('https://7x5xg.sse.codesandbox.io/products')
      SetProducts(res.data)
      setLoading(false)
    }

    fetchProduct()
  }, [])

  // get current product
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirsrProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirsrProduct, indexOfLastProduct)

  // change page 
  const paginateHandler = (event, number) => {
    event.preventDefault()
    setCurrentPage(number)
  }

  return (
    <Container>
      <h2>Products</h2>
      { loading === true && <p>loading...</p>}
      { loading === false && 
        <Row>
          { currentProducts.map((product, index) => (
            <Col key={index} md="3">
              <Card className="box-add-cart">
                <Link to={`/products/${product._id}`}>
                  <CardImg top width="100%" height="360" src={ product.image } alt="Card image cap" />
                </Link>
                <CartContext.Consumer>
                  { ({addToCart}) => (
                  <Link to="/cart/">
                    <Button className="btn-add-cart" onClick={() => addToCart(product)}>
                      Add to cart
                      <img src={imgCart} alt="im" width={20} />
                    </Button> 
                  </Link>
                  )}
                </CartContext.Consumer> 
              </Card>
              <div className="price-cart">
                <p>{ product.name }</p>
                <p>$90.00
                  <span>$100.00</span>
                </p>
              </div>
            </Col>
          )) }
        </Row>
      }
      
      <Pagination 
        productsPerPage={productsPerPage} 
        totalProduct={products.length}
        paginate={paginateHandler} 
      />
    </Container> 
  )
}

export default Product;