export default function Purchase() {
  return (
    <div>
      <div className="hero-section-ps wf-section">
        <div className="hero-container--ps">
          <div className="ps-div-block">
            <img
              src="/Book-Preview.png"
              loading="lazy"
              alt="Book preview place holder
"
              className="ps-stock-image"
            />
          </div>
        </div>
        <div className="w-layout-grid grid-4">
          <div className="ps-div-block-2">
            <div className="ps-text-block">
              Every aspect of this design is customizable by adding text,
              changing layouts, adding/removing stickers or backgrounds.
            </div>
          </div>
          <div className="div-block-8-copy">
            <div className="ps-price">$48.94</div>
            <a href="#" className="order-button w-button">
              Buy Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
