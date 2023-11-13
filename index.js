const clcBtn = document.getElementById("calc-btn");
const returnBtn = document.getElementById("return-btn");
const bedtimeHoursDiv = document.getElementById("bedtime-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");

clcBtn.addEventListener("click", calcBedTimes);
returnBtn.addEventListener("click", () => {
  promptSection.classList.remove("hidden");
  imageContainer.classList.remove("hidden");
  resultSection.classList.add("hidden");
});

function calcBedTimes() {
    const hourInput = parseInt(document.getElementById("hour-dropdown").value); 
    const minuteInput = parseInt(document.getElementById("minute-dropdown").value); 
    const ampmInput = document.getElementById("ampm-dropdown").value;

    const wakeUpTime = new Date();
    wakeUpTime.setHours(hourInput, minuteInput); 
    if (ampmInput == "PM" && hourInput != 12) {
        wakeUpTime.setHours(wakeUpTime.getHours() + 12); 
    } else if (ampmInput == "AM" && hourInput == 12) {
        wakeUpTime.setHours(0); 
    }
    
    const bedtime = new Date(wakeUpTime);
    bedtime.setMinutes(wakeUpTime.getMinutes() - 14 - 630); 
    bedtimeHoursDiv.innerHTML = "";
    
    for (let i = 1; i <= 6; i++) {
        bedtime.setMinutes(bedtime.getMinutes() + 90);
        const bedtimeString = bedtime.toLocaleTimeString("en-US", {
        timeStyle: "short",
        });
        const cycleDiv = document.createElement("div");
        cycleDiv.classList.add("cycle");
        cycleDiv.setAttribute("id", `cycle-${i}`);
        cycleDiv.textContent = bedtimeString;
        bedtimeHoursDiv.appendChild(cycleDiv);
    }

    promptSection.classList.add("hidden");
    imageContainer.classList.add("hidden");
    resultSection.classList.remove("hidden");
}

