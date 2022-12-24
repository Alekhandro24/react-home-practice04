// import { Switch, Route } from 'react-router-dom';
// import Container from './components/Container';
// import AppBar from './components/AppBar';
// import Counter from 'components/Counter/Counter.jsx';
// import SignupForm from 'components/SignupForm/SignupForm.jsx';
// import Clock from 'components/Clock/Clock.jsx';
// import News from 'components/News/News.jsx';
// import ColorPicker from 'components/ColorPicker/ColorPicker.jsx';
import UserMenu from 'components/UserMenu/UserMenu';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default function App() {
  return (
    <>
      {/* <AppBar /> */}

      {/* <>
        <Counter />
      </> */}

      {/* <>
        <SignupForm />
      </> */}

      {/* <>
        <ColorPicker options={colorPickerOptions} />
      </> */}

      {/* <>
        <Clock />
      </> */}

      {/* <>
        <News />
      </> */}

      <>
        <UserMenu />
      </>
    </>
  );
}
