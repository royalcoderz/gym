window.addEventListener('scroll',function(){
    const navbar =
    document.getElementById('navbar');
    if(window.scrollY>50){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});

if (window.ResizeObserver &&
    (!window.PerformanceObserver || !PerformanceObserver.supportedEntryTypes || PerformanceObserver.supportedEntryTypes.indexOf('paint') === -1)) {
    new ResizeObserver(function (entries, observer) {
        entries.some(function (entry) {
            var contentRect = entry.contentRect;
            if (contentRect.width > 0 && contentRect.height > 0) {
                requestAnimationFrame(function (now) {
                    window.wixFirstPaint = now;
                    dispatchEvent(new CustomEvent('wixFirstPaint'));
                });
                observer.disconnect();
                return true;
            }
        });
    }).observe(document.body);
}

alert("thanks to visit my website")