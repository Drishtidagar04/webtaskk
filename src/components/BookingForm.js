import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Image7 from "../images/image7.png";
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    city: '',
    arrivalDate: '',
    departureDate: '',
    rooms: '1',
    starRating: '5',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <Container className="bg-light p-4">
     <div className="row">
       <div className="col-md-10">
       
        <img src={Image7} alt="Hotel" className="img-fluid" />
        </div>
    </div>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2 className="card-title">Book Now</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1">
                  <Form.Label>City:</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label>Arrival Date:</Form.Label>
                  <Form.Control
                    type="date"
                    name="arrivalDate"
                    placeholder="Select Arrival Date"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label>Departure Date:</Form.Label>
                  <Form.Control
                    type="date"
                    name="departureDate"
                    placeholder="Select Departure Date"
                    value={formData.departureDate}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label>Number of Rooms:</Form.Label>
                  <Form.Select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label>Star Rating:</Form.Label>
                  <div>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Form.Check
                        key={rating}
                        inline
                        label={rating}
                        type="radio"
                        id={`star${rating}`}
                        name="starRating"
                        value={rating}
                        checked={parseInt(formData.starRating) === rating}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" variant="primary">
                    Book Now
                  </Button>
                </div>
            

                </Form>
    
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
