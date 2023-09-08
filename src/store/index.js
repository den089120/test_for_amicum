import pinia from './pinia'
import { useGlobalStore } from "@/store/GlobalStore";

const GlobalStore = useGlobalStore(pinia)

export {
    GlobalStore,
    pinia
}
