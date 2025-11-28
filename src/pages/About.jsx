import { useEffect, useState } from "react"



export default function About() {

  const [content, setContent] = useState(null)

useEffect(()=>{
  const data = fetch("/landing-content.json")
  .then(res => res.json())
  .then(data => setContent(data))
  .catch(err => console.error(err))
}, [])


  if (!content) return <p>Loading...</p>;


  return (<h1>{content.hero.headline}</h1>)
}
