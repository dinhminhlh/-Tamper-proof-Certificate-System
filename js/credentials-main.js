const credentials = [
  {
    credentialType: "Educational Degree",
    contactName: "Avi Abashidze",
    exampleID: "948563",
    dateSign: "Not Signed",
    contactStatus: "Pending Connection",
    credentialStatus: "Credential Draft",
  },
  {
    credentialType: "Educational Degree",
    contactName: "Avi Abashidze",
    exampleID: "948563",
    dateSign: "Not Signed",
    contactStatus: "Connected",
    credentialStatus: "Credential Draft",
  },
  {
    credentialType: "Educational Degree",
    contactName: "Avi Abashidze",
    exampleID: "948563",
    dateSign: "Not Signed",
    contactStatus: "Pending Connection",
    credentialStatus: "Credential Draft",
  },
  {
    credentialType: "Educational Degree",
    contactName: "Avi Abashidze",
    exampleID: "948563",
    dateSign: "Not Signed",
    contactStatus: "Pending Connection",
    credentialStatus: "Credential Draft",
  },
  {
    credentialType: "Educational Degree",
    contactName: "Avi Abashidze",
    exampleID: "948563",
    dateSign: "Not Signed",
    contactStatus: "Pending Connection",
    credentialStatus: "Credential Draft",
  },
  {
    credentialType: "Educational Degree",
    contactName: "Avi Abashidze",
    exampleID: "948563",
    dateSign: "Not Signed",
    contactStatus: "Pending Connection",
    credentialStatus: "Credential Draft",
  },
  {
    credentialType: "Educational Degree",
    contactName: "Avi Abashidze",
    exampleID: "948563",
    dateSign: "Not Signed",
    contactStatus: "Connected",
    credentialStatus: "Credential Draft",
  },
];

const creContainer = document.querySelector("tbody");

function renderCredentialList(credentials) {
  const result = credentials.map((cre) => {
    return `
        <tr class="field-row">
                  <td class="cre-tb-col">
                    <input type="checkbox" class="cre-item-checkbox" />
                  </td>
                  <td class="cre-tb-col">
                    <div class="cap-img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="40px"
                        height="40px"
                        viewBox="0 0 225.000000 225.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <metadata>
                          Created by potrace 1.16, written by Peter Selinger
                          2001-2019
                        </metadata>
                        <g
                          transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                          fill="#9CFF2E"
                          stroke="none"
                        >
                          <path
                            d="M930 1644 c-398 -153 -431 -166 -427 -177 2 -6 10 -14 18 -19 13 -7 513 -201 591 -229 35 -12 44 -10 165 36 70 26 145 56 167 65 l38 16 -168 77 c-93 42 -173 83 -178 90 -13 21 0 47 24 47 25 0 417 -175 444 -199 49 -42 71 -149 40 -196 -11 -17 -14 -35 -10 -57 4 -18 9 -78 11 -133 4 -112 22 -176 62 -217 33 -34 36 -34 90 -2 l43 25 -29 42 c-74 109 -111 225 -78 250 27 21 26 78 -2 104 -12 12 -20 38 -24 82 -4 49 -12 74 -35 106 l-30 42 63 22 c68 24 104 46 94 56 -16 15 -622 245 -647 245 -15 -1 -115 -35 -222 -76z"
                          />
                          <path
                            d="M740 1158 c0 -136 4 -144 97 -191 91 -47 166 -61 323 -61 126 -1 154 2 217 22 91 31 169 81 165 107 -1 11 -5 36 -8 57 -5 25 -1 43 10 59 17 25 23 119 7 119 -4 0 -95 -32 -202 -71 -224 -82 -175 -83 -439 15 l-170 63 0 -119z"
                          />
                        </g>
                      </svg>
                    </div>
                  </td>
                  <td class="cre-tb-col">
                    <span class="tb-cre-fieldname">Credentials Type</span>
                    <div class="tb-cre-value">${cre.credentialType}</div>
                  </td>
                  <td class="cre-tb-col">
                    <span class="tb-cre-fieldname">Contact Name</span>
                    <div class="tb-cre-value">${cre.contactName}</div>
                  </td>
                  <td class="cre-tb-col">
                    <span class="tb-cre-fieldname">Example ID</span>
                    <div class="tb-cre-value">${cre.exampleID}</div>
                  </td>
                  <td class="cre-tb-col">
                    <span class="tb-cre-fieldname">Date Sign</span>
                    <div class="tb-cre-value">${cre.dateSign}</div>
                  </td>
                  <td class="cre-tb-col">
                    <span class="tb-cre-fieldname">Contact Status</span>
                    <div class="tb-cre-value contact-status"
                    style=${cre.contactStatus === "Pending Connection"
        ? "background-color:#FFA266"
        : "background-color:#6BC18D"
      }
                      >${cre.contactStatus}</div
                    >
                  </td>
                  <td class="cre-tb-col">
                    <span class="tb-cre-fieldname">Credential Status</span>
                    <div class="tb-cre-value credential-status"
                      >${cre.credentialStatus}</div
                    >
                  </td>
                  <td class="cre-tb-col">
                    <div class="cre-details">
                      <i class="fa-solid fa-ellipsis"></i>
                      <div class="cre-interact">
                        <span class="intecract-view-cre-btn">View</span>
                        <span class="intecract-send-cre-btn">Send</span>
                      </div>
                    </div>
                  </td>
                </tr>
                `;
  });

  creContainer.innerHTML = result.join(" ");
}

