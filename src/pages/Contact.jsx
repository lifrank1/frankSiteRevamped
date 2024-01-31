import { Container, Typography, Card, Grid } from "@mui/material";

function Contact() {
  return (
    <Container>
      <Typography variant="h2">
        Contact Me
      </Typography>
      <Card sx={{p: 3}} variant="outlined">
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography style={{fontSize: '1.5em'}}>
              Email: __email__
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography style={{fontSize: '1.5em'}}>
              Phone: __phone__
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography style={{fontSize: '1.5em'}}>
              LinkedIn: __linkedin__
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography style={{fontSize: '1.5em'}}>
              Hankshake: __handshake__  
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography style={{fontSize: '1.5em'}}>
              Github: __github__
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography style={{fontSize: '1.5em'}}>
              Social Media: __socialmedia__
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default Contact;