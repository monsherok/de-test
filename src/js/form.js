import { notification } from './notification.js'
import { closePopup } from './popup.js'
import { validateForm, validateOnInput } from './validations.js'

document.addEventListener('DOMContentLoaded', () => {
	const forms = Array.from(document.forms)

	forms.forEach(form => {
		const submitButton = form.querySelector('button[type="submit"]')

		form.addEventListener('submit', e => handleFormSubmit(e, submitButton))

		form.addEventListener('reset', () => {
			form.querySelectorAll('.error').forEach(field => {
				field.classList.remove('error')
			})
			submitButton.disabled = false
		});

		[...form.elements].forEach(element => {
			if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
				element.addEventListener('input', () => validateOnInput(form, submitButton))
			}
		})
	})
})

const handleFormSubmit = (e, submitButton) => {
	e.preventDefault()
	const form = e.target
	const errors = validateForm(form)
	submitButton.disabled = errors !== 0
	if (errors === 0) {
		closePopup()
		notification('SUCCESS')
	}
}
