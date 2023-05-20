import React from "react";
import { motion } from "framer-motion";
import founderImg from "../../assets/founder.webp";
const Founder = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="Founder" height={200} width={200} />
        <h3>Kamal Singh Khanna</h3>
        <p>
          Hey, Everyone I am Kamal Singh Khanna, the founder of MBA Buger Wala.{" "}
          <br />
          Our aim is to provide the best quality burgers to our customers.{" "}
          <br />
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
