import React, { useEffect, useState, ReactNode } from 'react';
import { Row, Col, Card, Typography, Statistic, Grid, Button, message } from 'antd';
import {
  HomeOutlined,
  MedicineBoxOutlined,
  CalendarOutlined,
  CalendarTwoTone,
  ClockCircleOutlined,
} from '@ant-design/icons';
import TreatmentHistoryTable, { TreatmentHistory } from './TreatmentHistoryTable';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Dashboard = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  const userStats = {
    hotelBookings: 5,
    medicalAppointments: 3,
    upcomingBookings: 5,
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

  const titleWithIcon = (icon: ReactNode, text: string): ReactNode => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {icon}
      <span>{text}</span>
    </div>
  );

  const valueStyle: React.CSSProperties = { fontWeight: '500' };

  // Handler functions for table actions
  const handleViewTreatmentDetails = (treatmentId: string) => {
    message.info(`Viewing treatment details for: ${treatmentId}`);
    // You can navigate to treatment details page or show a modal
  };

  const handleViewPatientDetails = (patientId: string) => {
    message.info(`Viewing patient details for: ${patientId}`);
    // You can navigate to patient profile page or show a modal
  };

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
        {/* Right Side - Action Cards */}
        <Col xs={24} sm={24} md={6}>
          <Card
            hoverable
            style={{ 
              background: actionBg, 
              borderRadius: 12, 
              border: '1px solid #ddd',
              marginBottom: 16
            }}
          >
            <Title level={5}>
              <MedicineBoxOutlined style={{ fontSize: 16, color: '#52c41a' }} /> Medical Appointment
            </Title>
            <Button type="primary" block href="/appointment">
              Book Now
            </Button>
          </Card>
        </Col>
        
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
                  title={titleWithIcon(<HomeOutlined style={{ color: '#1890ff' }} />, "Medical Bookings")}
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
                  title={titleWithIcon(<MedicineBoxOutlined style={{ color: '#52c41a' }} />, "Upcoming Bookings")}
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
                  title={titleWithIcon(<CalendarOutlined style={{ color: '#fa8c16' }} />, "Treatment History")}
                  value={userStats.upcomingBookings}
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Treatment History Table */}
      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col span={24}>
          <TreatmentHistoryTable
            isMobile={isMobile}
            onViewDetails={handleViewTreatmentDetails}
            onViewPatient={handleViewPatientDetails}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;