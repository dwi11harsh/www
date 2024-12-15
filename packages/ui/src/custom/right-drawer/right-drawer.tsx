"use client";

import { DrawerStateAtom } from "@repo/ui/store";
import { useAtomValue, useSetAtom } from "jotai";

export const RightDrawer = () => {
  const drawerState = useAtomValue(DrawerStateAtom);
  const setDrawerState = useSetAtom(DrawerStateAtom);

  return (
    <main
      className={
        "z-[100] fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (drawerState
          ? "transition-opacity opacity-100 duration-500 translate-x-0 "
          : "transition-all delay-500 opacity-0 translate-x-full ")
      }
    >
      <section
        className={
          "sm:w-1/3  w-1/2 right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (drawerState ? "translate-x-0 " : "translate-x-full ")
        }
      >
        <article className="relative w-screen pb-10 bg-gray-200 dark:bg-slate-700 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="w-64 sm:w-full flex flex-col">
            <MoreInformationTablet />
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setDrawerState(false);
        }}
      />
    </main>
  );
};

const MoreInformationTablet = () => {
  return <>More Information Tablet</>;
};
