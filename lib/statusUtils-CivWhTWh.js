import { g as e } from "./index-DELjRDde.js";
function r(a, s, t) {
  return e({
    [`${a}-status-success`]: s === "success",
    [`${a}-status-warning`]: s === "warning",
    [`${a}-status-error`]: s === "error",
    [`${a}-status-validating`]: s === "validating",
    [`${a}-has-feedback`]: t
  });
}
const g = (a, s) => s || a;
export {
  r as a,
  g
};
