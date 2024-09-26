import "./App.css";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

function App() {  
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <div className="relative">
          <h1 className="text-center text-2xl ont-bold pb-2 mb-8">Our Testimonial</h1>
          <div className="w-20 h-1 bg-slate-900 absolute left-2/4 bottom-0 translate-x-[-50%]"></div>
        </div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
