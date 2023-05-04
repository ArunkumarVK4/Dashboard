import React from 'react'
import Base from './Base'

function Chart() {
  return (
    <Base>
        <div>
        <h3>Charts</h3>
        <p>Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below have been customized - for further customization options, please visit the official Chart.js documentation.</p>

        {/* Card 1 */}
        <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

  </div>
</div>

{/* Card 2 */}
<div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

  </div>
</div>

{/* Card 3 */}
<div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
</div>

    </div>
    </Base>
  )
}

export default Chart