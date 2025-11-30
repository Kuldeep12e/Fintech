import React from "react";
import styles from "../style";

const NoCodeProductCard = ({ title, description, signupUrl, moreUrl }) => {
  return (
    <div className="bg-primary p-6 rounded-2xl border border-secondary shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.45)] hover:scale-[1.04] transition-all">
      <h3 className="text-xl font-semibold text-grey-700 mb-3 font-poppins">
        {title}
      </h3>
      <p className={styles.paragraph + " mb-6"}>
        {description}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => window.open(signupUrl, "_blank")}
          className="text-secondary font-semibold hover:underline"
        >
          Sign Up
        </button>

        <button
          onClick={() => window.open(moreUrl, "_blank")}
          className="text-secondary font-semibold hover:underline"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default NoCodeProductCard;
