import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Menu = ({menuItems}) => {
    
  return (
    <div className = "d-flex flex-wrap justify-content-center">
        {menuItems.map((item)=>{
            const {id, title, category, price, img, desc} = item
            return(
                <Card style={{ width: '18rem' }} className = "m-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                        <Button variant="primary">${price}</Button>
                    </Card.Body>
                </Card>
            )
        })}
    </div>
  )
}

export default Menu