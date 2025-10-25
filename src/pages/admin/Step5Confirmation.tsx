import { Result, Button } from "antd";

const Step5Confirmation = () => {
  return (
    <Result
      status="success"
      title="Appointment Scheduled Successfully!"
      subTitle="You will receive a confirmation email and message with details."
      extra={[
        <Button type="primary" key="home" onClick={() => window.location.reload()}>
          Book Another Appointment
        </Button>,
      ]}
    />
  );
};

export default Step5Confirmation;
