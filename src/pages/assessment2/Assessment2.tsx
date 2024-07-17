import Loader from '@/components/loader/Loader';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Happy from '../../assets/icons/happy.svg';
import Neutral from '../../assets/icons/neutral.svg';
import Unhappy from '../../assets/icons/unhappy.svg';
import VeryHappy from '../../assets/icons/very-happy.svg';
import VeryUnhappy from '../../assets/icons/very-unhappy.svg';

export const Assessment2 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([false, false, false, false, false]);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [answer, setAnswer] = useState<any>(null);
  const [start, setStart] = useState(true);
  const [data, setData] = useState<any>(null);
  const [nextCounter, setNextCounter] = useState(0);
  const [trueIndices, setTrueIndices] = useState<number[]>([]);
  const [valueSilder, setValueSlider] = useState<number | number[]>(5);
  const navigate = useNavigate();

  function valuetext(value: number) {
    return `${value}`;
  }

  function handleClick(index: number) {
    const newOptions = options.map((option, i) => (i === index ? !option : option));
    setTrueIndices(
      newOptions.reduce((acc: number[], option: boolean, i: number) => {
        if (option) acc.push(i);
        return acc;
      }, []),
    );
    setOptions(newOptions);
    setAnswer(data.options[index]);
    setNextButtonDisabled(false);
  }

  function handleNext() {
    if (start) {
      setStart(false);
    }
    setNextButtonDisabled(true);
    setQuestionIndex((prev) => prev + 1);
    setIsLoading(true);
    if (data.step < 4) {
      setAnswerBackendText();
    } else if (data.step == 4) {
      setAnswerBackendOptions();
    } else if (data.step > 4 && data.step < 10) {
      setAnswerBackendNumber();
    }
    setOptions([false, false, false, false, false]);
    valuetext(5);
    setNextCounter((prev) => prev + 1);
  }

  const setAnswerBackendOptions = () => {
    axios.put(`https://assessment-back.onrender.com/api/v1/assessments/save`, {
      questionId: data.id,
      assessmentId: data.assessment,
      multiplechoice: true,
      values: trueIndices,
    });
  };

  const setAnswerBackendNumber = () => {
    axios.put(`https://assessment-back.onrender.com/api/v1/assessments/save`, {
      questionId: data.id,
      assessmentId: data.assessment,
      questionValue: valueSilder,
    });
    if (data.step == 9) navigate('/assessmentend2');
  };

  const setAnswerBackendText = () => {
    axios.put(`https://assessment-back.onrender.com/api/v1/assessments/save`, {
      questionId: data.id,
      assessmentId: data.assessment,
      questionText: answer,
    });
  };

  useEffect(() => {
    axios
      .get(`https://assessment-back.onrender.com/api/v1/assessments/questions/step/2/${nextCounter}`)
      .then((response) => {
        setData(response.data[0]);
        setIsLoading(false);
      });
  }, [nextCounter]);

  useEffect(() => {
    // Simula la carga de datos con un temporizador
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Espera 0.5 segundos antes de ocultar el loader
    if (questionIndex == -1 || questionIndex >= 4) {
      setNextButtonDisabled(false);
    } else {
      setNextButtonDisabled(true);
    }
  }, [data]);

  return (
    <>
      {isLoading && <Loader />}
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
        <Box sx={{ display: start ? 'flex' : 'none', flexDirection: start ? 'column' : 'none', gap: 3 }}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              lineHeight: '20.7px',
              color: '#444444',
              fontFamily: 'Helvetica',
            }}
          >
            {data?.questionText}
          </Typography>
        </Box>
        <Box sx={{ display: start ? 'none' : 'flex flex-column' }}>
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
              {data?.questionText}
            </Typography>
          </Box>
          <Box
            sx={{
              display: questionIndex < 3 ? 'flex' : 'none',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 2,
            }}
          >
            {[VeryHappy, Happy, Neutral, Unhappy, VeryUnhappy].map((iconFace, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 1,
                  borderRadius: '8px',
                  background: options[index] ? '#E6F8FC' : 'none',
                  flexGrow: 1,
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                onClick={() => handleClick(index)}
              >
                <img src={iconFace} alt="Descripción" width="56" height="56" />
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
          <Box
            sx={{
              display: questionIndex == 3 ? 'flex' : 'none',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '16.41px',
                color: '#444444',
                fontFamily: 'Roboto, sans-serif',
                flexGrow: 1,
              }}
            >
              You cant pick more than one option
            </Typography>
            {data?.options.map((mentalWellness: any, index: number) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '8px',
                  flexGrow: 1,
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <Checkbox onChange={() => handleClick(index)} />
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: '16.41px',
                    color: '#444444',
                    ml: 1,
                    fontFamily: 'Roboto, sans-serif',
                    flexGrow: 1,
                  }}
                >
                  {mentalWellness}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: questionIndex > 3 ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Always visible"
              defaultValue={5}
              getAriaValueText={valuetext}
              step={1}
              valueLabelDisplay="on"
              min={0}
              max={10}
              onChange={(_, newValue) => setValueSlider(newValue)}
              sx={{
                color: '#00BBDD',
                '& .MuiSlider-thumb': {
                  color: 'white',
                },
              }}
            />
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
    </>
  );
};

export default Assessment2;
