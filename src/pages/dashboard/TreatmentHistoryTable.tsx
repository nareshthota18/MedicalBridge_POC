import React, { useState } from 'react';
import { Table, Tag, Button, Modal, Descriptions, Typography } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
const { Title } = Typography;

export interface TreatmentHistory {
  key: string;
  treatmentId: string;
  caseNumber: string;
  patientName: string;
  patientId: string;
  doctorName: string;
  department: string;
  treatmentType: string;
  diagnosis: string;
  treatmentDescription: string;
  startDate: string;
  endDate: string;
  hospital: string;
  status: 'Completed' | 'Ongoing' | 'Cancelled';
}

interface TreatmentHistoryTableProps {
  isMobile?: boolean;
  data?: TreatmentHistory[];
  onViewDetails?: (treatmentId: string) => void;
  onViewPatient?: (patientId: string) => void;
}

const TreatmentHistoryTable: React.FC<TreatmentHistoryTableProps> = ({
  isMobile = false,
  data = defaultTreatmentHistory,
  onViewDetails,
  onViewPatient,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<TreatmentHistory | null>(null);

  // Limited columns for default view (3-4 fields)
  const limitedColumns: ColumnsType<TreatmentHistory> = [
    {
      title: 'Treatment ID',
      dataIndex: 'treatmentId',
      key: 'treatmentId',
      width: 120,
    },
    {
      title: 'Doctor',
      dataIndex: 'doctorName',
      key: 'doctorName',
      width: 150,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      width: 120,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => {
        const color = status === 'Completed' ? 'green' : status === 'Ongoing' ? 'blue' : 'red';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      render: (_, record) => (
        <Tag style={{ cursor: 'pointer', color: '#1890ff' }}
          onClick={() => handleViewMore(record)}
        >
          View More
        </Tag>
      ),
    },
  ];

  // Full columns for modal view
  const fullColumns: ColumnsType<TreatmentHistory> = [
    {
      title: 'Treatment ID',
      dataIndex: 'treatmentId',
      key: 'treatmentId',
      width: 120,
    },
    {
      title: 'Case Number',
      dataIndex: 'caseNumber',
      key: 'caseNumber',
      width: 100,
    },
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      key: 'patientName',
      width: 120,
      render: (text, record) => (
        <Button 
          type="link" 
          size="small" 
          onClick={() => onViewPatient?.(record.patientId)}
        >
          {text}
        </Button>
      ),
    },
    {
      title: 'Doctor',
      dataIndex: 'doctorName',
      key: 'doctorName',
      width: 150,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      width: 120,
    },
    {
      title: 'Treatment Type',
      dataIndex: 'treatmentType',
      key: 'treatmentType',
      width: 130,
    },
    {
      title: 'Diagnosis',
      dataIndex: 'diagnosis',
      key: 'diagnosis',
      width: 150,
    },
    {
      title: 'Treatment Description',
      dataIndex: 'treatmentDescription',
      key: 'treatmentDescription',
      width: 200,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      width: 110,
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      width: 110,
    },
    {
      title: 'Hospital',
      dataIndex: 'hospital',
      key: 'hospital',
      width: 140,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => {
        const color = status === 'Completed' ? 'green' : status === 'Ongoing' ? 'blue' : 'red';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];

  const handleViewMore = (record: TreatmentHistory) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedRecord(null);
  };

  const handleViewDetails = (treatmentId: string) => {
    if (onViewDetails) {
      onViewDetails(treatmentId);
    }
  };

  return (
    <>
    <Title level={4} style={{ marginBottom: 16 }}>
        Treatment History
      </Title>
      <Table
        columns={limitedColumns}
        dataSource={data}
        bordered
        pagination={ false }
        scroll={isMobile ? { x: 600 } : { x: 800 }}
        size={isMobile ? 'small' : 'middle'}
      />

      {/* Modal for detailed view */}
      <Modal
        title="Treatment Details"
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>,
        //   <Button 
        //     key="details" 
        //     type="primary" 
        //     icon={<EyeOutlined />}
        //     onClick={() => selectedRecord && handleViewDetails(selectedRecord.treatmentId)}
        //   >
        //     View Full Details
        //   </Button>,
        ]}
        width={800}
      >
        {selectedRecord && (
          <Descriptions bordered column={isMobile ? 1 : 2} size="middle">
            <Descriptions.Item label="Treatment ID">
              {selectedRecord.treatmentId}
            </Descriptions.Item>
            <Descriptions.Item label="Case Number">
              {selectedRecord.caseNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Patient Name">
              <Button 
                type="link" 
                size="small" 
                onClick={() => onViewPatient?.(selectedRecord.patientId)}
              >
                {selectedRecord.patientName}
              </Button>
            </Descriptions.Item>
            <Descriptions.Item label="Doctor Name">
              {selectedRecord.doctorName}
            </Descriptions.Item>
            <Descriptions.Item label="Department">
              {selectedRecord.department}
            </Descriptions.Item>
            <Descriptions.Item label="Treatment Type">
              {selectedRecord.treatmentType}
            </Descriptions.Item>
            <Descriptions.Item label="Diagnosis">
              {selectedRecord.diagnosis}
            </Descriptions.Item>
            <Descriptions.Item label="Treatment Description">
              {selectedRecord.treatmentDescription}
            </Descriptions.Item>
            <Descriptions.Item label="Start Date">
              {selectedRecord.startDate}
            </Descriptions.Item>
            <Descriptions.Item label="End Date">
              {selectedRecord.endDate}
            </Descriptions.Item>
            <Descriptions.Item label="Hospital">
              {selectedRecord.hospital}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={
                selectedRecord.status === 'Completed' ? 'green' : 
                selectedRecord.status === 'Ongoing' ? 'blue' : 'red'
              }>
                {selectedRecord.status.toUpperCase()}
              </Tag>
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </>
  );
};

// Default data
export const defaultTreatmentHistory: TreatmentHistory[] = [
  {
    key: '1',
    treatmentId: 'TR-2024-001',
    caseNumber: 'CASE-001',
    patientName: 'John Smith',
    patientId: 'PID-001',
    doctorName: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    treatmentType: 'Consultation',
    diagnosis: 'Hypertension',
    treatmentDescription: 'Initial consultation and blood pressure management',
    startDate: '2024-01-15',
    endDate: '2024-01-15',
    hospital: 'Main Hospital',
    status: 'Completed'
  },
  {
    key: '2',
    treatmentId: 'TR-2024-002',
    caseNumber: 'CASE-002',
    patientName: 'John Smith',
    patientId: 'PID-001',
    doctorName: 'Dr. Michael Chen',
    department: 'Orthopedics',
    treatmentType: 'Physiotherapy',
    diagnosis: 'Rotator Cuff Injury',
    treatmentDescription: 'Physical therapy sessions for shoulder rehabilitation',
    startDate: '2024-02-01',
    endDate: '2024-03-15',
    hospital: 'Sports Medicine Center',
    status: 'Completed'
  },
  {
    key: '3',
    treatmentId: 'TR-2024-003',
    caseNumber: 'CASE-003',
    patientName: 'John Smith',
    patientId: 'PID-001',
    doctorName: 'Dr. Emily Davis',
    department: 'Dermatology',
    treatmentType: 'Surgery',
    diagnosis: 'Basal Cell Carcinoma',
    treatmentDescription: 'Mohs surgery for skin cancer removal',
    startDate: '2024-03-10',
    endDate: '2024-03-10',
    hospital: 'Main Hospital',
    status: 'Completed'
  },
  {
    key: '4',
    treatmentId: 'TR-2024-004',
    caseNumber: 'CASE-004',
    patientName: 'John Smith',
    patientId: 'PID-001',
    doctorName: 'Dr. Robert Wilson',
    department: 'Endocrinology',
    treatmentType: 'Consultation',
    diagnosis: 'Type 2 Diabetes',
    treatmentDescription: 'Diabetes management and medication adjustment',
    startDate: '2024-04-05',
    endDate: '2024-04-05',
    hospital: 'Main Hospital',
    status: 'Completed'
  },
  {
    key: '5',
    treatmentId: 'TR-2024-005',
    caseNumber: 'CASE-005',
    patientName: 'John Smith',
    patientId: 'PID-001',
    doctorName: 'Dr. Lisa Garcia',
    department: 'Physical Therapy',
    treatmentType: 'Physiotherapy',
    diagnosis: 'Lower Back Pain',
    treatmentDescription: 'Ongoing physical therapy sessions',
    startDate: '2024-05-01',
    endDate: '2024-06-30',
    hospital: 'Rehabilitation Center',
    status: 'Ongoing'
  }
];

export default TreatmentHistoryTable;