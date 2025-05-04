//your JS code here. If required.
document.getElementById("enterBtn").addEventListener("click", function () {
  const statusElement = document.getElementById("status");

  // Replace <p> with <h1>Entered Metaverse</h1>
  const h1 = document.createElement("h1");
  h1.id = "status"; // Maintain the same ID
  h1.innerText = "Entered Metaverse";

  statusElement.replaceWith(h1);
});
