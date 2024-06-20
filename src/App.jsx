import './index.css'
import Header from './components/Header/header'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignInSignUp />} />
          <Route element={<PrivateRoutes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/create-podcast" element={<CreatePodcast />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
          <Route
            path="/podcast/:podcastId/create-episode"
            element={<CreateEpisode />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
