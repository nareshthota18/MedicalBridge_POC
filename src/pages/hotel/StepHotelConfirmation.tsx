import React from "react";
import { Result, Button } from "antd";

interface Props {
  hotel: string;
  room: string;
  price: number;
  onReset: () => void;
}

const StepHotelConfirmation: React.FC<Props> = ({ hotel, room, price, onReset }) => {
  return (
    <Result
      status="success"
      title="Hotel Booking Confirmed!"
      subTitle={
        <>
          <div>Hotel: <strong>{hotel}</strong></div>
          <div>Room: <strong>{room}</strong> | Price: <strong>${price}</strong></div>
          <div>You will receive a confirmation email and message with details.</div>
        </>
      }
      extra={[
        <Button type="primary" key="book-again" onClick={onReset}>
          Book Another Hotel
        </Button>,
      ]}
    />
  );
};

export default StepHotelConfirmation;
