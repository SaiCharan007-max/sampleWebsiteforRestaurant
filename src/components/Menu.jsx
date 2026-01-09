import menu from "../data/menu";

export default function Menu() {
  return (
    <section className="section" id="menu">
      <div className="container">
        <h2>Menu Highlights</h2>

        <div className="menu-box">
          {menu.map((item, i) => (
            <div key={i} className="menu-item">
              <span>{item.name}</span>
              <span className="price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
