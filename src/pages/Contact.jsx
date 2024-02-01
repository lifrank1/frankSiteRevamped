import { Container, Typography, Card, Grid } from "@mui/material";

function Contact() {
  return (
    <Container>
      <Typography variant="h2" mb={4}>Contact Me!</Typography>
      <Card sx={{ p: 3 }} variant="outlined">
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography style={{ fontSize: "1.5em" }}>
              <b><u>Email</u></b>: li.12634@osu.edu
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography style={{ fontSize: "1.5em" }}>
            <b><u>Phone</u></b>: 858-248-2985
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography style={{ fontSize: "1.5em" }}>
            <b><u>LinkedIn</u></b>: https://www.linkedin.com/in/lifrank1/
            </Typography>
          </Grid>
          {/* <Grid item md={6} xs={12}>
            <Typography style={{ fontSize: "1.5em" }}>
              Handshake: https://app.joinhandshake.com/stu/users/37553977
            </Typography>
          </Grid> */}
          <Grid item md={6} xs={12}>
            <Typography style={{ fontSize: "1.5em" }}>
              <b><u>GitHub</u></b>: https://github.com/lifrank1
            </Typography>
          </Grid>
          {/* <Grid item md={6} xs={12}>
            <Typography style={{ fontSize: "1.5em" }}>
              Social Media: __socialmedia__
            </Typography>
          </Grid> */}
        </Grid>
      </Card>
    </Container>
  );
}

export default Contact;
