import React from "react";
import { Table, Card, Typography, Grid } from "antd";
import { HomeOutlined, CalendarOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const bookingsData = [
  { key: 1, hotel: "Grand Palace", room: "Single Room", date: "2025-10-27" },
  { key: 2, hotel: "City Inn", room: "Double Room", date: "2025-11-01" },
];

const bookingsColumns = [
  { title: "Hotel", dataIndex: "hotel", key: "hotel", render: (text: string) => <><HomeOutlined /> {text}</> },
  { title: "Room", dataIndex: "room", key: "room" },
  { title: "Date", dataIndex: "date", key: "date", render: (text: string) => <><CalendarOutlined /> {text}</> },
];

const Booking: React.FC = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
  return (
    <Card style={{ padding: isMobile ? 0 : 0 }} bodyStyle={isMobile ? { padding: 18 } : {}}>
      <Title level={4}>Your Bookings</Title>
      <Table dataSource={bookingsData} columns={bookingsColumns} pagination={false} bordered />
    </Card>
  );
};

export default Booking;
