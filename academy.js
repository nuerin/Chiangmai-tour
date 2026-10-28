document.getElementById('copy-lesson')?.addEventListener('click', async () => {
  const value = id => document.getElementById(id).value;
  const message = `KPGA 엘리트 골프 아카데미 선수 육성 상담\n훈련 목표: ${value('lesson-type')}\n현재 수준: ${value('lesson-level')}\n희망 일정: ${value('lesson-period')}\n문의: ${value('lesson-notes')}`;
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(message); status.textContent = '상담 내용을 복사했어요. 카카오톡이나 이메일에 붙여넣어 주세요.'; }
  catch { status.textContent = '자동 복사가 제한된 환경이에요. 아래 내용을 선택해 복사하세요.'; const area=document.createElement('textarea'); area.value=message; area.rows=7; area.readOnly=true; status.after(area); area.select(); }
});
