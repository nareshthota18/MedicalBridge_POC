import React from "react";
import { Card, Row, Col, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

// Static slots by doctor
const slotData: any = {
  dr_ramesh: ["10:00 AM", "11:30 AM", "2:00 PM"],
  dr_anita: ["9:00 AM", "3:00 PM", "4:30 PM"],
  dr_raj: ["10:15 AM", "12:30 PM", "3:00 PM"],
  dr_vikram: ["9:45 AM", "1:15 PM", "4:00 PM"],
  dr_pooja: ["10:15 AM", "1:45 PM"],
  dr_mehta: ["11:00 AM", "2:30 PM"],
};

interface Props {
  doctor: string;
  selected: string | null;
  onSelect: (slot: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Step4Slot: React.FC<Props> = ({ doctor, selected, onSelect, onNext, onPrev }) => {
  const slots = slotData[doctor] || [];

  return (
    <>
      <Row gutter={[16, 16]}>
        {slots.map((slot: string) => (
          <Col key={slot} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              onClick={() => onSelect(slot)}
              style={{
                border: selected === slot ? "2px solid #1890ff" : undefined,
                textAlign: "center",
                cursor: "pointer",
                padding: 16,
              }}
            >
              <ClockCircleOutlined style={{ fontSize: 36, color: "#1890ff", marginBottom: 12 }} />
              <div style={{ fontWeight: 500 }}>{slot}</div>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
        <Button onClick={onPrev}>Previous</Button>
        <Button type="primary" onClick={onNext} disabled={!selected}>
          Confirm
        </Button>
      </div>
    </>
  );
};

export default Step4Slot;
