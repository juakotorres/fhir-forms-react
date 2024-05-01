import './App.css';
import { SmartFormsRenderer } from '@aehrc/smart-forms-renderer';
import questionnaire from './sdc.json'

function App() {
  return (
    <SmartFormsRenderer questionnaire={questionnaire}/>
  );
}

export default App;
