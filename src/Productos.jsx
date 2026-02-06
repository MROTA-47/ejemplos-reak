import "./Productos.css";

function Productos() {
  return (
    <section className="productos">
      <h2>Nuestros Productos</h2>

      <div className="productos-grid">
        <div className="producto-card">
          <img src="/producto1.png" alt="Producto 1" />
          <h3>Producto Super Mario Galaxy</h3>
          <p>Descripción del producto uno.</p>
        </div>

        <div className="producto-card">
          <img src="/producto2.png" alt="Producto 2" />
          <h3>Producto gegagedigedagedago</h3>
          <p>#gegagedigedagedago.</p>
        </div>

        <div className="producto-card">
          <img src="/producto3.png" alt="Producto 3" />
          <h3>Producto Manzana</h3>
          <p>Manzanita asi bien aca.</p>
        </div>
      </div>
    </section>
  );
}

export default Productos;