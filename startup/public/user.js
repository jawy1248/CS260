async function loadSearches() {

    let pic1HTML =  
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 1</span>' +
        '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn1.jpeg" alt="Furniture Set 1" width="300" /></div>' +
    '</div>';
    
    let pic2HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 2</span>' +
        '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn2.jpg" alt="Furniture Set 2" width="300" /></div>' +
    '</div>';
    
    let pic3HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 3</span>' +
        '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn3.jpg" alt="Furniture Set 3" width="300" /></div>' +
    '</div>';
    
    let pic4HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 4</span>' +
        '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn4.jpg" alt="Furniture Set 4" width="300" /></div>' +
    '</div>';
    
    let pic5HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 5</span>' +
        '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn5.jpg" alt="Furniture Set 5" width="300" /></div>' +
    '</div>';
    
    let pic6HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 6</span>' +
        '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn6.jpg" alt="Furniture Set 6" width="300" /></div>' +
    '</div>';
    
    let picHTML = [pic1HTML, pic2HTML, pic3HTML, pic4HTML, pic5HTML, pic6HTML];
    
    try {
        const response = await fetch('/api/saved');
        searches = await response.json();
    } catch {
        console.log("Error getting searches");
    }

    newHTML = "";
    for (const [i, searchItem] of searches.entries()) {
        newHTML += picHTML[searchItem.search-1];
    }

    displaySearches(newHTML);
}

function displaySearches(HTML){
    let usernameText = localStorage.getItem('username');
    const reloadID = document.getElementById("reloadName");
    const reloadID2 = document.getElementById("reloadData");
    reloadID.innerHTML = "Welcome <lead><b>" + usernameText + "</b></lead>, here are your saved searches";
    reloadID2.innerHTML = HTML;
}

loadSearches();