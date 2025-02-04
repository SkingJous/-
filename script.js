document.getElementById('overtime-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // 獲取輸入值
  const monthlyHours = parseFloat(document.getElementById('monthly-hours').value); // 當月應上班時數
  const workingDays = parseFloat(document.getElementById('working-days').value); // 實際上班天數
  const compensatoryDays = parseFloat(document.getElementById('compensatory-days').value); // 補休天數
  const leaveDays = parseFloat(document.getElementById('leave-days').value); // 請休天數

  // 計算當月上班時數
  const actualWorkingHours = (workingDays * 22) + (compensatoryDays * 12) + (leaveDays * 8) - monthlyHours;

  // 計算當月超勤金額
  const overtimePay = actualWorkingHours * 202;

  // 更新結果到頁面
  document.getElementById('overtime-hours').textContent = actualWorkingHours.toFixed(2); // 當月上班時數
  document.getElementById('overtime-pay').textContent = overtimePay.toFixed(2); // 超勤金額
});
