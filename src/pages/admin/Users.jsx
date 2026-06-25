import React, { useEffect, useState } from "react";

const API_URL = "https://nqtenpztolfrctplpeuj.supabase.co/rest/v1/users";
const API_KEY = "sb_publishable_UVKtLbOJzZ9cQGX-o03J-A_qp6e07Vi";

const initialForm = { username: "", email: "", role: "user" };

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // State untuk CRUD Tambah & Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState(null); // Jika null = Mode Create, jika ada isi = Mode Update

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "GET",
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      if (!res.ok) throw new Error("Gagal mengambil data dari server");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Buka Modal (Bisa untuk Tambah Baru atau Edit)
  const openModal = (user = null) => {
    if (user) {
      setEditingId(user.id);
      setFormData({ username: user.username, email: user.email, role: user.role });
    } else {
      setEditingId(null);
      setFormData(initialForm);
    }
    setIsModalOpen(true);
  };

  // Handle Submit Form (Create dan Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const isEdit = editingId !== null;
    const url = isEdit ? `${API_URL}?id=eq.${editingId}` : API_URL;
    const method = isEdit ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(isEdit ? "User berhasil diperbarui!" : "User baru berhasil ditambahkan!");
        setIsModalOpen(false);
        setFormData(initialForm);
        fetchUsers();
      } else {
        throw new Error(isEdit ? "Gagal memperbarui user" : "Gagal menambahkan user");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Apakah kamu yakin ingin menghapus user ini?")) return;

    try {
      const res = await fetch(`${API_URL}?id=eq.${id}`, {
        method: "DELETE",
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (res.ok) {
        alert("User berhasil dihapus");
        fetchUsers();
      } else {
        throw new Error("Gagal hapus user");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Users Management</h1>
          <p className="text-sm text-gray-400">Manage all registered users</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => openModal()}
            className="bg-[#6B7CFF] hover:bg-[#5564e8] text-white px-4 py-2 rounded-lg text-sm transition font-medium"
          >
            + Add New User
          </button>
          <button
            onClick={fetchUsers}
            disabled={isLoading}
            className={`px-4 py-2 rounded-lg text-sm text-white transition ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#6B7CFF] hover:bg-[#5564e8]"
            }`}
          >
            {isLoading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Username</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {isLoading && users.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500 py-8">
                  Memuat data users...
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500 py-8">
                  Tidak ada data user.
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4 text-gray-500">#{u.id}</td>
                  <td className="p-4 font-medium text-gray-800">{u.username}</td>
                  <td className="p-4 text-gray-600">{u.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        u.role === "admin" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => openModal(u)}
                        className="bg-[#6B7CFF] hover:bg-[#5564e8] text-white px-3 py-1 rounded-lg text-xs transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUser(u.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL POPUP (CREATE & UPDATE FORM) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform transition-all animate-fade-in">
            <div className="p-6 border-b">
              <h3 className="text-lg font-bold text-gray-800">
                {editingId ? "Edit User Information" : "Register New User"}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {editingId ? "Perbarui rincian data user terpilih." : "Isi data formulir untuk menambah user baru."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase">Username</label>
                <input
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full border rounded-xl p-2.5 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-800 font-medium"
                  placeholder="e.g. jondoe"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border rounded-xl p-2.5 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-800"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase">Account Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full border rounded-xl p-2.5 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700 font-medium cursor-pointer"
                >
                  <option value="user">User (Standard)</option>
                  <option value="admin">Admin (Full Access)</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100 font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 rounded-lg text-sm text-white bg-blue-500 hover:bg-blue-600 font-medium transition disabled:bg-blue-300"
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;