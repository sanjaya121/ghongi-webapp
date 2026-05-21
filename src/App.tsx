import { useEffect, useState} from 'react'

import './App.css'

interface FormState {
  userid: string;
  password: string;
}

function App() {

  const [form, setForm] = useState<FormState>({

    userid: "",
    password: ""
  })

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }))

  }

useEffect(()=>{
  console.log("Form useeffect",form)
})

  return (

    <>
    <form>
      <input name="userid" value={form.userid} onChange={handleChange}/>
       <input name="password" value={form.password} onChange={handleChange}/>

    </form>

    </>
  )
}

export default App
