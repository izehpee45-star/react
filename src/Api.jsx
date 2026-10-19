import React, { useState } from 'react'

const Api = () => {
  const [users, setUsers] = useState([])
const [newName, setNewName] = useState('')
const [editingId, setEditingId] = useState(null)
const [editName, setEditName] = useState('')
const [editEmail, setEditEmail] = useState('')


  async function getUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Error fetching users or network not connected:', error)
    }
  }

  async function addUser(user) {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      return await res.json()
    } catch (error) {
      console.error('Failed to add user:', error)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!newName.trim()) return

    const userPayload = {
      name: newName,
      email: `${newName.toLowerCase().replace(/\s+/g, '')}@example.com`,
    }

    const created = await addUser(userPayload)
    if (created) {
      // the fake API always returns id 11, so give each user a unique id
      setUsers((prev) => [...prev, { ...created, id: Date.now() }])
      setNewName('')
    }
  }

  async function deleteUser(userId) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      setUsers((prev) => prev.filter((u) => u.id !== userId))
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  async function editUser(userId) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editName, email: editEmail }),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, name: editName, email: editEmail } : u
        )
      )
      cancelEdit()
    } catch (error) {
      console.error('Error editing user:', error)
    }
  }

  function startEdit(user) {
    setEditingId(user.id)
    setEditName(user.name)
    setEditEmail(user.email)
  }

  function cancelEdit() {
    setEditingId(null)
    setEditName('')
    setEditEmail('')
  }


 return (
    <div>
      <button onClick={getUsers}>Get Users</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {editingId === u.id ? (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
                <button onClick={() => editUser(u.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <h3>{u.name}</h3>
                <p>{u.email}</p>
                <button onClick={() => startEdit(u)}>Edit</button>
                <button onClick={() => deleteUser(u.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}


export default Api