import { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';
import { getGiphyApi } from "./api"

function App() {

  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState("car")

  useEffect(() => {
    const timer = setTimeout(() => {
      getGiphy()
    }, 2000)
    return () => clearTimeout(timer)
  }, [searchText])

  const getGiphy = async () => {
    const res = await getGiphyApi(searchText)
    setData(res)
  }

  const giphyOnChange = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => giphyOnChange(e)} value={searchText} />
      {data.length > 0 ? (
        data.map((giphy, index) => {
          return (
            <div key={index}>
              <h6>{giphy?.title}</h6>
              <img src={giphy?.images?.fixed_width?.url} alt={giphy?.title} />
            </div>
          )
        })
      )
        : <p>Not found</p>
      }
    </div>
  );
}

export default App;
