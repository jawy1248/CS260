function save(searchNEW) {
  const newSearch = {search: searchNEW};

  clickedSave(searchNEW);

  if(isSaved(searchNEW) === false){
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
  try {
    const response = await fetch('/api/saved');
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
  let contents = el.innerHTML;
  contents = (isSaved(num) ? "Save" : "Unsave");
}

function isSaved(num){
  const IDs = ["save1", "save2", "save3", "save4", "save5", "save6"];
  const el = document.getElementById(IDs[num-1]);
  const contents = el.innerHTML;
  return ((contents === "Save") ? false : true);
}

savedValues();