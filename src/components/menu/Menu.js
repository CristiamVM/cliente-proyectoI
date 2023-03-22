import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Menu() {
  const session = JSON.parse(localStorage.getItem("session"));

  function CerrarSesion() {
    localStorage.clear()
    window.location.href = "/iniciarsesion"
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img alt="" src="data:image/png;base64,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" width="30" height="30" className="d-inline-block align-top" />{' '}
          Inicio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/team">Equipos</Nav.Link>
          <Nav.Link href="/match">Juegos</Nav.Link>
          <Nav.Link href="/standing">Posiciones</Nav.Link>          
        </Nav>
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Usuario: {session.email}</Navbar.Text>
          <Button variant="dark" onClick={() => CerrarSesion()}>Cerrar Sesión</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;