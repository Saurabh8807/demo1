import React from "react";

export default function navbar5() {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{
                    marginLeft: "1000px",
                    display: "flex",
                    fontWeight: "bolder",
                  }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: "bolder" }}
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Item1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Item2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Item3
                    </a>
                  </li>
                </ul>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{
                      marginLeft: "120px",
                      marginTop: "-40px",
                      fontWeight: "bolder",
                    }}
                  >
                    About
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
