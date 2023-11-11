async function loadSearches() {

    let pic1HTML =  
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 1</span>' +
        '<img class="m-1 rounded-3" src="images/furn/furn1.jpeg" alt="Furniture Set 1" height="300" />' +
    '</div>';
    
    let pic2HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 2</span>' +
        '<img class="m-1 rounded-3" src="images/furn/furn2.jpg" alt="Furniture Set 2" height="300" />' +
    '</div>';
    
    let pic3HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 3</span>' +
        '<img class="m-1 rounded-3" src="images/furn/furn3.jpg" alt="Furniture Set 3" height="300" />' +
    '</div>';
    
    let pic4HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 4</span>' +
        '<img class="m-1 rounded-3" src="images/furn/furn4.jpg" alt="Furniture Set 4" height="300" />' +
    '</div>';
    
    let pic5HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 5</span>' +
        '<img class="m-1 rounded-3" src="images/furn/furn5.jpg" alt="Furniture Set 5" height="300" />' +
    '</div>';
    
    let pic6HTML = 
    '<div class="col d-flex flex-column m-3">' +
        '<span class="h5">Furniture Set 6</span>' +
        '<img class="m-1 rounded-3" src="images/furn/furn6.jpg" alt="Furniture Set 6" height="300" />' +
    '</div>';
    
    let picHTML = [pic1HTML, pic2HTML, pic3HTML, pic4HTML, pic5HTML, pic6HTML];
    
    try {
        const response = await fetch('/api/scores');
        searches = await response.json();
        localStorage.setItem('searches', JSON.stringify(searches));
    } catch {
        console.log("Error getting scores")
    }

    newHTML = '';
    for (const [i, searchItem] of searches.entries()) {
        newHTML += picHTML[searchItem.search];
    }

    displaySearches(HTML);
}

function displaySearches(HTML){
    let usernameText = localStorage.getItem('username');
    const reloadID = document.getElementById("reloadName");
    const reloadID2 = document.getElementById("reloadData");
    reloadID.innerHTML = "Welcome <lead><b>" + usernameText + "</b></lead>, here are your saved searches";
    reloadID2.innerHTML = HTML;
}

loadSearches();