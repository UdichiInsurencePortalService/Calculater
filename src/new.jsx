// import React, { useState } from 'react';
// import { Calculator, Coins, TrendingUp, Gem, ArrowLeft, Download, Palette, Globe, Mail } from 'lucide-react';

// const Cal = () => {
//   const [activeCalculator, setActiveCalculator] = useState(null);
//   const [results, setResults] = useState({});

//   // Gold Calculator
//   const [goldData, setGoldData] = useState({
//     marketPrice: '',
//     quantity: '',
//     category: '',
//     total: 0
//   });

//   // Silver Calculator
//   const [silverData, setSilverData] = useState({
//     marketPrice: '',
//     quantity: '',
//     category: '',
//     total: 0
//   });

//   // Natural Diamond Calculator
//   const [naturalDiamondData, setNaturalDiamondData] = useState({
//     central: { marketPrice: '', quantity: '', total: 0 },
//     side: { marketPrice: '', quantity: '', total: 0 },
//     category: '',
//     grandTotal: 0
//   });

//   // Color Stone Calculator
//   const [colorStoneData, setColorStoneData] = useState({
//     ruby: { marketPrice: '', quantity: '', total: 0 },
//     emerald: { marketPrice: '', quantity: '', total: 0 },
//     sapphire: { marketPrice: '', quantity: '', total: 0 },
//     other: { marketPrice: '', quantity: '', total: 0 },
//     category: '',
//     grandTotal: 0
//   });

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0
//     }).format(amount || 0);
//   };

//   const calculateGold = () => {
//     const total = (parseFloat(goldData.marketPrice) || 0) * (parseFloat(goldData.quantity) || 0);
//     setGoldData(prev => ({ ...prev, total }));
//     setResults(prev => ({ ...prev, gold: total }));
//   };

//   const calculateSilver = () => {
//     const total = (parseFloat(silverData.marketPrice) || 0) * (parseFloat(silverData.quantity) || 0);
//     setSilverData(prev => ({ ...prev, total }));
//     setResults(prev => ({ ...prev, silver: total }));
//   };

//   const calculateNaturalDiamond = () => {
//     const centralTotal = (parseFloat(naturalDiamondData.central.marketPrice) || 0) * (parseFloat(naturalDiamondData.central.quantity) || 0);
//     const sideTotal = (parseFloat(naturalDiamondData.side.marketPrice) || 0) * (parseFloat(naturalDiamondData.side.quantity) || 0);
//     const grandTotal = centralTotal + sideTotal;

//     setNaturalDiamondData(prev => ({
//       ...prev,
//       central: { ...prev.central, total: centralTotal },
//       side: { ...prev.side, total: sideTotal },
//       grandTotal
//     }));
//     setResults(prev => ({ ...prev, naturalDiamond: grandTotal }));
//   };

//   const calculateColorStone = () => {
//     const rubyTotal = (parseFloat(colorStoneData.ruby.marketPrice) || 0) * (parseFloat(colorStoneData.ruby.quantity) || 0);
//     const emeraldTotal = (parseFloat(colorStoneData.emerald.marketPrice) || 0) * (parseFloat(colorStoneData.emerald.quantity) || 0);
//     const sapphireTotal = (parseFloat(colorStoneData.sapphire.marketPrice) || 0) * (parseFloat(colorStoneData.sapphire.quantity) || 0);
//     const otherTotal = (parseFloat(colorStoneData.other.marketPrice) || 0) * (parseFloat(colorStoneData.other.quantity) || 0);
//     const grandTotal = rubyTotal + emeraldTotal + sapphireTotal + otherTotal;

//     setColorStoneData(prev => ({
//       ...prev,
//       ruby: { ...prev.ruby, total: rubyTotal },
//       emerald: { ...prev.emerald, total: emeraldTotal },
//       sapphire: { ...prev.sapphire, total: sapphireTotal },
//       other: { ...prev.other, total: otherTotal },
//       grandTotal
//     }));
//     setResults(prev => ({ ...prev, colorStone: grandTotal }));
//   };

//   const generatePDF = (category, data) => {
//     // Company logo as SVG (since we can't access the imported image file)
//     const companyLogo = `<svg width="80" height="80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//       <defs>
//         <radialGradient id="goldGrad" cx="50%" cy="50%" r="50%">
//           <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
//           <stop offset="100%" style="stop-color:#B8860B;stop-opacity:1" />
//         </radialGradient>
//       </defs>
//       <circle cx="100" cy="100" r="90" fill="url(#goldGrad)" stroke="#B8860B" stroke-width="4"/>
//       <text x="100" y="85" font-family="serif" font-size="28" font-weight="bold" fill="#8B4513" text-anchor="middle">THE</text>
//       <text x="100" y="120" font-family="serif" font-size="32" font-weight="bold" fill="#8B4513" text-anchor="middle">DIAMOUR</text>
//       <circle cx="70" cy="60" r="8" fill="#FFD700" opacity="0.8"/>
//       <circle cx="130" cy="60" r="6" fill="#FFD700" opacity="0.6"/>
//       <circle cx="85" cy="140" r="5" fill="#FFD700" opacity="0.7"/>
//       <circle cx="115" cy="145" r="7" fill="#FFD700" opacity="0.5"/>
//     </svg>`;

