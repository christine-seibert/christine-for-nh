function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (minutes === 0) {
    return `${hours} hours(s)`;
  }
  return `${hours} hours(s), ${minutes} minute(s)`;
}

function readingTime() {
  const isReadTime = document.getElementById("readtime");
  const articles = document.getElementsByTagName("article");
  if (!isReadTime && articles && window.getComputedStyle(articles[0].parentElement).display !== "none") {
    const text = articles[0].innerText;
    const wpm = 128; // 1/2 of AVG WPM (255)
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm); // in minutes
    let readtime = "Estimated read time: ";
    if (time < 60) {
      readtime += `${time} minute(s)`;
    } else {
      readtime += `${toHoursAndMinutes(time)}`;
    }

    const h1 = document.querySelector(".md-content h1");
    const readtimeElement = document.createElement("p");
    readtimeElement.setAttribute("id", "readtime");
    readtimeElement.innerHTML = `<small>${readtime}</small>`;
    h1.parentNode.insertBefore(readtimeElement, h1.nextSibling);
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  readingTime();
});
