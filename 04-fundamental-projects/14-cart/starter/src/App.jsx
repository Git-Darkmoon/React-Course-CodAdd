// components
<<<<<<< HEAD
import Navbar from "./Navbar"
import CartContainer from "./CartContainer"
import { useGlobalContext } from "./context"

function App() {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "40vh" }}></div>
      </main>
    )
  }

=======
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
<<<<<<< HEAD
  )
}

export default App
=======
  );
}

export default App;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
