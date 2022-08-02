import React from "react";
import classNames from "classnames";

import styles from "./FormItem.module.scss";

const FormItem = (props) => {
  const {
    data: { title, isSelect, type, description, name, errorText },
    formValues,
    setFormValues,
    formErrors,
  } = props;

  const cities = [
    {
      city: "Норильск",
      population: "179554",
    },
    {
      city: "Артёмовск",
      population: "1688",
    },
    {
      city: "Ачинск",
      population: "105259",
    },
    {
      city: "Боготол",
      population: "19819",
    },
    {
      city: "Бородино",
      population: "16061",
    },
    {
      city: "Дивногорск",
      population: "29195",
    },
    {
      city: "Дудинка",
      population: "21015",
    },
    {
      city: "Енисейск",
      population: "17805",
    },
    {
      city: "Железногорск",
      population: "83857",
    },
    {
      city: "Заозёрный",
      population: "10286",
    },
    {
      city: "Зеленогорск",
      population: "61915",
    },
    {
      city: "Игарка",
      population: "4417",
    },
    {
      city: "Иланский",
      population: "14967",
    },
    {
      city: "Канск",
      population: "89111",
    },
    {
      city: "Кодинск",
      population: "15911",
    },
    {
      city: "Красноярск",
      population: "1095286",
    },
    {
      city: "Лесосибирск",
      population: "59525",
    },
    {
      city: "Минусинск",
      population: "68007",
    },
    {
      city: "Назарово",
      population: "49825",
    },
    {
      city: "Сосновоборск",
      population: "40614",
    },
    {
      city: "Ужур",
      population: "15563",
    },
    {
      city: "Уяр",
      population: "11981",
    },
    {
      city: "Шарыпово",
      population: "37136",
    },
  ];

  const sortCities = [];
  cities.forEach((city) => {
    city.population > 50000 && sortCities.push(city);
  });

  function sortCitiesNames(x, y) {
    if (x.city < y.city) {
      return -1;
    }
    if (x.city > y.city) {
      return 1;
    }
    return 0;
  }

  sortCities.sort(sortCitiesNames);

  const maxObj = sortCities.reduce((acc, curr) =>
    +acc.population > +curr.population ? acc : curr
  );

  function sortCitiesPopulation(x, y) {
    return x === maxObj ? -1 : y === maxObj ? 1 : 0;
  }

  sortCities.sort(sortCitiesPopulation);

  return (
    <div
      className={classNames(
        styles.Item,
        type === "checkbox" && styles.Item_Checkbox
      )}
    >
      <div className={styles.Wrapper}>
        <label className={styles.Label} htmlFor={title}>
          {title}
        </label>
        {isSelect ? (
          <select
            className={styles.Input}
            name={name}
            onChange={(event) =>
              setFormValues({ ...formValues, [name]: event.target.value })
            }
          >
            {sortCities.map((city) => (
              <option key={city.population}>{city.city}</option>
            ))}
          </select>
        ) : (
          <input
            id={title}
            type={type}
            className={classNames(styles.Input, formErrors[name] && styles.Input_Error)}
            name={name}
            onChange={(event) =>
              setFormValues({ ...formValues, [name]: event.target.value })
            }
          />
        )}
      </div>
      {formErrors[name] && <p className={styles.Error}>{errorText}</p>}
      <p className={styles.Description}>{description}</p>
    </div>
  );
};

export default FormItem;