//     let content = `
//       <html>
//         <head>
//           <title>${category} Calculation Report - The Diamour</title>
//           <style>
//             body { 
//               font-family: 'Arial', sans-serif; 
//               margin: 40px; 
//               line-height: 1.6;
//               color: #333;
//             }
//             .header { 
//               text-align: center; 
//               margin-bottom: 40px; 
//               border-bottom: 3px solid #FFD700;
//               padding-bottom: 20px;
//             }
//             .logo { 
//               margin-bottom: 20px; 
//               display: flex;
//               justify-content: center;
//             }
//             .company-info {
//               margin: 20px 0;
//               text-align: center;
//               background: #f8f9fa;
//               padding: 15px;
//               border-radius: 8px;
//             }
//             .company-info a {
//               color: #FFD700;
//               text-decoration: none;
//               font-weight: bold;
//             }
//             .contact-info {
//               display: flex;
//               justify-content: center;
//               gap: 30px;
//               margin-top: 10px;
//               flex-wrap: wrap;
//             }
//             .contact-item {
//               display: flex;
//               align-items: center;
//               gap: 8px;
//             }
//             .calculation-table { 
//               width: 100%; 
//               border-collapse: collapse; 
//               margin: 20px 0; 
//               box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//             }
//             .calculation-table th, .calculation-table td { 
//               border: 1px solid #ddd; 
//               padding: 12px; 
//               text-align: left; 
//             }
//             .calculation-table th { 
//               background: linear-gradient(135deg, #FFD700, #FFA500);
//               color: white;
//               font-weight: bold;
//             }
//             .calculation-table tr:nth-child(even) {
//               background-color: #f9f9f9;
//             }
//             .category-info {
//               background: #e8f4fd;
//               padding: 15px;
//               border-radius: 8px;
//               margin: 20px 0;
//               border-left: 4px solid #FFD700;
//             }
//             .total-section { 
//               background: linear-gradient(135deg, #FFD700, #FFA500);
//               color: white;
//               padding: 25px; 
//               margin: 30px 0; 
//               border-radius: 12px;
//               box-shadow: 0 4px 12px rgba(0,0,0,0.2);
//             }
//             .footer { 
//               margin-top: 50px; 
//               text-align: center; 
//               color: #666;
//               border-top: 2px solid #FFD700;
//               padding-top: 20px;
//             }
//             .watermark {
//               position: fixed;
//               bottom: 20px;
//               right: 20px;
//               opacity: 0.1;
//               font-size: 48px;
//               color: #FFD700;
//               transform: rotate(-45deg);
//               z-index: -1;
//             }
//           </style>
//         </head>
//         <body>
//           <div class="watermark">THE DIAMOUR</div>
//           <div class="header">
//             <div class="logo">${companyLogo}</div>
//             <h1 style="color: #B8860B; margin: 0;">THE DIAMOUR</h1>
//             <p style="color: #666; font-style: italic; margin: 5px 0;">Premium Jewelry & Precious Metals</p>
//             <h2 style="color: #333; margin: 20px 0 10px 0;">${category} Calculation Report</h2>
//             <p style="margin: 0;">Generated on: ${new Date().toLocaleDateString('en-IN')} at ${new Date().toLocaleTimeString('en-IN')}</p>
//           </div>

//           <div class="company-info">
//             <div class="contact-info">
//               <div class="contact-item">
//                 <span style="color: #FFD700;">🌐</span>
//                 <a href="https://thediamour.com/">www.thediamour.com</a>
//               </div>
//               <div class="contact-item">
//                 <span style="color: #FFD700;">📧</span>
//                 <a href="mailto:diamourweb@gmail.com">diamourweb@gmail.com</a>
//               </div>
//               <div class="contact-item">
//                 <span style="color: #FFD700;">📱</span>
//                 <span>Follow us on Instagram</span>
//               </div>
//             </div>
//           </div>
//     `;

//     // Add category info if provided
//     const categoryValue = data.category || '';
//     if (categoryValue) {
//       content += `
//         <div class="category-info">
//           <h3 style="margin-top: 0; color: #B8860B;">Product Category</h3>
//           <p style="margin-bottom: 0; font-size: 16px; font-weight: bold;">${categoryValue}</p>
//         </div>
//       `;
//     }

