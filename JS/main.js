var quoteEl = document.getElementById("quote");
var btnEl = document.getElementById("btn");

function generateQuote() {
  var quotes = [
    `"The best revenge is massive success." <br>
      --Frank Sinatra`,
    `"Beware of what you become in pursuit of what you want." <br>
      --Jim Rohn`,
    `"It's not what happens to you, but how you react to it that matters." <br>
     --Epictetus`,
    `"You miss 100% of the shots you don't take." <br>
      --Wayne Gretzy`,
    `"Resentment is like drinking poison and waiting for your enemies to die." <br>
      --Nelson Mandela`,
    `"Do not take life too seriously. You will not get out alive." <br>
      --Elbert Hubbard`,
  ];
  var res = "";
  res += quotes[Math.trunc(Math.random() * quotes.length)];
  quoteEl.innerHTML = res;
}

btnEl.onclick = generateQuote;
