const moreBtn = document.querySelector(".more-btn");
const moreBtnText = document.querySelector(".more-btn__text");
const hiddenBlocks = document.querySelectorAll(".brand-list__item--invisible");
moreBtn.addEventListener("click", () => {
  const areBlocksHidden = toggleHiddenBlocks();
  changeMoreBtnText(areBlocksHidden);
});
function changeMoreBtnText(condition) {
  if (condition) {
    moreBtnText.textContent = "Показать все";
  } else {
    moreBtnText.textContent = "Скрыть";
  }
}
function toggleHiddenBlocks() {
  hiddenBlocks.forEach((block) => {
    block.classList.toggle("hidden");
  });
  return hiddenBlocks[0].classList.contains("hidden");
}
