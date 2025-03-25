function startCountdown() {
    const newYear = new Date(new Date().getFullYear() + 1, 0, 1); // 1 января следующего года
    const timer = setInterval(() => {
        const now = new Date();
        const timeLeft = newYear - now;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('timer').textContent = "С Новым Годом!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('timer').textContent = 
            `${days} дн. ${String(hours).padStart(2, '0')} ч. ${String(minutes).padStart(2, '0')} мин. ${String(seconds).padStart(2, '0')} сек.`;
    }, 1000);
}

startCountdown();