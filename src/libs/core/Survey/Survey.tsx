import { Survey as SurveyLib } from "survey-react-ui";
import { ITheme, Base, Model, Serializer, QuestionFileModel, QuestionHtmlModel } from "survey-core";
import jsonata from "jsonata";
import React from 'react';
import 'survey-core/defaultV2.min.css';
import Handlebars from 'handlebars';

const assignJS = (setTarget: Base, value: { [key: string]: string } | undefined) => {
  Object.entries(value ?? {}).forEach(([key, expr]) => {
    const jsonataExpr = jsonata(expr);
    setTarget.addExpressionProperty(`expression-${key}`, async (obj) => {
      const context = obj.getDataFilteredValues();
      try {
        const res = await jsonataExpr.evaluate(context);
        obj.setPropertyValue(key, res);
        console.log(`expression-${key}`, expr, res, context);
      } catch (e) {
        console.log(`expression-${key} failed`, expr, context);
      }
    });
    setTarget.setPropertyValue(`expression-${key}`, `{null}`);
  });
};

Serializer.addProperty("page", {
  name: "expressions:json",
  onSetValue: (setTarget: Base, value) => assignJS(setTarget, value),
});
Serializer.addProperty("panel", {
  name: "expressions:json",
  onSetValue: (setTarget: Base, value) => assignJS(setTarget, value),
});
Serializer.addProperty("question", {
  name: "expressions:json",
  onSetValue: (setTarget: Base, value) => assignJS(setTarget, value),
});

Serializer.addClass("multiplefile", [], () => {
  const MultipleFile = class extends QuestionFileModel {
    constructor(name: string) {
      super(name);
      this.allowMultiple = true;
    }
  };
  return new MultipleFile("multiplefile");
});

Serializer.overrideClassCreator("html", () => {
  const HtmlQuestion = class extends QuestionHtmlModel {
    override getProcessedText(text: string): string {
      const handlebarTxt = Handlebars.compile(text)(
        this.getDataFilteredValues().panel,
      );
      return super.getProcessedText(handlebarTxt);
    }
  };
  return new HtmlQuestion("html");
});

export type PartialTheme = Partial<
  ITheme & {
  showCompleteButton: boolean;
  showQuestionNumbers: boolean;
}
>;

interface SurveyProps {
  model: Model;
  theme?: PartialTheme;
  className?: string;
  onComplete?: (survey: Model) => void;
  isLoading?: boolean;
  loadingMessage?: string;
}

export function Survey(props: SurveyProps) {

  const classes = ["survey-container", props.className, props.isLoading ? "loading" : undefined]
    .filter(Boolean)
    .join(" ");
  (window as any).survey = props.model;
  return (
    <div className={classes}>
      <SurveyLib model={props.model} onComplete={props.onComplete} />
    </div>
  );
}