import { useState } from "react";
import { Layout, Steps, Modal, Row, Col, Card, Button, Breadcrumb } from "antd";
import Step1Health from "./Step1Health";
import Step2Hospital from "./Step2Hospital";
import Step3Doctor from "./Step3Doctor";
import Step4Slot from "./Step4Slot";
import Step5Confirmation from "./Step5Confirmation";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Step } = Steps;

const AdminDashboard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Selections
  const [selectedHealth, setSelectedHealth] = useState<string | null>(null);
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Success Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const steps = [
    {
      title: "Health Condition",
      content: (
        <Step1Health
          selected={selectedHealth}
          onSelect={(id) => setSelectedHealth(id)}
          onNext={() => setCurrentStep(1)}
        />
      ),
    },
    {
      title: "Hospital",
      content: (
        <Step2Hospital
          health={selectedHealth!}
          selected={selectedHospital}
          onSelect={(id) => setSelectedHospital(id)}
          onNext={() => setCurrentStep(2)}
          onPrev={() => setCurrentStep(0)}
        />
      ),
    },
    {
      title: "Doctor",
      content: (
        <Step3Doctor
          hospital={selectedHospital!}
          selected={selectedDoctor}
          onSelect={(id) => setSelectedDoctor(id)}
          onNext={() => setCurrentStep(3)}
          onPrev={() => setCurrentStep(1)}
        />
      ),
    },
    {
      title: "Slot",
      content: (
        <Step4Slot
          doctor={selectedDoctor!}
          selected={selectedSlot}
          onSelect={(slot) => setSelectedSlot(slot)}
          onNext={() => setCurrentStep(4)} // Go to Step 5
          onPrev={() => setCurrentStep(2)}
        />
      ),
    },
    {
      title: "Confirmation",
      content: <Step5Confirmation />,
    },
  ];

  return (
    <Layout style={{ padding: 50, background: "#fff" }}>
      <Content>

        {/* Breadcrumb */}
        <Breadcrumb style={{ marginBottom: 24 }}>
          <Breadcrumb.Item><Link to="/dashboard">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/dashboard">Appointments</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Book Appointment</Breadcrumb.Item>
        </Breadcrumb>

        <Row gutter={24}>
          {/* Left column: Vertical Stepper */}
          <Col xs={24} lg={4}>
            <Steps
              current={currentStep}
              direction="vertical"
              size="small"
              style={{ marginBottom: 24 }}
            >
              {steps.map((item, index) => (
                <Step key={index} title={item.title} />
              ))}
            </Steps>
          </Col>

          {/* Middle column: Step content */}
          <Col xs={24} lg={16}>
            {steps[currentStep].content}
          </Col>

          {/* Right column: Ads / Banner */}
          <Col xs={24} lg={4}>
            <Card
              style={{
                textAlign: "center",
                background: "#fafafa",
                border: "1px solid #f0f0f0",
              }}
            >
              <h2>Book Nearest Hotels</h2>
              <p>
                Find and book hotels near your selected hospital for a comfortable stay.
              </p>
              <Button type="primary" block href="/hotel">
                Book Hotel
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Success Modal */}
        <Modal
          title="Appointment Confirmed"
          open={isModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
          okText="Done"
        >
          <p>Health Condition: {selectedHealth}</p>
          <p>Hospital: {selectedHospital}</p>
          <p>Doctor: {selectedDoctor}</p>
          <p>Slot: {selectedSlot}</p>
        </Modal>
      </Content>
    </Layout>
  );
};

export default AdminDashboard;
