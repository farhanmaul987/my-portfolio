function Status() {
  return (
    <section className="relative flex min-h-[300px] items-center justify-center">
      {/* Background Md & Lg */}
      <div className="hidden opacity-30 mix-blend-plus-darker md:absolute md:inset-0 md:block md:bg-statusLandscape md:bg-cover md:bg-center"></div>

      {/* Background Sm */}
      <div className="absolute inset-0 block bg-statusPortrait bg-cover bg-center opacity-25 mix-blend-plus-darker md:hidden"></div>

      {/* Border Container */}
      <div className="relative z-10 flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <div className="status-box">
          <h3 className="heading-5 lg:heading-3">Ongoing</h3>
          <p>Web Dev Learning</p>
        </div>
        <div className="status-box">
          <h3 className="heading-5 lg:heading-3">100+</h3>
          <p>Hours Self-Study</p>
        </div>
        <div className="status-box">
          <h3 className="heading-5 lg:heading-3">3+</h3>
          <p>Personal Project</p>
        </div>
      </div>
    </section>
  );
}

export default Status;
