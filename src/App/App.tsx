import React from "react";

import styles from "./App.module.scss";
import {DataContext} from "./Context/DataProvider";
import {deleteItem} from "./Context/reducer";

const ItemForm = React.lazy(() => import("./components/ItemForm"));

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const {
    state: {data, isLoading},
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
        {!isLoading && <h3>{`(${data.length}) items`}</h3>}
      </header>
      <section className={styles.section}>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
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
        )}
      </section>
      <React.Suspense fallback={null}>
        {open && <ItemForm handleClose={handleOpen} />}
      </React.Suspense>
    </main>
  );
};

export default App;
