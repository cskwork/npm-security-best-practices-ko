(function () {
  var storagePrefix = "npm-security-ko:";

  function markJavaScriptReady() {
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");
  }

  function getCodeText(button) {
    var targetId = button.getAttribute("data-copy-target");
    var target = targetId ? document.getElementById(targetId) : null;
    return target ? target.innerText.trim() : "";
  }

  function writeFallback(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    var copied = document.execCommand("copy");
    field.remove();
    return copied;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve) {
      if (writeFallback(text)) {
        resolve();
        return;
      }
      throw new Error("copy command failed");
    });
  }

  function setButtonState(button, state) {
    var label = state === "ok" ? "복사됨" : "실패";
    button.textContent = label;
    button.classList.toggle("is-copied", state === "ok");
    button.classList.toggle("is-error", state !== "ok");
    window.setTimeout(function () {
      button.textContent = "복사";
      button.classList.remove("is-copied", "is-error");
    }, 1800);
  }

  function initCopyButtons() {
    document.querySelectorAll("[data-copy-target]").forEach(function (button) {
      button.addEventListener("click", function () {
        copyText(getCodeText(button))
          .then(function () {
            setButtonState(button, "ok");
          })
          .catch(function () {
            setButtonState(button, "error");
          });
      });
    });
  }

  function readStoredState(key) {
    try {
      return window.localStorage.getItem(storagePrefix + key) === "true";
    } catch (error) {
      return false;
    }
  }

  function writeStoredState(key, checked) {
    try {
      window.localStorage.setItem(storagePrefix + key, checked ? "true" : "false");
    } catch (error) {
      return false;
    }
    return true;
  }

  function initChecklist() {
    document.querySelectorAll("[data-persist-key]").forEach(function (field) {
      var key = field.getAttribute("data-persist-key");
      field.checked = readStoredState(key);
      field.addEventListener("change", function () {
        writeStoredState(key, field.checked);
      });
    });
  }

  markJavaScriptReady();
  document.addEventListener("DOMContentLoaded", function () {
    initCopyButtons();
    initChecklist();
  });
})();
