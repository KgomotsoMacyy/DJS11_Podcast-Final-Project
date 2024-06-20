import "./App.css"
import { Route, Router, Routes } from 'react-router-dom';
import SignUpPage from "./pages/SignUp"

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignUPage />} />
          {/*<Route path="/profile" element={<Profile />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/create-podcast" element={<CreatePodcast />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
          <Route
            path="/podcast/:podcastId/create-episode"
            element={<CreateEpisode />}
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
