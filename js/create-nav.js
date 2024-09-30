(() => {
  let nav = getElement('nav');
  if (nav === null) {
    nav = createElement('nav');
    document.body.prepend(nav);
  }
  nav.setAttribute('class', 'navbar navbar-expand-lg bg-body-tertiary');
  const content = `
<div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/proyecto-web"
              >
                <i class="bi bi-house"></i>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Recetas
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Desayunos</a></li>
                <li><a class="dropdown-item" href="#">Comidas</a></li>
                <li>
                  <a class="dropdown-item" href="#">Postres</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Snacks</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <input
                class="form-control"
                aria-describedby="Buscar"
                placeholder="Buscar"
              />
            </li>
          </ul>
        </div>
      </div>
`

  nav.innerHTML = content;
})()
