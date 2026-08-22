const {
  useState,
  useEffect,
  useCallback
} = React;

/* ── Theme ── */
const LIGHT = {
  bg: "#fff",
  bgPage: "#f7f7f5",
  bgCard: "#fff",
  bgCardAlt: "#fafaf8",
  bgInput: "#fff",
  bgModal: "#fff",
  bgEmpty: "#f5f5f3",
  border: "#e8e6e1",
  borderLight: "#f0eeea",
  borderInput: "#d8d6d1",
  borderBtn: "#e0deda",
  text: "#2c2c2c",
  textSec: "#555",
  textTer: "#888",
  textQuad: "#aaa",
  textFaint: "#ccc",
  accent: "#6366F1",
  accentText: "#fff",
  tagBg: "#f0eeff",
  tagText: "#5B5BD6",
  tagBorder: "#d8d4ff",
  successText: "#065f46",
  dangerText: "#991b1b",
  undoBg: "#FFF8E1",
  undoBorder: "#FFE082",
  undoText: "#6D4C00",
  methBg: "#e0f2fe",
  methText: "#0369a1",
  qualBg: "#fef3c7",
  qualText: "#92400e",
  verBg: "#f0fdf4",
  verText: "#166534",
  awBg: "#fce7f3",
  awText: "#9d174d",
  lblMethodBg: "#dbeafe",
  lblMethodText: "#1e40af",
  lblSampleBg: "#e0e7ff",
  lblSampleText: "#3730a3",
  lblRqBg: "#fef3c7",
  lblRqText: "#92400e",
  lblResultBg: "#d1fae5",
  lblResultText: "#065f46",
  lblSentBg: "#fce7f3",
  lblSentText: "#9d174d",
  lblNoteBg: "#f3f4f6",
  lblNoteText: "#374151",
  tableBg: "#fff",
  tableHover: "#f9f9f7",
  tableHeader: "#f3f2ef"
};
const DARK = {
  bg: "#1e1e2e",
  bgPage: "#181825",
  bgCard: "#262637",
  bgCardAlt: "#222233",
  bgInput: "#2a2a3e",
  bgModal: "#262637",
  bgEmpty: "#222233",
  border: "#363650",
  borderLight: "#2e2e45",
  borderInput: "#444468",
  borderBtn: "#444468",
  text: "#e8e8f0",
  textSec: "#b0b0c0",
  textTer: "#888898",
  textQuad: "#666680",
  textFaint: "#444468",
  accent: "#818cf8",
  accentText: "#fff",
  tagBg: "#2e2e50",
  tagText: "#a5b4fc",
  tagBorder: "#404070",
  successText: "#6ee7b7",
  dangerText: "#fca5a5",
  undoBg: "#3a3520",
  undoBorder: "#5a5030",
  undoText: "#d4c080",
  methBg: "#1e3a5f",
  methText: "#7dd3fc",
  qualBg: "#3a2e10",
  qualText: "#fcd34d",
  verBg: "#0d3320",
  verText: "#6ee7b7",
  awBg: "#3b1030",
  awText: "#f9a8d4",
  lblMethodBg: "#1e3a5f",
  lblMethodText: "#93c5fd",
  lblSampleBg: "#2e2850",
  lblSampleText: "#a5b4fc",
  lblRqBg: "#3a2e10",
  lblRqText: "#fcd34d",
  lblResultBg: "#0d3320",
  lblResultText: "#6ee7b7",
  lblSentBg: "#3b1030",
  lblSentText: "#f9a8d4",
  lblNoteBg: "#2a2a3e",
  lblNoteText: "#b0b0c0",
  tableBg: "#262637",
  tableHover: "#2e2e45",
  tableHeader: "#1e1e30"
};
function useTheme() {
  const [d, sD] = useState(() => window.matchMedia?.("(prefers-color-scheme:dark)").matches || false);
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-color-scheme:dark)");
    if (!m) return;
    const h = e => sD(e.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, []);
  return d ? { ...DARK, _dark: true } : { ...LIGHT, _dark: false };
}
const useIsMobile = () => {
  const [m, s] = useState(window.innerWidth < 640);
  useEffect(() => {
    const h = () => s(window.innerWidth < 640);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
};

/* ── Constants ── */
const SHEET_ID = "1xCIw0pxlDh55byNCydL95pKAPuymGReY5yx97GrP8iU";
const SYNC_URL = "https://script.google.com/macros/s/AKfycbxCcFhx1xzFgwIPqSziVg9rXWEVDHCcw7Z8fK3yUT6vagtUcD5FFyl7NPFuOzGf-VUYfg/exec";
const SHEET_LINK = "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/edit";
const STORE = {
  papers: "lit-tracker-papers-v3",
  citations: "lit-tracker-citations-v3",
  awOptions: "lit-tracker-aw-options-v3"
};
const IMPORTANCE_OPTS = ["None", "High", "Medium", "Low", "Useless"];
const METHOD_WISE_OPTS = ["None", "Learn", "Non-sense", "Could reproduce", "N/A"];
const QUAL_QUANT_OPTS = ["None", "Both", "Quantitative", "Qualitative", "N/A"];
const VERSION_OPTS = ["None", "PDF", "Book", "Physical Book", "No"];
const ITEM_TYPES = ["Journal Article", "Conference Paper", "Book Section", "Book", "Thesis", "Document", "Report", "Webpage", "BlogPost", "Newspaper Article", "Magazine Article", "Interview", "Presentation", "Dictionary Entry", "Forum Post", "Manuscript", "Encyclopedia Article", "Audio Recording", "Video Recording", "Email"];
const DEFAULT_AW_OPTS = ["None", "Article wise", "No", "Low chance", "Kind of", "Must", "Case study", "Blockbuster", "Narrative/Storytelling"];
const IMP_COLORS = {
  High: "#dc2626",
  Medium: "#f59e0b",
  Low: "#6366f1",
  Useless: "#9ca3af",
  None: "#bbb"
};
/* ── Tag color palette ── */
const TAG_COLORS_LIGHT = [
  { bg: "#fce4ec", text: "#b71c1c", border: "#f8bbd0" },
  { bg: "#fff3e0", text: "#e65100", border: "#ffe0b2" },
  { bg: "#f3e5f5", text: "#7b1fa2", border: "#e1bee7" },
  { bg: "#e8eaf6", text: "#283593", border: "#c5cae9" },
  { bg: "#e0f2f1", text: "#00695c", border: "#b2dfdb" },
  { bg: "#fef3c7", text: "#92400e", border: "#fde68a" },
  { bg: "#dbeafe", text: "#1e40af", border: "#bfdbfe" },
  { bg: "#fce7f3", text: "#9d174d", border: "#fbcfe8" },
  { bg: "#d1fae5", text: "#065f46", border: "#a7f3d0" },
  { bg: "#e0e7ff", text: "#3730a3", border: "#c7d2fe" },
  { bg: "#fee2e2", text: "#991b1b", border: "#fecaca" },
  { bg: "#ecfccb", text: "#3f6212", border: "#d9f99d" },
];
const TAG_COLORS_DARK = [
  { bg: "#3b1030", text: "#f9a8d4", border: "#5b1050" },
  { bg: "#3a2010", text: "#fdba74", border: "#5a3020" },
  { bg: "#2e1045", text: "#d8b4fe", border: "#4e2065" },
  { bg: "#1e2050", text: "#a5b4fc", border: "#2e3070" },
  { bg: "#0d3330", text: "#5eead4", border: "#1d4340" },
  { bg: "#3a2e10", text: "#fcd34d", border: "#5a4e20" },
  { bg: "#1e3a5f", text: "#7dd3fc", border: "#2e4a6f" },
  { bg: "#3b1040", text: "#f0abfc", border: "#5b2060" },
  { bg: "#0d3320", text: "#6ee7b7", border: "#1d4330" },
  { bg: "#2e2850", text: "#a5b4fc", border: "#3e3860" },
  { bg: "#3b1020", text: "#fca5a5", border: "#5b2030" },
  { bg: "#1a3010", text: "#bef264", border: "#2a4020" },
];
function hashStr(s) {
  var h = 0;
  for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
function getTagColor(tag, isDark) {
  var palette = isDark ? TAG_COLORS_DARK : TAG_COLORS_LIGHT;
  return palette[hashStr(tag) % palette.length];
}

function gid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function fmtDate(s) {
  if (!s) return "";
  try {
    return new Date(s).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  } catch {
    return s;
  }
}
function emptyPaper(o) {
  return {
    id: gid(),
    title: "",
    author: "",
    year: "",
    publicationTitle: "",
    itemType: "Journal Article",
    pages: "",
    doi: "",
    importance: "None",
    fields: [],
    methodUse: "",
    sampleSize: "",
    sentences: "",
    methodWise: "None",
    note: "",
    researchQuestion: "",
    result: "",
    qualQuant: "None",
    version: "None",
    articleWise: "None",
    read: false,
    dateAdded: new Date().toISOString().slice(0, 10),
    ...o
  };
}

/* Split author string into individual authors. Handles "LastName, F." format separated by ";" or " and " */
function splitAuthors(authorStr) {
  if (!authorStr) return [];
  var parts = authorStr.split(";").map(function (s) {
    return s.trim();
  }).filter(Boolean);
  if (parts.length <= 1) {
    parts = authorStr.split(/\s+and\s+/i).map(function (s) {
      return s.trim();
    }).filter(Boolean);
  }
  return parts;
}

/* Normalize author name to "lastname firstinitial" for deduplication.
   "Whitehead, C." → "whitehead c"
   "C. Whitehead"  → "whitehead c"
   "Guay, F."      → "guay f"       */
function normalizeAuthorKey(name) {
  if (!name) return "";
  var s = name.trim().replace(/\./g, "").replace(/\s+/g, " ");
  // "Last, First" format
  if (s.indexOf(",") !== -1) {
    var parts = s.split(",");
    var last = parts[0].trim().toLowerCase();
    var first = (parts[1] || "").trim().toLowerCase();
    var initial = first ? first.charAt(0) : "";
    return last + (initial ? " " + initial : "");
  }
  // "F. Last" or "First Last" format
  var words = s.split(" ").filter(Boolean);
  if (words.length >= 2) {
    var lastWord = words[words.length - 1].toLowerCase();
    var firstWord = words[0].toLowerCase();
    var init = firstWord.charAt(0);
    return lastWord + " " + init;
  }
  return s.toLowerCase();
}

/* Default sort: Importance (High first) → Read (yes first) → Year (newest first) → Date Added (newest first) */
const IO = {
  High: 0,
  Medium: 1,
  Low: 2,
  Useless: 3,
  None: 4
};
function defaultSort(a, b) {
  var aImp = IO[a.importance] !== undefined ? IO[a.importance] : 4;
  var bImp = IO[b.importance] !== undefined ? IO[b.importance] : 4;
  if (aImp !== bImp) return aImp - bImp;
  var aRead = a.read ? 1 : 0;
  var bRead = b.read ? 1 : 0;
  if (aRead !== bRead) return bRead - aRead;
  var yrCmp = (b.year || "0").localeCompare(a.year || "0");
  if (yrCmp !== 0) return yrCmp;
  return (b.dateAdded || "").localeCompare(a.dateAdded || "");
}

/* ── Markdown-lite renderer: **bold** *italic* __underline__ ==highlight== ── */
function RichText({
  text,
  t
}) {
  if (!text) return null;
  var str = String(text);

  // Process markdown inline formatting on a single string, returns array of elements
  function formatInline(s, keyBase) {
    var parts = [];
    var regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(__(.+?)__)|(?:==(.+?)==)|(?:\{\{(red|green|blue|orange|purple|gray):(.+?)\}\})/g;
    var lastIdx = 0;
    var match;
    var k = keyBase || 0;
    var colorMap = {
      red: "#dc2626",
      green: "#16a34a",
      blue: "#2563eb",
      orange: "#ea580c",
      purple: "#9333ea",
      gray: "#6b7280"
    };
    while ((match = regex.exec(s)) !== null) {
      if (match.index > lastIdx) {
        parts.push(s.slice(lastIdx, match.index));
      }
      if (match[2]) {
        parts.push(React.createElement("strong", {
          key: "b" + k++
        }, match[2]));
      } else if (match[4]) {
        parts.push(React.createElement("em", {
          key: "i" + k++
        }, match[4]));
      } else if (match[6]) {
        parts.push(React.createElement("span", {
          key: "u" + k++,
          style: {
            textDecoration: "underline"
          }
        }, match[6]));
      } else if (match[7]) {
        parts.push(React.createElement("span", {
          key: "h" + k++,
          style: {
            background: t ? t.qualBg : "#fef3c7",
            color: t ? t.qualText : "#92400e",
            padding: "0 3px",
            borderRadius: 2
          }
        }, match[7]));
      } else if (match[8] && match[9]) {
        // {{color:text}}
        parts.push(React.createElement("span", {
          key: "c" + k++,
          style: {
            color: colorMap[match[8]] || match[8]
          }
        }, match[9]));
      }
      lastIdx = match.index + match[0].length;
    }
    if (lastIdx < s.length) {
      parts.push(s.slice(lastIdx));
    }
    return parts.length > 0 ? parts : [s];
  }

  // Split by newlines, render each line, support "* " bullet points
  var lines = str.split("\n");
  var elements = [];
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var trimmed = line.trim();
    if (trimmed === "") {
      // Empty line = paragraph break
      elements.push(React.createElement("div", {
        key: "br" + i,
        style: {
          height: 6
        }
      }));
    } else if (trimmed.startsWith("* ")) {
      // Bullet point
      var bulletText = trimmed.slice(2);
      var indent = 0;
      var raw = line;
      while (raw.startsWith("   ") || raw.startsWith("\t")) {
        indent++;
        raw = raw.startsWith("\t") ? raw.slice(1) : raw.slice(3);
      }
      elements.push(React.createElement("div", {
        key: "li" + i,
        style: {
          paddingLeft: 12 + indent * 14,
          display: "flex",
          gap: 6,
          marginTop: 1
        }
      }, React.createElement("span", {
        style: {
          color: t ? t.textTer : "#888",
          flexShrink: 0
        }
      }, "\u2022"), React.createElement("span", null, ...formatInline(bulletText, i * 100))));
    } else {
      // Regular line
      elements.push(React.createElement("span", {
        key: "ln" + i
      }, ...formatInline(line, i * 100)));
      if (i < lines.length - 1 && lines[i + 1].trim() !== "") {
        elements.push(React.createElement("br", {
          key: "nlbr" + i
        }));
      }
    }
  }
  return React.createElement("span", {
    style: {
      whiteSpace: "normal"
    }
  }, ...elements);
}

/* ── Styles ── */
const labelFn = t => ({
  display: "block",
  fontSize: 11,
  fontWeight: 600,
  color: t.textTer,
  marginBottom: 3,
  textTransform: "uppercase",
  letterSpacing: "0.04em"
});
const inputFn = t => ({
  width: "100%",
  padding: "8px 10px",
  borderRadius: 7,
  border: "1px solid " + t.borderInput,
  fontSize: 13,
  fontFamily: "inherit",
  boxSizing: "border-box",
  outline: "none",
  background: t.bgInput,
  color: t.text
});
const btnFn = (t, a) => ({
  padding: "5px 12px",
  borderRadius: 6,
  border: "1px solid " + (a ? t.accent : t.borderBtn),
  background: a ? t.accent : t.bgCard,
  color: a ? t.accentText : t.textTer,
  fontWeight: 600,
  fontSize: 11,
  cursor: "pointer"
});
const pillFn = (bg, color) => ({
  display: "inline-block",
  fontSize: 10,
  fontWeight: 600,
  padding: "2px 8px",
  borderRadius: 4,
  background: bg,
  color,
  whiteSpace: "nowrap"
});

/* ── TSV parser ── */
const TSV_COLS = ["importance", "title", "field1", "field2", "field3", "methodUse", "sampleSize", "sentences", "methodWise", "note", "researchQuestion", "result", "qualQuant", "read", "canItBeUsed", "articleWise", "version", "author", "year", "publicationTitle", "itemType", "pages", "dateAdded"];
function parseTsvRow(line) {
  const c = line.split("\t");
  if (c.length < 5) return null;
  const o = {};
  TSV_COLS.forEach((k, i) => {
    o[k] = (c[i] || "").trim().replace(/^"|"$/g, "");
  });
  const fields = [o.field1, o.field2, o.field3].filter(Boolean);
  const isRead = ["Y", "y", "true", "TRUE"].includes(o.read);
  let aw = o.articleWise || "None";
  if (o.canItBeUsed && o.canItBeUsed !== "None" && o.canItBeUsed !== "" && (!aw || aw === "None")) {
    aw = o.canItBeUsed === "Maybe" ? "Blockbuster" : o.canItBeUsed;
  }
  return emptyPaper({
    title: o.title,
    author: o.author,
    year: o.year,
    publicationTitle: o.publicationTitle,
    itemType: ITEM_TYPES.includes(o.itemType) ? o.itemType : "Journal Article",
    pages: o.pages,
    importance: IMPORTANCE_OPTS.includes(o.importance) ? o.importance : "None",
    fields,
    methodUse: o.methodUse,
    sampleSize: o.sampleSize,
    sentences: o.sentences,
    methodWise: METHOD_WISE_OPTS.includes(o.methodWise) ? o.methodWise : "None",
    note: o.note,
    researchQuestion: o.researchQuestion,
    result: o.result,
    qualQuant: QUAL_QUANT_OPTS.includes(o.qualQuant) ? o.qualQuant : "None",
    version: VERSION_OPTS.includes(o.version) ? o.version : "None",
    articleWise: aw,
    read: isRead,
    dateAdded: o.dateAdded || new Date().toISOString().slice(0, 10)
  });
}

/* ── gviz ── */
const gvizUrl = s => "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent(s);
function parseGviz(text) {
  const m = text.match(/setResponse\(([\s\S]+)\);?\s*$/);
  if (!m) return null;
  const j = JSON.parse(m[1]);
  if (j.status !== "ok") return null;
  const cols = j.table.cols;
  let rows = j.table.rows;
  const hl = cols.some(c => c.label && c.label.length > 0);
  let hd;
  if (hl) hd = cols.map(c => c.label);else {
    if (!rows.length) return [];
    hd = rows[0].c.map(c => c?.v != null ? String(c.v) : "");
    rows = rows.slice(1);
  }
  return rows.map(r => {
    const o = {};
    hd.forEach((h, i) => {
      const c = r.c?.[i];
      o[h] = c?.v != null ? String(c.f || c.v) : "";
    });
    return o;
  });
}

/* ── Claude API ── */
async function callClaude(p, s) {
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 4000,
        system: s || "",
        messages: [{
          role: "user",
          content: p
        }]
      })
    });
    const d = await r.json();
    return d.content?.map(b => b.text || "").join("") || null;
  } catch (e) {
    console.error(e);
    return null;
  }
}
async function parseCitationText(text) {
  const s = `You parse academic citation text into structured JSON. Return ONLY a JSON array, no markdown. Each element: {"title":"...","author":"...","year":"...","publicationTitle":"...","itemType":"...","pages":"...","doi":"..."}. For itemType use: Journal Article, Conference Paper, Book Section, Book, Thesis, Document, Report, Webpage. Extract DOI/URL if present. Leave "" for unknown.`;
  const r = await callClaude(text, s);
  if (!r) return null;
  try {
    return JSON.parse(r.replace(/```json|```/g, "").trim());
  } catch {
    return null;
  }
}

