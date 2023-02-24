import { Routes, Route } from 'react-router-dom';
import About from 'routes/About';
import Home from 'routes/Home';
import NoFound from 'routes/NoFound';
import Layout from './Layout';

const TodoApp = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoFound />} />
      </Route>
    </Routes>
  </>
);
export default TodoApp;
