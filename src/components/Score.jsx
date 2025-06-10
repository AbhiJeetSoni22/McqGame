import { Link } from "react-router-dom";

function Score({ score, total }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">Quiz Completed!</h2>
      <p className="text-xl text-gray-700 mb-6">
        Your Score: {score} out of {total}
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Score;