/* ── BibTeX parser (pure frontend, no API needed) ── */
function parseBibTeX(text) {
  var entries = [];
  // Match each @type{key, ... } block
  var entryRegex = /@(\w+)\s*\{([^,]*),\s*([\s\S]*?)(?=\n@|\n*$)/g;
  var match;
  while ((match = entryRegex.exec(text)) !== null) {
    var entryType = match[1].toLowerCase();
    var body = match[3];
    var fields = {};
    // Extract field = {value} or field = value
    var fieldRegex = /(\w+)\s*=\s*\{([^}]*)\}|(\w+)\s*=\s*(\d+)/g;
    var fm;
    while ((fm = fieldRegex.exec(body)) !== null) {
      var key = (fm[1] || fm[3]).toLowerCase();
      var val = (fm[2] || fm[4] || "").trim();
      fields[key] = val;
    }
    // Map BibTeX type to our itemType
    var typeMap = {
      article: "Journal Article",
      inproceedings: "Conference Paper",
      conference: "Conference Paper",
      incollection: "Book Section",
      book: "Book",
      phdthesis: "Thesis",
      mastersthesis: "Thesis",
      techreport: "Report",
      misc: "Document",
      unpublished: "Document"
    };
    // Extract authors: "Last, F. and Last2, F2." → "Last, F.; Last2, F2."
    var authorRaw = fields.author || "";
    var authorFormatted = authorRaw.split(/\s+and\s+/i).map(function (a) {
      return a.trim();
    }).join("; ");
    // Extract year from date field if year not present
    var year = fields.year || fields.date || "";
    if (year.length > 4) year = year.slice(0, 4);
    entries.push({
      title: fields.title || "",
      author: authorFormatted,
      year: year,
      publicationTitle: fields.journaltitle || fields.journal || fields.booktitle || "",
      itemType: typeMap[entryType] || "Journal Article",
      pages: fields.pages || "",
      doi: fields.doi ? "https://doi.org/" + fields.doi : fields.url || ""
    });
  }
  return entries.length > 0 ? entries : null;
}
async function matchReferences(refText, papers) {
  const lib = papers.map((p, i) => `[${i}] ${p.author} (${p.year}). ${p.title}`).join("\n");
  const s = `Match references against a library. A match means the SAME paper—same author(s), same year, same title. Do NOT match merely shared authors or topics. Return ONLY JSON: [{"refSnippet":"first 50 chars","libraryIndex":number}]. If none, return [].`;
  const r = await callClaude(`REFERENCES:\n${refText}\n\nLIBRARY (${papers.length} entries):\n${lib}`, s);
  if (!r) return [];
  try {
    return JSON.parse(r.replace(/```json|```/g, "").trim());
  } catch {
    return [];
  }
}

