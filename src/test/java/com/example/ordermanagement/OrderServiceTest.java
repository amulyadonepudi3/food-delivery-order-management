package com.example.ordermanagement;

import com.example.ordermanagement.model.Order;
import com.example.ordermanagement.repository.OrderRepository;
import com.example.ordermanagement.service.OrderService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @InjectMocks
    private OrderService orderService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    // ✅ Test placeOrder
    @Test
    void testPlaceOrder_shouldSetStatusAndSave() {
        Order order = new Order();

        when(orderRepository.save(any(Order.class))).thenReturn(order);

        Order saved = orderService.placeOrder(order);

        assertNotNull(saved);
        assertEquals("Order Received", saved.getStatus());

        verify(orderRepository, times(1)).save(order);
    }

    // ✅ Test getAllOrders
    @Test
    void testGetAllOrders_shouldReturnList() {
        List<Order> mockOrders = List.of(new Order(), new Order());

        when(orderRepository.findAll()).thenReturn(mockOrders);

        List<Order> result = orderService.getAllOrders();

        assertEquals(2, result.size());
        verify(orderRepository, times(1)).findAll();
    }

    // ✅ Test updateStatuses
    @Test
    void testUpdateStatuses_shouldUpdateAllOrdersCorrectly() {
        Order o1 = new Order();
        o1.setStatus("Order Received");

        Order o2 = new Order();
        o2.setStatus("Preparing");

        Order o3 = new Order();
        o3.setStatus("Out for Delivery");

        List<Order> orders = List.of(o1, o2, o3);

        when(orderRepository.findAll()).thenReturn(orders);

        orderService.updateStatuses();

        assertEquals("Preparing", o1.getStatus());
        assertEquals("Out for Delivery", o2.getStatus());
        assertEquals("Delivered", o3.getStatus());

        verify(orderRepository, times(1)).saveAll(orders);
    }
}