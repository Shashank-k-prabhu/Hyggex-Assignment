const Accordian = ()=>{
  return (
    <div className="space-y-4 w-4/5">
      <details
        className="border rounded-lg border-blue-500 group [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-l p-4 text-gray-900">
          <h2 className="font-medium">
            Can education flashcards be used for all age groups?
          </h2>

          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-900 -mt-3 mb-2">
          Yes, education flashcards can be tailored to different age groups and
          learning levels. There are flashcards designed for preschoolers,
          elemeritary school students, high school students, and even for
          college-level and adult learners.
        </p>
      </details>

      <details className="border rounded-lg border-blue-500 group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900">
          <h2 className="font-medium">How do education flashcards work?</h2>

          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-900 -mt-3 mb-2">
          Education flashcards work by presenting a question or prompt on one
          side and the corresponding answer or information on the other. Users
          can review the cards repeatedly, reinforcing their memory and
          enhancing learning through repetition.
        </p>
      </details>

      <details className="border rounded-lg border-blue-500 group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900">
          <h2 className="font-medium">
            Can education flashcards be used for test preparation?
          </h2>

          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700 -mt-3 mb-2">
          Absolutely. Flashcards are an excellent tool for test preparation,
          allowing students to review key concepts, terms, and facts. They
          provide a quick and focused way to reinforce knowledge before exams.
        </p>
      </details>
    </div>
  );
}
export default Accordian;