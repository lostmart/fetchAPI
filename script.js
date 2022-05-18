const url = "https://jsonplaceholder.typicode.com/users/"
function bringData() {
	fetch(url)
		.then((response) => response.json())
		.then((json) => giveData(json))
}


trying()

function giveData(jsonData) {
	// console.log(jsonData)
	jsonData.forEach((user) => {
		document.querySelector(".data").innerHTML += `
            <a href="profile.html?userId=${user.id}">
                <article>
                    <h3>${user.name}</h3>
                    <p><strong>Telephono:</strong> ${user.phone}</p>
                    <p><strong>User name:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    
                </article>
            </a>
            `
	})
}

// same function as bringdata() but using async/await with try/catch syntax
async function trying(){
    try {
      let response = await fetch(url)
      let data = await response.json()
      console.log(data)
      giveData(data)
    }
    catch(err) {
      throw "something happened on the way to heaven"
    }
}
