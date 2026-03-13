(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
// ─── Constants ────────────────────────────────────────────────────────────────
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
// ─── Icons ────────────────────────────────────────────────────────────────────
const GitHubIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "16",
        height: "16",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
            lineNumber: 23,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GitHubIcon;
const DownloadIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        width: "13",
        height: "13",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "7 10 12 15 17 10"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "15",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = DownloadIcon;
const SunIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        width: "13",
        height: "13",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "5"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "1",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "21",
                x2: "12",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 38,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "4.22",
                x2: "5.64",
                y2: "5.64"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "18.36",
                x2: "19.78",
                y2: "19.78"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 39,
                columnNumber: 52
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "12",
                x2: "3",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "12",
                x2: "23",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 40,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "19.78",
                x2: "5.64",
                y2: "18.36"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "5.64",
                x2: "19.78",
                y2: "4.22"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 41,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = SunIcon;
const MoonIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        width: "13",
        height: "13",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = MoonIcon;
// ─── Scroll helper ────────────────────────────────────────────────────────────
function smoothScrollTo(href) {
    document.querySelector(href)?.scrollIntoView({
        behavior: "smooth"
    });
}
// ─── Magnetic Button Hook ─────────────────────────────────────────────────────
function useMagnetic(strength = 0.35) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const sx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, {
        stiffness: 200,
        damping: 18
    });
    const sy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, {
        stiffness: 200,
        damping: 18
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMagnetic.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const onMove = {
                "useMagnetic.useEffect.onMove": (e)=>{
                    const r = el.getBoundingClientRect();
                    x.set((e.clientX - r.left - r.width / 2) * strength);
                    y.set((e.clientY - r.top - r.height / 2) * strength);
                }
            }["useMagnetic.useEffect.onMove"];
            const onLeave = {
                "useMagnetic.useEffect.onLeave": ()=>{
                    x.set(0);
                    y.set(0);
                }
            }["useMagnetic.useEffect.onLeave"];
            el.addEventListener("mousemove", onMove);
            el.addEventListener("mouseleave", onLeave);
            return ({
                "useMagnetic.useEffect": ()=>{
                    el.removeEventListener("mousemove", onMove);
                    el.removeEventListener("mouseleave", onLeave);
                }
            })["useMagnetic.useEffect"];
        }
    }["useMagnetic.useEffect"], [
        strength,
        x,
        y
    ]);
    return {
        ref,
        style: {
            x: sx,
            y: sy
        }
    };
}
_s(useMagnetic, "5f039dLAxfi1nmtSA+HIQ/xH+zc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
// ─── NavLink ──────────────────────────────────────────────────────────────────
function NavLink({ label, href, active, onClick, index }) {
    _s1();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const magnetic = useMagnetic(0.25);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        ref: magnetic.ref,
        style: magnetic.style,
        onClick: onClick,
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        className: `navlink${active ? " navlink-active" : ""}`,
        initial: {
            opacity: 0,
            y: -12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: 0.08 + index * 0.06,
            duration: 0.5,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        "aria-current": active ? "page" : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "navlink-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "navlink-bar",
                animate: {
                    scaleX: hov || active ? 1 : 0,
                    opacity: hov || active ? 1 : 0
                },
                initial: false,
                transition: {
                    duration: 0.22,
                    ease: [
                        0.4,
                        0,
                        0.2,
                        1
                    ]
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "navlink-glow",
                    layoutId: "navglow",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        type: "spring",
                        stiffness: 380,
                        damping: 32
                    }
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s1(NavLink, "o6r3+RoKqFz0MUjfcnXhunHyXK4=", false, function() {
    return [
        useMagnetic
    ];
});
_c4 = NavLink;
// ─── Theme Toggle ─────────────────────────────────────────────────────────────
function ThemeToggle() {
    _s2();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>setMounted(true)
    }["ThemeToggle.useEffect"], []);
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: 58,
            height: 30
        }
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
        lineNumber: 127,
        columnNumber: 24
    }, this);
    const isDark = theme === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: ()=>setTheme(isDark ? "light" : "dark"),
        "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
        className: "toggle-btn",
        whileTap: {
            scale: 0.9
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "toggle-track",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "toggle-thumb",
                    animate: {
                        x: isDark ? 2 : 22
                    },
                    transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 36
                    }
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "t-icon t-icon-l",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonIcon, {}, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                        lineNumber: 144,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "t-icon t-icon-r",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SunIcon, {}, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                        lineNumber: 145,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s2(ThemeToggle, "uGU5l7ciDSfqFDe6wS7vfMb29jQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c5 = ThemeToggle;
// ─── Hamburger ────────────────────────────────────────────────────────────────
function Hamburger({ open, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        className: "ham-btn",
        onClick: onClick,
        whileTap: {
            scale: 0.88
        },
        "aria-label": open ? "Close menu" : "Open menu",
        "aria-expanded": open,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    rotate: open ? 45 : 0,
                    y: open ? 7 : 0
                },
                className: "ham-line"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    opacity: open ? 0 : 1,
                    scaleX: open ? 0 : 1
                },
                className: "ham-line"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    rotate: open ? -45 : 0,
                    y: open ? -7 : 0
                },
                className: "ham-line"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c6 = Hamburger;
// ─── Noise Texture SVG (inline, no external deps) ────────────────────────────
const NoiseSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.025,
            pointerEvents: "none",
            borderRadius: "inherit"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                id: "nb-noise",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                    type: "fractalNoise",
                    baseFrequency: "0.75",
                    numOctaves: "4",
                    stitchTiles: "stitch"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                    lineNumber: 175,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 174,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "100%",
                height: "100%",
                filter: "url(#nb-noise)"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 177,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
        lineNumber: 170,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = NoiseSVG;
