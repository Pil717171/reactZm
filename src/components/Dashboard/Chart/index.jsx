import React, { Fragment } from "react";
import { Chart } from './styled'

export default function ChartComponent (props) {
  const { getTest, test  } = props
  console.log(props)
  return (
    <Fragment>
    <Chart onClick={() => getTest(123)}>
      Click
    </Chart>
    <div>
      
    </div>
    </Fragment>
  )
}