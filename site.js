// 운영 전 실제 수신 이메일로 변경하세요. 예: booking@yourdomain.com
const CONTACT_EMAIL = 'YOUR_EMAIL@example.com';
const form = document.getElementById('inquiry');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (CONTACT_EMAIL === 'YOUR_EMAIL@example.com') {
      alert('아직 상담 수신 이메일이 설정되지 않았습니다. site.js의 CONTACT_EMAIL을 실제 이메일로 변경해 주세요.');
      return;
    }
    const get = id => document.getElementById(id).value.trim();
    const subject = '[치앙라이 골프여행 문의] ' + get('name');
    const body = ['이름: ' + get('name'), '회신 이메일: ' + get('email'), '골프장: ' + get('course'), '인원: ' + get('people'), '출발일: ' + (get('date') || '미정'), '기간: ' + get('stay'), '문의 내용:', get('memo') || '(없음)'].join('\n');
    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
}
