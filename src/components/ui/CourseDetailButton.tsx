export function EnrollButton({ handleClick }: { handleClick: () => void}) {
    return (
      <button className="w-fit rounded-[5px] bg-black px-3 py-2 sm:px-6 sm:py-4 sm:text-2xl font-bold text-white sm:min-w-[17rem]" onClick={handleClick}>
        Enroll for Free
      </button>
    );
}

export function ResumeButton({ handleClick }: { handleClick: () => void }) {
  return (
    <button
      className="w-fit min-w-[12rem] sm:min-w-[17rem] rounded-[5px] bg-[var(--yellow-btn-color)] px-3 py-2 font-bold text-black sm:px-6 sm:py-4 sm:text-2xl"
      onClick={handleClick}
    >
      Resume
    </button>
  );
}