function Header() {
  return (
    <header className="h-16">
      <nav className="bg-green-600">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/EnigmaSn/react-shop-mish"
                rel="noreferrer"
                target="_blank">
                Repo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Header };
