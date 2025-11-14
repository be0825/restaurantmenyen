import "./Card.css";
export default function Card({
  data: { tittel, pris, ingredienser, kategori },
}) {
  const dishTitle = {
    color: "red",
    padding: "10px",
    backgroundColor: "black",
  };
  return (
    <section className="singeCard">
      <div className="dishCard">
        <h2 style={dishTitle}>{tittel}</h2>
        <h2>{pris}</h2>
        <h3>{ingredienser}</h3>
        <h3>{kategori}</h3>
      </div>
    </section>
  );
}
