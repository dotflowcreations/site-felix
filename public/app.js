/**
 * Felix Chemical Supply — Official Application Logic
 * Clean, concise product specifications and zero character encoding issues.
 * Color Scheme & Typography matching felixchem.is
 * Strictly NO vial imagery or references.
 */

const CONFIG = {
  COMPANY_NAME: "Felix Chemical Supply",
  PHONE: "+1 659 221 9964",
  PHONE_CLEAN: "16592219964",
  WHATSAPP_URL: "https://wa.me/16592219964",
  TELEGRAM_URL: "https://t.me/felixchemicalsupply",
  PAYMENT_ADDRESSES: {
    ETH: {
      name: "USDT / USDC",
      network: "Ethereum (ERC20)",
      address: "0xfAc5677671a5479C8b7ec06d32dE81120431C50e",
      tag: "ERC20",
      symbol: "ETH / ERC20",
      note: "Send only USDT or USDC via Ethereum ERC20 network."
    },
    BTC: {
      name: "Bitcoin (BTC)",
      network: "Bitcoin Native Network",
      address: "bc1qfelixchem8485btc0supplys07res0e2",
      tag: "BTC Native",
      symbol: "BTC",
      note: "Send only native BTC. Requires 2 network confirmations for dispatch."
    },
    SOL: {
      name: "USDC-Sol",
      network: "Solana Network (SPL)",
      address: "FLXchemSoL7usdcSPLsettlement99x41C50e",
      tag: "Solana SPL",
      symbol: "SOL / SPL",
      note: "Send only USDC via Solana SPL token transfer."
    }
  },
  DEFAULT_CRYPTO: "ETH"
};

