import './App.css';

import ProjectsInGithub from './data/ProjectsInGithub';

import HeaderBar from './components/HeaderBar';
import GithubProjectCard from './components/GithubProjectCard';
import FooterBar from './components/FooterBar';

function App() {
    return (
      
        <div>
  
            <HeaderBar />

            <div className="card-container">

                {ProjectsInGithub.map((project, index) => 
                    <GithubProjectCard key={index} project={project} />
                )}

            </div>

            <FooterBar />

        </div>
    );
}

export default App;
