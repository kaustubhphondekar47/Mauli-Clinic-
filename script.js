const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const themeButton = document.querySelector(".theme-toggle");
const form = document.querySelector(".appointment-form");
const statusText = document.querySelector(".form-status");
const dateInput = form?.querySelector('input[name="date"]');

const savedTheme = localStorage.getItem("mauli-clinic-theme");
const setTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeButton?.setAttribute("aria-pressed", String(isDark));
  themeButton?.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  const label = themeButton?.querySelector("span");
  if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
};

setTheme(savedTheme === "dark" ? "dark" : "light");
themeButton?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("mauli-clinic-theme", nextTheme);
  setTheme(nextTheme);
});

if (dateInput) {
  const now = new Date();
  const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  dateInput.min = today;
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  nav?.classList.toggle("is-open", isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav?.classList.contains("is-open")) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
    menuButton?.focus();
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const date = String(formData.get("date") || "").trim();
  const time = String(formData.get("time") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const request = [
    "Appointment request for Mauli Clinic",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Preferred date: ${date}`,
    `Preferred time: ${time}`,
    message ? `Reason for visit: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  if (statusText) {
    statusText.textContent = "WhatsApp will open with your request. Review the message there and tap Send to contact the clinic.";
  }
  window.open(`https://wa.me/919820829796?text=${encodeURIComponent(request)}`, "_blank", "noopener,noreferrer");
});
