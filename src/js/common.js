//-----elements-----
export const counter = _.template(
  require(`./../html/elements/counter.html`).default,
);

//----blocks-----
export const textBlock = _.template(
  require('./../html/blocks/text-block.html').default,
);

export const notificationBlock = _.template(
  require('./../html/blocks/notification-block.html').default,
);

export const counterBlock = _.template(
  require('./../html/blocks/counter-block.html').default,
);

//----layers-----
export const mainLayer = _.template(
  require('./../html/layers/main-layer.html').default,
);
