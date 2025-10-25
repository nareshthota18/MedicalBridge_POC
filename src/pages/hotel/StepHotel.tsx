import React from "react";
import { Row, Col, Card, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const hotelsData = [
    { id: "hotel_1", name: "Grand Palace", description: "5-star luxury hotel" },
    { id: "hotel_2", name: "City Inn", description: "Comfortable 3-star hotel" },
    { id: "hotel_3", name: "Budget Stay", description: "Affordable stay" },
    { id: "hotel_4", name: "Ocean View Resort", description: "Beachfront resort" },
    { id: "hotel_5", name: "Mountain Retreat", description: "Cozy lodge in the mountains" },
  ];  

interface Props {
  selected: string | null;
  onSelect: (hotelId: string) => void;
  onNext: () => void;
}

const StepHotel: React.FC<Props> = ({ selected, onSelect, onNext }) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        {hotelsData.map((hotel) => (
          <Col xs={24} sm={12} md={8} key={hotel.id}>
            <Card
              hoverable
              onClick={() => onSelect(hotel.id)}
              style={{
                border: selected === hotel.id ? "2px solid #1890ff" : undefined,
                textAlign: "center",
                cursor: "pointer",
                padding: 16,
              }}
            >
              <HomeOutlined style={{ fontSize: 36, color: "#1890ff", marginBottom: 12 }} />
              <div style={{ fontWeight: 500 }}>{hotel.name}</div>
              <div style={{ color: "rgba(0,0,0,0.6)" }}>{hotel.description}</div>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
        <Button type="primary"
          onClick={onNext}
          disabled={!selected}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default StepHotel;
