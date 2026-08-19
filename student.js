/**
 * Northgate College Food Court Pre-Order System
 * PAGE 1: STUDENT / CUSTOMER PORTAL JAVASCRIPT LOGIC
 * Minimalist Light Theme (100% Pure Veg / Vegan Canteen)
 */

// Initial Seed Dataset for Canteen Outlets (STRICTLY 100% PURE VEG / VEGAN)
const INITIAL_CANTEEN_MENU = [
  {
    id: "item-1",
    name: "Royal Deluxe Veg Thali",
    category: "Meals",
    price: 180,
    description: "Authentic college canteen thali with 2 Paneer Butter Masala, Dal Tadka, Jeera Rice, 3 Butter Chapatis, Gulab Jamun & Raita.",
    isAvailable: true,
    stockCount: 15,
    rating: 4.9,
    prepTime: "12-15 min",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg"],
    customizationOptions: {
      portions: [
        { name: "Standard", extraPrice: 0 },
        { name: "Special Jumbo (+Extra Roti & Paneer)", extraPrice: 40 }
      ],
      spiceLevels: ["Mild 🌶️", "Medium 🌶️🌶️", "Spicy 🌶️🌶️🌶️"],
      addOns: [
        { id: "addon-1", name: "Extra Butter Naan", price: 30 },
        { id: "addon-2", name: "Extra Gulab Jamun (2 pcs)", price: 35 },
        { id: "addon-3", name: "Roasted Papad & Salad", price: 20 }
      ]
    }
  },
  {
    id: "item-2",
    name: "Smokey Paneer Tikka Kathi Roll",
    category: "Snacks",
    price: 110,
    description: "Charcoal grilled marinated cottage cheese wrapped in a flaky paratha with mint chutney and crunchy onions.",
    isAvailable: true,
    stockCount: 8,
    rating: 4.8,
    prepTime: "8-10 min",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg"],
    customizationOptions: {
      portions: [
        { name: "Single Roll", extraPrice: 0 },
        { name: "Double Cheese Roll", extraPrice: 35 }
      ],
      spiceLevels: ["Mild 🌶️", "Medium 🌶️🌶️", "Extra Fiery 🌶️🌶️🌶️🌶️"],
      addOns: [
        { id: "addon-4", name: "Extra Liquid Cheese Melt", price: 25 },
        { id: "addon-5", name: "Mint Dip", price: 15 }
      ]
    }
  },
  {
    id: "item-3",
    name: "Crispy Masala Dosa Combo",
    category: "Combos",
    price: 130,
    description: "Golden crispy rice crepe stuffed with spiced potato mash, served with aromatic Sambar, Coconut Dip & Filter Coffee.",
    isAvailable: true,
    stockCount: 12,
    rating: 4.7,
    prepTime: "10-12 min",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg", "Vegan", "Gluten-Free"],
    customizationOptions: {
      portions: [
        { name: "Regular Dosa", extraPrice: 0 },
        { name: "Ghee Roast Masala Dosa", extraPrice: 25 }
      ],
      spiceLevels: ["Mild 🌶️", "Medium 🌶️🌶️"],
      addOns: [
        { id: "addon-6", name: "Extra Bowl of Sambar", price: 20 },
        { id: "addon-7", name: "Gunpowder Masala (Podi)", price: 15 }
      ]
    }
  },
  {
    id: "item-4",
    name: "Double Cheese Crunch Burger Combo",
    category: "Combos",
    price: 165,
    description: "Loaded crispy veg patty burger topped with cheddar slice, secret campus sauce, served with salted fries and chilled Coke.",
    isAvailable: true,
    stockCount: 3,
    rating: 4.8,
    prepTime: "10-15 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg"],
    customizationOptions: {
      portions: [
        { name: "Single Patty", extraPrice: 0 },
        { name: "Double Trouble (2 Patties)", extraPrice: 50 }
      ],
      spiceLevels: ["Normal", "Spicy Jalapeno 🌶️🌶️"],
      addOns: [
        { id: "addon-8", name: "Peri Peri Fries Upgrade", price: 25 },
        { id: "addon-9", name: "Extra Cheese Slice", price: 20 }
      ]
    }
  },
  {
    id: "item-5",
    name: "Iced Caramel Cold Coffee",
    category: "Beverages",
    price: 90,
    description: "Thick double-shot espresso blended with chilled whole milk, vanilla ice cream, and drizzled caramel syrup.",
    isAvailable: true,
    stockCount: 20,
    rating: 4.9,
    prepTime: "3-5 min",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg", "Gluten-Free"],
    customizationOptions: {
      portions: [
        { name: "Medium (350ml)", extraPrice: 0 },
        { name: "Large Jumbo (500ml)", extraPrice: 30 }
      ],
      spiceLevels: ["Standard Sweet", "Less Sugar", "Sugar Free"],
      addOns: [
        { id: "addon-10", name: "Extra Scoop Vanilla Ice Cream", price: 30 },
        { id: "addon-11", name: "Whipped Cream & Chocolate Sprinkles", price: 25 }
      ]
    }
  },
  {
    id: "item-6",
    name: "Street Style Samosa Chaat",
    category: "Snacks",
    price: 75,
    description: "Crushed potato samosas topped with warm chole gravy, sweet tamarind chutney, mint dip, sev & fresh coriander.",
    isAvailable: true,
    stockCount: 6,
    rating: 4.6,
    prepTime: "5 min",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg"],
    customizationOptions: {
      portions: [
        { name: "Single Plate (2 Samosas)", extraPrice: 0 },
        { name: "Double Monster Plate", extraPrice: 40 }
      ],
      spiceLevels: ["Mild 🌶️", "Medium 🌶️🌶️", "Teekha Chatpata 🌶️🌶️🌶️"],
      addOns: [
        { id: "addon-13", name: "Extra Curd (Dahi)", price: 15 }
      ]
    }
  },
  {
    id: "item-7",
    name: "Butter Chole Bhature (2 Pcs)",
    category: "Meals",
    price: 140,
    description: "Fluffy balloon bhaturas served with spicy authentic Amritsari Chole, pickled onions, and green chili fry.",
    isAvailable: true,
    stockCount: 10,
    rating: 4.8,
    prepTime: "12 min",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg"],
    customizationOptions: {
      portions: [
        { name: "Standard (2 Bhaturas)", extraPrice: 0 },
        { name: "Extra 1 Bhatura", extraPrice: 35 }
      ],
      spiceLevels: ["Medium 🌶️🌶️", "Authentic Spicy 🌶️🌶️🌶️"],
      addOns: [
        { id: "addon-15", name: "Sweet Lassi Shot", price: 30 }
      ]
    }
  },
  {
    id: "item-9",
    name: "Fudge Brownie Sundae",
    category: "Desserts",
    price: 120,
    description: "Warm gooey dark chocolate brownie served with a scoop of creamy vanilla ice cream, hot fudge drizzle & cashews.",
    isAvailable: true,
    stockCount: 14,
    rating: 4.9,
    prepTime: "4 min",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg"],
    customizationOptions: {
      portions: [
        { name: "Single Brownie", extraPrice: 0 },
        { name: "Double Sized Feast", extraPrice: 50 }
      ],
      spiceLevels: ["Standard Sweet"],
      addOns: [
        { id: "addon-19", name: "Extra Scoop Vanilla Ice Cream", price: 30 }
      ]
    }
  },
  {
    id: "item-10",
    name: "Sparkling Lemon Mint Mojito",
    category: "Beverages",
    price: 75,
    description: "Refreshing fizzy mocktail muddled with crushed fresh mint leaves, lime juice, and sparkling soda.",
    isAvailable: true,
    stockCount: 18,
    rating: 4.5,
    prepTime: "3 min",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg", "Vegan", "Gluten-Free"],
    customizationOptions: {
      portions: [
        { name: "300ml Glass", extraPrice: 0 },
        { name: "500ml Large Glass", extraPrice: 25 }
      ],
      spiceLevels: ["Normal Ice", "Extra Chill Ice", "Less Ice"],
      addOns: [
        { id: "addon-21", name: "Extra Mint Burst", price: 10 }
      ]
    }
  },
  {
    id: "item-11",
    name: "Paneer Butter Masala Naan Meal",
    category: "Meals",
    price: 170,
    description: "Rich creamy cottage cheese gravy served with 2 Garlic Butter Naans, Jeera Rice, and Sirka Pyaz.",
    isAvailable: false,
    stockCount: 0,
    rating: 4.8,
    prepTime: "15 min",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg"],
    customizationOptions: {
      portions: [
        { name: "Standard Meal", extraPrice: 0 }
      ],
      spiceLevels: ["Medium 🌶️🌶️"],
      addOns: []
    }
  },
  {
    id: "item-12",
    name: "Crispy Vegetable Spring Rolls",
    category: "Snacks",
    price: 95,
    description: "Golden fried rolls filled with julienned cabbage, bell peppers, carrots, and glass noodles served with sweet chili sauce.",
    isAvailable: true,
    stockCount: 11,
    rating: 4.6,
    prepTime: "8 min",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    tags: ["Veg", "Vegan"],
    customizationOptions: {
      portions: [
        { name: "Plate of 6 Pcs", extraPrice: 0 },
        { name: "Party Plate (10 Pcs)", extraPrice: 45 }
      ],
      spiceLevels: ["Mild Chili Dip", "Hot Schezwan Dip 🌶️🌶️"],
      addOns: [
        { id: "addon-22", name: "Extra Schezwan Sauce Dip", price: 15 }
      ]
    }
  }
];

