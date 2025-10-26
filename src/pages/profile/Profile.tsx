import React from "react";
import { Layout, Tabs, Card, Breadcrumb, Grid } from "antd";
import ProfileInfo from "./ProfileInfo";
import ContactInfo from "./ContactInfo";
import Booking from "./Booking";
import Payments from "./Payments";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const Profile: React.FC = () => {
  const screens = useBreakpoint();
    const isMobile = !screens.md;
  return (
    <Layout style={{ padding: isMobile ? 24 : 50, background: "#f0f2f5" }}>
      <Content>

         {/* Breadcrumb */}
         <Breadcrumb style={{ marginBottom: 24 }}>
          <Breadcrumb.Item><Link to="/dashboard">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/dashboard">Appointments</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb>

        <Card>
          <Tabs defaultActiveKey="1" type="card">
            <Tabs.TabPane tab="Profile Info" key="1">
              <ProfileInfo />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Contact Info" key="2">
              <ContactInfo />
            </Tabs.TabPane>
            {/* <Tabs.TabPane tab="Booking" key="3">
              <Booking />
            </Tabs.TabPane> */}
            <Tabs.TabPane tab="Payments" key="4">
              <Payments />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Content>
    </Layout>
  );
};

export default Profile;