// Research Materials Catalog with concise, non-verbose specifications
const products = [
  {
    "id": "ipa-5mg",
    "name": "Ipamorelin 5mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$44.99",
    "sku": "ipa-5mg",
    "quantity": "5mg",
    "status": "In Stock",
    "description": "Selective growth hormone secretagogue pentapeptide for somatotropic receptor and cellular research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "dsip-5mg",
    "name": "DSIP 5mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$54.99",
    "sku": "dsip-5mg",
    "quantity": "5mg",
    "status": "In Stock",
    "description": "Synthetic nonapeptide investigated for sleep architecture, circadian rhythm, and neuromodulation research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "maz-10mg",
    "name": "Peptide-M 10mg",
    "category": "Peptides",
    "categories": [
      "Peptide M",
      "Primary Peptides"
    ],
    "price": "$139.99",
    "sku": "maz-10mg",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Dual GLP-1/GIP receptor co-agonist investigated for glycemic control and metabolic pathway research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-t-10mg",
    "name": "Peptide-T 10mg",
    "category": "Peptides",
    "categories": [
      "Peptide T",
      "Primary Peptides"
    ],
    "price": "$99.99",
    "sku": "peptide-t-10mg",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Dual GIP/GLP-1 receptor agonist studied for glucose homeostasis and incretin signaling.",
    "reconstitution": "Reconstitute with Reconstitution Solution or 0.6% Acetic Acid.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "ghk-cu-50mg",
    "name": "GHK-cu 50mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$54.99",
    "sku": "ghk-cu-50mg",
    "quantity": "50mg",
    "status": "In Stock",
    "description": "Copper-binding tripeptide evaluated for extracellular matrix remodeling and tissue repair research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "5-amino-10mg",
    "name": "5-Amino-1MQ 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$49.99",
    "sku": "5-amino-10mg",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Small molecule NNMT inhibitor investigated for cellular energy metabolism and adipose signaling.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "bpctb-5-5",
    "name": "BPC-157 + TB-500 5mg/5mg",
    "category": "Blends",
    "categories": [
      "Peptides"
    ],
    "price": "$69.99",
    "sku": "bpctb-5-5",
    "quantity": "5mg/5mg",
    "status": "In Stock",
    "description": "Dual-acting peptide research blend formulated for angiogenic signaling and tissue repair studies.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "coldcase",
    "name": "Travel Cold-Case",
    "category": "Solutions & Supplies",
    "categories": [
      "Accessories"
    ],
    "price": "$39.99",
    "sku": "coldcase",
    "quantity": "Analytical Grade",
    "status": "In Stock",
    "description": "Insulated thermal protective case with reusable ice packs for temperature-sensitive research compounds.",
    "reconstitution": "N/A — Pre-assembled physical supply",
    "storage": "Room temperature. Re-freeze cooling inserts prior to use.",
    "form": "Insulated Cold Case",
    "source": "felixchem.is"
  },
  {
    "id": "tesa5",
    "name": "Tesamorelin 5mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$42.99",
    "sku": "tesa5",
    "quantity": "5mg",
    "status": "In Stock",
    "description": "Synthetic growth hormone-releasing factor analog studied for visceral lipolysis and pituitary pathways.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "5-amino-5mg",
    "name": "5-Amino-1MQ 5mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$34.99",
    "sku": "5-amino-5mg",
    "quantity": "5mg",
    "status": "In Stock",
    "description": "NNMT enzyme inhibitor researched for metabolic signaling, NAD+ salvage, and sirtuin activity.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "thymosin-10",
    "name": "Thymosin Alpha-1 (Tα1) 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$64.99",
    "sku": "thymosin-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Synthetic 28-amino acid polypeptide investigated for immune modulation and T-cell activation pathways.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "dsip-10",
    "name": "DSIP 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "DSIP-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Higher-quantity delta sleep-inducing peptide standard for neurochemical and receptor evaluation.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "mt2-10",
    "name": "Melanotan-II 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$29.99",
    "sku": "MT2-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Synthetic cyclic heptapeptide melanocortin receptor agonist evaluated for photoprotective signaling.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "mt1-10",
    "name": "Melanotan-I 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$29.99",
    "sku": "MT1-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Synthetic linear analog of alpha-MSH studied for selective melanocortin-1 receptor binding.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "recon-sol-10ml",
    "name": "Reconstitution Solution - 10ml",
    "category": "Solutions & Supplies",
    "categories": [
      "Peptides"
    ],
    "price": "$13.99",
    "sku": "Recon-Sol-10ml",
    "quantity": "10ml",
    "status": "In Stock",
    "description": "Sterile analytical reconstitution solution containing 0.9% benzyl alcohol for peptide solubilization.",
    "reconstitution": "Ready-to-use analytical solution",
    "storage": "Store at 15–25°C protected from light. Do not freeze.",
    "form": "Sterile Solution",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-su-12-1",
    "name": "Peptide-SU 10mg",
    "category": "Peptides",
    "categories": [
      "Peptide SU",
      "Primary Peptides"
    ],
    "price": "$99.99",
    "sku": "Peptide-SU-12-1",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Glucagon/GLP-1 dual receptor agonist investigated for metabolic and energy expenditure signaling.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "free-acetic-acid-3ml",
    "name": "Free Acetic Acid 0.6% 3ml",
    "category": "Solutions & Supplies",
    "categories": [
      "Solutions & Supplies"
    ],
    "price": "$7.99",
    "sku": "Free-acetic-acid-3ml",
    "quantity": "3ml",
    "status": "In Stock",
    "description": "Specialized 0.6% acetic acid analytical solvent for solubilizing basic or hydrophobic peptides.",
    "reconstitution": "Ready-to-use analytical solution",
    "storage": "Store at 15–25°C protected from light. Do not freeze.",
    "form": "Sterile Solution",
    "source": "felixchem.is"
  },
  {
    "id": "kpv-10mg",
    "name": "KPV 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$80.00",
    "sku": "KPV-10mg",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "C-terminal tripeptide fragment of alpha-MSH studied for anti-inflammatory and mucosal pathway research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "klow-10mg-10mg-10mg-50mg",
    "name": "KLOW 10mg/10mg/10mg/50mg",
    "category": "Blends",
    "categories": [
      "Peptides"
    ],
    "price": "$149.99",
    "sku": "KLOW-10mg-10mg-10mg-50mg",
    "quantity": "10mg/10mg/10mg/50mg",
    "status": "In Stock",
    "description": "Multi-peptide research formulation combining KPV, BPC-157, TB-500, and GHK-Cu for matrix studies.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-31-60mg",
    "name": "Peptide-31 60mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$179.99",
    "sku": "Peptide-31-60mg",
    "quantity": "60mg",
    "status": "In Stock",
    "description": "Mitochondria-targeting tetrapeptide antioxidant studied for cardiolipin protection and ATP synthesis.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-c-5",
    "name": "Peptide-C 5mg",
    "category": "Peptides",
    "categories": [
      "Peptide C",
      "Primary Peptides"
    ],
    "price": "$99.99",
    "sku": "Peptide-C-5",
    "quantity": "5mg",
    "status": "In Stock",
    "description": "Amylin analog investigated for satiety signaling, glycemic homeostasis, and neuroendocrine pathways.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-r-50",
    "name": "Peptide-R 50mg",
    "category": "Peptides",
    "categories": [
      "Peptide R",
      "Primary Peptides"
    ],
    "price": "$299.99",
    "sku": "Peptide-R-50",
    "quantity": "50mg",
    "status": "In Stock",
    "description": "Triple GIP/GLP-1/glucagon receptor tri-agonist researched for multi-pathway metabolic activation.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-m-15",
    "name": "Peptide-M 15mg",
    "category": "Peptides",
    "categories": [
      "Peptide M",
      "Primary Peptides"
    ],
    "price": "$199.99",
    "sku": "Peptide-M-15",
    "quantity": "15mg",
    "status": "In Stock",
    "description": "High-concentration dual incretin mimetic evaluated for metabolic receptor binding kinetics.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-cs55",
    "name": "Peptide-CS 5mg/5mg",
    "category": "Blends",
    "categories": [
      "Peptide CS",
      "Primary Peptides"
    ],
    "price": "$149.99",
    "sku": "Peptide-CS55",
    "quantity": "5mg/5mg",
    "status": "In Stock",
    "description": "Synergistic research formulation combining Peptide-C and Peptide-S for co-receptor signaling studies.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-c-10",
    "name": "Peptide-C 10mg",
    "category": "Peptides",
    "categories": [
      "Peptide C",
      "Primary Peptides"
    ],
    "price": "$149.99",
    "sku": "Peptide-C-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Synthetic amylin receptor agonist peptide standard for metabolic and pancreatic endocrine assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-c-20",
    "name": "Peptide-C 20mg",
    "category": "Peptides",
    "categories": [
      "Peptide C",
      "Primary Peptides"
    ],
    "price": "$249.99",
    "sku": "Peptide-C-20",
    "quantity": "20mg",
    "status": "In Stock",
    "description": "Extended quantity amylin mimetic peptide for high-throughput endocrine and receptor binding assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-r-20",
    "name": "Peptide-R 20mg",
    "category": "Peptides",
    "categories": [
      "Peptide R",
      "Primary Peptides"
    ],
    "price": "$189.99",
    "sku": "Peptide-R-20",
    "quantity": "20mg",
    "status": "In Stock",
    "description": "Triple receptor co-agonist evaluated for metabolic modulation, adiposity, and energy balance.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-r-10",
    "name": "Peptide-R 10mg",
    "category": "Peptides",
    "categories": [
      "Peptide R",
      "Primary Peptides"
    ],
    "price": "$129.99",
    "sku": "Peptide-R-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "High-purity triple incretin/glucagon agonist peptide standard for receptor activation studies.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-t-100",
    "name": "Peptide-T 100mg",
    "category": "Peptides",
    "categories": [
      "Peptide T",
      "Primary Peptides"
    ],
    "price": "$449.99",
    "sku": "Peptide-T-100",
    "quantity": "100mg",
    "status": "In Stock",
    "description": "Bulk analytical dual incretin co-agonist peptide standard for extensive laboratory research.",
    "reconstitution": "Reconstitute with Reconstitution Solution or 0.6% Acetic Acid.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-t-60",
    "name": "Peptide-T 60mg",
    "category": "Peptides",
    "categories": [
      "Peptide T",
      "Primary Peptides"
    ],
    "price": "$289.99",
    "sku": "Peptide-T-60",
    "quantity": "60mg",
    "status": "In Stock",
    "description": "High-mass dual GIP/GLP-1 receptor agonist reference material for biochemical assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution or 0.6% Acetic Acid.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-t-30",
    "name": "Peptide-T 30mg",
    "category": "Peptides",
    "categories": [
      "Peptide T",
      "Primary Peptides"
    ],
    "price": "$189.99",
    "sku": "Peptide-T-30",
    "quantity": "30mg",
    "status": "In Stock",
    "description": "Dual receptor agonist research peptide standard for metabolic and incretin signaling investigations.",
    "reconstitution": "Reconstitute with Reconstitution Solution or 0.6% Acetic Acid.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-t-15",
    "name": "Peptide-T 15mg",
    "category": "Peptides",
    "categories": [
      "Peptide T",
      "Primary Peptides"
    ],
    "price": "$119.99",
    "sku": "Peptide-T-15",
    "quantity": "15mg",
    "status": "In Stock",
    "description": "Dual incretin mimetic reference standard for in-vitro receptor binding and activation studies.",
    "reconstitution": "Reconstitute with Reconstitution Solution or 0.6% Acetic Acid.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-s-5",
    "name": "Peptide-S 5mg",
    "category": "Peptides",
    "categories": [
      "Peptide S",
      "Primary Peptides"
    ],
    "price": "$87.99",
    "sku": "Peptide-S-5",
    "quantity": "5mg",
    "status": "In Stock",
    "description": "GLP-1 receptor agonist peptide evaluated for insulinotropic signaling and gastric motility research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-s-15",
    "name": "Peptide-S 15mg",
    "category": "Peptides",
    "categories": [
      "Peptide S",
      "Primary Peptides"
    ],
    "price": "$159.99",
    "sku": "Peptide-S-15",
    "quantity": "15mg",
    "status": "In Stock",
    "description": "Extended concentration GLP-1 mimetic peptide standard for analytical laboratory investigations.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "peptide-s-10",
    "name": "Peptide-S 10mg",
    "category": "Peptides",
    "categories": [
      "Peptide S",
      "Primary Peptides"
    ],
    "price": "$129.99",
    "sku": "Peptide-S-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "High-purity GLP-1 receptor agonist reference compound for metabolic and glycemic assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "tesa10",
    "name": "Tesamorelin 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$54.99",
    "sku": "tesa10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Synthetic GHRH analog peptide for endocrine regulation and pituitary somatotroph research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "serm10",
    "name": "Sermorelin 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$69.99",
    "sku": "serm10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Functional 29-amino acid GHRH fragment studied for pituitary growth hormone secretion pathways.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "semax10",
    "name": "Semax 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$35.00",
    "sku": "semax10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Heptapeptide ACTH analog investigated for neuroprotection, BDNF expression, and cognitive pathways.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "selank10",
    "name": "Selank 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$34.99",
    "sku": "selank10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Synthetic regulatory tuftsin analog peptide researched for anxiolytic signaling and neurotransmission.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "ipa10",
    "name": "Ipamorelin 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$49.99",
    "sku": "ipa10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "High-potency pentapeptide ghrelin receptor agonist for somatotropic axis research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "glut1200",
    "name": "Glutathione 1200mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$99.99",
    "sku": "glut1200",
    "quantity": "1200mg",
    "status": "In Stock",
    "description": "Endogenous master antioxidant tripeptide standard for cellular redox and oxidative stress assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "cjcipa-55",
    "name": "CJC/IPA 5mg/5mg (No DAC)",
    "category": "Blends",
    "categories": [
      "Peptides"
    ],
    "price": "$54.99",
    "sku": "cjcipa-55",
    "quantity": "5mg/5mg",
    "status": "In Stock",
    "description": "Synergistic dual secretagogue research blend designed for concurrent GHRH and ghrelin receptor studies.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "epi50",
    "name": "Epitalon 50mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$130.00",
    "sku": "epi50",
    "quantity": "50mg",
    "status": "In Stock",
    "description": "Synthetic pineal tetrapeptide researched for telomerase induction and cellular senescence pathways.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "glow-10mg-70mg-10mg",
    "name": "GLOW 10mg/70mg/10mg",
    "category": "Blends",
    "categories": [
      "Peptides"
    ],
    "price": "$129.99",
    "sku": "GLOW-10mg-70mg-10mg",
    "quantity": "10mg/70mg/10mg",
    "status": "In Stock",
    "description": "Specialized multi-compound peptide formulation researched for dermatological matrix and collagen signaling.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "reconstitution-solution-30ml",
    "name": "Reconstitution Solution - 30ml",
    "category": "Solutions & Supplies",
    "categories": [
      "Peptides"
    ],
    "price": "$19.99",
    "sku": "reconstitution-solution-30ml",
    "quantity": "30ml",
    "status": "In Stock",
    "description": "30ml sterile reconstitution solution formulated with 0.9% benzyl alcohol for analytical peptide prep.",
    "reconstitution": "Ready-to-use analytical solution",
    "storage": "Store at 15–25°C protected from light. Do not freeze.",
    "form": "Sterile Solution",
    "source": "felixchem.is"
  },
  {
    "id": "acetic-acid-3ml",
    "name": "Acetic Acid 0.6% 3ml",
    "category": "Solutions & Supplies",
    "categories": [
      "Accessories",
      "Peptides"
    ],
    "price": "$7.99",
    "sku": "acetic-acid-3ml",
    "quantity": "3ml",
    "status": "In Stock",
    "description": "Analytical-grade 0.6% acetic acid solution for reconstituting hydrophobic peptide materials.",
    "reconstitution": "Ready-to-use analytical solution",
    "storage": "Store at 15–25°C protected from light. Do not freeze.",
    "form": "Sterile Solution",
    "source": "felixchem.is"
  },
  {
    "id": "tb-500-10mg",
    "name": "TB-500 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$70.00",
    "sku": "TB-500-10mg",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Synthetic 43-amino acid Thymosin Beta-4 fragment evaluated for actin sequestering and cell migration.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "ss-31-25mg",
    "name": "Peptide-31 25mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$139.99",
    "sku": "SS-31-25mg",
    "quantity": "25mg",
    "status": "In Stock",
    "description": "Mitochondria-targeted peptide SS-31 investigated for mitochondrial membrane potential and ROS reduction.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "snap-8-10mg",
    "name": "SNAP-8 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "SNAP-8-10mg",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Octapeptide analog of SNAP-25 evaluated for SNARE complex inhibition and neuromuscular signaling.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "pt-141-10mg",
    "name": "PT-141 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$42.99",
    "sku": "PT-141-10mg",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Bremelanotide cyclic peptide melanocortin receptor agonist studied for central nervous system pathways.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "nad+500mg",
    "name": "NAD+ 500mg",
    "category": "Blends",
    "categories": [
      "Peptides"
    ],
    "price": "$89.99",
    "sku": "NAD+500mg",
    "quantity": "500mg",
    "status": "In Stock",
    "description": "Essential metabolic coenzyme standard investigated for mitochondrial respiration, sirtuin activation, and PARP repair.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "mots-c-10mg",
    "name": "MOTS-C 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "MOTS-C-10mg",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Mitochondrial-derived 16-amino acid peptide investigated for metabolic homeostasis and AMPK activation.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "lipo-c-10ml",
    "name": "LIPO-C 10ml",
    "category": "Solutions & Supplies",
    "categories": [
      "Peptides"
    ],
    "price": "$89.99",
    "sku": "LIPO-C-10ml",
    "quantity": "10ml",
    "status": "In Stock",
    "description": "Sterile analytical lipotropic solution containing choline, inositol, methionine, and L-carnitine.",
    "reconstitution": "Ready-to-use analytical solution",
    "storage": "Store at 15–25°C protected from light. Do not freeze.",
    "form": "Sterile Solution",
    "source": "felixchem.is"
  },
  {
    "id": "lipo-b-10ml",
    "name": "LIPO-B 10ml",
    "category": "Solutions & Supplies",
    "categories": [
      "Peptides"
    ],
    "price": "$89.99",
    "sku": "LIPO-B-10ml",
    "quantity": "10ml",
    "status": "In Stock",
    "description": "Sterile analytical solution containing lipotropic factors and B-complex vitamins for metabolic assays.",
    "reconstitution": "Ready-to-use analytical solution",
    "storage": "Store at 15–25°C protected from light. Do not freeze.",
    "form": "Sterile Solution",
    "source": "felixchem.is"
  },
  {
    "id": "ghk-cu-100mg",
    "name": "GHK-cu 100mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "GHK-CU-100mg",
    "quantity": "100mg",
    "status": "In Stock",
    "description": "High-yield copper peptide complex standard for extracellular matrix synthesis and gene expression research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "aod-9604-5mg",
    "name": "AOD-9604 5mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "AOD-9604-5mg",
    "quantity": "5mg",
    "status": "In Stock",
    "description": "C-terminal fragment (177-191) of human growth hormone studied for lipolytic pathways without IGF-1 stimulation.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "bpc-157-10mg",
    "name": "BPC-157 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$54.99",
    "sku": "BPC-157-10mg",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Stable gastric pentadecapeptide investigated for cytoprotection, angiogenic signaling, and tissue repair.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem.is"
  },
  {
    "id": "reta-30",
    "name": "Reta 30mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$189.99",
    "sku": "FLX-RETA-30",
    "quantity": "30mg",
    "status": "In Stock",
    "description": "Triple agonist (GIP/GLP-1/Glucagon) reference material for advanced metabolic pathway research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "tirz-30",
    "name": "Tirz 30mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$189.99",
    "sku": "FLX-TIRZ-30",
    "quantity": "30mg",
    "status": "In Stock",
    "description": "Dual GIP and GLP-1 receptor co-agonist standard for comparative incretin receptor assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "retatrutide-20",
    "name": "Retatrutide 20mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$149.99",
    "sku": "FLX-RETATRUTIDE-20",
    "quantity": "20mg",
    "status": "In Stock",
    "description": "Triple receptor agonist peptide for comprehensive glycemic and energy balance research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "tb4-bpc-combo",
    "name": "TB4 / BPC 10MG / 10MG",
    "category": "Blends",
    "categories": [
      "Blends"
    ],
    "price": "$59.99",
    "sku": "FLX-TB4-BPC-COMBO",
    "quantity": "10mg / 10mg",
    "status": "In Stock",
    "description": "Combined synergistic blend of Thymosin Beta-4 and BPC-157 for regenerative biology studies.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "tesamorelin-20",
    "name": "Tesamorelin 20MG",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "FLX-TESAMORELIN-20",
    "quantity": "20mg",
    "status": "In Stock",
    "description": "High-quantity GHRH analog peptide for extended pituitary somatotroph signaling and lipolysis research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "retatrutide-10",
    "name": "Retatrutide 10MG",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "FLX-RETATRUTIDE-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Triple incretin/glucagon receptor agonist reference standard for in-vitro metabolic evaluation.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "tirzepatide-10",
    "name": "Tirzepatide 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$89.99",
    "sku": "FLX-TIRZEPATIDE-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Dual incretin mimetic peptide standard for receptor kinetics and cellular assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "ghk-cu-kpv",
    "name": "GHK-Cu / KPV 50mg/20mg",
    "category": "Blends",
    "categories": [
      "Blends"
    ],
    "price": "$249.99",
    "sku": "FLX-GHK-CU-KPV",
    "quantity": "50mg / 20mg",
    "status": "In Stock",
    "description": "High-synergy dual peptide research blend for matrix remodeling and cytokine modulation research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "thymosin-alpha-1",
    "name": "Thymosin Alpha-1 10mg",
    "category": "Biological Regulators",
    "categories": [
      "Biological Regulators"
    ],
    "price": "$89.99",
    "sku": "FLX-THYMOSIN-ALPHA-1",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Biological immune response regulator peptide studied for innate and adaptive immune cell signaling.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "kpv-30",
    "name": "KPV 30mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$189.99",
    "sku": "FLX-KPV-30",
    "quantity": "30mg",
    "status": "In Stock",
    "description": "High-purity tripeptide standard for anti-inflammatory signaling and epithelial barrier research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "tb4-10",
    "name": "TB4 10MG",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "FLX-TB4-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Thymosin Beta-4 full-sequence 43-amino acid peptide for actin regulation and cellular repair assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "retatrutide-40",
    "name": "Retatrutide 40MG",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "FLX-RETATRUTIDE-40",
    "quantity": "40mg",
    "status": "In Stock",
    "description": "High-quantity triple receptor agonist standard for high-throughput metabolic research.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "nad-500",
    "name": "NAD 500mg",
    "category": "Biological Regulators",
    "categories": [
      "Biological Regulators"
    ],
    "price": "$59.99",
    "sku": "FLX-NAD-500",
    "quantity": "500mg",
    "status": "In Stock",
    "description": "Nicotinamide adenine dinucleotide cellular bioenergetics standard for enzymatic and mitochondrial assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "bac-10",
    "name": "BAC 10ml",
    "category": "Solutions & Supplies",
    "categories": [
      "Solutions & Supplies"
    ],
    "price": "$59.99",
    "sku": "FLX-BAC-10",
    "quantity": "10ml",
    "status": "In Stock",
    "description": "Sterile bacteriostatic analytical reconstitution water with 0.9% benzyl alcohol preservative.",
    "reconstitution": "Ready-to-use analytical solution",
    "storage": "Store at 15–25°C protected from light. Do not freeze.",
    "form": "Sterile Solution",
    "source": "felixchem_catalog"
  },
  {
    "id": "ghk-cu-raws",
    "name": "GHK-CU raws 10g/bottle",
    "category": "Raw Materials",
    "categories": [
      "Raw Materials"
    ],
    "price": "$59.99",
    "sku": "FLX-GHK-CU-RAWS",
    "quantity": "10g bottle",
    "status": "In Stock",
    "description": "Analytical bulk raw GHK-Cu copper peptide powder (10g) for laboratory formulation and testing.",
    "reconstitution": "Dissolve in suitable analytical solvent for testing",
    "storage": "Store dry at 2–8°C or -20°C in airtight container.",
    "form": "Bulk Raw Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "ahk-cu-raws",
    "name": "AHK-CU raws 10g/bottle",
    "category": "Raw Materials",
    "categories": [
      "Raw Materials"
    ],
    "price": "$59.99",
    "sku": "FLX-AHK-CU-RAWS",
    "quantity": "10g bottle",
    "status": "In Stock",
    "description": "Analytical bulk raw AHK-Cu copper peptide powder (10g) for follicular and dermatological research.",
    "reconstitution": "Dissolve in suitable analytical solvent for testing",
    "storage": "Store dry at 2–8°C or -20°C in airtight container.",
    "form": "Bulk Raw Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "melanotan-2",
    "name": "Melanotan 2 10MG",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "FLX-MELANOTAN-2",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Cyclic melanocortin receptor agonist peptide standard for pigmentary and photobiological assays.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "tirzepatide-60",
    "name": "Tirzepatide 60MG",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "FLX-TIRZEPATIDE-60",
    "quantity": "60mg",
    "status": "In Stock",
    "description": "High-yield dual GIP/GLP-1 receptor agonist peptide standard for extended laboratory projects.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "illumineuro",
    "name": "ILLUMINEURO",
    "category": "Research Materials",
    "categories": [
      "Research Materials"
    ],
    "price": "$59.99",
    "sku": "FLX-ILLUMINEURO",
    "quantity": "Standard Unit",
    "status": "In Stock",
    "description": "Specialized nootropic research compound formulation investigated for neurotrophic and synaptic signaling.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "5-amino-1mq-50",
    "name": "5-AMINO-1MQ 50MG",
    "category": "Research Materials",
    "categories": [
      "Research Materials"
    ],
    "price": "$59.99",
    "sku": "FLX-5-AMINO-1MQ-50",
    "quantity": "50mg",
    "status": "In Stock",
    "description": "Bulk NNMT inhibitor standard for concentration-dependent metabolic enzyme investigations.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "retatrutide-30",
    "name": "Retatrutide 30MG",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$59.99",
    "sku": "FLX-RETATRUTIDE-30",
    "quantity": "30mg",
    "status": "In Stock",
    "description": "High-purity triple incretin agonist for comparative endocrine and receptor activation models.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "bam15-slu",
    "name": "BAM15 / SLU blend",
    "category": "Blends",
    "categories": [
      "Blends"
    ],
    "price": "$59.99",
    "sku": "FLX-BAM15-SLU",
    "quantity": "Standard Blend",
    "status": "In Stock",
    "description": "Dual mitochondrial uncoupler and ERR agonist research blend for cellular bioenergetics evaluation.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  },
  {
    "id": "survodutide-10",
    "name": "Survodutide 10mg",
    "category": "Peptides",
    "categories": [
      "Peptides"
    ],
    "price": "$89.99",
    "sku": "FLX-SURVODUTIDE-10",
    "quantity": "10mg",
    "status": "In Stock",
    "description": "Dual glucagon/GLP-1 receptor agonist peptide investigated for hepatic and metabolic pathways.",
    "reconstitution": "Reconstitute with Reconstitution Solution.",
    "storage": "Reconstituted: 2–8°C (56 days) | Dry Powder: -20°C (1+ year)",
    "form": "Lyophilized Powder",
    "source": "felixchem_catalog"
  }
];

// Global App State
let currentCategory = "All";
let searchQuery = "";
let sortBy = "name-asc";
let selectedCryptoTab = "ETH";

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
  initTopDisclaimer();
  renderCatalog();
  populateOrderFormProducts();
  setupEventListeners();
  renderPaymentDetails();
  initModal();
});