//     // Add category-specific content
//     switch(category) {
//       case 'Gold':
//         content += `
//           <table class="calculation-table">
//             <tr><th>Parameter</th><th>Value</th></tr>
//             <tr><td>Market Price per gram</td><td>₹${goldData.marketPrice || '0'}</td></tr>
//             <tr><td>Quantity (grams)</td><td>${goldData.quantity || '0'}</td></tr>
//           </table>
//           <div class="total-section">
//             <h3 style="margin-top: 0;">Total Gold Value: ${formatCurrency(goldData.total)}</h3>
//             <p style="margin-bottom: 0;"><strong>Calculation:</strong> ${goldData.marketPrice || '0'} × ${goldData.quantity || '0'} = ${formatCurrency(goldData.total)}</p>
//           </div>
//         `;
//         break;
//       case 'Silver':
//         content += `
//           <table class="calculation-table">
//             <tr><th>Parameter</th><th>Value</th></tr>
//             <tr><td>Market Price per gram</td><td>₹${silverData.marketPrice || '0'}</td></tr>
//             <tr><td>Quantity (grams)</td><td>${silverData.quantity || '0'}</td></tr>
//           </table>
//           <div class="total-section">
//             <h3 style="margin-top: 0;">Total Silver Value: ${formatCurrency(silverData.total)}</h3>
//             <p style="margin-bottom: 0;"><strong>Calculation:</strong> ${silverData.marketPrice || '0'} × ${silverData.quantity || '0'} = ${formatCurrency(silverData.total)}</p>
//           </div>
//         `;
//         break;
//       case 'Natural Diamond':
//         content += `
//           <table class="calculation-table">
//             <tr><th>Diamond Type</th><th>Price per Carat</th><th>Quantity (Carats)</th><th>Total Value</th></tr>
//             <tr>
//               <td>Central Stone</td>
//               <td>₹${naturalDiamondData.central.marketPrice || '0'}</td>
//               <td>${naturalDiamondData.central.quantity || '0'}</td>
//               <td>${formatCurrency(naturalDiamondData.central.total)}</td>
//             </tr>
//             <tr>
//               <td>Side Stone</td>
//               <td>₹${naturalDiamondData.side.marketPrice || '0'}</td>
//               <td>${naturalDiamondData.side.quantity || '0'}</td>
//               <td>${formatCurrency(naturalDiamondData.side.total)}</td>
//             </tr>
//           </table>
//           <div class="total-section">
//             <h3 style="margin-top: 0;">Total Natural Diamond Value: ${formatCurrency(naturalDiamondData.grandTotal)}</h3>
//             <p><strong>Central Stone:</strong> ${naturalDiamondData.central.marketPrice || '0'} × ${naturalDiamondData.central.quantity || '0'} = ${formatCurrency(naturalDiamondData.central.total)}</p>
//             <p style="margin-bottom: 0;"><strong>Side Stone:</strong> ${naturalDiamondData.side.marketPrice || '0'} × ${naturalDiamondData.side.quantity || '0'} = ${formatCurrency(naturalDiamondData.side.total)}</p>
//           </div>
//         `;
//         break;
//       case 'Color Stone':
//         content += `
//           <table class="calculation-table">
//             <tr><th>Stone Type</th><th>Price per Carat</th><th>Quantity (Carats)</th><th>Total Value</th></tr>
//             <tr>
//               <td>Ruby</td>
//               <td>₹${colorStoneData.ruby.marketPrice || '0'}</td>
//               <td>${colorStoneData.ruby.quantity || '0'}</td>
//               <td>${formatCurrency(colorStoneData.ruby.total)}</td>
//             </tr>
//             <tr>
//               <td>Emerald</td>
//               <td>₹${colorStoneData.emerald.marketPrice || '0'}</td>
//               <td>${colorStoneData.emerald.quantity || '0'}</td>
//               <td>${formatCurrency(colorStoneData.emerald.total)}</td>
//             </tr>
//             <tr>
//               <td>Sapphire</td>
//               <td>₹${colorStoneData.sapphire.marketPrice || '0'}</td>
//               <td>${colorStoneData.sapphire.quantity || '0'}</td>
//               <td>${formatCurrency(colorStoneData.sapphire.total)}</td>
//             </tr>
//             <tr>
//               <td>Other Stones</td>
//               <td>₹${colorStoneData.other.marketPrice || '0'}</td>
//               <td>${colorStoneData.other.quantity || '0'}</td>
//               <td>${formatCurrency(colorStoneData.other.total)}</td>
//             </tr>
//           </table>
//           <div class="total-section">
//             <h3 style="margin-top: 0;">Total Color Stone Value: ${formatCurrency(colorStoneData.grandTotal)}</h3>
//           </div>
//         `;
//         break;
//     }

//     content += `
//           <div class="footer">
//             <h4 style="color: #B8860B;">THE DIAMOUR</h4>
//             <p>Premium Jewelry & Precious Metals Calculator</p>
//             <div style="margin: 15px 0;">
//               <strong>Contact Us:</strong><br>
//               🌐 <a href="https://thediamour.com/">www.thediamour.com</a><br>
//               📧 <a href="mailto:diamourweb@gmail.com">diamourweb@gmail.com</a><br>
//               📱 Follow us on Instagram for latest updates
//             </div>
//             <p style="font-size: 12px; color: #999;">This report is generated automatically and is for reference purposes only.</p>
//           </div>
//         </body>
//       </html>
//     `;

