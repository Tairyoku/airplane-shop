import { useState, useMemo } from "react";

export const useSortPlanes = (planes = []) => {
    const [isDescSort, setIsDescSort] = useState(false)

    const sortedPlanes = useMemo(() => {
        const sortablePlanes = [...planes]

        sortablePlanes.sort((curr, next) => { 
            if (+curr.price < +next.price) return isDescSort ? 1 : -1
            if (+curr.price > +next.price) return isDescSort ? -1 : 1

            return 0
        })
        return sortablePlanes
    },[isDescSort, planes])

    return {
        isDescSort,
        setIsDescSort,
        sortedPlanes
    }
}