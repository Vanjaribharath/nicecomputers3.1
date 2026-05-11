import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center px-4">
      <div className="text-8xl font-bold text-brand/20">404</div>
      <h1 className="mt-4 text-3xl font-bold">Page Not Found</h1>
      <p className="mt-3 text-muted-foreground max-w-md">
        Sorry, we couldn't find the page you're looking for. Try going back to the homepage or contact us.
      </p>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <Link
          to="/"
          className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
        >
          Go Home
        </Link>
        <Link
          to="/contact"
          className="rounded-md border px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
