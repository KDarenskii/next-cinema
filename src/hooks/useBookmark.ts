import { addBookmark, removeBookmark } from "@/store/bookmarks/bookmarksSlice";
import { selectBookmarkById } from "@/store/bookmarks/selectors";

import { TMotion } from "@/types/motion.type";

import useTypedDispatch from "./useTypedDispatch";
import useTypedSelector from "./useTypedSelector";

const useBookmark = (motion: TMotion) => {
    const dispatch = useTypedDispatch();

    const bookmark = useTypedSelector((state) =>
        selectBookmarkById(state, motion.id),
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
