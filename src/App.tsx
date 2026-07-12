import { useState } from 'react';
import './App.css'
import diceIcon from "./assets/images/icon-dice.svg"
import divider from "./assets/images/pattern-divider-desktop.svg"

function App() {
          const [advice, setAdvice] = useState<string>(
          "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        );
        const [loading, setLoading] = useState<boolean>(false);


        async function fetchAdvice(): Promise<void> {
          setLoading(true);

            try {
              const res = await fetch("https://api.adviceslip.com/advice");
              const data = await res.json();

              console.log(data.slip.advice);
              setAdvice(data.slip.advice);
            } catch (error) {
              console.log(error);
            } finally {
              setLoading(false);
            }
        }

  return (
  
    <div className='flex items-center justify-center w-screen h-screen bg-[#262B35] '>
  
        <div className='relative grid   items-center justify-center m-3 w-xl rounded-xl min-h-90  bg-[#363D4b]'>
              <div>
                <h1 className='pt-10 pb-5 text-center bottom-0 text-[#76FDA8] text-1xl'>A D V I C E # 1 1 7</h1>
                <p className='px-5  text-4xl  text-[#D0E2E9] text-center'>
                   {loading ? "Loading..." : advice}
                </p>
              </div>
          
              <div className='pb-10 pt-10 mb-8 flex justify-center'>
                  <img  src={divider}></img>
        
              </div>
         
            <button onClick={fetchAdvice}  className='hover:cursor-pointer absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2  flex justify-center 
                            items-center w-17 h-17 rounded-full bg-[#76FDA8]'> 
                <img className='w-8 h-8'src={diceIcon}></img>
            </button>
        
        </div>
    </div>
    
  );
}

export default App;