const INITIAL_DEMO_ORDERS = [
  {
    orderId: "ORD-9401",
    tokenNumber: "NG-101",
    timestamp: Date.now() - 1000 * 60 * 18,
    customerInfo: {
      name: "Rohan Verma",
      rollNo: "CS2023-044",
      phone: "9876543210",
      slot: "Next available: 12:45 PM"
    },
    items: [
      {
        cartId: "item-1-demo",
        id: "item-1",
        name: "Royal Deluxe Veg Thali",
        price: 180,
        quantity: 1,
        selectedPortion: { name: "Standard", extraPrice: 0 },
        selectedSpice: "Medium 🌶️🌶️",
        selectedAddOns: [{ id: "addon-2", name: "Extra Gulab Jamun (2 pcs)", price: 35 }],
        specialInstructions: "Please pack extra chutney",
        unitTotal: 215,
        lineTotal: 215
      }
    ],
    pricingSummary: { subtotal: 215, tax: 10.75, campusFee: 5, total: 230.75 },
    status: "Preparing"
  }
];

// Client-Side LocalStorage Operations
function getMenuData() {
  const saved = localStorage.getItem('foodcourt_menu');
  if (!saved) {
    localStorage.setItem('foodcourt_menu', JSON.stringify(INITIAL_CANTEEN_MENU));
    return INITIAL_CANTEEN_MENU;
  }
  try {
    let menu = JSON.parse(saved);
    // Ensure all non-veg items are automatically purged
    menu = menu.filter(item => !item.tags.includes("Non-Veg"));
    localStorage.setItem('foodcourt_menu', JSON.stringify(menu));
    return menu;
  } catch (err) {
    return INITIAL_CANTEEN_MENU;
  }
}

