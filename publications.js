(() => {
  const filters = document.querySelector('.publication-filters');
  const records = Array.from(document.querySelectorAll('.publication'));
  const groups = Array.from(document.querySelectorAll('.publication-group'));
  const count = document.querySelector('#publication-count');
  if (!filters || !count) return;
  function show(topic) {
    let visible = 0;
    for (const record of records) {
      const matches = topic === 'all' || record.dataset.topics.split(' ').includes(topic);
      record.hidden = !matches;
      if (matches) visible++;
    }
    for (const group of groups) group.hidden = !Array.from(group.querySelectorAll('.publication')).some(record => !record.hidden);
    for (const button of filters.querySelectorAll('button')) button.setAttribute('aria-pressed', String(button.dataset.topic === topic));
    count.textContent = `${visible} selected publication${visible === 1 ? '' : 's'}`;
  }
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-topic]');
    if (button) show(button.dataset.topic);
  });
  show('all');
})();
