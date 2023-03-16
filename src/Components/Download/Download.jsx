import React from "react";

export default function Download() {
  return (
    <section class="download-section">
      <div class="container download-body">
        <div class="row">
          <div class="col-md-6">
            <h4>Download our App</h4>
            <p>Over 100,000 Downloads and Rated 4.5++ on Average</p>
          </div>
          <div class="col-md-6 d-flex align-items-start justify-content-center gap-4">
            <a href="#">
              <img src="images/icons/appleStore.png" alt="apple store" />
            </a>
            <a href="#">
              <img src="images/icons/playStore.png" alt="play store" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
