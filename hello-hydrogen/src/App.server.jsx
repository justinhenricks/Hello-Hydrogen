import React from "react";
import renderHydrogen from "@shopify/hydrogen/entry-server";
import {
  Router,
  FileRoutes,
  ShopifyProvider,
  LocalizationProvider,
  CartProvider,
} from "@shopify/hydrogen";
import { Suspense } from "react";

function App({routes}) {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <LocalizationProvider>
          <CartProvider>
            <Router>
              <FileRoutes routes={routes} />
            </Router>
          </CartProvider>
        </LocalizationProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
