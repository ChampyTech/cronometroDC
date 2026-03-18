const start = new Date('1975-04-05T00:00:00+02:00');

function update() {
    const now = new Date();
    let diff = now.getTime() - start.getTime();

    const secondiTotali = Math.floor(diff / 1000);

    const anni = Math.floor(secondiTotali / (365.25 * 86400));
    const mesi = Math.floor((secondiTotali % (365.25 * 86400)) / (30.44 * 86400));
    const giorni = Math.floor((secondiTotali % (30.44 * 86400)) / 86400);
    const ore = Math.floor((secondiTotali % 86400) / 3600);

    document.getElementById('anni').textContent = anni;
    document.getElementById('mesi').textContent = mesi;
    document.getElementById('giorni').textContent = giorni;
    document.getElementById('ore').textContent = ore;
}

update();
setInterval(update, 1000);