/* ── TagInput ── */
function TagInput({
  tags,
  allTags,
  onChange,
  placeholder,
  t
}) {
  const [inp, setInp] = useState("");
  const [show, setShow] = useState(false);
  const sugg = allTags.filter(x => x.toLowerCase().includes(inp.toLowerCase()) && !tags.includes(x));
  const add = v => {
    if (v && !tags.includes(v)) onChange([...tags, v]);
    setInp("");
    setShow(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4,
      padding: "6px 8px",
      border: "1px solid " + t.borderInput,
      borderRadius: 7,
      background: t.bgInput,
      minHeight: 34,
      alignItems: "center"
    }
  }, tags.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    style: function(){var _c=getTagColor(tag,t._dark);return {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      padding: "2px 8px",
      borderRadius: 4,
      background: _c.bg,
      color: _c.text,
      fontSize: 11,
      fontWeight: 600,
      border: "1px solid " + _c.border
    }}()
  }, tag, /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(tags.filter(x => x !== tag)),
    style: function(){var _c=getTagColor(tag,t._dark);return {
      background: "none",
      border: "none",
      color: _c.text,
      cursor: "pointer",
      padding: 0,
      fontSize: 13,
      lineHeight: 1
    }}()
  }, "\u00d7"))), /*#__PURE__*/React.createElement("input", {
    value: inp,
    onChange: e => {
      setInp(e.target.value);
      setShow(true);
    },
    onKeyDown: e => {
      if (e.key === "Enter" && inp.trim()) {
        e.preventDefault();
        add(inp.trim());
      }
    },
    onFocus: () => setShow(true),
    onBlur: () => setTimeout(() => setShow(false), 200),
    placeholder: tags.length === 0 ? placeholder || "Add tag..." : "",
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: 12,
      color: t.text,
      flex: 1,
      minWidth: 60,
      padding: "2px 0"
    }
  })), show && inp && sugg.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      background: t.bgModal,
      border: "1px solid " + t.border,
      borderRadius: 6,
      marginTop: 2,
      zIndex: 100,
      maxHeight: 120,
      overflowY: "auto",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }
  }, sugg.slice(0, 6).map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    onMouseDown: () => add(s),
    style: {
      padding: "6px 10px",
      fontSize: 12,
      cursor: "pointer",
      color: t.text
    }
  }, s))));
}

/* ── SelectWithAdd ── */
function SelectWithAdd({
  value,
  options,
  onChange,
  onAddOption,
  t
}) {
  const [adding, setAdding] = useState(false);
  const [v, setV] = useState("");
  if (adding) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => setV(e.target.value),
    placeholder: "New...",
    style: {
      ...inputFn(t),
      flex: 1,
      marginBottom: 0
    },
    autoFocus: true
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (v.trim()) {
        onAddOption(v.trim());
        onChange(v.trim());
      }
      setAdding(false);
      setV("");
    },
    style: btnFn(t, true)
  }, "Add"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setAdding(false);
      setV("");
    },
    style: btnFn(t, false)
  }, "Cancel"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      ...inputFn(t),
      cursor: "pointer",
      appearance: "auto",
      flex: 1
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setAdding(true),
    style: {
      ...btnFn(t, false),
      padding: "4px 8px"
    },
    title: "Add option"
  }, "+"));
}

/* ── PaperCard (used in 全部文献) ── */
function PaperCard({
  paper: p,
  onEdit,
  onDelete,
  onToggleRead,
  onAddRelation,
  citations,
  allPapers,
  onDeleteCitation,
  t
}) {
  const [exp, setExp] = useState(false);
  const [conf, setConf] = useState(false);
  const ic = IMP_COLORS[p.importance] || "transparent";
  const rels = (citations || []).filter(c => c.sourceId === p.id || c.targetId === p.id);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bgCard,
      borderRadius: 10,
      border: "1px solid " + t.border,
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      borderLeft: p.importance !== "None" && p.importance ? "3px solid " + ic : "1px solid " + t.border
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      cursor: "pointer"
    },
    onClick: () => setExp(!exp)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      marginBottom: 4,
      flexWrap: "wrap"
    }
  }, p.importance !== "None" && p.importance && /*#__PURE__*/React.createElement("span", {
    style: pillFn(ic + "18", ic)
  }, p.importance), p.itemType && /*#__PURE__*/React.createElement("span", {
    style: pillFn(t.bgEmpty, t.textTer)
  }, p.itemType), /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onToggleRead(p.id);
    },
    style: {
      ...pillFn(p.read ? t.successText + "20" : t.bgEmpty, p.read ? t.successText : t.textFaint),
      cursor: "pointer",
      border: "1px solid " + (p.read ? t.successText + "40" : t.borderBtn)
    }
  }, p.read ? "✓ Read" : "Unread"), rels.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: pillFn(t.tagBg, t.accent)
  }, rels.length, " link", rels.length > 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: t.text,
      lineHeight: 1.3,
      marginBottom: 3
    }
  }, p.doi ? /*#__PURE__*/React.createElement("a", {
    href: p.doi.startsWith("http") ? p.doi : "https://doi.org/" + p.doi,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: t.text,
      textDecoration: "none",
      borderBottom: "1px dashed " + t.textQuad
    },
    onClick: e => e.stopPropagation()
  }, p.title, " ↗") : p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: t.textSec
    }
  }, p.author, p.year ? " (" + p.year + ")" : ""), p.publicationTitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: t.textTer,
      fontStyle: "italic",
      marginTop: 2
    }
  }, p.publicationTitle), p.fields && p.fields.length > 0 || p.methodWise !== "None" && p.methodWise || p.qualQuant !== "None" && p.qualQuant || p.version !== "None" && p.version || p.articleWise !== "None" && p.articleWise || p.pages ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginTop: 5,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, (p.fields || []).map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: function(){var _c=getTagColor(f,t._dark);return {
      fontSize: 10,
      padding: "1px 7px",
      borderRadius: 3,
      background: _c.bg,
      color: _c.text,
      border: "1px solid " + _c.border,
      fontWeight: 500
    }}()
  }, f)), p.methodWise !== "None" && p.methodWise && /*#__PURE__*/React.createElement("span", {
    style: pillFn(t.methBg, t.methText)
  }, "Method: ", p.methodWise), p.qualQuant !== "None" && p.qualQuant && /*#__PURE__*/React.createElement("span", {
    style: pillFn(t.qualBg, t.qualText)
  }, p.qualQuant), p.version !== "None" && p.version && /*#__PURE__*/React.createElement("span", {
    style: pillFn(t.verBg, t.verText)
  }, p.version), p.articleWise !== "None" && p.articleWise && /*#__PURE__*/React.createElement("span", {
    style: pillFn(t.awBg, t.awText)
  }, p.articleWise), p.pages && /*#__PURE__*/React.createElement("span", {
    style: pillFn(t.bgEmpty, t.textTer)
  }, "p.", p.pages)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      flexShrink: 0,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onEdit(p);
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: t.textFaint,
      fontSize: 13,
      padding: 3
    }
  }, "✎"), !conf ? /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setConf(true);
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: t.textFaint,
      fontSize: 14,
      padding: 3
    }
  }, "✕") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onDelete(p.id),
    style: {
      padding: "2px 7px",
      borderRadius: 4,
      border: "none",
      background: "#B04040",
      color: "#fff",
      fontSize: 10,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Del"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConf(false),
    style: {
      padding: "2px 7px",
      borderRadius: 4,
      border: "1px solid " + t.borderBtn,
      background: t.bgCard,
      color: t.textTer,
      fontSize: 10,
      cursor: "pointer"
    }
  }, "No"))))), exp && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 14px 14px",
      borderTop: "1px solid " + t.borderLight,
      paddingTop: 10,
      fontSize: 12,
      color: t.textSec,
      lineHeight: 1.5
    }
  }, p.methodUse && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 5,
      fontSize: 11,
      color: t.textSec
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.lblMethodText,
      fontWeight: 700,
      marginRight: 6,
      fontSize: 11
    }
  }, "Method Used"), /*#__PURE__*/React.createElement(RichText, {
    text: p.methodUse,
    t: t
  })), p.sampleSize && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 5,
      fontSize: 11,
      color: t.textSec
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.lblSampleText,
      fontWeight: 700,
      marginRight: 6,
      fontSize: 11
    }
  }, "Sample Size"), /*#__PURE__*/React.createElement(RichText, {
    text: p.sampleSize,
    t: t
  })), p.researchQuestion && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 5,
      fontSize: 11,
      color: t.textSec
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.lblRqText,
      fontWeight: 700,
      marginRight: 6,
      fontSize: 11
    }
  }, "Research Q"), /*#__PURE__*/React.createElement(RichText, {
    text: p.researchQuestion,
    t: t
  })), p.result && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 5,
      fontSize: 11,
      color: t.textSec
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.lblResultText,
      fontWeight: 700,
      marginRight: 6,
      fontSize: 11
    }
  }, "Result"), /*#__PURE__*/React.createElement(RichText, {
    text: p.result,
    t: t
  })), p.sentences && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 5,
      fontSize: 11,
      color: t.textSec
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.lblSentText,
      fontWeight: 700,
      marginRight: 6,
      fontSize: 11
    }
  }, "Key Sentences"), /*#__PURE__*/React.createElement(RichText, {
    text: p.sentences,
    t: t
  })), p.note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 5,
      fontSize: 11,
      color: t.textSec
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.lblNoteText,
      fontWeight: 700,
      marginRight: 6,
      fontSize: 11
    }
  }, "Note"), /*#__PURE__*/React.createElement(RichText, {
    text: p.note,
    t: t
  })), rels.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingTop: 8,
      borderTop: "1px solid " + t.borderLight
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: t.textTer,
      fontSize: 10,
      textTransform: "uppercase"
    }
  }, "Linked Papers:"), rels.map(c => {
    const isS = c.sourceId === p.id;
    const other = (allPapers || []).find(x => x.id === (isS ? c.targetId : c.sourceId));
    if (!other) return null;
    const lbl = c.type === "cites" ? isS ? "cites" : "cited by" : c.type === "related" ? "related to" : "same category";
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11,
        color: t.textSec,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: t.accent,
        fontSize: 10,
        fontWeight: 600
      }
    }, lbl), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        flex: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, other.author, " (", other.year, ") — ", other.title), /*#__PURE__*/React.createElement("button", {
      onClick: e => {
        e.stopPropagation();
        onDeleteCitation(c.id);
      },
      style: {
        background: "none",
        border: "none",
        color: t.textFaint,
        cursor: "pointer",
        fontSize: 11,
        padding: "0 3px"
      }
    }, "\u2715"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onAddRelation(p);
    },
    style: {
      ...btnFn(t, false),
      fontSize: 10,
      padding: "3px 10px"
    }
  }, "+ Add Relation")), p.dateAdded && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: t.textFaint,
      marginTop: 6
    }
  }, "Added: ", fmtDate(p.dateAdded))));
}

