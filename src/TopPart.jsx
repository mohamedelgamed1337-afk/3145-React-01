
import { EmptyButton } from './Buttons'
export default function AppHeader() {
    return ( <div>
        <header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold fs-1 text-warning" href="text.html">AMAZOON</a>
      <button class="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#mainNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link  text-danger"  href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" href="">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </header>
        </div>
    )
}
