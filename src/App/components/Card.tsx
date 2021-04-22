import React from "react";
import {useFormik} from "formik";

import styles from "../Card.module.scss";
import {DataContext} from "../../Context/DataProvider";
import {addItem} from "../../Context/reducer";

interface CardProps {
  handleClose: () => void;
}

const Card: React.FC<CardProps> = ({handleClose}) => {
  const {dispatch} = React.useContext(DataContext);
  const formik = useFormik({
    initialValues: {
      id: "",
      label: "",
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-debugger
      dispatch(addItem(values));
      handleClose();
    },
  });

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h3>Add Item</h3>
        <form onSubmit={formik.handleSubmit}>
          <input
            autoFocus
            id="label"
            name="label"
            type="text"
            value={formik.values.label}
            onChange={formik.handleChange}
          />
          <section>
            <button className={styles.buttonClose} type="reset" onClick={handleClose}>
              Close
            </button>
            <button
              className={styles.buttonAdd}
              disabled={formik.values.label === ""}
              type="submit"
            >
              Add
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Card;
