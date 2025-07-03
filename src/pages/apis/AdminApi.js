import axios from "axios";
import { apiBaseUrl, getAuthToken } from "./Api";
import Swal from "sweetalert2";

export async function adminRegister(payload) {
  try {
    const response = await axios.post(`${apiBaseUrl}/admin/register`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (response.data.status) {
      Swal.fire({
        icon: "success",
        title: "Admin Register Successful",
        text: response.data.message || "Admin Register Successful",
        timer: 2000,
      });
      return true;
    } else {
      Swal.fire({
        icon: "info",
        title: "Admin Register Failed",
        text: response.data.message || "Admin Register Failed",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Admin Register Failed",
      text: error?.response?.data?.error || "Admin Register Failed",
      timer: 2000,
    });
    return false;
  }
}
export async function myProfile() {
  try {
    const response = await axios.post(`${apiBaseUrl}/admin/me`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (response.data.status) {
      return response.data.data;
    } else {
      Swal.fire({
        icon: "info",
        title: "Something Went Wrong",
        text: response.data.message || "Something Went Wrong",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Something Went Wrong",
      text: error?.response?.data?.error || "Something Went Wrong",
      timer: 2000,
    });
    return false;
  }
}
export async function adminDashboard() {
  try {
    const response = await axios.post(`${apiBaseUrl}/admin/dashboard`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (response.data.status) {
      return response.data.data;
    } else {
      Swal.fire({
        icon: "info",
        title: "Something Went Wrong",
        text: response.data.message || "Something Went Wrong",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Something Went Wrong",
      text: error?.response?.data?.error || "Something Went Wrong",
      timer: 2000,
    });
    return false;
  }
}
