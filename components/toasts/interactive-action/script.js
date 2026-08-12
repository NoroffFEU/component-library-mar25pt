var container = document.getElementById("toastContainer");
var triggerBtn = document.getElementById("triggerToast");

function showActionToast(title, message, actionText, actionCallback) {
  var toast = document.createElement("div");
  toast.classList.add("toast");

  toast.innerHTML =
    '<span class="toast__icon">!</span>' +
    '<div class="toast__body">' +
    '<div class="toast__title">' +
    title +
    '</div>' +
    '<div class="toast__message">' +
    message +
    '</div>' +
    '<button class="toast__action">' +
    actionText +
    '</button>' +
    '</div>' +
    '<button class="toast__close">&times;</button>' +
    '<div class="toast__progress"></div>';

  container.appendChild(toast);

  var actionBtn = toast.querySelector(".toast__action");
  var closeBtn = toast.querySelector(".toast__close");
  var icon = toast.querySelector(".toast__icon");
  var titleElement = toast.querySelector(".toast__title");
  var messageElement = toast.querySelector(".toast__message");

  var autoClose = setTimeout(function () {
    removeToast(toast);
  }, 5000);

  actionBtn.addEventListener("click", function () {
    clearTimeout(autoClose);

    if (typeof actionCallback === "function") {
      actionCallback();
    }

    icon.textContent = "✓";
    titleElement.textContent = "Item restored";
    messageElement.textContent = "The item has been added back to your list.";

    actionBtn.remove();

    setTimeout(function () {
      removeToast(toast);
    }, 1800);
  });

  closeBtn.addEventListener("click", function () {
    clearTimeout(autoClose);
    removeToast(toast);
  });
}

function removeToast(toast) {
  if (toast.classList.contains("removing")) {
    return;
  }

  toast.classList.add("removing");

  setTimeout(function () {
    toast.remove();
  }, 300);
}

triggerBtn.addEventListener("click", function () {
  showActionToast(
    "Item deleted",
    "The item has been removed from your list.",
    "Undo",
    function () {
      console.log("Delete action undone");
    }
  );
});