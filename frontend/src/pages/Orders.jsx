import { useEffect, useState } from "react";
import { getOrders } from "../api/api";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        getOrders().then((res) => setOrders(res.data));
    };

    useEffect(() => {
        fetchOrders();

        const interval = setInterval(fetchOrders, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: 10 }}>
            <h2>Orders</h2>

            {orders.map((order) => (
                <div
                    key={order.id}
                    style={{
                        border: "1px solid gray",
                        marginBottom: 10,
                        padding: 10,
                    }}
                >
                    <p>
                        <b>{order.customerName}</b>
                    </p>
                    <p>Status: {order.status}</p>
                </div>
            ))}
        </div>
    );
}