/* ── ReadingList Table ── */
function ReadingListTable({
  papers,
  onToggleRead,
  onEdit,
  t
}) {
  const [sortCol, setSortCol] = useState("default");
  const [sortDir, setSortDir] = useState("desc");
  const [fImp, setFImp] = useState("all");
  const [fRead, setFRead] = useState("all");
  const [expanded, setExpanded] = useState(null);
  const toggleSort = col => {
    if (sortCol === col) setSortDir(d => d === "asc" ? "desc" : "asc");else {
      setSortCol(col);
      setSortDir(col === "title" || col === "author" ? "asc" : "desc");
    }
  };
  const arrow = col => sortCol === col ? sortDir === "asc" ? " ↑" : " ↓" : "";
  const filtered = papers.filter(p => {
    if (fImp !== "all" && p.importance !== fImp) return false;
    if (fRead === "read" && !p.read) return false;
    if (fRead === "unread" && p.read) return false;
    return true;
  });
  const sorted = [...filtered].sort((a, b) => {
    if (sortCol === "default" || !sortCol) return defaultSort(a, b);
    let v = 0;
    if (sortCol === "title") v = (a.title || "").localeCompare(b.title || "");else if (sortCol === "author") v = (a.author || "").localeCompare(b.author || "");else if (sortCol === "year") v = (a.year || "0").localeCompare(b.year || "0");else if (sortCol === "importance") {
      var ai = IO[a.importance] !== undefined ? IO[a.importance] : 4;
      var bi = IO[b.importance] !== undefined ? IO[b.importance] : 4;
      v = ai - bi;
    } else if (sortCol === "dateAdded") v = (a.dateAdded || "").localeCompare(b.dateAdded || "");else return defaultSort(a, b);
    return sortDir === "desc" ? -v : v;
  });
  const thStyle = {
    padding: "8px 10px",
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    color: t.textTer,
    background: t.tableHeader,
    cursor: "pointer",
    whiteSpace: "nowrap",
    borderBottom: "2px solid " + t.border,
    textAlign: "left",
    userSelect: "none",
    letterSpacing: "0.03em"
  };
  const tdStyle = {
    padding: "7px 10px",
    fontSize: 12,
    borderBottom: "1px solid " + t.borderLight,
    color: t.text,
    verticalAlign: "top"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      marginBottom: 10,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: t.textTer,
      textTransform: "uppercase"
    }
  }, "Read:"), ["all", "unread", "read"].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setFRead(s),
    style: btnFn(t, fRead === s)
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: t.textTer,
      textTransform: "uppercase",
      marginLeft: 8
    }
  }, "Imp:"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFImp("all"),
    style: btnFn(t, fImp === "all")
  }, "All"), IMPORTANCE_OPTS.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setFImp(o),
    style: {
      ...btnFn(t, fImp === o),
      borderColor: fImp === o ? IMP_COLORS[o] : t.borderBtn,
      color: fImp === o ? IMP_COLORS[o] : t.textTer
    }
  }, o))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      borderRadius: 8,
      border: "1px solid " + t.border
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      background: t.tableBg,
      minWidth: 750
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...thStyle,
      width: 30
    }
  }), /*#__PURE__*/React.createElement("th", {
    style: thStyle,
    onClick: () => toggleSort("importance")
  }, "Imp", arrow("importance")), /*#__PURE__*/React.createElement("th", {
    style: thStyle
  }, "Tags"), /*#__PURE__*/React.createElement("th", {
    style: thStyle,
    onClick: () => toggleSort("title")
  }, "Title", arrow("title")), /*#__PURE__*/React.createElement("th", {
    style: thStyle,
    onClick: () => toggleSort("author")
  }, "Author", arrow("author")), /*#__PURE__*/React.createElement("th", {
    style: thStyle,
    onClick: () => toggleSort("year")
  }, "Year", arrow("year")), /*#__PURE__*/React.createElement("th", {
    style: thStyle
  }, "Type"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...thStyle,
      minWidth: 180
    }
  }, "Insight"), /*#__PURE__*/React.createElement("th", {
    style: thStyle,
    onClick: () => toggleSort("dateAdded")
  }, "Added", arrow("dateAdded")))), /*#__PURE__*/React.createElement("tbody", null, sorted.map(p => {
    const ic = IMP_COLORS[p.importance] || "transparent";
    const isExp = expanded === p.id;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: p.id
    }, /*#__PURE__*/React.createElement("tr", {
      style: {
        cursor: "pointer",
        background: isExp ? t.tableHover : "transparent"
      },
      onClick: () => setExpanded(isExp ? null : p.id),
      onMouseEnter: e => {
        if (!isExp) e.currentTarget.style.background = t.tableHover;
      },
      onMouseLeave: e => {
        if (!isExp) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: tdStyle
    }, /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        e.stopPropagation();
        onToggleRead(p.id);
      },
      style: {
        cursor: "pointer",
        fontSize: 14,
        color: p.read ? t.successText : t.textFaint
      }
    }, p.read ? "✓" : "○")), /*#__PURE__*/React.createElement("td", {
      style: tdStyle
    }, p.importance !== "None" && /*#__PURE__*/React.createElement("span", {
      style: pillFn(ic + "18", ic)
    }, p.importance)), /*#__PURE__*/React.createElement("td", {
      style: tdStyle
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 3,
        flexWrap: "wrap"
      }
    }, (p.fields || []).map(f => /*#__PURE__*/React.createElement("span", {
      key: f,
      style: function(){var _c=getTagColor(f,t._dark);return {
        fontSize: 9,
        padding: "1px 5px",
        borderRadius: 3,
        background: _c.bg,
        color: _c.text
      }}()
    }, f)))), /*#__PURE__*/React.createElement("td", {
      style: {
        ...tdStyle,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, isExp ? "▾ " : "▸ ", p.title)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...tdStyle,
        color: t.textSec
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, p.author)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...tdStyle,
        color: t.textTer
      }
    }, p.year), /*#__PURE__*/React.createElement("td", {
      style: tdStyle
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: t.textTer
      }
    }, p.itemType)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...tdStyle,
        fontSize: 11,
        color: t.textSec,
        maxWidth: 260,
        lineHeight: 1.4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical"
      }
    }, p.note || p.result || p.researchQuestion || "")), /*#__PURE__*/React.createElement("td", {
      style: {
        ...tdStyle,
        fontSize: 10,
        color: t.textTer,
        whiteSpace: "nowrap"
      }
    }, fmtDate(p.dateAdded))), isExp && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: 9,
      style: {
        padding: "12px 16px 16px 40px",
        background: t.bgCardAlt,
        borderBottom: "1px solid " + t.border,
        fontSize: 12,
        color: t.textSec,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        marginBottom: 8
      }
    }, p.methodWise !== "None" && p.methodWise && /*#__PURE__*/React.createElement("span", {
      style: pillFn(t.methBg, t.methText)
    }, "Method: ", p.methodWise), p.qualQuant !== "None" && p.qualQuant && /*#__PURE__*/React.createElement("span", {
      style: pillFn(t.qualBg, t.qualText)
    }, p.qualQuant), p.version !== "None" && p.version && /*#__PURE__*/React.createElement("span", {
      style: pillFn(t.verBg, t.verText)
    }, p.version), p.articleWise !== "None" && p.articleWise && /*#__PURE__*/React.createElement("span", {
      style: pillFn(t.awBg, t.awText)
    }, p.articleWise)), p.methodUse && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 5,
        fontSize: 11,
        color: t.textSec
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: t.lblMethodText,
        fontWeight: 700,
        marginRight: 6
      }
    }, "Method Used"), /*#__PURE__*/React.createElement(RichText, {
      text: p.methodUse,
      t: t
    })), p.sampleSize && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 5,
        fontSize: 11,
        color: t.textSec
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: t.lblSampleText,
        fontWeight: 700,
        marginRight: 6
      }
    }, "Sample Size"), /*#__PURE__*/React.createElement(RichText, {
      text: p.sampleSize,
      t: t
    })), p.researchQuestion && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 5,
        fontSize: 11,
        color: t.textSec
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: t.lblRqText,
        fontWeight: 700,
        marginRight: 6
      }
    }, "Research Q"), /*#__PURE__*/React.createElement(RichText, {
      text: p.researchQuestion,
      t: t
    })), p.result && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 5,
        fontSize: 11,
        color: t.textSec
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: t.lblResultText,
        fontWeight: 700,
        marginRight: 6
      }
    }, "Result"), /*#__PURE__*/React.createElement(RichText, {
      text: p.result,
      t: t
    })), p.sentences && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 5,
        fontSize: 11,
        color: t.textSec
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: t.lblSentText,
        fontWeight: 700,
        marginRight: 6
      }
    }, "Key Sentences"), /*#__PURE__*/React.createElement(RichText, {
      text: p.sentences,
      t: t
    })), p.note && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 5,
        fontSize: 11,
        color: t.textSec
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: t.lblNoteText,
        fontWeight: 700,
        marginRight: 6
      }
    }, "Note"), /*#__PURE__*/React.createElement(RichText, {
      text: p.note,
      t: t
    })), p.publicationTitle && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 4,
        fontSize: 11,
        color: t.textTer
      }
    }, /*#__PURE__*/React.createElement("em", null, p.publicationTitle), p.pages ? " · p." + p.pages : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onEdit(p),
      style: {
        ...btnFn(t, false),
        fontSize: 11,
        padding: "4px 12px"
      }
    }, "Edit")))));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: t.textTer,
      marginTop: 6
    }
  }, sorted.length, " paper", sorted.length !== 1 ? "s" : "", " · Click row to expand"));
}

