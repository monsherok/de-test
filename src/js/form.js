import { notification } from './notification.js'
import { closePopup } from './popup.js'
import { validateForm, validateOnInput } from './validations.js'

document.addEventListener('DOMContentLoaded', () => {
	const forms = document.forms

	for (const form of forms) {
		const submitButton = form.querySelector('button[type="submit"]')

		form.addEventListener('submit', e => handleFormSubmit(e, submitButton))

		form.addEventListener('reset', () => {
			const errorFields = form.querySelectorAll('.error')
			errorFields.forEach(field => {
				field.classList.remove('error')
				submitButton.disabled = false
			})
		})

		Array.from(form.elements).forEach(element => {
			if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
				element.addEventListener('input', () => validateOnInput(form, submitButton))
			}
		})
	}
})

function handleFormSubmit(e, submitButton) {
	e.preventDefault()
	const form = e.target
	const errors = validateForm(form)
	console.log('errors', errors)
	if (errors === 0) {
		closePopup()
		notification('Успех')
	} else {
		submitButton.disabled = true
	}
}

