import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider
  } from "@mui/material";
  import { Button } from "@mui/material";
  
  export default function Cart({ cart, placeOrder }) {
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  
    return (
      <Paper
        sx={{
          p: 2,
          borderRadius: 3,
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          🛒 Cart
        </Typography>
  
        <List>
          {cart.map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText
                primary={`${item.name} x ${item.qty}`}
                secondary={`$${item.price * item.qty}`}
              />
            </ListItem>
          ))}
        </List>
  
        <Divider sx={{ my: 2 }} />
  
        <Typography fontWeight={700}>
          Total: ${total.toFixed(2)}
        </Typography>

        <Button
  variant="contained"
  fullWidth
  sx={{
    mt: 2,
    background: "#16a34a",
    textTransform: "none",
    borderRadius: 2
  }}
  onClick={placeOrder}
>
  Place Order
</Button>
      </Paper>
    );
  }