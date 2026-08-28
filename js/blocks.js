/**
 * blocks.js — moteur de rendu de blocs de contenu déclaratifs, partagé
 * entre le rendu du cours (course-render.js) et le moteur de quiz (quiz-engine.js).
 */

const ICONS = {
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
  tip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 2Z"/></svg>`,
  warn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/></svg>`,
  pitfall: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  quiz: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2 2-2.5 3M12 17h.01"/></svg>`,
};

function renderBlock(block) {
  switch (block.type) {
    case "p":
      return `<p>${block.html || block.text}</p>`;
    case "list":
      return `<${block.ordered ? "ol" : "ul"}>${block.items.map((i) => `<li>${i}</li>`).join("")}</${block.ordered ? "ol" : "ul"}>`;
    case "callout":
      return `<div class="callout callout-${block.variant}"><div class="icon">${ICONS[block.variant] || ICONS.info}</div><div class="body">${block.title ? `<strong>${block.title}</strong>` : ""}${block.html || `<p>${block.text}</p>`}</div></div>`;
    case "code":
      return renderCodeBlock(block.code, block.label || "pseudo-code", block.lang || "pseudo");
    case "syntax":
      return `<div class="syntax-box">${block.title ? `<div class="syntax-title">${block.title}</div>` : ""}<pre>${(block.lang === "c" ? highlightC : highlightPseudocode)(block.code.trim())}</pre></div>`;
    case "trace":
      return renderTrace(block);
    case "array":
      return renderArrayDiagram(block);
    case "compare":
      return renderCompare(block);
    case "translate":
      return renderTranslate(block);
    case "table":
      return renderDataTable(block);
    case "flow":
      return renderFlow(block);
    case "html":
      return block.html;
    default:
      return "";
  }
}

function renderTrace(block) {
  const head = `<th>Instruction</th>` + block.vars.map((v) => `<th>${v}</th>`).join("");
  const rows = block.rows
    .map((row) => {
      const cells = block.vars
        .map((v) => {
          const changed = (row.changed || []).includes(v);
          const val = row.values[v] !== undefined ? row.values[v] : "?";
          return `<td class="${changed ? "changed" : ""}">${val}</td>`;
        })
        .join("");
      return `<tr><td class="instr"><code class="inline">${escapeHtml(row.instr)}</code></td>${cells}</tr>`;
    })
    .join("");
  return `<div class="trace-table-wrap"><table class="trace-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderArrayDiagram(block) {
  const cells = block.cells
    .map((val, i) => {
      const hl = (block.highlight || []).includes(i) ? " hl" : "";
      return `<div class="array-cell${hl}">${val}<span class="idx">${i}</span></div>`;
    })
    .join("");
  return `<div class="array-diagram-wrap"><div class="array-diagram">${cells}</div></div>`;
}

function renderCompare(block) {
  return `<div class="compare-grid">
    <div class="compare-card bad"><div class="compare-head">${ICONS.pitfall} ${block.bad.title}</div><pre>${highlightPseudocode(block.bad.code.trim())}</pre></div>
    <div class="compare-card good"><div class="compare-head">${ICONS.check} ${block.good.title}</div><pre>${highlightPseudocode(block.good.code.trim())}</pre></div>
  </div>`;
}

function renderTranslate(block) {
  const leftId = "tr-" + Math.random().toString(36).slice(2, 9);
  const rightId = "tr-" + Math.random().toString(36).slice(2, 9);
  return `<div class="translate-grid">
    <div class="translate-card">
      <div class="translate-head">${block.labelLeft || "Pseudo-code"}</div>
      <pre class="translate-body"><code id="${leftId}">${highlightPseudocode(block.left.trim())}</code></pre>
    </div>
    <div class="translate-arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </div>
    <div class="translate-card c">
      <div class="translate-head">${block.labelRight || "Langage C"}</div>
      <pre class="translate-body"><code id="${rightId}">${highlightC(block.right.trim())}</code></pre>
    </div>
  </div>`;
}

function renderDataTable(block) {
  const head = block.headers.map((h) => `<th>${h}</th>`).join("");
  const rows = block.rows
    .map((row) => `<tr>${row.map((cell, i) => `<td class="${i === 0 ? "instr" : ""}">${cell}</td>`).join("")}</tr>`)
    .join("");
  return `<div class="trace-table-wrap"><table class="trace-table data-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderFlow(block) {
  const arrow = `<div class="flow-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>`;
  return `<div class="flow-steps">${block.steps.map((s, i) => `<div class="flow-step"><div class="flow-step-card">${s}</div>${i < block.steps.length - 1 ? arrow : ""}</div>`).join("")}</div>`;
}
