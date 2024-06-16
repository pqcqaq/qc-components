import { c as e } from "./styleChecker-DdDg1L8e.js";
function r(a, s, t) {
  return e({
    [`${a}-status-success`]: s === "success",
    [`${a}-status-warning`]: s === "warning",
    [`${a}-status-error`]: s === "error",
    [`${a}-status-validating`]: s === "validating",
    [`${a}-has-feedback`]: t
  });
}
const c = (a, s) => s || a;
export {
  c as a,
  r as g
};
