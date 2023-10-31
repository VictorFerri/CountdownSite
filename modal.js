const Modal = {
    open() {
        document.querySelector('.modalOverlay').classList.add('active')
        console.log('get: ', localStorage.getItem('selected_date'));
        document.getElementById('date').value = localStorage.getItem('selected_date') != null ? new Date(localStorage.getItem('selected_date')).toISOString().split('T')[0] :  new Date().toISOString().split('T')[0] ;
        console.log(document.getElementById('date'));
        document.getElementById('date').setAttribute('min', new Date().toISOString().split('T')[0])
    },

    onChangeDate() {

    },

    close() {
        localStorage.setItem('selected_date', document.getElementById('date').value);
        document.querySelector('.modalOverlay').classList.remove('active')
        window.location.reload();
    }
}