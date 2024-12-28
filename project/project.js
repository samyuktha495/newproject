
const monthNameEl = document.getElementById("month-name");
const prevDateEl = document.getElementById("prev-date");
const prevNameEl = document.getElementById("prev-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const nextNameEl=document.getElementById("next-name");
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

prevDateEle.innerText = previousDate.toLocaleString("en", { month: "long" ,
  day:"numeric", year: "numeric" });
nextDateEl.innerText = nextDate.toLocaleString("en", { month: "long",
   day: "numeric", year: "numeric" });

dayNumEl.innerText = date.getDate();

