const userGrid = document.getElementById("userGrid");
const searchInput = document.getElementById("search");
let users = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    users = data;
    displayUsers(users);
  })
  .catch(error => console.error("Error fetching users:", error));

function displayUsers(usersToDisplay) {
  userGrid.innerHTML = "";
  usersToDisplay.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
    userGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query)
  );
  displayUsers(filteredUsers);
});