function saveMenuData(menu) {
  // Purge any Non-Veg items automatically
  const vegOnlyMenu = menu.filter(item => !item.tags.includes("Non-Veg"));
  localStorage.setItem('foodcourt_menu', JSON.stringify(vegOnlyMenu));
  triggerSyncEvent();
}

function getOrdersData() {
  const saved = localStorage.getItem('foodcourt_orders');
  if (!saved) {
    localStorage.setItem('foodcourt_orders', JSON.stringify(INITIAL_DEMO_ORDERS));
    return INITIAL_DEMO_ORDERS;
  }
  try { return JSON.parse(saved); } catch (err) { return INITIAL_DEMO_ORDERS; }
}

function saveOrdersData(orders) {
  localStorage.setItem('foodcourt_orders', JSON.stringify(orders));
  triggerSyncEvent();
}

function getActiveTrackingId() {
  return localStorage.getItem('foodcourt_active_order') || null;
}

function setActiveTrackingId(orderId) {
  if (orderId) localStorage.setItem('foodcourt_active_order', orderId);
  else localStorage.removeItem('foodcourt_active_order');
  triggerSyncEvent();
}

function getCartItems() {
  const saved = localStorage.getItem('foodcourt_cart');
  if (!saved) return [];
  try { return JSON.parse(saved); } catch (err) { return []; }
}

function saveCartItems(cart) {
  localStorage.setItem('foodcourt_cart', JSON.stringify(cart));
  triggerSyncEvent();
}

function triggerSyncEvent() {
  window.dispatchEvent(new Event('foodcourt_sync'));
}

// Toast Alert System
function showToastAlert(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  let bgClass = 'bg-slate-900 text-white';
  let iconName = 'info';

  if (type === 'success') {
    bgClass = 'bg-emerald-800 text-white shadow-lg shadow-emerald-600/20';
    iconName = 'check-circle';
  } else if (type === 'danger') {
    bgClass = 'bg-rose-800 text-white shadow-lg shadow-rose-600/20';
    iconName = 'alert-circle';
  } else if (type === 'warning') {
    bgClass = 'bg-amber-800 text-white shadow-lg shadow-amber-600/20';
    iconName = 'alert-triangle';
  }

  toast.className = `toast-item pointer-events-auto flex items-center gap-3 p-3.5 rounded-xl shadow-xl text-xs font-semibold ${bgClass}`;
  toast.innerHTML = `<i data-lucide="${iconName}" class="w-4 h-4 shrink-0"></i><span>${message}</span>`;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Student Page State Variables
let currentCategory = 'All';
let activeDietaryFilters = new Set();
let currentSearchTerm = '';
let activeCustomizingItem = null;

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryTabs();
  refreshStudentPortalView();

  window.addEventListener('storage', refreshStudentPortalView);
  window.addEventListener('foodcourt_sync', refreshStudentPortalView);

  if (window.lucide) lucide.createIcons();
});

function refreshStudentPortalView() {
  updateCartNavbarBadges();
  updateActiveTrackerPill();
  renderFoodMenuGrid();
  renderOrderTrackerStepper();
}

