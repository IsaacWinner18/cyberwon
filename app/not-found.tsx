export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 -mt-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're trying to access does not exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go back to Homepage
        </a>
      </div>
    </div>
  );
}
