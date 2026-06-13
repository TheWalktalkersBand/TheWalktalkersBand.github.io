fetch('shows.json')
  .then(response => response.json())
  .then(shows => {
    const container = document.getElementById('shows');

    shows.forEach(show => {
      const div = document.createElement('div');
      div.className = 'show';

      div.innerHTML = `
        <div class="show-date">${show.date}</div>

        <div class="show-venue">
          <strong>${show.venue}</strong><br>
          ${show.address1}<br>
          ${show.address2}
        </div>

        <div class="show-meta">
          <span>Doors: ${show.doors}</span>
          <span>Show: ${show.show}</span>
          <span>Cover: ${show.cover}</span>
        </div>

        <div class="show-bands">
          w/ ${show.bands}
        </div>
      `;

      container.appendChild(div);
    });
  });