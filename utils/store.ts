import { atom } from "jotai";
interface Draft {
    draft: string;
    time: string;
    platform: string;
  }
export const responseAtom = atom("");
export const platformAtom = atom("")
export const loadingAtom = atom<Boolean>(false)
export const draftAtom = atom<Draft | null>(null);