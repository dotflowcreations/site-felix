// ==========================================================================
// FELIX WEBSITE CONFIGURATION
// Non-developers can easily update these values as needed
// ==========================================================================
const CONFIG = {
  COMPANY_NAME: "Felix Chemical Supply",
  PHONE: "+1 209 271 8485",
  PHONE_CLEAN: "+12092718485",
  TELEGRAM_URL: "https://t.me/felixchemicalsupply",
  WHATSAPP_URL: "https://wa.me/12092718485",
  FORM_ENDPOINT: "", // When empty, displays instruction message to connect endpoint
  PAYMENT_ADDRESS: "0xfAc5677671a5479C8b7ec06d32dE81120431C50e",
  PAYMENT_CURRENCIES: "USDT / USDC",
  PAYMENT_NETWORK: "ETH (ERC20)",
  HERO_IMAGE: "assets/felix-hero.svg"
};

// ==========================================================================
// PRODUCT DATA ARCHITECTURE
// Supplied product catalog with accurate neutral research descriptions
// ==========================================================================
const products = [
  {
    id: "reta-30",
    name: "Reta 30mg",
    category: "Peptides",
    quantity: "30mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-01",
    featured: true
  },
  {
    id: "tirz-30",
    name: "Tirz 30mg",
    category: "Peptides",
    quantity: "30mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-02",
    featured: true
  },
  {
    id: "epitalon-50",
    name: "Epitalon 50mg",
    category: "Peptides",
    quantity: "50mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-03",
    featured: true
  },
  {
    id: "retatrutide-20",
    name: "Retatrutide 20mg",
    category: "Peptides",
    quantity: "20mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-04",
    featured: false
  },
  {
    id: "tb4-bpc-combo",
    name: "TB4 / BPC 10MG / 10MG",
    category: "Blends",
    quantity: "10mg / 10mg",
    price: null,
    status: "Available",
    description: "Dual-constituent research blend. Verify applicable regulations.",
    batch: "FLX-2026-05",
    featured: false
  },
  {
    id: "tesamorelin-20",
    name: "Tesamorelin 20MG",
    category: "Peptides",
    quantity: "20mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-06",
    featured: true
  },
  {
    id: "retatrutide-10",
    name: "Retatrutide 10MG",
    category: "Peptides",
    quantity: "10mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-07",
    featured: false
  },
  {
    id: "ghk-cu-100",
    name: "GHK-Cu 100mg",
    category: "Biological Regulators",
    quantity: "100mg",
    price: null,
    status: "Available",
    description: "Copper peptide compound for research exploration.",
    batch: "FLX-2026-08",
    featured: true
  },
  {
    id: "tirzepatide-10",
    name: "Tirzepatide 10mg",
    category: "Peptides",
    quantity: "10mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-09",
    featured: false
  },
  {
    id: "klow",
    name: "KLOW",
    category: "Research Materials",
    quantity: "Standard Unit",
    price: null,
    status: "Available",
    description: "Specialty compound for laboratory analytical use.",
    batch: "FLX-2026-10",
    featured: false
  },
  {
    id: "cartalax-tb4-bpc",
    name: "Cartalax / TB4 / BPC-157 10mg/5mg/5mg",
    category: "Blends",
    quantity: "10mg / 5mg / 5mg",
    price: null,
    status: "Available",
    description: "Triple research blend formulation. Verify applicable regulations.",
    batch: "FLX-2026-11",
    featured: false
  },
  {
    id: "ghk-cu-kpv",
    name: "GHK-Cu / KPV 50mg/20mg",
    category: "Blends",
    quantity: "50mg / 20mg",
    price: null,
    status: "Available",
    description: "Combined bio-regulator formulation for laboratory investigation.",
    batch: "FLX-2026-12",
    featured: false
  },
  {
    id: "cjc-ipamorelin",
    name: "CJC-1295 no DAC / Ipamorelin 10mg/10mg",
    category: "Blends",
    quantity: "10mg / 10mg",
    price: null,
    status: "Available",
    description: "Dual peptide research blend. Verify applicable regulations.",
    batch: "FLX-2026-13",
    featured: false
  },
  {
    id: "thymosin-alpha-1",
    name: "Thymosin Alpha-1 10mg",
    category: "Biological Regulators",
    quantity: "10mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-14",
    featured: false
  },
  {
    id: "kpv-30",
    name: "KPV 30mg",
    category: "Peptides",
    quantity: "30mg",
    price: null,
    status: "Available",
    description: "Research peptide material. Verify applicable regulations.",
    batch: "FLX-2026-15",
    featured: false
  },
  {
    id: "tb4-10",
    name: "TB4 10MG",
    category: "Peptides",
    quantity: "10mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-16",
    featured: false
  },
  {
    id: "retatrutide-40",
    name: "Retatrutide 40MG",
    category: "Peptides",
    quantity: "40mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-17",
    featured: false
  },
  {
    id: "bpc-157-10",
    name: "BPC-157 10MG",
    category: "Peptides",
    quantity: "10mg",
    price: null,
    status: "Available",
    description: "Synthesized research peptide. Verify applicable regulations.",
    batch: "FLX-2026-18",
    featured: true
  },
  {
    id: "tesamorelin-10",
    name: "Tesamorelin 10MG",
    category: "Peptides",
    quantity: "10mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-19",
    featured: false
  },
  {
    id: "nad-500",
    name: "NAD 500mg",
    category: "Biological Regulators",
    quantity: "500mg",
    price: null,
    status: "Available",
    description: "Nicotinamide adenine dinucleotide research compound.",
    batch: "FLX-2026-20",
    featured: true
  },
  {
    id: "bac-10",
    name: "BAC 10ml",
    category: "Research Materials",
    quantity: "10ml",
    price: null,
    status: "Available",
    description: "Bacteriostatic reconstitution solution for laboratory research.",
    batch: "FLX-2026-21",
    featured: false
  },
  {
    id: "ghk-cu-raws",
    name: "GHK-CU raws 10g/bottle",
    category: "Raw Materials",
    quantity: "10g bottle",
    price: null,
    status: "Available",
    description: "High-grade pure powder format for laboratory synthesis.",
    batch: "FLX-2026-22",
    featured: false
  },
  {
    id: "ahk-cu-raws",
    name: "AHK-CU raws 10g/bottle",
    category: "Raw Materials",
    quantity: "10g bottle",
    price: null,
    status: "Available",
    description: "High-grade pure powder format for laboratory investigation.",
    batch: "FLX-2026-23",
    featured: false
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2 10MG",
    category: "Peptides",
    quantity: "10mg",
    price: null,
    status: "Available",
    description: "Research peptide material. Verify applicable regulations.",
    batch: "FLX-2026-24",
    featured: false
  },
  {
    id: "tirzepatide-60",
    name: "Tirzepatide 60MG",
    category: "Peptides",
    quantity: "60mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-25",
    featured: false
  },
  {
    id: "illumineuro",
    name: "ILLUMINEURO",
    category: "Research Materials",
    quantity: "Standard Unit",
    price: null,
    status: "Available",
    description: "Specialized research formulation for analytical assessment.",
    batch: "FLX-2026-26",
    featured: false
  },
  {
    id: "5-amino-1mq",
    name: "5-AMINO-1MQ 50MG",
    category: "Research Materials",
    quantity: "50mg",
    price: null,
    status: "Available",
    description: "Small molecule research material for laboratory assays.",
    batch: "FLX-2026-27",
    featured: false
  },
  {
    id: "pt-141-10",
    name: "PT-141 10MG",
    category: "Peptides",
    quantity: "10mg",
    price: null,
    status: "Available",
    description: "Synthetic peptide analog for laboratory research use.",
    batch: "FLX-2026-28",
    featured: false
  },
  {
    id: "retatrutide-30",
    name: "Retatrutide 30MG",
    category: "Peptides",
    quantity: "30mg",
    price: null,
    status: "Available",
    description: "Research material. Verify applicable regulations.",
    batch: "FLX-2026-29",
    featured: false
  },
  {
    id: "bam15-slu",
    name: "BAM15 / SLU blend",
    category: "Blends",
    quantity: "Standard Blend",
    price: null,
    status: "Available",
    description: "Metabolic research blend. Verify applicable regulations.",
    batch: "FLX-2026-30",
    featured: false
  },
  {
    id: "survodutide-10",
    name: "Survodutide 10mg",
    category: "Peptides",
    quantity: "10mg",
    price: null,
    status: "Available",
    description: "Dual glucagon/GLP-1 receptor research compound.",
    batch: "FLX-2026-31",
    featured: false
  }
];

