export default function ProgressBar({progressPercent}: {progressPercent: number}) {
    return (
      <div className="md:h-10 md:w-full rounded-[50px] border border-black bg-transparent">
        <span
          style={{ width: `${progressPercent}%` }}
          className={`h-full flex items-center justify-end rounded-[50px] bg-[var(--yellow-btn-color)] px-3 sm:text-[1.1rem] tracking-wide`}
        >
          {progressPercent}%
        </span>
      </div>
    );
}