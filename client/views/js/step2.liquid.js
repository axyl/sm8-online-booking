/*
{% comment %}
The apiBaseURL will get replaced by the correct URL when eleventy compiles the site.
{% endcomment %}
*/
document
  .getElementById("step2")
  .addEventListener("submit", async function (evt) {
    evt.preventDefault();
    const submissionId = sessionStorage.getItem("submissionId");
    const issue = document.getElementById("issue").value;
    const buildingType = document.getElementById("buildingType").value;
    const costProvided = document.getElementById("costEstimate").value;
    console.log("Base URL from config file is {{apiBaseURL}}");
    const res = await fetch("{{apiBaseURL}}/step2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ submissionId, issue, buildingType, costProvided }),
    });
    const data = await res.json();
    // TODO: Handle the response data, error states.
    window.location.href = "step3.html";
  });

document
  .getElementById("getCostEstimate")
  .addEventListener("click", async function (evt) {
    const submissionId = sessionStorage.getItem("submissionId");
    const issue = document.getElementById("issue").value;
    const buildingType = document.getElementById("buildingType").value;
    const res = await fetch("{{apiBaseURL}}/step2/getCostEstimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ submissionId, issue, buildingType }),
    });
    const data = await res.json();
    document.getElementById("costEstimate").innerText = data.costEstimate;
  });
