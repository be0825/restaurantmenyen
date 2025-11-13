import "./Menu.css";
export default function Menu({
  data: { tittel, pris, ingredienser, kategori },
}) {
  const dishTitle = {
    color: "red",
    padding: "10px",
    backgroundColor: "black",
  };

  return (
    <div className="dishGrid">
      <h2 style={dishTitle}>{tittel}</h2>
      <h2>{pris}</h2>
      <h3>{ingredienser}</h3>
      <h3>{kategori}</h3>
    </div>
  );
}
