import { Container, Card, Typography, useMediaQuery } from "@mui/material"
import Search from "./Components/Search"

const App = () => {
  const smallScreen = useMediaQuery('(max-width:900px)');
  return (
    <Container sx={{
      width: smallScreen ? "90%" : "40%",
      padding: "20px",
      marginTop: smallScreen ? "40%" : "10%"
    }}>
      <Card sx={{
        padding: "20px",
        textAlign: "center"

      }}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          Weather Chart
        </Typography>
        <Search />
      </Card>
    </Container>
  )
}

export default App
