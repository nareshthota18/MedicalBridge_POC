import React from "react";
import { Card, Typography, Avatar, Row, Col, Divider, Space, Tag, Grid } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CrownOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const ProfileInfo: React.FC = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
  return (
    <Card style={{ padding: isMobile ? 0 : 0 }} bodyStyle={isMobile ? { padding: 18 } : {}} >
      <Row gutter={[24, 24]} align="middle">
        {/* Profile Avatar */}
        <Col>
          <Avatar size={100} icon={<UserOutlined />} />
        </Col>

        {/* Basic Info */}
        <Col flex="auto">
          <Title level={3}>John Doe</Title>
          <Space direction="vertical" size={4}>
            <Text>
              <CalendarOutlined /> Member Since: Jan 2023
            </Text>
            <Text>
              <CrownOutlined /> Membership: Premium
            </Text>
            <Text>
              Gender: Male | DOB: 15-Mar-1990
            </Text>
          </Space>
        </Col>
      </Row>

      <Divider />

      {/* Additional Info */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Card hoverable bodyStyle={isMobile ? { padding: 16 } : {}}>
            <Title level={5}>Last Login</Title>
            <Text>25-Oct-2025, 10:30 AM</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card hoverable bodyStyle={isMobile ? { padding: 16 } : {}}>
            <Title level={5}>Total Bookings</Title>
            <Text>12 appointments & 3 hotels booked</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card hoverable bodyStyle={isMobile ? { padding: 16 } : {}}>
            <Title level={5}>Rewards</Title>
            <Tag color="gold">Gold Member</Tag>
            <Tag color="green">Active</Tag>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card hoverable bodyStyle={isMobile ? { padding: 16 } : {}}>
            <Title level={5}>Notifications</Title>
            <Text>5 unread notifications</Text>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileInfo;
