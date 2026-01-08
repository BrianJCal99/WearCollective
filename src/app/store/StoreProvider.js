'use client';
import { useRef, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import store from "@/app/store/store";
import { Provider } from "react-redux";
import { fetchUser } from "@/app/features/user/userSlice";
import { fetchItems } from "@/app/features/items/itemsSlice";

export default function StoreProvider({ children }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      store.dispatch(fetchUser());
      store.dispatch(fetchItems());
      initialized.current = true;
    }
  }, []);

  return (
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </Provider>
  );
}
