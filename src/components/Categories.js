import React from 'react'
import Button from 'react-bootstrap/Button'

const Categories = ({categories, chooseCategory}) => {
  return (
    <div className = "d-flex flex-wrap justify-content-center">
        {categories.map((category)=>{
            return(
                <Button onClick = {()=> chooseCategory(category)} className = "primary ms-3">{category}</Button>
                ) 
            
        })}
    </div>
  )
}

export default Categories