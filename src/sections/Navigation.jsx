function Navigation() {
  function NavLink() {
    return (
      <p className="col p-3" href="/">
        ABOUT
      </p>
    );
  }

  return (
    <div class="row outline mx-5 mb-5" style={{ "border-top-style": "none" }}>
      <div className="col-10">
        <div className="row">
          <NavLink />
          <NavLink />
          <NavLink />
          <NavLink />
          <NavLink />
          <NavLink />
        </div>
      </div>
      <div
        className="col-2"
        style={{ "background-color": "#2C2828", color: "#F2F1F0" }}
      >
        <p>SIGN IN/SIGN UP</p>
      </div>
    </div>
  );
}

export default Navigation;
