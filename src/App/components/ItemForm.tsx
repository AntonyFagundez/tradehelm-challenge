import React from "react";
import {useFormik} from "formik";

import {DataContext} from "./../Context/DataProvider";
import {addItem} from "./../Context/reducer";
import styles from "./ItemForm.module.scss";

interface ItemFormProps {
  handleClose: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({handleClose}) => {
  const {dispatch} = React.useContext(DataContext);
  const formik = useFormik({
    initialValues: {
      id: "",
      label: "",
    },
    onSubmit: (values) => {
      dispatch(addItem(values));
      handleClose();
    },
  });

  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;

    if (target.getAttribute("aria-current")) {
      handleClose();
    }
  };

  return (
    <div aria-current={true} className={styles.modal} onClick={handleClickOutside}>
      <div className={styles.content}>
        <h3>Add Item</h3>
        <form onSubmit={formik.handleSubmit}>
          <input
            autoFocus
            aria-label="item-label"
            id="label"
            name="label"
            type="text"
            value={formik.values.label}
            onChange={formik.handleChange}
          />
          <section>
            <button
              className={styles.buttonClose}
              name="close-button"
              type="reset"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className={styles.buttonAdd}
              disabled={formik.values.label === ""}
              name="add-bttn"
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

export default ItemForm;
