import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

import AppLayout from "./pages/AppLayout";
import MenuGrid from "./pages/MenuGrid";
import OrderStatus from "./pages/OrderStatus";
import Cart from "./pages/Cart";

export default function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);

  const placeOrder = () => {
    if (cart.length === 0) return;
  
    const newOrder = {
      id: Date.now(),
      items: cart,
      status: "PLACED"
    };
  
    setOrders([...orders, newOrder]);
    setCurrentOrder(newOrder);
    setCart([]);
  };

  useEffect(() => {
    if (!currentOrder) return;
  
    const steps = ["PLACED", "PREPARING", "OUT_FOR_DELIVERY", "DELIVERED"];
    let index = 0;
  
    const interval = setInterval(() => {
      index++;
  
      if (index >= steps.length) {
        clearInterval(interval);
        return;
      }
  
      setCurrentOrder((prev) => ({
        ...prev,
        status: steps[index]
      }));
    }, 3000);
  
    return () => clearInterval(interval);
  }, [currentOrder]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/menu").then((res) => {
      setMenu(res.data);
    });
  }, []);

  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);

    if (existing) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  return (
    <AppLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <MenuGrid items={menu} onAdd={addToCart} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Cart cart={cart} placeOrder={placeOrder} />
          <OrderStatus order={currentOrder} />
        </Grid>
      </Grid>
    </AppLayout>
  );
}