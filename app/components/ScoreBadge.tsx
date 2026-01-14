import React from "react";

const ScoreBadge = ({ score }: { score: number }) => {
  const getBadgeStyles = () => {
    if (score > 70) {
      return {
        bgClass: "bg-badge-green",
        textClass: "text-green-600",
        label: "Strong",
      };
    } else if (score > 49) {
      return {
        bgClass: "bg-badge-yellow",
        textClass: "text-yellow-600",
        label: "Good Start",
      };
    } else {
      return {
        bgClass: "bg-badge-red",
        textClass: "text-red-600",
        label: "Needs Work",
      };
    }
  };

  const { bgClass, textClass, label } = getBadgeStyles();

  return (
    <div
      className={`${bgClass} ${textClass} px-3 py-1 rounded-full text-sm font-medium`}
    >
      <p>{label}</p>
    </div>
  );
};

export default ScoreBadge;
