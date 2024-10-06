import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
/**
 * Task1: Add modals for country and job
 * Task2: Remove previously typed value
 * Task3: Optimise the module by creating child components to prevent repitition
 * Any changes that improve efficiency are welcome!
 */
var name_q = "Name";
var country_q = "Country";
var job_q = "Job";
var add = "Add";
var App = function () {
    var _a = useState(""), name = _a[0], setName = _a[1];
    var _b = useState(""), submittedName = _b[0], setSubmittedName = _b[1];
    var _c = useState(false), isNameModalVisible = _c[0], setNameModalVisible = _c[1];
    var onShowModal = function () {
        setNameModalVisible(true);
    };
    var onSubmit = function () {
        setSubmittedName(name);
        setNameModalVisible(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "w-[500px] border rounded m-4", children: [_jsxs("div", { className: "p-4 flex", children: [_jsxs("div", { className: "w-full", children: [_jsxs("span", { className: "w-1/2 text-sm inline-block", children: [name_q, ": "] }), _jsx("span", { className: "w-1/2 text-sm inline-block text-green-800", children: submittedName })] }), _jsx("button", { onClick: onShowModal, className: "px-3 text-sm text-green-700 border rounded border-solid border-green-600", children: add })] }), _jsxs("div", { className: "p-4 flex", children: [_jsxs("div", { className: "w-full", children: [_jsxs("span", { className: "w-1/2 text-sm inline-block", children: [country_q, ": "] }), _jsx("span", { className: "w-1/2 text-sm inline-block", children: "*Country space holder*" })] }), _jsx("button", { className: "px-3 text-sm text-green-700 border rounded border-solid border-green-600", children: add })] }), _jsxs("div", { className: "p-4 flex", children: [_jsxs("div", { className: "w-full", children: [_jsxs("span", { className: "w-1/2 text-sm inline-block", children: [job_q, ": "] }), _jsx("span", { className: "w-1/2 text-sm inline-block", children: "*Job space holder*" })] }), _jsx("button", { className: "px-3 text-sm text-green-700 border rounded border-solid border-green-600", children: add })] })] }), isNameModalVisible ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "w-[500px] bg-gray-100 grid rounded fixed top-1/4 left-1/4 z-30", children: [_jsxs("div", { className: "flex bg-green-600 rounded-t", children: [_jsx("div", { className: "w-11/12", children: _jsx("p", { className: "py-1 text-sm text-center text-white", children: "Please add your name" }) }), _jsx("div", { className: "w-1/12 flex justify-end pr-3", children: _jsx("button", { onClick: function () { return setNameModalVisible(false); }, className: "bg-green-600 buttonr-2 text-white", children: "X" }) })] }), _jsxs("div", { className: "flex justify-center py-10", children: [_jsx("input", { value: name, onChange: function (e) {
                                            return setName(e.target.value);
                                        }, className: "mr-4 pb-1 border-solid border-gray-200 border" }), _jsx("button", { onClick: function () { return onSubmit(); }, className: "px-3 text-sm text-white border rounded border-solid bg-green-600 py-1", children: "submit" })] })] }), _jsx("div", { className: "bg-gray-500 fixed inset-0 z-20 bg-opacity-50" })] })) : null] }));
};
export default App;
