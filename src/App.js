import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import menu from './data';
import Categories from './components/Categories';
import Menu from './components/Menu';
const allCategories = ["all", ...new Set(menu.map((item) =>{
  return item.category
}))]
function App() {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    console.log(allCategories)
  })

  const chooseCategory = (category) =>{
    if (category === "all"){
      setMenuItems(menu)
      
    }
    else{
      const newMenu  = menu.filter((item)=>{
      return item.category === category
      })
      setMenuItems(newMenu)
    }
    
  }
 
  // const chooseCategory = () =>{
  //   constnewCategories = menu.filter((item)=>{
  //     item.category === category
    
  //   }
  // }


  
  return (
    <>
      <h1 className = "d-flex justify-content-center">Our Menu</h1>
      <hr></hr>
      <Categories categories = {allCategories} chooseCategory = {chooseCategory}/>
      <Menu key = {menuItems.id} menuItems = {menuItems}/>
      
    </>
  );
}


export default App;
