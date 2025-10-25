import React from "react";
import { Card, Typography, Row, Col, Divider } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const ContactInfo: React.FC = () => {
  return (
    <Card style={{ padding: 24 }}>
      <Title level={4}>Contact Information</Title>

      <Row gutter={[16, 16]}>
        {/* Email */}
        <Col xs={24} sm={12}>
          <Card hoverable style={{ padding: 16 }}>
            <MailOutlined style={{ fontSize: 24, color: "#1890ff", marginRight: 12 }} />
            <Text strong>Primary Email:</Text>
            <br />
            <Text>johndoe@example.com</Text>
            <Divider />
            <Text strong>Secondary Email:</Text>
            <br />
            <Text>john.secondary@example.com</Text>
          </Card>
        </Col>

        {/* Phone */}
        <Col xs={24} sm={12}>
          <Card hoverable style={{ padding: 16 }}>
            <PhoneOutlined style={{ fontSize: 24, color: "#52c41a", marginRight: 12 }} />
            <Text strong>Mobile:</Text>
            <br />
            <Text>+91 9876543210</Text>
            <Divider />
            <Text strong>WhatsApp:</Text>
            <br />
            <Text>+91 9876543210</Text>
          </Card>
        </Col>

        {/* Address */}
        <Col xs={24}>
          <Card hoverable style={{ padding: 16 }}>
            <EnvironmentOutlined style={{ fontSize: 24, color: "#fa8c16", marginRight: 12 }} />
            <Text strong>Address:</Text>
            <br />
            <Text>
              123, MG Road, Bangalore, Karnataka, India - 560001
            </Text>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default ContactInfo;
