/* eslint-disable react/prop-types */
import React, { useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./instaReels.css";

const INSTAGRAM_EMBED_SRC = "https://www.instagram.com/embed.js";

function loadInstagramScriptOnce() {
  if (typeof window === "undefined") return;
  if (document.querySelector(`script[src="${INSTAGRAM_EMBED_SRC}"]`)) return;
  const s = document.createElement("script");
  s.src = INSTAGRAM_EMBED_SRC;
  s.async = true;
  document.body.appendChild(s);
}

function normalizePermalink(u) {
  try {
    const url = new URL(u);
    // Accept reels/shortcodes; ensure trailing slash and strip query
    url.search = "";
    if (!url.pathname.endsWith("/")) url.pathname += "/";
    return url.toString();
  } catch {
    // best-effort
    return u;
  }
}

/**
 * InstaReels
 * Props:
 *  - urls: string[]  (e.g. https://www.instagram.com/reel/ABC123/)
 *  - title?: string
 *  - className?: string
 */
const InstaReels = ({
  urls = [],
  title = "Latest Instagram Reels",
  className = "",
}) => {
  const permalinks = useMemo(
    () => urls.map(normalizePermalink).filter(Boolean),
    [urls]
  );

  useEffect(() => {
    // Load script once
    loadInstagramScriptOnce();
  }, []);

  useEffect(() => {
    // Re-process embeds whenever list changes
    if (
      typeof window !== "undefined" &&
      window.instgrm &&
      window.instgrm.Embeds
    ) {
      window.instgrm.Embeds.process();
    } else {
      // If script hasn't initialized yet, try again shortly
      const t = setTimeout(() => {
        if (window.instgrm && window.instgrm.Embeds)
          window.instgrm.Embeds.process();
      }, 600);
      return () => clearTimeout(t);
    }
  }, [permalinks]);

  return (
    <section className={`insta-reels-section py-5 ${className}`}>
      <Container>
        <div className="text-center mb-4">
          <h2 className="insta-title mb-2">{title}</h2>
          <p className="insta-subtitle">Follow our journeys in 9:16 luxury.</p>
        </div>

        <Row className="g-4">
          {permalinks.map((href, idx) => (
            <Col key={idx} xs={12} md={6} lg={4}>
              {/* Instagram official embed markup */}
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={href}
                data-instgrm-version="14"
                data-instgrm-captioned="false"
                style={{
                  background: "#fff",
                  border: 0,
                  margin: 0,
                  padding: 0,
                  width: "100%",
                }}
              />
              {/* Fallback link (if script blocked or content private) */}
              <noscript>
                <a href={href} target="_blank" rel="noreferrer">
                  View Reel
                </a>
              </noscript>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default InstaReels;
