import React from "react";
import { Card, Row, Col, Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

const hospitalData: any = {
  heart: [
    { id: "apollo", title: "Apollo Hospital", description: "Leading heart care hospital", icon: "🏥" },
    { id: "fortis", title: "Fortis Hospital", description: "Advanced cardiac treatments", icon: "🏨" },
  ],
  dental: [
    { id: "smile", title: "Smile Dental Care", description: "Comprehensive dental treatments", icon: "🦷" },
    { id: "white", title: "White Pearl Dental", description: "Cosmetic and general dentistry", icon: "😁" },
  ],
  ortho: [
    { id: "sunshine", title: "Sunshine Ortho Center", description: "Joint and bone specialists", icon: "🦴" },
    { id: "maxcare", title: "Max Ortho Hospital", description: "Orthopedic treatments & surgeries", icon: "🏥" },
  ],
  eye: [
    { id: "vision", title: "Vision Eye Care", description: "Eye surgery & treatment", icon: "👁️" },
    { id: "clarity", title: "Clarity Eye Center", description: "Cataract & laser treatments", icon: "🔍" },
  ],
  neuro: [
    { id: "brain", title: "Brain Health Institute", description: "Neurology & brain surgery", icon: "🧠" },
    { id: "mind", title: "Mind Care Hospital", description: "Nervous system specialists", icon: "💡" },
  ],
};

interface Props {
  health: string;
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Step2Hospital: React.FC<Props> = ({ health, selected, onSelect, onNext, onPrev }) => {
  const hospitals = hospitalData[health] || [];

  return (
    <>
      <Row gutter={[16, 16]}>
        {hospitals.map((hospital: any) => (
          <Col xs={24} sm={24} md={8} key={hospital.id}>
            <Card
              hoverable
              onClick={() => onSelect(hospital.id)}
              style={{
                border: selected === hospital.id ? "2px solid #1890ff" : undefined,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{hospital.icon}</div>
              <Title level={5}>{hospital.title}</Title>
              <Paragraph type="secondary">{hospital.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: 24, justifyContent: "space-between", display: "flex" }}>
        <Button onClick={onPrev}>Previous</Button>
        <Button type="primary" onClick={onNext} disabled={!selected}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Step2Hospital;
