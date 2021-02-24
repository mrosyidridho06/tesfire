function logut() {
    firebase.auth().onAuthStateChanged(function(user){
        const logoutBtn = document.querySelector('#logout-btn');
        logoutBtn.addEventListener('click', e => {
        e.preventDefault();
        firebase.auth().signOut();
        console.log('User signed out!');
        })
    })
}
window.onload = function () {
    logut();
}