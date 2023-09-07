import { setupPasswordGenerator } from "./passwordGenerator";

document.querySelector("#app").innerHTML = `
  <p class="fs-1">Generate a secure password</p>
    <div class="mb-3 form-control" id="generated-password"></div>
    <div class="mb-3">
      <label for="password-length__input" class="form-label"
        >Password length<span
          style="margin-left: 10px"
          id="password-length__value"
        ></span></label
      ><input
        type="range"
        class="form-range"
        id="password-length__input"
        min="8"
        max="32"
        value="12"
      />
    </div>`;

setupPasswordGenerator();
