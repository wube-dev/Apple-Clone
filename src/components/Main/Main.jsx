import React from "react";

import appletv from "../../images/icons/apple-tv-logo.png";
import banker from "../../images/home/banker.png";
import series5 from "../../images/icons/watch-series5-logo.png";
import arcade from "../../images/icons/arcade.png";

import Youtube from "../Youtube/Youtube";

function Main() {
  return (
    <div>
      {/* ALERT SECTION */}
      <section className="alert-section top-50">
        <div className="container">
          <div className="alert-title">We’re open for you.</div>
          <div className="alert-text">
            Our retail stores are closed, but you can buy our products here
            online and get fast, free delivery. If you need help finding the
            right product or have a question on your order, chat online with a
            Specialist or call 1-800-MY-APPLE.
            <br />
            For service and support, visit{" "}
            <a href="https://support.apple.com/">support.apple.com</a>.
          </div>
        </div>
      </section>

      {/* FIRST HIGHLIGHT */}
      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>
          <div className="title-wraper bold black">iPad Pro</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Order</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECOND HIGHLIGHT */}
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>
          <div className="title-wraper bold black">MacBook Air</div>
          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>
          <div className="price-wrapper grey">From $999.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* THIRD HIGHLIGHT */}
      <section className="third-hightlight-wrapper">
        <div className="container">
          <div className="title-wraper bold">iPhone 11 Pro</div>
          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>
          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEOS SECTION */}
      <section className="youtubeVideosWrapper top-100">
        <div className="container">
          <div className="title-wraper bold text-center mb-4">
            Latest Apple Videos
          </div>
          <Youtube />
        </div>
      </section>
    </div>
  );
}

export default Main;