// App State
let currentFilter = "All";
let currentSearch = "";
let currentSort = "name-asc";
let activeProductModal = null;

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  renderFeatured();
  setupCatalogControls();
  setupAccordions();
  setupNav();
  setupInquiryForm();
  setupScrollEffects();
  populateProductSelect();
});

// Toast System
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" style="color:#94a3b8;font-size:16px;">&times;</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3800);
}

// ==========================================================================
// CATALOG RENDERING & FILTERING
// ==========================================================================
function renderCatalog() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  // Filter products
  let filtered = products.filter(p => {
    const matchesFilter = currentFilter === "All" || p.category === currentFilter;
    const matchesSearch = !currentSearch || 
      p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      p.quantity.toLowerCase().includes(currentSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Sort products
  if (currentSort === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (currentSort === "category") {
    filtered.sort((a, b) => a.category.localeCompare(b.category));
  }

  // Render
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-catalog">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="font-size:1.2rem;margin-bottom:6px;">No research materials found</h3>
        <p style="color:var(--text-muted);font-size:0.9rem;">Try adjusting your search terms or filter selection.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()" style="margin-top:14px;">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" id="card-${p.id}">
      <div class="card-top-meta">
        <span class="product-category-tag">${p.category}</span>
        <span class="product-status-tag">
          <span class="status-dot-sm"></span>
          ${p.status}
        </span>
      </div>
      <h3 class="product-card-title">${p.name}</h3>
      <span class="product-dosage-badge">${p.quantity}</span>
      <p class="product-neutral-desc">${p.description}</p>
      
      <div class="card-pricing-row">
        <span class="pricing-label">Catalog Status</span>
        <span class="pricing-val">${p.price !== null ? p.price : "Inquire for Pricing"}</span>
      </div>

      <div class="card-actions">
        <button class="btn btn-secondary btn-sm" onclick="openProductModal('${p.id}')">
          View Details
        </button>
        <button class="btn btn-cyan-outline btn-sm" onclick="requestProductInquiry('${p.id}')">
          Inquire
        </button>
      </div>
    </div>
  `).join("");
}

function renderFeatured() {
  const container = document.getElementById("featuredScroll");
  if (!container) return;

  const featured = products.filter(p => p.featured);
  container.innerHTML = featured.map(p => `
    <div class="featured-card">
      <span class="featured-badge">${p.category}</span>
      <div class="featured-card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m4.93 4.93 4.24 4.24"></path>
          <path d="m14.83 9.17 4.24-4.24"></path>
          <path d="m14.83 14.83 4.24 4.24"></path>
          <path d="m9.17 14.83-4.24 4.24"></path>
        </svg>
      </div>
      <h4 style="font-size:1.1rem;font-weight:700;margin-bottom:4px;">${p.name}</h4>
      <span style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;">${p.quantity}</span>
      <p style="font-size:0.84rem;color:var(--text-secondary);margin-bottom:18px;line-height:1.5;">${p.description}</p>
      <div style="margin-top:auto;display:flex;gap:8px;">
        <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="openProductModal('${p.id}')">Details</button>
        <button class="btn btn-primary btn-sm" style="flex:1;" onclick="requestProductInquiry('${p.id}')">Inquire</button>
      </div>
    </div>
  `).join("");
}

function setupCatalogControls() {
  const searchInput = document.getElementById("catalogSearch");
  const sortSelect = document.getElementById("catalogSort");
  const chipContainer = document.getElementById("filterChips");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim();
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  if (chipContainer) {
    chipContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip-btn");
      if (!btn) return;
      document.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter || "All";
      renderCatalog();
    });
  }
}

function resetFilters() {
  currentFilter = "All";
  currentSearch = "";
  const searchInput = document.getElementById("catalogSearch");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".chip-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === "All");
  });
  renderCatalog();
}

function populateProductSelect() {
  const select = document.getElementById("formProduct");
  if (!select) return;
  select.innerHTML = `<option value="">Select a product from catalog...</option>` +
    products.map(p => `<option value="${p.name}">${p.name} (${p.category})</option>`).join("");
}

// ==========================================================================
// PRODUCT DETAIL MODAL & QUANTITY SELECTOR
// ==========================================================================
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  activeProductModal = product;

  const modal = document.getElementById("productModal");
  const title = document.getElementById("modalProductTitle");
  const meta = document.getElementById("modalProductMeta");
  const desc = document.getElementById("modalProductDesc");
  const batch = document.getElementById("modalProductBatch");
  const qtyInput = document.getElementById("modalQtyInput");

  if (title) title.textContent = product.name;
  if (meta) meta.textContent = `${product.category} • ${product.quantity}`;
  if (desc) desc.textContent = product.description;
  if (batch) batch.textContent = `Batch: ${product.batch} | Storage: Verified Laboratory Standard`;
  if (qtyInput) qtyInput.value = "1";
  updateModalWhatsappLink();

  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function updateModalWhatsappLink() {
  const btn = document.getElementById("modalWhatsappBtn");
  if (!btn || !activeProductModal) return;
  const input = document.getElementById("modalQtyInput");
  const qty = input ? (input.value || 1) : 1;
  const msg = `Hello Felix Chemical Supply, I would like to order ${activeProductModal.name} (Qty: ${qty}) from your USA warehouse catalog.`;
  btn.href = `https://wa.me/12092718485?text=${encodeURIComponent(msg)}`;
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
  activeProductModal = null;
}

function changeModalQty(delta) {
  const input = document.getElementById("modalQtyInput");
  if (!input) return;
  let val = parseInt(input.value, 10) || 1;
  val = Math.max(1, Math.min(999, val + delta));
  input.value = val;
  updateModalWhatsappLink();
}

function confirmModalInquiry() {
  if (!activeProductModal) return;
  const input = document.getElementById("modalQtyInput");
  const qty = input ? input.value : 1;
  const productName = activeProductModal.name;

  closeProductModal();
  prefillInquiry(productName, qty);
  showToast(`Added ${productName} (Qty: ${qty}) to inquiry form.`);
}

function requestProductInquiry(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  prefillInquiry(product.name, 1);
  showToast(`Selected ${product.name} for inquiry.`);
}

function prefillInquiry(productName, qty = 1) {
  const productSelect = document.getElementById("formProduct");
  const qtyInput = document.getElementById("formQuantity");
  if (productSelect) productSelect.value = productName;
  if (qtyInput) qtyInput.value = qty;

  const formSection = document.getElementById("inquiry");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================================================
// CLIPBOARD COPYING
// ==========================================================================
function copyPaymentAddress() {
  const text = CONFIG.PAYMENT_ADDRESS;
  const btn = document.getElementById("copyAddressBtn");

  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      btn.textContent = "Copied!";
      btn.style.backgroundColor = "var(--success)";
      btn.style.color = "#ffffff";
      btn.style.borderColor = "var(--success)";
      setTimeout(() => {
        btn.textContent = "Copy Address";
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.style.borderColor = "";
      }, 2400);
    }
    showToast("Payment address copied to clipboard!");
  }).catch(() => {
    fallbackCopy(text);
  });
}

function copyOrderFormat() {
  const formatText = `Name:\nAddress:\nCity:\nState:\nZIP:\nPhone:\nProduct:\nQuantity:\nOrder Total:\nPayment Method: USDT / USDC (ERC20)\nTransaction ID / Hash:`;
  navigator.clipboard.writeText(formatText).then(() => {
    showToast("Order format template copied!");
  }).catch(() => {
    fallbackCopy(formatText);
  });
}

function fallbackCopy(text) {
  const temp = document.createElement("textarea");
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  try {
    document.execCommand("copy");
    showToast("Copied to clipboard!");
  } catch (err) {
    showToast("Could not copy automatically. Please select text manually.", "warning");
  }
  document.body.removeChild(temp);
}

// ==========================================================================
// ACCORDIONS
// ==========================================================================
function setupAccordions() {
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const wasActive = item.classList.contains("active");

      // Optional: keep single open or independent. Let's allow smooth independent toggling
      item.classList.toggle("active", !wasActive);
    });
  });
}

