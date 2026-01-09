export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80"
        alt="Restaurant food"
        className="hero-img"
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="container hero-content">
        <div className="hero-text">
          <span className="badge">Serving Since 2012</span>
          <h1>Authentic Indian Cuisine in Rampally</h1>
          <p>
            Fresh South & North Indian dishes, prepared daily with quality
            ingredients and traditional recipes.
          </p>

          <div>
            <a href="tel:+919999999999" className="btn solid">
              Call Restaurant
            </a>
            <a href="#menu" className="btn ghost">
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
