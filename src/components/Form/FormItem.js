import React from "react";

import styles from "./FormItem.module.scss";

const FormItem = (props) => {
  const {
    data: { title, isSelect, type, description },
  } = props;

  return (
    <div className={styles.Item}>
      <div className={styles.Wrapper}>
        <label className={styles.Label}>{title}</label>
        {isSelect ? (
          <select className={styles.Input}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        ) : (
          <input type={type} className={styles.Input} />
        )}
      </div>
      <p className={styles.Description}>{description}</p>
    </div>
  );
};

export default FormItem;
