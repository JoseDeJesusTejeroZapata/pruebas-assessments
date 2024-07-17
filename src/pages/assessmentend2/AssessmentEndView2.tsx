import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const AssessmentEndView2 = () => {
  const textContents = [
    {
      text: 'Thank you for completing the assessment!',
      styles: {
        color: '#444',
        textAlign: 'center',
        fontFamily: 'Helvetica',
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 'normal',
      },
    },
    {
      text: "Your well-being is important to us, and we're here to support you.",
      styles: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: '20.7px',
        color: '#444444',
        fontFamily: 'Helvetica',
        textAlign: 'center',
      },
    },
    {
      text: 'Remember, seeking help and talking about your mental health is a sign of strength, not weakness.',
      styles: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: '20.7px',
        color: '#444444',
        fontFamily: 'Helvetica',
        textAlign: 'center',
      },
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <Paper
        sx={{
          width: 200,
          height: 200,
          backgroundColor: '#00BBDD',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          borderRadius: 1,
        }}
      >
        <Typography variant="body1">Any company logo</Typography>
      </Paper>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {textContents.map((content, index) => (
            <Typography key={index} sx={content.styles}>
              {content.text}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AssessmentEndView2;
