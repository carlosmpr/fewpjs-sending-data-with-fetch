// Add your code here
function appenCode(text) {
    let h1 = document.createElement('h1')
       h1.textContent = `${text} Unauthorized Access`
       document.body.appendChild(h1)
    
}

const url = "http://localhost:3000/users"
function submitData (name, email){
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
         email: email
        })
      }; 


     fetch(url, configurationObject).then(function(response) {
        return response.json();
      })
      .then(function(object) {
         appenCode(object.id)
      
      })
      .catch(function(error) {
        alert("Bad things! Ragnarők!");
         appenCode("Unauthorized Access");
      }); 
     
}




