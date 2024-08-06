import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

// Changes to the expereinces array affects the experiences view
const experiences = [
  {
    title: "Software Engineer Intern @ JPMorganChase",
    description:
      "Accelerated ETL datalake registration times by creating a Java accelerator tool reduce JSON creation times by up to 90%. Built an API using Spring boot for multi-team data registration in a centralized datalake. Deployed the API using a CI/CD pipeline utilizing Docker, Jenkins, and Kubernetes",
    date: "06/24 - 08/24",
  },
  {
    title: "ML Research Assistant @ OSU",
    description:
      "Working in the DATUM lab under Dr. John Paparizzos. Implemented dozens of artificial intelligence classification methods to build a open source library for time series classification.",
    date: "01/24 - Present",
  },
  {
    title: "Software Engineer Intern @ Fiserv",
    description:
      "Programmatically remediated access for over 200 S3 buckets by creating an automated workflow. Protected company integrity by validating datastreams by querying databases with daily cron jobs. Set up a lambda function to aid with automated team email communications.",
    date: "06/23 - 08/23",
  },
];

function Experience({ title, description, date, flip }) {
  // useTheme() gives this component the theme. We will use it to get the primary color
  const theme = useTheme();
  const color = theme.palette.primary[500];

  return (
    <Grid
      container
      direction={flip ? "row-reverse" : "row"}
      position={"relative"}
    >
      <Grid item xs={6}>
        {/*
          Box component is just a fancy div with helper attributes
        */}
        <Box {...{ [flip ? "ml" : "mr"]: "20px" }}>
          <Typography variant="h5" mb={4} align={flip ? "left" : "right"}>
            {title}
          </Typography>
          <Typography variant="body1" align={flip ? "left" : "right"}>
            {description}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Stack
          {...{ [flip ? "mr" : "ml"]: "20px" }}
          alignItems={flip ? "flex-end" : "flex-start"}
        >
          <Box sx={{ backgroundColor: color, width: "150px" }} borderRadius={6}>
            <Typography variant="h6" color={"white"} align="center">
              {date}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      {/*
        You can apply styles to most Material-Ui components easily using sx 
      */}
      <Box
        sx={{
          width: "25px",
          height: "25px",
          backgroundColor: color,
          borderRadius: "100%",
          position: "absolute",
          left: "50%",
          top: "5px",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />
    </Grid>
  );
}
Experience.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  flip: PropTypes.bool,
};

function ExperiencesPage() {
  return (
    <Container>
      <Typography variant="h2">Experiences</Typography>
      <Box position={"relative"} mb={30}>
        <Stack spacing={20} sx={{ mt: 10 }}>
          {experiences.map(({ title, description, date }, i) => (
            <Experience
              title={title}
              description={description}
              date={date}
              flip={i % 2 == 1}
              key={i}
            />
          ))}
        </Stack>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "5px",
            bottom: "0px",
            width: "5px",
            backgroundColor: "gray",
            transform: "translateX(-50%)",
          }}
        />
      </Box>
    </Container>
  );
}

export default ExperiencesPage;
