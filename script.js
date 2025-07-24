function trackParcel() {
  const parcelId = document.getElementById("parcelId").value;
  const result = document.getElementById("result");

  if (parcelId.trim() === "") {
    result.innerText = "Please enter a Parcel ID.";
    result.classList.remove("hidden");
    return;
  }

  // For now, just show a fake status
  result.innerText = `Parcel ID ${parcelId} is currently in transit 🚚`;
  result.classList.remove("hidden");
}

