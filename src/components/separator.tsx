export function Separator({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="my-4 h-px border-0 bg-zinc-500 dark:bg-zinc-200" />
      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{children}</p>
      <div className="my-4 h-px border-0 bg-zinc-500 dark:bg-zinc-200" />
    </div>
  )
}
