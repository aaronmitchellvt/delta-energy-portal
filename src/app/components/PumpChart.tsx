import React from 'react'

const PumpChart = (props: any) => {
  const project = props.project;
  const estLoad = props.estLoad;
  const selPump = props.selPump

  return (
    <div className="shadow-2xl h-96 p-4 bg-green-100 m-5">Charts - {estLoad} - {selPump.name}</div>
  )
}

export default PumpChart