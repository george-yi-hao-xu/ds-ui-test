import { useState } from 'react'
import { token } from '@strategies/tokens'
import { Button } from '@strategies/ui'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <Button onClick={() => setCount(count + 1)}>+1</Button>
          <Button onClick={() => setCount(count - 1)} style={{ backgroundColor: token('color-background-alert') }}>
            -1
          </Button>
          <button
          type="button"
          className="counter"
          onClick={() => setCount(0)}
        >
          Count is {count}
        </button>
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Test design system UI components in a Vite + React environment. This is a simple app that imports a Button component from the design system and displays it on the page. You can click the button to see the count increase. This is a great way to test out the design system components in a real application and see how they work together.
          </p>
        </div>

      </section>
    </>
  )
}

export default App