function renderCategoryTabs() {
  const categories = ['All', 'Combos', 'Meals', 'Snacks', 'Beverages', 'Desserts'];
  const container = document.getElementById('category-pills');
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button onclick="selectCategoryFilter('${cat}')" id="cat-btn-${cat}"
      class="px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
        currentCategory === cat 
          ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20 font-extrabold' 
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
      }">
      ${cat === 'All' ? '🍽️ All Items' : cat}
    </button>
  `).join('');
}

function selectCategoryFilter(category) {
  currentCategory = category;
  renderCategoryTabs();
  renderFoodMenuGrid();
}

function toggleDietaryFilterTag(tag) {
  if (activeDietaryFilters.has(tag)) activeDietaryFilters.delete(tag);
  else activeDietaryFilters.add(tag);

  const btn = document.getElementById(`diet-tag-${tag}`);
  if (btn) {
    if (activeDietaryFilters.has(tag)) {
      btn.classList.add('border-orange-500', 'bg-orange-50', 'text-orange-700');
      btn.classList.remove('border-slate-200', 'bg-slate-50', 'text-slate-700');
    } else {
      btn.classList.remove('border-orange-500', 'bg-orange-50', 'text-orange-700');
      btn.classList.add('border-slate-200', 'bg-slate-50', 'text-slate-700');
    }
  }
  renderFoodMenuGrid();
}

function onSearchInputChange() {
  currentSearchTerm = document.getElementById('search-input').value.toLowerCase().trim();
  renderFoodMenuGrid();
}

function renderFoodMenuGrid() {
  const menu = getMenuData();
  const sortOption = document.getElementById('sort-select')?.value || 'popular';
  const container = document.getElementById('menu-grid');
  if (!container) return;

  let filtered = menu.filter(item => {
    if (currentCategory !== 'All' && item.category !== currentCategory) return false;
    if (currentSearchTerm) {
      const matchName = item.name.toLowerCase().includes(currentSearchTerm);
      const matchDesc = item.description.toLowerCase().includes(currentSearchTerm);
      const matchCat = item.category.toLowerCase().includes(currentSearchTerm);
      if (!matchName && !matchDesc && !matchCat) return false;
    }
    if (activeDietaryFilters.size > 0) {
      for (let tag of activeDietaryFilters) {
        if (!item.tags.includes(tag)) return false;
      }
    }
    return true;
  });

  if (sortOption === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sortOption === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sortOption === 'prep-time') filtered.sort((a, b) => parseInt(a.prepTime) - parseInt(b.prepTime));
  else filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center space-y-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
          <i data-lucide="utensils" class="w-6 h-6"></i>
        </div>
        <h4 class="font-heading text-lg font-bold text-slate-800">No Canteen Items Found</h4>
        <p class="text-xs text-slate-500 max-w-sm mx-auto">Try clearing search inputs or dietary tags.</p>
        <button onclick="resetMenuFilters()" class="px-4 py-2 bg-orange-50 text-orange-600 border border-orange-200 rounded-xl text-xs font-bold">Reset All Filters</button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isOutOfStock = !item.isAvailable || item.stockCount <= 0;
    const isLowStock = item.isAvailable && item.stockCount > 0 && item.stockCount <= 5;
    
    return `
      <div class="food-card ${isOutOfStock ? 'out-of-stock' : ''}">
        <div>
          <div class="relative h-48 overflow-hidden">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20"></div>
            
            <div class="absolute top-3 left-3">
              ${isOutOfStock ? `
                <span class="status-badge badge-rose">Out of Stock</span>
              ` : isLowStock ? `
                <span class="status-badge badge-amber animate-pulse">Only ${item.stockCount} Left!</span>
              ` : `
                <span class="status-badge badge-emerald">In Stock</span>
              `}
            </div>

            <div class="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-700 text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 border border-slate-200 shadow-sm">
              <i data-lucide="clock" class="w-3 h-3 text-orange-500"></i> ${item.prepTime}
            </div>

            <div class="absolute bottom-3 right-3 bg-slate-900/80 text-amber-300 text-xs font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1">
              ★ ${item.rating || 4.8}
            </div>
          </div>

          <div class="p-4 space-y-2">
            <div class="flex items-center gap-1.5">
              ${item.tags.map(t => `
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  t === 'Veg' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                  'bg-sky-50 text-sky-700 border border-sky-200'
                }">${t}</span>
              `).join('')}
              <span class="text-[10px] text-slate-400 font-semibold">• ${item.category}</span>
            </div>

            <h3 class="font-heading font-extrabold text-base text-slate-900 line-clamp-1">${item.name}</h3>
            <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">${item.description}</p>
          </div>
        </div>

        <div class="p-4 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-3">
          <div>
            <span class="text-[10px] text-slate-400 block uppercase font-medium">Price</span>
            <span class="font-heading font-black text-lg text-orange-600">₹${item.price}</span>
          </div>

          <button onclick="openItemCustomizationModal('${item.id}')" ${isOutOfStock ? 'disabled' : ''}
            class="btn ${isOutOfStock ? 'btn-disabled' : 'btn-primary'} text-xs">
            <i data-lucide="${isOutOfStock ? 'slash' : 'plus'}" class="w-3.5 h-3.5"></i>
            <span>${isOutOfStock ? 'Unavailable' : 'Add'}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function resetMenuFilters() {
  currentCategory = 'All';
  activeDietaryFilters.clear();
  currentSearchTerm = '';
  document.getElementById('search-input').value = '';
  document.querySelectorAll('.diet-tag-btn').forEach(btn => {
    btn.classList.remove('border-orange-500', 'bg-orange-50', 'text-orange-700');
    btn.classList.add('border-slate-200', 'bg-slate-50', 'text-slate-700');
  });
  renderCategoryTabs();
  renderFoodMenuGrid();
}

