import userEvent from '@testing-library/user-event';
import React from 'react'

export default function Body(props) {

  const [answer, setAnswer] = React.useState(0)
  const [isError, setIsError] = React.useState(false)

  const resultRef = React.useRef();

  const calc = () => {
    console.log(props);
    const ret = props.left + props.right
    setAnswer(ret)

    const userRet = resultRef.current.value
    console.log(resultRef.current.value);

    if (userRet === ret) {
      setIsError(false)
    } else {
      setIsError(true)
    }

  }
  return (
    <div>
      {props.left} + {props.right} =
      <input ref={resultRef} type="text" />
      <button onClick={calc}>提交</button>

      {!isError ? "" : <h3>正确答案是: {answer}</h3>}
    </div>
  )
}
