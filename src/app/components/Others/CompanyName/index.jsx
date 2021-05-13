import React from 'react';
import './CompanyName.scss';
function CompanyName({ scrolled }) {
  return (
    <div className={`company__name${scrolled ? ' scroll_light' : ''}`}>
      <span>Infortts.</span><span>Professional</span>
    </div>
  )
}
export default CompanyName;