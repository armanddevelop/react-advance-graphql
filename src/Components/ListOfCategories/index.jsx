import React from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

import { useGetData } from "../../Hooks/useGetData";

export const ListOfCategories = () => {
    const { categories } = useGetData();
    return (
        <List>
            {categories.map(({ id, cover, name, emoji, path }) => (
                <Item key={id}>
                    <Category cover={cover} emoji={emoji} path={path} />
                </Item>
            ))}
        </List>
    );
};
