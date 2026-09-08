/**
 * Felix Chemical Supply — Official Application Logic
 * Certificates of Analysis (COA) Archive sourced exclusively from Google Drive.
 * Zero external third-party links or files.
 * Strictly NO vial imagery or references.
 */

const CONFIG = {
  COMPANY_NAME: "Felix Chemical Supply",
  PHONE: "+1 659 221 9964",
  PHONE_CLEAN: "16592219964",
  WHATSAPP_URL: "https://wa.me/16592219964",
  TELEGRAM_URL: "https://t.me/felixchemicalsupply",
  GOOGLE_DRIVE_URL: "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
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

// Research Materials Catalog
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
    "coas": [
      {
        "id": "coa-75",
        "batch": "020526-IPA-B",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Ipamorelin 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-3",
        "batch": "022526-DSP-D",
        "date": "Feb 25, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-4",
        "batch": "121525-DSP-D",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-5",
        "batch": "102125-DSP-9",
        "date": "Oct 21, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-6",
        "batch": "081825-DSP-C",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-7",
        "batch": "020526-DSP-1",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-52",
        "batch": "041626-GHK-6",
        "date": "Apr 16, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-53",
        "batch": "121525-GHK-5",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-54",
        "batch": "100825-GHK-6",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-55",
        "batch": "100125-GHK-B",
        "date": "Oct 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-56",
        "batch": "081125-GHK-1",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-57",
        "batch": "071025-GHK-1",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-58",
        "batch": "071025-GHK-1",
        "date": "Jul 10, 2025",
        "lab": "Chromate Labs",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-59",
        "batch": "062625-GHK-3",
        "date": "Jun 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-60",
        "batch": "040825-GHK-A",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-61",
        "batch": "042326-GH5-C",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-62",
        "batch": "041326-GH5-1",
        "date": "Apr 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-63",
        "batch": "021026-G50-C",
        "date": "Feb 10, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-8",
        "batch": "010226-5AM-D",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "5-Amino-1MQ 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-9",
        "batch": "102725-5AM-D",
        "date": "Oct 27, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "5-Amino-1MQ 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-10",
        "batch": "020526-5AM-7",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "5-Amino-1MQ 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-251",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "5-Amino-1MQ 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-1",
        "batch": "010726-BT5-0",
        "date": "Jan 7, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 + TB-500 Blend - 5mg/5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-2",
        "batch": "110425-BT5-C",
        "date": "Nov 4, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 + TB-500 Blend - 5mg/5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-250",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "BPC-157 + TB-500 5mg/5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-185",
        "batch": "042326-TS1-1",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-186",
        "batch": "033126-TS1-6",
        "date": "Mar 31, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-187",
        "batch": "122925-TES-1",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-188",
        "batch": "121525-TSM-0",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-189",
        "batch": "120125-TES-C",
        "date": "Dec 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-190",
        "batch": "112425-TES-0",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-191",
        "batch": "100825-TS1-1",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-192",
        "batch": "081825-TSM-0",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-193",
        "batch": "071025-TES-6",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-194",
        "batch": "070225-TES-0",
        "date": "Jul 2, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-195",
        "batch": "060525-TES-6",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-196",
        "batch": "041326-TS5-0",
        "date": "Apr 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-197",
        "batch": "030226-TS5-1",
        "date": "Mar 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-198",
        "batch": "102725-TE5-C",
        "date": "Oct 27, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-199",
        "batch": "081125-TE5-C",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-8",
        "batch": "010226-5AM-D",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "5-Amino-1MQ 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-9",
        "batch": "102725-5AM-D",
        "date": "Oct 27, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "5-Amino-1MQ 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-10",
        "batch": "020526-5AM-7",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "5-Amino-1MQ 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-251",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "5-Amino-1MQ 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-153",
        "batch": "022526-TA1-1",
        "date": "Feb 25, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Thymosin Alpha-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-154",
        "batch": "112425-TA1-0",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Thymosin Alpha-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-155",
        "batch": "081925-TA1-0",
        "date": "Aug 19, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Thymosin Alpha-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-156",
        "batch": "020526-TA1-9",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Thymosin Alpha-1 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-3",
        "batch": "022526-DSP-D",
        "date": "Feb 25, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-4",
        "batch": "121525-DSP-D",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-5",
        "batch": "102125-DSP-9",
        "date": "Oct 21, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-6",
        "batch": "081825-DSP-C",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-7",
        "batch": "020526-DSP-1",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "DSIP (Deep Sleep Inducing Peptide) 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-84",
        "batch": "122925-MT2-D",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-2 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-85",
        "batch": "112425-MT2-D",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-2 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-86",
        "batch": "092525-MT2-D",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-2 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-87",
        "batch": "081125-MT2-0",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-2 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-88",
        "batch": "102825-MT1-C",
        "date": "Oct 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-89",
        "batch": "101525-MT1-9",
        "date": "Oct 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-90",
        "batch": "100625-MT1-A",
        "date": "Oct 6, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-91",
        "batch": "081125-MT1-C",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-252",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-II 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-253",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-I 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-88",
        "batch": "102825-MT1-C",
        "date": "Oct 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-89",
        "batch": "101525-MT1-9",
        "date": "Oct 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-90",
        "batch": "100625-MT1-A",
        "date": "Oct 6, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-91",
        "batch": "081125-MT1-C",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-252",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-II 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-253",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-I 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-258",
        "batch": "Hospira Sterile Analytical Standard",
        "date": "Verified Lot",
        "lab": "Hospira Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Reconstitution Solution - 10ml / 30ml",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-76",
        "batch": "112125-KPV-C",
        "date": "Nov 21, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-77",
        "batch": "100825-KPV-B",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-78",
        "batch": "071025-KPV-1",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "KPV 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-79",
        "batch": "020526-KPV-C",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-64",
        "batch": "010226-KLO-9",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-65",
        "batch": "122925-KLO-9",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-66",
        "batch": "112425-KLO-C",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-67",
        "batch": "100425-KLO-D",
        "date": "Oct 4, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-68",
        "batch": "071025-KLO-7",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-111",
        "batch": "121925-SS-C",
        "date": "Dec 19, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-31 25mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-112",
        "batch": "090825-SS2-D",
        "date": "Sep 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-31 25mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-113",
        "batch": "010726-SS6-0",
        "date": "Jan 7, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-31 60mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-114",
        "batch": "111325-SS6-6",
        "date": "Nov 13, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-31 60mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-115",
        "batch": "102525-SS6-3",
        "date": "Oct 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-31 60mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-116",
        "batch": "071025-SS6-5",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-31 60mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-254",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-31 60mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-200",
        "batch": "102725-C5-6",
        "date": "Oct 27, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-C 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-201",
        "batch": "090825-C05-D",
        "date": "Sep 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-202",
        "batch": "061725-C5-B",
        "date": "Jun 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-203",
        "batch": "030426-R50-0",
        "date": "Mar 4, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-R 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-204",
        "batch": "022526-R50-6",
        "date": "Feb 25, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-R 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-205",
        "batch": "090925-R50-4",
        "date": "Sep 9, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-206",
        "batch": "082125-R50-D",
        "date": "Aug 21, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-207",
        "batch": "071525-R50-4",
        "date": "Jul 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-208",
        "batch": "060525-R50-8",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 50mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-178",
        "batch": "030226-C10-B",
        "date": "Mar 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-C 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-179",
        "batch": "010226-C10-1",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-C 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-180",
        "batch": "121925-C10-1",
        "date": "Dec 19, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-C 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-181",
        "batch": "81825-C10-B",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-182",
        "batch": "061725-C10-9",
        "date": "Jun 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-183",
        "batch": "060525-C10-9",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-184",
        "batch": "022825-C10",
        "date": "Feb 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-164",
        "batch": "121925-C20-6",
        "date": "Dec 19, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-C 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-165",
        "batch": "090425-C20-6",
        "date": "Sep 4, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-166",
        "batch": "081125-C20-D",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-167",
        "batch": "060525-C20-7",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-168",
        "batch": "040825-C20-A",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-C 20mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-209",
        "batch": "042326-R20-6",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-R 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-210",
        "batch": "030426-R20-A",
        "date": "Mar 4, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-R 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-211",
        "batch": "022526-R20-C",
        "date": "Feb 25, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-R 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-212",
        "batch": "091125-R20-C",
        "date": "Sep 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-213",
        "batch": "082825-R20-8",
        "date": "Aug 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-214",
        "batch": "062625-R20-6",
        "date": "Jun 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-215",
        "batch": "060525-R20-4",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 20mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-216",
        "batch": "022825-R20",
        "date": "Feb 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 20mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-217",
        "batch": "012026-R10-3",
        "date": "Jan 20, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-R 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-218",
        "batch": "011426-R10-9",
        "date": "Jan 14, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-R 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-219",
        "batch": "121525-R10-1",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-R 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-220",
        "batch": "082825-R10-A",
        "date": "Aug 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-221",
        "batch": "081125-R10-9",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-222",
        "batch": "081125-R10-9",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-223",
        "batch": "070225-R10-1",
        "date": "Jul 2, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-224",
        "batch": "060525-R10-D",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-225",
        "batch": "022825-R10",
        "date": "Feb 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-R 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": []
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
    "coas": []
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-241",
        "batch": "030226-S5-A",
        "date": "Mar 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-242",
        "batch": "121525-S5-C",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-243",
        "batch": "111525-S5-F",
        "date": "Nov 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-244",
        "batch": "111425-S5-1",
        "date": "Nov 14, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-245",
        "batch": "092525-S5-1",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-246",
        "batch": "061725-S5-1",
        "date": "Jun 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-247",
        "batch": "060525-S5-5",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-248",
        "batch": "040825-S05-W",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-249",
        "batch": "022825-S5",
        "date": "Feb 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-226",
        "batch": "030226-S15-9",
        "date": "Mar 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 15mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-227",
        "batch": "121525-S15-6",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 15mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-228",
        "batch": "111825-S15-D",
        "date": "Nov 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 15mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-229",
        "batch": "060525-S15-B",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 15mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-230",
        "batch": "060525-S15-4",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 15mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-231",
        "batch": "060525-S15-3",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 15mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-232",
        "batch": "040825-S15-W",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 15mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-233",
        "batch": "022825-S15",
        "date": "Feb 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 15mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-234",
        "batch": "010726-S10-B",
        "date": "Jan 7, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-235",
        "batch": "121525-S10-A",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-236",
        "batch": "111825-S10-C",
        "date": "Nov 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-237",
        "batch": "092525-S10-0",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-S 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-238",
        "batch": "061725-S10-C",
        "date": "Jun 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-239",
        "batch": "060525-S10-C",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-240",
        "batch": "022825-S10",
        "date": "Feb 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-S 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-185",
        "batch": "042326-TS1-1",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-186",
        "batch": "033126-TS1-6",
        "date": "Mar 31, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-187",
        "batch": "122925-TES-1",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-188",
        "batch": "121525-TSM-0",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-189",
        "batch": "120125-TES-C",
        "date": "Dec 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-190",
        "batch": "112425-TES-0",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-191",
        "batch": "100825-TS1-1",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-192",
        "batch": "081825-TSM-0",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-193",
        "batch": "071025-TES-6",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-194",
        "batch": "070225-TES-0",
        "date": "Jul 2, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-195",
        "batch": "060525-TES-6",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-196",
        "batch": "041326-TS5-0",
        "date": "Apr 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-197",
        "batch": "030226-TS5-1",
        "date": "Mar 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-198",
        "batch": "102725-TE5-C",
        "date": "Oct 27, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-199",
        "batch": "081125-TE5-C",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-157",
        "batch": "021326-SER-C",
        "date": "Feb 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Sermorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-158",
        "batch": "122925-SEM-0",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Sermorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-159",
        "batch": "121525-SER-C",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Sermorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-160",
        "batch": "121525-SER-0",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Sermorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-161",
        "batch": "81825-SER-8",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Sermorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-162",
        "batch": "060525-SER-1",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Sermorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-163",
        "batch": "020526-SER-B",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Sermorelin 5mg​",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-140",
        "batch": "010726-SMX-7",
        "date": "Jan 7, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Semax 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-141",
        "batch": "121525-SEM-7",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Semax 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-142",
        "batch": "102125-SMX-9",
        "date": "Oct 21, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Semax 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-143",
        "batch": "100225-SMX-9",
        "date": "Oct 2, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Semax 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-144",
        "batch": "81825-SMX-9",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Semax 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-145",
        "batch": "072625-SMX-9",
        "date": "Jul 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Semax 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-146",
        "batch": "060525-SEM-1",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Semax 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-133",
        "batch": "010726-SLK-0",
        "date": "Jan 7, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Selank 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-134",
        "batch": "121525-SEL-0",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Selank 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-135",
        "batch": "101525-SLK-9",
        "date": "Oct 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Selank 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-136",
        "batch": "100625-SLK-0",
        "date": "Oct 6, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Selank 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-137",
        "batch": "081825-SLK-1",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Selank 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-138",
        "batch": "072125-SEL-9",
        "date": "Jul 21, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Selank 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-139",
        "batch": "060525-SEL-5",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Selank 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-69",
        "batch": "020226-IPA-6",
        "date": "Feb 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Ipamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-70",
        "batch": "011426-IPA-D",
        "date": "Jan 14, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Ipamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-71",
        "batch": "121525-IPA-0",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Ipamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-72",
        "batch": "081825-IPA-0",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Ipamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-73",
        "batch": "071725-IPA-0",
        "date": "Jul 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Ipamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-74",
        "batch": "060525-IPA-1",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Ipamorelin 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-14",
        "batch": "022526-GLU-C",
        "date": "Feb 25, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Glutathione 1200mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-15",
        "batch": "101525-GLU-C",
        "date": "Oct 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Glutathione 1200mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-16",
        "batch": "060525-GLU-1",
        "date": "Jun 5, 2025",
        "lab": "Chromate Labs",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Glutathione 1200mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-17",
        "batch": "020526-5AM-7",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Glutathione 600mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-29",
        "batch": "021326-CJC-1",
        "date": "Feb 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-30",
        "batch": "100825-CJC-1",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-31",
        "batch": "100625-CJC-A",
        "date": "Oct 6, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-32",
        "batch": "092525-CJC-8",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-33",
        "batch": "072625-CJC-A",
        "date": "Jul 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-34",
        "batch": "071725-CJC-1",
        "date": "Jul 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-35",
        "batch": "060525-CJI-1",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-18",
        "batch": "121525-EPI-C",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Epitalon 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-19",
        "batch": "112425-EPI-0",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Epitalon 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-20",
        "batch": "060525-EPI-X",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Epitalon 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-21",
        "batch": "020526-EPI-9",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Epitalon 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-22",
        "batch": "020526-EPI-B",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Epitalon 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-11",
        "batch": "022526-GLO-0",
        "date": "Feb 25, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mgTB-500 10mgGHK-cu 70mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-12",
        "batch": "102825-GLO-9",
        "date": "Oct 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mgTB-500 10mgGHK-cu 70mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-13",
        "batch": "071025-GLO-9",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "BPC-157 10mgTB-500 10mgGHK-cu 70mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-258",
        "batch": "Hospira Sterile Analytical Standard",
        "date": "Verified Lot",
        "lab": "Hospira Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Reconstitution Solution - 10ml / 30ml",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-169",
        "batch": "010226-TB5-0",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-170",
        "batch": "122925-TB5-0",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-171",
        "batch": "121525-TB5-A",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-172",
        "batch": "100125-TB5-A",
        "date": "Oct 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-173",
        "batch": "092525-TB5-A",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-174",
        "batch": "081825-TB5-A",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-175",
        "batch": "071725-TB5-A",
        "date": "Jul 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-176",
        "batch": "061725-TB5-C",
        "date": "Jun 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-177",
        "batch": "040825-TB10-A",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-111",
        "batch": "121925-SS-C",
        "date": "Dec 19, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-31 25mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-112",
        "batch": "090825-SS2-D",
        "date": "Sep 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-31 25mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-113",
        "batch": "010726-SS6-0",
        "date": "Jan 7, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-31 60mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-114",
        "batch": "111325-SS6-6",
        "date": "Nov 13, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-31 60mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-115",
        "batch": "102525-SS6-3",
        "date": "Oct 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Peptide-31 60mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-116",
        "batch": "071025-SS6-5",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-31 60mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-255",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Peptide-31 25mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-147",
        "batch": "010726-SNP-8",
        "date": "Jan 7, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "SNAP-8 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-148",
        "batch": "121525-SNP-8",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "SNAP-8 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-149",
        "batch": "101525-SNP-6",
        "date": "Oct 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "SNAP-8 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-150",
        "batch": "100625-SNP-C",
        "date": "Oct 6, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "SNAP-8 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-151",
        "batch": "061725-SNP-1",
        "date": "Jun 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "SNAP-8 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-152",
        "batch": "022825-SNAP10",
        "date": "Feb 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "SNAP-8 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-126",
        "batch": "030226-PT1-6",
        "date": "Mar 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "PT-141 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-127",
        "batch": "120425-PT-8",
        "date": "Dec 4, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "PT-141 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-128",
        "batch": "092525-PT-1",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "PT-141 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-129",
        "batch": "091025-PT1-1",
        "date": "Sep 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "PT-141 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-130",
        "batch": "090225-PT10-A",
        "date": "Sep 2, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "PT-141 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-131",
        "batch": "022825-PT10",
        "date": "Feb 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "PT-141 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-132",
        "batch": "020526-PT5-0",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "PT-141 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-117",
        "batch": "042326-NAD-6",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-118",
        "batch": "031126-NAD-A",
        "date": "Mar 11, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-119",
        "batch": "121525-NAD-4",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-120",
        "batch": "111725-NAD-1",
        "date": "Nov 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-121",
        "batch": "100425-NAD-6",
        "date": "Oct 4, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-122",
        "batch": "092525-NAD-A",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-123",
        "batch": "081825-NAD-B",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-124",
        "batch": "061825-NAD-B",
        "date": "Jun 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-125",
        "batch": "060525-NAD-C",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-100",
        "batch": "022526-MOT-6",
        "date": "Feb 25, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-101",
        "batch": "010226-MOT-9",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-102",
        "batch": "122925-MOT-9",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-103",
        "batch": "112425-MOT-9",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-104",
        "batch": "100125-MOT-1",
        "date": "Oct 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-105",
        "batch": "092525-MOT-B",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-106",
        "batch": "081825-MOT-B",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-107",
        "batch": "081125-MOT-8",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-108",
        "batch": "072625-MOT-8",
        "date": "Jul 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-109",
        "batch": "061925-MOT-1",
        "date": "Jun 19, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-110",
        "batch": "060525-MOT-B",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "MOTS-c 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-92",
        "batch": "011226-LPC-B",
        "date": "Jan 12, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-C 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-93",
        "batch": "103025-LPC-B",
        "date": "Oct 30, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-C 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-94",
        "batch": "102825-LPC-C",
        "date": "Oct 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-C 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-95",
        "batch": "102725-LPC-0",
        "date": "Oct 27, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-C 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-96",
        "batch": "101525-LCC-C",
        "date": "Oct 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-C 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-97",
        "batch": "100825-LPC-B",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-C 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-98",
        "batch": "092525-LPC-B",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-C 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-99",
        "batch": "111425-LC3-C",
        "date": "Nov 14, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-C 30ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-256",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "LIPO-C 10ml",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-80",
        "batch": "103025-LBC-B",
        "date": "Oct 30, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-B 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-81",
        "batch": "100825-LPB-C",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-B 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-82",
        "batch": "092525-LPB-C",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-B 10ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-83",
        "batch": "112525-LB3-3",
        "date": "Nov 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "LIPO-B 30ml",
        "source": "Google Drive"
      },
      {
        "id": "coa-257",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "LIPO-B 10ml",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-52",
        "batch": "041626-GHK-6",
        "date": "Apr 16, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-53",
        "batch": "121525-GHK-5",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-54",
        "batch": "100825-GHK-6",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-55",
        "batch": "100125-GHK-B",
        "date": "Oct 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-56",
        "batch": "081125-GHK-1",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-57",
        "batch": "071025-GHK-1",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-58",
        "batch": "071025-GHK-1",
        "date": "Jul 10, 2025",
        "lab": "Chromate Labs",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-59",
        "batch": "062625-GHK-3",
        "date": "Jun 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-60",
        "batch": "040825-GHK-A",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-61",
        "batch": "042326-GH5-C",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-62",
        "batch": "041326-GH5-1",
        "date": "Apr 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-63",
        "batch": "021026-G50-C",
        "date": "Feb 10, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-23",
        "batch": "020226-AOD-7",
        "date": "Feb 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "AOD-9604 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-24",
        "batch": "102825-AOD-9",
        "date": "Oct 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "AOD-9604 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-25",
        "batch": "092525-AOD-D",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "AOD-9604 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-26",
        "batch": "061925-AOD-D",
        "date": "Jun 19, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "AOD-9604 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-27",
        "batch": "060525-AOD-B",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "AOD-9604 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-28",
        "batch": "022825-AOD-5",
        "date": "Feb 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "AOD-9604 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-36",
        "batch": "042326-BPC-5",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-37",
        "batch": "031326-BPC-1",
        "date": "Mar 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-38",
        "batch": "010226-BPC-1",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-39",
        "batch": "010226-BPC-5",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-40",
        "batch": "121525-BPC-C",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-41",
        "batch": "120125-BPC-1",
        "date": "Dec 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-42",
        "batch": "100825-BPC-5",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-43",
        "batch": "100125-BPC-1",
        "date": "Oct 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-44",
        "batch": "092525-BPC-1",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-45",
        "batch": "081925-BPC-6",
        "date": "Aug 19, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-46",
        "batch": "081925-BPC-6",
        "date": "Aug 19, 2025",
        "lab": "Chromate Labs",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-47",
        "batch": "081825-BPC-1",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-48",
        "batch": "072625-BPC-1",
        "date": "Jul 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-49",
        "batch": "062625-BPC-1",
        "date": "Jun 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-50",
        "batch": "060525-BPC-D",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-51",
        "batch": "040825-BPC5-A",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "BPC-157 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": []
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-1",
        "batch": "010726-BT5-0",
        "date": "Jan 7, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 + TB-500 Blend - 5mg/5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-2",
        "batch": "110425-BT5-C",
        "date": "Nov 4, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "BPC-157 + TB-500 Blend - 5mg/5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-185",
        "batch": "042326-TS1-1",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-186",
        "batch": "033126-TS1-6",
        "date": "Mar 31, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-187",
        "batch": "122925-TES-1",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-188",
        "batch": "121525-TSM-0",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-189",
        "batch": "120125-TES-C",
        "date": "Dec 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-190",
        "batch": "112425-TES-0",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-191",
        "batch": "100825-TS1-1",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-192",
        "batch": "081825-TSM-0",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-193",
        "batch": "071025-TES-6",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-194",
        "batch": "070225-TES-0",
        "date": "Jul 2, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-195",
        "batch": "060525-TES-6",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-196",
        "batch": "041326-TS5-0",
        "date": "Apr 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-197",
        "batch": "030226-TS5-1",
        "date": "Mar 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-198",
        "batch": "102725-TE5-C",
        "date": "Oct 27, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-199",
        "batch": "081125-TE5-C",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Tesamorelin 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-52",
        "batch": "041626-GHK-6",
        "date": "Apr 16, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-53",
        "batch": "121525-GHK-5",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-54",
        "batch": "100825-GHK-6",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-55",
        "batch": "100125-GHK-B",
        "date": "Oct 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-56",
        "batch": "081125-GHK-1",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-57",
        "batch": "071025-GHK-1",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-58",
        "batch": "071025-GHK-1",
        "date": "Jul 10, 2025",
        "lab": "Chromate Labs",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-59",
        "batch": "062625-GHK-3",
        "date": "Jun 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-60",
        "batch": "040825-GHK-A",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-61",
        "batch": "042326-GH5-C",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-62",
        "batch": "041326-GH5-1",
        "date": "Apr 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-63",
        "batch": "021026-G50-C",
        "date": "Feb 10, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-76",
        "batch": "112125-KPV-C",
        "date": "Nov 21, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-77",
        "batch": "100825-KPV-B",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-78",
        "batch": "071025-KPV-1",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "KPV 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-79",
        "batch": "020526-KPV-C",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-153",
        "batch": "022526-TA1-1",
        "date": "Feb 25, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Thymosin Alpha-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-154",
        "batch": "112425-TA1-0",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Thymosin Alpha-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-155",
        "batch": "081925-TA1-0",
        "date": "Aug 19, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Thymosin Alpha-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-156",
        "batch": "020526-TA1-9",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Thymosin Alpha-1 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-76",
        "batch": "112125-KPV-C",
        "date": "Nov 21, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-77",
        "batch": "100825-KPV-B",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-78",
        "batch": "071025-KPV-1",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "KPV 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-79",
        "batch": "020526-KPV-C",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "KPV 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": [
      {
        "id": "coa-169",
        "batch": "010226-TB5-0",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-170",
        "batch": "122925-TB5-0",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-171",
        "batch": "121525-TB5-A",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-172",
        "batch": "100125-TB5-A",
        "date": "Oct 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-173",
        "batch": "092525-TB5-A",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-174",
        "batch": "081825-TB5-A",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-175",
        "batch": "071725-TB5-A",
        "date": "Jul 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-176",
        "batch": "061725-TB5-C",
        "date": "Jun 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-177",
        "batch": "040825-TB10-A",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "TB-500 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-117",
        "batch": "042326-NAD-6",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-118",
        "batch": "031126-NAD-A",
        "date": "Mar 11, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-119",
        "batch": "121525-NAD-4",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-120",
        "batch": "111725-NAD-1",
        "date": "Nov 17, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-121",
        "batch": "100425-NAD-6",
        "date": "Oct 4, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-122",
        "batch": "092525-NAD-A",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-123",
        "batch": "081825-NAD-B",
        "date": "Aug 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-124",
        "batch": "061825-NAD-B",
        "date": "Jun 18, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-125",
        "batch": "060525-NAD-C",
        "date": "Jun 5, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "NAD+ 500mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-52",
        "batch": "041626-GHK-6",
        "date": "Apr 16, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-53",
        "batch": "121525-GHK-5",
        "date": "Dec 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-54",
        "batch": "100825-GHK-6",
        "date": "Oct 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-55",
        "batch": "100125-GHK-B",
        "date": "Oct 1, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-56",
        "batch": "081125-GHK-1",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-57",
        "batch": "071025-GHK-1",
        "date": "Jul 10, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-58",
        "batch": "071025-GHK-1",
        "date": "Jul 10, 2025",
        "lab": "Chromate Labs",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-59",
        "batch": "062625-GHK-3",
        "date": "Jun 26, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-60",
        "batch": "040825-GHK-A",
        "date": "Apr 8, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "GHK-cu 100mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-61",
        "batch": "042326-GH5-C",
        "date": "Apr 23, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-62",
        "batch": "041326-GH5-1",
        "date": "Apr 13, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-63",
        "batch": "021026-G50-C",
        "date": "Feb 10, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "GHK-cu 50mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-84",
        "batch": "122925-MT2-D",
        "date": "Dec 29, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-2 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-85",
        "batch": "112425-MT2-D",
        "date": "Nov 24, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-2 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-86",
        "batch": "092525-MT2-D",
        "date": "Sep 25, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-2 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-87",
        "batch": "081125-MT2-0",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-2 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-88",
        "batch": "102825-MT1-C",
        "date": "Oct 28, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-89",
        "batch": "101525-MT1-9",
        "date": "Oct 15, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-90",
        "batch": "100625-MT1-A",
        "date": "Oct 6, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-91",
        "batch": "081125-MT1-C",
        "date": "Aug 11, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-1 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-252",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-II 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-253",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "Melanotan-I 10mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": []
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
    "coas": [
      {
        "id": "coa-8",
        "batch": "010226-5AM-D",
        "date": "Jan 2, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "5-Amino-1MQ 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-9",
        "batch": "102725-5AM-D",
        "date": "Oct 27, 2025",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "5-Amino-1MQ 5mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-10",
        "batch": "020526-5AM-7",
        "date": "Feb 5, 2026",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "pdf",
        "variant": "5-Amino-1MQ 10mg",
        "source": "Google Drive"
      },
      {
        "id": "coa-251",
        "batch": "Verified Product Gallery COA",
        "date": "Verified Lot",
        "lab": "Janoshik Analytical",
        "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
        "type": "image",
        "variant": "5-Amino-1MQ 5mg",
        "source": "Google Drive"
      }
    ]
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
    "coas": []
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
    "coas": []
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
    "coas": []
  }
];

// Certificates of Analysis (COAs) Database (Google Drive Repository)
const COAS_DATABASE = [
  {
    "id": "coa-1",
    "compound": "BPC-157 + TB-500 Blend",
    "variant": "BPC-157 + TB-500 Blend - 5mg/5mg",
    "batch": "010726-BT5-0",
    "fullBatch": "010726-BT5-0",
    "date": "Jan 7, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-2",
    "compound": "BPC-157 + TB-500 Blend",
    "variant": "BPC-157 + TB-500 Blend - 5mg/5mg",
    "batch": "110425-BT5-C",
    "fullBatch": "110425-BT5-C",
    "date": "Nov 4, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-3",
    "compound": "DSIP",
    "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
    "batch": "022526-DSP-D",
    "fullBatch": "022526-DSP-D",
    "date": "Feb 25, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-4",
    "compound": "DSIP",
    "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
    "batch": "121525-DSP-D",
    "fullBatch": "121525-DSP-D",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-5",
    "compound": "DSIP",
    "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
    "batch": "102125-DSP-9",
    "fullBatch": "102125-DSP-9",
    "date": "Oct 21, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-6",
    "compound": "DSIP",
    "variant": "DSIP (Deep Sleep Inducing Peptide) 10mg",
    "batch": "081825-DSP-C",
    "fullBatch": "081825-DSP-C",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-7",
    "compound": "DSIP",
    "variant": "DSIP (Deep Sleep Inducing Peptide) 5mg",
    "batch": "020526-DSP-1",
    "fullBatch": "020526-DSP-1",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-8",
    "compound": "5-Amino-1MQ",
    "variant": "5-Amino-1MQ 5mg",
    "batch": "010226-5AM-D",
    "fullBatch": "010226-5AM-D",
    "date": "Jan 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-9",
    "compound": "5-Amino-1MQ",
    "variant": "5-Amino-1MQ 5mg",
    "batch": "102725-5AM-D",
    "fullBatch": "102725-5AM-D",
    "date": "Oct 27, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-10",
    "compound": "5-Amino-1MQ",
    "variant": "5-Amino-1MQ 10mg",
    "batch": "020526-5AM-7",
    "fullBatch": "020526-5AM-7",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-11",
    "compound": "GLOW",
    "variant": "BPC-157 10mgTB-500 10mgGHK-cu 70mg",
    "batch": "022526-GLO-0",
    "fullBatch": "022526-GLO-0",
    "date": "Feb 25, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-12",
    "compound": "GLOW",
    "variant": "BPC-157 10mgTB-500 10mgGHK-cu 70mg",
    "batch": "102825-GLO-9",
    "fullBatch": "102825-GLO-9",
    "date": "Oct 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-13",
    "compound": "GLOW",
    "variant": "BPC-157 10mgTB-500 10mgGHK-cu 70mg",
    "batch": "071025-GLO-9",
    "fullBatch": "071025-GLO-9",
    "date": "Jul 10, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-14",
    "compound": "Glutathione",
    "variant": "Glutathione 1200mg",
    "batch": "022526-GLU-C",
    "fullBatch": "022526-GLU-C",
    "date": "Feb 25, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-15",
    "compound": "Glutathione",
    "variant": "Glutathione 1200mg",
    "batch": "101525-GLU-C",
    "fullBatch": "101525-GLU-C",
    "date": "Oct 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-16",
    "compound": "Glutathione",
    "variant": "Glutathione 1200mg",
    "batch": "060525-GLU-1",
    "fullBatch": "060525-GLU-1",
    "date": "Jun 5, 2025",
    "lab": "Chromate Labs",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-17",
    "compound": "Glutathione",
    "variant": "Glutathione 600mg",
    "batch": "020526-5AM-7",
    "fullBatch": "020526-5AM-7",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-18",
    "compound": "Epitalon",
    "variant": "Epitalon 50mg",
    "batch": "121525-EPI-C",
    "fullBatch": "121525-EPI-C",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-19",
    "compound": "Epitalon",
    "variant": "Epitalon 50mg",
    "batch": "112425-EPI-0",
    "fullBatch": "112425-EPI-0",
    "date": "Nov 24, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-20",
    "compound": "Epitalon",
    "variant": "Epitalon 50mg",
    "batch": "060525-EPI-X",
    "fullBatch": "060525-EPI-X",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-21",
    "compound": "Epitalon",
    "variant": "Epitalon 10mg",
    "batch": "020526-EPI-9",
    "fullBatch": "020526-EPI-9",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-22",
    "compound": "Epitalon",
    "variant": "Epitalon 10mg",
    "batch": "020526-EPI-B",
    "fullBatch": "020526-EPI-B",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-23",
    "compound": "AOD-9604",
    "variant": "AOD-9604 5mg",
    "batch": "020226-AOD-7",
    "fullBatch": "020226-AOD-7",
    "date": "Feb 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-24",
    "compound": "AOD-9604",
    "variant": "AOD-9604 5mg",
    "batch": "102825-AOD-9",
    "fullBatch": "102825-AOD-9",
    "date": "Oct 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-25",
    "compound": "AOD-9604",
    "variant": "AOD-9604 5mg",
    "batch": "092525-AOD-D",
    "fullBatch": "092525-AOD-D",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-26",
    "compound": "AOD-9604",
    "variant": "AOD-9604 5mg",
    "batch": "061925-AOD-D",
    "fullBatch": "061925-AOD-D",
    "date": "Jun 19, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-27",
    "compound": "AOD-9604",
    "variant": "AOD-9604 5mg",
    "batch": "060525-AOD-B",
    "fullBatch": "060525-AOD-B",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-28",
    "compound": "AOD-9604",
    "variant": "AOD-9604 5mg",
    "batch": "022825-AOD-5",
    "fullBatch": "022825-AOD-5",
    "date": "Feb 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-29",
    "compound": "CJC+Ipamorelin",
    "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
    "batch": "021326-CJC-1",
    "fullBatch": "021326-CJC-1",
    "date": "Feb 13, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-30",
    "compound": "CJC+Ipamorelin",
    "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
    "batch": "100825-CJC-1",
    "fullBatch": "100825-CJC-1",
    "date": "Oct 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-31",
    "compound": "CJC+Ipamorelin",
    "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
    "batch": "100625-CJC-A",
    "fullBatch": "100625-CJC-A",
    "date": "Oct 6, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-32",
    "compound": "CJC+Ipamorelin",
    "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
    "batch": "092525-CJC-8",
    "fullBatch": "092525-CJC-8",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-33",
    "compound": "CJC+Ipamorelin",
    "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
    "batch": "072625-CJC-A",
    "fullBatch": "072625-CJC-A",
    "date": "Jul 26, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-34",
    "compound": "CJC+Ipamorelin",
    "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
    "batch": "071725-CJC-1",
    "fullBatch": "071725-CJC-1",
    "date": "Jul 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-35",
    "compound": "CJC+Ipamorelin",
    "variant": "CJC-1295 (No DAC) + Ipamorelin Blend 5mg/5mg",
    "batch": "060525-CJI-1",
    "fullBatch": "060525-CJI-1",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-36",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "042326-BPC-5",
    "fullBatch": "042326-BPC-5",
    "date": "Apr 23, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-37",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "031326-BPC-1",
    "fullBatch": "031326-BPC-1",
    "date": "Mar 13, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-38",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "010226-BPC-1",
    "fullBatch": "010226-BPC-1",
    "date": "Jan 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-39",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "010226-BPC-5",
    "fullBatch": "010226-BPC-5",
    "date": "Jan 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-40",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "121525-BPC-C",
    "fullBatch": "121525-BPC-C",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-41",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "120125-BPC-1",
    "fullBatch": "120125-BPC-1",
    "date": "Dec 1, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-42",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "100825-BPC-5",
    "fullBatch": "100825-BPC-5",
    "date": "Oct 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-43",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "100125-BPC-1",
    "fullBatch": "100125-BPC-1",
    "date": "Oct 1, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-44",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "092525-BPC-1",
    "fullBatch": "092525-BPC-1",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-45",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "081925-BPC-6",
    "fullBatch": "081925-BPC-6 (Freedom Labs)",
    "date": "Aug 19, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-46",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "081925-BPC-6",
    "fullBatch": "081925-BPC-6 (Chromate Labs)",
    "date": "Aug 19, 2025",
    "lab": "Chromate Labs",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-47",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "081825-BPC-1",
    "fullBatch": "081825-BPC-1",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-48",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "072625-BPC-1",
    "fullBatch": "072625-BPC-1",
    "date": "Jul 26, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-49",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "062625-BPC-1",
    "fullBatch": "062625-BPC-1",
    "date": "Jun 26, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-50",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "060525-BPC-D",
    "fullBatch": "060525-BPC-D",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-51",
    "compound": "BPC-157",
    "variant": "BPC-157 10mg",
    "batch": "040825-BPC5-A",
    "fullBatch": "040825-BPC5-A",
    "date": "Apr 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-52",
    "compound": "GHK-cu",
    "variant": "GHK-cu 100mg",
    "batch": "041626-GHK-6",
    "fullBatch": "041626-GHK-6",
    "date": "Apr 16, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-53",
    "compound": "GHK-cu",
    "variant": "GHK-cu 100mg",
    "batch": "121525-GHK-5",
    "fullBatch": "121525-GHK-5",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-54",
    "compound": "GHK-cu",
    "variant": "GHK-cu 100mg",
    "batch": "100825-GHK-6",
    "fullBatch": "100825-GHK-6",
    "date": "Oct 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-55",
    "compound": "GHK-cu",
    "variant": "GHK-cu 100mg",
    "batch": "100125-GHK-B",
    "fullBatch": "100125-GHK-B",
    "date": "Oct 1, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-56",
    "compound": "GHK-cu",
    "variant": "GHK-cu 100mg",
    "batch": "081125-GHK-1",
    "fullBatch": "081125-GHK-1",
    "date": "Aug 11, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-57",
    "compound": "GHK-cu",
    "variant": "GHK-cu 100mg",
    "batch": "071025-GHK-1",
    "fullBatch": "071025-GHK-1 (Freedom Labs)",
    "date": "Jul 10, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-58",
    "compound": "GHK-cu",
    "variant": "GHK-cu 100mg",
    "batch": "071025-GHK-1",
    "fullBatch": "071025-GHK-1 (Chromate Labs)",
    "date": "Jul 10, 2025",
    "lab": "Chromate Labs",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-59",
    "compound": "GHK-cu",
    "variant": "GHK-cu 100mg",
    "batch": "062625-GHK-3",
    "fullBatch": "062625-GHK-3",
    "date": "Jun 26, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-60",
    "compound": "GHK-cu",
    "variant": "GHK-cu 100mg",
    "batch": "040825-GHK-A",
    "fullBatch": "040825-GHK-A",
    "date": "Apr 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-61",
    "compound": "GHK-cu",
    "variant": "GHK-cu 50mg",
    "batch": "042326-GH5-C",
    "fullBatch": "042326-GH5-C",
    "date": "Apr 23, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-62",
    "compound": "GHK-cu",
    "variant": "GHK-cu 50mg",
    "batch": "041326-GH5-1",
    "fullBatch": "041326-GH5-1",
    "date": "Apr 13, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-63",
    "compound": "GHK-cu",
    "variant": "GHK-cu 50mg",
    "batch": "021026-G50-C",
    "fullBatch": "021026-G50-C",
    "date": "Feb 10, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-64",
    "compound": "KLOW",
    "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
    "batch": "010226-KLO-9",
    "fullBatch": "010226-KLO-9",
    "date": "Jan 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-65",
    "compound": "KLOW",
    "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
    "batch": "122925-KLO-9",
    "fullBatch": "122925-KLO-9",
    "date": "Dec 29, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-66",
    "compound": "KLOW",
    "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
    "batch": "112425-KLO-C",
    "fullBatch": "112425-KLO-C",
    "date": "Nov 24, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-67",
    "compound": "KLOW",
    "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
    "batch": "100425-KLO-D",
    "fullBatch": "100425-KLO-D",
    "date": "Oct 4, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-68",
    "compound": "KLOW",
    "variant": "KPV 10mgBPC-157 10mgTB-500 10mgGHK-cu 50mg",
    "batch": "071025-KLO-7",
    "fullBatch": "071025-KLO-7",
    "date": "Jul 10, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-69",
    "compound": "Ipamorelin",
    "variant": "Ipamorelin 10mg",
    "batch": "020226-IPA-6",
    "fullBatch": "020226-IPA-6",
    "date": "Feb 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-70",
    "compound": "Ipamorelin",
    "variant": "Ipamorelin 10mg",
    "batch": "011426-IPA-D",
    "fullBatch": "011426-IPA-D",
    "date": "Jan 14, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-71",
    "compound": "Ipamorelin",
    "variant": "Ipamorelin 10mg",
    "batch": "121525-IPA-0",
    "fullBatch": "121525-IPA-0",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-72",
    "compound": "Ipamorelin",
    "variant": "Ipamorelin 10mg",
    "batch": "081825-IPA-0",
    "fullBatch": "081825-IPA-0",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-73",
    "compound": "Ipamorelin",
    "variant": "Ipamorelin 10mg",
    "batch": "071725-IPA-0",
    "fullBatch": "071725-IPA-0",
    "date": "Jul 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-74",
    "compound": "Ipamorelin",
    "variant": "Ipamorelin 10mg",
    "batch": "060525-IPA-1",
    "fullBatch": "060525-IPA-1",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-75",
    "compound": "Ipamorelin",
    "variant": "Ipamorelin 5mg",
    "batch": "020526-IPA-B",
    "fullBatch": "020526-IPA-B",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-76",
    "compound": "KPV",
    "variant": "KPV 10mg",
    "batch": "112125-KPV-C",
    "fullBatch": "112125-KPV-C",
    "date": "Nov 21, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-77",
    "compound": "KPV",
    "variant": "KPV 10mg",
    "batch": "100825-KPV-B",
    "fullBatch": "100825-KPV-B",
    "date": "Oct 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-78",
    "compound": "KPV",
    "variant": "KPV 10mg",
    "batch": "071025-KPV-1",
    "fullBatch": "071025-KPV-1",
    "date": "Jul 10, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-79",
    "compound": "KPV",
    "variant": "KPV 5mg",
    "batch": "020526-KPV-C",
    "fullBatch": "020526-KPV-C",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-80",
    "compound": "LIPO-B",
    "variant": "LIPO-B 10ml",
    "batch": "103025-LBC-B",
    "fullBatch": "103025-LBC-B",
    "date": "Oct 30, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-81",
    "compound": "LIPO-B",
    "variant": "LIPO-B 10ml",
    "batch": "100825-LPB-C",
    "fullBatch": "100825-LPB-C",
    "date": "Oct 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-82",
    "compound": "LIPO-B",
    "variant": "LIPO-B 10ml",
    "batch": "092525-LPB-C",
    "fullBatch": "092525-LPB-C",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-83",
    "compound": "LIPO-B",
    "variant": "LIPO-B 30ml",
    "batch": "112525-LB3-3",
    "fullBatch": "112525-LB3-3",
    "date": "Nov 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-84",
    "compound": "Melanotan-2",
    "variant": "Melanotan-2 10mg",
    "batch": "122925-MT2-D",
    "fullBatch": "122925-MT2-D",
    "date": "Dec 29, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-85",
    "compound": "Melanotan-2",
    "variant": "Melanotan-2 10mg",
    "batch": "112425-MT2-D",
    "fullBatch": "112425-MT2-D",
    "date": "Nov 24, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-86",
    "compound": "Melanotan-2",
    "variant": "Melanotan-2 10mg",
    "batch": "092525-MT2-D",
    "fullBatch": "092525-MT2-D",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-87",
    "compound": "Melanotan-2",
    "variant": "Melanotan-2 10mg",
    "batch": "081125-MT2-0",
    "fullBatch": "081125-MT2-0",
    "date": "Aug 11, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-88",
    "compound": "Melanotan-1",
    "variant": "Melanotan-1 10mg",
    "batch": "102825-MT1-C",
    "fullBatch": "102825-MT1-C",
    "date": "Oct 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-89",
    "compound": "Melanotan-1",
    "variant": "Melanotan-1 10mg",
    "batch": "101525-MT1-9",
    "fullBatch": "101525-MT1-9",
    "date": "Oct 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-90",
    "compound": "Melanotan-1",
    "variant": "Melanotan-1 10mg",
    "batch": "100625-MT1-A",
    "fullBatch": "100625-MT1-A",
    "date": "Oct 6, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-91",
    "compound": "Melanotan-1",
    "variant": "Melanotan-1 10mg",
    "batch": "081125-MT1-C",
    "fullBatch": "081125-MT1-C",
    "date": "Aug 11, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-92",
    "compound": "LIPO-C",
    "variant": "LIPO-C 10ml",
    "batch": "011226-LPC-B",
    "fullBatch": "011226-LPC-B",
    "date": "Jan 12, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-93",
    "compound": "LIPO-C",
    "variant": "LIPO-C 10ml",
    "batch": "103025-LPC-B",
    "fullBatch": "103025-LPC-B",
    "date": "Oct 30, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-94",
    "compound": "LIPO-C",
    "variant": "LIPO-C 10ml",
    "batch": "102825-LPC-C",
    "fullBatch": "102825-LPC-C",
    "date": "Oct 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-95",
    "compound": "LIPO-C",
    "variant": "LIPO-C 10ml",
    "batch": "102725-LPC-0",
    "fullBatch": "102725-LPC-0",
    "date": "Oct 27, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-96",
    "compound": "LIPO-C",
    "variant": "LIPO-C 10ml",
    "batch": "101525-LCC-C",
    "fullBatch": "101525-LCC-C",
    "date": "Oct 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-97",
    "compound": "LIPO-C",
    "variant": "LIPO-C 10ml",
    "batch": "100825-LPC-B",
    "fullBatch": "100825-LPC-B",
    "date": "Oct 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-98",
    "compound": "LIPO-C",
    "variant": "LIPO-C 10ml",
    "batch": "092525-LPC-B",
    "fullBatch": "092525-LPC-B",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-99",
    "compound": "LIPO-C",
    "variant": "LIPO-C 30ml",
    "batch": "111425-LC3-C",
    "fullBatch": "111425-LC3-C",
    "date": "Nov 14, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-100",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "022526-MOT-6",
    "fullBatch": "022526-MOT-6",
    "date": "Feb 25, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-101",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "010226-MOT-9",
    "fullBatch": "010226-MOT-9",
    "date": "Jan 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-102",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "122925-MOT-9",
    "fullBatch": "122925-MOT-9",
    "date": "Dec 29, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-103",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "112425-MOT-9",
    "fullBatch": "112425-MOT-9",
    "date": "Nov 24, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-104",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "100125-MOT-1",
    "fullBatch": "100125-MOT-1",
    "date": "Oct 1, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-105",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "092525-MOT-B",
    "fullBatch": "092525-MOT-B",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-106",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "081825-MOT-B",
    "fullBatch": "081825-MOT-B",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-107",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "081125-MOT-8",
    "fullBatch": "081125-MOT-8",
    "date": "Aug 11, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-108",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "072625-MOT-8",
    "fullBatch": "072625-MOT-8",
    "date": "Jul 26, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-109",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "061925-MOT-1",
    "fullBatch": "061925-MOT-1",
    "date": "Jun 19, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-110",
    "compound": "MOTS-C",
    "variant": "MOTS-c 10mg",
    "batch": "060525-MOT-B",
    "fullBatch": "060525-MOT-B",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-111",
    "compound": "Peptide-31",
    "variant": "Peptide-31 25mg",
    "batch": "121925-SS-C",
    "fullBatch": "121925-SS-C",
    "date": "Dec 19, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-112",
    "compound": "Peptide-31",
    "variant": "Peptide-31 25mg",
    "batch": "090825-SS2-D",
    "fullBatch": "090825-SS2-D",
    "date": "Sep 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-113",
    "compound": "Peptide-31",
    "variant": "Peptide-31 60mg",
    "batch": "010726-SS6-0",
    "fullBatch": "010726-SS6-0",
    "date": "Jan 7, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-114",
    "compound": "Peptide-31",
    "variant": "Peptide-31 60mg",
    "batch": "111325-SS6-6",
    "fullBatch": "111325-SS6-6",
    "date": "Nov 13, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-115",
    "compound": "Peptide-31",
    "variant": "Peptide-31 60mg",
    "batch": "102525-SS6-3",
    "fullBatch": "102525-SS6-3",
    "date": "Oct 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-116",
    "compound": "Peptide-31",
    "variant": "Peptide-31 60mg",
    "batch": "071025-SS6-5",
    "fullBatch": "071025-SS6-5",
    "date": "Jul 10, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-117",
    "compound": "NAD+",
    "variant": "NAD+ 500mg",
    "batch": "042326-NAD-6",
    "fullBatch": "042326-NAD-6",
    "date": "Apr 23, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-118",
    "compound": "NAD+",
    "variant": "NAD+ 500mg",
    "batch": "031126-NAD-A",
    "fullBatch": "031126-NAD-A",
    "date": "Mar 11, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-119",
    "compound": "NAD+",
    "variant": "NAD+ 500mg",
    "batch": "121525-NAD-4",
    "fullBatch": "121525-NAD-4",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-120",
    "compound": "NAD+",
    "variant": "NAD+ 500mg",
    "batch": "111725-NAD-1",
    "fullBatch": "111725-NAD-1",
    "date": "Nov 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-121",
    "compound": "NAD+",
    "variant": "NAD+ 500mg",
    "batch": "100425-NAD-6",
    "fullBatch": "100425-NAD-6",
    "date": "Oct 4, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-122",
    "compound": "NAD+",
    "variant": "NAD+ 500mg",
    "batch": "092525-NAD-A",
    "fullBatch": "092525-NAD-A",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-123",
    "compound": "NAD+",
    "variant": "NAD+ 500mg",
    "batch": "081825-NAD-B",
    "fullBatch": "081825-NAD-B",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-124",
    "compound": "NAD+",
    "variant": "NAD+ 500mg",
    "batch": "061825-NAD-B",
    "fullBatch": "061825-NAD-B",
    "date": "Jun 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-125",
    "compound": "NAD+",
    "variant": "NAD+ 500mg",
    "batch": "060525-NAD-C",
    "fullBatch": "060525-NAD-C",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-126",
    "compound": "PT-141",
    "variant": "PT-141 10mg",
    "batch": "030226-PT1-6",
    "fullBatch": "030226-PT1-6",
    "date": "Mar 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-127",
    "compound": "PT-141",
    "variant": "PT-141 10mg",
    "batch": "120425-PT-8",
    "fullBatch": "120425-PT-8",
    "date": "Dec 4, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-128",
    "compound": "PT-141",
    "variant": "PT-141 10mg",
    "batch": "092525-PT-1",
    "fullBatch": "092525-PT-1",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-129",
    "compound": "PT-141",
    "variant": "PT-141 10mg",
    "batch": "091025-PT1-1",
    "fullBatch": "091025-PT1-1",
    "date": "Sep 10, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-130",
    "compound": "PT-141",
    "variant": "PT-141 10mg",
    "batch": "090225-PT10-A",
    "fullBatch": "090225-PT10-A",
    "date": "Sep 2, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-131",
    "compound": "PT-141",
    "variant": "PT-141 10mg",
    "batch": "022825-PT10",
    "fullBatch": "022825-PT10",
    "date": "Feb 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-132",
    "compound": "PT-141",
    "variant": "PT-141 5mg",
    "batch": "020526-PT5-0",
    "fullBatch": "020526-PT5-0",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-133",
    "compound": "Selank",
    "variant": "Selank 10mg",
    "batch": "010726-SLK-0",
    "fullBatch": "010726-SLK-0",
    "date": "Jan 7, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-134",
    "compound": "Selank",
    "variant": "Selank 10mg",
    "batch": "121525-SEL-0",
    "fullBatch": "121525-SEL-0",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-135",
    "compound": "Selank",
    "variant": "Selank 10mg",
    "batch": "101525-SLK-9",
    "fullBatch": "101525-SLK-9",
    "date": "Oct 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-136",
    "compound": "Selank",
    "variant": "Selank 10mg",
    "batch": "100625-SLK-0",
    "fullBatch": "100625-SLK-0",
    "date": "Oct 6, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-137",
    "compound": "Selank",
    "variant": "Selank 10mg",
    "batch": "081825-SLK-1",
    "fullBatch": "081825-SLK-1",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-138",
    "compound": "Selank",
    "variant": "Selank 10mg",
    "batch": "072125-SEL-9",
    "fullBatch": "072125-SEL-9",
    "date": "Jul 21, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-139",
    "compound": "Selank",
    "variant": "Selank 10mg",
    "batch": "060525-SEL-5",
    "fullBatch": "060525-SEL-5",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-140",
    "compound": "Semax",
    "variant": "Semax 10mg",
    "batch": "010726-SMX-7",
    "fullBatch": "010726-SMX-7",
    "date": "Jan 7, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-141",
    "compound": "Semax",
    "variant": "Semax 10mg",
    "batch": "121525-SEM-7",
    "fullBatch": "121525-SEM-7",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-142",
    "compound": "Semax",
    "variant": "Semax 10mg",
    "batch": "102125-SMX-9",
    "fullBatch": "102125-SMX-9",
    "date": "Oct 21, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-143",
    "compound": "Semax",
    "variant": "Semax 10mg",
    "batch": "100225-SMX-9",
    "fullBatch": "100225-SMX-9",
    "date": "Oct 2, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-144",
    "compound": "Semax",
    "variant": "Semax 10mg",
    "batch": "81825-SMX-9",
    "fullBatch": "81825-SMX-9",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-145",
    "compound": "Semax",
    "variant": "Semax 10mg",
    "batch": "072625-SMX-9",
    "fullBatch": "072625-SMX-9",
    "date": "Jul 26, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-146",
    "compound": "Semax",
    "variant": "Semax 10mg",
    "batch": "060525-SEM-1",
    "fullBatch": "060525-SEM-1",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-147",
    "compound": "SNAP-8",
    "variant": "SNAP-8 10mg",
    "batch": "010726-SNP-8",
    "fullBatch": "010726-SNP-8",
    "date": "Jan 7, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-148",
    "compound": "SNAP-8",
    "variant": "SNAP-8 10mg",
    "batch": "121525-SNP-8",
    "fullBatch": "121525-SNP-8",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-149",
    "compound": "SNAP-8",
    "variant": "SNAP-8 10mg",
    "batch": "101525-SNP-6",
    "fullBatch": "101525-SNP-6",
    "date": "Oct 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-150",
    "compound": "SNAP-8",
    "variant": "SNAP-8 10mg",
    "batch": "100625-SNP-C",
    "fullBatch": "100625-SNP-C",
    "date": "Oct 6, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-151",
    "compound": "SNAP-8",
    "variant": "SNAP-8 10mg",
    "batch": "061725-SNP-1",
    "fullBatch": "061725-SNP-1",
    "date": "Jun 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-152",
    "compound": "SNAP-8",
    "variant": "SNAP-8 10mg",
    "batch": "022825-SNAP10",
    "fullBatch": "022825-SNAP10",
    "date": "Feb 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-153",
    "compound": "Thymosin Alpha 1",
    "variant": "Thymosin Alpha-1 10mg",
    "batch": "022526-TA1-1",
    "fullBatch": "022526-TA1-1",
    "date": "Feb 25, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-154",
    "compound": "Thymosin Alpha 1",
    "variant": "Thymosin Alpha-1 10mg",
    "batch": "112425-TA1-0",
    "fullBatch": "112425-TA1-0",
    "date": "Nov 24, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-155",
    "compound": "Thymosin Alpha 1",
    "variant": "Thymosin Alpha-1 10mg",
    "batch": "081925-TA1-0",
    "fullBatch": "081925-TA1-0",
    "date": "Aug 19, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-156",
    "compound": "Thymosin Alpha 1",
    "variant": "Thymosin Alpha-1 5mg",
    "batch": "020526-TA1-9",
    "fullBatch": "020526-TA1-9",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-157",
    "compound": "Sermorelin",
    "variant": "Sermorelin 10mg",
    "batch": "021326-SER-C",
    "fullBatch": "021326-SER-C",
    "date": "Feb 13, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-158",
    "compound": "Sermorelin",
    "variant": "Sermorelin 10mg",
    "batch": "122925-SEM-0",
    "fullBatch": "122925-SEM-0",
    "date": "Dec 29, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-159",
    "compound": "Sermorelin",
    "variant": "Sermorelin 10mg",
    "batch": "121525-SER-C",
    "fullBatch": "121525-SER-C",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-160",
    "compound": "Sermorelin",
    "variant": "Sermorelin 10mg",
    "batch": "121525-SER-0",
    "fullBatch": "121525-SER-0",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-161",
    "compound": "Sermorelin",
    "variant": "Sermorelin 10mg",
    "batch": "81825-SER-8",
    "fullBatch": "81825-SER-8",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-162",
    "compound": "Sermorelin",
    "variant": "Sermorelin 10mg",
    "batch": "060525-SER-1",
    "fullBatch": "060525-SER-1",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-163",
    "compound": "Sermorelin",
    "variant": "Sermorelin 5mg​",
    "batch": "020526-SER-B",
    "fullBatch": "020526-SER-B",
    "date": "Feb 5, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-164",
    "compound": "Peptide-C 20mg",
    "variant": "Peptide-C 20mg",
    "batch": "121925-C20-6",
    "fullBatch": "121925-C20-6",
    "date": "Dec 19, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-165",
    "compound": "Peptide-C 20mg",
    "variant": "Peptide-C 20mg",
    "batch": "090425-C20-6",
    "fullBatch": "090425-C20-6",
    "date": "Sep 4, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-166",
    "compound": "Peptide-C 20mg",
    "variant": "Peptide-C 20mg",
    "batch": "081125-C20-D",
    "fullBatch": "081125-C20-D",
    "date": "Aug 11, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-167",
    "compound": "Peptide-C 20mg",
    "variant": "Peptide-C 20mg",
    "batch": "060525-C20-7",
    "fullBatch": "060525-C20-7",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-168",
    "compound": "Peptide-C 20mg",
    "variant": "Peptide-C 20mg",
    "batch": "040825-C20-A",
    "fullBatch": "040825-C20-A",
    "date": "Apr 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-169",
    "compound": "TB-500",
    "variant": "TB-500 10mg",
    "batch": "010226-TB5-0",
    "fullBatch": "010226-TB5-0",
    "date": "Jan 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-170",
    "compound": "TB-500",
    "variant": "TB-500 10mg",
    "batch": "122925-TB5-0",
    "fullBatch": "122925-TB5-0",
    "date": "Dec 29, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-171",
    "compound": "TB-500",
    "variant": "TB-500 10mg",
    "batch": "121525-TB5-A",
    "fullBatch": "121525-TB5-A",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-172",
    "compound": "TB-500",
    "variant": "TB-500 10mg",
    "batch": "100125-TB5-A",
    "fullBatch": "100125-TB5-A",
    "date": "Oct 1, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-173",
    "compound": "TB-500",
    "variant": "TB-500 10mg",
    "batch": "092525-TB5-A",
    "fullBatch": "092525-TB5-A",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-174",
    "compound": "TB-500",
    "variant": "TB-500 10mg",
    "batch": "081825-TB5-A",
    "fullBatch": "081825-TB5-A",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-175",
    "compound": "TB-500",
    "variant": "TB-500 10mg",
    "batch": "071725-TB5-A",
    "fullBatch": "071725-TB5-A",
    "date": "Jul 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-176",
    "compound": "TB-500",
    "variant": "TB-500 10mg",
    "batch": "061725-TB5-C",
    "fullBatch": "061725-TB5-C",
    "date": "Jun 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-177",
    "compound": "TB-500",
    "variant": "TB-500 10mg",
    "batch": "040825-TB10-A",
    "fullBatch": "040825-TB10-A",
    "date": "Apr 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-178",
    "compound": "Peptide-C 10mg",
    "variant": "Peptide-C 10mg",
    "batch": "030226-C10-B",
    "fullBatch": "030226-C10-B",
    "date": "Mar 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-179",
    "compound": "Peptide-C 10mg",
    "variant": "Peptide-C 10mg",
    "batch": "010226-C10-1",
    "fullBatch": "010226-C10-1",
    "date": "Jan 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-180",
    "compound": "Peptide-C 10mg",
    "variant": "Peptide-C 10mg",
    "batch": "121925-C10-1",
    "fullBatch": "121925-C10-1",
    "date": "Dec 19, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-181",
    "compound": "Peptide-C 10mg",
    "variant": "Peptide-C 10mg",
    "batch": "81825-C10-B",
    "fullBatch": "81825-C10-B",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-182",
    "compound": "Peptide-C 10mg",
    "variant": "Peptide-C 10mg",
    "batch": "061725-C10-9",
    "fullBatch": "061725-C10-9",
    "date": "Jun 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-183",
    "compound": "Peptide-C 10mg",
    "variant": "Peptide-C 10mg",
    "batch": "060525-C10-9",
    "fullBatch": "060525-C10-9",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-184",
    "compound": "Peptide-C 10mg",
    "variant": "Peptide-C 10mg",
    "batch": "022825-C10",
    "fullBatch": "022825-C10",
    "date": "Feb 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-185",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "042326-TS1-1",
    "fullBatch": "042326-TS1-1",
    "date": "Apr 23, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-186",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "033126-TS1-6",
    "fullBatch": "033126-TS1-6",
    "date": "Mar 31, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-187",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "122925-TES-1",
    "fullBatch": "122925-TES-1",
    "date": "Dec 29, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-188",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "121525-TSM-0",
    "fullBatch": "121525-TSM-0",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-189",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "120125-TES-C",
    "fullBatch": "120125-TES-C",
    "date": "Dec 1, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-190",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "112425-TES-0",
    "fullBatch": "112425-TES-0",
    "date": "Nov 24, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-191",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "100825-TS1-1",
    "fullBatch": "100825-TS1-1",
    "date": "Oct 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-192",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "081825-TSM-0",
    "fullBatch": "081825-TSM-0",
    "date": "Aug 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-193",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "071025-TES-6",
    "fullBatch": "071025-TES-6",
    "date": "Jul 10, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-194",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "070225-TES-0",
    "fullBatch": "070225-TES-0",
    "date": "Jul 2, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-195",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 10mg",
    "batch": "060525-TES-6",
    "fullBatch": "060525-TES-6",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-196",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 5mg",
    "batch": "041326-TS5-0",
    "fullBatch": "041326-TS5-0",
    "date": "Apr 13, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-197",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 5mg",
    "batch": "030226-TS5-1",
    "fullBatch": "030226-TS5-1",
    "date": "Mar 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-198",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 5mg",
    "batch": "102725-TE5-C",
    "fullBatch": "102725-TE5-C",
    "date": "Oct 27, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-199",
    "compound": "Tesamorelin",
    "variant": "Tesamorelin 5mg",
    "batch": "081125-TE5-C",
    "fullBatch": "081125-TE5-C",
    "date": "Aug 11, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-200",
    "compound": "Peptide-C 5mg",
    "variant": "Peptide-C 5mg",
    "batch": "102725-C5-6",
    "fullBatch": "102725-C5-6",
    "date": "Oct 27, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-201",
    "compound": "Peptide-C 5mg",
    "variant": "Peptide-C 5mg",
    "batch": "090825-C05-D",
    "fullBatch": "090825-C05-D",
    "date": "Sep 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-202",
    "compound": "Peptide-C 5mg",
    "variant": "Peptide-C 5mg",
    "batch": "061725-C5-B",
    "fullBatch": "061725-C5-B",
    "date": "Jun 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-203",
    "compound": "Peptide-R 50mg",
    "variant": "Peptide-R 50mg",
    "batch": "030426-R50-0",
    "fullBatch": "030426-R50-0",
    "date": "Mar 4, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-204",
    "compound": "Peptide-R 50mg",
    "variant": "Peptide-R 50mg",
    "batch": "022526-R50-6",
    "fullBatch": "022526-R50-6",
    "date": "Feb 25, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-205",
    "compound": "Peptide-R 50mg",
    "variant": "Peptide-R 50mg",
    "batch": "090925-R50-4",
    "fullBatch": "090925-R50-4",
    "date": "Sep 9, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-206",
    "compound": "Peptide-R 50mg",
    "variant": "Peptide-R 50mg",
    "batch": "082125-R50-D",
    "fullBatch": "082125-R50-D",
    "date": "Aug 21, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-207",
    "compound": "Peptide-R 50mg",
    "variant": "Peptide-R 50mg",
    "batch": "071525-R50-4",
    "fullBatch": "071525-R50-4",
    "date": "Jul 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-208",
    "compound": "Peptide-R 50mg",
    "variant": "Peptide-R 50mg",
    "batch": "060525-R50-8",
    "fullBatch": "060525-R50-8",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-209",
    "compound": "Peptide-R 20mg",
    "variant": "Peptide-R 20mg",
    "batch": "042326-R20-6",
    "fullBatch": "042326-R20-6",
    "date": "Apr 23, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-210",
    "compound": "Peptide-R 20mg",
    "variant": "Peptide-R 20mg",
    "batch": "030426-R20-A",
    "fullBatch": "030426-R20-A",
    "date": "Mar 4, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-211",
    "compound": "Peptide-R 20mg",
    "variant": "Peptide-R 20mg",
    "batch": "022526-R20-C",
    "fullBatch": "022526-R20-C",
    "date": "Feb 25, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-212",
    "compound": "Peptide-R 20mg",
    "variant": "Peptide-R 20mg",
    "batch": "091125-R20-C",
    "fullBatch": "091125-R20-C",
    "date": "Sep 11, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-213",
    "compound": "Peptide-R 20mg",
    "variant": "Peptide-R 20mg",
    "batch": "082825-R20-8",
    "fullBatch": "082825-R20-8",
    "date": "Aug 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-214",
    "compound": "Peptide-R 20mg",
    "variant": "Peptide-R 20mg",
    "batch": "062625-R20-6",
    "fullBatch": "062625-R20-6",
    "date": "Jun 26, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-215",
    "compound": "Peptide-R 20mg",
    "variant": "Peptide-R 20mg",
    "batch": "060525-R20-4",
    "fullBatch": "060525-R20-4",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-216",
    "compound": "Peptide-R 20mg",
    "variant": "Peptide-R 20mg",
    "batch": "022825-R20",
    "fullBatch": "022825-R20",
    "date": "Feb 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-217",
    "compound": "Peptide-R 10mg",
    "variant": "Peptide-R 10mg",
    "batch": "012026-R10-3",
    "fullBatch": "012026-R10-3",
    "date": "Jan 20, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-218",
    "compound": "Peptide-R 10mg",
    "variant": "Peptide-R 10mg",
    "batch": "011426-R10-9",
    "fullBatch": "011426-R10-9",
    "date": "Jan 14, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-219",
    "compound": "Peptide-R 10mg",
    "variant": "Peptide-R 10mg",
    "batch": "121525-R10-1",
    "fullBatch": "121525-R10-1",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-220",
    "compound": "Peptide-R 10mg",
    "variant": "Peptide-R 10mg",
    "batch": "082825-R10-A",
    "fullBatch": "082825-R10-A",
    "date": "Aug 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-221",
    "compound": "Peptide-R 10mg",
    "variant": "Peptide-R 10mg",
    "batch": "081125-R10-9",
    "fullBatch": "081125-R10-9 (First Test)",
    "date": "Aug 11, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-222",
    "compound": "Peptide-R 10mg",
    "variant": "Peptide-R 10mg",
    "batch": "081125-R10-9",
    "fullBatch": "081125-R10-9 (Second Test)",
    "date": "Aug 11, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-223",
    "compound": "Peptide-R 10mg",
    "variant": "Peptide-R 10mg",
    "batch": "070225-R10-1",
    "fullBatch": "070225-R10-1",
    "date": "Jul 2, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-224",
    "compound": "Peptide-R 10mg",
    "variant": "Peptide-R 10mg",
    "batch": "060525-R10-D",
    "fullBatch": "060525-R10-D",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-225",
    "compound": "Peptide-R 10mg",
    "variant": "Peptide-R 10mg",
    "batch": "022825-R10",
    "fullBatch": "022825-R10",
    "date": "Feb 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-226",
    "compound": "Peptide-S 15mg",
    "variant": "Peptide-S 15mg",
    "batch": "030226-S15-9",
    "fullBatch": "030226-S15-9",
    "date": "Mar 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-227",
    "compound": "Peptide-S 15mg",
    "variant": "Peptide-S 15mg",
    "batch": "121525-S15-6",
    "fullBatch": "121525-S15-6",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-228",
    "compound": "Peptide-S 15mg",
    "variant": "Peptide-S 15mg",
    "batch": "111825-S15-D",
    "fullBatch": "111825-S15-D",
    "date": "Nov 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-229",
    "compound": "Peptide-S 15mg",
    "variant": "Peptide-S 15mg",
    "batch": "060525-S15-B",
    "fullBatch": "060525-S15-B",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-230",
    "compound": "Peptide-S 15mg",
    "variant": "Peptide-S 15mg",
    "batch": "060525-S15-4",
    "fullBatch": "060525-S15-4",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-231",
    "compound": "Peptide-S 15mg",
    "variant": "Peptide-S 15mg",
    "batch": "060525-S15-3",
    "fullBatch": "060525-S15-3",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-232",
    "compound": "Peptide-S 15mg",
    "variant": "Peptide-S 15mg",
    "batch": "040825-S15-W",
    "fullBatch": "040825-S15-W",
    "date": "Apr 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-233",
    "compound": "Peptide-S 15mg",
    "variant": "Peptide-S 15mg",
    "batch": "022825-S15",
    "fullBatch": "022825-S15",
    "date": "Feb 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-234",
    "compound": "Peptide-S 10mg",
    "variant": "Peptide-S 10mg",
    "batch": "010726-S10-B",
    "fullBatch": "010726-S10-B",
    "date": "Jan 7, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-235",
    "compound": "Peptide-S 10mg",
    "variant": "Peptide-S 10mg",
    "batch": "121525-S10-A",
    "fullBatch": "121525-S10-A",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-236",
    "compound": "Peptide-S 10mg",
    "variant": "Peptide-S 10mg",
    "batch": "111825-S10-C",
    "fullBatch": "111825-S10-C",
    "date": "Nov 18, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-237",
    "compound": "Peptide-S 10mg",
    "variant": "Peptide-S 10mg",
    "batch": "092525-S10-0",
    "fullBatch": "092525-S10-0",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-238",
    "compound": "Peptide-S 10mg",
    "variant": "Peptide-S 10mg",
    "batch": "061725-S10-C",
    "fullBatch": "061725-S10-C",
    "date": "Jun 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-239",
    "compound": "Peptide-S 10mg",
    "variant": "Peptide-S 10mg",
    "batch": "060525-S10-C",
    "fullBatch": "060525-S10-C",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-240",
    "compound": "Peptide-S 10mg",
    "variant": "Peptide-S 10mg",
    "batch": "022825-S10",
    "fullBatch": "022825-S10",
    "date": "Feb 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-241",
    "compound": "Peptide-S 5mg",
    "variant": "Peptide-S 5mg",
    "batch": "030226-S5-A",
    "fullBatch": "030226-S5-A",
    "date": "Mar 2, 2026",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-242",
    "compound": "Peptide-S 5mg",
    "variant": "Peptide-S 5mg",
    "batch": "121525-S5-C",
    "fullBatch": "121525-S5-C",
    "date": "Dec 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-243",
    "compound": "Peptide-S 5mg",
    "variant": "Peptide-S 5mg",
    "batch": "111525-S5-F",
    "fullBatch": "111525-S5-F",
    "date": "Nov 15, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-244",
    "compound": "Peptide-S 5mg",
    "variant": "Peptide-S 5mg",
    "batch": "111425-S5-1",
    "fullBatch": "111425-S5-1",
    "date": "Nov 14, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-245",
    "compound": "Peptide-S 5mg",
    "variant": "Peptide-S 5mg",
    "batch": "092525-S5-1",
    "fullBatch": "092525-S5-1",
    "date": "Sep 25, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  },
  {
    "id": "coa-246",
    "compound": "Peptide-S 5mg",
    "variant": "Peptide-S 5mg",
    "batch": "061725-S5-1",
    "fullBatch": "061725-S5-1",
    "date": "Jun 17, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-247",
    "compound": "Peptide-S 5mg",
    "variant": "Peptide-S 5mg",
    "batch": "060525-S5-5",
    "fullBatch": "060525-S5-5",
    "date": "Jun 5, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-248",
    "compound": "Peptide-S 5mg",
    "variant": "Peptide-S 5mg",
    "batch": "040825-S05-W",
    "fullBatch": "040825-S05-W",
    "date": "Apr 8, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-249",
    "compound": "Peptide-S 5mg",
    "variant": "Peptide-S 5mg",
    "batch": "022825-S5",
    "fullBatch": "022825-S5",
    "date": "Feb 28, 2025",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-250",
    "compound": "BPC-157 + TB-500 5mg/5mg",
    "variant": "BPC-157 + TB-500 5mg/5mg",
    "batch": "Verified Product Gallery COA",
    "fullBatch": "Verified Product Gallery COA",
    "date": "Verified Lot",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-251",
    "compound": "5-Amino-1MQ 5mg",
    "variant": "5-Amino-1MQ 5mg",
    "batch": "Verified Product Gallery COA",
    "fullBatch": "Verified Product Gallery COA",
    "date": "Verified Lot",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-252",
    "compound": "Melanotan-II 10mg",
    "variant": "Melanotan-II 10mg",
    "batch": "Verified Product Gallery COA",
    "fullBatch": "Verified Product Gallery COA",
    "date": "Verified Lot",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-253",
    "compound": "Melanotan-I 10mg",
    "variant": "Melanotan-I 10mg",
    "batch": "Verified Product Gallery COA",
    "fullBatch": "Verified Product Gallery COA",
    "date": "Verified Lot",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-254",
    "compound": "Peptide-31 60mg",
    "variant": "Peptide-31 60mg",
    "batch": "Verified Product Gallery COA",
    "fullBatch": "Verified Product Gallery COA",
    "date": "Verified Lot",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-255",
    "compound": "Peptide-31 25mg",
    "variant": "Peptide-31 25mg",
    "batch": "Verified Product Gallery COA",
    "fullBatch": "Verified Product Gallery COA",
    "date": "Verified Lot",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-256",
    "compound": "LIPO-C 10ml",
    "variant": "LIPO-C 10ml",
    "batch": "Verified Product Gallery COA",
    "fullBatch": "Verified Product Gallery COA",
    "date": "Verified Lot",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-257",
    "compound": "LIPO-B 10ml",
    "variant": "LIPO-B 10ml",
    "batch": "Verified Product Gallery COA",
    "fullBatch": "Verified Product Gallery COA",
    "date": "Verified Lot",
    "lab": "Janoshik Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "image",
    "source": "Google Drive"
  },
  {
    "id": "coa-258",
    "compound": "Bacteriostatic Reconstitution Solution (Hospira)",
    "variant": "Reconstitution Solution - 10ml / 30ml",
    "batch": "Hospira Sterile Analytical Standard",
    "fullBatch": "Hospira Sterile Analytical Standard",
    "date": "Verified Lot",
    "lab": "Hospira Analytical",
    "url": "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    "type": "pdf",
    "source": "Google Drive"
  }
];

// Application State
let currentCategory = "All";
let searchQuery = "";
let sortBy = "name-asc";
let selectedCryptoTab = "ETH";

// COA Section State
let coaSearchQuery = "";
let coaSelectedCompound = "All";
let coaSelectedType = "All";
let coaPageSize = 18;
let coaCurrentVisibleCount = 18;

// Active Google Drive URL (configurable via localStorage if user links specific folder)
let activeGoogleDriveUrl = localStorage.getItem("felix_drive_url") || CONFIG.GOOGLE_DRIVE_URL;

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
  initHeader();
  renderCatalog();
  initCoaSection();
  renderPaymentDetails();
  populateOrderFormProducts();
  setupEventListeners();
  initModal();
  initCoaLightbox();
  initDriveConnector();
});

// Scroll Progress Bar
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = progress + "%";
  });
}

