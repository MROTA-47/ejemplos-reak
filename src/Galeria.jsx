import g1 from "./galeria1.png";
import g2 from "./galeria2.png";
import g3 from "./galeria3.png";

function Galeria() {
  return (
    <section className="seccion">
      <h2>Galería</h2>

      <div className="galeria">
        <img src={g1} />
        <img src={g2} />
        <img src={g3} />
      </div>
    </section>
  );
}

export default Galeria;