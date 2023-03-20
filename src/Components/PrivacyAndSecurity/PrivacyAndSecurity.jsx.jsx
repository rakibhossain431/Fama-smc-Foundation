import React from "react";

export default function PrivacyAndSecurity() {
  return (
    <section className="privacyAndSecurity-section">
      <div className="container">
        <div className="row privacyAndSecurity-body">
          <div className="col-lg-6 order-2 order-md-1">
            <img src="./images/poster/privacy&security.png" alt="buy crypto" />
          </div>
          <div className="col-lg-6 d-flex align-items-center order-1 order-md-2">
            <div className="privacyAndSecurity-details">
              <h2 className="hading-cus">Privacy & Security is Built-in</h2>
              <p>
                SMC is one of the secure crypto wallets. It is operated and governed by the SMC Foundation which is an
                entity regulated by the US Government.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
