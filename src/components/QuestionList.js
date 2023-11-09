// QuestionList.js
function QuestionList({ questions, onUpdateQuestion, onDeleteQuestion }) {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          {question.prompt}
          <select
            value={question.correctIndex}
            onChange={(e) => onUpdateQuestion(question.id, e.target.value)}
          >
            {/* Render your answer options */}
          </select>
          <button onClick={() => onDeleteQuestion(question.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
