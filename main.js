
const api_url = "https://randomuser.me/api/";
getUser();
async function getUser(){
    const response = await fetch (api_url);
    const data  = await response.json();
    console.log(data.results);
    user  = data.results[0];
    let {title,first,last} = user.name;
    let age = user.dob.age;
    let image  = user.image;
    let gender  = user.gender;
    let { city, state,country} = user.location;
    let fullName = title + ". " + first  + " " + last;
    document.title = fullName;
    document.querySelector("#location").textContent = city + " " + state
    document.querySelector("#country").textContent = country
    document.getElementById('head').textContent = fullName;
    document.getElementById('email').href = 'mailto:' + email;
    document.getElementById('email').innerHTML = email;
    document.getElementById('phone'.href = 'tel:' + phone);
    document.querySelector("#age").textContent = age;
    document.querySelector('#gender').textContent = gender;
    };
    
