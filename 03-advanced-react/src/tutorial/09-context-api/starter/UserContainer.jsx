import { useAppContext } from "./Navbar"

function UserContainer() {
  /* THIS WILL BE THE CONSUMER COMPONENT.

  First: Import useContext from react 
  Use the notation of useContext like shown below
    const {props} = useContext(contextVariable)

    The context variable its the one you created
    in the PROVIDER component.

    After that, you can use the variables normal.
  */

  const { user, logout } = useAppContext()

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}

export default UserContainer
