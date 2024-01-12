function proceed() {
    const userName = document.getElementById("userName").value;
    if (userName.trim() !== "") {
      document.getElementById("welcomeMessage").style.display = "none";
      document.getElementById("greetingMessage").style.display = "block";
  
      const finalMessage = document.getElementById("finalMessage");
      finalMessage.innerHTML = `Welcome to the year 2024, ${userName}!`;
  
      sendGreetings("Nishikanta Hota", userName);
    } else {
      alert("Please enter your name.");
    }
  }
  
  function sendGreetings(from, to) {
    console.log(`From: ${from}, To: ${to}`);
  }
  