function Navbar() {
  return (
    <header>
      <div className=" container max-w-full w-full fixed top-0 z-[998]">
        {/* <!-- Navbar --> */}
        <nav className="px-16 bg-srBlack text-white flex justify-between items-center h-20">
          <a href="#">
            <h5 className="heading-5">
              My <span className="text-prLavender">Portofolio</span>
            </h5>
          </a>
          <ul className="flex space-x-6 font-semibold text-[17px]">
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
