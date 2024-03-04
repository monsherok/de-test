export function validateForm(form) {
	const fields = form.querySelectorAll('[data-required]')
	let errors = 0
	fields.forEach(field => {
		const isValid = validateField(field)
		toggleError(field, !isValid)
		if (!isValid) {
			errors++
		}
	})
	return errors
}

export function validateOnInput(form, submitButton) {
	const errors = validateForm(form)
	submitButton.disabled = errors !== 0
}


function validateField(field) {
	switch (field.dataset.required) {
		case 'email':
			return validateEmail(field.value)
		default:
			return validateText(field.value)
	}
}

function toggleError(field, isError) {
	if (isError) {
		field.classList.add('error')
	} else {
		field.classList.remove('error')
	}
}

function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return regex.test(email)
}

function validateText(text) {
	return text.length >= 2
}