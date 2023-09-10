import { addBookmark, removeBookmark } from "@/store/bookmarks/bookmarksSlice";
import { selectBookmark } from "@/store/bookmarks/selectors";

import { TMotion } from "@/types/motion.interface";

import useTypedDispatch from "./useTypedDispatch";
import useTypedSelector from "./useTypedSelector";

const useBookmark = (motion: TMotion) => {
    const dispatch = useTypedDispatch();

    const bookmark = useTypedSelector((state) =>
        selectBookmark(state, motion.id),
    );

    const toggleBookmark = () => {
        if (bookmark) {
            dispatch(removeBookmark(motion.id));
        } else {
            dispatch(addBookmark(motion));
        }
    };

    return {
        bookmark,
        isBookmarked: bookmark !== null,
        toggleBookmark,
    };
};

export default useBookmark;
