function updateClock() {
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
  
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondDeg = seconds * 6; // 360/60 = 6 degrees per second
    const minuteDeg = minutes * 6 + seconds * 0.1; // 6 degrees per minute + additional based on seconds
    const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour + 0.5 degrees per minute
  
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
  }
  
  setInterval(updateClock, 1000); // Update every second
  updateClock(); // Initial call to set the clock
  