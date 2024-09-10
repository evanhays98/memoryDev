import React, { useEffect } from 'react';
import { SurveyModel } from 'survey-core';
import { Survey } from './Survey';

declare const lucide: { createIcons: () => void };

export const SimpleRankingForm = () => {

  // Define the survey JSON with a ranking question
  const surveyJson = {
    title: 'Simple Ranking Form',
    description: 'Please rank the following items based on your preference.',
    questions: [
      {
        type: "panelDynamic",
        name: "ranking_question",
        title: "Rank the following fruits",
        defaultValue: [{ fruit: "Apple", icon:"menu" }, { fruit: "Banana", icon:"x" }, { fruit: "Orange" }, { fruit: "Pineapple" }, { fruit: "Strawberry" }],
        templateElements: [
          {
            type: "html",
            name: "fruit",
            title: "Fruit",
            html: `<div><p><i data-lucide="{{icon}}"></i> {{fruit}}</p></div>`
          }
        ],
      },
    ],
  };

  const survey = new SurveyModel(surveyJson);

  survey.onAfterRenderQuestion.add((survey, options) => {
    lucide.createIcons();
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
      <Survey model={survey} />
    </div>
  );
};