// Customization Modal
function openItemCustomizationModal(itemId) {
  const menu = getMenuData();
  const item = menu.find(i => i.id === itemId);
  if (!item || !item.isAvailable || item.stockCount <= 0) {
    showToastAlert("This food item is currently out of stock", "danger");
    return;
  }

  activeCustomizingItem = JSON.parse(JSON.stringify(item));
  document.getElementById('custom-modal-img').src = item.image;
  document.getElementById('custom-modal-title').innerText = item.name;
  document.getElementById('custom-modal-desc').innerText = item.description;
  document.getElementById('special-instructions').value = '';

  document.getElementById('custom-modal-tags').innerHTML = item.tags.map(t => `
    <span class="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold">${t}</span>
  `).join('') + `<span class="text-white font-normal">&bull; Prep: ${item.prepTime}</span>`;

  const portionSec = document.getElementById('portion-section');
  const portionOpts = document.getElementById('portion-options');
  if (item.customizationOptions?.portions?.length > 0) {
    portionSec.classList.remove('hidden');
    portionOpts.innerHTML = item.customizationOptions.portions.map((p, idx) => `
      <label class="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
        <div class="flex items-center gap-2">
          <input type="radio" name="modal-portion" value="${idx}" ${idx === 0 ? 'checked' : ''} onchange="calculateModalTotalItemPrice()" class="w-4 h-4 text-orange-500">
          <span class="font-semibold text-slate-800">${p.name}</span>
        </div>
        <span class="text-orange-600 font-bold">${p.extraPrice > 0 ? `+₹${p.extraPrice}` : 'Free'}</span>
      </label>
    `).join('');
  } else portionSec.classList.add('hidden');

  const spiceSec = document.getElementById('spice-section');
  const spiceOpts = document.getElementById('spice-options');
  if (item.customizationOptions?.spiceLevels?.length > 0) {
    spiceSec.classList.remove('hidden');
    spiceOpts.innerHTML = item.customizationOptions.spiceLevels.map((s, idx) => `
      <label class="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
        <input type="radio" name="modal-spice" value="${s}" ${idx === 0 ? 'checked' : ''} class="w-3.5 h-3.5 text-orange-500">
        <span class="font-medium text-slate-700 text-xs">${s}</span>
      </label>
    `).join('');
  } else spiceSec.classList.add('hidden');

  const addonsSec = document.getElementById('addons-section');
  const addonsOpts = document.getElementById('addons-options');
  if (item.customizationOptions?.addOns?.length > 0) {
    addonsSec.classList.remove('hidden');
    addonsOpts.innerHTML = item.customizationOptions.addOns.map(a => `
      <label class="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
        <div class="flex items-center gap-2.5">
          <input type="checkbox" name="modal-addon" value="${a.id}" data-price="${a.price}" data-name="${a.name}" onchange="calculateModalTotalItemPrice()" class="w-4 h-4 text-orange-500 rounded">
          <span class="font-semibold text-slate-800">${a.name}</span>
        </div>
        <span class="text-orange-600 font-bold">+₹${a.price}</span>
      </label>
    `).join('');
  } else addonsSec.classList.add('hidden');

  calculateModalTotalItemPrice();
  document.getElementById('customization-modal').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeItemCustomizationModal() {
  document.getElementById('customization-modal').classList.add('hidden');
  activeCustomizingItem = null;
}

function calculateModalTotalItemPrice() {
  if (!activeCustomizingItem) return 0;
  let total = activeCustomizingItem.price;

  const portionRadios = document.getElementsByName('modal-portion');
  for (let r of portionRadios) {
    if (r.checked) {
      const idx = parseInt(r.value);
      total += activeCustomizingItem.customizationOptions?.portions[idx]?.extraPrice || 0;
      break;
    }
  }

  const addonChecks = document.getElementsByName('modal-addon');
  for (let c of addonChecks) {
    if (c.checked) total += parseFloat(c.getAttribute('data-price') || 0);
  }

  document.getElementById('custom-modal-calculated-price').innerText = `₹${total}`;
  return total;
}

function addCustomizedItemToCart() {
  if (!activeCustomizingItem) return;
  const menu = getMenuData();
  const latest = menu.find(i => i.id === activeCustomizingItem.id);
  if (!latest || !latest.isAvailable || latest.stockCount <= 0) {
    showToastAlert("Sorry! This item just went out of stock.", "danger");
    closeItemCustomizationModal();
    return;
  }

  let selectedPortion = { name: "Standard", extraPrice: 0 };
  const portionRadios = document.getElementsByName('modal-portion');
  for (let r of portionRadios) {
    if (r.checked) {
      const idx = parseInt(r.value);
      selectedPortion = activeCustomizingItem.customizationOptions?.portions[idx] || selectedPortion;
      break;
    }
  }

  let selectedSpice = "Standard";
  const spiceRadios = document.getElementsByName('modal-spice');
  for (let r of spiceRadios) {
    if (r.checked) { selectedSpice = r.value; break; }
  }

  const selectedAddOns = [];
  const addonChecks = document.getElementsByName('modal-addon');
  for (let c of addonChecks) {
    if (c.checked) {
      selectedAddOns.push({
        id: c.value,
        name: c.getAttribute('data-name'),
        price: parseFloat(c.getAttribute('data-price'))
      });
    }
  }

  const specialInstructions = document.getElementById('special-instructions').value.trim();
  const unitTotal = calculateModalTotalItemPrice();

  const cartLineItem = {
    cartId: `${activeCustomizingItem.id}-${Date.now()}`,
    id: activeCustomizingItem.id,
    name: activeCustomizingItem.name,
    image: activeCustomizingItem.image,
    price: activeCustomizingItem.price,
    quantity: 1,
    selectedPortion,
    selectedSpice,
    selectedAddOns,
    specialInstructions,
    unitTotal,
    lineTotal: unitTotal
  };

  const cart = getCartItems();
  cart.push(cartLineItem);
  saveCartItems(cart);

  showToastAlert(`Added ${activeCustomizingItem.name} to cart!`, "success");
  closeItemCustomizationModal();
  openCartDrawer();
}

// Cart Drawer Handlers
function openCartDrawer() {
  renderCartContents();
  document.getElementById('cart-drawer').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.add('hidden');
}

function updateCartNavbarBadges() {
  const cart = getCartItems();
  const totalQty = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.lineTotal, 0);

  const badgeCount = document.getElementById('cart-badge-count');
  const badgeTotal = document.getElementById('cart-badge-total');
  if (badgeCount) badgeCount.innerText = totalQty;
  if (badgeTotal) badgeTotal.innerText = `₹${totalPrice}`;
}

