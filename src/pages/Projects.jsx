import { Button, Container, Grid, Stack, Typography } from "@mui/material";

function Projects() {
  return (
    <Container>
      <Typography variant="h2" mb={4}>
        Projects
      </Typography>
      <Grid container spacing={10}>
        <Grid item md={6} xs={12}>
          <Typography variant="h4" mb={2}>
            GroupMe Anti Spam Bot
          </Typography>
          <Typography variant="body1">
            Deployed a python script in AWS Lambda to remove messages containing
            certain keywords
          </Typography>
          <Button
            href="https://github.com/lifrank1/GroupMeSpamBlocker"
            variant="contained"
          >
            Go to project page
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Stack alignItems="center" justifyContent="center">
            <img
              src="/img/ProfessionalPortrait.jpeg"
              style={{ width: "50%" }}
            />
          </Stack>
        </Grid>
        {/* PROJECT BLOCK 2 */}
        <Grid item md={6} xs={12}>
          <Stack alignItems="left" justifyContent="left">
            <img
              src="/img/ProfessionalPortrait.jpeg"
              style={{ width: "50%" }}
            />
          </Stack>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h4" mb={2}>
            Project A
          </Typography>
          <Typography variant="body1">Text here</Typography>
          <Button href="https://lifrank.me" variant="contained">
            Go to project page
          </Button>
        </Grid>
        {/* PROJECT BLOCK 3 */}
        <Grid item md={6} xs={12}>
          <Typography variant="h4" mb={2}>
            Project A
          </Typography>
          <Typography variant="body1">Text here</Typography>
          <Button href="https://lifrank.me" variant="contained">
            Go to project page
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Stack alignItems="center" justifyContent="center">
            <img
              src="/img/ProfessionalPortrait.jpeg"
              style={{ width: "50%" }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
