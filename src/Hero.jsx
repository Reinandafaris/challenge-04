import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="custom-img">
      <div>
        <Container>
          <div className="d-flex justify-content-between">
            <h1 className="movie-tag">Movielist</h1> <button className="register">Register</button>
          </div>
          <Row>
            <Col>
              <h2 className="tag">
                Doctor Strange in the <br /> Multiverse of <br /> Madness
              </h2>
              <p className="teks">
                Lorem ipsum dolor sit amet, consectetur elit. <br /> Itaque, doloremque. Eos cupiditate
              </p>
              <button className="watch">
                <i className="fa-regular fa-circle-play"></i> WATCH TRAILER
              </button>
              <Link to="new">
                <button className="link">
                  <i className="fa-solid fa-magnifying-glass"></i> SEARCH
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