// Initialize Top Disclaimer Toggle
function initTopDisclaimer() {
  const toggleBtn = document.getElementById("toggleDisclaimerBtn");
  const drawer = document.getElementById("topDisclaimerFull");
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("open");
      if (isOpen) {
        drawer.classList.remove("open");
        toggleBtn.innerHTML = `<span>View Full Regulatory &amp; 21CFR Notice</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
        toggleBtn.setAttribute("aria-expanded", "false");
      } else {
        drawer.classList.add("open");
        toggleBtn.innerHTML = `<span>Hide Full Regulatory Notice</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
        toggleBtn.setAttribute("aria-expanded", "true");
      }
    });
  }
}

// Initialize Scroll Progress Indicator
function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + "%";
  });
}

// Render Catalog Grid with straight-to-the-point product cards
function renderCatalog() {
  const grid = document.getElementById("productGrid");
  const countEl = document.getElementById("productCount");
  if (!grid) return;

  let filtered = [...products];

  // Category filter
  if (currentCategory !== "All") {
    filtered = filtered.filter(p => p.category === currentCategory || (p.categories && p.categories.includes(currentCategory)));
  }

  // Search filter
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.quantity.toLowerCase().includes(q) ||
      (p.sku && p.sku.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Sort logic (Safe numeric and string sorting)
  if (sortBy === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "price-asc") {
    filtered.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')));
  } else if (sortBy === "price-desc") {
    filtered.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')));
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
        <p style="color:var(--fx-text-sub);font-size:0.9rem;">Try adjusting your search terms or category selection.</p>
        <button class="btn-cta-secondary" onclick="resetFilters()" style="margin-top:14px;">Reset Filters</button>
      </div>
    `;
    return;
  }

  // Cards render (Concise, straight to the point, clean characters, active WhatsApp without visible number)
  grid.innerHTML = filtered.map(p => {
    const waText = encodeURIComponent(`Hello Felix Chemical Supply, I would like to order: ${p.name} (${p.quantity}, Price: ${p.price}, SKU: ${p.sku}).`);
    const waLink = `https://wa.me/${CONFIG.PHONE_CLEAN}?text=${waText}`;

    return `
      <article class="product-card" id="card-${p.id}">
        <div>
          <div class="card-top">
            <div class="card-emblem" aria-hidden="true" title="Analytical Standard">
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
              <span class="tag-status-available">${p.status || 'In Stock'}</span>
            </div>
          </div>

          <div class="card-title-price-row">
            <h3 class="product-name">${p.name}</h3>
            <div class="product-price-tag">${p.price}</div>
          </div>

          <div class="card-sub-specs">
            <span class="product-quantity">${p.quantity}</span>
            <span class="sku-badge">SKU: ${p.sku}</span>
          </div>

          <p class="product-desc">${p.description}</p>

          <div class="spec-pills-list">
            <div class="spec-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              <span>${p.form || 'Lyophilized Powder'}</span>
            </div>
            <div class="spec-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${p.storage || 'Refrigerate (2–8°C) recon | Freeze (-20°C) dry'}</span>
            </div>
          </div>
        </div>

        <div class="card-footer-block">
          <div class="card-actions-grid">
            <button type="button" class="btn-card-specs" onclick="openProductModal('${p.id}')" title="View details and reconstitution specs for ${p.name}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span>Specs &amp; Details</span>
            </button>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-card-order" title="Order via WhatsApp">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>WhatsApp Order</span>
            </a>
          </div>
          <button type="button" class="btn-card-inquire-full" onclick="selectProductForOrder('${p.id}')">
            Select for Inquiry Form
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// Open Product Modal with Concise, Straight-to-the-point Details
window.openProductModal = function(productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const modal = document.getElementById("productDetailModal");
  const modalContent = document.getElementById("productModalBody");
  if (!modal || !modalContent) return;

  const waText = encodeURIComponent(`Hello Felix Chemical Supply, I would like to order: ${p.name} (${p.quantity}, Price: ${p.price}, SKU: ${p.sku}).`);
  const waLink = `https://wa.me/${CONFIG.PHONE_CLEAN}?text=${waText}`;

  modalContent.innerHTML = `
    <div class="modal-product-header">
      <div class="modal-badge-row">
        <span class="tag-category">${p.category}</span>
        <span class="tag-status-available">${p.status || 'In Stock'}</span>
        <span class="sku-badge">SKU: ${p.sku}</span>
      </div>
      <h2 class="modal-product-title">${p.name}</h2>
      <div class="modal-product-price-row">
        <span class="modal-price">${p.price}</span>
        <span class="modal-quantity-tag">Specification: ${p.quantity}</span>
      </div>
    </div>

    <div class="modal-body">
      <div class="modal-section-box">
        <h4 class="modal-section-heading">Overview</h4>
        <p class="modal-desc-text">${p.description}</p>
      </div>

      <div class="modal-specs-table">
        <div class="modal-spec-row">
          <span class="spec-label">Physical State:</span>
          <span class="spec-value">${p.form || 'Lyophilized Powder'}</span>
        </div>
        <div class="modal-spec-row">
          <span class="spec-label">Reconstitution:</span>
          <span class="spec-value">${p.reconstitution || 'Reconstitute with Reconstitution Solution prior to use.'}</span>
        </div>
        <div class="modal-spec-row">
          <span class="spec-label">Storage Conditions:</span>
          <span class="spec-value">${p.storage || 'Refrigerate (2–8°C) recon (56d) • Deep freeze (-20°C) dry (1+ yr)'}</span>
        </div>
        <div class="modal-spec-row">
          <span class="spec-label">Regulatory Status:</span>
          <span class="spec-value" style="color:var(--fx-primary);font-weight:600;">21 CFR §§ 100-740 Laboratory Research Compound</span>
        </div>
      </div>

      <div class="modal-compliance-box">
        <strong>LABORATORY RESEARCH USE ONLY:</strong> This material is sold strictly for in-vitro laboratory analytical and scientific evaluation. Not for human consumption, nor medical, veterinary, or household uses.
      </div>

      <div class="modal-actions-row">
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-modal-whatsapp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>Order via WhatsApp</span>
        </a>
        <button type="button" class="btn-modal-inquire" onclick="selectProductFromModal('${p.id}')">
          Select for Order Form
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

// Close Product Modal
window.closeProductModal = function() {
  const modal = document.getElementById("productDetailModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// Initialize Modal Listeners
function initModal() {
  const modal = document.getElementById("productDetailModal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeProductModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProductModal();
    }
  });
}

window.selectProductFromModal = function(id) {
  closeProductModal();
  selectProductForOrder(id);
};

// Populate Product dropdown in Order Form (Clean native bullet separator)
function populateOrderFormProducts() {
  const select = document.getElementById("orderProductSelect");
  if (!select) return;

  select.innerHTML = `<option value="">-- Choose a research compound (${products.length} items) --</option>` +
    products.map(p => `<option value="${p.name}">${p.name} (${p.price} • ${p.quantity} • SKU: ${p.sku})</option>`).join("");
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

  // Crypto Tabs
  const cryptoTabs = document.querySelectorAll(".crypto-tab-btn");
  cryptoTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      cryptoTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      selectedCryptoTab = tab.getAttribute("data-crypto") || "ETH";
      renderPaymentDetails();
    });
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobileMenuToggle");
  const nav = document.getElementById("siteNav");
  if (mobileBtn && nav) {
    mobileBtn.addEventListener("click", () => {
      if (nav.classList.contains("mobile-open")) {
        nav.classList.remove("mobile-open");
      } else {
        nav.classList.add("mobile-open");
      }
    });
  }

  // Order form submission
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", handleOrderSubmit);
  }
}

// Render Payment Details according to selected crypto tab (ETH, BTC, SOL)
function renderPaymentDetails() {
  const panel = document.getElementById("paymentDetailsPanel");
  if (!panel) return;

  const cryptoConfig = CONFIG.PAYMENT_ADDRESSES[selectedCryptoTab] || CONFIG.PAYMENT_ADDRESSES.ETH;

  panel.innerHTML = `
    <div class="payment-details-grid">
      <div class="payment-spec-box">
        <div class="payment-spec-label">Selected Currency</div>
        <div class="payment-spec-val" style="color:var(--fx-primary);">${cryptoConfig.name}</div>
      </div>
      <div class="payment-spec-box">
        <div class="payment-spec-label">Blockchain Network</div>
        <div class="payment-spec-val">${cryptoConfig.network}</div>
      </div>
      <div class="payment-spec-box">
        <div class="payment-spec-label">Order Verification</div>
        <div class="payment-spec-val" style="color:var(--fx-success);">Via WhatsApp &amp; Telegram</div>
      </div>
    </div>

    <div class="payment-address-card">
      <div class="address-title-row">
        <span class="address-label">${cryptoConfig.network} Deposit Address:</span>
        <span class="network-badge">${cryptoConfig.tag}</span>
      </div>
      <div class="address-flex">
        <code class="address-code-block" id="paymentAddressText">${cryptoConfig.address}</code>
        <button type="button" class="btn-copy-address" id="copyAddressBtn" onclick="copyCurrentAddress('${cryptoConfig.address}', '${cryptoConfig.name}')" title="Copy Address">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span>Copy Address</span>
        </button>
      </div>
      <div class="address-sub-notice">
        ${cryptoConfig.note}
      </div>
    </div>
  `;
}

// Handle Order Form Submit
function handleOrderSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("orderName")?.value.trim() || "";
  const phone = document.getElementById("orderPhone")?.value.trim() || "";
  const product = document.getElementById("orderProductSelect")?.value || "";
  const quantity = document.getElementById("orderQuantity")?.value.trim() || "";
  const address = document.getElementById("orderAddress")?.value.trim() || "";
  const cryptoChoice = document.getElementById("orderCrypto")?.value || "USDT (Ethereum - ERC20)";
  const txid = document.getElementById("orderTxid")?.value.trim() || "Pending / Will send hash";
  const notes = document.getElementById("orderNotes")?.value.trim() || "";

  if (!product) {
    showToast("Please select a research compound from the catalog.", "warning");
    return;
  }

  // Format order message for WhatsApp
  const orderMessage = `*FELIX CHEMICAL SUPPLY — NEW RESEARCH INQUIRY*
---------------------------------------
*Researcher / Institution:* ${name}
*Contact Phone:* ${phone}
*Selected Compound:* ${product}
*Quantity Requested:* ${quantity}
*Shipping Address:* ${address}
*Payment Currency:* ${cryptoChoice}
*Transaction ID / TXID:* ${txid}
*Special Instructions:* ${notes || "None"}
---------------------------------------
_This inquiry is submitted for in-vitro laboratory research and analytical evaluation only._`;

  const waUrl = `https://wa.me/${CONFIG.PHONE_CLEAN}?text=${encodeURIComponent(orderMessage)}`;

  showToast("Preparing order for WhatsApp verification...", "success");

  setTimeout(() => {
    window.open(waUrl, "_blank");
  }, 600);
}

// Select Product for Order Form
window.selectProductForOrder = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const select = document.getElementById("orderProductSelect");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === product.name) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  const quantityInput = document.getElementById("orderQuantity");
  if (quantityInput && !quantityInput.value) {
    quantityInput.value = `1 Unit (${product.quantity})`;
  }

  const orderSection = document.getElementById("order");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" });
  }

  showToast(`Selected ${product.name} in Order Form`, "info");
};

// Copy Current Payment Address
window.copyCurrentAddress = function(address, name) {
  if (!navigator.clipboard) {
    const tempInput = document.createElement("input");
    tempInput.value = address;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast(`Copied ${name} address to clipboard!`, "success");
    return;
  }

  navigator.clipboard.writeText(address).then(() => {
    showToast(`Copied ${name} address to clipboard!`, "success");
  }).catch(() => {
    showToast("Failed to copy. Please copy manually.", "warning");
  });
};

// Reset Filters
window.resetFilters = function() {
  currentCategory = "All";
  searchQuery = "";
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
};

// Toast Notification System
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-message toast-${type}`;
  
  let iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  if (type === "success") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
  } else if (type === "warning") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("toast-show");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}
