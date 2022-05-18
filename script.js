const url = "https://jsonplaceholder.typicode.com/users/"
function bringData() {
	fetch(url)
		.then((response) => response.json())
		.then((json) => giveData(json))
}

bringData()

function giveData(jsonData) {
	console.log(jsonData)
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

	//document.querySelector(".data").innerHTML = jsonData[0].name
}
