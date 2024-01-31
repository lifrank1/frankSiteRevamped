import { Stack, Container, Grid, Typography, Button } from "@mui/material";

function LandingPage() {
  return (
    <Container>
      <Grid container direction={'row-reverse'} alignItems={'stretch'}>
        <Grid item md={5} xs={12}>
          <Stack alignItems={'center'} justifyContent={'center'} height={'100%'}>
            <img src="/img/landingImage.jpg" style={{width: "min(100%, 300px)", height: "auto", borderRadius: '80%'}} />
          </Stack>
        </Grid>
        <Grid item md={7} xs={12}>
          <Typography variant="h2">
            Hello! I am Person Name
          </Typography>
          <Typography variant="h4">
            Student at Ohio State University
          </Typography>
          <Typography variant="body1" mt={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Stack justifyContent={'space-between'} direction={'row'} mt={3} mb={3}>
            <Typography>Socials</Typography>
            <Button variant="outlined">Download CV</Button>
          </Stack>
        </Grid>
      </Grid>
      <hr />
      <Typography variant="h3">
        Recent Posts
      </Typography>
    </Container>
  );
}

export default LandingPage;