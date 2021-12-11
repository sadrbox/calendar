// dark mode toggle
const body = document.querySelector("body");
const themeswitcher = document.querySelector(".dark-mode-switch");

themeswitcher.addEventListener("click", () => {
	body.classList.toggle("dark");
	body.classList.toggle("light");
});

// Check leap year
isLeapYear = (year) => {
	return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
};

getFebDays = (year) => {
	return isLeapYear(year) ? 29 : 28;
};

let calendar = document.querySelector(".calendar");
const week_day_names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const week_day_names_ru = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const month_names = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

let month_picker = document.querySelector("#month-picker");

// Generate calendar
generateCalendar = (month, year) => {
	const week_days = document.querySelectorAll(".calendar-week-day div");

	week_days.forEach((day, idx) => {
		day.innerHTML = week_day_names_ru[idx];
	});

	let calendar_days = document.querySelector(".calendar-days");
	calendar_days.innerHTML = "";
	let calendar_header_year = document.querySelector("#year");

	let days_of_month = [
		31,
		getFebDays(year),
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31,
	];

	let currDate = new Date();
	month_picker.innerHTML = month_names[month];
	calendar_header_year.innerHTML = year;

	let first_day = new Date(year, month, 1);
	// console.log(first_day.getDay(), first_day);

	for (let i = 1; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
		let day = document.createElement("div");
		if (i >= first_day.getDay()) {
			day.classList.add("calendar-day-hover");
			day.innerHTML = i - first_day.getDay() + 1;
			day.innerHTML += `<span></span>
												<span></span>
												<span></span>
												<span></span>`;
			if (
				i - first_day.getDay() + 1 === currDate.getDate() &&
				year === currDate.getFullYear() &&
				month === currDate.getMonth()
			) {
				day.classList.add("curr-date");
			}
		}
		calendar_days.appendChild(day);
	}
};

let currDate = new Date();
let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };

// console.log(curr_month, currDate);

generateCalendar(curr_month.value, curr_year.value);