function renderCartContents() {
  const cart = getCartItems();
  const menu = getMenuData();
  const container = document.getElementById('cart-items-container');
  const alertBox = document.getElementById('cart-stock-alert');
  const placeBtn = document.getElementById('place-order-btn');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center space-y-3">
        <div class="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
          <i data-lucide="shopping-bag" class="w-7 h-7"></i>
        </div>
        <h4 class="font-heading font-extrabold text-base text-slate-800">Your Cart is Currently Empty</h4>
        <p class="text-xs text-slate-500 max-w-xs mx-auto">Explore canteen menu items to place your pre-order.</p>
      </div>
    `;
    document.getElementById('cart-subtotal-val').innerText = '₹0';
    document.getElementById('cart-tax-val').innerText = '₹0';
    document.getElementById('cart-total-val').innerText = '₹0';
    if (alertBox) alertBox.classList.add('hidden');
    if (placeBtn) placeBtn.disabled = true;
    if (window.lucide) lucide.createIcons();
    return;
  }

  let hasUnavailableItems = false;
  let unavailableNames = [];

  cart.forEach(item => {
    const menuItem = menu.find(m => m.id === item.id);
    if (!menuItem || !menuItem.isAvailable || menuItem.stockCount <= 0) {
      hasUnavailableItems = true;
      unavailableNames.push(item.name);
    }
  });

  if (hasUnavailableItems && alertBox) {
    alertBox.classList.remove('hidden');
    document.getElementById('cart-stock-alert-msg').innerHTML = `
      <p class="text-rose-800 mt-0.5">The following items were marked out-of-stock by kitchen staff: <strong>${unavailableNames.join(', ')}</strong>.</p>
      <button onclick="purgeUnavailableCartItems()" class="mt-2 bg-rose-600 hover:bg-rose-700 text-white font-bold px-3 py-1 rounded-lg text-[10px]">
        Remove Unavailable Items
      </button>
    `;
    if (placeBtn) placeBtn.disabled = true;
  } else {
    if (alertBox) alertBox.classList.add('hidden');
    if (placeBtn) placeBtn.disabled = false;
  }

  container.innerHTML = cart.map(item => {
    const menuItem = menu.find(m => m.id === item.id);
    const isItemOut = !menuItem || !menuItem.isAvailable || menuItem.stockCount <= 0;

    return `
      <div class="bg-slate-50 border ${isItemOut ? 'border-rose-300' : 'border-slate-200'} p-3.5 rounded-xl space-y-3 relative">
        <div class="flex gap-3">
          <img src="${item.image || 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150'}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover shrink-0 border border-slate-200">
          <div class="flex-1 space-y-1">
            <div class="flex items-start justify-between gap-2">
              <h4 class="font-heading font-extrabold text-sm text-slate-900">${item.name}</h4>
              <button onclick="removeCartLineItem('${item.cartId}')" class="text-slate-400 hover:text-rose-600 p-1">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

            <div class="text-[11px] text-slate-600 space-y-0.5">
              ${item.selectedPortion?.name ? `<div>• Portion: <span class="text-slate-900 font-medium">${item.selectedPortion.name}</span></div>` : ''}
              ${item.selectedSpice ? `<div>• Spice: <span class="text-orange-600 font-semibold">${item.selectedSpice}</span></div>` : ''}
              ${item.selectedAddOns?.length > 0 ? `<div>• Add-ons: <span class="text-slate-900 font-medium">${item.selectedAddOns.map(a => a.name).join(', ')}</span></div>` : ''}
              ${item.specialInstructions ? `<div class="text-slate-500 italic">Note: "${item.specialInstructions}"</div>` : ''}
            </div>

            ${isItemOut ? `<span class="inline-block text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Item Unavailable</span>` : ''}
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-slate-200">
          <div class="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-1">
            <button onclick="adjustCartQuantity('${item.cartId}', -1)" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs">-</button>
            <span class="text-xs font-bold text-slate-900 px-2">${item.quantity}</span>
            <button onclick="adjustCartQuantity('${item.cartId}', 1)" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs">+</button>
          </div>

          <div class="text-right">
            <span class="text-[10px] text-slate-400 block font-medium">Line Total</span>
            <span class="font-heading font-black text-sm text-orange-600">₹${item.lineTotal}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = cart.reduce((sum, i) => sum + i.lineTotal, 0);
  const tax = Math.round(subtotal * 0.05 * 100) / 100;
  const grandTotal = Math.round((subtotal + tax + 5) * 100) / 100;

  document.getElementById('cart-subtotal-val').innerText = `₹${subtotal}`;
  document.getElementById('cart-tax-val').innerText = `₹${tax}`;
  document.getElementById('cart-total-val').innerText = `₹${grandTotal}`;

  if (window.lucide) lucide.createIcons();
}

