document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('clickable-list');
    const items = Array.from(list.children);

    items.sort((a, b) => {
        const rateA = parseFloat(a.dataset.clickRate);
        const rateB = parseFloat(b.dataset.clickRate);
        return rateB - rateA; // 降順にソート
    });

    items.forEach(item => list.appendChild(item));
});