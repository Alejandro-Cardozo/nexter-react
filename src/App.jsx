import Features from "./components/Features"
import StoryContent from "./components/StoryContent"
import StoryPictures from "./components/StoryPictures"
import Homes from "./components/Homes"
import Container from "./components/UI/Container"
import Gallery from "./components/Gallery"

function App() {

  return (
    <Container>
      <div className="sidebar">
        Sidebar
      </div>

      <header className="header">
        Header
      </header>

      <div className="realtors">
        Top 3 realtors
      </div>

      <Features />

      <StoryPictures />

      <StoryContent />

      <Homes />

      <Gallery />

      <footer className="footer">
        Footer 
      </footer>
    </Container>
  )
}

export default App
