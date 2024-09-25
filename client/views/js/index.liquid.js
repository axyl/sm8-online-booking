document
  .getElementById("step1")
  .addEventListener("submit", async function (evt) {
    evt.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const suburb = document.getElementById("suburb").value;
    console.log("Base URL from config file is {{apiBaseURL}}");
    const res = await fetch("{{apiBaseURL}}/step1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, suburb }),
    });
    const data = await res.json();
    // TODO: Handle the response data, error states.
    sessionStorage.setItem("submissionId", data.submissionId);
    sessionStorage.setItem("name", name);
    window.location.href = "step2.html";
  });
