let usernameText = localStorage.getItem('username');
const reloadID = document.getElementById("reloadName");
const reloadID2 = document.getElementById("reloadData");
reloadID.innerHTML = "Welcome <lead><b>" + usernameText + "</b></lead>, here are your saved searches";
reloadID2.innerHTML = '<div class="row"><div class="col"><img src="images/furn/furn1.jpeg" alt="Furniture Set 1" height="300" /></div><div class="col"><img src="images/furn/furn2.jpg" alt="Furniture Set 2" height="300" /></div></div>'

