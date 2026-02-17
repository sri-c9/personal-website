export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Sri Chandramouli
          </h1>
          <p className="text-xl" style={{ color: 'var(--muted)' }}>
            Software engineer, builder, and learner.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-lg leading-relaxed">
            Welcome to my corner of the internet. I write about software engineering,
            technology, and things I'm learning along the way.
          </p>
        </section>
      </div>
    </div>
  );
}
