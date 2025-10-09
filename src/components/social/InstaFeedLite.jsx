/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import { Container } from "react-bootstrap";
import "./instaFeedLite.css";

/**
 * InstaFeedLite
 * Frontend-only IG feed: card links (no iframes, no embed.js).
 *
 * Props:
 *  - items: Array<{
 *      url: string;          // IG reel/post URL
 *      thumb?: string;       // optional thumbnail you host (recommended)
 *      title?: string;       // optional short label/caption
 *      ratio?: '9x16'|'1x1'; // default '9x16' (reels). Use '1x1' for posts if you prefer square.
 *    }>
 *  - title?: string
 *  - subtitle?: string
 */
export default function InstaFeedLite({
  items = [],
  title = "Latest Instagram Reels",
  subtitle = "Follow our journeys in 9:16 luxury.",
}) {
  const feed = useMemo(
    () =>
      items.filter(Boolean).map((it) => ({
        ...it,
        ratio: it.ratio || "9x16",
        kind: /\/reel\//.test(it.url) ? "Reel" : "Post",
      })),
    [items]
  );

  return (
    <section className="insta-lite-section py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="insta-lite-title mb-2">{title}</h2>
          <p className="insta-lite-subtitle">{subtitle}</p>
        </div>

        <div className="insta-lite-grid">
          {feed.map((it, idx) => (
            <a
              key={idx}
              className={`insta-lite-card ${
                it.ratio === "1x1" ? "ratio-1x1" : "ratio-9x16"
              }`}
              href={it.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${it.kind} on Instagram`}
            >
              {/* Image (optional) */}
              {it.thumb ? (
                <img src={it.thumb} alt={it.title || it.kind} loading="lazy" />
              ) : (
                <div className="insta-lite-skeleton" aria-hidden="true" />
              )}

              {/* Overlay */}
              <div className="insta-lite-overlay">
                <div className="insta-lite-badge">{it.kind}</div>
                <div className="insta-lite-cta">View on Instagram</div>
              </div>

              {/* Optional footer caption */}
              {it.title && <div className="insta-lite-caption">{it.title}</div>}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
