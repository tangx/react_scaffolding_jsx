import React from 'react'

export default function
  (props) {
  return (
    <div>
      正确数量 <span style={{ color: 'green' }}>{props.corrent}</span> / {props.total}
    </div>
  )
}
