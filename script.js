let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");
let scrollContainer = document.querySelector(".gallery");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  //   This ensures that when you programmatically scroll the container, the scroll happens instantly without any smooth animation.
  scrollContainer.style.scrollBehavior = "auto";
  console.log(`Scrolled to: ${scrollContainer.scrollLeft}`);
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 500;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 500;
});
