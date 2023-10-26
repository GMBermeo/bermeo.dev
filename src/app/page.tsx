"use client";
import { Box, Card, Container, Typography } from "@mui/material";
import { redirect } from "next/navigation";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Typography variant="overline">Hello World</Typography>
            <Typography variant="h1">sadf</Typography>
            <Typography variant="h3">xczvzxvc</Typography>
          </Card>
        </Box>
      </Container>
    </main>
  );
}
