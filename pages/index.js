export default function Home() {
  return (
    <>
      <div className="hero-section wf-section">
        <div className="hero-container">
          <h1 className="heading">Custom Memory Books</h1>
          <p className="paragraph">
            Remind your loved ones how much you love them.
          </p>
        </div>
      </div>
      <div className="testimonial-section wf-section">
        <div className="testimonial-container">
          <div className="w-layout-grid _3-col-grid">
            <div
              id="w-node-d2b919df-45ae-04bb-70e4-824390b6637e-e4c4d48b"
              className="image-wrapper"
            >
              <img
                src="images/Client-Test-1.png"
                loading="lazy"
                alt="Client testimonial #1"
                className="testimonial-1"
                height=""
              />
            </div>
            <div
              id="w-node-ff2f2bc9-c363-52c2-45e9-918ee881cd52-e4c4d48b"
              className="content-wrapper"
            >
              <img
                src="images/number_one.PNG"
                loading="lazy"
                alt="Rated #1"
                className="rating"
                width={300}
                height={100}
              />
            </div>
            <div
              id="w-node-_82275f31-4e71-802b-03a4-c25f7063a4aa-e4c4d48b"
              className="image-wrapper"
            >
              <img
                src="images/Client-Test-2.png"
                loading="lazy"
                alt="Client testimonial #2"
                className="testimonial-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-3 wf-section">
        <div className="section-3-container">
          <div className="w-layout-grid _2-col-grid">
            <div
              id="w-node-e0a72215-e48f-51f2-fd16-7a15bdd97458-e4c4d48b"
              className="content-wrapper"
            >
              <div
                id="w-node-_3a68d484-0efc-842d-7c76-af55652458f5-e4c4d48b"
                className="subheading"
              >
                Your story, your way
              </div>
              <p
                id="w-node-_40113c54-77e9-1ff5-91c0-86bdcd1d6663-e4c4d48b"
                className="paragraph-2"
              >
                Our editor gives you the creative freedom to fully customize
                your design — it's free, fun, and easy to use on any device.
              </p>
              <a
                id="w-node-a5176f5a-f09a-bf6d-9cbc-18b25c61703c-e4c4d48b"
                href="#"
                className="button w-button"
              >
                CREATE NOW
              </a>
            </div>
            <div
              id="w-node-ad322a3d-5895-8353-edc5-ab042094f6c3-e4c4d48b"
              className="image-wrapper"
            >
              <img
                src="images/Rectangle.png"
                loading="lazy"
                srcSet="images/Rectangle-p-500.png 500w, images/Rectangle.png 679w"
                sizes="100vw"
                alt="Image place holder
"
                className="placeholder"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer wf-section">
        <div className="footer-container">
          <div className="w-layout-grid _5-col-grid">
            <div
              id="w-node-affdb31c-9a02-fdf9-4c13-f4e8fe37d194-e4c4d48b"
              className="empty-div"
            />
            <div
              id="w-node-_00be4c9b-5dca-2111-1a0d-40fe78f716d4-e4c4d48b"
              className="div-block"
            >
              <div className="subheading-footer">Contact Us</div>
              <div className="text-block">
                Have Questions?
                <br />
                Email us at{" "}
                <a href="#" className="link-2">
                  support@zalii.com
                </a>
              </div>
              <div className="text-block">© 2022 Zalii</div>
            </div>
            <div
              id="w-node-_3c7c2a9c-762c-5038-02d4-148e3d10b5f9-e4c4d48b"
              className="div-block"
            >
              <div className="subheading-footer">Links</div>
              <ul role="list" className="w-list-unstyled">
                <li>
                  <a href="#" className="link">
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div
              id="w-node-_82f56865-f171-b30e-cc31-97a5ef41d869-e4c4d48b"
              className="div-block"
            >
              <div className="subheading-footer">Social Media</div>
            </div>
            <div
              id="w-node-_8323f15b-e363-a9b9-45bb-bbef23cbdf87-e4c4d48b"
              className="empty-div"
            />
          </div>
        </div>
      </div>
      {/* [if lte IE 9]><![endif] */}
    </>
  );
}