/* ── Keywords Page ── */
function KeywordsPage({
  papers,
  citations,
  onEdit,
  onDelete,
  onToggleRead,
  onAddRelation,
  onDeleteCitation,
  t
}) {
  const [selectedKw, setSelectedKw] = useState(null);
  const kwMap = {};
  papers.forEach(p => (p.fields || []).forEach(f => {
    if (!kwMap[f]) kwMap[f] = [];
    kwMap[f].push(p);
  }));
  const kwList = Object.entries(kwMap).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  if (selectedKw && kwMap[selectedKw]) {
    var kpaps = kwMap[selectedKw].slice().sort(defaultSort);

    // Build year distribution for chart
    var yearCounts = {};
    kpaps.forEach(function (p) {
      var y = p.year || "Unknown";
      yearCounts[y] = (yearCounts[y] || 0) + 1;
    });
    var yearEntries = Object.entries(yearCounts).sort(function (a, b) {
      return a[0].localeCompare(b[0]);
    });
    var maxCount = 0;
    yearEntries.forEach(function (e) {
      if (e[1] > maxCount) maxCount = e[1];
    });
    var chartH = 120;
    var barW = Math.min(40, Math.max(20, Math.floor(500 / (yearEntries.length || 1))));
    var chartW = yearEntries.length * (barW + 8) + 40;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => setSelectedKw(null),
      style: {
        ...btnFn(t, false),
        marginBottom: 14,
        fontSize: 12
      }
    }, "\u2190", " All Keywords"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: t.text,
        margin: "0 0 4px"
      }
    }, selectedKw), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: t.textTer,
        margin: "0 0 14px"
      }
    }, kpaps.length, " paper", kpaps.length !== 1 ? "s" : ""), yearEntries.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16,
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: t.textTer,
        textTransform: "uppercase",
        marginBottom: 6
      }
    }, "Papers by Year"), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + chartW + " " + (chartH + 30),
      style: {
        width: Math.min(chartW, 700),
        height: "auto",
        display: "block"
      }
    }, yearEntries.map(function (entry, i) {
      var yr = entry[0];
      var cnt = entry[1];
      var barH = maxCount > 0 ? cnt / maxCount * (chartH - 10) : 0;
      var x = 20 + i * (barW + 8);
      var y = chartH - barH;
      return React.createElement("g", {
        key: "yb" + i
      }, React.createElement("rect", {
        x: x,
        y: y,
        width: barW,
        height: barH,
        rx: 3,
        fill: t.accent + "cc"
      }), React.createElement("text", {
        x: x + barW / 2,
        y: y - 4,
        textAnchor: "middle",
        fontSize: 9,
        fill: t.text,
        style: {
          fontFamily: "Inter,system-ui,sans-serif"
        }
      }, cnt), React.createElement("text", {
        x: x + barW / 2,
        y: chartH + 14,
        textAnchor: "middle",
        fontSize: 8,
        fill: t.textTer,
        style: {
          fontFamily: "Inter,system-ui,sans-serif"
        }
      }, yr));
    }), React.createElement("line", {
      x1: 16,
      y1: chartH,
      x2: chartW - 4,
      y2: chartH,
      stroke: t.border,
      strokeWidth: 1
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, kpaps.map(function (p) {
      return React.createElement(PaperCard, {
        key: p.id,
        paper: p,
        t: t,
        citations: citations,
        allPapers: papers,
        onEdit: onEdit,
        onDelete: onDelete,
        onToggleRead: onToggleRead,
        onAddRelation: onAddRelation,
        onDeleteCitation: onDeleteCitation
      });
    })));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: t.text,
      margin: "0 0 14px"
    }
  }, "Keywords"), kwList.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: t.textFaint,
      fontSize: 13
    }
  }, "No keywords yet. Add field tags to your papers.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, kwList.map(([kw, paps]) => /*#__PURE__*/React.createElement("button", {
    key: kw,
    onClick: () => setSelectedKw(kw),
    style: function(){var _c=getTagColor(kw,t._dark);return {
      padding: "8px 14px",
      borderRadius: 8,
      border: "1px solid " + _c.border,
      background: _c.bg,
      color: _c.text,
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: 6
    }}()
  }, kw, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: t.accent,
      color: t.accentText,
      borderRadius: 10,
      padding: "1px 7px",
      fontSize: 10,
      fontWeight: 700
    }
  }, paps.length)))));
}

/* ── Visualization Page ── */
function VisPage({
  papers,
  citations,
  t
}) {
  const [mode, setMode] = useState("papers");
  const [hovered, setHovered] = useState(null);
  const W = 660;
  const H = 400;

  // Build nodes and links
  var rawNodes = [];
  var rawLinks = [];
  if (mode === "papers") {
    for (var pi = 0; pi < papers.length; pi++) {
      var p = papers[pi];
      var lbl = (p.author || "?").split(",")[0].slice(0, 15) + " " + p.year;
      var sz = p.importance === "High" ? 12 : p.importance === "Medium" ? 9 : 7;
      rawNodes.push({
        id: p.id,
        label: lbl,
        title: p.title,
        group: p.importance,
        r: sz
      });
    }
    for (var ci = 0; ci < citations.length; ci++) {
      var c = citations[ci];
      var hasS = false,
        hasT = false;
      for (var ni = 0; ni < rawNodes.length; ni++) {
        if (rawNodes[ni].id === c.sourceId) hasS = true;
        if (rawNodes[ni].id === c.targetId) hasT = true;
      }
      if (hasS && hasT) rawLinks.push({
        source: c.sourceId,
        target: c.targetId
      });
    }
  } else {
    var am = {};
    for (var ai = 0; ai < papers.length; ai++) {
      var auths = splitAuthors(papers[ai].author);
      for (var aj = 0; aj < auths.length; aj++) {
        var au = auths[aj].trim();
        if (!au) continue;
        var k = normalizeAuthorKey(au);
        if (!k) continue;
        if (!am[k]) am[k] = {
          id: k,
          label: au.slice(0, 20),
          count: 0,
          r: 7
        };
        am[k].count++;
        am[k].r = Math.min(16, 5 + am[k].count * 3);
      }
    }
    rawNodes = Object.values(am);
    var ls = {};
    for (var bi = 0; bi < papers.length; bi++) {
      var ba = splitAuthors(papers[bi].author).map(function (s) {
        return normalizeAuthorKey(s);
      }).filter(Boolean);
      for (var x = 0; x < ba.length; x++) {
        for (var y = x + 1; y < ba.length; y++) {
          var lk = ba[x] < ba[y] ? ba[x] + "||" + ba[y] : ba[y] + "||" + ba[x];
          if (!ls[lk]) {
            ls[lk] = true;
            rawLinks.push({
              source: ba[x],
              target: ba[y]
            });
          }
        }
      }
    }
  }

  // Position: circular layout + simple force
  var nodes = [];
  for (var fi = 0; fi < rawNodes.length; fi++) {
    var angle = 2 * Math.PI * fi / (rawNodes.length || 1);
    var rad = Math.min(W, H) * 0.32;
    nodes.push(Object.assign({}, rawNodes[fi], {
      x: W / 2 + rad * Math.cos(angle),
      y: H / 2 + rad * Math.sin(angle)
    }));
  }
  var idxMap = {};
  for (var mi = 0; mi < nodes.length; mi++) idxMap[nodes[mi].id] = mi;
  var links = [];
  for (var li = 0; li < rawLinks.length; li++) {
    var si = idxMap[rawLinks[li].source];
    var ti = idxMap[rawLinks[li].target];
    if (si !== undefined && ti !== undefined) links.push({
      si: si,
      ti: ti
    });
  }

  // Run force iterations
  for (var iter = 0; iter < 60; iter++) {
    var alpha = 0.25 * (1 - iter / 60);
    for (var ri = 0; ri < nodes.length; ri++) {
      for (var rj = ri + 1; rj < nodes.length; rj++) {
        var dx = nodes[rj].x - nodes[ri].x;
        var dy = nodes[rj].y - nodes[ri].y;
        var dist = Math.sqrt(dx * dx + dy * dy) || 1;
        var force = alpha * -150 / (dist * dist);
        nodes[ri].x -= force * dx / dist;
        nodes[ri].y -= force * dy / dist;
        nodes[rj].x += force * dx / dist;
        nodes[rj].y += force * dy / dist;
      }
    }
    for (var lfi = 0; lfi < links.length; lfi++) {
      var na = nodes[links[lfi].si];
      var nb = nodes[links[lfi].ti];
      if (!na || !nb) continue;
      var ldx = nb.x - na.x;
      var ldy = nb.y - na.y;
      var ld = Math.sqrt(ldx * ldx + ldy * ldy) || 1;
      var lf = alpha * (ld - 90) * 0.004;
      na.x += lf * ldx / ld;
      na.y += lf * ldy / ld;
      nb.x -= lf * ldx / ld;
      nb.y -= lf * ldy / ld;
    }
    for (var gi = 0; gi < nodes.length; gi++) {
      nodes[gi].x += (W / 2 - nodes[gi].x) * alpha * 0.01;
      nodes[gi].y += (H / 2 - nodes[gi].y) * alpha * 0.01;
      nodes[gi].x = Math.max(25, Math.min(W - 25, nodes[gi].x));
      nodes[gi].y = Math.max(25, Math.min(H - 25, nodes[gi].y));
    }
  }
  var svgLines = links.map(function (l, i) {
    var a = nodes[l.si];
    var b = nodes[l.ti];
    if (!a || !b) return null;
    return React.createElement("line", {
      key: "l" + i,
      x1: a.x,
      y1: a.y,
      x2: b.x,
      y2: b.y,
      stroke: t.borderBtn,
      strokeWidth: 1.5,
      strokeOpacity: 0.5
    });
  });
  var svgNodes = nodes.map(function (n, i) {
    var fill = n.group ? (IMP_COLORS[n.group] || t.accent) + "cc" : t.accent + "88";
    return React.createElement("g", {
      key: "n" + i,
      onMouseEnter: function () {
        setHovered(n);
      },
      onMouseLeave: function () {
        setHovered(null);
      },
      style: {
        cursor: "pointer"
      }
    }, React.createElement("circle", {
      cx: n.x,
      cy: n.y,
      r: n.r,
      fill: fill,
      stroke: t.bgCard,
      strokeWidth: 1.5
    }), React.createElement("text", {
      x: n.x,
      y: n.y + n.r + 11,
      textAnchor: "middle",
      fontSize: 8,
      fill: t.textTer,
      style: {
        fontFamily: "Inter,system-ui,sans-serif",
        pointerEvents: "none"
      }
    }, n.label));
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: t.text,
      margin: 0
    }
  }, "Visualization"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setMode("papers");
    },
    style: btnFn(t, mode === "papers")
  }, "Papers"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setMode("authors");
    },
    style: btnFn(t, mode === "authors")
  }, "Authors")), papers.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: t.textFaint,
      fontSize: 13
    }
  }, "Add papers to see the graph.") : /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid " + t.border,
      borderRadius: 10,
      overflow: "hidden",
      background: t.bgCard
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + W + " " + H,
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, svgLines, svgNodes), hovered && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 12px",
      fontSize: 12,
      color: t.text,
      borderTop: "1px solid " + t.borderLight,
      background: t.bgCardAlt
    }
  }, /*#__PURE__*/React.createElement("strong", null, hovered.title || hovered.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: t.textTer,
      marginTop: 6
    }
  }, mode === "papers" ? "Nodes = papers (colored by importance). Lines = citation links." : "Nodes = authors (sized by paper count). Lines = co-authorship."));
}

