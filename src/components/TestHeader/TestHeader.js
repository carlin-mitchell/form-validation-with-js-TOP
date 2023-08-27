import Icon from "../base-elements/Icon";
import Element from "../Element";

const sharedClasses = " font-lg";
const pencil = Icon("icon-pencil text-black rotate-180" + sharedClasses);
const github = Icon(
  "icon-github-cat text-red rotate-180 font-xxxxl" + sharedClasses
);
const hamburger = Icon("icon-hamburger-menu text-green" + sharedClasses);
const plus = Icon("icon-plus-sign text-purple" + sharedClasses);
const x = Icon("icon-plus-sign text-gray-dark-9 rotate-45" + sharedClasses);
const upArrow = Icon(
  "icon-up-arrow text-gray-dark-9 rotate-180" + sharedClasses
);
const triangle = Icon(
  "icon-triangle text-gray-dark-9 rotate-315" + sharedClasses
);

const pause = Icon("icon-pause text-gray-dark-9" + sharedClasses);

const TestHeader = (content) => {
  const h1 = Element(
    "h1",
    {
      className: "test-header container text-primary bg-info p-1 mb-1 bw-2 br",
      innerText: `${content}`,
    },
    // children
    [pencil, github, hamburger, plus, x, upArrow, triangle, pause]
  );

  return h1;
};

export default TestHeader;
