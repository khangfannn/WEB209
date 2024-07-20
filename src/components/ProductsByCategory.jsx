import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductbyCategory } from '../services/Products';

const ProductsByCategory = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductbyCategory(categoryName);
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <>
      <section className="about py-5">
        <div className="container pb-lg-3">
          <h3 className="tittle text-center" id="CategoryName">
            {categoryName}
          </h3>
          
          <div className="grid product-grid">
            {products.map((product) => (
              <div className="col product-men" key={product._id}>
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img
                      src={`/src/assets/images/${product.image}`}
                      className="img-fluid"
                      alt={product.model}
                    />
                    <form action="index.php?page=addtocart" method="post">
                      <input type="hidden" name="name" value={product.model} />
                      <input type="hidden" name="img" value={product.image} />
                      <input type="hidden" name="price" value={product.price} />
                      <input type="hidden" name="type" value={product.type} />
                      <input type="hidden" name="soluong" value="1" />
                      <button
                        type="submit"
                        name="addtocart"
                        id="thanhtoan"
                        style={{ cursor: 'pointer' }}
                      >
                        <i className="fa-solid fa-plus" aria-hidden="true"></i> Mua Ngay
                      </button>
                    </form>
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <Link to={`/product/${product._id}`} name="productname">
                        {product.model}
                      </Link>
                    </h4>
                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money" name="productprice">
                          {product.price}
                        </span>
                        <span
                          className="type"
                          name="producttype"
                          style={{ display: 'none' }}
                        >
                          {product.categories?.categoryName}
                        </span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li>
                        <a href="#">
                          <span className="fa fa-star" aria-hidden="true"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-star" aria-hidden="true"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-star" aria-hidden="true"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-star" aria-hidden="true"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-star-half-o" aria-hidden="true"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsByCategory;
