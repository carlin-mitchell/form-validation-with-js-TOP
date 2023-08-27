import "./styles/index.scss";
import Content from "./components/Content/Content";
import { applyInitialState } from "./page-logic/ui/ui-initial-state";

document.body.appendChild(Content());

applyInitialState();

// debugging
const debugging = true;
if (debugging) {
  //
}
