import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Resstcard.css'

function Restcard({ restdata }) {
    return (
        <>
            <Link to={`/view-restaurant/${restdata.id}`} style={{textDecoration:'none',color:'black'}}>
                <Card id='cal' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={restdata.photograph} />
                    <Card.Body>
                        <Card.Title>{restdata.name}</Card.Title>
                        <Card.Text>
                            <p>
                                <strong>Cusine Type</strong> {restdata.cuisine_type}
                            </p>

                            <p>
                                <strong>Neighborhood</strong> {restdata.neighborhood}
                            </p>

                            <p>
                                <strong>Address</strong> {restdata.address}
                            </p>

                        </Card.Text>

                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default Restcard