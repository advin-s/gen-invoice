import { useState } from "react";

const Switch = () => {

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

    return (
      <>
      <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center text-sm'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div className='shadow-card flex h-[32px] w-[86px] items-center justify-center rounded-full bg-theme-tertiary'>
          <span
            className={`flex h-6 w-10 items-center justify-center rounded-full ${
              !isChecked ? 'bg-theme text-white' : 'text-body-color'
            }`}
          >
            $
          </span>
          <span
            className={`flex h-6 w-10 items-center justify-center rounded-full ${
              isChecked ? 'bg-theme text-white' : 'text-body-color'
            }`}
          >
           %
          </span>
        </div>
      </label>
    </>
    );
};

export default Switch