// Call Render List
renderCredentialList(credentials);

const checkboxList = document.querySelectorAll(".cre-item-checkbox");
const selectAllCheckbox = document.querySelector("#select-all");
const creDetails = document.querySelectorAll(".cre-details");
const creInteracts = document.querySelectorAll(".cre-interact");
const signCreBtn = document.querySelector(".sign-cre-btn");
const sendCreBtn = document.querySelector(".send-cre-btn");
const refreshTableBtn = document.querySelector(".refresh-table");

const creItemTabs = document.querySelectorAll(".cre-item-tab");
const creItemPanes = document.querySelectorAll(".cre-item-pane");
// Credentials tab UI
creItemTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    document.querySelector(".cre-item-tab.active").classList.remove("active");
    document.querySelector(".cre-item-pane.active").classList.remove("active");
    creItemTabs[index].classList.add("active");
    creItemPanes[index].classList.add("active");
  });
});

// checked and unchecked all function
function checkAllInputsTypeCheckbox(checkboxList) {
  checkboxList.forEach((checkbox) => {
    checkbox.checked = true;
  });
}

function unCheckAllInputsTypeCheckbox(checkboxList) {
  checkboxList.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

selectAllCheckbox.addEventListener("change", () => {
  selectAllCheckbox.checked
    ? checkAllInputsTypeCheckbox(checkboxList)
    : unCheckAllInputsTypeCheckbox(checkboxList);
});

// Active sign credentials and send credentials

Array.from(checkboxList).forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const isChecked = Array.from(checkboxList).some((check) => {
      return check.checked;
    });

    if (isChecked) {
      signCreBtn.classList.remove("disabled");
      sendCreBtn.classList.remove("disabled");
      signCreBtn.classList.add("active");
      sendCreBtn.classList.add("active");
    } else {
      signCreBtn.classList.add("disabled");
      sendCreBtn.classList.add("disabled");
      signCreBtn.classList.remove("active");
      sendCreBtn.classList.remove("active");
    }
  });
});

// Refresh table
refreshTableBtn.onclick = () => {
  renderCredentialList(credentials);
  selectAllCheckbox.checked = false;
};

// Show view and send buttons when click on elipsis
creDetails.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    creInteracts[index].classList.toggle("active");
    creInteracts[index].onclick = (e) => {
      e.stopPropagation();
    };
  });
});