// Sticky Header Elevation
function initHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Filter and Sort Catalog Products
function getFilteredProducts() {
  let list = [...products];

  // Category filter
  if (currentCategory !== "All") {
    list = list.filter(p => {
      if (p.category === currentCategory) return true;
      if (Array.isArray(p.categories) && p.categories.includes(currentCategory)) return true;
      return false;
    });
  }

  // Search filter
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p => {
      const hasCoaMatch = Array.isArray(p.coas) && p.coas.some(c => c.batch.toLowerCase().includes(q));
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.quantity.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        hasCoaMatch
      );
    });
  }

  // Sort
  list.sort((a, b) => {
    if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "name-desc") {
      return b.name.localeCompare(a.name);
    } else if (sortBy === "price-asc") {
      const pa = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
      const pb = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
      return pa - pb;
    } else if (sortBy === "price-desc") {
      const pa = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
      const pb = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
      return pb - pa;
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return list;
}

// Render Catalog Grid
function renderCatalog() {
  const grid = document.getElementById("productGrid") || document.getElementById("catalogGrid");
  const countEl = document.getElementById("productCount") || document.getElementById("catalogCount");
  if (!grid) return;

  const filtered = getFilteredProducts();

  if (countEl) {
    countEl.textContent = "Showing " + filtered.length + " of " + products.length + " research materials";
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>No matching compounds found</h3>
        <p>Try adjusting your search criteria or category filter.</p>
        <button type="button" class="btn-secondary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const coaCount = Array.isArray(p.coas) ? p.coas.length : 0;
    const coaBadge = coaCount > 0 ? `
      <button type="button" class="card-coa-btn" onclick="openProductModal('${p.id}'); event.stopPropagation();" title="${coaCount} verified lab analysis reports in Google Drive">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
        <span>${coaCount} Verified COA${coaCount === 1 ? '' : 's'}</span>
      </button>
    ` : '';

    return `
      <article class="product-card" id="card-${p.id}">
        <div class="card-top-bar">
          <span class="tag-category">${p.category}</span>
          <span class="tag-status-available">${p.status || 'In Stock'}</span>
        </div>

        <div class="card-main-info">
          <h3 class="product-title" title="${p.name}">${p.name}</h3>
          <div class="product-sub-meta">
            <span class="sku-text">SKU: ${p.sku}</span>
            <span class="quantity-badge">${p.quantity}</span>
          </div>
          
          <p class="product-desc-concise">${p.description}</p>
        </div>

        <div class="card-specs-preview">
          <div class="spec-mini-item">
            <span class="mini-label">Form:</span>
            <span class="mini-val">${p.form || 'Lyophilized Powder'}</span>
          </div>
          <div class="spec-mini-item">
            <span class="mini-label">Storage:</span>
            <span class="mini-val">${p.storage && p.storage.includes('2–8') ? '2–8°C / -20°C' : 'Controlled Room Temp'}</span>
          </div>
        </div>

        <div class="card-price-row">
          <div class="price-block">
            <span class="product-price">${p.price}</span>
            <span class="unit-label">per unit</span>
          </div>
          ${coaBadge}
        </div>

        <div class="card-action-grid">
          <button type="button" class="btn-card-details" onclick="openProductModal('${p.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Specs ${coaCount > 0 ? '& COAs' : ''}</span>
          </button>
          <button type="button" class="btn-card-inquire-full" onclick="selectProductForOrder('${p.id}')">
            Select for Order
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// Google Drive Folder Connector
function initDriveConnector() {
  const saveBtn = document.getElementById("btnSaveDriveUrl");
  const driveInput = document.getElementById("driveFolderUrlInput");
  const driveDirectLink = document.getElementById("coaDriveFolderBtn");
  const resetBtn = document.getElementById("btnResetDriveUrl");

  if (driveInput) {
    driveInput.value = activeGoogleDriveUrl;
  }
  if (driveDirectLink) {
    driveDirectLink.href = activeGoogleDriveUrl;
  }

  if (saveBtn && driveInput) {
    saveBtn.addEventListener("click", () => {
      const val = driveInput.value.trim();
      if (val && (val.includes("drive.google.com") || val.startsWith("http"))) {
        activeGoogleDriveUrl = val;
        localStorage.setItem("felix_drive_url", val);
        if (driveDirectLink) driveDirectLink.href = val;
        showToast("Updated Google Drive repository URL successfully!", "success");
        renderCoaCards();
      } else {
        showToast("Please enter a valid Google Drive link.", "warning");
      }
    });
  }

  if (resetBtn && driveInput) {
    resetBtn.addEventListener("click", () => {
      activeGoogleDriveUrl = CONFIG.GOOGLE_DRIVE_URL;
      localStorage.removeItem("felix_drive_url");
      driveInput.value = activeGoogleDriveUrl;
      if (driveDirectLink) driveDirectLink.href = activeGoogleDriveUrl;
      showToast("Reset Google Drive repository URL to default.", "info");
      renderCoaCards();
    });
  }
}

// Initialize Certificates of Analysis (COAs) Section
function initCoaSection() {
  populateCoaCompoundFilter();
  renderCoaCards();

  const searchInput = document.getElementById("coaSearchInput");
  const clearBtn = document.getElementById("clearCoaSearch");
  const compoundFilter = document.getElementById("coaCompoundFilter");
  const typeFilter = document.getElementById("coaTypeFilter");
  const loadMoreBtn = document.getElementById("loadMoreCoasBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      coaSearchQuery = e.target.value.trim();
      coaCurrentVisibleCount = coaPageSize;
      if (clearBtn) {
        clearBtn.style.display = coaSearchQuery ? "flex" : "none";
      }
      renderCoaCards();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      coaSearchQuery = "";
      clearBtn.style.display = "none";
      coaCurrentVisibleCount = coaPageSize;
      renderCoaCards();
    });
  }

  if (compoundFilter) {
    compoundFilter.addEventListener("change", (e) => {
      coaSelectedCompound = e.target.value;
      coaCurrentVisibleCount = coaPageSize;
      renderCoaCards();
    });
  }

  if (typeFilter) {
    typeFilter.addEventListener("change", (e) => {
      coaSelectedType = e.target.value;
      coaCurrentVisibleCount = coaPageSize;
      renderCoaCards();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      coaCurrentVisibleCount += coaPageSize;
      renderCoaCards();
    });
  }
}

// Populate Compound Filter in COA Section
function populateCoaCompoundFilter() {
  const select = document.getElementById("coaCompoundFilter");
  if (!select) return;

  const compoundCounts = {};
  COAS_DATABASE.forEach(c => {
    compoundCounts[c.compound] = (compoundCounts[c.compound] || 0) + 1;
  });

  const sortedCompounds = Object.keys(compoundCounts).sort((a, b) => {
    return compoundCounts[b] - compoundCounts[a];
  });

  select.innerHTML = `
    <option value="All">All Compounds (${COAS_DATABASE.length} Batches)</option>
    ${sortedCompounds.map(comp => `
      <option value="${comp}">${comp} (${compoundCounts[comp]} reports)</option>
    `).join("")}
  `;
}

// Filter COAs
function getFilteredCoas() {
  let list = [...COAS_DATABASE];

  if (coaSelectedCompound !== "All") {
    list = list.filter(c => c.compound === coaSelectedCompound);
  }

  if (coaSelectedType !== "All") {
    list = list.filter(c => c.type === coaSelectedType);
  }

  if (coaSearchQuery) {
    const q = coaSearchQuery.toLowerCase();
    list = list.filter(c => {
      return (
        c.compound.toLowerCase().includes(q) ||
        c.variant.toLowerCase().includes(q) ||
        c.batch.toLowerCase().includes(q) ||
        c.fullBatch.toLowerCase().includes(q) ||
        c.lab.toLowerCase().includes(q) ||
        c.date.toLowerCase().includes(q)
      );
    });
  }

  return list;
}

// Render COA Cards Grid
function renderCoaCards() {
  const grid = document.getElementById("coaCardsGrid");
  const countEl = document.getElementById("coaResultsCount");
  const paginationRow = document.getElementById("coaPaginationRow");
  if (!grid) return;

  const filtered = getFilteredCoas();
  const visible = filtered.slice(0, coaCurrentVisibleCount);

  if (countEl) {
    countEl.textContent = "Showing " + visible.length + " of " + filtered.length + " Google Drive verified reports";
  }

  if (paginationRow) {
    paginationRow.style.display = filtered.length > coaCurrentVisibleCount ? "flex" : "none";
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-coa-state">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
        <h4>No analytical certificates found</h4>
        <p>No matching batch reports for "${coaSearchQuery || coaSelectedCompound}". Try another search query.</p>
        <button type="button" class="btn-secondary-sm" onclick="resetCoaFilters()">Reset COA Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = visible.map(c => {
    const isPdf = c.type === "pdf";
    const labBadgeClass = c.lab && c.lab.includes("Chromate") ? "badge-lab-chromate" : "badge-lab-janoshik";

    const previewBlock = `
      <div class="coa-card-preview pdf-preview" onclick="openCoaLightbox('${c.id}')">
        <div class="pdf-icon-wrap">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
          <span class="pdf-doc-tag">Google Drive Archive</span>
        </div>
        <div class="preview-hover-hint">Inspect Lot Data</div>
      </div>
    `;

    return `
      <div class="coa-card" id="${c.id}">
        <div class="coa-card-top">
          <span class="badge-lab ${labBadgeClass}">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>${c.lab}</span>
          </span>
          <span class="coa-format-tag">Verified HPLC / MS</span>
        </div>

        ${previewBlock}

        <div class="coa-card-body">
          <h4 class="coa-compound-name" title="${c.compound}">${c.compound}</h4>
          <p class="coa-variant-label">${c.variant}</p>

          <div class="coa-batch-row">
            <div class="batch-code-box">
              <span class="batch-prefix">Lot / Batch:</span>
              <code class="batch-code">${c.batch}</code>
            </div>
            <span class="coa-date-label">${c.date}</span>
          </div>

          <div class="coa-card-actions">
            <button type="button" class="btn-coa-view" onclick="openCoaLightbox('${c.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Inspect Lot</span>
            </button>
            <a href="${activeGoogleDriveUrl}" target="_blank" rel="noopener noreferrer" class="btn-coa-direct" title="Open in Google Drive">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>Google Drive</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Reset COA Filters
window.resetCoaFilters = function() {
  coaSearchQuery = "";
  coaSelectedCompound = "All";
  coaSelectedType = "All";
  coaCurrentVisibleCount = coaPageSize;

  const searchInput = document.getElementById("coaSearchInput");
  if (searchInput) searchInput.value = "";

  const clearBtn = document.getElementById("clearCoaSearch");
  if (clearBtn) clearBtn.style.display = "none";

  const compSelect = document.getElementById("coaCompoundFilter");
  if (compSelect) compSelect.value = "All";

  const typeSelect = document.getElementById("coaTypeFilter");
  if (typeSelect) typeSelect.value = "All";

  renderCoaCards();
};

// Open COA Lightbox
window.openCoaLightbox = function(coaId) {
  const coa = COAS_DATABASE.find(c => c.id === coaId);
  if (!coa) return;

  const modal = document.getElementById("coaLightboxModal");
  const titleEl = document.getElementById("coaModalTitle");
  const metaEl = document.getElementById("coaModalMeta");
  const labEl = document.getElementById("coaModalLab");
  const linkEl = document.getElementById("coaModalDirectLink");
  const bodyEl = document.getElementById("coaLightboxBody");

  if (!modal || !bodyEl) return;

  if (titleEl) titleEl.textContent = coa.compound + " — " + coa.variant;
  if (metaEl) metaEl.textContent = "Batch / Lot: " + coa.fullBatch + " • Verified: " + coa.date;
  if (labEl) labEl.textContent = coa.lab;
  if (linkEl) {
    linkEl.href = activeGoogleDriveUrl;
  }

  const waRequestUrl = "https://wa.me/" + CONFIG.PHONE_CLEAN + "?text=" + encodeURIComponent("Hello Felix Chemical Supply, please provide the full analytical certificate for Lot: " + coa.fullBatch + " (" + coa.compound + ").");

  bodyEl.innerHTML = `
    <div class="lightbox-drive-card" style="padding: 24px; background: #ffffff; border-radius: 12px;">
      <div class="drive-doc-badge" style="display:inline-flex; align-items:center; gap:8px; background:#eff6ff; color:#1d4ed8; padding:6px 12px; border-radius:20px; font-size:13px; font-weight:600; margin-bottom:16px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
        <span>Google Drive Verified Laboratory Archive</span>
      </div>

      <div class="drive-doc-details" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px; margin-bottom:24px; background:#f8fafc; padding:18px; border-radius:10px; border:1px solid #e2e8f0;">
        <div>
          <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:600;">Compound &amp; Variant</div>
          <div style="font-size:15px; font-weight:700; color:#0f172a; margin-top:2px;">${coa.compound}</div>
          <div style="font-size:12px; color:#475569;">${coa.variant}</div>
        </div>
        <div>
          <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:600;">Lot / Batch Number</div>
          <div style="font-size:15px; font-weight:700; color:#0284c7; margin-top:2px; font-family:monospace;">${coa.fullBatch}</div>
        </div>
        <div>
          <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:600;">Testing Laboratory</div>
          <div style="font-size:14px; font-weight:600; color:#0f172a; margin-top:2px;">${coa.lab}</div>
        </div>
        <div>
          <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:600;">Test Verification Date</div>
          <div style="font-size:14px; font-weight:600; color:#0f172a; margin-top:2px;">${coa.date}</div>
        </div>
        <div>
          <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:600;">Analytical Standard</div>
          <div style="font-size:13px; font-weight:500; color:#334155; margin-top:2px;">HPLC Purity &amp; Mass Spectrometry</div>
        </div>
        <div>
          <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:600;">Cloud Archive Status</div>
          <div style="font-size:13px; font-weight:600; color:#16a34a; margin-top:2px;">Indexed in Google Drive</div>
        </div>
      </div>

      <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:14px; margin-bottom:20px; font-size:13px; color:#1e40af; line-height:1.5;">
        <strong>Google Drive Verification Notice:</strong> This analytical certificate is hosted on Felix Chemical Supply's official Google Drive repository. Click the button below to view the cloud folder or request an instant copy directly via WhatsApp.
      </div>

      <div style="display:flex; flex-wrap:wrap; gap:12px;">
        <a href="${activeGoogleDriveUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-primary" style="display:inline-flex; align-items:center; gap:8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <span>Open in Google Drive Archive</span>
        </a>
        <a href="${waRequestUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-secondary" style="display:inline-flex; align-items:center; gap:8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1 3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>Request via WhatsApp</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

// Close COA Lightbox
window.closeCoaLightbox = function() {
  const modal = document.getElementById("coaLightboxModal");
  if (modal) {
    modal.classList.remove("active");
    const bodyEl = document.getElementById("coaLightboxBody");
    if (bodyEl) bodyEl.innerHTML = "";
    document.body.style.overflow = "";
  }
};

// Initialize COA Lightbox Listeners
function initCoaLightbox() {
  const modal = document.getElementById("coaLightboxModal");
  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeCoaLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeCoaLightbox();
    }
  });
}

// Open Product Modal with Product Specs and Matching COAs
window.openProductModal = function(productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const modal = document.getElementById("productDetailModal");
  const modalContent = document.getElementById("productModalBody");
  if (!modal || !modalContent) return;

  const waText = encodeURIComponent("Hello Felix Chemical Supply, I would like to order: " + p.name + " (" + p.quantity + ", Price: " + p.price + ", SKU: " + p.sku + ").");
  const waLink = "https://wa.me/" + CONFIG.PHONE_CLEAN + "?text=" + waText;

  const coaList = Array.isArray(p.coas) ? p.coas : [];
  const coaSectionHtml = coaList.length > 0 ? `
    <div class="modal-section-box modal-coa-archive-box">
      <div class="modal-coa-header">
        <div class="modal-coa-title-group">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <polyline points="9 12 11 14 15 10"></polyline>
          </svg>
          <h4 class="modal-section-heading" style="margin-bottom:0;">Verified COAs (${coaList.length} Batches in Google Drive)</h4>
        </div>
        <span class="modal-coa-badge-source">Janoshik Lab Verified</span>
      </div>
      <p class="modal-coa-subtext">Click any lot number below to inspect batch specifications or access the Google Drive repository:</p>
      
      <div class="modal-coa-chips-grid">
        ${coaList.map(c => `
          <div class="modal-coa-chip" onclick="closeProductModal(); openCoaLightbox('${c.id}')">
            <div class="chip-main">
              <span class="chip-batch-name">${c.batch}</span>
              <span class="chip-date">${c.date}</span>
            </div>
            <button type="button" class="btn-chip-preview" title="Inspect lab report">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Inspect</span>
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  ` : `
    <div class="modal-section-box modal-coa-archive-box" style="background:#f8fafc; border-color:#e2e8f0;">
      <h4 class="modal-section-heading" style="color:var(--fx-text-sub);">Quality Control &amp; Testing</h4>
      <p class="modal-desc-text">Synthesized in accordance with institutional laboratory standards. Third-party testing documentation is archived in our Google Drive repository and available upon request.</p>
    </div>
  `;

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

      ${coaSectionHtml}

      <div class="modal-compliance-box">
        <strong>LABORATORY RESEARCH USE ONLY:</strong> This material is sold strictly for in-vitro laboratory analytical and scientific evaluation. Not for human consumption, nor medical, veterinary, or household uses.
      </div>

      <div class="modal-actions-row">
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-modal-whatsapp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1 3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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

// Populate Product dropdown in Order Form
function populateOrderFormProducts() {
  const select = document.getElementById("orderProductSelect");
  if (!select) return;

  select.innerHTML = `<option value="">-- Choose a research compound (${products.length} items) --</option>` +
    products.map(p => `<option value="${p.name}">${p.name} (${p.price} • ${p.quantity} • SKU: ${p.sku})</option>`).join("");
}

// Setup Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById("catalogSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderCatalog();
    });
  }

  const sortSelect = document.getElementById("catalogSort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortBy = e.target.value;
      renderCatalog();
    });
  }

  const pills = document.querySelectorAll(".filter-pill-btn");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-category");
      renderCatalog();
    });
  });

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

  const orderMessage = "*FELIX CHEMICAL SUPPLY — NEW RESEARCH INQUIRY*\n" +
