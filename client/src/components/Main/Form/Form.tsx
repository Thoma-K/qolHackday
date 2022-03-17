import React, { useState }  from 'react'

interface FormProps {
  // cityData: Metric[],
  setCityData: React.Dispatch<React.SetStateAction<Metric[]>>
}
interface Metric {
  color: string;
  name: string;
  score_out_of_10: number;
}
const Form = ({ setCityData }: FormProps) => {
  const [input, setInput] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    
    const formatInput = input.replace(/ /g, "_").toLowerCase();
    fetch(`/api/cities/${formatInput}`).then(
      response => response.json()
    ).then(
      data => {
        console.log("Form =>", data)
        setCityData(data);
      }
    )
    setInput('');
  };

  // useEffect(() =>{
  //   if (cityData) {

  //   }
  // }, [cityData])


  return (
    <div>Form
      <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        Search for quality of life Metrics of a city:
        <input name="search" type="text" value={input} onChange={handleChange} list="history" />
      </label>
      <button type="submit">Search</button>
    </form>
    </div>
  )
}

export default Form