import { useState } from 'react';
import ProjectWrapper from '../../components/ProjectWrapper';
import './LuckyBirthday.css';

function LuckyBirthday() {
  const [dob, setDob] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage(null);
    const digits = dob.split('-').join('').split('');
    const digitSum = digits.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    // console.log(digits, digitSum, number);
    const lucky = digitSum % number;
    if (lucky === 0) {
      setMessage('Yay! you got lucky');
      return;
    }

    setMessage('Better luck in next life');
  };

  return (
    <ProjectWrapper
      title='Is Your Birthday Lucky?'
      projectLink='https://github.com/neogcamp/build/blob/main/basics/is-your-birthday-lucky.md'
    >
      <main className='two-grid'>
        <form className='lucky-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <label htmlFor='dob'>Date of Birth</label>
            <input
              type='date'
              name='dob'
              id='dob'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='number'>Lucky Number</label>
            <input
              type='number'
              name='number'
              id='number'
              min='1'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <button disabled={!dob || !number} type='submit'>
            Lucky or not?
          </button>
        </form>
        <section className='result'>
          <h3>{message ? message : 'Please fill in data'}</h3>
        </section>
      </main>
    </ProjectWrapper>
  );
}

export default LuckyBirthday;