function adjustCartQuantity(cartId, delta) {
  let cart = getCartItems();
  const index = cart.findIndex(i => i.cartId === cartId);
  if (index === -1) return;

  const newQty = cart[index].quantity + delta;
  if (newQty < 1) cart.splice(index, 1);
  else if (newQty > 10) { showToastAlert("Maximum quantity limit is 10 items per line item", "warning"); return; }
  else {
    cart[index].quantity = newQty;
    cart[index].lineTotal = cart[index].unitTotal * newQty;
  }
  saveCartItems(cart);
  renderCartContents();
}

function removeCartLineItem(cartId) {
  let cart = getCartItems();
  cart = cart.filter(i => i.cartId !== cartId);
  saveCartItems(cart);
  renderCartContents();
  showToastAlert("Item removed from cart", "info");
}

function purgeUnavailableCartItems() {
  const menu = getMenuData();
  let cart = getCartItems();
  cart = cart.filter(item => {
    const menuItem = menu.find(m => m.id === item.id);
    return menuItem && menuItem.isAvailable && menuItem.stockCount > 0;
  });
  saveCartItems(cart);
  renderCartContents();
  showToastAlert("Removed unavailable items from cart", "info");
}

// Order Form Processing
function processOrderCheckoutForm(event) {
  event.preventDefault();
  const cart = getCartItems();
  if (cart.length === 0) { showToastAlert("Your cart is empty!", "danger"); return; }

  const name = document.getElementById('cust-name').value.trim();
  const rollNo = document.getElementById('cust-roll').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const slot = document.getElementById('cust-slot').value;

  if (!name || !rollNo || !phone || phone.length < 10) {
    showToastAlert("Please enter valid student details and a 10-digit phone number", "warning");
    return;
  }

  const btn = document.getElementById('place-order-btn');
  const btnText = document.getElementById('place-order-btn-text');
  btn.disabled = true;
  btnText.innerText = "Processing Order...";

  setTimeout(() => {
    const subtotal = cart.reduce((sum, i) => sum + i.lineTotal, 0);
    const tax = Math.round(subtotal * 0.05 * 100) / 100;
    const total = Math.round((subtotal + tax + 5) * 100) / 100;

    const newOrder = {
      orderId: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      tokenNumber: `NG-${Math.floor(100 + Math.random() * 900)}`,
      timestamp: Date.now(),
      customerInfo: { name, rollNo, phone, slot },
      items: cart,
      pricingSummary: { subtotal, tax, campusFee: 5, total },
      status: "Placed"
    };

    const menu = getMenuData();
    cart.forEach(c => {
      const item = menu.find(m => m.id === c.id);
      if (item) {
        item.stockCount = Math.max(0, item.stockCount - c.quantity);
        if (item.stockCount === 0) item.isAvailable = false;
      }
    });
    saveMenuData(menu);

    const orders = getOrdersData();
    orders.unshift(newOrder);
    saveOrdersData(orders);

    setActiveTrackingId(newOrder.orderId);
    saveCartItems([]);

    btn.disabled = false;
    btnText.innerText = "Instant Place Order";
    closeCartDrawer();

    if (window.confetti) confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    showToastAlert(`Order #${newOrder.orderId} Placed Successfully!`, "success");
    refreshStudentPortalView();
    scrollToOrderTrackerSection();
  }, 1000);
}