function Navbar() {
    _s3();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Scroll tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    const y = window.scrollY;
                    setScrolled(y > 30);
                    // Reading progress
                    const totalH = document.documentElement.scrollHeight - window.innerHeight;
                    setScrollProgress(totalH > 0 ? y / totalH : 0);
                    // Active section detection
                    const offset = y + 140;
                    for(let i = NAV.length - 1; i >= 0; i--){
                        const el = document.querySelector(NAV[i].href);
                        if (el && el.offsetTop <= offset) {
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
    // Close mobile menu on desktop resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    // Lock body scroll when mobile menu open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            document.body.style.overflow = open ? "hidden" : "";
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        open
    ]);
    const handleNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[handleNav]": (href)=>{
            setOpen(false);
            smoothScrollTo(href);
            setActive(href);
        }
    }["Navbar.useCallback[handleNav]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@400;500;600&display=swap');

        /* ── Tokens ── */
        :root {
          --bg:             #f0f0f8;
          --glass:          rgba(255,255,255,0.78);
          --glass-border:   rgba(0,0,0,0.07);
          --glass-shadow:   0 4px 32px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.95) inset;
          --text:           #0c0c1e;
          --text-dim:       rgba(30,30,70,0.38);
          --text-nav:       rgba(30,30,68,0.62);
          --accent:         #4f6ef7;
          --accent2:        #8b5cf6;
          --accent-rgb:     79,110,247;
          --glow:           rgba(79,110,247,0.14);
          --glow-strong:    rgba(79,110,247,0.28);
          --pill-bg:        rgba(0,0,0,0.038);
          --pill-border:    rgba(0,0,0,0.065);
          --pill-hover:     rgba(0,0,0,0.072);
          --resume-from:    #4f6ef7;
          --resume-to:      #8b5cf6;
          --resume-shadow:  0 4px 20px rgba(79,110,247,0.32);
          --tog-track:      rgba(0,0,0,0.055);
          --tog-border:     rgba(0,0,0,0.08);
          --tog-thumb:      #4f6ef7;
          --divider:        rgba(0,0,0,0.065);
          --mob-bg:         rgba(242,242,250,0.98);
          --mob-hover:      rgba(79,110,247,0.07);
          --progress-h:     2px;
        }

        .dark {
          --bg:             #060610;
          --glass:          rgba(8,8,20,0.75);
          --glass-border:   rgba(255,255,255,0.072);
          --glass-shadow:   0 8px 56px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.045) inset;
          --text:           #e8e8f5;
          --text-dim:       rgba(180,180,220,0.42);
          --text-nav:       rgba(190,190,228,0.65);
          --accent:         #7b94ff;
          --accent2:        #b07dff;
          --accent-rgb:     123,148,255;
          --glow:           rgba(123,148,255,0.18);
          --glow-strong:    rgba(123,148,255,0.35);
          --pill-bg:        rgba(255,255,255,0.048);
          --pill-border:    rgba(255,255,255,0.085);
          --pill-hover:     rgba(255,255,255,0.085);
          --resume-from:    #7b94ff;
          --resume-to:      #b07dff;
          --resume-shadow:  0 4px 24px rgba(123,148,255,0.38);
          --tog-track:      rgba(255,255,255,0.07);
          --tog-border:     rgba(255,255,255,0.10);
          --tog-thumb:      #7b94ff;
          --divider:        rgba(255,255,255,0.07);
          --mob-bg:         rgba(6,6,16,0.97);
          --mob-hover:      rgba(123,148,255,0.08);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: 'Outfit', sans-serif; transition: background 0.5s ease, color 0.45s ease; }

        /* ── Wrapper ── */
        .nb-wrap {
          position: fixed; inset: 0 0 auto 0; z-index: 300;
          pointer-events: none;
          padding: 16px 24px;
          transition: padding 0.4s cubic-bezier(.4,0,.2,1);
        }
        .nb-wrap.nb-scrolled { padding: 8px 24px; }

        /* ── Glass pill ── */
        .nb-pill {
          pointer-events: all;
          position: relative;
          max-width: 1160px; margin: 0 auto;
          height: 68px; padding: 0 22px;
          display: flex; align-items: center; gap: 10px;
          border-radius: 22px;
          background: transparent;
          transition: background 0.45s, border 0.45s, box-shadow 0.45s, height 0.38s cubic-bezier(.4,0,.2,1), border-radius 0.38s;
          overflow: hidden;
        }
        .nb-wrap.nb-scrolled .nb-pill {
          background: var(--glass);
          backdrop-filter: blur(28px) saturate(1.9);
          -webkit-backdrop-filter: blur(28px) saturate(1.9);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          height: 60px; border-radius: 18px;
        }

        /* ── Scroll progress bar ── */
        .nb-progress {
          position: absolute; bottom: 0; left: 0;
          height: var(--progress-h);
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          border-radius: 0 2px 2px 0;
          pointer-events: none;
          transform-origin: left;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .nb-wrap.nb-scrolled .nb-progress { opacity: 1; }

        /* ── Logo ── */
        .logo {
          font-family: 'Syne', sans-serif; font-size: 1.85rem; font-weight: 800;
          letter-spacing: -0.055em; color: var(--text);
          background: none; border: none; cursor: pointer; flex-shrink: 0;
          display: flex; align-items: baseline;
          padding: 0; line-height: 1;
          transition: opacity 0.2s;
        }
        .logo:hover { opacity: 0.8; }
        .logo-hi {
          background: linear-gradient(130deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        /* Animated underline on logo */
        .logo::after {
          content: ''; display: block; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }
        .logo:hover::after { transform: scaleX(1); }

        /* ── Center nav ── */
        .nb-center {
          flex: 1; display: flex; justify-content: center; align-items: center; gap: 0;
        }
        @media (max-width: 900px) { .nb-center { display: none; } }

        /* ── NavLink ── */
        .navlink {
          position: relative; background: none; border: none; cursor: pointer;
          padding: 8px 16px; border-radius: 12px;
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          transition: background 0.22s;
        }
        .navlink:hover { background: var(--pill-bg); }
        .navlink-label {
          font-family: 'Outfit', sans-serif; font-size: 0.975rem; font-weight: 500;
          letter-spacing: 0.01em; color: var(--text-nav);
          transition: color 0.22s; white-space: nowrap;
        }
        .navlink:hover .navlink-label { color: var(--text); }
        .navlink-active .navlink-label { color: var(--accent) !important; }
        .navlink-bar {
          display: block; height: 2px; width: 100%; border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform-origin: center;
        }
        .navlink-glow {
          position: absolute; inset: 0; border-radius: 12px;
          background: radial-gradient(ellipse at center, var(--glow) 0%, transparent 70%);
          z-index: -1;
        }

        /* ── Divider ── */
        .nb-divider { width: 1px; height: 18px; background: var(--divider); flex-shrink: 0; margin: 0 2px; }
        @media (max-width: 900px) { .nb-divider { display: none; } }

        /* ── Right side ── */
        .nb-right { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }

        /* ── Icon button ── */
        .icon-btn {
          background: var(--pill-bg); border: 1px solid var(--pill-border);
          border-radius: 11px; width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: var(--text-nav); text-decoration: none;
          transition: background 0.22s, color 0.22s, box-shadow 0.22s, border-color 0.22s;
          position: relative; overflow: hidden;
        }
        .icon-btn::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at center, var(--glow-strong), transparent 70%);
          opacity: 0; transition: opacity 0.3s;
        }
        .icon-btn:hover { background: var(--pill-hover); color: var(--text); border-color: rgba(var(--accent-rgb),0.25); }
        .icon-btn:hover::before { opacity: 1; }

        /* ── Resume button ── */
        .resume-btn {
          display: flex; align-items: center; gap: 6px;
          height: 40px; padding: 0 18px; border-radius: 12px;
          background: linear-gradient(135deg, var(--resume-from), var(--resume-to));
          color: #fff; text-decoration: none;
          font-family: 'Outfit', sans-serif; font-size: 0.9rem; font-weight: 600;
          letter-spacing: 0.02em; white-space: nowrap;
          box-shadow: var(--resume-shadow);
          cursor: pointer; border: none;
          position: relative; overflow: hidden;
          transition: box-shadow 0.25s, filter 0.25s;
        }
        .resume-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0; transition: opacity 0.25s;
        }
        .resume-btn:hover { filter: brightness(1.12); box-shadow: 0 6px 30px rgba(var(--accent-rgb), 0.48); }
        .resume-btn:hover::before { opacity: 1; }

        /* ── Toggle ── */
        .toggle-btn { background: none; border: none; cursor: pointer; padding: 0; }
        .toggle-track {
          position: relative; display: flex; align-items: center;
          width: 56px; height: 28px; border-radius: 99px;
          background: var(--tog-track); border: 1px solid var(--tog-border);
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s; overflow: hidden;
        }
        .toggle-track:hover { box-shadow: 0 0 0 3px var(--glow); }
        .toggle-thumb {
          position: absolute; width: 22px; height: 22px; border-radius: 50%;
          background: var(--tog-thumb); top: 2px;
          box-shadow: 0 2px 8px rgba(var(--accent-rgb), 0.5); z-index: 2;
        }
        .t-icon {
          position: absolute; z-index: 3;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.85); pointer-events: none;
        }
        .t-icon-l { left: 6px; } .t-icon-r { right: 6px; }

        /* ── Hamburger ── */
        .ham-btn {
          display: none; flex-direction: column; align-items: center; justify-content: center; gap: 5px;
          background: var(--pill-bg); border: 1px solid var(--pill-border);
          border-radius: 11px; width: 40px; height: 40px; cursor: pointer; padding: 0;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .ham-btn:hover { background: var(--pill-hover); box-shadow: 0 0 0 3px var(--glow); }
        @media (max-width: 900px) { .ham-btn { display: flex; } }
        .ham-line {
          display: block; width: 17px; height: 1.6px; border-radius: 2px;
          background: var(--text); transform-origin: center;
        }

        /* ── Mobile overlay ── */
        .mob-overlay {
          position: fixed; inset: 0; z-index: 280;
          background: var(--mob-bg);
          backdrop-filter: blur(36px) saturate(1.6);
          -webkit-backdrop-filter: blur(36px) saturate(1.6);
          display: flex; flex-direction: column;
          padding: 88px 28px 44px;
        }
        .mob-link {
          display: flex; align-items: center; justify-content: space-between;
          background: none; border: none; border-bottom: 1px solid var(--divider);
          padding: 17px 12px; cursor: pointer;
          font-family: 'Syne', sans-serif; font-size: 1.9rem; font-weight: 700;
          letter-spacing: -0.04em; color: var(--text-dim);
          transition: color 0.2s, background 0.2s, padding-left 0.25s;
          border-radius: 10px; text-align: left; width: 100%;
        }
        .mob-link:hover { color: var(--text); background: var(--mob-hover); padding-left: 20px; }
        .mob-link.mob-active { color: var(--accent); }
        .mob-link-arrow { font-size: 0.9rem; opacity: 0.28; font-weight: 400; font-family: 'Outfit', sans-serif; transition: opacity 0.2s, transform 0.2s; }
        .mob-link:hover .mob-link-arrow { opacity: 0.7; transform: translate(3px, -3px); }
        .mob-foot { margin-top: auto; display: flex; gap: 10px; padding-top: 28px; }
        .mob-foot .resume-btn { flex: 1; justify-content: center; }
      `
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `nb-wrap${scrolled ? " nb-scrolled" : ""}`,
                initial: {
                    y: -100,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.68,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nb-pill",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoiseSVG, {}, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "nb-progress",
                            style: {
                                width: `${scrollProgress * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "logo",
                            onClick: ()=>window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                }),
                            whileHover: {
                                scale: 1.03
                            },
                            whileTap: {
                                scale: 0.96
                            },
                            initial: {
                                opacity: 0,
                                x: -16
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.55,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-hi",
                                    children: "A"
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this),
                                "libek",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-hi",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 526,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "nb-center",
                            "aria-label": "Main navigation",
                            children: NAV.map(({ label, href }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    label: label,
                                    href: href,
                                    index: i,
                                    active: active === href,
                                    onClick: ()=>handleNav(href)
                                }, href, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                            lineNumber: 530,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nb-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nb-divider",
                                    role: "separator"
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeToggle, {}, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 544,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "https://github.com/alibek-developer",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "Visit GitHub profile",
                                    className: "icon-btn",
                                    whileHover: {
                                        scale: 1.1,
                                        y: -1
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    initial: {
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        delay: 0.45,
                                        duration: 0.4,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {}, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 546,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "/resume.pdf",
                                    download: true,
                                    className: "resume-btn",
                                    whileHover: {
                                        scale: 1.04,
                                        y: -1
                                    },
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    initial: {
                                        opacity: 0,
                                        scale: 0.85
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        delay: 0.52,
                                        duration: 0.4,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadIcon, {}, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                            lineNumber: 569,
                                            columnNumber: 15
                                        }, this),
                                        "Resume"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hamburger, {
                                    open: open,
                                    onClick: ()=>setOpen(!open)
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                    lineNumber: 507,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 501,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mob-overlay",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Navigation menu",
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -12
                    },
                    transition: {
                        duration: 0.3,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Mobile navigation",
                            children: NAV.map(({ label, href }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: `mob-link${active === href ? " mob-active" : ""}`,
                                    onClick: ()=>handleNav(href),
                                    initial: {
                                        opacity: 0,
                                        x: -28
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -16
                                    },
                                    transition: {
                                        delay: i * 0.05,
                                        duration: 0.32,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    "aria-current": active === href ? "page" : undefined,
                                    children: [
                                        label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mob-link-arrow",
                                            "aria-hidden": "true",
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                            lineNumber: 602,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, href, true, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 591,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                            lineNumber: 589,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mob-foot",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "https://github.com/alibek-developer",
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
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.3
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {}, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                        lineNumber: 616,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 608,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "./public/resume/resume.pdf",
                                    download: true,
                                    className: "resume-btn",
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.35
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadIcon, {}, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this),
                                        " Resume"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                                    lineNumber: 618,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                            lineNumber: 607,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                    lineNumber: 581,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s3(Navbar, "LxZPW8Z/NFJPVe3aIy3PiEG7Ab0=");
_c8 = Navbar;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "GitHubIcon");
__turbopack_context__.k.register(_c1, "DownloadIcon");
__turbopack_context__.k.register(_c2, "SunIcon");
__turbopack_context__.k.register(_c3, "MoonIcon");
__turbopack_context__.k.register(_c4, "NavLink");
__turbopack_context__.k.register(_c5, "ThemeToggle");
__turbopack_context__.k.register(_c6, "Hamburger");
__turbopack_context__.k.register(_c7, "NoiseSVG");
__turbopack_context__.k.register(_c8, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
// ─── Constants ────────────────────────────────────────────────────────────────
const STATS = [
    {
        num: "3",
        suf: "+",
        lbl: "Years Exp.",
        icon: "⚡"
    },
    {
        num: "20",
        suf: "+",
        lbl: "Projects",
        icon: "🚀"
    },
    {
        num: "10",
        suf: "+",
        lbl: "Tech Stack",
        icon: "🛠"
    },
    {
        num: "∞",
        suf: "",
        lbl: "Coffee",
        icon: "☕"
    }
];
const ROLES = [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "AI Integrator",
    "React Specialist"
];
// ─── Two-Phase Typing Hook ────────────────────────────────────────────────────
function useTypingSequence() {
    _s();
    const TEXT1 = "Hi, I'm Alibek";
    const TEXT2 = "Hi, I'm Alibek Allaberganov";
    const PLAIN = "Hi, I'm ";
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const lenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTypingSequence.useEffect": ()=>{
            let timer;
            let interval;
            const phases = {
                0: {
                    "useTypingSequence.useEffect": ()=>{
                        timer = setTimeout({
                            "useTypingSequence.useEffect": ()=>setPhase(1)
                        }["useTypingSequence.useEffect"], 600);
                    }
                }["useTypingSequence.useEffect"],
                1: {
                    "useTypingSequence.useEffect": ()=>{
                        lenRef.current = 0;
                        interval = setInterval({
                            "useTypingSequence.useEffect": ()=>{
                                lenRef.current++;
                                setDisplayed(TEXT1.slice(0, lenRef.current));
                                if (lenRef.current >= TEXT1.length) {
                                    clearInterval(interval);
                                    setPhase(2);
                                }
                            }
                        }["useTypingSequence.useEffect"], 58);
                    }
                }["useTypingSequence.useEffect"],
                2: {
                    "useTypingSequence.useEffect": ()=>{
                        timer = setTimeout({
                            "useTypingSequence.useEffect": ()=>setPhase(3)
                        }["useTypingSequence.useEffect"], 1100);
                    }
                }["useTypingSequence.useEffect"],
                3: {
                    "useTypingSequence.useEffect": ()=>{
                        lenRef.current = TEXT1.length;
                        interval = setInterval({
                            "useTypingSequence.useEffect": ()=>{
                                lenRef.current--;
                                setDisplayed(TEXT1.slice(0, lenRef.current));
                                if (lenRef.current <= 0) {
                                    clearInterval(interval);
                                    setDisplayed("");
                                    setPhase(4);
                                }
                            }
                        }["useTypingSequence.useEffect"], 30);
                    }
                }["useTypingSequence.useEffect"],
                4: {
                    "useTypingSequence.useEffect": ()=>{
                        timer = setTimeout({
                            "useTypingSequence.useEffect": ()=>setPhase(5)
                        }["useTypingSequence.useEffect"], 380);
                    }
                }["useTypingSequence.useEffect"],
                5: {
                    "useTypingSequence.useEffect": ()=>{
                        lenRef.current = 0;
                        interval = setInterval({
                            "useTypingSequence.useEffect": ()=>{
                                lenRef.current++;
                                setDisplayed(TEXT2.slice(0, lenRef.current));
                                if (lenRef.current >= TEXT2.length) {
                                    clearInterval(interval);
                                    setPhase(6);
                                }
                            }
                        }["useTypingSequence.useEffect"], 52);
                    }
                }["useTypingSequence.useEffect"]
            };
            phases[phase]?.();
            return ({
                "useTypingSequence.useEffect": ()=>{
                    clearTimeout(timer);
                    clearInterval(interval);
                }
            })["useTypingSequence.useEffect"];
        }
    }["useTypingSequence.useEffect"], [
        phase
    ]);
    const plainLen = Math.min(displayed.length, PLAIN.length);
    return {
        plainText: displayed.slice(0, plainLen),
        nameText: displayed.length > PLAIN.length ? displayed.slice(PLAIN.length) : "",
        done: phase === 6,
        typing: phase === 1 || phase === 5,
        erasing: phase === 3
    };
}
_s(useTypingSequence, "Sw8OtsApFvvLs5PZW501GfiO8xM=");
// ─── Rotating Role Badge ──────────────────────────────────────────────────────
function RotatingRole() {
    _s1();
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingRole.useEffect": ()=>{
            const cycle = setInterval({
                "RotatingRole.useEffect.cycle": ()=>{
                    setVisible(false);
                    setTimeout({
                        "RotatingRole.useEffect.cycle": ()=>{
                            setIdx({
                                "RotatingRole.useEffect.cycle": (i)=>(i + 1) % ROLES.length
                            }["RotatingRole.useEffect.cycle"]);
                            setVisible(true);
                        }
                    }["RotatingRole.useEffect.cycle"], 350);
                }
            }["RotatingRole.useEffect.cycle"], 3000);
            return ({
                "RotatingRole.useEffect": ()=>clearInterval(cycle)
            })["RotatingRole.useEffect"];
        }
    }["RotatingRole.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        animate: {
            opacity: visible ? 1 : 0,
            y: visible ? 0 : -6
        },
        transition: {
            duration: 0.35,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        },
        style: {
            display: "inline-block",
            minWidth: 200
        },
        children: ROLES[idx]
    }, idx, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s1(RotatingRole, "D0ac/9oS0ykkKCwQGiuMEF0Q8R8=");
_c = RotatingRole;
// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ num, suf, lbl, icon, index }) {
    _s2();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "stat-item",
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        whileHover: {
            scale: 1.04
        },
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 22
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "stat-icon",
                animate: {
                    rotate: hov ? [
                        0,
                        -10,
                        10,
                        0
                    ] : 0,
                    scale: hov ? 1.2 : 1
                },
                transition: {
                    duration: 0.4
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "stat-num",
                children: [
                    num,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "stat-suf",
                        children: suf
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                        lineNumber: 132,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "stat-lbl",
                children: lbl
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s2(StatCard, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c1 = StatCard;
// ─── Simple CTA Button ───────────────────────────────────────────────────────
function MagneticBtn({ children, onClick, primary }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: primary ? "cta-btn cta-btn--primary" : "cta-btn cta-btn--secondary",
        children: children
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_c2 = MagneticBtn;
function Hero() {
    _s3();
    const { plainText, nameText, done, typing, erasing } = useTypingSequence();
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    // Parallax orbs follow mouse
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const onMove = {
                "Hero.useEffect.onMove": (e)=>{
                    setMousePos({
                        x: e.clientX / window.innerWidth,
                        y: e.clientY / window.innerHeight
                    });
                }
            }["Hero.useEffect.onMove"];
            window.addEventListener("mousemove", onMove, {
                passive: true
            });
            return ({
                "Hero.useEffect": ()=>window.removeEventListener("mousemove", onMove)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[scrollTo]": (selector)=>{
            document.querySelector(selector)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["Hero.useCallback[scrollTo]"], []);
    const reveal = (delay)=>({
            initial: {
                opacity: 0,
                y: 16,
                filter: "blur(4px)"
            },
            animate: done ? {
                opacity: 1,
                y: 0,
                filter: "blur(0px)"
            } : {
                opacity: 0,
                y: 16,
                filter: "blur(4px)"
            },
            transition: {
                duration: 0.65,
                delay: done ? delay : 99,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            }
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "hero-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        /* ── Tokens (extend from Navbar tokens) ── */
        :root {
          --orb1: rgba(79,110,247,0.10);
          --orb2: rgba(139,92,246,0.08);
          --orb3: rgba(79,110,247,0.05);
          --grid-dot: rgba(0,0,0,0.032);
          --stat-border: rgba(0,0,0,0.065);
          --stat-bg: rgba(255,255,255,0.52);
          --stat-hover: rgba(79,110,247,0.06);
          --badge-bg: rgba(255,255,255,0.62);
          --badge-border: rgba(0,0,0,0.07);
          --cta-sec-bg: rgba(255,255,255,0.6);
          --cta-sec-border: rgba(0,0,0,0.10);
          --cta-sec-hover: rgba(255,255,255,0.9);
          --scroll-border: rgba(0,0,0,0.15);
          --scroll-dot: var(--accent);
        }
        .dark {
          --orb1: rgba(123,148,255,0.14);
          --orb2: rgba(176,125,255,0.11);
          --orb3: rgba(123,148,255,0.06);
          --grid-dot: rgba(255,255,255,0.022);
          --stat-border: rgba(255,255,255,0.08);
          --stat-bg: rgba(255,255,255,0.04);
          --stat-hover: rgba(123,148,255,0.09);
          --badge-bg: rgba(255,255,255,0.055);
          --badge-border: rgba(255,255,255,0.10);
          --cta-sec-bg: rgba(255,255,255,0.055);
          --cta-sec-border: rgba(255,255,255,0.10);
          --cta-sec-hover: rgba(255,255,255,0.10);
          --scroll-border: rgba(255,255,255,0.18);
          --scroll-dot: var(--accent);
        }

        /* ── Section ── */
        .hero-section {
          min-height: 100svh;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 100px 24px 80px;
          background: var(--bg);
          transition: background 0.45s;
        }

        /* ── Orbs ── */
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none; will-change: transform;
          transition: transform 0.8s cubic-bezier(.4,0,.2,1);
        }
        .hero-orb-1 {
          width: 520px; height: 520px;
          background: radial-gradient(circle, var(--orb1) 0%, transparent 70%);
          animation: orbFloat1 18s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 580px; height: 580px;
          background: radial-gradient(circle, var(--orb2) 0%, transparent 70%);
          animation: orbFloat2 22s ease-in-out infinite;
        }
        .hero-orb-3 {
          width: 700px; height: 420px;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          background: radial-gradient(ellipse, var(--orb3) 0%, transparent 65%);
          animation: orbPulse 14s ease-in-out infinite;
        }

        @keyframes orbFloat1 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(40px,30px) scale(1.05); }
          70%      { transform: translate(-18px,44px) scale(0.97); }
        }
        @keyframes orbFloat2 {
          0%,100% { transform: translate(0,0) scale(1); }
          35%      { transform: translate(-44px,-28px) scale(1.04); }
          65%      { transform: translate(20px,-44px) scale(0.96); }
        }
        @keyframes orbPulse {
          0%,100% { opacity: .5; transform: translate(-50%,-50%) scale(1); }
          50%      { opacity: .9; transform: translate(-50%,-50%) scale(1.18); }
        }

        /* ── Grid & vignette ── */
        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle at 1px 1px, var(--grid-dot) 1px, transparent 0);
          background-size: 44px 44px;
        }
        .hero-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, var(--bg) 100%);
        }

        /* ── Content ── */
        .hero-content {
          position: relative; z-index: 10;
          max-width: 860px; margin: 0 auto;
          text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 20px;
        }

        /* ── Availability badge ── */
        .avail-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 99px;
          background: var(--badge-bg); border: 1px solid var(--badge-border);
          backdrop-filter: blur(14px);
          font-family: 'Outfit', sans-serif; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.04em; color: var(--text-nav);
          text-transform: uppercase;
        }
        .avail-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #22c55e;
          box-shadow: 0 0 0 0 rgba(34,197,94,0.5);
          animation: ping 2s cubic-bezier(0,0,.2,1) infinite;
        }
        @keyframes ping {
          0%  { box-shadow: 0 0 0 0 rgba(34,197,94,0.45); }
          70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100%{ box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        /* ── Typing headline ── */
        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 4.5vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 1.08;
          color: var(--text);
          min-height: 1.2em;
        }
        .typing-name {
          background: linear-gradient(130deg, var(--accent) 0%, var(--accent2) 55%, var(--accent) 100%);
          background-size: 220% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 7s linear infinite;
        }
        @keyframes gradShift {
          0%   { background-position: 0% center; }
          100% { background-position: 220% center; }
        }
        .hero-cursor {
          display: inline-block; width: 3px; height: 0.82em;
          background: var(--accent); margin-left: 5px; vertical-align: middle;
          border-radius: 2px;
          animation: cursorBlink 1.1s step-end infinite;
        }
        .hero-cursor--active { animation: none; opacity: 1; }
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ── Role subtitle ── */
        .hero-role {
          font-family: 'Outfit', sans-serif; font-size: 1.1rem; font-weight: 500;
          color: var(--text-nav); display: flex; align-items: center; gap: 10px;
        }
        .role-sep {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); opacity: 0.5;
        }

        /* ── Description ── */
        .hero-desc {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: var(--text-dim); max-width: 580px;
          line-height: 1.85; margin: 0;
        }

        /* ── CTA buttons ── */
        .cta-wrap { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-top: 8px; }

        .cta-btn {
          font-family: 'Outfit', sans-serif; font-size: 0.95rem; font-weight: 700;
          padding: 14px 32px; border-radius: 14px; cursor: pointer; border: none;
          letter-spacing: 0.02em; transition: box-shadow 0.25s, filter 0.25s;
          position: relative; overflow: hidden;
        }
        .cta-btn--primary {
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          color: #fff;
          box-shadow: 0 6px 28px rgba(var(--accent-rgb), 0.35);
        }
        .cta-btn--primary:hover {
          filter: brightness(1.1);
          box-shadow: 0 8px 36px rgba(var(--accent-rgb), 0.52);
        }
        .cta-btn--secondary {
          background: var(--cta-sec-bg); color: var(--text);
          border: 1px solid var(--cta-sec-border);
          backdrop-filter: blur(12px);
        }
        .cta-btn--secondary:hover { background: var(--cta-sec-hover); }

        /* ── Stat strip ── */
        .stat-strip {
          display: flex; flex-wrap: wrap;
          border: 1px solid var(--stat-border);
          background: var(--stat-bg);
          backdrop-filter: blur(20px) saturate(1.6);
          border-radius: 24px; overflow: hidden;
          margin-top: 24px;
        }
        .stat-item {
          display: flex; flex-direction: column; align-items: center;
          gap: 4px; padding: 20px 32px;
          border-right: 1px solid var(--stat-border);
          cursor: default; transition: background 0.22s;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: var(--stat-hover); }
        .stat-icon { font-size: 1.1rem; line-height: 1; margin-bottom: 2px; }
        .stat-num {
          font-family: 'Syne', sans-serif; font-size: 1.55rem; font-weight: 800;
          color: var(--text); line-height: 1;
        }
        .stat-suf { color: var(--accent); }
        .stat-lbl {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--text-dim); margin-top: 2px;
        }
        @media (max-width: 640px) {
          .stat-item { padding: 16px 20px; flex: 1 1 40%; }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3) { border-top: 1px solid var(--stat-border); }
          .stat-item:nth-child(4) { border-top: 1px solid var(--stat-border); border-right: none; }
        }

        /* ── Scroll indicator ── */
        .scroll-ind {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .scroll-text {
          font-family: 'Outfit', sans-serif; font-size: 0.6rem;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--text-dim); opacity: 0.55;
        }
        .scroll-track {
          width: 22px; height: 34px; border-radius: 99px;
          border: 1.5px solid var(--scroll-border);
          display: flex; justify-content: center; padding: 4px 0;
        }
        .scroll-ball {
          width: 4px; height: 8px; border-radius: 99px;
          background: var(--scroll-dot);
        }
      `
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-orb hero-orb-1",
                style: {
                    transform: `translate(${mousePos.x * 30 - 15}px, ${mousePos.y * 20 - 10}px)`
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-orb hero-orb-2",
                style: {
                    bottom: -100,
                    right: -100,
                    transform: `translate(${mousePos.x * -24 + 12}px, ${mousePos.y * -18 + 9}px)`
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-orb hero-orb-3"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-grid"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-vignette"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "avail-badge",
                        initial: {
                            opacity: 0,
                            y: 16,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        },
                        transition: {
                            duration: 0.55,
                            delay: 0.15,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "avail-dot"
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this),
                            "Available for new projects"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.3,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "hero-headline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: plainText
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this),
                                nameText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "typing-name",
                                    children: nameText
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                                    lineNumber: 469,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `hero-cursor${typing || erasing ? " hero-cursor--active" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "hero-role",
                        ...reveal(0.1),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatingRole, {}, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                                lineNumber: 479,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "role-sep"
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            "Toshkent, 🇺🇿"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "hero-desc",
                        ...reveal(0.22),
                        children: "I build high-performance web applications, fluid mobile experiences, and AI-integrated tools — with obsessive attention to detail and UX."
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "cta-wrap",
                        ...reveal(0.36),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MagneticBtn, {
                                primary: true,
                                onClick: ()=>scrollTo("#projects"),
                                children: "Explore My Work →"
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MagneticBtn, {
                                onClick: ()=>scrollTo("#contact"),
                                children: "Let's Talk"
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "stat-strip",
                        ...reveal(0.52),
                        children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...s,
                                index: i
                            }, s.lbl, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                                lineNumber: 503,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "scroll-ind",
                initial: {
                    opacity: 0
                },
                animate: done ? {
                    opacity: 1
                } : {
                    opacity: 0
                },
                transition: {
                    duration: 0.8,
                    delay: done ? 1.1 : 99
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "scroll-text",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scroll-track",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "scroll-ball",
                            animate: {
                                y: [
                                    0,
                                    14,
                                    0
                                ],
                                opacity: [
                                    1,
                                    0.2,
                                    1
                                ]
                            },
                            transition: {
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s3(Hero, "NyiWBSQekO51FSUske0y4oxDa5I=", false, function() {
    return [
        useTypingSequence
    ];
});
_c3 = Hero;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "RotatingRole");
__turbopack_context__.k.register(_c1, "StatCard");
__turbopack_context__.k.register(_c2, "MagneticBtn");
__turbopack_context__.k.register(_c3, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
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
    bg: '#06070E',
    card: 'rgba(255,255,255,0.032)',
    cardBrd: 'rgba(255,255,255,0.07)',
    divider: 'rgba(255,255,255,0.065)',
    accent: '#818CF8',
    accent2: '#A78BFA',
    accentGrad: 'linear-gradient(135deg,#818CF8 0%,#A78BFA 100%)',
    accentGlow: 'rgba(129,140,248,0.18)',
    accentRing: 'rgba(129,140,248,0.30)',
    text: '#F0F0FF',
    textSec: '#7880A0',
    textMuted: '#363D5A',
    pillBg: 'rgba(255,255,255,0.045)',
    pillBrd: 'rgba(255,255,255,0.085)',
    stepLine: 'rgba(255,255,255,0.07)',
    iconBg: 'rgba(129,140,248,0.12)',
    iconBrd: 'rgba(129,140,248,0.20)',
    blob1: 'rgba(99,102,241,0.12)',
    blob2: 'rgba(139,92,246,0.10)',
    secBtnBg: 'rgba(255,255,255,0.06)',
    secBtnBrd: 'rgba(255,255,255,0.10)',
    shadow: '0 20px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)'
};
const LIGHT = {
    bg: '#F1F3FA',
    card: 'rgba(255,255,255,0.80)',
    cardBrd: 'rgba(255,255,255,0.95)',
    divider: 'rgba(0,0,0,0.065)',
    accent: '#4F46E5',
    accent2: '#7C3AED',
    accentGrad: 'linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)',
    accentGlow: 'rgba(79,70,229,0.15)',
    accentRing: 'rgba(79,70,229,0.26)',
    text: '#0C0F1E',
    textSec: '#4B5568',
    textMuted: '#9CA3AF',
    pillBg: 'rgba(255,255,255,0.88)',
    pillBrd: 'rgba(0,0,0,0.07)',
    stepLine: 'rgba(0,0,0,0.065)',
    iconBg: 'rgba(79,70,229,0.08)',
    iconBrd: 'rgba(79,70,229,0.15)',
    blob1: 'rgba(99,102,241,0.08)',
    blob2: 'rgba(139,92,246,0.07)',
    secBtnBg: 'rgba(255,255,255,0.85)',
    secBtnBrd: 'rgba(0,0,0,0.09)',
    shadow: '0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)'
};
// ─── SVG ICONS ────────────────────────────────────────────────
const Ico = {
    Gaming: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "17",
            height: "17",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "6",
                    width: "20",
                    height: "12",
                    rx: "4"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 51,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 12h4M8 10v4"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 51,
                    columnNumber: 216
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "16",
                    cy: "11",
                    r: "1",
                    fill: "currentColor",
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 51,
                    columnNumber: 242
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "18",
                    cy: "13",
                    r: "1",
                    fill: "currentColor",
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 51,
                    columnNumber: 307
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 51,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Reading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "17",
            height: "17",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 52,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 52,
                    columnNumber: 216
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 52,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Music: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "17",
            height: "17",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 18V5l12-2v13"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 53,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "6",
                    cy: "18",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 53,
                    columnNumber: 194
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "18",
                    cy: "16",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 53,
                    columnNumber: 224
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 53,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Travel: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "17",
            height: "17",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 54,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "9",
                    r: "2.5"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 54,
                    columnNumber: 250
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 54,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Coffee: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "17",
            height: "17",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 8h1a4 4 0 010 8h-1"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 55,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 55,
                    columnNumber: 201
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "1",
                    x2: "6",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 55,
                    columnNumber: 253
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "10",
                    y1: "1",
                    x2: "10",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 55,
                    columnNumber: 288
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "14",
                    y1: "1",
                    x2: "14",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 55,
                    columnNumber: 325
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 55,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    AI: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "17",
            height: "17",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "11",
                    width: "18",
                    height: "10",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 56,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "5",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 56,
                    columnNumber: 217
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 7v4M8 14h.01M12 14h.01M16 14h.01"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 56,
                    columnNumber: 247
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 56,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Design: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "17",
            height: "17",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 57,
                columnNumber: 167
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 57,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Puzzles: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "17",
            height: "17",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 58,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "7",
                    y1: "7",
                    x2: "7.01",
                    y2: "7"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 58,
                    columnNumber: 254
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 58,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Briefcase: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "12",
            height: "12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "7",
                    width: "20",
                    height: "14",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 59,
                    columnNumber: 166
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 59,
                    columnNumber: 215
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 59,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Code: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "12",
            height: "12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "16 18 22 12 16 6"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 60,
                    columnNumber: 166
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "8 6 2 12 8 18"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 60,
                    columnNumber: 203
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 60,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Book: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "12",
            height: "12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 61,
                    columnNumber: 166
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 61,
                    columnNumber: 215
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 61,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    ArrowRight: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "15",
            height: "15",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 62,
                    columnNumber: 166
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 5 19 12 12 19"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 62,
                    columnNumber: 204
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 62,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Download: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "15",
            height: "15",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 63,
                    columnNumber: 166
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "7 10 12 15 17 10"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 63,
                    columnNumber: 217
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "15",
                    x2: "12",
                    y2: "3"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 63,
                    columnNumber: 254
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 63,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Pin: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "10",
            height: "10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 64,
                    columnNumber: 164
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 64,
                    columnNumber: 220
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 64,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    User: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "10",
            height: "10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "8",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 65,
                    columnNumber: 166
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 65,
                    columnNumber: 196
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 65,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Heart: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "10",
            height: "10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 66,
                columnNumber: 166
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 66,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)),
    Work: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: "10",
            height: "10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "7",
                    width: "20",
                    height: "14",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 67,
                    columnNumber: 166
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                    lineNumber: 67,
                    columnNumber: 215
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
            lineNumber: 67,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0))
};
// ─── DATA ─────────────────────────────────────────────────────
const INTERESTS = [
    {
        Icon: Ico.Gaming,
        label: 'Gaming',
        color: '#6366F1'
    },
    {
        Icon: Ico.Reading,
        label: 'Reading',
        color: '#8B5CF6'
    },
    {
        Icon: Ico.Music,
        label: 'Music',
        color: '#EC4899'
    },
    {
        Icon: Ico.Travel,
        label: 'Travel',
        color: '#14B8A6'
    },
    {
        Icon: Ico.Coffee,
        label: 'Coffee',
        color: '#F59E0B'
    },
    {
        Icon: Ico.AI,
        label: 'AI / ML',
        color: '#3B82F6'
    },
    {
        Icon: Ico.Design,
        label: 'Design',
        color: '#F43F5E'
    },
    {
        Icon: Ico.Puzzles,
        label: 'Puzzles',
        color: '#10B981'
    }
];
// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 800,
                    height: 800,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${c.blob1} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    top: '-20%',
                    left: '-15%',
                    animation: 'b1 22s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 700,
                    height: 700,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${c.blob2} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    bottom: '-20%',
                    right: '-10%',
                    animation: 'b2 28s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes b1{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,40px)}} @keyframes b2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,-35px)}} @keyframes avail-ping{0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,0.5)}70%{box-shadow:0 0 0 7px rgba(74,222,128,0)}}`
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c = Blobs;
// ─── HELPERS ──────────────────────────────────────────────────
function SectionLabel({ icon, text, c }) {
    const Icon = icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            borderRadius: 999,
            padding: '6px 14px',
            background: `${c.accent}12`,
            border: `1px solid ${c.accent}28`,
            color: c.accent,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: '0.20em',
            textTransform: 'uppercase'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            text
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_c1 = SectionLabel;
function Card({ children, c, delay = 0, style = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...fadeUp(delay),
        style: {
            background: c.card,
            border: `1px solid ${c.cardBrd}`,
            borderRadius: 22,
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: c.shadow,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c2 = Card;
// ─── STAT ─────────────────────────────────────────────────────
function Stat({ value, label, c, delay }) {
    _s();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...fadeUp(delay),
        onHoverStart: ()=>setHov(true),
        onHoverEnd: ()=>setHov(false),
        style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            padding: '18px 10px',
            borderRadius: 14,
            cursor: 'default',
            background: hov ? c.iconBg : 'transparent',
            border: `1px solid ${hov ? c.accentRing : c.divider}`,
            transition: 'all 0.25s'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 30,
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    background: c.accentGrad,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: c.textMuted
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(Stat, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c3 = Stat;
const EXP_ICONS = [
    Ico.Briefcase,
    Ico.Code,
    Ico.Book
];
function ExpStepper({ items, c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column'
        },
        children: items.map((x, i)=>{
            const last = i === items.length - 1;
            const ExpIcon = EXP_ICONS[i] ?? Ico.Briefcase;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeRight(0.5 + i * 0.08),
                style: {
                    display: 'flex',
                    gap: 14
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 26,
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 26,
                                    height: 26,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    marginTop: 2,
                                    background: x.current ? c.accentGrad : c.iconBg,
                                    border: `1px solid ${x.current ? 'transparent' : c.iconBrd}`,
                                    color: x.current ? '#fff' : c.textMuted,
                                    boxShadow: x.current ? `0 0 0 5px ${c.accentGlow}` : 'none',
                                    transition: 'all 0.3s'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpIcon, {}, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this),
                            !last && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    width: 1,
                                    marginTop: 6,
                                    minHeight: 28,
                                    background: c.stepLine
                                }
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                lineNumber: 139,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingBottom: last ? 0 : 22
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 14,
                                            fontWeight: 700,
                                            color: c.text
                                        },
                                        children: x.role
                                    }, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this),
                                    x.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 9,
                                            fontWeight: 800,
                                            letterSpacing: '0.16em',
                                            textTransform: 'uppercase',
                                            borderRadius: 999,
                                            padding: '2px 8px',
                                            background: `${c.accent}18`,
                                            color: c.accent,
                                            border: `1px solid ${c.accent}35`
                                        },
                                        children: "Now"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                        lineNumber: 144,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    marginTop: 3,
                                    color: c.textMuted
                                },
                                children: [
                                    x.place,
                                    " · ",
                                    x.period
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 134,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c4 = ExpStepper;
// ─── INTEREST PILL ────────────────────────────────────────────
function Pill({ Icon, label, color, c, delay }) {
    _s1();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...fadeUp(delay),
        onHoverStart: ()=>setHov(true),
        onHoverEnd: ()=>setHov(false),
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '9px 16px',
            borderRadius: 999,
            cursor: 'default',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            background: hov ? `${color}15` : c.pillBg,
            border: `1px solid ${hov ? `${color}40` : c.pillBrd}`,
            boxShadow: hov ? `0 4px 20px ${color}20` : 'none',
            transform: hov ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.25s',
            color: hov ? color : c.textMuted
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 13,
                    fontWeight: 600,
                    color: hov ? color : c.textSec,
                    transition: 'color 0.2s'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s1(Pill, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c5 = Pill;
// ─── PHOTO ────────────────────────────────────────────────────
function Photo({ c }) {
    _s2();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...fadeLeft(0.08),
        onHoverStart: ()=>setHov(true),
        onHoverEnd: ()=>setHov(false),
        style: {
            position: 'relative',
            borderRadius: 14,
            overflow: 'hidden',
            width: '100%',
            minHeight: 440,
            cursor: 'default',
            border: `1px solid ${hov ? c.accentRing : 'rgba(255,255,255,0.07)'}`,
            boxShadow: hov ? `0 28px 72px rgba(0,0,0,0.40)` : 'none',
            transition: 'box-shadow 0.5s, border-color 0.5s'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/alibek.jpg",
                alt: "Alibek",
                style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transform: hov ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.7s ease',
                    minHeight: 440
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(0,0,0,0.52)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: 999,
                    padding: '5px 12px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#4ADE80',
                            animation: 'avail-ping 2s ease infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#4ADE80',
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.08em'
                        },
                        children: "Available"
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    background: 'rgba(0,0,0,0.52)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: 999,
                    padding: '5px 12px',
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: 11,
                    fontWeight: 600
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.Pin, {}, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    " Khorezm, UZ"
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 18,
                    left: 18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#fff',
                            fontSize: 17,
                            fontWeight: 800,
                            letterSpacing: '-0.02em'
                        },
                        children: "Alibek Allaberganov"
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'rgba(255,255,255,0.55)',
                            fontSize: 12,
                            marginTop: 3
                        },
                        children: "Frontend Developer"
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s2(Photo, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c6 = Photo;
function About() {
    _s3();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>setMounted(true)
    }["About.useEffect"], []);
    if (!mounted) return null;
    const isDark = resolvedTheme === 'dark';
    const c = isDark ? DARK : LIGHT;
    const exp = [
        {
            period: '2024 – Present',
            role: 'Frontend Developer',
            place: 'Freelance',
            current: true
        },
        {
            period: '2023',
            role: 'React Native Dev',
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        style: {
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            background: c.bg,
            transition: 'background 0.5s',
            padding: '80px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Blobs, {
                c: c
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1140,
                    margin: '0 auto',
                    padding: '0 32px',
                    position: 'relative',
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fadeUp(0),
                        style: {
                            marginBottom: 48
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                            icon: Ico.User,
                            text: "About Me",
                            c: c
                        }, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '360px 1fr',
                            gap: 20,
                            alignItems: 'stretch',
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                c: c,
                                delay: 0.06,
                                style: {
                                    padding: 10
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                    c: c
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                c: c,
                                delay: 0.10,
                                style: {
                                    padding: '40px 44px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                                ...fadeRight(0.16),
                                                style: {
                                                    fontSize: 'clamp(2rem,3.5vw,3.2rem)',
                                                    fontWeight: 900,
                                                    letterSpacing: '-0.045em',
                                                    lineHeight: 1.08,
                                                    background: `linear-gradient(125deg, ${c.text} 0%, ${c.accent} 170%)`,
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    marginBottom: 10
                                                },
                                                children: "Hi, I'm Alibek."
                                            }, void 0, false, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                ...fadeRight(0.22),
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    letterSpacing: '0.18em',
                                                    textTransform: 'uppercase',
                                                    color: c.textMuted,
                                                    marginBottom: 28
                                                },
                                                children: "Frontend Developer · Khorezm, Uzbekistan"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                ...fadeRight(0.28),
                                                style: {
                                                    fontSize: 16,
                                                    lineHeight: 1.85,
                                                    color: c.text,
                                                    marginBottom: 14
                                                },
                                                children: [
                                                    "I'm a ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            color: c.accent,
                                                            fontWeight: 700
                                                        },
                                                        children: "passionate frontend developer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 23
                                                    }, this),
                                                    " who loves turning ideas into polished digital experiences — clean code, thoughtful UX, and modern JS frameworks."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                ...fadeRight(0.34),
                                                style: {
                                                    fontSize: 15,
                                                    lineHeight: 1.8,
                                                    color: c.textSec
                                                },
                                                children: [
                                                    "Deeply into ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: c.accent,
                                                            fontWeight: 600
                                                        },
                                                        children: "AI-powered interfaces"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 29
                                                    }, this),
                                                    " and building products that feel natural and delightful to use."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        ...fadeUp(0.40),
                                        style: {
                                            marginTop: 36
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: 1,
                                                    background: c.divider,
                                                    marginBottom: 22
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 800,
                                                    letterSpacing: '0.18em',
                                                    textTransform: 'uppercase',
                                                    color: c.textMuted,
                                                    marginBottom: 14
                                                },
                                                children: "At a Glance"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                        value: "3+",
                                                        label: "Years Exp",
                                                        c: c,
                                                        delay: 0.44
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                        value: "20+",
                                                        label: "Projects",
                                                        c: c,
                                                        delay: 0.48
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                        value: "8+",
                                                        label: "Tech Stack",
                                                        c: c,
                                                        delay: 0.52
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                c: c,
                                delay: 0.20,
                                style: {
                                    padding: '36px 40px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    ...fadeUp(0.24),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 26
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                                icon: Ico.Work,
                                                text: "Experience",
                                                c: c
                                            }, void 0, false, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                lineNumber: 262,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpStepper, {
                                            items: exp,
                                            c: c
                                        }, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 14,
                                                marginTop: 36,
                                                flexWrap: 'wrap'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#projects",
                                                    style: {
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 8,
                                                        padding: '13px 28px',
                                                        borderRadius: 14,
                                                        background: c.accentGrad,
                                                        color: '#fff',
                                                        fontWeight: 700,
                                                        fontSize: 14,
                                                        textDecoration: 'none',
                                                        letterSpacing: '0.01em',
                                                        boxShadow: `0 6px 24px ${c.accentGlow}`,
                                                        transition: 'filter 0.2s, transform 0.2s'
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        const el = e.currentTarget;
                                                        el.style.filter = 'brightness(1.12)';
                                                        el.style.transform = 'translateY(-2px)';
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        const el = e.currentTarget;
                                                        el.style.filter = '';
                                                        el.style.transform = '';
                                                    },
                                                    children: [
                                                        "View Projects ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.ArrowRight, {}, void 0, false, {
                                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "./public/resume/resume.pdf",
                                                    download: true,
                                                    style: {
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 8,
                                                        padding: '13px 28px',
                                                        borderRadius: 14,
                                                        background: c.secBtnBg,
                                                        border: `1px solid ${c.secBtnBrd}`,
                                                        color: c.text,
                                                        fontWeight: 700,
                                                        fontSize: 14,
                                                        textDecoration: 'none',
                                                        letterSpacing: '0.01em',
                                                        transition: 'transform 0.2s, background 0.2s'
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.transform = '';
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.Download, {}, void 0, false, {
                                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Resume"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                c: c,
                                delay: 0.24,
                                style: {
                                    padding: '36px 40px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    ...fadeUp(0.28),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 26
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                                icon: Ico.Heart,
                                                text: "Interests",
                                                c: c
                                            }, void 0, false, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                lineNumber: 288,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 10
                                            },
                                            children: INTERESTS.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                                    Icon: it.Icon,
                                                    label: it.label,
                                                    color: it.color,
                                                    c: c,
                                                    delay: 0.32 + i * 0.04
                                                }, it.label, false, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s3(About, "7mWKygn7kk6b3+dTNlroOqQjeIs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c7 = About;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Blobs");
__turbopack_context__.k.register(_c1, "SectionLabel");
__turbopack_context__.k.register(_c2, "Card");
__turbopack_context__.k.register(_c3, "Stat");
__turbopack_context__.k.register(_c4, "ExpStepper");
__turbopack_context__.k.register(_c5, "Pill");
__turbopack_context__.k.register(_c6, "Photo");
__turbopack_context__.k.register(_c7, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// ─── TOKENS ───────────────────────────────────────────────────
const DARK = {
    bg: '#06070E',
    tile: 'rgba(255,255,255,0.032)',
    tileBrd: 'rgba(255,255,255,0.07)',
    tileHov: 'rgba(255,255,255,0.058)',
    divider: 'rgba(255,255,255,0.065)',
    accent: '#818CF8',
    accent2: '#A78BFA',
    accentGrad: 'linear-gradient(135deg,#818CF8,#A78BFA)',
    text: '#F0F0FF',
    textSec: '#7880A0',
    textMuted: '#363D5A',
    catLine: 'rgba(255,255,255,0.07)',
    blob1: 'rgba(99,102,241,0.13)',
    blob2: 'rgba(139,92,246,0.10)',
    shadow: '0 20px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)'
};
const LIGHT = {
    bg: '#F1F3FA',
    tile: 'rgba(255,255,255,0.80)',
    tileBrd: 'rgba(255,255,255,0.95)',
    tileHov: 'rgba(255,255,255,0.98)',
    divider: 'rgba(0,0,0,0.065)',
    accent: '#4F46E5',
    accent2: '#7C3AED',
    accentGrad: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
    text: '#0C0F1E',
    textSec: '#4B5568',
    textMuted: '#9CA3AF',
    catLine: 'rgba(0,0,0,0.065)',
    blob1: 'rgba(99,102,241,0.08)',
    blob2: 'rgba(139,92,246,0.07)',
    shadow: '0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)'
};
// ─── SVG BRAND ICONS ──────────────────────────────────────────
const BrandIcons = {
    React: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "12",
                    rx: "10.5",
                    ry: "4.2",
                    stroke: c,
                    strokeWidth: "1.4"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 40,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "12",
                    rx: "10.5",
                    ry: "4.2",
                    stroke: c,
                    strokeWidth: "1.4",
                    transform: "rotate(60 12 12)"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 41,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "12",
                    rx: "10.5",
                    ry: "4.2",
                    stroke: c,
                    strokeWidth: "1.4",
                    transform: "rotate(120 12 12)"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 42,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2",
                    fill: c
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 43,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 39,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    'Next.js': (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.7 14.286L8.5 7.5H7v9.007h1.5v-7.3l6.5 8.793H16.5V7.5H15v8.786z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    TypeScript: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "24",
                    height: "24",
                    rx: "3",
                    fill: c
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 53,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.1 14.4v1.7c.3.1.6.2.9.2.4 0 .7-.1.9-.2.2-.2.3-.4.3-.7 0-.2-.1-.4-.2-.5-.1-.1-.4-.3-.8-.4l-.5-.2c-.8-.3-1.3-.5-1.6-.9-.3-.3-.5-.8-.5-1.3 0-.7.3-1.2.8-1.6.5-.4 1.2-.6 2-.6.6 0 1.2.1 1.8.3v1.6c-.5-.3-1-.4-1.6-.4-.4 0-.7.1-.9.2-.2.1-.3.3-.3.6 0 .2.1.4.3.5.2.1.5.3.9.4l.4.2c.7.3 1.2.5 1.5.9.3.3.5.8.5 1.4 0 .7-.3 1.3-.8 1.7-.5.4-1.3.6-2.2.6-.7 0-1.3-.1-1.9-.4zm-3.6-3.6H8.5V9.5h6.8v1.3h-2.5v6.7h-2.3v-6.7z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 54,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    JavaScript: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "24",
                    height: "24",
                    rx: "3",
                    fill: c
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 59,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.5 17.5c.3.6.8 1 1.5 1 .7 0 1.2-.4 1.2-1.8v-5.7h1.8v5.7c0 2.3-1.3 3.3-3 3.3-1.6 0-2.5-.8-3-1.9l1.5-.6zm5.7-.2c.4.7 1 1.2 2 1.2.9 0 1.4-.4 1.4-1 0-.7-.6-1-1.5-1.4l-.5-.2c-1.4-.6-2.3-1.4-2.3-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.8 1.6l-1.5.9c-.3-.6-.6-.8-1.2-.8-.6 0-1 .4-1 .8 0 .6.4.9 1.3 1.3l.5.2c1.6.7 2.5 1.4 2.5 3.1 0 1.7-1.3 2.8-3.2 2.8-1.8 0-2.9-.8-3.5-2l1.3-.9z",
                    fill: "black"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 60,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 58,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    HTML5: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    CSS3: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 69,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Tailwind: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 74,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    'Framer Motion': (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 79,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    'React Native': (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "12",
                    rx: "10.5",
                    ry: "4.2",
                    stroke: c,
                    strokeWidth: "1.4"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "12",
                    rx: "10.5",
                    ry: "4.2",
                    stroke: c,
                    strokeWidth: "1.4",
                    transform: "rotate(60 12 12)"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "12",
                    rx: "10.5",
                    ry: "4.2",
                    stroke: c,
                    strokeWidth: "1.4",
                    transform: "rotate(120 12 12)"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2",
                    fill: c
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 88,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 84,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Supabase: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.01 13.003.74 14.4 1.954 14.4h9.018l.079 8.564c.015.986 1.26 1.41 1.874.637l9.262-11.652c.754-.953.024-2.35-1.19-2.35h-9.018l-.079-8.563z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 92,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Firebase: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.89 15.672L6.255.461A.25.25 0 016.74.288l2.367 4.bonk M3.89 15.672l7.405 4.737M3.89 15.672L.449 9.779a.25.25 0 01.177-.4l2.97-.177M11.295 20.41L6.255.461M11.295 20.41l8.758-5.633-3.613-14.6a.25.25 0 00-.457-.038L11.295 20.41z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 98,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.89 15.67L6.255.46a.25.25 0 01.486.027l2.367 4.82M3.89 15.67l7.406 4.74m0 0l8.758-5.633-3.613-14.6a.252.252 0 00-.457-.038L11.296 20.41M3.89 15.67L.449 9.78a.25.25 0 01.177-.4l2.97-.177 6.66-4.87",
                    fill: c
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 99,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 97,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    'Node.js': (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.998 24a1.494 1.494 0 01-.75-.2l-2.381-1.416c-.356-.2-.182-.27-.065-.31.475-.165.57-.202 1.075-.488a.18.18 0 01.174.013l1.829 1.087a.238.238 0 00.22 0l7.13-4.122a.226.226 0 00.111-.196V6.632a.228.228 0 00-.113-.198l-7.127-4.117a.222.222 0 00-.22 0L4.876 6.434a.228.228 0 00-.114.198v8.232c0 .08.044.156.114.195l1.954 1.128c1.059.53 1.708-.094 1.708-.723V7.496a.207.207 0 01.207-.208h.903a.207.207 0 01.207.208v8.273c0 1.416-.77 2.228-2.112 2.228-.413 0-.738 0-1.645-.447L3.917 16.44a1.502 1.502 0 01-.75-1.299V6.632a1.503 1.503 0 01.75-1.3l7.13-4.124a1.56 1.56 0 011.502 0l7.13 4.123a1.502 1.502 0 01.75 1.3v8.509a1.504 1.504 0 01-.75 1.3l-7.13 4.122a1.508 1.508 0 01-.751.2z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 103,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Git: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.334l2.658 2.658a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.37-2.581L13.37 8.098v6.284a1.837 1.837 0 11-1.503-.543V7.956a1.837 1.837 0 01-.997-2.404L8.14 2.834 .454 10.52a1.55 1.55 0 000 2.187l10.48 10.477a1.55 1.55 0 002.187 0l10.424-10.424a1.55 1.55 0 000-2.187"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 108,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Figma: (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zm-4.587-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117v-6.038H8.148zm4.587 15.019c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019zm6.864-6.499c0 2.476-2.014 4.49-4.49 4.49h-1.471v-8.98h1.471c2.476 0 4.49 2.014 4.49 4.49zm-4.49-3.019h-.001v6.038h.001c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 113,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    'AI Tools': (color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: color,
            strokeWidth: "1.6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "11",
                    width: "18",
                    height: "10",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 119,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "5",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 120,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 7v4M8 14h.01M12 14h.01M16 14h.01"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                    lineNumber: 121,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 118,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    'VS Code': (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
            lineNumber: 125,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
const getIcon = (name, color)=>{
    const fn = BrandIcons[name];
    return fn ? fn(color) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "26",
        height: "26",
        fill: "none",
        stroke: color,
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v4M12 16h.01"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 135,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// ─── SKILL DATA ───────────────────────────────────────────────
const CATEGORIES = [
    {
        id: 'frontend',
        label: 'Frontend',
        skills: [
            {
                name: 'React',
                color: '#61DAFB'
            },
            {
                name: 'Next.js',
                color: '#AAAAAA'
            },
            {
                name: 'TypeScript',
                color: '#3178C6'
            },
            {
                name: 'JavaScript',
                color: '#F7DF1E'
            },
            {
                name: 'HTML5',
                color: '#E44D26'
            },
            {
                name: 'CSS3',
                color: '#264DE4'
            },
            {
                name: 'Tailwind',
                color: '#38BDF8'
            },
            {
                name: 'Framer Motion',
                color: '#BB4AE8'
            }
        ]
    },
    {
        id: 'mobile',
        label: 'Mobile & Backend',
        skills: [
            {
                name: 'React Native',
                color: '#61DAFB'
            },
            {
                name: 'Supabase',
                color: '#3ECF8E'
            },
            {
                name: 'Firebase',
                color: '#FFCA28'
            },
            {
                name: 'Node.js',
                color: '#68A063'
            }
        ]
    },
    {
        id: 'tools',
        label: 'Tools & AI',
        skills: [
            {
                name: 'Git',
                color: '#F05032'
            },
            {
                name: 'Figma',
                color: '#F24E1E'
            },
            {
                name: 'AI Tools',
                color: '#A78BFA'
            },
            {
                name: 'VS Code',
                color: '#007ACC'
            }
        ]
    }
];
// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 800,
                    height: 800,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${c.blob1} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    top: '-20%',
                    left: '-15%',
                    animation: 'sb1 22s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 700,
                    height: 700,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${c.blob2} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    bottom: '-20%',
                    right: '-10%',
                    animation: 'sb2 28s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes sb1{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,40px)}} @keyframes sb2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,-35px)}}`
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_c = Blobs;
function SkillTile({ skill, c, isDark, index, catIndex }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rawX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rawY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawX, {
        stiffness: 180,
        damping: 18
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawY, {
        stiffness: 180,
        damping: 18
    });
    const onMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkillTile.useCallback[onMove]": (e)=>{
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            rawX.set((e.clientX - (r.left + r.width / 2)) * 0.28);
            rawY.set((e.clientY - (r.top + r.height / 2)) * 0.28);
        }
    }["SkillTile.useCallback[onMove]"], [
        rawX,
        rawY
    ]);
    const onLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkillTile.useCallback[onLeave]": ()=>{
            rawX.set(0);
            rawY.set(0);
            setHov(false);
        }
    }["SkillTile.useCallback[onLeave]"], [
        rawX,
        rawY
    ]);
    const delay = catIndex * 0.08 + index * 0.05;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        onMouseMove: onMove,
        onMouseLeave: onLeave,
        onMouseEnter: ()=>setHov(true),
        style: {
            x,
            y,
            position: 'relative'
        },
        initial: {
            opacity: 0,
            y: 32,
            scale: 0.92
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        viewport: {
            once: true,
            margin: '-40px'
        },
        transition: {
            type: 'spring',
            stiffness: 52,
            damping: 15,
            delay
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: -14,
                    borderRadius: 28,
                    pointerEvents: 'none',
                    zIndex: 0,
                    background: `radial-gradient(circle, ${skill.color}50 0%, transparent 70%)`,
                    filter: 'blur(18px)',
                    opacity: hov ? 1 : 0,
                    transition: 'opacity 0.35s'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                whileHover: {
                    scale: 1.08
                },
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 18
                },
                style: {
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    padding: '22px 12px 18px',
                    borderRadius: 18,
                    cursor: 'default',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    background: hov ? c.tileHov : c.tile,
                    border: `1px solid ${hov ? skill.color + '55' : c.tileBrd}`,
                    boxShadow: hov ? `0 18px 48px rgba(0,0,0,${isDark ? 0.45 : 0.12}), 0 0 0 1px ${skill.color}25, inset 0 1px 0 rgba(255,255,255,${isDark ? 0.08 : 0.75})` : `0 4px 18px rgba(0,0,0,${isDark ? 0.28 : 0.06}), inset 0 1px 0 rgba(255,255,255,${isDark ? 0.05 : 0.85})`,
                    transition: 'background 0.25s, border-color 0.25s, box-shadow 0.3s'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 52,
                            height: 52,
                            borderRadius: 14,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: hov ? `${skill.color}20` : isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                            border: `1px solid ${hov ? skill.color + '40' : isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'}`,
                            boxShadow: hov ? `0 4px 16px ${skill.color}28` : 'none',
                            transition: 'all 0.3s',
                            filter: hov ? 'none' : isDark ? 'grayscale(0.25) brightness(0.9)' : 'grayscale(0.15)'
                        },
                        children: getIcon(skill.name, skill.color)
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: '-0.01em',
                            textAlign: 'center',
                            lineHeight: 1.3,
                            color: hov ? c.text : c.textSec,
                            transition: 'color 0.22s'
                        },
                        children: skill.name
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: skill.color,
                            boxShadow: hov ? `0 0 10px ${skill.color}` : 'none',
                            opacity: hov ? 1 : 0,
                            transform: hov ? 'scale(1)' : 'scale(0)',
                            transition: 'all 0.25s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s(SkillTile, "94MBdBkninpFpuPl6pk0LEjtbds=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c1 = SkillTile;
// ─── CATEGORY ─────────────────────────────────────────────────
function Category({ cat, c, isDark, catIndex }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            margin: '-30px'
        },
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 15,
            delay: catIndex * 0.1
        },
        style: {
            marginBottom: catIndex < CATEGORIES.length - 1 ? 72 : 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    marginBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.04em',
                            lineHeight: 1,
                            color: c.text,
                            flexShrink: 0
                        },
                        children: cat.label
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            height: 1,
                            background: c.catLine
                        }
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 10,
                            fontWeight: 800,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: c.textMuted,
                            flexShrink: 0
                        },
                        children: [
                            cat.skills.length,
                            " skills"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                    gap: 14
                },
                children: cat.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillTile, {
                        skill: skill,
                        c: c,
                        isDark: isDark,
                        index: i,
                        catIndex: catIndex
                    }, skill.name, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_c2 = Category;
function Skills() {
    _s1();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>setMounted(true)
    }["Skills.useEffect"], []);
    if (!mounted) return null;
    const isDark = resolvedTheme === 'dark';
    const c = isDark ? DARK : LIGHT;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        style: {
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            background: c.bg,
            transition: 'background 0.5s',
            padding: '80px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Blobs, {
                c: c
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1100,
                    margin: '0 auto',
                    padding: '0 32px',
                    position: 'relative',
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 28
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            type: 'spring',
                            stiffness: 50,
                            damping: 15
                        },
                        style: {
                            marginBottom: 72
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 7,
                                    borderRadius: 999,
                                    padding: '6px 14px',
                                    marginBottom: 20,
                                    background: `${c.accent}12`,
                                    border: `1px solid ${c.accent}28`,
                                    color: c.accent,
                                    fontSize: 10,
                                    fontWeight: 800,
                                    letterSpacing: '0.20em',
                                    textTransform: 'uppercase'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        width: "10",
                                        height: "10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "16 18 22 12 16 6"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                                                lineNumber: 338,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "8 6 2 12 8 18"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                                                lineNumber: 338,
                                                columnNumber: 52
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    "Tech Stack"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.045em',
                                    lineHeight: 1,
                                    marginBottom: 18,
                                    background: `linear-gradient(128deg, ${c.text} 0%, ${c.accent} 160%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                },
                                children: [
                                    "Skills &",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                                        lineNumber: 344,
                                        columnNumber: 21
                                    }, this),
                                    "Technologies"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 16,
                                    lineHeight: 1.75,
                                    maxWidth: 480,
                                    color: c.textSec
                                },
                                children: "Tools and technologies I use to craft fast, beautiful, and accessible digital experiences."
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    CATEGORIES.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Category, {
                            cat: cat,
                            c: c,
                            isDark: isDark,
                            catIndex: i
                        }, cat.id, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
_s1(Skills, "7mWKygn7kk6b3+dTNlroOqQjeIs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c3 = Skills;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Blobs");
__turbopack_context__.k.register(_c1, "SkillTile");
__turbopack_context__.k.register(_c2, "Category");
__turbopack_context__.k.register(_c3, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
// ─── TOKENS (same system as Navbar / About / Skills) ──────────
const DARK = {
    bg: '#06070E',
    card: 'rgba(255,255,255,0.032)',
    cardBrd: 'rgba(255,255,255,0.07)',
    cardHov: 'rgba(255,255,255,0.058)',
    divider: 'rgba(255,255,255,0.065)',
    accent: '#818CF8',
    accent2: '#A78BFA',
    accentGrad: 'linear-gradient(135deg,#818CF8,#A78BFA)',
    text: '#F0F0FF',
    textSec: '#7880A0',
    textMuted: '#363D5A',
    pillBg: 'rgba(255,255,255,0.05)',
    pillBrd: 'rgba(255,255,255,0.09)',
    blob1: 'rgba(99,102,241,0.12)',
    blob2: 'rgba(139,92,246,0.10)',
    grid: 'rgba(255,255,255,0.022)',
    browserBar: '#1a1a1a',
    browserBrd: '#2a2a2a',
    urlBg: '#0d0d0d',
    urlBrd: '#333',
    urlText: '#444'
};
const LIGHT = {
    bg: '#F1F3FA',
    card: 'rgba(255,255,255,0.80)',
    cardBrd: 'rgba(255,255,255,0.95)',
    cardHov: 'rgba(255,255,255,0.98)',
    divider: 'rgba(0,0,0,0.065)',
    accent: '#4F46E5',
    accent2: '#7C3AED',
    accentGrad: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
    text: '#0C0F1E',
    textSec: '#4B5568',
    textMuted: '#9CA3AF',
    pillBg: 'rgba(255,255,255,0.88)',
    pillBrd: 'rgba(0,0,0,0.07)',
    blob1: 'rgba(99,102,241,0.07)',
    blob2: 'rgba(139,92,246,0.06)',
    grid: 'rgba(0,0,0,0.028)',
    browserBar: '#ececec',
    browserBrd: '#d8d8d8',
    urlBg: '#fff',
    urlBrd: '#ddd',
    urlText: '#aaa'
};
// ─── PROJECTS DATA ────────────────────────────────────────────
const PROJECTS = [
    {
        id: 'ai-english',
        large: true,
        title: 'AI-Powered English Learning Platform',
        desc: 'An interactive educational platform that uses AI for personalized English lessons, quizzes, progress tracking, and an intelligent tutor. Includes a responsive website and cross-platform mobile app.',
        tech: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Supabase',
            'React Native',
            'AI Integration'
        ],
        screenGrad: 'linear-gradient(135deg,#0EA5E9 0%,#4F46E5 52%,#0f1729 100%)',
        accentDark: '#818CF8',
        accentLight: '#4F46E5',
        glowDark: 'rgba(129,140,248,0.35)',
        glowLight: 'rgba(79,70,229,0.15)',
        liveUrl: 'https://github.com/alibek-developer/',
        codeUrl: 'https://github.com/alibek-developer/'
    },
    {
        id: 'restaurant',
        large: false,
        title: 'Restaurant Management System',
        desc: 'A comprehensive platform for restaurant owners to manage menus, reservations, orders, and analytics with real-time updates and payment integration.',
        tech: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Firebase'
        ],
        screenGrad: 'linear-gradient(135deg,#7C3AED 0%,#C026D3 52%,#1e1040 100%)',
        accentDark: '#A78BFA',
        accentLight: '#7C3AED',
        glowDark: 'rgba(167,139,250,0.32)',
        glowLight: 'rgba(124,58,237,0.14)',
        liveUrl: 'https://github.com/alibek-developer/',
        codeUrl: 'https://github.com/alibek-developer/'
    },
    {
        id: 'ecommerce',
        large: false,
        title: 'Restourant mobile app',
        desc: 'A sleek admin panel for managing e-commerce products, orders, and analytics with clean architecture and responsive design across all device sizes.',
        tech: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Firebase'
        ],
        screenGrad: 'linear-gradient(135deg,#0891B2 0%,#06B6D4 52%,#052e3e 100%)',
        accentDark: '#67E8F9',
        accentLight: '#0891B2',
        glowDark: 'rgba(103,232,249,0.28)',
        glowLight: 'rgba(8,145,178,0.14)',
        liveUrl: 'https://github.com/alibek-developer/',
        codeUrl: 'https://github.com/alibek-developer/'
    }
];
// ─── SVG ICONS ────────────────────────────────────────────────
const ExternalIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "15 3 21 3 21 9"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 83,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "14",
                x2: "21",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 83,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ExternalIcon;
const GithubIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
            lineNumber: 88,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = GithubIcon;
const CodeIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "16 18 22 12 16 6"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 93,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "8 6 2 12 8 18"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 93,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = CodeIcon;
const FolderIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
            lineNumber: 98,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = FolderIcon;
// ─── HOOKS ────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            if (!ref.current) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(ref.current);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        visible
    ];
}
_s(useInView, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
function useTilt(maxDeg = 8) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        on: false
    });
    const onMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTilt.useCallback[onMove]": (e)=>{
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            setTilt({
                x: (e.clientX - r.left) / r.width - 0.5,
                y: (e.clientY - r.top) / r.height - 0.5,
                on: true
            });
        }
    }["useTilt.useCallback[onMove]"], []);
    const onLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTilt.useCallback[onLeave]": ()=>setTilt({
                x: 0,
                y: 0,
                on: false
            })
    }["useTilt.useCallback[onLeave]"], []);
    const transform = tilt.on ? `perspective(1000px) rotateX(${-tilt.y * maxDeg}deg) rotateY(${tilt.x * maxDeg}deg) translateY(-8px) scale(1.02)` : `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
    return [
        ref,
        transform,
        tilt.on,
        onMove,
        onLeave
    ];
}
_s1(useTilt, "pZHb7GftXffso3VhURuHQRz+D4M=");
function useParallax(speed = 0.18) {
    _s2();
    const [y, setY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useParallax.useEffect": ()=>{
            const fn = {
                "useParallax.useEffect.fn": ()=>setY(window.scrollY * speed)
            }["useParallax.useEffect.fn"];
            window.addEventListener('scroll', fn, {
                passive: true
            });
            fn();
            return ({
                "useParallax.useEffect": ()=>window.removeEventListener('scroll', fn)
            })["useParallax.useEffect"];
        }
    }["useParallax.useEffect"], [
        speed
    ]);
    return y;
}
_s2(useParallax, "/slePoHeZAYn9Z8z3nv1hA+Qbbw=");
// ─── BROWSER MOCKUP ───────────────────────────────────────────
function BrowserMockup({ gradient, large, c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 24,
            perspective: 900
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                borderRadius: 12,
                overflow: 'hidden',
                transform: `rotateX(${large ? 6 : 9}deg) rotateY(${large ? -3 : 4}deg)`,
                transition: 'transform 0.9s cubic-bezier(.34,1.3,.64,1)',
                border: `1px solid ${c.browserBrd}`,
                boxShadow: c === DARK ? '0 24px 60px rgba(0,0,0,0.80), 0 0 0 1px rgba(255,255,255,0.04)' : '0 14px 40px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '9px 12px',
                        background: c.browserBar,
                        borderBottom: `1px solid ${c.browserBrd}`
                    },
                    children: [
                        [
                            '#FF5F57',
                            '#FFBD2E',
                            '#28C840'
                        ].map((col, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    background: col,
                                    boxShadow: '0 0 0 1px rgba(0,0,0,0.15)',
                                    flexShrink: 0
                                }
                            }, i, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                marginLeft: 8,
                                borderRadius: 5,
                                padding: '3px 10px',
                                background: c.urlBg,
                                border: `1px solid ${c.urlBrd}`,
                                color: c.urlText,
                                fontFamily: 'monospace',
                                fontSize: 10,
                                overflow: 'hidden',
                                whiteSpace: 'nowrap'
                            },
                            children: "https://alibek.vercel.app"
                        }, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: large ? 164 : 116,
                        background: gradient,
                        position: 'relative',
                        overflow: 'hidden',
                        padding: '14px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 7
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8
                            },
                            children: [
                                72,
                                48,
                                60
                            ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 8,
                                        width: w,
                                        borderRadius: 4,
                                        background: 'rgba(255,255,255,0.22)'
                                    }
                                }, i, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                    lineNumber: 169,
                                    columnNumber: 41
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        [
                            88,
                            68,
                            80,
                            55
                        ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 5,
                                    width: `${w}%`,
                                    borderRadius: 3,
                                    background: 'rgba(255,255,255,0.14)'
                                }
                            }, i, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 171,
                                columnNumber: 43
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8,
                                marginTop: 4
                            },
                            children: [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        height: large ? 40 : 28,
                                        borderRadius: 8,
                                        background: 'rgba(255,255,255,0.10)',
                                        border: '1px solid rgba(255,255,255,0.18)'
                                    }
                                }, i, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                    lineNumber: 173,
                                    columnNumber: 31
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(130deg,rgba(255,255,255,0.07) 0%,transparent 45%)',
                                pointerEvents: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c4 = BrowserMockup;
