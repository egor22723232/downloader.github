document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("redirect-now");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      window.location.href = "https://www.mediafire.com/file/0fc55fvt953cry1/Setup.zip/file";
    });
  }
});
