function Tabs() {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select id="Tab" className="w-full rounded-md border-gray-200">
          <option select>Study</option>
          <option>Quiz</option>
          <option>Test</option>
          <option>Game</option>
          <option>Others</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <nav className="-mb-px flex gap-10" aria-label="Tabs">
          <a
            href="#"
            className="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
            aria-current="page"
          >
            Study
          </a>

          <a
            href="#"
            className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Quiz
          </a>

          <a
            href="#"
            className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Test
          </a>

          <a
            href="#"
            className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Game
          </a>
          <a
            href="#"
            className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Others
          </a>
        </nav>
      </div>
    </div>
  );
}
export default Tabs;
