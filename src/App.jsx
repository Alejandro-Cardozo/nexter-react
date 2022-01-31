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

      <div className="features">
        Features
      </div>

      <div className="story__pictures">
        Story pictures
      </div>

      <div className="story__content">
        Story content
      </div>

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
