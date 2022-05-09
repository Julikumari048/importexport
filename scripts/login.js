import {navbar }from "../components/navbar.js";
   let na=document.getElementById("nav")
   na.innerHTML=navbar();

let login = async () => {
let user_data = {
  username: document.getElementById("username").value,
  password: document.getElementById("password").value,
};

user_data = JSON.stringify(user_data);

let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
  method: "POST",
  body: user_data,
  mode:"no-cors",

  headers: {
    "Content-Type": "application/json",
  },
});

let data = await res.json();

let username = document.getElementById('username').value;
getUserDetail(username, data.token);
console.log(data);
};

document.getElementById("submit").addEventListener("click", login);

let getUserDetail = async (username, token) => {
  console.log("here");
let res = await fetch(
  `https://masai-api-mocker.herokuapp.com/user/${username}`,
  {
      method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

let data = await res.json();
console.log("user data: ", data);
};