//     // Create and download the PDF (using HTML content)
//     const blob = new Blob([content], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `The_Diamour_${category.replace(' ', '_')}_Calculation_Report.html`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   const metals = [
//     {
//       key: 'gold',
//       name: 'Gold',
//       icon: Coins,
//       color: '#FFD700',
//       bgGradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
//     },
//     {
//       key: 'silver',
//       name: 'Silver',
//       icon: TrendingUp,
//       color: '#C0C0C0',
//       bgGradient: 'linear-gradient(135deg, #C0C0C0 0%, #A9A9A9 100%)'
//     },
//     {
//       key: 'naturalDiamond',
//       name: 'Natural Diamond',
//       icon: Gem,
//       color: '#4A90E2',
//       bgGradient: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)'
//     },
//     {
//       key: 'colorStone',
//       name: 'Color Stone',
//       icon: Palette,
//       color: '#9B59B6',
//       bgGradient: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)'
//     }
//   ];

//   const renderMainView = () => (
//     <div className="min-vh-100 py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
//       <div className="container">
//         {/* Header with Company Info */}
//         <div className="text-center mb-5">
//           <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
//                style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
//             <Calculator size={40} className="text-white" />
//           </div>
//           <h1 className="display-4 fw-bold text-white mb-2">
//             THE DIAMOUR
//           </h1>
//           <p className="lead text-white-50 mb-3">
//             Premium Jewelry & Precious Metals Calculator
//           </p>
          
//           {/* Company Links */}
//           <div className="d-flex justify-content-center gap-4 mb-4 flex-wrap">
//             <a href="https://thediamour.com/" target="_blank" rel="noopener noreferrer" 
//                className="text-white text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded"
//                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
//               <Globe size={16} />
//               <span>Visit Website</span>
//             </a>
//             <a href="mailto:diamourweb@gmail.com" 
//                className="text-white text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded"
//                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
//               <Mail size={16} />
//               <span>diamourweb@gmail.com</span>
//             </a>
//             <div className="text-white d-flex align-items-center gap-2 px-3 py-2 rounded"
//                  style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
//               <Instagram size={16} />
//               <span>Follow us on Instagram</span>
//             </div>
//           </div>
//         </div>

