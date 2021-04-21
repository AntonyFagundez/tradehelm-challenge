import * as React from "react";

import {Item} from "../types/Item";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const [data, _setData] = React.useState<Item[]>([
    {
      id: "123",
      label: "no puedeser",
    },
    {
      id: "3",
      label: "no puedeser",
    },
  ]);

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
              <span>delete</span>
            </div>
          ))}
          <div className={styles.button}>Add item</div>
        </div>
      </section>
    </main>
  );
};

export default App;
