// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBSnK6IQYF0I95rrf6dPBUyopXxUhzz-XA",
    authDomain: "test-6dc98.firebaseapp.com",
    databaseURL: "https://test-6dc98.firebaseio.com",
    projectId: "test-6dc98",
    storageBucket: "test-6dc98.appspot.com",
    messagingSenderId: "710439854114",
    appId: "1:710439854114:web:11da79de037bfe857a2a7b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('images/' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('progress_bar');
        progressBar.value = progress;
    });

    storageRef.getDownloadURL().then(function(url){
        const image = document.getElementById('image');
        console.log(url);
        image.src = url
    });
});