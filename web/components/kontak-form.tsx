"use client";
import React from "react";
import { useActionState } from "react";
import { ContactMessage } from "@/lib/action";

const KontakForm = () => {
  const [state, FromAction] = useActionState(ContactMessage, null);
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      {state?.message ? (
        <div className="p-4 mb text-sm text-gray-900 rounded-lg bg-amber-600" role="alert"> 
        </div>
      ):null}
      <form action={FromAction}>
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <div>
            <input type="text" name="name" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Name" />

            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <div>
            <input type="email" name="email" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Name" />

            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.email}</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <div>
            <input type="text" name="subject" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Name" />

            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.subject}</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <div className="md:col-span-2">
            <input type="text" name="Subject" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Subject*" />

            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.message}</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <div className="md:col-span-2">
            <textarea name="message" rows={5} className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Tuliskan pesan/kesan disini...*"></textarea>

            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">message</p>
            </div>
          </div>
        </div>
        <button type="submit" className="px-10 py-4 text-center font-semibold text-white w-full bg-orange-400 rounded-sm hover:bg-orange-500 cursor-pointer"></button>
      </form>
    </div>
  );
};

export default KontakForm;
