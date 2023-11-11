async function save(searchNEW) {
    const newSearch = {name: "user", search: searchNEW};

    try {
      const response = fetch('/api/saved', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newSearch),
      });
    const searches = await response.json();
    localStorage.setItem('searches', JSON.stringify(searches));
    } catch {
        console.log("Error saving search")
    }
  }

save(search);