function save(search) {
    try {
      const response = fetch('/api/saved', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(search),
      });
    } catch {
        console.log("Error saving search")
    }
  }