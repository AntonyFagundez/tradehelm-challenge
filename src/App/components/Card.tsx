import React from "react";

import styles from "../Card.module.scss";

const Card: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className="modal-content" />
    </div>
  );
};

export default Card;
