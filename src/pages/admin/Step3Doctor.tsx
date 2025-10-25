import React from "react";
import { Card, Row, Col, Button, Typography, Avatar } from "antd";

const { Title, Paragraph } = Typography;

// Static doctors data by hospital
const doctorsData: any = {
  apollo: [
    { id: "dr_ramesh", name: "Dr. Ramesh", specialization: "Cardiac Surgeon", experience: "10 yrs", avatar: "" },
    { id: "dr_anita", name: "Dr. Anita", specialization: "Cardiologist", experience: "8 yrs", avatar: "" },
  ],
  fortis: [
    { id: "dr_raj", name: "Dr. Raj", specialization: "Cardiologist", experience: "12 yrs", avatar: "" },
    { id: "dr_vikram", name: "Dr. Vikram", specialization: "Cardiac Surgeon", experience: "15 yrs", avatar: "" },
  ],
  smile: [
    { id: "dr_pooja", name: "Dr. Pooja", specialization: "Dentist", experience: "6 yrs", avatar: "" },
    { id: "dr_mehta", name: "Dr. Mehta", specialization: "Orthodontist", experience: "9 yrs", avatar: "" },
  ],
};

interface Props {
  hospital: string;
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Step3Doctor: React.FC<Props> = ({ hospital, selected, onSelect, onNext, onPrev }) => {
  const doctors = doctorsData[hospital] || [];

  return (
    <>
      <Row gutter={[16, 16]}>
        {doctors.map((doc: any) => (
          <Col xs={24} sm={24} md={8} key={doc.id}>
            <Card
              hoverable
              onClick={() => onSelect(doc.id)}
              style={{
                border: selected === doc.id ? "2px solid #1890ff" : undefined,
                textAlign: "center",
              }}
            >
              <Avatar size={64} style={{ marginBottom: 12 }} src={doc.avatar} />
              <Title level={5}>{doc.name}</Title>
              <Paragraph type="secondary">{doc.specialization}</Paragraph>
              <Paragraph type="secondary">{doc.experience}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
        <Button onClick={onPrev}>Previous</Button>
        <Button type="primary" onClick={onNext} disabled={!selected}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Step3Doctor;
