const start = new Date('1975-04-05T00:00:00+02:00');

function update() {
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonth;
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById('anni').textContent = years + " anni";
    document.getElementById('mesi').textContent = months + " mesi";
    document.getElementById('giorni').textContent = days + " giorni";
    document.getElementById('ore').textContent = hours + " ore";
}

update();
setInterval(update, 1000);