// ==========================================================================
// NAVIGATION & MOBILE MENU
// ==========================================================================
function setupNav() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Connect Contact buttons
  const textFelixBtn = document.getElementById("textFelixBtn");
  if (textFelixBtn) textFelixBtn.href = `sms:${CONFIG.PHONE_CLEAN}`;

  const telegramBtn = document.getElementById("telegramOrderBtn");
  if (telegramBtn) telegramBtn.href = CONFIG.TELEGRAM_URL;

  const whatsappBtn = document.getElementById("whatsappOrderBtn");
  if (whatsappBtn) whatsappBtn.href = CONFIG.WHATSAPP_URL;

  const heroWhatsappBtn = document.getElementById("heroWhatsappBtn");
  if (heroWhatsappBtn) heroWhatsappBtn.href = CONFIG.WHATSAPP_URL;

  const drawerTelegram = document.getElementById("drawerTelegram");
  if (drawerTelegram) drawerTelegram.href = CONFIG.TELEGRAM_URL;

  const drawerWhatsapp = document.getElementById("drawerWhatsapp");
  if (drawerWhatsapp) drawerWhatsapp.href = CONFIG.WHATSAPP_URL;

  const footerTelegram = document.getElementById("footerTelegram");
  if (footerTelegram) footerTelegram.href = CONFIG.TELEGRAM_URL;

  const footerWhatsapp = document.getElementById("footerWhatsapp");
  if (footerWhatsapp) footerWhatsapp.href = CONFIG.WHATSAPP_URL;

  const modalQtyInput = document.getElementById("modalQtyInput");
  if (modalQtyInput) {
    modalQtyInput.addEventListener("input", updateModalWhatsappLink);
  }

  // Modal backdrop click handlers
  const productModal = document.getElementById("productModal");
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  const policyModal = document.getElementById("policyModal");
  if (policyModal) {
    policyModal.addEventListener("click", (e) => {
      if (e.target === policyModal) closePolicyModal();
    });
  }
}

