import Features from "./components/Features"
import StoryContent from "./components/StoryContent"
import Container from "./components/UI/Container"

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

      <div className="story__pictures">
        Story pictures
      </div>

      <StoryContent />

      <section className="homes">
        Homes
      </section>

      <section className="gallery">
        Gallery
      </section>

      <footer className="footer">
        Footer 
      </footer>
    </Container>
  )
}

export default App