/* ── Add Paper Modal ── */
function AddPaperModal({
  onSave,
  onClose,
  editPaper,
  allFieldTags,
  awOptions,
  onAddAwOption,
  t
}) {
  const [step, setStep] = useState(editPaper ? 2 : 1);
  const [rawText, setRawText] = useState("");
  const [parsing, setParsing] = useState(false);
  const [parseError, setParseError] = useState("");
  const [title, setTitle] = useState(editPaper?.title || "");
  const [author, setAuthor] = useState(editPaper?.author || "");
  const [year, setYear] = useState(editPaper?.year || "");
  const [pubTitle, setPubTitle] = useState(editPaper?.publicationTitle || "");
  const [itemType, setItemType] = useState(editPaper?.itemType || "Journal Article");
  const [pages, setPages] = useState(editPaper?.pages || "");
  const [doi, setDoi] = useState(editPaper?.doi || "");
  const [importance, setImportance] = useState(editPaper?.importance || "None");
  const [fields, setFields] = useState(editPaper?.fields || []);
  const [methodUse, setMethodUse] = useState(editPaper?.methodUse || "");
  const [sampleSize, setSampleSize] = useState(editPaper?.sampleSize || "");
  const [sentences, setSentences] = useState(editPaper?.sentences || "");
  const [methodWise, setMethodWise] = useState(editPaper?.methodWise || "None");
  const [note, setNote] = useState(editPaper?.note || "");
  const [rq, setRq] = useState(editPaper?.researchQuestion || "");
  const [result, setResult] = useState(editPaper?.result || "");
  const [qualQuant, setQualQuant] = useState(editPaper?.qualQuant || "None");
  const [version, setVersion] = useState(editPaper?.version || "None");
  const [articleWise, setArticleWise] = useState(editPaper?.articleWise || "None");
  const [read, setRead] = useState(editPaper?.read || false);
  const handleParse = async () => {
    if (!rawText.trim()) return;
    setParsing(true);
    setParseError("");
    // Try BibTeX parse first (instant, no API)
    var bibtexResult = null;
    if (rawText.trim().startsWith("@")) {
      bibtexResult = parseBibTeX(rawText);
    }
    var parsed = bibtexResult || (await parseCitationText(rawText));
    if (parsed && parsed.length > 0) {
      var p = parsed[0];
      setTitle(p.title || "");
      setAuthor(p.author || "");
      setYear(p.year || "");
      setPubTitle(p.publicationTitle || "");
      setDoi(p.doi || "");
      setPages(p.pages || "");
      if (p.itemType && ITEM_TYPES.includes(p.itemType)) setItemType(p.itemType);
      setStep(2);
    } else setParseError("Could not parse. Fill manually instead.");
    setParsing(false);
  };
  const ok = title.trim();
  const handleSave = () => {
    if (!ok) return;
    onSave(emptyPaper({
      id: editPaper?.id || undefined,
      title: title.trim(),
      author: author.trim(),
      year: year.trim(),
      publicationTitle: pubTitle.trim(),
      itemType,
      pages: pages.trim(),
      doi: doi.trim(),
      importance,
      fields,
      methodUse: methodUse.trim(),
      sampleSize: sampleSize.trim(),
      sentences: sentences.trim(),
      methodWise,
      note: note.trim(),
      researchQuestion: rq.trim(),
      result: result.trim(),
      qualQuant,
      version,
      articleWise,
      read,
      dateAdded: editPaper?.dateAdded || new Date().toISOString().slice(0, 10)
    }));
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: 16
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: t.bgModal,
      borderRadius: 12,
      padding: "24px",
      width: "min(560px,95vw)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
      maxHeight: "90vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 16px",
      fontSize: 17,
      fontWeight: 700,
      color: t.text
    }
  }, editPaper ? "Edit Paper" : "Add Paper"), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Paste citation, reference, or BibTeX"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      padding: "5px 12px",
      borderRadius: 6,
      border: "1px dashed " + t.borderInput,
      background: t.bgInput,
      color: t.textSec,
      fontSize: 11,
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, "📂 .bib file", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".bib,.bibtex,.txt",
    style: {
      display: "none"
    },
    onChange: e => {
      var file = e.target.files && e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        setRawText(ev.target.result || "");
      };
      reader.readAsText(file);
      e.target.value = "";
    }
  }))), /*#__PURE__*/React.createElement("textarea", {
    value: rawText,
    onChange: e => setRawText(e.target.value),
    rows: 4,
    placeholder: "Newman, A., and C. Whitehead. 2008. 'The Impact of...'\n\nor paste multiple, one per line",
    style: {
      ...inputFn(t),
      resize: "vertical",
      marginBottom: 10,
      fontSize: 12
    },
    autoFocus: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleParse,
    disabled: parsing || !rawText.trim(),
    style: {
      ...btnFn(t, true),
      padding: "8px 18px",
      fontSize: 13,
      opacity: parsing || !rawText.trim() ? 0.5 : 1
    }
  }, parsing ? "Parsing..." : "Parse & Fill"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(2),
    style: {
      ...btnFn(t, false),
      padding: "8px 14px",
      fontSize: 13
    }
  }, "Fill manually")), parseError && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: t.dangerText,
      marginBottom: 8
    }
  }, parseError), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      ...btnFn(t, false),
      padding: "8px 16px",
      fontSize: 13
    }
  }, "Cancel"))), step === 2 && /*#__PURE__*/React.createElement("div", null, !editPaper && /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(1),
    style: {
      ...btnFn(t, false),
      fontSize: 11,
      marginBottom: 12
    }
  }, "\u2190", " Back"), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Title *"), /*#__PURE__*/React.createElement("input", {
    value: title,
    onChange: e => setTitle(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 2
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Author"), /*#__PURE__*/React.createElement("input", {
    value: author,
    onChange: e => setAuthor(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 10
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Year"), /*#__PURE__*/React.createElement("input", {
    value: year,
    onChange: e => setYear(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 10
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 2
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Publication"), /*#__PURE__*/React.createElement("input", {
    value: pubTitle,
    onChange: e => setPubTitle(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 10
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Pages"), /*#__PURE__*/React.createElement("input", {
    value: pages,
    onChange: e => setPages(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 10
    }
  }))), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "DOI / URL"), /*#__PURE__*/React.createElement("input", {
    value: doi,
    onChange: e => setDoi(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Item Type"), /*#__PURE__*/React.createElement("select", {
    value: itemType,
    onChange: e => setItemType(e.target.value),
    style: {
      ...inputFn(t),
      appearance: "auto"
    }
  }, ITEM_TYPES.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Version"), /*#__PURE__*/React.createElement("select", {
    value: version,
    onChange: e => setVersion(e.target.value),
    style: {
      ...inputFn(t),
      appearance: "auto"
    }
  }, VERSION_OPTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))))), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Field Tags (Keywords)"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(TagInput, {
    tags: fields,
    allTags: allFieldTags,
    onChange: setFields,
    placeholder: "e.g. Museum Studies, Digital Heritage...",
    t: t
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Importance"), /*#__PURE__*/React.createElement("select", {
    value: importance,
    onChange: e => setImportance(e.target.value),
    style: {
      ...inputFn(t),
      appearance: "auto"
    }
  }, IMPORTANCE_OPTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Qual/Quant"), /*#__PURE__*/React.createElement("select", {
    value: qualQuant,
    onChange: e => setQualQuant(e.target.value),
    style: {
      ...inputFn(t),
      appearance: "auto"
    }
  }, QUAL_QUANT_OPTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Method-wise"), /*#__PURE__*/React.createElement("select", {
    value: methodWise,
    onChange: e => setMethodWise(e.target.value),
    style: {
      ...inputFn(t),
      appearance: "auto"
    }
  }, METHOD_WISE_OPTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Article wise"), /*#__PURE__*/React.createElement(SelectWithAdd, {
    value: articleWise,
    options: awOptions,
    onChange: setArticleWise,
    onAddOption: onAddAwOption,
    t: t
  }))), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Method Used"), /*#__PURE__*/React.createElement("input", {
    value: methodUse,
    onChange: e => setMethodUse(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Sample Size"), /*#__PURE__*/React.createElement("input", {
    value: sampleSize,
    onChange: e => setSampleSize(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Research Question"), /*#__PURE__*/React.createElement("textarea", {
    value: rq,
    onChange: e => setRq(e.target.value),
    rows: 2,
    placeholder: "**bold** *italic* __underline__ ==highlight==\n{{red:text}} {{green:text}}\n* bullet point * nested bullet Empty line = paragraph break",
    style: {
      ...inputFn(t),
      resize: "vertical",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Result"), /*#__PURE__*/React.createElement("textarea", {
    value: result,
    onChange: e => setResult(e.target.value),
    rows: 2,
    placeholder: "**bold** *italic* __underline__ ==highlight==\n{{red:text}} {{green:text}}\n* bullet point * nested bullet Empty line = paragraph break",
    style: {
      ...inputFn(t),
      resize: "vertical",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Sentences Can Be Imitated"), /*#__PURE__*/React.createElement("textarea", {
    value: sentences,
    onChange: e => setSentences(e.target.value),
    rows: 2,
    placeholder: "**bold** *italic* __underline__ ==highlight==\n{{red:text}} {{green:text}}\n* bullet point * nested bullet Empty line = paragraph break",
    style: {
      ...inputFn(t),
      resize: "vertical",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Note"), /*#__PURE__*/React.createElement("textarea", {
    value: note,
    onChange: e => setNote(e.target.value),
    rows: 2,
    placeholder: "**bold** *italic* __underline__ ==highlight==\n{{red:text}} {{green:text}}\n* bullet point * nested bullet Empty line = paragraph break",
    style: {
      ...inputFn(t),
      resize: "vertical",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      ...labelFn(t),
      display: "flex",
      alignItems: "center",
      gap: 6,
      cursor: "pointer",
      textTransform: "none"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: read,
    onChange: e => setRead(e.target.checked)
  }), " ", "Read"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: 10,
      borderRadius: 8,
      border: "1px solid " + t.borderBtn,
      background: t.bgEmpty,
      color: t.textSec,
      fontWeight: 600,
      cursor: "pointer",
      fontSize: 13
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    disabled: !ok,
    style: {
      flex: 1,
      padding: 10,
      borderRadius: 8,
      border: "none",
      background: ok ? t.accent : t.textFaint,
      color: "#fff",
      fontWeight: 600,
      cursor: ok ? "pointer" : "default",
      fontSize: 13
    }
  }, editPaper ? "Save" : "Add Paper")))));
}

/* ── Import Modal ── */
function ImportModal({
  onImport,
  onClose,
  existingPapers,
  t
}) {
  const [text, setText] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const handleParse = () => {
    if (!text.trim()) return;
    setError("");
    setResults(null);

    // Auto-detect: BibTeX starts with @
    if (text.trim().startsWith("@")) {
      var bibParsed = parseBibTeX(text);
      if (bibParsed && bibParsed.length > 0) {
        var bibPapers = bibParsed.map(function (r) {
          return emptyPaper({
            title: r.title,
            author: r.author,
            year: r.year,
            publicationTitle: r.publicationTitle,
            itemType: r.itemType,
            pages: r.pages,
            doi: r.doi
          });
        });
        setResults(bibPapers);
        return;
      }
    }

    // Otherwise try TSV
    const lines = text.trim().split("\n").filter(Boolean);
    const first = lines[0].toLowerCase();
    const start = first.includes("importance") || first.includes("title") ? 1 : 0;
    const parsed = [];
    for (let i = start; i < lines.length; i++) {
      const p = parseTsvRow(lines[i]);
      if (p?.title) parsed.push(p);
    }
    if (parsed.length > 0) setResults(parsed);else setError("Could not parse. Supports BibTeX (@article{...}) or tab-separated rows.");
  };
  const handleImport = () => {
    if (!results) return;
    const ex = new Set(existingPapers.map(p => p.title.toLowerCase().trim()));
    onImport(results.filter(r => !ex.has(r.title.toLowerCase().trim())));
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: 16
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: t.bgModal,
      borderRadius: 12,
      padding: "24px",
      width: "min(580px,95vw)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
      maxHeight: "90vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 14px",
      fontSize: 17,
      fontWeight: 700,
      color: t.text
    }
  }, "Import Papers"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: t.textTer,
      margin: "0 0 10px"
    }
  }, "Upload a .bib file, or paste BibTeX / tab-separated rows."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      padding: "7px 14px",
      borderRadius: 7,
      border: "1px dashed " + t.borderInput,
      background: t.bgInput,
      color: t.textSec,
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, "📂 Choose .bib file", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".bib,.bibtex,.txt,.csv,.tsv",
    style: {
      display: "none"
    },
    onChange: e => {
      var file = e.target.files && e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        setText(ev.target.result || "");
      };
      reader.readAsText(file);
      e.target.value = "";
    }
  })), text && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: t.successText
    }
  }, "File loaded")), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    rows: 8,
    placeholder: "@article{smith2024, author = {Smith, J.}, title = {Example}, ...\n} or paste tab-separated rows from Excel/Sheets",
    style: {
      ...inputFn(t),
      resize: "vertical",
      marginBottom: 10,
      fontFamily: "monospace",
      fontSize: 11
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleParse,
    disabled: !text.trim(),
    style: {
      ...btnFn(t, true),
      padding: "8px 18px",
      fontSize: 13,
      opacity: !text.trim() ? 0.5 : 1
    }
  }, "Parse"), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: t.dangerText
    }
  }, error)), results && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: t.successText,
      marginBottom: 8
    }
  }, "Found ", results.length, " paper", results.length > 1 ? "s" : "", ":"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 200,
      overflowY: "auto"
    }
  }, results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "8px 10px",
      background: t.bgCardAlt,
      borderRadius: 6,
      marginBottom: 4,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: t.text
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: t.textSec
    }
  }, r.author, " (", r.year, ")")))), /*#__PURE__*/React.createElement("button", {
    onClick: handleImport,
    style: {
      ...btnFn(t, true),
      marginTop: 10,
      padding: "8px 18px",
      fontSize: 13,
      width: "100%"
    }
  }, "Import All (", results.length, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      ...btnFn(t, false),
      padding: "8px 16px",
      fontSize: 13
    }
  }, "Close"))));
}

