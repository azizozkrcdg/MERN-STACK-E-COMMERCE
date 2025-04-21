import { message, Table } from "antd";
import { useEffect, useState } from "react";

const AdminUserPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URI;

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imageSrc) => {
        <img
          src={imageSrc}
          alt="Avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />;
      },
    },
  ];

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/users`);

      if (response.ok) {
        const data = await response.json(); // ❗ Response body'yi oku
        setDataSource(data);
      } else {
        message.error("Giriş başarısız!");
      }
    } catch (error) {
      console.error("İstek hatası:", error);
    }
  };

  console.log(dataSource);

  useEffect(() => {
    fetchUsers();
  }, []);

  return <Table dataSource={dataSource} columns={columns} />;
};

export default AdminUserPage;
