import React from 'react'

const DoubleButton = ({ onsubmit, onPrev }) => {
  return (
    <div className='flex justify-between items-center pb-9'>
      <span></span>
      <div className="space-x-[13px] mt-[36px]">
        <button className="py-[11px] rounded-full px-6 border border-[#24324F] text-[#24324F]" onClick={onPrev}>Sebelumnya</button>
        <button className="py-3 rounded-full px-6 bg-[#24324F] text-white" onClick={onsubmit}>Kirim</button>
      </div>
    </div>
  )
}

export default DoubleButton