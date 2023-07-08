const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const content = document.getElementById("categories-content");

TEST TEXT POOJA

NAVANSHU

veeraj

daddy

const moveLeft = () => {
  content.scrollBy({
    left: 200,
    behavior: "smooth"
  });
};

const moveRight = () => {
  content.scrollBy({
    left: -200,
    behavior: "smooth"
  });
};

