const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal, button.dataset.word, button.dataset.meaning);
	})
});

closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		closeModal(modal);
	})
});

function openModal(modal, word, meaning) {
	if (modal == null) return;
	modal.getElementsByClassName('modal-body-word')[0].innerHTML = '<p><strong>' + word + '</strong><p>';
	modal.getElementsByClassName('modal-body-inner')[0].innerHTML = '<p>' + meaning + '</p>';
	modal.classList.add('active');
	overlay.classList.add('active');
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
}