//         {/* Metal Cards */}
//         <div className="row g-4 justify-content-center">
//           {metals.map((metal) => {
//             const IconComponent = metal.icon;
//             return (
//               <div key={metal.key} className="col-xl-3 col-lg-4 col-md-6">
//                 <div 
//                   className="card h-100 shadow-lg border-0 position-relative overflow-hidden"
//                   style={{ 
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                     background: metal.bgGradient
//                   }}
//                   onClick={() => setActiveCalculator(metal.key)}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateY(-10px)';
//                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateY(0)';
//                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
//                   }}
//                 >
//                   <div className="card-body text-center p-4">
//                     <div className="mb-3">
//                       <div 
//                         className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
//                         style={{ 
//                           width: '60px', 
//                           height: '60px', 
//                           background: 'rgba(255,255,255,0.2)',
//                           backdropFilter: 'blur(10px)'
//                         }}
//                       >
//                         <IconComponent size={30} className="text-white" />
//                       </div>
//                     </div>
//                     <h5 className="card-title text-white fw-bold mb-2">{metal.name}</h5>
//                     <p className="card-text text-white-50 mb-3 small">
//                       Click to calculate {metal.name.toLowerCase()} value
//                     </p>
//                     {results[metal.key] && (
//                       <div className="mt-2">
//                         <small className="text-white-50">Current Value:</small>
//                         <div className="fw-bold text-white">
//                           {formatCurrency(results[metal.key])}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <div 
//                     className="position-absolute top-0 end-0 m-3"
//                     style={{ 
//                       width: '30px', 
//                       height: '30px', 
//                       background: 'rgba(255,255,255,0.2)',
//                       borderRadius: '50%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }}
//                   >
//                     <span className="text-white small">→</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Total Portfolio Value */}
//         {Object.keys(results).some(key => results[key] > 0) && (
//           <div className="row justify-content-center mt-5">
//             <div className="col-lg-8">
//               <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
//                 <div className="card-body text-center p-4">
//                   <h2 className="card-title fw-bold mb-4">Total Portfolio Value</h2>
//                   <div className="display-4 fw-bold text-primary mb-4">
//                     {formatCurrency(Object.values(results).reduce((sum, value) => sum + (value || 0), 0))}
//                   </div>
//                   <div className="row g-3">
//                     {Object.entries(results).map(([key, value]) => {
//                       const metal = metals.find(m => m.key === key);
//                       if (!metal || !value) return null;
//                       return (
//                         <div key={key} className="col-6 col-md-3">
//                           <div className="text-muted small">{metal.name}</div>
//                           <div className="fw-bold small" style={{ color: metal.color }}>
//                             {formatCurrency(value)}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   const renderGoldCalculator = () => (
//     <div className="min-vh-100 py-5" style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
//               <div className="card-header bg-transparent border-0 p-4">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <button 
//                       className="btn btn-outline-warning me-3"
//                       onClick={() => setActiveCalculator(null)}
//                     >
//                       <ArrowLeft size={20} />
//                     </button>
//                     <div className="d-flex align-items-center">
//                       <Coins size={32} className="text-warning me-3" />
//                       <div>
//                         <h2 className="mb-0 fw-bold">Gold Calculator</h2>
//                         <p className="mb-0 text-muted">Calculate your gold value</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button 
//                     className="btn btn-success"
//                     onClick={() => generatePDF('Gold', goldData)}
//                     disabled={goldData.total === 0}
//                   >
//                     <Download size={16} className="me-2" />
//                     Download PDF
//                   </button>
//                 </div>
//               </div>
//               <div className="card-body p-4">
//                 <div className="row g-4">
//                   <div className="col-md-4">
//                     <label className="form-label fw-semibold">Product Category</label>
//                     <input
//                       type="text"
//                       className="form-control form-control-lg"
//                       value={goldData.category}
//                       onChange={(e) => setGoldData(prev => ({ ...prev, category: e.target.value }))}
//                       placeholder="e.g., Rings, Bracelet, Earring, etc."
//                     />
//                     <small className="text-muted">Optional: Specify product type</small>
//                   </div>
//                   <div className="col-md-4">
//                     <label className="form-label fw-semibold">Market Price (₹ per gram)</label>
//                     <input
//                       type="number"
//                       className="form-control form-control-lg"
//                       value={goldData.marketPrice}
//                       onChange={(e) => setGoldData(prev => ({ ...prev, marketPrice: e.target.value }))}
//                       placeholder="Enter market price"
//                     />
//                   </div>
//                   <div className="col-md-4">
//                     <label className="form-label fw-semibold">Quantity (grams)</label>
//                     <input
//                       type="number"
//                       className="form-control form-control-lg"
//                       value={goldData.quantity}
//                       onChange={(e) => setGoldData(prev => ({ ...prev, quantity: e.target.value }))}
//                       placeholder="Enter quantity"
//                     />
//                   </div>
//                 </div>
//                 <div className="text-center mt-4">
//                   <button 
//                     className="btn btn-warning btn-lg px-5 fw-semibold"
//                     onClick={calculateGold}
//                   >
//                     Calculate Gold Value
//                   </button>
//                 </div>
//                 {goldData.total > 0 && (
//                   <div className="mt-4 text-center">
//                     <div className="alert alert-warning" role="alert">
//                       <h4 className="alert-heading fw-bold">Total Gold Value</h4>
//                       {goldData.category && (
//                         <p className="mb-2"><strong>Category:</strong> {goldData.category}</p>
//                       )}
//                       <hr />
//                       <p className="mb-0 display-5 fw-bold text-warning">
//                         {formatCurrency(goldData.total)}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderSilverCalculator = () => (
//     <div className="min-vh-100 py-5" style={{ background: 'linear-gradient(135deg, #C0C0C0 0%, #A9A9A9 100%)' }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
//               <div className="card-header bg-transparent border-0 p-4">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <button 
//                       className="btn btn-outline-secondary me-3"
//                       onClick={() => setActiveCalculator(null)}
//                     >
//                       <ArrowLeft size={20} />
//                     </button>
//                     <div className="d-flex align-items-center">
//                       <TrendingUp size={32} className="text-secondary me-3" />
//                       <div>
//                         <h2 className="mb-0 fw-bold">Silver Calculator</h2>
//                         <p className="mb-0 text-muted">Calculate your silver value</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button 
//                     className="btn btn-success"
//                     onClick={() => generatePDF('Silver', silverData)}
//                     disabled={silverData.total === 0}
//                   >
//                     <Download size={16} className="me-2" />
//                     Download PDF
//                   </button>
//                 </div>
//               </div>
//               <div className="card-body p-4">
//                 <div className="row g-4">
//                   <div className="col-md-4">
//                     <label className="form-label fw-semibold">Product Category</label>
//                     <input
//                       type="text"
//                       className="form-control form-control-lg"
//                       value={silverData.category}
//                       onChange={(e) => setSilverData(prev => ({ ...prev, category: e.target.value }))}
//                       placeholder="e.g., Rings, Bracelet, Earring, etc."
//                     />
//                     <small className="text-muted">Optional: Specify product type</small>
//                   </div>
//                   <div className="col-md-4">
//                     <label className="form-label fw-semibold">Market Price (₹ per gram)</label>
//                     <input
//                       type="number"
//                       className="form-control form-control-lg"
//                       value={silverData.marketPrice}
//                       onChange={(e) => setSilverData(prev => ({ ...prev, marketPrice: e.target.value }))}
//                       placeholder="Enter market price"
//                     />
//                   </div>
//                   <div className="col-md-4">
//                     <label className="form-label fw-semibold">Quantity (grams)</label>
//                     <input
//                       type="number"
//                       className="form-control form-control-lg"
//                       value={silverData.quantity}
//                       onChange={(e) => setSilverData(prev => ({ ...prev, quantity: e.target.value }))}
//                       placeholder="Enter quantity"
//                     />
//                   </div>
//                 </div>
//                 <div className="text-center mt-4">
//                   <button 
//                     className="btn btn-secondary btn-lg px-5 fw-semibold"
//                     onClick={calculateSilver}
//                   >
//                     Calculate Silver Value
//                   </button>
//                 </div>
//                 {silverData.total > 0 && (
//                   <div className="mt-4 text-center">
//                     <div className="alert alert-secondary" role="alert">
//                       <h4 className="alert-heading fw-bold">Total Silver Value</h4>
//                       {silverData.category && (
//                         <p className="mb-2"><strong>Category:</strong> {silverData.category}</p>
//                       )}
//                       <hr />
//                       <p className="mb-0 display-5 fw-bold text-secondary">
//                         {formatCurrency(silverData.total)}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderNaturalDiamondCalculator = () => (
//     <div className="min-vh-100 py-5" style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)' }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
//               <div className="card-header bg-transparent border-0 p-4">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <button 
//                       className="btn btn-outline-primary me-3"
//                       onClick={() => setActiveCalculator(null)}
//                     >
//                       <ArrowLeft size={20} />
//                     </button>
//                     <div className="d-flex align-items-center">
//                       <Gem size={32} className="text-primary me-3" />
//                       <div>
//                         <h2 className="mb-0 fw-bold">Natural Diamond Calculator</h2>
//                         <p className="mb-0 text-muted">Calculate your natural diamond portfolio value</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button 
//                     className="btn btn-success"
//                     onClick={() => generatePDF('Natural Diamond', naturalDiamondData)}
//                     disabled={naturalDiamondData.grandTotal === 0}
//                   >
//                     <Download size={16} className="me-2" />
//                     Download PDF
//                   </button>
//                 </div>
//               </div>
//               <div className="card-body p-4">
//                 {/* Category Input */}
//                 <div className="row mb-4">
//                   <div className="col-md-6 mx-auto">
//                     <label className="form-label fw-semibold">Product Category</label>
//                     <input
//                       type="text"
//                       className="form-control form-control-lg"
//                       value={naturalDiamondData.category}
//                       onChange={(e) => setNaturalDiamondData(prev => ({ ...prev, category: e.target.value }))}
//                       placeholder="e.g., Engagement Ring, Pendant, Earrings, etc."
//                     />
//                     <small className="text-muted">Optional: Specify product type</small>
//                   </div>
//                 </div>

