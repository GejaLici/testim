document.getElementById("continueBtn").addEventListener("click", function() {
    let selectedTime = document.getElementById("timeSelect").value;
    
    if (selectedTime) {
        localStorage.setItem("selectedTime", selectedTime);
        window.location.href = "form.html"; // Redirect to form page
    } else {
        alert("Please select a time before continuing.");
    }
});