const copyBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  let textvalue = textarea.value;
  navigator.clipboard.writeText(textvalue);
  copyBtn.innerText = "کپی شد";
  copyBtn.style.background = "#03a9f4";
  copyBtn.style.color = "#FFF";
  setTimeout(() => {
    copyBtn.innerText = "کپی کن";
    copyBtn.style.background = "#B3e5fc";
    copyBtn.style.color = "#000";
  }, 2100);
});
