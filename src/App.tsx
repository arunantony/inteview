import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import SideEffects from './components/SideEffects';
import Controlled from './components/Controlled';
import ContextUI from './components/ReduxBase';
import AInfiniteScroll from './components/AInfiniteScroll';
import ASearchInput from './components/ASearchInput';
import AContextTodo from './components/AContextTodo';
import ADebounce from './components/ADebounce';
import AAsyncButton from './components/AAsyncButton';
import LoginForm from './components/LoginForm';
import ReduxBase from './components/ReduxBase';
import LiftingState from './components/LiftingState';
import FizzBuzz from './components/FizzBuzz';
import CallBackUse from './components/CallBackUse';
import HOC from './components/HOC';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/state' element={<SideEffects />} />
      <Route path='/reduxbase' element={<ReduxBase />} />
      <Route path='/loginform' element={<LoginForm />} />
      <Route path='/controlled' element={<Controlled />} />
      <Route path='/contextui' element={<ContextUI />} />
      <Route path='/inifinitescroll' element={<AInfiniteScroll />} />
      <Route path='/searchinput' element={<ASearchInput />} />
      <Route path='/contexttodo' element={<AContextTodo />} />
      <Route path='/debounce' element={<ADebounce />} />
      <Route path='/asyncbtn' element={<AAsyncButton />} />
      <Route path='/liftstate' element={<LiftingState />} />
      <Route path='/fizzbuzz' element={<FizzBuzz />} />
      <Route path='/callbackuse' element={<CallBackUse />} />
      <Route path='/hoc' element={<HOC />} />
    </Routes>
  );
};

export default App;
