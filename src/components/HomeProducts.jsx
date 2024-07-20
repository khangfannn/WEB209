import { useEffect, useState } from 'react';

import { getProducts  } from '../services/Products';

import { getCategories } from '../services/Header';

import '../assets/css/bootstrap.css';
import { Link } from 'react-router-dom';
import MinorBanner from './MinorBanner';

const HomeProducts = () => {
    const [categories, setCategories] = useState([]);
    
    const [products, setProducts] = useState([]);

    
    useEffect(  () => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategories();
                setCategories(fetchedCategories);
            } catch (error) {
                console.error("Error fetching categories", error);
            }
        };
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        
        fetchCategories();
        fetchProducts();
    }, []);

    return (
        <>
        <MinorBanner/>
        
        <section className="about py-5">
            {categories.map(category => (
                <div className="container pb-lg-3" key={category._id}>
                    <h3 className="tittle text-center" id="CategoryName">{category.categoryName}</h3>
                    <div className="grid product-grid">
                        {products
                            .filter(product => product.categories.categoryName === category.categoryName)
                            .map(product => (
                                
                                <div className="col product-men" key={product._id}>
                                    <div className="product-shoe-info shoe text-center">
                                        <div className="men-thumb-item">
                                            <img src={`/src/assets/images/${product.image}`} className="img-fluid" alt={product.model} />
                                            <form action="index.php?page=addtocart" method="post">
                                                <input type="hidden" name="name" value={product.model} />
                                                <input type="hidden" name="img" value={product.image} />
                                                <input type="hidden" name="price" value={product.price} />
                                                <input type="hidden" name="type" value={product.type} />
                                                <input type="hidden" name="soluong" value="1" />
                                                <button type="submit" name="addtocart" id="thanhtoan" style={{ cursor: 'pointer' }}>
                                                    <i className="fa-solid fa-plus" aria-hidden="true"></i> Mua Ngay
                                                </button>
                                            </form>
                                        </div>
                                        <div className="item-info-product">
                                            <h4>
                                                <Link to={`/product/${product._id}`} name="productname">{product.model}</Link>
                                            </h4>
                                            <div className="product_price">
                                                <div className="grid-price">
                                                    <span className="money" name="productprice">{product.price}</span>
                                                    <span className="type" name="producttype" style={{ display: 'none' }}>{product.categories.categoryName}</span>
                                                </div>
                                            </div>
                                            <ul className="stars">
                                                <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                                <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                                <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                                <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                                <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </section>
        </>
    );
};

export default HomeProducts;
