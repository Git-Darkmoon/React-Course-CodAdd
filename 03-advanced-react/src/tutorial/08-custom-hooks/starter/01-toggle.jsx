<<<<<<< HEAD
import useToggle from "./useToggle"

const ToggleExample = () => {
  const { show, toggle } = useToggle(true)

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
=======
import { useState } from 'react';

const ToggleExample = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={() => setShow(!show)}>
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
<<<<<<< HEAD
  )
}
export default ToggleExample
=======
  );
};
export default ToggleExample;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
