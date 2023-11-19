function save(searchNEW) {
  let userName = localStorage.getItem('userName');
  let newSearch = {email: userName, search: searchNEW};

  clickedSave(searchNEW);

  if(isSaved(searchNEW)){
    try {
      const response = fetch('/api/saved', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newSearch),
      });
    } catch {
        console.log("Error saving search")
    }
  } else {
    try {
      const response = fetch('/api/saved', {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newSearch),
      });
    } catch {
        console.log("Error unsaving search")
    }
  }
}

async function savedValues(){
  let userName = localStorage.getItem('userName');
  let newSearch = {email: userName};

  try {
    const response = await fetch('/api/saved', {
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newSearch), 
    });
    
    searches = await response.json();

    for (const [i, searchItem] of searches.entries()) {
      clickedSave(searchItem.search);
    }
  } catch {
      console.log("Error getting searches");
  }
}

function clickedSave(num){
  let IDs = ["save1", "save2", "save3", "save4", "save5", "save6"];
  let el = document.getElementById(IDs[num-1]);
  let elClass = el.classList;
  if(isSaved(num)){
    el.innerHTML = "Save";
    elClass.replace("btn-danger", "btn-light");
  } else {
    el.innerHTML = "Unsave";
    elClass.replace("btn-light", "btn-danger");
  }
}

function isSaved(num){
  const IDs = ["save1", "save2", "save3", "save4", "save5", "save6"];
  const el = document.getElementById(IDs[num-1]);
  const elContents = el.innerHTML;
  return ((elContents === "Save") ? false : true);
}

savedValues();