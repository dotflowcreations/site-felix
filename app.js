/**
 * Felix Chemical Supply — Official Application Logic
 * Only carries initially provided information. No external copied content.
 */

const CONFIG = {
  COMPANY_NAME: "Felix Chemical Supply",
  PHONE: "+1 209 271 8485",
  PHONE_CLEAN: "+12092718485",
  WHATSAPP_URL: "https://wa.me/12092718485",
  TELEGRAM_URL: "https://t.me/felixchemicalsupply",
  PAYMENT_ADDRESS: "0xfAc5677671a5479C8b7ec06d32dE81120431C50e",
  PAYMENT_CURRENCIES: "USDT / USDC",
  PAYMENT_NETWORK: "ETH (ERC20)"
};

// The 31 research materials initially provided
const products = [
  {
    id: "reta-30",
    name: "Reta 30mg",
    category: "Peptides",
    quantity: "30mg",
    status: "Available",
    description: "High-purity research peptide for laboratory assays.",
    batch: "FLX-2026-01"
  },
  {
    id: "tirz-30",
    name: "Tirz 30mg",
    category: "Peptides",
    quantity: "30mg",
    status: "Available",
    description: "Synthetic peptide material for in-vitro research.",
    batch: "FLX-2026-02"
  },
  {
    id: "epitalon-50",
    name: "Epitalon 50mg",
    category: "Peptides",
    quantity: "50mg",
    status: "Available",
    description: "Synthetic tetrapeptide reference compound.",
    batch: "FLX-2026-03"
  },
  {
    id: "retatrutide-20",
    name: "Retatrutide 20mg",
    category: "Peptides",
    quantity: "20mg",
    status: "Available",
    description: "Multi-agonist research peptide compound.",
    batch: "FLX-2026-04"
  },
  {
    id: "tb4-bpc-combo",
    name: "TB4 / BPC 10MG / 10MG",
    category: "Blends",
    quantity: "10mg / 10mg",
    status: "Available",
    description: "Dual-constituent peptide laboratory research blend.",
    batch: "FLX-2026-05"
  },
  {
    id: "tesamorelin-20",
    name: "Tesamorelin 20MG",
    category: "Peptides",
    quantity: "20mg",
    status: "Available",
    description: "Stabilized research peptide for analytical investigation.",
    batch: "FLX-2026-06"
  },
  {
    id: "retatrutide-10",
    name: "Retatrutide 10MG",
    category: "Peptides",
    quantity: "10mg",
    status: "Available",
    description: "Research peptide reference compound.",
    batch: "FLX-2026-07"
  },
  {
    id: "ghk-cu-100",
    name: "GHK-Cu 100mg",
    category: "Biological Regulators",
    quantity: "100mg",
    status: "Available",
    description: "Copper peptide complex for biochemical assays.",
    batch: "FLX-2026-08"
  },
  {
    id: "tirzepatide-10",
    name: "Tirzepatide 10mg",
    category: "Peptides",
    quantity: "10mg",
    status: "Available",
    description: "Dual incretin receptor agonist research compound.",
    batch: "FLX-2026-09"
  },
  {
    id: "klow",
    name: "KLOW",
    category: "Research Materials",
    quantity: "Standard Unit",
    status: "Available",
    description: "Specialized research reference compound.",
    batch: "FLX-2026-10"
  },
  {
    id: "cartalax-tb4-bpc",
    name: "Cartalax / TB4 / BPC-157 10mg/5mg/5mg",
    category: "Blends",
    quantity: "10mg / 5mg / 5mg",
    status: "Available",
    description: "Triple research blend formulation for laboratory studies.",
    batch: "FLX-2026-11"
  },
  {
    id: "ghk-cu-kpv",
    name: "GHK-Cu / KPV 50mg/20mg",
    category: "Blends",
    quantity: "50mg / 20mg",
    status: "Available",
    description: "Combined peptide formulation for scientific testing.",
    batch: "FLX-2026-12"
  },
  {
    id: "cjc-ipamorelin",
    name: "CJC-1295 no DAC / Ipamorelin 10mg/10mg",
    category: "Blends",
    quantity: "10mg / 10mg",
    status: "Available",
    description: "Synergistic research peptide blend.",
    batch: "FLX-2026-13"
  },
  {
    id: "thymosin-alpha-1",
    name: "Thymosin Alpha-1 10mg",
    category: "Biological Regulators",
    quantity: "10mg",
    status: "Available",
    description: "Immune-modulating research peptide compound.",
    batch: "FLX-2026-14"
  },
  {
    id: "kpv-30",
    name: "KPV 30mg",
    category: "Peptides",
    quantity: "30mg",
    status: "Available",
    description: "Tripeptide fragment for research exploration.",
    batch: "FLX-2026-15"
  },
  {
    id: "tb4-10",
    name: "TB4 10MG",
    category: "Peptides",
    quantity: "10mg",
    status: "Available",
    description: "Thymosin Beta-4 synthetic research peptide.",
    batch: "FLX-2026-16"
  },
  {
    id: "retatrutide-40",
    name: "Retatrutide 40MG",
    category: "Peptides",
    quantity: "40mg",
    status: "Available",
    description: "High-concentration research peptide material.",
    batch: "FLX-2026-17"
  },
  {
    id: "bpc-157-10",
    name: "BPC-157 10MG",
    category: "Peptides",
    quantity: "10mg",
    status: "Available",
    description: "Pentadecapeptide reference material.",
    batch: "FLX-2026-18"
  },
  {
    id: "tesamorelin-10",
    name: "Tesamorelin 10MG",
    category: "Peptides",
    quantity: "10mg",
    status: "Available",
    description: "Synthetic peptide for analytical investigation.",
    batch: "FLX-2026-19"
  },
  {
    id: "nad-500",
    name: "NAD 500mg",
    category: "Biological Regulators",
    quantity: "500mg",
    status: "Available",
    description: "Nicotinamide adenine dinucleotide research compound.",
    batch: "FLX-2026-20"
  },
  {
    id: "bac-10",
    name: "BAC 10ml",
    category: "Solutions",
    quantity: "10ml",
    status: "Available",
    description: "Bacteriostatic reconstitution solution for laboratory use.",
    batch: "FLX-2026-21"
  },
  {
    id: "ghk-cu-raws",
    name: "GHK-CU raws 10g/bottle",
    category: "Raw Materials",
    quantity: "10g bottle",
    status: "Available",
    description: "High-grade pure powder format for laboratory synthesis.",
    batch: "FLX-2026-22"
  },
  {
    id: "ahk-cu-raws",
    name: "AHK-CU raws 10g/bottle",
    category: "Raw Materials",
    quantity: "10g bottle",
    status: "Available",
    description: "High-grade pure powder format for laboratory synthesis.",
    batch: "FLX-2026-23"
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2 10MG",
    category: "Peptides",
    quantity: "10mg",
    status: "Available",
    description: "Cyclic peptide reference material for laboratory assays.",
    batch: "FLX-2026-24"
  },
  {
    id: "tirzepatide-60",
    name: "Tirzepatide 60MG",
    category: "Peptides",
    quantity: "60mg",
    status: "Available",
    description: "High-potency research peptide material.",
    batch: "FLX-2026-25"
  },
  {
    id: "illumineuro",
    name: "ILLUMINEURO",
    category: "Research Materials",
    quantity: "Standard Unit",
    status: "Available",
    description: "Specialized research formulation for analytical assessment.",
    batch: "FLX-2026-26"
  },
  {
    id: "5-amino-1mq",
    name: "5-AMINO-1MQ 50MG",
    category: "Research Materials",
    quantity: "50mg",
    status: "Available",
    description: "Small molecule NNMT research material.",
    batch: "FLX-2026-27"
  },
  {
    id: "pt-141-10",
    name: "PT-141 10MG",
    category: "Peptides",
    quantity: "10mg",
    status: "Available",
    description: "Synthetic peptide analog for laboratory exploration.",
    batch: "FLX-2026-28"
  },
  {
    id: "retatrutide-30",
    name: "Retatrutide 30MG",
    category: "Peptides",
    quantity: "30mg",
    status: "Available",
    description: "Triple-agonist research peptide compound.",
    batch: "FLX-2026-29"
  },
  {
    id: "bam15-slu",
    name: "BAM15 / SLU blend",
    category: "Blends",
    quantity: "Standard Blend",
    status: "Available",
    description: "Mitochondrial uncoupling research blend.",
    batch: "FLX-2026-30"
  },
  {
    id: "survodutide-10",
    name: "Survodutide 10mg",
    category: "Peptides",
    quantity: "10mg",
    status: "Available",
    description: "Glucagon/GLP-1 receptor dual-agonist research compound.",
    batch: "FLX-2026-31"
  }
];

