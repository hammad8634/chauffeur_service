// src/pages/Fleet.jsx
import React, { useEffect, useMemo, useState } from "react";

// === Images (use your existing imports/paths) ===
import RRGhost from "../../images/rolls-royce-ghost/rolls-royce-ghost-1.jpg";
import RRCullinanBlack from "../../images/rolls-royce-cullinan-black/rolls-royce-cullinan-1.jpg";
import RRPhantom from "../../images/rolls-royce-phantom/rolls-royce-phantom-1.png";
import RRCullinanGrey from "../../images/rolls-royce-cullinan-light-grey/rolls-royce-cullinan-light-grey- (1).jpg";
import RRGhostSeriesIII from "../../images/rolls-royce-ghost-series-III/rolls-royce-ghost-series-III.jpg";

// === Styles ===
import "./fleet.css"; // your page layout (grid, colors, etc.)
import "../vehicles/vehicles.css"; // reuse the exact card styles from CarShowcase

const PHONE_INTL = "971567766002";
const CALL_TEL = "+971567766002";

// ===== Your dataset (exactly as requested) =====
const VEHICLES = [
  {
    name: "Rolls Royce Ghost",
    img: RRGhost,
    details: ["Ghost White", "2-Tone Gold Roof", "VIP Choice"],
  },
  {
    name: "Rolls Royce Cullinan Black",
    img: RRCullinanBlack,
    details: ["Black exterior", "AWD V12", "Executive lounge"],
  },
  {
    name: "Rolls Royce Phantom",
    img: RRPhantom,
    details: ["Phantom White", "Timeless Elegance", "Boardroom Icon"],
  },
  {
    name: "Rolls Royce Cullinan Silver Grey",
    img: RRCullinanGrey,
    details: ["Luxury SUV", "Elite Comfort", "Perfect for Long Trips"],
  },
  {
    name: "Rolls Royce Ghost Series III",
    img: RRGhostSeriesIII,
    details: ["AWD V12", "Magic Carpet", "Starlight headliner"],
  },
];

// === Utils ===
const slugify = (s) => s.toLowerCase().replace(/\s+/g, "-");
const goTopLocation = (href) => {
  try {
    window.top.location.href = href;
  } catch {
    window.location.href = href;
  }
};

