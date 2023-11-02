const Modal = {
    open() {
        const currentDate = new Date();
        const minDate = new Date(currentDate.setDate(new Date().getDate() + 2));

        document.querySelector('.modalOverlay').classList.add('active');
        document.getElementById('date').value = localStorage.getItem('selected_date') != null ? new Date(localStorage.getItem('selected_date')).toISOString().split('T')[0] : minDate.toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', minDate.toISOString().split('T')[0]);
    },

    close() {
        localStorage.setItem('selected_date', document.getElementById('date').value);
        document.querySelector('.modalOverlay').classList.remove('active')
        window.location.reload();
    }
}