function Dashboard(){

  const role = localStorage.getItem("role");

  return(

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h2 className="text-3xl mb-5">Dashboard</h2>

      <p className="mb-6">Logged in as: {role}</p>

      {role === "USER" && (
        <div className="bg-blue-600 p-4 rounded mb-4">
          <h3 className="text-xl">User Card</h3>
          <p>This content is for USER</p>
          <h2>Hello User accesed as user</h2>
        </div>
      )}

      {role === "ADMIN" && (
        <div className="bg-green-600 p-4 rounded">
          <h3 className="text-xl">Admin Card</h3>
          <p>This content is for ADMIN</p>
          <h2>Hello Admin accesed as admin</h2>
        </div>
      )}

    </div>
  )
}

export default Dashboard;