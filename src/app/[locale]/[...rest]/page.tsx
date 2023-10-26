"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Typography variant="overline">Hello World</Typography>
            <Typography variant="h1">{t("title")}</Typography>
            <Typography variant="h3">{t("subtitle")}</Typography>
          </Card>
        </Box>
      </Container>
    </main>
  );
}
