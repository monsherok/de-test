import { bodyLockToggle } from './popup.js'

export function notification(text) {
	bodyLockToggle(true)

	const popupElement = document.createElement('div')
	popupElement.id = 'popup'
	popupElement.dataset.popup = 'notification'
	popupElement.className = 'popup --isVisible'
	popupElement.innerHTML = `
        <div class="popup__wrapper">
            <div class="popup__content">
                <button data-close type="button" class="popup__close">Закрыть</button>
                <div class="contact-form">
                    <h2 class="contact-form__title" style="text-align: center; margin: 0;"></h2>
                </div>
            </div>
        </div>
    `
	const title = popupElement.querySelector('.contact-form__title')
	title.textContent = text

	const closeButton = popupElement.querySelector('[data-close]')
	closeButton.addEventListener('click', function () {
		popupElement.remove()
		bodyLockToggle(false)
	})

	document.body.appendChild(popupElement)
}