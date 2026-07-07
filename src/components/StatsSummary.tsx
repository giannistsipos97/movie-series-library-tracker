type StatsSummaryProps = {
  totalCount: number;
  completedCount: number;
  watchlistCount: number;
};

export function StatsSummary({ totalCount, completedCount, watchlistCount }: StatsSummaryProps) {
  return (
    <section className="stats-grid" aria-label="Library summary">
      <article>
        <span>Total titles</span>
        <strong>{totalCount}</strong>
      </article>
      <article>
        <span>Completed</span>
        <strong>{completedCount}</strong>
      </article>
      <article>
        <span>Watchlist</span>
        <strong>{watchlistCount}</strong>
      </article>
    </section>
  );
}
