import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

// Fungsi untuk mendapatkan token dari localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Fungsi untuk menghapus token dan melakukan logout
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  const navigate = useNavigate();
  // Arahkan pengguna ke halaman login atau lakukan tindakan lain yang sesuai
  navigate("/login");
};

// Fungsi untuk memeriksa apakah token sudah kedaluwarsa
// Fungsi untuk memeriksa apakah token sudah kedaluwarsa dan berapa lama lagi sebelum kedaluwarsa
const getTokenExpirationDetails = (token: string) => {
  try {
    const decodedToken: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000; // waktu saat ini dalam detik
    const timeRemaining = decodedToken.exp - currentTime;

    if (timeRemaining <= 0) {
      return {
        isExpired: true,
        timeRemaining: "Token has expired",
      };
    }

    const days = Math.floor(timeRemaining / 86400); // 86400 detik dalam sehari
    const hours = Math.floor((timeRemaining % 86400) / 3600); // 3600 detik dalam sejam
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = Math.floor(timeRemaining % 60);

    return {
      isExpired: false,
      timeRemaining: `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
    };
  } catch (error) {
    // Jika token tidak valid atau ada kesalahan saat mendekode
    return {
      isExpired: true,
      timeRemaining: "Invalid token",
    };
  }
};

// Fungsi utama untuk memeriksa token dan menampilkan waktu tersisa
export const checkTokenExpiration = () => {
  const token = getToken();
  if (token) {
    const { isExpired, timeRemaining } = getTokenExpirationDetails(token);
    if (isExpired) {
      console.log("Token has expired. Logging out...");
      logout();
    } else {
      console.log(`Token will expire in: ${timeRemaining}`);
    }
  }
};
