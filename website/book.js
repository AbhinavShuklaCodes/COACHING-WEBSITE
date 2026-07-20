let button=document.querySelector("#backBtn")
button.addEventListener('click',()=>{
    window.location.href="index.html"
})

const form = document.querySelector(".lead-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    const lead = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        goal: document.getElementById("message").value.trim(),
        status: "Pending",
        bookedAt: new Date().toLocaleString()
    };

    if (
        lead.name === "" ||
        lead.email === "" ||
        lead.phone === "" ||
        lead.goal === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    leads.push(lead);

    localStorage.setItem("leads", JSON.stringify(leads));

    alert("Appointment request submitted successfully!");

    form.reset();
});