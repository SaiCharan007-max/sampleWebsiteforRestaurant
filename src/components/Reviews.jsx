export default function Reviews() {
  return (
    <section className="section muted" id="reviews">
      <div className="container">
        <h2>Customer Reviews</h2>

        <div className="review-grid">
          <div className="review">
            ⭐⭐⭐⭐⭐
            <p>Best veg food in this area.</p>
            <span>— Ramesh</span>
          </div>

          <div className="review">
            ⭐⭐⭐⭐☆
            <p>Clean place and friendly staff.</p>
            <span>— Sravya</span>
          </div>

          <div className="review">
            ⭐⭐⭐⭐⭐
            <p>Dosa tastes amazing.</p>
            <span>— Anil</span>
          </div>
        </div>
      </div>
    </section>
  );
}
