capitalize = ()=>{
    let username = document.getElementById("username").value;
for (let i = 0; i < username.length; i++) {
   username =  (username.charAt(0) === username.charAt(0).toLowerCase()) ? username.slice(0, 1).toUpperCase() + username.slice(1).toLowerCase() : username;
}
document.getElementById("result").innerHTML= username;
// console.log(username);
}