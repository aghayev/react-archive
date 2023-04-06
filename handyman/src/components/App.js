import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Bathroom from '../routes/Bathroom';
import Lighting from '../routes/Lighting';
import Guttering from '../routes/Guttering';
import ConcreteBase from '../routes/ConcreteBase';
import Painting from '../routes/Painting';
import Layout from './Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="concrete-base" element={<ConcreteBase />} />
          <Route path="bathroom" element={<Bathroom />} />
          <Route path="lighting" element={<Lighting />} />
          <Route path="guttering" element={<Guttering />} />
          <Route path="painting" element={<Painting />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
