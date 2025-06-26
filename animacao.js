document.querySelectorAll('.pdf-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const heart = document.getElementById('heart-anim');
        heart.style.display = 'block';
        setTimeout(() => {
            heart.style.display = 'none';
        }, 4000);

        const pdfViewer = document.getElementById('pdf-viewer');
        pdfViewer.innerHTML = `
            <button id="close-pdf" style="float:right;margin-bottom:10px;">Fechar</button>
            <iframe src="${this.getAttribute('href')}"></iframe>
        `;
        pdfViewer.style.display = 'block';

        document.getElementById('close-pdf').onclick = function() {
            pdfViewer.style.display = 'none';
            pdfViewer.innerHTML = '';
        };
    });
});