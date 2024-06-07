import React from "react";
import Classes from "../../Sass/Pricing.module.scss";
import { FaCheck } from "react-icons/fa";

const tableData = [
  {
    id: "Monthly Price",
    name1: "NGN 1200",
    name2: "NGN 1750",
    age: "NGN 3600",
    name3: "NGN 4450",
  },
  {
    id: "Video Quality",
    name1: "Good",
    name2: "Good",
    age: "Better",
    name3: "Best",
  },
  {
    id: "Resolution",
    name1: "480p",
    name2: "720p",
    age: "1080p",
    name3: "4k + HDR",
  },
  {
    id: "Devices you can switch to watch",
    name1: <FaCheck />,
    name2: <FaCheck />,
    age: <FaCheck />,
    name3: <FaCheck />,
  },
];

const Pricing = () => {
  return (
    <>
      <main id="pricing" className={Classes["Pricing-main"]}>
        <h1>Select your plan</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          est deserunt soluta alias possimus impedit nobis dolorem unde.
        </p>
        <section className={Classes["pricingSection"]}>
          <div>Basic</div>
          <div>Standard</div>
          <div>Premium</div>
        </section>
        <section className={Classes["Movix-table-section"]}>
          <table className={Classes["movix-table"]}>
            <thead className={Classes["movix-tableHead"]}>
              <tr className={Classes["create-table-list"]}>
                <th></th>
                <th>Mobile</th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className={Classes["id-cell"]}>{row.id}</td>
                  <td>{row.name1}</td>
                  <td>{row.name2}</td>
                  <td>{row.age}</td>
                  <td>{row.name3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default Pricing;
