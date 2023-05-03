import { useEffect, useState } from "react"

export default function Home(props) {
  const [state, setState] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact")
        const data = await response.json()
        setState(data.fact)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])

  return (
    <div>
      <h2>Welcome to our homepage.</h2>
      <p>This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.</p>
      <p>Random Cat Fact: {props.fact}</p>
      <p>{state}</p>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://catfact.ninja/fact")
  const data = await response.json()

  return {
    props: {
      fact: data.fact,
    }
  }
}