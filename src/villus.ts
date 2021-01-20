import { createClient, handleSubscriptions, defaultPlugins } from "villus";
import { SubscriptionClient } from "subscriptions-transport-ws";

const subscriptionClient = new SubscriptionClient(`ws://${window.location.host}/api/graphql`, {
  reconnect: true,
});

export const villus = createClient({
  url: "/api/graphql",
  use: [
    handleSubscriptions((operation) => subscriptionClient.request(operation)),
   ...defaultPlugins(),
  ],
});
