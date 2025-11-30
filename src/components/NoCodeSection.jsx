import React from "react";
import NoCodeProductCard from "./NoCodeProduct";
import { noCodeProductsData } from "../constants";
import styles from "../style";

const NoCodeProductSection = () => {
  return (
    <section className="py-16">
      
      <h2 className={styles.heading2}>
        Not a developer? Our No-Code products have you covered  
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-4 md:mt-10 mt-20">
        {noCodeProductsData.map((item, index) => (
          <NoCodeProductCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NoCodeProductSection;
