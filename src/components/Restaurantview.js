import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Resstcard.css'
import Review from './Review';
import OperatingHours from './OperatingHours';

function Restaurantview() {
  var [Allrestaurants, setRestaurants] = useState([])

  const fetchRest = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => {
      setRestaurants(data.restaurants)
    })
  }

  const params = useParams()
  // console.log(params.id);
  // console.log(Allrestaurants);

  const restaurant = Allrestaurants.find(item => item.id == params.id)
  console.log(restaurant);

  useEffect(() => {
    fetchRest()
  }, [])

  return (
    <>
      {restaurant ? (
        <Row>

          <Col id='cal' lg={6} md={6} className="ps-2 pt-5 pb-5 ms-5  text-center">
            <img src={restaurant.photograph} alt="Restaurant" className="img-fluid rounded" style={{ height: '600px' }} />
          </Col>

          <Col id='cal' className="me-5 mt-5 pt-5 ">
            <ListGroup>
              <ListGroup.Item className="bg-primary text-white"><strong>Name :- </strong>{restaurant.name}</ListGroup.Item>
              <ListGroup.Item className="bg-primary text-white"><strong>Cusine type :- </strong>{restaurant.cuisine_type}</ListGroup.Item>
              <ListGroup.Item className="bg-primary text-white"><strong>Neighborhood :- </strong>{restaurant.neighborhood}</ListGroup.Item>
              <ListGroup.Item className="bg-primary text-white"><strong>Address :- </strong>{restaurant.address}</ListGroup.Item>

              <ListGroup.Item>

                <div className='mt-4'>
                  <OperatingHours timeData={restaurant.operating_hours} /> 
                </div>

                <div className='mt-3'>
                <Review reviewData={restaurant.reviews}/>
                </div>

                

              </ListGroup.Item>

            </ListGroup>
          </Col>


        </Row>) : ""
      }
    </>
  )
}

export default Restaurantview