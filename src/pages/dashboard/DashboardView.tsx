import Loader from '@/components/loader/Loader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const commonBoxStyle = {
  width: 56,
  height: 56,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: 24,
  fontWeight: 700,
  lineHeight: '28.13px',
  textAlign: 'left',
  borderRadius: 1,
};

export const DashboardView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([false, false, false, false]);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  // const [questionIndex, setQuestionIndex] = useState(0);
  const [data, setData] = useState<any>(null);
  const [nextCounter, setNextCounter] = useState(1);
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  function handleClick(index: number) {
    const newOptions = options.map((_, i) => i === index);
    setOptions(newOptions);
    setAnswer(data.options[index]);
    setNextButtonDisabled(false);
  }

  function handleNext() {
    setOptions([false, false, false, false]);
    setNextButtonDisabled(true);
    // setQuestionIndex((prev) => prev + 1);
    setIsLoading(true);
    if (data.step == 16) {
      navigate('/assessmentend');
    }
    setAnswerBackend();
    setNextCounter((prev) => prev + 1);
  }

  const setAnswerBackend = () => {
    axios.put(`http://localhost:5000/api/v1/assessments/save`, {
      questionId: data.id,
      assessmentId: data.assessment,
      questionText: answer,
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/assessments/questions/1/${nextCounter}`).then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  }, [nextCounter]);

  // useEffect(() => {
  //   // Simula la carga de datos con un temporizador
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500); // Espera 0.5 segundos antes de ocultar el loader
  // }, [questionIndex]);

  return (
    <div>
      {isLoading && <Loader />}
      {data ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Paper
            sx={{
              width: 120,
              height: 120,
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 2 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 700,
                  lineHeight: '20.7px',
                  color: '#444444',
                  fontFamily: 'Helvetica',
                }}
              >
                Over the last 2 weeks, how often have you been bothered by?
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 700,
                  lineHeight: '20.7px',
                  color: '#444444',
                  fontFamily: 'Helvetica',
                }}
              >
                {data?.question}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              {['#A1DEFD', '#B4F375', '#FEE454', '#FF0000'].map((backgroundColor, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 1,
                    background: options[index] ? '#E6F8FC' : 'none',
                    borderRadius: '8px',
                    flexGrow: 1,
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                  onClick={() => handleClick(index)}
                >
                  <Paper sx={{ ...commonBoxStyle, backgroundColor }}>{index}</Paper>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 400,
                      lineHeight: '23.44px',
                      color: '#444444',
                      ml: 3,
                      fontFamily: 'Roboto, sans-serif',
                      flexGrow: 1,
                    }}
                  >
                    {data?.options[index]}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                backgroundColor: '#00BBDD',
                '&:hover': { backgroundColor: '#0099AA' },
                borderRadius: '50px',
                width: 100,
              }}
              onClick={handleNext}
              disabled={nextButtonDisabled}
            >
              Next
            </Button>
          </Box>
        </Box>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default DashboardView;
