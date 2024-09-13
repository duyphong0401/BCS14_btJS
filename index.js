// Bài 1: Quản lý tuyển sinh
function qlTuyenSinh() {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;
  let doiTuong = document.getElementById("doiTuong").value * 1;
  let khuVuc = document.getElementById("khuVuc").value * 1;
  let tongDiem = diemMon1 + diemMon2 + diemMon3 + doiTuong + khuVuc;

  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    document.getElementById("hienThiKQ").innerHTML =
      "Bạn đã rớt do có điểm bằng 0";
  } else if (tongDiem >= diemChuan) {
    document.getElementById(
      "hienThiKQ"
    ).innerHTML = `Tổng điểm: ${tongDiem} Bạn đã đậu`;
  } else {
    document.getElementById(
      "hienThiKQ"
    ).innerHTML = `Tổng điểm: ${tongDiem} Bạn đã rớt`;
  }
}
document.getElementById("btnKetQua").onclick = qlTuyenSinh;
// Bài 2: Tính tiền điện
function tinhTienDien() {
  let tenKH = document.getElementById("tenKH").value;
  let soKw = document.getElementById("soKw").value * 1;
  let tongTienDien = 0;

  if (soKw <= 50) {
    tongTienDien = 500 * soKw;
  } else if (soKw > 50 && soKw <= 100) {
    tongTienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw > 100 && soKw <= 200) {
    tongTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw > 200 && soKw <= 350) {
    tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else if (soKw > 350) {
    tongTienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 200 * 1100 + (soKw - 350) * 1300;
  }
  document.getElementById(
    "kqTienDien"
  ).innerHTML = `Tổng tiền điện của bạn ${tenKH} là: ${tongTienDien.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
}
document.getElementById("btnTienDien").onclick = tinhTienDien;

// Bài 3: Tính thuế
function thueTNCN() {
  let hoTen = document.getElementById("hoTen").value;
  let thuNhap = document.getElementById("thuNhap").value;
  let phuThuoc = document.getElementById("soNguoiPhuthuoc").value;
  let tongThue = 0;

  thuNhap = thuNhap - 4e6 - 16e5 * phuThuoc;

  if (thuNhap <= 60e6 && thuNhap > 0) {
    tongThue = thuNhap * 0.05;
  } else if (thuNhap > 60e6 && thuNhap <= 120e6) {
    tongThue = thuNhap * 0.1;
  } else if (thuNhap > 120e6 && thuNhap <= 210e6) {
    tongThue = thuNhap * 0.15;
  } else if (thuNhap > 120e6 && thuNhap <= 384e6) {
    tongThue = thuNhap * 0.2;
  } else if (thuNhap > 384e6 && thuNhap <= 624e6) {
    tongThue = thuNhap * 0.25;
  } else if (thuNhap > 624e6 && thuNhap <= 960e6) {
    tongThue = thuNhap * 0.3;
  } else {
    tongThue = thuNhap * 0.35;
  }

  let ketQuaThue =
    tongThue > 0
      ? `Họ tên: ${hoTen} <br>
        Tiền thuế thu nhập cá nhân là: ${tongThue.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}`
      : `Số tiền nhập không hợp lệ`;

  document.getElementById("tongThue").innerHTML = ketQuaThue;
}
document.getElementById("btnThue").onclick = thueTNCN;

function disableInput() {
  let loaiKH = document.getElementById("loaiKH").value;
  let soKetNoi = document.getElementById("soKetNoi");

  if (loaiKH === "company") {
    soKetNoi.style.display = "none";
  } else {
    soKetNoi.style.display = "block";
  }
}

//Bài 4: Tính tiền cáp
function tinhTienCap() {
  let loaiKH = document.getElementById("loaiKH").value;
  let maKH = document.getElementById("maKH").value;
  let soKenh = document.getElementById("soKenh").value * 1;
  let soKetNoi = document.getElementById("soKetNoi") * 1;
}
