import React, { useEffect, useState, ReactNode } from 'react';
import { Row, Col, Card, Typography, Statistic, Grid, Button } from 'antd';
import {
  HomeOutlined,
  MedicineBoxOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  CrownOutlined,
  PlusCircleOutlined,
  LineChartOutlined,
  LockOutlined,
  CalendarTwoTone,
  ClockCircleOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Dashboard = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  const userStats = {
    hotelBookings: 5,
    medicalAppointments: 3,
    upcomingBookings: 2,
    favorites: 4,
    totalSpent: 15200,
    membership: 'Gold',
    totalIncome: 23194.8,
    totalPaid: 8145.2,
    growthRate: 36,
    mainStocks: 16073.49,
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();
  const hours = currentTime.getHours();
  const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';

  const cardBg = 'rgba(24,144,255,0.05)';
  const actionBg = 'rgba(250,173,20,0.08)';

  // Custom title style with icon - with proper TypeScript typing
  const titleWithIcon = (icon: ReactNode, text: string): ReactNode => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {icon}
      <span>{text}</span>
    </div>
  );

  // Value style to make text bold
  const valueStyle: React.CSSProperties = { fontWeight: '500' };

  return (
    <div style={{ padding: isMobile ? 24 : 50, background: '#f7f8fa' }}>
      {/* Header */}
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title style={{ marginBottom: 4 }} level={3}>{greeting} 👋</Title>
          <Text strong>
          <CalendarTwoTone /> {formattedDate} &nbsp; <ClockCircleOutlined /> {formattedTime}
        </Text>
        </Col>
      </Row>

      {/* Main Stats + Action */}
      <Row gutter={[24, 24]}>
        {/* Left Side - Stats */}
        <Col xs={24} sm={24} md={18}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card 
                style={{ 
                  background: cardBg, 
                  borderRadius: 12,
                  border: '1px solid #ddd'
                }} 
                hoverable
              >
                <Statistic
                  title={titleWithIcon(<HomeOutlined style={{ color: '#1890ff' }} />, "Hotel Bookings")}
                  value={userStats.hotelBookings}
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card 
                style={{ 
                  background: cardBg, 
                  borderRadius: 12,
                  border: '1px solid #ddd'
                }} 
                hoverable
              >
                <Statistic
                  title={titleWithIcon(<MedicineBoxOutlined style={{ color: '#52c41a' }} />, "Medical Appointments")}
                  value={userStats.medicalAppointments}
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card 
                style={{ 
                  background: cardBg, 
                  borderRadius: 12,
                  border: '1px solid #ddd'
                }} 
                hoverable
              >
                <Statistic
                  title={titleWithIcon(<CalendarOutlined style={{ color: '#fa8c16' }} />, "Upcoming Appointments")}
                  value={userStats.upcomingBookings}
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card 
                style={{ 
                  background: cardBg, 
                  borderRadius: 12,
                  border: '1px solid #ddd'
                }} 
                hoverable
              >
                <Statistic
                  title={titleWithIcon(<CrownOutlined style={{ color: '#722ed1' }} />, "Favorites Saved")}
                  value={userStats.favorites}
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card 
                style={{ 
                  background: cardBg, 
                  borderRadius: 12,
                  border: '1px solid #ddd'
                }} 
                hoverable
              >
                <Statistic
                  title={titleWithIcon(<CreditCardOutlined style={{ color: '#13c2c2' }} />, "Total Spent ₹")}
                  value={userStats.totalSpent}
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card 
                style={{ 
                  background: cardBg, 
                  borderRadius: 12,
                  border: '1px solid #ddd'
                }} 
                hoverable
              >
                <Statistic
                  title={titleWithIcon(<CrownOutlined style={{ color: '#eb2f96' }} />, "Membership Level")}
                  value={userStats.membership}
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Right Side - Action Cards */}
        <Col xs={24} sm={24} md={6}>
          {/* <Card
            hoverable
            style={{
              background: actionBg,
              borderRadius: 12,
              textAlign: 'center',
              marginBottom: 16,
              border: '1px solid #ddd'
            }}
          >
            <PlusCircleOutlined style={{ fontSize: 36, color: '#faad14' }} />
            <Title level={5} style={{ marginTop: 12 }}>
              Book Hotel
            </Title>
            <Button type="primary" block href="/hotel">
              Book Now
            </Button>
          </Card> */}

          <Card
            hoverable
            style={{ 
              background: actionBg, 
              borderRadius: 12, 
              textAlign: 'center',
              border: '1px solid #ddd'
            }}
          >
            <MedicineBoxOutlined style={{ fontSize: 36, color: '#52c41a' }} />
            <Title level={5} style={{ marginTop: 12 }}>
              Medical Appointment
            </Title>
            <Button type="primary" block href="/appointment">
              Book Now
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;