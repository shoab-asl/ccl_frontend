import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Navbar,Nav, Card} from 'react-bootstrap';
import Logo from '../assets/image.jpeg'; 
import Person from '../assets/download.jpeg';
import "../components/dashboard.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import ApexChart from './Chart';
import LatestSendingInvoice from './LatestSendingInvoice';
import IncomingPaymentStatus from './IncomingPaymentStatus';
import Footer from './Footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



function AutoLayoutSizingExample() {
  return (
    <div >  
      <Navbar  className="lol" >
    <Container  style={{background: "#fff !important"}}>
    
      <Navbar.Brand href="#home"><img src={Logo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto dashboardmenu">
          <Nav.Link href="#dashboard" active><span></span>Dashboard</Nav.Link>
          <Nav.Link href="#contacts">Contacts</Nav.Link>
          <Nav.Link href="services">Services</Nav.Link>
          <Nav.Link href="invoice" style={{display:"flex"}}>Invoice <KeyboardArrowDownIcon/></Nav.Link>
          <Nav.Link href="settings"style={{display:"flex"}}>Settings<KeyboardArrowDownIcon/></Nav.Link>
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
        <Row className='edit' md={12} >
         <Col className='mt-3 mb-3' md={9} sm={8} xs={6}>
         <h4>Dashboard</h4>
         </Col>
         <Col  className='mt-3 mb-3' md={3} xs={6} sm={4} >
         <Button className='button' >Edit dashboard</Button>
         </Col>
        </Row>
<Row md={12}>
  <Col md={3} sm={6} xs={6}>  
  <Card className='card' style={{ width: "100%" }}>
     
     <Card.Body>
       <Card.Title className='cardtitle'>Draft(3)</Card.Title>
       <Card.Text className='cardmessage' style={{color: "#009ADC"}}>
       $ 1,120.00
       </Card.Text>
     
     </Card.Body>
   </Card>
   </Col>
   <Col md={3} sm={6} xs={6}>  
  <Card className='card' style={{ width: "100%" }}>
     
     <Card.Body>
       <Card.Title className='cardtitle'>Awaiting Approval</Card.Title>
       <Card.Text className='cardmessage' style={{color: "#999999"}}>
       None
       </Card.Text>
     
     </Card.Body>
   </Card>
   </Col>
   <Col md={3} sm={6} xs={6}>  
  <Card className='card' style={{ width: "100%" }}>
     
     <Card.Body>
       <Card.Title className='cardtitle'>Awaiting Payment(1)</Card.Title>
       <Card.Text className='cardmessage' style={{color: "#009ADC"}}>
       $ 91,265.00
       </Card.Text>
     
     </Card.Body>
   </Card>
   </Col>
   <Col md={3} sm={6} xs={6}>  
  <Card className='card' style={{ width: "100%" }}>
     
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
<Col md={12} lg={7}>
  <div  ><ApexChart /></div>
    </Col>
    <Col md={12} lg={5}><ApexChart /></Col>
   </Row>
  </Container>
    <Container style={{height:"1000px"}}>
      <Row >
     <Col md={5} lg={5} sm={12}  >
     <LatestSendingInvoice/></Col>
     <Col md={7} lg={7} sm={12}>
     <IncomingPaymentStatus/>
     </Col>
      </Row>
    </Container>
    <Footer/>
  </div>
  );
}

export default AutoLayoutSizingExample;