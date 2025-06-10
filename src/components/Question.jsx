function Question({ question, onAnswer, selectedAnswer }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {question.question}
      </h2>
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className={`w-full p-4 text-left rounded-md transition ${
              selectedAnswer === option
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-indigo-100"
            }`}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;