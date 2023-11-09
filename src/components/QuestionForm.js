// QuestionForm.js
import React, { useState } from 'react';

function QuestionForm({ onAddQuestion }) {
  const [formData, setFormData] = useState({
    prompt: '',
    answers: [],
    correctIndex: 0,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform validation on formData if needed

    // Send POST request to API
    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newQuestion) => {
        // Update state in the parent component
        onAddQuestion(newQuestion);
      });
  };

  // ... rest of your form code
}

export default QuestionForm;
