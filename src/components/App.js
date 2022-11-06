import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import CleanTime from './Clean-Time';
import Gratitude from './Gratitude';
import Meditations from './Meditations';
import Meetings from './Meetings';
import Prayers from './Prayers';
import Step10 from './Step-10';
import GratitudeEntry from './GratitudeEntry';

const App = () => {
  // state = {
  //   data: null
  // };

  // componentDidMount = () => {
  //   this.callBackendAPI()
  //   .then(res => this.setState({ data: res.express }))
  //   .catch(err => console.log(err));
  // }

  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // }

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/clean-time" element={ <CleanTime /> } />
          <Route path="/meditations" element={ <Meditations /> } />
          <Route path="/prayers" element={ <Prayers /> } />
          <Route path="/gratitude" element={ <Gratitude /> } />
          <Route path="/meetings" element={ <Meetings /> } />
          <Route path="/step-10" element={ <Step10 /> } />
          <Route path='/gratitude-entry' element={ <GratitudeEntry /> } />
        </Routes>
    </div>
  );
}

export default App;