const galleryImages=document.querySelectorAll(".gallery-image");
const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");



let currentIndex = 0;

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src=pic;


galleryImages.forEach((img, index) => {
    if (img.src.includes(pic)) {
      currentIndex = index;
    }
  });
}

function closeFullImg(){
    fullImgBox.style.display = "none";


}
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  fullImg.src = galleryImages[currentIndex].src;
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  fullImg.src = galleryImages[currentIndex].src;
});

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    galleryImages.forEach(image => {
      const category = image.getAttribute("data-category");
      if (filter === "all" || filter === category) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});


