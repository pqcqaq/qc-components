import { i as S, al as x, _ as e, r as u, m as l, a3 as m } from "./index-DGUz0BTe.js";
const H = (r) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: r,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), p = (r) => ({
  borderColor: r.inputBorderHoverColor,
  borderInlineEndWidth: r.lineWidth
}), c = (r) => ({
  borderColor: r.inputBorderHoverColor,
  boxShadow: `0 0 0 ${r.controlOutlineWidth}px ${r.controlOutline}`,
  borderInlineEndWidth: r.lineWidth,
  outline: 0
}), R = (r) => ({
  color: r.colorTextDisabled,
  backgroundColor: r.colorBgContainerDisabled,
  borderColor: r.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": e({}, p(l(r, {
    inputBorderHoverColor: r.colorBorder
  })))
}), g = (r) => {
  const {
    inputPaddingVerticalLG: i,
    fontSizeLG: o,
    lineHeightLG: t,
    borderRadiusLG: d,
    inputPaddingHorizontalLG: n
  } = r;
  return {
    padding: `${i}px ${n}px`,
    fontSize: o,
    lineHeight: t,
    borderRadius: d
  };
}, h = (r) => ({
  padding: `${r.inputPaddingVerticalSM}px ${r.controlPaddingHorizontalSM - 1}px`,
  borderRadius: r.borderRadiusSM
}), $ = (r, i) => {
  const {
    componentCls: o,
    colorError: t,
    colorWarning: d,
    colorErrorOutline: n,
    colorWarningOutline: a,
    colorErrorBorderHover: s,
    colorWarningBorderHover: f
  } = r;
  return {
    [`&-status-error:not(${i}-disabled):not(${i}-borderless)${i}`]: {
      borderColor: t,
      "&:hover": {
        borderColor: s
      },
      "&:focus, &-focused": e({}, c(l(r, {
        inputBorderActiveColor: t,
        inputBorderHoverColor: t,
        controlOutline: n
      }))),
      [`${o}-prefix`]: {
        color: t
      }
    },
    [`&-status-warning:not(${i}-disabled):not(${i}-borderless)${i}`]: {
      borderColor: d,
      "&:hover": {
        borderColor: f
      },
      "&:focus, &-focused": e({}, c(l(r, {
        inputBorderActiveColor: d,
        inputBorderHoverColor: d,
        controlOutline: a
      }))),
      [`${o}-prefix`]: {
        color: d
      }
    }
  };
}, b = (r) => e(e({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${r.inputPaddingVertical}px ${r.inputPaddingHorizontal}px`,
  color: r.colorText,
  fontSize: r.fontSize,
  lineHeight: r.lineHeight,
  backgroundColor: r.colorBgContainer,
  backgroundImage: "none",
  borderWidth: r.lineWidth,
  borderStyle: r.lineType,
  borderColor: r.colorBorder,
  borderRadius: r.borderRadius,
  transition: `all ${r.motionDurationMid}`
}, H(r.colorTextPlaceholder)), {
  "&:hover": e({}, p(r)),
  "&:focus, &-focused": e({}, c(r)),
  "&-disabled, &[disabled]": e({}, R(r)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    height: "auto",
    minHeight: r.controlHeight,
    lineHeight: r.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${r.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": e({}, g(r)),
  "&-sm": e({}, h(r)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), I = (r) => {
  const {
    componentCls: i,
    antCls: o
  } = r;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: r.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${i}, &-lg > ${i}-group-addon`]: e({}, g(r)),
    [`&-sm ${i}, &-sm > ${i}-group-addon`]: e({}, h(r)),
    [`> ${i}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${i}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${r.inputPaddingHorizontal}px`,
        color: r.colorText,
        fontWeight: "normal",
        fontSize: r.fontSize,
        textAlign: "center",
        backgroundColor: r.colorFillAlter,
        border: `${r.lineWidth}px ${r.lineType} ${r.colorBorder}`,
        borderRadius: r.borderRadius,
        transition: `all ${r.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${o}-select`]: {
          margin: `-${r.inputPaddingVertical + 1}px -${r.inputPaddingHorizontal}px`,
          [`&${o}-select-single:not(${o}-select-customize-input)`]: {
            [`${o}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${r.lineWidth}px ${r.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${o}-select-selector`]: {
              color: r.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${o}-cascader-picker`]: {
          margin: `-9px -${r.inputPaddingHorizontal}px`,
          backgroundColor: "transparent",
          [`${o}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${i}`]: {
      float: "inline-start",
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${i}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${i}:first-child, ${i}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${o}-select ${o}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${i}-affix-wrapper`]: {
      [`&:not(:first-child) ${i}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${i}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${i}:last-child, ${i}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${o}-select ${o}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${i}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${i}-search &`]: {
          borderStartStartRadius: r.borderRadius,
          borderEndStartRadius: r.borderRadius
        }
      },
      [`&:not(:first-child), ${i}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${i}-group-compact`]: e(e({
      display: "block"
    }, m()), {
      [`${i}-group-addon, ${i}-group-wrap, > ${i}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: r.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        borderRadius: 0
      },
      [`& > ${i}-affix-wrapper`]: {
        display: "inline-flex"
      },
      [`& > ${o}-picker-range`]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: -r.lineWidth,
        borderInlineEndWidth: r.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${i}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${o}-select > ${o}-select-selector,
      & > ${o}-select-auto-complete ${i},
      & > ${o}-cascader-picker ${i},
      & > ${i}-group-wrapper ${i}`]: {
        borderInlineEndWidth: r.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${o}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${o}-select > ${o}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${o}-select:first-child > ${o}-select-selector,
      & > ${o}-select-auto-complete:first-child ${i},
      & > ${o}-cascader-picker:first-child ${i}`]: {
        borderStartStartRadius: r.borderRadius,
        borderEndStartRadius: r.borderRadius
      },
      [`& > *:last-child,
      & > ${o}-select:last-child > ${o}-select-selector,
      & > ${o}-cascader-picker:last-child ${i},
      & > ${o}-cascader-picker-focused:last-child ${i}`]: {
        borderInlineEndWidth: r.lineWidth,
        borderStartEndRadius: r.borderRadius,
        borderEndEndRadius: r.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${o}-select-auto-complete ${i}`]: {
        verticalAlign: "top"
      },
      [`${i}-group-wrapper + ${i}-group-wrapper`]: {
        marginInlineStart: -r.lineWidth,
        [`${i}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${i}-group-wrapper:not(:last-child)`]: {
        [`&${i}-search > ${i}-group`]: {
          [`& > ${i}-group-addon > ${i}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${i}`]: {
            borderStartStartRadius: r.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: r.borderRadius
          }
        }
      }
    }),
    [`&&-sm ${o}-btn`]: {
      fontSize: r.fontSizeSM,
      height: r.controlHeightSM,
      lineHeight: "normal"
    },
    [`&&-lg ${o}-btn`]: {
      fontSize: r.fontSizeLG,
      height: r.controlHeightLG,
      lineHeight: "normal"
    },
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&&-lg ${o}-select-single ${o}-select-selector`]: {
      height: `${r.controlHeightLG}px`,
      [`${o}-select-selection-item, ${o}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${r.controlHeightLG - 2}px`
      },
      [`${o}-select-selection-search-input`]: {
        height: `${r.controlHeightLG}px`
      }
    },
    [`&&-sm ${o}-select-single ${o}-select-selector`]: {
      height: `${r.controlHeightSM}px`,
      [`${o}-select-selection-item, ${o}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${r.controlHeightSM - 2}px`
      },
      [`${o}-select-selection-search-input`]: {
        height: `${r.controlHeightSM}px`
      }
    }
  };
}, E = (r) => {
  const {
    componentCls: i,
    controlHeightSM: o,
    lineWidth: t
  } = r, n = (o - t * 2 - 16) / 2;
  return {
    [i]: e(e(e(e({}, u(r)), b(r)), $(r, i)), {
      '&[type="color"]': {
        height: r.controlHeight,
        [`&${i}-lg`]: {
          height: r.controlHeightLG
        },
        [`&${i}-sm`]: {
          height: o,
          paddingTop: n,
          paddingBottom: n
        }
      }
    })
  };
}, v = (r) => {
  const {
    componentCls: i
  } = r;
  return {
    // ========================= Input =========================
    [`${i}-clear-icon`]: {
      margin: 0,
      color: r.colorTextQuaternary,
      fontSize: r.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${r.motionDurationSlow}`,
      "&:hover": {
        color: r.colorTextTertiary
      },
      "&:active": {
        color: r.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${r.inputAffixPadding}px`
      }
    },
    // ======================= TextArea ========================
    "&-textarea-with-clear-btn": {
      padding: "0 !important",
      border: "0 !important",
      [`${i}-clear-icon`]: {
        position: "absolute",
        insetBlockStart: r.paddingXS,
        insetInlineEnd: r.paddingXS,
        zIndex: 1
      }
    }
  };
}, w = (r) => {
  const {
    componentCls: i,
    inputAffixPadding: o,
    colorTextDescription: t,
    motionDurationSlow: d,
    colorIcon: n,
    colorIconHover: a,
    iconCls: s
  } = r;
  return {
    [`${i}-affix-wrapper`]: e(e(e(e(e({}, b(r)), {
      display: "inline-flex",
      [`&:not(${i}-affix-wrapper-disabled):hover`]: e(e({}, p(r)), {
        zIndex: 1,
        [`${i}-search-with-button &`]: {
          zIndex: 0
        }
      }),
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${i}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${i}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${i}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: r.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: t
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: r.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: o
        },
        "&-suffix": {
          marginInlineStart: o
        }
      }
    }), v(r)), {
      // password
      [`${s}${i}-password-icon`]: {
        color: n,
        cursor: "pointer",
        transition: `all ${d}`,
        "&:hover": {
          color: a
        }
      }
    }), $(r, `${i}-affix-wrapper`))
  };
}, y = (r) => {
  const {
    componentCls: i,
    colorError: o,
    colorSuccess: t,
    borderRadiusLG: d,
    borderRadiusSM: n
  } = r;
  return {
    [`${i}-group`]: e(e(e({}, u(r)), I(r)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${i}-group-addon`]: {
            borderRadius: d
          }
        },
        "&-sm": {
          [`${i}-group-addon`]: {
            borderRadius: n
          }
        },
        // Status
        "&-status-error": {
          [`${i}-group-addon`]: {
            color: o,
            borderColor: o
          }
        },
        "&-status-warning": {
          [`${i}-group-addon:last-child`]: {
            color: t,
            borderColor: t
          }
        }
      }
    })
  };
}, z = (r) => {
  const {
    componentCls: i,
    antCls: o
  } = r, t = `${i}-search`;
  return {
    [t]: {
      [`${i}`]: {
        "&:hover, &:focus": {
          borderColor: r.colorPrimaryHover,
          [`+ ${i}-group-addon ${t}-button:not(${o}-btn-primary)`]: {
            borderInlineStartColor: r.colorPrimaryHover
          }
        }
      },
      [`${i}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${i}-lg`]: {
        lineHeight: r.lineHeightLG - 2e-4
      },
      [`> ${i}-group`]: {
        [`> ${i}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${t}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: r.borderRadius,
            borderEndEndRadius: r.borderRadius,
            borderEndStartRadius: 0
          },
          [`${t}-button:not(${o}-btn-primary)`]: {
            color: r.colorTextDescription,
            "&:hover": {
              color: r.colorPrimaryHover
            },
            "&:active": {
              color: r.colorPrimaryActive
            },
            [`&${o}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${t}-button`]: {
        height: r.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${t}-button`]: {
        height: r.controlHeightLG
      },
      [`&-small ${t}-button`]: {
        height: r.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${i}-compact-item`]: {
        [`&:not(${i}-compact-last-item)`]: {
          [`${i}-group-addon`]: {
            [`${i}-search-button`]: {
              marginInlineEnd: -r.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${i}-compact-first-item)`]: {
          [`${i},${i}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${i}-group-addon ${i}-search-button,
        > ${i},
        ${i}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${i}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
function C(r) {
  return l(r, {
    inputAffixPadding: r.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((r.controlHeight - r.fontSize * r.lineHeight) / 2 * 10) / 10 - r.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((r.controlHeightLG - r.fontSizeLG * r.lineHeightLG) / 2 * 10) / 10 - r.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((r.controlHeightSM - r.fontSize * r.lineHeight) / 2 * 10) / 10 - r.lineWidth, 0),
    inputPaddingHorizontal: r.paddingSM - r.lineWidth,
    inputPaddingHorizontalSM: r.paddingXS - r.lineWidth,
    inputPaddingHorizontalLG: r.controlPaddingHorizontal - r.lineWidth,
    inputBorderHoverColor: r.colorPrimaryHover,
    inputBorderActiveColor: r.colorPrimaryHover
  });
}
const W = (r) => {
  const {
    componentCls: i,
    inputPaddingHorizontal: o,
    paddingLG: t
  } = r, d = `${i}-textarea`;
  return {
    [d]: {
      position: "relative",
      [`${d}-suffix`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: o,
        bottom: 0,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        margin: "auto"
      },
      "&-status-error,\n        &-status-warning,\n        &-status-success,\n        &-status-validating": {
        [`&${d}-has-feedback`]: {
          [`${i}`]: {
            paddingInlineEnd: t
          }
        }
      },
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${i}`]: {
          height: "100%"
        },
        "&::after": {
          color: r.colorTextDescription,
          whiteSpace: "nowrap",
          content: "attr(data-count)",
          pointerEvents: "none",
          float: "right"
        }
      },
      "&-rtl": {
        "&::after": {
          float: "left"
        }
      }
    }
  };
}, B = S("Input", (r) => {
  const i = C(r);
  return [
    E(i),
    W(i),
    w(i),
    y(i),
    z(i),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    x(i)
  ];
});
export {
  p as a,
  b,
  $ as c,
  R as d,
  H as e,
  I as f,
  c as g,
  C as i,
  B as u
};
