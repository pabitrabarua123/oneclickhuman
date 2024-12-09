"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5C91738%5CDesktop%5Cchatenai-nextjs-app-route%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91738%5CDesktop%5Cchatenai-nextjs-app-route&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5C91738%5CDesktop%5Cchatenai-nextjs-app-route%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91738%5CDesktop%5Cchatenai-nextjs-app-route&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_91738_Desktop_chatenai_nextjs_app_route_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\91738\\\\Desktop\\\\chatenai-nextjs-app-route\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_91738_Desktop_chatenai_nextjs_app_route_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUM5MTczOCU1Q0Rlc2t0b3AlNUNjaGF0ZW5haS1uZXh0anMtYXBwLXJvdXRlJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUM5MTczOCU1Q0Rlc2t0b3AlNUNjaGF0ZW5haS1uZXh0anMtYXBwLXJvdXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM2QztBQUMxSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRlbmFpLz82YmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXDkxNzM4XFxcXERlc2t0b3BcXFxcY2hhdGVuYWktbmV4dGpzLWFwcC1yb3V0ZVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFw5MTczOFxcXFxEZXNrdG9wXFxcXGNoYXRlbmFpLW5leHRqcy1hcHAtcm91dGVcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5C91738%5CDesktop%5Cchatenai-nextjs-app-route%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91738%5CDesktop%5Cchatenai-nextjs-app-route&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n\n\nconst authenticateUser = async (email, password)=>{\n    try {\n        const response = await fetch(\"https://oneclickhuman.com/api_request/login_test\", {\n            mode: \"cors\",\n            method: \"POST\",\n            body: JSON.stringify({\n                \"email\": email,\n                \"password\": password\n            }),\n            headers: {\n                \"Content-Type\": \"application/json; charset=UTF-8\"\n            }\n        });\n        const json = await response.json();\n        if (json.login === \"success\") {\n            return {\n                user_status: json.login,\n                user_id: json.id,\n                time: json.time,\n                user_email: json.user_email,\n                role: json.role\n            };\n        } else {\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error authenticating user:\", error);\n        return null;\n    }\n};\nconst registerUser = async (email, password)=>{\n    try {\n        const response = await fetch(\"https://oneclickhuman.com/api_request/register_test\", {\n            mode: \"cors\",\n            method: \"POST\",\n            body: JSON.stringify({\n                \"email\": email,\n                \"password\": password\n            }),\n            headers: {\n                \"Content-Type\": \"application/json; charset=UTF-8\"\n            }\n        });\n        const json = await response.json();\n        return {\n            user_id: json.id\n        };\n    } catch (error) {\n        console.error(\"Error registering user:\", error);\n        return null;\n    }\n};\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                },\n                isSignUp: {\n                    label: \"Sign Up\",\n                    type: \"hidden\"\n                }\n            },\n            authorize: async (credentials)=>{\n                if (credentials.isSignUp) {\n                    // Handle sign-up\n                    const user = await registerUser(credentials.email, credentials.password);\n                    if (user) {\n                        return user;\n                    } else {\n                        throw new Error(\"Sign-up failed\");\n                    }\n                } else {\n                    // Handle login\n                    const user = await authenticateUser(credentials.email, credentials.password);\n                    if (user) {\n                        return user;\n                    } else {\n                        throw new Error(\"Invalid credentials\");\n                    }\n                }\n            }\n        })\n    ],\n    debug: true,\n    pages: {\n        signIn: \"/signin\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            // Add all fields to the token on login or registration\n            if (user) {\n                console.log(user);\n                token.user_status = user.user_status;\n                token.user_id = user.user_id;\n                token.user_email = user.user_email;\n                token.time = user.time;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            console.log(token);\n            // Make all fields available in the session\n            session.user.user_status = token.user_status;\n            session.user.user_id = token.user_id;\n            session.user.user_email = token.user_email;\n            session.user.time = token.time;\n            session.user.role = token.role;\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFFbEUsTUFBTUUsbUJBQW1CLE9BQU9DLE9BQU9DO0lBQ3JDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sb0RBQW9EO1lBQy9FQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQixTQUFTUjtnQkFDVCxZQUFZQztZQUNkO1lBQ0FRLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPLE1BQU1SLFNBQVNRLElBQUk7UUFFaEMsSUFBSUEsS0FBS0MsS0FBSyxLQUFLLFdBQVc7WUFDNUIsT0FBTztnQkFDTEMsYUFBY0YsS0FBS0MsS0FBSztnQkFDeEJFLFNBQVVILEtBQUtJLEVBQUU7Z0JBQ2pCQyxNQUFPTCxLQUFLSyxJQUFJO2dCQUNoQkMsWUFBYU4sS0FBS00sVUFBVTtnQkFDNUJDLE1BQU9QLEtBQUtPLElBQUk7WUFDbEI7UUFDRixPQUFPO1lBQ0wsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1FBQzVDLE9BQU87SUFDVDtBQUNGO0FBRUEsTUFBTUUsZUFBZSxPQUFPcEIsT0FBT0M7SUFDakMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx1REFBdUQ7WUFDbEZDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CLFNBQVNSO2dCQUNULFlBQVlDO1lBQ2Q7WUFDQVEsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtRQUVBLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1EsSUFBSTtRQUVoQyxPQUFPO1lBQUVHLFNBQVNILEtBQUtJLEVBQUU7UUFBQztJQUU1QixFQUFFLE9BQU9JLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBTztJQUNUO0FBQ0Y7QUFFTyxNQUFNRyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1R4QiwyRUFBbUJBLENBQUM7WUFDbEJ5QixNQUFNO1lBQ05DLGFBQWE7Z0JBQ1h4QixPQUFPO29CQUFFeUIsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdEN6QixVQUFVO29CQUFFd0IsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztnQkFDaERDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVdDLE1BQU07Z0JBQVM7WUFDL0M7WUFDQUUsV0FBVyxPQUFPSjtnQkFDaEIsSUFBSUEsWUFBWUcsUUFBUSxFQUFFO29CQUN4QixpQkFBaUI7b0JBQ2pCLE1BQU1FLE9BQU8sTUFBTVQsYUFBYUksWUFBWXhCLEtBQUssRUFBRXdCLFlBQVl2QixRQUFRO29CQUN2RSxJQUFJNEIsTUFBTTt3QkFDUixPQUFPQTtvQkFDVCxPQUFPO3dCQUNMLE1BQU0sSUFBSUMsTUFBTTtvQkFDbEI7Z0JBQ0YsT0FBTztvQkFDTCxlQUFlO29CQUNmLE1BQU1ELE9BQU8sTUFBTTlCLGlCQUFpQnlCLFlBQVl4QixLQUFLLEVBQUV3QixZQUFZdkIsUUFBUTtvQkFDM0UsSUFBSTRCLE1BQU07d0JBQ1IsT0FBT0E7b0JBQ1QsT0FBTzt3QkFDTCxNQUFNLElBQUlDLE1BQU07b0JBQ2xCO2dCQUNGO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLE9BQU87SUFDUEMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLO0lBQ3BCO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVYsSUFBSSxFQUFFO1lBQ3ZCLHVEQUF1RDtZQUN2RCxJQUFJQSxNQUFNO2dCQUNSVixRQUFRcUIsR0FBRyxDQUFDWDtnQkFDWlUsTUFBTTNCLFdBQVcsR0FBR2lCLEtBQUtqQixXQUFXO2dCQUNwQzJCLE1BQU0xQixPQUFPLEdBQUdnQixLQUFLaEIsT0FBTztnQkFDNUIwQixNQUFNdkIsVUFBVSxHQUFHYSxLQUFLYixVQUFVO2dCQUNsQ3VCLE1BQU14QixJQUFJLEdBQUdjLEtBQUtkLElBQUk7Z0JBQ3RCd0IsTUFBTXRCLElBQUksR0FBR1ksS0FBS1osSUFBSTtZQUN4QjtZQUNBLE9BQU9zQjtRQUNUO1FBQ0EsTUFBTUwsU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBRTtZQUM5QnBCLFFBQVFxQixHQUFHLENBQUNEO1lBQ1osMkNBQTJDO1lBQzNDTCxRQUFRTCxJQUFJLENBQUNqQixXQUFXLEdBQUcyQixNQUFNM0IsV0FBVztZQUM1Q3NCLFFBQVFMLElBQUksQ0FBQ2hCLE9BQU8sR0FBRzBCLE1BQU0xQixPQUFPO1lBQ3BDcUIsUUFBUUwsSUFBSSxDQUFDYixVQUFVLEdBQUd1QixNQUFNdkIsVUFBVTtZQUMxQ2tCLFFBQVFMLElBQUksQ0FBQ2QsSUFBSSxHQUFHd0IsTUFBTXhCLElBQUk7WUFDOUJtQixRQUFRTCxJQUFJLENBQUNaLElBQUksR0FBR3NCLE1BQU10QixJQUFJO1lBRTlCLE9BQU9pQjtRQUNUO0lBQ0Y7SUFDQU8sUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQ3JDLEVBQUU7QUFFRixNQUFNQyxVQUFVaEQsZ0RBQVFBLENBQUN3QjtBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRlbmFpLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5cclxuY29uc3QgYXV0aGVudGljYXRlVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9vbmVjbGlja2h1bWFuLmNvbS9hcGlfcmVxdWVzdC9sb2dpbl90ZXN0Jywge1xyXG4gICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgJ2VtYWlsJzogZW1haWwsXHJcbiAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmRcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmIChqc29uLmxvZ2luID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgdXNlcl9zdGF0dXMgOiBqc29uLmxvZ2luLCBcclxuICAgICAgICB1c2VyX2lkIDoganNvbi5pZCwgXHJcbiAgICAgICAgdGltZSA6IGpzb24udGltZSwgXHJcbiAgICAgICAgdXNlcl9lbWFpbCA6IGpzb24udXNlcl9lbWFpbCxcclxuICAgICAgICByb2xlIDoganNvbi5yb2xlLFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhdXRoZW50aWNhdGluZyB1c2VyOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vb25lY2xpY2todW1hbi5jb20vYXBpX3JlcXVlc3QvcmVnaXN0ZXJfdGVzdCcsIHtcclxuICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICdlbWFpbCc6IGVtYWlsLFxyXG4gICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgdXNlcl9pZDoganNvbi5pZCB9O1xyXG4gICAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZWdpc3RlcmluZyB1c2VyOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgICAgaXNTaWduVXA6IHsgbGFiZWw6IFwiU2lnbiBVcFwiLCB0eXBlOiBcImhpZGRlblwiIH0sIC8vIEFkZCBoaWRkZW4gaW5wdXQgZm9yIHNpZ24tdXBcclxuICAgICAgfSxcclxuICAgICAgYXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcclxuICAgICAgICBpZiAoY3JlZGVudGlhbHMuaXNTaWduVXApIHtcclxuICAgICAgICAgIC8vIEhhbmRsZSBzaWduLXVwXHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVnaXN0ZXJVc2VyKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZCk7XHJcbiAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNpZ24tdXAgZmFpbGVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgbG9naW5cclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGVVc2VyKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZCk7XHJcbiAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBkZWJ1ZzogdHJ1ZSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9zaWduaW5cIixcclxuICB9LFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gICAgbWF4QWdlOiAyNCAqIDYwICogNjAsIC8vIDI0IGhvdXJzXHJcbiAgfSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgLy8gQWRkIGFsbCBmaWVsZHMgdG8gdGhlIHRva2VuIG9uIGxvZ2luIG9yIHJlZ2lzdHJhdGlvblxyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIHRva2VuLnVzZXJfc3RhdHVzID0gdXNlci51c2VyX3N0YXR1czsgXHJcbiAgICAgICAgdG9rZW4udXNlcl9pZCA9IHVzZXIudXNlcl9pZDsgIFxyXG4gICAgICAgIHRva2VuLnVzZXJfZW1haWwgPSB1c2VyLnVzZXJfZW1haWw7IFxyXG4gICAgICAgIHRva2VuLnRpbWUgPSB1c2VyLnRpbWU7XHJcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAvLyBNYWtlIGFsbCBmaWVsZHMgYXZhaWxhYmxlIGluIHRoZSBzZXNzaW9uXHJcbiAgICAgIHNlc3Npb24udXNlci51c2VyX3N0YXR1cyA9IHRva2VuLnVzZXJfc3RhdHVzOyBcclxuICAgICAgc2Vzc2lvbi51c2VyLnVzZXJfaWQgPSB0b2tlbi51c2VyX2lkO1xyXG4gICAgICBzZXNzaW9uLnVzZXIudXNlcl9lbWFpbCA9IHRva2VuLnVzZXJfZW1haWw7IFxyXG4gICAgICBzZXNzaW9uLnVzZXIudGltZSA9IHRva2VuLnRpbWU7XHJcbiAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZTsgIFxyXG5cclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9OyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJhdXRoZW50aWNhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsImxvZ2luIiwidXNlcl9zdGF0dXMiLCJ1c2VyX2lkIiwiaWQiLCJ0aW1lIiwidXNlcl9lbWFpbCIsInJvbGUiLCJlcnJvciIsImNvbnNvbGUiLCJyZWdpc3RlclVzZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImxhYmVsIiwidHlwZSIsImlzU2lnblVwIiwiYXV0aG9yaXplIiwidXNlciIsIkVycm9yIiwiZGVidWciLCJwYWdlcyIsInNpZ25JbiIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwibG9nIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5C91738%5CDesktop%5Cchatenai-nextjs-app-route%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91738%5CDesktop%5Cchatenai-nextjs-app-route&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();