// API URL (Cloud Run 服务地址)
const apiUrl = "https://server-8e16-1000903650024.us-central1.run.app/api/products/";

// 获取产品数据
async function fetchProducts() {
    try {
        const response = await fetch(apiUrl); // 发送 GET 请求
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json(); // 转换为 JSON
        renderProducts(products); // 渲染产品数据
    } catch (error) {
        console.error("Error fetching products:", error);
        document.getElementById("product-list").innerHTML = "Failed to load products.";
    }
}

// 渲染产品数据到页面
function renderProducts(products) {
    const container = document.getElementById("product-list");
    container.innerHTML = ""; // 清空容器

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Discount:</strong> $${product.discount_price}</p>
                <p><strong>Inventory:</strong> ${product.inventory_count}</p>
            </div>
        `;
        container.innerHTML += productCard; // 添加每个产品卡片
    });
}

// 执行获取产品数据
fetchProducts();
