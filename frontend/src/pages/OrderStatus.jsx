import { Paper, Typography, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["PLACED", "PREPARING", "OUT_FOR_DELIVERY", "DELIVERED"];

export default function OrderStatus({ order }) {
  if (!order) return null;

  return (
    <Paper sx={{ p: 2, mt: 2, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight={700}>
        📦 Order #{order.id}
      </Typography>

      <Stepper activeStep={steps.indexOf(order.status)} sx={{ mt: 2 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
}