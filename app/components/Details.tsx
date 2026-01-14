import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./Accordion";
import { cn } from "~/lib/utils";

interface Tip {
  type: "good" | "improve";
  tip: string;
  explanation?: string;
}

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const getBadgeStyles = () => {
    if (score > 69) {
      return {
        bgClass: "bg-green-100",
        textClass: "text-green-600",
        icon: "/icons/check.svg",
      };
    } else if (score > 39) {
      return {
        bgClass: "bg-yellow-100",
        textClass: "text-yellow-600",
        icon: "/icons/warning.svg",
      };
    } else {
      return {
        bgClass: "bg-red-100",
        textClass: "text-red-600",
        icon: "/icons/warning.svg",
      };
    }
  };

  const { bgClass, textClass, icon } = getBadgeStyles();

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-1 rounded-full",
        bgClass,
        textClass
      )}
    >
      <img src={icon} alt="status" className="w-4 h-4" />
      <span className="font-semibold text-sm">{score}/100</span>
    </div>
  );
};

interface CategoryHeaderProps {
  title: string;
  categoryScore: number;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  categoryScore,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

interface CategoryContentProps {
  tips: Tip[];
}

const CategoryContent: React.FC<CategoryContentProps> = ({ tips }) => {
  return (
    <div className="space-y-4">
      {/* Two-column grid of tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tips.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 p-3 rounded-lg bg-gray-50"
          >
            <img
              src={
                item.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"
              }
              alt={item.type}
              className="w-5 h-5 mt-0.5 flex-shrink-0"
            />
            <p className="text-sm text-gray-700">{item.tip}</p>
          </div>
        ))}
      </div>

      {/* Explanation boxes */}
      {tips.some((item) => item.explanation) && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">
            Detailed Explanations:
          </h4>
          {tips
            .filter((item) => item.explanation)
            .map((item, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 rounded-lg border-l-4",
                  item.type === "good"
                    ? "bg-green-50 border-green-500"
                    : "bg-yellow-50 border-yellow-500"
                )}
              >
                <p className="text-sm font-medium text-gray-800 mb-1">
                  {item.tip}
                </p>
                <p className="text-sm text-gray-600">{item.explanation}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

interface DetailsProps {
  feedback: Feedback;
}

const Details: React.FC<DetailsProps> = ({ feedback }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full p-6">
      <h2 className="text-2xl font-bold mb-4">Detailed Feedback</h2>

      <Accordion allowMultiple>
        {/* Tone & Style */}
        <AccordionItem id="tone-style">
          <AccordionHeader itemId="tone-style">
            <CategoryHeader
              title="Tone & Style"
              categoryScore={feedback.toneAndStyle.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="tone-style">
            <CategoryContent tips={feedback.toneAndStyle.tips} />
          </AccordionContent>
        </AccordionItem>

        {/* Content */}
        <AccordionItem id="content">
          <AccordionHeader itemId="content">
            <CategoryHeader
              title="Content"
              categoryScore={feedback.content.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback.content.tips} />
          </AccordionContent>
        </AccordionItem>

        {/* Structure */}
        <AccordionItem id="structure">
          <AccordionHeader itemId="structure">
            <CategoryHeader
              title="Structure"
              categoryScore={feedback.structure.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback.structure.tips} />
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem id="skills">
          <AccordionHeader itemId="skills">
            <CategoryHeader
              title="Skills"
              categoryScore={feedback.skills.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback.skills.tips} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;
