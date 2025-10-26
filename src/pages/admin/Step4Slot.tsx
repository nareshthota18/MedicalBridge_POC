import React, { useState } from "react";
import { Card, Row, Col, Button, Typography } from "antd";
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";

const { Title } = Typography;

// Static data: slots by doctor and date
const slotData: Record<string, Record<string, string[]>> = {
  dr_ramesh: {
    "2025-10-26": ["10:00 AM", "11:30 AM", "2:00 PM"],
    "2025-10-27": ["9:30 AM", "12:00 PM", "4:15 PM"],
  },
  dr_anita: {
    "2025-10-26": ["9:00 AM", "3:00 PM", "4:30 PM"],
    "2025-10-27": ["10:00 AM", "2:00 PM"],
  },
  dr_raj: {
    "2025-10-26": ["10:15 AM", "12:30 PM", "3:00 PM"],
  },
  dr_vikram: {
    "2025-10-26": ["9:45 AM", "1:15 PM", "4:00 PM"],
  },
  dr_pooja: {
    "2025-10-26": ["10:15 AM", "1:45 PM"],
  },
  dr_mehta: {
    "2025-10-26": ["11:00 AM", "2:30 PM"],
  },
};

interface Props {
  doctor: string;
  selected: string | null;
  onSelect: (slot: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Step4Slot: React.FC<Props> = ({
  doctor,
  selected,
  onSelect,
  onNext,
  onPrev,
}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const doctorSlots = slotData[doctor] || {};
  const availableDates = Object.keys(doctorSlots);
  const timeSlots = selectedDate ? doctorSlots[selectedDate] || [] : [];

  return (
    <>
      <Title level={4} style={{ marginBottom: 16 }}>
        {selectedDate ? "Select a Time Slot" : "Select a Date"}
      </Title>

      {/* Date Selection */}
      {!selectedDate && (
        <Row gutter={[16, 16]}>
          {availableDates.map((date) => (
            <Col key={date} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                onClick={() => setSelectedDate(date)}
                style={{
                  border: selectedDate === date ? "2px solid #1890ff" : undefined,
                  textAlign: "center",
                  cursor: "pointer",
                  padding: 16,
                }}
              >
                <CalendarOutlined
                  style={{
                    fontSize: 36,
                    color: "#faad14",
                    marginBottom: 12,
                  }}
                />
                <div style={{ fontWeight: 500 }}>
                  {new Date(date).toLocaleDateString("en-IN", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Time Slot Selection */}
      {selectedDate && (
        <>
          <Row gutter={[16, 16]}>
            {timeSlots.map((slot) => (
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
                  <ClockCircleOutlined
                    style={{
                      fontSize: 36,
                      color: "#1890ff",
                      marginBottom: 12,
                    }}
                  />
                  <div style={{ fontWeight: 500 }}>{slot}</div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Navigation Buttons */}
          <div
            style={{
              marginTop: 24,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={() => setSelectedDate(null)}>Back to Dates</Button>
            <Button type="primary" onClick={onNext} disabled={!selected}>
              Confirm
            </Button>
          </div>
        </>
      )}

      {/* Previous Button only at the bottom of step */}
      {!selectedDate && (
        <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={onPrev}>Previous</Button>
        </div>
      )}
    </>
  );
};

export default Step4Slot;
