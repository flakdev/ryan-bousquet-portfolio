document.addEventListener("DOMContentLoaded", () => {
  const lb = document.getElementById("lightbox");
  const lbImg = lb.querySelector("img");
  const lbCap = lb.querySelector(".lb-cap");
  const closeBtn = lb.querySelector(".lb-close");

  document.querySelectorAll(".gallery button[data-full]").forEach((btn) => {
    btn.addEventListener("click", () => {
      lbImg.src = btn.getAttribute("data-full");
      lbCap.textContent = btn.getAttribute("data-caption") || "";
      lb.classList.add("open");
    });
  });

  function close() {
    lb.classList.remove("open");
    lbImg.src = "";
  }
  closeBtn.addEventListener("click", close);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
});
