
const monthNameEl = document.getElementById("month-name");
const prevDateEl = document.getElementById("prev-date");
const dayNameEl = document.getElementById("day-name");
const dayNameEle = document.getElementById("day-name1");
const dayNumEl = document.getElementById("day-number");
const nextDateEl = document.getElementById("next-date");
const yearEl = document.getElementById("year");


const date = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});

prevDateEl.innerText = previousDate.toLocaleString("en", { month: "long" ,
  day:"numeric", year: "numeric" });
nextDateEl.innerText = nextDate.toLocaleString("en", { month: "long",
   day: "numeric", year: "numeric" });

dayNumEl.innerText = date.getDate();

