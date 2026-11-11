export default function ProfileHeader() {
  const stats = [
    { label: 'STATUS', value: 'WORK IN BROWN CINNAMONS GROUP' },
    { label: 'LOCATION', value: 'LUMAJANG, ID' },
    { label: 'FOCUS', value: 'WEB & GAME DEV' },
  ];

  return (
    <header className="mb-8 sm:mb-12 text-left border-b border-neutral-100 dark:border-neutral-900 pb-6 sm:pb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-black dark:text-white">
            Favian Muhammad Taufani Atha Lesveva
          </h1>
          <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 mt-1.5">
            Full-Stack Web & Game Developer
          </p>
        </div>

        <div className="inline-flex items-center space-x-2 font-mono text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100 animate-pulse" />
          <span>Available for Projects</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-900 font-mono">
        {stats.map((stat, i) => (
          <div key={i}>
            <span className="block text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider">
              {stat.label}
            </span>
            <span className="text-[11px] sm:text-xs text-black dark:text-white font-medium">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
}