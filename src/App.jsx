import Index from './Index';
import Button from './Button';
import Count from './Count';
import State from './State';
import Form from './Form';
import Carousel from './Carousel';
import Effect from './Effect';
import Api from './Api';
import Navbar from './Navbar';
import About from './About';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  decrement,
  incrementByAmount,
} from './features/counterSlice.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Navbar />

      <div className="mx-auto flex max-w-2xl flex-col gap-6 p-6">

        {/* Redux Controls */}
        <div className="flex items-center gap-4">
          <button onClick={() => dispatch(increment())}>
            Increment
          </button>

          <button onClick={() => dispatch(decrement())}>
            Decrement
          </button>

          <button onClick={() => dispatch(incrementByAmount(5))}>
            Increment by 5
          </button>

          <p>Counter Value: {value}</p>
        </div>

        {/* React Router */}
        <Routes>
          <Route
            path="/"
            element={
              <Index
                name="john"
                profession="programmer"
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route path="/button" element={<Button />} />
          <Route path="/count" element={<Count />} />
          <Route path="/state" element={<State />} />
          <Route path="/form" element={<Form />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/api" element={<Api />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;