import {Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styled.css';

export default function Header(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/products">Produtos</Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="info">Search</Button>
            </Form>
        </Navbar>
    )
}