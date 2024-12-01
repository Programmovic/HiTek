export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-8 w-full max-w-[1280px] px-5">
      <div className="relative flex justify-center items-center bg-zinc-100 rounded-3xl w-full h-[calc(100vh-96px)] md:h-[540px] bg-[url(/images/team-doctors-meeting.jpg)] bg-cover bg-center p-8">
        {/* Overlay with fade-in animation */}
        <div className="absolute inset-0 bg-black bg-opacity-80 rounded-3xl animate-fade-in"></div>

        {/* Heading with slide-up and fade-in animation */}
        <h1 className="relative z-10 max-w-[1080px] text-5xl md:text-6xl xl:text-7xl text-white text-center font-extrabold tracking-tighter drop-shadow-lg animate-slide-up">
          We understand the importance of dental care, and your smile.
        </h1>
      </div>
    </header>
  );
}