function updateActiveTrackerPill() {
  const activeId = getActiveTrackingId();
  const pill = document.getElementById('active-tracker-pill');
  const idSpan = document.getElementById('active-order-id-short');
  if (!pill) return;

  if (activeId) {
    pill.classList.remove('hidden');
    pill.classList.add('flex');
    if (idSpan) idSpan.innerText = activeId.replace('ORD-', '');
  } else {
    pill.classList.add('hidden');
    pill.classList.remove('flex');
  }
}

function scrollToOrderTrackerSection() {
  const trackerSec = document.getElementById('student-order-tracker-container');
  if (trackerSec) trackerSec.scrollIntoView({ behavior: 'smooth' });
}

function renderOrderTrackerStepper() {
  const activeId = getActiveTrackingId();
  const container = document.getElementById('student-order-tracker-container');
  if (!container) return;

  if (!activeId) {
    container.classList.add('hidden');
    container.innerHTML = '';
    return;
  }

  const orders = getOrdersData();
  const order = orders.find(o => o.orderId === activeId);

  if (!order) {
    container.classList.add('hidden');
    container.innerHTML = '';
    setActiveTrackingId(null);
    return;
  }

  container.classList.remove('hidden');
  const stages = [
    { key: 'Placed', label: 'Placed' },
    { key: 'Accepted', label: 'Accepted' },
    { key: 'Preparing', label: 'Preparing' },
    { key: 'Ready', label: 'Ready for Pickup' },
    { key: 'Completed', label: 'Completed' }
  ];
  const curIdx = stages.findIndex(s => s.key === order.status);

  container.innerHTML = `
    <div class="bg-white border-2 ${
      order.status === 'Ready' ? 'border-emerald-500 shadow-emerald-500/20' : 'border-orange-400'
    } rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-orange-100 border border-orange-200 text-orange-700 uppercase">⚡ LIVE EXPRESS TRACKER</span>
          <h3 class="font-heading text-2xl font-black text-slate-900 mt-1">Pickup Token: <span class="text-orange-600 font-mono text-3xl">#${order.tokenNumber}</span></h3>
          <p class="text-xs text-slate-500">Slot: ${order.customerInfo.slot} &bull; Name: ${order.customerInfo.name}</p>
        </div>
        <button onclick="dismissActiveOrderTracker()" class="text-xs text-orange-600 font-bold hover:underline">Dismiss Tracker</button>
      </div>

      <div class="grid grid-cols-5 gap-2">
        ${stages.map((stg, idx) => `
          <div class="flex flex-col items-center text-center space-y-1">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
              idx === curIdx ? 'bg-orange-500 text-white scale-110 shadow-md' : idx <= curIdx ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 border border-slate-200'
            }">
              ${idx <= curIdx ? '✓' : (idx + 1)}
            </div>
            <span class="text-[11px] font-bold ${idx === curIdx ? 'text-orange-600' : 'text-slate-500'}">${stg.label}</span>
          </div>
        `).join('')}
      </div>

      <div class="p-4 rounded-2xl border ${order.status === 'Ready' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-700'} flex justify-between items-center">
        <div>
          <h5 class="font-extrabold text-sm text-slate-900">Status: <span class="text-orange-600">${order.status}</span></h5>
          <p class="text-xs text-slate-500">${order.status === 'Ready' ? 'Your food is ready at Canteen Counter #2!' : 'Kitchen is processing your order.'}</p>
        </div>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

function dismissActiveOrderTracker() {
  setActiveTrackingId(null);
  renderOrderTrackerStepper();
  updateActiveTrackerPill();
}
