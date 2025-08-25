import React, { useState } from 'react';
import { Calculator, Coins, TrendingUp, Gem, ArrowLeft } from 'lucide-react';

const Cal = () => {
  const [activeCalculator, setActiveCalculator] = useState(null);
  const [results, setResults] = useState({});

  // Gold Calculator
  const [goldData, setGoldData] = useState({
    marketPrice: '',
    quantity: '',
    total: 0
  });

  // Silver Calculator
  const [silverData, setSilverData] = useState({
    marketPrice: '',
    quantity: '',
    total: 0
  });

  // Diamond Calculator
  const [diamondData, setDiamondData] = useState({
    normal: { marketPrice: '', quantity: '', total: 0 },
    thunder: { marketPrice: '', quantity: '', total: 0 },
    sideStone: { marketPrice: '', quantity: '', total: 0 },
    grandTotal: 0
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount || 0);
  };

  const calculateGold = () => {
    const total = (parseFloat(goldData.marketPrice) || 0) * (parseFloat(goldData.quantity) || 0);
    setGoldData(prev => ({ ...prev, total }));
    setResults(prev => ({ ...prev, gold: total }));
  };

  const calculateSilver = () => {
    const total = (parseFloat(silverData.marketPrice) || 0) * (parseFloat(silverData.quantity) || 0);
    setSilverData(prev => ({ ...prev, total }));
    setResults(prev => ({ ...prev, silver: total }));
  };

  const calculateDiamond = () => {
    const normalTotal = (parseFloat(diamondData.normal.marketPrice) || 0) * (parseFloat(diamondData.normal.quantity) || 0);
    const thunderTotal = (parseFloat(diamondData.thunder.marketPrice) || 0) * (parseFloat(diamondData.thunder.quantity) || 0);
    const sideStoneTotal = (parseFloat(diamondData.sideStone.marketPrice) || 0) * (parseFloat(diamondData.sideStone.quantity) || 0);
    const grandTotal = normalTotal + thunderTotal + sideStoneTotal;

    setDiamondData(prev => ({
      ...prev,
      normal: { ...prev.normal, total: normalTotal },
      thunder: { ...prev.thunder, total: thunderTotal },
      sideStone: { ...prev.sideStone, total: sideStoneTotal },
      grandTotal
    }));
    setResults(prev => ({ ...prev, diamond: grandTotal }));
  };

  const metals = [
    {
      key: 'gold',
      name: 'Gold',
      icon: Coins,
      color: '#FFD700',
      bgGradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    },
    {
      key: 'silver',
      name: 'Silver',
      icon: TrendingUp,
      color: '#C0C0C0',
      bgGradient: 'linear-gradient(135deg, #C0C0C0 0%, #A9A9A9 100%)'
    },
    {
      key: 'diamond',
      name: 'Diamond',
      icon: Gem,
      color: '#4A90E2',
      bgGradient: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)'
    }
  ];

  const renderMainView = () => (
    <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
               style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
            <Calculator size={40} className="text-white" />
          </div>
          <h1 className="display-4 fw-bold text-white mb-3">
            Precious Metals Calculator
          </h1>
          <p className="lead text-white-50">
            Calculate the value of your precious metals portfolio
          </p>
        </div>

        {/* Metal Cards */}
        <div className="row g-4 justify-content-center">
          {metals.map((metal) => {
            const IconComponent = metal.icon;
            return (
              <div key={metal.key} className="col-lg-4 col-md-6">
                <div 
                  className="card h-100 shadow-lg border-0 position-relative overflow-hidden"
                  style={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: metal.bgGradient
                  }}
                  onClick={() => setActiveCalculator(metal.key)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                  }}
                >
                  <div className="card-body text-center p-5">
                    <div className="mb-4">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{ 
                          width: '80px', 
                          height: '80px', 
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <IconComponent size={40} className="text-white" />
                      </div>
                    </div>
                    <h3 className="card-title text-white fw-bold mb-3">{metal.name}</h3>
                    <p className="card-text text-white-50 mb-4">
                      Click to open {metal.name.toLowerCase()} calculator
                    </p>
                    {results[metal.key] && (
                      <div className="mt-3">
                        <small className="text-white-50">Current Value:</small>
                        <div className="fw-bold text-white h5">
                          {formatCurrency(results[metal.key])}
                        </div>
                      </div>
                    )}
                  </div>
                  <div 
                    className="position-absolute top-0 end-0 m-3"
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span className="text-white">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Portfolio Value */}
        {(results.gold || results.silver || results.diamond) && (
          <div className="row justify-content-center mt-5">
            <div className="col-lg-6">
              <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
                <div className="card-body text-center p-5">
                  <h2 className="card-title fw-bold mb-4">Total Portfolio Value</h2>
                  <div className="display-4 fw-bold text-primary mb-4">
                    {formatCurrency((results.gold || 0) + (results.silver || 0) + (results.diamond || 0))}
                  </div>
                  <div className="row g-3">
                    {Object.entries(results).map(([key, value]) => {
                      const metal = metals.find(m => m.key === key);
                      if (!metal || !value) return null;
                      return (
                        <div key={key} className="col-4">
                          <div className="text-muted small">{metal.name}</div>
                          <div className="fw-bold" style={{ color: metal.color }}>
                            {formatCurrency(value)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderGoldCalculator = () => (
    <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
              <div className="card-header bg-transparent border-0 p-4">
                <div className="d-flex align-items-center">
                  <button 
                    className="btn btn-outline-warning me-3"
                    onClick={() => setActiveCalculator(null)}
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="d-flex align-items-center">
                    <Coins size={32} className="text-warning me-3" />
                    <div>
                      <h2 className="mb-0 fw-bold">Gold Calculator</h2>
                      <p className="mb-0 text-muted">Calculate your gold value</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-5">
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Market Price (₹ per gram)</label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      value={goldData.marketPrice}
                      onChange={(e) => setGoldData(prev => ({ ...prev, marketPrice: e.target.value }))}
                      placeholder="Enter market price"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Quantity (grams)</label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      value={goldData.quantity}
                      onChange={(e) => setGoldData(prev => ({ ...prev, quantity: e.target.value }))}
                      placeholder="Enter quantity"
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button 
                    className="btn btn-warning btn-lg px-5 fw-semibold"
                    onClick={calculateGold}
                  >
                    Calculate Gold Value
                  </button>
                </div>
                {goldData.total > 0 && (
                  <div className="mt-5 text-center">
                    <div className="alert alert-warning" role="alert">
                      <h4 className="alert-heading fw-bold">Total Gold Value</h4>
                      <hr />
                      <p className="mb-0 display-5 fw-bold text-warning">
                        {formatCurrency(goldData.total)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSilverCalculator = () => (
    <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #C0C0C0 0%, #A9A9A9 100%)', minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
              <div className="card-header bg-transparent border-0 p-4">
                <div className="d-flex align-items-center">
                  <button 
                    className="btn btn-outline-secondary me-3"
                    onClick={() => setActiveCalculator(null)}
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="d-flex align-items-center">
                    <TrendingUp size={32} className="text-secondary me-3" />
                    <div>
                      <h2 className="mb-0 fw-bold">Silver Calculator</h2>
                      <p className="mb-0 text-muted">Calculate your silver value</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-5">
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Market Price (₹ per gram)</label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      value={silverData.marketPrice}
                      onChange={(e) => setSilverData(prev => ({ ...prev, marketPrice: e.target.value }))}
                      placeholder="Enter market price"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Quantity (grams)</label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      value={silverData.quantity}
                      onChange={(e) => setSilverData(prev => ({ ...prev, quantity: e.target.value }))}
                      placeholder="Enter quantity"
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button 
                    className="btn btn-secondary btn-lg px-5 fw-semibold"
                    onClick={calculateSilver}
                  >
                    Calculate Silver Value
                  </button>
                </div>
                {silverData.total > 0 && (
                  <div className="mt-5 text-center">
                    <div className="alert alert-secondary" role="alert">
                      <h4 className="alert-heading fw-bold">Total Silver Value</h4>
                      <hr />
                      <p className="mb-0 display-5 fw-bold text-secondary">
                        {formatCurrency(silverData.total)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDiamondCalculator = () => (
    <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)', minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
              <div className="card-header bg-transparent border-0 p-4">
                <div className="d-flex align-items-center">
                  <button 
                    className="btn btn-outline-primary me-3"
                    onClick={() => setActiveCalculator(null)}
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="d-flex align-items-center">
                    <Gem size={32} className="text-primary me-3" />
                    <div>
                      <h2 className="mb-0 fw-bold">Diamond Calculator</h2>
                      <p className="mb-0 text-muted">Calculate your diamond portfolio value</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-5">
                <div className="row g-4">
                  {/* Normal Diamond */}
                  <div className="col-lg-4">
                    <div className="card h-100 border-primary">
                      <div className="card-header bg-primary text-white">
                        <h5 className="mb-0 fw-semibold">Normal Diamond</h5>
                      </div>
                      <div className="card-body">
                        <div className="mb-3">
                          <label className="form-label fw-semibold">Price (₹ per carat)</label>
                          <input
                            type="number"
                            className="form-control"
                            value={diamondData.normal.marketPrice}
                            onChange={(e) => setDiamondData(prev => ({
                              ...prev,
                              normal: { ...prev.normal, marketPrice: e.target.value }
                            }))}
                            placeholder="Enter price"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">Quantity (carats)</label>
                          <input
                            type="number"
                            className="form-control"
                            value={diamondData.normal.quantity}
                            onChange={(e) => setDiamondData(prev => ({
                              ...prev,
                              normal: { ...prev.normal, quantity: e.target.value }
                            }))}
                            placeholder="Enter quantity"
                          />
                        </div>
                        {diamondData.normal.total > 0 && (
                          <div className="text-center">
                            <strong className="text-primary">
                              {formatCurrency(diamondData.normal.total)}
                            </strong>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Thunder Diamond */}
                  <div className="col-lg-4">
                    <div className="card h-100 border-warning">
                      <div className="card-header bg-warning text-dark">
                        <h5 className="mb-0 fw-semibold">Thunder Diamond</h5>
                      </div>
                      <div className="card-body">
                        <div className="mb-3">
                          <label className="form-label fw-semibold">Price (₹ per carat)</label>
                          <input
                            type="number"
                            className="form-control"
                            value={diamondData.thunder.marketPrice}
                            onChange={(e) => setDiamondData(prev => ({
                              ...prev,
                              thunder: { ...prev.thunder, marketPrice: e.target.value }
                            }))}
                            placeholder="Enter price"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">Quantity (carats)</label>
                          <input
                            type="number"
                            className="form-control"
                            value={diamondData.thunder.quantity}
                            onChange={(e) => setDiamondData(prev => ({
                              ...prev,
                              thunder: { ...prev.thunder, quantity: e.target.value }
                            }))}
                            placeholder="Enter quantity"
                          />
                        </div>
                        {diamondData.thunder.total > 0 && (
                          <div className="text-center">
                            <strong className="text-warning">
                              {formatCurrency(diamondData.thunder.total)}
                            </strong>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Side Stone */}
                  <div className="col-lg-4">
                    <div className="card h-100 border-success">
                      <div className="card-header bg-success text-white">
                        <h5 className="mb-0 fw-semibold">Side Stone</h5>
                      </div>
                      <div className="card-body">
                        <div className="mb-3">
                          <label className="form-label fw-semibold">Price (₹ per carat)</label>
                          <input
                            type="number"
                            className="form-control"
                            value={diamondData.sideStone.marketPrice}
                            onChange={(e) => setDiamondData(prev => ({
                              ...prev,
                              sideStone: { ...prev.sideStone, marketPrice: e.target.value }
                            }))}
                            placeholder="Enter price"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">Quantity (carats)</label>
                          <input
                            type="number"
                            className="form-control"
                            value={diamondData.sideStone.quantity}
                            onChange={(e) => setDiamondData(prev => ({
                              ...prev,
                              sideStone: { ...prev.sideStone, quantity: e.target.value }
                            }))}
                            placeholder="Enter quantity"
                          />
                        </div>
                        {diamondData.sideStone.total > 0 && (
                          <div className="text-center">
                            <strong className="text-success">
                              {formatCurrency(diamondData.sideStone.total)}
                            </strong>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <button 
                    className="btn btn-primary btn-lg px-5 fw-semibold"
                    onClick={calculateDiamond}
                  >
                    Calculate Diamond Value
                  </button>
                </div>

                {diamondData.grandTotal > 0 && (
                  <div className="mt-5 text-center">
                    <div className="alert alert-primary" role="alert">
                      <h4 className="alert-heading fw-bold">Total Diamond Portfolio Value</h4>
                      <hr />
                      <p className="mb-0 display-4 fw-bold text-primary">
                        {formatCurrency(diamondData.grandTotal)}
                      </p>
                      <div className="row mt-3">
                        <div className="col-4">
                          <small className="text-muted">Normal</small><br />
                          <strong>{formatCurrency(diamondData.normal.total)}</strong>
                        </div>
                        <div className="col-4">
                          <small className="text-muted">Thunder</small><br />
                          <strong>{formatCurrency(diamondData.thunder.total)}</strong>
                        </div>
                        <div className="col-4">
                          <small className="text-muted">Side Stone</small><br />
                          <strong>{formatCurrency(diamondData.sideStone.total)}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      {activeCalculator === null && renderMainView()}
      {activeCalculator === 'gold' && renderGoldCalculator()}
      {activeCalculator === 'silver' && renderSilverCalculator()}
      {activeCalculator === 'diamond' && renderDiamondCalculator()}
    </>
  );
};

export default Cal;