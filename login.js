// Insert your code here


//CLICK DU BOUTON REGISTER POUR SIGNUP
document.querySelector('#register').addEventListener('click', function () {
    console.log('click detected!');    
    const newUser = {
        name: document.querySelector('#registerName').value,
        email: document.querySelector('#registerEmail').value,
        password: document.querySelector('#registerPassword').value,
    };    
    fetch('https://wheatherapp-backend-beryl.vercel.app/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( newUser )    
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            console.log('true');
            console.log(data);    
            window.location.assign("index.html" )  
        }           
    })          
});


//CLICK DU BOUTON CONNECTION POUR SIGNIN
document.querySelector('#connection').addEventListener('click', function () {
    console.log('click detected!');    
    const connectId = {
        email: document.querySelector('#connectionEmail').value,
        password: document.querySelector('#connectionPassword').value,
    };    
    fetch('https://wheatherapp-backend-beryl.vercel.app/users/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( connectId )    
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            console.log('true');
            console.log(data);    
            window.location.assign("index.html" )  
        }           
    })          
});