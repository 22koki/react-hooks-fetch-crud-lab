import React, { useState, useEffect } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions when the component mounts
    fetch('http://localhost:4000/questions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  const addQuestion = (newQuestion) => {
    // Implement the logic to add a new question here
    // You can use the newQuestion object and update the questions state.
    // Make an HTTP POST request to send the new question to your server if necessary.
  };

  return (
    <div>
      <AdminNavBar />
      <QuestionForm onAddQuestion={addQuestion} />
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
