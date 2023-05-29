import HomeSlider from "./sliders";

function App() {
    return (
        <div className="home">
            <div className="intro">
                <div className="intro-content">
                    <h1 className="intro-title">Welcome to the <span
                        className="intro-title--highlight">Esports Manager</span></h1>
                    <p className="intro-text">Welcome to the adrenaline-fueled world of Esports Manager! Take the reins
                        of a rising esports team, strategize, recruit top talent, and dominate the competition. This
                        browser-based game puts your management skills to the test. Are you ready to build a
                        championship-winning team and etch your name in esports history?
                    </p>
                </div>
            </div>
            <div className="features">
                <div className="features-content">
                    <div className="feature">
                        <div className="feature-content">
                            <h2 className="feature-title">Multiple games to choose from</h2>
                            <p className="feature-text">Choose from a variety of games to compete in. Each game has
                                different mechanics and strategies to master. Choose the game that best suits your
                                playstyle and build your team around it.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="actions">
                <div className="actions-content">
                    <HomeSlider></HomeSlider>
                </div>
            </div>

        </div>
    );
}

export default App;
