import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Navbar, NavLink,Nav, NavDropdown , Card} from 'react-bootstrap';
import Logo from '../assets/image.jpeg'; 
import Person from '../assets/download.jpeg';
import "../components/dashboard.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import ApexChart from './Chart';





function AutoLayoutSizingExample() {
  return (
    <div >   <Navbar  className="lol">
    <Container style={{background: "#fff !important"}}>
    
      <Navbar.Brand href="#home"><img src={Logo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto dashboardmenu">
          <Nav.Link href="#dashboar" active>Dashboard</Nav.Link>
          <Nav.Link href="#contacts">Contacts</Nav.Link>
          <Nav.Link href="services">Services</Nav.Link>
          <Nav.Link href="invoice">Invoice</Nav.Link>
          <Nav.Link href="settings">Settings</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
     
        </Nav>
      </Navbar.Collapse>
            <div className='rightnavbar'>
              <input/>
            <SearchIcon className='search'/>

            <NotificationAddOutlinedIcon className='notification'/>
            <h6>Michel</h6>
            <img src={Person} alt=""/>
            </div>
            </Container>
  </Navbar>
    
      <Container>
        <Row className='edit'>
         <Col>
         <h4>Dashboard</h4>
         </Col>
         <Col>
         <Button className='button' >Edit dashboard</Button>
         </Col>
        </Row>
<Row>
  <Col>  
  <Card className='card' style={{ width: '18rem' }}>
     
     <Card.Body>
       <Card.Title className='cardtitle'>Draft(3)</Card.Title>
       <Card.Text className='cardmessage' style={{color: "#009ADC"}}>
       $ 1,120.00
       </Card.Text>
     
     </Card.Body>
   </Card>
   </Col>
   <Col>  
  <Card className='card' style={{ width: '18rem' }}>
     
     <Card.Body>
       <Card.Title className='cardtitle'>Awaiting Approval</Card.Title>
       <Card.Text className='cardmessage' style={{color: "#999999"}}>
       None
       </Card.Text>
     
     </Card.Body>
   </Card>
   </Col>
   <Col>  
  <Card className='card' style={{ width: '18rem' }}>
     
     <Card.Body>
       <Card.Title className='cardtitle'>Awaiting Payment(1)</Card.Title>
       <Card.Text className='cardmessage' style={{color: "#009ADC"}}>
       $ 91,265.00
       </Card.Text>
     
     </Card.Body>
   </Card>
   </Col>
   <Col>  
  <Card className='card' style={{ width: '18rem' }}>
     
     <Card.Body>
       <Card.Title className='cardtitle'>Paid</Card.Title>
       <Card.Text className='cardmessage' style={{color: "#34A853"}}>
       $ 23,450.00
       </Card.Text>
     
     </Card.Body>
   </Card>
   </Col>
</Row>
<Row className='chartsystem' >
<Col md={7}>
  <div  ><ApexChart /></div>
    </Col>
    <Col md={5}><ApexChart /></Col>
   </Row>
  </Container>

  </div>
  );
}

export default AutoLayoutSizingExample;