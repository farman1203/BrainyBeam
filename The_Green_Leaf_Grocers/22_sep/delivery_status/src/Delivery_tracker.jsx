import React from "react";
import {
    FiCheckCircle,
    FiPackage,
    FiTruck,
    FiHome,
} from "react-icons/fi";

const DeliveryTracker = () => {
    const steps = [
        {
            title: "Order Placed",
            date: "20 Sep, 10:30 AM",
            icon: <FiCheckCircle />,
        },
        {
            title: "Order Packed",
            date: "20 Sep, 2:00 PM",
            icon: <FiPackage />,
        },
        {
            title: "Out for Delivery",
            date: "21 Sep, 9:00 AM",
            icon: <FiTruck />,
        },
        {
            title: "Delivered",
            date: "Expected 21 Sep",
            icon: <FiHome />,
        },
    ];

    return (
        <div className="delivery-page">
            <div className="delivery-card">
                <h2>Delivery Status</h2>
                <p className="order-id">Order #GLG10245</p>

                <div className="tracker">
                    {steps.map((step, index) => (
                        <div className="tracker-step" key={index}>
                            <div className="step-icon">
                                {step.icon}
                            </div>

                            {index !== steps.length - 1 && (
                                <div className="step-line"></div>
                            )}

                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeliveryTracker;