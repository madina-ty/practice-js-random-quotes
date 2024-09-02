const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById('quote');
const btn = document.getElementById('btn');

btn.addEventListener("click", async () => { 
      const response = await fetch(apiUrl); 
      const data = await response.json(); 
      quote.innerHTML = data.content; 
  });