const auth = firebase.auth()
function signOut() {
    auth.signOut();
    alert("Signed Out")
    window.open("index.html", "_self")
}
let userList = document.querySelector('#userList');
let timeList = document.querySelector('#timeList');
let form = document.querySelector('#addUser');


function renderUser(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let time = document.createElement('span');

    let del = document.createElement('div');
    del.className = 'del';

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    time.textContent = doc.data().timestamp;
    



    del.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(time);
    
    li.appendChild(del);


    userList.appendChild(li);

    //delete data
    del.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('users').doc(id).delete();
    });


}
// non-realtime database(ต้องกด f5)
//db.collection('users').get().then(user =>{
// user.docs.forEach(doc =>{
//   console.log(doc.data())
//renderUser(doc);
// })
//});

//when submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    db.collection('users').add({
        name: form.name.value,
        city: form.city.value,
        timestamp: Date.now(),
        
    })
    form.name.value = ''; //reset form name
    form.city.value = ''; //reset form city


});



//realtime database
db.collection('users').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        // console.log(change);
        if (change.type == 'added') {
            renderUser(change.doc);
            time();
            
        } else if (change.type == 'removed') {
            let li = userList.querySelector(`[data-id=${change.doc.id}]`);
            userList.removeChild(li);
        }
    })
});
function time() {


    db.collection("users").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().timestamp);
            let timevalue=doc.data().timestamp;
            console.log(timevalue);
            let dateObj = new Date(timevalue);
            console.log(dateObj);
            //document.getElementById('timeList').innerHTML=dateObj;
           
    })
    
    });

}
 


