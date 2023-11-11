function save(searchNEW) {
  const newSearch = {search: searchNEW};

  clickedSave(searchNEW);

  try {
    const response = fetch('/api/saved', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newSearch),
    });
  const searches = response.json();
  } catch {
      console.log("Error saving search")
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
  let IDs = ["save1", "save2", "save3", "save4", "save5", "save6"]
  const reloadID = document.getElementById(IDs[num-1]);
  reloadID.innerHTML = "Saved!";
}

savedValues();