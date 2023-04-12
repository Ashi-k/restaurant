import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({ reviewData }) {
    const [open, setOpen] = useState(false);
    return (
        <div>

            <Button
                className="bg-primary text-white"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Reviews
            </Button>
           
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        {
                            reviewData.map(item=>(
                                <div  style={{ width: '400px' }}>
                                    <h6>{item.name}  {item.date}</h6>
                                    <p>Rating {item.rating}</p>
                                    <p>Comments {item.comments}</p>
                                    </div>
                        

                            ))
                        }
                            
                          
                            
                    </div>
                </Collapse>
            </div>

       
    )
}

export default Review