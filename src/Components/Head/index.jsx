import React from "react";
import { Helmet } from "react-helmet";

export const DocumentHead = ({
    title = "Title not found",
    name = "default",
    content = "content default",
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name={name} content={content}></meta>
        </Helmet>
    );
};
