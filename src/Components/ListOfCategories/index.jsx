import React from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import { useGetData } from "../../Hooks/useGetData";
import { useSetShowFixed } from "../../Hooks/useSetScroll";

const renderList = (categories, fixed, loading) => (
    <List fixed={fixed} categories={categories}>
        {!loading ? (
            categories.map(({ id, cover, name, emoji, path }) => (
                <Item key={id}>
                    <Category cover={cover} emoji={emoji} path={path} />
                </Item>
            ))
        ) : (
            <Item key="loading">
                <Category />
            </Item>
        )}
    </List>
);

export const ListOfCategories = () => {
    const { categories, loading } = useGetData();
    const { showFixed } = useSetShowFixed();
    return (
        <>
            {renderList(categories, false, loading)}{" "}
            {showFixed && renderList(categories, true)}
        </>
    );
};
