import StepWrapper from "./components/StepWrapper";
import {StepProvider} from './StepContext';

import "./reset.css"
import './App.css';


function App() {
	return (
		<div className="App">
			<StepProvider>
				<StepWrapper/>
			</StepProvider>

		</div>
	);
}

export default App;
