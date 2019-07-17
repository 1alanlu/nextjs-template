import React from 'react'
import RenderCounter from '@utils/hooks/useRenderCounter'

const CandyDispenserDemo = () => {
  const initialCandies = ['Apple', 'Banana', 'Orange', 'PineApple']
  const [candies, setCandies] = React.useState(initialCandies)
  const dispense = candy => {
    setCandies(allCandies => allCandies.filter(c => c !== candy))
  }
  return (
    <div>
      <div>
        <RenderCounter />
        Available Candy
      </div>
      {candies.length === 0 ? (
        <button type="button" onClick={() => setCandies(initialCandies)}>
          refill
        </button>
      ) : (
        <ul>
          {candies.map(candy => (
            <li key={candy}>
              <button type="button" onClick={() => dispense(candy)}>
                grab
              </button>{' '}
              {candy}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CandyDispenserDemo
