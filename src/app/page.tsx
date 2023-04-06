"use client";
import { Button, Grid, Stack, CssBaseline } from "@mui/material";

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <div>
        <h3 className="text-red-500">With tailwind</h3>
        <Grid
          container
          height="100vh"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <h1>Using Material UI with Next.js 13</h1>
          <Stack direction="row" columnGap={1}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </Grid>
      </div>
    </main>
  );
}