/* ── Match Refs Modal ── */
function MatchRefsModal({
  papers,
  onAddCitations,
  onClose,
  t
}) {
  const [text, setText] = useState("");
  const [matching, setMatching] = useState(false);
  const [srcId, setSrcId] = useState("");
  const [matches, setMatches] = useState(null);
  const [error, setError] = useState("");
  const go = async () => {
    if (!text.trim() || !srcId) return;
    setMatching(true);
    setError("");
    setMatches(null);
    const r = await matchReferences(text, papers);
    if (r?.length > 0) setMatches(r);else setError("No matches found.");
    setMatching(false);
  };
  const confirm = () => {
    if (!matches || !srcId) return;
    onAddCitations(matches.map(m => ({
      id: gid(),
      sourceId: srcId,
      targetId: papers[m.libraryIndex]?.id,
      type: "cites"
    })).filter(c => c.targetId));
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: 16
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: t.bgModal,
      borderRadius: 12,
      padding: "24px",
      width: "min(560px,95vw)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
      maxHeight: "90vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 14px",
      fontSize: 17,
      fontWeight: 700,
      color: t.text
    }
  }, "Match References"), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Which paper's references?"), /*#__PURE__*/React.createElement("select", {
    value: srcId,
    onChange: e => setSrcId(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 10,
      appearance: "auto"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select..."), papers.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.author, " (", p.year, ") — ", p.title))), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Paste the reference list"), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    rows: 6,
    placeholder: "Paste reference list...",
    style: {
      ...inputFn(t),
      resize: "vertical",
      marginBottom: 10,
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: go,
    disabled: matching || !text.trim() || !srcId,
    style: {
      ...btnFn(t, true),
      padding: "8px 18px",
      fontSize: 13,
      opacity: matching || !text.trim() || !srcId ? 0.5 : 1
    }
  }, matching ? "Matching..." : "Find Matches"), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: t.textTer
    }
  }, error)), matches && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: t.successText,
      marginBottom: 8
    }
  }, "Matched ", matches.length, ":"), matches.map((m, i) => {
    const tgt = papers[m.libraryIndex];
    return tgt ? /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "8px 10px",
        background: t.bgCardAlt,
        borderRadius: 6,
        marginBottom: 4,
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: t.text
      }
    }, tgt.title)) : null;
  }), /*#__PURE__*/React.createElement("button", {
    onClick: confirm,
    style: {
      ...btnFn(t, true),
      marginTop: 10,
      padding: "8px 18px",
      fontSize: 13,
      width: "100%"
    }
  }, "Add ", matches.length, " Link", matches.length > 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      ...btnFn(t, false),
      padding: "8px 16px",
      fontSize: 13
    }
  }, "Close"))));
}

/* ── Add Relation Modal ── */
function AddRelationModal({
  papers,
  src,
  onAdd,
  onClose,
  t
}) {
  const [tid, setTid] = useState("");
  const [rel, setRel] = useState("related");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: 16
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: t.bgModal,
      borderRadius: 12,
      padding: "24px",
      width: "min(440px,95vw)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 14px",
      fontSize: 17,
      fontWeight: 700,
      color: t.text
    }
  }, "Add Relation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: t.textSec,
      marginBottom: 12
    }
  }, "From: ", /*#__PURE__*/React.createElement("strong", null, src.title)), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 12
    }
  }, [["cites", "Cites"], ["related", "Related to"], ["same_category", "Same category"]].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setRel(k),
    style: btnFn(t, rel === k)
  }, l))), /*#__PURE__*/React.createElement("label", {
    style: labelFn(t)
  }, "Target"), /*#__PURE__*/React.createElement("select", {
    value: tid,
    onChange: e => setTid(e.target.value),
    style: {
      ...inputFn(t),
      marginBottom: 14,
      appearance: "auto"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select..."), papers.filter(p => p.id !== src.id).map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.author, " (", p.year, ") — ", p.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: 10,
      borderRadius: 8,
      border: "1px solid " + t.borderBtn,
      background: t.bgEmpty,
      color: t.textSec,
      fontWeight: 600,
      cursor: "pointer",
      fontSize: 13
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (tid) {
        onAdd({
          id: gid(),
          sourceId: src.id,
          targetId: tid,
          type: rel
        });
        onClose();
      }
    },
    disabled: !tid,
    style: {
      flex: 1,
      padding: 10,
      borderRadius: 8,
      border: "none",
      background: tid ? t.accent : t.textFaint,
      color: "#fff",
      fontWeight: 600,
      cursor: tid ? "pointer" : "default",
      fontSize: 13
    }
  }, "Add"))));
}

