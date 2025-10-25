import React from "react";
import { Card, Row, Col, Button, Typography } from "antd";
import {
  HeartTwoTone,
  SmileOutlined,
  MedicineBoxOutlined,
  EyeOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const healthConditions = [
  {
    id: "heart",
    title: "Heart Surgery",
    description: "Specialized care for heart diseases",
    icon: <HeartTwoTone style={{ fontSize: 36 }} twoToneColor="#eb2f96" />,
  },
  {
    id: "dental",
    title: "Dental Care",
    description: "Complete oral and dental treatments",
    icon: <SmileOutlined style={{ fontSize: 36, color: "#1890ff" }} />,
  },
  {
    id: "ortho",
    title: "Orthopedic",
    description: "Bone and joint treatment specialists",
    icon: <MedicineBoxOutlined style={{ fontSize: 36, color: "#52c41a" }} />,
  },
  {
    id: "eye",
    title: "Eye Care",
    description: "Advanced eye treatment & surgery",
    icon: <EyeOutlined style={{ fontSize: 36, color: "#faad14" }} />,
  },
  {
    id: "neuro",
    title: "Neurology",
    description: "Brain and nervous system care",
    icon: <BulbOutlined style={{ fontSize: 36, color: "#722ed1" }} />,
  },
];

interface Props {
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}

const Step1Health: React.FC<Props> = ({ selected, onSelect, onNext }) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        {healthConditions.map((condition) => (
          <Col xs={24} sm={24} md={8} key={condition.id}>
            <Card
              hoverable
              onClick={() => onSelect(condition.id)}
              style={{
                border: selected === condition.id ? "2px solid #1890ff" : undefined,
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: 12 }}>{condition.icon}</div>
              <Title level={5}>{condition.title}</Title>
              <Paragraph type="secondary">{condition.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: 24, textAlign: "right" }}>
        <Button type="primary" onClick={onNext} disabled={!selected}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Step1Health;
