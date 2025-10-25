import { Button, Layout, Avatar } from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <Header style={{ display: 'flex', alignItems: 'center', padding: '0 24px' }}>
      <img
        src={logo}
        alt="Logo"
        style={{ height: 38, marginRight: 32, cursor: 'pointer' }}
        onClick={() => navigate('/dashboard')}
      />

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
      
        {/* Profile Icon */}
        <Avatar
          icon={<UserOutlined />}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/profile')}
        />

        {/* Logout Button */}
        <Button
          type="text"
          icon={<LogoutOutlined style={{ color: 'white', fontSize: 18 }} />}
          onClick={() => navigate('/')}
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
