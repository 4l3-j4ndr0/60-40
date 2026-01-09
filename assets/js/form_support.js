document.addEventListener('DOMContentLoaded', function () {
  // ---- Role radios
  const radios = Array.from(document.querySelectorAll('input[name="supporter_type"]'));

  // ---- Role field wrappers
  const fieldVeteran = document.getElementById('fieldVeteran');
  const fieldFR = document.getElementById('fieldFR');
  const fieldCommunity = document.getElementById('fieldCommunity');

  // ---- Specific inputs
  const discharge = document.getElementById('discharge_type');
  const frType = document.getElementById('first_responder_type');
  const occupation = document.getElementById('occupation');

  // ---- Form
  const form = document.getElementById('veteran-support-form');
  const status = document.getElementById('status');

  // ---- Counters
  const countEls = Array.from(document.querySelectorAll('.vs-count'));

  function getRole() {
    const r = radios.find(x => x.checked);
    return r ? r.value : 'veteran';
  }

  function setRequired(el, on) {
    if (!el) return;
    if (on) el.setAttribute('required', 'required');
    else el.removeAttribute('required');
  }

  function clearValue(el) {
    if (!el) return;
    if (el.tagName === 'SELECT') el.selectedIndex = 0;
    else el.value = '';
  }

  function showRole(role) {
    // Hide all
    fieldVeteran.style.display = 'none';
    fieldFR.style.display = 'none';
    fieldCommunity.style.display = 'none';

    // Remove required
    setRequired(discharge, false);
    setRequired(frType, false);
    setRequired(occupation, false);

    // Clear inactive
    clearValue(discharge);
    clearValue(frType);
    clearValue(occupation);

    // Show active + required
    if (role === 'veteran') {
      fieldVeteran.style.display = '';
      setRequired(discharge, true);
    } else if (role === 'first_responder') {
      fieldFR.style.display = '';
      setRequired(frType, true);
    } else {
      fieldCommunity.style.display = '';
      setRequired(occupation, true);
    }
  }

  // Simple counter animation (solo visual)
  function animateCount(el, target) {
    const duration = 700;
    const start = 0;
    const startTime = performance.now();

    function tick(now) {
      const t = Math.min(1, (now - startTime) / duration);
      const val = Math.floor(start + (target - start) * t);
      el.textContent = val.toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    countEls.forEach(el => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      el.textContent = '0';
      animateCount(el, target);
    });
  }

  // Wire radio changes
  radios.forEach(r => r.addEventListener('change', () => showRole(getRole())));

  // Form submit (sin backend: solo valida)
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (status) {
      status.innerHTML = '<div style="margin-top:12px; text-align:center; opacity:.9;">Submitted.</div>';
    }

    form.reset();
    // volver a default
    document.getElementById('typeVeteran').checked = true;
    showRole('veteran');
  });

  // Init
  initCounters();
  showRole(getRole());
});