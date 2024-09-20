import { createRoot } from "react-dom/client";
import { App } from "./pages/components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const root = document.getElementById("root");
if (!root) throw new Error("root not found");
const client = new QueryClient();

const index = createRoot(root);
index.render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);