const Fleet = () => {
  // Simplified state: search + sort + "isMobile" + open
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("name-asc"); // "name-asc" | "name-desc"
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile (matchMedia)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const set = () => setIsMobile(mq.matches);
    set();
    mq.addEventListener
      ? mq.addEventListener("change", set)
      : mq.addListener(set);
    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", set)
        : mq.removeListener(set);
    };
  }, []);

  const filtered = useMemo(() => {
    let list = [...VEHICLES];

    const query = q.trim().toLowerCase();
    if (query) {
      list = list.filter((v) => {
        if (v.name.toLowerCase().includes(query)) return true;
        if (
          Array.isArray(v.details) &&
          v.details.some((d) => d.toLowerCase().includes(query))
        )
          return true;
        return false;
      });
    }

    switch (sort) {
      case "name-asc":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return list;
  }, [q, sort]);

  const handleView = (name) => goTopLocation(`/vehicle/${slugify(name)}`);
  const handleWhatsApp = (vehicle) => {
    const msg = `Hello, I'm interested in booking the ${vehicle.name}`;
    goTopLocation(
      `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(msg)}`
    );
  };
  const handleCall = () => goTopLocation(`tel:${CALL_TEL}`);

  return (
    <div>
      {/* Mobile-centered modal overrides */}
      <style>{`
        @media (max-width: 900px) {
          .filters.desktop-only { display: none !important; }
          .filters-modal {
            position: fixed;
            inset: 50% auto auto 50%;
            transform: translate(-50%, -50%);
            width: min(92vw, 420px);
            max-height: 85vh;
            overflow: auto;
            z-index: 60;
            background: linear-gradient(102deg, var(--card1), var(--card2));
            border: 1px solid var(--line);
            border-radius: 14px;
            padding: 16px;
          }
          .modal-mask {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 55;
          }
          .modal-actions {
            display: flex;
            gap: 8px;
            margin-top: 10px;
          }
          .btn-close-modal {
            background: #181c21;
            color: black;
            border: 1px solid var(--line);
            border-radius: 10px;
            padding: 8px 12px;
            font-weight: 800;
            cursor: pointer;
          }
        }

        /* Keep the sticky sidebar on desktop */
        @media (min-width: 901px) {
          .filters-modal,
          .modal-mask { display: none !important; }
        }
      `}</style>

      <section className="fleet-wrap">
        {/* Mobile topbar */}
        <div className="topbar">
          <button className="btn-filter" onClick={() => setOpen(true)}>
            ☰ Filters
          </button>
          <div className="chipbar">
            {q ? <span className="pill">Search: {q}</span> : null}
            <span className="pill">
              {sort === "name-asc" ? "Sort: A → Z" : "Sort: Z → A"}
            </span>
          </div>
        </div>

        {/* Page header */}
        <div className="fleet-hero">
          <h3 className="fleet-title text-center">
            <span className="our-fleet-heading">Our Fleet</span>
          </h3>
        </div>

        {/* Layout */}
        <div className="layout">
          {/* Desktop sidebar (sticky) */}
          <aside className="filters desktop-only" aria-hidden={isMobile}>
            <h3 className="f-title">Filter Vehicles</h3>

            <div className="row">
              <input
                className="input"
                placeholder="Search model or feature"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>

            <div className="row">
              <select
                className="select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="name-asc">Sort: Name A → Z</option>
                <option value="name-desc">Sort: Name Z → A</option>
              </select>
            </div>

            <button
              className="btn reset-filter"
              onClick={() => {
                setQ("");
                setSort("name-asc");
              }}
            >
              <strong>Reset Filters</strong>
            </button>
          </aside>

          {/* Grid */}
          <main>
            <div className="grid">
              {filtered.length === 0 ? (
                <div className="pill">No vehicles match your filters.</div>
              ) : (
                filtered.map((v) => (
                  <div key={v.name} className="vehicle-card">
                    <img
                      src={v.img}
                      alt={v.name}
                      className="vehicle-img"
                      onClick={() => handleView(v.name)}
                    />

                    <div className="vehicle-content">
                      <h5 className="vehicle-title">{v.name}</h5>

                      <div className="vehicle-tags">
                        {Array.isArray(v.details) &&
                          v.details.map((d, i) => (
                            <span key={i} className="vehicle-tag">
                              {d}
                            </span>
                          ))}
                      </div>

                      <div className="vehicle-actions">
                        <button
                          className="btn btn-whatsapp"
                          onClick={() => handleWhatsApp(v)}
                          type="button"
                        >
                          WhatsApp
                        </button>
                        <button
                          className="btn btn-call"
                          onClick={handleCall}
                          type="button"
                        >
                          Call
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>

        {/* Mobile centered modal for filters */}
        {isMobile && open && (
          <>
            <div className="modal-mask" onClick={() => setOpen(false)} />
            <div
              className="filters-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Filter Vehicles"
            >
              <h3 className="f-title" style={{ marginTop: 0, marginBottom: "15px" }}>
                Filter Vehicles
              </h3>

              <div className="row">
                <input
                  className="input"
                  placeholder="Search model or feature"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>

              <div className="row">
                <select
                  className="select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="name-asc">Sort: Name A → Z</option>
                  <option value="name-desc">Sort: Name Z → A</option>
                </select>
              </div>

              <div className="modal-actions">
                <button
                  className="btn btn-close-modal"
                  onClick={() => {
                    setQ("");
                    setSort("name-asc");
                  }}
                >
                  Reset
                </button>
                <button
                  className="btn btn-close-modal"
                  onClick={() => setOpen(false)}
                >
                  Done
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Fleet;