// ==========================================================================
// FORM HANDLING
// ==========================================================================
function setupInquiryForm() {
  const form = document.getElementById("inquiryForm");
  const endpointNotice = document.getElementById("formEndpointNotice");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("formName")?.value.trim();
    const email = document.getElementById("formEmail")?.value.trim();
    const product = document.getElementById("formProduct")?.value.trim();

    if (!name || !email || !product) {
      showToast("Please fill in required fields: Name, Email, and Product.", "warning");
      return;
    }

    // Check CONFIG.FORM_ENDPOINT
    if (!CONFIG.FORM_ENDPOINT) {
      if (endpointNotice) {
        endpointNotice.style.display = "block";
        endpointNotice.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      showToast("Inquiry prepared. Please connect form endpoint or contact Felix directly.", "info");
      return;
    }

    // Submit via fetch if endpoint provided
    const formData = new FormData(form);
    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.disabled = true;

    fetch(CONFIG.FORM_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    })
    .then(res => {
      if (res.ok) {
        form.reset();
        showToast("Inquiry successfully submitted! Felix team will respond shortly.", "success");
      } else {
        showToast("Submission encountered an issue. Please contact Felix directly via text or messaging.", "warning");
      }
    })
    .catch(() => {
      showToast("Network error. Please text or message Felix directly.", "warning");
    })
    .finally(() => {
      if (submitBtn) submitBtn.disabled = false;
    });
  });
}

