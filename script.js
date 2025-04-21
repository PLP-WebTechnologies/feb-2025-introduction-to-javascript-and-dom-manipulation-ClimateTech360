function changeContent() {
    const info = document.getElementById('climate-info');
    info.textContent = "Human activities like burning fossil fuels are the main cause of climate change.";
    info.style.color = "#2e7d32";
    info.style.fontWeight = "bold";
}

function toggleTip() {
    const tip = document.getElementById('climate-tip');
    if (tip.style.display === "none") {
        tip.style.display = "block";
    } else {
        tip.style.display = "none";
    }
}

