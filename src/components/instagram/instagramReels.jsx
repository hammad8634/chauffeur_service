import React from "react";

/**
 * ReelsGrid (no API keys)
 * props:
 *  - items: Array<{ id: string, url: string, thumb: string, page?: string }>
 *  - pageName: default account name to display if item.page is absent
 *  - columns: number of columns (default 3)
 */
const ReelsGrid = ({ items = [], pageName = "roadrunnerdxb", columns = 3 }) => {
  const colStyle = { gridTemplateColumns: `repeat(${columns}, 1fr)` };

  const toDeepLink = (id, webUrl) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile ? `instagram://reel/${id}` : webUrl;
  };

  return (
    <section className="reelsgrid-section">
      <div className="reelsgrid" style={colStyle}>
        {items.map((it) => (
          <a
            key={it.id}
            className="reel-card"
            href={toDeepLink(it.id, it.url)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open reel from ${it.page || pageName}`}
          >
            <div className="reel-media">
              <img
                src={it.thumb}
                alt="Instagram reel thumbnail"
                loading="lazy"
              />
              <div className="reel-play" aria-hidden="true">
                ▶
              </div>
            </div>
            <div className="reel-meta">
              <div className="reel-page">@{it.page || pageName}</div>
              <div className="reel-cta">View on Instagram</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ReelsGrid;
