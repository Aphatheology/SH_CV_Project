import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App">
		<About />
		<Education />
        {/* <Experience /> */}
		<SocialMedia />
    </div>
  );
}

export default App;
