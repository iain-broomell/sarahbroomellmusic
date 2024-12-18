export default function ContactPage() {
    return (
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-lg text-gray-700 mb-6">
          Interested in lessons? Fill out the form below, and we'll get back to you soon!
        </p>
        <form className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
  