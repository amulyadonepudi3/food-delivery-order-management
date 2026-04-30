import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box
  } from "@mui/material";
  
  export default function MenuCard({ item, onAdd }) {
    return (
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
          }
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={item.image}
          alt={item.name}
        />
  
        <CardContent>
          <Typography variant="h6" fontWeight={600}>
            {item.name}
          </Typography>
  
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {item.description}
          </Typography>
  
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Typography fontWeight={700} color="green">
              ${item.price}
            </Typography>
  
            <Button
              variant="contained"
              size="small"
              sx={{
                background: "#2563eb",
                borderRadius: 2,
                textTransform: "none"
              }}
              onClick={() => onAdd(item)}
            >
              Add
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  }