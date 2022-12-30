import React from "react";
import "./navbar.css";
export default function () {
  return (
    <div
      className="scrollmenu"
      style={{
        width: "40vw",
        marginTop: "10px",
        marginLeft: "10vw",
        backgroundColor: "lightgreen",
      }}
    >
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="dropdownCheck"
                      style={{ cursor: "pointer" }}
                    />
                    <label class="form-check-label" for="dropdownCheck">
                      Checkbox1
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="dropdownCheck"
                      style={{ cursor: "pointer" }}
                    />
                    <label class="form-check-label" for="dropdownCheck">
                      Checkbox2
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="dropdownCheck"
                      style={{ cursor: "pointer" }}
                    />
                    <label class="form-check-label" for="dropdownCheck">
                      Checkbox3
                    </label>
                  </div>
                </ul>
              </li>
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></button>
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></button>
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></button>
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></button>
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></button>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="dropdownCheck"
                      style={{ cursor: "pointer" }}
                    />
                    <label class="form-check-label" for="dropdownCheck">
                      Checkbox1
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="dropdownCheck"
                      style={{ cursor: "pointer" }}
                    />
                    <label class="form-check-label" for="dropdownCheck">
                      Checkbox2
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="dropdownCheck"
                      style={{ cursor: "pointer" }}
                    />
                    <label class="form-check-label" for="dropdownCheck">
                      Checkbox3
                    </label>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
