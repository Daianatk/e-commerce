import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button';

import {
  useProductState,
  useCartState,
  useModalState
} from '../../../global-state';

export default function Details() {
  // Accesing state and actions
  const { productState } = useProductState();
  const { productDetails } = productState;
  const { cartActions } = useCartState();
  const { addItemToCart } = cartActions;
  const { modalActions } = useModalState();
  const { openModal } = modalActions;

  const { id, title, category, img, price, company, info, inCart } = productDetails;
  return (
    <div className="container py-5">
      {/* Product Title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      {/* End Product Title  */}
      {/* Product Info */}
      <div className="row">
        {/* Product Image */}
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} alt="Product" className="img-fluid" />
        </div>
        {/* Product Details */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>Tipo: {title}</h2>
          <h2>Categoria: {category}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            Marca: {company}
          </h4>
          <h4 className="text-blue">
            <strong>
              Precio: <span>S/. </span>
              {price}.00
            </strong>
          </h4>
          <p className="text-capitalized font-weight-bold mt-3 mb-0">
            Informacion sobre el producto:
          </p>
          <p className="text-muted lead">{info}</p>
          {/* Buttons */}
          <div>
            <Link to="/">
              <Button>Volver a Productos</Button>
            </Link>
            <Button
              cart
              disabled={inCart}
              onClick={() => {
                addItemToCart(id);
                openModal(id);
              }}
            >
              {inCart ? 'Ir al carrito' : 'Añadir al carito'}
            </Button>
          </div>
        </div>
      </div>
      {/* End Product Info */}
    </div>
  );
}
