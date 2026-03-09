(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_09dd2e._.js", {

"[project]/src/components/sections/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature();
"use client";
;
;
// ─── Theme System ─────────────────────────────────────────────────────────────
function useTheme() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            const stored = localStorage.getItem("portfolio-theme");
            const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            const initial = stored ?? preferred;
            setTheme(initial);
            applyTheme(initial);
        }
    }["useTheme.useEffect"], []);
    function applyTheme(t) {
        document.documentElement.setAttribute("data-theme", t);
    }
    const toggle = ()=>{
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        applyTheme(next);
        localStorage.setItem("portfolio-theme", next);
    };
    return {
        theme,
        toggle
    };
}
_s(useTheme, "HKZhbbE1NL5O9VXEQueUHrvooII=");
// ─── Nav Links ────────────────────────────────────────────────────────────────
const NAV = [
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Resume",
        href: "#resume"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
// ─── SVG Icons ────────────────────────────────────────────────────────────────
const GitHubIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "18",
        height: "18",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Navbar.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, this);
_c = GitHubIcon;
const DownloadIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        width: "13",
        height: "13",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "7 10 12 15 17 10"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "15",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
_c1 = DownloadIcon;
const SunIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        width: "14",
        height: "14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "5"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "1",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "21",
                x2: "12",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 63,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "4.22",
                x2: "5.64",
                y2: "5.64"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "18.36",
                x2: "19.78",
                y2: "19.78"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "12",
                x2: "3",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 66,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "12",
                x2: "23",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "19.78",
                x2: "5.64",
                y2: "18.36"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "5.64",
                x2: "19.78",
                y2: "4.22"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
_c2 = SunIcon;
const MoonIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        width: "14",
        height: "14",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Navbar.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
