/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import {
  addItem,
  removeItem,
  updateQuantity,
} from "@/app/features/cart/cartSlice";
import React from "react";
import Link from "next/link";

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  ); // Access cart state from Redux

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCheckout = (e, totalQuantity) => {
    if (totalQuantity === 0) {
      e.preventDefault();
    } else {
      router.push("/checkout");
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {totalQuantity === 0 ? (
                <div className="text-sm font-light">
                  Your cart is empty. Add items to checkout.
                </div>
              ) : (
                items.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <div className="size-24 shrink-0 overflow-hidden">
                        <img
                          alt={product.image.alt}
                          src={product.image.src}
                          className="size-full object-cover"
                        />
                      </div>

                      <label htmlFor="counter-input" className="sr-only">
                        Choose quantity:
                      </label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: product.id,
                                  quantity: product.quantity - 1,
                                })
                              )
                            }
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                          >
                            -
                          </button>
                          <p className="px-4">{product.quantity}</p>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: product.id,
                                  quantity: product.quantity + 1,
                                })
                              )
                            }
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-2 md:order-2 md:max-w-md">
                        <Link
                          href="#"
                          className="text-base font-medium text-gray-900 hover:underline"
                        >
                          {product.name}
                        </Link>
                        <p className="text-sm text-gray-500">
                          Color: {product.color}
                        </p>
                        <p className="text-sm text-gray-500">
                          Size: {product.size}
                        </p>

                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                            onClick={() => dispatch(removeItem(product.id))}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-gray-900">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${totalPrice.toFixed(2)}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt className="text-base font-bold text-gray-900">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900">
                    ${totalPrice.toFixed(2)}
                  </dd>
                </dl>
              </div>

              <Link
                href="/checkout"
                className={`flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white
                ${totalQuantity > 0
                    ? "bg-blue-700 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                  }`}
                onClick={(e) => handleCheckout(e, totalQuantity)}
              >
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500">
                  {" "}
                  or{" "}
                </span>
                <Link
                  href="/products"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
