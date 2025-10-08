// Data for menu items
const menuItems = [
    { name: "Espresso", price: "$2.50" },
    { name: "Cappuccino", price: "$3.00" },
    { name: "Latte", price: "$3.50" },
    { name: "Americano", price: "$2.80" },
    { name: "Mocha", price: "$3.80" }
];

const packages = [
    { name: "Buy 2 Get 1 Free (Any Coffee)", price: "$6.00" },
    { name: "Breakfast Combo (Cappuccino + Croissant)", price: "$4.50" },
    { name: "Afternoon Treat (Latte + Brownie)", price: "$5.00" }
];

// Function to create menu list
function createMenuList(items) {
    const ul = document.createElement('ul');
    ul.className = 'menu-list';
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'menu-item scrapbook-paper';

        // Decorative tape/ribbon
        const tape = document.createElement('div');
        tape.className = 'scrapbook-tape';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'item-name';
        nameSpan.textContent = item.name;

        const priceSpan = document.createElement('span');
        priceSpan.className = 'item-price';
        priceSpan.textContent = item.price;

        // Order button
        const orderBtn = document.createElement('button');
        orderBtn.className = 'order-btn';
        orderBtn.textContent = 'Order';
        orderBtn.onclick = function() {
            li.classList.add('ordered');
            orderBtn.disabled = true;
            orderBtn.textContent = 'Ordered!';
        };

        li.appendChild(tape);
        li.appendChild(nameSpan);
        li.appendChild(priceSpan);
        li.appendChild(orderBtn);
        ul.appendChild(li);
    });
    return ul;
}

// Render dashboard
function renderDashboard() {
    const dashboard = document.querySelector('.dashboard');
    dashboard.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Coffee Menu';
    dashboard.appendChild(h1);

    dashboard.appendChild(createMenuList(menuItems));

    const h2 = document.createElement('h2');
    h2.textContent = 'Special Packages';
    dashboard.appendChild(h2);

    dashboard.appendChild(createMenuList(packages));
}

// Run on page load
document.addEventListener('DOMContentLoaded', renderDashboard);