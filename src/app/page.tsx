"use client";
import { Button, Grid, Stack, CssBaseline } from "@mui/material";
import Link from 'next/link'
import "./globals.css";

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <div>
        <h3 className="text-red-500 font-semibold text-xl">With tailwind</h3>
        <Grid
          container
          height="100vh"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <h1>Using Material UI with Next.js 13</h1>
          <Stack direction="row" columnGap={1}>
            <Button color="success" variant="contained"><Link href="/register">Register</Link></Button>
            <Button variant="outlined"><Link href="/login">Login</Link></Button>
          </Stack>
        </Grid>
      </div>
    </main>
  );
}
