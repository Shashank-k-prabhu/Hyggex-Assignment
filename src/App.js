import './index.css'
import './App.css';
import Heading from './Page/Page';
import Breadcrumb from './Components/Breadcrumbs';
import Flashcards from './Components/Flashcards';
import Publishbar from './Components/Publishbar';
import Accordian from './Components/Accordian';

function App() {
  return (
    <div className="mx-20 my-5 flex flex-col gap-14">
      <Heading />
      <Breadcrumb />
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]">
        Relations and Functions( Mathematics )
      </div>
      <Flashcards />
      <Publishbar />
      <div></div>
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]">
        FAQ
      </div>
      <Accordian/>
      <div className='grow'></div>
    </div>
  );
}

export default App;
