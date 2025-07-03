import Swal from "sweetalert2";
import axios from "axios";
import { Navigate } from "react-router-dom";

const apiBaseUrl = "http://127.0.0.1:8000/api";
const imgBaseUrl = "http://127.0.0.1:8000/";

export { apiBaseUrl, imgBaseUrl };

export function getAuthToken() {
  return JSON.parse(sessionStorage.getItem("adminToken")) || null;
}

export function getUserData() {
  return JSON.parse(sessionStorage.getItem("admin")) || null;
}

export async function adminLogin(payload) {
  try {
    const response = await axios.post(`${apiBaseUrl}/auth/admin/login`, payload);
    if (response.data.status) {
      sessionStorage.setItem("adminToken", JSON.stringify(response.data.token));
      sessionStorage.setItem("admin", JSON.stringify(response.data.admin));
      Swal.fire({
        icon: "success",
        title: "Login successful",
        text: response.data.message || "Login successfully",
        timer: 2000,
      });
      return true;
    } else {
      Swal.fire({
        icon: "info",
        title: "Login Failed",
        text: response.data.message || "Something went wrong",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error?.response?.data?.error || "Something went wrong",
      timer: 2000,
    });
    return false;
  }
}
export async function adminLogout(payload) {
  try {
    const response = await axios.post(`${apiBaseUrl}/admin/logout`);
    if (response.data.status) {
      sessionStorage.removeItem("adminToken");
      sessionStorage.removeItem("admin");
      sessionStorage.clear();

      Swal.fire({
        icon: "success",
        title: "Logout Successful",
        text: "Logout Successful",
        timer: 2000,
      }).then(() => {
        return (window.location.href = "/login");
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Logout Failed",
        text: response.data.message || "Something Went Wrong. Please Try Again!",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error?.response?.data?.error || "Something Went Wrong. Please Try Again!",
      timer: 2000,
    });
    return false;
  }
}


export async function updateUserName(username) {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/user/profile/update`,
      {
        username,
      },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    if (response.data.status) {
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      Swal.fire({
        icon: "success",
        title: "Update Successful",
        text: response.data.message || "Username updated successfully",
        timer: 2000,
      });
      return true;
    } else {
      Swal.fire({
        icon: "info",
        title: "Update Failed",
        text: response.data.message || "Update Failed",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Update Failed",
      text: error.message || "Something went wrong",
      timer: 2000,
    });
    return false;
  }
}
export async function uploadKyc(payload) {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/user/kyc/upload`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    if (response.data.status) {
      Swal.fire({
        icon: "success",
        title: "Update Successful",
        text: response.data.message || "KYC documents uploaded successfully.",
        timer: 2000,
      });
      return true;
    } else {
      Swal.fire({
        icon: "info",
        title: "Update Failed",
        text: response.data.message || "Update Failed",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Update Failed",
      text: error.message || "Something went wrong",
      timer: 2000,
    });
    return false;
  }
}

export async function AddMoneyRequest(payload) {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/user/add-money-request`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    if (response.data.status) {
      Swal.fire({
        icon: "success",
        title: "Request Send Successful",
        text:
          response.data.message ||
          "Deposit request submitted successfully. Waiting for admin approval.",
        timer: 2000,
      });
      return true;
    } else {
      Swal.fire({
        icon: "info",
        title: "Request Send Failed",
        text: response.data.message || "Something went wrong",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Request Send Failed",
      text: error.message || "Request Send Failed",
      timer: 2000,
    });
    return false;
  }
}

export async function WithdrawMoneyRequest(payload) {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/user/money-withdraw`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    if (response.data.status) {
      Swal.fire({
        icon: "success",
        title: "Request Send Successful",
        text:
          response.data.message || "Withdrawal request submitted successfully",
        timer: 2000,
      });
      return true;
    } else {
      Swal.fire({
        icon: "info",
        title: "Request Send Failed",
        text: response.data.message || "Something went wrong",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Request Send Failed",
      text: error.message || "Request Send Failed",
      timer: 2000,
    });
    return false;
  }
}

export async function UserReferralDetails() {
  try {
    const response = await axios.get(`${apiBaseUrl}/user/referrals`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (response.data.status) {
      return response.data;
    } else {
      Swal.fire({
        icon: "info",
        title: "Referral list fetched Failed",
        text: response.data.message || "Something went wrong",
        timer: 2000,
      });
      return false;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Referral list fetched Failed",
      text: error.message || "Referral list fetched Failed",
      timer: 2000,
    });
    return false;
  }
}
