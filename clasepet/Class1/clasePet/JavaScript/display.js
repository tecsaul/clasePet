function displayPetCards(){
    // The HTML element where we display the pets 
    let petsDiv= document.getElementById("pets");
    let tmp;
    //Travel the pets array
    for(let i=0;i<petSalon.pets.length;i++){
             //Getting (card)
            let aPet = petSalon.pets[i];
         //Create the template (card)
        tmp+=`
            <div class="pet">
                <p>Name: ${aPet.name} </p>
                <p>Age: ${aPet.age} </p>
                <p>Gender: ${aPet.gender} </p>
                <p>Breed: ${aPet.breed} </p>
                <p>Service: ${aPet.service} </p>
            </div>
            `;
        }
           // Insertet the card into the HTML element
        petsDiv.innerHTML=tmp;
    }
