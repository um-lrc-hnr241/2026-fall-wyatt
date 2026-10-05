const picker = document.querySelector("#hat-picker");
const siteContent = document.querySelector("#site-content");
const siteHeader = document.querySelector("#site-header");
const siteFooter = document.querySelector("#site-footer");

function showSite(theme) {
  document.body.dataset.theme = theme;
  picker.hidden = true;
  siteContent.hidden = false;
  siteHeader.hidden = false;
  siteFooter.hidden = false;
  document.querySelector("#welcome-title").focus();
}

document.querySelectorAll(".hat-button").forEach((button) => {
  button.addEventListener("click", () => showSite(button.dataset.theme));
});

document.querySelector("#change-hat").addEventListener("click", () => {
  siteContent.hidden = true;
  siteHeader.hidden = true;
  siteFooter.hidden = true;
  picker.hidden = false;
  document.querySelector("#choice-title").focus();
});