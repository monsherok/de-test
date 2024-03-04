document.addEventListener('mousedown', event => {
	const { target } = event
	const isOutsideClick = target.id === 'popup'
	if (isOutsideClick) {
		closePopup()
	}
})

document.addEventListener('click', event => {
	const { target } = event
	const popupTrigger = target.closest('[data-open-popup]')
	const isCloseButton = target.closest('[data-close]')


	if (popupTrigger) {
		openPopup(popupTrigger.dataset.openPopup)
	} else if (isCloseButton) {
		closePopup()
	}
})

function openPopup(popupId) {
	const popupSelector = `[data-popup='${popupId}']`
	const popupElement = document.querySelector(popupSelector)
	if (popupElement) {
		bodyLockToggle(true)
		popupElement.classList.add('--isVisible')
	}
}

export function closePopup() {
	const openPopupElement = document.querySelector('.popup.--isVisible')

	if (openPopupElement && openPopupElement.dataset.popup === 'notification') {
		openPopupElement.remove()
		return
	}

	if (openPopupElement) {
		bodyLockToggle(false)
		openPopupElement.classList.remove('--isVisible')

		if (openPopupElement.querySelector('form')) {
			openPopupElement.querySelector('form').reset()
		}
	}
}

export function bodyLockToggle(lock) {
	document.documentElement.classList.toggle("lock", lock)
}