import { shallowRef as o, watchEffect as r } from "vue";
function s(t) {
  const e = o();
  return r(() => {
    e.value = t();
  }, {
    flush: "sync"
    // needed so updates are immediate.
  }), e;
}
export {
  s as e
};
