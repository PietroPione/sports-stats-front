"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/results/page",{

/***/ "(app-pages-browser)/./components/ResultsTable.js":
/*!************************************!*\
  !*** ./components/ResultsTable.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResultsTable)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_directus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/directus */ \"(app-pages-browser)/./lib/directus.mjs\");\n/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteButton */ \"(app-pages-browser)/./components/DeleteButton.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Servizio Directus\n // Componente DeleteButton\nfunction ResultsTable(param) {\n    let { initialData } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    // Funzione per eliminare un record\n    async function handleDelete(id) {\n        try {\n            await _lib_directus__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteOne(id); // Elimina il record da Directus\n            alert(\"Record con ID \".concat(id, \" eliminato con successo!\"));\n            // Aggiorna i dati rimuovendo il record eliminato\n            setData((prevData)=>prevData.filter((item)=>item.id !== id));\n        } catch (error) {\n            alert(\"Errore durante l'eliminazione del record.\");\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"table-auto w-full border-collapse border border-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Gender\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Event\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Performance\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Rank\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Surname\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Nation\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Venue\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Date\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Source\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-4 py-2 border\",\n                            children: \"Actions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: data.map((result)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: result.gender\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: result.event\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: result.performance\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: result.rank\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: result.name\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: result.surname\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: result.nation\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: result.venue\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: new Date(result.date).toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: result.source\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-4 py-2 border\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    id: result.id,\n                                    onDelete: handleDelete\n                                }, void 0, false, {\n                                    fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, result.id, true, {\n                        fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pietrofranchitti/Dropbox/Mac/Desktop/Lavori/sports-stats/sports-stats-front/components/ResultsTable.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(ResultsTable, \"hDGcfQHkZj5ZsEBk8saO8jx9VfY=\");\n_c = ResultsTable;\nvar _c;\n$RefreshReg$(_c, \"ResultsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVzdWx0c1RhYmxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ0ssQ0FBQyxvQkFBb0I7QUFDakIsQ0FBQywwQkFBMEI7QUFFdEQsU0FBU0csYUFBYSxLQUFlO1FBQWYsRUFBRUMsV0FBVyxFQUFFLEdBQWY7O0lBQ25DLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQ0k7SUFFakMsbUNBQW1DO0lBQ25DLGVBQWVHLGFBQWFDLEVBQUU7UUFDNUIsSUFBSTtZQUNGLE1BQU1QLHFEQUFRQSxDQUFDUSxTQUFTLENBQUNELEtBQUssZ0NBQWdDO1lBRTlERSxNQUFNLGlCQUFvQixPQUFIRixJQUFHO1lBQzFCLGlEQUFpRDtZQUNqREYsUUFBUSxDQUFDSyxXQUFhQSxTQUFTQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0wsRUFBRSxLQUFLQTtRQUM5RCxFQUFFLE9BQU9NLE9BQU87WUFDZEosTUFBTTtZQUNOSyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBTUMsV0FBVTs7MEJBQ2YsOERBQUNDOzBCQUNDLDRFQUFDQzs7c0NBQ0MsOERBQUNDOzRCQUFHSCxXQUFVO3NDQUFtQjs7Ozs7O3NDQUNqQyw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQW1COzs7Ozs7c0NBQ2pDLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBbUI7Ozs7OztzQ0FDakMsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUFtQjs7Ozs7O3NDQUNqQyw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQW1COzs7Ozs7c0NBQ2pDLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBbUI7Ozs7OztzQ0FDakMsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUFtQjs7Ozs7O3NDQUNqQyw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQW1COzs7Ozs7c0NBQ2pDLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBbUI7Ozs7OztzQ0FDakMsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUFtQjs7Ozs7O3NDQUNqQyw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHckMsOERBQUNJOzBCQUNFaEIsS0FBS2lCLEdBQUcsQ0FBQyxDQUFDQyx1QkFDVCw4REFBQ0o7d0JBQW1CRixXQUFVOzswQ0FDNUIsOERBQUNPO2dDQUFHUCxXQUFVOzBDQUFvQk0sT0FBT0UsTUFBTTs7Ozs7OzBDQUMvQyw4REFBQ0Q7Z0NBQUdQLFdBQVU7MENBQW9CTSxPQUFPRyxLQUFLOzs7Ozs7MENBQzlDLDhEQUFDRjtnQ0FBR1AsV0FBVTswQ0FBb0JNLE9BQU9JLFdBQVc7Ozs7OzswQ0FDcEQsOERBQUNIO2dDQUFHUCxXQUFVOzBDQUFvQk0sT0FBT0ssSUFBSTs7Ozs7OzBDQUM3Qyw4REFBQ0o7Z0NBQUdQLFdBQVU7MENBQW9CTSxPQUFPTSxJQUFJOzs7Ozs7MENBQzdDLDhEQUFDTDtnQ0FBR1AsV0FBVTswQ0FBb0JNLE9BQU9PLE9BQU87Ozs7OzswQ0FDaEQsOERBQUNOO2dDQUFHUCxXQUFVOzBDQUFvQk0sT0FBT1EsTUFBTTs7Ozs7OzBDQUMvQyw4REFBQ1A7Z0NBQUdQLFdBQVU7MENBQW9CTSxPQUFPUyxLQUFLOzs7Ozs7MENBQzlDLDhEQUFDUjtnQ0FBR1AsV0FBVTswQ0FDWCxJQUFJZ0IsS0FBS1YsT0FBT1csSUFBSSxFQUFFQyxrQkFBa0I7Ozs7OzswQ0FFM0MsOERBQUNYO2dDQUFHUCxXQUFVOzBDQUFvQk0sT0FBT2EsTUFBTTs7Ozs7OzBDQUMvQyw4REFBQ1o7Z0NBQUdQLFdBQVU7MENBQ1osNEVBQUNmLHFEQUFZQTtvQ0FBQ00sSUFBSWUsT0FBT2YsRUFBRTtvQ0FBRTZCLFVBQVU5Qjs7Ozs7Ozs7Ozs7O3VCQWRsQ2dCLE9BQU9mLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjVCO0dBekR3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWV0cm9mcmFuY2hpdHRpL0Ryb3Bib3gvTWFjL0Rlc2t0b3AvTGF2b3JpL3Nwb3J0cy1zdGF0cy9zcG9ydHMtc3RhdHMtZnJvbnQvY29tcG9uZW50cy9SZXN1bHRzVGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGlyZWN0dXMgZnJvbSBcIkAvbGliL2RpcmVjdHVzXCI7IC8vIFNlcnZpemlvIERpcmVjdHVzXG5pbXBvcnQgRGVsZXRlQnV0dG9uIGZyb20gXCIuL0RlbGV0ZUJ1dHRvblwiOyAvLyBDb21wb25lbnRlIERlbGV0ZUJ1dHRvblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHRzVGFibGUoeyBpbml0aWFsRGF0YSB9KSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcblxuICAvLyBGdW56aW9uZSBwZXIgZWxpbWluYXJlIHVuIHJlY29yZFxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUoaWQpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGlyZWN0dXMuZGVsZXRlT25lKGlkKTsgLy8gRWxpbWluYSBpbCByZWNvcmQgZGEgRGlyZWN0dXNcblxuICAgICAgYWxlcnQoYFJlY29yZCBjb24gSUQgJHtpZH0gZWxpbWluYXRvIGNvbiBzdWNjZXNzbyFgKTtcbiAgICAgIC8vIEFnZ2lvcm5hIGkgZGF0aSByaW11b3ZlbmRvIGlsIHJlY29yZCBlbGltaW5hdG9cbiAgICAgIHNldERhdGEoKHByZXZEYXRhKSA9PiBwcmV2RGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3JlIGR1cmFudGUgbCdlbGltaW5hemlvbmUgZGVsIHJlY29yZC5cIik7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvIHctZnVsbCBib3JkZXItY29sbGFwc2UgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXJcIj5HZW5kZXI8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyXCI+RXZlbnQ8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyXCI+UGVyZm9ybWFuY2U8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyXCI+UmFuazwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXJcIj5OYW1lPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlclwiPlN1cm5hbWU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyXCI+TmF0aW9uPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlclwiPlZlbnVlPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlclwiPkRhdGU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyXCI+U291cmNlPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlclwiPkFjdGlvbnM8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2RhdGEubWFwKChyZXN1bHQpID0+IChcbiAgICAgICAgICA8dHIga2V5PXtyZXN1bHQuaWR9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlclwiPntyZXN1bHQuZ2VuZGVyfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlclwiPntyZXN1bHQuZXZlbnR9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyXCI+e3Jlc3VsdC5wZXJmb3JtYW5jZX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXJcIj57cmVzdWx0LnJhbmt9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyXCI+e3Jlc3VsdC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlclwiPntyZXN1bHQuc3VybmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXJcIj57cmVzdWx0Lm5hdGlvbn08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXJcIj57cmVzdWx0LnZlbnVlfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlclwiPlxuICAgICAgICAgICAgICB7bmV3IERhdGUocmVzdWx0LmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyXCI+e3Jlc3VsdC5zb3VyY2V9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyXCI+XG4gICAgICAgICAgICAgIDxEZWxldGVCdXR0b24gaWQ9e3Jlc3VsdC5pZH0gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkaXJlY3R1cyIsIkRlbGV0ZUJ1dHRvbiIsIlJlc3VsdHNUYWJsZSIsImluaXRpYWxEYXRhIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVEZWxldGUiLCJpZCIsImRlbGV0ZU9uZSIsImFsZXJ0IiwicHJldkRhdGEiLCJmaWx0ZXIiLCJpdGVtIiwiZXJyb3IiLCJjb25zb2xlIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInJlc3VsdCIsInRkIiwiZ2VuZGVyIiwiZXZlbnQiLCJwZXJmb3JtYW5jZSIsInJhbmsiLCJuYW1lIiwic3VybmFtZSIsIm5hdGlvbiIsInZlbnVlIiwiRGF0ZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzb3VyY2UiLCJvbkRlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ResultsTable.js\n"));

/***/ })

});