// App State
let currentCategory = "All";
let searchQuery = "";
let sortBy = "name-asc";

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  populateOrderFormProducts();
  setupEventListeners();
  setupScrollProgress();
});

// Setup Scroll Progress
function setupScrollProgress() {
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressEl = document.getElementById("scrollProgress");
    if (progressEl) {
      progressEl.style.width = scrolled + "%";
    }
  });
}

// Render the Product Catalog
function renderCatalog() {
  const grid = document.getElementById("productGrid");
  const countEl = document.getElementById("productCount");
  if (!grid) return;

  // Filter products
  let filtered = products.filter(p => {
    const matchCat = currentCategory === "All" || p.category === currentCategory;
    const matchSearch = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.quantity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.batch.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Sort
  if (sortBy === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "category") {
    filtered.sort((a, b) => a.category.localeCompare(b.category));
  }

  // Update count
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${products.length} Research Materials`;
  }

  // Empty state
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-catalog">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="font-size:1.2rem;margin-bottom:6px;color:var(--fx-navy);">No research materials found</h3>
        <p style="color:var(--fx-text-sub);font-size:0.9rem;">Try adjusting your search terms or filter selection.</p>
        <button class="btn-cta-secondary" onclick="resetFilters()" style="margin-top:14px;">Reset Filters</button>
      </div>
    `;
    return;
  }

  // Cards render (Strictly No Vials, clean chemical/helix SVG emblem)
  grid.innerHTML = filtered.map(p => {
    const waText = encodeURIComponent(`Hello Felix Chemical Supply, I would like to inquire about ordering: ${p.name} (${p.quantity}, Batch: ${p.batch}).`);
    const waLink = `https://wa.me/12092718485?text=${waText}`;

    return `
      <article class="product-card" id="card-${p.id}">
        <div>
          <div class="card-top">
            <div class="card-emblem" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 2v4"></path>
                <path d="M12 18v4"></path>
                <path d="M4.93 4.93l2.83 2.83"></path>
                <path d="M16.24 16.24l2.83 2.83"></path>
                <path d="M2 12h4"></path>
                <path d="M18 12h4"></path>
                <path d="M4.93 19.07l2.83-2.83"></path>
                <path d="M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <div class="card-tags">
              <span class="tag-category">${p.category}</span>
              <span class="tag-status-available">Available</span>
            </div>
          </div>

          <h3 class="product-name">${p.name}</h3>
          <span class="product-quantity">${p.quantity}</span>
          <p class="product-desc">${p.description}</p>
        </div>

        <div>
          <div class="product-meta-row">
            <span>Batch Reference:</span>
            <span class="batch-code">${p.batch}</span>
          </div>

          <div class="card-actions">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-card-order" title="Order ${p.name} via WhatsApp">
              <span>WhatsApp Order</span>
            </a>
            <button type="button" class="btn-card-inquire" onclick="selectProductForOrder('${p.id}')">
              Select for Form
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Populate Product dropdown in Order Form
function populateOrderFormProducts() {
  const select = document.getElementById("orderProductSelect");
  if (!select) return;

  select.innerHTML = `<option value="">-- Choose a research material --</option>` +
    products.map(p => `<option value="${p.name}">${p.name} (${p.category})</option>`).join("");
}

// Setup Event Listeners
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById("catalogSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderCatalog();
    });
  }

  // Sort select
  const sortSelect = document.getElementById("catalogSort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Category Pills
  const pills = document.querySelectorAll(".filter-pill-btn");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-category");
      renderCatalog();
    });
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobileMenuToggle");
  const nav = document.getElementById("siteNav");
  if (mobileBtn && nav) {
    mobileBtn.addEventListener("click", () => {
      if (nav.style.display === "flex") {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "100%";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "#ffffff";
        nav.style.padding = "20px";
        nav.style.boxShadow = "0 8px 20px rgba(17,46,81,0.12)";
      }
    });
  }

  // Order form submission
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", handleOrderSubmit);
  }
}

// Handle Order Form Submit
function handleOrderSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("orderName")?.value.trim() || "";
  const phone = document.getElementById("orderPhone")?.value.trim() || "";
  const product = document.getElementById("orderProductSelect")?.value || "";
  const quantity = document.getElementById("orderQuantity")?.value.trim() || "";
  const address = document.getElementById("orderAddress")?.value.trim() || "";
  const crypto = document.getElementById("orderCrypto")?.value || "USDT (ERC20)";
  const txid = document.getElementById("orderTxid")?.value.trim() || "Pending";
  const notes = document.getElementById("orderNotes")?.value.trim() || "";

  if (!product) {
    showToast("Please choose a research material from the list.", "warning");
    return;
  }

  const messageText = `*NEW RESEARCH ORDER INQUIRY*\n` +
    `--------------------------------\n` +
    `Company: Felix Chemical Supply\n` +
    `Client / Lab: ${name || "Not provided"}\n` +
    `Phone: ${phone || "Not provided"}\n` +
    `Product: ${product}\n` +
    `Quantity: ${quantity || "1 Unit"}\n` +
    `Shipping Address: ${address || "Will provide in chat"}\n` +
    `Payment Method: ${crypto}\n` +
    `Deposit Address: ${CONFIG.PAYMENT_ADDRESS}\n` +
    (txid && txid !== "Pending" ? `TXID: ${txid}\n` : "") +
    (notes ? `Notes: ${notes}\n` : "") +
    `--------------------------------`;

  const waUrl = `https://wa.me/${CONFIG.PHONE_CLEAN}?text=${encodeURIComponent(messageText)}`;
  window.open(waUrl, "_blank");
  showToast("Order inquiry prepared! Opening WhatsApp...", "success");
}

// Select Product from Card into Order Form
function selectProductForOrder(productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const select = document.getElementById("orderProductSelect");
  if (select) {
    select.value = p.name;
  }

  const orderSection = document.getElementById("order");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" });
  }

  showToast(`Selected ${p.name} in order form below`, "success");
}

// Copy Payment Crypto Address
function copyPaymentAddress() {
  const address = CONFIG.PAYMENT_ADDRESS;
  navigator.clipboard.writeText(address).then(() => {
    const btn = document.getElementById("copyAddressBtn");
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
      btn.style.backgroundColor = "var(--fx-success)";
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = "";
      }, 2500);
    }
    showToast("ETH (ERC20) address copied to clipboard!", "success");
  }).catch(() => {
    showToast("Could not copy address automatically.", "warning");
  });
}

// Reset Filters
function resetFilters() {
  searchQuery = "";
  currentCategory = "All";
  sortBy = "name-asc";

  const searchInput = document.getElementById("catalogSearch");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("catalogSort");
  if (sortSelect) sortSelect.value = "name-asc";

  const pills = document.querySelectorAll(".filter-pill-btn");
  pills.forEach(p => {
    if (p.getAttribute("data-category") === "All") {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  renderCatalog();
}

// Toast System
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" style="color:#ffffff;font-size:16px;margin-left:8px;">&times;</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// Expose globals for inline onclicks
window.copyPaymentAddress = copyPaymentAddress;
window.selectProductForOrder = selectProductForOrder;
window.resetFilters = resetFilters;
