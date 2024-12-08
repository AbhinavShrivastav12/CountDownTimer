document.getElementById("start-btn").addEventListener("click", function () {
    const dateInput = document.getElementById("date").value;
    const timeInput = document.getElementById("time").value;
  
    if (!dateInput || !timeInput) {
      alert("Please select a date and time!");
      return;
    }
  
    const targetDate = new Date(`${dateInput}T${timeInput}`);
    const messageElement = document.getElementById("message");
    messageElement.textContent = "";
  
    function updateCountdown() {
      const now = new Date();
      const timeDifference = targetDate - now;
  
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        messageElement.textContent = "Time's up!";
        return;
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }
  
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  });
  