//                 <div className="row g-4">
//                   {/* Central Stone */}
//                   <div className="col-md-6">
//                     <div className="card h-100 border-primary">
//                       <div className="card-header bg-primary text-white">
//                         <h5 className="mb-0 fw-semibold">Central Stone</h5>
//                       </div>
//                       <div className="card-body">
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold">Price (₹ per carat)</label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             value={naturalDiamondData.central.marketPrice}
//                             onChange={(e) => setNaturalDiamondData(prev => ({
//                               ...prev,
//                               central: { ...prev.central, marketPrice: e.target.value }
//                             }))}
//                             placeholder="Enter price"
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold">Quantity (carats)</label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             value={naturalDiamondData.central.quantity}
//                             onChange={(e) => setNaturalDiamondData(prev => ({
//                               ...prev,
//                               central: { ...prev.central, quantity: e.target.value }
//                             }))}
//                             placeholder="Enter quantity"
//                           />
//                         </div>
//                         {naturalDiamondData.central.total > 0 && (
//                           <div className="text-center">
//                             <strong className="text-primary">
//                               {formatCurrency(naturalDiamondData.central.total)}
//                             </strong>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Side Stone */}
//                   <div className="col-md-6">
//                     <div className="card h-100 border-info">
//                       <div className="card-header bg-info text-white">
//                         <h5 className="mb-0 fw-semibold">Side Stone</h5>
//                       </div>
//                       <div className="card-body">
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold">Price (₹ per carat)</label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             value={naturalDiamondData.side.marketPrice}
//                             onChange={(e) => setNaturalDiamondData(prev => ({
//                               ...prev,
//                               side: { ...prev.side, marketPrice: e.target.value }
//                             }))}
//                             placeholder="Enter price"
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold">Quantity (carats)</label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             value={naturalDiamondData.side.quantity}
//                             onChange={(e) => setNaturalDiamondData(prev => ({
//                               ...prev,
//                               side: { ...prev.side, quantity: e.target.value }
//                             }))}
//                             placeholder="Enter quantity"
//                           />
//                         </div>
//                         {naturalDiamondData.side.total > 0 && (
//                           <div className="text-center">
//                             <strong className="text-info">
//                               {formatCurrency(naturalDiamondData.side.total)}
//                             </strong>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="text-center mt-4">
//                   <button 
//                     className="btn btn-primary btn-lg px-5 fw-semibold"
//                     onClick={calculateNaturalDiamond}
//                   >
//                     Calculate Natural Diamond Value
//                   </button>
//                 </div>

