import React from 'react';
import { useNavigate} from 'react-router-dom';
import errorImg from "../../assets/404error.svg"

const Error = () => {
    const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <img style={styles.img} src={errorImg} alt="404" /> <br></br>
      <button style={styles.button} onClick={() => navigate('/')}>
        Go to Homepage
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  img: {
    height: '600px',
    width: '600px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    color: 'white'
  },
};

export default Error;