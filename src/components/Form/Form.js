import { React, useState } from "react";
import styles from "./Form.module.scss";
import FormItem from "./FormItem";

const Form = () => {
  const formData = [
    {
      id: 1,
      title: "Ваш город",
      isSelect: true,
      name: "city",
    },
    {
      id: 2,
      title: "Пароль",
      isSelect: false,
      type: "password",
      description: "Ваш новый пароль должен содержать не менее 5 символов.",
      name: "password",
			errorText: 'Используйте не менее 5 символов'
    },
    {
      id: 3,
      title: "Пароль еще раз",
      isSelect: false,
      type: "password",
      description:
        "Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.",
      name: "repeatPassword",
			errorText: 'Пароли не совпадают'
    },
    {
      id: 4,
      title: "Электронная почта",
      isSelect: false,
      type: "email",
      description: "Можно изменить адрес, указанный при регистрации.",
      name: "email",
			errorText: 'Неверный E-mail'
    },
    {
      id: 5,
      title: "Я согласен",
      isSelect: false,
      type: "checkbox",
      description: "принимать актуальную информацию на емейл",
			name: "agreement"
    },
  ];

	const [formValues, setFormValues] = useState({city: 'Красноярск', password:'', repeatPassword:'', email:'', agreement: 'off'});
	const [formErrors, setFormErrors] = useState({});

	const getErrors = formValues => {
		const errorObj = {};
		if (formValues.password.length < 5) {
			errorObj.password = true;
		}
		if (formValues.repeatPassword !== formValues.password) {
			errorObj.repeatPassword = true;
		}
		if (formValues.email.length < 5 || !formValues.email.includes('@')) {
			errorObj.email = true;
		}

		setFormErrors(errorObj);
		Object.keys(errorObj).length === 0 && console.log(formValues);
	}

	const formSubmit = e => {
		e.preventDefault();
		getErrors(formValues)
	}

  return (
    <form onSubmit={formSubmit}>
      {formData.map((item) => (
        <FormItem data={item} key={item.id} formValues={formValues} setFormValues={setFormValues} formErrors={formErrors} />
      ))}
      <div className={styles.FormSubmit}>
        <button className={styles.Button}>Изменить</button>
        <p className={styles.Description}>
          последние изменения 15 мая 2012 в 14:55:17
        </p>
      </div>
    </form>
  );
};

export default Form;
