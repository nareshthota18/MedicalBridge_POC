import React, { useState } from "react";
import { Layout, Steps, Row, Col, Card, Button, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import StepHotel from "./StepHotel";
import StepRoom from "./StepRoom";
import StepHotelConfirmation from "./StepHotelConfirmation";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Step } = Steps;

const HotelBookingDashboard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(0);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const resetBooking = () => {
    setCurrentStep(0);
    setSelectedHotel(null);
    setSelectedRoom(null);
    setPrice(0);
  };

  return (
    <Layout style={{ padding: 50, background: "#f0f2f5" }}>
      <Content>

        {/* Breadcrumb */}
        <Breadcrumb style={{ marginBottom: 24 }}>
          <Breadcrumb.Item><Link to="/dashboard">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/dashboard">Appointments</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Book Hotel</Breadcrumb.Item>
        </Breadcrumb>

        <Row gutter={24}>
          {/* Stepper Column */}
          <Col xs={24} lg={4}>
            <Steps current={currentStep} direction="vertical" size="small" style={{ marginBottom: 24 }}>
              <Step title="Select Hotel" />
              <Step title="Select Room" />
              <Step title="Confirmation" />
            </Steps>
          </Col>

          {/* Step Content Column */}
          <Col xs={24} lg={14}>
            {currentStep === 0 && (
              <StepHotel
                selected={selectedHotel}
                onSelect={(id) => setSelectedHotel(id)}
                onNext={nextStep}
              />
            )}
            {currentStep === 1 && selectedHotel && (
              <StepRoom
                hotelId={selectedHotel!} // Non-null assertion fixes TS error
                selected={selectedRoom}
                onSelect={(slot) => {
                  setSelectedRoom(slot);
                  setPrice(slot.includes("Single") ? 100 : 200);
                }}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}
            {currentStep === 2 && selectedHotel && selectedRoom && (
              <StepHotelConfirmation
                hotel={selectedHotel!}
                room={selectedRoom!}
                price={price}
                onReset={resetBooking}
              />
            )}
          </Col>

          {/* Right Column: Book Hospital Appointment Card */}
          <Col xs={24} lg={6}>
            <Card hoverable style={{ textAlign: "center", padding: 24 }}>
              <HomeOutlined style={{ fontSize: 36, color: "#1890ff", marginBottom: 16 }} />
              <h3>Book Hospital Appointment</h3>
              <p>Quickly schedule an appointment with your selected hospital for convenience.</p>
              <Button type="primary" block href="/dashboard">
                Book Appointment
              </Button>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HotelBookingDashboard;
