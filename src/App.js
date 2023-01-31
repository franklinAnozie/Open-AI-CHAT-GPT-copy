import React, {useState} from "react";
import { OptionSelection } from "./components/OptionSelection";
import { Translate } from "./components/Translate";
import "./App.css"
import { arrayItems } from "./AI OPTIONS";
import { OpenAIApi, Configuration } from "openai";

const App = () => {

  const config = new Configuration({
    apiKey: process.env.REACT_APP_openAI_API_KEY,
  })
  
  const openAI = new OpenAIApi(config)
  const [translate, setTranslate] = useState([]);
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
 
  const selectOption = (option) => {
      setTranslate(option)
  }

  const doStuff = async () => {
    let object = {...translate, prompt: input}
    const response = await openAI.createCompletion(object);
    setResponse(response.data.choices[0].text)
  }

  return (
    <div className="App">
      {translate.length === 0 ? 
        <OptionSelection
          arrayItems={arrayItems}
          selectOption={selectOption}
        />
          :
        <Translate doStuff={doStuff} setInput={setInput} response={response}/>
      }
    </div>
    )

}
export default App;
