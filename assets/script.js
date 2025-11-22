document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("lang-toggle");
  const body = document.body;

  // 1. ตรวจสอบว่าเคยเลือกภาษาไทยไว้ไหม (จากความจำเครื่อง)
  if (localStorage.getItem("language") === "th") {
    body.classList.add("thai-mode");
    if(toggleBtn) toggleBtn.innerText = "EN"; // ถ้าเป็นไทย ปุ่มจะเขียนว่า "EN" เพื่อให้กดกลับ
  }

  // 2. ฟังก์ชันเมื่อกดปุ่ม
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function(e) {
      e.preventDefault(); // กันไม่ให้ลิงก์กระโดด (ถ้าใช้ <a>)
      
      // สลับคลาส thai-mode
      body.classList.toggle("thai-mode");

      // ตรวจสอบสถานะปัจจุบันแล้วบันทึก + เปลี่ยนข้อความปุ่ม
      if (body.classList.contains("thai-mode")) {
        localStorage.setItem("language", "th"); // จำว่าเลือกไทย
        toggleBtn.innerText = "EN"; // ปุ่มโชว์ทางเลือกให้กลับเป็น EN
      } else {
        localStorage.setItem("language", "en"); // จำว่าเลือกอังกฤษ
        toggleBtn.innerText = "TH"; // ปุ่มโชว์ทางเลือกให้เป็น TH
      }
    });
  }
});
