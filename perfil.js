const params = new URLSearchParams(document.location.search)
const id = params.get("userId")
const url = `https://jsonplaceholder.typicode.com/users/${id}`

console.log(id)
bringData()

//FUNCTIONS
function bringData() {
	fetch(url)
		.then((response) => response.json())
		.then((json) => writeHTML(json))
}

function writeHTML(jsonData) {
	document.querySelector(".data").innerHTML += `
            <article class="userData">
                <h3>${jsonData.name}</h3>
                <p><strong>Telephono:</strong> ${jsonData.phone}</p>
                <p><strong>User name:</strong> ${jsonData.username}</p>
                <p><strong>Email:</strong> <a href="#">${
									jsonData.email
								} </a></p>
                <p><strong>Website:</strong><a href="#"> ${
									jsonData.website
								}</a></p>
                <div class="companyCont">
                    <span><strong>Company</strong></span>    
                    <ul>
                        <li>${jsonData.company.name.toUpperCase()}</li>
                        <li>${jsonData.company.catchPhrase}</li>
                        <li>${jsonData.company.bs}</li>
                    </ul>
                </div>
                <div class="companyCont">
                    <span><strong>Address</strong></span>    
                    <ul>
                        <li>${jsonData.address.street}, ${
		jsonData.address.suite
	}</li>
                        <li>${jsonData.address.city}, ${
		jsonData.address.zipcode
	}</li>                        
                    </ul>
                </div>
                
            </article>
    `
}
