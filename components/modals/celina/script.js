const openModalBtn = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");
const goToSettingsBtn = document.getElementById("goToSettingsBtn");

const tabButtons = document.querySelectorAll(".tabs__button");
const tabPanels = document.querySelectorAll(".tabs__panel");

function openModal(tab) {
  modalOverlay.classList.add("open");
  if (tab) switchTab(tab);
}

function closeModal() {
  modalOverlay.classList.remove("open");
}

function switchTab(tabName) {
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tabName}`);
  });
}

openModalBtn.addEventListener("click", () => openModal("settings"));
cancelBtn.addEventListener("click", closeModal);

// Close when clicking the overlay itself (not the modal content)
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("open"))
    closeModal();
});

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});
