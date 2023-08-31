import { debounce } from "../../utils";
import { loadEventHandler } from "../../components/CustomizedErrorMessageWithJs/example-without-constraint-validation-api/logic";

const breakPoints = {
  xs: 0,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1200,
};

export function applyWindowListeners() {
  window.onresize = debounce(function (e) {});
  window.onload = loadEventHandler;
}
