export default function Contact() {
  return (
    <section className="section visit" id="visit">
      <div className="container visit-grid">
        {/* LEFT */}
        <div className="visit-info">
          <span className="visit-badge">Visit Us</span>
          <h2>Spice Garden Restaurant</h2>
          <p className="visit-desc">
            Authentic South & North Indian cuisine served fresh every day.
          </p>

          <div className="visit-details">
            <div>
              <span className="label">📍 Address</span>
              <p>Rampally, Hyderabad</p>
            </div>

            <div>
              <span className="label">⏰ Timings</span>
              <p>7:00 AM – 10:00 PM</p>
            </div>

            <div>
              <span className="label">📞 Phone</span>
              <p>+91 99999 99999</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps?q=Rampally,Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            Open in Google Maps
          </a>
        </div>

        {/* RIGHT */}
        <div className="visit-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Rampally,Hyderabad&output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