// ==========================================================================
// SCROLL EFFECTS & ASSISTANT
// ==========================================================================
function setupScrollEffects() {
  const progressBar = document.getElementById("scrollProgress");
  const navbar = document.querySelector(".navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    if (progressBar) progressBar.style.width = `${progress}%`;
    if (navbar) navbar.classList.toggle("scrolled", scrollY > 20);
    if (backToTop) backToTop.classList.toggle("visible", scrollY > 400);
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Floating assistant toggle
  const assistantBtn = document.getElementById("assistantBtn");
  const assistantPanel = document.getElementById("assistantPanel");
  if (assistantBtn && assistantPanel) {
    assistantBtn.addEventListener("click", () => {
      assistantPanel.classList.toggle("active");
    });
  }

  // Keyboard accessibility: ESC key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closePolicyModal();
      if (assistantPanel) assistantPanel.classList.remove("active");
    }
  });
}

// ==========================================================================
// POLICY MODALS
// ==========================================================================
const POLICIES = {
  terms: {
    title: "Terms of Research Supply",
    content: `All products supplied by Felix Chemical Supply are offered exclusively for laboratory and scientific research purposes where legally permissible. By submitting an inquiry or acquiring materials, the purchaser certifies that they are qualified personnel affiliated with a recognized laboratory, research entity, or institution possessing standard chemical safety protocols. Materials are strictly not for human or veterinary administration, diagnostic procedure, or consumer use.`
  },
  privacy: {
    title: "Privacy & Data Policy",
    content: `Felix Chemical Supply respects commercial discretion and confidentiality. Customer contact details and inquiry requests are utilized strictly for order processing, logistics coordination, and direct support. Information is never sold or distributed to third-party marketing entities. Communications may occur via secure messaging channels as elected by the researcher.`
  },
  shipping: {
    title: "Domestic U.S. Shipping Policy",
    content: `Orders dispatched from domestic U.S. inventory are processed in the order received, typically within 24–48 business hours. Tracking numbers are transmitted once carrier collection occurs. Domestic transit times typically range from 2–4 business days depending on destination jurisdiction. Customers are solely responsible for ensuring shipping address accuracy.`
  },
  refund: {
    title: "Return & Replacement Policy",
    content: `Due to the temperature-controlled and specialized nature of research biochemicals, standard returns of opened or altered reagents cannot be accepted once dispatched. In the verified event of carrier transit loss or damaged exterior containment, notify Felix customer service immediately with documentation to initiate appropriate carrier claims and resolution.`
  },
  disclaimer: {
    title: "Research-Use Regulatory Disclaimer",
    content: `IMPORTANT NOTICE: Products displayed on this website are intended for research or laboratory use only. Product status and permitted uses vary by jurisdiction. Nothing on this website constitutes medical advice, a recommendation for human use, or a claim of therapeutic efficacy. Customers are responsible for determining whether purchase, possession, importation, exportation, or use of any product is lawful in their jurisdiction.`
  }
};

function selectPolicyTab(policyKey) {
  const tabs = document.querySelectorAll(".policy-tab-btn");
  const panels = document.querySelectorAll(".policy-content-panel");

  tabs.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.policy === policyKey);
  });

  panels.forEach(panel => {
    panel.classList.toggle("active", panel.id === `policy-${policyKey}`);
  });
}

function openPolicyModal(policyKey) {
  selectPolicyTab(policyKey);
  const policiesSec = document.getElementById("policies");
  if (policiesSec) {
    policiesSec.scrollIntoView({ behavior: "smooth" });
  }
}

function closePolicyModal() {
  const modal = document.getElementById("policyModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Attach functions to window for universal access across environments
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.changeModalQty = changeModalQty;
window.confirmModalInquiry = confirmModalInquiry;
window.requestProductInquiry = requestProductInquiry;
window.copyPaymentAddress = copyPaymentAddress;
window.copyOrderFormat = copyOrderFormat;
window.resetFilters = resetFilters;
window.openPolicyModal = openPolicyModal;
window.closePolicyModal = closePolicyModal;
window.selectPolicyTab = selectPolicyTab;
window.CONFIG = CONFIG;
window.products = products;

