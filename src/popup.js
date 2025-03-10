document.getElementById("start-timer").addEventListener("click", () => {
  let workTime = parseInt(document.getElementById("work-time").value);
  let breakTime = parseInt(document.getElementById("break-time").value);

  console.log(workTime);
  console.log(breakTime);

  chrome.storage.local.set({ workTime, breakTime });

  chrome.runtime.sendMessage({ action: "startTimer", workTime, breakTime });
  alert("Break Timer Started!");
});