"---------------------------------------\n" +
"*Researcher / Institution:* " + name + "\n" +
"*WhatsApp / Contact:* " + phone + "\n" +
"*Selected Compound:* " + product + "\n" +
"*Quantity Requested:* " + quantity + "\n" +
"*Shipping Address:* " + address + "\n" +
"*Payment Currency:* " + cryptoChoice + "\n" +
"*Transaction ID / TXID:* " + txid + "\n" +
"*Special Instructions:* " + (notes || "None") + "\n" +
"---------------------------------------\n" +
"_This inquiry is submitted for in-vitro laboratory research and analytical evaluation only._";

  const waUrl = "https://wa.me/" + CONFIG.PHONE_CLEAN + "?text=" + encodeURIComponent(orderMessage);

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
    quantityInput.value = "1 Unit (" + product.quantity + ")";
  }

  const orderSection = document.getElementById("order") || document.getElementById("payment");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" });
  }

  showToast("Selected " + product.name + " in Order Form", "info");
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
    showToast("Copied " + name + " address to clipboard!", "success");
    return;
  }

  navigator.clipboard.writeText(address).then(() => {
    showToast("Copied " + name + " address to clipboard!", "success");
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
  toast.className = "toast-message toast-" + type;
  
  let iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  if (type === "success") {
    iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
  } else if (type === "warning") {
    iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
  }

  toast.innerHTML = iconSvg + "<span>" + message + "</span>";

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
