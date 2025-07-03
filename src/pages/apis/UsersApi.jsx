import axios from "axios";
import { apiBaseUrl, getAuthToken } from "./Api";
import Swal from "sweetalert2";

export async function userList(search='') {
  try {
    const response = await axios.get(`${apiBaseUrl}/admin/users?search${search}`, {
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

export async function userProfile(id) {
  try {
    const response = await axios.get(`${apiBaseUrl}/admin/user/${id}`, {
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

export async function userStatusBlockToggle(id) {
  try {
    const response = await axios.post(`${apiBaseUrl}/admin/user/status`,{user_id:id} ,{
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (response.data.status) {
     Swal.fire({
        icon: "info",
        title: "Status Change Successfully!",
        text: response.data.message || "Status Change Successfully!",
        timer: 2000,
      });
      return true;
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

export async function adminDepositAmount(payload) {
  try {
    const response = await axios.post(`${apiBaseUrl}/admin/deposit`,payload ,{
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (response.data.status) {
     Swal.fire({
        icon: "info",
        title: "Amount deposited successfully.",
        text: response.data.message || "Amount deposited successfully.",
        timer: 2000,
      });
      return true;
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

export async function userMultiWalletDeduct(payload) {
  try {
    const response = await axios.post(`${apiBaseUrl}/admin/user/balance-deduct`,payload ,{
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (response.data.status) {
     Swal.fire({
        icon: "info",
        title: "Amount deposited successfully.",
        text: response.data.message || "Amount deposited successfully.",
        timer: 2000,
      });
      return true;
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
