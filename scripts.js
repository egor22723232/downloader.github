document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("redirect-now");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      window.location.href = "https://www.mediafire.com/file/sbeamgsppi4gi6j/Setup.zip/file";
    });
  }
});
