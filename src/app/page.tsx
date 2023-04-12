"use client";
import { Button, Grid, Stack, CssBaseline } from "@mui/material";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <div>
        <Grid
          container
          height="100vh"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Stack direction="row" columnGap={1}>
            {/* <Button color="success" variant="contained"><Link href="/register">Register</Link></Button>
            <Button variant="outlined"><Link href="/login">Login</Link></Button> */}
            <Link className="text-white" href="/properties">
              <Button variant="contained">View Projects</Button>
            </Link>
          </Stack>
        </Grid>
      </div>
    </main>
  );
}
