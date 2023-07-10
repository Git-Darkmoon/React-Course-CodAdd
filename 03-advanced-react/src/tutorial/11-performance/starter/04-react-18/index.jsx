<<<<<<< HEAD
import { useState, lazy, Suspense, useTransition } from "react"

const SlowComponent = lazy(() => import("./SlowComponent"))

const LatestReact = () => {
  const [text, setText] = useState("")
  const [items, setItems] = useState([])
  const [isPending, startTransition] = useTransition()
  const [show, setShow] = useState(false)

  const handleChange = (e) => {
    setText(e.target.value)

    startTransition(() => {
      // slow down CPU
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        )
      })
    })

    setItems(newItems)
  }
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
=======
import { useState } from 'react';
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    // const newItems = Array.from({ length: 5000 }, (_, index) => {
    //   return (
    //     <div key={index}>
    //       <img src='/vite.svg' alt='' />
    //     </div>
    //   );
    // });
    // setItems(newItems);
  };
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

<<<<<<< HEAD
      {isPending ? (
        <h4>Loading...</h4>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}

      <button className="btn" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && (
        <Suspense fallback={<h4>Loading...</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  )
}

export default LatestReact
=======
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: '2rem',
        }}
      >
        {items}
      </div>
    </section>
  );
};
export default LatestReact;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