_c3 = MoonIcon;
// ─── Scroll helper ────────────────────────────────────────────────────────────
function scrollTo(href) {
    document.querySelector(href)?.scrollIntoView({
        behavior: "smooth"
    });
}
// ─── NavLink ──────────────────────────────────────────────────────────────────
function NavLink({ label, href, active, onClick }) {
    _s1();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        className: `navlink${active ? " navlink-active" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "navlink-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "navlink-bar",
                animate: {
                    scaleX: hov || active ? 1 : 0,
                    opacity: hov || active ? 1 : 0
                },
                initial: false,
                transition: {
                    duration: 0.2,
                    ease: [
                        0.4,
                        0,
                        0.2,
                        1
                    ]
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "navlink-glow",
                layoutId: "navglow",
                transition: {
                    type: "spring",
                    stiffness: 360,
                    damping: 30
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s1(NavLink, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c4 = NavLink;
// ─── ThemeToggle ──────────────────────────────────────────────────────────────
function ThemeToggle({ theme, toggle }) {
    const dark = theme === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: toggle,
        "aria-label": "Toggle theme",
        className: "toggle-btn",
        whileTap: {
            scale: 0.88
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "toggle-track",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "toggle-thumb",
                    animate: {
                        x: dark ? 2 : 22
                    },
                    transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 36
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Navbar.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "t-icon t-icon-l",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 128,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Navbar.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "t-icon t-icon-r",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SunIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 129,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Navbar.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Navbar.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c5 = ThemeToggle;
// ─── Hamburger ────────────────────────────────────────────────────────────────
function Hamburger({ open, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        className: "ham-btn",
        onClick: onClick,
        whileTap: {
            scale: 0.88
        },
        "aria-label": "Menu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    rotate: open ? 45 : 0,
                    y: open ? 7 : 0
                },
                className: "ham-line"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    opacity: open ? 0 : 1
                },
                className: "ham-line"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    rotate: open ? -45 : 0,
                    y: open ? -7 : 0
                },
                className: "ham-line"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c6 = Hamburger;
function Navbar() {
    _s2();
    const { theme, toggle } = useTheme();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    setScrolled(window.scrollY > 30);
                    const y = window.scrollY + 140;
                    for(let i = NAV.length - 1; i >= 0; i--){
                        const el = document.querySelector(NAV[i].href);
                        if (el && el.offsetTop <= y) {
                            setActive(NAV[i].href);
                            return;
                        }
                    }
                    setActive("");
                }
            }["Navbar.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const close = {
                "Navbar.useEffect.close": ()=>{
                    if (window.innerWidth >= 900) setOpen(false);
                }
            }["Navbar.useEffect.close"];
            window.addEventListener("resize", close);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("resize", close)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleNav = (href)=>{
        setOpen(false);
        scrollTo(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        /* ── CSS Tokens ── */
        :root[data-theme="dark"] {
          --bg:            #07070f;
          --glass:         rgba(11,11,22,0.72);
          --glass-border:  rgba(255,255,255,0.065);
          --glass-shadow:  0 8px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.04);
          --text:          #eaeaf5;
          --text-dim:      rgba(190,190,225,0.45);
          --text-nav:      rgba(195,195,228,0.68);
          --accent:        #6e84fe;
          --accent2:       #a78bfa;
          --glow:          rgba(110,132,254,0.22);
          --glow2:         rgba(110,132,254,0.10);
          --pill-bg:       rgba(255,255,255,0.052);
          --pill-border:   rgba(255,255,255,0.085);
          --pill-hover:    rgba(255,255,255,0.095);
          --resume-bg:     linear-gradient(135deg,#6e84fe 0%,#a78bfa 100%);
          --resume-shadow: 0 4px 22px rgba(110,132,254,0.38);
          --tog-track:     rgba(255,255,255,0.07);
          --tog-border:    rgba(255,255,255,0.10);
          --tog-thumb:     #6e84fe;
          --divider:       rgba(255,255,255,0.07);
          --mob-bg:        rgba(7,7,15,0.97);
          --mob-hover:     rgba(110,132,254,0.07);
        }
        :root[data-theme="light"] {
          --bg:            #f2f2f8;
          --glass:         rgba(255,255,255,0.82);
          --glass-border:  rgba(0,0,0,0.065);
          --glass-shadow:  0 8px 40px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,0.9);
          --text:          #0e0e1c;
          --text-dim:      rgba(35,35,75,0.40);
          --text-nav:      rgba(30,30,68,0.68);
          --accent:        #4e6bf5;
          --accent2:       #7c3aed;
          --glow:          rgba(78,107,245,0.16);
          --glow2:         rgba(78,107,245,0.08);
          --pill-bg:       rgba(0,0,0,0.042);
          --pill-border:   rgba(0,0,0,0.068);
          --pill-hover:    rgba(0,0,0,0.08);
          --resume-bg:     linear-gradient(135deg,#4e6bf5 0%,#7c3aed 100%);
          --resume-shadow: 0 4px 22px rgba(78,107,245,0.30);
          --tog-track:     rgba(0,0,0,0.058);
          --tog-border:    rgba(0,0,0,0.08);
          --tog-thumb:     #4e6bf5;
          --divider:       rgba(0,0,0,0.068);
          --mob-bg:        rgba(245,245,252,0.98);
          --mob-hover:     rgba(78,107,245,0.07);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          transition: background 0.45s ease, color 0.45s ease;
        }

        /* ── Outer wrapper ── */
        .nb-wrap {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 300;
          pointer-events: none;
          padding: 14px 20px;
          transition: padding 0.38s cubic-bezier(.4,0,.2,1);
        }
        .nb-wrap.nb-scrolled { padding: 7px 20px; }

        /* ── Glass pill ── */
        .nb-pill {
          pointer-events: all;
          max-width: 1200px;
          margin: 0 auto;
          height: 70px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 20px;
          background: transparent;
          transition: background 0.42s, border 0.42s, box-shadow 0.42s, height 0.38s cubic-bezier(.4,0,.2,1), border-radius 0.38s;
        }
        .nb-wrap.nb-scrolled .nb-pill {
          background: var(--glass);
          backdrop-filter: blur(22px) saturate(1.8);
          -webkit-backdrop-filter: blur(22px) saturate(1.8);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          height: 62px;
          border-radius: 16px;
        }

        /* ── Logo ── */
        .logo {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.055em;
          color: var(--text);
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          display: flex;
          align-items: baseline;
          transition: opacity 0.2s;
          padding: 0;
          line-height: 1;
        }
        .logo:hover { opacity: 0.82; }
        .logo-hi {
          background: linear-gradient(130deg, var(--accent), var(--accent2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Center nav ── */
        .nb-center {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;
        }
        @media (max-width: 900px) { .nb-center { display: none; } }

        /* ── Nav link ── */
        .navlink {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 9px 18px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: background 0.2s;
        }
        .navlink:hover { background: var(--pill-bg); }
        .navlink-label {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: 0.015em;
          color: var(--text-nav);
          transition: color 0.22s;
        }
        .navlink:hover .navlink-label,
        .navlink-active .navlink-label { color: var(--text); }
        .navlink-active .navlink-label { color: var(--accent) !important; }

        .navlink-bar {
          display: block;
          height: 2px;
          width: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform-origin: center;
        }
        .navlink-glow {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: var(--glow2);
          z-index: -1;
        }

        /* ── Divider ── */
        .nb-divider {
          width: 1px;
          height: 20px;
          background: var(--divider);
          flex-shrink: 0;
          margin: 0 4px;
        }
        @media (max-width: 900px) { .nb-divider { display: none; } }

        /* ── Right side ── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        /* ── Icon button ── */
        .icon-btn {
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 11px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-nav);
          text-decoration: none;
          transition: background 0.22s, color 0.22s, box-shadow 0.22s;
        }
        .icon-btn:hover {
          background: var(--pill-hover);
          color: var(--text);
          box-shadow: 0 0 0 3px var(--glow);
        }

        /* ── Resume btn ── */
        .resume-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          height: 42px;
          padding: 0 20px;
          border-radius: 12px;
          background: var(--resume-bg);
          color: #fff;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          white-space: nowrap;
          box-shadow: var(--resume-shadow);
          cursor: pointer;
          border: none;
          transition: filter 0.22s, box-shadow 0.22s, transform 0.18s;
        }
        .resume-btn:hover {
          filter: brightness(1.1);
          box-shadow: 0 6px 28px rgba(110,132,254,0.45);
        }

        /* ── Toggle ── */
        .toggle-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .toggle-track {
          position: relative;
          display: flex;
          align-items: center;
          width: 58px;
          height: 30px;
          border-radius: 99px;
          background: var(--tog-track);
          border: 1px solid var(--tog-border);
          transition: background 0.3s, border-color 0.3s;
          overflow: hidden;
        }
        .toggle-track:hover { box-shadow: 0 0 0 3px var(--glow); }
        .toggle-thumb {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--tog-thumb);
          top: 2px;
          box-shadow: 0 2px 8px rgba(110,132,254,0.45);
          z-index: 2;
        }
        .t-icon {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.88);
          pointer-events: none;
        }
        .t-icon-l { left: 7px; }
        .t-icon-r { right: 6px; }

        /* ── Hamburger ── */
        .ham-btn {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 11px;
          width: 42px;
          height: 42px;
          cursor: pointer;
          padding: 0;
        }
        @media (max-width: 900px) { .ham-btn { display: flex; } }
        .ham-line {
          display: block;
          width: 18px;
          height: 1.8px;
          border-radius: 2px;
          background: var(--text);
          transform-origin: center;
        }

        /* ── Mobile overlay ── */
        .mob-overlay {
          position: fixed;
          inset: 0;
          z-index: 280;
          background: var(--mob-bg);
          backdrop-filter: blur(30px) saturate(1.5);
          -webkit-backdrop-filter: blur(30px) saturate(1.5);
          display: flex;
          flex-direction: column;
          padding: 96px 28px 40px;
        }
        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          border-bottom: 1px solid var(--divider);
          padding: 18px 10px;
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text-dim);
          transition: color 0.2s, background 0.2s;
          border-radius: 10px;
          text-align: left;
          width: 100%;
        }
        .mob-link:hover { color: var(--text); background: var(--mob-hover); }
        .mob-link.mob-active { color: var(--accent); }
        .mob-link-arrow { font-size: 1rem; opacity: 0.3; font-weight: 400; font-family: 'Outfit', sans-serif; }
        .mob-foot {
          margin-top: auto;
          display: flex;
          gap: 10px;
          padding-top: 28px;
        }
        .mob-foot .resume-btn { flex: 1; justify-content: center; }

      `
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `nb-wrap${scrolled ? " nb-scrolled" : ""}`,
                initial: {
                    y: -96,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.62,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nb-pill",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "logo",
                            onClick: ()=>window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                }),
                            whileHover: {
                                scale: 1.04
                            },
                            whileTap: {
                                scale: 0.96
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-hi",
                                    children: "A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 547,
                                    columnNumber: 13
                                }, this),
                                "libek",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-hi",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 547,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "nb-center",
                            children: NAV.map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    label: label,
                                    href: href,
                                    active: active === href,
                                    onClick: ()=>handleNav(href)
                                }, href, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 553,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 551,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nb-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nb-divider"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeToggle, {
                                    theme: theme,
                                    toggle: toggle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "https://github.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "GitHub",
                                    className: "icon-btn",
                                    whileHover: {
                                        scale: 1.08,
                                        y: -1
                                    },
                                    whileTap: {
                                        scale: 0.92
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 569,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "/resume.pdf",
                                    download: true,
                                    className: "resume-btn",
                                    whileHover: {
                                        scale: 1.03,
                                        y: -1
                                    },
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadIcon, {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 588,
                                            columnNumber: 15
                                        }, this),
                                        "Resume"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 581,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hamburger, {
                                    open: open,
                                    onClick: ()=>setOpen(!open)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 592,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 564,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Navbar.tsx",
                    lineNumber: 538,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 532,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mob-overlay",
                    initial: {
                        opacity: 0,
                        y: -14
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.28,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            children: NAV.map(({ label, href }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: `mob-link${active === href ? " mob-active" : ""}`,
                                    onClick: ()=>handleNav(href),
                                    initial: {
                                        opacity: 0,
                                        x: -24
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: i * 0.055,
                                        duration: 0.3,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    children: [
                                        label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mob-link-arrow",
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 618,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, href, true, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 609,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 607,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mob-foot",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "https://github.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "GitHub",
                                    className: "icon-btn",
                                    whileHover: {
                                        scale: 1.08
                                    },
                                    whileTap: {
                                        scale: 0.92
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 624,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "/resume.pdf",
                                    download: true,
                                    className: "resume-btn",
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadIcon, {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 627,
                                            columnNumber: 17
                                        }, this),
                                        " Resume"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 626,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 622,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Navbar.tsx",
                    lineNumber: 600,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 598,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(Navbar, "+VSZ7/QJUqC7Y4ySi1r6WHPEcGw=", false, function() {
    return [
        useTheme
    ];
});
_c7 = Navbar;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_refresh__.register(_c, "GitHubIcon");
__turbopack_refresh__.register(_c1, "DownloadIcon");
__turbopack_refresh__.register(_c2, "SunIcon");
__turbopack_refresh__.register(_c3, "MoonIcon");
__turbopack_refresh__.register(_c4, "NavLink");
__turbopack_refresh__.register(_c5, "ThemeToggle");
__turbopack_refresh__.register(_c6, "Hamburger");
__turbopack_refresh__.register(_c7, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature();
"use client";
;
;
// ─── Theme System ─────────────────────────────────────────────────────────────
function useTheme() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            const stored = localStorage.getItem("portfolio-theme");
            const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            const initial = stored ?? preferred;
            setTheme(initial);
            applyTheme(initial);
        }
    }["useTheme.useEffect"], []);
    function applyTheme(t) {
        document.documentElement.setAttribute("data-theme", t);
    }
    const toggle = ()=>{
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        applyTheme(next);
        localStorage.setItem("portfolio-theme", next);
    };
    return {
        theme,
        toggle
    };
}
_s(useTheme, "HKZhbbE1NL5O9VXEQueUHrvooII=");
// ─── Nav Links ────────────────────────────────────────────────────────────────
const NAV = [
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Resume",
        href: "#resume"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
// ─── SVG Icons ────────────────────────────────────────────────────────────────
const GitHubIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "18",
        height: "18",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, this);
_c = GitHubIcon;
const DownloadIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        width: "13",
        height: "13",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "7 10 12 15 17 10"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "15",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
_c1 = DownloadIcon;
const SunIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        width: "14",
        height: "14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "5"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "1",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "21",
                x2: "12",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 63,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "4.22",
                x2: "5.64",
                y2: "5.64"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "18.36",
                x2: "19.78",
                y2: "19.78"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "12",
                x2: "3",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 66,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "12",
                x2: "23",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "19.78",
                x2: "5.64",
                y2: "18.36"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "5.64",
                x2: "19.78",
                y2: "4.22"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
_c2 = SunIcon;
const MoonIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        width: "14",
        height: "14",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
_c3 = MoonIcon;
// ─── Scroll helper ────────────────────────────────────────────────────────────
function scrollTo(href) {
    document.querySelector(href)?.scrollIntoView({
        behavior: "smooth"
    });
}
// ─── NavLink ──────────────────────────────────────────────────────────────────
function NavLink({ label, href, active, onClick }) {
    _s1();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        className: `navlink${active ? " navlink-active" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "navlink-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "navlink-bar",
                animate: {
                    scaleX: hov || active ? 1 : 0,
                    opacity: hov || active ? 1 : 0
                },
                initial: false,
                transition: {
                    duration: 0.2,
                    ease: [
                        0.4,
                        0,
                        0.2,
                        1
                    ]
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "navlink-glow",
                layoutId: "navglow",
                transition: {
                    type: "spring",
                    stiffness: 360,
                    damping: 30
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s1(NavLink, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c4 = NavLink;
// ─── ThemeToggle ──────────────────────────────────────────────────────────────
function ThemeToggle({ theme, toggle }) {
    const dark = theme === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: toggle,
        "aria-label": "Toggle theme",
        className: "toggle-btn",
        whileTap: {
            scale: 0.88
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "toggle-track",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "toggle-thumb",
                    animate: {
                        x: dark ? 2 : 22
                    },
                    transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 36
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "t-icon t-icon-l",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 128,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "t-icon t-icon-r",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SunIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 129,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c5 = ThemeToggle;
// ─── Hamburger ────────────────────────────────────────────────────────────────
function Hamburger({ open, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        className: "ham-btn",
        onClick: onClick,
        whileTap: {
            scale: 0.88
        },
        "aria-label": "Menu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    rotate: open ? 45 : 0,
                    y: open ? 7 : 0
                },
                className: "ham-line"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    opacity: open ? 0 : 1
                },
                className: "ham-line"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    rotate: open ? -45 : 0,
                    y: open ? -7 : 0
                },
                className: "ham-line"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c6 = Hamburger;
// ─── Two-Phase Typing Sequence Hook ──────────────────────────────────────────
// Sequence: type TEXT1 → pause → erase → pause → type TEXT2 → stop
function useTypingSequence() {
    _s2();
    const TEXT1 = "Hi, I'm Alibek";
    const TEXT2 = "Hi, I'm Alibek Allaberganov";
    const PLAIN = "Hi, I'm "; // prefix rendered without gradient
    const TYPE_SPEED = 58; // ms per character typed
    const ERASE_SPEED = 30; // ms per character erased
    const PAUSE_AFTER_1 = 1100; // pause after TEXT1 completes
    const PAUSE_BEFORE_2 = 380; // pause before typing TEXT2
    const START_DELAY = 500;
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // 0=waiting  1=type1  2=pause1  3=erase  4=pause2  5=type2  6=done
    const lenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0); // tracks current length for erase
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTypingSequence.useEffect": ()=>{
            let t;
            let iv;
            if (phase === 0) {
                // Initial delay then start typing TEXT1
                t = setTimeout({
                    "useTypingSequence.useEffect": ()=>setPhase(1)
                }["useTypingSequence.useEffect"], START_DELAY);
            } else if (phase === 1) {
                // Type TEXT1 character by character
                lenRef.current = 0;
                iv = setInterval({
                    "useTypingSequence.useEffect": ()=>{
                        lenRef.current++;
                        setDisplayed(TEXT1.slice(0, lenRef.current));
                        if (lenRef.current >= TEXT1.length) {
                            clearInterval(iv);
                            setPhase(2);
                        }
                    }
                }["useTypingSequence.useEffect"], TYPE_SPEED);
            } else if (phase === 2) {
                // Pause after TEXT1
                t = setTimeout({
                    "useTypingSequence.useEffect": ()=>setPhase(3)
                }["useTypingSequence.useEffect"], PAUSE_AFTER_1);
            } else if (phase === 3) {
                // Erase TEXT1 backwards
                lenRef.current = TEXT1.length;
                iv = setInterval({
                    "useTypingSequence.useEffect": ()=>{
                        lenRef.current--;
                        setDisplayed(TEXT1.slice(0, lenRef.current));
                        if (lenRef.current <= 0) {
                            clearInterval(iv);
                            setDisplayed("");
                            setPhase(4);
                        }
                    }
                }["useTypingSequence.useEffect"], ERASE_SPEED);
            } else if (phase === 4) {
                // Pause before TEXT2
                t = setTimeout({
                    "useTypingSequence.useEffect": ()=>setPhase(5)
                }["useTypingSequence.useEffect"], PAUSE_BEFORE_2);
            } else if (phase === 5) {
                // Type TEXT2 character by character
                lenRef.current = 0;
                iv = setInterval({
                    "useTypingSequence.useEffect": ()=>{
                        lenRef.current++;
                        setDisplayed(TEXT2.slice(0, lenRef.current));
                        if (lenRef.current >= TEXT2.length) {
                            clearInterval(iv);
                            setPhase(6);
                        }
                    }
                }["useTypingSequence.useEffect"], TYPE_SPEED);
            }
            // phase 6 = done, no effect
            return ({
                "useTypingSequence.useEffect": ()=>{
                    clearTimeout(t);
                    clearInterval(iv);
                }
            })["useTypingSequence.useEffect"];
        }
    }["useTypingSequence.useEffect"], [
        phase
    ]);
    // Split into plain + gradient-name portions
    const plainLen = Math.min(displayed.length, PLAIN.length);
    const plainText = displayed.slice(0, plainLen);
    const nameText = displayed.length > PLAIN.length ? displayed.slice(PLAIN.length) : "";
    const done = phase === 6;
    const typing = phase === 1 || phase === 5;
    const erasing = phase === 3;
    return {
        plainText,
        nameText,
        done,
        typing,
        erasing
    };
}
_s2(useTypingSequence, "Sw8OtsApFvvLs5PZW501GfiO8xM=");
// ─── Hero Section Component ───────────────────────────────────────────────────
function HeroSection() {
    _s3();
    const { plainText, nameText, done, typing, erasing } = useTypingSequence();
    // Elements below the headline fade in only after TEXT2 finishes
    const afterDone = (delay)=>({
            initial: {
                opacity: 0,
                y: 10
            },
            animate: done ? {
                opacity: 1,
                y: 0
            } : {
                opacity: 0,
                y: 10
            },
            transition: {
                duration: 0.5,
                delay: done ? delay : 99,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            }
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-orb hero-orb-1"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-orb hero-orb-2"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-orb hero-orb-3"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-grid"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-vignette"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hero-badge",
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            "Available for work"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-typing-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "hero-typing",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "typing-plain",
                                    children: plainText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                nameText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "typing-name",
                                    children: nameText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 270,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `hero-cursor${typing || erasing ? " hero-cursor--active" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "hero-subtitle",
                        ...afterDone(0.1),
                        children: [
                            "Frontend Developer",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "subtitle-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            "AI Enthusiast"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "hero-desc",
                        ...afterDone(0.25),
                        children: "I build modern websites, mobile applications, and AI-powered products using modern web technologies."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hero-btns",
                        ...afterDone(0.4),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "hbtn hbtn-primary",
                            onClick: ()=>document.querySelector("#projects")?.scrollIntoView({
                                    behavior: "smooth"
                                }),
                            whileTap: {
                                scale: 0.96
                            },
                            children: [
                                "View Projects",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hbtn-arrow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "15",
                                        height: "15",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "5",
                                                y1: "12",
                                                x2: "19",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "12 5 19 12 12 19"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hero-stats",
                        ...afterDone(0.55),
                        children: [
                            {
                                num: "3",
                                suf: "+",
                                lbl: "Years Exp."
                            },
                            {
                                num: "20",
                                suf: "+",
                                lbl: "Projects Built"
                            },
                            {
                                num: "10",
                                suf: "+",
                                lbl: "Technologies"
                            },
                            {
                                num: "∞",
                                suf: "",
                                lbl: "Coffee Cups"
                            }
                        ].map(({ num, suf, lbl })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-num",
                                        children: [
                                            num,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "stat-num-accent",
                                                children: suf
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 314,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-lbl",
                                        children: lbl
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, lbl, true, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "hero-scroll",
                initial: {
                    opacity: 0
                },
                animate: done ? {
                    opacity: 1
                } : {
                    opacity: 0
                },
                transition: {
                    duration: 0.7,
                    delay: done ? 0.9 : 99
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "scroll-lbl",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scroll-mouse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scroll-wheel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 329,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_s3(HeroSection, "sghazPR068TXg1AEdpBzsd78bo8=", false, function() {
    return [
        useTypingSequence
    ];
});
_c7 = HeroSection;
function Navbar() {
    _s4();
    const { theme, toggle } = useTheme();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    setScrolled(window.scrollY > 30);
                    const y = window.scrollY + 140;
                    for(let i = NAV.length - 1; i >= 0; i--){
                        const el = document.querySelector(NAV[i].href);
                        if (el && el.offsetTop <= y) {
                            setActive(NAV[i].href);
                            return;
                        }
                    }
                    setActive("");
                }
            }["Navbar.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const close = {
                "Navbar.useEffect.close": ()=>{
                    if (window.innerWidth >= 900) setOpen(false);
                }
            }["Navbar.useEffect.close"];
            window.addEventListener("resize", close);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("resize", close)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleNav = (href)=>{
        setOpen(false);
        scrollTo(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        /* ── CSS Tokens ── */
        :root[data-theme="dark"] {
          --bg:            #07070f;
          --glass:         rgba(11,11,22,0.72);
          --glass-border:  rgba(255,255,255,0.065);
          --glass-shadow:  0 8px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.04);
          --text:          #eaeaf5;
          --text-dim:      rgba(190,190,225,0.45);
          --text-nav:      rgba(195,195,228,0.68);
          --accent:        #6e84fe;
          --accent2:       #a78bfa;
          --glow:          rgba(110,132,254,0.22);
          --glow2:         rgba(110,132,254,0.10);
          --pill-bg:       rgba(255,255,255,0.052);
          --pill-border:   rgba(255,255,255,0.085);
          --pill-hover:    rgba(255,255,255,0.095);
          --resume-bg:     linear-gradient(135deg,#6e84fe 0%,#a78bfa 100%);
          --resume-shadow: 0 4px 22px rgba(110,132,254,0.38);
          --tog-track:     rgba(255,255,255,0.07);
          --tog-border:    rgba(255,255,255,0.10);
          --tog-thumb:     #6e84fe;
          --divider:       rgba(255,255,255,0.07);
          --mob-bg:        rgba(7,7,15,0.97);
          --mob-hover:     rgba(110,132,254,0.07);
        }
        :root[data-theme="light"] {
          --bg:            #f2f2f8;
          --glass:         rgba(255,255,255,0.82);
          --glass-border:  rgba(0,0,0,0.065);
          --glass-shadow:  0 8px 40px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,0.9);
          --text:          #0e0e1c;
          --text-dim:      rgba(35,35,75,0.40);
          --text-nav:      rgba(30,30,68,0.68);
          --accent:        #4e6bf5;
          --accent2:       #7c3aed;
          --glow:          rgba(78,107,245,0.16);
          --glow2:         rgba(78,107,245,0.08);
          --pill-bg:       rgba(0,0,0,0.042);
          --pill-border:   rgba(0,0,0,0.068);
          --pill-hover:    rgba(0,0,0,0.08);
          --resume-bg:     linear-gradient(135deg,#4e6bf5 0%,#7c3aed 100%);
          --resume-shadow: 0 4px 22px rgba(78,107,245,0.30);
          --tog-track:     rgba(0,0,0,0.058);
          --tog-border:    rgba(0,0,0,0.08);
          --tog-thumb:     #4e6bf5;
          --divider:       rgba(0,0,0,0.068);
          --mob-bg:        rgba(245,245,252,0.98);
          --mob-hover:     rgba(78,107,245,0.07);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          transition: background 0.45s ease, color 0.45s ease;
        }

        /* ── Outer wrapper ── */
        .nb-wrap {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 300;
          pointer-events: none;
          padding: 14px 20px;
          transition: padding 0.38s cubic-bezier(.4,0,.2,1);
        }
        .nb-wrap.nb-scrolled { padding: 7px 20px; }

        /* ── Glass pill ── */
        .nb-pill {
          pointer-events: all;
          max-width: 1200px;
          margin: 0 auto;
          height: 70px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 20px;
          background: transparent;
          transition: background 0.42s, border 0.42s, box-shadow 0.42s, height 0.38s cubic-bezier(.4,0,.2,1), border-radius 0.38s;
        }
        .nb-wrap.nb-scrolled .nb-pill {
          background: var(--glass);
          backdrop-filter: blur(22px) saturate(1.8);
          -webkit-backdrop-filter: blur(22px) saturate(1.8);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          height: 62px;
          border-radius: 16px;
        }

        /* ── Logo ── */
        .logo {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.055em;
          color: var(--text);
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          display: flex;
          align-items: baseline;
          transition: opacity 0.2s;
          padding: 0;
          line-height: 1;
        }
        .logo:hover { opacity: 0.82; }
        .logo-hi {
          background: linear-gradient(130deg, var(--accent), var(--accent2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Center nav ── */
        .nb-center {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;
        }
        @media (max-width: 900px) { .nb-center { display: none; } }

        /* ── Nav link ── */
        .navlink {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 9px 18px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: background 0.2s;
        }
        .navlink:hover { background: var(--pill-bg); }
        .navlink-label {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: 0.015em;
          color: var(--text-nav);
          transition: color 0.22s;
        }
        .navlink:hover .navlink-label,
        .navlink-active .navlink-label { color: var(--text); }
        .navlink-active .navlink-label { color: var(--accent) !important; }

        .navlink-bar {
          display: block;
          height: 2px;
          width: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform-origin: center;
        }
        .navlink-glow {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: var(--glow2);
          z-index: -1;
        }

        /* ── Divider ── */
        .nb-divider {
          width: 1px;
          height: 20px;
          background: var(--divider);
          flex-shrink: 0;
          margin: 0 4px;
        }
        @media (max-width: 900px) { .nb-divider { display: none; } }

        /* ── Right side ── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        /* ── Icon button ── */
        .icon-btn {
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 11px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-nav);
          text-decoration: none;
          transition: background 0.22s, color 0.22s, box-shadow 0.22s;
        }
        .icon-btn:hover {
          background: var(--pill-hover);
          color: var(--text);
          box-shadow: 0 0 0 3px var(--glow);
        }

        /* ── Resume btn ── */
        .resume-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          height: 42px;
          padding: 0 20px;
          border-radius: 12px;
          background: var(--resume-bg);
          color: #fff;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          white-space: nowrap;
          box-shadow: var(--resume-shadow);
          cursor: pointer;
          border: none;
          transition: filter 0.22s, box-shadow 0.22s, transform 0.18s;
        }
        .resume-btn:hover {
          filter: brightness(1.1);
          box-shadow: 0 6px 28px rgba(110,132,254,0.45);
        }

        /* ── Toggle ── */
        .toggle-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .toggle-track {
          position: relative;
          display: flex;
          align-items: center;
          width: 58px;
          height: 30px;
          border-radius: 99px;
          background: var(--tog-track);
          border: 1px solid var(--tog-border);
          transition: background 0.3s, border-color 0.3s;
          overflow: hidden;
        }
        .toggle-track:hover { box-shadow: 0 0 0 3px var(--glow); }
        .toggle-thumb {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--tog-thumb);
          top: 2px;
          box-shadow: 0 2px 8px rgba(110,132,254,0.45);
          z-index: 2;
        }
        .t-icon {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.88);
          pointer-events: none;
        }
        .t-icon-l { left: 7px; }
        .t-icon-r { right: 6px; }

        /* ── Hamburger ── */
        .ham-btn {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 11px;
          width: 42px;
          height: 42px;
          cursor: pointer;
          padding: 0;
        }
        @media (max-width: 900px) { .ham-btn { display: flex; } }
        .ham-line {
          display: block;
          width: 18px;
          height: 1.8px;
          border-radius: 2px;
          background: var(--text);
          transform-origin: center;
        }

        /* ── Mobile overlay ── */
        .mob-overlay {
          position: fixed;
          inset: 0;
          z-index: 280;
          background: var(--mob-bg);
          backdrop-filter: blur(30px) saturate(1.5);
          -webkit-backdrop-filter: blur(30px) saturate(1.5);
          display: flex;
          flex-direction: column;
          padding: 96px 28px 40px;
        }
        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          border-bottom: 1px solid var(--divider);
          padding: 18px 10px;
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text-dim);
          transition: color 0.2s, background 0.2s;
          border-radius: 10px;
          text-align: left;
          width: 100%;
        }
        .mob-link:hover { color: var(--text); background: var(--mob-hover); }
        .mob-link.mob-active { color: var(--accent); }
        .mob-link-arrow { font-size: 1rem; opacity: 0.3; font-weight: 400; font-family: 'Outfit', sans-serif; }
        .mob-foot {
          margin-top: auto;
          display: flex;
          gap: 10px;
          padding-top: 28px;
        }
        .mob-foot .resume-btn { flex: 1; justify-content: center; }

        /* ══════════════════════════════════════════
           HERO SECTION
        ══════════════════════════════════════════ */

        /* Space Grotesk from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--bg);
          padding: 0 24px;
          transition: background 0.45s;
        }

        /* ── Orbs ── */
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(96px); pointer-events: none; will-change: transform;
        }
        .hero-orb-1 {
          width: 480px; height: 480px; top: -60px; left: -80px;
          background: radial-gradient(circle, var(--orb1) 0%, transparent 70%);
          animation: orbFloat1 16s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 540px; height: 540px; bottom: -100px; right: -100px;
          background: radial-gradient(circle, var(--orb2) 0%, transparent 70%);
          animation: orbFloat2 20s ease-in-out infinite;
        }
        /* Center glow — subtle halo behind text */
        .hero-orb-3 {
          width: 600px; height: 400px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(ellipse, var(--orb3) 0%, transparent 65%);
          animation: orbPulse 12s ease-in-out infinite;
        }
        :root[data-theme="dark"]  {
          --orb1: rgba(110,132,254,0.13); --orb2: rgba(167,139,250,0.10);
          --orb3: rgba(110,132,254,0.055);
        }
        :root[data-theme="light"] {
          --orb1: rgba(78,107,245,0.09);  --orb2: rgba(124,58,237,0.08);
          --orb3: rgba(78,107,245,0.05);
        }
        @keyframes orbFloat1 { 0%,100%{transform:translate(0,0)} 40%{transform:translate(35px,25px)} 70%{transform:translate(-15px,40px)} }
        @keyframes orbFloat2 { 0%,100%{transform:translate(0,0)} 35%{transform:translate(-40px,-25px)} 65%{transform:translate(18px,-40px)} }
        @keyframes orbPulse  { 0%,100%{opacity:.5;transform:translate(-50%,-50%) scale(1)} 50%{opacity:.85;transform:translate(-50%,-50%) scale(1.15)} }

        /* Dot grid */
        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle at 1px 1px, var(--grid-dot) 1px, transparent 0);
          background-size: 40px 40px;
        }
        :root[data-theme="dark"]  { --grid-dot: rgba(255,255,255,0.022); }
        :root[data-theme="light"] { --grid-dot: rgba(0,0,0,0.038); }

        /* Vignette */
        .hero-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 75% 65% at 50% 50%, transparent 35%, var(--bg) 100%);
          transition: background 0.45s;
        }

        /* ── Content ── */
        .hero-content {
          position: relative; z-index: 10;
          max-width: 780px; width: 100%;
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
          padding-top: 88px;
          gap: 0;
        }

        /* ── Availability badge ── */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 16px 7px 14px;
          border-radius: 99px;
          border: 1px solid var(--pill-border);
          background: var(--pill-bg);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem; font-weight: 500; letter-spacing: 0.04em;
          color: var(--text-nav); margin-bottom: 44px;
          backdrop-filter: blur(10px); user-select: none;
          transition: border-color 0.22s, background 0.22s;
        }
        .hero-badge:hover { border-color: rgba(34,197,94,0.4); }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #22c55e; flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.18);
          animation: dotPing 2.6s ease-in-out infinite;
        }
        @keyframes dotPing {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.18); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0.05); }
        }

        /* ── Typing headline ── */
        .hero-typing-wrap {
          margin-bottom: 28px;
          min-height: 3.2em;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-typing {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 5.5vw, 3.6rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: var(--text);
          display: inline;
        }
        /* Plain prefix — solid text color */
        .typing-plain { color: var(--text); }
        /* Name part — animated gradient */
        .typing-name {
          background: linear-gradient(130deg, var(--accent) 0%, var(--accent2) 60%, var(--accent) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 7s linear infinite;
        }
        @keyframes gradShift { 0%{background-position:0% center} 100%{background-position:200% center} }

        /* Cursor — solid block, blinks when idle, solid when typing/erasing */
        .hero-cursor {
          display: inline-block;
          width: 2px;
          height: 0.88em;
          background: var(--accent);
          margin-left: 4px;
          vertical-align: text-bottom;
          border-radius: 1px;
          animation: cursorBlink 1.1s step-end infinite;
        }
        /* When actively typing/erasing: cursor stays solid (no blink) */
        .hero-cursor--active {
          animation: none;
          opacity: 1;
        }
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ── Subtitle ── */
        .hero-subtitle {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(0.95rem, 2.2vw, 1.15rem);
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--text-nav);
          margin-bottom: 20px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .subtitle-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: var(--accent); opacity: 0.5; flex-shrink: 0;
        }

        /* ── Description ── */
        .hero-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(0.95rem, 1.9vw, 1.08rem);
          font-weight: 400;
          line-height: 1.8;
          color: var(--text-nav);
          max-width: 500px;
          margin: 0 auto;
          letter-spacing: 0.005em;
          opacity: 0.85;
        }

        /* ── Single primary button ── */
        .hero-btns {
          margin-top: 44px;
        }
        .hbtn {
          display: inline-flex; align-items: center; gap: 9px;
          border: none; cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem; font-weight: 600; letter-spacing: 0.01em;
          border-radius: 14px; padding: 0 32px; height: 52px;
          text-decoration: none; white-space: nowrap;
          transition: transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s, filter 0.22s;
        }
        .hbtn:active { transform: translateY(0) scale(0.97) !important; }
        .hbtn-primary {
          background: var(--resume-bg); color: #fff; box-shadow: var(--resume-shadow);
        }
        .hbtn-primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 12px 36px rgba(110,132,254,0.40);
        }
        .hbtn-arrow { display: flex; align-items: center; transition: transform 0.2s; }
        .hbtn-primary:hover .hbtn-arrow { transform: translateX(4px); }

        /* ── Stats strip ── */
        .hero-stats {
          display: flex; align-items: stretch;
          margin-top: 52px;
          border: 1px solid var(--pill-border);
          border-radius: 18px;
          background: var(--pill-bg);
          backdrop-filter: blur(12px);
          overflow: hidden;
        }
        .stat-item {
          display: flex; flex-direction: column; align-items: center;
          padding: 20px 38px; gap: 4px;
          border-right: 1px solid var(--divider);
          transition: background 0.2s;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: var(--mob-hover); }
        .stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.55rem; font-weight: 700;
          letter-spacing: -0.04em; color: var(--text); line-height: 1;
        }
        .stat-num-accent { color: var(--accent); }
        .stat-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--text-dim); white-space: nowrap;
        }

        /* ── Scroll indicator ── */
        .hero-scroll {
          position: absolute; bottom: 34px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          z-index: 10;
        }
        .scroll-lbl {
          font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-dim); opacity: 0.35;
        }
        .scroll-mouse {
          width: 20px; height: 33px; border-radius: 10px;
          border: 1.5px solid var(--divider);
          display: flex; align-items: flex-start; justify-content: center; padding-top: 5px;
        }
        .scroll-wheel {
          width: 2.5px; height: 6px; border-radius: 2px;
          background: var(--accent); opacity: 0.5;
          animation: scrollAnim 2.2s ease-in-out infinite;
        }
        @keyframes scrollAnim { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(8px);opacity:.1} }

        @media (max-width: 600px) {
          .hero-content { padding-top: 100px; }
          .hero-typing-wrap { min-height: 2.8em; }
          .hbtn { height: 48px; padding: 0 26px; font-size: 0.95rem; }
          .hero-stats { flex-wrap: wrap; border-radius: 14px; }
          .stat-item { width: 50%; padding: 16px 20px; border-right: none; border-bottom: 1px solid var(--divider); }
          .stat-item:nth-child(odd) { border-right: 1px solid var(--divider); }
          .stat-item:last-child { border-bottom: none; width: 100%; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `nb-wrap${scrolled ? " nb-scrolled" : ""}`,
                initial: {
                    y: -96,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.62,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nb-pill",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "logo",
                            onClick: ()=>window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                }),
                            whileHover: {
                                scale: 1.04
                            },
                            whileTap: {
                                scale: 0.96
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-hi",
                                    children: "A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1004,
                                    columnNumber: 13
                                }, this),
                                "libek",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-hi",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1004,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 998,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "nb-center",
                            children: NAV.map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    label: label,
                                    href: href,
                                    active: active === href,
                                    onClick: ()=>handleNav(href)
                                }, href, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1010,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 1008,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nb-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nb-divider"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1022,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeToggle, {
                                    theme: theme,
                                    toggle: toggle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1024,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "https://github.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "GitHub",
                                    className: "icon-btn",
                                    whileHover: {
                                        scale: 1.08,
                                        y: -1
                                    },
                                    whileTap: {
                                        scale: 0.92
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 1035,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "/resume.pdf",
                                    download: true,
                                    className: "resume-btn",
                                    whileHover: {
                                        scale: 1.03,
                                        y: -1
                                    },
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadIcon, {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 1045,
                                            columnNumber: 15
                                        }, this),
                                        "Resume"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1038,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hamburger, {
                                    open: open,
                                    onClick: ()=>setOpen(!open)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 1021,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 995,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 989,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mob-overlay",
                    initial: {
                        opacity: 0,
                        y: -14
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.28,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            children: NAV.map(({ label, href }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: `mob-link${active === href ? " mob-active" : ""}`,
                                    onClick: ()=>handleNav(href),
                                    initial: {
                                        opacity: 0,
                                        x: -24
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: i * 0.055,
                                        duration: 0.3,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    children: [
                                        label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mob-link-arrow",
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 1075,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, href, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1066,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 1064,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mob-foot",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "https://github.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "GitHub",
                                    className: "icon-btn",
                                    whileHover: {
                                        scale: 1.08
                                    },
                                    whileTap: {
                                        scale: 0.92
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 1081,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1080,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "/resume.pdf",
                                    download: true,
                                    className: "resume-btn",
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadIcon, {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 1084,
                                            columnNumber: 17
                                        }, this),
                                        " Resume"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 1083,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 1079,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 1057,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 1055,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 1094,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(Navbar, "+VSZ7/QJUqC7Y4ySi1r6WHPEcGw=", false, function() {
    return [
        useTheme
    ];
});
_c8 = Navbar;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_refresh__.register(_c, "GitHubIcon");
__turbopack_refresh__.register(_c1, "DownloadIcon");
__turbopack_refresh__.register(_c2, "SunIcon");
__turbopack_refresh__.register(_c3, "MoonIcon");
__turbopack_refresh__.register(_c4, "NavLink");
__turbopack_refresh__.register(_c5, "ThemeToggle");
__turbopack_refresh__.register(_c6, "Hamburger");
__turbopack_refresh__.register(_c7, "HeroSection");
__turbopack_refresh__.register(_c8, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/About.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>About)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature();
;
;
// ─── SPRING / VARIANTS ────────────────────────────────────────
const spring = {
    type: 'spring',
    stiffness: 52,
    damping: 15
};
const fadeUp = (d = 0)=>({
        initial: {
            opacity: 0,
            y: 36
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            ...spring,
            delay: d
        }
    });
const fadeLeft = (d = 0)=>({
        initial: {
            opacity: 0,
            x: -40
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            ...spring,
            delay: d
        }
    });
const fadeRight = (d = 0)=>({
        initial: {
            opacity: 0,
            x: 40
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            ...spring,
            delay: d
        }
    });
// ─── TOKENS ───────────────────────────────────────────────────
const DARK = {
    bg: '#07090F',
    shell: 'rgba(255,255,255,0.035)',
    shellBrd: 'rgba(255,255,255,0.075)',
    divider: 'rgba(255,255,255,0.07)',
    accent: '#7C87F5',
    accentGrad: 'linear-gradient(135deg,#7C87F5 0%,#A78BFA 100%)',
    accentGlow: 'rgba(124,135,245,0.20)',
    accentRing: 'rgba(124,135,245,0.32)',
    text: '#EEF2FF',
    textSec: '#7A85A0',
    textMuted: '#3E4560',
    statNum: '#FFFFFF',
    pillBg: 'rgba(255,255,255,0.05)',
    pillBrd: 'rgba(255,255,255,0.09)',
    stepLine: 'rgba(255,255,255,0.08)',
    blob1: '#0B1730',
    blob2: '#12082E'
};
const LIGHT = {
    bg: '#F2F4FB',
    shell: 'rgba(255,255,255,0.78)',
    shellBrd: 'rgba(255,255,255,1.00)',
    divider: 'rgba(0,0,0,0.07)',
    accent: '#4F46E5',
    accentGrad: 'linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)',
    accentGlow: 'rgba(79,70,229,0.14)',
    accentRing: 'rgba(79,70,229,0.28)',
    text: '#0D111E',
    textSec: '#4B5563',
    textMuted: '#9CA3AF',
    statNum: '#0D111E',
    pillBg: 'rgba(255,255,255,0.85)',
    pillBrd: 'rgba(0,0,0,0.08)',
    stepLine: 'rgba(0,0,0,0.07)',
    blob1: '#C7D2FE',
    blob2: '#DDD6FE'
};
// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c, dark }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 900,
                    height: 900,
                    borderRadius: '50%',
                    background: c.blob1,
                    filter: 'blur(170px)',
                    opacity: dark ? 0.55 : 0.55,
                    top: '-30%',
                    left: '-20%',
                    animation: 'b1 24s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 74,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 700,
                    height: 700,
                    borderRadius: '50%',
                    background: c.blob2,
                    filter: 'blur(140px)',
                    opacity: dark ? 0.4 : 0.45,
                    bottom: '-20%',
                    right: '-15%',
                    animation: 'b2 30s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 88,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes b1{0%,100%{transform:translate(0,0)}50%{transform:translate(55px,45px)}}
        @keyframes b2{0%,100%{transform:translate(0,0)}50%{transform:translate(-45px,-38px)}}
        *{box-sizing:border-box;margin:0;padding:0}
      `
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 102,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, this);
}
_c = Blobs;
// ─── TOGGLE ───────────────────────────────────────────────────
function Toggle({ dark, c, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: onToggle,
        whileHover: {
            scale: 1.04
        },
        whileTap: {
            scale: 0.96
        },
        style: {
            position: 'fixed',
            top: 24,
            right: 24,
            zIndex: 300,
            background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.08)'}`,
            borderRadius: 50,
            padding: '9px 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: c.text,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.05em',
            boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.08)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 15
                },
                children: dark ? '🌙' : '☀️'
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 141,
                columnNumber: 4
            }, this),
            dark ? 'Dark' : 'Light'
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 114,
        columnNumber: 3
    }, this);
}
_c1 = Toggle;
// ─── STAT CELL ────────────────────────────────────────────────
function Stat({ value, label, c, delay }) {
    _s();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...fadeUp(delay),
        onHoverStart: ()=>setHov(true),
        onHoverEnd: ()=>setHov(false),
        style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            padding: '20px 18px',
            borderRadius: 16,
            background: hov ? `${c.accent}18` : 'rgba(255,255,255,0.03)',
            border: `1px solid ${hov ? c.accentRing : c.divider}`,
            transition: 'all 0.26s ease',
            cursor: 'default'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                    background: c.accentGrad,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 168,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 10,
                    color: c.textMuted,
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 181,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 151,
        columnNumber: 3
    }, this);
}
_s(Stat, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c2 = Stat;
// ─── EXPERIENCE STEPPER (compact vertical) ────────────────────
function ExpStepper({ items, c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 0
        },
        children: items.map((x, i)=>{
            const last = i === items.length - 1;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeRight(0.52 + i * 0.08),
                style: {
                    display: 'flex',
                    gap: 14,
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 20,
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    marginTop: 3,
                                    flexShrink: 0,
                                    background: x.current ? c.accent : c.textMuted,
                                    boxShadow: x.current ? `0 0 0 3px ${c.accentGlow}` : 'none',
                                    transition: 'all 0.3s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 218,
                                columnNumber: 8
                            }, this),
                            !last && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    width: 1,
                                    background: c.stepLine,
                                    marginTop: 4,
                                    minHeight: 28
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 231,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 209,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingBottom: last ? 0 : 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: c.text,
                                            letterSpacing: '-0.01em'
                                        },
                                        children: x.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 252,
                                        columnNumber: 9
                                    }, this),
                                    x.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 9,
                                            fontWeight: 800,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            background: `${c.accent}18`,
                                            color: c.accent,
                                            borderRadius: 100,
                                            padding: '2px 8px',
                                            border: `1px solid ${c.accent}35`
                                        },
                                        children: "Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 263,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 244,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: c.textMuted,
                                    marginTop: 2
                                },
                                children: [
                                    x.place,
                                    " · ",
                                    x.period
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 280,
                                columnNumber: 8
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 243,
                        columnNumber: 7
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 203,
                columnNumber: 6
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 199,
        columnNumber: 3
    }, this);
}
_c3 = ExpStepper;
// ─── INTEREST PILLS ───────────────────────────────────────────
const INTERESTS = [
    {
        icon: '🎮',
        label: 'Gaming'
    },
    {
        icon: '📚',
        label: 'Reading'
    },
    {
        icon: '🎵',
        label: 'Music'
    },
    {
        icon: '✈️',
        label: 'Travel'
    },
    {
        icon: '☕',
        label: 'Coffee'
    },
    {
        icon: '🤖',
        label: 'AI / ML'
    },
    {
        icon: '🎨',
        label: 'Design'
    },
    {
        icon: '🧩',
        label: 'Puzzles'
    }
];
function Pill({ icon, label, c, delay }) {
    _s1();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...fadeUp(delay),
        onHoverStart: ()=>setHov(true),
        onHoverEnd: ()=>setHov(false),
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: hov ? `${c.accent}18` : c.pillBg,
            border: `1px solid ${hov ? c.accentRing : c.pillBrd}`,
            borderRadius: 100,
            padding: '8px 16px',
            boxShadow: hov ? `0 0 18px ${c.accentGlow}` : 'none',
            transform: hov ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.26s cubic-bezier(.34,1.3,.64,1)',
            cursor: 'default',
            userSelect: 'none',
            whiteSpace: 'nowrap'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 16
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 326,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 13,
                    fontWeight: 600,
                    color: hov ? c.accent : c.textSec,
                    transition: 'color 0.2s',
                    letterSpacing: '0.02em'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 327,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 306,
        columnNumber: 3
    }, this);
}
_s1(Pill, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c4 = Pill;
// ─── PHOTO ────────────────────────────────────────────────────
function Photo({ c }) {
    _s2();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...fadeLeft(0.08),
        onHoverStart: ()=>setHov(true),
        onHoverEnd: ()=>setHov(false),
        style: {
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            minHeight: 520,
            cursor: 'default',
            border: `1px solid ${hov ? c.accentRing : 'rgba(255,255,255,0.08)'}`,
            boxShadow: hov ? `0 32px 80px rgba(0,0,0,0.45),0 0 0 1px ${c.accent}28` : '0 20px 60px rgba(0,0,0,0.30)',
            transition: 'all 0.5s cubic-bezier(.34,1.1,.64,1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85",
                alt: "Alibek",
                style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transform: hov ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(.34,1.1,.64,1)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 366,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background: 'linear-gradient(to top,rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.10) 40%,transparent 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 379,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(0,0,0,0.48)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 100,
                    padding: '5px 13px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 6,
                            height: 6,
                            background: '#4ADE80',
                            borderRadius: '50%',
                            display: 'inline-block',
                            boxShadow: '0 0 7px #4ADE80',
                            animation: 'pulse 2s ease-in-out infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 404,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#4ADE80',
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.06em'
                        },
                        children: "Available"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 415,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 389,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    pointerEvents: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 16,
                            fontWeight: 800,
                            color: '#fff',
                            letterSpacing: '-0.02em',
                            textShadow: '0 2px 12px rgba(0,0,0,0.5)'
                        },
                        children: "Alibek Allaberganov"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 435,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: 'rgba(255,255,255,0.55)',
                            marginTop: 3,
                            letterSpacing: '0.04em'
                        },
                        children: "Frontend Developer · Khorezm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 446,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 427,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.45}}`
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 457,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 346,
        columnNumber: 3
    }, this);
}
_s2(Photo, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c5 = Photo;
function About() {
    _s3();
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const c = dark ? DARK : LIGHT;
    const exp = [
        {
            period: '2024 – Present',
            role: 'Frontend Developer',
            place: 'Freelance',
            current: true
        },
        {
            period: '2023',
            role: 'React Native Developer',
            place: 'Side Projects',
            current: false
        },
        {
            period: '2022',
            role: 'Web Developer',
            place: 'Self-taught',
            current: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: c.bg,
            fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
            transition: 'background 0.7s ease',
            position: 'relative',
            overflowX: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Blobs, {
                c: c,
                dark: dark
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 499,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                dark: dark,
                c: c,
                onToggle: ()=>setDark((v)=>!v)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 500,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1180,
                    margin: '0 auto',
                    padding: '80px 32px',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fadeUp(0),
                        style: {
                            marginBottom: 44
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                background: `${c.accent}14`,
                                border: `1px solid ${c.accent}30`,
                                borderRadius: 100,
                                padding: '5px 18px',
                                fontSize: 10,
                                fontWeight: 800,
                                color: c.accent,
                                letterSpacing: '0.22em',
                                textTransform: 'uppercase'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 5,
                                        height: 5,
                                        background: c.accent,
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/About.tsx",
                                    lineNumber: 529,
                                    columnNumber: 7
                                }, this),
                                "About Me"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/About.tsx",
                            lineNumber: 513,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 512,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fadeUp(0.06),
                        style: {
                            background: c.shell,
                            backdropFilter: 'blur(32px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                            border: `1px solid ${c.shellBrd}`,
                            borderRadius: 28,
                            overflow: 'hidden',
                            /* subtle top-edge shimmer */ boxShadow: dark ? '0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)' : '0 12px 48px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,0.9)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '2fr 3fr',
                                    minHeight: 380
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: 20,
                                            borderRight: `1px solid ${c.divider}`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                            c: c
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 568,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 567,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '44px 44px 36px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                                        ...fadeRight(0.16),
                                                        style: {
                                                            fontSize: 'clamp(2.6rem,4.5vw,4rem)',
                                                            fontWeight: 900,
                                                            letterSpacing: '-0.045em',
                                                            lineHeight: 1.06,
                                                            margin: 0,
                                                            marginBottom: 10,
                                                            background: `linear-gradient(128deg,${c.text} 0%,${c.accent} 160%)`,
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent'
                                                        },
                                                        children: "Hi, I'm Alibek."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                        ...fadeRight(0.22),
                                                        style: {
                                                            fontSize: 13,
                                                            color: c.textMuted,
                                                            letterSpacing: '0.05em',
                                                            margin: 0,
                                                            marginBottom: 28,
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "Frontend Developer · Khorezm, Uzbekistan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                        ...fadeRight(0.28),
                                                        style: {
                                                            fontSize: 16,
                                                            lineHeight: 1.88,
                                                            color: c.text,
                                                            margin: 0,
                                                            marginBottom: 12
                                                        },
                                                        children: [
                                                            "I'm a",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: c.accent,
                                                                    fontWeight: 700
                                                                },
                                                                children: "passionate frontend developer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/About.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 10
                                                            }, this),
                                                            ' ',
                                                            "who loves turning ideas into polished digital experiences — clean code, thoughtful UX, and modern JS frameworks."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                        ...fadeRight(0.34),
                                                        style: {
                                                            fontSize: 15,
                                                            lineHeight: 1.82,
                                                            color: c.textSec,
                                                            margin: 0
                                                        },
                                                        children: [
                                                            "Deeply into",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: c.accent,
                                                                    fontWeight: 600
                                                                },
                                                                children: "AI-powered interfaces"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/About.tsx",
                                                                lineNumber: 642,
                                                                columnNumber: 10
                                                            }, this),
                                                            ' ',
                                                            "and building products that feel natural and delightful."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 581,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    ...fadeUp(0.38),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: 1,
                                                                background: c.divider,
                                                                margin: '32px 0 24px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/About.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 10,
                                                                color: c.textMuted,
                                                                fontWeight: 800,
                                                                letterSpacing: '0.18em',
                                                                textTransform: 'uppercase',
                                                                marginBottom: 16
                                                            },
                                                            children: "At a Glance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/About.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                gap: 12
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                                    value: "3+",
                                                                    label: "Years Exp",
                                                                    c: c,
                                                                    delay: 0.42
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/About.tsx",
                                                                    lineNumber: 672,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                                    value: "20+",
                                                                    label: "Projects",
                                                                    c: c,
                                                                    delay: 0.47
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/About.tsx",
                                                                    lineNumber: 673,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                                    value: "8+",
                                                                    label: "Tech Stack",
                                                                    c: c,
                                                                    delay: 0.52
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/About.tsx",
                                                                    lineNumber: 674,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/About.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/About.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 9
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 650,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 572,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 559,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 1,
                                    background: c.divider
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 682,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '36px 44px',
                                            borderRight: `1px solid ${c.divider}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                ...fadeUp(0.46),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: c.textMuted,
                                                            fontWeight: 800,
                                                            letterSpacing: '0.18em',
                                                            textTransform: 'uppercase',
                                                            marginBottom: 24
                                                        },
                                                        children: "Experience"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpStepper, {
                                                        items: exp,
                                                        c: c
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 706,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 693,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                ...fadeUp(0.72),
                                                style: {
                                                    display: 'flex',
                                                    gap: 12,
                                                    flexWrap: 'wrap',
                                                    marginTop: 32
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#projects",
                                                        style: {
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: 8,
                                                            background: c.accentGrad,
                                                            color: '#fff',
                                                            fontWeight: 700,
                                                            fontSize: 14,
                                                            padding: '13px 26px',
                                                            borderRadius: 14,
                                                            textDecoration: 'none',
                                                            boxShadow: `0 8px 28px ${c.accentGlow}`,
                                                            transition: 'opacity 0.2s,transform 0.2s'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.opacity = '0.85';
                                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.opacity = '1';
                                                            e.currentTarget.style.transform = 'translateY(0)';
                                                        },
                                                        children: "View Projects →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/resume.pdf",
                                                        style: {
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: 8,
                                                            background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)',
                                                            border: `1px solid ${dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)'}`,
                                                            backdropFilter: 'blur(14px)',
                                                            color: c.text,
                                                            fontWeight: 600,
                                                            fontSize: 14,
                                                            padding: '12px 22px',
                                                            borderRadius: 14,
                                                            textDecoration: 'none',
                                                            transition: 'all 0.22s ease'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.background = `${c.accent}18`;
                                                            e.currentTarget.style.borderColor = `${c.accent}50`;
                                                            e.currentTarget.style.color = c.accent;
                                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)';
                                                            e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)';
                                                            e.currentTarget.style.color = c.text;
                                                            e.currentTarget.style.transform = 'translateY(0)';
                                                        },
                                                        children: "⬇ Resume"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 746,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 710,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 687,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '36px 44px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            ...fadeUp(0.5),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: c.textMuted,
                                                        fontWeight: 800,
                                                        letterSpacing: '0.18em',
                                                        textTransform: 'uppercase',
                                                        marginBottom: 24
                                                    },
                                                    children: "Interests"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/About.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        gap: 10
                                                    },
                                                    children: INTERESTS.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                                            icon: it.icon,
                                                            label: it.label,
                                                            c: c,
                                                            delay: 0.54 + i * 0.05
                                                        }, it.label, false, {
                                                            fileName: "[project]/src/components/sections/About.tsx",
                                                            lineNumber: 804,
                                                            columnNumber: 11
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/About.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 789,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 788,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 685,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 543,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 502,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 489,
        columnNumber: 3
    }, this);
}
_s3(About, "NG2Ym4YHAY11FweyGsO9NeobAPI=");
_c6 = About;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_refresh__.register(_c, "Blobs");
__turbopack_refresh__.register(_c1, "Toggle");
__turbopack_refresh__.register(_c2, "Stat");
__turbopack_refresh__.register(_c3, "ExpStepper");
__turbopack_refresh__.register(_c4, "Pill");
__turbopack_refresh__.register(_c5, "Photo");
__turbopack_refresh__.register(_c6, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SectionHeading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function SectionHeading({ title, subtitle, align = "center" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `mb-16 ${align === "center" ? "text-center" : "text-left"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
                style: {
                    color: "var(--text)"
                },
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: isInView ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "mt-4 text-lg max-w-2xl",
                style: {
                    color: "var(--text-secondary)",
                    marginLeft: align === "center" ? "auto" : undefined,
                    marginRight: align === "center" ? "auto" : undefined
                },
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: isInView ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: 0.6,
                    delay: 0.15,
                    ease: "easeOut"
                },
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent",
                style: {
                    marginLeft: align === "center" ? "auto" : undefined,
                    marginRight: align === "center" ? "auto" : undefined
                },
                initial: {
                    width: 0,
                    opacity: 0
                },
                animate: isInView ? {
                    width: 64,
                    opacity: 1
                } : {},
                transition: {
                    duration: 0.6,
                    delay: 0.3,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SectionHeading.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(SectionHeading, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = SectionHeading;
var _c;
__turbopack_refresh__.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Skills.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Skills)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
// ─── DATA ─────────────────────────────────────────────────────
const CATEGORIES = [
    {
        id: 'frontend',
        label: 'Frontend',
        skills: [
            {
                name: 'React',
                color: '#61DAFB',
                icon: '⚛️'
            },
            {
                name: 'Next.js',
                color: '#AAAAAA',
                icon: '▲'
            },
            {
                name: 'TypeScript',
                color: '#3178C6',
                icon: '𝗧𝗦'
            },
            {
                name: 'JavaScript',
                color: '#F7DF1E',
                icon: '𝗝𝗦'
            },
            {
                name: 'HTML5',
                color: '#E44D26',
                icon: '🔶'
            },
            {
                name: 'CSS3',
                color: '#264DE4',
                icon: '🔷'
            },
            {
                name: 'Tailwind CSS',
                color: '#38BDF8',
                icon: '🌊'
            },
            {
                name: 'Framer Motion',
                color: '#BB4AE8',
                icon: '✦'
            }
        ]
    },
    {
        id: 'mobile',
        label: 'Mobile & Backend',
        skills: [
            {
                name: 'React Native',
                color: '#61DAFB',
                icon: '📱'
            },
            {
                name: 'Supabase',
                color: '#3ECF8E',
                icon: '⚡'
            },
            {
                name: 'Firebase',
                color: '#FFCA28',
                icon: '🔥'
            },
            {
                name: 'Node.js',
                color: '#68A063',
                icon: '🟢'
            }
        ]
    },
    {
        id: 'tools',
        label: 'Tools & AI',
        skills: [
            {
                name: 'Git',
                color: '#F05032',
                icon: '🌿'
            },
            {
                name: 'Figma',
                color: '#F24E1E',
                icon: '🎨'
            },
            {
                name: 'AI Tools',
                color: '#A78BFA',
                icon: '🤖'
            },
            {
                name: 'VS Code',
                color: '#007ACC',
                icon: '💙'
            }
        ]
    }
];
// ─── SKILL CARD ───────────────────────────────────────────────
function SkillCard({ skill, delay }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 18,
            scale: 0.95
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        viewport: {
            once: true,
            margin: '-20px'
        },
        transition: {
            type: 'spring',
            stiffness: 62,
            damping: 16,
            delay
        },
        whileHover: {
            scale: 1.05,
            y: -3,
            transition: {
                type: 'spring',
                stiffness: 320,
                damping: 18
            }
        },
        className: "group relative cursor-default select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -inset-2 rounded-[20px] opacity-0   group-hover:opacity-100 transition-opacity duration-300   pointer-events-none -z-10",
                style: {
                    background: `radial-gradient(ellipse at center, ${skill.color}40 0%, transparent 70%)`,
                    filter: 'blur(12px)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Skills.tsx",
                lineNumber: 60,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   relative flex items-center gap-3 px-4 py-3 rounded-2xl border   transition-colors duration-200 overflow-hidden      bg-white border-gray-200/80 shadow-sm   group-hover:border-gray-300 group-hover:shadow-md      dark:bg-white/[0.04] dark:border-white/[0.08]   dark:group-hover:bg-white/[0.07] dark:group-hover:border-white/[0.15]   ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-0 group-hover:opacity-100   transition-opacity duration-300 pointer-events-none",
                        style: {
                            background: `radial-gradient(ellipse at 15% 50%, ${skill.color}12 0%, transparent 60%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 84,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   relative z-10 flex-shrink-0 w-9 h-9 rounded-xl   flex items-center justify-center text-[19px]   transition-all duration-300 group-hover:scale-110   bg-gray-100 group-hover:bg-gray-50   dark:bg-white/[0.06] dark:group-hover:bg-white/[0.11]   ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "leading-none",
                            children: skill.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Skills.tsx",
                            lineNumber: 102,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 93,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "   relative z-10 text-[13px] font-semibold leading-none whitespace-nowrap   text-gray-600 group-hover:text-gray-900   dark:text-white/50 dark:group-hover:text-white/90   transition-colors duration-200   ",
                        children: skill.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 106,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 ml-auto pl-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-1.5 rounded-full   opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100   transition-all duration-250",
                            style: {
                                background: skill.color
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Skills.tsx",
                            lineNumber: 119,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 118,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Skills.tsx",
                lineNumber: 71,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Skills.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this);
}
_c = SkillCard;
// ─── CATEGORY ─────────────────────────────────────────────────
function Category({ cat, catIndex }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: '-32px'
        },
        transition: {
            type: 'spring',
            stiffness: 54,
            damping: 16,
            delay: catIndex * 0.09
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "   text-[17px] font-extrabold tracking-tight shrink-0   text-gray-900 dark:text-white/90   ",
                        children: cat.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 147,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-px bg-gray-200 dark:bg-white/[0.08]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 155,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "   text-[10px] font-extrabold tracking-[0.18em] uppercase shrink-0   text-gray-300 dark:text-white/20   ",
                        children: cat.skills.length
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 156,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Skills.tsx",
                lineNumber: 146,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2.5",
                children: cat.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillCard, {
                        skill: skill,
                        delay: catIndex * 0.055 + i * 0.048
                    }, skill.name, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 169,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Skills.tsx",
                lineNumber: 167,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Skills.tsx",
        lineNumber: 134,
        columnNumber: 3
    }, this);
}
_c1 = Category;
function Skills() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "relative py-28 overflow-hidden",
        style: {
            background: 'var(--bg-secondary)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/3 w-80 h-80 bg-primary/[0.05]   rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Skills.tsx",
                lineNumber: 189,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-1/3 w-80 h-80 bg-accent/[0.05]   rounded-full blur-3xl translate-y-1/2 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Skills.tsx",
                lineNumber: 193,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-5xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Skills & Technologies",
                        subtitle: "Tools I use to build fast, accessible and delightful digital experiences"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 199,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-10",
                        children: CATEGORIES.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Category, {
                                cat: cat,
                                catIndex: i
                            }, cat.id, false, {
                                fileName: "[project]/src/components/sections/Skills.tsx",
                                lineNumber: 206,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Skills.tsx",
                        lineNumber: 204,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Skills.tsx",
                lineNumber: 198,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Skills.tsx",
        lineNumber: 183,
        columnNumber: 3
    }, this);
}
_c2 = Skills;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "SkillCard");
__turbopack_refresh__.register(_c1, "Category");
__turbopack_refresh__.register(_c2, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Projects.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Projects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const projects = [
    {
        title: "AI-Powered Study Platform",
        description: "A modern educational web app that leverages AI tools for personalized learning. Features include interactive quizzes, progress tracking, and an AI assistant for students.",
        tech: [
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Supabase",
            "AI"
        ],
        demo: "#",
        github: "#",
        gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "E-Commerce Dashboard",
        description: "A sleek admin dashboard for managing products, orders, and analytics. Built with clean architecture and responsive design for all screen sizes.",
        tech: [
            "React",
            "TypeScript",
            "Tailwind",
            "Firebase"
        ],
        demo: "#",
        github: "#",
        gradient: "from-emerald-500/20 to-cyan-500/20"
    },
    {
        title: "Delivery Mobile App",
        description: "A cross-platform mobile application for food delivery with real-time order tracking, rider management, and integrated payments.",
        tech: [
            "React Native",
            "TypeScript",
            "Supabase"
        ],
        demo: "#",
        github: "#",
        gradient: "from-orange-500/20 to-rose-500/20"
    }
];
function Projects() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "relative py-32 overflow-hidden",
        style: {
            background: "var(--bg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-6xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Featured Projects",
                        subtitle: "A selection of projects I've built recently"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: projects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `group relative rounded-2xl overflow-hidden transition-all duration-500 ${theme === "dark" ? "bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] hover:shadow-2xl hover:shadow-primary/10" : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-2xl hover:shadow-primary/10"}`,
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: i * 0.15,
                                    duration: 0.6
                                },
                                whileHover: {
                                    y: -8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 opacity-30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0",
                                                    style: {
                                                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                                                        backgroundSize: "24px 24px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Projects.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "text-5xl font-bold text-white/25 select-none relative z-10",
                                                animate: {
                                                    rotate: [
                                                        0,
                                                        2,
                                                        -2,
                                                        0
                                                    ],
                                                    scale: [
                                                        1,
                                                        1.05,
                                                        1
                                                    ]
                                                },
                                                transition: {
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                },
                                                children: project.title.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold mb-3 group-hover:text-primary/80 transition-colors duration-300",
                                                style: {
                                                    color: "var(--text)"
                                                },
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed mb-5",
                                                style: {
                                                    color: "var(--text-secondary)"
                                                },
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-6",
                                                children: project.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${theme === "dark" ? "bg-gradient-to-r from-primary/15 to-accent/15 text-primary-light border border-primary/20 hover:border-primary/40" : "bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 hover:border-primary/40"}`,
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                        href: project.demo,
                                                        className: `flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${theme === "dark" ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary-light border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-primary/20" : "bg-gradient-to-r from-primary/15 to-primary/10 text-primary border border-primary/30 hover:border-primary/60 hover:from-primary/20 hover:to-primary/15"}`,
                                                        whileHover: {
                                                            scale: 1.03,
                                                            y: -2
                                                        },
                                                        whileTap: {
                                                            scale: 0.97
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 21
                                                            }, this),
                                                            " Demo"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                        href: project.github,
                                                        className: `flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${theme === "dark" ? "bg-white/[0.08] text-slate-300 hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/[0.2]" : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200 hover:border-slate-300"}`,
                                                        whileHover: {
                                                            scale: 1.03,
                                                            y: -2
                                                        },
                                                        whileTap: {
                                                            scale: 0.97
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this),
                                                            " GitHub"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, project.title, true, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Projects.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Projects, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Projects;
var _c;
__turbopack_refresh__.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/AnimatedSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AnimatedSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function AnimatedSection({ children, className = "", delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: className,
        initial: {
            opacity: 0,
            y: 40
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.7,
            delay,
            ease: [
                0.25,
                0.4,
                0.25,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedSection.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(AnimatedSection, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = AnimatedSection;
var _c;
__turbopack_refresh__.register(_c, "AnimatedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Contact.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Contact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/AnimatedSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const socials = [
    {
        name: "GitHub",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
        href: "https://github.com/",
        color: "#6e7681"
    },
    {
        name: "LinkedIn",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        href: "https://linkedin.com/",
        color: "#0A66C2"
    },
    {
        name: "Telegram",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
        href: "https://t.me/",
        color: "#26A5E4"
    }
];
function Contact() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Form submit logic would go here
        alert("Thank you for your message! I'll get back to you soon.");
        setFormState({
            name: "",
            email: "",
            message: ""
        });
    };
    const inputClass = (field)=>`w-full px-5 py-4 rounded-2xl text-base outline-none transition-all duration-300 font-medium ${theme === "dark" ? "bg-white/[0.05] border text-white placeholder-slate-500 backdrop-blur-sm" : "bg-white/80 border text-slate-900 placeholder-slate-400 backdrop-blur-sm"} ${focused === field ? "border-primary ring-2 ring-primary/25 shadow-lg shadow-primary/10" : theme === "dark" ? "border-white/[0.1] hover:border-white/[0.15] hover:bg-white/[0.07]" : "border-slate-200 hover:border-slate-300 hover:bg-white"}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative py-32 overflow-hidden",
        style: {
            background: "var(--bg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Contact.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Contact.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-3xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Get in Touch",
                        subtitle: "Have a question or want to work together? Drop me a message!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                            onSubmit: handleSubmit,
                            className: `rounded-3xl p-8 sm:p-12 transition-all duration-500 ${theme === "dark" ? "bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-2xl shadow-black/20" : "bg-white/90 border border-slate-200/60 backdrop-blur-xl shadow-2xl shadow-slate-200/50"}`,
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block text-sm font-medium mb-2",
                                                style: {
                                                    color: "var(--text-secondary)"
                                                },
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
                                                id: "name",
                                                type: "text",
                                                required: true,
                                                placeholder: "Your name",
                                                className: inputClass("name"),
                                                value: formState.name,
                                                onChange: (e)=>setFormState({
                                                        ...formState,
                                                        name: e.target.value
                                                    }),
                                                onFocus: ()=>setFocused("name"),
                                                onBlur: ()=>setFocused(null),
                                                whileFocus: {
                                                    scale: 1.01
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-medium mb-2",
                                                style: {
                                                    color: "var(--text-secondary)"
                                                },
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
                                                id: "email",
                                                type: "email",
                                                required: true,
                                                placeholder: "your@email.com",
                                                className: inputClass("email"),
                                                value: formState.email,
                                                onChange: (e)=>setFormState({
                                                        ...formState,
                                                        email: e.target.value
                                                    }),
                                                onFocus: ()=>setFocused("email"),
                                                onBlur: ()=>setFocused(null),
                                                whileFocus: {
                                                    scale: 1.01
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: "block text-sm font-medium mb-2",
                                                style: {
                                                    color: "var(--text-secondary)"
                                                },
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].textarea, {
                                                id: "message",
                                                required: true,
                                                rows: 5,
                                                placeholder: "Your message...",
                                                className: `${inputClass("message")} resize-none`,
                                                value: formState.message,
                                                onChange: (e)=>setFormState({
                                                        ...formState,
                                                        message: e.target.value
                                                    }),
                                                onFocus: ()=>setFocused("message"),
                                                onBlur: ()=>setFocused(null),
                                                whileFocus: {
                                                    scale: 1.01
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        type: "submit",
                                        className: "w-full flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-base transition-all duration-300 hover:from-primary-dark hover:to-primary shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 cursor-pointer relative overflow-hidden",
                                        whileHover: {
                                            scale: 1.02,
                                            y: -3
                                        },
                                        whileTap: {
                                            scale: 0.97
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            " Send Message"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 flex items-center justify-center gap-4",
                            children: socials.map((social, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: social.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `group p-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${theme === "dark" ? "bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08]" : "bg-white/80 border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-white hover:shadow-lg"}`,
                                    whileHover: {
                                        y: -5,
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.4
                                    },
                                    "aria-label": social.name,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                                            style: {
                                                background: `linear-gradient(135deg, ${social.color}20, ${social.color}10)`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                            size: 22,
                                            className: "relative z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, social.name, true, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Contact.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Contact.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Contact, "A7jbMDnKcRl1FLYUDwMZzGkYX4A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Contact;
var _c;
__turbopack_refresh__.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const socials = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
        href: "https://github.com/",
        label: "GitHub"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        href: "https://linkedin.com/",
        label: "LinkedIn"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
        href: "https://t.me/",
        label: "Telegram"
    }
];
function Footer() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `relative py-12 border-t transition-all duration-500 ${theme === "dark" ? "border-white/[0.08] bg-gradient-to-b from-transparent to-white/[0.02]" : "border-slate-200/60 bg-gradient-to-b from-transparent to-slate-50/50"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                },
                                className: "text-lg font-bold tracking-tight inline-block transition-transform duration-300 hover:scale-105",
                                style: {
                                    color: "var(--text)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Footer.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    "libek",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Footer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Footer.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Footer.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "flex items-center gap-1.5 text-sm",
                            style: {
                                color: "var(--text-secondary)"
                            },
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.1
                            },
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Alibek Allaberganov. Crafted with",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    animate: {
                                        scale: [
                                            1,
                                            1.2,
                                            1
                                        ],
                                        rotate: [
                                            0,
                                            10,
                                            -10,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 14,
                                        className: "text-red-500 fill-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Footer.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Footer.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: socials.map((social, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: social.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `group p-3 rounded-xl transition-all duration-300 relative overflow-hidden ${theme === "dark" ? "text-slate-500 hover:text-slate-200 hover:bg-white/[0.08]" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"}`,
                                    initial: {
                                        opacity: 0,
                                        y: 15
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: i * 0.08,
                                        duration: 0.4
                                    },
                                    whileHover: {
                                        scale: 1.1,
                                        y: -3
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    "aria-label": social.label,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Footer.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                            size: 18,
                                            className: "relative z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, social.label, true, {
                                    fileName: "[project]/src/components/sections/Footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Footer.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Footer.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Footer.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Footer.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Footer, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Footer;
var _c;
__turbopack_refresh__.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/sections/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/sections/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Skills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/sections/Skills.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/sections/Projects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/sections/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/sections/Footer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Skills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_09dd2e._.js.map