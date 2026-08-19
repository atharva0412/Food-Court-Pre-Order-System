/**
 * Northgate College Food Court Pre-Order System
 * PAGE 2: FOOD COURT STAFF / KITCHEN DISPLAY SYSTEM (KDS) JAVASCRIPT LOGIC
 * Includes Kitchen Staff Authentication System (ID & Password Protection)
 * Credentials: ID: kithen@ngce | Password: canteenexpress
 */

let activeStaffTabFilter = 'All';

// Staff Authentication System
function isStaffAuthenticated() {
  return localStorage.getItem('foodcourt_staff_auth') === 'true';
}

function setStaffAuthenticated(status) {
  if (status) localStorage.setItem('foodcourt_staff_auth', 'true');
  else localStorage.removeItem('foodcourt_staff_auth');
  updateStaffAuthNavbarUI();
}

function openStaffLoginModal() {
  const modal = document.getElementById('staff-login-modal');
  const alertBox = document.getElementById('staff-login-alert');
  if (modal) {
    if (alertBox) alertBox.classList.add('hidden');
    document.getElementById('staff-login-id').value = '';
    document.getElementById('staff-login-pass').value = '';
    modal.classList.remove('hidden');
  }
}

function closeStaffLoginModal() {
  const modal = document.getElementById('staff-login-modal');
  if (modal) modal.classList.add('hidden');
}

function processStaffLoginForm(event) {
  event.preventDefault();
  const inputId = document.getElementById('staff-login-id').value.trim();
  const inputPass = document.getElementById('staff-login-pass').value.trim();
  const alertBox = document.getElementById('staff-login-alert');
  const alertMsg = document.getElementById('staff-login-alert-msg');

  // Validate exact user credentials requested: ID: kithen@ngce | Password: canteenexpress
  if (inputId === 'kithen@ngce' && inputPass === 'canteenexpress') {
    setStaffAuthenticated(true);
    closeStaffLoginModal();
    showToastAlert("Kitchen Staff Authenticated Successfully! Welcome Chef.", "success");
    
    // Switch to Kitchen KDS view
    toggleActivePage('staff', true);
  } else {
    if (alertBox && alertMsg) {
      alertBox.classList.remove('hidden');
      alertMsg.innerText = "Invalid Kitchen Staff ID or Password! Please try again.";
    }
    showToastAlert("Invalid Kitchen Credentials!", "danger");
  }
}

function logoutKitchenStaff() {
  setStaffAuthenticated(false);
  showToastAlert("Kitchen Staff Logged Out Successfully.", "info");
  toggleActivePage('student', true);
}

