import * as React from "react";

import {DataContext} from "../Context/DataProvider";
import {deleteItem} from "../Context/reducer";

import styles from "./App.module.scss";
import ItemForm from "./components/ItemForm";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const {
    state: {data},
    dispatch,
  } = React.useContext(DataContext);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleDelete = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    dispatch(deleteItem(id));
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Supermarket List</h1>
        <h3>{`(${data.length}) items`}</h3>
      </header>
      <section className={styles.section}>
        <div>
          {data.map(({id, label}) => (
            <div key={id} className={styles.item}>
              <div>{label}</div>
              <span onClick={handleDelete(id)}>delete</span>
            </div>
          ))}
          <button className={styles.button} name="add-item" onClick={handleOpen}>
            Add item
          </button>
        </div>
      </section>
      {open && <ItemForm handleClose={handleOpen} />}
    </main>
  );
};

export default App;
