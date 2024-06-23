const API_KEY = "Zskt6hH20PhdrOAaAUWYqg2DmgM";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function getStatus(e) {
    e.preventDefault();
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    const response = await fetch(queryString);
    const data = await response.json();
    if (response.ok) {
        console.log(data.expiry);
    } else {
        throw new Error(data.error);
    }    
};

















// fetch(`https://ci-jshint.herokuapp.com/api?api_key=${apiKey}`, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${apiKey}`
//     }
// })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("Response was not successful.");
//         }
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
