import { Button, Container, Grid, Stack, Typography } from "@mui/material";

function Projects() {
  return (
    <Container>
      <Typography variant="h2" mb={4}>
        Projects
      </Typography>
      <Grid container spacing={8}>
        <Grid item md={6} xs={12}>
          <Typography variant="h4" mb={2}>
            GroupMe Anti Spam Bot
          </Typography>
          <Typography variant="body1" style={{ paddingBottom: "16px" }}>
            Deployed a python script in AWS Lambda to remove messages containing
            certain keywords. (Code in GitHub linked below)
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
            <img src="/img/AntispamPicture.png" style={{ width: "50%" }} />
          </Stack>
        </Grid>
        {/* PROJECT BLOCK 2 */}
        <Grid item md={6} xs={12}>
          <Stack alignItems="left" justifyContent="left">
            <img src="/img/MalariaApp.png" style={{ width: "50%" }} />
          </Stack>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h4" mb={2}>
            Malaria Diagnostics App
          </Typography>
          <Typography variant="body1" style={{ paddingBottom: "16px" }}>
            Created a Swift app to take in dyed blood sample images then use a
            convoluted neural network to classify if the sample was contaminated
            with malaria parasites. (Code in PointPoint linked below)
          </Typography>
          <Button
            href="https://buckeyemailosu-my.sharepoint.com/:p:/g/personal/li_12634_buckeyemail_osu_edu/ESBKuT1u429Hltig1rdfcN8Blt_NcoeHJgpeqT9dcYaXqw?e=PbTQgK"
            variant="contained"
          >
            Go to project page
          </Button>
        </Grid>
        {/* PROJECT BLOCK 3 WOULD GO HERE */}
      </Grid>
    </Container>
  );
}

export default Projects;
