import React, { useState } from 'react';

export default function EjercicioTwo() {
  const [count, setCount] = useState(null);
  const [prueba, setPrueba] = useState(null);
  const fibonacci = [];

  const handleInputChange = (e) => {
    setCount(e.target.value);
  }

  const handleReturn = (e) => {
    e.preventDefault();
    for (let i = 1; i <= count ; i++) {
      let n = i;
      if (i % 3 == 0 && i % 5 == 0) {
        n = 'AKELAB';
      } else if (i % 3 == 0){
        n = 'AKE';
      }else if (i % 5 == 0){
        n = 'LAB';
      }
      fibonacci.push(n);
      setPrueba(fibonacci.join(', '));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Ejercicio Two</h5>
                <div className="form-group">
                  <input
                    placeholder="Escribe un numero"
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    onChange={handleInputChange}
                  />
                  {count == 0
                    ?
                    <div className="alert alert-danger" role="alert">
                      El numero tiene que ser mayor a 0
                    </div>
                    :
                    ''
                  }
                  <button type="button" className="btn btn-primary mt-2" onClick={handleReturn}>Operacion</button>
                </div>
                <div className="card-footer mt-2">
                  <small className="text-muted" >La respuesta es : {prueba}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}