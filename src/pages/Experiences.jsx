import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const experiences = [
  {
    "title": "Title",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "date": "MM/DD/YY",
  },
  {
    "title": "Title",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "date": "MM/DD/YY",
  },
  {
    "title": "Title",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "date": "MM/DD/YY",
  },
  {
    "title": "Title",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "date": "MM/DD/YY",
  },
];

function Experience({title, description, date, flip}) {
  const theme = useTheme();
  const color = theme.palette.primary[500];
  return (
    <Grid container direction={flip?"row-reverse":"row"} position={'relative'}>
      <Grid item xs={6}>
        <Box {...{[flip?"ml":"mr"]: "20px"}}>
          <Typography variant="h5" mb={4} align={flip?"left":"right"}>
            {title}
          </Typography>
          <Typography variant="body1" align={flip?"left":"right"}>
            {description}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Stack {...{[flip?"mr":"ml"]: "20px"}} alignItems={flip?"flex-end":"flex-start"}>
          <Box sx={{backgroundColor: color, width: '150px'}} borderRadius={6}>
            <Typography variant="h6" color={"white"} align="center">
              {date}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Box sx={{
        width: "25px",
        height: "25px",
        backgroundColor: color,
        borderRadius: '100%',
        position: 'absolute',
        left: '50%',
        top: '5px',
        transform: "translateX(-50%)",
        zIndex: 1
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
}

function ExperiencesPage() {
  return (
    <Container>
      <Typography variant="h2">
        Experiences
      </Typography>
      <Box position={'relative'} mb={30}>
        <Stack spacing={20} sx={{mt: 10}}>
          {
            experiences.map(({title, description, date}, i) => (
              <Experience
                title={title}
                description={description}
                date={date}
                flip={(i%2)==1}
                key={i}
              />
            ))
          }
        </Stack>
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '5px',
            bottom: '0px',
            width: "5px",
            backgroundColor: 'gray',
            transform: "translateX(-50%)",
          }}
        />
      </Box>
    </Container>
  );
}

export default ExperiencesPage;