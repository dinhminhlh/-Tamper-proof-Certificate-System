const tabs = document.querySelectorAll(".cre-tab");
const panes = document.querySelectorAll(".cre-tab-pane");

const notify = `
        <div class="credential-notify success">
          <div class="img-notify">
            <img src="assets/img/cre-successful-notify.jpg" alt="" />
          </div>
          <div class="notify-content">
            <span class="notify-content-success"
              >Your file was successfully uploaded</span
            >
            <p class="notify-content-count">
              <span class="cre-number">6</span> Credential Records Imported
            </p>
          </div>
          <button class="continue-cre-btn">Continue</button>
        </div>
`;

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    document.querySelector(".cre-tab.active").classList.remove("active");
    document.querySelector(".cre-tab-pane.active").classList.remove("active");
    tabs[index].classList.add("active");
    panes[index].classList.add("active");
  });
});

const isSuccessful = true;
isSuccessful ? (panes[2].innerHTML = notify) : (panes[2].innerHTML = "<h1>Step 3</h1>");



const continueBtn = document.querySelector(".continue-cre-btn");
const popupNotify = document.querySelector(".popup-upload-file-notify");



const uploadFileSuccess = {
  type: "success",
  icon: "fa-solid fa-circle-check",
  msg: "File uploaded successfully",
};

const uploadFileError = {
  type: "error",
  icon: "fa-solid fa-circle-exclamation",
  msg: "File uploaded unsuccessfully",
};

const handleUploadFileNotify = ({ type, icon, msg }) => {
  return `
      <i class="popup-upload-file-notify-icon ${icon}" style="color: ${type === "success" ? "rgb(121, 255, 121)" : "rgb(255, 56, 56)"
    }"></i>
      <span class="popup-content">${msg}</span>
  `;
};

continueBtn.addEventListener("click", () => {
  popupNotify.classList.add("active");
  popupNotify.innerHTML = handleUploadFileNotify(uploadFileSuccess);
  setTimeout(() => {
    popupNotify.classList.remove("active");
  }, 2000);
});


