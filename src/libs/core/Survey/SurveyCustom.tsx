import React, { useState } from 'react';
import { Survey, SurveyModel } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';

export const SimpleRankingForm = () => {
  const [choices, setChoices] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Mango',
  ]);

  // Define the survey JSON with a ranking question
  const surveyJson = {
    title: 'Simple Ranking Form',
    description: 'Please rank the following items based on your preference.',
    questions: [
      {
        type: 'ranking',
        name: 'ranking_question',
        title: 'Rank these fruits',
        choices: choices,
      },
    ],
  };

  // Initialize the Survey model with the JSON
  const survey = new SurveyModel(surveyJson);

  // Function to handle survey completion
  const onComplete = (survey: SurveyModel) => {
    console.log('Survey results:', survey.data);
  };

  // Function to add a new choice
  const addChoice = () => {
    const newChoice = `New fruit ${choices.length + 1}`;
    setChoices([...choices, newChoice]);

    // Update the survey model with the new choices
    const rankingQuestion = survey.getQuestionByName('ranking_question');
    rankingQuestion.choices = [...choices, newChoice];
  };

  // Function to delete a choice
  const deleteChoice = (choice: any) => {
    const updatedChoices = choices.filter(c => c !== choice);
    setChoices(updatedChoices);

    // Update the survey model with the updated choices
    const rankingQuestion = survey.getQuestionByName('ranking_question');
    rankingQuestion.choices = updatedChoices;
  };

  // Use the survey event to inject buttons after rendering the ranking question
  survey.onAfterRenderQuestion.add((survey, options) => {
    if (options.question.name === 'ranking_question') {
      // Add the add choice button
      if (!options.htmlElement.querySelector('.add-choice-button')) {
        const addButton = document.createElement('button');
        addButton.innerText = 'Add New Fruit';
        addButton.className = 'add-choice-button';
        addButton.style.marginTop = '10px';
        addButton.style.padding = '10px 20px';
        addButton.style.backgroundColor = '#4CAF50';
        addButton.style.color = 'white';
        addButton.style.border = 'none';
        addButton.style.borderRadius = '5px';
        addButton.style.cursor = 'pointer';

        addButton.onclick = addChoice;
        options.htmlElement.appendChild(addButton);
      }

      // Add delete buttons to each choice row
      const rows = options.htmlElement.querySelectorAll('.sv_ranking_item');
      rows.forEach((row) => {
        console.log('Adding add choice button');
        if (!row.querySelector('.delete-choice-button')) {
          const deleteButton = document.createElement('button');
          deleteButton.innerText = 'Delete';
          deleteButton.className = 'delete-choice-button';
          deleteButton.style.marginLeft = '10px';
          deleteButton.style.padding = '5px 10px';
          deleteButton.style.backgroundColor = '#f44336';
          deleteButton.style.color = 'white';
          deleteButton.style.border = 'none';
          deleteButton.style.borderRadius = '5px';
          deleteButton.style.cursor = 'pointer';

          deleteButton.onclick = () => {
            const choice = row.querySelector('.sv_ranking_item_text');
            deleteChoice(choice);
          };

          row.appendChild(deleteButton);
        }
      });
    }
  });

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '5px',
        backgroundColor: '#e5d2d2',
        marginTop: '50px',
      }}
    >
      <Survey model={survey} onComplete={onComplete} />
    </div>
  );
};

export default SimpleRankingForm;