// ─── TECH PILL ────────────────────────────────────────────────
function TechPill({ label, accentColor, c }) {
    _s3();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        style: {
            display: 'inline-block',
            borderRadius: 6,
            padding: '4px 10px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            cursor: 'default',
            background: hov ? `${accentColor}18` : c.pillBg,
            border: `1px solid ${hov ? `${accentColor}40` : c.pillBrd}`,
            color: hov ? accentColor : c.textMuted,
            transition: 'all 0.2s'
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s3(TechPill, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c5 = TechPill;
// ─── PROJECT CARD ─────────────────────────────────────────────
function ProjectCard({ project, delay, c, isDark }) {
    _s4();
    const [visRef, visible] = useInView(0.08);
    const [tiltRef, tiltTransform, tiltOn, onMove, onLeave] = useTilt(project.large ? 5 : 8);
    const accentColor = isDark ? project.accentDark : project.accentLight;
    const glowColor = isDark ? project.glowDark : project.glowLight;
    const setRef = (el)=>{
        visRef.current = el;
        tiltRef.current = el;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        ref: setRef,
        onMouseMove: onMove,
        onMouseLeave: onLeave,
        style: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 22,
            cursor: 'default',
            padding: 'clamp(20px,2.5vw,32px)',
            background: tiltOn ? c.cardHov : c.card,
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: `1px solid ${tiltOn ? accentColor + '40' : c.cardBrd}`,
            boxShadow: tiltOn ? `0 24px 64px rgba(0,0,0,${isDark ? 0.6 : 0.14}), 0 0 0 1px ${accentColor}22, inset 0 1px 0 rgba(255,255,255,${isDark ? 0.07 : 0.8})` : `0 6px 28px rgba(0,0,0,${isDark ? 0.35 : 0.07}), inset 0 1px 0 rgba(255,255,255,${isDark ? 0.05 : 0.9})`,
            willChange: 'transform',
            transform: visible ? tiltTransform : 'translateY(40px) scale(0.96)',
            opacity: visible ? 1 : 0,
            transition: visible ? `transform 0.5s cubic-bezier(.16,1,.3,1) ${delay}s, opacity 0.55s ease ${delay}s, border-color 0.3s, box-shadow 0.35s, background 0.25s` : 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 140,
                    height: 140,
                    borderRadius: '0 22px 0 0',
                    pointerEvents: 'none',
                    background: `radial-gradient(circle at top right, ${glowColor} 0%, transparent 65%)`,
                    opacity: tiltOn ? 1 : 0.25,
                    transition: 'opacity 0.4s'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            isDark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: {
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 22,
                    pointerEvents: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserMockup, {
                        gradient: project.screenGrad,
                        large: project.large,
                        c: c
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 12,
                            marginBottom: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    fontWeight: 800,
                                    letterSpacing: '0.12em',
                                    color: accentColor,
                                    opacity: 0.6,
                                    marginTop: 4,
                                    flexShrink: 0,
                                    fontVariantNumeric: 'tabular-nums'
                                },
                                children: String(PROJECTS.indexOf(project) + 1).padStart(2, '0')
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: project.large ? 'clamp(1.15rem,2vw,1.6rem)' : 'clamp(1rem,1.6vw,1.25rem)',
                                    fontWeight: 800,
                                    letterSpacing: '-0.03em',
                                    lineHeight: 1.2,
                                    color: c.text,
                                    margin: 0
                                },
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 14,
                            lineHeight: 1.8,
                            color: c.textSec,
                            margin: '0 0 18px'
                        },
                        children: project.desc
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 6,
                            marginBottom: 22
                        },
                        children: project.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechPill, {
                                label: t,
                                accentColor: accentColor,
                                c: c
                            }, t, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 1,
                            background: c.divider,
                            marginBottom: 20
                        }
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 10,
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                                primary: true,
                                href: project.liveUrl,
                                accentColor: accentColor,
                                glowColor: glowColor,
                                isDark: isDark,
                                c: c,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalIcon, {}, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    " Live Demo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                                href: project.codeUrl,
                                accentColor: accentColor,
                                glowColor: glowColor,
                                isDark: isDark,
                                c: c,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GithubIcon, {}, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    " Source Code"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s4(ProjectCard, "q8jVtvRzH9ERwuLZmaqyTaF5MYU=", false, function() {
    return [
        useInView,
        useTilt
    ];
});
_c6 = ProjectCard;
// ─── ACTION BUTTON ────────────────────────────────────────────
function ActionBtn({ children, primary, accentColor, glowColor, isDark, c, href }) {
    _s5();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            padding: '11px 22px',
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.01em',
            cursor: 'pointer',
            outline: 'none',
            textDecoration: 'none',
            background: primary ? hov ? `linear-gradient(135deg,${accentColor},${isDark ? '#A78BFA' : '#7C3AED'})` : `linear-gradient(135deg,${accentColor},${isDark ? '#9CA3F5' : '#6366F1'})` : hov ? `${accentColor}18` : isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.85)',
            color: primary ? '#fff' : c.text,
            border: primary ? '1px solid transparent' : `1px solid ${hov ? accentColor + '40' : c.cardBrd}`,
            boxShadow: primary && hov ? `0 6px 24px ${glowColor}` : 'none',
            transform: hov ? 'translateY(-2px)' : 'none',
            transition: 'all 0.22s ease'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
_s5(ActionBtn, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c7 = ActionBtn;
// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 800,
                    height: 800,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${c.blob1} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    top: '-20%',
                    left: '-15%',
                    animation: 'pb1 22s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 700,
                    height: 700,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${c.blob2} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    bottom: '-20%',
                    right: '-10%',
                    animation: 'pb2 28s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes pb1{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,40px)}} @keyframes pb2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,-35px)}}`
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 344,
        columnNumber: 5
    }, this);
}
_c8 = Blobs;
// ─── SECTION LABEL ────────────────────────────────────────────
function SectionLabel({ c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            borderRadius: 999,
            padding: '6px 14px',
            background: `${c.accent}12`,
            border: `1px solid ${c.accent}28`,
            color: c.accent,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: '0.20em',
            textTransform: 'uppercase'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FolderIcon, {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            "Selected Projects"
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 355,
        columnNumber: 5
    }, this);
}
_c9 = SectionLabel;
function Projects() {
    _s6();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const parallaxY = useParallax(0.18);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>setMounted(true)
    }["Projects.useEffect"], []);
    if (!mounted) return null;
    const isDark = resolvedTheme === 'dark';
    const c = isDark ? DARK : LIGHT;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        style: {
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            background: c.bg,
            transition: 'background 0.5s',
            padding: '80px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Blobs, {
                c: c
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 0,
                    backgroundImage: `linear-gradient(${c.grid} 1px,transparent 1px),linear-gradient(90deg,${c.grid} 1px,transparent 1px)`,
                    backgroundSize: '52px 52px',
                    transform: `translateY(${-parallaxY * 0.3}px)`
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1360,
                    margin: '0 auto',
                    padding: '0 32px',
                    position: 'relative',
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 56
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    c: c
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 'clamp(2.8rem,7vw,5.5rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.045em',
                                    lineHeight: 1,
                                    marginBottom: 6,
                                    background: `linear-gradient(128deg, ${c.text} 0%, ${c.accent} 160%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                },
                                children: [
                                    "Selected",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                        lineNumber: 402,
                                        columnNumber: 21
                                    }, this),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 4,
                                    borderRadius: 2,
                                    width: '100%',
                                    maxWidth: 360,
                                    background: c.accentGrad,
                                    marginBottom: 20
                                }
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 16,
                                    lineHeight: 1.75,
                                    maxWidth: 560,
                                    color: c.textSec
                                },
                                children: "A few projects I've built using modern technologies like React, Next.js, TypeScript, Supabase, Firebase, React Native, and AI tools."
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(12,1fr)',
                            gap: 20,
                            alignItems: 'start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: 'span 12'
                                },
                                className: "lg-span-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `@media(min-width:1024px){.lg-span-7{grid-column:span 7!important}.lg-span-5{grid-column:span 5!important}}`
                                    }, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                        project: PROJECTS[0],
                                        delay: 0,
                                        c: c,
                                        isDark: isDark
                                    }, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: 'span 12',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20
                                },
                                className: "lg-span-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                        project: PROJECTS[1],
                                        delay: 0.12,
                                        c: c,
                                        isDark: isDark
                                    }, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                        project: PROJECTS[2],
                                        delay: 0.24,
                                        c: c,
                                        isDark: isDark
                                    }, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 56,
                            display: 'flex',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/alibek-developer",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 10,
                                padding: '14px 32px',
                                borderRadius: 14,
                                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)',
                                border: `1px solid ${c.cardBrd}`,
                                color: c.textSec,
                                fontSize: 14,
                                fontWeight: 700,
                                textDecoration: 'none',
                                letterSpacing: '0.01em',
                                backdropFilter: 'blur(12px)',
                                transition: 'all 0.25s'
                            },
                            onMouseEnter: (e)=>{
                                const el = e.currentTarget;
                                el.style.color = c.accent;
                                el.style.borderColor = c.accent + '40';
                                el.style.transform = 'translateY(-2px)';
                            },
                            onMouseLeave: (e)=>{
                                const el = e.currentTarget;
                                el.style.color = c.textSec;
                                el.style.borderColor = c.cardBrd;
                                el.style.transform = '';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GithubIcon, {}, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this),
                                "View all projects on GitHub",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalIcon, {}, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
_s6(Projects, "oGC5GStJMEop0e0Bmv1PRzSzNA8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        useParallax
    ];
});
_c10 = Projects;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "ExternalIcon");
__turbopack_context__.k.register(_c1, "GithubIcon");
__turbopack_context__.k.register(_c2, "CodeIcon");
__turbopack_context__.k.register(_c3, "FolderIcon");
__turbopack_context__.k.register(_c4, "BrowserMockup");
__turbopack_context__.k.register(_c5, "TechPill");
__turbopack_context__.k.register(_c6, "ProjectCard");
__turbopack_context__.k.register(_c7, "ActionBtn");
__turbopack_context__.k.register(_c8, "Blobs");
__turbopack_context__.k.register(_c9, "SectionLabel");
__turbopack_context__.k.register(_c10, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// ─── TOKENS (same system as all sections) ─────────────────────
const DARK = {
    bg: '#06070E',
    card: 'rgba(255,255,255,0.032)',
    cardBrd: 'rgba(255,255,255,0.07)',
    cardHov: 'rgba(255,255,255,0.055)',
    divider: 'rgba(255,255,255,0.065)',
    accent: '#818CF8',
    accent2: '#A78BFA',
    accentGrad: 'linear-gradient(135deg,#818CF8,#A78BFA)',
    text: '#F0F0FF',
    textSec: '#7880A0',
    textMuted: '#363D5A',
    inputBg: 'rgba(255,255,255,0.04)',
    inputBrd: 'rgba(255,255,255,0.08)',
    inputFocusBrd: '#818CF8',
    inputFocusRing: 'rgba(129,140,248,0.15)',
    blob1: 'rgba(99,102,241,0.12)',
    blob2: 'rgba(139,92,246,0.10)',
    shadow: '0 20px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)',
    pillBg: 'rgba(255,255,255,0.05)',
    pillBrd: 'rgba(255,255,255,0.09)'
};
const LIGHT = {
    bg: '#F1F3FA',
    card: 'rgba(255,255,255,0.80)',
    cardBrd: 'rgba(255,255,255,0.95)',
    cardHov: 'rgba(255,255,255,0.98)',
    divider: 'rgba(0,0,0,0.065)',
    accent: '#4F46E5',
    accent2: '#7C3AED',
    accentGrad: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
    text: '#0C0F1E',
    textSec: '#4B5568',
    textMuted: '#9CA3AF',
    inputBg: 'rgba(0,0,0,0.025)',
    inputBrd: 'rgba(0,0,0,0.10)',
    inputFocusBrd: '#4F46E5',
    inputFocusRing: 'rgba(79,70,229,0.12)',
    blob1: 'rgba(99,102,241,0.08)',
    blob2: 'rgba(139,92,246,0.07)',
    shadow: '0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)',
    pillBg: 'rgba(255,255,255,0.88)',
    pillBrd: 'rgba(0,0,0,0.07)'
};
// ─── SVG ICONS ────────────────────────────────────────────────
const Ico = {
    Send: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "22",
                    y1: "2",
                    x2: "11",
                    y2: "13"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "22 2 15 22 11 13 2 9 22 2"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 48,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Check: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "20 6 9 17 4 12"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Spin: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                animation: 'spin 0.9s linear infinite'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 12a9 9 0 11-6.219-8.56"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 58,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@keyframes spin{to{transform:rotate(360deg)}}`
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 59,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
            lineNumber: 57,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    GitHub: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
            lineNumber: 63,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    LinkedIn: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
            lineNumber: 68,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Telegram: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
            lineNumber: 73,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Mail: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "10",
            height: "10",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 79,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22,6 12,13 2,6"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 80,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
            lineNumber: 78,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    ArrowRight: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 5 19 12 12 19"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 85,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
            lineNumber: 84,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
const SOCIALS = [
    {
        name: 'GitHub',
        Icon: Ico.GitHub,
        href: 'https://github.com/alibek-developer',
        handle: '@alibek-developer',
        color: '#818CF8'
    },
    {
        name: 'LinkedIn',
        Icon: Ico.LinkedIn,
        href: 'https://www.linkedin.com/in/alibek-allaberganov-903a1b363',
        handle: 'Alibek Allaberganov',
        color: '#0A66C2'
    },
    {
        name: 'Telegram',
        Icon: Ico.Telegram,
        href: 'https://t.me/Alibekdew',
        handle: '@Alibekdew',
        color: '#26A5E4'
    }
];
// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 800,
                    height: 800,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${c.blob1} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    top: '-20%',
                    left: '-15%',
                    animation: 'cb1 22s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 700,
                    height: 700,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${c.blob2} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    bottom: '-20%',
                    right: '-10%',
                    animation: 'cb2 28s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes cb1{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,40px)}} @keyframes cb2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,-35px)}}`
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c = Blobs;
// ─── SECTION LABEL ────────────────────────────────────────────
function SectionLabel({ c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            borderRadius: 999,
            padding: '6px 14px',
            background: `${c.accent}12`,
            border: `1px solid ${c.accent}28`,
            color: c.accent,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: '0.20em',
            textTransform: 'uppercase'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.Mail, {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            "Contact"
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c1 = SectionLabel;
// ─── CARD WRAPPER ─────────────────────────────────────────────
function Card({ children, c, style = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: c.card,
            border: `1px solid ${c.cardBrd}`,
            borderRadius: 22,
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: c.shadow,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c2 = Card;
// ─── SOCIAL LINK ──────────────────────────────────────────────
function SocialLink({ social, c }) {
    _s();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        href: social.href,
        target: "_blank",
        rel: "noopener noreferrer",
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        animate: {
            x: hov ? 6 : 0
        },
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 22
        },
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '14px 16px',
            borderRadius: 14,
            textDecoration: 'none',
            background: hov ? `${social.color}10` : 'transparent',
            border: `1px solid ${hov ? social.color + '30' : 'transparent'}`,
            transition: 'background 0.22s, border-color 0.22s'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: hov ? `${social.color}18` : c.pillBg,
                    border: `1px solid ${hov ? social.color + '35' : c.pillBrd}`,
                    color: hov ? social.color : c.textMuted,
                    transition: 'all 0.22s'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.Icon, {}, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 10,
                            fontWeight: 800,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: c.textMuted,
                            marginBottom: 2
                        },
                        children: social.name
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 13,
                            fontWeight: 700,
                            color: hov ? social.color : c.text,
                            transition: 'color 0.2s'
                        },
                        children: social.handle
                    }, void 0, false, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: hov ? social.color : c.textMuted,
                    opacity: hov ? 1 : 0.3,
                    transition: 'all 0.2s'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.ArrowRight, {}, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(SocialLink, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c3 = SocialLink;
// ─── INPUT FIELD ──────────────────────────────────────────────
function Field({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    paddingLeft: 4,
                    opacity: 0.55
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_c4 = Field;
function Contact() {
    _s1();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>setMounted(true)
    }["Contact.useEffect"], []);
    if (!mounted) return null;
    const isDark = resolvedTheme === 'dark';
    const c = isDark ? DARK : LIGHT;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus('loading');
        try {
            await new Promise((r)=>setTimeout(r, 1800));
            setStatus('success');
            setForm({
                name: '',
                email: '',
                message: ''
            });
            setTimeout(()=>setStatus('idle'), 5000);
        } catch  {
            setStatus('error');
            setTimeout(()=>setStatus('idle'), 3000);
        }
    };
    const inputStyle = (field)=>({
            width: '100%',
            padding: '14px 18px',
            borderRadius: 14,
            fontSize: 14,
            fontWeight: 500,
            outline: 'none',
            fontFamily: 'inherit',
            boxSizing: 'border-box',
            background: focused === field ? isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.98)' : c.inputBg,
            border: `1px solid ${focused === field ? c.inputFocusBrd : c.inputBrd}`,
            boxShadow: focused === field ? `0 0 0 3px ${c.inputFocusRing}` : 'none',
            color: c.text,
            transition: 'all 0.22s'
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        style: {
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            background: c.bg,
            transition: 'background 0.5s',
            padding: '80px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Blobs, {
                c: c
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1000,
                    margin: '0 auto',
                    padding: '0 32px',
                    position: 'relative',
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 28
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            type: 'spring',
                            stiffness: 52,
                            damping: 15
                        },
                        style: {
                            marginBottom: 52
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                    c: c
                                }, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                    lineNumber: 244,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 'clamp(2.8rem,7vw,5rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.045em',
                                    lineHeight: 1,
                                    marginBottom: 16,
                                    background: `linear-gradient(128deg, ${c.text} 0%, ${c.accent} 160%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                },
                                children: [
                                    "Let's Work",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                        lineNumber: 251,
                                        columnNumber: 23
                                    }, this),
                                    "Together"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 16,
                                    lineHeight: 1.75,
                                    maxWidth: 480,
                                    color: c.textSec
                                },
                                children: "I'm currently available for freelance projects and full-time opportunities. Let's build something amazing!"
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.6fr',
                            gap: 20,
                            alignItems: 'start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -32
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    type: 'spring',
                                    stiffness: 52,
                                    damping: 15,
                                    delay: 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    c: c,
                                    style: {
                                        padding: '28px 20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 10,
                                                fontWeight: 800,
                                                letterSpacing: '0.18em',
                                                textTransform: 'uppercase',
                                                color: c.textMuted,
                                                marginBottom: 20,
                                                paddingLeft: 4
                                            },
                                            children: "Connect With Me"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 4
                                            },
                                            children: SOCIALS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLink, {
                                                    social: s,
                                                    c: c
                                                }, s.name, false, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 35
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: 1,
                                                background: c.divider,
                                                margin: '24px 0'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 12,
                                                padding: '14px 16px',
                                                borderRadius: 14,
                                                background: c.pillBg,
                                                border: `1px solid ${c.pillBrd}`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: '50%',
                                                        background: '#22C55E',
                                                        flexShrink: 0,
                                                        boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
                                                        animation: 'avail 2s ease infinite'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 700,
                                                                color: c.text
                                                            },
                                                            children: "Available for work"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: c.textMuted,
                                                                marginTop: 1
                                                            },
                                                            children: "Response within 24 hours"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                                    children: `@keyframes avail{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.45)}70%{box-shadow:0 0 0 8px rgba(34,197,94,0)}}`
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 32
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    type: 'spring',
                                    stiffness: 52,
                                    damping: 15,
                                    delay: 0.15
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    c: c,
                                    style: {
                                        padding: '36px 36px',
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 20
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: '1fr 1fr',
                                                        gap: 16
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                            label: "Your Name",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                placeholder: "John Doe",
                                                                value: form.name,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        name: e.target.value
                                                                    }),
                                                                onFocus: ()=>setFocused('name'),
                                                                onBlur: ()=>setFocused(null),
                                                                style: {
                                                                    ...inputStyle('name')
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                            label: "Your Email",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                required: true,
                                                                placeholder: "john@example.com",
                                                                value: form.email,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        email: e.target.value
                                                                    }),
                                                                onFocus: ()=>setFocused('email'),
                                                                onBlur: ()=>setFocused(null),
                                                                style: {
                                                                    ...inputStyle('email')
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                    label: "Your Message",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        rows: 5,
                                                        placeholder: "Tell me about your project...",
                                                        value: form.message,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                message: e.target.value
                                                            }),
                                                        onFocus: ()=>setFocused('message'),
                                                        onBlur: ()=>setFocused(null),
                                                        style: {
                                                            ...inputStyle('message'),
                                                            resize: 'none',
                                                            lineHeight: 1.7
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: status !== 'idle',
                                                    style: {
                                                        width: '100%',
                                                        height: 58,
                                                        borderRadius: 14,
                                                        background: status === 'success' ? 'linear-gradient(135deg,#22C55E,#16A34A)' : c.accentGrad,
                                                        color: '#fff',
                                                        fontWeight: 800,
                                                        fontSize: 15,
                                                        border: 'none',
                                                        cursor: status !== 'idle' ? 'not-allowed' : 'pointer',
                                                        opacity: status === 'loading' ? 0.8 : 1,
                                                        boxShadow: `0 6px 28px ${status === 'success' ? 'rgba(34,197,94,0.35)' : 'rgba(129,140,248,0.30)'}`,
                                                        transition: 'all 0.3s',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: 10,
                                                        letterSpacing: '0.01em'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                        mode: "wait",
                                                        children: [
                                                            status === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    scale: 0.8
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    scale: 1
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    scale: 0.8
                                                                },
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 8
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.Spin, {}, void 0, false, {
                                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                                        lineNumber: 352,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Sending..."
                                                                ]
                                                            }, "loading", true, {
                                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 23
                                                            }, this),
                                                            status === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: 10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    y: -10
                                                                },
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 8
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.Check, {}, void 0, false, {
                                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Message Sent!"
                                                                ]
                                                            }, "success", true, {
                                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 23
                                                            }, this),
                                                            status === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0
                                                                },
                                                                animate: {
                                                                    opacity: 1
                                                                },
                                                                exit: {
                                                                    opacity: 0
                                                                },
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 8
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.Send, {}, void 0, false, {
                                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                                        lineNumber: 364,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Send Message"
                                                                ]
                                                            }, "idle", true, {
                                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 23
                                                            }, this),
                                                            status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0
                                                                },
                                                                animate: {
                                                                    opacity: 1
                                                                },
                                                                exit: {
                                                                    opacity: 0
                                                                },
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 8
                                                                },
                                                                children: "Try Again"
                                                            }, "error", false, {
                                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: 12,
                                                        textAlign: 'center',
                                                        color: c.textMuted,
                                                        margin: 0
                                                    },
                                                    children: "I'll get back to you within 24 hours 🤝"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: status === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                exit: {
                                                    opacity: 0
                                                },
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    borderRadius: 22,
                                                    background: isDark ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
                                                    backdropFilter: 'blur(2px)',
                                                    pointerEvents: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                                lineNumber: 384,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
_s1(Contact, "+M2jcHifquf8Zf1mjMh0q+9Yv3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c5 = Contact;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Blobs");
__turbopack_context__.k.register(_c1, "SectionLabel");
__turbopack_context__.k.register(_c2, "Card");
__turbopack_context__.k.register(_c3, "SocialLink");
__turbopack_context__.k.register(_c4, "Field");
__turbopack_context__.k.register(_c5, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
// ─── TOKENS ───────────────────────────────────────────────────
const DARK = {
    bg: '#06070E',
    brd: 'rgba(255,255,255,0.065)',
    accent: '#818CF8',
    accent2: '#A78BFA',
    accentGrad: 'linear-gradient(135deg,#818CF8,#A78BFA)',
    text: '#F0F0FF',
    textSec: '#7880A0',
    textMuted: '#363D5A',
    pillBg: 'rgba(255,255,255,0.045)',
    pillBrd: 'rgba(255,255,255,0.08)',
    pillHov: 'rgba(255,255,255,0.075)'
};
const LIGHT = {
    bg: '#F1F3FA',
    brd: 'rgba(0,0,0,0.065)',
    accent: '#4F46E5',
    accent2: '#7C3AED',
    accentGrad: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
    text: '#0C0F1E',
    textSec: '#4B5568',
    textMuted: '#9CA3AF',
    pillBg: 'rgba(255,255,255,0.85)',
    pillBrd: 'rgba(0,0,0,0.08)',
    pillHov: 'rgba(255,255,255,0.98)'
};
// ─── SVG ICONS ────────────────────────────────────────────────
const Ico = {
    GitHub: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
            lineNumber: 31,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    LinkedIn: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
            lineNumber: 36,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Telegram: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Heart: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 24 24",
            fill: "#F43F5E",
            stroke: "#F43F5E",
            strokeWidth: "1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
            lineNumber: 46,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    ArrowUp: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "19",
                    x2: "12",
                    y2: "5"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "5 12 12 5 19 12"
                }, void 0, false, {
                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                    lineNumber: 52,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
            lineNumber: 51,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
const SOCIALS = [
    {
        name: 'GitHub',
        Icon: Ico.GitHub,
        href: 'https://github.com/alibek-developer',
        color: '#818CF8'
    },
    {
        name: 'LinkedIn',
        Icon: Ico.LinkedIn,
        href: 'https://www.linkedin.com/in/alibek-allaberganov-903a1b363',
        color: '#0A66C2'
    },
    {
        name: 'Telegram',
        Icon: Ico.Telegram,
        href: 'https://t.me/Alibekdew',
        color: '#26A5E4'
    }
];
// ─── SOCIAL ICON BTN ──────────────────────────────────────────
function SocialBtn({ social, c }) {
    _s();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        href: social.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": social.name,
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        whileHover: {
            y: -4
        },
        whileTap: {
            scale: 0.92
        },
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20
        },
        style: {
            width: 42,
            height: 42,
            borderRadius: 12,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: hov ? `${social.color}15` : c.pillBg,
            border: `1px solid ${hov ? social.color + '35' : c.pillBrd}`,
            color: hov ? social.color : c.textMuted,
            textDecoration: 'none',
            transition: 'background 0.22s, border-color 0.22s, color 0.22s',
            boxShadow: hov ? `0 4px 16px ${social.color}25` : 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.Icon, {}, void 0, false, {
            fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(SocialBtn, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c = SocialBtn;
// ─── BACK TO TOP ──────────────────────────────────────────────
function BackToTop({ c }) {
    _s1();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: ()=>window.scrollTo({
                top: 0,
                behavior: 'smooth'
            }),
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        whileHover: {
            y: -3
        },
        whileTap: {
            scale: 0.92
        },
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            padding: '9px 18px',
            borderRadius: 999,
            background: hov ? c.pillHov : c.pillBg,
            border: `1px solid ${hov ? c.accent + '35' : c.pillBrd}`,
            color: hov ? c.accent : c.textMuted,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.06em',
            cursor: 'pointer',
            outline: 'none',
            transition: 'all 0.22s'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.ArrowUp, {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            "Back to top"
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s1(BackToTop, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c1 = BackToTop;
function Footer() {
    _s2();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>setMounted(true)
    }["Footer.useEffect"], []);
    if (!mounted) return null;
    const isDark = resolvedTheme === 'dark';
    const c = isDark ? DARK : LIGHT;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: c.bg,
            borderTop: `1px solid ${c.brd}`,
            position: 'relative',
            transition: 'background 0.5s'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: -1,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${c.accent}50, transparent)`,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1140,
                    margin: '0 auto',
                    padding: '32px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            }),
                        whileHover: {
                            scale: 1.04
                        },
                        whileTap: {
                            scale: 0.96
                        },
                        style: {
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            display: 'flex',
                            alignItems: 'baseline',
                            fontFamily: "'Syne', sans-serif",
                            fontSize: '1.55rem',
                            fontWeight: 800,
                            letterSpacing: '-0.05em',
                            lineHeight: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: c.accentGrad,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                },
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: c.text
                                },
                                children: "libek"
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: c.accentGrad,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                },
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.15
                        },
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: 13,
                            fontWeight: 500,
                            color: c.textMuted,
                            margin: 0
                        },
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Alibek Allaberganov · Made with",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: {
                                    scale: [
                                        1,
                                        1.28,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 1.4,
                                    repeat: Infinity,
                                    repeatDelay: 2.2
                                },
                                style: {
                                    display: 'inline-flex'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ico.Heart, {}, void 0, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        },
                        children: [
                            SOCIALS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        delay: 0.1 + i * 0.07
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialBtn, {
                                        social: s,
                                        c: c
                                    }, void 0, false, {
                                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                }, s.name, false, {
                                    fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 1,
                                    height: 20,
                                    background: c.brd,
                                    margin: '0 4px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackToTop, {
                                c: c
                            }, void 0, false, {
                                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s2(Footer, "7mWKygn7kk6b3+dTNlroOqQjeIs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c2 = Footer;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SocialBtn");
__turbopack_context__.k.register(_c1, "BackToTop");
__turbopack_context__.k.register(_c2, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/Desktop/myportfolio/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/src/components/sections/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/src/components/sections/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/src/components/sections/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Skills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/src/components/sections/Skills.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/src/components/sections/Projects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/src/components/sections/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/Desktop/myportfolio/src/components/sections/Footer.tsx [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Skills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$Desktop$2f$myportfolio$2f$src$2f$components$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/projects/Desktop/myportfolio/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/Desktop/myportfolio/src/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projects_Desktop_myportfolio_src_abc860a1._.js.map