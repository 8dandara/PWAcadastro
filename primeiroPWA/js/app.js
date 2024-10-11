document.getElementById('client-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    const response = await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone })
    });
  
    const client = await response.json();
    displayClient(client);
  });
  
  function displayClient(client) {
    const clientList = document.getElementById('client-list');
    const li = document.createElement('li');
    li.textContent = `${client.name} - ${client.email} - ${client.phone}`;
    clientList.appendChild(li);
  }
  