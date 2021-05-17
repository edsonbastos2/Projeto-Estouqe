import {Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap';

export default function Header(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Produtos</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}