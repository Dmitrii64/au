import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Header.module.scss";

const Header = () => {
  const [statusText, setStatusText] = useState(
    "Прежде чем действовать, надо понять"
  );
  const [statusDisable, setStatusDisable] = useState(true);

  function changeStatus() {
    setStatusDisable((current) => !current);
  }

  let buttonText = statusDisable ? 'Сменить статус' : 'Сохранить статус';

  return (
    <div className={styles.Block}>
      <div className={styles.Wrapper}>
        <h1 className={styles.Title}>
          Здравствуйте,{" "}
          <span className={styles.Title_Black}>Человек №3596941</span>
        </h1>
        <button
          className={styles.ChangeStatusButton}
          type={"button"}
          onClick={changeStatus}
        >
          {buttonText}
        </button>
      </div>
      <div
        className={classNames(
          styles.Status,
          !statusDisable && styles.Status_Hidden
        )}
      >
        {statusText}
      </div>
      <input
        className={classNames(
          styles.ChangeStatusInput,
          statusDisable && styles.ChangeStatusInput_Disabled
        )}
        value={statusText}
        onChange={(event) => setStatusText(event.target.value)}
      />
    </div>
  );
};

export default Header;
