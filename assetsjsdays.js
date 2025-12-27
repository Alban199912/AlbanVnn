const startDate = new Date("2023-08-01"); // 改成你們交往日
const today = new Date();

const diffTime = today - startDate;
const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("days").innerText = `第 ${days} 天 ❤️`;
