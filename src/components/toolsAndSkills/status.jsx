function Status() {
  return (
    <section className="relative flex h-[300px] items-center justify-center">
      {/* Background */}
      <div className="opacity-15 mix-blend-plus-darker md:absolute md:inset-0 md:bg-bgStatus md:bg-cover md:bg-center"></div>

      {/* Border Container */}
      <div className="relative z-10 flex space-x-5">
        <div className="status-box">
          <h3 className="heading-3">Ongoing</h3>
          <p>Web Dev Learning</p>
        </div>
        <div className="status-box">
          <h3 className="heading-3">100+</h3>
          <p>Hours Self-Study</p>
        </div>
        <div className="status-box">
          <h3 className="heading-3">3+</h3>
          <p>Personal Project</p>
        </div>
      </div>
    </section>
  );
}

export default Status;
