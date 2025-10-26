// src/components/Footer.tsx
import { Layout } from 'antd'

const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    <AntFooter
      style={{
        textAlign: 'center',
        color: '#fff',
      }}
    >
     Medical Bridge © {new Date().getFullYear()} Developed by &nbsp;  <a href='https://www.tconnectservices.com/'>  T-Connect Consultancy & Service Private Limited. </a>
    </AntFooter>
  )
}

export default Footer
