const loadData = () => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => displayUser(data))
}
const displayUser = (data) =>{
    const divContainer = document.getElementById('body');
    divContainer.innerHTML = `
    <div class="card w-96 glass mt-10 shadow-lg">
            <figure><img class="mt-10 rounded-full" src="${data.results[0].picture.large}" alt="car!" /></figure>
            <div class="card-body">
                <h2 class="card-title text-2xl">${data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last}</h2>
                <p class="text-xl">Gender: ${data.results[0].gender}</p>
                <p class="text-xl">Age: ${data.results[0].dob.age}</p>
                <p class="text-xl">Country: ${data.results[0].location.country}</p>
                <p class="text-xl">Email: ${data.results[0].email}</p>
                
                <div class="card-actions justify-center mt-5">
                    <button onclick="newUser()" class="btn btn-primary">New User</button>
                </div>
            </div>
        </div>
    `;

console.log(data.results[0].name.first );
}
const newUser = () =>{
    loadData();
}
loadData();