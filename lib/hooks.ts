import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RooteState, AppDispatch } from "./store";

type DispatchFunction = () => AppDispatch;
export const useAppDispatch: DispatchFunction = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RooteState> = useSelector;