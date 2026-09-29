
let childName = "";

document.getElementById("nameInput").addEventListener("input", (e) => {
  childName = e.target.value.trim();
});

// will hold 0 or 1 to select ADOS conversion table
let A1Value = null; 

document.querySelectorAll(".A1-btn").forEach(btn => {
  btn.setAttribute("aria-pressed", "false"); // initialize

  btn.addEventListener("click", () => {
    A1Value = Number(btn.dataset.value);

    // reset all buttons in this group, then mark the clicked one
    document.querySelectorAll(".A1-btn").forEach(b => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");
  });
});

const AGE_MIN = 2;
const AGE_MAX = 14;

const ageInput = document.getElementById("ageInput");
const ageError = document.getElementById("ageError");

let childAge = null; // validated value for the lookup table

ageInput.addEventListener("input", () => {
  const raw = ageInput.value.trim();
  const num = Number(raw);

  const isValidNumber = raw !== "" && !isNaN(num) && Number.isInteger(num);
  const inRange = isValidNumber && num >= AGE_MIN && num <= AGE_MAX;

  if (!isValidNumber) {
    showError("Please enter a whole number.");
    childAge = null;
  } else if (!inRange) {
    showError(`Age must be between ${AGE_MIN} and ${AGE_MAX}.`);
    childAge = null;
  } else {
    clearError();
    childAge = num; // stored for lookup-table use
  }
  console.log("child's age = ", childAge)
});

function showError(message) {
  ageError.textContent = message;
  ageError.classList.add("visible");
  ageInput.classList.add("invalid");
}

function clearError() {
  ageError.textContent = "";
  ageError.classList.remove("visible");
  ageInput.classList.remove("invalid");
}



// Create the results tables

const SAresults = {}; // { sectionId: value }

function renderSASections() {
  const SAbody = document.getElementById("SA-form");
  SAbody.innerHTML = "";

  saSECTIONS.forEach(section => {
    const item = document.createElement("section");
    item.className = "item";
    item.innerHTML = `
      <div class="item-head">
        <span class="code">${escapeHtml(section.id)}</span>
        <h2>${escapeHtml(section.title)}</h2>
      </div>
      <table class="rating">
        <tbody>
          <tr>
            <td class="options-cell">
              ${section.options.map((opt, i) => `
                <button type="button"
                        class="opt-btn"
                        data-section="${section.id}"
                        data-value="${opt.value}"
                        aria-pressed="false">

                  <span class="txt">${escapeHtml(opt.text)}</span>
                </button>
              `).join("")}
            </td>
            <td class="result-cell">
              <div class="result-box" id="result-${section.id}">
                <div class="result-label">Algorithm value</div>
                <div class="result-value">&mdash;</div>
                <div class="result-hint">No selection yet</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    `;
    SAbody.appendChild(item);
  });

  
  SAbody.querySelectorAll(".opt-btn").forEach(btn => {
    btn.addEventListener("click", onSAOptionClick);
  });
}

function onSAOptionClick(e) {
  const btn = e.currentTarget;
  const sectionId = btn.dataset.section;
  const value = Number(btn.dataset.value);

  SAresults[sectionId] = value;

  document.querySelectorAll(`.opt-btn[data-section="${cssEscape(sectionId)}"]`)
    .forEach(b => b.setAttribute("aria-pressed", String(b === btn)));

  const box = document.getElementById(`result-${sectionId}`);
  box.classList.add("filled");
  box.querySelector(".result-value").textContent = value;
  box.querySelector(".result-hint").textContent = "";

  updateSATotal();
}

function updateSATotal() {
  const SAtot = Object.values(SAresults).reduce((sum, val) => sum + val, 0);
  document.getElementById("SAtotal").textContent = `SA TOTAL = ${SAtot}`;
  updateOverallTotal();
}

// Create the results tables

const RRBresults = {}; // { sectionId: value }

function renderRRBSections() {
  const RRBbody = document.getElementById("RRB-form");
  RRBbody.innerHTML = "";

  rrbSECTIONS.forEach(section => {
    const item = document.createElement("section");
    item.className = "item";
    item.innerHTML = `
      <div class="item-head">
        <span class="code">${escapeHtml(section.id)}</span>
        <h2>${escapeHtml(section.title)}</h2>
      </div>
      <table class="rating">
        <tbody>
          <tr>
            <td class="options-cell">
              ${section.options.map((opt, i) => `
                <button type="button"
                        class="opt-btn"
                        data-section="${section.id}"
                        data-value="${opt.value}"
                        aria-pressed="false">

                  <span class="txt">${escapeHtml(opt.text)}</span>
                </button>
              `).join("")}
            </td>
            <td class="result-cell">
              <div class="result-box" id="result-${section.id}">
                <div class="result-label">Algorithm value</div>
                <div class="result-value">&mdash;</div>
                <div class="result-hint">No selection yet</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    `;
    RRBbody.appendChild(item);
  });

  
  RRBbody.querySelectorAll(".opt-btn").forEach(btn => {
    btn.addEventListener("click", onRRBOptionClick);
  });
}

function onRRBOptionClick(e) {
  const btn = e.currentTarget;
  const sectionId = btn.dataset.section;
  const value = Number(btn.dataset.value);

  RRBresults[sectionId] = value;

  document.querySelectorAll(`.opt-btn[data-section="${cssEscape(sectionId)}"]`)
    .forEach(b => b.setAttribute("aria-pressed", String(b === btn)));

  const box = document.getElementById(`result-${sectionId}`);
  box.classList.add("filled");
  box.querySelector(".result-value").textContent = value;
  box.querySelector(".result-hint").textContent = "";

  updateRRBTotal();
}

function updateRRBTotal() {
  const RRBtot = Object.values(RRBresults).reduce((sum, val) => sum + val, 0);
  document.getElementById("RRBtotal").textContent = `RRB TOTAL = ${RRBtot}`;
  updateOverallTotal();
}

let overallTot = 0;
function updateOverallTotal() {
  const SAtot = Object.values(SAresults).reduce((sum, val) => sum + val, 0);
  const RRBtot = Object.values(RRBresults).reduce((sum, val) => sum + val, 0);
  overallTot = SAtot + RRBtot;

  document.getElementById("OverallTotal").textContent = `OVERALL TOTAL = ${overallTot}`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cssEscape(str) {
  return String(str).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}

renderSASections();
renderRRBSections();

document.getElementById("compScorebtn").addEventListener("click", () => {
  const comparisonScore = getComparisonScore(A1Value, childAge, overallTot);

  const output = document.getElementById("ADOScompScore");

  if (comparisonScore !== null) {
    output.textContent = `ADOS-2 Comparison Score: ${comparisonScore}`;
  } else {
    output.textContent = "Unable to calculate comparison score — check all fields are filled in.";
  }
});

function getComparisonScore(A1Value, childAge, overallTot) {
  const table = conversionTable[A1Value];
  if (!table) {
    console.error("No table found for A1Value:", A1Value);
    return null;
  }

  const ageBlock = table.find(block => childAge >= block.ageMin && childAge <= block.ageMax);
  if (!ageBlock) {
    console.error("No age block found for childAge:", childAge);
    return null;
  }

  const match = ageBlock.ranges.find(range => overallTot >= range.min && overallTot <= range.max);
  if (!match) {
    console.error("No matching range for overallTot:", overallTot);
    return null;
  }

  return match.score;
}



function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}

showTime();
setInterval(function () {
	showTime();
}, 1000);