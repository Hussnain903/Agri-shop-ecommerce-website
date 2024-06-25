import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);

  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("/api/v1/auth/admin-auth");
        if (res.data.ok) {
          setOk(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (auth?.token) {
      authCheck(); // Call authCheck if auth.token exists
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
}
