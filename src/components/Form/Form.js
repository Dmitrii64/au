import React from "react";

import FormItem from "./FormItem";

const Form = () => {
	const formData = [
		{
			id: 1,
			title: 'Ваш город',
			isSelect: true
		},
		{
			id: 2,
			title: 'Пароль',
			isSelect: false,
			type: 'password',
			description: 'Ваш новый пароль должен содержать не менее 5 символов.'
		},
		{
			id: 3,
			title: 'Пароль еще раз',
			isSelect: false,
			type: 'password',
			description: 'Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.'
		},
		{
			id: 4,
			title: 'Электронная почта',
			isSelect: false,
			type: 'email',
			description: 'Можно изменить адрес, указанный при регистрации.'
		},
		{
			id: 5,
			title: 'Я согласен',
			isSelect: false,
			type: 'checkbox',
			description: 'принимать актуальную информацию на емейл'
		},
	]

  return (
		<form>
			{formData.map((item) => (
				<FormItem data={item} key={item.id} />
			))}
		</form>
	)
}

export default Form;