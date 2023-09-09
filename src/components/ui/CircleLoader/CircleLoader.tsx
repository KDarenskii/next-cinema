import React, { CSSProperties, FC } from "react";

import cn from "clsx";
import ClipLoader from "react-spinners/ClipLoader";
import { LoaderSizeProps } from "react-spinners/helpers/props";

const override: CSSProperties = {
    borderWidth: "3px",
};

interface Props extends LoaderSizeProps {
    className?: string;
}

const CircleLoader: FC<Props> = ({ className, size = 30, ...rest }) => {
    return (
        <div className={cn("circle-loader", className)}>
            <ClipLoader
                {...rest}
                cssOverride={override}
                color="#3a3a88"
                size={size}
            />
        </div>
    );
};

export default CircleLoader;
