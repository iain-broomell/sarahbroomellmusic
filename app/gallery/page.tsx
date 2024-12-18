export default function GalleryPage() {
    return (
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-4">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/teaching.jpg"
            alt="Teaching session"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/performance.jpg"
            alt="Performance"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/piano.jpg"
            alt="Piano close-up"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  }
  