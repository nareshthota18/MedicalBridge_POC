import { Button, Layout, Avatar, Dropdown, MenuProps } from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
  ProfileOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const HeaderComponent = () => {
  const navigate = useNavigate();

  // Dropdown menu items
  const profileMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'My Profile',
      onClick: () => navigate('/profile'),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: () => navigate('/'),
    },
  ];

  return (
    <Header style={{ display: 'flex', alignItems: 'center', padding: '0 24px' }}>
      <img
        src={logo}
        alt="Logo"
        style={{ height: 38, marginRight: 32, cursor: 'pointer' }}
        onClick={() => navigate('/dashboard')}
      />

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
      
        {/* Profile Icon with Dropdown */}
        <Dropdown
          menu={{ items: profileMenuItems }}
          placement="bottomRight"
          trigger={['click']}
        >
          <Avatar
            icon={<UserOutlined />}
            style={{ cursor: 'pointer' }}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderComponent;