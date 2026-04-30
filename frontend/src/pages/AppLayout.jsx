import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

export default function AppLayout({ children }) {
  return (
    <Box sx={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ background: "#1e293b" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            🍔 Food Order System
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </Box>
  );
}