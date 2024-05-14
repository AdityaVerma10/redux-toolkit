import { useEffect, useId, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Header from './components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from "react-redux";
import { addcart, setData,initialState } from "./feature/CartSlice";

const navtitle = [
  {
    id: "1",
    title: "All",
  },
  {
    id: "2",
    title: "Development",
  },
  {
    id: "3",
    title: "Business",
  },
  {
    id: "4",
    title: "Design",
  },
  {
    id: "5",
    title: "Lifestyle",
  },
];
let data = [];

function App() {

  const [filterData, setFilterData] = useState([]);
  const[loading,setLoading] =useState(true)

  const dispatch =useDispatch();

 const d =useSelector(state=>state.data);
 

  useEffect(() => {
    fetch("https://codehelp-apis.vercel.app/api/get-top-courses")
      .then((res) => res.json())
      .then((res) => {
        data = res.data;
        navtitle.map((item) => {
          if (data[item.title])
            setFilterData((prev) => [...prev, ...data[item.title]]);
        });
        setLoading(false)
      })
      .then(()=>{
      setFilterData((prev)=>{
        console.log(prev);
        const eg =dispatch(setData(prev))
        console.log(eg);
        return prev;   
      })}).then(()=>{
         console.log(initialState.data);
      })
      
  }, []);
  const getid=()=>{
      return Date.now()*Math.random()
  }
  function applyfilter(title) {
    if (title != "All") {
      setFilterData([...data[title]]);
      console.log(filterData);
    } else {
      navtitle.map((item) => {
        if (data[item.title])
          setFilterData((prev) => [...prev, ...data[item.title]]);
      });
    }
    
  }
  return (
    <>
          
    {!loading?

      <div className="flex flex-col gap-7 place-items-center">
        <div className="flex gap-3 ">
          {navtitle.map((item) => (
            <div key={item.id} onClick={() => applyfilter(item.title)}>
              <Nav title={item.title} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {filterData.map((item) => (
            <Card
              key={getid()}
              
              title={item.title}
              description={item.description}
              imgUrl={item.image.url}
           
            />
          ))}
        </div>
      </div>:<p className="text-[2rem]">Loading...</p>}
    </>
  );
}

export default App;
