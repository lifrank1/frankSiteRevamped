import {
  Stack,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function LandingPage() {
  return (
    /* A container is just a div with some padding/maxWidth. Useful for consistently centering content */
    <Container>
      {/* 
        The Grid layout simply cuts up the space into 12 spaces where each grid item can choose to span
        https://mui.com/material-ui/react-grid/
      */}
      <Grid container direction={"row-reverse"} alignItems={"stretch"}>
        {/*
          Grid items define the amount their content spans among the 12 spaces.
          However, since we might want to change this based on screen size, we can choose their spanning based on screen size.
          https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
        */}
        <Grid item md={5} xs={12}>
          {/*
            Stack is simply a flexbox with some helper functionality
            https://mui.com/material-ui/react-stack/
          */}
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
          >
            <img
              src="/img/ProfessionalPortrait.jpeg"
              style={{
                width: "min(100%, 300px)",
                height: "auto",
                borderRadius: "80%",
              }}
            />
          </Stack>
        </Grid>
        <Grid item md={7} xs={12}>
          {/*
            Typography is how you create text that follows Material-ui theming
            You can see the variants here:
            https://mui.com/material-ui/react-typography/#usage
          */}
          <Typography variant="h2">Hello! I am Frank</Typography>
          <Typography variant="h4">
            Junior at the Ohio State University
          </Typography>
          <Typography variant="body1" mt={1}>
            Outside of academics, I enjoy playing all kinds of sports, watching
            movies, and lifting. I love to try new things; currently, I'm
            learning how to cook and self teaching guitar.
          </Typography>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            mt={3}
            mb={3}
          >
            <div>
              {/*
                IconButton Component: https://mui.com/material-ui/react-button/#icon-button
                You can get all of the Icons offered by Material-Ui here: https://mui.com/material-ui/material-icons/
              */}
              <IconButton href="https://www.linkedin.com/in/lifrank1">
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton href="https://github.com/lifrank1/">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </div>
            <Button
              variant="outlined"
              href="../public/Frank_Li_Resume.pdf"
              download="Frank_Li_Resume.pdf"
            >
              Download CV
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <hr />
      <Typography variant="h3">Classes</Typography>
      <Typography variant="body">
        <ul>
          <li>Software Components 1 & 2</li>
          <li>Discrete Structures 1 & 2</li>
          <li>Foundations of Higher Mathematics (Proofs)</li>
          <li>Low-Level Programming and Computer Organization 1 & 2</li>
          <li>Probability and Statistics for Engineers</li>
          <li>Engineering Mathematics</li>
          <li>Introduction to Database Systems</li>
          <li>Introduction to Artificial Intelligence</li>
          <li>Introduction to Computer Architecture</li>
          <li>Introduction to Digital Logic</li>
          <li>Computer Networking and Internet Technologies</li>
          <li>Design, Development, and Documentation of Web Applications</li>
          <li>Linear Algebra</li>
        </ul>
      </Typography>
    </Container>
  );
}

export default LandingPage;