/* ══════════════════════════════ MAIN ══════════════════════════════ */
function LiteratureTracker() {
  const t = useTheme();
  const isMobile = useIsMobile();
  const [papers, setPapers] = useState([]);
  const [citations, setCitations] = useState([]);
  const [awOpts, setAwOpts] = useState(DEFAULT_AW_OPTS);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState("all"); // all | reading | keywords | vis
  const [showAdd, setShowAdd] = useState(false);
  const [editPaper, setEditPaper] = useState(null);
  const [showImport, setShowImport] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [showRel, setShowRel] = useState(null);
  const [fImp, setFImp] = useState("all");
  const [fRead, setFRead] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("dateAdded");
  const [deleted, setDeleted] = useState([]);
  const allTags = [...new Set(papers.flatMap(p => p.fields || []))].sort();
  const SEED = [emptyPaper({
    id: "seed001",
    title: "The Impact of Participation in Gallery Education Activities on Schoolchildren\u2019s Human, Social and Cultural Capital",
    author: "Newman, A., and C. Whitehead",
    year: "2008",
    publicationTitle: "Evaluating the Impact of Arts and Cultural Education on Young People",
    itemType: "Conference Paper",
    doi: "https://eprints.ncl.ac.uk"
  }), emptyPaper({
    id: "seed002",
    title: "Visiting with Suspicion: Recent Perspectives on Art Museums and Galleries",
    author: "Whitehead, C.",
    year: "2004",
    publicationTitle: "Heritage, Museums and Galleries: An Introductory Reader",
    itemType: "Book Section",
    doi: "https://eprints.ncl.ac.uk"
  }), emptyPaper({
    id: "seed003",
    title: "To Display Is to Theorise",
    author: "Whitehead, C.",
    year: "2005",
    publicationTitle: "Architectural Research Quarterly",
    itemType: "Journal Article",
    doi: "https://doi.org/10.1017/S1359135504000247"
  }), emptyPaper({
    id: "seed004",
    title: "Locating Art: The Display and Construction of Place Identity in Art Galleries",
    author: "Whitehead, C.",
    year: "2009",
    publicationTitle: "Heritage and Identity: Engagement and Demission in the Contemporary World",
    itemType: "Book Section",
    doi: "https://eprints.ncl.ac.uk"
  }), emptyPaper({
    id: "seed005",
    title: "On the assessment of situational intrinsic and extrinsic motivation: The situational motivation scale (SIMS)",
    author: "Guay, F.; Vallerand, R. J.; Blanchard, C.",
    year: "2000",
    publicationTitle: "Motivation and emotion",
    itemType: "Journal Article",
    pages: "-175",
    importance: "High",
    fields: ["motivation", "situational motivation scale"],
    methodUse: "Questionnaires. Five studies.",
    sampleSize: "Study 1: 195 Study 2: 907 Study 3: 145 Study 4: 150 Study 5: 40",
    methodWise: "Learn",
    note: 'P176: "External events can alter one\u2019s situational intrinsic motivation for specific activities"',
    researchQuestion: "Development and validation of the Situational Motivation Scale (SIMS).",
    result: "SIMS overcomes limitations of traditional measures. Five limitations noted.",
    qualQuant: "Quantitative",
    read: true,
    articleWise: "RONGHUA",
    version: "PDF",
    dateAdded: "2024-07-10"
  })];
  useEffect(() => {
    (async () => {
      let ex = [];
      try {
        const r = await window.storage.get(STORE.papers);
        if (r?.value) ex = JSON.parse(r.value);
      } catch {}
      const ids = new Set(ex.map(p => p.id));
      const add = SEED.filter(s => !ids.has(s.id));
      const merged = [...ex, ...add];
      setPapers(merged);
      if (add.length) try {
        await window.storage.set(STORE.papers, JSON.stringify(merged));
      } catch {}
      try {
        const r = await window.storage.get(STORE.citations);
        if (r?.value) setCitations(JSON.parse(r.value));
      } catch {}
      try {
        const r = await window.storage.get(STORE.awOptions);
        if (r?.value) setAwOpts(JSON.parse(r.value));
      } catch {}
      setAwOpts(prev => prev.includes("RONGHUA") ? prev : [...prev, "RONGHUA"]);
      setLoaded(true);
    })();
  }, []);
  const save = useCallback(async np => {
    setPapers(np);
    try {
      await window.storage.set(STORE.papers, JSON.stringify(np));
    } catch {}
  }, []);
  const saveCits = useCallback(async nc => {
    setCitations(nc);
    try {
      await window.storage.set(STORE.citations, JSON.stringify(nc));
    } catch {}
  }, []);
  const saveAw = useCallback(async o => {
    setAwOpts(o);
    try {
      await window.storage.set(STORE.awOptions, JSON.stringify(o));
    } catch {}
  }, []);
  const savePaper = p => {
    if (papers.find(x => x.id === p.id)) save(papers.map(x => x.id === p.id ? p : x));else save([p, ...papers]);
  };
  const delPaper = id => {
    const p = papers.find(x => x.id === id);
    if (p) setDeleted(d => [...d, {
      ...p,
      _at: Date.now()
    }]);
    save(papers.filter(x => x.id !== id));
    saveCits(citations.filter(c => c.sourceId !== id && c.targetId !== id));
    setTimeout(() => setDeleted(d => d.filter(x => Date.now() - x._at < 8000)), 8500);
  };
  const undo = id => {
    const it = deleted.find(d => d.id === id);
    if (!it) return;
    const {
      _at,
      ...p
    } = it;
    setDeleted(d => d.filter(x => x.id !== id));
    save([p, ...papers]);
  };
  const toggleRead = id => save(papers.map(p => p.id === id ? {
    ...p,
    read: !p.read
  } : p));
  const importPapers = np => save([...np, ...papers]);
  const addCits = nc => saveCits([...citations, ...nc]);
  const addCit = c => saveCits([...citations, c]);
  const addAw = opt => {
    if (!awOpts.includes(opt)) saveAw([...awOpts, opt]);
  };
  const [syncing, setSyncing] = useState(false);
  const [syncMsg, setSyncMsg] = useState("");
  const push = async () => {
    setSyncing(true);
    setSyncMsg("");
    try {
      const payload = {
        papers: papers.map(p => ({
          ...p,
          fields: (p.fields || []).join("; "),
          read: p.read ? "Y" : "N"
        })),
        citations,
        articleWiseOptions: awOpts.map(o => ({
          option: o
        }))
      };
      if (window.electronAPI?.syncToSheet) {
        const r = await window.electronAPI.syncToSheet(JSON.stringify(payload));
        setSyncMsg(r?.success ? "Pushed \u2713" : "Fail");
      } else {
        await fetch(SYNC_URL, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "text/plain"
          },
          mode: "no-cors"
        });
        setSyncMsg("Pushed \u2713");
      }
    } catch {
      setSyncMsg("Error");
    }
    setSyncing(false);
    setTimeout(() => setSyncMsg(""), 4000);
  };
  const pull = async () => {
    setSyncing(true);
    setSyncMsg("Pulling...");
    try {
      const ft = async u => {
        if (window.electronAPI?.fetchUrl) return window.electronAPI.fetchUrl(u);
        const r = await fetch(u);
        return r.text();
      };
      const [pr, cr, ar] = await Promise.all([ft(gvizUrl("Papers")), ft(gvizUrl("Citations")).catch(() => ""), ft(gvizUrl("ArticleWiseOptions")).catch(() => "")]);
      const rp = (parseGviz(pr) || []).filter(p => p.id && p.title).map(p => ({
        ...p,
        fields: p.fields ? p.fields.split("; ").filter(Boolean) : [],
        read: p.read === "Y" || p.read === "true"
      }));
      if (rp.length) {
        await save(rp);
        const rc = (parseGviz(cr) || []).filter(c => c.id);
        if (rc.length) await saveCits(rc);
        const ra = (parseGviz(ar) || []).map(r => r.option).filter(Boolean);
        if (ra.length) await saveAw(ra);
        setSyncMsg("Pulled " + rp.length + " \u2713");
      } else setSyncMsg("No data");
    } catch (e) {
      setSyncMsg("Error");
    }
    setSyncing(false);
    setTimeout(() => setSyncMsg(""), 6000);
  };

  // Filter for "all" page
  const filtered = papers.filter(p => {
    if (fImp !== "all" && p.importance !== fImp) return false;
    if (fRead === "read" && !p.read) return false;
    if (fRead === "unread" && p.read) return false;
    if (search) {
      const q = search.toLowerCase();
      if (![p.title, p.author, p.publicationTitle, p.note, p.researchQuestion, ...(p.fields || [])].join(" ").toLowerCase().includes(q)) return false;
    }
    return true;
  });
  const sorted = [...filtered].sort((a, b) => {
    return defaultSort(a, b);
  });
  if (!loaded) return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter',system-ui,sans-serif",
      padding: 40,
      textAlign: "center",
      color: "#888",
      background: "#f7f7f5",
      minHeight: "100vh"
    }
  }, "Loading...");
  const tabStyle = active => ({
    padding: "8px 16px",
    borderRadius: "8px 8px 0 0",
    border: "none",
    borderBottom: active ? "2px solid " + t.accent : "2px solid transparent",
    background: active ? t.bgCard : "transparent",
    color: active ? t.text : t.textTer,
    fontWeight: active ? 700 : 500,
    fontSize: 13,
    cursor: "pointer",
    transition: "color 0.15s, background 0.15s",
    whiteSpace: "nowrap"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter',system-ui,sans-serif",
      maxWidth: "none",
      margin: "0 auto",
      padding: "20px 24px 40px",
      color: t.text,
      background: t.bgPage,
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 21,
      fontWeight: 800,
      margin: "0 0 2px",
      letterSpacing: "-0.02em"
    }
  }, "Literature Tracker"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: t.textTer
    }
  }, papers.length, " paper", papers.length !== 1 ? "s" : "", " ·", " ", papers.filter(p => p.read).length, " read · ", citations.length, " ", "link", citations.length !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, syncMsg && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: syncMsg.includes("\u2713") ? t.successText : syncMsg.includes("...") ? t.textTer : t.dangerText,
      fontWeight: 600
    }
  }, syncMsg), /*#__PURE__*/React.createElement("button", {
    onClick: push,
    disabled: syncing,
    style: {
      background: "none",
      border: "1px solid " + t.borderBtn,
      borderRadius: 6,
      padding: "4px 8px",
      fontSize: 11,
      color: t.accent,
      fontWeight: 600,
      cursor: syncing ? "wait" : "pointer"
    }
  }, "\u25B2", " Push"), /*#__PURE__*/React.createElement("button", {
    onClick: pull,
    disabled: syncing,
    style: {
      background: "none",
      border: "1px solid " + t.borderBtn,
      borderRadius: 6,
      padding: "4px 8px",
      fontSize: 11,
      color: "#D4883A",
      fontWeight: 600,
      cursor: syncing ? "wait" : "pointer"
    }
  }, "\u25BC", " Pull"), /*#__PURE__*/React.createElement("a", {
    href: SHEET_LINK,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      background: "none",
      border: "1px solid " + t.borderBtn,
      borderRadius: 6,
      padding: "4px 8px",
      fontSize: 11,
      color: "#2A7A3A",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, "\uD83D\uDCCA")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      borderBottom: "1px solid " + t.border,
      marginBottom: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("all"),
    style: tabStyle(page === "all")
  }, "All Papers"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("reading"),
    style: tabStyle(page === "reading")
  }, "Reading List"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("keywords"),
    style: tabStyle(page === "keywords")
  }, "Keywords"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage("vis"),
    style: tabStyle(page === "vis")
  }, "Visualization")), page === "all" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setEditPaper(null);
      setShowAdd(true);
    },
    style: {
      padding: "8px 16px",
      borderRadius: 8,
      border: "none",
      background: t.accent,
      color: t.accentText,
      fontWeight: 700,
      fontSize: 12,
      cursor: "pointer"
    }
  }, "+ Add Paper"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowImport(true),
    style: {
      padding: "8px 14px",
      borderRadius: 8,
      border: "1px solid " + t.borderBtn,
      background: t.bgCard,
      color: t.textSec,
      fontWeight: 600,
      fontSize: 12,
      cursor: "pointer"
    }
  }, "Import"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowMatch(true),
    style: {
      padding: "8px 14px",
      borderRadius: 8,
      border: "1px solid " + t.borderBtn,
      background: t.bgCard,
      color: t.textSec,
      fontWeight: 600,
      fontSize: 12,
      cursor: "pointer"
    }
  }, "Match Refs"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Search title, author, notes...",
    style: {
      ...inputFn(t),
      width: isMobile ? "100%" : 200,
      marginBottom: 0,
      fontSize: 12,
      padding: "6px 10px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      marginBottom: 10,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: t.textTer,
      textTransform: "uppercase"
    }
  }, "Read:"), ["all", "unread", "read"].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setFRead(s),
    style: btnFn(t, fRead === s)
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: t.textTer,
      textTransform: "uppercase",
      marginLeft: 8
    }
  }, "Imp:"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFImp("all"),
    style: btnFn(t, fImp === "all")
  }, "All"), IMPORTANCE_OPTS.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setFImp(o),
    style: {
      ...btnFn(t, fImp === o),
      borderColor: fImp === o ? IMP_COLORS[o] : t.borderBtn,
      color: fImp === o ? IMP_COLORS[o] : t.textTer
    }
  }, o))), deleted.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      padding: "8px 12px",
      marginBottom: 8,
      borderRadius: 8,
      background: t.undoBg,
      border: "1px solid " + t.undoBorder
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: t.undoText,
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, "Deleted ", /*#__PURE__*/React.createElement("strong", null, d.title)), /*#__PURE__*/React.createElement("button", {
    onClick: () => undo(d.id),
    style: {
      padding: "3px 10px",
      borderRadius: 5,
      border: "none",
      background: t.accent,
      color: t.accentText,
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Undo"))), sorted.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 20px",
      color: t.textFaint,
      fontSize: 13,
      background: t.bgEmpty,
      borderRadius: 10,
      border: "1px dashed " + t.borderBtn
    }
  }, papers.length === 0 ? "No papers yet." : "No papers match filters.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, sorted.map(p => /*#__PURE__*/React.createElement(PaperCard, {
    key: p.id,
    paper: p,
    t: t,
    citations: citations,
    allPapers: papers,
    onEdit: p => {
      setEditPaper(p);
      setShowAdd(true);
    },
    onDelete: delPaper,
    onToggleRead: toggleRead,
    onAddRelation: p => setShowRel(p),
    onDeleteCitation: id => saveCits(citations.filter(c => c.id !== id))
  })))), page === "reading" && /*#__PURE__*/React.createElement(ReadingListTable, {
    papers: papers,
    onToggleRead: toggleRead,
    onEdit: p => {
      setEditPaper(p);
      setShowAdd(true);
    },
    t: t
  }), page === "keywords" && /*#__PURE__*/React.createElement(KeywordsPage, {
    papers: papers,
    citations: citations,
    onEdit: p => {
      setEditPaper(p);
      setShowAdd(true);
    },
    onDelete: delPaper,
    onToggleRead: toggleRead,
    onAddRelation: p => setShowRel(p),
    onDeleteCitation: id => saveCits(citations.filter(c => c.id !== id)),
    t: t
  }), page === "vis" && /*#__PURE__*/React.createElement(VisPage, {
    papers: papers,
    citations: citations,
    t: t
  }), showAdd && /*#__PURE__*/React.createElement(AddPaperModal, {
    onSave: savePaper,
    onClose: () => {
      setShowAdd(false);
      setEditPaper(null);
    },
    editPaper: editPaper,
    allFieldTags: allTags,
    awOptions: awOpts,
    onAddAwOption: addAw,
    t: t
  }), showImport && /*#__PURE__*/React.createElement(ImportModal, {
    onImport: importPapers,
    onClose: () => setShowImport(false),
    existingPapers: papers,
    t: t
  }), showMatch && /*#__PURE__*/React.createElement(MatchRefsModal, {
    papers: papers,
    onAddCitations: addCits,
    onClose: () => setShowMatch(false),
    t: t
  }), showRel && /*#__PURE__*/React.createElement(AddRelationModal, {
    papers: papers,
    src: showRel,
    onAdd: addCit,
    onClose: () => setShowRel(null),
    t: t
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(LiteratureTracker));
