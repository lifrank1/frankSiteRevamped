import { Button, Container, Grid, Stack, Typography } from "@mui/material";

function Projects() {
  return (
    <Container>
      <Typography variant="h2" mb={4}>Projects</Typography>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Typography variant="h4" mb={2}>Project A</Typography>
          <Typography variant="body1">Text here</Typography>
          <Button href="https://lifrank.me" variant="contained">
            Go to project page
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
            <Stack alignItems="center" justifyContent="center">
                <img src="/img/ProfessionalPortrait.jpeg" style={{ width: "50%" }} />
            </Stack>  
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
