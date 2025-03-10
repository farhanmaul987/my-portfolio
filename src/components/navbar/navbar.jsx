function Navbar() {
  return (
    <header>
      <div className="fixed top-0 z-[998] w-full max-w-full">
        {/* <!-- Navbar --> */}
        <nav className="flex h-20 items-center justify-between bg-srBlack px-16 text-white">
          <a href="#">
            <h5 className="heading-5">
              My <span className="text-prLavender">Portofolio</span>
            </h5>
          </a>
          <ul className="flex space-x-6 text-[17px] font-semibold">
            <li>
              <a href="#hero" className="hover:text-prLavender">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutMe" className="hover:text-prLavender">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-prLavender">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-prLavender">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="contactMe">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- End Navbar --> */}
      </div>
    </header>
  );
}

export default Navbar;
