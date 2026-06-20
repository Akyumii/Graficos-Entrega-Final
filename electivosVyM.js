<div style="position: relative; width: 100%; height: 400px;">
  <canvas id="electivosBarChart"></canvas>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<script>
  const ctx = document.getElementById('electivosBarChart');

  const labels = ['Comunicación y Estrategia', 'Ciencia y Tecnología', 'Morfología y Técnica'];
  const obligatorio      = [4, 4, 4];
  const electivoMencion  = [28, 13, 18];
  const electivoAmbas    = [30, 9, 11];
  const totales = labels.map((_, i) => obligatorio[i] + electivoMencion[i] + electivoAmbas[i]);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        { label: 'Obligatorio', data: obligatorio, backgroundColor: '#9c9c9c' },
        { label: 'Electivo Mención', data: electivoMencion, backgroundColor: '#3266ad' },
        { label: 'Electivo de Ambas Menciones', data: electivoAmbas, backgroundColor: '#1d9e75' }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { stacked: true },
        y: {
          stacked: true,
          beginAtZero: true,
          title: { display: true, text: 'Cantidad de electivos' }
        }
      },
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y;
            },
            footer: function(items) {
              const idx = items[0].dataIndex;
              return 'Total: ' + totales[idx];
            }
          }
        }
      }
    }
  });
</script>
