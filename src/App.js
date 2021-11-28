import './index.scss';

import Wrapper from './components/Parallax/Wrapper';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Footer from './components/Footer';

function App() {
  return (
    <Wrapper>
      <Header />
      <Section1 />
      <Header />
      <Section2 />
      <Header />
      <Section1 />
      <Footer />
    </Wrapper>
  );
}

export default App;
