export default function UnderConstruction() {
  const texts = [
    "STAY TUNED",
    "UNDER CONSTRUCTION",
    "COMING SOON",
    "WORK IN PROGRESS",
    "ALMOST READY",
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-24 overflow-hidden md:gap-10 lg:gap-0">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`transform whitespace-nowrap bg-[#ffd914] px-4 py-0 text-[9vw] font-black uppercase text-black shadow-xl ${index % 2 === 0 ? "-rotate-6" : "rotate-6"} ${index !== 0 ? "-mt-10" : ""}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
