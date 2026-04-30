import { Grid } from "@mui/material";
import MenuCard from "./MenuCard";

export default function MenuGrid({ items, onAdd }) {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <MenuCard item={item} onAdd={onAdd} />
        </Grid>
      ))}
    </Grid>
  );
}