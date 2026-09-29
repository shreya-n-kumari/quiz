import { useState, useEffect, useCallback } from "react";

const DEFAULT_QUESTIONS = [
  {
    question: "Which hook stores state inside a function component?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: 1,
  },
  {
    question: "What does JSX compile down to?",
    options: ["HTML strings", "CSS modules", "React.createElement calls", "Web components"],
    answer: 2,
  },
  {
    question: "Which prop helps React track items in a rendered list?",
    options: ["id", "index", "key", "ref"],
    answer: 2,
  },
  {
    question: "When does useEffect with an empty [] dependency array run?",
    options: ["On every render", "Only after the first render", "Before the first render", "Only when props change"],
    answer: 1,
  },
  {
    question: "How do you pass data from a parent to a child component?",
    options: ["Props", "Refs", "Portals", "Keys"],
    answer: 0,
  },
];

function ProgressBar({ current, total }) {
  return (
    <div
      className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-200"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemax={total}
    >
      <div
        className="h-full bg-blue-600 transition-all duration-300"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}

function Option({ text, state, disabled, onClick }) {
  const styles = {
    idle: "border-slate-200 bg-slate-50 hover:border-blue-500",
    correct: "border-green-600 bg-green-50",
    wrong: "border-red-500 bg-red-50",
    dim: "border-slate-200 bg-slate-50 opacity-60",
  };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full rounded-lg border-2 px-4 py-3 text-left text-base text-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 ${styles[state]} ${
        disabled ? "cursor-default" : "cursor-pointer"
      }`}
    >
      {text}
    </button>
  );
}

function Result({ score, total, onRestart }) {
  const pct = Math.round((score / total) * 100);
  const message = pct === 100 ? "Perfect score." : pct >= 60 ? "Solid work." : "Keep practising.";
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-slate-900">{message}</h2>
      <p className="my-2 text-5xl font-bold text-slate-900">
        {score} / {total}
      </p>
      <p className="text-sm text-slate-500">You answered {pct}% correctly.</p>
      <button
        onClick={onRestart}
        className="mt-6 w-full rounded-lg bg-[#cab577] py-3 font-semibold text-white hover:bg-[#cab577] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}

/**
 * Props (all optional):
 *  - questions: [{ question, options: string[], answer: number }]
 *  - timePerQuestion: seconds (default 15)
 *  - title: heading text
 *  - onFinish: (score, total) => void
 */
export default function QuizPage({
  questions = DEFAULT_QUESTIONS,
  timePerQuestion = 15,
  title = "React quiz",
  onFinish,
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null); // null = unanswered, -1 = timed out
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);

  const current = questions[index];
  const answered = selected !== null;

  const handleSelect = useCallback(
    (i) => {
      if (selected !== null) return;
      setSelected(i);
      if (i === current.answer) setScore((s) => s + 1);
    },
    [selected, current]
  );

  useEffect(() => {
    if (finished || answered) return;
    if (timeLeft === 0) {
      setSelected(-1);
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, answered, finished]);

  const next = () => {
    if (index + 1 === questions.length) {
      setFinished(true);
      if (onFinish) onFinish(score, questions.length);
    } else {
      setIndex(index + 1);
      setSelected(null);
      setTimeLeft(timePerQuestion);
    }
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setTimeLeft(timePerQuestion);
  };

  const optionState = (i) => {
    if (!answered) return "idle";
    if (i === current.answer) return "correct";
    if (i === selected) return "wrong";
    return "dim";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <main className="w-full max-w-xl rounded-2xl bg-white p-7 shadow-lg">
        <header className="mb-3">
          <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
          {!finished && (
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Question {index + 1} of {questions.length}
              </span>
              <span
                className={`font-semibold tabular-nums ${
                  timeLeft <= 5 && !answered ? "text-red-600" : "text-slate-700"
                }`}
              >
                {timeLeft}s
              </span>
            </div>
          )}
        </header>

        {finished ? (
          <Result score={score} total={questions.length} onRestart={restart} />
        ) : (
          <>
            <ProgressBar current={index + (answered ? 1 : 0)} total={questions.length} />
            <h2 className="mb-4 text-lg font-medium leading-snug text-slate-900">
              {current.question}
            </h2>
            <div className="grid gap-2.5">
              {current.options.map((opt, i) => (
                <Option
                  key={opt}
                  text={opt}
                  state={optionState(i)}
                  disabled={answered}
                  onClick={() => handleSelect(i)}
                />
              ))}
            </div>
            {selected === -1 && <p className="mt-3 text-sm text-slate-500">Time's up.</p>}
            <button
              disabled={!answered}
              onClick={next}
              className="mt-5 w-full rounded-lg bg-[#cab577] py-3 font-semibold text-white hover:bg-[#cab577] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-[#cab577]"
            >
              {index + 1 === questions.length ? "See results" : "Next question"}
            </button>
          </>
        )}
      </main>
    </div>
  );
}