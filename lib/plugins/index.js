const n = {
  EasyTable: "@pqcqcqc/qc-components/lib/easy-table",
  ManagePage: "@pqcqcqc/qc-components/lib/manage-page",
  DynamicForm: "@pqcqcqc/qc-components/lib/dynamic-form"
}, o = (c) => c in n ? {
  as: c,
  from: n[c]
} : null, e = (c) => o;
export {
  e as QcComponentsResolver
};
