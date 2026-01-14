interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface AtsProps {
  score: number;
  suggestions: Suggestion[];
}

const Ats = ({ score, suggestions }: AtsProps) => {
  // Determine gradient background based on score
  const gradientClass =
    score > 69
      ? "from-green-100"
      : score > 49
        ? "from-yellow-100"
        : "from-red-100";

  // Determine icon based on score
  const iconSrc =
    score > 69
      ? "/icons/ats-good.svg"
      : score > 49
        ? "/icons/ats-warning.svg"
        : "/icons/ats-bad.svg";

  return (
    <div
      className={`bg-gradient-to-br ${gradientClass} to-white rounded-2xl shadow-md p-6 w-full`}
    >
      {/* Top section with icon and score */}
      <div className="flex flex-row items-center gap-4 mb-6">
        <img src={iconSrc} alt="ATS icon" className="w-12 h-12" />
        <h2 className="text-3xl font-bold">ATS Score – {score}/100</h2>
      </div>

      {/* Description section */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">
          What is ATS Compatibility?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Applicant Tracking Systems (ATS) are software tools used by employers
          to filter resumes. A higher ATS score means your resume is more likely
          to pass automated screening and reach a human recruiter.
        </p>
      </div>

      {/* Suggestions list */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-3">Suggestions:</h4>
        <ul className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex flex-row gap-3 items-start">
              <img
                src={
                  suggestion.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt={suggestion.type}
                className="w-5 h-5 mt-1 flex-shrink-0"
              />
              <p className="text-sm text-gray-700">{suggestion.tip}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Closing encouragement */}
      <p className="text-sm text-gray-500 italic mt-4">
        Keep improving your resume to increase your chances of landing your
        dream job!
      </p>
    </div>
  );
};

export default Ats;
