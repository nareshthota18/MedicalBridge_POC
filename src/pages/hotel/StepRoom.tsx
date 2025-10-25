import React from "react";
import { Row, Col, Card, Button } from "antd";
import { DollarCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

export interface Room {
  slot: string;
  price: number;
  time: string;
}

const roomsData: Record<string, Room[]> = {
  hotel_1: [
    { slot: "Single Room", price: 120, time: "Check-in: 12 PM" },
    { slot: "Double Room", price: 200, time: "Check-in: 2 PM" },
  ],
  hotel_2: [
    { slot: "Standard Room", price: 80, time: "Check-in: 11 AM" },
    { slot: "Deluxe Room", price: 150, time: "Check-in: 1 PM" },
  ],
  hotel_3: [
    { slot: "Single Bed", price: 40, time: "Check-in: 10 AM" },
    { slot: "Double Bed", price: 70, time: "Check-in: 12 PM" },
  ],
};

interface Props {
  hotelId: string;
  selected: string | null;
  onSelect: (slot: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const StepRoom: React.FC<Props> = ({ hotelId, selected, onSelect, onNext, onPrev }) => {
  const rooms: Room[] = roomsData[hotelId] || [];

  return (
    <>
      <Row gutter={[16, 16]}>
        {rooms.map((room, idx) => (
          <Col xs={24} sm={12} md={8} key={idx}>
            <Card
              hoverable
              onClick={() => onSelect(room.slot)}
              style={{
                border: selected === room.slot ? "2px solid #1890ff" : undefined,
                textAlign: "center",
                cursor: "pointer",
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 500 }}>{room.slot}</div>
              <div style={{ color: "rgba(0,0,0,0.6)", margin: "8px 0" }}>
                <DollarCircleOutlined /> ${room.price}
              </div>
              <div style={{ color: "rgba(0,0,0,0.6)" }}>
                <ClockCircleOutlined /> {room.time}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
        <Button type="primary" onClick={onPrev}>
          Previous
        </Button>
        <Button type="primary" onClick={onNext} disabled={!selected}>
          Book
        </Button>
      </div>
    </>
  );
};

export default StepRoom;
