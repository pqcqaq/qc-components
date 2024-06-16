import { g as n, m as t, _ as e, r as a, a as l, K as d } from "./styleChecker-DxpCOgAe.js";
const s = new d("antCheckboxEffect", {
  "0%": {
    transform: "scale(1)",
    opacity: 0.5
  },
  "100%": {
    transform: "scale(1.6)",
    opacity: 0
  }
}), c = (r) => {
  const {
    checkboxCls: o
  } = r, i = `${o}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${o}-group`]: e(e({}, a(r)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: r.marginXS,
        // Group > Grid
        [`> ${r.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [i]: e(e({}, a(r)), {
        display: "inline-flex",
        alignItems: "baseline",
        cursor: "pointer",
        // Fix checkbox & radio in flex align #30260
        "&:after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: "'\\a0'"
        },
        // Checkbox near checkbox
        [`& + ${i}`]: {
          marginInlineStart: 0
        },
        [`&${i}-in-form-item`]: {
          'input[type="checkbox"]': {
            width: 14,
            height: 14
            // FIXME: magic
          }
        }
      }),
      // Wrapper > Checkbox
      [o]: e(e({}, a(r)), {
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 1,
        cursor: "pointer",
        // To make alignment right when `controlHeight` is changed
        // Ref: https://github.com/ant-design/ant-design/issues/41564
        alignSelf: "center",
        // Wrapper > Checkbox > input
        [`${o}-input`]: {
          position: "absolute",
          // Since baseline align will get additional space offset,
          // we need to move input to top to make it align with text.
          // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${o}-inner`]: e({}, l(r))
        },
        // Wrapper > Checkbox > inner
        [`${o}-inner`]: {
          boxSizing: "border-box",
          position: "relative",
          top: 0,
          insetInlineStart: 0,
          display: "block",
          width: r.checkboxSize,
          height: r.checkboxSize,
          direction: "ltr",
          backgroundColor: r.colorBgContainer,
          border: `${r.lineWidth}px ${r.lineType} ${r.colorBorder}`,
          borderRadius: r.borderRadiusSM,
          borderCollapse: "separate",
          transition: `all ${r.motionDurationSlow}`,
          "&:after": {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            insetInlineStart: "21.5%",
            display: "table",
            width: r.checkboxSize / 14 * 5,
            height: r.checkboxSize / 14 * 8,
            border: `${r.lineWidthBold}px solid ${r.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
            opacity: 0,
            content: '""',
            transition: `all ${r.motionDurationFast} ${r.motionEaseInBack}, opacity ${r.motionDurationFast}`
          }
        },
        // Wrapper > Checkbox + Text
        "& + span": {
          paddingInlineStart: r.paddingXS,
          paddingInlineEnd: r.paddingXS
        }
      })
    },
    // ================= Indeterminate =================
    {
      [o]: {
        "&-indeterminate": {
          // Wrapper > Checkbox > inner
          [`${o}-inner`]: {
            "&:after": {
              top: "50%",
              insetInlineStart: "50%",
              width: r.fontSizeLG / 2,
              height: r.fontSizeLG / 2,
              backgroundColor: r.colorPrimary,
              border: 0,
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 1,
              content: '""'
            }
          }
        }
      }
    },
    // ===================== Hover =====================
    {
      // Wrapper
      [`${i}:hover ${o}:after`]: {
        visibility: "visible"
      },
      // Wrapper & Wrapper > Checkbox
      [`
        ${i}:not(${i}-disabled),
        ${o}:not(${o}-disabled)
      `]: {
        [`&:hover ${o}-inner`]: {
          borderColor: r.colorPrimary
        }
      },
      [`${i}:not(${i}-disabled)`]: {
        [`&:hover ${o}-checked:not(${o}-disabled) ${o}-inner`]: {
          backgroundColor: r.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${o}-checked:not(${o}-disabled):after`]: {
          borderColor: r.colorPrimaryHover
        }
      }
    },
    // ==================== Checked ====================
    {
      // Wrapper > Checkbox
      [`${o}-checked`]: {
        [`${o}-inner`]: {
          backgroundColor: r.colorPrimary,
          borderColor: r.colorPrimary,
          "&:after": {
            opacity: 1,
            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
            transition: `all ${r.motionDurationMid} ${r.motionEaseOutBack} ${r.motionDurationFast}`
          }
        },
        // Checked Effect
        "&:after": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          width: "100%",
          height: "100%",
          borderRadius: r.borderRadiusSM,
          visibility: "hidden",
          border: `${r.lineWidthBold}px solid ${r.colorPrimary}`,
          animationName: s,
          animationDuration: r.motionDurationSlow,
          animationTimingFunction: "ease-in-out",
          animationFillMode: "backwards",
          content: '""',
          transition: `all ${r.motionDurationSlow}`
        }
      },
      [`
        ${i}-checked:not(${i}-disabled),
        ${o}-checked:not(${o}-disabled)
      `]: {
        [`&:hover ${o}-inner`]: {
          backgroundColor: r.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${o}:after`]: {
          borderColor: r.colorPrimaryHover
        }
      }
    },
    // ==================== Disable ====================
    {
      // Wrapper
      [`${i}-disabled`]: {
        cursor: "not-allowed"
      },
      // Wrapper > Checkbox
      [`${o}-disabled`]: {
        // Wrapper > Checkbox > input
        [`&, ${o}-input`]: {
          cursor: "not-allowed",
          // Disabled for native input to enable Tooltip event handler
          // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
          pointerEvents: "none"
        },
        // Wrapper > Checkbox > inner
        [`${o}-inner`]: {
          background: r.colorBgContainerDisabled,
          borderColor: r.colorBorder,
          "&:after": {
            borderColor: r.colorTextDisabled
          }
        },
        "&:after": {
          display: "none"
        },
        "& + span": {
          color: r.colorTextDisabled
        },
        [`&${o}-indeterminate ${o}-inner::after`]: {
          background: r.colorTextDisabled
        }
      }
    }
  ];
};
function b(r, o) {
  const i = t(o, {
    checkboxCls: `.${r}`,
    checkboxSize: o.controlInteractiveSize
  });
  return [c(i)];
}
const $ = n("Checkbox", (r, o) => {
  let {
    prefixCls: i
  } = o;
  return [b(i, r)];
});
export {
  b as g,
  $ as u
};
