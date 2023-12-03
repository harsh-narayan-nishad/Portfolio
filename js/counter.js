let valueDisplays = document.querySelectorAll(".num");
let totalAnimationTime = 200; // Set total animation time to 0.2 seconds

valueDisplays.forEach((valueDisplay) => {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounter(valueDisplay);
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(valueDisplay);
});

function startCounter(valueDisplay) {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = totalAnimationTime / endValue;
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
}
