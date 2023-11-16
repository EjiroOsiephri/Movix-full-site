import React from "react";
import Classes from "../../Sass/Pricing.module.scss";

const Pricing = () => {
  return (
    <>
      <main className={Classes["Pricing-main"]}>
        <h1>Select your plan</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          est deserunt soluta alias possimus impedit nobis dolorem unde.
        </p>
        <section className={Classes["pricingSection"]}>
          <div>Basic</div>
          <div>Starndard</div>
          <div>Premium</div>
        </section>
        <section className={Classes["pricingDetailsSection"]}>
          <aside>
            <p>Monthly Price</p>
            <p>$15.09</p>
            <p>$35.09</p>
            <p>$55.09</p>
          </aside>
          <aside>
            <p>Video Quality</p>
            <p>Good</p>
            <p>Better</p>
            <p>Best</p>
          </aside>
          <aside>
            <p>Resolution</p>
            <p>480p</p>
            <p>720p</p>
            <p>1080p</p>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Pricing;
