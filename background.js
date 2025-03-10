chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "startTimer") {
    let workTime = message.workTime;
    let breakTime = message.breakTime;

    chrome.alarms.create("workTimer", { delayInMinutes: workTime });
  }
});
chrome.runtime.onAlarm.addListener((alarm) => {
  if (alarm.name === "workTimer") {
    chrome.notification.create("breakReminder", {
      type: "basic",
      title: "Take a break!",
      message: "Walk around and stretch",
      priority: 2,
    });
    chrome.storage.local.get(["breakTime"], (data) => {
      chrome.alarms.create("breakTimer", { delayInMinutes: data.breakTime });
    });
  } else if (alarm.name === "breakTimer") {
    chrome.notification.create("workReminder", {
      type: "basic",
      title: "Break is over!",
      message: "Start getting on task",
      priority: 2,
    });
  }
});