//                 {naturalDiamondData.grandTotal > 0 && (
//                   <div className="mt-4 text-center">
//                     <div className="alert alert-primary" role="alert">
//                       <h4 className="alert-heading fw-bold">Total Natural Diamond Portfolio Value</h4>
//                       {naturalDiamondData.category && (
//                         <p className="mb-2"><strong>Category:</strong> {naturalDiamondData.category}</p>
//                       )}
//                       <hr />
//                       <p className="mb-0 display-4 fw-bold text-primary">
//                         {formatCurrency(naturalDiamondData.grandTotal)}
//                       </p>
//                       <div className="row mt-3">
//                         <div className="col-6">
//                           <small className="text-muted">Central Stone</small><br />
//                           <strong>{formatCurrency(naturalDiamondData.central.total)}</strong>
//                         </div>
//                         <div className="col-6">
//                           <small className="text-muted">Side Stone</small><br />
//                           <strong>{formatCurrency(naturalDiamondData.side.total)}</strong>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderColorStoneCalculator = () => (
//     <div className="min-vh-100 py-5" style={{ background: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)' }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-12">
//             <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
//               <div className="card-header bg-transparent border-0 p-4">
//                 <div className="d-flex align-items-center justify-content-between flex-wrap">
//                   <div className="d-flex align-items-center">
//                     <button 
//                       className="btn btn-outline-primary me-3"
//                       onClick={() => setActiveCalculator(null)}
//                     >
//                       <ArrowLeft size={20} />
//                     </button>
//                     <div className="d-flex align-items-center">
//                       <Palette size={32} className="text-primary me-3" />
//                       <div>
//                         <h2 className="mb-0 fw-bold">Color Stone Calculator</h2>
//                         <p className="mb-0 text-muted">Calculate your color stone portfolio value</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button 
//                     className="btn btn-success mt-2 mt-md-0"
//                     onClick={() => generatePDF('Color Stone', colorStoneData)}
//                     disabled={colorStoneData.grandTotal === 0}
//                   >
//                     <Download size={16} className="me-2" />
//                     Download PDF
//                   </button>
//                 </div>
//               </div>
//               <div className="card-body p-4">
//                 {/* Category Input */}
//                 <div className="row mb-4">
//                   <div className="col-md-6 mx-auto">
//                     <label className="form-label fw-semibold">Product Category</label>
//                     <input
//                       type="text"
//                       className="form-control form-control-lg"
//                       value={colorStoneData.category}
//                       onChange={(e) => setColorStoneData(prev => ({ ...prev, category: e.target.value }))}
//                       placeholder="e.g., Rings, Necklace, Bracelet, Earrings, etc."
//                     />
//                     <small className="text-muted">Optional: Specify product type</small>
//                   </div>
//                 </div>

