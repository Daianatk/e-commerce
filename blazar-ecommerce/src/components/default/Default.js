import React from 'react';

export default function Default(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase py-5">
          <h1 className="display-4">404</h1>
          <h1>Error</h1>
          <h2>Pagina no Encontrada</h2>
          <h3>
            La URL solicitada {' '}
            <span className="text-danger">{props.location.pathname}</span> no
            fue encontrada.
          </h3>
        </div>
      </div>
    </div>
  );
}