function updateStaffAuthNavbarUI() {
  const logoutBtn = document.getElementById('staff-logout-nav-btn');
  if (logoutBtn) {
    if (isStaffAuthenticated()) {
      logoutBtn.classList.remove('hidden');
      logoutBtn.classList.add('flex');
    } else {
      logoutBtn.classList.add('hidden');
      logoutBtn.classList.remove('flex');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateStaffAuthNavbarUI();
  renderKitchenDisplaySystem();

  window.addEventListener('storage', renderKitchenDisplaySystem);
  window.addEventListener('foodcourt_sync', renderKitchenDisplaySystem);

  if (window.lucide) lucide.createIcons();
});

function selectStaffTabFilter(status) {
  activeStaffTabFilter = status;
  document.querySelectorAll('.kds-tab-btn').forEach(btn => {
    btn.className = "kds-tab-btn px-4 py-2 rounded-xl text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200 transition-all";
  });

  const activeBtn = document.getElementById(`kds-tab-${status}`);
  if (activeBtn) {
    activeBtn.className = "kds-tab-btn px-4 py-2 rounded-xl text-xs font-extrabold bg-orange-500 text-white shadow-sm transition-all";
  }

  renderKitchenDisplaySystem();
}

function renderKitchenDisplaySystem() {
  const orders = getOrdersData();
  const container = document.getElementById('kds-orders-grid');
  if (!container) return;

  const totalCount = orders.length;
  const pendingCount = orders.filter(o => o.status === 'Placed').length;
  const preparingCount = orders.filter(o => o.status === 'Preparing' || o.status === 'Accepted').length;
  const readyCount = orders.filter(o => o.status === 'Ready').length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.pricingSummary?.total || 0), 0);

  document.getElementById('kds-stat-total').innerText = totalCount;
  document.getElementById('kds-stat-pending').innerText = pendingCount;
  document.getElementById('kds-stat-preparing').innerText = preparingCount;
  document.getElementById('kds-stat-ready').innerText = readyCount;
  document.getElementById('kds-stat-revenue').innerText = `₹${Math.round(totalRevenue)}`;

  document.getElementById('kds-cnt-placed').innerText = pendingCount;
  document.getElementById('kds-cnt-preparing').innerText = preparingCount;
  document.getElementById('kds-cnt-ready').innerText = readyCount;

  let filtered = orders;
  if (activeStaffTabFilter !== 'All') {
    if (activeStaffTabFilter === 'Preparing') {
      filtered = orders.filter(o => o.status === 'Preparing' || o.status === 'Accepted');
    } else {
      filtered = orders.filter(o => o.status === activeStaffTabFilter);
    }
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center space-y-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
          <i data-lucide="inbox" class="w-6 h-6"></i>
        </div>
        <h4 class="font-heading text-lg font-bold text-slate-800">No Orders in ${activeStaffTabFilter} Queue</h4>
        <p class="text-xs text-slate-500">Incoming student pre-orders will appear here automatically.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(order => {
    const elapsedMinutes = Math.max(1, Math.floor((Date.now() - order.timestamp) / (1000 * 60)));

    let statusStyle = 'bg-slate-100 text-slate-700';
    if (order.status === 'Placed') statusStyle = 'bg-orange-100 text-orange-700 border border-orange-200 animate-pulse';
    else if (order.status === 'Accepted' || order.status === 'Preparing') statusStyle = 'bg-sky-100 text-sky-700 border border-sky-200';
    else if (order.status === 'Ready') statusStyle = 'bg-emerald-100 text-emerald-700 border border-emerald-200';
    else if (order.status === 'Completed') statusStyle = 'bg-slate-100 text-slate-500';

    return `
      <div class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono text-xl font-black text-orange-600">#${order.tokenNumber}</span>
                <span class="text-xs font-bold px-2 py-0.5 rounded-full ${statusStyle}">${order.status}</span>
              </div>
              <p class="text-xs text-slate-500 font-medium mt-0.5">ID: ${order.orderId} &bull; ${elapsedMinutes} mins ago</p>
            </div>
            
            <div class="text-right">
              <span class="text-[10px] text-slate-400 block font-medium">Pickup Slot</span>
              <span class="text-xs font-bold text-slate-800 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200 block mt-0.5">${order.customerInfo.slot}</span>
            </div>
          </div>

          <div class="text-xs bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
            <div class="flex justify-between">
              <span class="text-slate-500">Student:</span>
              <span class="font-bold text-slate-900">${order.customerInfo.name}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Roll / Phone:</span>
              <span class="font-medium text-slate-700">${order.customerInfo.rollNo} &bull; ${order.customerInfo.phone}</span>
            </div>
          </div>

          <div class="space-y-2">
            <h5 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Ordered Items</h5>
            <div class="space-y-2 max-h-48 overflow-y-auto pr-1">
              ${order.items.map(item => `
                <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs space-y-1">
                  <div class="flex justify-between font-bold text-slate-900">
                    <span>${item.name} <span class="text-orange-600 font-black">x${item.quantity}</span></span>
                    <span>₹${item.lineTotal}</span>
                  </div>
                  
                  <div class="text-[11px] text-slate-500 space-y-0.5">
                    ${item.selectedPortion?.name ? `<div>Portion: <span class="text-slate-800">${item.selectedPortion.name}</span></div>` : ''}
                    ${item.selectedSpice ? `<div>Spice: <span class="text-orange-600 font-semibold">${item.selectedSpice}</span></div>` : ''}
                    ${item.selectedAddOns?.length > 0 ? `<div>Add-ons: <span class="text-slate-800">${item.selectedAddOns.map(a => a.name).join(', ')}</span></div>` : ''}
                    ${item.specialInstructions ? `
                      <div class="text-orange-800 font-semibold bg-orange-50 px-2 py-0.5 rounded border border-orange-200 mt-1">
                        ⚠️ Note: "${item.specialInstructions}"
                      </div>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 space-y-2">
          ${order.status === 'Placed' ? `
            <button onclick="advanceOrderStatusStage('${order.orderId}', 'Accepted')" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs shadow-sm">
              Accept Order ✓
            </button>
          ` : order.status === 'Accepted' ? `
            <button onclick="advanceOrderStatusStage('${order.orderId}', 'Preparing')" class="w-full bg-sky-500 hover:bg-sky-600 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs shadow-sm">
              Start Preparation 🔥
            </button>
          ` : order.status === 'Preparing' ? `
            <button onclick="advanceOrderStatusStage('${order.orderId}', 'Ready')" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs shadow-sm">
              Mark Ready for Pickup 🔔
            </button>
          ` : order.status === 'Ready' ? `
            <button onclick="advanceOrderStatusStage('${order.orderId}', 'Completed')" class="w-full bg-slate-800 hover:bg-slate-900 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs">
              Complete & Handover ✅
            </button>
          ` : `
            <div class="text-center py-1 text-xs font-bold text-slate-400">Order Completed</div>
          `}
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function advanceOrderStatusStage(orderId, nextStatus) {
  const orders = getOrdersData();
  const order = orders.find(o => o.orderId === orderId);
  if (!order) return;

  order.status = nextStatus;
  saveOrdersData(orders);
  showToastAlert(`Order #${orderId} marked as ${nextStatus}`, "success");
  renderKitchenDisplaySystem();
}

function openInventoryModal() {
  renderInventoryManagementList();
  document.getElementById('inventory-modal').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeInventoryModal() {
  document.getElementById('inventory-modal').classList.add('hidden');
}

function renderInventoryManagementList() {
  const menu = getMenuData();
  const searchTerm = document.getElementById('inventory-search')?.value.toLowerCase().trim() || '';
  const container = document.getElementById('inventory-items-container');
  if (!container) return;

  const filtered = menu.filter(i => !searchTerm || i.name.toLowerCase().includes(searchTerm) || i.category.toLowerCase().includes(searchTerm));

  container.innerHTML = filtered.map(item => `
    <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover border border-slate-200">
        <div>
          <h4 class="font-heading font-extrabold text-sm text-slate-900">${item.name}</h4>
          <p class="text-xs text-slate-500">${item.category} &bull; ₹${item.price}</p>
        </div>
      </div>

      <div class="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-slate-200 pt-2 sm:pt-0">
        <div class="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-1">
          <button onclick="adjustItemStockCount('${item.id}', -1)" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs">-</button>
          <span class="text-xs font-bold text-slate-900 px-2">${item.stockCount}</span>
          <button onclick="adjustItemStockCount('${item.id}', 1)" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs">+</button>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold ${item.isAvailable && item.stockCount > 0 ? 'text-emerald-600' : 'text-rose-600'}">
            ${item.isAvailable && item.stockCount > 0 ? 'Available' : 'Out of Stock'}
          </span>
          <label class="switch">
            <input type="checkbox" ${item.isAvailable && item.stockCount > 0 ? 'checked' : ''} onchange="toggleItemStockAvailability('${item.id}', this.checked)">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  `).join('');
}

function adjustItemStockCount(itemId, delta) {
  const menu = getMenuData();
  const item = menu.find(i => i.id === itemId);
  if (!item) return;

  item.stockCount = Math.max(0, item.stockCount + delta);
  if (item.stockCount > 0) item.isAvailable = true;
  else item.isAvailable = false;

  saveMenuData(menu);
  renderInventoryManagementList();
}

function toggleItemStockAvailability(itemId, isChecked) {
  const menu = getMenuData();
  const item = menu.find(i => i.id === itemId);
  if (!item) return;

  item.isAvailable = isChecked;
  if (isChecked && item.stockCount === 0) item.stockCount = 10;
  saveMenuData(menu);
  renderInventoryManagementList();
}