//                 <div className="row g-4">
//                   {/* Ruby */}
//                   <div className="col-lg-3 col-md-6">
//                     <div className="card h-100 border-danger">
//                       <div className="card-header bg-danger text-white">
//                         <h6 className="mb-0 fw-semibold">Ruby</h6>
//                       </div>
//                       <div className="card-body p-3">
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold small">Price (₹/carat)</label>
//                           <input
//                             type="number"
//                             className="form-control form-control-sm"
//                             value={colorStoneData.ruby.marketPrice}
//                             onChange={(e) => setColorStoneData(prev => ({
//                               ...prev,
//                               ruby: { ...prev.ruby, marketPrice: e.target.value }
//                             }))}
//                             placeholder="Price"
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold small">Quantity (carats)</label>
//                           <input
//                             type="number"
//                             className="form-control form-control-sm"
//                             value={colorStoneData.ruby.quantity}
//                             onChange={(e) => setColorStoneData(prev => ({
//                               ...prev,
//                               ruby: { ...prev.ruby, quantity: e.target.value }
//                             }))}
//                             placeholder="Quantity"
//                           />
//                         </div>
//                         {colorStoneData.ruby.total > 0 && (
//                           <div className="text-center">
//                             <strong className="text-danger small">
//                               {formatCurrency(colorStoneData.ruby.total)}
//                             </strong>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Emerald */}
//                   <div className="col-lg-3 col-md-6">
//                     <div className="card h-100 border-success">
//                       <div className="card-header bg-success text-white">
//                         <h6 className="mb-0 fw-semibold">Emerald</h6>
//                       </div>
//                       <div className="card-body p-3">
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold small">Price (₹/carat)</label>
//                           <input
//                             type="number"
//                             className="form-control form-control-sm"
//                             value={colorStoneData.emerald.marketPrice}
//                             onChange={(e) => setColorStoneData(prev => ({
//                               ...prev,
//                               emerald: { ...prev.emerald, marketPrice: e.target.value }
//                             }))}
//                             placeholder="Price"
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold small">Quantity (carats)</label>
//                           <input
//                             type="number"
//                             className="form-control form-control-sm"
//                             value={colorStoneData.emerald.quantity}
//                             onChange={(e) => setColorStoneData(prev => ({
//                               ...prev,
//                               emerald: { ...prev.emerald, quantity: e.target.value }
//                             }))}
//                             placeholder="Quantity"
//                           />
//                         </div>
//                         {colorStoneData.emerald.total > 0 && (
//                           <div className="text-center">
//                             <strong className="text-success small">
//                               {formatCurrency(colorStoneData.emerald.total)}
//                             </strong>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Sapphire */}
//                   <div className="col-lg-3 col-md-6">
//                     <div className="card h-100 border-primary">
//                       <div className="card-header bg-primary text-white">
//                         <h6 className="mb-0 fw-semibold">Sapphire</h6>
//                       </div>
//                       <div className="card-body p-3">
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold small">Price (₹/carat)</label>
//                           <input
//                             type="number"
//                             className="form-control form-control-sm"
//                             value={colorStoneData.sapphire.marketPrice}
//                             onChange={(e) => setColorStoneData(prev => ({
//                               ...prev,
//                               sapphire: { ...prev.sapphire, marketPrice: e.target.value }
//                             }))}
//                             placeholder="Price"
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold small">Quantity (carats)</label>
//                           <input
//                             type="number"
//                             className="form-control form-control-sm"
//                             value={colorStoneData.sapphire.quantity}
//                             onChange={(e) => setColorStoneData(prev => ({
//                               ...prev,
//                               sapphire: { ...prev.sapphire, quantity: e.target.value }
//                             }))}
//                             placeholder="Quantity"
//                           />
//                         </div>
//                         {colorStoneData.sapphire.total > 0 && (
//                           <div className="text-center">
//                             <strong className="text-primary small">
//                               {formatCurrency(colorStoneData.sapphire.total)}
//                             </strong>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Other Stones */}
//                   <div className="col-lg-3 col-md-6">
//                     <div className="card h-100 border-secondary">
//                       <div className="card-header bg-secondary text-white">
//                         <h6 className="mb-0 fw-semibold">Other Stones</h6>
//                       </div>
//                       <div className="card-body p-3">
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold small">Price (₹/carat)</label>
//                           <input
//                             type="number"
//                             className="form-control form-control-sm"
//                             value={colorStoneData.other.marketPrice}
//                             onChange={(e) => setColorStoneData(prev => ({
//                               ...prev,
//                               other: { ...prev.other, marketPrice: e.target.value }
//                             }))}
//                             placeholder="Price"
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label fw-semibold small">Quantity (carats)</label>
//                           <input
//                             type="number"
//                             className="form-control form-control-sm"
//                             value={colorStoneData.other.quantity}
//                             onChange={(e) => setColorStoneData(prev => ({
//                               ...prev,
//                               other: { ...prev.other, quantity: e.target.value }
//                             }))}
//                             placeholder="Quantity"
//                           />
//                         </div>
//                         {colorStoneData.other.total > 0 && (
//                           <div className="text-center">
//                             <strong className="text-secondary small">
//                               {formatCurrency(colorStoneData.other.total)}
//                             </strong>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="text-center mt-4">
//                   <button 
//                     className="btn btn-primary btn-lg px-5 fw-semibold"
//                     onClick={calculateColorStone}
//                   >
//                     Calculate Color Stone Value
//                   </button>
//                 </div>

//                 {colorStoneData.grandTotal > 0 && (
//                   <div className="mt-4 text-center">
//                     <div className="alert alert-primary" role="alert">
//                       <h4 className="alert-heading fw-bold">Total Color Stone Portfolio Value</h4>
//                       {colorStoneData.category && (
//                         <p className="mb-2"><strong>Category:</strong> {colorStoneData.category}</p>
//                       )}
//                       <hr />
//                       <p className="mb-0 display-4 fw-bold text-primary">
//                         {formatCurrency(colorStoneData.grandTotal)}
//                       </p>
//                       <div className="row mt-3">
//                         <div className="col-6 col-md-3">
//                           <small className="text-muted">Ruby</small><br />
//                           <strong className="text-danger">{formatCurrency(colorStoneData.ruby.total)}</strong>
//                         </div>
//                         <div className="col-6 col-md-3">
//                           <small className="text-muted">Emerald</small><br />
//                           <strong className="text-success">{formatCurrency(colorStoneData.emerald.total)}</strong>
//                         </div>
//                         <div className="col-6 col-md-3">
//                           <small className="text-muted">Sapphire</small><br />
//                           <strong className="text-primary">{formatCurrency(colorStoneData.sapphire.total)}</strong>
//                         </div>
//                         <div className="col-6 col-md-3">
//                           <small className="text-muted">Other</small><br />
//                           <strong className="text-secondary">{formatCurrency(colorStoneData.other.total)}</strong>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

// );
//  return (
//     <>
//       <link 
//         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
//         rel="stylesheet" 
//       />
//       {activeCalculator === null && renderMainView()}
//       {activeCalculator === 'gold' && renderGoldCalculator()}
//       {activeCalculator === 'silver' && renderSilverCalculator()}
//       {activeCalculator === 'naturalDiamond' && renderNaturalDiamondCalculator()}
//       {activeCalculator === 'colorStone' && renderColorStoneCalculator()}
//     </>
//   );
// };
            
// export default Cal;