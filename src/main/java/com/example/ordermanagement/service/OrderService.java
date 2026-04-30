package com.example.ordermanagement.service;

import com.example.ordermanagement.model.Order;
import com.example.ordermanagement.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public Order placeOrder(Order order) {
        order.setStatus("Order Received");
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public void updateStatuses() {
        List<Order> orders = orderRepository.findAll();

        for (Order o : orders) {
            switch (o.getStatus()) {
                case "Order Received" -> o.setStatus("Preparing");
                case "Preparing" -> o.setStatus("Out for Delivery");
                case "Out for Delivery" -> o.setStatus("Delivered");
            }
        }

        orderRepository.saveAll(orders);
    }
}