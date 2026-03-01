export default function ProjectLoading() {
  return (
    <main className="min-h-screen pt-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="tech-label text-muted">Loading project...</p>
      </div>
    </main>
  );
}
