import { useState , useEffect } from "react"

import { getCategories } from '../services/Header';
import { Link} from "react-router-dom";
import '../assets/css/style.css';
// import DetailedProducts from "./DetailedProducts";
const Categories = () => {

    const [Categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
              const fetchedCategory = await getCategories();
              setCategories(fetchedCategory);
            } catch (error) {
              console.error("Error fetching categories :", error);
            } 
          }
        fetchCategories();
    }, []);
    
  return (
    <ul>
            {Categories.map((category) => (
                <li key={category._id}>
                    <Link key={category._id} to={`/products/${category.categoryName}`} > {category.categoryName} </Link>
                </li>
          ))}
            </ul>
  )
}

export default Categories