import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";

export default [ {
    files: ["**/*.js", "**/*.mjs"],
    ...js.configs.recommended,
}, {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
        globals: {
            ...globals.browser,
            browser: "readonly",
            chrome: "readonly",
            vAPI: "readonly",
        },
        sourceType: "module",
    },
    rules: {
        eqeqeq: ["warn", "always"],
        indent: ["error", 4, {
            ignoredNodes: [
                "Program > BlockStatement",
                "Program > ExpressionStatement > CallExpression > ArrowFunctionExpression > BlockStatement",
                "Program > ExpressionStatement > CallExpression > FunctionExpression > BlockStatement",
                "Program > IfStatement > BlockStatement",
                "Program > VariableDeclaration > VariableDeclarator > CallExpression > ArrowFunctionExpression > BlockStatement",
                "CallExpression > MemberExpression",
                "ArrayExpression > *",
                "ObjectExpression > *",
            ],
        }],

        "no-control-regex": "off",
        "no-empty": "off",
        "sort-imports": "warn",
        strict: "warn",
    },
}, {
    files: ["**/*.mjs"],
    languageOptions: { sourceType: 'module' },
}, {
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    language: "json/json",
    ...json.configs.recommended,
} ];
