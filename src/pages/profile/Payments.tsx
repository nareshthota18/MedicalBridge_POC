import React from "react";
import { Card, Typography } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Payments: React.FC = () => {
  return (
    <Card style={{ padding: 24, textAlign: "center" }}>
      <DollarCircleOutlined style={{ fontSize: 48, color: "#1890ff", marginBottom: 16 }} />
      <Title level={4}>Payments</Title>
      <Paragraph>No payment records available.</Paragraph>
    </Card>
  );
};

export default Payments;
